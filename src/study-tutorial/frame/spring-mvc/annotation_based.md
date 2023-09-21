---
title: 4、基于注解开发Spring MVC
---
### 1、在 web.xml 中配置 DispatcherServlet

```xml
<!--注册DispatcherServlet-->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springmvc-servlet.xml</param-value>
<!--这里有一个默认的规则，如果配置文件放在 webapp/WEB-INF/ 目录下，并且配置文件的名字等于 DispatcherServlet 的名字+ -servlet（即这里的配置文件路径是 webapp/WEB-INF/springmvc-servlet.xml），如果是这样的话，可以不用添加 init-param 参数，即不用手动配置 springmvc 的配置文件，框架会自动加载。-->
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
```

### 2、新建spring配置文件：`springmvc-servlet.xml`

```xml
<!--自动扫描包-->
    <context:component-scan base-package="com.xiaobear.controller"/>
    <!--过滤-->
    <mvc:default-servlet-handler/>
    <!--自动配置 相当于HandleMapping和HandleAdapet-->
    <mvc:annotation-driven/>

    <!-- 配置映射解析器：如何将控制器返回的结果字符串，转换为一个物理的视图文件-->
    <bean id="InternalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
```

### 3、Controller

```java
@Controller
public class HelloController {

    @RequestMapping("/hello")
    public String hello(Model model) {
        model.addAttribute("msg","hello,spring mvc");
        return "hello";
    }
}
```

### 4、在/WEB-INF/新建jsp目录，新建hello.jsp视图

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
${msg}
</body>
</html>
```

总结：

- 后续我们都是基于注解开发的，感觉那就是非常爽的

- `springmvc`必须配置的三大组件

    - 处理器映射器

    - 处理器适配器

    - 视图解析器

      ```xml
      <!--过滤-->
      <mvc:default-servlet-handler/>
      <!--自动配置 相当于HandleMapping和HandleAdapet-->
      <mvc:annotation-driven/>
      
      <!-- 配置映射解析器：如何将控制器返回的结果字符串，转换为一个物理的视图文件-->
      <bean id="InternalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
          <property name="prefix" value="/WEB-INF/jsp/"/>
          <property name="suffix" value=".jsp"/>
      </bean>
      ```

- `Spring MVC`万能模板(基于注解)

    - 注册`DispatcherServlet`

      ```xml
      <!--注册DispatcherServlet-->
      <servlet>
          <servlet-name>springmvc</servlet-name>
          <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
          <init-param>
              <param-name>contextConfigLocation</param-name>
              <param-value>classpath:springmvc-servlet.xml</param-value>
          </init-param>
          <load-on-startup>1</load-on-startup>
      </servlet>
      <servlet-mapping>
          <servlet-name>springmvc</servlet-name>
          <url-pattern>/</url-pattern>
      </servlet-mapping>
      ```

    - spring配置文件模板

      注：导入mvc命令空间的时候记得先导入过滤，如果先导入处理器的命令空间，就会报错

      ```xml
      xmlns:mvc="http://www.springframework.org/schema/mvc"
      <!--下面是错误的-->
      xmlns:mvc="http://www.springframework.org/schema/cache"
      ```

      ```xml
      <!--自动扫描包-->
      <context:component-scan base-package="你自己的包"/>
      <!--过滤-->
      <mvc:default-servlet-handler/>
      <!--自动配置 相当于HandleMapping和HandleAdapet-->
      <mvc:annotation-driven/>
      
      <!-- 配置映射解析器：如何将控制器返回的结果字符串，转换为一个物理的视图文件-->
      <bean id="InternalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
          <property name="prefix" value="/WEB-INF/jsp/"/>
          <property name="suffix" value=".jsp"/>
      </bean>
      ```
