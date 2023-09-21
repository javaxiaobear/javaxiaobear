---
title: 8、文件上传与下载
---
### 1、文件的上传

需要的jar包：commons-fileupload-1.2.1.jar、commons-io-1.4.jar

1. 要有一个form 标签，method=post 请求
2. form 标签的encType 属性值必须为multipart/form-data 值
3. 在form 标签中使用input type=file 添加上传的文件
4. 编写服务器代码（Servlet 程序）接收，处理上传的数据。

#### 1、[commons-fileupload.jar](http://commons.apache.org/)

```
ServletFileUpload 类，用于解析上传的数据。
FileItem 类，表示每一个表单项。

boolean ServletFileUpload.isMultipartContent(HttpServletRequest request);
判断当前上传的数据格式是否是多段的格式。

public List<FileItem> parseRequest(HttpServletRequest request)
解析上传的数据
    
boolean FileItem.isFormField()
判断当前这个表单项，是否是普通的表单项。还是上传的文件类型。
true 表示普通类型的表单项
false 表示上传的文件类型
    
String FileItem.getFieldName()
获取表单项的name 属性值

String FileItem.getString()
获取当前表单项的值。

String FileItem.getName();
获取上传的文件名

void FileItem.write( file );
将上传的文件写到参数file 所指向抽硬盘位置。
```

form表单

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>upload</title>
</head>
<body>
<form action="http://localhost:8080/JavaWeb_04_war_exploded/upload" method="post" enctype="multipart/form-data">
    用户名:<input type="text" name="username"><br>
    头像:<input type="file" name="photo"><br>
    <input type="submit" value="上传">
</form>
</body>
</html>
```

Servlet，web.xml配置省略

```java
public class UploadServlet extends HttpServlet {

    @SneakyThrows
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        /* 
        System.out.println("文件已上传");
        ServletInputStream inputStream = req.getInputStream();
        byte[] buffer = new byte[10240000];
        int read = inputStream.read(buffer);
        System.out.println(new String(buffer,0,read));
        */
        // 先判断上传的数据是否多段数据（只有是多段的数据，才是文件上传的）
        if(ServletFileUpload.isMultipartContent(req)){
            //创建FileItemFactory 工厂实现类
FileItemFactory factory = new DiskFileItemFactory();
            // 创建用于解析上传数据的工具类ServletFileUpload 类
            ServletFileUpload upload = new ServletFileUpload(factory);
            try{
                // 解析上传的数据，得到每一个表单项FileItem
                List<FileItem> list = upload.parseRequest(req);
                // 循环判断，每一个表单项，是普通类型，还是上传的文件
                for (FileItem fileItem : list) {
                    if (fileItem.isFormField()) {
                            // 普通表单项
                        System.out.println("表单项的name 属性值：" + fileItem.getFieldName());
                                    // 参数UTF-8.解决乱码问题
                        System.out.println("表单项的value 属性值：" + fileItem.getString("UTF-8"));
                    } else {
                                                    // 上传的文件
                        System.out.println("表单项的name 属性值：" + fileItem.getFieldName());
                        System.out.println("上传的文件名：" + fileItem.getName());
                        fileItem.write(new File("e:\\" + fileItem.getName()));
                    }
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }
}
```

### 2、文件的下载

> 下载的常用API 说明：
> response.getOutputStream();
> servletContext.getResourceAsStream();
> servletContext.getMimeType();
> response.setContentType();

```java
public class Download extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取下载的文件名
        String downFile = "t011c6cdb031350fcb6.jpg";
        //读取下载的文件内容
        ServletContext context = getServletContext();
        //获取下载的文件类型
        String mimeType = context.getMimeType("/file/"+downFile);
        System.out.println("下载的文件类型："+mimeType);
        //在回传前，通过响应头告诉客户端返回的数据类型
        resp.setContentType(mimeType);
        resp.setHeader("Content-Disposition", "attachment; fileName=t011c6cdb031350fcb6.jpg");
        //告诉客户端收到的数据类型是用于下载
        InputStream stream = context.getResourceAsStream("/file/"+downFile);
        //获取输出流
        ServletOutputStream outputStream = resp.getOutputStream();
        //读取全部数据，复制给输出流，输出给客户端
        IOUtils.copy(stream,outputStream);
        //把下载的内容回传给客户端
    }
}
```

**中文名乱码问题:**

- URLEncoder 解决IE 和谷歌浏览器的附件中文名问题

  ```java
  // 把中文名进行UTF-8 编码操作。
  String str = "attachment; fileName=" + URLEncoder.encode("中文.jpg", "UTF-8");
  // 然后把编码后的字符串设置到响应头中
  response.setHeader("Content-Disposition", str);
  ```

- BASE64 编解码解决火狐浏览器的附件中文名问题

  ```java
  //因为火狐使用的是BASE64 的编解码方式还原响应中的汉字。所以需要使用BASE64Encoder 类进行编码操作。
  // 使用下面的格式进行BASE64 编码后
  String str = "attachment; fileName=" + "=?utf-8?B?"
  + new BASE64Encoder().encode("中文.jpg".getBytes("utf-8")) + "?=";
  // 设置到响应头中
  response.setHeader("Content-Disposition", str);
  ----------------------------------------------------------------------------------
  //通过判断请求头中User-Agent 这个请求头携带过来的浏览器信息即可判断出是什么浏览器。如下：
  String ua = request.getHeader("User-Agent");
  // 判断是否是火狐浏览器
  if (ua.contains("Firefox")) {
  // 使用下面的格式进行BASE64 编码后
  String str = "attachment; fileName=" + "=?utf-8?B?"
  + new BASE64Encoder().encode("中文.jpg".getBytes("utf-8")) + "?=";
  // 设置到响应头中
  response.setHeader("Content-Disposition", str);
  } else {
  // 把中文名进行UTF-8 编码操作。
  String str = "attachment; fileName=" + URLEncoder.encode("中文.jpg", "UTF-8");
  // 然后把编码后的字符串设置到响应头中
  response.setHeader("Content-Disposition", str);
  }
  ```
