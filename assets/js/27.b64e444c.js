(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1203:function(t,a,s){"use strict";s.r(a);var n=s(6),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1、java-的基本数据类型都有哪些各占几个字节"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-的基本数据类型都有哪些各占几个字节"}},[t._v("#")]),t._v(" 1、Java 的基本数据类型都有哪些各占几个字节？")]),t._v(" "),n("p",[n("img",{attrs:{src:s(455),alt:"image-20210712152020611"}})]),t._v(" "),n("p",[n("img",{attrs:{src:s(456),alt:"image-20210712152043638"}})]),t._v(" "),n("h2",{attrs:{id:"_2、string-是最基本的数据类型吗"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、string-是最基本的数据类型吗"}},[t._v("#")]),t._v(" 2、String 是最基本的数据类型吗？")]),t._v(" "),n("blockquote",[n("p",[t._v("不是，String是引用类型，底层是用char数组实现的。")]),t._v(" "),n("p",[t._v("Java 中的基本数据类型只有8 个："),n("code",[t._v("byte")]),t._v("、"),n("code",[t._v("short")]),t._v("、"),n("code",[t._v("int")]),t._v("、"),n("code",[t._v("long")]),t._v("、"),n("code",[t._v("float")]),t._v("、"),n("code",[t._v("double")]),t._v("、"),n("code",[t._v("char")]),t._v("、"),n("code",[t._v("boolean")]),t._v("；除了基本类型（primitive type），剩下的都是引用类型（referencetype）， Java 5 以后引入的枚举类型也算是一种比较特殊的引用类型。")])]),t._v(" "),n("h2",{attrs:{id:"_3、运行short-s1-1-s1-s1-1-会出现什么结果-运行short-s1-1-s1-1-又会出现什么结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、运行short-s1-1-s1-s1-1-会出现什么结果-运行short-s1-1-s1-1-又会出现什么结果"}},[t._v("#")]),t._v(" 3、运行short s1 = 1， s1 = s1 + 1 ；会出现什么结果？运行short s1 = 1; s1 += 1 ；又会出现什么结果？")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("运行第一个会报错，因为1是"),n("code",[t._v("int")]),t._v("类型，而s是"),n("code",[t._v("short")]),t._v("类型，通过+运算后s1自动转换成"),n("code",[t._v("int")]),t._v("型。错误提示：Error:(21, 17) java: 不兼容的类型: 从"),n("code",[t._v("int")]),t._v("转换到"),n("code",[t._v("short")]),t._v("可能会有损失")]),t._v(" "),n("li",[t._v("运行第二个是正确的，s1=2，+1是"),n("code",[t._v("int")]),t._v("类型的操作，s1自动转换"),n("code",[t._v("int")]),t._v("类型")])])]),t._v(" "),n("h2",{attrs:{id:"_4、int-和integer-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、int-和integer-有什么区别"}},[t._v("#")]),t._v(" 4、int 和Integer 有什么区别？")]),t._v(" "),n("blockquote",[n("p",[t._v("Java 是一个近乎纯洁的面向对象编程语言，但是为了编程的方便还是引入了基本数据类型，但是为了能够将这些基本数据类型当成对象操作，Java 为每一个基本数据类型都引入了对应的包装类型（wrapper class），int 的包装类就是Integer，从Java 5 开始引入了自动装箱/拆箱机制，使得二者可以相互转换。")]),t._v(" "),n("ul",[n("li",[t._v("原始类型:   boolean， char，     byte， short，  int，    long，  float，double")]),t._v(" "),n("li",[t._v("包装类型：Boolean，Character，Byte，Short，Integer，Long，Float，Double")])])]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutomaticUnboxing")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" a1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("z3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("139")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("139")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" a2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" z4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[n("strong",[t._v("如果整型字面量的值在-128 到127 之间，那么不会new 新的Integer对象，而是直接引用常量池中的Integer 对象")])]),t._v(" "),n("h2",{attrs:{id:"_5、float-f-3-4-是否正确"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、float-f-3-4-是否正确"}},[t._v("#")]),t._v(" 5、float f=3.4;是否正确？")]),t._v(" "),n("blockquote",[n("p",[t._v("不正确。3.4是双精度。将双精度型（double） 赋值给浮点型（float）属于下转型（ down-casting，也称为窄化）会造成精度损失，因此需要强制类型转换"),n("code",[t._v("float f =(float)3.4")]),t._v("; 或者写成"),n("code",[t._v("float f =3.4F")]),t._v(";。")])]),t._v(" "),n("h2",{attrs:{id:"_6、用最高效率的方法算出2-乘以8-等于多少。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、用最高效率的方法算出2-乘以8-等于多少。"}},[t._v("#")]),t._v(" 6、用最高效率的方法算出2 乘以8 等于多少。")]),t._v(" "),n("blockquote",[n("p",[t._v("移位运算符："),n("code",[t._v("int i = 2 << 3")]),t._v(";")])]),t._v(" "),n("h2",{attrs:{id:"_7、string-类常用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、string-类常用方法"}},[t._v("#")]),t._v(" 7、String 类常用方法")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-length.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" int length()"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("返回此字符串的长度")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-indexof.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("int indexOf(int ch)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("返回指定字符在此字符串中第一次出现处的索引")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-indexof.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" int indexOf(int ch, int fromIndex)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("返回在此字符串中第一次出现指定字符处的索引，从指定的索引开始搜索")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-lastindexof.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" int lastIndexOf(int ch)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("返回指定字符在此字符串中最后一次出现处的索引")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-concat.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" String concat(String str)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("将指定字符串连接到此字符串的结尾。")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-endswith.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" boolean endsWith(String suffix)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("测试此字符串是否以指定的后缀结束。")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-replace.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" String replace(char oldChar, char newChar)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的。")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-split.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("String[] split(String regex)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("根据给定正则表达式的匹配拆分此字符串。")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-substring.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("String substring(int beginIndex)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("返回一个新的字符串，它是此字符串的一个子字符串")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-trim.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" String trim()"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("返回字符串的副本，忽略前导空白和尾部空白")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://www.runoob.com/java/java-string-equals.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" boolean equals(Object anObject)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("将此字符串与指定的对象比较。")])])])]),t._v(" "),n("h2",{attrs:{id:"_8、string-、-stringbuffer-、-stringbuilder-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8、string-、-stringbuffer-、-stringbuilder-的区别"}},[t._v("#")]),t._v(" 8、String 、 StringBuffer 、 StringBuilder 的区别？")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("1、可变与不可变")])]),t._v(" "),n("p",[t._v("String：字符串常量，在修改时不改变自身；若修改，等于生成新的字符串对象")]),t._v(" "),n("p",[t._v("StringBuffer：在修改时会改变对象自身，每次操作都是对 StringBuffer 对象本身进行修改，不是生成新的对象；使用场景：对字符串经常改变情况下，主要方法： append insert （）等。")]),t._v(" "),n("p",[n("strong",[t._v("2、线程是否安全")])]),t._v(" "),n("p",[t._v("String：对象定义后不可变，线程安全。")]),t._v(" "),n("p",[t._v("StringBuffer：是线程安全的（对调用方法加入同步锁），执行效率较慢，适用于多线程下操作字符串缓冲区大量数据。")]),t._v(" "),n("p",[t._v("StringBuilder ：是线程不安全的，适用于单线程下操作字符串缓冲区大量数据。")]),t._v(" "),n("p",[n("strong",[t._v("3、共同点")])]),t._v(" "),n("p",[t._v("StringBuilder 与 StringBuffer 有公共父类 AbstractStringBuilder(抽象类)。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractStringBuilder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Serializable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharSequence")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractStringBuilder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Serializable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharSequence")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("StringBuilder、StringBuffer 的方法都会调用 AbstractStringBuilder 中的公共方法，如 super.append(...)。只是 StringBuffer 会在方法上加 "),n("strong",[t._v("synchronized")]),t._v(" 关键字，进行同步。最后，如果程序不是多线程的，那么使用StringBuilder 效率高于StringBuffer。")])]),t._v(" "),n("p",[n("strong",[t._v("对于三者使用的总结")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("如果要操作少量的数据用 = String")])]),t._v(" "),n("li",[n("p",[t._v("单线程操作字符串缓冲区下操作大量数据 = StringBuilder")])]),t._v(" "),n("li",[n("p",[t._v("多线程操作字符串缓冲区下操作大量数据 = StringBuffffer")])])]),t._v(" "),n("h2",{attrs:{id:"_9、-while-和do-while-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9、-while-和do-while-有什么区别"}},[t._v("#")]),t._v(" 9、 while 和do while 有什么区别？")]),t._v(" "),n("blockquote",[n("p",[t._v("while是先判断再执行；do...while是先执行再判断，同等条件下，后者多执行了一次。")])]),t._v(" "),n("h2",{attrs:{id:"_10、switch-语句能否作用在byte-、long-、string-上"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10、switch-语句能否作用在byte-、long-、string-上"}},[t._v("#")]),t._v(" 10、switch 语句能否作用在byte 、long 、String 上？")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("可以用在"),n("code",[t._v("byte、int、short、char")]),t._v("以及它们的封装类上")]),t._v(" "),n("li",[t._v("不能用在其他基本类型上"),n("code",[t._v("long、double、float、boolean")]),t._v("以及封装类")]),t._v(" "),n("li",[t._v("jdk1.7及以上，可以用以字符串")]),t._v(" "),n("li",[t._v("可以用于枚举类型")])])]),t._v(" "),n("h2",{attrs:{id:"_11、string-s-new-string-xyz-创建了几个string-对象-二者之间再什么区别。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11、string-s-new-string-xyz-创建了几个string-对象-二者之间再什么区别。"}},[t._v("#")]),t._v(" 11、"),n("code",[t._v('String s ＝new String("xyz")；')]),t._v("，创建了几个String 对象？二者之间再什么区别。")]),t._v(" "),n("blockquote",[n("p",[t._v("创建了2个对象，一个是内存中的“xyz”，还有一个是s，指向xyz")])]),t._v(" "),n("h2",{attrs:{id:"_12、自动装箱与拆箱"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12、自动装箱与拆箱"}},[t._v("#")]),t._v(" 12、自动装箱与拆箱")]),t._v(" "),n("blockquote",[n("p",[t._v("自动装箱：将基本类型用他们的引用类型包装起来")]),t._v(" "),n("p",[t._v("自动拆箱：将包装类型转换为基本类型")])]),t._v(" "),n("h2",{attrs:{id:"_13、math-round-11-5-等于多少-math-round-11-5-等于多少"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13、math-round-11-5-等于多少-math-round-11-5-等于多少"}},[t._v("#")]),t._v(" 13、Math.round(11.5) 等于多少？Math.round(-11.5)等于多少？")]),t._v(" "),n("blockquote",[n("p",[t._v("Math.round(11.5)的返回值是 12，Math.round(-11.5)的返回值是-11。"),n("strong",[t._v("四舍五入的原理是在参数上加 0.5 然后进行下取整")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"_14、下面代码运行结果是多少"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14、下面代码运行结果是多少"}},[t._v("#")]),t._v(" 14、下面代码运行结果是多少？")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[n("strong",[t._v("解析")]),t._v("：++是先赋值，再自增，所以count永远是0")]),t._v(" "),n("h2",{attrs:{id:"_15、java中基本类型是如何转换的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_15、java中基本类型是如何转换的"}},[t._v("#")]),t._v(" 15、Java中基本类型是如何转换的？")]),t._v(" "),n("blockquote",[n("p",[t._v("基本类型等级从低到高：")]),t._v(" "),n("ul",[n("li",[t._v("byte、short、int、long、float、double")]),t._v(" "),n("li",[t._v("char、int、long、float、double")])]),t._v(" "),n("p",[t._v("自动转换：运算过程中，低级可以自动向高级进行转换")]),t._v(" "),n("p",[t._v("强制转换：高级需要强制转换成低级，可能会丢失精度")]),t._v(" "),n("p",[n("strong",[t._v("规则")]),t._v("：")]),t._v(" "),n("ul",[n("li",[t._v("= 右边先自动转换成表达式中最高级的数据类型，再进行运算。整型经过运算会自动转化最低 int 级别，如两个 char 类型的相加，得到的是一个 int 类型的数值。")]),t._v(" "),n("li",[t._v("= 左边数据类型级别 大于 右边数据类型级别，右边会自动升级")]),t._v(" "),n("li",[t._v("= 左边数据类型级别 小于 右边数据类型级别，需要强制转换右边数据类型")]),t._v(" "),n("li",[t._v("char 与 short，char 与 byte 之间需要强转，因为 char 是无符号类型")])])])])}),[],!1,null,null,null);a.default=r.exports},455:function(t,a,s){t.exports=s.p+"assets/img/image-20210712152020611.f98c38b0.png"},456:function(t,a,s){t.exports=s.p+"assets/img/image-20210712152043638.d41bbb14.png"}}]);