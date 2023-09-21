---
title: 9、动态SQL
---
动态SQL 是MyBatis 强大特性之一。极大的简化我们==**拼装SQL 的操作**==

动态SQL 元素和使用JSTL 或其他类似基于XML 的文本处理器相似

- **if**
- **choose (when, otherwise)**
- **trim (where, set)**
- **foreach**

### 9.1、if  where

1. **if** 用于完成简单的判断.
2. **Where** 用于解决SQL 语句中where 关键字以及条件中第一个and 或者or 的问题

```xml
<select id="queryBlogIF" resultType="com.yan.pojo.Blog">
    select * from mybatis.blog where 1=1
    <if test="title != null">
        and title = #{title}
    </if>
    <if test="author != null">
        and author = #{author}
    </if>
</select>
```

### 9.2、choose (when, otherwise)

choose 主要是用于**分支判断**，类似于**java 中的switch case**,只会满足所有分支中的一个

```xml
<select id="queryBlogIF2" resultType="com.yan.pojo.Blog">
    select * from mybatis.blog
    <where>
        <choose>
            <when test="titie != null">
                title = #{title}
            </when>
            <when test="author != null">
               AND author = #{author}
            </when>
            <otherwise>views = #{views}</otherwise>
        </choose>
    </where>
</select>
```

### 9.3、trim (where, set)

**Trim** 可以在条件判断完的SQL 语句前后**添加**或者**去掉**指定的字符

- prefix: 添加前缀
- prefixOverrides: 去掉前缀
- suffix: 添加后缀
- suffixOverrides: 去掉后缀

```xml

```

**set** 主要是用于解决修改操作中SQL 语句中可能**多出逗号**的问题

```xml
<update id="queryBlogIF3" parameterType="map">
    update mybatis.blog
    <set>
        <if test="title != null">
            and title = #{title},
        </if>
        <if test="author != null">
            and author = #{author},
        </if>
    </set>
    where id = #{id}
</update>
```

### 9.4、foreach

**主要用户循环迭代**

- collection: 要迭代的集合
- item: 当前从集合中迭代出的元素
- open: 开始字符
- close:结束字符
- separator: 元素与元素之间的分隔符
- index:   迭代的是**List 集合**: index 表示的**当前元素的下标**    迭代的**Map 集合**: index 表示的**当前元素的key**

```xml
<!-- select * from mybatis.blog where 1=1 and(id=1 or id=2 or id=3)-->
<select id="queryBlogForeach" resultType="com.yan.pojo.Blog">
    <include refid="selectsql"></include>
    <where>
        <foreach collection="ids" item="id" open="and (" close=")" separator="or">
            id = #{id}
        </foreach>
    </where>
</select>
```

### 9.5、sql

sql 标签是用于**抽取可重用的sql 片段，将相同的，使用频繁的SQL 片段抽取出来**，单独定义，方便多次引用.

**抽取sql**:

```xml
<sql id="selectsql">
    select * from mybatis.blog 
</sql>    
```

**引用sql:**

```xml
 <include refid="selectsql"></include>
```

**注意：**

- [x] 最好基于单表定义sql片段
- [x] 不要存在where标签
