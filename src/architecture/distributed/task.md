---
title: 分布式任务调度
---

## 1、概述

### 1、任务调度场景

- 报表
- 爬虫
- 日/月结单
- 数据归档

### 2、调度框架

- 非分布式：Spring Boot自带的@Scheduled
- 分布式：`QuartZ`、`Elasticjob`、`XXL-JOB`、`阿里云的SchedulerX`、`PowerJob`



### 3、对比

| QuartZ                           | xxl-job                                  | SchedulerX 2.0                                    | PowerJob                                                   |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| CRON                             | CRON                                     | CRON、固定频率、固定延迟、OpenAPI                 | CRON、固定频率、固定延迟、OpenAPI                          |
| 内置Java                         | 内置Java、GLUE Java、Shell、Python等脚本 | 内置Java、外置Java（FatJar）、Shell、Python等脚本 | 内置Java、外置Java（容器）、Shell、Python等脚本            |
| 无                               | 静态分片                                 | MapReduce 动态分片                                | MapReduce 动态分片                                         |
| 不支持                           | 支持                                     | 支持                                              | 支持                                                       |
| 不支持                           | 支持                                     | 不支持                                            | 支持                                                       |
| 基于数据库锁，有性能瓶颈         | 基于数据库锁，有性能瓶颈                 | 不详                                              | 无锁化设计，性能强劲无上限                                 |
| 无                               | 邮件                                     | 短信                                              | 邮件，提供接口允许开发者扩展                               |
| 关系型数据库（MySQL、Oracle...） | MySQL                                    | 人民币                                            | 任意 Spring Data Jpa支持的关系型数据库（MySQL、Oracle...） |
| 不支持                           | 不支持                                   | 支持                                              | 支持                                                       |



### 4、如何选择

如何选择哪一个分布式任务调度平台

- XXL-Job和Elastic-Job都具有广泛的用户基础和完善的技术文档，都可以满足定时任务的基本功能需求
- xxl-job侧重在业务实现简单和管理方便，容易学习，失败与路由策略丰富, 推荐使用在用户基数相对较少，服务器的数量在一定的范围内的场景下使用
- elastic-job关注的点在数据，添加了弹性扩容和数据分片的思路，更方便利用分布式服务器的资源, 但是学习难度较大，推荐在数据量庞大，服务器数量多的时候使用

## 2、非分布式任务调度@Scheduled

> `@Scheduled`注解是Spring Boot提供的用于定时任务控制的注解，主要用于控制任务在某个指定时间执行，或者每隔一段时间执行，默认是在单线程中执行的

### 1、注解源码

```java
@Target({ElementType.METHOD, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Repeatable(Schedules.class)
@Reflective
public @interface Scheduled {
    String CRON_DISABLED = "-";

    String cron() default "";

    String zone() default "";

    long fixedDelay() default -1L;

    String fixedDelayString() default "";

    long fixedRate() default -1L;

    String fixedRateString() default "";

    long initialDelay() default -1L;

    String initialDelayString() default "";

    TimeUnit timeUnit() default TimeUnit.MILLISECONDS;
}
```

### 2、参数说明

|        参数        |                             说明                             | 示例          |
| :----------------: | :----------------------------------------------------------: | ------------- |
|        cron        |                     任务执行的cron表达式                     | 0/1 * * * * ? |
|        zone        | cron表达时解析使用的时区,默认为服务器的本地时区,使用java.util.TimeZone#getTimeZone(String)方法解析 | GMT-8:00      |
|     fixedDelay     |    上一次任务执行结束到下一次执行开始的间隔时间,单位为ms     | 2000          |
|  fixedDelayString  | 上一次任务执行结束到下一次执行开始的间隔时间,使用java.time.Duration#parse解析 | PT15M         |
|     fixedRate      | 以固定间隔执行任务，即上一次任务执行开始到下一次执行开始的间隔时间,单位为ms,若在调度任务执行时,上一次任务还未执行完毕,会加入worker队列,等待上一次执行完成后立即执行下一次任务 | 2000          |
|  fixedRateString   |   与fixedRate逻辑一致,只是使用java.time.Duration#parse解析   | PT15M         |
|    initialDelay    |                    首次任务执行的延迟时间                    | 2000          |
| initialDelayString |   首次任务执行的延迟时间,使用java.time.Duration#parse解析    | PT15M         |
|      timeUnit      |                                                              |               |

### 3、详解说明

#### 1、cron 参数

> 表达式格式：`@Scheduled(cron = "{秒数} {分钟} {小时} {日期} {月份} {星期}")`

注意： **cron表达式可分为6或7个占位符，但在spring自带的定时任务中，cron只支持6个参数**，若使用7个参数就会报错

```log
Caused by: java.lang.IllegalStateException: Encountered invalid @Scheduled method 'test': Cron expression must consist of 6 fields (found 7 in "*/5 * * * * * *")
```

代码示例：

```java
/**
 * cron 表达式 每隔5秒执行一次
 */
@Scheduled(cron = "*/5 * * * * *")
public void test(){
    log.info("小熊学Java是最全Java学习网站！");
}
```

结果

```
2023-06-28T15:20:40.009+08:00  INFO 10904 --- [   scheduling-1] com.javaxiaobear.job.MyScheduledJob      : 小熊学Java是最全Java学习网站！
2023-06-28T15:20:45.014+08:00  INFO 10904 --- [   scheduling-1] com.javaxiaobear.job.MyScheduledJob      : 小熊学Java是最全Java学习网站！
2023-06-28T15:20:50.004+08:00  INFO 10904 --- [   scheduling-1] com.javaxiaobear.job.MyScheduledJob      : 小熊学Java是最全Java学习网站！
2023-06-28T15:20:55.010+08:00  INFO 10904 --- [   scheduling-1] com.javaxiaobear.job.MyScheduledJob      : 小熊学Java是最全Java学习网站！
2023-06-28T15:21:00.002+08:00  INFO 10904 --- [   scheduling-1] com.javaxiaobear.job.MyScheduledJob      : 小熊学Java是最全Java学习网站！
```

更多的cron表达式，自行测试哈，这里不做过多演示

```
“30 * * * * ?” 每半分钟触发任务 
 
“30 10 * * * ?” 每小时的10分30秒触发任务 
 
“30 10 1 * * ?” 每天1点10分30秒触发任务 
 
“30 10 1 20 * ?” 每月20号1点10分30秒触发任务 
 
“30 10 1 20 10 ? *” 每年10月20号1点10分30秒触发任务 
 
“30 10 1 20 10 ? 2011” 2011年10月20号1点10分30秒触发任务 
 
“30 10 1 ? 10 * 2011” 2011年10月每天1点10分30秒触发任务 
 
“30 10 1 ? 10 SUN 2011” 2011年10月每周日1点10分30秒触发任务 
 
“15,30,45 * * * * ?” 每15秒，30秒，45秒时触发任务 
 
“15-45 * * * * ?” 15到45秒内，每秒都触发任务 
 
“15/5 * * * * ?” 每分钟的每15秒开始触发，每隔5秒触发一次 
 
“15-30/5 * * * * ?” 每分钟的15秒到30秒之间开始触发，每隔5秒触发一次 
 
“0 0/3 * * * ?” 每小时的第0分0秒开始，每三分钟触发一次 
 
“0 15 10 ? * MON-FRI” 星期一到星期五的10点15分0秒触发任务 
 
“0 15 10 L * ?” 每个月最后一天的10点15分0秒触发任务 
 
“0 15 10 LW * ?” 每个月最后一个工作日的10点15分0秒触发任务 
 
“0 15 10 ? * 5L” 每个月最后一个星期四的10点15分0秒触发任务 
 
“0 15 10 ? * 5#3” 每个月第三周的星期四的10点15分0秒触发任务
```



#### 2、fixedDelay 参数

> fixedDelay 上一次任务执行结束到下一次执行开始的间隔时间,单位为ms

代码示例：

```java
/**
 * fixedDelay 上一次任务执行结束到下一次执行开始的间隔时间,单位为ms
 * 每隔2秒执行一次
 */
@Scheduled(fixedDelay = 2000)
public void testFixedDelay (){
    log.info("小熊学Java是最全Java学习网站！");
}
```

结果展示：

![image-20230628153022010](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230628153022010.png)

#### 3、fixedRate参数

> 以固定间隔执行任务，即上一次任务执行开始到下一次执行开始的间隔时间,单位为ms,若在调度任务执行时,上一次任务还未执行完毕,会加入worker队列,等待上一次执行完成后立即执行下一次任务

```java
/**
     * 以固定间隔执行任务，即上一次任务执行开始到下一次执行开始的间隔时间,单位为ms,若
     * 在调度任务执行时,上一次任务还未执行完毕,会加入worker队列,等待上一次执行完成后立即执行下一次任务
     * 每隔2秒执行一次
     */
    @Scheduled(fixedRate = 2000)
    public void testFixedRate () throws InterruptedException {
        Thread.sleep(3000);
        log.info("小熊学Java是最全Java学习网站！");
    }
```

日志每3秒执行一次，这也是因为@Scheduled是在单线程中执行的

![image-20230629161133953](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230629161133953.png)

#### 4、initialDelay参数

> 首次任务执行的延迟时间

```java
/**
     * initialDelay  首次任务执行的延迟时间
     * 每隔2秒执行一次
     */
    @Scheduled(fixedRate = 2000, initialDelay = 3000)
    public void testInitialDelay (){
        log.info("小熊学Java是最全Java学习网站！");
    }
```

首次延迟的时间是3秒，之后每2秒执行一次

![image-20230629161513224](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230629161513224.png)



### 4、@Scheduled多线程

#### 1、场景演示


执行以下两个方法

```java
@Scheduled(fixedRate = 2000)
public void test1 () throws InterruptedException {

    Thread.sleep(3000);
    log.info("小熊学Java 是最全Java学习网站！---test1");
}
@Scheduled(fixedRate = 2000)
public void test2 () throws InterruptedException {
    Thread.sleep(3000);
    log.info("小熊学Java是最全Java学习网站！---test2");
}
```

![image-20230629162300742](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230629162300742.png)

从执行结果中可以看出，test1方法和test2方法交替输出日志，并没有同时执行

`org.springframework.scheduling.config.ScheduledTaskRegistrar`源码发现

```java
protected void scheduleTasks() {
    //如果为空，则以单线程执行
    if (this.taskScheduler == null) {
        this.localExecutor = Executors.newSingleThreadScheduledExecutor();
        this.taskScheduler = new ConcurrentTaskScheduler(this.localExecutor);
    }

    Iterator var1;
    if (this.triggerTasks != null) {
        var1 = this.triggerTasks.iterator();

        while(var1.hasNext()) {
            TriggerTask task = (TriggerTask)var1.next();
            this.addScheduledTask(this.scheduleTriggerTask(task));
        }
    }

    if (this.cronTasks != null) {
        var1 = this.cronTasks.iterator();

        while(var1.hasNext()) {
            CronTask task = (CronTask)var1.next();
            this.addScheduledTask(this.scheduleCronTask(task));
        }
    }

    IntervalTask task;
    if (this.fixedRateTasks != null) {
        var1 = this.fixedRateTasks.iterator();

        while(var1.hasNext()) {
            task = (IntervalTask)var1.next();
            if (task instanceof FixedRateTask) {
                FixedRateTask fixedRateTask = (FixedRateTask)task;
                this.addScheduledTask(this.scheduleFixedRateTask(fixedRateTask));
            } else {
                this.addScheduledTask(this.scheduleFixedRateTask(new FixedRateTask(task)));
            }
        }
    }

    if (this.fixedDelayTasks != null) {
        var1 = this.fixedDelayTasks.iterator();

        while(var1.hasNext()) {
            task = (IntervalTask)var1.next();
            if (task instanceof FixedDelayTask) {
                FixedDelayTask fixedDelayTask = (FixedDelayTask)task;
                this.addScheduledTask(this.scheduleFixedDelayTask(fixedDelayTask));
            } else {
                this.addScheduledTask(this.scheduleFixedDelayTask(new FixedDelayTask(task)));
            }
        }
    }

}
```

当未手动指定`taskScheduler`时，会通过`Executors.newSingleThreadScheduledExecutor()`创建默认的单线程线程池，且该线程池的拒绝策略为`AbortPolicy`，这种策略在线程池无可用线程时丢弃任务，并抛出异常`RejectedExecutionException`。



#### 2、多线程配置

##### 1、配置bean

在启动类中，配置bean，代码如下：

```java
/**
 * 配置线程池
 * @return
 */
@Bean
public TaskScheduler config(){
    ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
    //线程池大小为10
    taskScheduler.setPoolSize(10);
    return taskScheduler;
}
```

![image-20230629162818136](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230629162818136.png)



##### 2、配置类

```java
@Configuration
public class SchedulerConfig implements SchedulingConfigurer {
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        //Scheduler指定线程池
        taskRegistrar.setScheduler(Executors.newScheduledThreadPool(10));
    }
}
```

运行结果跟上面一样，每3秒同时执行



### 5、Async异步执行

> 异步调用指程序在顺序执行时，不等待异步调用的语句返回结果就执行后面的程序。

#### 1、简单使用

> Spring Boot的异步任务，只需在方法上添加异步注解，同时开启异步任务

```java
@Component
@Slf4j
public class AsyncTask {

    @Async
    public void test(){
        log.info("小熊学Java 是最棒的！！！");
    }
}
```

方法调用

```java
@Resource
    private AsyncTask asyncTask;

    @Scheduled(fixedRate = 2000)
    public void test1 () throws InterruptedException {
        asyncTask.test();
        Thread.sleep(3000);
        log.info("小熊学Java 是最全Java学习网站！---test1");
    }
```

结果输出

![image-20230629170457246](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230629170457246.png)



#### 2、异步失效

##### 1、异步方法和调用异步方法在同一个类中

有时候，经常看到编写异步任务，都是这样写的

```java
@Scheduled(fixedRate = 2000)
public void test1 () throws InterruptedException {
    asyncTask.test();
    Thread.sleep(3000);
    log.info("小熊学Java 是最全Java学习网站！---test1");
}

@Async
public void test(){
    log.info("小熊学Java 是最棒的！！！");
}
```

这样写是不会生效的，由于@Async的AdviceMode默认为PROXY，所以当调用方和被调用方是在同一个类中，无法产生切面，@Async没有被Spring容器管理，可以查看源码，具体详情可参考这篇：https://juejin.cn/post/6976893903223914527#heading-5



## 3、分布式任务调度QuartZ

### 1、QuartZ是什么

> Quartz是一个功能强大的开源任务调度库，几乎可以集成到任何Java应用程序中，无论是超小型的独立应用还是超大型电子商务系统。

它常用于企业级应用中：

Driving Process Workflow：当新订单下达，可以安排一个30分钟内触发的任务，检查订单状态。
System Maintenance：安排每个工作日晚上11点将数据库内容转储到文件的任务。
Providing reminder services：提供提醒服务。



### 2、Quartz入门 

#### 1、引入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

#### 2、编写任务

```java
@Slf4j
public class MyQuartzJob extends QuartzJobBean {
    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        log.info("quartz 初体验！");
    }
}
```

#### 3、quartz配置

```java
@Configuration
public class QuartzConfig {

    @Bean
    public JobDetail jobDetail(){
        return JobBuilder.newJob(MyQuartzJob.class)
                .withIdentity("job1", "group1")
                .storeDurably()
                .build();
    }

    @Bean
    public Trigger trigger(){
        return TriggerBuilder.newTrigger()
                .forJob(jobDetail())
                .withIdentity("trigger1", "group1")
                .startNow()
                .build();

    }
}
```

#### 4、运行

启动Spring Boot程序

![image-20230630134312241](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230630134312241.png)

但是发现任务只运行了一次，如果想跟之前一样运行,则需要修改配置

```java
@Bean
public Trigger trigger(){
    return TriggerBuilder.newTrigger()
            .forJob(jobDetail())
            .withIdentity("trigger1", "group1")
            .startNow()
            //配置cron表达式
            .withSchedule(CronScheduleBuilder.cronSchedule("*/5 * * ? * * *"))
            .build();
}
```

注意，编写cron表达式的时候，天（月的多少号）和天（周几）不能同时都为*，当有一个为`*`时，另一个要是`？`，不然就会报以下错误

```
Support for specifying both a day-of-week AND a day-of-month parameter is not implemented
```



## 4、分布式任务调度XXL-JOB

### 1、概述

> XXL-JOB是一个分布式任务调度平台，其核心设计目标是开发迅速、学习简单、轻量级、易扩展。现已开放源代码并接入多家公司线上产品线，开箱即用。
>
> 官方文档：https://www.xuxueli.com/xxl-job/#%E4%BA%8C%E3%80%81%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8

- 官网地址：https://www.xuxueli.com/xxl-job/
- GitHub地址：https://github.com/xuxueli/xxl-job/

* xxl-job的设计思想

  - 将调度行为抽象形成“调度中心”公共平台，而平台自身并不承担业务逻辑，“调度中心”负责发起调度请求。
  - 将任务抽象成分散的JobHandler，交由“执行器”统一管理
  - “执行器”负责接收调度请求并执行对应的JobHandler中业务逻辑。
  - 因此，“调度”和“任务”两部分可以相互解耦，提高系统整体稳定性和扩展性

  ![img](https://www.xuxueli.com/doc/static/xxl-job/images/img_Qohm.png)

  

* 架构图(图片来源是xxl-job官网)

  - 调度中心
    - 负责管理调度的信息，按照调度的配置来发出调度请求
    - 支持可视化、简单的动态管理调度信息，包括新建、删除、更新等，这些操作都会实时生效，同时也支持监控调度结果以及执行日志。
  - 执行器
    - 负责接收请求并且执行任务的逻辑。任务模块专注于任务的执行操作等等，使得开发和维护更加的简单与高效

  

- XXL-Job具有哪些特性
  - 调度中心HA（中心式）：调度采用了中心式进行设计，“调度中心”支持集群部署，可保证调度中心HA
  - 执行器HA（分布式）：任务分布式的执行，任务执行器支持集群部署，可保证任务执行HA
  - 触发策略：有Cron触发、固定间隔触发、固定延时触发、API事件触发、人工触发、父子任务触发
  - 路由策略：执行器在集群部署的时候提供了丰富的路由策略，如：第一个、最后一个、轮询、随机、一致性HASH、最不经常使用LFU、最久未使用LRU、故障转移等等
  - 故障转移：如果执行器集群的一台机器发生故障，会自动切换到一台正常的执行器发送任务调度
  - Rolling实时日志的监控：支持rolling方式查看输入的完整执行日志
  - 脚本任务：支持GLUE模式开发和运行脚本任务，包括Shell、python、node.js、php等等类型脚本

### 2、搭建调度中心

#### 1、下载源码

下载源码导入idea，源码地址：https://gitee.com/xuxueli0323/xxl-job.git

* doc：xxl-job的文档资料，包括了数据库的脚本（后面要用到）
* xxl-job-core：公共jar包依赖
* xxl-job-admin：调度中心，项目源码，是Springboot项目，可以直接启动
* xxl-job-executor-samples：执行器，是Sample实例项目，里面的Springboot工程可以直接启动，也可以在该项目的基础上进行开发，也可以将现有的项目改造成为执行器项目

#### 2、数据库

数据库文件在源码doc/db目录下

* xxl_job的数据库里有如下几个表
  - xxl_job_group：执行器信息表，用于维护任务执行器的信息
  - xxl_job_info：调度扩展信息表，主要是用于保存xxl-job的调度任务的扩展信息，比如说像任务分组、任务名、机器的地址等等
  - xxl_job_lock：任务调度锁表
  - xxl_job_log：日志表，主要是用在保存xxl-job任务调度历史信息，像调度结果、执行结果、调度入参等等
  - xxl_job_log_report：日志报表，会存储xxl-job任务调度的日志报表，会在调度中心里的报表功能里使用到
  - xxl_job_logglue：任务的GLUE日志，用于保存GLUE日志的更新历史变化，支持GLUE版本的回溯功能
  - xxl_job_registry：执行器的注册表，用在维护在线的执行器与调度中心的地址信息
  - xxl_job_user：系统的用户表

#### 3、调度中心配置：

调度中心配置文件地址：

```
/xxl-job/xxl-job-admin/src/main/resources/application.properties
```

* 配置数据库连接

```
### xxl-job, datasource
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xxl_job?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai
spring.datasource.username=root
spring.datasource.password=xdclass.net
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

* 配置 xxl.job.accessToken（后续要配置客户端接入配置token）

```
xxl.job.accessToken=javaxiaobear.cn
```

#### 4、启动项目

调度中心访问地址：http://localhost:8080/xxl-job-admin (该地址执行器将会使用到，作为回调地址)

默认登录账号 “admin/123456”, 登录后运行界面如下图所示。

![image-20230630144053744](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230630144053744.png)



#### 5、UI界面介绍

##### 1、运行报表：以图形化来展示了整体的任务执行情况

- 任务数量：能够看到调度中心运行的任务数量
- 调度次数：调度中心所触发的调度次数
- 执行器数量：在整个调度中心中，在线的执行器数量有多少

##### 2、任务管理（配置执行任务）

![image-20230630144304198](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230630144304198.png)

- 示例执行器：所用到的执行器
- 任务描述：概述该任务是做什么的
- 路由策略：
  - 第一个：选择第一个机器
  - 最后一个：选择最后一个机器
  - 轮询：依次选择执行
  - 随机：随机选择在线的机器
  - 一致性HASH：每个任务按照Hash算法固定选择某一台机器，并且所有的任务均匀散列在不同的机器上
  - 最不经常使用：使用频率最低的机器优先被使用
  - 最近最久未使用：最久未使用的机器优先被选举
  - 故障转移：按照顺序依次进行心跳检测，第一个心跳检测成功的机器选定为目标的执行器并且会发起任务调度
  - 忙碌转移：按照顺序来依次进行空闲检测，第一个空闲检测成功的机器会被选定为目标群机器，并且会发起任务调度
  - 分片广播：广播触发对于集群中的所有机器执行任务，同时会系统会自动传递分片的参数
- Cron：执行规则 
- 调度过期策略：调度中心错过调度时间的补偿处理策略，包括：忽略、立即补偿触发一次等
- JobHandler：定义执行器的名字
- 阻塞处理策略：
  - 单机串行：新的调度任务在进入到执行器之后，该调度任务进入FIFO队列，并以串行的方式去进行
  - 丢弃后续调度：新的调度任务在进入到执行器之后，如果存在相同的且正在运行的调度任务，本次的调度任务请求就会被丢弃掉，并且标记为失败
  - 覆盖之前的调度：新的调度任务在进入到执行器之后，如果存在相同的且正在运行的调度任务，就会终止掉当前正在运行的调度任务，并且清空队列，运行新的调度任务。
- 子任务ID：输入子任务的任务id，可填写多个
- 任务超时时间：添加任务超时的时候，单位s，设置时间大于0的时候就会生效
- 失败重试次数：设置失败重试的次数，设置时间大于0的时候就会生效
- 负责人：填写该任务调度的负责人
- 报警邮件：出现报警，则发送邮件

##### 3、调度日志

- 这里是查看调度的日志，根据日志来查看任务具体的执行情况是怎样的

##### 4、执行器管理

- 这里是配置执行器，等待执行器启动的时候都会被调度中心监听加入到地址列表

##### 5、用户管理

- 可以对用户的一些操作



### 3、整合xxl_job

#### 1、项目搭建

##### 1、引入xxl_job依赖

```java
<!-- http://repo1.maven.org/maven2/com/xuxueli/xxl-job-core/ -->
<dependency>
    <groupId>com.xuxueli</groupId>
    <artifactId>xxl-job-core</artifactId>
    <version>2.3.1</version>
</dependency>
```

##### 2、配置yaml

```yaml
xxl:
  job:
    admin:
      addresses: http://127.0.0.1:8080/xxl-job-admin
      # 执行器的名字
    executor:
      appname: javaxiaobear-xxl-job-test
    accessToken: default_token
server:
  port: 8081
```

##### 3、编写配置类

```java
@Configuration
@Slf4j
public class XxlJobConfig {

    @Value("${xxl.job.admin.addresses}")
    private String adminAddresses;

    @Value("${xxl.job.executor.appname}")
    private String appName;

    @Value("${xxl.job.accessToken}")
    private String accessToken;


    //旧版的有bug
    //@Bean(initMethod = "start", destroyMethod = "destroy")
    @Bean
    public XxlJobSpringExecutor xxlJobExecutor() {
        log.info(">>>>>>>>>>> xxl-job config init.");
        XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
        xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
        xxlJobSpringExecutor.setAppname(appName);
//        xxlJobSpringExecutor.setIp(ip);
//        xxlJobSpringExecutor.setPort(port);
        xxlJobSpringExecutor.setAccessToken(accessToken);
//        xxlJobSpringExecutor.setLogPath(logPath);
//        xxlJobSpringExecutor.setLogRetentionDays(logRetentionDays);

        return xxlJobSpringExecutor;
    }
}
```



#### 2、第一个XXL-Job分布式调度任务

##### 1、界面新增一个任务

![image-20230630152704891](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230630152704891.png)

##### 2、新增一个执行器

这里是因为在配置文件里面用的是自定义的执行器，所以我们需要新增，当然，你可以用默认的执行器

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230630154909704.png" alt="image-20230630154909704" style="zoom:67%;" />

##### 3、代码配置handler

```java
@Slf4j
@Component
public class MyXxlJobHandler {

    @XxlJob("myXxlJobHandler")
    public ReturnT<String> execute(String param){
        log.info("小熊学Java 任务方法触发成功");
        return ReturnT.SUCCESS;
    }
}
```

##### 4、重新启动项目

![image-20230630155107647](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230630155107647.png)

![image-20230630155113771](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230630155113771.png)



### 4、路由策略

- 第一个：选择第一个机器
- 最后一个：选择最后一个机器
- 轮询：依次选择执行，流量均摊（推荐）
- 随机：随机选择在线的机器
- 一致性HASH：每个任务按照Hash算法固定选择某一台机器，并且所有的任务均匀散列在不同的机器上
- 最不经常使用：使用频率最低的机器优先被使用
- 最近最久未使用：最久未使用的机器优先被选举
- 故障转移：按照顺序依次进行心跳检测，第一个心跳检测成功的机器选定为目标的执行器并且会发起任务调度
- 忙碌转移：按照顺序来依次进行空闲检测，第一个空闲检测成功的机器会被选定为目标群机器，并且会发起任务调度
- 分片广播：广播触发对于集群中的所有机器执行任务，同时会系统会自动传递分片的参数



### 5、分片广播

#### 1、场景

> 需求
>
> * 有一个任务需要处理100W条数据，每条数据的业务逻辑处理要0.1s
> * 对于普通任务来说，只有一个线程来处理 可能需要10万秒才能处理完，业务则严重受影响
> * 案例：双十一大促，给1000万用户发营销短信

什么是分片任务

* 执行器集群部署，如果任务的路由策略选择【分片广播】，一次任务调度将会【广播触发】对应集群中所有执行器执行一次任务，同时系统自动传递分片参数，执行器可根据分片参数开发分片任务
* 需要处理的海量数据，以执行器为划分，每个执行器分配一定的任务数，并行执行
* XXL-Job支持动态扩容执行器集群，从而动态增加分片数量，到达更快处理任务
* 分片的值是调度中心分配的

```
// 当前分片数，从0开始，即执行器的序号
int shardIndex = XxlJobHelper.getShardIndex();
//总分片数，执行器集群总机器数量
int shardTotal = XxlJobHelper.getShardTotal();
```

![image-20230703140222054](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230703140222054.png)

解决思路

> 1. 分片广播
> 2. 也可以启动多个job，使用同个jobHandler,通过命令行参数控制

* 如果将100W数据均匀分给集群里的10台机器同时处理，
* 每台机器耗时，1万秒即可，耗时会大大缩短，也能充分利用集群资源
* 在xxl-job里，可以配置执行器集群有10个机器，那么分片总数是10，分片序号0~9 分别对应那10台机器。

* 分片方式
  * id % 分片总数 余数是0 的，在第1个执行器上执行
  * id % 分片总数 余数是1 的，在第2个执行器上执行
  * id % 分片总数 余数是2 的，在第3个执行器上执行
  * ...
  * id % 分片总数 余数是9 的，在第10个执行器上执行



#### 2、代码编写

```java
/**
     * 100个用户，分片处理
     */
    @XxlJob("myShardingJobHandler")
    public void shardingJobHandler(){
        // 当前分片数，从0开始，即执行器的序号
        int shardIndex = XxlJobHelper.getShardIndex();
        //总分片数，执行器集群总机器数量
        int shardTotal = XxlJobHelper.getShardTotal();

        XxlJobHelper.log("分片参数：当前分片序号 = {}, 总分片数 = {}", shardIndex, shardTotal);


        List<Integer> allUserIds = getAllUserIds();
        allUserIds.forEach(obj -> {
            if (obj % shardTotal == shardIndex) {
                log.info("第 {} 片, 命中分片开始处理用户id={}",shardIndex,obj);
            }
        });
    }

    private List<Integer> getAllUserIds() {
        List<Integer> ids = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            ids.add(i);
        }
        return ids;
    }
```



#### 3、测试

1. 新建一个分片任务

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230703141009035.png" alt="image-20230703141009035" style="zoom:50%;" />

2. 新建一个服务器实例，直接copy一份

   ![image-20230703141109854](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230703141109854.png)

3. 启动系统，点击运行一次

   ![image-20230703141221278](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230703141221278.png)



### 6、阻塞策略

> - 单机串行：新的调度任务在进入到执行器之后，该调度任务进入FIFO队列，并以串行的方式去进行
> - 丢弃后续调度：新的调度任务在进入到执行器之后，如果存在相同的且正在运行的调度任务，本次的调度任务请求就会被丢弃掉，并且标记为失败
> - 覆盖之前的调度：新的调度任务在进入到执行器之后，如果存在相同的且正在运行的调度任务，就会终止掉当前正在运行的调度任务，并且清空队列，运行新的调度任务。



