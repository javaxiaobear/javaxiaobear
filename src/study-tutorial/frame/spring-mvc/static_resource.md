---
title: 12、静态资源访问
---
在 SpringMVC 中，静态资源，默认都是被拦截的，例如 html、js、css、jpg、png、txt、pdf 等等，都是无法直接访问的。因为所有请求都被拦截了，所以，针对静态资源，我们要做额外处理，处理方式很简单，直接在 SpringMVC 的配置文件中，添加如下内容：

```xml
<mvc:resources mapping="/static/html/**" location="/static/html/"/>
```

mapping 表示映射规则，也是拦截规则，就是说，如果请求地址是 /static/html 这样的格式的话，那么对应的资源就去 /static/html/ 这个目录下查找。

- 在映射路径的定义中，最后是两个 *，这是一种 Ant 风格的路径匹配符号，一共有三个通配符：

| 通配符 |       含义       |
| :----: | :--------------: |
|   **   |   匹配多层路径   |
|   *    |   匹配一层路径   |
|   ？   | 匹配任意单个字符 |

一个比较原始的配置方式可能如下：

```xml
<mvc:resources mapping="/static/html/**" location="/static/html/"/> 
<mvc:resources mapping="/static/js/**" location="/static/js/"/> 
<mvc:resources mapping="/static/css/**" location="/static/css/"/>
```

但是，由于 ** 可以表示多级路径，所以，以上配置，我们可以进行简化：

```xml
<mvc:resources mapping="/**" location="/"/>
```

