---
title: 分布式会话解决方案
---

## 1、传统Session

### 1、传统session的概述

#### 1、认证过程

> 1、用户向服务器发送用户名和密码。
>
> 2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。
>
> 3、服务器向用户返回一个 session_id，写入用户的 Cookie。
>
> 4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。
>
> 5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230626152851627.png" alt="image-20230626152851627" style="zoom:80%;" />

#### 2、存在的问题

> 扩展性不好，向上图中，存在两个服务器时，session不能共享

#### 3、解决方案

##### 1、session复制

> 将服务器1的session，复制到服务器2，同样将服务器2的session也复制到服务器1，这样两台服务器的session就一致了。像tomcat等web容器都支持session复制的功能，在**同一个局域网内**，一台服务器的`session`会广播给其他服务器。
>
> 缺点：同一个网段内服务器太多，每个服务器都会去复制session，会造成服务器内存浪费。

##### 2、session黏性



##### 3、Redis解决分布式session

解决方案如下：**统一将用户信息存入redis中，从redis中去获取登录的用户信息，这样就可解决分布式session了**

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230626155211581.png" alt="image-20230626155211581" style="zoom:50%;" />



### 2、传统session实战

#### 1、session服务搭建

新建一个SpringBoot项目，编写controller类，代码如下👇

```java
@RestController
@RequestMapping("/user")
public class UserController {

    /**
     * 登录接口
     * @param userName
     * @param password
     * @param session
     * @return
     */
    @GetMapping("/login")
    public String login(@RequestParam String userName, @RequestParam String password, HttpSession session){
        session.setAttribute("user", userName);
        return "登录成功";
    }

    /**
     * 获取用户信息接口
     * @param session
     * @return
     */
    @GetMapping("/info")
    public String getInfo(HttpSession session){
        return "登录用户为：" +  session.getAttribute("user");
    }
}
```

#### 2、测试

##### 1、访问登录接口

接口路径：http://localhost:8081/user/login?userName=javaxiaobear&password=123456

![image-20230627155331472](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627155331472.png)

##### 2、访问获取用户接口

接口路径：http://localhost:8081/user/info

![image-20230627155416855](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627155416855.png)



##### 3、为什么第二次访问，就获取了到了用户信息呢？

> 第一次访问登录接口，后端代码中我们有设置session，设置后，前端浏览器获取到了，就会把session的值set-cookie中，当第二次请求info接口时，会携带cookie访问到后端，通过cookie查询session，然后返回给客户端

![image-20230627155820014](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627155820014.png)



### 3、cookie的特性

#### 1、cookie不能跨域

作为开发人员，我们都知道，localhost和127.0.0.1其实没啥区别，接下来我们访问下：http://127.0.0.1:8081/user/info，前提是localhost是成功登录的情况下

![image-20230627161125175](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627161125175.png)

发现获取不到用户信息



#### 2、cookie存在tomcat中

我们模拟两台Java服务器，具体操作如下：配置是`-Dserver.port=8082`

![image-20230627161558541](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627161558541.png)

在8081服务器登录的情况下，访问：http://localhost:8082/user/info，发现获取不到登录用户，这是因为cookie是存在tomcat服务器中，获取不到！



## 2、Spring-Session

Spring-Session 提供了对Redis、MongoDB、MySQL 等常用存储的支持，Spring-Session 提供与 HttpSession 的透明整合，这意味着开发人员可以使用 Spring-Session 支持的实现方式，切换 HttpSession 至 Spring-Session

### 1、引入依赖

```xml
 <!--redis依赖配置-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.session</groupId>
    <artifactId>spring-session-data-redis</artifactId>
</dependency>
```

### 2、配置

```yaml
server:
  port: 8081
spring:
  data:
    redis:
      port: 6379
      host: 127.0.0.1
      password: 123456
  session:
    store-type: redis
    timeout: 3000
```

### 3、测试

重新启动系统，依次访问：

- http://localhost:8081/user/login?userName=javaxiaobear&password=123456
- http://localhost:8081/user/info
- http://localhost:8082/user/info

发现访问8082服务器时，也访问成功



## 3、JWT

> Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（[(RFC 7519](https://link.jianshu.com?t=https://tools.ietf.org/html/rfc7519)).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。	
>
> 官网：https://github.com/auth0/java-jwt

### 1、实战

#### 1、引入依赖

```xml
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>4.4.0</version>
</dependency>
```

#### 2、编写controller类

```java
private static final String JWT_KEY = "javaxiaobear";

@GetMapping("/loginWithJwt")
public String loginWithJwt(@RequestParam String userName, @RequestParam String password){
    Algorithm algorithm = Algorithm.HMAC256(JWT_KEY);
    String token = JWT.create()
            .withClaim("user", userName)
            .sign(algorithm);
    return token;
}

@GetMapping("/infoWithJwt")
public String infoWithJwt(@RequestHeader String token){
    Algorithm algorithm = Algorithm.HMAC256(JWT_KEY);
    JWTVerifier verifier = JWT.require(algorithm)
            // reusable verifier instance
            .build();
    DecodedJWT verify = verifier.verify(token);
    return verify.getClaim("user").asString();
}
```

#### 3、测试

登录接口：http://localhost:8081/user/loginWithJwt?userName=javaxiaobear&password=123456

![image-20230628110821735](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230628110821735.png)

获取登录用户信息：localhost:8081/user/infoWithJwt

![image-20230628111802378](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230628111802378.png)

响应：javaxiaobear

还有一种方法把获取到的token解析出来，https://jwt.io/专门解码的网站

![image-20230628111933567](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230628111933567.png)

### 2、分析

#### 1、JWT的构成

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiamF2YXhpYW9iZWFyIn0.TOlrBtRrnJl_FfJ8YUnWLLHOIV6HKYzD1d0MBRlu9nU
```

token存在两个点，也就是分成了三段，第一部分我们称它为头部（header),第二部分我们称其为载荷（payload, 类似于飞机上承载的物品)，第三部分是签证（signature).

##### header

jwt的头部承载两部分信息：

- 声明类型，这里是jwt
- 声明加密的算法 通常直接使用 HMAC SHA256

完整的头部就像下面这样的JSON：

```json
{
  'typ': 'JWT',
  'alg': 'HS256'
}
```

然后将头部进行base64加密（该加密是可以对称解密的),构成了第一部分.

##### payload

> 载荷就是存放有效信息的地方。这个名字像是特指飞机上承载的货品，这些有效信息包含三个部分
>
> - 标准中注册的声明
> - 公共的声明
> - 私有的声明


标准中注册的声明 (建议但不强制使用) ：

- iss: jwt签发者
- sub: jwt所面向的用户
- aud: 接收jwt的一方
- exp: jwt的过期时间，这个过期时间必须要大于签发时间
- nbf: 定义在什么时间之前，该jwt都是不可用的.
- iat: jwt的签发时间
- jti: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。

公共的声明 ：公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密.

私有的声明 ：私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。

定义一个payload:

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

然后将其进行base64加密，得到Jwt的第二部分。

##### signature

jwt的第三部分是一个签证信息，这个签证信息由三部分组成：

- header (base64后的)
- payload (base64后的)
- secret
  这个部分需要base64加密后的header和base64加密后的payload使用.连接组成的字符串，然后通过header中声明的加密方式进行加盐secret组合加密，然后就构成了jwt的第三部分。

```javascript
// javascript
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);

var signature = HMACSHA256(encodedString, 'secret'); 
```

将这三部分用.连接成一个完整的字符串,构成了最终的jwt
注意：secret是保存在服务器端的，jwt的签发生成也是在服务器端的，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。

好了，本文就到这里了！如果觉得内容不错的话，希望大家可以帮忙点赞转发一波，这是对我最大的鼓励，感谢🙏🏻

资料获取👇 最后面就是领取暗号，公众号回复即可！

![Alt text](image.png)





