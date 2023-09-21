---
title: 10、Filter 过滤器
---
> Filter 过滤器它的作用是：**拦截请求**，过滤响应。

拦截请求常见的应用场景有：

- 权限检查
- 日记操作
- 事务管理
- ......

### 1、案例：用户登录

```html
<form action="http://localhost:8080/JavaWeb_06_war_exploded/loginServlet" method="get">
用户名：<input type="text" name="username" ><br>
密码：<input type="password" name="password" ><br>
<input type="submit" value="登录">
</form>
```

```java
//LoginServlet
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        if ("xiaobear".equals(username) && "123456".equals(password)) {
            //登录成功
            Cookie cookie = new Cookie("username", username);
            cookie.setMaxAge(60 * 60 * 24 * 7);
            //当前Cookie 一周内有效
            resp.addCookie(cookie);
            System.out.println("登录成功");
        } else {
            // 登录失败
            System.out.println("登录失败");
        }
    }
}
```

```java
//AdminFilter
public class AdminFilter implements Filter {

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpSession session = request.getSession();
        Object user = session.getAttribute("user");
        if (user == null) {
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest,servletResponse);
        }else {
            //让程序继续访问目标资源
            filterChain.doFilter(servletRequest,servletResponse);
        }
    }
}
```

```xml
<!--Web.xml-->
<filter>
    <filter-name>AdminFilter</filter-name>
    <filter-class>com.xiaobear.filter.AdminFilter</filter-class>
</filter>
<filter-mapping>
    <!--filter-name 表示当前的拦截路径给哪个filter 使用-->
    <filter-name>AdminFilter</filter-name>
    <!--url-pattern 配置拦截路径
        / 表示请求地址为：http://ip:port/工程路径/ 映射到IDEA 的web 目录
        /admin/* 表示请求地址为：http://ip:port/工程路径/admin/*
        -->
    <url-pattern>/admin/*</url-pattern>
</filter-mapping>

<servlet>
    <servlet-name>LoginServlet</servlet-name>
    <servlet-class>com.xiaobear.servlet.LoginServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>LoginServlet</servlet-name>
    <url-pattern>/loginServlet</url-pattern>
</servlet-mapping>
```

### 2、Filter生命周期

```
Filter 的生命周期包含几个方法
1、构造器方法

2、init 初始化方法

第1，2 步，在web 工程启动的时候执行（Filter 已经创建）

3、doFilter 过滤方法
第3 步，每次拦截到请求，就会执行

4、destroy 销毁
第4 步，停止web 工程的时候，就会执行（停止web 工程，也会销毁Filter 过滤器）
```

```java
public class AdminFilter implements Filter {

    public AdminFilter() {
        System.out.println("1、构造器方法");
    }

    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("2、初始化方法");
    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("3、doFilter过滤方法");
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpSession session = request.getSession();
        Object user = session.getAttribute("user");
        if (user == null) {
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest,servletResponse);
        }else {
            //让程序继续访问目标资源
            filterChain.doFilter(servletRequest,servletResponse);
        }
    }
    public void destroy() {
        System.out.println("4、destory方法");
    }
}
```

### 3、FilterConfig 类

==Tomcat 每次创建Filter 的时候，也会同时创建一个FilterConfig 类，这里包含了Filter 配置文件的配置信息。==

FilterConfig 类的作用：**获取filter 过滤器的配置内容**

- 获取Filter 的名称filter-name 的内容
- 获取在Filter 中配置的init-param 初始化参数
- 获取ServletContext 对象

```java
public void init(FilterConfig filterConfig) throws ServletException {
    System.out.println("2、初始化方法");
    System.out.println("filter-name的值是："+filterConfig.getFilterName());
    System.out.println("init-param中username的值		是："+filterConfig.getInitParameter("username"));
    System.out.println(filterConfig.getServletContext());
}
```

### 4、FilterChain过滤器链

![](https://raw.githubusercontent.com/yhx1001/PicGo/img/2020-05-06-21-23-04.png)

### 5、Filter拦截路径

- 精准匹配

  ```xml
  <url-pattern>/target.jsp</url-pattern>
  以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/target.jsp
  ```

- 目录匹配

  ```xml
  <url-pattern>/admin/*</url-pattern>
  以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/admin/*
  ```

- 后缀名匹配

  ```xml
  <url-pattern>*.html</url-pattern>
  以上配置的路径，表示请求地址必须以.html 结尾才会拦截到
  <url-pattern>*.do</url-pattern>
  以上配置的路径，表示请求地址必须以.do 结尾才会拦截到
  <url-pattern>*.action</url-pattern>
  以上配置的路径，表示请求地址必须以.action 结尾才会拦截到
  
  Filter 过滤器它只关心请求的地址是否匹配，不关心请求的资源是否存在！！！
  ```
