---
title: 2、Servlet
---

### 1、什么是Servlet？

> Servlet 是JavaEE 规范之一。规范就是接口
> Servlet 就JavaWeb 三大组件之一。三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器。
> Servlet 是运行在服务器上的一个java 小程序，它可以接收客户端发送过来的请求，并响应数据给客户端

### 2、手动实现Servlet 程序

1、编写一个类去实现Servlet 接口

2、实现service 方法，处理请求，并响应数据

3、到web.xml 中去配置servlet 程序的访问地址

Servlet 程序的示例代码：

```java
public class HelloServlet implements Servlet {
    /**
* service 方法是专门用来处理请求和响应的
*/
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("Hello Servlet 被访问了");
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
version="4.0">
<!-- servlet 标签给Tomcat 配置Servlet 程序-->
<servlet>
<!--servlet-name 标签Servlet 程序起一个别名（一般是类名） -->
<servlet-name>HelloServlet</servlet-name>
<!--servlet-class 是Servlet 程序的全类名-->
<servlet-class>com.atguigu.servlet.HelloServlet</servlet-class>
</servlet>
<!--servlet-mapping 标签给servlet 程序配置访问地址-->
<servlet-mapping>
<!--servlet-name 标签的作用是告诉服务器，我当前配置的地址给哪个Servlet 程序使用-->
<servlet-name>HelloServlet</servlet-name>
<!--url-pattern 标签配置访问地址<br/>
/ 斜杠在服务器解析的时候，表示地址为：http://ip:port/工程路径<br/>
/hello 表示地址为：http://ip:port/工程路径/hello <br/>
-->
<url-pattern>/hello</url-pattern>
</servlet-mapping>
</web-app>
```

**继承HttpServlet 实现Servlet 程序**

一般在实际项目开发中，都是使用继承HttpServlet 类的方式去实现Servlet 程序。

1、编写一个类去继承HttpServlet 类

2、根据业务需要重写doGet 或doPost 方法

3、到web.xml 中的配置Servlet 程序的访问地址

Servlet 类的代码：

```java
public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet 调用doGet()被执行了！！！");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet 调用doPost()被执行了！！！");
    }
}
```

web.xml 中的配置：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!-- servlet 标签给Tomcat 配置Servlet 程序-->
    <servlet>
        <!--servlet-name 标签Servlet 程序起一个别名（一般是类名） -->
        <servlet-name>HelloServlet</servlet-name>
        <!--servlet-class 是Servlet 程序的全类名-->
        <servlet-class>com.xiaobear.HelloServlet</servlet-class>
    </servlet>
    <!--servlet-mapping 标签给servlet 程序配置访问地址-->
    <servlet-mapping>
        <!--servlet-name 标签的作用是告诉服务器，我当前配置的地址给哪个Servlet 程序使用-->
        <servlet-name>HelloServlet</servlet-name>
        <!--url-pattern 标签配置访问地址<br/>
        / 斜杠在服务器解析的时候，表示地址为：http://ip:port/工程路径<br/>
        /hello 表示地址为：http://ip:port/工程路径/hello <br/>
        -->
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
</web-app>
```

### 3、Servlet 的生命周期

- 执行Servlet 构造器方法
- 执行init 初始化方法  （第一、二步，是在第一次访问的时候创建Servlet 程序会调用）
- 执行service 方法（第三步，每次访问都会调用）
- 执行destroy 销毁方法（第四步，在web 工程停止的时候调用）

### 4、Servlet继承体系

![](https://raw.githubusercontent.com/yhx1001/PicGo/img/18141219607756.png)

#### 1、ServletConfig 类

```java
public interface ServletConfig {
    String getServletName();  //可以获取Servlet 程序的别名servlet-name 的值

    ServletContext getServletContext();//获取ServletContext 对象

    String getInitParameter(String var1);//获取初始化参数init-param

    Enumeration<String> getInitParameterNames();
}
```

ServletConfig 类从类名上来看，就知道是Servlet 程序的配置信息类。

Servlet 程序和ServletConfig 对象都是由Tomcat 负责创建，我们负责使用。

Servlet 程序默认是第一次访问的时候创建，ServletConfig 是每个Servlet 程序创建时，就创建一个对应的

ServletConfig 对象。

#### 2、ServletConfig 类的三大作用

- 可以获取Servlet 程序的别名servlet-name 的值
- 获取ServletContext 对象
- 获取初始化参数init-param

web.xml

```xml
<!-- servlet 标签给Tomcat 配置Servlet 程序-->
<servlet>
    <!--servlet-name 标签Servlet 程序起一个别名（一般是类名） -->
    <servlet-name>HelloServlet</servlet-name>
    <!--servlet-class 是Servlet 程序的全类名-->
    <servlet-class>com.atguigu.servlet.HelloServlet</servlet-class>
    <!--init-param 是初始化参数-->
    <init-param>
        <!--是参数名-->
        <param-name>username</param-name>
        <!--是参数值-->
        <param-value>root</param-value>
    </init-param>
    <!--init-param 是初始化参数-->
    <init-param>
        <!--是参数名-->
        <param-name>url</param-name>
        <!--是参数值-->
        <param-value>jdbc:mysql://localhost:3306/test</param-value>
    </init-param>
</servlet>
<!--servlet-mapping 标签给servlet 程序配置访问地址-->
<servlet-mapping>
    <!--servlet-name 标签的作用是告诉服务器，我当前配置的地址给哪个Servlet 程序使用-->
    <servlet-name>HelloServlet</servlet-name>
    <!--
url-pattern 标签配置访问地址<br/>
/ 斜杠在服务器解析的时候，表示地址为：http://ip:port/工程路径<br/>
/hello 表示地址为：http://ip:port/工程路径/hello <br/>
-->
    <url-pattern>/hello</url-pattern>
</servlet-mapping>
```

Servlet 中的代码

```java
@Override
    public void init(ServletConfig config) throws ServletException {
        System.out.println("init 初始化方法！！！");
        //可以获取Servlet 程序的别名servlet-name 的值
        System.out.println("HelloServlet 程序的别名是:" + config.getServletName());
        //获取初始化参数init-param
        System.out.println("初始化参数username 的值是;" + config.getInitParameter("username"));
        System.out.println("初始化参数url 的值是;" + config.getInitParameter("url"));
        //获取ServletContext 对象
        System.out.println(config.getServletContext());
        super.init(config);    }
```

#### 3、ServletContext 类

1、ServletContext 是一个接口，它表示Servlet 上下文对象

2、一个web 工程，只有一个ServletContext 对象实例。

3、ServletContext 对象是一个域对象。

4、ServletContext 是在web 工程部署启动的时候创建。在web 工程停止的时候销毁。

什么是域对象?域对象，是可以像Map 一样存取数据的对象，叫域对象。这里的域指的是存取数据的操作范围，整个web 工程。

|        | 存数据         | 取数据         | 删除数据          |
| ------ | -------------- | -------------- | ----------------- |
| Map    | put()          | get()          | remove()          |
| 域对象 | setAttribute() | getAttribute() | removeAttribute() |

#### 4、ServletContext 类的四个作用

1、获取web.xml 中配置的上下文参数context-param

2、获取当前的工程路径，格式: /工程路径

3、获取工程部署后在服务器硬盘上的绝对路径

4、像Map 一样存取数据

ServletContext的代码

```java
 @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet 调用doGet()被执行了！！！");
        // 1、获取web.xml 中配置的上下文参数context-param
        ServletContext context = getServletConfig().getServletContext();
        String username = context.getInitParameter("username");
        System.out.println("context-param 参数username 的值是:" + username);
        System.out.println("context-param 参数password 的值是:" +
                context.getInitParameter("password"));
		// 2、获取当前的工程路径，格式: /工程路径
        System.out.println( "当前工程路径:" + context.getContextPath() );
		// 3、获取工程部署后在服务器硬盘上的绝对路径
/**
 * / 斜杠被服务器解析地址为:http://ip:port/工程名/ 映射到IDEA 代码的web 目录<br/>
 */
        System.out.println("工程部署的路径是:" + context.getRealPath("/"));
        System.out.println("工程下css 目录的绝对路径是:" + context.getRealPath("/css"));
        System.out.println("工程下imgs 目录1.jpg 的绝对路径是:" + context.getRealPath("/imgs/1.jpg"));
    }
```

```xml
<!--context-param 是上下文参数(它属于整个web 工程)-->
<context-param>
    <param-name>username</param-name>
    <param-value>context</param-value>
</context-param>
<!--context-param 是上下文参数(它属于整个web 工程)-->
<context-param>
    <param-name>password</param-name>
    <param-value>root</param-value>
</context-param>
```

ContextServlet1代码

```java
public class ContextServlet1 extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws
        ServletException, IOException {
        // 获取ServletContext 对象
        ServletContext context = getServletContext();
        System.out.println(context);
        System.out.println("保存之前: Context1 获取key1 的值是:"+ context.getAttribute("key1"));
        context.setAttribute("key1", "value1");
        System.out.println("Context1 中获取域数据key1 的值是:"+ context.getAttribute("key1"));
    }
}
		//ContextServlet2
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
IOException {
    ServletContext context = getServletContext();
    System.out.println(context);
    System.out.println("Context2 中获取域数据key1 的值是:"+ context.getAttribute("key1"));
}
```
