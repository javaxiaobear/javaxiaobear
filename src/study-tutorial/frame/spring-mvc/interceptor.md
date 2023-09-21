---
title: 11、拦截器
---
SpringMVC 中的拦截器，相当于 Jsp/Servlet 中的过滤器，只不过拦截器的功能更为强大。

```java
public interface HandlerInterceptor {
    //这个是请求预处理的方法，只有当这个方法返回值为 true 的时候，后面的方法才会执行
    default boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    default void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable ModelAndView modelAndView) throws Exception {
    }

    default void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable Exception ex) throws Exception {
    }
```

> Spring MVC 也可以使用拦截器对请求进行拦截处理，用户可以自定义拦截器来实现特定的功能，自定义的拦截器必须实现HandlerInterceptor 接口
>
> - preHandle()：这个方法在业务处理器处理请求之前被调用，在该方法中对用户请求request 进行处理。如果程序员决定该拦截器对请求进行拦截处理后还要调用其他的拦截器，或者是业务处理器去进行处理，则返回true；如果程序员决定不需要再调用其他的组件去处理请求，则返回false。
> - postHandle()：这个方法在业务处理器处理完请求后，但是DispatcherServlet 向客户端返回响应前被调用，在该方法中对用户请求request 进行处理。
> -  afterCompletion()：这个方法在DispatcherServlet 完全处理完请求后被调用，可以在该方法中进行一些资源清理的操作。

### 1、单个拦截器

```java
public class MyInterceptor implements HandlerInterceptor {
    /**
     * 这个是请求预处理的方法，只有当这个方法返回值为 true 的时候，后面的方法才会执行
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("==========处理前==========");
        return true;
    }
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("==========处理后==========");
    }
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("==========清理==========");
    }
}
```

- controller

```java
@Controller
public class InterceptorController {
    @RequestMapping("/t1")
    @ResponseBody
    public String test(){
        return "hello";
    }
}
```

- 在applicationContext.xml配置拦截器

```xml
 <!--配置拦截器-->
    <mvc:interceptors>
        <mvc:interceptor>
            <mvc:mapping path="/**"/>
            <bean class="com.xiaobear.config.MyInterceptor"/>
        </mvc:interceptor>
    </mvc:interceptors>
```

### 2、拦截登录实例

- 登录表单login.jsp

  ```html
  <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
  <head>
      <title>登录页面</title>
  </head>
  <body>
  <form action="${pageContext.request.contextPath}/user/login" method="post">
      用户名：<input type="text" name="username">
      密码： <input type="text" name="password">
      <input type="submit" value="login">
  </form>
  </body>
  </html>
  ```

- index.jsp实现跳转

  ```html
  <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
      <head>
          <title>$Title$</title>
      </head>
      <body>
          <h1>
              <a href="${pageContext.request.contextPath}/user/toLogin">登录页面</a>
              <a href="${pageContext.request.contextPath}/user/main">首页</a>
          </h1>
      </body>
  </html>
  ```

- 登录成功后进入首页

  ```html
  <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
      <head>
          <title>Title</title>
      </head>
      <body>
          <h1>首页</h1>
          <h3>${username}</h3>
          <p>
              <a href="${pageContext.request.contextPath}/user/goOut">注销</a>
          </p>
      </body>
  </html>
  ```

- 登录拦截器

  ```java
  public class LoginInterceptor implements HandlerInterceptor {
      public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
          HttpSession session = request.getSession();
          if (request.getRequestURI().contains("toLogin")){
              return true;
          }
          if (request.getRequestURI().contains("login")){
              return true;
          }
          if (session.getAttribute("userLoginInfo")!=null){
              return true;
          }
          request.getRequestDispatcher("/WEB-INF/jsp/login.jsp").forward(request,response);
          return true;
      }
  }
  ```

- controller层

  ```java
  @Controller
  @RequestMapping("/user")
  public class LoginController {
  
      @RequestMapping("/login")
      public String login(String username, String password, HttpSession session, Model model){
          session.setAttribute("userLoginInfo",username);
          model.addAttribute("username",username);
          return "main";
      }
      @RequestMapping("/goOut")
      public String goOut(String username, String password, HttpSession session, Model model){
          session.removeAttribute("userLoginInfo");
          return "login";
      }
      @RequestMapping("/main")
      public String main(){
          return "main";
      }
      @RequestMapping("/toLogin")
      public String main1(){
          return "login";
      }
  }
  ```

- 配置拦截器

  ```xml
  <!--配置拦截器-->
  <mvc:interceptors>
      <mvc:interceptor>
          <mvc:mapping path="/**"/>
          <bean class="com.xiaobear.config.LoginInterceptor"/>
      </mvc:interceptor>
  </mvc:interceptors>
  ```
