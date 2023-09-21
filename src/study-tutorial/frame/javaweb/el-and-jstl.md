---
title: 7、EL表达式 & JSTL 标签库
---
### 1、EL 表达式

#### 1、什么是EL 表达式，EL 表达式的作用?

> EL 表达式的全称是：Expression Language。是表达式语言。
>
> EL 表达式的什么作用：EL 表达式主要是代替jsp 页面中的表达式脚本在jsp 页面中进行数据的输出。
> 因为EL 表达式在输出数据的时候，要比jsp 的表达式脚本要简洁很多。

```html
<%
request.setAttribute("key","鄢汉雄");
%>
表达式脚本输出的值是：<%=request.getAttribute("key")%></br>
EL表达式输出的值是：${key}
```

==EL 表达式的格式是：${表达式}==

EL 表达式在输出null 值的时候，输出的是空串。

jsp 表达式脚本输出null 值的时候，输出的是null 字符串

#### 2、EL 表达式搜索域数据的顺序

EL 表达式主要是在jsp 页面中输出数据。主要是**输出域对象中的数据**。

当四个域中都有相同的key 的数据的时候，EL 表达式会按照四个域的从小到大的顺序去进行搜索，找到就输出。

==**pageContext ----> request ----> session ----> application**==

```html
<%
    request.setAttribute("key","request");
    session.setAttribute("key","session");
    application.setAttribute("key","application");
    pageContext.setAttribute("key","pageContext");
%>
<%----%>
表达式脚本输出的值是：<%=request.getAttribute("key")%></br>
EL表达式输出的值是：${key}
```

#### 3、EL 表达式输出Bean 的普通属性，数组属性。List 集合属性，map 集合属性

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person {
    private Integer id;
    private String[] phone;
    private List<String> city;
    private Map<String,Object> map;
}
```

```html
<%
    Person person = new Person();
    person.setId(12);
    person.setPhone(new String[]{"18391242239","1234523121"});
    ArrayList<String> objects = new ArrayList<>();
    objects.add("湖南");
    objects.add("长沙");
    objects.add("上海");
    person.setCity(objects);
    Map<String, Object> map = new HashMap<>();
    map.put("Key1","value1");
    map.put("Key2","value2");
    map.put("Key3","value3");
    person.setMap(map);
    pageContext.setAttribute("p", person);
%>

输出person:${p}</br>
输出person id的属性：${p.id}
输出Person 的pnones 数组属性值：${p.phones[2]} <br>
输出Person 的cities 集合中的元素值：${p.city} <br>
输出Person 的List 集合中个别元素值：${p.city[2]} <br>
输出Person 的Map 集合: ${p.map} <br>
输出Person 的Map 集合中某个key 的值: ${p.map.key3} <br>
```

#### 4、EL 表达式——运算

> 语法：${ 运算表达式}

##### 1、关系运算

| 关系运算符 | 说明     | 范例                                 | 结果           |
| ---------- | -------- |------------------------------------| -------------- |
| == 或eq    | 等于     | `${1001 == 1001} or ${1001 eq 1001}` | true or true   |
| != 或ne    | 不等于   | `${1001 != 1001} or ${1001 ne 1001}` | false or false |
| <或lt      | 小于     | `${1001 < 1004} or ${1001 lt 1001}`  | true or false  |
| > 或者gt   | 大于     | `${1001 > 1004} or ${1001 gt 1001} ` | false or false |
| <= 或le    | 小于等于 |` ${1001 <= 1004} or ${1001 le 1001} `| true or true   |
| >= 或ge    | 大于等于 | `${1001 >= 1004} or ${1001 ge 1001}` | false or true  |

##### 2、逻辑运算

| 逻辑运算符 | 说明     | 范例                                               | 结果           |
| ---------- | -------- | -------------------------------------------------- | -------------- |
| && 或and   | 与运算   | `${14 == 10 && 10 < 14} or ${14 == 10 and 10 < 14}`  | false or false |
| \|\|或or   | 或运算   | `${14 == 10 \|\| 10 < 14} or ${14 == 10 or 10 < 14}` | true or true   |
| ! 或not    | 取反运算 |` ${!false} or ${not true} `                          | true or false  |

##### 3、算数运算

| 逻辑运算符 | 说明 | 范例                        | 结果         |
| ---------- | ---- |---------------------------| ------------ |
| +          | 加   | `${10 + 14}`                | 24           |
| -          | 减   | `${520 - 250}`              | 270          |
| *          | 乘   | `${25 * 25} `               | 625          |
| /或div     | 除   | `${99 / 3} or ${99 div 3}`  | 33.0 or 33.0 |
| %或mod     | 取余 | `${100 % 3} or ${100 mod 3}` | 1 or 1       |

##### 4、empty运算

> empty 运算可以判断一个数据是否为空，如果为空，则输出true,不为空输出false

**为空的情况：**

- 值为null 值的时候，为空
- 值为空串的时候，为空
- 值是Object 类型数组，长度为零的时候
- list 集合，元素个数为零
- map 集合，元素个数为零

```html
<%
//值为null 值的时候，为空
    request.setAttribute("emptyNull",null);
//值为空串的时候，为空
request.setAttribute("emptyStr","");
// 值是Object 类型数组，长度为零的时候
request.setAttribute("emptyArr",new Object[]{});
//list 集合，元素个数为零
request.setAttribute("emptyList",new ArrayList<>());
//map 集合，元素个数为零
    request.setAttribute("emptyMap",new HashMap<>());
%>
${ empty emptyNull } <br/>
${ empty emptyStr } <br/>
${ empty emptyArr } <br/>
${ empty emptyList } <br/>
${ empty emptyMap } <br/>
```

##### 5、三元运算

> 表达式1？表达式2：表达式3

```html
${100>120?"Xiaobear很帅！！":"非常帅！！！"}
```

##### 6、.点运算和[] 中括号运算符

> .点运算，可以输出Bean 对象中某个属性的值。
> []中括号运算，可以输出有序集合中某个元素的值。
> 并且[]中括号运算，还可以输出map 集合中key 里含有特殊字符的key 的值。

```html
<%
    HashMap<String, Object> map = new HashMap<String,Object>();
    map.put("a.b.c","abc");
    map.put("a-b-c","a-b-c");
    request.setAttribute("map",map);
%>

${map['a.b.c']}
${map['a-b-c']}
```

#### 5、EL 表达式的11 个隐含对象

| 变量             | 类型                 | 作用                                     |
| ---------------- | -------------------- |----------------------------------------|
| pageContext      | pageContextImpl      | 它可以获取jsp 中的九大内置对象                      |
| pageScope        | Map<String,Object>   | 它可以获取pageContext 域中的数据                 |
| requestScope     | Map<String,Object>   | 它可以获取Request 域中的数据                     |
| sessionScope     | Map<String,Object>   | 它可以获取Session 域中的数据                     |
| applicationScope | Map<String,Object>   | 它可以获取ServletContext 域中的数据              |
| param            | Map<String,String>   | 它可以获取请求参数的值                            |
| paramValues      | Map<String,String[]> | 它也可以获取请求参数的值，获取多个值的时候使用。               |
| header           | Map<String,String>   | 它可以获取请求头的信息                            |
| headerValues     | Map<String,String[]> | 它可以获取请求头的信息，它可以获取多个值的情况                |
| cookie           | Map<String,Cookie>   | 它可以获取当前请求的Cookie 信息                    |
| initParam        | Map<String,String>   | 它可以获取在web.xml 中配置的`<context-param>`上下文参数 |

##### 1、EL 获取四个特定域中的属性

> pageScope ====== pageContext 域
> requestScope ====== Request 域
> sessionScope ====== Session 域
> applicationScope ====== ServletContext 域

```html
<%
    pageContext.setAttribute("key1","value1");
    pageContext.setAttribute("key2","value2");
    request.setAttribute("key2","value2");
    session.setAttribute("key2","value2");
    application.setAttribute("key2","value2");
%>
${applicationScope.key2}
```

##### 2、pageContext 对象的使用

1. 协议：

2. 服务器ip：
3. 服务器端口：
4. 获取工程路径：
5. 获取请求方法：
6. 获取客户端ip 地址：
7. 获取会话的id 编号：

```html
<%
    request.setAttribute("req",request);
%>
<%=request.getScheme() %> <br>
1.协议： ${ req.scheme }<br>
2.服务器ip：${ pageContext.request.serverName }<br>
3.服务器端口：${ pageContext.request.serverPort }<br>
4.获取工程路径：${ pageContext.request.contextPath }<br>
5.获取请求方法：${ pageContext.request.method }<br>
6.获取客户端ip 地址：${ pageContext.request.remoteHost }<br>
7.获取会话的id 编号：${ pageContext.session.id }<br>
```

### 2、JSTL 标签库

> JSTL 标签库全称是指JSP Standard Tag Library JSP 标准标签库。是一个不断完善的开放源代码的JSP 标签库。
> EL 表达式主要是为了替换jsp 中的表达式脚本，而标签库则是为了替换代码脚本。这样使得整个jsp 页面变得更佳简洁。

**JSTL 标签库的使用步骤：**

- 先导入jstl 标签库的jar 包。[http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/](http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/)

- 使用taglib 指令引入标签库

  ```html
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
  ```


#### 1、core 核心库使用

##### 1、<c:set />（使用很少）

> set 标签可以往域中保存数据

```html
保存之前：${requestScope.abc}
<c:set scope="session" var="abc" value="abcValue"></c:set>
保存之后：${sessionScope.abc}
```

##### 2、<c:if />

> if 标签用来做if 判断。不支持if-else

```html
<%--
ii.<c:if />
if 标签用来做if 判断。
test 属性表示判断的条件（使用EL 表达式输出）
--%>
<c:if test="${ 12 == 12 }">
    <h1>12 等于12</h1>
</c:if>
<c:if test="${ 12 != 12 }">
    <h1>12 不等于12</h1>
</c:if>
```

##### 3、<c:choose> <c:when> <c:otherwise>标签

> 多路判断。跟switch ... case .... default 非常接近

```html
<%--<c:choose> <c:when> <c:otherwise>标签
    1、标签里不能使用html 注释，要使用jsp 注释
	2、when 标签的父标签一定要是choose 标签
    --%>
<%
    request.setAttribute("height",175);
%>
<c:choose>
    <c:when test="${requestScope.height} > 180">
        <h2>是巨人</h2>
    </c:when>
    <c:when test="${requestScope.height} < 170">
        <h2>还可以</h2>
    </c:when>
    <c:when test="${requestScope.height} > 185">
        <h2>超巨人</h2>
    </c:when><c:when test="${requestScope.height} > 180">
    <h2>可以</h2>
</c:when>
<c:otherwise>
    qita
</c:otherwise>
</c:choose>
```

##### 4、<c:forEach />

> 遍历输出使用。

###### 1. 遍历1 到10

```html
<%--1.遍历1 到10，输出
begin 属性设置开始的索引
end 属性设置结束的索引
var 属性表示循环的变量(也是当前正在遍历到的数据)
for (int i = 1; i < 10; i++)
--%>
<c:forEach begin="1" end="10" var="i">
    ${i}
</c:forEach>
```

###### 2、遍历Object 数组

```html
<%-- 2.遍历Object 数组
for (Object item: arr)
items 表示遍历的数据源（遍历的集合）
var 表示当前遍历到的数据
--%>
<%
    request.setAttribute("hello",new String[]{"123","1234","124"});
%>
<c:forEach items="${requestScope.hello}" var="item">
    ${item}
</c:forEach>
```

###### 3、遍历Map 集合

```html
<%
Map<String,Object> map = new HashMap<String, Object>();
map.put("key1", "value1");
map.put("key2", "value2");
map.put("key3", "value3");
// for ( Map.Entry<String,Object> entry : map.entrySet()) {
// }
request.setAttribute("map", map);
%>
<c:forEach items="${ requestScope.map }" var="entry">
<h1>${entry.key} = ${entry.value}</h1>
</c:forEach>
```

###### 4、遍历List 集合

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private Integer id;
    private String username;
    private String password;
    private Integer age;
    private String phone;
}
```

```html
<%
    ArrayList<Student> objects = new ArrayList<Student>();
    for (int i = 0; i <= 10; i++) {
        objects.add(new Student(1,"username"+i,"pass"+i,18+i,"phone"+i));
    }
    request.setAttribute("stu",objects);
%>
<table>
    <tr>
        <th>编号</th>
        <th>用户名</th>
        <th>密码</th>
        <th>年龄</th>
        <th>电话</th>
        <th>操作</th>
    </tr>
    <%--
    items 表示遍历的集合
    var 表示遍历到的数据
    begin 表示遍历的开始索引值
    end 表示结束的索引值
    step 属性表示遍历的步长值
    varStatus 属性表示当前遍历到的数据的状态
    for（int i = 1; i < 10; i+=2）
    --%>
    <c:forEach begin="2" end="7" varStatus="status" items="${requestScope.stu}" var="stu">
    <tr>
        <td>${stu.id}</td>
        <td>${stu.username}</td>
        <td>${stu.password}</td>
        <td>${stu.age}</td>
        <td>${stu.phone}</td>
    </tr>
    </c:forEach>
```
