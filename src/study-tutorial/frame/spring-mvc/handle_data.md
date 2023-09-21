---
title: 8、处理数据
---
### 1、处理请求数据

> 1. Spring MVC 通过分析处理方法的签名，HTTP 请求信息绑定到处理方法的相应参数中。
> 2. Spring MVC 对控制器处理方法签名的限制是很宽松的，几乎可以按喜欢的任何方式对方法进行签名。
> 3. 必要时可以对方法及方法入参标注相应的注解（ @PathVariable 、@RequestParam、 @RequestHeader 等）
> 4. Spring MVC 框架会将 HTTP 请求的信息绑定到相应的方法入参中，并根据方法的返回值类型做出相应的后续处理。

#### 1、@RequestParam

> 1. 在处理方法入参处使用 @RequestParam 可以把请求参数传递给请求方法
> 2. value：参数名
> 3. required：是否必须。默认为 true, 表示请求参数中必须包含对应的参数，若不存在，将抛出异常
> 4. defaultValue: 默认值，当没有传递传递使用该值

```java
@RequestMapping("/a1")
public String requestParam(@RequestParam(value = "name") String name,
                           @RequestParam(value="age",required=false,defaultValue="0") int age, Model model){
    model.addAttribute("msg","name="+name);
    model.addAttribute("msg1","age="+age);
    return "a";
}
```

```html
<!--测试 请求参数 @RequestParam 注解使用 -->
<a href="a1?name=xiaobear&age=3">testRequestParam</a>
```

#### 2、@RequestHeader

> 1. 使用 @RequestHeader 绑定请求报头的属性值
>
> 2. 请求头包含了若干个属性，服务器可据此获知客户端的信息，通过 @RequestHeader 即可将请求头中的
     >
     > 	属性值绑定到处理方法的入参中

```java
@RequestMapping("/a2")
public String testRequestHeader(@RequestHeader("Accept-Encoding") String encoding
                                ,Model model){
    model.addAttribute("msg","获取Accept-Encoding标头的值:"+encoding);
    return "a";
}
```

```html
<!-- 测试 请求头@RequestHeader 注解使用 -->
<a href="a2">testRequestHeader</a>
```

#### 3、@CookieValue

> 1. 使用 @CookieValue 绑定请求中的 Cookie 值
> 2. @CookieValue 可让处理方法入参绑定某个 Cookie 值

```java
@RequestMapping("/a3")
public String testCookieValue(@CookieValue("JSESSIONID") String sessionId,Model model){
    model.addAttribute("msg","cookie="+sessionId);
    return "a";
}
```

```html
<!-- 测试 请求头@CookieValue 注解使用 -->
<a href="a3">testCookieValue</a><br>
```

#### 4、使用POJO 作为参数

> 1. 使用 POJO 对象绑定请求参数值
>
> 2. Spring MVC 会按请求参数名和 POJO 属性名进行自动匹配，自动为该对象填充属性值。支持级联属性。
     >
     > 	如：dept.deptId、dept.address.tel 等

表单

```html
<!-- 测试 POJO 对象传参，支持级联属性 -->
<form action="a4" method="POST">
    username: <input type="text" name="username"/><br>
    password: <input type="password" name="password"/><br>
    email: <input type="text" name="email"/><br>
    age: <input type="text" name="age"/><br>
    city: <input type="text" name="address.city"/><br>
    province: <input type="text" name="address.province"/>
    <input type="submit" value="Submit"/>
</form>
```

```java
@RequestMapping("/a4")
public String testPojo(User user,Model model){
    model.addAttribute("msg",""+user);
    return "a";
}
```

实体类

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer id ;
    private String username;
    private String password;
    private String email;
    private int age;
    private Address address;
}
```

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    private String province;
    private String city;
}
```

中文乱码解决：

```xml
<!--配置springMVC的乱码过滤-->
<filter>
    <filter-name>characterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>characterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

### 2、处理响应数据

#### 1、SpringMVC 输出模型数据概述

> 1. `ModelAndView:` 处理方法返回值类型为 ModelAndView 时, 方法体即可通过该对象添加模型数据
> 2. `Map 及 Model: `入参为 org.springframework.ui.Model、
     > 	org.springframework.ui.ModelMap 或 java.uti.Map 时，处理方法返回时，Map 中的数据会自动添加到模型中。
> 3. `@SessionAttributes: `将模型中的某个属性暂存到 HttpSession 中，以便多个请求之间可以共享这个属性
> 4. `@ModelAttribute: `方法入参标注该注解后, 入参的对象就会放到数据模型中

- `ModelAndView`

  >- 控制器处理方法的返回值如果为 ModelAndView, 则其既包含视图信息，也包含模型数据信息。
  >- 添加模型数据:
     >	- MoelAndView addObject(String attributeName, Object attributeValue)
  >	- ModelAndView addAllObject(Map<String, ?> modelMap)
  >
  >- 设置视图:
     >	- void setView(View view)
  >	- void setViewName(String viewName)
  >
  >```java
	>@RequestMapping("/b1")
	>public ModelAndView testModel(){
	>    ModelAndView modelAndView = new ModelAndView();
	>    modelAndView.setViewName("success");
	>    modelAndView.addObject("time",new Date().toString());
	>    return modelAndView;
	>}
	>```

- `处理模型数据之 Map`

  > 1. Spring MVC 在内部使用了一个 org.springframework.ui.Model 接口存储模型数据具体使用步骤
  >
  > 2. Spring MVC 在调用方法前会创建一个隐含的模型对象作为模型数据的存储容器。
  >
  > 3. 如果方法的入参为 Map 或 Model 类型，Spring MVC 会将隐含模型的引用传递给这些入参。
  >
  > 4. 在方法体内，开发者可以通过这个入参对象访问到模型中的所有数据，也可以向模型中添加新的属
       >
       > 	性数据
       >
       > 	```java
	> 	@RequestMapping("/b2")
	> 	public String testMap(Map<String,Object> map){
	> 	    map.put("name", Arrays.asList("xiaobear","yhx","xiaohua"));
	> 	    return "success";
	> 	}
	> 	```

- `处理模型数据之 SessionAttributes `

  >1. 若希望在多个请求之间共用某个模型属性数据，则可以在控制器类上标注一个@SessionAttributes, Spring MVC 将在模型中对应的属性暂存到 HttpSession 中。
  >
  >2. @SessionAttributes 除了可以通过属性名指定需要放到会话中的属性外，还可以通过模型属性的对象
      >
      >	类型指定哪些模型属性需要放到会话中
      >
      >	例如：
      >
      >	- @SessionAttributes(types=User.class) 会 将 隐 含 模 型 中 所 有 类 型 为User.class 的属性添加到会话中。
  >	- @SessionAttributes(value={“user1”, “user2”})
  >	- @SessionAttributes(types={User.class, Dept.class})
  >	- @SessionAttributes(value={“user1”, “user2”}, types={Dept.class})
      >
      >	```java
	>	@RequestMapping("/b3")
	>	public String testSessionAttributes(Map<String,Object> map){
	>	    User user = new User("xiaobear","123","Xxx@qq.com",18);
	>	    map.put("user", user);
	>	    map.put("school", "xiaobear");
	>	    //默认是被存放到request 域，如果设置了@SessionAttribute 注解，就同时存放到session 域中
	>	    return "success";
	>	}
	>	```

- ` @ModelAttribute `

  > 1. 在方法定义上使用 @ModelAttribute 注解：Spring MVC 在调用目标处理方法前，会先逐个调用在方法级上标注了 @ModelAttribute 的方法。
  >
  > 2. 在方法的入参前使用 @ModelAttribute 注解：可以从隐含对象中获取隐含的模型数据中获取对象，再将请求参数绑定到对象中，再传入入参。
  >
  > 3. 将方法入参对象添加到模型中。
       >
       > 	```java
	> 	@RequestMapping("/b4")
	> 	public String testModelAttribute(User user){
	> 	    System.out.println(user);
	> 	    return "success";
	> 	}
	> 	@ModelAttribute
	> 	public void getUser(@RequestParam(value="id",required=false) Integer id,
	> 	                    Map<String,Object> map){
	> 	    if(id!=null){
	> 	        //模拟从数据库中获取到的user 对象
	> 	        User user = new User(1,"xiaobear","123456","xxx@qq.com",18);
	> 	        System.out.println("从数据库中查询的对象：user="+user );
	> 	        map.put("user", user);
	> 	    }
	> 	}
	> 	```
       >
       > 	```html
	> 	<form action="b4" method="POST">
	> 	    <input type="hidden" name="id" value="1"><br>
	> 	    username: <input type="text" name="username" value="xiaobear"/><br>
	> 	    email: <input type="text" name="email" value="xxx@qq.com"/><br>
	> 	    age: <input type="text" name="age" value="3"/><br>
	> 	    <input type="submit" value="Submit"/>
	> 	</form>
	> 	```

##### 1、 @ModelAttribute 之运行原理执行

1. @ModelAttribute 注解所修饰的方法，将从数据库中获取的对象存放到 Map 集合中，key 为 user
2. SpringMVC从Map集合中获取 user对象，将表单数据封装到与参数名称对应的user对象属性上
3. SpringMVC 将 user 对象作为参数，传递给目标方法。
4. 注意：@ModelAttribute注解修饰的方法中，放入到 Map 集合中的 key 值，应该和目标方法参数类型的类名称首字母小写一致。

##### 2、@ModelAttribute 之源码

```java
@Target({ElementType.PARAMETER, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface ModelAttribute {
    @AliasFor("name")
    String value() default "";

    @AliasFor("value")
    String name() default "";

    boolean binding() default true;
}
```

### 3、重定向

1. 一般情况下，控制器方法返回字符串类型的值会被当成逻辑视图名处理
2. 如果返回的字符串中带 forward: 或 redirect: 前缀时，SpringMVC 会对他们进行特殊处理：将 forward: 和 redirect: 当成指示符，其后的字符串作为 URL 来处理
3. `redirect:success.jsp`：会完成一个到 success.jsp 的`重定向`的操作
4. `forward:success.jsp`：会完成一个到 success.jsp 的`转发`操作

```java
@RequestMapping("/b5")
public String redirect(Model model){
    model.addAttribute("msg","sucess!");
    return "redirect:/index.jsp";
    //        return "forward:/index.jsp";
}
```
