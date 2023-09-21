---
title: 8、分步查询
---
### 8.1、association 关联 【多对一】

```sql
create table student
(
    id   int          not null
        primary key,
    name varchar(255) null,
    tid  int          not null,
    constraint student_ibfk_1
        foreign key (tid) references teacher (id)
);
create index tid
    on student (tid);

create table teacher
(
    id   int          not null comment 'tid'
        primary key,
    name varchar(255) null
);
```

```java
List<Student> getStudent();

List<Student> getStudent2();
```

```xml
<!--==================方式一=================-->
<select id="getStudent" resultMap="TeacherStudent">
    select * from mybatis.student
</select>
<resultMap id="TeacherStudent" type="Student">
    <result property="id" column="id"/>
    <result property="name" column="name"/>

    <association property="teacher" column="tid"
                 javaType="com.yan.pojo.Teacher" select="getTeacher"/>
</resultMap>
<select id="getTeacher" resultType="Teacher">
    select * from mybatis.teacher where id = #{id}
</select>
<!--====================方式二==================-->
<resultMap id="TeacherStudent2" type="com.yan.pojo.Student">
    <result property="id" column="sid"/>
    <result property="name" column="sname"/>
    <association property="teacher" javaType="Teacher">
        <result property="name" column="tname"/>
    </association>
</resultMap>
<select id="getStudent2" resultMap="TeacherStudent2">
    select s.id as sid, s.name as sname,t.name as tname
    from mybatis.student s, mybatis.teacher t
    where s.tid = t.id
</select>
```

association 分步查询使用延迟加载

在分步查询的基础上，可以使用延迟加载来提升查询的效率，只需要在**全局的Settings** 中进行如下的配置:

```xml
<!-- 开启延迟加载-->
<setting name="lazyLoadingEnabled" value="true"/>
<!-- 设置加载的数据是按需还是全部-->
<setting name="aggressiveLazyLoading" value="false"/>
```

### 8.2、collection 集合 【一对多】

```java
@Data
public class Teacher {
    private int id;
    private String name;

    private List<Student> students;
}
```

```java
Teacher getTeacher(@Param("tid") int id);
```

1. 按照结果嵌套处理

   ```XML
   <resultMap id="TeacherStudent" type="com.yan.pojo.Teacher">
       <result property="id" column="tid"/>
       <result property="name" column="tname"/>
       <collection property="students" ofType="Student">
           <!--property: 关联的属性名  ofType: 集合中元素的类型-->
           <result property="id" column="sid"/>
           <result property="name" column="sname"/>
           <result property="tid" column="tid"/>
       </collection>
   </resultMap>
   <select id="getTeacher" resultMap="TeacherStudent">
       select s.id sid, s.name sname, t.name tname, t.id tid
       from mybatis.student s,mybatis.teacher t
       where s.tid = t.id and t.id = #{tid}
   </select>
   ```

2. 按照查询嵌套处理

```xml
<resultMap id="TeacherStudent2" type="com.yan.pojo.Teacher">
    <collection property="students" ofType="com.yan.pojo.Student"
                select="getStudentByTeacherId" column="id">
    </collection>
</resultMap>

<select id="getStudentByTeacherId" resultType="Student">
    select * from mybatis.student where tid = #{tid}
</select>

<select id="getTeacher2" resultMap="TeacherStudent2">
    select * from mybatis.teacher where id = #{tid}
</select>
```

**扩展: association 或collection 的fetchType 属性**

1. 在`<association> `和`<collection>`标签中都可以设置fetchType，指定本次查询是否要使用延迟加载。默

   **认为fetchType=”lazy”** ,如果本次的查询**不想使用延迟加载**，则可设置为**fetchType=”eager”.**

2. fetchType 可以灵活的设置查询是否需要使用延迟加载，而不需要因为某个查询不想使用延迟加载将全局的延

   迟加载设置关闭.
