---
title: 3、dubbo+zookeeper
---

#### 1、dubbo

>Apache Dubbo |ˈdʌbəʊ| 是一款高性能、轻量级的开源Java RPC框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。
>
>官网：https://dubbo.apache.org/en-us/

![image-20200331123547783](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200331123547783.png)

从github上下载dubbo-admin，解压到当前文件夹，然后命令行执行mvn clean package进行打包

#### 2、Zookeeper(动物园管理员)

![image-20200331124428849](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200331124428849.png)

>  一句话：**ZooKeeper 是一个分布式协调技术、高性能的，开源的分布式系统的协调(Coordination)服务，是 Google的 Chubby 一个开源的实现，是 Hadoop 和 Hbase 的重要组件。它是一个为分布式应用程序一致性和分布式协调技术服务的软件**

****ZooKeeper=类似Unix 文件系统+通知机制+Znode 节点****

**作用：服务注册+分布式系统的一致性通知协调**

官网：https://zookeeper.apache.org/

##### 1、统一命名服务

**统一命名服务（Name Service 如Dubbo 服务注册中心)**

Dubbo 是一个分布式服务框架，致力于提供高性能和透明化的RPC 远程服务调用方案，是阿里巴巴SOA 服务化治

理方案的核心框架，每天为2,000+个服务提供3,000,000,000+次访问量支持，并被广泛应用于阿里巴巴集团的成

员站点。

**在Dubbo 实现中：**

服务提供者在启动的时候，向ZK 上的指定节点/dubbo/${serviceName}/providers 目录下写入自己的URL 地址，

这个操作就完成了服务的发布。服务消费者启动的时候， 订阅/dubbo/${serviceName}/providers 目录下的提供

者URL 地址， 并向/dubbo/${serviceName} /consumers 目录下写入自己的URL 地址。

注意，所有向ZooKeeper 上注册的地址都是临时节点，这样就能够保证服务提供者和消费者能够自动感应资源的

变化。另外，Dubbo 还有针对服务粒度的监控，方法是订阅/dubbo/${serviceName}目录下所有提供者和消费者

的信息。

##### 2、Zookeeper安装（Windows）

从官网中下载解压

![image-20200331125329183](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200331125329183.png)

![image-20200331125422183](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200331125422183.png)

配置文件相关参数

**1、tickTime：**通信心跳数,**Zookeeper 服务器心跳时间**，单位毫秒

ZooKeeper 使用的基本时间， 服务器之间或客户端与服务器之间维持心跳的时间间隔，也就是每个tickTime 时

间就会发送一个心跳,时间单位为毫秒。

它用于心跳机制，并且设置最小的session 超时时间为两倍心跳时间.(session 的最小超时时间是2*tickTime。)

**2、initLimit：**

这个配置项是**用来配置ZooKeeper 接收Follower 客户端**（这里所说的客户端不是用户链接Zookeeper 服务

器的客户端，而是ZooKeeper 服务器集群中连接到leader 的Follower 服务器,Follower 在启动过程中，会从

Leader同步所有最新数据，然后确定自己能够对外服务的起始状态。Leader 允许Follower 在initLimit 时间内完成

这个工作）**初始化连接是最长能忍受多少个心跳的时间间隔数。**

当已经超过10 个心跳的时间（也就是tickTime）长度后Zookeeper 服务器还没有收到客户端返回的信息，那么

表明这个客户端连接失败。总的时间长度就是102000=20 秒

**3、syncLimit：**

**LF 同步通信时限。集群中Leader 与Follower 之间的最大响应时间单位**。

在运行过程中，Leader 负责与ZK 集群中所有机器进行通信，例如通过一些心跳检测机制，来检测机器的存活

状态,假如响应超过syncLimit * tickTime(假设syncLimit=5 ，请求和应答时间长度，最长不能超过多少个tickTime 的时间长度，总的时间长度就是5*2000=10 秒。)，Leader 认为Follwer 死掉，从服务器列表中删除Follwer。

**4、dataDir：**

**数据文件目录+数据持久化路径。**

保存内存数据库快照信息的位置，如果没有其他说明，更新的事务日志也保存到数据库。

**5、clientPort：**

**客户端连接端口**，监听客户端连接的端口。

**注：**

启动Zookeeper 服务之前需要先安装好Java 环境

#### 3、dubbo+zookeeper测试

启动zkServer.cmd以及执行dubbo的jar包，访问http://localhost:8080/#/，输入用户名密码root-root

![image-20200331130654548](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200331130654548.png)

#### 4、整合

1. 导入依赖

   ```java
     <!-- https://mvnrepository.com/artifact/org.apache.dubbo/dubbo-spring-boot-starter -->
           <dependency>
               <groupId>org.apache.dubbo</groupId>
               <artifactId>dubbo-spring-boot-starter</artifactId>
               <version>2.7.5</version>
           </dependency>
           <!-- https://mvnrepository.com/artifact/com.github.sgroschupf/zkclient -->
           <dependency>
               <groupId>com.github.sgroschupf</groupId>
               <artifactId>zkclient</artifactId>
               <version>0.1</version>
           </dependency>
           <!-- https://mvnrepository.com/artifact/org.apache.curator/curator-framework -->
           <dependency>
               <groupId>org.apache.curator</groupId>
               <artifactId>curator-framework</artifactId>
               <version>4.3.0</version>
           </dependency>
           <!-- https://mvnrepository.com/artifact/org.apache.curator/curator-recipes -->
           <dependency>
               <groupId>org.apache.curator</groupId>
               <artifactId>curator-recipes</artifactId>
               <version>4.3.0</version>
           </dependency>
               
           <!-- 可能会有日志冲突，排除 -->
           <dependency>
               <groupId>org.apache.zookeeper</groupId>
               <artifactId>zookeeper</artifactId>
               <version>3.6.0</version>
               <exclusions>
                   <exclusion>
                       <groupId>org.slf4j</groupId>
                       <artifactId>org.slf4j:slf4j-log4j12:1.7.30</artifactId>
                   </exclusion>
               </exclusions>
           </dependency>
   ```

2. provider-service

   ```java
   public interface TicketService {
   
       public String getTicket();
   }
   ```

   ```java
   @Service //import org.apache.dubbo.config.annotation.Service;
   @Component //使用dubbo，尽量不用service注解
   public class TicketServiceImpl implements TicketService {
       @Override
       public String getTicket() {
           return "XIAOBEAR";
       }
   }
   ```

   ```properties
   server.port=8082
   #服务应用名字
   dubbo.application.name=provider-server
   #注册中心地址
   dubbo.registry.address=zookeeper://127.0.0.1:2181
   #哪些需要被注册
   dubbo.scan.base-packages=com.xiaobear.service
   ```

3. client-service

   ```java
   @Service //放到容器中 import org.springframework.stereotype.Service;
   public class UserService {
       //去注册中心拿到Ticket
       @Reference  //pom坐标  可以定义相同的接口名
       //import org.apache.dubbo.config.annotation.Reference;
       TicketService ticketService;
       public void buyTicket() {
           String ticket = ticketService.getTicket();
           System.out.println("在注册中心拿到一张票=>"+ticket);
   
       }
   }
   ```

   ```java
   public interface TicketService {
       public String getTicket();
   }
   ```

   启动项目provider-service和client-service，访问http://localhost:8080/，success！！！

![image-20200331131518682](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200331131518682.png)

当然，这只是简单的部署，还需深入学习！！！
