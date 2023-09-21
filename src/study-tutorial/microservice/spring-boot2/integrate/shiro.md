---
title: 1、shiro
---
> shiro简介
>
> **Apache Shiro™**是一个强大且易用的Java安全框架,能够用于**身份验证、授权、加密和会话管理**。Shiro拥有易于理解的API,您可以快速、轻松地获得任何应用程序——从最小的移动应用程序到最大的网络和企业应用程序。

简而言之，Apache Shiro 是一个强大灵活的开源安全框架，可以完全处理身份验证、授权、加密和会话管理。

### 1、功能

- 验证用户身份
- 用户访问权限控制，比如：1、判断用户是否分配了一定的安全角色。2、判断用户是否被授予完成某个操作的权限
- 在非 Web 或 EJB 容器的环境下可以任意使用Session API
- 可以响应认证、访问控制，或者 Session 生命周期中发生的事件
- 可将一个或以上用户安全数据源数据组合成一个复合的用户 “view”(视图)
- 支持单点登录(SSO)功能
- 支持提供“Remember Me”服务，获取用户关联信息而无需登录
  ···

### 2、特点

- **易于使用**——易用性是项目的最终目标。应用程序安全非常令人困惑和沮丧,被认为是“不可避免的灾难”。如果你让它简化到新手都可以使用它,它就将不再是一种痛苦了。
- **全面**——没有其他安全框架的宽度范围可以同Apache Shiro一样,它可以成为你的“一站式”为您的安全需求提供保障。
- **灵活**——Apache Shiro可以在任何应用程序环境中工作。虽然在网络工作、EJB和IoC环境中可能并不需要它。但Shiro的授权也没有任何规范,甚至没有许多依赖关系。
- **Web支持**——Apache Shiro拥有令人兴奋的web应用程序支持,允许您基于应用程序的url创建灵活的安全策略和网络协议(例如REST),同时还提供一组JSP库控制页面输出。
- **低耦合**——Shiro干净的API和设计模式使它容易与许多其他框架和应用程序集成。你会看到Shiro无缝地集成Spring这样的框架, 以及Grails, Wicket, Tapestry, Mule, Apache Camel, Vaadin…等。
- **被广泛支持**——Apache Shiro是Apache软件基金会的一部分。项目开发和用户组都有友好的网民愿意帮助。这样的商业公司如果需要Katasoft还提供专业的支持和服务。

### 3、Apache Shiro Features 特性

![image-20200327173643872](https://raw.githubusercontent.com/yhx1001/PicGo/img/20200327173643872.png)

Shiro以Shiro开发团队所谓的“应用程序安全性的四个基石”为目标-身份验证，授权，会话管理和密码术：

- **身份验证：**有时称为“登录”，这是证明用户就是他们所说的身份的行为。
- **授权：**访问控制的过程，即确定“谁”有权访问“什么”。
- **会话管理：**即使在非Web或EJB应用程序中，也可以管理用户特定的会话。
- **密码术：**使用密码算法保持数据安全，同时仍然易于使用。

![image-20200327175343784](https://raw.githubusercontent.com/yhx1001/PicGo/img/20200327175343784.png)

![image-20200327175407076](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200327175407076.png)

具体参见官网https://shiro.apache.org/

### 4、shiro认证过程

![image-20200327180118643](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200327180118643.png)

### 5、shiro快速开始

1. 创建一个maven或者Spring Boot工程

2. 导入依赖

   ```xml
    <!-- https://mvnrepository.com/artifact/org.apache.shiro/shiro-core -->
           <dependency>
               <groupId>org.apache.shiro</groupId>
               <artifactId>shiro-core</artifactId>
               <version>1.5.2</version>
           </dependency>
           <!-- configure logging -->
           <dependency>
               <groupId>org.slf4j</groupId>
               <artifactId>jcl-over-slf4j</artifactId>
               <version>1.7.29</version>
           </dependency>
           <dependency>
               <groupId>org.slf4j</groupId>
               <artifactId>slf4j-log4j12</artifactId>
               <version>1.7.29</version>
           </dependency>
           <!-- https://mvnrepository.com/artifact/log4j/log4j -->
           <dependency>
               <groupId>log4j</groupId>
               <artifactId>log4j</artifactId>
               <version>1.2.17</version>
           </dependency>
   ```

3. 日志文件logging.properties

   ```properties
   log4j.rootLogger=INFO, stdout
   
   log4j.appender.stdout=org.apache.log4j.ConsoleAppender
   log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
   log4j.appender.stdout.layout.ConversionPattern=%d %p [%c] - %m %n
   
   ## General Apache libraries
   log4j.logger.org.apache=WARN
   
   ## Spring
   log4j.logger.org.springframework=WARN
   
   ## Default Shiro logging
   log4j.logger.org.apache.shiro=INFO
   
   ## Disable verbose logging
   log4j.logger.org.apache.shiro.util.ThreadContext=WARN
   log4j.logger.org.apache.shiro.cache.ehcache.EhCache=WARN
   ```

4. 在类路径下创建shiro.ini，不下载ini插件的话，就是一个普通的文本，建议下载一下

   ```ini
   [users]
   ## user 'root' with password 'secret' and the 'admin' role
   root = secret, admin
   ## user 'guest' with the password 'guest' and the 'guest' role
   guest = guest, guest
   ## user 'presidentskroob' with password '12345' ("That's the same combination on
   ## my luggage!!!" ;)), and role 'president'
   presidentskroob = 12345, president
   ## user 'darkhelmet' with password 'ludicrousspeed' and roles 'darklord' and 'schwartz'
   darkhelmet = ludicrousspeed, darklord, schwartz
   ## user 'lonestarr' with password 'vespa' and roles 'goodguy' and 'schwartz'
   lonestarr = vespa, goodguy, schwartz
   
   ## -----------------------------------------------------------------------------
   ## Roles with assigned permissions
   #
   ## Each line conforms to the format defined in the
   ## org.apache.shiro.realm.text.TextConfigurationRealm#setRoleDefinitions JavaDoc
   ## -----------------------------------------------------------------------------
   [roles]
   ## 'admin' role has all permissions, indicated by the wildcard '*'
   admin = *
   ## The 'schwartz' role can do anything (*) with any lightsaber:
   schwartz = lightsaber:*
   ## The 'goodguy' role is allowed to 'drive' (action) the winnebago (type) with
   ## license plate 'eagle5' (instance specific id)
   goodguy = winnebago:drive:eagle5
   ```

5. 在java目录下（Spring Boot跟启动类在同一个包下）创建Quickstart.java

   ```java
   public class Quickstart {
   
       private static final transient Logger log = LoggerFactory.getLogger(Quickstart.class);
       public static void main(String[] args) {
           Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
           SecurityManager securityManager = factory.getInstance();
           SecurityUtils.setSecurityManager(securityManager);
    
           //获取当前的用户对象subject
           Subject currentUser = SecurityUtils.getSubject();
          //通过当前用户拿到session
           Session session = currentUser.getSession();
           session.setAttribute("someKey", "aValue");
           String value = (String) session.getAttribute("someKey");
           if (value.equals("aValue")) {
               log.info("Retrieved the correct value! [" + value + "]");
           }
           // 判断当前的用户是否被认证
           if (!currentUser.isAuthenticated()) {
               //token令牌，没有获取，随机设置
               UsernamePasswordToken token = new UsernamePasswordToken("lonestarr", "vespa");
               token.setRememberMe(true);//记住我
               try {
                   currentUser.login(token);//执行了登录操作
               } catch (UnknownAccountException uae) {//未知用户
                   log.info("There is no user with username of " + token.getPrincipal());
               } catch (IncorrectCredentialsException ice) {//错误密码
                   log.info("Password for account " + token.getPrincipal() + " was incorrect!");
               } catch (LockedAccountException lae) {//用户被锁定
                   log.info("The account for username " + token.getPrincipal() + " is locked.  " +
                           "Please contact your administrator to unlock it.");
               }
               // ... catch more exceptions here (maybe custom ones specific to your application?
               catch (AuthenticationException ae) {
                   //unexpected condition?  error?
               }
           }
           //say who they are:
           //print their identifying principal (in this case, a username):
           log.info("User [" + currentUser.getPrincipal() + "] logged in successfully.");
   
           //test a role:测试角色
           if (currentUser.hasRole("schwartz")) {
               log.info("May the Schwartz be with you!");
           } else {
               log.info("Hello, mere mortal.");
           }
           //test a typed permission (not instance-level)
           if (currentUser.isPermitted("lightsaber:wield")) {
               log.info("You may use a lightsaber ring.  Use it wisely.");
           } else {
               log.info("Sorry, lightsaber rings are for schwartz masters only.");
           }
           //a (very powerful) Instance Level permission:
           if (currentUser.isPermitted("winnebago:drive:eagle5")) {
               log.info("You are permitted to 'drive' the winnebago with license plate (id) 'eagle5'.  " +
                       "Here are the keys - have fun!");
           } else {
               log.info("Sorry, you aren't allowed to drive the 'eagle5' winnebago!");
           }
           //all done - log out!注销
           currentUser.logout();
           System.exit(0);
       }
   }
   ```

6. 启动Quickstart.java的main方法

   ```
   18:09:26.277 [main] INFO com.xiaobear.springboot.Quickstart - User [lonestarr] logged in successfully.
   18:09:26.277 [main] INFO com.xiaobear.springboot.Quickstart - May the Schwartz be with you!
   18:09:26.277 [main] INFO com.xiaobear.springboot.Quickstart - You may use a lightsaber ring.  Use it wisely.
   18:09:26.278 [main] INFO com.xiaobear.springboot.Quickstart - You are permitted to 'drive' the winnebago with license plate (id) 'eagle5'.  Here are the keys - have fun!
   18:09:26.278 [main] DEBUG org.apache.shiro.mgt.DefaultSecurityManager - Logging out subject with primary principal lonestarr
   18:09:26.278 [main] DEBUG org.apache.shiro.session.mgt.AbstractSessionManager - Stopping session with id [8fce998d-1600-406e-b3db-1015dae0d42d]
   
   ```

   注意：

    - **如果没有导入日志门面log4j或者其他的，控制台就会爆红或者什么也不输出**

### 6、Spring Boot+Mybatis+Shiro

1. 新建项目，导入依赖

   ```xml
   <!-- https://mvnrepository.com/artifact/org.apache.shiro/shiro-spring-boot-web-starter -->
   <dependency>
       <groupId>org.apache.shiro</groupId>
       <artifactId>shiro-spring</artifactId>
       <version>1.5.2</version>
   </dependency>
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-devtools</artifactId>
       <scope>runtime</scope>
       <optional>true</optional>
   </dependency>
   <dependency>
       <groupId>org.projectlombok</groupId>
       <artifactId>lombok</artifactId>
       <optional>true</optional>
   </dependency>
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-jpa</artifactId>
   </dependency>
   ```

2. 配置文件application.yml

   ```xml
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/mybatis?useSSL=true&useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT
       username: root
       password: 密码
       driver-class-name: com.mysql.cj.jdbc.Driver
   
   mybatis:
     mapper-locations: classpath:mapper/*.xml
     type-aliases-package: com.xiaobear.springbootshiro
   ```

3. 实体类

   ```java
   @Data
   @AllArgsConstructor
   @NoArgsConstructor
   @Entity
   public class User {
       private int id;
       private String name;
       private String pwd;
       private String perms;
   }
   ```

4. 快速搭建mybatis环境

    - **UserMapper接口**

   ```java
   @Mapper
   @Repository
   public interface UserMapper {
   
       User queryUserByName(String name);
   }
   ```

    - **UserService接口**

   ```java
   public interface UserService {
       User queryUserByName(String name);
   }
   ```

    - **UserServiceImpl**

   ```java
   @Service
   public class UserServiceImpl implements UserService {
       @Autowired
       UserMapper userMapper;
       @Override
       public User queryUserByName(String name) {
           return userMapper.queryUserByName(name);
       }
   }
   ```

    - **UserMapper.xml**

   ```xml
   <?xml version="1.0" encoding="UTF-8" ?>
   <!DOCTYPE mapper
           PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
           "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
   
   <mapper namespace="com.xiaobear.springbootshiro.mapper.UserMapper">
       <select id="queryUserByName" resultType="com.xiaobear.springbootshiro.pojo.User">
           select * from mybatis.user where name = #{name}
       </select>
   </mapper>
   ```

5. UserRealm：**自定义的Realm->授权与认证**

   ```java
   public class UserRealm extends AuthorizingRealm {
       @Autowired
       UserService userService;
   //    授权
       @Override
       protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
           System.out.println("执行了=>授权doGetAuthorizationInfo");
           SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
           info.addStringPermission("user:add");//增加了授权add页面
           //拿到当前登录的对象
           Subject subject = SecurityUtils.getSubject();
           User currentUser = (User) subject.getPrincipal();//拿到User对象
           info.addStringPermission(currentUser.getPerms());//设置当前用户的权限
           return info;
       }
   /*认证*/
       @Override
       protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
           System.out.println("执行了=>认证doGetAuthorizationInfo");
           //连接真实的数据库
           UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) authenticationToken;
           User user = userService.queryUserByName(usernamePasswordToken.getUsername());
           if (user ** null) {
               return null;
           }
           Subject subject1 = SecurityUtils.getSubject();
           Session session = subject1.getSession();
           session.setAttribute("LoginUser",user);
           //密码认证
           return new SimpleAuthenticationInfo(user,user.getPwd(),"");
           /*
          内存中访问数据
          String name="root";
          String password="123456";
          UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) authenticationToken;
          if(!usernamePasswordToken.getUsername().equals(name)){
              return null;
          }
          //密码认证
           return new SimpleAuthenticationInfo("",password,"");
           */
       }
   }
   ```

6. ShiroConfig：

   ```java
   @Configuration
   public class ShiroConfig {
       @Bean
       public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("securityManager") DefaultWebSecurityManager defaultWebSecurityManager){
           ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean();
   //        设置安全管理器
           bean.setSecurityManager(defaultWebSecurityManager);
           /*添加shiro内置过滤器
           anon:例子/admins/**=anon 没有参数，表示可以匿名使用。
           authc:例如/admins/user/**=authc表示需要认证(登录)才能使用，没有参数
           authcBasic:例如/admins/user/**=authcBasic,没有参数表示httpBasic认证
           perms :（权限）例子/admins/user/=perms[user:add:],参数可以写多个，多个时必须加上引号，并且参数之间用逗号分割，例如/admins/user/=perms[“user:add:,user:modify:*”]，当有多个参数时必须每个参数都通过才通过，想当于isPermitedAll()方法。
           port :例子/admins/user/**=port[8081],当请求的url的端口不是8081是跳转到schemal://serverName:8081?queryString,其中schmal是协议http或https等，serverName是你访问的host,8081是url配置里port的端口，queryString
           rest :例子/admins/user/=rest[user],根据请求的方法，相当于/admins/user/=perms[user:method] ,其中method为post，get，delete等。
           roles :(角色)例子/admins/user/=roles[admin],参数可以写多个，多个时必须加上引号，并且参数之间用逗号分割，当有多个参数时，例如admins/user/=roles[“admin,guest”],每个参数通过才算通过，相当于hasAllRoles()方法。
           ssl :例子/admins/user/**=ssl没有参数，表示安全的url请求，协议为https
           user :例如/admins/user/**=user没有参数表示必须存在用户，当登入操作时不做检查 */
           HashMap<String, String> filterMap= new LinkedHashMap<>();
   		/*       
   		filterMap.put("/user/add","authc");
           filterMap.put("/user/delete","authc");
           */
           filterMap.put("/user/add","perms[user:add]");
           filterMap.put("/user/delete","perms[user:delete]");
           filterMap.put("/user/*","authc");
           bean.setFilterChainDefinitionMap(filterMap);
   		//登录页面
           bean.setLoginUrl("/tologin");
           //未授权页面
           bean.setUnauthorizedUrl("/unauthorized");
           return bean;
       }
   
       @Bean(name = "securityManager")
       public DefaultWebSecurityManager getDefaultWebSecurityManager(@Qualifier("userRealm") UserRealm userRealm){
           DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
           /*关联userRealm*/
           securityManager.setRealm(userRealm);
           return securityManager;
       }
       @Bean
       public UserRealm userRealm(){
           return new UserRealm();
       }
       
       //整合shiroDialect
       @Bean
       public ShiroDialect getshiroDialect(){
           return new ShiroDialect();
       }
   
   }
   ```

7. **Controller层**

   ```java
   @Controller
   public class MyController {
   
       @RequestMapping({"/","/index"})
       public String ToIndex(Model model){
           model.addAttribute("msg","hello,shiro");
           return "index";
       }
   
       @RequestMapping("/user/add")
       public String add(){
           return "user/add";
       }
   
       @RequestMapping("/user/delete")
       public String delete(){
           return "user/delete";
       }
   
      @RequestMapping("/tologin")
       public String toLogin() {
           return "login";
       }
   
       @RequestMapping("/login")
       public String login(String username, String password, Model model){
           Subject subject = SecurityUtils.getSubject();
           UsernamePasswordToken token = new UsernamePasswordToken(username,password);
           try {
               subject.login(token);//执行登录的方法
   
               return "index";
           }catch (UnknownAccountException e) {
               model.addAttribute("msg","用户名错误");
           }catch (IncorrectCredentialsException e){
               model.addAttribute("msg","密码错误");
           }
           return "login";
       }
   
       @RequestMapping("/unauthorized")
       @ResponseBody
       public String unauthorized(){
           return "未经授权无法访问";
       }
   }
   ```

8. 页面准备，因只用于学习测试，页面很简陋

    - index.html

      ```html
      <!DOCTYPE html>
      <html lang="en" xmlns:th="http://www.thymeleaf.org"
            xmlns:shiro="http://www.w3.org/1999/xhtml">
      <head>
          <meta charset="UTF-8">
          <title>首页</title>
      </head>
      <body>
      <h1>hello xiaobear</h1>
      <p th:text="${msg}"></p>
      <hr>
      <div th:if="${session.LoginUser**null}">
          <a th:href="@{/tologin}">登录</a>
      </div>
      <div shiro:hasPermission="user:add">
      <a th:href="@{/user/add}">add</a>
      </div>
      <div shiro:haspermission="user:delete">
      <a th:href="@{/user/delete}">delete</a>
      </div>
      </body>
      </html>
      ```

    - login.html

      ```html
      <!DOCTYPE html>
      <html lang="en" xmlns:th="http://www.w3.org/1999/xhtml">
      <head>
          <meta charset="UTF-8">
          <title>login</title>
      </head>
      <body>
      <p th:text="${msg}" style="color: red"></p>
      <form th:action="@{/login}">
          <p>用户名 <input type="text" name="username"></p>
          <p>密码 <input type="text" name="password"></p>
          <p><input type="submit"></p>
      </form>
      </body>
      </html>
      ```

    - user/add.html

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>add</title>
      </head>
      <body>
      <h1>add</h1>
      </body>
      </html>
      ```

    - user/delete.html

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>delete</title>
      </head>
      <body>
      <h1>delete</h1>
      </body>
      </html>
      ```
