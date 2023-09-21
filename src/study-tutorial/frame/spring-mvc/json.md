---
title: 9、JSON
---
目前主流的 JSON 处理工具主要有三种：

- jackson

- gson

- fastjson

  > 在 SpringMVC 中，对 jackson 和 gson 都提供了相应的支持，就是如果使用这两个作为 JSON 转换器，只需要添加对应的依赖就可以了，返回的对象和返回的集合、Map 等都会自动转为 JSON，但是，如果使用 fastjson，除了添加相应的依赖之外，还需要自己手动配置 HttpMessageConverter 转换器。其实前两个也是使用 HttpMessageConverter 转换器，但是是 SpringMVC 自动提供的，SpringMVC 没有给 fastjson 提供相应的转换器。

### 1、Jackson

jackson 是一个使用比较多，时间也比较长的 JSON 处理工具，在 SpringMVC 中使用 jackson ，只需要添加 jackson 的依赖即可：

```xml
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.11.1</version>
</dependency>
```

依赖添加成功后，凡是在接口中直接返回的对象，集合等等，都会自动转为 JSON.

- pojo类

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    private String name;
    private int age;
    private String sex;
}
```

- controller层

  ```java
  @RestController
  public class UserController {
  
      @RequestMapping(value = "/j1"/*,produces = "application/json; charset=utf-8"*/)
      public String json1() throws JsonProcessingException {
  
          ObjectMapper mapper = new ObjectMapper();
          User user = new User();
          user.setName("鄢汉雄");
          user.setAge(18);
          user.setSex("boy");
          String value = mapper.writeValueAsString(user);
          return value;
      }
      @RequestMapping("/j2")
      public String json2() throws JsonProcessingException {
          ObjectMapper objectMapper = new ObjectMapper();
          List<User> users = new ArrayList<User>();
          User user = new User("yhx", 2, "boy");
          User user1 = new User("yhx", 3, "boy");
          User user2 = new User("yhx", 4, "boy");
          User user3 = new User("yhx", 5, "boy");
          users.add(user);
          users.add(user2);
          users.add(user3);
          users.add(user1);
          String s = objectMapper.writeValueAsString(users);
          return s;
  
      }
       @RequestMapping("/j3")
      public String json3() throws JsonProcessingException {
          /**
           * 修改配置文件
            Date date = new Date();
          return date;
           */
        
          //时间格式一
          /*SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
          return objectMapper.writeValueAsString(simpleDateFormat.format(date));*/
          /**
           * 时间格式三
           */
          /*ObjectMapper objectMapper = new ObjectMapper();
          objectMapper.configure(SerializationFeature.WRITE_DATE_KEYS_AS_TIMESTAMPS,false);
          SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
          objectMapper.setDateFormat(simpleDateFormat);
          Date date = new Date();
          return objectMapper.writeValueAsString(date);*/
          Date date = new Date();
          return JsonUtils.getJson(date,"yyyy-MM-dd HH:mm:ss");
      }
  }
  ```

#### 1、json中文字符串乱码问题

1. 解决方案一，设置生成环境为UTF-8

   ```java
    @RequestMapping(value = "/j1",produces = "application/json; charset=utf-8")
   ```

2. 在`spring`配置文件中配置属性

   ```xml
   <!--处理json字符串乱码问题-->
   <mvc:annotation-driven>
       <mvc:message-converters register-defaults="true">
           <bean class="org.springframework.http.converter.StringHttpMessageConverter">
               <constructor-arg value="UTF-8"/>
           </bean>
           <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
               <property name="objectMapper">
                   <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                       <property name="failOnEmptyBeans" value="false"></property>
                   </bean>
               </property>
           </bean>
       </mvc:message-converters>
   </mvc:annotation-driven>
   ```

#### 2、json处理时间格式问题

1. 解决方案一

   ```java
   @RequestMapping("/j3")
   public String json3() throws JsonProcessingException {
       ObjectMapper objectMapper = new ObjectMapper();
       SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
       Date date = new Date();
       return objectMapper.writeValueAsString(simpleDateFormat.format(date));
   }
   ```

2. 解决方案二

   ```java
   @RequestMapping("/j3")
   public String json3() throws JsonProcessingException {
       ObjectMapper objectMapper = new ObjectMapper();   objectMapper.configure(SerializationFeature.WRITE_DATE_KEYS_AS_TIMESTAMPS,false);
       SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
       objectMapper.setDateFormat(simpleDateFormat);
       Date date = new Date();
       return objectMapper.writeValueAsString(date);
   }
   ```

3. 在spring配置文件中配置

   ```xml
   <!--json日期格式化-->
   <mvc:annotation-driven>
       <mvc:message-converters>
           <ref bean="httpMessageConverter"/>
       </mvc:message-converters>
   </mvc:annotation-driven>
   <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter" id="httpMessageConverter">
       <property name="objectMapper">
           <bean class="com.fasterxml.jackson.databind.ObjectMapper">
               <property name="dateFormat"> <bean class="java.text.SimpleDateFormat">
                   <constructor-arg name="pattern" value="yyyy-MM-dd HH:mm:ss"/>
                   </bean>
               </property>
               <property name="timeZone" value="Asia/Shanghai"/>
           </bean>
       </property>
   </bean>
   ```

   ```java
   @RequestMapping("/j3")
   public Date json3() throws JsonProcessingException {
       /**
            * 修改配置文件
            */
       Date date = new Date();
       return date;
   }
   ```

4. 针对方案二我们可以自己封装为一个工具类JsonUtils

   ```java
   public class JsonUtils {
   
       public static String getJson(Object object){
           return getJson(object,"yyyy-MM-dd HH:mm:ss");
       }
       /**
        * Json时间格式工具类
        * @param o 时间对象
        * @param dateFormat  时间格式
        * @return json格式
        */
       public static String getJson(Object o,String dateFormat){
           ObjectMapper objectMapper = new ObjectMapper();
           objectMapper.configure(SerializationFeature.WRITE_DATE_KEYS_AS_TIMESTAMPS,false);
           SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateFormat);
           objectMapper.setDateFormat(simpleDateFormat);
           try {
               return objectMapper.writeValueAsString(o);
           } catch (JsonProcessingException e) {
               e.printStackTrace();
           }
           return null;
       }
   }
   ```

   ```java
   @RequestMapping("/j3")
   public String json3() throws JsonProcessingException {
       Date date = new Date();
       return JsonUtils.getJson(date,"yyyy-MM-dd HH:mm:ss");
   }
   ```

### 2、fastjson

- 提供服务器端、安卓客户端两种解析工具，性能表现较好。
- 提供了 toJSONString() 和 parseObject() 方法来将 Java 对象与 JSON 相互转换。调用toJSONString方 法即可将对象转换成 JSON 字符串，parseObject 方法则反过来将 JSON 字符串转换成对象。
- 允许转换预先存在的无法修改的对象（只有class、无源代码）。
- Java泛型的广泛支持。
- 允许对象的自定义表示、允许自定义序列化类。
- 支持任意复杂对象（具有深厚的继承层次和广泛使用的泛型类型）。

使用 fastjson，我们首先添加 fastjson 依赖

```xml
<!-- https://mvnrepository.com/artifact/com.alibaba/fastjson -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.72</version>
</dependency>
```

在 SpringMVC 并没针对 fastjson 提供相应的 HttpMessageConverter，所以，fastjson 在使用时，一定要自己手动配置 HttpMessageConverter

```xml
<mvc:annotation-driven> 
    <mvc:message-converters> 
        <ref bean="httpMessageConverter"/> 
    </mvc:message-converters> 
</mvc:annotation-driven> 
<bean class="com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter" id="httpMessageConverter">
    <property name="fastJsonConfig">
        <bean class="com.alibaba.fastjson.support.config.FastJsonConfig"> 
            <property name="dateFormat" value="yyyy-MM-dd"/> 
        </bean> 
    </property>
</bean>
```

#### 1、fastjson 默认中文乱码

添加如下配置解决：

```xml
<mvc:annotation-driven> 
    <mvc:message-converters> 
        <ref bean="httpMessageConverter"/> 
    </mvc:message-converters> 
</mvc:annotation-driven> 
<bean class="com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter" id="httpMessageConverter">
    <property name="fastJsonConfig"> 
        <bean class="com.alibaba.fastjson.support.config.FastJsonConfig"> 
            <property name="dateFormat" value="yyyy-MM-dd"/>
        </bean> 
    </property> 
    <property name="supportedMediaTypes"> 
        <list> 
            <value>application/json;charset=utf-8</value> 
        </list> 
    </property> 
</bean>
```

#### 2、使用

```java
@RequestMapping("/j4")
public String json4() throws JsonProcessingException {
    List<User> users = new ArrayList<User>();
    User user = new User("yhx", 2, "boy");
    User user1 = new User("yhx", 3, "boy");
    User user2 = new User("yhx", 4, "boy");
    User user3 = new User("yhx", 5, "boy");
    users.add(user);
    users.add(user2);
    users.add(user3);
    users.add(user1);
    String s = JSON.toJSONString(users);
    return s;
}
```

注：访问出现500的原因：**记得把fastjson依赖导入lib中**
