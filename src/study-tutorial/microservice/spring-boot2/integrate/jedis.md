---
title: 4、Jedis
---
- 导入依赖

  ```xml
  <!-- https://mvnrepository.com/artifact/redis.clients/jedis -->
          <dependency>
              <groupId>redis.clients</groupId>
              <artifactId>jedis</artifactId>
              <version>3.2.0</version>
          </dependency>
  ```

- JedisConfig配置类

  ```java
  @Configuration  //相当于XML
  public class JedisConfig {
  
      /** logger */
      private  Logger LOGGER = LoggerFactory.getLogger(JedisConfig.class);
  
      @Value("${spring.redis.host}")
      private String host;
      @Value("${spring.redis.port}")
      private int port;
      @Value("${spring.redis.password}")
      private String password;
      @Value("${spring.redis.timeout}")
      private int timeout;
      @Value("${spring.redis.jedis.pool.max-active}")
      private int maxActive;
      @Value("${spring.redis.jedis.pool.max-idle}")
      private int maxIdle;
      @Value("${spring.redis.jedis.pool.min-idle}")
      private int minIdle;
  
      @Bean
      public JedisPool jedisPool(){
          JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
          jedisPoolConfig.setMaxIdle(maxIdle);
          jedisPoolConfig.setMinIdle(minIdle);
          jedisPoolConfig.setMaxTotal(maxActive);
          JedisPool jedisPool = new JedisPool(jedisPoolConfig,host,port,timeout,password);
          LOGGER.info("JedisPool连接成功！！！"+host+"\t"+port);
          return jedisPool;
      }
  }
  ```

- User类

  ```java
  @Data
  public class User implements Serializable {
      private String id;
      private String name;
      private Integer age;
  }
  ```

- UserService

  ```java
  public interface UserService {
      /*
      * Redis String
      * 用户输入一个key
      * 先判断有无该数据
      * 有则查询，无则在mysql中查询并返回
      *
      * */
  
      public String getString(String key);
  
      public void expireStr(String key,String value);
  
      public User selectById(String id);
  }
  ```

- UserServiceImpl

  ```java
  @Component
  @Log  //  <-> private  Logger LOGGER = LoggerFactory.getLogger(JedisConfig.class);
  public class UserServiceImpl implements UserService {
  
      @Autowired
      private JedisPool jedisPool;
      @Autowired
      private JedisUtil jedisUtil;
      /*redis中有什么命令<->Jedis中有什么方法
       * Redis String
       * 用户输入一个key
       * 先判断有无该数据
       * 有则查询，无则在mysql中查询并返回
       *
       * */
      @Override
      public String getString(String key) {
          String val =null;
          Jedis resource = jedisPool.getResource();
          //判断是否存在
          if (resource.exists(key)){
              log.info("查询redis中的数据");
              val=resource.get(key);
          }else {
              val="yhxlovelwh";
              log.info("查询mysql中的数据"+val);
              resource.set(key, val);
          }
          //关闭连接
          resource.close();
          return val;
      }
  
      @Override
      public void expireStr(String key, String value) {
              Jedis jedis = jedisUtil.getJedis();
              jedis.set(key, value);
              jedis.expire(key,20);
              log.info(key+"\t 设置值"+value+"\t"+20);
              jedisUtil.close(jedis);
      }
  
  
      @Override
      public User selectById(String id){
          String key = "user:"+id;
          //得到jedis对象
          User user = new User();
          Jedis jedis = jedisUtil.getJedis();
          //实现业务逻辑判断
          if (jedis.exists(key)){
              log.info("查询的是redis的数据！");
              Map<String, String> map = jedis.hgetAll(key);
              user.setId(map.get("id"));
              user.setName(map.get("name"));
              user.setAge(Integer.parseInt(map.get("age")));
          }else {
              user.setId("10");
              user.setName("lwh");
              user.setAge(18);
              log.info("查询的是mysql的数据！");
              Map<String, String> map = new HashMap<>();
              map.put("id",user.getId());
              map.put("name",user.getName());
              map.put("age",user.getAge()+"");
              log.info("在redis中存取数据！");
              jedis.hmset(key,map);
          }
  
          //关闭连接
          jedisUtil.close(jedis);
          return user;
      }
  }
  ```

- application.yml

  ```yaml
  server:
    port: 8080
  
  spring:
    redis:
      host: 192.168.199.129
      port: 6379
      password: 密码
      jedis:
        pool:
          max-idle: 6    #\u6700\u5927\u7A7A\u95F2\u6570
          max-active: 10 #\u6700\u5927\u8FDE\u63A5\u6570
          min-idle: 2    #\u6700\u5C0F\u7A7A\u95F2\u6570
      timeout: 2000      #\u8FDE\u63A5\u8D85\u65F6
  ```

- 测试类

  ```java
  @SpringBootTest
  class SpringbootJedisApplicationTests {
  
      @Autowired
      private JedisPool jedisPool;
      @Autowired
      private UserService userService;
      @Test
      void contextLoads() {
          String result = userService.getString("name");
          System.out.println(result);
      }
  
      @Test
      void Test(){
          String key="testkey";
          String val="测试";
          userService.expireStr(key,val);
      }
  
      @Test
      void Test2(){
          User user = userService.selectById("1004");
          System.out.println(user);
  
      }
  }
  ```
