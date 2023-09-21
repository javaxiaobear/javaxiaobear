---
title: 6、日志
---

Mybatis 的内置日志工厂提供日志功能，内置日志工厂将日志交给以下其中一种工具作代理：

- SLF4J

- Apache Commons Logging

- Log4j 2

- Log4j

- JDK logging

  ```xml
  <!-- 标准的日志工厂实现-->
  <!--<settings>
          <setting name="logImpl" value="STDOUT_LOGGING"/>
      </settings>-->
  ```

### 6.1、log4j

```xml
<dependencies>
    <!-- https://mvnrepository.com/artifact/log4j/log4j -->
    <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.17</version>
    </dependency>
</dependencies>
```

![image-20200220171923866](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200220171923866.png)

```java
public class UserMapperTest {

    static  Logger log = Logger.getLogger(String.valueOf(UserMapperTest.class));

    @Test
    public void Test() {
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        try {
            //方式一：Mapper接口:获取Mapper接口的代理实现类对象
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
            User user =  userMapper.getUserById(1);
            /*方式二
        List<User> userList = sqlSession.selectList("com.yan.dao.UserMapper.getUserList");
*/
            System.out.println(user);
        } finally {
            sqlSession.close();
        }
    }

    @Test
    public void testLog4j(){
        log.info("info:进入了log4j方法");
        log.fine("fine:进入了log4j方法");
    }
```
