(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1769:function(a,t,v){"use strict";v.r(t);var _=v(3),e=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1、什么是jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是jvm"}},[a._v("#")]),a._v(" 1、什么是JVM？")]),a._v(" "),t("blockquote",[t("p",[a._v("JVM（Java Virtual Machine）是用于运行Java字节码的虚拟机，包括一套字节码指令集、一组程序寄存器、一个虚拟机栈、一个虚拟机堆、一个方法区和一个垃圾回收器。JVM运行在操作系统之上，不与硬件设备直接交互。")]),a._v(" "),t("p",[a._v("Java源文件在通过编译器之后被编译成相应的.Class文件（字节码文件），.Class文件又被JVM中的解释器编译成机器码在不同的操作系统（Windows、Linux、Mac）上运行。每种操作系统的解释器都是不同的，但基于解释器实现的虚拟机是相同的，这也是Java能够跨平台的原因。在一个Java进程开始运行后，虚拟机就开始实例化了，有多个进程启动就会实例化多个虚拟机实例。进程退出或者关闭，则虚拟机实例消亡，在多个虚拟机实例之间不能共享数据。")])]),a._v(" "),t("h2",{attrs:{id:"_2、jvm虚拟机包含了哪些区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、jvm虚拟机包含了哪些区域"}},[a._v("#")]),a._v(" 2、JVM虚拟机包含了哪些区域？")]),a._v(" "),t("blockquote",[t("p",[a._v("Java虚拟机包括一个类加载器子系统（Class Loader SubSystem）、运行时数据区（Runtime Data Area）、执行引擎和本地接口库（Native Interface Library）。本地接口库通过调用本地方法库（Native Method Library）与操作系统交互")]),a._v(" "),t("p",[t("img",{attrs:{src:v(654),alt:"image-20221026094948016"}})]),a._v(" "),t("p",[a._v("其中：")]),a._v(" "),t("ul",[t("li",[a._v("类加载器子系统用于将编译好的.Class文件加载到JVM中；")]),a._v(" "),t("li",[a._v("运行时数据区用于存储在JVM运行过程中产生的数据，包括程序计数器、方法区、本地方法区、虚拟机栈和虚拟机堆；")]),a._v(" "),t("li",[a._v("执行引擎包括即时编译器和垃圾回收器，即时编译器用于将Java字节码编译成具体的机器码，垃圾回收器用于回收在运行过程中不再使用的对象；")]),a._v(" "),t("li",[a._v("本地接口库用于调用操作系统的本地方法库完成具体的指令操作。")])])]),a._v(" "),t("h2",{attrs:{id:"_3、在jvm后台运行的线程有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、在jvm后台运行的线程有哪些"}},[a._v("#")]),a._v(" 3、在JVM后台运行的线程有哪些？")]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("虚拟机线程（JVMThread）：虚拟机线程在JVM到达安全点（SafePoint）时出现。")]),a._v(" "),t("li",[a._v("周期性任务线程：通过定时器调度线程来实现周期性操作的执行。")]),a._v(" "),t("li",[a._v("GC线程：GC线程支持JVM中不同的垃圾回收活动。")]),a._v(" "),t("li",[a._v("编译器线程：编译器线程在运行时将字节码动态编译成本地平台机器码，是JVM跨平台的具体实现。")]),a._v(" "),t("li",[a._v("信号分发线程：接收发送到JVM的信号并调用JVM方法")])])]),a._v(" "),t("h2",{attrs:{id:"_4、jvm内存区域怎么区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、jvm内存区域怎么区分"}},[a._v("#")]),a._v(" 4、JVM内存区域怎么区分？")]),a._v(" "),t("blockquote",[t("p",[a._v("JVM内存区域分为："),t("strong",[a._v("线程私有区域")]),a._v("和"),t("strong",[a._v("线程共享区域")]),a._v("以及"),t("strong",[a._v("直接内存")])]),a._v(" "),t("p",[a._v("线程私有区域：程序计数器、虚拟机、本地方法区")]),a._v(" "),t("p",[a._v("线程共享区域：虚拟机堆、方法区")]),a._v(" "),t("p",[t("img",{attrs:{src:v(655),alt:"image-20221026100332889"}})])]),a._v(" "),t("h2",{attrs:{id:"_5、jvm内存区域的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、jvm内存区域的生命周期"}},[a._v("#")]),a._v(" 5、JVM内存区域的生命周期")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("线程私有区域")]),a._v("：与线程的生命周期相同，随线程的启动而创建，随线程的结束而销毁")]),a._v(" "),t("p",[t("strong",[a._v("线程共享区域")]),a._v("：与虚拟机的生命周期相同，随虚拟机的启动而创建，随虚拟机的结束而销毁")])]),a._v(" "),t("h2",{attrs:{id:"_6、jvm直接内存-你了解吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、jvm直接内存-你了解吗"}},[a._v("#")]),a._v(" 6、JVM直接内存，你了解吗？")]),a._v(" "),t("blockquote",[t("p",[a._v("直接内存也叫作堆外内存，它并不是JVM运行时数据区的一部分，但在并发编程中被频繁使用。JDK的NIO模块提供的基于Channel与Buffer的I/O操作方式就是基于堆外内存实现的，NIO模块通过调用Native函数库直接在操作系统上分配堆外内存，然后使用DirectByteBuffer对象作为这块内存的引用对内存进行操作，Java进程可以通过堆外内存技术避免在Java堆和Native堆中来回复制数据带来的资源占用和性能消耗，因此堆外内存在高并发应用场景下被广泛使用（Netty、Flink、HBase、Hadoop都有用到堆外内存）")])]),a._v(" "),t("h2",{attrs:{id:"_7、什么是程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、什么是程序计数器"}},[a._v("#")]),a._v(" 7、什么是程序计数器？")]),a._v(" "),t("blockquote",[t("p",[a._v("程序计数器（Program Counter Register）是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器；在Java虚拟机的概念模型里，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。")]),a._v(" "),t("p",[a._v("由于Java虚拟机的多线程是通过线程轮流切换、分配处理器执行时间的方式来实现的，在任何一个确定的时刻，一个处理器（对于多核处理器来说是一个内核）都只会执行一条线程中的指令。因此，为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各条线程之间计数器互不影响，独立存储，我们称这类内存区域为“线程私有”的内存。")]),a._v(" "),t("p",[a._v("如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果正在执行的是本地（Native）方法，这个计数器值则应为空（Undefined）。")]),a._v(" "),t("p",[a._v("此内存区域是唯一一个在《Java虚拟机规范》中没有规定任何OutOfMemoryError情况的区域。")]),a._v(" "),t("p",[t("img",{attrs:{src:v(656),alt:"image-20221026104145458"}})])]),a._v(" "),t("h2",{attrs:{id:"_8、什么是虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、什么是虚拟机栈"}},[a._v("#")]),a._v(" 8、什么是虚拟机栈？")]),a._v(" "),t("blockquote",[t("p",[a._v("虚拟机栈描述的是Java方法执行的线程内存模型：每个方法被执行的时候，Java虚拟机都会同步创建一个栈帧（Stack Frame）用于存储局部变量表、操作数栈、动态连接、方法出口等信息。")]),a._v(" "),t("p",[a._v("每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。")]),a._v(" "),t("p",[t("img",{attrs:{src:v(657),alt:"image-20221026104123956"}})])]),a._v(" "),t("h2",{attrs:{id:"_9、什么是本地方法栈-本地方法区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、什么是本地方法栈-本地方法区"}},[a._v("#")]),a._v(" 9、什么是本地方法栈（本地方法区）？")]),a._v(" "),t("blockquote",[t("p",[a._v("本地方法栈（Native Method Stacks）与虚拟机栈所发挥的作用是非常相似的，其区别只是虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的本地（Native）方法服务。")]),a._v(" "),t("p",[t("img",{attrs:{src:v(658),alt:"image-20221026104410022"}})])]),a._v(" "),t("h2",{attrs:{id:"_10、什么是java堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、什么是java堆"}},[a._v("#")]),a._v(" 10、什么是Java堆？")]),a._v(" "),t("blockquote",[t("p",[a._v("在JVM运行过程中创建的对象和产生的数据都被存储在堆中，堆是被线程共享的内存区域，也是垃圾收集器进行垃圾回收的最主要的内存区域。")]),a._v(" "),t("p",[t("img",{attrs:{src:v(659),alt:"image-20221026110751119"}})])]),a._v(" "),t("h2",{attrs:{id:"_11、什么是方法区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、什么是方法区"}},[a._v("#")]),a._v(" 11、什么是方法区？")]),a._v(" "),t("blockquote",[t("p",[a._v("方法区（Method Area）与Java堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据。")]),a._v(" "),t("p",[t("img",{attrs:{src:v(660),alt:"image-20221026112515348"}})])]),a._v(" "),t("h2",{attrs:{id:"_12、什么是运行时常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、什么是运行时常量池"}},[a._v("#")]),a._v(" 12、什么是运行时常量池？")]),a._v(" "),t("blockquote",[t("p",[a._v("用于存放编译期生成的各种字面量与符号引用，这部分内容将在类加载后存放到方法区的运行时常量池中.")])]),a._v(" "),t("h2",{attrs:{id:"_13、对象的创建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、对象的创建过程"}},[a._v("#")]),a._v(" 13、对象的创建过程？")]),a._v(" "),t("blockquote",[t("ol",[t("li",[a._v("Java虚拟机遇到一个new字节码指令")]),a._v(" "),t("li",[a._v("检查指令参数是否在常量池定位的引用，引用代表的类是否执行了类加载机制")]),a._v(" "),t("li",[a._v("若未找到，则进行类加载机制的7个阶段")]),a._v(" "),t("li",[a._v("类加载机制通过后，为对象分配内存")]),a._v(" "),t("li",[a._v("将分配到的内存空间（但不包括对象头）都初始化为零值")]),a._v(" "),t("li",[a._v("对创建的对象进行设置（这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码（实际上对象的哈希码会延后到真正调用Object::hashCode()方法时才计算）、对象的GC分代年龄等信息）")]),a._v(" "),t("li",[a._v("此时，对于虚拟机来说，对象的创建已经完成，但对于Java程序来说，才刚开始，构造函数还没初始化")]),a._v(" "),t("li",[a._v("调用init()方法后，对象才算真正创建成功")])]),a._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:v(661),alt:"image-20221026161119465"}})]),a._v(" "),t("h2",{attrs:{id:"_14、对象在内存中的分布布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、对象在内存中的分布布局"}},[a._v("#")]),a._v(" 14、对象在内存中的分布布局?")]),a._v(" "),t("blockquote",[t("p",[a._v("在HotSpot虚拟机里，对象在堆内存中的存储布局可以划分为三个部分：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("对象头")]),a._v("（Header）：一部分用于存储对象自身的运行时数据；另一部分是类型指针，即对象指向它的类型元数据的指针，Java虚拟机通过这个指针\n来确定该对象是哪个类的实例")]),a._v(" "),t("li",[t("strong",[a._v("实例数据")]),a._v("（Instance Data）：对象真正存储的有效信息，即我们在程序代码里面所定义的各种类型的字段内容，无论是从父类继承下来的，还是在子类中定义的字段都必须记录起来")]),a._v(" "),t("li",[t("strong",[a._v("对齐填充")]),a._v("（Padding)：它仅仅起着占位符的作用")])]),a._v(" "),t("p",[t("img",{attrs:{src:v(662),alt:"image-20221027092158277"}})])]),a._v(" "),t("h2",{attrs:{id:"_15、对象的访问定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15、对象的访问定位"}},[a._v("#")]),a._v(" 15、对象的访问定位？")]),a._v(" "),t("blockquote",[t("p",[a._v("创建对象自然是为了后续使用该对象，我们的Java程序会通过栈上的reference数据来操作堆上的具体对象。由于reference类型在《Java虚拟机规范》里面只规定了它是一个指向对象的引用，并没有定义这个引用应该通过什么方式去定位、访问到堆中对象的具体位置，所以对象访问方式也是由虚拟机实现而定的，主流的访问方式有：")]),a._v(" "),t("ul",[t("li",[a._v("使用句柄：Java堆中将可能会划分出一块内存来作为句柄池，reference中存储的就是对象的句柄地址，而句柄中包含了对象实例数据与类型数据各自具体的地址信息")]),a._v(" "),t("li",[a._v("直接指针：Java堆中对象的内存布局就必须考虑如何放置访问类型数据的相关信息，reference中存储的直接就是对象地址，如果只是访问对象本身的话，就不需要多一次间接访问的开销")])]),a._v(" "),t("p",[t("img",{attrs:{src:v(663),alt:"image-20221028092253531"}})])])])}),[],!1,null,null,null);t.default=e.exports},654:function(a,t,v){a.exports=v.p+"assets/img/image-20221026094948016.6bf37b65.png"},655:function(a,t,v){a.exports=v.p+"assets/img/image-20221026100332889.24051e31.png"},656:function(a,t,v){a.exports=v.p+"assets/img/image-20221026104145458.9980a155.png"},657:function(a,t,v){a.exports=v.p+"assets/img/image-20221026104123956.fc1876df.png"},658:function(a,t,v){a.exports=v.p+"assets/img/image-20221026104410022.8b8a7335.png"},659:function(a,t,v){a.exports=v.p+"assets/img/image-20221026110751119.703f7d69.png"},660:function(a,t,v){a.exports=v.p+"assets/img/image-20221026112515348.bea8cd92.png"},661:function(a,t,v){a.exports=v.p+"assets/img/image-20221026161119465.df730fbe.png"},662:function(a,t,v){a.exports=v.p+"assets/img/image-20221027092158277.3ee11183.png"},663:function(a,t,v){a.exports=v.p+"assets/img/image-20221028092253531.0cb77d5a.png"}}]);