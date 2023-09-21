---
title: 5、jsp
---

> jsp 的全换是java server pages。Java 的服务器页面。
> jsp 的主要作用是代替Servlet 程序回传html 页面的数据。
> 因为Servlet 程序回传html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。

Servlet 回传html 页面数据的代码：

```java
public class JspDemo extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        writer.write("<!DOCTYPE html>\r\n");
        writer.write(" <html lang=\"en\">\r\n");
        writer.write(" <head>\r\n");
        writer.write(" <meta charset=\"UTF-8\">\r\n");
        writer.write(" <title>Title</title>\r\n");
        writer.write(" </head>\r\n");
        writer.write(" <body>\r\n");
        writer.write(" 这是html 页面数据\r\n");
        writer.write(" </body>\r\n");
        writer.write("</html>\r\n");
        writer.write("\r\n");
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
这是HTML页面数据
</body>
</html>
```

### 1、jsp的本质

> jsp 页面本质上是一个Servlet 程序。

### 2、jsp 语法

#### 1、jsp 头部的page 指令

>  jsp 的page 指令可以修改jsp 页面中一些重要的属性，或者行为。

```html
<%@ page contentType="text/html;charset=UTF-8"
         import="java.applet.Applet"
         autoFlush="true"
         buffer="8kb"
         errorPage="index.jsp"
         isErrorPage="true"
         session="true"
         extends="java.io"
         language="java" %>
<%--
    language     属性表示jsp 翻译后是什么语言文件。暂时只支持java。
    contentType  属性表示jsp 返回的数据类型是什么。也是源码中response.setContentType()参数值
    pageEncoding 属性表示当前jsp 页面文件本身的字符集。
    import       属性跟java 源代码中一样。用于导包，导类。
    ========================两个属性是给out 输出流使用=============================
    autoFlush    属性设置当out 输出流缓冲区满了之后，是否自动刷新缓冲区。默认值是true。
    buffer       属性设置out 缓冲区的大小。默认是8kb
    ========================两个属性是给out 输出流使用=============================
    errorPage    属性设置当jsp 页面运行时出错，自动跳转去的错误页面路径。
    isErrorPage  属性设置当前jsp 页面是否是错误信息页面。默认是false。如果是true 可以获取异常信息。
    session      属性设置访问当前jsp 页面，是否会创建HttpSession 对象。默认是true。
    extends      属性设置jsp 翻译出来的java 类默认继承谁。
    --%>
```

#### 2、jsp常用脚本

- **声明脚本**

  ```html
  <%--声明脚本的格式是：--%> <%! 声明java 代码%>
  ```

  ==作用：可以给jsp 翻译出来的java 类定义属性和方法甚至是静态代码块。内部类等。==

  ```html
  <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
  <head>
      <title>Title</title>
  </head>
  <body>
  <%--1、声明类属性--%>
  <%!
      private Integer id;
      private String name;
      private static Map<String,Object> map;
  %>
  <%--2、声明static 静态代码块--%>
  <%!
      static {
          map = new HashMap<String,Object>();
          map.put("key1","value1");
          map.put("key2","value2");
          map.put("key3","value3");
      }
  %>
  <%--3、声明类方法--%>
  <%!
      public int sb(){
          return 12;
      }
  %>
  <%--4、声明内部类--%>
  <%!
      public static class Yhx{
          private Integer id = 10;
          private String abc = "abc";
      }
  %>
  </body>
  </html>
  ```

- **表达式脚本（常用）**

>表达式脚本的格式是：<%=表达式%>
>表达式脚本的作用是：jsp 页面上输出数据。

- ```html
	<%--1. 输出整型--%>
	<%=12%>
	<%--2. 输出浮点型--%>
	<%=12.12%>
	<%--3. 输出字符串--%>
	<%="你是最棒的！"%>
	<%--4. 输出对象--%>
	<%=request.getParameter("username")%>
	```

    - 表达式脚本的特点：
        - 所有的表达式脚本都会被翻译到`jspService() `方法中
        - 表达式脚本都会被翻译成为`out.print()`输出到页面上
        - 由于表达式脚本翻译的内容都在`jspService() `方法中,所以`_jspService()`方法中的对象都可以直接使用
        - 表达式脚本中的表达式不能以分号结束*。

- **代码脚本**

  ```html
  <% java 语句 %>
  ```

  ==代码脚本的作用是：可以在jsp 页面中，编写我们自己需要的功能（写的是java 语句）。==

- ```html
	<%--代码脚本----if 语句--%>
	<%
	    int i = 18;
	    if (i == 10){
	        System.out.println("你很帅！！！");
	    }else{
	        System.out.println("你是真的帅！！！");
	    }
	%>
	<%--2. 代码脚本----for 循环语句--%>
	<%
	    for (int j = 0; j < 100; j++) {
	        System.out.println(j);
	    }
	%>
	<%--3. 翻译后java 文件中_jspService 方法内的代码都可以写--%>
	<%
	    String username = request.getParameter("username");
	    System.out.println(username);
	%>
	```

    - 代码脚本的特点是：
        - 代码脚本翻译之后都在`_jspService `方法中
        - 代码脚本由于翻译到`_jspService()`方法中，所以在`_jspService()`方法中的现有对象都可以直接使用。
        - 还可以由多个代码脚本块组合完成一个完整的java 语句。
        - 代码脚本还可以和表达式脚本一起组合使用，在jsp 页面上输出数据

#### 3、jsp 中的三种注释

- html 注释

  > <!-- 这是html 注释-->
  > html 注释会被翻译到java 源代码中。在_jspService 方法里，以out.writer 输出到客户端。

- java 注释

  > <%
  > // 单行java 注释
  > /* 多行java 注释*/
  > %>
  > java 注释会被翻译到java 源代码中。

- jsp 注释

  > <%-- 这是jsp 注释--%>
  > jsp 注释可以注掉，jsp 页面中所有代码。

#### 4、jsp 九大内置对象

==jsp 中的内置对象，是指Tomcat 在翻译jsp 页面成为Servlet 源代码后，内部提供的九大对象，叫内置对象。==

![image-20200423145129906](https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200423145129906.png)

#### 5、jsp的四大域对象

> 域对象是可以像Map 一样存取数据的对象

- **pageContext (PageContextImpl 类)**   当前jsp 页面范围内有效
- **request (HttpServletRequest 类)**       一次请求内有效
- **session (HttpSession 类)**                   一个会话范围内有效（打开浏览器访问服务器，直到关闭浏览器）
- **application (ServletContext 类)**         整个web 工程范围内都有效（只要web 工程不停止，数据都在）

优先顺序：==**pageContext ----> request ----> session ----> application**==

```html
<%----------------------------------------socre.jsp--------------------------------------%>
<body>
<h2>score.jsp页面</h2>
<%
    pageContext.setAttribute("key","pageContext");
    request.setAttribute("key","request");
    session.setAttribute("key","session");
    application.setAttribute("key","application");
%>
pageContext域是否有值：<%=pageContext.getAttribute("key") %><br>
request域是否有值：<%=request.getAttribute("key") %><br>
session域是否有值：<%=session.getAttribute("key") %><br>
application域是否有值：<%=application.getAttribute("key") %><br>
<%
    request.getRequestDispatcher("/score2.jsp").forward(request,response);
%>
</body>
</html>
<%--------------------------------------socre2.jsp--------------------------------------%>
<body>
<h2>score2.jsp页面</h2>
pageContext域是否有值：<%=pageContext.getAttribute("key") %><br>
request域是否有值：<%=request.getAttribute("key") %><br>
session域是否有值：<%=session.getAttribute("key") %><br>
application域是否有值：<%=application.getAttribute("key") %><br>
<%
    request.getRequestDispatcher("/score2.jsp").forward(request,response);
%>
</body>
</html>
```

#### 6、out 输出和response.getWriter 输出

response 中表示响应，我们经常用于设置返回给客户端的内容（输出）。out 也是给用户做输出使用的。

out.write() 输出字符串没有问题

out.print() 输出任意数据都没有问题（都转换成为字符串后调用的write 输出）

==**在jsp 页面中，可以统一使用out.print()来进行输出**==

### 3、jsp 的常用标签

#### 1、jsp 静态包含

> ```html
> <%--
>  <%@ include file=""%> 就是静态包含
> file 属性指定你要包含的jsp 页面的路径
> 地址中第一个斜杠/ 表示为http://ip:port/工程路径/ 映射到代码的web 目录
> 静态包含的特点：
> 1、静态包含不会翻译被包含的jsp 页面。
> 2、静态包含其实是把被包含的jsp 页面的代码拷贝到包含的位置执行输出。
> --%>
> <%@ include file="/include/footer.jsp"%>
> ```

#### 2、jsp动态包含

```html
<%--
    <jsp:include page=""></jsp:include> 这是动态包含
        page 属性是指定你要包含的jsp 页面的路径
        动态包含也可以像静态包含一样。把被包含的内容执行输出到包含位置
        动态包含的特点：
        1、动态包含会把包含的jsp 页面也翻译成为java 代码
        2、动态包含底层代码使用如下代码去调用被包含的jsp 页面执行输出。
        JspRuntimeLibrary.include(request, response, "/include/footer.jsp", out, false);
		3、动态包含，还可以传递参数
    --%>
<jsp:include page="/include/footer.jsp">
<jsp:param name="username" value="bbj"/>
<jsp:param name="password" value="root"/>
</jsp:include>
```

#### 3、jsp 标签-转发

```html
<%--
    <jsp:forward page=""></jsp:forward> 是请求转发标签，它的功能就是请求转发
        page 属性设置请求转发的路径
        --%>
<jsp:forward page="/scope2.jsp"></jsp:forward>
```

#### 4、jsp练习

- 9*9乘法表

  ```html
  <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
      <head>
          <title>输出99乘法表</title>
      </head>
      <body>
          <h1 align="center">乘法表</h1>
          <table align="center">
              <%
              for (int i = 0; i <= 9; i++) {  %>
              <tr>
                  <%  for (int j = 1; j <= i; j++) {
      %>
                  <td><%=j + "x" + i + "=" +(i*j) %></td>
                  <%
                  }
                  %>
              </tr>
              <% }
              %>
          </table>
      </body>
  </html>
  ```

- jsp 输出一个表格，里面有10 个学生信息。

  ```html
  <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
  <head>
      <title>Title</title>
      <style>
          table{
              border: 1px blue solid;
              width: 600px;
              border-collapse: collapse;
          }
          td,th{
              border: 1px blue solid;
          }
      </style>
  </head>
  <body>
  <%--jsp 输出一个表格，里面有10 个学生信息。--%>
  <%
      List<Student> studentList = new ArrayList<Student>();
      for (int i = 0; i < 10; i++) {
          int t = i + 1;
          studentList.add(new Student("name"+t,t,18+t,"phone"+t));
      }
  %>
  <% for (Student student : studentList) { %>
  <table>
      <tr>
          <td>编号</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>电话</td>
          <td>操作</td>
      </tr>
  <tr>
      <td><%=student.getId()%></td>
      <td><%=student.getName()%></td>
      <td><%=student.getAge()%></td>
      <td><%=student.getPhone()%></td>
      <td>删除、修改</td>
  </tr>
     <% } %>
  </table>
  </body>
  </html>
  ```
