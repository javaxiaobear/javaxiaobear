---
title: 2、CRUD扩展
---
#### Insert

```java
//    测试插入
    @Test
    public void testInsert(){
        User user = new User();
        user.setName("小熊");
        user.setAge(18);
        user.setEmail("2861184805@qq.com");
        int insert = userMapper.insert(user); //自动生成id
        System.out.println(insert);
        System.out.println(user);
    }
}
```

结果

![image-20200414130350839](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200414130350839.png)

> **数据库插入的id默认值为：全局唯一的id**

#### [主键生成策略](https://blog.csdn.net/u013068377/article/details/78993475)

#### 雪花算法：Twitter 利用 zookeeper 实现了一个全局ID生成的服务 Snowflake：[github.com/twitter/sno…](https://github.com/twitter/snowflake)：

snowflake是Twitter开源的分布式ID生成算法，结果是一个long型的ID。其核心思想是：使用41bit作为毫秒数，10bit作为机器的ID（5个bit是数据中心，5个bit的机器ID），12bit作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID），最后还有一个符号位，永远是0

![img](https://user-gold-cdn.xitu.io/2018/7/2/1645b1a7a9beb2b6?imageslim)

> 主键自增

我们配置主键自增

- 实体类字段上加上@TableId(type = IdType.AUTO)

- 数据库字段上一定要自增

![image-20200414132153485](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200414132153485.png)

- 再次测试即可

```java
public enum IdType {
    AUTO(0),  //数据库id自增
    NONE(1),  //未设置主键
    INPUT(2), //手动输入
    ASSIGN_ID(3),  //默认全局id
    ASSIGN_UUID(4), //全局唯一id
   
    @Deprecated
    ID_WORKER(3),

    @Deprecated
    ID_WORKER_STR(3), //ID_WORKER字符串表示法

    @Deprecated
    UUID(4);
    private final int key;
    private IdType(int key) {
        this.key = key;}
    public int getKey() {
        return this.key;}
}
```

#### update

```java
 @Test
    public void testupdate(){
        //通过条件自动拼接动态sql
        User user = new User();
        user.setId(6L);
        user.setName("你是最棒的");
        int i = userMapper.updateById(user);  //updateById参数是一个对象
        System.out.println(i);
    }
}
```

![image-20200414133719235](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200414133719235.png)

#### 自动填充

> 数据库级别（工作中不使用）

1、在表中字段增加create_time、update_time

![image-20200414134437994](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200414134437994.png)

2、通过测试插入方法

```java
private Date createTime;
private Date updateTime;
```

3、查看结果

![image-20200414134824719](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200414134824719.png)



> 代码级别

1、实体类属性上增加注解

```java
@TableField(fill = FieldFill.INSERT)
private Date createTime;
@TableField(fill = FieldFill.INSERT_UPDATE)
private Date updateTime;
```

2、实现元对象处理器接口：com.baomidou.mybatisplus.core.handlers.MetaObjectHandler

自定义实现类 MyMetaObjectHandler

```java
@Component  //加入到IOC容器里
@Slf4j
public class MyMetaObjectHandler implements MetaObjectHandler {
    @Override
    public void insertFill(MetaObject metaObject) {
        log.info("start insert fill ....");
        this.setFieldValByName("createTime",new Date(),metaObject);
        this.setFieldValByName("updateTime",new Date(),metaObject);
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        log.info("start update fill ....");
        this.setFieldValByName("updateTime",new Date(),metaObject);
    }
}

```

3、测试插入，观察时间

#### 乐观锁

> 十分乐观，它总是认为不会出现问题，无论干什么都不上锁，如果出现了问题，再次更新值测试！

乐观锁实现方式：

- 取出记录时，获取当前version
- 更新时，带上这个version
- 执行更新时， set version = newVersion where version = oldVersion
- 如果version不对，就更新失败

1、给数据库新增字段verison，默认值为1

2、实体类新增字段

```java
@Version //乐观锁注解
private Integer version;
```

3、注册插件

```java
@Configuration
@MapperScan("com.xiaobear.mapper")
public class MybatisPlusConfig {
    //注册乐观锁插件
    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor() {
        return new OptimisticLockerInterceptor();
    }
}
```

4、测试

```java
@Test
public void testOptimisticLocker(){
    //查询用户信息
    User user = userMapper.selectById(1L);
    //修改信息
    user.setName("xiaobear");
    user.setAge(2);
    //执行
    int update = userMapper.updateById(user);
    System.out.println(update);

}
//测试失败
@Test
public void testOptimisticLocker2(){
    User user = userMapper.selectById(1L);
    user.setName("xiaobear");
    user.setAge(2);
    User user2 = userMapper.selectById(1L);
    user2.setName("xiaobear111");
    user2.setAge(10);
    //模拟另一个线程进行插队操作
    int update = userMapper.updateById(user);
    int update2 = userMapper.updateById(user2);
    System.out.println(update);
    System.out.println(update2);
}
```

#### 悲观锁

> 十分悲观，它总是认为会出现问题，无论干什么都会上锁，再去操作！

#### 查询操作

```java
 //单个查询
    @Test
    public void testSelect(){
        User user = userMapper.selectById(2L);
        System.out.println(user);

    }

    //批量查询
    @Test
    public void testSelectByBatchId(){
        List<User> users = userMapper.selectBatchIds(Arrays.asList(1, 2, 3));
        users.forEach(System.out::println);
    }

    //条件查询map
    @Test
    public void testSelectByBatchIds(){
        HashMap<String, Object> map = new HashMap<>();
        map.put("name","xiaobear");
        List<User> users = userMapper.selectByMap(map);
        users.forEach(System.out::println);

    }
```

#### 分页查询

> 分页插件

```java
  //分页插件
    @Bean
    public PaginationInterceptor paginationInterceptor() {
          return new PaginationInterceptor();
       /* PaginationInterceptor paginationInterceptor = new PaginationInterceptor();
        // 设置请求的页面大于最大页后操作， true调回到首页，false 继续请求  默认false
        // paginationInterceptor.setOverflow(false);
        // 设置最大单页限制数量，默认 500 条，-1 不受限制
        // paginationInterceptor.setLimit(500);
        // 开启 count 的 join 优化,只针对部分 left join
        paginationInterceptor.setCountSqlParser(new JsqlParserCountOptimize(true));
        return paginationInterceptor;*/
    }
```

测试

```java
//测试分页插件
@Test
public void testPage(){
    //参数一：当前页 参数二：页面大小
    Page<User> page = new Page<>(1,5);
    userMapper.selectPage(page,null);
    page.getRecords().forEach(System.out::println);
    System.out.println(page.getTotal());
}
```

#### 删除操作

```java
//测试删除
@Test
public void deleteById(){
    int i = userMapper.deleteById(1L);
    System.out.println(i);
}
//测试id批量删除
@Test
public void deleteById2(){
    userMapper.deleteBatchIds(Arrays.asList(1L,2L,3L));
}

//通过map删除
@Test
public void testDeleteMap(){
    HashMap<String, Object> map = new HashMap<>();
    map.put("name","小熊");
    userMapper.deleteByMap(map);
}
```

#### 逻辑删除

> 物理删除：从数据库中直接删除
>
> 逻辑删除：在数据库没有移除，而是通过一个变量来让他失效！防止数据丢失，类似回收站

数据库添加字段，实体类上加上字段

```java
@TableLogic
private Integer deleted;
```

测试删除、查询
