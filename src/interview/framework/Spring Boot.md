---
title: Spring Boot 18道面试题
---
## 1、什么是Spring Boot？

> - 它使用**“习惯优于配置”**（项目中存在大量的配置，此外还内置了一个习惯性的配置，让你无需手动配置）的理念让你的项目快速运行起来。
>
> - Spring Boot整合了所有框架
> - 简化Spring应用开发的一个框架



## 2、Spring Boot有哪些优点？

> - 创建独立的Spring应用程序
> - 直接嵌入Tomcat，Jetty或Undertow（无需部署WAR文件）
> - 提供“初始”的POM文件内容，以简化Maven配置
> - 尽可能自动配置Spring
> - 提供生产就绪的功能，如指标，健康检查和外部化配置
> - 绝对无代码生成，也不需要XML配置



## 3、Spring Boot核心注解是哪个，由哪几个组成呢？

> 启动类注解`@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan`
>
> - @Configuration：标明该类使用Spring基于Java的配置
> - @EnableAutoConfiguration：启动自动配置功能。
> - @ComponentScan：启用组件扫描，这样你写的Web控制器类和其他组件才能被自动发现并注册为Spring应用程序上下文里的Bean。



## 4、Spring Boot配置文件加载位置

> springboot 启动会扫描以下位置的application.properties或者application.yml文件作为Spring boot的默认配置文件
>
> - –file:./config/
>
> - –file:./
>
> - –classpath:/config/
>
> - –classpath:/**（默认）**
>
> 优先级**==由高到低==**，高优先级的配置会**覆盖**低优先级的配置；
>
> SpringBoot会从这四个位置全部加载主配置文件；**==互补配置==**；



## 5、Spring Boot外部配置加载顺序

> ==SpringBoot也可以从以下位置加载配置； 优先级从高到低；高优先级的配置覆盖低优先级的配置，所有的配置会形成互补配置==
>
> 1. 命令行参数 ：所有的配置都可以在命令行上进行指定
     >    java -jar spring-boot-02-config-02-0.0.1-SNAPSHOT.jar --server.port=8087 --server.context-path=/abc
     >    多个配置用空格分开； --配置项=值
> 2. 来自java:comp/env的JNDI属性
> 3. Java系统属性（System.getProperties()）
> 4. 操作系统环境变量
> 5. RandomValuePropertySource配置的random.*属性值；由jar包外向jar包内进行寻找；优先加载带profile
> 6. jar包外部的application-{profile}.properties或application.yml(带spring.profile)配置文件
> 7. jar包内部的application-{profile}.properties或application.yml(带spring.profile)配置文件，再来加载不带profile
> 8. jar包外部的application.properties或application.yml(不带spring.profile)配置文件
> 9. jar包内部的application.properties或application.yml(不带spring.profile)配置文件
> 10. @Configuration注解类上的@PropertySource
> 11. 通过`SpringApplication.setDefaultProperties`指定的默认属性；所有支持的配置加载来源；参考官方文档



## 6、SpringBoot事务的使用

> SpringBoot的事务很简单，首先使用注解EnableTransactionManagement开启事务之后，然后在Service方法上添加注解Transactional便可。


## 7、Async异步调用方法

> 在`SpringBoot`中使用异步调用是很简单的，只需要在方法上使用`@Async`注解即可实现方法的异步调用。 注意：需要在启动类加入`@EnableAsync`使异步调用`@Async`注解生效。
> 注：异步方法不能跟调用方法在同一个类中，否则会导致异步失效


## 8、 Spring Boot 中如何解决跨域问题

```java
@Configuration
public class ResourcesConfig implements WebMvcConfigurer
{
    /**
     * 跨域配置
     */
    @Bean
    public CorsFilter corsFilter()
    {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        // 设置访问源地址
        config.addAllowedOrigin("*");
        // 设置访问源请求头
        config.addAllowedHeader("*");
        // 设置访问源请求方法
        config.addAllowedMethod("*");
        // 对接口配置跨域设置
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```



## 9、Spring Boot 中的监视器是什么？

> Spring boot actuator 是 spring 启动框架中的重要功能之一。Spring boot 监视器可帮助您访问生产环境中正在运行的应用程序的当前状态。有几个指标必须在生产环境中进行检查和监控。即使一些外部应用程序可能正在使用这些服务来向相关人员触发警报消息。监视器模块公开了一组可直接作为 HTTP URL 访问的 REST 端点来检查状态。



## 10、如何在 Spring Boot 中禁用 Actuator 端点安全性？

> 默认情况下，所有敏感的 HTTP 端点都是安全的，只有具有 ACTUATOR 角色的用户才能访问它们。安全性是使用标准的 HttpServletRequest.isUserInRole 方法实施的。
>
> 我们可以使用`management.security.enabled = false`来禁用安全性。只有在执行机构端点在防火墙后访问时，才建议禁用安全性。



## 11、如何实现 Spring Boot 应用程序的安全性？

> 为了实现 Spring Boot 的安全性，我们使用 spring-boot-starter-security 依赖项，并且必须添加安全配置。它只需要很少的代码。配置类将必须扩展 WebSecurityConfigurerAdapter 并覆盖其方法。



## 12、什么是 Spring Profiles？

> Spring Profiles 允许用户根据配置文件（dev，test，prod 等）来注册 bean。因此，当应用程序在开发中运行时，只有某些 bean 可以加载，而在 PRODUCTION 中，某些其他 bean 可以加载。假设我们的要求是 Swagger 文档仅适用于 QA 环境，并且禁用所有其他文档。这可以使用配置文件来完成。Spring Boot 使得使用配置文件非常简单。



## 13、如何使用 Spring Boot 实现异常处理？

> Spring 提供了一种使用 ControllerAdvice 处理异常的非常有用的方法。 我们通过实现一个`@ControlerAdvice` 类，来处理控制器类抛出的所有异常。



## 14、ControllerAdvice 和 RestControllerAdvice 有什么区别

> 区别就好比：Controller和RestController一样
>
> RestControllerAdvice = RequestMapping + ControllerAdvice



## 15、 如何在 Spring Boot 启动的时候运行一些特定的代码？

> 可以实现接口 ApplicationRunner 或者 CommandLineRunner，这两个接口实现方式一样，它们都只提供了一个 run 方法



## 16、Spring Boot怎么禁用循环依赖？

> 1. 直接允许循环依赖，在Spring Boot配置文件中配置，默认为false
     >
     >    ```yaml
>    spring:
>      main:
>        allow-circular-references: true
>    ```
>
>
>
> 2. **使用方法的返回值获取实例对象，替换通过成员变量注入实例对象**
     >
     >    ```java
>    public IAService getStaffService(){
>        return SpringUtils.getBean(IBService.class);
>    }
>    ```
>
>

## 17、Spring Boot自动配置的原理

> ### @SpringBootApplication=@Configuration+@EnableAutoConfiguration+@ComponentScan
>
> ```java
> @Target({ElementType.TYPE}) // 注解的适用范围，其中TYPE用于描述类、接口（包括包注解类型）或enum声明
> @Retention(RetentionPolicy.RUNTIME)// 注解的生命周期，保留到class文件中（三个生命周期）
> @Documented                       // 表明这个注解应该被javadoc记录
> @Inherited                        // 子类可以继承该注解
> @SpringBootConfiguration          // 继承了Configuration，表示当前是注解类
> @EnableAutoConfiguration          // 开启springboot的注解功能，springboot的四大神器之一，其借助@import的帮助
> @ComponentScan( // 扫描路径设置
>     excludeFilters = {@Filter(
>     type = FilterType.CUSTOM,
>     classes = {TypeExcludeFilter.class}
> ), @Filter(
>     type = FilterType.CUSTOM,
>     classes = {AutoConfigurationExcludeFilter.class}
> )}
> )
> public @interface SpringBootApplication {
>     ......
> }
> ```
>
> ## @Configuration
>
> 标明该类使用Spring基于Java的配置。虽然本书不会写太多配置，但我们会更倾向于使用基于Java而不是XML的配置。
>
> ## @EnableAutoConfiguration
>
> Spring Boot 的@EnableAutoConfiguration ： 这个不起眼的小注解也可以称为@Abracadabra(咒语)，就是这一
>
> 行配置开启了Spring Boot自动配置。**简单概括一下就是，借助@Import的支持，将所有符合自动配置条件的bean定义加载到IoC容器。**
>
> ```java
> @Target({ElementType.TYPE})
> @Retention(RetentionPolicy.RUNTIME)
> @Documented
> @Inherited
> @AutoConfigurationPackage      //自动配置包
> @Import({AutoConfigurationImportSelector.class})  //导入自动配置的组件
> public @interface EnableAutoConfiguration {
>     String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";
> 
>     Class<?>[] exclude() default {};
> 
>     String[] excludeName() default {};
> }
> ```
>
> ## @ComponentScan
>
> Spring的@ComponentScan：启用组件扫描，这样你写的Web控制器类和其他组件才能被自动发现并注册为Spring应用程序上下文里的Bean。本章稍后会写一个简单的Spring MVC控制器，使用@Controller进行注解，这样组件扫描才能找到它。
>
> ## 自动配置幕后英雄：SpringFactoriesLoader
>
> 借助于Spring框架原有的一个工具类：**SpringFactoriesLoader**的支持，@EnableAutoConfiguration可以智能的自动配置功效才得以大功告成！
>
> SpringFactoriesLoader属于Spring框架私有的一种扩展方案，其主要功能就是从指定的配置文件META-INF/spring.factories加载配置。
>
> ```java
> public abstract class SpringFactoriesLoader {
> //...
> public static <T> List<T> loadFactories(Class<T> factoryClass, ClassLoader
> classLoader) {
> ...
> }
> public static List<String> loadFactoryNames(Class<?> factoryClass, ClassLoader
> classLoader) {
> ....
> }
> }
> ```
>



## 18、Spring Boot排除某些自动配置？

> 在某些情况下，一些自动配置可能是我们不需要的，需要排除，最常见的就是`DataSourceAutoConfiguration.class`
>
> - 使用 `@SpringBootApplication` 注解的时候，使用 exclude 属性进行排除指定的类
    >
    >   ```java
>   @SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, MailSenderAutoConfiguration.class})
>   public class Application {
>       // ...
>   }
>   ```
>
> - 单独使用 `@EnableAutoConfiguration` 注解的时候
    >
    >   ```java
>   @...
>   @EnableAutoConfiguration
>   (exclude = {DataSourceAutoConfiguration.class, MailSenderAutoConfiguration.class})
>   public class Application {
>       // ...
>   }
>   ```
>
>
>
> - 使用 Spring Cloud 和 `@SpringCloudApplication` 注解的时候
    >
    >   ```java
>   @...
>   @EnableAutoConfiguration
>   (exclude = {DataSourceAutoConfiguration.class, MailSenderAutoConfiguration.class})
>   @SpringCloudApplication
>   public class Application {
>       // ...
>   }
>   ```
>
>
>
> - 在配置文件中排除
    >
    >   ```properties
>   # 写法一
>   spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration
>   # 写法二
>   spring.autoconfigure.exclude[0]=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
>   spring.autoconfigure.exclude[1]=org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration
>   ```
    >
    >   ```yaml
>   spring:     
>     autoconfigure:
>       exclude:
>         - org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
>         - org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration
>   ```
>
>   
