---
title: 7、分页
---
### 7.1、limit分页

**sql语句分页**

1. 接口

   ```java
   //分页
   List<User> getUserByLimit(Map<String, Object> map);
   ```

2. mapper映射文件

   ```xml
   <!--    //分页-->
   <select id="getUserByLimit" parameterType="map" resultMap="UserMap">
       select * from mybatis.user limit #{startIndex},#{pageSize}
   </select>
   ```

3. 测试

   ```java
   //分页
   @Test
   public void getUserByLimit(){
       SqlSession sqlSession = MybatisUtils.getSqlSession();
       UserMapper mapper = sqlSession.getMapper(UserMapper.class);
       HashMap<String, Object> map = new HashMap<String, Object>();
       map.put("startIndex",0);
       map.put("pageSize",2);
       List<User> userList = mapper.getUserByLimit(map);
       for (User user : userList) {
           System.out.println(user);
       }
       sqlSession.close();
   }
   ```

### 7.2、RowBounds分页

```java
//分页2
List<User> getUserByRowBounds();
```

```xml
<!--分页2-->
<select id="getUserByRowBounds" resultMap="UserMap">
    select * from mybatis.user
</select>
```

```java
//分页2
@Test
public void getUserByRowBounds(){
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    RowBounds rowBounds = new RowBounds(1, 2);
    List<User> userList = sqlSession.selectList("com.yan.dao.UserMapper.getUserByRowBounds",null,rowBounds);

    for (User user : userList) {
        System.out.println(user);
    }
    sqlSession.close();
}
```

### 7.3、分页插件-PageHelper

官方文档：https://github.com/pagehelper/Mybatis-PageHelper/blob/master/README_zh.md







### 7.4、使用注解开发

1. 注解在接口上实现

   ```java
    @Select("select * from mybatis.user")
       List<User> getUsers();
   ```

2. 在核心配置文件中绑定接口

   ```xml
   <!--    绑定接口-->
   <mappers>
       <mapper class="yan.dao.UserMapper"/>
   </mappers>
   ```

3. 测试

```java
@Test
public void test(){
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    UserMapper mapper = sqlSession.getMapper(UserMapper.class);
    List<User> users = mapper.getUsers();
    for (User user : users) {
        System.out.println(user);
    }
    sqlSession.close();
}
```

本质：反射机制实现

底层：动态代理

#### **CURD**

1. 开启自动提交事务

   ```java
   public static SqlSession getSqlSession(){
       //自动提交事务
       return sqlSessionFactory.openSession(true);
   }
   ```

2. 注解在接口上

```java
@Select("select * from mybatis.user where id = #{id}")
User getUserById(@Param("id") int id);

@Insert("insert into user(id,name,pwd) value (#{id},#{name},#{password})")
int addUser(User user);

@Update("update user set name=#{name},pwd=#{password} where id = #{id}")
int updateUser(User user);

@Delete("delete from mybatis.user where id = #{id}")
int deleteUser(@Param("id") int id);
```
