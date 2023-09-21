---
title: 13、Docker-compose容器编排
---
### 1、什么是compose

> Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件docker-compose.yml，写好多个容器之间的调用关系。然后，只要一个命令，就能同时启动/关闭这些容器.
>
> Docker-Compose是Docker官方的开源项目，负责实现对Docker容器集群的快速编排。



### 2、作用

docker建议我们每一个容器中只运行一个服务,因为docker容器本身占用资源极少,所以最好是将每个服务单独的分割开来但是这样我们又面临了一个问题？

如果我需要同时部署好多个服务,难道要每个服务单独写Dockerfile然后在构建镜像,构建容器,这样累都累死了,所以docker官方给我们提供了docker-compose多服务部署的工具

例如要实现一个Web微服务项目，除了Web服务容器本身，往往还需要再加上后端的数据库mysql服务容器，redis服务器，注册中心eureka，甚至还包括负载均衡容器等等。。。。。。

> Compose允许用户通过一个单独的docker-compose.yml模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。
>
> 可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。Docker-Compose 解决了容器与容器之间如何管理编排的问题。



### 3、安装

官网地址：https://docs.docker.com/compose/compose-file/compose-file-v3/、

官网下载：https://docs.docker.com/compose/install/

安装步骤：

官网教程：https://docs.docker.com/compose/install/

1. 下载二进制文件

   ```
   curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. 对二进制文件应用可执行权限

   ```
   ## 为所有用户安装 
   chmod +x /usr/local/bin/docker-compose
   ```



3. 测试

   ```
   docker-compose --version
   ```

#### 卸载[🔗](https://docs.docker.com/compose/install/#uninstallation)

如果您使用以下方式安装 Docker Compose，请卸载`curl`：

```
$ rm $DOCKER_CONFIG/cli-plugins/docker-compose
```

或者如果您选择为所有用户安装 Compose

```
$ sudo rm /usr/local/lib/docker/cli-plugins/docker-compose
```





### 4、Compose核心概念

> 主要是：一文件和两要素
>
> 一文件：`docker-compose.yml`
>
> 两要素：
>
> - 服务（service）：一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器
> - 工程（project）：由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。



### 5、Compose使用的三个步骤

1. 编写Dockerfile定义各个微服务应用并构建出对应的镜像文件
2. 使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。
3. 最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线



### 6、Compose常用命令

```
docker-compose -h                           ## 查看帮助
docker-compose up                           ## 启动所有docker-compose服务
docker-compose up -d                        ## 启动所有docker-compose服务并后台运行
docker-compose down                         ## 停止并删除容器、网络、卷、镜像。
docker-compose exec  yml里面的服务id                 ## 进入容器实例内部  docker-compose exec docker-compose.yml文件中写的服务id /bin/bash
docker-compose ps                      ## 展示当前docker-compose编排过的运行的所有容器
docker-compose top                     ## 展示当前docker-compose编排过的容器进程
 
docker-compose logs  yml里面的服务id     ## 查看容器输出日志
docker-compose config     ## 检查配置
docker-compose config -q  ## 检查配置，有问题才有输出
docker-compose restart   ## 重启服务
docker-compose start     ## 启动服务
docker-compose stop      ## 停止服务
```



### 7、Compose编排微服务

#### 1、修改之前的微服务项目

##### 1、SQL建库建表

```sql
CREATE TABLE `t_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(50) NOT NULL DEFAULT '' COMMENT '密码',
  `sex` tinyint(4) NOT NULL DEFAULT '0' COMMENT '性别 0=女 1=男 ',
  `deleted` tinyint(4) unsigned NOT NULL DEFAULT '0' COMMENT '删除标志，默认0不删除，1删除',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='用户表'
```



##### 2、利用MybatisX一键生成代码



##### 3、改pom

```xml
 <properties>
        <java.version>1.8</java.version>
        <druid.version>1.1.16</druid.version>
        <mybatis.spring.boot.version>1.3.0</mybatis.spring.boot.version>
        <log4j.version>1.2.17</log4j.version>
        <lombok.version>1.16.18</lombok.version>
    </properties>
    <dependencies>

        <!--guava Google 开源的 Guava 中自带的布隆过滤器-->
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>23.0</version>
        </dependency>
        <!-- redisson -->
        <dependency>
            <groupId>org.redisson</groupId>
            <artifactId>redisson</artifactId>
            <version>3.13.4</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <!--springCache-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>
        <!--SpringBoot集成druid连接池-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.10</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>${druid.version}</version>
        </dependency>
        <!--mybatis和springboot整合-->
<!--        <dependency>-->
<!--            <groupId>org.mybatis.spring.boot</groupId>-->
<!--            <artifactId>mybatis-spring-boot-starter</artifactId>-->
<!--            <version>${mybatis.spring.boot.version}</version>-->
<!--        </dependency>-->
        <!--mybatis-plus-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.5.1</version>
        </dependency>
        <!--需要添加这个依耐-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-extension</artifactId>
            <version>3.5.1</version>
        </dependency>
        <!-- 添加springboot对amqp的支持 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-amqp</artifactId>
        </dependency>
        <dependency>
            <groupId>commons-codec</groupId>
            <artifactId>commons-codec</artifactId>
            <version>1.10</version>
        </dependency>
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>${log4j.version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>${lombok.version}</version>
            <optional>true</optional>
        </dependency>


        <!--hutool-->
        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.2.3</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>${junit.version}</version>
        </dependency>

        <!--springCache连接池依赖包-->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId>
        </dependency>
        <!-- jedis -->
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>3.1.0</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```



##### 4、写yaml

```yaml
server:
  port: 6688
#数据库连接配置
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.130.132:3306/docker-compose?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password: 123456
    druid:
      test-while-idle: false
  #redis配置
  redis:
    database: 0
    host: 192.168.130.132
    port: 6379
    password:
    lettuce:
      pool:
        max-active: 8
        max-wait: -1ms
        max-idle: 8
        min-idle: 0
  swagger2:
    enabled: true
#myabtis配置
#mybatis:
##  mapper-locations: classpath:mapper/*.xml
##  type-aliases-package: com.xiaobear.dockerboot.domain
```



##### 5、业务类

###### 1、配置类

`RedisConfig`

```java
@Configuration
public class RedisConfig {

    @Bean
    public RedisTemplate<String, Serializable> redisTemplate(LettuceConnectionFactory connectionFactory)
    {
        RedisTemplate<String,Serializable> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(connectionFactory);
        //设置key序列化方式string
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        //设置value序列化方式string
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());

        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());

        return redisTemplate;

    }
}
```



`SwaggerConfig`

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig extends WebMvcConfigurationSupport {

    @Value("${spring.swagger2.enabled}")
    private Boolean enable;

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("doc.html")
                .addResourceLocations("classpath:/META-INF/resources/");

        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
        super.addResourceHandlers(registry);
    }

    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .enable(enable)
                .select()
                //你自己的package
                .apis(RequestHandlerSelectors.basePackage("com.xiaobear.dockerboot.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    public ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("xiaobear学Java"+"\t"+new SimpleDateFormat("yyyy-MM-dd").format(new Date()))
                .description("docker-compose")
                .version("1.0")
                .termsOfServiceUrl("https://www.xiaobear.com/")
                .build();
    }
}
```

- SpringBoot集成swagger后出现: Failed to start bean ‘documentationPluginsBootstrapper‘的解决方法

> 解决办法：在启动类加一个注解：@EnableWebMvc

- 访问swagger出现404，后端没有异常报错信息

  > 原因：swagger版本与spring boot版本不兼容 建议降低版本



###### 2、domain

```java
@TableName(value ="t_user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TUser implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 用户名
     */
    private String username;

    /**
     * 密码
     */
    private String password;

    /**
     * 性别 0=女 1=男 
     */
    private Integer sex;

    /**
     * 删除标志，默认0不删除，1删除
     */
    private Integer deleted;

    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 创建时间
     */
    private Date createTime;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}
```



###### 3、service

```java
public interface TUserService extends IService<TUser> {

    /**
     * 新增用户
     * @param user
     */
    public void insertUser(TUser user);

    /**
     * 查询用户通过Id
     * @param id
     * @return
     */
    public TUser selectUserById(Integer id);
}
```



```java
@Service
public class TUserServiceImpl extends ServiceImpl<TUserMapper, TUser> implements TUserService{

    public static final String CACHE_KEY_USER = "user:";
    @Resource
    private RedisTemplate redisTemplate;

    @Resource
    private TUserMapper userMapper;


    @Override
    public void insertUser(TUser user) {
        //1 先插入mysql并成功
        int i = userMapper.insert(user);

        if(i > 0)
        {
            //2 需要再次查询一下mysql将数据捞回来并ok
            user = userMapper.selectById(user.getId());
            //3 将捞出来的user存进redis，完成新增功能的数据一致性。
            String key = CACHE_KEY_USER+user.getId();
            redisTemplate.opsForValue().set(key,user);
        }
    }

    @Override
    public TUser selectUserById(Integer id) {
        TUser user = null;
        String key = CACHE_KEY_USER+id;

        //1 先从redis里面查询，如果有直接返回结果，如果没有再去查询mysql
        user = (TUser) redisTemplate.opsForValue().get(key);

        if(user == null)
        {
            //2 redis里面无，继续查询mysql
            user = userMapper.selectById(id);
            if(user == null)
            {
                //3.1 redis+mysql 都无数据
                //你具体细化，防止多次穿透，我们规定，记录下导致穿透的这个key回写redis
                return user;
            }else{
                //3.2 mysql有，需要将数据写回redis，保证下一次的缓存命中率
                redisTemplate.opsForValue().set(key,user);
            }
        }
        return user;
    }
}
```



###### 4、Mapper.xml

```java
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.xiaobear.dockerboot.mapper.TUserMapper">

    <resultMap id="BaseResultMap" type="com.xiaobear.dockerboot.domain.TUser">
            <id property="id" column="id" jdbcType="INTEGER"/>
            <result property="username" column="username" jdbcType="VARCHAR"/>
            <result property="password" column="password" jdbcType="VARCHAR"/>
            <result property="sex" column="sex" jdbcType="TINYINT"/>
            <result property="deleted" column="deleted" jdbcType="TINYINT"/>
            <result property="updateTime" column="update_time" jdbcType="TIMESTAMP"/>
            <result property="createTime" column="create_time" jdbcType="TIMESTAMP"/>
    </resultMap>

    <sql id="Base_Column_List">
        id,username,password,
        sex,deleted,update_time,
        create_time
    </sql>
</mapper>
```



###### 5、controller

```java
@Api(description = "用户User接口")
@RestController
public class DockerController {

    @Value("${server.port}")
    private String port;

    @Resource
    private TUserService userService;

    @GetMapping("/hello")
    public String hello(){
        return "hello, docker-boot" + port + " " + UUID.randomUUID();
    }

    @ApiOperation("新增用户")
    @PostMapping("/insert/user")
    public void insertUser(){
        for (int i = 1; i <= 3; i++) {
            TUser user = new TUser();
            user.setUsername("xiaobear-"+i);
            user.setPassword(IdUtil.simpleUUID().substring(0,6));
            user.setSex(new Random().nextInt(2));

            userService.insertUser(user);
        }
    }

    @ApiOperation("查询1条记录")
    @GetMapping(value = "/user/find/{id}")
    public TUser findUserById(@PathVariable Integer id)
    {
        return userService.selectUserById(id);
    }
}
```



###### 6、主启动类

```java
@SpringBootApplication
@EnableWebMvc
@MapperScan("com.xiaobear.dockerboot.mapper")
public class DockerBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(DockerBootApplication.class, args);
    }

}
```



##### 6、本地测试完进行打包

> mvn package命令将微服务形成新的jar包
> 并上传到Linux服务器/mydocker目录下



##### 7、编写Dockerfile

```dockerfile
## 基础镜像使用java
FROM java:8
## 作者
MAINTAINER xiaobear
## VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp
VOLUME /tmp
## 将jar包添加到容器中并更名为xiaobear_docker.jar
ADD Docker-Boot-0.0.1-SNAPSHOT.jar xiaobear_docker.jar
## 运行jar包
RUN bash -c 'touch /xiaobear_docker.jar'
ENTRYPOINT ["java","-jar","/xiaobear_docker.jar"]
#暴露6688端口作为微服务
EXPOSE 6688
```



##### 8、构建镜像

```
docker build -t xiaobear-docker-boot:2.0 .
```



#### 2、不适用Compose编排

##### 1、启动mysql实例

```
docker run -p 3306:3306 --name mysql-master \
-v /mydata/mysql-master/log:/var/log/mysql \
-v /mydata/mysql-master/data:/var/lib/mysql \
-v /mydata/mysql-master/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root  \
-d mysql:5.7
```

进入mysql容器实例并新建库docker-compose+新建表t_user



##### 2、启动redis实例

```
docker run  -p 6379:6379 --name myredis --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -d redis redis-server /etc/redis/redis.conf
```



##### 3、启动微服务实例

```
docker run -it -d -p 6688:6688 xiaobear-docker-boot:2.0
```



##### 4、测试微服务

http://localhost:你的微服务端口/swagger-ui.html#/



##### 5、存在的问题

- 先后顺序要求固定，先mysql+redis才能微服务访问成功
- 多个run命令......
- 容器间的启停或宕机，有可能导致IP地址对应的容器实例变化，映射出错，要么生产IP写死(可以但是不推荐)，要么通过服务调用



#### 3、使用Compose

> 服务编排，一套带走，安排

##### 1、编写docker-compose.yml

```yaml
version: "3"
 
services:
  microService:
    image: xiaobear-docker-boot:2.0
    container_name: ms01
    ports:
      - "6688:6688"
    volumes:
      - /app/microService:/data
    networks: 
      - xiaobear-network 
    depends_on: 
      - redis
      - mysql
 
  redis:
    image: redis
    ports:
      - "6379:6379"
    volumes:
      - /app/redis/redis.conf:/etc/redis/redis.conf
      - /app/redis/data:/data
    networks: 
      - xiaobear-network
    command: redis-server /etc/redis/redis.conf
 
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: '123456'
      MYSQL_ALLOW_EMPTY_PASSWORD: 'no'
      MYSQL_DATABASE: 'docker-compose'
      MYSQL_USER: 'xiaobear'
      MYSQL_PASSWORD: 'zzyy123'
    ports:
       - "3306:3306"
    volumes:
       - /app/mysql/db:/var/lib/mysql
       - /app/mysql/conf/my.cnf:/etc/my.cnf
       - /app/mysql/init:/docker-entrypoint-initdb.d
    networks:
      - xiaobear-network
    command: --default-authentication-plugin=mysql_native_password #解决外部无法访问
 
networks: 
   xiaobear-network: 
```



##### 2、改造微服务

> 通过服务名访问，IP无关

```yaml
server:
  port: 6688
#数据库连接配置
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://mysql:3306/docker-compose?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password: 123456
    druid:
      test-while-idle: false
  #redis配置
  redis:
    database: 0
    host: redis
    port: 6379
    password:
    lettuce:
      pool:
        max-active: 8
        max-wait: -1ms
        max-idle: 8
        min-idle: 0
  swagger2:
    enabled: true
#myabtis配置
#mybatis:
##  mapper-locations: classpath:mapper/*.xml
##  type-aliases-package: com.xiaobear.dockerboot.domain
```



上传构建镜像



##### 3、执行docker-compose

```
docker-compose up
```



##### 4、测试

访问：http://localhost:你的微服务端口/swagger-ui.html#/



##### 5、关停

```
[root@docker mydocker]## docker-compose stop
Stopping ms01             ... done
Stopping mydocker_mysql_1 ... done
Stopping mydocker_redis_1 ... done
[root@docker mydocker]## 
```
