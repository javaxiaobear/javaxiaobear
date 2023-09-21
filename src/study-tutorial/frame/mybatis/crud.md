---
title: 3、CURD
---
### 3.1、namespace

**namespace 中必须指定Mapper 接口的全类名**

### 3.2、select

#### 3.2.1、编写接口

```java
//根据id查询
    User getUserById(int id);
```

#### 3.2.2、编写对应的mapper中的sql语句（mapper映射文件）

```xml
<select id="getUserById" parameterType="int" resultType="com.yan.bear.User">
        select * from mybatis.user where id = #{id}
    </select>
<!--
id:namespace中的方法名
parameterType:参数类型
resultType:sql语句执行的返回值
-->
```

#### 3.2.3、测试

```java
 @Test
    public void getUserId(){
        SqlSession sqlSession =  MybatisUtils.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User userById = mapper.getUserById(1);
        System.out.println(userById);
        sqlSession.close();
    } 
```

### 3.3、insert、delete、update

1. 编写接口

   ```java
   //inset一个用户
   int addUser(User user);
   //修改用户
   int updateUser(User user);
   //删除用户
   int deleteUser(int id);
   ```

2. 编写对应的mapper中的sql语句（mapper映射文件）

   ```xml
   <insert id="addUser" parameterType="com.yan.bear.User">
       insert into mybatis.user (id, name, pwd) value (#{id},#{name},#{pwd})
   </insert>
   
   <update id="updateUser" parameterType="com.yan.bear.User">
       update mybatis.user set name = #{name},pwd = #{pwd}  where id = #{id};
   </update>
   
   <delete id="deleteUser" parameterType="com.yan.bear.User">
       delete from mybatis.user where id = #{id}
   </delete>
   ```

3. 测试

   ```java
   //增删改需要提交事务
   @Test
   public void addUser(){
       SqlSession sqlSession =  MybatisUtils.getSqlSession();
       UserMapper mapper = sqlSession.getMapper(UserMapper.class);
       int res = mapper.addUser(new User(4, "ly", "1111111"));
       if (res > 0){
           System.out.println("插入成功！");
       }
       sqlSession.commit();  //提交事务
       sqlSession.close();
   }
   
   @Test
   public void updateUser() {
       SqlSession sqlSession =  MybatisUtils.getSqlSession();
       UserMapper mapper = sqlSession.getMapper(UserMapper.class);
       int res = mapper.updateUser(new User(4,"hehhe","123123"));
       if (res > 0){
           System.out.println("修改成功！");
       }
       sqlSession.commit();  //提交事务
       sqlSession.close();
   }
   
   @Test
   public void deleteUser(){
       SqlSession sqlSession = MybatisUtils.getSqlSession();
       UserMapper mapper = sqlSession.getMapper(UserMapper.class);
       int deleteUser = mapper.deleteUser(4);
       if (deleteUser > 0){
           System.out.println("删除成功！");
       }
       sqlSession.commit();//提交事务
       sqlSession.close();
   }
   ```

### 3.4、万能Map

如果实体类或者数据库中的表、字段或者参数很多，应当考虑**Map**

```java
int addUser2(Map<String,Object> map);
```

```xml
<!--对象的属性，可以直接取出来
传递map的key
-->
<insert id="addUser" parameterType="map">
    insert into mybatis.user (id, name, pwd) value (#{userid},#{username},#{password})
</insert>
```

```java
@Test
public void addUser2(){
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    UserMapper mapper = sqlSession.getMapper(UserMapper.class);
    Map<String, Object> map = new HashMap<String, Object>();
    map.put("userid",5);
    map.put("username","hh");
    map.put("password","123456");
    mapper.addUser2(map);
    sqlSession.close();
}
```

### 3.5、模糊查询

在Java执行代码中使用通配符% %

```java
List<User> userList = mapper.getUserLike("%李%");
```

在sqlp拼接中使用通配符

```xml
<select id="getUserLike" resultType="com.yan.bear.User">
    select * from mybatis.user where name like "%"#{value}"%"
</select>
```



```java
 //模糊查询
    List<User> getUserLike(String name);
```

```xml
<select id="getUserLike" resultType="com.yan.bear.User">
    select * from mybatis.user where name like ""#{value}
</select>
```

```java
@Test
public void getUserLike(){
    SqlSession sqlSession =(SqlSession) MybatisUtils.getSqlSession();
    UserMapper mapper = sqlSession.getMapper(UserMapper.class);
    List<User> userList = mapper.getUserLike("%李%");
    for (User user : userList) {
        System.out.println(user);
    }
    sqlSession.close();
}
```
