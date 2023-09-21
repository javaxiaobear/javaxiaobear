---
title: 4、HttpServlet
---

### 1、HttpServletRequest

#### 1、HttpServletRequest 类有什么作用。

> 每次只要有请求进入Tomcat 服务器，Tomcat 服务器就会把请求过来的HTTP 协议信息解析好封装到Request 对象中。然后传递到service 方法（doGet 和doPost）中给我们使用。我们可以通过HttpServletRequest 对象，获取到所有请求的信息。

#### 2、HttpServletRequest 类的常用方法

- getRequestURI() 获取请求的资源路径
- getRequestURL() 获取请求的统一资源定位符（绝对路径）
- getRemoteHost() 获取客户端的ip 地址
- getHeader() 获取请求头
- getParameter() 获取请求的参数
- getParameterValues() 获取请求的参数（多个值的时候使用）
- getMethod() 获取请求的方式GET 或POST
- setAttribute(key, value); 设置域数据
- getAttribute(key); 获取域数据
- getRequestDispatcher() 获取请求转发对象

```java
public class RequestApiServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("获取请求的路径=>"+ req.getRequestURI());
        System.out.println("获取统一资源定位符=>"+ req.getRequestURI());
        System.out.println("获取ip=>"+req.getRemoteHost());
        System.out.println("获取请求头=>"+req.getHeader("User-Agent"));
        System.out.println("请求方式=>"+req.getMethod());
    }
}

```



```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="http://localhost:8080/JavaWeb_02_war_exploded/parameterServlet" method="get">
    用户名：<input type="text" name="username"><br/>
    密码：<input type="password" name="password"><br/>
    兴趣爱好：<input type="checkbox" name="hobby" value="cpp">C++
    <input type="checkbox" name="hobby" value="java">Java
    <input type="checkbox" name="hobby" value="js">JavaScript<br/>
    <input type="submit">
</form>
</body>
</html>
```

```java
public class ParameterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String[]  hobby = req.getParameterValues("hobby");
        System.out.println("用户名："+username);
        System.out.println("密码："+password);
        System.out.println("兴趣爱好："+ Arrays.asList(hobby));
    }
}
```



#### 3、doGet 请求的中文乱码解决：

```java
// 获取请求参数
String username = req.getParameter("username");
//1 先以iso8859-1 进行编码
//2 再以utf-8 进行解码
username = new String(username.getBytes("iso-8859-1"), "UTF-8");
```

#### 4、POST 请求的中文乱码

```java
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException,
IOException {
    // 设置请求体的字符集为UTF-8，从而解决post 请求的中文乱码问题
    req.setCharacterEncoding("UTF-8");
    System.out.println("-------------doPost------------");
    // 获取请求参数
    String username = req.getParameter("username");
    String password = req.getParameter("password");
    String[] hobby = req.getParameterValues("hobby");
    System.out.println("用户名：" + username);
    System.out.println("密码：" + password);
    System.out.println("兴趣爱好：" + Arrays.asList(hobby));
}
```

#### 5、Web路径

- 相对路径
    - .  表示当前目录
    - ..  表示上一级目录
    - 资源名 表示当前目录/资源名
- 绝对路径
    - http://ip:port/工程路径/资源路径

#### 6、/ 斜杠的不同意义

在web 中**/ 斜杠是一种绝对路径**。

- / 斜杠如果被浏览器解析，得到的地址是：http://ip:port/

  ```html
  <a href="/">斜杠</a>
  ```

- / 斜杠如果被服务器解析，得到的地址是：http://ip:port/工程路径

  ```xml
  <url-pattern>/servlet1</url-pattern>
  ```

  ```java
  servletContext.getRealPath(“/”);
  request.getRequestDispatcher(“/”);
  ```

- 特殊情况：` response.sendRediect(“/”); `把斜杠发送给浏览器解析。得到http://ip:port/

### 2、HttpServletResponse

#### 1、HttpServletResponse 类的作用

> HttpServletResponse 类和HttpServletRequest 类一样。每次请求进来，Tomcat 服务器都会创建一个Response 对象传递给Servlet 程序去使用。HttpServletRequest 表示请求过来的信息，HttpServletResponse 表示所有响应的信息，我们如果需要设置返回给客户端的信息，都可以通过HttpServletResponse 对象来进行设置

#### 2、相关的输出流

字节流              getOutputStream();                              常用于下载（传递二进制数据）
字符流              getWriter();                                            常用于回传字符串（常用）

**两个流同时只能使用一个。**

#### 3、往客户端回传数据

```java
public class ReponseIOServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter writer = response.getWriter();
        writer.write("xiaobear,you are nice!!!");
    }
}
```

#### 4、响应的乱码解决

```java
/*-----------------------------------方式一（不推荐）--------------------------------------*/
// 设置服务器字符集为UTF-8
resp.setCharacterEncoding("UTF-8");
// 通过响应头，设置浏览器也使用UTF-8 字符集
resp.setHeader("Content-Type", "text/html; charset=UTF-8");
/*-----------------------------------方式二（推荐）--------------------------------------*/
// 它会同时设置服务器和客户端都使用UTF-8 字符集，还设置了响应头
// 此方法一定要在获取流对象之前调用才有效
resp.setContentType("text/html; charset=UTF-8");
PrintWriter writer = response.getWriter();
writer.write("鄢汉雄最棒！！！");
```

#### 5、请求重定向

> 请求重定向，是指客户端给服务器发请求，然后服务器告诉客户端说。我给你一些地址。你去新地址访问。叫请求重定向（因为之前的地址可能已经被废弃）。

![](https://raw.githubusercontent.com/yhx1001/PicGo/img/1710080511514599.png)

- 请求重定向方式一：

  ```java
  // 设置响应状态码302 ，表示重定向，（已搬迁）
  resp.setStatus(302);
  // 设置响应头，说明新的地址在哪里
  resp.setHeader("Location", "http://localhost:8080");
  ```

- 请求重定向方式二（推荐）：

  ```java
  resp.sendRedirect("http://localhost:8080");
  ```
