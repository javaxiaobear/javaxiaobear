import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as r,a as e,b as t,d as n,e as a}from"./app-aeb4ead9.js";const i="/assets/image-20221028155608009-aa30d09c.png",c="/assets/29f7e85dea17e100b38b450d9949a330-b501e683.png",p="/assets/image-20220627113443003-4a3b3208.png",h="/assets/image-20220702002430362-09f148b7.png",u="/assets/zxlc-ff8e401e.png",g="/assets/b44f857a9bdedcd6a2d53a3971fae7db-232bbfa6.png",y="/assets/image-20220703164220030-f9ca9fde.png",m="/assets/image-20220703170334348-5c7bba86.png",S="/assets/16701032-f8547d110ba34135-7467ad45.png",L={},M=a('<p><img src="'+i+'" alt="image-20221028155608009" loading="lazy"></p><p><img src="'+c+'" alt="img" loading="lazy"></p><h3 id="_47、mysql内部支持缓存查询吗" tabindex="-1"><a class="header-anchor" href="#_47、mysql内部支持缓存查询吗" aria-hidden="true">#</a> 47、MySQL内部支持缓存查询吗？</h3><blockquote><p>当MySQL接收到客户端的查询SQL之后，仅仅只需要对其进行相应的权限验证之后，就会通过Query Cache来查找结果，甚至都不需要经过Optimizer模块进行执行计划的分析优化，更不需要发生任何存储引擎的交互</p><p>MySQL5.7支持内部缓存，8.0之后就废弃掉了</p></blockquote><h3 id="_48、mysql8为何废弃掉查询缓存" tabindex="-1"><a class="header-anchor" href="#_48、mysql8为何废弃掉查询缓存" aria-hidden="true">#</a> 48、MySQL8为何废弃掉查询缓存？</h3><blockquote><p>缓存的意义在于快速查询提升系统性能，可以灵活控制缓存的一致性</p><p>MySQL缓存的限制</p><ol><li>MySQL基本没有手段灵活的管理缓存失效和生效，尤其对于频繁更新的表</li><li>SQL必须完全一致才会导致cache命中</li><li>为了节省内存空间，太大的result set不会被cache (&lt; query_cache_limit)；</li><li>MySQL缓存在分库分表环境下是不起作用的；</li><li>执行SQL里有触发器,自定义函数时，MySQL缓存也是不起作用的；</li><li>在表的结构或数据发生改变时，基于该表相关cache立即全部失效。</li></ol></blockquote><h3 id="_49、mysql-8废除缓存的替代方案是什么" tabindex="-1"><a class="header-anchor" href="#_49、mysql-8废除缓存的替代方案是什么" aria-hidden="true">#</a> 49、MySQL 8废除缓存的替代方案是什么？</h3><blockquote><p>应用层组织缓存，最简单的是使用redis，ehcached等</p></blockquote><h3 id="_50、mysql内部有哪些核心模块组成-作用是什么" tabindex="-1"><a class="header-anchor" href="#_50、mysql内部有哪些核心模块组成-作用是什么" aria-hidden="true">#</a> 50、MySQL内部有哪些核心模块组成，作用是什么？</h3><p><img src="'+p+'" alt="image-20220627113443003" loading="lazy"></p><p><strong>Connectors（客户端）</strong></p><p>MySQL服务器之外的客户端程序，与具体的语言相关，例如Java中的JDBC，图形用户界面SQLyog等。<code>本质上都是在TCP连接上通过MySQL协议和MySQL服务器进行通信。</code></p><p><strong>MySQL Server（服务器）</strong></p><p><strong>第1层：连接层</strong></p><ul><li>系统（客户端）访问 MySQL 服务器前，做的<code>第一件事就是建立 TCP 连接</code>。</li><li>经过三次握手建立连接成功后， MySQL 服务器对 TCP 传输过来的账号密码做<code>身份认证、权限获取</code>。 <ul><li>用户名或密码不对<code>，会收到一个</code>Access denied for user<code>错误，客户端程序结束执行</code></li><li><code>用户名密码认证通过</code>，会从权限表<code>查出账号拥有的权限</code>与连接关联，之后的权限判断逻辑，都将依赖于此时读到的权限</li></ul></li><li>TCP 连接收到请求后，必须要分配给一个线程专门与这个客户端的交互。所以还会有个线程池，去走后面的流程。每一个连接从线程池中获取线程，省去了创建和销毁线程的开销。</li></ul><p><strong>第2层：服务层</strong></p><p><strong>Management Serveices &amp; Utilities： 系统管理和控制工具</strong></p><p><strong>SQL Interface：SQL接口：</strong></p><ul><li><code>接收用户的SQL命令，并且返回用户需要查询的结果。</code>比如SELECT ... FROM就是调用SQL Interface</li><li>MySQL支持DML（数据操作语言）、DDL（数据定义语言）、存储过程、视图、触发器、自定义函数等多种SQL语言接口</li></ul><p><strong>Parser：解析器：</strong></p><ul><li>在SQL命令传递到解析器的时候会被解析器验证和解析。解析器中SQL 语句进行<code>语法分析、语法解析</code>，并为其创建<code>语法树</code>。</li></ul><p><strong>语法分析</strong></p><p>语法分析主要是把输入转化成若干个tokens，包含key和非key。</p><p>在分析之后，会得到4个Token，其中有2个key，它们分别是SELECT、FROM。</p><table><thead><tr><th>key</th><th>非key</th><th>key</th><th>非key</th></tr></thead><tbody><tr><td>SELECT</td><td>age</td><td>FROM</td><td>user</td></tr></tbody></table><ul><li>典型的解析树如下：</li></ul><p><img src="'+h+'" alt="image-20220702002430362" loading="lazy"></p><p><strong>Optimizer：查询优化器：</strong></p><ul><li>SQL语句在语法解析后、查询前会使用查询优化器对查询进行优化，<code>确定SQL语句的执行路径，生成一个执行计划</code>。</li></ul><p><strong>Caches &amp; Buffers： 查询缓存组件：</strong></p><ul><li>MySQL内部维持着一些Cache和Buffer，比如Query Cache用来缓存一条SELECT语句的执行结果，如果能够在其中找到对应的查询结果，那么就不必再进行查询解析、查询优化和执行的整个过程了，直接将结果反馈给客户端。</li><li>这个缓存机制是由一系列小缓存组成的。比如表缓存，记录缓存，key缓存，权限缓存等 。</li><li>这个查询缓存可以在不同客户端之间共享 。</li></ul><p><strong>第3层：引擎层</strong></p><p>插件式存储引擎层（ Storage Engines），<code>负责MySQL中数据的存储和提取，对物理服务器级别维护的底层数据执行操作，服务器通过API与存储引擎进行通信</code>。不同的存储引擎具有的功能不同，管理的表有不同的存储结构，采用的存取算法也不同，这样我们可以根据自己的实际需要进行选取。例如MyISAM引擎和InnoDB引擎。</p><p><strong>存储层</strong></p><p>所有的数据、数据库、表的定义、表的每一行的内容、索引，都是存在<code>文件系统</code> 上，以文件的方式存在，并完成与存储引擎的交互。</p><h3 id="_51、一条sql发送给mysql后-内部是如何执行的-说一下-mysql-执行一条查询语句的内部执行过程" tabindex="-1"><a class="header-anchor" href="#_51、一条sql发送给mysql后-内部是如何执行的-说一下-mysql-执行一条查询语句的内部执行过程" aria-hidden="true">#</a> 51、一条sql发送给MySQL后，内部是如何执行的？（说一下 MySQL 执行一条查询语句的内部执行过程？）</h3><p>1.5、查询流程说明</p><p><img src="'+u+'" alt="image-20220627141453944" loading="lazy"></p><p><strong>首先，</strong><code>MySQL客户端通过协议与MySQL服务器建连接，通过SQL接口发送SQL语句，先检查查询缓存，如果命中，直接返回结果，否则进行语句解析。</code>也就是说，在解析查询之前，服务器会先访问查询缓存，如果某个查询结果已经位于缓存中，服务器就不会再对查询进行解析、优化、以及执行。它仅仅将缓存中的结果返回给用户即可，这将大大提高系统的性能。</p><p><strong>接下来，</strong><code>MySQL解析器通过关键字将SQL语句进行解析，并生成一棵对应的解析树，</code>解析器使用MySQL语法规则验证和解析SQL语句。例如，它将验证是否使用了错误的关键字，或者使用关键字的顺序是否正确，引号能否前后匹配等；<code>预处理器则根据MySQL规则进一步检查解析树是否合法，</code>例如，这里将检查数据表和数据列是否存在，还会解析名字和别名，看是否有歧义等。<code>然后预处理器会进行查询重写，生成一棵新解析树。</code></p><p><strong>接下来，</strong><code>查询优化器将解析树转化成执行计划。</code>MySQL优化程序会对我们的语句做一些优化，如子查询转换为连接、表达式简化等等。优化的结果就是生成一个执行计划，这个执行计划表明了应该使用哪些索引执行查询，以及表之间的连接顺序是啥样，等等。我们可以使用EXPLAIN语句来查看某个语句的执行计划。</p><p><strong>最后，</strong><code>进入执行器阶段。</code>完成查询优化后，<code>查询执行引擎</code>会按照生成的执行计划调用存储引擎提供的接口执行SQL查询并将结果返回给客户端。在MySQL8以下的版本，如果设置了查询缓存，这时会将查询结果进行缓存，再返回给客户端。</p><img src="'+g+`" alt="img"><h3 id="_52、mysql-提示-不存在此列-是执行到哪个节点报出的" tabindex="-1"><a class="header-anchor" href="#_52、mysql-提示-不存在此列-是执行到哪个节点报出的" aria-hidden="true">#</a> 52、MySQL 提示“不存在此列”是执行到哪个节点报出的？</h3><blockquote><p>是在Parser：解析器 分析sql语法的时候检查的列。</p></blockquote><h3 id="_53、如果一张表创建了多个索引-在哪个阶段或模块进行的索引选择" tabindex="-1"><a class="header-anchor" href="#_53、如果一张表创建了多个索引-在哪个阶段或模块进行的索引选择" aria-hidden="true">#</a> 53、如果一张表创建了多个索引，在哪个阶段或模块进行的索引选择？</h3><blockquote><p>在优化器阶段<strong>Optimizer：查询优化器：</strong></p></blockquote><h3 id="_54、mysql-支持哪些存储引擎-默认使用哪个" tabindex="-1"><a class="header-anchor" href="#_54、mysql-支持哪些存储引擎-默认使用哪个" aria-hidden="true">#</a> 54、MySQL 支持哪些存储引擎？默认使用哪个？</h3><p>查看MySQL提供什么存储引擎</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> ENGINES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的结果表示MySQL中默认使用的存储引擎是InnoDB，支持事务，行锁，外键，支持分布式事务(XA)，支持保存点(回滚)</p><p><img src="`+y+`" alt="image-20220703164220030" loading="lazy"></p><p>也可以通过以下语句查看默认的存储引擎：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;%default_storage_engine%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt="image-20220703170334348" loading="lazy"></p><h3 id="_55、mysql8-0自带哪些存储引擎-分别是做什么的" tabindex="-1"><a class="header-anchor" href="#_55、mysql8-0自带哪些存储引擎-分别是做什么的" aria-hidden="true">#</a> 55、MySQL8.0自带哪些存储引擎？分别是做什么的？</h3><p><code>1. InnoDB存储引擎</code></p><ul><li><p>InnoDB是MySQL的默认事务型引擎，它被设计用来<code>处理大量的短期(short-lived)事务</code>。可以确保事务的完整提交(Commit)和回滚(Rollback)。</p></li><li><p>除非有非常特别的原因需要使用其他的存储引擎，否则<code>应该优先考虑InnoDB引擎</code>。</p></li><li><p>数据文件结构：</p><ul><li>表名.frm 存储表结构（MySQL8.0时，合并在表名.ibd中）</li></ul></li><li><p>表名.ibd 存储数据和索引</p></li><li><p>InnoDB不仅缓存索引还要缓存真实数据， 对内存要求较 高 ，而且内存大小对性能有决定性的影响。</p></li></ul><p><code>2. MyISAM存储引擎</code></p><ul><li><p>MyISAM提供了大量的特性，包括全文索引、压缩、空间函数(GIS)等，但<code>MyISAM不支持事务和行级锁</code>，有一个毫无疑问的缺陷就是崩溃后无法安全恢复。</p></li><li><p>优势是访问的 速度快 ，对事务完整性没有要求或者以SELECT、INSERT为主的应用。</p></li><li><p>数据文件结构：</p><ul><li>表名.frm 存储表结构</li></ul></li><li><p>表名.MYD 存储数据</p></li><li><p>表名.MYI 存储索引</p></li><li><p>MyISAM只缓存索引，不缓存真实数据。</p></li></ul><p><code>3. Archive引擎</code></p><ul><li><code>Archive档案存储引擎只支持INSERT和SELECT操作</code>。</li><li>Archive表适合日志和数据采集（档案）类应用。</li><li>根据英文的测试结论来看，Archive表比MyISAM表要小大约75%，比支持事务处理的InnoDB表小大约83%。</li></ul><p><code>4. Blackhole引擎</code></p><ul><li><code>Blackhole引擎没有实现任何存储机制，它会丢弃所有插入的数据，不做任何保存</code>。</li><li>但服务器会记录Blackhole表的日志，所以可以用于复制数据到备库，或者简单地记录到日志。但这种应用方式会碰到很多问题，因此并不推荐。</li></ul><p><code>5. CSV引擎</code></p><ul><li><code>CSV引擎可以将普通的CSV文件作为MySQL的表来处理，但不支持索引</code>。</li><li>CSV引擎可以作为一种数据交换的机制，非常有用。</li><li>CSV存储的数据直接可以在操作系统里，用文本编辑器，或者excel读取。</li></ul><p><code>6. Memory引擎</code></p><ul><li>如果需要快速地访问数据，并且这些数据不会被修改，重启以后丢失也没有关系，那么使用Memory表是非常有用。</li><li>Memory表至少比MyISAM表要快一个数量级。</li></ul><p><code>7. Federated引擎</code></p><ul><li><code>Federated引擎是访问其他MySQL服务器的一个代理（跨库关联查询）</code>，尽管该引擎看起来提供了一种很好的跨服务器的灵活性，但也经常带来问题，因此默认是禁用的。</li></ul><h3 id="_56、mysql-存储引擎架构了解吗" tabindex="-1"><a class="header-anchor" href="#_56、mysql-存储引擎架构了解吗" aria-hidden="true">#</a> 56、MySQL 存储引擎架构了解吗？</h3>',71),_={href:"https://dev.MySQL.com/doc/refman/5.7/en/innodb-architecture.html",target:"_blank",rel:"noopener noreferrer"},b=a('<p>下面是官方的InnoDB引擎结构图，主要分为内存结构和磁盘结构两大部分。</p><p><img src="'+S+'" alt="img" loading="lazy"></p><p><strong>内存区域</strong></p><p><strong>Buffer Pool</strong>:在InnoDB访问表记录和索引时会在Buffer Pool的页中缓存，以后使用可以减少磁盘IO操作，提升效率。主要用来缓存热的数据页和索引页。</p><p><strong>Log Buffer</strong>：用来缓存redolog</p><p><strong>Adaptive Hash Index</strong>：自适应哈希索引</p><p><strong>Change Buffer</strong>:它是一种应用在非唯一普通索引页（non-unique secondary index page）不在缓冲池中，对页进行了写操作，并不会立刻将磁盘页加载到缓冲池，而仅仅记录缓冲变更（Buffer Changes），等未来数据被读取时，再将数据合并（Merge）恢复到缓冲池中的技术。写缓冲的目的是降低写操作的磁盘IO，提升数据库性能。</p><p><strong>磁盘区域</strong></p><p>磁盘中的结构分为两大类：表空间和重做日志。</p><ul><li>表空间：分为系统表空间(MySQL 目录的 ibdata1 文件)，临时表空间，常规表空间，Undo 表空间以及 file-per-table 表空间(MySQL5.7默认打开file_per_table 配置）。系统表空间又包括了InnoDB数据字典，双写缓冲区(Doublewrite Buffer)，修改缓存(Change Buffer），Undo日志等。</li><li>Redo日志：存储的就是 Log Buffer 刷到磁盘的数据。</li></ul><p>官方文档：</p>',11),f={href:"https://dev.MySQL.com/doc/refman/8.0/en/innodb-storage-engine.html",target:"_blank",rel:"noopener noreferrer"},Q=a(`<h3 id="_57、能否单独为一张表设置存储引擎" tabindex="-1"><a class="header-anchor" href="#_57、能否单独为一张表设置存储引擎" aria-hidden="true">#</a> 57、能否单独为一张表设置存储引擎？</h3><p><code>方法1：</code></p><p>设置默认存储引擎：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> DEFAULT_STORAGE_ENGINE<span class="token operator">=</span>MyISAM<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>方法2：</code></p><p>或者修改 my.cnf 文件：vim /etc/my.cnf 新增一行：default-storage-engine=MyISAM 重启MySQL：systemctl restart MySQLd</p><p><code>方法3：</code></p><p>我们可以为 不同的表设置不同的存储引擎</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">(</span> 建表语句<span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> 存储引擎名称<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ENGINE</span> <span class="token operator">=</span> 存储引擎名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_58、阿里、京东等大厂都有自研的存储引擎-如何开发一套自己的" tabindex="-1"><a class="header-anchor" href="#_58、阿里、京东等大厂都有自研的存储引擎-如何开发一套自己的" aria-hidden="true">#</a> 58、阿里、京东等大厂都有自研的存储引擎，如何开发一套自己的？</h3><p>开发存储引擎并不难，难的是开发出来高效的有意义的存储引擎。</p><p>简单例子可以看一下官方源码中的示例，可以实现一个什么也没做的存储引擎。</p>`,12),k={href:"https://dev.MySQL.com/doc/dev/MySQL-server/latest/",target:"_blank",rel:"noopener noreferrer"},q=a('<h3 id="_59、myisam-和-innodb-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_59、myisam-和-innodb-的区别是什么" aria-hidden="true">#</a> 59、MyISAM 和 InnoDB 的区别是什么？</h3><table><thead><tr><th><strong>对比项</strong></th><th><strong>MyISAM</strong></th><th><strong>InnoDB</strong></th></tr></thead><tbody><tr><td>外键</td><td>不支持</td><td>支持</td></tr><tr><td>事务</td><td>不支持</td><td>支持</td></tr><tr><td>行表锁</td><td>表锁，即使操作一条记录也会锁住整个表，不适合高并发的操作</td><td>行锁，操作时只锁某一行，不对其它行有影响，适合高并发的操作</td></tr><tr><td>缓存</td><td>只缓存索引，不缓存真实数据</td><td>不仅缓存索引还要缓存真实数据，对内存要求较高，而且内存大小对性能有决定性的影响</td></tr><tr><td>关注点</td><td>并发查询，节省资源、消耗少、简单业务</td><td>并发写、事务、多表关系、更大资源</td></tr><tr><td>默认安装</td><td>Y</td><td>Y</td></tr><tr><td>默认使用</td><td>N</td><td>Y</td></tr><tr><td>自带系统表使用</td><td>Y</td><td>N</td></tr></tbody></table><h3 id="_60、具体说一下如何做技术选型" tabindex="-1"><a class="header-anchor" href="#_60、具体说一下如何做技术选型" aria-hidden="true">#</a> 60、具体说一下如何做技术选型</h3><blockquote><p>除非几乎没有写操作全部都是高频的读操作可以选择MyISAM作为表的存储引擎，其他业务可以一律使用InnoDB。</p></blockquote>',4);function v(I,E){const s=d("ExternalLinkIcon");return l(),r("div",null,[M,e("p",null,[e("a",_,[t("https://dev.MySQL.com/doc/refman/5.7/en/innodb-architecture.html"),n(s)])]),b,e("p",null,[e("a",f,[t("https://dev.MySQL.com/doc/refman/8.0/en/innodb-storage-engine.html"),n(s)])]),Q,e("p",null,[t("有兴趣可以参考官方文档："),e("a",k,[t("https://dev.MySQL.com/doc/dev/MySQL-server/latest/"),n(s)])]),q])}const x=o(L,[["render",v],["__file","technical-Architecture.html.vue"]]);export{x as default};
