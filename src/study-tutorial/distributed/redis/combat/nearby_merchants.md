---
title: 6、附近商户
---
### 1、GEO数据结构

> GEO就是Geolocation的简写形式，代表地理坐标。Redis在3.2版本中加入了对GEO的支持，允许存储地理坐标信息，帮助我们根据经纬度来检索数据。

常见的命令有：

- `GEOADD`：添加一个地理空间信息，包含：经度（longitude）、纬度（latitude）、值（member）
- `GEODIST`：计算指定的两个点之间的距离并返回
- `GEOHASH`：将指定member的坐标转为hash字符串形式并返回
- `GEOPOS`：返回指定member的坐标
- `GEORADIUS`：指定圆心、半径，找到该圆内包含的所有member，并按照与圆心之间的距离排序后返回。6.2以后已废弃
- `GEOSEARCH`：在指定范围内搜索member，并按照与指定点之间的距离排序后返回。范围可以是圆形或矩形。6.2.新功能
- `GEOSEARCHSTORE`：与GEOSEARCH功能一致，不过可以把结果存储到一个指定的key。 6.2.新功能



#### 1、练习Redis的GEO功能

1、添加下面几条数据：

- 北京南站（ 116.378248 39.865275 ）
- 北京站（ 116.42803 39.903738 ）
- 北京西站（ 116.322287 39.893729 ）

```
localhost:0>GEOADD g1 116.378248 39.865275 bjn 116.42803 39.903738 bjz 116.322287 39.893729 bjx
"3"
```



2、计算北京西站到北京站的距离

```
localhost:0>GEODIST g1 bjn bjx km
"5.7300"
localhost:0>GEODIST g1 bjz bjx km
"9.0916"
```



3、搜索天安门（ 116.397904 39.909005 ）附近10km内的所有火车站，并按照距离升序排序

```
# 6.2版本之前
localhost:0>GEORADIUS g1 116.397904 39.909005 10 km WITHDIST
1) 1) "bjz"
   2) "2.6361"

2) 1) "bjn"
   2) "5.1452"

3) 1) "bjx"
   2) "6.6723"

#6.2之后的版本
localhost:0>GEOSEARCH g1 FROMLONLAT 116.397904 39.909005 BYRADIUS 10 km WITHDIST
1) 1) "bjz"
   2) "2.6361"

2) 1) "bjn"
   2) "5.1452"

3) 1) "bjx"
   2) "6.6723"
```



#### 2、测试类导入redis

```java
/**
     * 店铺数据导入redis
     */
@Test
public void loadShopData(){
    //获取商户列表
    List<Shop> list = shopService.list();
    //根据类型进行分组
    Map<Long, List<Shop>> map = list.stream().collect(Collectors.groupingBy(Shop::getTypeId));
    for (Map.Entry<Long, List<Shop>> entry : map.entrySet()) {
        //获取类型ID
        Long typeId = entry.getKey();
        String key = "shop:geo:" + typeId;
        //获取相同店铺类型的集合
        List<Shop> value = entry.getValue();
        ArrayList<RedisGeoCommands.GeoLocation<String>> locations = new ArrayList<>(value.size());
        //写入redis GEOADD key 经度 纬度 member
        for (Shop shop : value) {
            locations.add(new RedisGeoCommands.GeoLocation<>(
                shop.getId().toString(),
                new Point(shop.getX(), shop.getY())
            ));
        }
        stringRedisTemplate.opsForGeo().add(key, locations);
    }
}
```



### 2、附近商户搜索

按照商户类型做分组，类型相同的商户作为同一组，以typeId为key存入同一个GEO集合中即可

![image-20220616114933992](../../../images/image-20220616114933992.png)

SpringDataRedis的2.3.9版本并不支持Redis 6.2提供的GEOSEARCH命令，因此我们需要提示其版本，修改自己的POM文件，内容如

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
    <!--排除旧版本-->
    <exclusions>
        <exclusion>
            <artifactId>lettuce-core</artifactId>
            <groupId>io.lettuce</groupId>
        </exclusion>
        <exclusion>
            <artifactId>spring-data-redis</artifactId>
            <groupId>org.springframework.data</groupId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-redis</artifactId>
    <version>2.6.4</version>
</dependency>
<dependency>
    <groupId>io.lettuce</groupId>
    <artifactId>lettuce-core</artifactId>
    <version>6.1.8.RELEASE</version>
</dependency>
```

代码实现

```java
@Override
public Result queryShopByType(Integer typeId, Integer current, Double x, Double y) {
    //是否需要根据坐标查询
    if (null == x || null == y) {
        // 根据类型分页查询
        Page<Shop> page = query()
            .eq("type_id", typeId)
            .page(new Page<>(current, SystemConstants.DEFAULT_PAGE_SIZE));
        // 返回数据
        return Result.ok(page.getRecords());
    }
    //计算分页参数
    int from = (current - 1) * SystemConstants.DEFAULT_PAGE_SIZE;
    int end = current * SystemConstants.MAX_PAGE_SIZE;
    //查询redis，按照距离，分页
    String key = RedisConstants.SHOP_GEO_KEY + typeId;
    GeoResults<RedisGeoCommands.GeoLocation<String>> results = stringRedisTemplate.opsForGeo()
        .search(
        key,
        GeoReference.fromCoordinate(x, y),
        new Distance(5000),
        RedisGeoCommands.GeoSearchCommandArgs.newGeoSearchArgs().includeDistance().limit(end)
    );
    //解析出id
    if (null == results) {
        return Result.ok();
    }
    List<GeoResult<RedisGeoCommands.GeoLocation<String>>> list = results.getContent();
    if (list.size() < from){
        return Result.ok();
    }
    //截取from - end 的部分
    List<Long> ids = new ArrayList<>(list.size());
    HashMap<String, Distance> map = new HashMap<>(list.size());
    list.stream().skip(from).forEach(item ->{
        //获取店铺ID
        String name = item.getContent().getName();
        ids.add(Long.valueOf(name));
        //获取距离
        Distance distance = item.getDistance();
        map.put(name, distance);
    });
    //根据id查询shop
    String join = StrUtil.join(",", ids);
    List<Shop> shopList = query().in("id", ids).last("order by filed(id," + join + ")").list();
    for (Shop shop : shopList) {
        shop.setDistance(map.get(shop.getId().toString()).getValue());
    }
    return Result.ok(shopList);
}
```
