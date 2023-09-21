const e=JSON.parse('{"key":"v-580fe24e","path":"/interview/javaHighLevel/jvm.html","title":"JVM高频面试题","lang":"zh-CN","frontmatter":{"title":"JVM高频面试题","description":"1、什么是JVM？\\r JVM（Java Virtual Machine）是用于运行Java字节码的虚拟机，包括一套字节码指令集、一组程序寄存器、一个虚拟机栈、一个虚拟机堆、一个方法区和一个垃圾回收器。JVM运行在操作系统之上，不与硬件设备直接交互。\\r Java源文件在通过编译器之后被编译成相应的.Class文件（字节码文件），.Class文件又被JVM...","head":[["meta",{"property":"og:url","content":"https://javaxiaobear.cn/interview/javaHighLevel/jvm.html"}],["meta",{"property":"og:site_name","content":"小熊学Java全能学习+面试指南"}],["meta",{"property":"og:title","content":"JVM高频面试题"}],["meta",{"property":"og:description","content":"1、什么是JVM？\\r JVM（Java Virtual Machine）是用于运行Java字节码的虚拟机，包括一套字节码指令集、一组程序寄存器、一个虚拟机栈、一个虚拟机堆、一个方法区和一个垃圾回收器。JVM运行在操作系统之上，不与硬件设备直接交互。\\r Java源文件在通过编译器之后被编译成相应的.Class文件（字节码文件），.Class文件又被JVM..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-09T09:36:54.000Z"}],["meta",{"property":"article:author","content":"小熊同学"}],["meta",{"property":"article:modified_time","content":"2023-06-09T09:36:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM高频面试题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-09T09:36:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小熊同学\\",\\"url\\":\\"https://javaxiaobear.cn\\"}]}"]]},"headers":[{"level":2,"title":"1、什么是JVM？","slug":"_1、什么是jvm","link":"#_1、什么是jvm","children":[]},{"level":2,"title":"2、JVM虚拟机包含了哪些区域？","slug":"_2、jvm虚拟机包含了哪些区域","link":"#_2、jvm虚拟机包含了哪些区域","children":[]},{"level":2,"title":"3、在JVM后台运行的线程有哪些？","slug":"_3、在jvm后台运行的线程有哪些","link":"#_3、在jvm后台运行的线程有哪些","children":[]},{"level":2,"title":"4、JVM内存区域怎么区分？","slug":"_4、jvm内存区域怎么区分","link":"#_4、jvm内存区域怎么区分","children":[]},{"level":2,"title":"5、JVM内存区域的生命周期","slug":"_5、jvm内存区域的生命周期","link":"#_5、jvm内存区域的生命周期","children":[]},{"level":2,"title":"6、JVM直接内存，你了解吗？","slug":"_6、jvm直接内存-你了解吗","link":"#_6、jvm直接内存-你了解吗","children":[]},{"level":2,"title":"7、什么是程序计数器？","slug":"_7、什么是程序计数器","link":"#_7、什么是程序计数器","children":[]},{"level":2,"title":"8、什么是虚拟机栈？","slug":"_8、什么是虚拟机栈","link":"#_8、什么是虚拟机栈","children":[]},{"level":2,"title":"9、什么是本地方法栈（本地方法区）？","slug":"_9、什么是本地方法栈-本地方法区","link":"#_9、什么是本地方法栈-本地方法区","children":[]},{"level":2,"title":"10、什么是Java堆？","slug":"_10、什么是java堆","link":"#_10、什么是java堆","children":[]},{"level":2,"title":"11、什么是方法区？","slug":"_11、什么是方法区","link":"#_11、什么是方法区","children":[]},{"level":2,"title":"12、什么是运行时常量池？","slug":"_12、什么是运行时常量池","link":"#_12、什么是运行时常量池","children":[]},{"level":2,"title":"13、对象的创建过程？","slug":"_13、对象的创建过程","link":"#_13、对象的创建过程","children":[]},{"level":2,"title":"14、对象在内存中的分布布局?","slug":"_14、对象在内存中的分布布局","link":"#_14、对象在内存中的分布布局","children":[]},{"level":2,"title":"15、对象的访问定位？","slug":"_15、对象的访问定位","link":"#_15、对象的访问定位","children":[]},{"level":2,"title":"16、哪些区域会存在OutOfMemoryError异常？","slug":"_16、哪些区域会存在outofmemoryerror异常","link":"#_16、哪些区域会存在outofmemoryerror异常","children":[]},{"level":2,"title":"17、如何确定垃圾可以回收？","slug":"_17、如何确定垃圾可以回收","link":"#_17、如何确定垃圾可以回收","children":[]},{"level":2,"title":"18、在Java体系中，可固定作为GC Roots的对象有哪些？","slug":"_18、在java体系中-可固定作为gc-roots的对象有哪些","link":"#_18、在java体系中-可固定作为gc-roots的对象有哪些","children":[]},{"level":2,"title":"19、Java中的4中引用类型？","slug":"_19、java中的4中引用类型","link":"#_19、java中的4中引用类型","children":[]},{"level":2,"title":"20、垃圾回收算法有哪些？","slug":"_20、垃圾回收算法有哪些","link":"#_20、垃圾回收算法有哪些","children":[]},{"level":2,"title":"21、什么是分代收集算法？","slug":"_21、什么是分代收集算法","link":"#_21、什么是分代收集算法","children":[]},{"level":2,"title":"22、什么是GC?","slug":"_22、什么是gc","link":"#_22、什么是gc","children":[]},{"level":2,"title":"23、什么是标记清除算法？","slug":"_23、什么是标记清除算法","link":"#_23、什么是标记清除算法","children":[]},{"level":2,"title":"24、什么是标记复制算法？","slug":"_24、什么是标记复制算法","link":"#_24、什么是标记复制算法","children":[]},{"level":2,"title":"25、什么是标记整理算法？","slug":"_25、什么是标记整理算法","link":"#_25、什么是标记整理算法","children":[]}],"git":{"createdTime":1686303414000,"updatedTime":1686303414000,"contributors":[{"name":"2861184805@qq.com","email":"2861184805@qq.com","commits":1}]},"readingTime":{"minutes":14.75,"words":4424},"filePathRelative":"interview/javaHighLevel/jvm.md","localizedDate":"2023年6月9日","copyright":{"author":"小熊学Java"},"autoDesc":true}');export{e as data};
