---
title: 6、Listener 监听器
---

> 1、Listener 监听器它是JavaWeb 的三大组件之一。JavaWeb 的三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器。
> 2、Listener 它是JavaEE 的规范，就是接口
> 3、监听器的作用是，监听某种事物的变化。然后通过回调函数，反馈给客户（程序）去做一些相应的处理。

#### ServletContextListener 监听器

==ServletContextListener 它可以监听ServletContext 对象的创建和销毁。==
**ServletContext 对象在web 工程启动的时候创建，在web 工程停止的时候销毁。**监听到创建和销毁之后都会分别调用ServletContextListener 监听器的方法反馈。

```java
public interface ServletContextListener extends EventListener {
    
    default void contextInitialized(ServletContextEvent sce) {
        //在ServletContext 对象创建之后马上调用，做初始化
    }

    default void contextDestroyed(ServletContextEvent sce) {
        //在ServletContext 对象销毁之后调用
    }
}
```

如何使用ServletContextListener 监听器监听ServletContext 对象

1. 编写一个类去实现ServletContextListener
2. 实现其两个回调方法
3. 到web.xml 中去配置监听器

```java
public class MyServletContextListener implements ServletContextListener {
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("ServletContext被创建了！！！");
    }
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("ServletContext被销毁了！！！");
    }
}
```

```xml
<!--配置listener-->
<listener>
    <listener-class>com.xiaobear.listener.MyServletContextListener</listener-class>
</listener>
```
