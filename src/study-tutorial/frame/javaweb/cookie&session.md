---
title: 9、Cookie & Session
---

### 1、cookie

> 1、Cookie 翻译过来是饼干的意思。
> 2、Cookie 是服务器通知客户端保存键值对的一种技术。
> 3、客户端有了Cookie 后，每次请求都发送给服务器。
> 4、每个Cookie 的大小不能超过4kb

准备页面cookie.html

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Cookie</title>
	<base href="http://localhost:8080/JavaWeb_05_Cookie_Session/">
<style type="text/css">

	ul li {
		list-style: none;
	}
	
</style>
</head>
<body>
	<iframe name="target" width="500" height="500" style="float: left;"></iframe>
	<div style="float: left;">
		<ul>
			<li><a href="" target="target">Cookie的创建</a></li>
			<li><a href="" target="target">Cookie的获取</a></li>
			<li><a href="" target="target">Cookie值的修改</a></li>
			<li>Cookie的存活周期</li>
			<li>
				<ul>
					<li><a href="" target="target">Cookie的默认存活时间（会话）</a></li>
					<li><a href="" target="target">Cookie立即删除</a></li>
					<li><a href="" target="target">Cookie存活3600秒（1小时）</a></li>
				</ul>
			</li>
			<li><a href="" target="target">Cookie的路径设置</a></li>
			<li><a href="" target="target">Cookie的用户免登录练习</a></li>
		</ul>
	</div>
</body>
</html>
```

BaseServlet

```java
public abstract class BaseServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 解决post请求中文乱码问题
        // 一定要在获取请求参数之前调用才有效
        req.setCharacterEncoding("UTF-8");
        // 解决响应中文乱码问题
        resp.setContentType("text/html; charset=UTF-8");

        String action = req.getParameter("action");
        try {
            // 获取action业务鉴别字符串，获取相应的业务 方法反射对象
            Method method = this.getClass().getDeclaredMethod(action, HttpServletRequest.class, HttpServletResponse.class);
            //  System.out.println(method);
            // 调用目标业务 方法
            method.invoke(this, req, resp);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

#### 1、Cookie的创建

Servlet程序

```java
public class CookieServlet extends BaseServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
         // 创建Cookie 对象
        Cookie cookie = new Cookie("key4", "value4");
        // 通知客户端保存Cookie
        resp.addCookie(cookie);
        resp.getWriter().write("Cookie 创建成功");
    }
}
```

#### 2、服务器如何获取Cookie

```java
/*Cookie的获取*/
    protected void getCookie(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Cookie[] cookies = req.getCookies();
        for (Cookie cookie : cookies) {
            //返回Cookie的名称
            resp.getWriter().write("Cookie["+cookie.getName()+"="+cookie.getValue()+"]");
        }
    }
```

#### 3、Cookie 值的修改

> 方案一：
>
> - 先创建一个要修改的同名（指的就是key）的Cookie 对象
>
> - 在构造器，同时赋于新的Cookie 值。
>
> - 调用response.addCookie( Cookie );
    >
    > 	```java
> 	   /*
> 	    *Cookie值修改
> 	    */
> 	    protected void updateCookie(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
> 	//        - 先创建一个要修改的同名（指的就是key）的Cookie 对象
> 	        Cookie cookie = new Cookie("key4","newValue4");
> 	//        - 在构造器，同时赋于新的Cookie 值。
> 	        resp.addCookie(cookie);
> 	//        - 调用response.addCookie( Cookie );
> 	        resp.getWriter().write("Cookie修改成功");
> 	    }
> 	```

> 方案二：
>
> - 先查找到需要修改的Cookie 对象
>
> - 调用setValue()方法赋于新的Cookie 值。
>
> - 调用response.addCookie()通知客户端保存修改
    >
    > 	```java
> 	public class CookieUtils {
> 	    public static Cookie findCookie(String name , Cookie[] cookies){
> 	        if (name == null || cookies == null || cookies.length == 0) {
> 	            return null;
> 	        }
> 	        for (Cookie cookie : cookies) {
> 	            if (name.equals(cookie.getName())) {
> 	                return cookie;
> 	            }
> 	        }
> 	        return null;
> 	    }
> 	}
> 	```
    >
    > 	```java
> 	Cookie cookie1 = CookieUtils.findCookie("key5", req.getCookies());
> 	if (cookie1 != null) {
> 	    cookie1.setValue("newValue5");
> 	}
> 	resp.addCookie(cookie1);
> 	resp.getWriter().write("Cookie修改成功");
> 	```

#### 4、Cookie 生命控制

> Cookie 的生命控制指的是如何管理Cookie 什么时候被销毁（删除）
>
> setMaxAge()
>
> - 正数，表示在指定的秒数后过期
> - 负数，表示浏览器一关，Cookie 就会被删除（默认值是-1）
> - 零，表示马上删除Cookie

```java

    protected void defaultCookie(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Cookie cookie = new Cookie("default","default");
        cookie.setMaxAge(-1);
        //cookie.setMaxAge(60 * 60); // 设置Cookie 一小时之后被删除。无效
        resp.addCookie(cookie);
    }
    protected void deleteNow(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 先找到你要删除的Cookie 对象
        Cookie cookie = CookieUtils.findCookie("key4", req.getCookies());
        if (cookie != null) {
            // 调用setMaxAge(0);
            cookie.setMaxAge(0); // 表示马上删除，都不需要等待浏览器关闭
            // 调用response.addCookie(cookie);
            resp.addCookie(cookie);
            resp.getWriter().write("key4 的Cookie 已经被删除");
        }
    }
```

#### 5、Cookie 有效路径Path 的设置

> Cookie 的path 属性可以有效的过滤哪些Cookie 可以发送给服务器。哪些不发。
> path 属性是通过请求的地址来进行有效的过滤。

```java
protected void pathCookie(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie cookie = new Cookie("path","path");
    cookie.setPath(req.getContextPath()+"/abc");
    resp.addCookie(cookie);
    resp.getWriter().write("创建了一个带有path的Cookie");
}
```

#### 6、练习--免密登录

```html
<%--login.jsp--%>
<form action="http://localhost:8080/JavaWeb_05_Cookie_Session/loginServlet" method="get">
    用户名：<input type="text" name="username" value="${cookie.username.value}"><br>
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

### 2、Session

> 1、Session 就一个接口（HttpSession）。
> 2、Session 就是会话。它是用来维护一个客户端和服务器之间关联的一种技术。
> 3、每个客户端都有自己的一个Session 会话。
> 4、Session 会话中，我们经常用来保存用户登录之后的信息。

#### 1、创建Session 和获取(id 号,是否为新)

session.html页面

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Session</title>
	<base href="http://localhost:8080/JavaWeb_05_Cookie_Session/">
<style type="text/css">
base
	ul li {
		list-style: none;
	}
	
</style>
</head>
<body>
	<iframe name="target" width="500" height="500" style="float: left;"></iframe>
	<div style="float: left;">
		<ul>
			<li><a href="sessionServlet?action=creatOrGetSession" target="target">Session的创建和获取（id号、是否为新创建）</a></li>
			<li><a href="" target="target">Session域数据的存储</a></li>
			<li><a href="" target="target">Session域数据的获取</a></li>			
			<li>Session的存活</li>
			<li>
				<ul>
					<li><a href="" target="target">Session的默认超时及配置</a></li>
					<li><a href="" target="target">Session3秒超时销毁</a></li>
					<li><a href="" target="target">Session马上销毁</a></li>
				</ul>
			</li>
			<li><a href="" target="target">浏览器和Session绑定的原理</a></li>
		</ul>
	</div>
</body>
</html>
```

```
如何创建和获取Session。它们的API 是一样的。
request.getSession()
第一次调用是：创建Session 会话
之后调用都是：获取前面创建好的Session 会话对象。

isNew(); 判断到底是不是刚创建出来的（新的）
true 表示刚创建
false 表示获取之前创建

每个会话都有一个身份证号。也就是ID 值。而且这个ID 是唯一的。
getId() 得到Session 的会话id 值。
```

```java
protected void creatOrGetSession(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    HttpSession session = req.getSession();
    boolean aNew = session.isNew();
    String id = session.getId();
    resp.getWriter().write("Session的ID:"+id+" ;");
    resp.getWriter().write("Session是否是新创建："+aNew+" ;");
}
```

#### 2、Session 域数据的存取

```java
protected void getSession(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Object attribute = req.getSession().getAttribute("key1");
    resp.getWriter().write("从Session 中获取出key1 的数据是：" + attribute);
}
protected void setSession(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.getSession().setAttribute("key1", "value1");
    resp.getWriter().write("已经往Session 中保存了数据");
}
```

#### 3、Session 生命周期控制

```
public void setMaxInactiveInterval(int interval) 设置Session 的超时时间（以秒为单位），超过指定的时长，Session
就会被销毁。
值为正数的时候，设定Session 的超时时长。
负数表示永不超时（极少使用）

public int getMaxInactiveInterval()获取Session 的超时时间
public void invalidate() 让当前Session 会话马上超时无效。

Session 默认的超时时长是多少！
Session 默认的超时时间长为30 分钟。

因为在Tomcat 服务器的配置文件web.xml 中默认有以下的配置，它就表示配置了当前Tomcat 服务器下所有的Session
超时配置默认时长为：30 分钟。
<session-config>
<session-timeout>30</session-timeout>
</session-config>

如果你想只修改个别Session 的超时时长。就可以使用上面的API。setMaxInactiveInterval(int interval)来进行单独的设置。
session.setMaxInactiveInterval(int interval)单独设置超时时长。
```

```java
protected void setTime(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    HttpSession session = req.getSession();
    session.setMaxInactiveInterval(10);
    resp.getWriter().write("10s后超时！！");
}
```

```java
protected void deleteNow(HttpServletRequest req, HttpServletResponse resp) throws ServletException,IOException {
    // 先获取Session 对象
    HttpSession session = req.getSession();
    // 让Session 会话马上超时
    session.invalidate();
    resp.getWriter().write("Session 已经设置为超时（无效）");
}
```

#### 4、浏览器和Session

> Session 技术，底层其实是基于Cookie 技术来实现的。

![image-20200502232022644](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200502232022644.png)
