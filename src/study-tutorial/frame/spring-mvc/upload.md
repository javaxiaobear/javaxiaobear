---
title: 10、文件上传
---
> SpringMVC 中对文件上传做了封装，我们可以更加方便的实现文件上传。从 Spring3.1 开始，对于文件上传，提供了两个处理器：
>
> - **CommonsMultipartResolver**
> - **StandardServletMultipartResolver**
> - 第一个处理器兼容性较好，可以兼容 Servlet3.0 之前的版本，但是它依赖了 commons-fileupload 这个第三方工具，所以如果使用这个，一定要添加 commons-fileupload 依赖。
> - 第二个处理器兼容性较差，它适用于 Servlet3.0 之后的版本，它不依赖第三方工具，使用它，可以直接做文件上传。

### 1、`CommonsMultipartResolver`

使用 CommonsMultipartResolver 做文件上传，需要首先添加 commons-fileupload 依赖

```xml
<!-- https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload -->
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.4</version>
</dependency>
```

#### 1、在 SpringMVC 的配置文件中，配置 MultipartResolver：

```xml
<!--配置 MultipartResolver id必须是multipartResolver-->
<bean class="org.springframework.web.multipart.commons.CommonsMultipartResolver" id="multipartResolver"/>
```

#### 2、Jsp页面

```html
<form action="/upload" method="post" enctype="multipart/form-data"> 
    <input type="file" name="file"> 
    <input type="submit" value="上传"> 
</form>
```

注意文件上传请求是 POST 请求，enctype 一定是 multipart/form-data

- upload.jsp

  ```html
  <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
  <head>
      <title>Title</title>
  </head>
  <body>
  <%
      Object msg = request.getAttribute("msg");
  %>
  <%=msg%>
  </body>
  </html>
  ```

#### 3、controller

```java
@Controller
public class UploadController {

    @RequestMapping("/upload")
    public String upload(@RequestParam("file") List<MultipartFile> files, HttpServletRequest request) throws IOException {
        /*System.out.println("OriginalFilename : "+file.getOriginalFilename());
        InputStream inputStream = file.getInputStream();
        System.out.println("inputStream.available() : "+inputStream.available());
        System.out.println("inputStream : "+inputStream);*/
        String msg = "";
        // 判断文件是否上传
        if (!files.isEmpty()) {
            // 设置上传文件的保存目录
            String basePath = request.getServletContext().getRealPath("/upload/");
            System.out.println(basePath);
            // 判断文件目录是否存在
            File uploadFile = new File(basePath);
            if (!uploadFile.exists()) {
                uploadFile.mkdirs();
            }
            for (MultipartFile file : files) {
                String originalFilename = file.getOriginalFilename();
                if (originalFilename != null && !originalFilename.equals("")) {
                    try {
                        // 对文件名做加UUID值处理
                        originalFilename = UUID.randomUUID() + "_" + originalFilename;
                        file.transferTo(new File(basePath + originalFilename));
                    } catch (IOException e) {
                        e.printStackTrace();
                        msg = "文件上传失败！";
                    }
                } else {
                    msg = "上传的文件为空！";
                }
            }
            msg = "文件上传成功！";
        } else {
            msg = "没有文件被上传！";
        }
        request.setAttribute("msg", msg);
        return "upload";
    }
}
```

这里还有一个小问题，在 SpringMVC 中，静态资源默认都是被自动拦截的，无法访问，意味着上传成功的图片无法访问，因此，还需要我们在 SpringMVC 的配置文件中，再添加如下配置：

```xml
<mvc:resources mapping="/**" location="/"/>
```

当然，默认的配置不一定满足我们的需求，我们还可以自己手动配置文件上传大小等：

```xml
<bean class="org.springframework.web.multipart.commons.CommonsMultipartResolver" id="multipartResolver">
    <!--默认的编码--> 
    <property name="defaultEncoding" value="UTF-8"/> 
    <!--上传的总文件大小--> 
    <property name="maxUploadSize" value="1048576"/> 
    <!--上传的单个文件大小--> 
    <property name="maxUploadSizePerFile" value="1048576"/>
    <!--内存中最大的数据量，超过这个数据量，数据就要开始往硬盘中写了--> 
    <property name="maxInMemorySize" value="4096"/> 
    <!--临时目录，超过 maxInMemorySize 配置的大小后，数据开始往临时目录写，等全部上传完成后，再将数据合并到正式的文件上传目录--> 
    <property name="uploadTempDir" value="file:///E:\\tmp"/> 
</bean>
```

### 2、`StandardServletMultipartResolver`

这种文件上传方式，不需要依赖第三方 jar（主要是不需要添加 commons-fileupload 这个依赖），但是也不支持 Servlet3.0 之前的版本。
使用 StandardServletMultipartResolver ，那我们首先在 SpringMVC 的配置文件中，配置这个 Bean：

```xml
<bean class="org.springframework.web.multipart.support.StandardServletMultipartResolver" id="multipartResolver">
</bean>
```

**注意，这里 Bean 的名字依然叫 multipartResolver**

- 配置完成后，注意，这个 Bean 无法直接配置上传文件大小等限制。需要在 web.xml 中进行配置（这里，即使不需要限制文件上传大小，也需要在 web.xml 中配置 multipart-config）

  ```xml
  <multipart-config> 
      <!--文件保存的临时目录，这个目录系统不会主动创建--> 
      <location>E:\\temp</location> 
      <!--上传的单个文件大小--> 
      <max-file-size>1048576</max-file-size> 
      <!--上传的总文件大小--> <max-request-size>1048576</max-request-size> 
      <!--这个就是内存中保存的文件最大大小--> 
      <file-size-threshold>4096</file-size-threshold> 
  </multipart-config>
  ```

配置完成后，就可以测试文件上传了，测试方式和上面一样。

### 3、多文件上传

主要是 input 节点中多了 multiple 属性。后端用一个数组来接收文件即可：

```java
@RequestMapping("/upload2")
public String uploadFile(MultipartFile[] files, HttpServletRequest req) throws IOException {
    for (MultipartFile file : files) {
        if(!file.isEmpty()){
            file.transferTo(new File("D:/"+file.getOriginalFilename()));
            req.getSession().setAttribute("msg","success");
        }
    }
    return "upload";
}
```
