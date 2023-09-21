---
title: 1、简介
---
### 1.1、MyBatis 历史

- MyBatis是Apache 的一个开源项目iBatis, 2010 年6 月这个项目由Apache Software Foundation 迁移到了

  Google Code，随着开发团队转投Google Code 旗下， iBatis3.x正式更名为MyBatis ，代码于2013 年11 月

  迁移到Github

- iBatis 一词来源于“internet”和“abatis”的组合，是一个基于Java 的持久层框架。iBatis提供的持久层框架包括

  SQL Maps 和Data Access Objects（DAO）

### 1.2、简介

- MyBatis 是支持定制化SQL、存储过程以及高级映射的优秀的**持久层框架**
- MyBatis 避免了几乎所有的JDBC 代码和手动设置参数以及获取结果集
- MyBatis 可以使用简单的XML 或注解用于配置和原始映射，将接口和Java 的POJO（Plain Old Java Objects，普通的Java 对象）映射成数据库中的记录

```xml
Maven仓库
<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.2</version>
</dependency>
```

### 1.3、为什么使用Mybatis---现有持久化技术的对比

#### 1.3.1、JDBC

- SQL 夹在Java 代码块里，耦合度高导致硬编码内伤
- 维护不易且实际开发需求中sql 是有变化，频繁修改的情况多见

#### 1.3.2、Hibernate 和JPA

- 长难复杂SQL，对于Hibernate 而言处理也不容易
- 内部自动生产的SQL，不容易做特殊优化
- 基于全映射的全自动框架，大量字段的POJO 进行部分映射时比较困难。导致数据
- 库性能下降

#### 1.3.3、MyBatis

- 对开发人员而言，核心sql 还是需要自己优化
- sql 和java 编码分开，功能边界清晰，一个专注业务、一个专注数据
