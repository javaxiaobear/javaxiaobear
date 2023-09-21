---
title: 5、解决属性名跟字段名不一致的问题
---
### 5.1、resultMap 自定义映射

- ResultMap 的设计思想是，对于简单的语句根本不需要配置显式的结果映射，而对于复杂一点的语句只需要

  描述它们的关系就行了。

1) 、自定义resultMap，实现高级结果集映射

2) 、id ：用于完成主键值的映射

3) 、result ：用于完成普通列的映射

4) 、association ：一个复杂的类型关联;许多结果将包成这种类型

5) 、collection ： 复杂类型的集

![image-20200220162318480](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200220162318480.png)

```xml
<resultMap id="UserMap" type="User">
    <result property="id" column="id"/>
    <result property="name" column="name"/>
    <result property="password" column="pwd"/>
</resultMap>

<select id="getUserById" parameterType="int" resultMap="UserMap">
    select * from mybatis.user where id = #{id}
</select>
```
