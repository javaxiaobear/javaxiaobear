---
title: 2、第一个程序
---
### 2.1、搭建数据库

### 2.2、导入依赖

```xml
<!--导入依赖-->
<dependencies>
    <!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.18</version>
    </dependency>

    <!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.5.2</version>
    </dependency>

    <!-- https://mvnrepository.com/artifact/junit/junit -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.12</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### 2.3、编写实体类

```java
public class User {
    private int id;
    private String name;
    private String pwd;
    
    public User() {
    }

    public User(int id, String name, String pwd) {
        this.id = id;
        this.name = name;
        this.pwd = pwd;
    }

    public int getId() {return id }

    public void setId(int id) this.id = id;}

   public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getPwd() {return pwd;}

    public void setPwd(String pwd) {this.pwd = pwd;}
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pwd='" + pwd + '\'' +
                '}';
    }
}
```

### 2.4、创建核心配置文件mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- 数据库连接环境的配置-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/mybatis?useSSL=true&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=GMT"/>
                <property name="username" value="root"/>
                <property name="password" value="密码"/>
            </dataSource>
        </environment>
    </environments>

<!-- 每一个mapper.xml都需要在Mybatis核心配置文件中-->
    <!-- 引入SQL映射文件,Mapper映射文件-->
    <mappers>
        <mapper resource="UserMapper.xml"/>
    </mappers>

```

### 2.5、创建Mybatis 的sql 映射文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.yan.dao.UserMapper">

    <select id="getUserList" resultType="com.yan.bear.User">
        select * from mybatis.user
    </select>
</mapper>

<!--
1 Mapper 接口与Mapper映射文件的绑定
在Mppper 映射文件中的<mapper>标签中的namespace 中必须指定Mapper 接口
的全类名
2 Mapper 映射文件中的增删改查标签的id 必须指定成Mapper 接口中的方法名.
测试中遇到的问题
-->
```

### 2.6、Mapper 接口

```java
public interface UserMapper {
    List<User> getUserList();
}
```

### 2.7、工具类

```java
public class MybatisUtils {

    public static SqlSessionFactory sqlSessionFactory;
    static {
        try {
            //获取sqlSessionFactory对象
            String resource = "mybatis-config.xml";
            InputStream inputStream = Resources.getResourceAsStream(resource);
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static SqlSession getSqlSession(){
        return sqlSessionFactory.openSession();
    }
}
```

### 2.8、测试类

```java
public class UserDaoTest {
    @Test
    public void Test(){
            SqlSession sqlSession = (SqlSession) MybatisUtils.getSqlSession();
            try{
                //方式一：Mapper接口:获取Mapper接口的代理实现类对象
                UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
                List<User> userList = userMapper.getUserList();
                //方式二
/*
        List<User> userList = sqlSession.selectList("com.yan.dao.UserMapper.getUserList");
*/
                for (User user : userList) {
                    System.out.println(user);
                }
            } finally {
                sqlSession.close();
            }
    }
}
```

![image-20200218222424596](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200218222424596.png)

### 2.9、遇到的问题

```xml
<!--资源过滤问题--> 
<build>
        <resources>
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>true</filtering>
            </resource>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>true</filtering>
            </resource>
        </resources>
    </build>

异常错误：java.sql.SQLException: The server time zone value '?й???????' is unrecognized or represents more than one time zone. You must configure either the server or JDBC driver (via the serverTimezone configuration property) to use a more specifc time zone value if you want to utilize time zone support.

显示新版本的数据库连接程序需要指定UTC时区，改正方法将配置文件中的“url”后面加上指定的时区，将其值改
 <property name="url" value="jdbc:mysql://localhost:3306/mybatis?useSSL=true&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=GMT"/>
```
