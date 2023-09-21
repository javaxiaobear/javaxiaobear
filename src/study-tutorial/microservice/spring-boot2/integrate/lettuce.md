---
title: 5、lettuce（Redis）
---
- 现建项目

- 导入依赖

  ```xml
  <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-redis -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-data-redis</artifactId>
              <version>2.2.6.RELEASE</version>
          </dependency>
          <!-- https://mvnrepository.com/artifact/org.apache.commons/commons-pool2 -->
          <dependency>
              <groupId>org.apache.commons</groupId>
              <artifactId>commons-pool2</artifactId>
              <version>2.8.0</version>
          </dependency>
  ```

- 重写RedisTemplate模板

  ```java
  @Configuration
  public class RedisConfig extends JCacheConfigurerSupport {
  
      @Bean
      public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
          RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
          redisTemplate.setConnectionFactory(redisConnectionFactory);
          // 使用Jackson2JsonRedisSerialize 替换默认序列化
          Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
  
          ObjectMapper objectMapper = new ObjectMapper();
          objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
          objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
  
          jackson2JsonRedisSerializer.setObjectMapper(objectMapper);
          // 设置value的序列化规则和 key的序列化规则
          redisTemplate.setKeySerializer(new StringRedisSerializer());
          //hash的value序列化采用jackson2
          redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);
          redisTemplate.afterPropertiesSet();
          return redisTemplate;
      }
  }
  ```

- User实体类

  ```java
  @Data
  public class User implements Serializable {
      private String id;
      private String name;
      private Integer age;
      
      public static String getKeyName(){
          return "user";
      }
  }
  ```

- UserService实现接口

  ```java
  public interface UserService {
      /*
       * Redis String
       * 用户输入一个key
       * 先判断有无该数据
       * 有则查询，无则在mysql中查询并返回
       * */
      public String getString(String key);
  
      public void expireStr(String key,String value);
  
      public User selectById(String id); //根据id查询
  }
  ```

- UserServiceImpl实现类

  ```java
  @Service
  @Slf4j
  public class UserServiceImpl implements UserService{
  
      @Autowired
      private RedisTemplate<String,Object> redisTemplate;
      /*
      *测试String类型
      * */
      @Override
      public String getString(String key) {
          if(redisTemplate.hasKey(key)){
              log.info("redis中查询数据！");
            return (String) redisTemplate.opsForValue().get(key);
          }else {
              String val = "redisTemplate学习lettuce客户端";
              log.info("MYSQL中查询数据！"+val);
              redisTemplate.opsForValue().set(key,val);
              log.info("存入redis中");
              return val;
          }
      }
      @Override
      public void expireStr(String key, String value) {
          redisTemplate.opsForValue().set(key, value);
          redisTemplate.expire(key,2, TimeUnit.HOURS);//设置key的时间
      }
  
      //测试hash类型
      @Override
      public User selectById(String id) {
          // redisTemplate.hasKey(key);
          if (redisTemplate.opsForHash().hasKey(KeyNameUtil.USER,id)) {
              return (User) redisTemplate.opsForHash().get("user",id);
          }else {
              log.info("查询MYSQL数据库！！！");
              User user = new User();
              user.setId("1");
              user.setName("yhx");
              user.setAge(18);
              //.put()用户实体user 主键id 整个对象
              redisTemplate.opsForHash().put(User.getKeyName(),id,user);
              return user;
          }
      }
    /*
      * 问题1：出现了很多的字符串->提取出来
      * ->1.声明一个工具类 
      *->2.在实体bean，声明一个方法
      * 问题2：强制类型转换问题
      * 问题3： redisTemplate.opsForHash()写很长一串
      * @Resource(name = "redisTemplate")
      * private RedisTemplate<String,String> redis;
      * */
  }
  ```

- KeyNameUtil工具类

  ```java
  public interface KeyNameUtil {
  
      String USER = "user";
  }
  ```

- 配置文件

  ```yaml
  server:
    port: 8081
  
  spring:
    redis:
      host: 192.168.199.129
      port: 6379
      password: 密码
      lettuce:
        pool:
          max-idle: 6
          max-active: 10
          min-idle: 2
      timeout: 2000
  ```

  **Jedis与Redis的区别：**

  ![image-20200404222302849](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200404222302849.png)
