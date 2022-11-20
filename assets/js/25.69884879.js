(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1395:function(t,a,s){"use strict";s.r(a);var _=s(6),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1、什么是比特-bit-什么是字节-byte-什么是字符-char-它们长度是多少-各有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是比特-bit-什么是字节-byte-什么是字符-char-它们长度是多少-各有什么区别"}},[t._v("#")]),t._v(" 1、什么是比特(Bit),什么是字节(Byte),什么是字符(Char),它们长度是多少,各有什么区别？")]),t._v(" "),_("blockquote",[_("p",[t._v("Bit最小的二进制单位 ，是计算机的操作部分取值0或者1。")]),t._v(" "),_("p",[t._v("Byte是计算机中存储数据的单元，是一个8位的二进制数，（计算机内部，一个字节可表示一个英文字母，两个字节可表示一个汉字。） 取值（-128-127）")]),t._v(" "),_("p",[t._v("Char是用户的可读写的最小单位，他只是抽象意义上的一个符号。如‘5’，‘中’，‘￥’等等。在java里面由16位bit组成Char 取值（0-65535）")]),t._v(" "),_("p",[t._v("Bit 是最小单位 计算机他只能认识0或者1")]),t._v(" "),_("p",[t._v("Byte是8个字节 是给计算机看的")]),t._v(" "),_("p",[t._v("字符 是看到的东西 一个字符=二个字节")])]),t._v(" "),_("h2",{attrs:{id:"_2、什么是io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、什么是io"}},[t._v("#")]),t._v(" 2、什么是IO？")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Java IO")]),t._v("：是以流为基础进行数据的输入输出的，所有数据被串行化(所谓串行化就是数据要按顺序进行输入输出)写入输出流。简单来说就是java通过io流方式和外部设备进行交互。\n在Java类库中，IO部分的内容是很庞大的，因为它涉及的领域很广泛：标准输入输出，文件的操作，网络上的数据传输流，字符串流，对象流等等等。")]),t._v(" "),_("p",[t._v("比如程序从服务器上下载图片，就是通过流的方式从网络上以流的方式到程序中，在到硬盘中")])]),t._v(" "),_("h2",{attrs:{id:"_3、在了解不同的io之前先了解-同步与异步-阻塞与非阻塞的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、在了解不同的io之前先了解-同步与异步-阻塞与非阻塞的区别"}},[t._v("#")]),t._v(" 3、在了解不同的IO之前先了解：同步与异步，阻塞与非阻塞的区别？")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("同步")]),t._v("：一个任务的完成之前不能做其他操作，必须等待（等于在打电话）\n"),_("strong",[t._v("异步")]),t._v("：一个任务的完成之前，可以进行其他操作（等于在聊QQ）\n"),_("strong",[t._v("阻塞")]),t._v("：是相对于CPU来说的， 挂起当前线程，不能做其他操作只能等待\n"),_("strong",[t._v("非阻塞")]),t._v("：无须挂起当前线程，可以去执行其他操作")])]),t._v(" "),_("h2",{attrs:{id:"_4、什么是bio"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、什么是bio"}},[t._v("#")]),t._v(" 4、什么是BIO?")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("BIO")]),t._v("："),_("strong",[t._v("同步并阻塞")]),t._v("，服务器实现一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，没处理完之前此线程不能做其他操作（如果是单线程的情况下，我传输的文件很大呢？），当然可以通过线程池机制改善。")]),t._v(" "),_("p",[t._v("BIO方式"),_("strong",[t._v("适用于连接数目比较小且固定的架构")]),t._v("，这种方式对服务器资源要求比较高，并发局限于应用中，JDK1.4以前的唯一选择，但程序直观简单易理解。")])]),t._v(" "),_("h2",{attrs:{id:"_5、什么是nio"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、什么是nio"}},[t._v("#")]),t._v(" 5、什么是NIO？")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("NIO")]),t._v("："),_("strong",[t._v("同步非阻塞")]),t._v("，服务器实现一个连接一个线程，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有I/O请求时才启动一个线程进行处理。")]),t._v(" "),_("p",[t._v("NIO方式"),_("strong",[t._v("适用于连接数目多且连接比较短（轻操作）的架构")]),t._v("，比如聊天服务器，并发局限于应用中，编程比较复杂，JDK1.4之后开始支持。")])]),t._v(" "),_("h2",{attrs:{id:"_6、什么是aio"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、什么是aio"}},[t._v("#")]),t._v(" 6、什么是AIO？")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("AIO")]),t._v("："),_("strong",[t._v("异步非阻塞")]),t._v("，服务器实现模式为一个有效请求一个线程，客户端的I/O请求都是由操作系统先完成了再通知服务器应用去启动线程进行处理，AIO方式使用于连接数目多且连接比较长（重操作）的架构，比如相册服务器，充分调用操作系统参与并发操作，编程比较复杂，JDK1.7之后开始支持。")]),t._v(" "),_("p",[t._v("AIO属于NIO包中的类实现，其实"),_("strong",[t._v("IO主要分为BIO和NIO")]),t._v("，AIO只是附加品，解决IO不能异步的实现在以前很少有Linux系统支持AIO，Windows的IOCP就是该AIO模型。但是现在的服务器一般都是支持AIO操作")])]),t._v(" "),_("h2",{attrs:{id:"_7、什么是netty"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7、什么是netty"}},[t._v("#")]),t._v(" 7、什么是Netty?")]),t._v(" "),_("blockquote",[_("p",[t._v("Netty是由JBOSS提供的一个Java开源框架。Netty提供异步的、事件驱动的网络应用程序框架和工具，用以快速开发高性能、高可靠性的网络服务器和客户端程序。\nNetty 是一个基于NIO的客户、服务器端编程框架，使用Netty 可以确保你快速和简单的开发出一个网络应用，例如实现了某种协议的客户，服务端应用。Netty相当简化和流线化了网络应用的编程开发过程，例如，TCP和UDP的socket服务开发。")]),t._v(" "),_("p",[t._v("Netty是由NIO演进而来，使用过NIO编程的用户就知道NIO编程非常繁重，Netty是能够能跟好的使用NIO")])]),t._v(" "),_("h2",{attrs:{id:"_8、bio和nio、aio的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8、bio和nio、aio的区别"}},[t._v("#")]),t._v(" 8、BIO和NIO、AIO的区别？")]),t._v(" "),_("blockquote",[_("p",[t._v("BIO是阻塞的，NIO是非阻塞的.")]),t._v(" "),_("p",[t._v("BIO是面向流的，只能单向读写，NIO是面向缓冲的, 可以双向读写")]),t._v(" "),_("p",[t._v("使用BIO做Socket连接时，由于单向读写，当没有数据时，会挂起当前线程，阻塞等待，为防止影响其它连接,，需要为每个连接新建线程处理.，然而系统资源是有限的,，不能过多的新建线程，线程过多带来线程上下文的切换，从来带来更大的性能损耗，因此需要使用NIO进行BIO多路复用，使用一个线程来监听所有Socket连接，使用本线程或者其他线程处理连接")]),t._v(" "),_("p",[t._v("AIO是非阻塞 以异步方式发起 I/O 操作。当 I/O 操作进行时可以去做其他操作，由操作系统内核空间提醒IO操作已完成（不懂的可以往下看）")])]),t._v(" "),_("h2",{attrs:{id:"_9、io流的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9、io流的分类"}},[t._v("#")]),t._v(" 9、IO流的分类?")]),t._v(" "),_("blockquote",[_("p",[t._v("==按流的方向==：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("输入流（InputStream）")]),t._v("：从文件读入到内存。只能进行读操作。")]),t._v(" "),_("li",[_("strong",[t._v("输出流（OuputStream）")]),t._v("：从内存读出到文件。只能进行写操作。")]),t._v(" "),_("li",[t._v("注：输出流可以帮助我们创建文件，而输入流不会。")])]),t._v(" "),_("p",[t._v("==按处理数据单位==：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("字节流")]),t._v("：以字节为单位，每次次读入或读出是8位数据。可以读任何类型数据，图片、文件、音乐视频等。 (Java代码接收数据只能为byte数组)")]),t._v(" "),_("li",[_("strong",[t._v("字符流")]),t._v("：以字符为单位，每次读入或读出是==16位==数据。其只能读取字符类型数据。 (Java代码接收数据为一般为char数组，也可以是别的)")])]),t._v(" "),_("p",[t._v("==按角色==：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("节点流")]),t._v("：直接与数据源相连，读入或读出。")]),t._v(" "),_("li",[_("strong",[t._v("处理流")]),t._v("：也叫"),_("strong",[t._v("包装流")]),t._v("，是对一个对于已存在的流的连接进行封装，通过所封装的流的功能调用实现数据读写。如添加个Buffering缓冲区。（意思就是有个缓存区，等于软件和mysql中的redis）")]),t._v(" "),_("li",[t._v("注意：为什么要有处理流？主要作用是在读入或写出时，对数据进行缓存，以减少I/O的次数，")])])]),t._v(" "),_("p",[_("img",{attrs:{src:s(522),alt:"image-20210720104343514"}})]),t._v(" "),_("p",[_("img",{attrs:{src:s(523),alt:"image-20210720103443059"}})]),t._v(" "),_("p",[_("img",{attrs:{src:s(524),alt:"image-20210720103453874"}})]),t._v(" "),_("h2",{attrs:{id:"_10、5种io模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10、5种io模型"}},[t._v("#")]),t._v(" 10、5种IO模型")]),t._v(" "),_("h3",{attrs:{id:"_1、阻塞bio-blocking-io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、阻塞bio-blocking-io"}},[t._v("#")]),t._v(" 1、阻塞BIO(Blocking IO)")]),t._v(" "),_("blockquote",[_("p",[t._v("例：A拿着一支鱼竿在河边钓鱼，并且一直在鱼竿前等，在等的时候不做其他的事情，十分专心。只有鱼上钩的时，才结束掉等的动作，把鱼钓上来。\n在内核将数据准备好之前，系统调用会一直等待所有的套接字，默认的是阻塞方式。")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(525),alt:"image-20210720110909957"}})]),t._v(" "),_("h3",{attrs:{id:"_2、非阻塞nio-noblocking-io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、非阻塞nio-noblocking-io"}},[t._v("#")]),t._v(" 2、非阻塞NIO(NoBlocking IO)")]),t._v(" "),_("blockquote",[_("p",[t._v("B也在河边钓鱼，但是B不想将自己的所有时间都花费在钓鱼上，在等鱼上钩这个时间段中，B也在做其他的事情（一会看看书，一会读读报纸，一会又去看其他人的钓鱼等），但B在做这些事情的时候，每隔一个固定的时间检查鱼是否上钩。一旦检查到有鱼上钩，就停下手中的事情，把鱼钓上来。 ==B在检查鱼竿是否有鱼，是一个轮询的过程==。")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(526),alt:"image-20210720111104688"}})]),t._v(" "),_("h3",{attrs:{id:"_3、异步aio-asynchronous-io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、异步aio-asynchronous-io"}},[t._v("#")]),t._v(" 3、异步AIO(asynchronous IO)")]),t._v(" "),_("blockquote",[_("p",[t._v("C也想钓鱼，但C有事情，于是他雇来了D、E、F，让他们帮他等待鱼上钩，一旦有鱼上钩，就打电话给C，C就会将鱼钓上去")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(527),alt:"image-20210720111202884"}})]),t._v(" "),_("p",[t._v("当应用程序请求数据时，内核一方面去取数据报内容返回，另一方面将程序控制权还给应用进程，应用进程继续处理其他事情，是一种非阻塞的状态。")]),t._v(" "),_("h3",{attrs:{id:"_4、信号驱动io-signal-blocking-io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、信号驱动io-signal-blocking-io"}},[t._v("#")]),t._v(" 4、信号驱动IO(signal blocking IO)")]),t._v(" "),_("blockquote",[_("p",[t._v("G也在河边钓鱼，但与A、B、C不同的是，G比较聪明，他给鱼竿上挂一个铃铛，当有鱼上钩的时候，这个铃铛就会被碰响，G就会将鱼钓上来。")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(528),alt:"image-20210720111317056"}})]),t._v(" "),_("p",[t._v("信号驱动IO模型，应用进程告诉内核：当数据报准备好的时候，给我发送一个信号，对SIGIO信号进行捕捉，并且调用我的信号处理函数来获取数据报。")]),t._v(" "),_("h3",{attrs:{id:"_5、io多路转接-io-multiplexing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、io多路转接-io-multiplexing"}},[t._v("#")]),t._v(" 5、IO多路转接(IO multiplexing)")]),t._v(" "),_("blockquote",[_("p",[t._v("H同样也在河边钓鱼，但是H生活水平比较好，H拿了很多的鱼竿，一次性有很多鱼竿在等，H不断的查看每个鱼竿是否有鱼上钩。增加了效率，减少了等待的时间。")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(529),alt:"image-20210720111433853"}})]),t._v(" "),_("blockquote",[_("p",[t._v("IO多路转接是多了一个select函数，select函数有一个参数是文件描述符集合，对这些文件描述符进行循环监听，当某个文件描述符就绪时，就对这个文件描述符进行处理。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("IO多路转接是属于阻塞IO")]),t._v("，但可以对多个文件描述符进行阻塞监听，所以效率较阻塞IO的高。")])])]),t._v(" "),_("h2",{attrs:{id:"_11、什么叫对象序列化-什么是反序列化-实现对象序列化需要做哪些工作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11、什么叫对象序列化-什么是反序列化-实现对象序列化需要做哪些工作"}},[t._v("#")]),t._v(" 11、什么叫对象序列化？什么是反序列化？实现对象序列化需要做哪些工作？")]),t._v(" "),_("blockquote",[_("p",[t._v("对象序列化：将对象以二进制的形式保存在硬盘上\n反序列化：将二进制的文件转化为对象读取\n准备工作：实现serializable接口，不想让字段放在硬盘上就加transient")])]),t._v(" "),_("h2",{attrs:{id:"_12、在实现序列化接口是时候一般要生成一个serialversionuid字段-它叫做什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12、在实现序列化接口是时候一般要生成一个serialversionuid字段-它叫做什么"}},[t._v("#")]),t._v(" 12、在实现序列化接口是时候一般要生成一个serialVersionUID字段,它叫做什么,")]),t._v(" "),_("p",[t._v("一般有什么用")]),t._v(" "),_("blockquote",[_("p",[t._v("如果用户没有自己声明一个serialVersionUID,接口会默认生成一个serialVersionUID，但是强烈建议用户自定义一个serialVersionUID,因为默认的serialVersinUID对于class的细节非常敏感，反序列化时可能会导致InvalidClassException这个异常。\n比如说先进行序列化，然后在反序列化之前修改了类，那么就会报错。因为修改了类，对应的SerialversionUID也变化了，而序列化和反序列化就是通过对比其SerialversionUID来进行的，一旦SerialversionUID不匹配，反序列化就无法成功。")])]),t._v(" "),_("h2",{attrs:{id:"_13、怎么生成serialversionuid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13、怎么生成serialversionuid"}},[t._v("#")]),t._v(" 13、怎么生成SerialversionUID？")]),t._v(" "),_("blockquote",[_("p",[t._v('可序列化类可以通过声明名为 "serialVersionUID" 的字段（该字段必须是静态 (static)、最终(final) 的 long 型字段）显式声明其自己的 serialVersionUID')])]),t._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" serialVersionUID "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1L")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h2",{attrs:{id:"_14、bufferedreader属于哪种流-它主要是用来做什么的-它里面有那些经典的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14、bufferedreader属于哪种流-它主要是用来做什么的-它里面有那些经典的方法"}},[t._v("#")]),t._v(" 14、BufferedReader属于哪种流,它主要是用来做什么的,它里面有那些经典的方法")]),t._v(" "),_("blockquote",[_("p",[t._v("属于处理流中的缓冲流，可以将读取的内容存在内存里面，有readLine（）方法")])]),t._v(" "),_("h2",{attrs:{id:"_15、java中流类的超类主要有那些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15、java中流类的超类主要有那些"}},[t._v("#")]),t._v(" 15、Java中流类的超类主要有那些？")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("超类代表顶端的父类（都是抽象类）")]),t._v(" "),_("li",[t._v("java.io.InputStream")]),t._v(" "),_("li",[t._v("java.io.OutputStream")]),t._v(" "),_("li",[t._v("java.io.Reader")]),t._v(" "),_("li",[t._v("java.io.Writer")])])])])}),[],!1,null,null,null);a.default=e.exports},522:function(t,a,s){t.exports=s.p+"assets/img/image-20210720104343514.90268a3f.png"},523:function(t,a,s){t.exports=s.p+"assets/img/image-20210720103443059.69dafc7e.png"},524:function(t,a,s){t.exports=s.p+"assets/img/image-20210720103453874.40295565.png"},525:function(t,a,s){t.exports=s.p+"assets/img/image-20210720110909957.cbad5134.png"},526:function(t,a,s){t.exports=s.p+"assets/img/image-20210720111104688.ac4ee5de.png"},527:function(t,a,s){t.exports=s.p+"assets/img/image-20210720111202884.4cc126df.png"},528:function(t,a,s){t.exports=s.p+"assets/img/image-20210720111317056.77d23359.png"},529:function(t,a,s){t.exports=s.p+"assets/img/image-20210720111433853.9bbd827c.png"}}]);