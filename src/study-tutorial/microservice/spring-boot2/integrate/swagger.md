---
title: 2、Swagger
---

- 号称世界上最流行的Api框架
- RestFul Api 文档在线自动生成工具-->**Api文档与Api定义同步更新**
- 直接运行，可以在线测试API接口
- 支持多种语言（Java、php）

> Simplify API development for users, teams, and enterprises with the Swagger open source and professional toolset. Find out how Swagger can help you design and document your APIs at scale.
>
> 借助Swagger开源和专业工具集，为用户，团队和企业简化API开发。了解Swagger如何帮助您大规模设计和记录API。

#### 1、快速开始Swagger

- 新建Spring Boot项目

- 创建hello工程

- 导入Swagger相关依赖

  ```xml
  <!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
          <dependency>
              <groupId>io.springfox</groupId>
              <artifactId>springfox-swagger-ui</artifactId>
              <version>2.9.2</version>
          </dependency>
          <!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
          <dependency>
              <groupId>io.springfox</groupId>
              <artifactId>springfox-swagger2</artifactId>
              <version>2.9.2</version>
          </dependency>
  ```

- HelloController层

  ```java
  @RestController
  public class HelloController {
      @RequestMapping(value = "/hello")
      public String hello() {
          return "xiaobear,hello";
      }
  }
  ```

- 测试：http://localhost:8080/hello以及http://localhost:8080/swagger-ui.html

![image-20200329125810924](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200329125810924.png)

#### 2、Swagger配置

```java
@Configuration
@EnableSwagger2   //开启swagger2
public class SwaggerConfig {
//    配置了swagger的docket实例
    @Bean
    public Docket decket() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo());
    }

//    配置swagger信息=apiInfo
    private ApiInfo apiInfo() {
                     //作者信息
                Contact contact = new Contact("xiaobear","http://xiaobear.cn/","2861184805@qq.com");
        return new ApiInfo(
                "Spring Boot整合Swagger",
                "你什么都想要，凭什么不努力",
                "1.0",
                "http://xiaobear.cn/",
                contact,
                "Apache 2.0",
                "http://www.apache.org/licenses/LICENSE-2.0",
                new ArrayList());
    }
}
```

#### 3、Swagger配置扫描接口

```java
@Configuration
@EnableSwagger2   //开启swagger2
public class SwaggerConfig {
//    配置了swagger的docket实例
    @Bean
    public Docket decket() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
               // enable是否开启swagger，if false，咋不能在浏览器中访问
                //.enable(false)
                .select()
                //RequestHandlerSelectors：配置要扫描接口的方式
                //basePackage：指定扫描的包
                //any：扫描全部
                //none：不扫描
                //withClassAnnotation：扫描类上的注解，参数是一个注解的反射对象
                //withMethodAnnotation：扫描方法上的注解
                .apis(RequestHandlerSelectors.basePackage("com.xiaobear.swagger.controller"))
                //paths：过滤路径
                .paths(PathSelectors.any())
                .build();
    }
```

**swagger如何在生产环境中使用，发布环境不用？**

- 判断是否为生产环境 flag = false

- 注入enable（false）

  ```java
   @Bean
      public Docket decket(Environment environment) {
          //设置要显示的swagger
          Profiles profiles = Profiles.of("dev");
          //获取项目的环境，environment.acceptsProfiles 判断是否处在自己设定的环境当中
          boolean acceptsProfiles = environment.acceptsProfiles(profiles);
          System.out.println(acceptsProfiles);
  
          return new Docket(DocumentationType.SWAGGER_2)
                  .apiInfo(apiInfo())
                 // enable是否开启swagger，if false，咋不能在浏览器中访问
                  .enable(acceptsProfiles)
                  .select()
                  //RequestHandlerSelectors：配置要扫描接口的方式
                  //basePackage：指定扫描的包
                  //any：扫描全部
                  //none：不扫描
                  //withClassAnnotation：扫描类上的注解，参数是一个注解的反射对象
                  //withMethodAnnotation：扫描方法上的注解
                  .apis(RequestHandlerSelectors.basePackage("com.xiaobear.swagger.controller"))
                  //paths：过滤路径
                  .paths(PathSelectors.any())
                  .build();
      }
  ```

**配置API文档的分组**

```java
  .groupName("xiaobear")
```

![image-20200329205700719](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200329205700719.png)

**配置多个分组文档**

```java
 @Bean
    public Docket docker1(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("A");
    }
    @Bean
    public Docket docker2(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("B");
    }
    @Bean
    public Docket docker3(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("C");
    }
```

**实体类**

```java
//@Api(注释)
@ApiModel("用户实体类")

public class User {
    @ApiModelProperty("用户名")
    public String username;
    @ApiModelProperty("密码")
    public String password;
}

```

**Controller**

```java
@RestController
public class HelloController {

    @ApiOperation("hello控制")//用来标记方法作用的注解
    @GetMapping(value = "/hello")
    public String hello() {
        return "xiaobear,hello";
    }

    @GetMapping(value = "/hello1")
    public String hello1(@ApiParam("用户名") String username) {
        return username+"hello";
    }
    @ApiOperation("测试类")
    @PostMapping(value = "/hello2")
    public User hello2(@ApiParam("用户名") User user) {
        return user;
    }
    //只要在我们的接口中，返回值存在实体类，就会被扫描到swagger中
    @PostMapping(value = "/user")
    public User user() {
        return new User();
    }
}
```

#### 4、在Spring Security的配置

如果我们的项目集成了Spring Security，swagger2可能会被拦截，所有我们必须把它排除在外，在Spring Security中重写configure方法

```java
 public void configure(WebSecurity web)throws Exception {
        web.ignoring()
                .antMatchers("swagger-ui.html")
                .antMatchers("/v2/**")
                .antMatchers("swagger-resoures/**");
    }
```

**注：****发布的时候，关闭Swagger！！！**
