import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as o}from"./app-aeb4ead9.js";const t={},e=o(`<h2 id="_1、什么是spring-boot" tabindex="-1"><a class="header-anchor" href="#_1、什么是spring-boot" aria-hidden="true">#</a> 1、什么是Spring Boot？</h2><blockquote><ul><li><p>它使用**“习惯优于配置”**（项目中存在大量的配置，此外还内置了一个习惯性的配置，让你无需手动配置）的理念让你的项目快速运行起来。</p></li><li><p>Spring Boot整合了所有框架</p></li><li><p>简化Spring应用开发的一个框架</p></li></ul></blockquote><h2 id="_2、spring-boot有哪些优点" tabindex="-1"><a class="header-anchor" href="#_2、spring-boot有哪些优点" aria-hidden="true">#</a> 2、Spring Boot有哪些优点？</h2><blockquote><ul><li>创建独立的Spring应用程序</li><li>直接嵌入Tomcat，Jetty或Undertow（无需部署WAR文件）</li><li>提供“初始”的POM文件内容，以简化Maven配置</li><li>尽可能自动配置Spring</li><li>提供生产就绪的功能，如指标，健康检查和外部化配置</li><li>绝对无代码生成，也不需要XML配置</li></ul></blockquote><h2 id="_3、spring-boot核心注解是哪个-由哪几个组成呢" tabindex="-1"><a class="header-anchor" href="#_3、spring-boot核心注解是哪个-由哪几个组成呢" aria-hidden="true">#</a> 3、Spring Boot核心注解是哪个，由哪几个组成呢？</h2><blockquote><p>启动类注解<code>@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan</code></p><ul><li>@Configuration：标明该类使用Spring基于Java的配置</li><li>@EnableAutoConfiguration：启动自动配置功能。</li><li>@ComponentScan：启用组件扫描，这样你写的Web控制器类和其他组件才能被自动发现并注册为Spring应用程序上下文里的Bean。</li></ul></blockquote><h2 id="_4、spring-boot配置文件加载位置" tabindex="-1"><a class="header-anchor" href="#_4、spring-boot配置文件加载位置" aria-hidden="true">#</a> 4、Spring Boot配置文件加载位置</h2><blockquote><p>springboot 启动会扫描以下位置的application.properties或者application.yml文件作为Spring boot的默认配置文件</p><ul><li><p>–file:./config/</p></li><li><p>–file:./</p></li><li><p>–classpath:/config/</p></li><li><p>–classpath:/<strong>（默认）</strong></p></li></ul><p>优先级**<mark>由高到低</mark><strong>，高优先级的配置会</strong>覆盖**低优先级的配置；</p><p>SpringBoot会从这四个位置全部加载主配置文件；<strong><mark>互补配置</mark></strong>；</p></blockquote><h2 id="_5、spring-boot外部配置加载顺序" tabindex="-1"><a class="header-anchor" href="#_5、spring-boot外部配置加载顺序" aria-hidden="true">#</a> 5、Spring Boot外部配置加载顺序</h2><blockquote><p><mark>SpringBoot也可以从以下位置加载配置； 优先级从高到低；高优先级的配置覆盖低优先级的配置，所有的配置会形成互补配置</mark></p><ol><li>命令行参数 ：所有的配置都可以在命令行上进行指定 java -jar spring-boot-02-config-02-0.0.1-SNAPSHOT.jar --server.port=8087 --server.context-path=/abc 多个配置用空格分开； --配置项=值</li><li>来自java:comp/env的JNDI属性</li><li>Java系统属性（System.getProperties()）</li><li>操作系统环境变量</li><li>RandomValuePropertySource配置的random.*属性值；由jar包外向jar包内进行寻找；优先加载带profile</li><li>jar包外部的application-{profile}.properties或application.yml(带spring.profile)配置文件</li><li>jar包内部的application-{profile}.properties或application.yml(带spring.profile)配置文件，再来加载不带profile</li><li>jar包外部的application.properties或application.yml(不带spring.profile)配置文件</li><li>jar包内部的application.properties或application.yml(不带spring.profile)配置文件</li><li>@Configuration注解类上的@PropertySource</li><li>通过<code>SpringApplication.setDefaultProperties</code>指定的默认属性；所有支持的配置加载来源；参考官方文档</li></ol></blockquote><h2 id="_6、springboot事务的使用" tabindex="-1"><a class="header-anchor" href="#_6、springboot事务的使用" aria-hidden="true">#</a> 6、SpringBoot事务的使用</h2><blockquote><p>SpringBoot的事务很简单，首先使用注解EnableTransactionManagement开启事务之后，然后在Service方法上添加注解Transactional便可。</p></blockquote><h2 id="_7、async异步调用方法" tabindex="-1"><a class="header-anchor" href="#_7、async异步调用方法" aria-hidden="true">#</a> 7、Async异步调用方法</h2><blockquote><p>在<code>SpringBoot</code>中使用异步调用是很简单的，只需要在方法上使用<code>@Async</code>注解即可实现方法的异步调用。 注意：需要在启动类加入<code>@EnableAsync</code>使异步调用<code>@Async</code>注解生效。 注：异步方法不能跟调用方法在同一个类中，否则会导致异步失效</p></blockquote><h2 id="_8、-spring-boot-中如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#_8、-spring-boot-中如何解决跨域问题" aria-hidden="true">#</a> 8、 Spring Boot 中如何解决跨域问题</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResourcesConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 跨域配置
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CorsFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">UrlBasedCorsConfigurationSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CorsConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">setAllowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置访问源地址</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedOrigin</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置访问源请求头</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedHeader</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置访问源请求方法</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedMethod</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 对接口配置跨域设置</span>
        source<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9、spring-boot-中的监视器是什么" tabindex="-1"><a class="header-anchor" href="#_9、spring-boot-中的监视器是什么" aria-hidden="true">#</a> 9、Spring Boot 中的监视器是什么？</h2><blockquote><p>Spring boot actuator 是 spring 启动框架中的重要功能之一。Spring boot 监视器可帮助您访问生产环境中正在运行的应用程序的当前状态。有几个指标必须在生产环境中进行检查和监控。即使一些外部应用程序可能正在使用这些服务来向相关人员触发警报消息。监视器模块公开了一组可直接作为 HTTP URL 访问的 REST 端点来检查状态。</p></blockquote><h2 id="_10、如何在-spring-boot-中禁用-actuator-端点安全性" tabindex="-1"><a class="header-anchor" href="#_10、如何在-spring-boot-中禁用-actuator-端点安全性" aria-hidden="true">#</a> 10、如何在 Spring Boot 中禁用 Actuator 端点安全性？</h2><blockquote><p>默认情况下，所有敏感的 HTTP 端点都是安全的，只有具有 ACTUATOR 角色的用户才能访问它们。安全性是使用标准的 HttpServletRequest.isUserInRole 方法实施的。</p><p>我们可以使用<code>management.security.enabled = false</code>来禁用安全性。只有在执行机构端点在防火墙后访问时，才建议禁用安全性。</p></blockquote><h2 id="_11、如何实现-spring-boot-应用程序的安全性" tabindex="-1"><a class="header-anchor" href="#_11、如何实现-spring-boot-应用程序的安全性" aria-hidden="true">#</a> 11、如何实现 Spring Boot 应用程序的安全性？</h2><blockquote><p>为了实现 Spring Boot 的安全性，我们使用 spring-boot-starter-security 依赖项，并且必须添加安全配置。它只需要很少的代码。配置类将必须扩展 WebSecurityConfigurerAdapter 并覆盖其方法。</p></blockquote><h2 id="_12、什么是-spring-profiles" tabindex="-1"><a class="header-anchor" href="#_12、什么是-spring-profiles" aria-hidden="true">#</a> 12、什么是 Spring Profiles？</h2><blockquote><p>Spring Profiles 允许用户根据配置文件（dev，test，prod 等）来注册 bean。因此，当应用程序在开发中运行时，只有某些 bean 可以加载，而在 PRODUCTION 中，某些其他 bean 可以加载。假设我们的要求是 Swagger 文档仅适用于 QA 环境，并且禁用所有其他文档。这可以使用配置文件来完成。Spring Boot 使得使用配置文件非常简单。</p></blockquote><h2 id="_13、如何使用-spring-boot-实现异常处理" tabindex="-1"><a class="header-anchor" href="#_13、如何使用-spring-boot-实现异常处理" aria-hidden="true">#</a> 13、如何使用 Spring Boot 实现异常处理？</h2><blockquote><p>Spring 提供了一种使用 ControllerAdvice 处理异常的非常有用的方法。 我们通过实现一个<code>@ControlerAdvice</code> 类，来处理控制器类抛出的所有异常。</p></blockquote><h2 id="_14、controlleradvice-和-restcontrolleradvice-有什么区别" tabindex="-1"><a class="header-anchor" href="#_14、controlleradvice-和-restcontrolleradvice-有什么区别" aria-hidden="true">#</a> 14、ControllerAdvice 和 RestControllerAdvice 有什么区别</h2><blockquote><p>区别就好比：Controller和RestController一样</p><p>RestControllerAdvice = RequestMapping + ControllerAdvice</p></blockquote><h2 id="_15、-如何在-spring-boot-启动的时候运行一些特定的代码" tabindex="-1"><a class="header-anchor" href="#_15、-如何在-spring-boot-启动的时候运行一些特定的代码" aria-hidden="true">#</a> 15、 如何在 Spring Boot 启动的时候运行一些特定的代码？</h2><blockquote><p>可以实现接口 ApplicationRunner 或者 CommandLineRunner，这两个接口实现方式一样，它们都只提供了一个 run 方法</p></blockquote><h2 id="_16、spring-boot怎么禁用循环依赖" tabindex="-1"><a class="header-anchor" href="#_16、spring-boot怎么禁用循环依赖" aria-hidden="true">#</a> 16、Spring Boot怎么禁用循环依赖？</h2><blockquote><ol><li><p>直接允许循环依赖，在Spring Boot配置文件中配置，默认为false</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">main</span><span class="token punctuation">:</span>
    <span class="token key atrule">allow-circular-references</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>使用方法的返回值获取实例对象，替换通过成员变量注入实例对象</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">IAService</span> <span class="token function">getStaffService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">IBService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></blockquote><h2 id="_17、spring-boot自动配置的原理" tabindex="-1"><a class="header-anchor" href="#_17、spring-boot自动配置的原理" aria-hidden="true">#</a> 17、Spring Boot自动配置的原理</h2><blockquote><h3 id="springbootapplication-configuration-enableautoconfiguration-componentscan" tabindex="-1"><a class="header-anchor" href="#springbootapplication-configuration-enableautoconfiguration-componentscan" aria-hidden="true">#</a> @SpringBootApplication=@Configuration+@EnableAutoConfiguration+@ComponentScan</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 注解的适用范围，其中TYPE用于描述类、接口（包括包注解类型）或enum声明</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span><span class="token comment">// 注解的生命周期，保留到class文件中（三个生命周期）</span>
<span class="token annotation punctuation">@Documented</span>                       <span class="token comment">// 表明这个注解应该被javadoc记录</span>
<span class="token annotation punctuation">@Inherited</span>                        <span class="token comment">// 子类可以继承该注解</span>
<span class="token annotation punctuation">@SpringBootConfiguration</span>          <span class="token comment">// 继承了Configuration，表示当前是注解类</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>          <span class="token comment">// 开启springboot的注解功能，springboot的四大神器之一，其借助@import的帮助</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span> <span class="token comment">// 扫描路径设置</span>
    excludeFilters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>
    type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">CUSTOM</span><span class="token punctuation">,</span>
    classes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">TypeExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>
    type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">CUSTOM</span><span class="token punctuation">,</span>
    classes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AutoConfigurationExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SpringBootApplication</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> @Configuration</h2><p>标明该类使用Spring基于Java的配置。虽然本书不会写太多配置，但我们会更倾向于使用基于Java而不是XML的配置。</p><h2 id="enableautoconfiguration" tabindex="-1"><a class="header-anchor" href="#enableautoconfiguration" aria-hidden="true">#</a> @EnableAutoConfiguration</h2><p>Spring Boot 的@EnableAutoConfiguration ： 这个不起眼的小注解也可以称为@Abracadabra(咒语)，就是这一</p><p>行配置开启了Spring Boot自动配置。<strong>简单概括一下就是，借助@Import的支持，将所有符合自动配置条件的bean定义加载到IoC容器。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@AutoConfigurationPackage</span>      <span class="token comment">//自动配置包</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">AutoConfigurationImportSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">//导入自动配置的组件</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAutoConfiguration</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token constant">ENABLED_OVERRIDE_PROPERTY</span> <span class="token operator">=</span> <span class="token string">&quot;spring.boot.enableautoconfiguration&quot;</span><span class="token punctuation">;</span>

    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">exclude</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">excludeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="componentscan" tabindex="-1"><a class="header-anchor" href="#componentscan" aria-hidden="true">#</a> @ComponentScan</h2><p>Spring的@ComponentScan：启用组件扫描，这样你写的Web控制器类和其他组件才能被自动发现并注册为Spring应用程序上下文里的Bean。本章稍后会写一个简单的Spring MVC控制器，使用@Controller进行注解，这样组件扫描才能找到它。</p><h2 id="自动配置幕后英雄-springfactoriesloader" tabindex="-1"><a class="header-anchor" href="#自动配置幕后英雄-springfactoriesloader" aria-hidden="true">#</a> 自动配置幕后英雄：SpringFactoriesLoader</h2><p>借助于Spring框架原有的一个工具类：<strong>SpringFactoriesLoader</strong>的支持，@EnableAutoConfiguration可以智能的自动配置功效才得以大功告成！</p><p>SpringFactoriesLoader属于Spring框架私有的一种扩展方案，其主要功能就是从指定的配置文件META-INF/spring.factories加载配置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SpringFactoriesLoader</span> <span class="token punctuation">{</span>
<span class="token comment">//...</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadFactories</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> factoryClass<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span>
classLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadFactoryNames</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> factoryClass<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span>
classLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="_18、spring-boot排除某些自动配置" tabindex="-1"><a class="header-anchor" href="#_18、spring-boot排除某些自动配置" aria-hidden="true">#</a> 18、Spring Boot排除某些自动配置？</h2><blockquote><p>在某些情况下，一些自动配置可能是我们不需要的，需要排除，最常见的就是<code>DataSourceAutoConfiguration.class</code></p><ul><li><p>使用 <code>@SpringBootApplication</code> 注解的时候，使用 exclude 属性进行排除指定的类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">MailSenderAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单独使用 <code>@EnableAutoConfiguration</code> 注解的时候</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>@<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">MailSenderAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 Spring Cloud 和 <code>@SpringCloudApplication</code> 注解的时候</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>@<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">MailSenderAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringCloudApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在配置文件中排除</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 写法一</span>
<span class="token key attr-name">spring.autoconfigure.exclude</span><span class="token punctuation">=</span><span class="token value attr-value">org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration</span>
<span class="token comment"># 写法二</span>
<span class="token key attr-name">spring.autoconfigure.exclude[0]</span><span class="token punctuation">=</span><span class="token value attr-value">org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration</span>
<span class="token key attr-name">spring.autoconfigure.exclude[1]</span><span class="token punctuation">=</span><span class="token value attr-value">org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>     
  <span class="token key atrule">autoconfigure</span><span class="token punctuation">:</span>
    <span class="token key atrule">exclude</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
      <span class="token punctuation">-</span> org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote>`,36),p=[e];function i(c,l){return a(),s("div",null,p)}const d=n(t,[["render",i],["__file","Spring Boot.html.vue"]]);export{d as default};
