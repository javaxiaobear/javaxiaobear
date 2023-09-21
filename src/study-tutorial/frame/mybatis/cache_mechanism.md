---
title: 10、缓存机制
---
- MyBatis 包含一个非常强大的查询缓存特性,它可以非常方便地配置和定制。缓存可以极大的提升查询效率

- MyBatis 系统中默认定义了两级缓存：一级缓存   二级缓存

- 默认情况下，只有**一级缓存（SqlSession 级别的缓存，也称为本地缓存）开启**。

- **二级缓存**需要手动开启和配置，他是**基于namespace 级别的缓存**。

- 为了提高扩展性。MyBatis 定义了缓存接口Cache。我们可以通过实现Cache 接口来自定义二级缓存

### 10.1、一级缓存

**一级缓存失效的几种情况**

- 不同的SqlSession 对应不同的一级缓存
- 同一个SqlSession 但是查询条件不同
- 同一个SqlSession 两次查询期间执行了任何一次增删改操作
- 同一个SqlSession 两次查询期间手动清空了缓存

### 10.2、二级缓存

- MyBatis 提供二级缓存的接口以及实现，缓存实现要求POJO 实现Serializable 接口

- 二级缓存==**在SqlSession 关闭或提交之后才会生效**==

- 二级缓存使用的步骤:

  1、全局配置文件中开启二级缓存

  ```xml
  <setting name="cacheEnabled" value="true"/>
  ```

  2、需要使用二级缓存的映射文件处使用cache 配置缓存

  ```xml
  <cache />
  ```

  3、注意：POJO 需要实现Serializable 接口

**二级缓存相关的属性**

-  eviction=“FIFO”：缓存回收策略：


​		LRU – 最近最少使用的：移除最长时间不被使用的对象。

​		FIFO – 先进先出：按对象进入缓存的顺序来移除它们。

​		SOFT – 软引用：移除基于垃圾回收器状态和软引用规则的对象。

​		WEAK – 弱引用：更积极地移除基于垃圾收集器状态和弱引用规则的对象。==**默认的是LRU。**==

- flushInterval：刷新间隔，单位毫秒默认情况是不设置，也就是没有刷新间隔，缓存仅仅调用语句时刷新


- size：引用数目，正整数  代表缓存最多可以存储多少个对象，太大容易导致内存溢出

- readOnly：只读，true/false

    - true：只读缓存；会给所有调用者返回缓存对象的相同实例。因此这些对象不能被修改。这提供了很重要

      的性能优势。

    - false：读写缓存；会返回缓存对象的拷贝（通过序列化）。这会慢一些，但是安全，因此默认是false。

```xml
<!--在当前mapper使用二级缓存-->
    <cache
            eviction="FIFO"
            flushInterval="60000"
            size="512"
            readOnly="true"/>
```

### 10.3、缓存的相关属性设置

1. 全局setting 的cacheEnable：配置二级缓存的开关，一级缓存一直是打开的。

2. select 标签的useCache 属性：配置这个select 是否使用二级缓存。一级缓存一直是使用的

3. sql 标签的flushCache 属性：增删改默认flushCache=true。**sql 执行以后，会同时清空一级和二级缓存**。查

   询默认flushCache=false。

4. **sqlSession.clearCache()：只是用来清除一级缓存。**

### 10.4、自定义缓存--EhCache

**EhCache** 是一个纯Java 的进程内缓存框架，具有快速、精干等特点，是Hibernate 中默认的CacheProvider

1. 导入依赖

   ```xml
   <!-- https://mvnrepository.com/artifact/org.mybatis.caches/mybatis-ehcache -->
   <dependency>
       <groupId>org.mybatis.caches</groupId>
       <artifactId>mybatis-ehcache</artifactId>
       <version>1.2.0</version>
   </dependency>
   ```

2. 编写ehcache.xml 配置文件

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="http://ehcache.org/ehcache.xsd">
       <!-- 磁盘保存路径-->
       <diskStore path="D:\360MoveData\Users\Administrator\Desktop\ehcache" />
       <defaultCache
                     maxElementsInMemory="1000"
                     maxElementsOnDisk="10000000"
                     eternal="false"
                     overflowToDisk="true"
                     timeToIdleSeconds="120"
                     timeToLiveSeconds="120"
                     diskExpiryThreadIntervalSeconds="120"
                     memoryStoreEvictionPolicy="LRU">
       </defaultCache>
   </ehcache>
   <!--
           属性说明：
            diskStore：指定数据在磁盘中的存储位置。
            defaultCache：当借助CacheManager.add("demoCache")创建Cache时，EhCache
           便会采用<defalutCache/>指定的的管理策略
           以下属性是必须的：
            maxElementsInMemory - 在内存中缓存的element的最大数目
            maxElementsOnDisk - 在磁盘上缓存的element的最大数目，若是0表示无穷大
            eternal - 设定缓存的elements是否永远不过期。如果为true，则缓存的数据始
           终有效，如果为false那么还要根据timeToIdleSeconds，timeToLiveSeconds判断
            overflowToDisk - 设定当内存缓存溢出的时候是否将过期的element缓存到磁
           盘上
           以下属性是可选的：
            timeToIdleSeconds - 当缓存在EhCache中的数据前后两次访问的时间超过
           timeToIdleSeconds的属性取值时，这些数据便会删除，默认值是0,也就是可闲置
           时间无穷大
            timeToLiveSeconds - 缓存element的有效生命期，默认是0.,也就是element存活
           时间无穷大
           diskSpoolBufferSizeMB 这个参数设置DiskStore(磁盘缓存)的缓存区大小.默认
           是30MB.每个Cache都应该有自己的一个缓冲区.
            diskPersistent - 在VM重启的时候是否启用磁盘保存EhCache中的数据，默认是
           false。
            diskExpiryThreadIntervalSeconds - 磁盘缓存的清理线程运行间隔，默认是120
           秒。每个120s，相应的线程会进行一次EhCache中数据的清理工作
            memoryStoreEvictionPolicy - 当内存缓存达到最大，有新的element加入的时
           候， 移除缓存中element的策略。默认是LRU（最近最少使用），可选的有LFU
           （最不常使用）和FIFO（先进先出）
           -->
   ```

3. 配置cache 标签

```xml
  <cache type="org.mybatis.caches.ehcache.EhcacheCache"/>
```

