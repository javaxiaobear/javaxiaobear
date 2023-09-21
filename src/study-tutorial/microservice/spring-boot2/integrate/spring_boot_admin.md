---
title: 6、Spring-Boot-admin
---
> ### [What is Spring Boot Admin?](https://codecentric.github.io/spring-boot-admin/2.1.6/#_what_is_spring_boot_admin)
>
> codecentric’s Spring Boot Admin is a community project to manage and monitor your [Spring Boot](http://projects.spring.io/spring-boot/) ® applications. The applications register with our Spring Boot Admin Client (via HTTP) or are discovered using Spring Cloud ® (e.g. Eureka, Consul). The UI is just a Vue.js application on top of the Spring Boot Actuator endpoints.

#### 1、设置Spring Boot Admin Server

- 导入依赖

  ```xml
  <!-- https://mvnrepository.com/artifact/de.codecentric/spring-boot-admin-server -->
  <dependency>
      <groupId>de.codecentric</groupId>
      <artifactId>spring-boot-admin-server</artifactId>
      <version>2.2.2</version>
  </dependency>
  ```

- 添加`@EnableAdminServer`到配置中来引入Spring Boot Admin Server 配置

  ```java
  @EnableAdminServer
  @SpringBootApplication
  public class SpringBootDemoAdminServerApplication {
  	public static void main(String[] args) {
  		SpringApplication.run(SpringBootDemoAdminServerApplication.class, args);
  	}
  }
  ```

- 配置文件application.yaml配置端口

  ```yaml
  server:
    port: 8081
  ```

#### 2、Spring Boot Admin  Client

- 导入依赖

  ```xml
  <!-- https://mvnrepository.com/artifact/de.codecentric/spring-boot-admin-starter-client -->
  <dependency>
      <groupId>de.codecentric</groupId>
      <artifactId>spring-boot-admin-starter-client</artifactId>
      <version>2.2.2</version>
  </dependency>
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
  </dependency>
  ```

- 配置application.yml

  ```yaml
  server:
    port: 8080
    servlet:
      context-path: /demo
  spring:
    application:
      ## Spring Boot Admin展示的客户端项目名，不设置，会使用自动生成的随机id
      name: spring-boot-demo-admin-client
    boot:
      admin:
        client:
          ## Spring Boot Admin 服务端地址
          url: "http://localhost:8000/"
          instance:
            metadata:
              ## 客户端端点信息的安全认证信息
              user.name: ${spring.security.user.name}
              user.password: ${spring.security.user.password}
    security:
      user:
        name: xiaobear
        password: 123456
  management:
    endpoint:
      health:
        ## 端点健康情况，默认值"never"，设置为"always"可以显示硬盘使用情况和线程情况
        show-details: always
    endpoints:
      web:
        exposure:
          ## 设置端点暴露的哪些内容，默认["health","info"]，设置"*"代表暴露所有可访问的端点
          include: "*"
  ```

- 编写简单的Controller类

  ```java
  @RestController
  public class IndexController {
  	@GetMapping(value = {"", "/"})
  	public String index() {
  		return "Hello,yhx";
  	}
  }
  ```

  同时启动项目 

一个简单的Spring Boot Admin整合就完成了，当然还可以整合更多的，具体参照官方文档！！！

https://codecentric.github.io/spring-boot-admin/2.1.6/#getting-started
