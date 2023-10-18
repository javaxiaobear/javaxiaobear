---
title: 11、JSON & Ajax & i18n
---
### 1、JSON

> JSON (JavaScript Object Notation) 是一种**轻量级的数据交换格式**。易于人阅读和编写。同时也易于机器解析和生成。JSON采用完全独立于语言的文本格式，而且很多语言都提供了对json 的支持（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这样就使得JSON 成为理想的数据交换格式。
>
> - 轻量级指的是跟xml 做比较
> - 数据交换指的是客户端和服务器之间业务数据的传递格式

#### 1、json 的定义

json 是由键值对组成，并且由花括号（大括号）包围。每个键由引号引起来，键和值之间使用冒号进行分隔，多

组键值对之间进行逗号进行分隔。

```html
// json的定义
var jsonObj = {
"key1":12,
"key2":"yhx",
"key3":true,
"key4":[11,"arr",false],
"key5":{
"key6":1001,
"key7":"102"
},
"key8":[{
"key9":1001,
"key10":"102"
},
{
"key9":1001,
"key10":"102"
}]
}
```

#### 2、json的访问

> json就是一个对象
>
> json 中的key 我们可以理解为是对象中的一个属性
>
> json 中的key 访问就跟访问对象的属性一样： json 对象.key

```html
// json的访问
			alert(typeof(jsonObj));
			alert(jsonObj.key1);
			alert(jsonObj.key2);
			alert(jsonObj.key3);
			alert(jsonObj.key4);
			//遍历数组
			for (var i = 0; i < jsonObj.key4.length ; i++) {
				alert(jsonObj.key4[i]);
			}
			alert(jsonObj.key5.key6);
			alert(jsonObj.key5.key7);
			alert( jsonObj.key8 );// 得到json 数组
			// 取出来每一个元素都是json 对象
			var jsonItem = jsonObj.key6[0];
			 alert( jsonItem.key6_1_1 );
			alert( jsonItem.key9 ); 
```

#### 3、json的常用方法

> json 的存在有两种形式。
>
> - 对象的形式存在，我们叫它json 对象，一般我们要操作json 中的数据的时候，需要json 对象的格式。
> - 字符串的形式存在，我们叫它json 字符串，一般我们要在客户端和服务器之间进行数据交换的时候，使用json 字符串。
> - JSON.stringify()   把json 对象转换成为json 字符串
> - JSON.parse()       把json 字符串转换成为json 对象

```java
// json对象转字符串 像Java中的toString
var Stringobj = JSON.stringify(jsonObj);
alert(Stringobj);
// json字符串转json对象
var jsonobj2 = JSON.parse(jsonObj);
alert(jsonobj2.key1);
alert(jsonobj2.key4);
```

#### 4、JSON 在java 中的使用

##### 1、JavaBean 与 json的互转

```java
@Test
public void test1(){
    Person person = new Person();
    Gson gson = new Gson();
    // toJson 方法可以把java 对象转换成为json 字符串
    String json = gson.toJson(person);
    System.out.println(json);
    // fromJson 把json 字符串转换回Java 对象
    // 第一个参数是json 字符串
    // 第二个参数是转换回去的Java 对象类型
    Person person1 = gson.fromJson(json, Person.class);
    System.out.println(person1);
}
```

##### 2、List 和json 的互转

```java
@Test
public void test2(){
    List<Person> list = new ArrayList<Person>();
    list.add(new Person(1,"yhx"));
    list.add(new Person(2,"lwh"));
    Gson gson = new Gson();
    String json = gson.toJson(list);
    System.out.println(json);
}
```

##### 3、Map和json的互转

```java
@Test
public void test3(){
    Map<Integer, Person> map = new HashMap<Integer, Person>();
    map.put(1,new Person(3,"333"));
    map.put(2,new Person(4,"444"));
    Gson gson = new Gson();
    // 把map 集合转换成为json 字符串
    String s = gson.toJson(map);
    System.out.println(s);
}
```

### 2、Ajax

> AJAX 即==**“Asynchronous Javascript And XML”（异步JavaScript 和XML**==），是指一种创建交互式网页应用的网页开发技术。
>
> - **Ajax 是一种浏览器通过js 异步发起请求，局部更新页面的技术。**
> - **Ajax 请求的局部更新，浏览器地址栏不会发生变化**
> - **局部更新不会舍弃原来页面的内容**

#### 1、原生Ajax请求

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="pragma" content="no-cache" />
		<meta http-equiv="cache-control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		<script type="text/javascript">
			function ajaxRequest() {
// 				1、我们首先要创建XMLHttpRequest
				var request = new XMLHttpRequest();
// 				2、调用open方法设置请求参数
				request.open("GET","http://localhost:8080/JavaWeb_07_war_exploded/ajaxServlet?action=javaScriptAjax",true)
//
 				request.onreadystatechange = function () {
				if(request.readyState == 4 && request.status == 200){
					alert(request.responseText);
				}
			}
// 				3、调用send方法发送请求
				request.send();
// 				4、在send方法前绑定onreadystatechange事件，处理请求完成后的操作。

			}
		</script>
	</head>
	<body>	
		<button onclick="ajaxRequest()">ajax request</button>
		<div id="div01">
		</div>
	</body>
</html>
```

BaseServlet代码：

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

AjaxServlet代码：

```java
public class AjaxServelt extends BaseServlet{

    protected void javaScriptAjax(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Ajax请求过来了！！！");
    }
}
```

#### 2、jQuery 中的AJAX 请求

Jquery_Ajax_request.html页面

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="pragma" content="no-cache" />
		<meta http-equiv="cache-control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		<script type="text/javascript" src="script/jquery-1.7.2.js"></script>
		<script type="text/javascript">
			$(function(){
				// ajax请求
				$("#ajaxBtn").click(function(){

					$.ajax({
						url:"http://localhost:8080/JavaWeb_07_war_exploded/ajaxServlet" ,
						data:"action=jQueryAjax" ,
						type:"GET" ,
						success: function (data) {
							alert("服务器返回的类型是："+data)
						},
						dataType:"json",
					});

					})
					alert("ajax btn");

				});

				// ajax--get请求
				$("#getBtn").click(function(){

					alert(" get btn ");
					
				});
				
				// ajax--post请求
				$("#postBtn").click(function(){
					// post请求
					alert("post btn");
					
				});

				// ajax--getJson请求
				$("#getJSONBtn").click(function(){
					// 调用
					alert("getJSON btn");

				});

				// ajax请求
				$("#submit").click(function(){
					// 把参数序列化
					alert("serialize()");
				});
				
			});
		</script>
	</head>
	<body>
		<div>
			<button id="ajaxBtn">$.ajax请求</button>
			<button id="getBtn">$.get请求</button>
			<button id="postBtn">$.post请求</button>
			<button id="getJSONBtn">$.getJSON请求</button>
		</div>
		<br/><br/>
		<form id="form01" >
			用户名：<input name="username" type="text" /><br/>
			密码：<input name="password" type="password" /><br/>
			下拉单选：<select name="single">
			  	<option value="Single">Single</option>
			  	<option value="Single2">Single2</option>
			</select><br/>
		  	下拉多选：
		  	<select name="multiple" multiple="multiple">
		    	<option selected="selected" value="Multiple">Multiple</option>
		    	<option value="Multiple2">Multiple2</option>
		    	<option selected="selected" value="Multiple3">Multiple3</option>
		  	</select><br/>
		  	复选：
		 	<input type="checkbox" name="check" value="check1"/> check1
		 	<input type="checkbox" name="check" value="check2" checked="checked"/> check2<br/>
		 	单选：
		 	<input type="radio" name="radio" value="radio1" checked="checked"/> radio1
		 	<input type="radio" name="radio" value="radio2"/> radio2<br/>
		</form>			
		<button id="submit">提交--serialize()</button>
	</body>
</html>
```

>$.ajax 方法
>
>- url 表示请求的地址
>- type 表示请求的类型GET 或POST 请求
>- data 表示发送给服务器的数据
>- 格式有两种：
   >	- name=value&name=value
          >	- {key:value}
                 >		success 请求成功，响应的回调函数
                 >		dataType 响应的数据类型
                 >		常用的数据类型有：
>
>- text 表示纯文本
>- xml 表示xml 数据
>- json 表示json 对象

```javascript
$("#ajaxBtn").click(function(){
$.ajax({
url:"http://localhost:8080/16_json_ajax_i18n/ajaxServlet",
// data:"action=jQueryAjax",
data:{action:"jQueryAjax"},
type:"GET",
success:function (data) {
// alert("服务器返回的数据是：" + data);
// var jsonObj = JSON.parse(data);
$("#msg").html("编号：" + data.id + " , 姓名：" + data.name);
},
dataType : "json"
});
});
```

> `$.get `方法和`$.post` 方法
> url                        请求的url 地址
> data                     发送的数据
> callback               成功的回调函数
> type                     返回的数据类型

```javascript
$("#getBtn").click(function(){
$.get("http://localhost:8080/16_json_ajax_i18n/ajaxServlet","action=jQueryGet",function (data) {
$("#msg").html(" get 编号：" + data.id + " , 姓名：" + data.name);
},"json");
});
// ajax--post 请求
$("#postBtn").click(function(){
$.post("http://localhost:8080/16_json_ajax_i18n/ajaxServlet","action=jQueryPost",function (data)
{
$("#msg").html(" post 编号：" + data.id + " , 姓名：" + data.name);
},"json");
});
```

> $.getJSON 方法
> url                       请求的url 地址
> data                    发送给服务器的数据
> callback               成功的回调函数

```javascript
// ajax--getJson 请求
$("#getJSONBtn").click(function(){
$.getJSON("http://localhost:8080/16_json_ajax_i18n/ajaxServlet","action=jQueryGetJSON",function
(data) {
$("#msg").html(" getJSON 编号：" + data.id + " , 姓名：" + data.name);
});
});
```

> 表单序列化serialize()
> serialize()        可以把表单中所有表单项的内容都获取到，并以name=value&name=value 的形式进行拼接。

```javascript
// ajax 请求
$("#submit").click(function(){
// 把参数序列化
$.getJSON("http://localhost:8080/16_json_ajax_i18n/ajaxServlet","action=jQuerySerialize&" +
$("#form01").serialize(),function (data) {
$("#msg").html(" Serialize 编号：" + data.id + " , 姓名：" + data.name);
});
});
```

### 3、i18n国际化

> - 国际化（Internationalization）指的是同一个网站可以支持多种不同的语言，以方便不同国家，不同语种的用户访问。
> - 关于国际化我们想到的最简单的方案就是为不同的国家创建不同的网站，比如苹果公司，他的英文官网是：http://www.apple.com 而中国官网是http://www.apple.com/cn
> - 苹果公司这种方案并不适合全部公司，而我们希望相同的一个网站，而不同人访问的时候可以根据用户所在的区域显示不同的语言文字，而网站的布局样式等不发生改变。
> - 于是就有了我们说的国际化，国际化总的来说就是同一个网站不同国家的人来访问可以显示出不同的语言。但实际上这种需求并不强烈，一般真的有国际化需求的公司，主流采用的依然是苹果公司的那种方案，为不同的国家创建不同的页面。所以国际化的内容我们了解一下即可。
> -  国际化的英文Internationalization，但是由于拼写过长，老外想了一个简单的写法叫做I18N，代表的是Internationalization这个单词，以I 开头，以N 结尾，而中间是18 个字母，所以简写为I18N。以后我们说I18N 和国际化是一个意思。

#### 1、i18n相关要素

- 国际化包名命名规则：baseName_locale.properties (locale表示不同的时区、位置、语言)
- 中文的配置文件名：i18n_zh_CN.properties
- 英文的配置文件名：i18n_en_US.properties

#### 2、国际化资源properties 测试

i18n_en_US.properties 英文

```properties
username=username
password=password
sex=sex
age=age
regist=regist
boy=boy
email=email
girl=girl
reset=reset
submit=submit
```

i18n_zh_CN.properties 中文

```properties
username=用户名
password=密码
sex=性别
age=年龄
regist=注册
boy=男
girl=女
email=邮箱
reset=重置
submit=提交
```

测试代码：

```java
public class I18nTest {

    @Test
    public void LocaleTest(){
        Locale locale = Locale.getDefault();
        System.out.println(locale);
        //遍历不同国家的locale
        for (Locale availableLocale : Locale.getAvailableLocales()) {
            System.out.println(availableLocale);
        }
        // 获取中文，中文的常量的Locale 对象
        System.out.println(Locale.CHINA);
        // 获取英文，英文的常量的Locale 对象
        System.out.println(Locale.US);
    }
    @Test
    public void testI18n(){
        // 得到我们需要的Locale 对象
        Locale locale = Locale.CHINA;
        // 通过指定的basename 和Locale 对象，读取相应的配置文件
        ResourceBundle resourceBundle = ResourceBundle.getBundle("i18n", locale);
        System.out.println("username: "+resourceBundle.getString("username"));
        System.out.println("password: "+resourceBundle.getString("password"));
        System.out.println("girl: "+resourceBundle.getString("girl"));
        System.out.println("boy: "+resourceBundle.getString("boy"));
    }
}
```

#### 3、请求头国际化页面

```html
<%@ page import="java.util.Locale" %>
<%@ page import="java.util.ResourceBundle" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	Locale locale = request.getLocale();
	System.out.println(locale);
	ResourceBundle i18n = ResourceBundle.getBundle("i18n", locale);
%>
	<a href="">中文</a>|
	<a href="">english</a>
	<center>
		<h1><%=i18n.getString("regist")%></h1>
		<table>
		<form>
			<tr>
				<td><%=i18n.getString("username")%></td>
				<td><input name="username" type="text" /></td>
			</tr>
			<tr>
				<td><%=i18n.getString("password")%></td>
				<td><input type="password" /></td>
			</tr>
			<tr>
				<td><%=i18n.getString("sex")%></td>
				<td><input type="radio" /><%=i18n.getString("boy")%><input type="radio" /><%=i18n.getString("girl")%></td>
			</tr>
			<tr>
				<td><%=i18n.getString("email")%></td>
				<td><input type="text" /></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
				<input type="reset" value="<%=i18n.getString("reset")%>" />&nbsp;&nbsp;
				<input type="submit" value="<%=i18n.getString("submit")%>" /></td>
			</tr>
			</form>
		</table>
		<br /> <br /> <br /> <br />
	</center>
	国际化测试：
	<br /> 1、访问页面，通过浏览器设置，请求头信息确定国际化语言。
	<br /> 2、通过左上角，手动切换语言
</body>
</html>
```

#### 4、通过显示的选择语言类型进行国际化

```html
<%@ page import="java.util.Locale" %>
<%@ page import="java.util.ResourceBundle" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%

	Locale locale = null;
	String country = request.getParameter("country");
	if ("cn".equals(country)){
		locale = Locale.CHINA;
	}else if("usa".equals(country)){
		locale = Locale.US;
	}else {
		locale = Locale.getDefault();
	}
	System.out.println(locale);
	ResourceBundle i18n = ResourceBundle.getBundle("i18n", locale);
%>
	<a href="i18n.jsp?country=cn">中文</a>|
	<a href="i18n.jsp?country=usa">english</a>
	<center>
		<h1><%=i18n.getString("regist")%></h1>
		<table>
		<form>
			<tr>
				<td><%=i18n.getString("username")%></td>
				<td><input name="username" type="text" /></td>
			</tr>
			<tr>
				<td><%=i18n.getString("password")%></td>
				<td><input type="password" /></td>
			</tr>
			<tr>
				<td><%=i18n.getString("sex")%></td>
				<td><input type="radio" /><%=i18n.getString("boy")%><input type="radio" /><%=i18n.getString("girl")%></td>
			</tr>
			<tr>
				<td><%=i18n.getString("email")%></td>
				<td><input type="text" /></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
				<input type="reset" value="<%=i18n.getString("reset")%>" />&nbsp;&nbsp;
				<input type="submit" value="<%=i18n.getString("submit")%>" /></td>
			</tr>
			</form>
		</table>
		<br /> <br /> <br /> <br />
	</center>
	国际化测试：
	<br /> 1、访问页面，通过浏览器设置，请求头信息确定国际化语言。
	<br /> 2、通过左上角，手动切换语言
</body>
</html>
```

#### 5、JSTL 标签库实现国际化

```html
<%--1 使用标签设置Locale 信息--%>
<fmt:setLocale value="" />
<%--2 使用标签设置baseName--%>
<fmt:setBundle basename=""/>
<%--3 输出指定key 的国际化信息--%>
<fmt:message key="" />
```

```html
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ page import="java.util.Locale" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%--1 使用标签设置Locale 信息--%>
<fmt:setLocale value="${param.locale}" />
<%--2 使用标签设置baseName--%>
<fmt:setBundle basename="i18n"/>

	<a href="i18n_fmt.jsp?locale=zh_CN">中文</a>|
	<a href="i18n_fmt.jsp?locale=en_US">english</a>
	<center>
		<h1><fmt:message key="regist" /></h1>
		<table>
		<form>
			<tr>
				<td><fmt:message key="username" /></td>
				<td><input name="username" type="text" /></td>
			</tr>
			<tr>
				<td><fmt:message key="password" /></td>
				<td><input type="password" /></td>
			</tr>
			<tr>
				<td><fmt:message key="sex" /></td>
				<td><input type="radio" /><fmt:message key="boy" />
					<input type="radio" /><fmt:message key="girl" /></td>
			</tr>
			<tr>
				<td><fmt:message key="email" /></td>
				<td><input type="text" /></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
				<input type="reset" value="<fmt:message key="reset" />" />&nbsp;&nbsp;
				<input type="submit" value="<fmt:message key="submit" />" /></td>
			</tr>
			</form>
		</table>
		<br /> <br /> <br /> <br />
	</center>
</body>
</html>
```

错误总结：

```
Exception

org.apache.jasper.JasperException: /i18n_fmt.jsp (行.: [16], 列: [0]) According to TLD or attribute directive in tag file, attribute [value] does not accept any expressions
	org.apache.jasper.compiler.DefaultErrorHandler.jspError(DefaultErrorHandler.java:42)
	org.apache.jasper.compiler.ErrorDispatcher.dispatch(ErrorDispatcher.java:292)
	org.apache.jasper.compiler.ErrorDispatcher.jspError(ErrorDispatcher.java:115)
	org.apache.jasper.compiler.Validator$ValidateVisitor.checkXmlAttributes(Validator.java:1250)
	org.apache.jasper.compiler.Validator$ValidateVisitor.visit(Validator.java:888)
	org.apache.jasper.compiler.Node$CustomTag.accept(Node.java:1544)
	org.apache.jasper.compiler.Node$Nodes.visit(Node.java:2389)
	org.apache.jasper.compiler.Node$Visitor.visitBody(Node.java:2441)
	org.apache.jasper.compiler.Node$Visitor.visit(Node.java:2447)
	org.apache.jasper.compiler.Node$Root.accept(Node.java:470)
	org.apache.jasper.compiler.Node$Nodes.visit(Node.java:2389)
	org.apache.jasper.compiler.Validator.validateExDirectives(Validator.java:1857)
	org.apache.jasper.compiler.Compiler.generateJava(Compiler.java:224)
	org.apache.jasper.compiler.Compiler.compile(Compiler.java:386)
	org.apache.jasper.compiler.Compiler.compile(Compiler.java:362)
	org.apache.jasper.compiler.Compiler.compile(Compiler.java:346)
	org.apache.jasper.JspCompilationContext.compile(JspCompilationContext.java:605)
	org.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:400)
	org.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:385)
	org.apache.jasper.servlet.JspServlet.service(JspServlet.java:329)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:741)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
```

原因：版本不支持该标签

解决：

```html
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
    改为
 <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
```

