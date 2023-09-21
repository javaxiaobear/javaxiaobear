import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-aeb4ead9.js";const t="/assets/image-20210705145015532-c5b5c437.png",p="/assets/image-20210705145211430-e598a3d2.png",o="/assets/image-20210709143812049-8b0bc9dc.png",c="/assets/image-20210721100715265-6de1078f.png",l={},i=e(`<h2 id="_1、面向对象都有哪些特性以及你对这些特性的理解" tabindex="-1"><a class="header-anchor" href="#_1、面向对象都有哪些特性以及你对这些特性的理解" aria-hidden="true">#</a> 1、面向对象都有哪些特性以及你对这些特性的理解？</h2><blockquote><ol><li><strong>继承</strong>：继承是从已有类得到继承信息创建新类的过程。提供继承信息的类被称为父类（超类、基类）；得到继承信息的 类被称为子类（派生类）。继承让变化中的软件系统有了一定的延续性，同时继承也是封装程序中可变因素的重要手段。</li><li><strong>封装</strong>：通常认为封装是把数据和操作数据的方法绑定起来，对数据的访问只能通过已定义的接口。面向对象的本质就是将现实世界描绘成一系列完全自治、封闭的对象。我们在类中编写的方法就是对实现细节的一种封装；我们编写一个类就是对数据和数据操作的封装。可以说，封装就是隐藏一切可隐藏的东西，只向外界提供最简单的编程接口。</li><li><strong>多态性</strong>：多态性是指允许不同子类型的对象对同一消息作出不同的响应。简单的说就是用同样的对象引用调用同样的方法但是做了不同的事情。多态性分为编译时的多态性和运行时的多态性。如果将对象的方法视为对象向外界提供的服务，那么运行时的多态性可以解释为：当 A 系统访问 B 系统提供的服务时， B 系统有多种提供服务的方式，但一切对 A 系统来说都是透明的。方法重载（ overload ）实现的是编译时的多态性（也称为前绑定），而方法重写override ）实现的是运行时的多态性（也称为后绑定）。运行时的多态是面向对象最精髓的东西，要实现 多态需要做两件事： 1. 方法重写（子类继承父类并重写父类中已有的或抽象的方法）； 2. 对象造型（用父类型引用引用子类型对象，这样同样的引用调用同样的方法就会根据子类对象的不同而表现出不同的行为）。</li><li><strong>抽象</strong>：抽象是将一类对象的共同特征总结出来构造类的过程，包括数据抽象和行为抽象两方面。抽象只关注对象有哪些属性和行为，并不关注这些行为的细节是什么。</li></ol></blockquote><h2 id="_2、访问-权限-修饰符-public-、-private-、-protected-以及不写-默认-时的区别" tabindex="-1"><a class="header-anchor" href="#_2、访问-权限-修饰符-public-、-private-、-protected-以及不写-默认-时的区别" aria-hidden="true">#</a> 2、访问 权限 修饰符 public 、 private 、 protected， 以及不写（默认）时的区别</h2><table><thead><tr><th>修饰符</th><th>当前类</th><th>同包</th><th>子类</th><th>其他包</th></tr></thead><tbody><tr><td>public</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>protected</td><td>√</td><td>√</td><td>√</td><td>×</td></tr><tr><td>default</td><td>√</td><td>√</td><td>×</td><td>×</td></tr><tr><td>private</td><td>√</td><td>×</td><td>×</td><td>×</td></tr></tbody></table><h2 id="_3、如何理解-clone-对象" tabindex="-1"><a class="header-anchor" href="#_3、如何理解-clone-对象" aria-hidden="true">#</a> 3、如何理解 clone 对象</h2><h3 id="_1、为什么要用-clone" tabindex="-1"><a class="header-anchor" href="#_1、为什么要用-clone" aria-hidden="true">#</a> 1、为什么要用 clone</h3><blockquote><p>在实际编程过程中，我们常常要遇到这种情况：有一个对象A ，在某一时刻 A 中已经包含了一些有效值，此时可能会需要一个和 A 完全相同新对象 B ，并且此后对 B 任何改动都不会影响到 A 中的值，也就是说， A 与 B 是两个独立的对象，但 B 的初始值是由 A 对象确定的。在 Java 语言中，用简单的赋值语句是不能满足这种需求的。要满足这种需求虽然有很多途径，但实现 clone （）方法是其中最简单，也是最高效的手段。</p></blockquote><h3 id="_2、new一个对象的过程和-clone一个对象的过程区别" tabindex="-1"><a class="header-anchor" href="#_2、new一个对象的过程和-clone一个对象的过程区别" aria-hidden="true">#</a> 2、new一个对象的过程和 clone一个对象的过程区别？</h3><blockquote><p>new操作符的本意是分配内存。程序执行到 new 操作符时，首先去看 new 操作符后面的类型，因为知道了类型，才能知道要分配多大的内存空间。分配完内存之后，再调用构造函数，填充对象的各个域，这一步叫做对象的初始化，构造方法返回后，一个对象创建完毕，可以把他的引用（地址）发布到外部，在外部就可以使用这个引用操纵这个对象。</p><p>clone在第一步是和 new 相似的，都是分配内存，调用 clone 方法时，分配的内存和原对象（即调用 clone 方法的对象）相同，然后再使用原对象中对应的各个域，填充新对象的域，填充完成之后， clone 方法返回，一个新的相同的对象被创建，同样可以把这个新对象的引用发布到外部。</p></blockquote><h3 id="_3、clone对象的使用" tabindex="-1"><a class="header-anchor" href="#_3、clone对象的使用" aria-hidden="true">#</a> 3、clone对象的使用？</h3><h4 id="_1、复制对象和复制引用的区别" tabindex="-1"><a class="header-anchor" href="#_1、复制对象和复制引用的区别" aria-hidden="true">#</a> 1、复制对象和复制引用的区别</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token string">&quot;xiaobear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> p1 <span class="token operator">=</span> p<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当Person p1 = p; 执行之后， 是创建了一个新的对象吗？ 首先看打印结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person@2f9ee1ac
Person@2f9ee1ac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，打印的地址值是相同的，既然地址都是相同的，那么肯定是同一个对象。p 和 p1 只是引用而已，他们都指向了一个相同的对象 Person(23, zhang ””) 。 可以把这种现象叫做<strong>引用的复制</strong>。上面代码执行完成之后，内存中的情景如下图所示：</p><p><img src="`+t+`" alt="image-20210705145015532" loading="lazy"></p><p>而下面的代码是真真正正的克隆了一个对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaobear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> p<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从打印结果可以看出，两个对象的地址是不同的，也就是说创建了新的对象，而不是把原对象的地址赋给了一个新的引用变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person@2f9ee1ac
Person@67f1fba0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码执行完成后，内存中的情景如下图所示：</p><p><img src="`+p+`" alt="image-20210705145211430" loading="lazy"></p><h4 id="_2、深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#_2、深拷贝和浅拷贝" aria-hidden="true">#</a> 2、深拷贝和浅拷贝</h4><p>上面的示例代码中，Person 中有两个成员变量，分别是 name 和 age name 是 String 类型， age 是 int 类型。代码非常简单，如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> age <span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
     <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> age<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> name<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于age 是基本数据类型， 那么对它的拷贝没有什么疑议，直接将一个 4 字节的整数值拷贝过来就行。但是 name是 String 类型的， 它只是一个引用， 指向一个真正的 String 对象，那么对它的拷贝 有两种方式： 直接将原对象中的 name 的引用值拷贝给新对象的 name 字段， 或者是根据原 Person 对象中的 name 指向的字符串对象创建一个新的相同的字符串对象，将这个新字符串对象的引用赋给新拷贝的 Person 对象的 name 字段。这两种拷贝方式分别 叫做浅拷贝和深拷贝。深拷贝和浅拷贝的原理如下图所示：</p><p><img src="`+o+`" alt="image-20210709143812049" loading="lazy"></p><p>下面通过代码进行验证。如果两个Person 对象的 name 的地址值相同， 说明两个对象的 name 都指向同一个String 对象，也就是浅拷贝， 而如果两个对象的 name 的地址值不同， 那 么就说明指向不同的 String 对象， 也就是在拷贝 Person 对象的时候， 同时拷贝了 name 引用的 String 对象， 也就是深拷贝。验证代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaobear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> p<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">String</span> result <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> p1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;clone 是浅拷贝的 &quot;</span> <span class="token operator">:</span> &quot;clone 是深拷贝的
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>clone 是浅拷贝的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以，<strong>clone 方法执行的是浅拷贝</strong>。</p><h4 id="_3、如何进行深拷贝" tabindex="-1"><a class="header-anchor" href="#_3、如何进行深拷贝" aria-hidden="true">#</a> 3、如何进行深拷贝</h4><blockquote><p>如果想要深拷贝一个对象，这个对象必须要实现Cloneable 接口，实现 clone方法，并且在 clone 方法内部，把该对象引用的其他对象也要 clone 一份，这就要求这个被引用的对象必须也要实现Cloneable 接口并且实现 clone 方法。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeepCopy</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Body</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">Head</span> head<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token class-name">Head</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
            <span class="token class-name">Body</span> clone <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Body</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            clone<span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Head</span><span class="token punctuation">)</span> head<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> clone<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Head</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">Face</span> face<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">Head</span><span class="token punctuation">(</span><span class="token class-name">Face</span> deepCopy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Face</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Body</span> body <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Head</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Face</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Body</span> body1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Body</span><span class="token punctuation">)</span> body<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;body == body1 : &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>body <span class="token operator">==</span> body1<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;body.head == body1.head : &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>body<span class="token punctuation">.</span>head <span class="token operator">==</span> body1<span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body == body1 : false
body.head == body1.head : false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、用户不能调用构造方法-只能通过new关键字自动调用" tabindex="-1"><a class="header-anchor" href="#_4、用户不能调用构造方法-只能通过new关键字自动调用" aria-hidden="true">#</a> 4、用户不能调用构造方法，只能通过new关键字自动调用？</h2><blockquote><p>错误</p><ol><li><p>在类内部可以用户可以使用关键字**this.构造方法名()**调用（参数决定调用的是本类对应的构造方法）</p></li><li><p>在子类中用户可以通过关键字**super.父类构造方法名()**调用（参数决定调用的是父类对应的构造方法。）</p></li><li><p>在反射中可以使用newInstance()的方式调用。</p></li></ol></blockquote><h2 id="_5、讲讲类的实例化顺序-比如父类静态数据-构造函数-子类静态数据-构造函数" tabindex="-1"><a class="header-anchor" href="#_5、讲讲类的实例化顺序-比如父类静态数据-构造函数-子类静态数据-构造函数" aria-hidden="true">#</a> 5、讲讲类的实例化顺序，比如父类静态数据，构造函数，子类静态数据，构造函数?</h2><blockquote><p>基本上代码块分为三种：Static静态代码块、构造代码块、普通代码块</p><p>代码块执行顺序<strong>静态代码块——&gt; 构造代码块 ——&gt; 构造函数——&gt; 普通代码块</strong></p><p>继承中代码块执行顺序：<strong>父类静态块——&gt;子类静态块——&gt;父类代码块——&gt;父类构造器——&gt;子类代码块——&gt;子类构造器</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Parent</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;父类非静态代码块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;父类静态代码块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;父类构造器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> parent<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;子类构造器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;子类静态代码块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;子类非静态代码块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Son</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父类静态块
子类静态代码块
父类非静态代码块
父类构造器
子类非静态代码块
子类构造器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>类实例化顺序为：</strong><mark>父类静态代码块/静态域-&gt;子类静态代码块/静态域 -&gt; 父类非静态代码块 -&gt; 父类构造器 -&gt; 子类非静态代码块 -&gt; 子类构造器</mark></p></blockquote><h2 id="_6、构造器-constructor-是否可被重写-override" tabindex="-1"><a class="header-anchor" href="#_6、构造器-constructor-是否可被重写-override" aria-hidden="true">#</a> 6、构造器（constructor）是否可被重写（override）？</h2><blockquote><p>构造器不能被继承，因此不能被重写，但可以被重载。每一个类必须有自己的构造函数，负责构造自己这部分的构造。子类不会覆盖父类的构造函数，相反必须一开始调用父类的构造函数。</p></blockquote><h2 id="_7、创建对象的几种方式" tabindex="-1"><a class="header-anchor" href="#_7、创建对象的几种方式" aria-hidden="true">#</a> 7、创建对象的几种方式？</h2><blockquote><ol><li>new创建新对象</li><li>通过反射机制</li><li>采用clone机制</li><li>通过序列化机制</li></ol></blockquote><h2 id="_8、super与this表示什么" tabindex="-1"><a class="header-anchor" href="#_8、super与this表示什么" aria-hidden="true">#</a> 8、Super与this表示什么？</h2><blockquote><p>Super表示当前类的父类对象 This表示当前类的对象</p></blockquote><h2 id="_9、java四种引用类型" tabindex="-1"><a class="header-anchor" href="#_9、java四种引用类型" aria-hidden="true">#</a> 9、Java四种引用类型</h2><blockquote><ol><li><p><strong>强引用</strong>：强引用是平常中使用最多的引用，强引用在程序内存不足（OOM）的时候也不会被回收。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>软引用</strong>：软引用在程序内存不足时，会被回收。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 注意：wrf这个引用也是强引用，它是指向SoftReference这个对象的，</span>
<span class="token comment">// 这里的软引用指的是指向new String(&quot;str&quot;)的引用，也就是SoftReference类中T</span>
<span class="token class-name">SoftReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> wrf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SoftReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>可用场景</mark>： 创建缓存的时候，创建的对象放进缓存中，当内存不足时，JVM就会回收早先创建的对象。</p></li><li><p><strong>弱引用</strong>：只要JVM垃圾回收器发现了它，就会将之回收</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span>wrf<span class="token operator">=</span>newWeakReference<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>可用场景</mark>：Java源码中的java.util.WeakHashMap中的key就是使用弱引用，我的理解就是，一旦我不需要某个引用，JVM会自动帮我处理它，这样我就不需要做其它操作。</p></li><li><p><strong>虚引用</strong>：虚引用的回收机制跟弱引用差不多，但是它被回收之前，会被放入ReferenceQueue中。注意哦，其它引用是被JVM回收后才被传入ReferenceQueue中的。由于这个机制，所以虚引用大多被用于引用销毁前的处理工作。还有就是，虚引用创建的时候，必须带有ReferenceQueue</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PhantomReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span>prf<span class="token operator">=</span>newPhantomReference<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span>
<span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>newReferenceQueue<span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>可用场景</mark>： 对象销毁前的一些操作，比如说资源释放等。Object.finalize() 虽然也可以做这类动作，但是这个方式即不安全又低效上诉所说的几类引用，都是指对象本身的引用，而不是指 Reference 的四个子类的引用( SoftReference 等)。</p></li></ol></blockquote><h2 id="_10、成员变量-属性-和局部变量的区别" tabindex="-1"><a class="header-anchor" href="#_10、成员变量-属性-和局部变量的区别" aria-hidden="true">#</a> 10、成员变量（属性）和局部变量的区别？</h2><p><img src="`+c+'" alt="image-20210721100715265" loading="lazy"></p>',55),u=[i];function d(r,k){return s(),a("div",null,u)}const b=n(l,[["render",d],["__file","objectOriented.html.vue"]]);export{b as default};
