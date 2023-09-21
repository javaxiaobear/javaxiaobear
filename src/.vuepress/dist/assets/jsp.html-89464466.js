import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-aeb4ead9.js";const e={},p=t(`<blockquote><p>jsp 的全换是java server pages。Java 的服务器页面。 jsp 的主要作用是代替Servlet 程序回传html 页面的数据。 因为Servlet 程序回传html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。</p></blockquote><p>Servlet 回传html 页面数据的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JspDemo</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;!DOCTYPE html&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;html lang=\\&quot;en\\&quot;&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;head&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;meta charset=\\&quot;UTF-8\\&quot;&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;title&gt;Title&lt;/title&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;/head&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;body&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; 这是html 页面数据\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;/body&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/html&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
这是HTML页面数据
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、jsp的本质" tabindex="-1"><a class="header-anchor" href="#_1、jsp的本质" aria-hidden="true">#</a> 1、jsp的本质</h3><blockquote><p>jsp 页面本质上是一个Servlet 程序。</p></blockquote><h3 id="_2、jsp-语法" tabindex="-1"><a class="header-anchor" href="#_2、jsp-语法" aria-hidden="true">#</a> 2、jsp 语法</h3><h4 id="_1、jsp-头部的page-指令" tabindex="-1"><a class="header-anchor" href="#_1、jsp-头部的page-指令" aria-hidden="true">#</a> 1、jsp 头部的page 指令</h4><blockquote><p>jsp 的page 指令可以修改jsp 页面中一些重要的属性，或者行为。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot;
         import=&quot;java.applet.Applet&quot;
         autoFlush=&quot;true&quot;
         buffer=&quot;8kb&quot;
         errorPage=&quot;index.jsp&quot;
         isErrorPage=&quot;true&quot;
         session=&quot;true&quot;
         extends=&quot;java.io&quot;
         language=&quot;java&quot; %&gt;
&lt;%--
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
    --%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、jsp常用脚本" tabindex="-1"><a class="header-anchor" href="#_2、jsp常用脚本" aria-hidden="true">#</a> 2、jsp常用脚本</h4><ul><li><p><strong>声明脚本</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%--声明脚本的格式是：--%&gt; &lt;%! 声明java 代码%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>作用：可以给jsp 翻译出来的java 类定义属性和方法甚至是静态代码块。内部类等。</mark></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
&lt;%--1、声明类属性--%&gt;
&lt;%!
    private Integer id;
    private String name;
    private static Map<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>String,Object</span><span class="token punctuation">&gt;</span></span> map;
%&gt;
&lt;%--2、声明static 静态代码块--%&gt;
&lt;%!
    static {
        map = new HashMap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>String,Object</span><span class="token punctuation">&gt;</span></span>();
        map.put(&quot;key1&quot;,&quot;value1&quot;);
        map.put(&quot;key2&quot;,&quot;value2&quot;);
        map.put(&quot;key3&quot;,&quot;value3&quot;);
    }
%&gt;
&lt;%--3、声明类方法--%&gt;
&lt;%!
    public int sb(){
        return 12;
    }
%&gt;
&lt;%--4、声明内部类--%&gt;
&lt;%!
    public static class Yhx{
        private Integer id = 10;
        private String abc = &quot;abc&quot;;
    }
%&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>表达式脚本（常用）</strong></p></li></ul><blockquote><p>表达式脚本的格式是：&lt;%=表达式%&gt; 表达式脚本的作用是：jsp 页面上输出数据。</p></blockquote><ul><li><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  &lt;%--1. 输出整型--%&gt;
  &lt;%=12%&gt;
  &lt;%--2. 输出浮点型--%&gt;
  &lt;%=12.12%&gt;
  &lt;%--3. 输出字符串--%&gt;
  &lt;%=&quot;你是最棒的！&quot;%&gt;
  &lt;%--4. 输出对象--%&gt;
  &lt;%=request.getParameter(&quot;username&quot;)%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>表达式脚本的特点： <ul><li>所有的表达式脚本都会被翻译到<code>jspService() </code>方法中</li><li>表达式脚本都会被翻译成为<code>out.print()</code>输出到页面上</li><li>由于表达式脚本翻译的内容都在<code>jspService() </code>方法中,所以<code>_jspService()</code>方法中的对象都可以直接使用</li><li>表达式脚本中的表达式不能以分号结束*。</li></ul></li></ul></li><li><p><strong>代码脚本</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;% java 语句 %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>代码脚本的作用是：可以在jsp 页面中，编写我们自己需要的功能（写的是java 语句）。</mark></p></li><li><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  &lt;%--代码脚本----if 语句--%&gt;
  &lt;%
      int i = 18;
      if (i == 10){
          System.out.println(&quot;你很帅！！！&quot;);
      }else{
          System.out.println(&quot;你是真的帅！！！&quot;);
      }
  %&gt;
  &lt;%--2. 代码脚本----for 循环语句--%&gt;
  &lt;%
      for (int j = 0; j &lt; 100; j++) {
          System.out.println(j);
      }
  %&gt;
  &lt;%--3. 翻译后java 文件中_jspService 方法内的代码都可以写--%&gt;
  &lt;%
      String username = request.getParameter(&quot;username&quot;);
      System.out.println(username);
  %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>代码脚本的特点是： <ul><li>代码脚本翻译之后都在<code>_jspService </code>方法中</li><li>代码脚本由于翻译到<code>_jspService()</code>方法中，所以在<code>_jspService()</code>方法中的现有对象都可以直接使用。</li><li>还可以由多个代码脚本块组合完成一个完整的java 语句。</li><li>代码脚本还可以和表达式脚本一起组合使用，在jsp 页面上输出数据</li></ul></li></ul></li></ul><h4 id="_3、jsp-中的三种注释" tabindex="-1"><a class="header-anchor" href="#_3、jsp-中的三种注释" aria-hidden="true">#</a> 3、jsp 中的三种注释</h4><ul><li><p>html 注释</p><blockquote><!-- 这是html 注释--><p>html 注释会被翻译到java 源代码中。在_jspService 方法里，以out.writer 输出到客户端。</p></blockquote></li><li><p>java 注释</p><blockquote><p>&lt;% // 单行java 注释 /* 多行java 注释*/ %&gt; java 注释会被翻译到java 源代码中。</p></blockquote></li><li><p>jsp 注释</p><blockquote><p>&lt;%-- 这是jsp 注释--%&gt; jsp 注释可以注掉，jsp 页面中所有代码。</p></blockquote></li></ul><h4 id="_4、jsp-九大内置对象" tabindex="-1"><a class="header-anchor" href="#_4、jsp-九大内置对象" aria-hidden="true">#</a> 4、jsp 九大内置对象</h4><p><mark>jsp 中的内置对象，是指Tomcat 在翻译jsp 页面成为Servlet 源代码后，内部提供的九大对象，叫内置对象。</mark></p><p><img src="https://raw.githubusercontent.com/yhx1001/PicGo/img/image-20200423145129906.png" alt="image-20200423145129906" loading="lazy"></p><h4 id="_5、jsp的四大域对象" tabindex="-1"><a class="header-anchor" href="#_5、jsp的四大域对象" aria-hidden="true">#</a> 5、jsp的四大域对象</h4><blockquote><p>域对象是可以像Map 一样存取数据的对象</p></blockquote><ul><li><strong>pageContext (PageContextImpl 类)</strong> 当前jsp 页面范围内有效</li><li><strong>request (HttpServletRequest 类)</strong> 一次请求内有效</li><li><strong>session (HttpSession 类)</strong> 一个会话范围内有效（打开浏览器访问服务器，直到关闭浏览器）</li><li><strong>application (ServletContext 类)</strong> 整个web 工程范围内都有效（只要web 工程不停止，数据都在）</li></ul><p>优先顺序：<mark><strong>pageContext ----&gt; request ----&gt; session ----&gt; application</strong></mark></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%----------------------------------------socre.jsp--------------------------------------%&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>score.jsp页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
&lt;%
    pageContext.setAttribute(&quot;key&quot;,&quot;pageContext&quot;);
    request.setAttribute(&quot;key&quot;,&quot;request&quot;);
    session.setAttribute(&quot;key&quot;,&quot;session&quot;);
    application.setAttribute(&quot;key&quot;,&quot;application&quot;);
%&gt;
pageContext域是否有值：&lt;%=pageContext.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
request域是否有值：&lt;%=request.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
session域是否有值：&lt;%=session.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
application域是否有值：&lt;%=application.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
&lt;%
    request.getRequestDispatcher(&quot;/score2.jsp&quot;).forward(request,response);
%&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
&lt;%--------------------------------------socre2.jsp--------------------------------------%&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>score2.jsp页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
pageContext域是否有值：&lt;%=pageContext.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
request域是否有值：&lt;%=request.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
session域是否有值：&lt;%=session.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
application域是否有值：&lt;%=application.getAttribute(&quot;key&quot;) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
&lt;%
    request.getRequestDispatcher(&quot;/score2.jsp&quot;).forward(request,response);
%&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、out-输出和response-getwriter-输出" tabindex="-1"><a class="header-anchor" href="#_6、out-输出和response-getwriter-输出" aria-hidden="true">#</a> 6、out 输出和response.getWriter 输出</h4><p>response 中表示响应，我们经常用于设置返回给客户端的内容（输出）。out 也是给用户做输出使用的。</p><p>out.write() 输出字符串没有问题</p><p>out.print() 输出任意数据都没有问题（都转换成为字符串后调用的write 输出）</p><p><mark><strong>在jsp 页面中，可以统一使用out.print()来进行输出</strong></mark></p><h3 id="_3、jsp-的常用标签" tabindex="-1"><a class="header-anchor" href="#_3、jsp-的常用标签" aria-hidden="true">#</a> 3、jsp 的常用标签</h3><h4 id="_1、jsp-静态包含" tabindex="-1"><a class="header-anchor" href="#_1、jsp-静态包含" aria-hidden="true">#</a> 1、jsp 静态包含</h4><blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%--
 &lt;%@ include file=&quot;&quot;%&gt; 就是静态包含
file 属性指定你要包含的jsp 页面的路径
地址中第一个斜杠/ 表示为http://ip:port/工程路径/ 映射到代码的web 目录
静态包含的特点：
1、静态包含不会翻译被包含的jsp 页面。
2、静态包含其实是把被包含的jsp 页面的代码拷贝到包含的位置执行输出。
--%&gt;
&lt;%@ include file=&quot;/include/footer.jsp&quot;%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="_2、jsp动态包含" tabindex="-1"><a class="header-anchor" href="#_2、jsp动态包含" aria-hidden="true">#</a> 2、jsp动态包含</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%--
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jsp:</span>include</span> <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jsp:</span>include</span><span class="token punctuation">&gt;</span></span> 这是动态包含
        page 属性是指定你要包含的jsp 页面的路径
        动态包含也可以像静态包含一样。把被包含的内容执行输出到包含位置
        动态包含的特点：
        1、动态包含会把包含的jsp 页面也翻译成为java 代码
        2、动态包含底层代码使用如下代码去调用被包含的jsp 页面执行输出。
        JspRuntimeLibrary.include(request, response, &quot;/include/footer.jsp&quot;, out, false);
		3、动态包含，还可以传递参数
    --%&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jsp:</span>include</span> <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/include/footer.jsp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jsp:</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bbj<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jsp:</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jsp:</span>include</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、jsp-标签-转发" tabindex="-1"><a class="header-anchor" href="#_3、jsp-标签-转发" aria-hidden="true">#</a> 3、jsp 标签-转发</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%--
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jsp:</span>forward</span> <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jsp:</span>forward</span><span class="token punctuation">&gt;</span></span> 是请求转发标签，它的功能就是请求转发
        page 属性设置请求转发的路径
        --%&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jsp:</span>forward</span> <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/scope2.jsp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jsp:</span>forward</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、jsp练习" tabindex="-1"><a class="header-anchor" href="#_4、jsp练习" aria-hidden="true">#</a> 4、jsp练习</h4><ul><li><p>9*9乘法表</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>输出99乘法表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>乘法表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            &lt;%
            for (int i = 0; i &lt;= 9; i++) {  %&gt;
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                &lt;%  for (int j = 1; j &lt;= i; j++) {
    %&gt;
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>&lt;%=j + &quot;x&quot; + i + &quot;=&quot; +(i*j) %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                &lt;%
                }
                %&gt;
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
            &lt;% }
            %&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>jsp 输出一个表格，里面有10 个学生信息。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">table</span><span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px blue solid<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">td,th</span><span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px blue solid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
&lt;%--jsp 输出一个表格，里面有10 个学生信息。--%&gt;
&lt;%
    List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Student</span><span class="token punctuation">&gt;</span></span> studentList = new ArrayList<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Student</span><span class="token punctuation">&gt;</span></span>();
    for (int i = 0; i &lt; 10; i++) {
        int t = i + 1;
        studentList.add(new Student(&quot;name&quot;+t,t,18+t,&quot;phone&quot;+t));
    }
%&gt;
&lt;% for (Student student : studentList) { %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>编号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>电话<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>&lt;%=student.getId()%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>&lt;%=student.getName()%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>&lt;%=student.getAge()%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>&lt;%=student.getPhone()%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>删除、修改<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
   &lt;% } %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,38),l=[p];function i(c,o){return s(),a("div",null,l)}const r=n(e,[["render",i],["__file","jsp.html.vue"]]);export{r as default};
