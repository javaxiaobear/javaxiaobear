---
title: 1、JavaWeb的概念
---

> JavaWeb 是指，所有通过Java 语言编写可以通过浏览器访问的程序的总称，叫JavaWeb。
> JavaWeb 是基于请求和响应来开发的。

**什么是请求?**

> 请求是指客户端给服务器发送数 据，叫请求Request。

**什么是响应?**

> 响应是指服务器给客户端回传数据，叫响应Response。

请求和响应是成对出现的，有请求就有响应。

### 1、Web 资源的分类

- 静态资源： html、css、js、txt、mp4 视频, jpg 图片
- 动态资源： jsp 页面、Servlet 程序

### 2、常用的Web 服务器

- Tomcat：由Apache 组织提供的一种Web 服务器，提供对jsp 和Servlet 的支持。它是一种轻量级的**javaWeb 容器**（服务器），也是当前应用最广的JavaWeb 服务器（免费）。

- Jboss：是一个遵从JavaEE 规范的、开放源代码的、纯Java 的EJB 服务器，它支持所有的JavaEE 规范（免

  费）。

- GlassFish： 由Oracle 公司开发的一款JavaWeb 服务器，是一款强健的商业服务器，达到产品级质量（应用很

  少）。

- Resin：是CAUCHO 公司的产品，是一个非常流行的服务器，对servlet 和JSP 提供了良好的支持，

  性能也比较优良，resin 自身采用JAVA 语言开发（收费，应用比较多）。

- WebLogic：是Oracle 公司的产品，是目前应用最广泛的Web 服务器，支持JavaEE 规范，而且不断的完善以适应新的开发要求，适合大型项目（收费，用的不多，适合大公司）。



#### 1、Tomcat 服务器和Servlet 版本的对应关系

| Tomcat版本 | Servlet/Jsp版本 | JavaEE版本 | 运行环境 |
| ---------- | --------------- | ---------- | -------- |
| 7.0        | 3.0 / 2.2       | 6.0        | JDK6.0   |
| 8.0        | 3.1/ 2.3        | 7.0        | JDK7.0   |

Servlet 程序从**2.5 版本**是现在世面使用最多的版本（**xml 配置**），**Servlet3.0 之后。就是注解版本的Servlet 使用**。
