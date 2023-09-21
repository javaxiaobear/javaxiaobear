---
title: 4、全局配置文件
---
### 4.1、properties 属性

编写一个配置文件db.properties

```properties
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/mybatis?useSSL=true&useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT
username=root
password=密码
```

```xml
<configuration>
    <properties resource="db.properties"/>
    <!--
properties: 引入外部的属性文件
resource: 从类路径下引入属性文件
url: 引入网络路径或者是磁盘路径下的属性文件
-->
```

读取配置优先级：外部配置db.properties > 内部配置.xml

### 4.2、setting 设置

![image-20200219210835860](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200219210835860.png)

```xml
<settings>
  <setting name="cacheEnabled" value="true"/>
  <setting name="lazyLoadingEnabled" value="true"/>
  <setting name="multipleResultSetsEnabled" value="true"/>
  <setting name="useColumnLabel" value="true"/>
  <setting name="useGeneratedKeys" value="false"/>
  <setting name="autoMappingBehavior" value="PARTIAL"/>
  <setting name="autoMappingUnknownColumnBehavior" value="WARNING"/>
  <setting name="defaultExecutorType" value="SIMPLE"/>
  <setting name="defaultStatementTimeout" value="25"/>
  <setting name="defaultFetchSize" value="100"/>
  <setting name="safeRowBoundsEnabled" value="false"/>
  <setting name="mapUnderscoreToCamelCase" value="false"/>
  <setting name="localCacheScope" value="SESSION"/>
  <setting name="jdbcTypeForNull" value="OTHER"/>
  <setting name="lazyLoadTriggerMethods" value="equals,clone,hashCode,toString"/>
</settings>
```

### 4.3、typeAliases 别名处理

类型别名是为 **Java 类型设置一个短的名字**。 它只和 XML 配置有关，存在的意义仅在于用来**减少类完全限定名的冗余**

```xml
<!--实体类别名-->
<typeAliases>
    <typeAlias type="com.yan.pojo.User" alias="user"/>
</typeAliases>
```

可以指定一个包，默认就是这个类的类名，首字母小写

```xml
<typeAliases>
    <package name="com.yan.pojo"/>
</typeAliases>
-----------------------------------------------------------------------------------------
<select id="getUserList" resultType="user">
    select * from mybatis.user
</select>
```

实体类较少的时候，用第一种；实体类十分多，用第二种；第一种可以DIY别名1，第二种不行

### 4.4、environments 环境配置

1. MyBatis 可以配置多种环境，比如开发、测试和生产环境需要有不同的配置
2. environment-指定具体环境     id：指定当前环境的唯一标识

```xml
<!-- 数据库连接环境的配置-->
<environments default="development">
    <environment id="development">
        <transactionManager type="JDBC"/>
        <dataSource type="POOLED">
            <property name="driver" value="${driver}"/>
            <property name="url" value="${url}"/>
            <property name="username" value="${username}"/>
            <property name="password" value="${password}"/>
        </dataSource>
    </environment>

    <environment id="test">
        <transactionManager type="JDBC"/>
        <dataSource type="POOLED">
            <property name="driver" value="${driver}"/>
            <property name="url" value="${url}"/>
            <property name="username" value="${username}"/>
            <property name="password" value="${password}"/>
        </dataSource>
    </environment>

</environments>
```

**transactionManager**

type： JDBC | MANAGED | 自定义

**JDBC（默认）**：使用了JDBC 的提交和回滚设置，依赖于从数据源得到的连接来管理事务

范围。JdbcTransactionFactory

**MANAGED**：不提交或回滚一个连接、让容器来管理事务的整个生命周期（比如JEE应用服务器的上下文）。

ManagedTransactionFactory

自定义：实现TransactionFactory 接口，type=全类名/别名

**dataSource**

type： UNPOOLED | POOLED | JNDI | 自定义

**UNPOOLED**：不使用连接池， UnpooledDataSourceFactory

**POOLED（默认）**：使用连接池， PooledDataSourceFactory

**JNDI**： 在EJB 或应用服务器这类容器中查找指定的数据源

自定义：实现DataSourceFactory 接口，定义数据源的获取方式。

### 4.5、mapper映射器

**resource** : 引入类路径下的文件

**url** : 引入网络路径或者是磁盘路径下的文件

**class** : 引入Mapper 接口.

1. 方法一：

   ```xml
   <mappers>
       <!--   <mapper resource="UserMapper.xml"/>-->
       <mapper class="com.yan.dao.UserMapper"/>
       <package name="com.yan.dao"/>
   </mappers>
   ```

2. 使用批量注册，这种方式要求SQL 映射文件名必须和接口名相同并且在同一目录下

   ```xml
   <mappers>
       <!--   <mapper resource="UserMapper.xml"/>-->
       <package name="com.yan.dao"/>
   </mappers>
   ```
