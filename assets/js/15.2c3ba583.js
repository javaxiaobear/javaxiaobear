(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{393:function(t,a,s){t.exports=s.p+"assets/img/image-20210904211626351.c137ab1c.png"},424:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1、什么是spring-mvc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是spring-mvc"}},[t._v("#")]),t._v(" 1、什么是Spring MVC?")]),t._v(" "),e("blockquote",[e("p",[t._v("Spring MVC是一个基于Java的实现了MVC设计模式的请求驱动类型的轻量级Web框架，通过把模型-视图-控制器分离，将web层进行职责解耦，把复杂的web应用分成逻辑清晰的几部分，简化开发，减少出错，方便组内开发人员之间的配合。")])]),t._v(" "),e("h2",{attrs:{id:"_2、spring-mvc的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、spring-mvc的优点"}},[t._v("#")]),t._v(" 2、Spring MVC的优点？")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("可以支持各种视图技术，而不仅仅局限于JSP")]),t._v(" "),e("li",[t._v("与Spring 框架继承（IOC、AOP）")]),t._v(" "),e("li",[t._v("清晰的角色分配：前端控制器（DispatcherServlet）,请求到处理器映射（HandleMapping）,处理器适配器（HandleAdapter）,视图解析器（ViewResolver）")]),t._v(" "),e("li",[t._v("支持各种请求资源的映射策略")]),t._v(" "),e("li",[t._v("易于扩展的")])])]),t._v(" "),e("h2",{attrs:{id:"_3、spring-mvc的主要组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、spring-mvc的主要组件"}},[t._v("#")]),t._v(" 3、Spring MVC的主要组件")]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("p",[t._v("前端控制器（DispatcherServlet）")]),t._v(" "),e("p",[t._v("作用：接收请求、响应结果，相当于转发器，有了DispatcherServlet就减少了其他组件之间的耦合度")])]),t._v(" "),e("li",[e("p",[t._v("处理器映射器HandlerMapping（不需要程序员开发）")]),t._v(" "),e("p",[t._v("作用：根据请求的URL来查找Handler")])]),t._v(" "),e("li",[e("p",[t._v("处理器适配器HandlerAdapter")]),t._v(" "),e("p",[t._v("在编写Handler的时候要按照HandlerAdapter要求的规则去编写，这样适配器HandlerAdapter才可以正确的去执行Handler。")])]),t._v(" "),e("li",[e("p",[t._v("处理器Handler（需要程序员开发）")])]),t._v(" "),e("li",[e("p",[t._v("视图解析器 ViewResolver（不需要程序员开发）")]),t._v(" "),e("p",[t._v("作用：进行视图的解析，根据视图逻辑名解析成真正的视图（view）")])]),t._v(" "),e("li",[e("p",[t._v("视图View（需要程序员开发jsp）")]),t._v(" "),e("p",[t._v("View是一个接口， 它的实现类支持不同的视图类型（jsp，freemarker，pdf等等）")])])])]),t._v(" "),e("h2",{attrs:{id:"_4、什么是dispatcherservlet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、什么是dispatcherservlet"}},[t._v("#")]),t._v(" 4、什么是DispatcherServlet")]),t._v(" "),e("blockquote",[e("p",[t._v("Spring的MVC框架是围绕DispatcherServlet来设计的，它用来处理所有的HTTP请求和响应。")])]),t._v(" "),e("h2",{attrs:{id:"_5、什么是spring-mvc框架的控制器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、什么是spring-mvc框架的控制器"}},[t._v("#")]),t._v(" 5、什么是Spring MVC框架的控制器？")]),t._v(" "),e("blockquote",[e("p",[t._v("控制器提供一个访问应用程序的行为，此行为通常通过服务接口实现。控制器解析用户输入并将其转换为一个由视图呈现给用户的模型。Spring用一个非常抽象的方式实现了一个控制层，允许用户创建多种用途的控制器。")])]),t._v(" "),e("h2",{attrs:{id:"_6、spring-mvc的控制器是不是单例模式-如果是-有什么问题-怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、spring-mvc的控制器是不是单例模式-如果是-有什么问题-怎么解决"}},[t._v("#")]),t._v(" 6、Spring MVC的控制器是不是单例模式,如果是,有什么问题,怎么解决？")]),t._v(" "),e("blockquote",[e("p",[t._v("是单例模式,所以在多线程访问的时候有线程安全问题,不要用同步,会影响性能的,解决方案是在控制器里面不能写字段。")])]),t._v(" "),e("h2",{attrs:{id:"_7、spring-mvc的工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、spring-mvc的工作原理"}},[t._v("#")]),t._v(" 7、Spring MVC的工作原理")]),t._v(" "),e("p",[e("img",{attrs:{src:s(393),alt:"image-20210904211626351"}})]),t._v(" "),e("h2",{attrs:{id:"_8、mvc是什么-mvc设计模式的好处有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、mvc是什么-mvc设计模式的好处有哪些"}},[t._v("#")]),t._v(" 8、MVC是什么？MVC设计模式的好处有哪些？")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("mvc是一种设计模式（设计模式就是日常开发中编写代码的一种好的方法和经验的总结）。模型（model）-视图（view）-控制器（controller），三层架构的设计模式。用于实现前端页面的展现与后端业务数据处理的分离。")]),t._v(" "),e("li",[t._v("好处：\n"),e("ul",[e("li",[t._v("分层设计，实现了业务系统各个组件之间的解耦，有利于业务系统的可扩展性，可维护性。")]),t._v(" "),e("li",[t._v("有利于系统的并行开发，提升开发效率。")])])])])]),t._v(" "),e("h2",{attrs:{id:"_9、注解的原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、注解的原理是什么"}},[t._v("#")]),t._v(" 9、注解的原理是什么")]),t._v(" "),e("blockquote",[e("p",[t._v("注解本质是一个继承了Annotation的特殊接口，其具体实现类是Java运行时生成的动态代理类。我们通过反射获取注解时，返回的是Java运行时生成的动态代理对象。通过代理对象调用自定义注解的方法，会最终调用AnnotationInvocationHandler的invoke方法。该方法会从memberValues这个Map中索引出对应的值。而memberValues的来源是Java常量池。")])]),t._v(" "),e("h2",{attrs:{id:"_10、spring-mvc常用的注解有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10、spring-mvc常用的注解有哪些"}},[t._v("#")]),t._v(" 10、Spring MVC常用的注解有哪些？")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("@RequestMapping")]),t._v("：用于处理请求 url 映射的注解，可用于类或方法上。用于类上，则表示类中的所有响应请求的方法都是以该地址作为父路径。")]),t._v(" "),e("p",[e("code",[t._v("@RequestBody")]),t._v("：注解实现接收http请求的json数据，将json转换为java对象。")]),t._v(" "),e("p",[e("code",[t._v("@ResponseBody")]),t._v("：注解实现将conreoller方法返回对象转化为json对象响应给客户。")]),t._v(" "),e("p",[e("code",[t._v("@Conntroller")]),t._v("：控制器的注解，表示是表现层,不能用用别的注解代替")])]),t._v(" "),e("h2",{attrs:{id:"_11、spingmvc中的控制器的注解一般用哪个-有没有别的注解可以替代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11、spingmvc中的控制器的注解一般用哪个-有没有别的注解可以替代"}},[t._v("#")]),t._v(" 11、SpingMvc中的控制器的注解一般用哪个,有没有别的注解可以替代？")]),t._v(" "),e("blockquote",[e("p",[t._v("一般用@Controller注解,也可以使用@RestController,@RestController注解相当于@ResponseBody ＋ @Controller,表示是表现层,除此之外，一般不用别的注解代替。")])]),t._v(" "),e("h2",{attrs:{id:"_12、-requestmapping注解的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12、-requestmapping注解的作用"}},[t._v("#")]),t._v(" 12、@RequestMapping注解的作用")]),t._v(" "),e("blockquote",[e("p",[t._v("RequestMapping是一个用来处理请求地址映射的注解，可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。")]),t._v(" "),e("p",[t._v("RequestMapping注解有六个属性")]),t._v(" "),e("ul",[e("li",[t._v("value， method\n"),e("ul",[e("li",[t._v("value： 指定请求的实际地址，指定的地址可以是URI Template 模式（后面将会说明）")]),t._v(" "),e("li",[t._v("method： 指定请求的method类型， GET、POST、PUT、DELETE等")])])]),t._v(" "),e("li",[t._v("consumes，produces\n"),e("ul",[e("li",[t._v("consumes： 指定处理请求的提交内容类型（Content-Type），例如application/json,text/html;")]),t._v(" "),e("li",[t._v("produces: 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回；")])])]),t._v(" "),e("li",[t._v("params，headers\n"),e("ul",[e("li",[t._v("params： 指定request中必须包含某些参数值是，才让该方法处理。")]),t._v(" "),e("li",[t._v("headers： 指定request中必须包含某些指定的header值，才能让该方法处理请求。")])])])])]),t._v(" "),e("h2",{attrs:{id:"_13、-responsebody注解的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13、-responsebody注解的作用"}},[t._v("#")]),t._v(" 13、@ResponseBody注解的作用")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("作用")]),t._v("： 该注解用于将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式后，写入到Response对象的body数据区。")]),t._v(" "),e("p",[e("strong",[t._v("使用时机")]),t._v("：返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）使用；")])]),t._v(" "),e("h2",{attrs:{id:"_14、-pathvariable和-requestparam的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14、-pathvariable和-requestparam的区别"}},[t._v("#")]),t._v(" 14、@PathVariable和@RequestParam的区别")]),t._v(" "),e("blockquote",[e("p",[t._v("请求路径上有个id的变量值，可以通过@PathVariable来获取 @RequestMapping(value =“/page/{id}”, method = RequestMethod.GET)")]),t._v(" "),e("p",[t._v("@RequestParam用来获得静态的URL请求入参 spring注解时action里用到。")])]),t._v(" "),e("h2",{attrs:{id:"_15、spring-mvc与struts2区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15、spring-mvc与struts2区别"}},[t._v("#")]),t._v(" 15、Spring MVC与Struts2区别")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("相同点")]),t._v("：都是基于mvc的表现层框架，都用于web项目的开发。")]),t._v(" "),e("p",[e("strong",[t._v("不同点")]),t._v("：")]),t._v(" "),e("ol",[e("li",[t._v("前端控制器不一样。\n"),e("ul",[e("li",[t._v("Spring MVC的前端控制器是servlet：DispatcherServlet。")]),t._v(" "),e("li",[t._v("struts2的前端控制器是filter：StrutsPreparedAndExcutorFilter。")])])]),t._v(" "),e("li",[t._v("请求参数的接收方式不一样。\n"),e("ul",[e("li",[t._v("Spring MVC是使用方法的形参接收请求的参数，基于方法的开发，线程安全，可以设计为单例或者多例的开发，推荐使用单例模式的开发（执行效率更高），默认就是单例开发模式。")]),t._v(" "),e("li",[t._v("struts2是通过类的成员变量接收请求的参数，是基于类的开发，线程不安全，只能设计为多例的开发。")])])]),t._v(" "),e("li",[t._v("Struts采用值栈存储请求和响应的数据，通过OGNL存取数据；Spring MVC通过参数解析器是将request请求内容解析，并给方法形参赋值，将数据和视图封装成ModelAndView对象，最后又将ModelAndView中的模型数据通过reques域传输到页面。Jsp视图解析器默认使用jstl。")]),t._v(" "),e("li",[t._v("与spring整合不一样。\n"),e("ul",[e("li",[t._v("Spring MVC是spring框架的一部分，不需要整合。在企业项目中，SpringMVC使用更多一些。")])])])])]),t._v(" "),e("h2",{attrs:{id:"_16、spring-mvc怎么样设定重定向和转发的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16、spring-mvc怎么样设定重定向和转发的"}},[t._v("#")]),t._v(" 16、Spring MVC怎么样设定重定向和转发的？")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("重定向")]),t._v('：在返回值前面加"forward:"，譬如"forward:user.do?name=method4"')]),t._v(" "),e("p",[e("strong",[t._v("转发")]),t._v('：在返回值前面加"redirect:"，譬如"redirect:www.baidu.com"')])]),t._v(" "),e("h2",{attrs:{id:"_17、spring-mvc怎么和ajax相互调用的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17、spring-mvc怎么和ajax相互调用的"}},[t._v("#")]),t._v(" 17、Spring MVC怎么和AJAX相互调用的？")]),t._v(" "),e("blockquote",[e("p",[t._v("通过Jackson框架就可以把Java里面的对象直接转化成Js可以识别的Json对象。具体步骤如下：")]),t._v(" "),e("ul",[e("li",[t._v("加入Jackson.jar")]),t._v(" "),e("li",[t._v("在配置文件中配置json的映射")]),t._v(" "),e("li",[t._v("在接受Ajax方法里面可以直接返回Object,List等,但方法前面要加上@ResponseBody注解。")])])]),t._v(" "),e("h2",{attrs:{id:"_18、如何解决post请求中文乱码问题-get的又如何处理呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18、如何解决post请求中文乱码问题-get的又如何处理呢"}},[t._v("#")]),t._v(" 18、如何解决POST请求中文乱码问题，GET的又如何处理呢？")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("POST处理中文乱码")]),t._v("：在web.xml中配置一个CharacterEncodingFilter过滤器，设置成utf-8；")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CharacterEncodingFilter"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filterclass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     org.springframework.web.filter.CharacterEncodingFilter"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("encoding"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("utf-8"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CharacterEncodingFilter"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("GET请求中文参数出现乱码解决方法")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("修改tomcat配置文件添加编码与工程编码一致，如下：")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v('<ConnectorURIEncoding="utf-8" connectionTimeout="20000" port="8080"protocol="HTTP/1.1" redirectPort="8443"/>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("对参数进行重新编码")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParamter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“userName”"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“ISO8859"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("”"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“utf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("”"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("ISO8859-1是tomcat默认编码，需要将tomcat编码后的内容按utf-8编码。")])])])]),t._v(" "),e("h2",{attrs:{id:"_19、spring-mvc的异常处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19、spring-mvc的异常处理"}},[t._v("#")]),t._v(" 19、Spring MVC的异常处理")]),t._v(" "),e("blockquote",[e("p",[t._v("可以将异常抛给Spring框架，由Spring框架来处理；我们只需要配置简单的异常处理器，在异常处理器中添视图页面即可。")])]),t._v(" "),e("h2",{attrs:{id:"_20、如果在拦截请求中-我想拦截get方式提交的方法-怎么配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20、如果在拦截请求中-我想拦截get方式提交的方法-怎么配置"}},[t._v("#")]),t._v(" 20、如果在拦截请求中，我想拦截get方式提交的方法,怎么配置")]),t._v(" "),e("blockquote",[e("p",[t._v("可以在@RequestMapping注解里面加上method=RequestMethod.GET。")])]),t._v(" "),e("h2",{attrs:{id:"_21、怎样在方法里面得到request-或者session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21、怎样在方法里面得到request-或者session"}},[t._v("#")]),t._v(" 21、怎样在方法里面得到Request,或者Session？")]),t._v(" "),e("blockquote",[e("p",[t._v("直接在方法的形参中声明request,Spring MVC就自动把request对象传入。")])]),t._v(" "),e("h2",{attrs:{id:"_22、如果想在拦截的方法里面得到从前台传入的参数-怎么得到"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_22、如果想在拦截的方法里面得到从前台传入的参数-怎么得到"}},[t._v("#")]),t._v(" 22、如果想在拦截的方法里面得到从前台传入的参数,怎么得到？")]),t._v(" "),e("blockquote",[e("p",[t._v("直接在形参里面声明这个参数就可以,但必须名字和传过来的参数一样。")])]),t._v(" "),e("h2",{attrs:{id:"_23、如果前台有很多个参数传入-并且这些参数都是一个对象的-那么怎么样快速得到这个对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_23、如果前台有很多个参数传入-并且这些参数都是一个对象的-那么怎么样快速得到这个对象"}},[t._v("#")]),t._v(" 23、如果前台有很多个参数传入,并且这些参数都是一个对象的,那么怎么样快速得到这个对象？")]),t._v(" "),e("blockquote",[e("p",[t._v("直接在方法中声明这个对象,Spring MVC就自动会把属性赋值到这个对象里面。")])]),t._v(" "),e("h2",{attrs:{id:"_24、spring-mvc中函数的返回值是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_24、spring-mvc中函数的返回值是什么"}},[t._v("#")]),t._v(" 24、Spring MVC中函数的返回值是什么？")]),t._v(" "),e("blockquote",[e("p",[t._v("返回值可以有很多类型,有String, ModelAndView。ModelAndView类把视图和数据都合并的一起的，但一般用String比较好。")])]),t._v(" "),e("h2",{attrs:{id:"_25、spring-mvc用什么对象从后台向前台传递数据的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_25、spring-mvc用什么对象从后台向前台传递数据的"}},[t._v("#")]),t._v(" 25、Spring MVC用什么对象从后台向前台传递数据的？")]),t._v(" "),e("blockquote",[e("p",[t._v("通过ModelMap对象,可以在这个对象里面调用put方法,把对象加到里面,前台就可以通过el表达式拿到。")])]),t._v(" "),e("h2",{attrs:{id:"_26、怎么样把modelmap里面的数据放入session里面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_26、怎么样把modelmap里面的数据放入session里面"}},[t._v("#")]),t._v(" 26、怎么样把ModelMap里面的数据放入Session里面？")]),t._v(" "),e("blockquote",[e("p",[t._v("可以在类上面加上@SessionAttributes注解,里面包含的字符串就是要放入session里面的key。")])]),t._v(" "),e("h2",{attrs:{id:"_27、spring-mvc里面拦截器是怎么写的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_27、spring-mvc里面拦截器是怎么写的"}},[t._v("#")]),t._v(" 27、Spring MVC里面拦截器是怎么写的")]),t._v(" "),e("blockquote",[e("p",[t._v("有两种写法,一种是实现HandlerInterceptor接口，另外一种是继承适配器类，接着在接口方法当中，实现处理逻辑；然后在Spring MVC的配置文件中配置拦截器即可：")])])])}),[],!1,null,null,null);a.default=r.exports}}]);