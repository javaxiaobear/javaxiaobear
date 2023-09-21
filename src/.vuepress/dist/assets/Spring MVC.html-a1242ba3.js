import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as s}from"./app-aeb4ead9.js";const t="/assets/image-20200627175815855-a5b8c75e.png",p={},i=s('<h2 id="_1、什么是spring-mvc" tabindex="-1"><a class="header-anchor" href="#_1、什么是spring-mvc" aria-hidden="true">#</a> 1、什么是Spring MVC?</h2><blockquote><p>Spring MVC是一个基于Java的实现了MVC设计模式的请求驱动类型的轻量级Web框架，通过把模型-视图-控制器分离，将web层进行职责解耦，把复杂的web应用分成逻辑清晰的几部分，简化开发，减少出错，方便组内开发人员之间的配合。</p></blockquote><h2 id="_2、spring-mvc的优点" tabindex="-1"><a class="header-anchor" href="#_2、spring-mvc的优点" aria-hidden="true">#</a> 2、Spring MVC的优点？</h2><blockquote><ul><li>可以支持各种视图技术，而不仅仅局限于JSP</li><li>与Spring 框架继承（IOC、AOP）</li><li>清晰的角色分配：前端控制器（DispatcherServlet）,请求到处理器映射（HandleMapping）,处理器适配器（HandleAdapter）,视图解析器（ViewResolver）</li><li>支持各种请求资源的映射策略</li><li>易于扩展的</li></ul></blockquote><h2 id="_3、spring-mvc的主要组件" tabindex="-1"><a class="header-anchor" href="#_3、spring-mvc的主要组件" aria-hidden="true">#</a> 3、Spring MVC的主要组件</h2><blockquote><ul><li><p>前端控制器（DispatcherServlet）</p><p>作用：接收请求、响应结果，相当于转发器，有了DispatcherServlet就减少了其他组件之间的耦合度</p></li><li><p>处理器映射器HandlerMapping（不需要程序员开发）</p><p>作用：根据请求的URL来查找Handler</p></li><li><p>处理器适配器HandlerAdapter</p><p>在编写Handler的时候要按照HandlerAdapter要求的规则去编写，这样适配器HandlerAdapter才可以正确的去执行Handler。</p></li><li><p>处理器Handler（需要程序员开发）</p></li><li><p>视图解析器 ViewResolver（不需要程序员开发）</p><p>作用：进行视图的解析，根据视图逻辑名解析成真正的视图（view）</p></li><li><p>视图View（需要程序员开发jsp）</p><p>View是一个接口， 它的实现类支持不同的视图类型（jsp，freemarker，pdf等等）</p></li></ul></blockquote><h2 id="_4、什么是dispatcherservlet" tabindex="-1"><a class="header-anchor" href="#_4、什么是dispatcherservlet" aria-hidden="true">#</a> 4、什么是DispatcherServlet</h2><blockquote><p>Spring的MVC框架是围绕DispatcherServlet来设计的，它用来处理所有的HTTP请求和响应。</p></blockquote><h2 id="_5、什么是spring-mvc框架的控制器" tabindex="-1"><a class="header-anchor" href="#_5、什么是spring-mvc框架的控制器" aria-hidden="true">#</a> 5、什么是Spring MVC框架的控制器？</h2><blockquote><p>控制器提供一个访问应用程序的行为，此行为通常通过服务接口实现。控制器解析用户输入并将其转换为一个由视图呈现给用户的模型。Spring用一个非常抽象的方式实现了一个控制层，允许用户创建多种用途的控制器。</p></blockquote><h2 id="_6、spring-mvc的控制器是不是单例模式-如果是-有什么问题-怎么解决" tabindex="-1"><a class="header-anchor" href="#_6、spring-mvc的控制器是不是单例模式-如果是-有什么问题-怎么解决" aria-hidden="true">#</a> 6、Spring MVC的控制器是不是单例模式,如果是,有什么问题,怎么解决？</h2><blockquote><p>是单例模式,所以在多线程访问的时候有线程安全问题,不要用同步,会影响性能的,解决方案是在控制器里面不能写字段。</p></blockquote><h2 id="_7、spring-mvc的工作原理" tabindex="-1"><a class="header-anchor" href="#_7、spring-mvc的工作原理" aria-hidden="true">#</a> 7、Spring MVC的工作原理</h2><p><img src="'+t+`" alt="image-20210904211626351" loading="lazy"></p><h2 id="_8、mvc是什么-mvc设计模式的好处有哪些" tabindex="-1"><a class="header-anchor" href="#_8、mvc是什么-mvc设计模式的好处有哪些" aria-hidden="true">#</a> 8、MVC是什么？MVC设计模式的好处有哪些？</h2><blockquote><ul><li>mvc是一种设计模式（设计模式就是日常开发中编写代码的一种好的方法和经验的总结）。模型（model）-视图（view）-控制器（controller），三层架构的设计模式。用于实现前端页面的展现与后端业务数据处理的分离。</li><li>好处： <ul><li>分层设计，实现了业务系统各个组件之间的解耦，有利于业务系统的可扩展性，可维护性。</li><li>有利于系统的并行开发，提升开发效率。</li></ul></li></ul></blockquote><h2 id="_9、注解的原理是什么" tabindex="-1"><a class="header-anchor" href="#_9、注解的原理是什么" aria-hidden="true">#</a> 9、注解的原理是什么</h2><blockquote><p>注解本质是一个继承了Annotation的特殊接口，其具体实现类是Java运行时生成的动态代理类。我们通过反射获取注解时，返回的是Java运行时生成的动态代理对象。通过代理对象调用自定义注解的方法，会最终调用AnnotationInvocationHandler的invoke方法。该方法会从memberValues这个Map中索引出对应的值。而memberValues的来源是Java常量池。</p></blockquote><h2 id="_10、spring-mvc常用的注解有哪些" tabindex="-1"><a class="header-anchor" href="#_10、spring-mvc常用的注解有哪些" aria-hidden="true">#</a> 10、Spring MVC常用的注解有哪些？</h2><blockquote><p><code>@RequestMapping</code>：用于处理请求 url 映射的注解，可用于类或方法上。用于类上，则表示类中的所有响应请求的方法都是以该地址作为父路径。</p><p><code>@RequestBody</code>：注解实现接收http请求的json数据，将json转换为java对象。</p><p><code>@ResponseBody</code>：注解实现将conreoller方法返回对象转化为json对象响应给客户。</p><p><code>@Conntroller</code>：控制器的注解，表示是表现层,不能用用别的注解代替</p></blockquote><h2 id="_11、spingmvc中的控制器的注解一般用哪个-有没有别的注解可以替代" tabindex="-1"><a class="header-anchor" href="#_11、spingmvc中的控制器的注解一般用哪个-有没有别的注解可以替代" aria-hidden="true">#</a> 11、SpingMvc中的控制器的注解一般用哪个,有没有别的注解可以替代？</h2><blockquote><p>一般用@Controller注解,也可以使用@RestController,@RestController注解相当于@ResponseBody ＋ @Controller,表示是表现层,除此之外，一般不用别的注解代替。</p></blockquote><h2 id="_12、-requestmapping注解的作用" tabindex="-1"><a class="header-anchor" href="#_12、-requestmapping注解的作用" aria-hidden="true">#</a> 12、@RequestMapping注解的作用</h2><blockquote><p>RequestMapping是一个用来处理请求地址映射的注解，可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。</p><p>RequestMapping注解有六个属性</p><ul><li>value， method <ul><li>value： 指定请求的实际地址，指定的地址可以是URI Template 模式（后面将会说明）</li><li>method： 指定请求的method类型， GET、POST、PUT、DELETE等</li></ul></li><li>consumes，produces <ul><li>consumes： 指定处理请求的提交内容类型（Content-Type），例如application/json,text/html;</li><li>produces: 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回；</li></ul></li><li>params，headers <ul><li>params： 指定request中必须包含某些参数值是，才让该方法处理。</li><li>headers： 指定request中必须包含某些指定的header值，才能让该方法处理请求。</li></ul></li></ul></blockquote><h2 id="_13、-responsebody注解的作用" tabindex="-1"><a class="header-anchor" href="#_13、-responsebody注解的作用" aria-hidden="true">#</a> 13、@ResponseBody注解的作用</h2><blockquote><p><strong>作用</strong>： 该注解用于将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式后，写入到Response对象的body数据区。</p><p><strong>使用时机</strong>：返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）使用；</p></blockquote><h2 id="_14、-pathvariable和-requestparam的区别" tabindex="-1"><a class="header-anchor" href="#_14、-pathvariable和-requestparam的区别" aria-hidden="true">#</a> 14、@PathVariable和@RequestParam的区别</h2><blockquote><p>请求路径上有个id的变量值，可以通过@PathVariable来获取 @RequestMapping(value =“/page/{id}”, method = RequestMethod.GET)</p><p>@RequestParam用来获得静态的URL请求入参 spring注解时action里用到。</p></blockquote><h2 id="_15、spring-mvc与struts2区别" tabindex="-1"><a class="header-anchor" href="#_15、spring-mvc与struts2区别" aria-hidden="true">#</a> 15、Spring MVC与Struts2区别</h2><blockquote><p><strong>相同点</strong>：都是基于mvc的表现层框架，都用于web项目的开发。</p><p><strong>不同点</strong>：</p><ol><li>前端控制器不一样。 <ul><li>Spring MVC的前端控制器是servlet：DispatcherServlet。</li><li>struts2的前端控制器是filter：StrutsPreparedAndExcutorFilter。</li></ul></li><li>请求参数的接收方式不一样。 <ul><li>Spring MVC是使用方法的形参接收请求的参数，基于方法的开发，线程安全，可以设计为单例或者多例的开发，推荐使用单例模式的开发（执行效率更高），默认就是单例开发模式。</li><li>struts2是通过类的成员变量接收请求的参数，是基于类的开发，线程不安全，只能设计为多例的开发。</li></ul></li><li>Struts采用值栈存储请求和响应的数据，通过OGNL存取数据；Spring MVC通过参数解析器是将request请求内容解析，并给方法形参赋值，将数据和视图封装成ModelAndView对象，最后又将ModelAndView中的模型数据通过reques域传输到页面。Jsp视图解析器默认使用jstl。</li><li>与spring整合不一样。 <ul><li>Spring MVC是spring框架的一部分，不需要整合。在企业项目中，SpringMVC使用更多一些。</li></ul></li></ol></blockquote><h2 id="_16、spring-mvc怎么样设定重定向和转发的" tabindex="-1"><a class="header-anchor" href="#_16、spring-mvc怎么样设定重定向和转发的" aria-hidden="true">#</a> 16、Spring MVC怎么样设定重定向和转发的？</h2><blockquote><p><strong>重定向</strong>：在返回值前面加&quot;forward:&quot;，譬如&quot;forward:user.do?name=method4&quot;</p><p><strong>转发</strong>：在返回值前面加&quot;redirect:&quot;，譬如&quot;redirect:www.baidu.com&quot;</p></blockquote><h2 id="_17、spring-mvc怎么和ajax相互调用的" tabindex="-1"><a class="header-anchor" href="#_17、spring-mvc怎么和ajax相互调用的" aria-hidden="true">#</a> 17、Spring MVC怎么和AJAX相互调用的？</h2><blockquote><p>通过Jackson框架就可以把Java里面的对象直接转化成Js可以识别的Json对象。具体步骤如下：</p><ul><li>加入Jackson.jar</li><li>在配置文件中配置json的映射</li><li>在接受Ajax方法里面可以直接返回Object,List等,但方法前面要加上@ResponseBody注解。</li></ul></blockquote><h2 id="_18、如何解决post请求中文乱码问题-get的又如何处理呢" tabindex="-1"><a class="header-anchor" href="#_18、如何解决post请求中文乱码问题-get的又如何处理呢" aria-hidden="true">#</a> 18、如何解决POST请求中文乱码问题，GET的又如何处理呢？</h2><blockquote><p><strong>POST处理中文乱码</strong>：在web.xml中配置一个CharacterEncodingFilter过滤器，设置成utf-8；</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filterclass</span><span class="token punctuation">&gt;</span></span>
     org.springframework.web.filter.CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>encoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><strong>GET请求中文参数出现乱码解决方法</strong>:</p><ul><li><p>修改tomcat配置文件添加编码与工程编码一致，如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>&lt;ConnectorURIEncoding=&quot;utf-8&quot; connectionTimeout=&quot;20000&quot; port=&quot;8080&quot;protocol=&quot;HTTP/1.1&quot; redirectPort=&quot;8443&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>对参数进行重新编码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> userName <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getParamter</span><span class="token punctuation">(</span>“userName”<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>“<span class="token constant">ISO8859</span><span class="token operator">-</span><span class="token number">1</span>”<span class="token punctuation">)</span><span class="token punctuation">,</span>“utf<span class="token operator">-</span>
<span class="token number">8</span>”<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ISO8859-1是tomcat默认编码，需要将tomcat编码后的内容按utf-8编码。</p></li></ul></blockquote><h2 id="_19、spring-mvc的异常处理" tabindex="-1"><a class="header-anchor" href="#_19、spring-mvc的异常处理" aria-hidden="true">#</a> 19、Spring MVC的异常处理</h2><blockquote><p>可以将异常抛给Spring框架，由Spring框架来处理；我们只需要配置简单的异常处理器，在异常处理器中添视图页面即可。</p></blockquote><h2 id="_20、如果在拦截请求中-我想拦截get方式提交的方法-怎么配置" tabindex="-1"><a class="header-anchor" href="#_20、如果在拦截请求中-我想拦截get方式提交的方法-怎么配置" aria-hidden="true">#</a> 20、如果在拦截请求中，我想拦截get方式提交的方法,怎么配置</h2><blockquote><p>可以在@RequestMapping注解里面加上method=RequestMethod.GET。</p></blockquote><h2 id="_21、怎样在方法里面得到request-或者session" tabindex="-1"><a class="header-anchor" href="#_21、怎样在方法里面得到request-或者session" aria-hidden="true">#</a> 21、怎样在方法里面得到Request,或者Session？</h2><blockquote><p>直接在方法的形参中声明request,Spring MVC就自动把request对象传入。</p></blockquote><h2 id="_22、如果想在拦截的方法里面得到从前台传入的参数-怎么得到" tabindex="-1"><a class="header-anchor" href="#_22、如果想在拦截的方法里面得到从前台传入的参数-怎么得到" aria-hidden="true">#</a> 22、如果想在拦截的方法里面得到从前台传入的参数,怎么得到？</h2><blockquote><p>直接在形参里面声明这个参数就可以,但必须名字和传过来的参数一样。</p></blockquote><h2 id="_23、如果前台有很多个参数传入-并且这些参数都是一个对象的-那么怎么样快速得到这个对象" tabindex="-1"><a class="header-anchor" href="#_23、如果前台有很多个参数传入-并且这些参数都是一个对象的-那么怎么样快速得到这个对象" aria-hidden="true">#</a> 23、如果前台有很多个参数传入,并且这些参数都是一个对象的,那么怎么样快速得到这个对象？</h2><blockquote><p>直接在方法中声明这个对象,Spring MVC就自动会把属性赋值到这个对象里面。</p></blockquote><h2 id="_24、spring-mvc中函数的返回值是什么" tabindex="-1"><a class="header-anchor" href="#_24、spring-mvc中函数的返回值是什么" aria-hidden="true">#</a> 24、Spring MVC中函数的返回值是什么？</h2><blockquote><p>返回值可以有很多类型,有String, ModelAndView。ModelAndView类把视图和数据都合并的一起的，但一般用String比较好。</p></blockquote><h2 id="_25、spring-mvc用什么对象从后台向前台传递数据的" tabindex="-1"><a class="header-anchor" href="#_25、spring-mvc用什么对象从后台向前台传递数据的" aria-hidden="true">#</a> 25、Spring MVC用什么对象从后台向前台传递数据的？</h2><blockquote><p>通过ModelMap对象,可以在这个对象里面调用put方法,把对象加到里面,前台就可以通过el表达式拿到。</p></blockquote><h2 id="_26、怎么样把modelmap里面的数据放入session里面" tabindex="-1"><a class="header-anchor" href="#_26、怎么样把modelmap里面的数据放入session里面" aria-hidden="true">#</a> 26、怎么样把ModelMap里面的数据放入Session里面？</h2><blockquote><p>可以在类上面加上@SessionAttributes注解,里面包含的字符串就是要放入session里面的key。</p></blockquote><h2 id="_27、spring-mvc里面拦截器是怎么写的" tabindex="-1"><a class="header-anchor" href="#_27、spring-mvc里面拦截器是怎么写的" aria-hidden="true">#</a> 27、Spring MVC里面拦截器是怎么写的</h2><blockquote><p>有两种写法,一种是实现HandlerInterceptor接口，另外一种是继承适配器类，接着在接口方法当中，实现处理逻辑；然后在Spring MVC的配置文件中配置拦截器即可：</p></blockquote>`,55),o=[i];function l(r,c){return n(),e("div",null,o)}const h=a(p,[["render",l],["__file","Spring MVC.html.vue"]]);export{h as default};
