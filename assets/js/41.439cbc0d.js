(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1122:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、什么是java反射机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是java反射机制"}},[s._v("#")]),s._v(" 1、什么是Java反射机制？")]),s._v(" "),t("blockquote",[t("p",[s._v("Java的反射（reflection）机制是指在程序的运行状态中，可以构造任意一个类的对象，可以了解任意一个对象所属的类，可以了解任意一个类的成员变量和方法，可以调用任意一个对象的属性和方法。 这种动态获取程序信息以及动态调用对象的功能称为Java语言的反射机制。")])]),s._v(" "),t("h2",{attrs:{id:"_1、除了使用new创建对象之外-还可以用什么方法创建对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、除了使用new创建对象之外-还可以用什么方法创建对象"}},[s._v("#")]),s._v(" 1、除了使用new创建对象之外，还可以用什么方法创建对象？")]),s._v(" "),t("blockquote",[t("p",[s._v("使用Java反射可以创建对象!")])]),s._v(" "),t("h2",{attrs:{id:"_2、java反射创建对象效率高还是通过new创建对象的效率高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、java反射创建对象效率高还是通过new创建对象的效率高"}},[s._v("#")]),s._v(" 2、Java反射创建对象效率高还是通过new创建对象的效率高？")]),s._v(" "),t("blockquote",[t("p",[s._v("通过"),t("strong",[s._v("new")]),s._v("创建对象的效率比较"),t("strong",[s._v("高")]),s._v("。通过反射时，先找查找类资源，使用类加载器创建，过程比较繁琐，所以效率较低")])]),s._v(" "),t("h2",{attrs:{id:"_3、java反射的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、java反射的作用"}},[s._v("#")]),s._v(" 3、java反射的作用？")]),s._v(" "),t("blockquote",[t("p",[s._v("反射机制是在运行时，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意个对象，都能够调用它的任意一个方法。在java中，只要给定类的名字，就可以通过反射机制来获得类的所有信息。")]),s._v(" "),t("p",[s._v("==这种动态获取的信息以及动态调用对象的方法的功能称为Java语言的反射机制==")]),s._v(" "),t("ul",[t("li",[s._v("在运行时判定任意一个对象所属的类")]),s._v(" "),t("li",[s._v("在运行时构造任意一个类的对象")]),s._v(" "),t("li",[s._v("在运行时判定任意一个类所具有的成员变量和方法")]),s._v(" "),t("li",[s._v("在运行时调用任意一个对象的成员变量和 方法")]),s._v(" "),t("li",[s._v("在运行调用任意一个对象的方法")]),s._v(" "),t("li",[s._v("生成动态代码")])])]),s._v(" "),t("h2",{attrs:{id:"_4、哪些地方会用到反射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、哪些地方会用到反射"}},[s._v("#")]),s._v(" 4、哪些地方会用到反射？")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("JDBC中，利用反射动态加载数据库驱动程序")]),s._v(" "),t("li",[s._v("Web服务器中利用反射调用Servlet的服务方法")]),s._v(" "),t("li",[s._v("框架用到反射机制，注入属性，调用方法，如Spring")])])]),s._v(" "),t("h2",{attrs:{id:"_5、反射的实现方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、反射的实现方法"}},[s._v("#")]),s._v(" 5、反射的实现方法？")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("Class.forName(“类的路径”)")]),s._v(" "),t("li",[s._v("类名.class")]),s._v(" "),t("li",[s._v("对象名.getClass()")]),s._v(" "),t("li",[s._v("基本类型的包装类，可以调用包装类的Type属性来获得该包装类的Class对象")])])]),s._v(" "),t("h2",{attrs:{id:"_6、实现java反射的类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、实现java反射的类"}},[s._v("#")]),s._v(" 6、实现Java反射的类")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("Class：表示正在运行的Java应用程序中的类和接口\n注意： 所有获取对象的信息都需要Class类来实现。")]),s._v(" "),t("li",[s._v("Field：提供有关类和接口的属性信息，以及对它的动态访问权限。")]),s._v(" "),t("li",[s._v("Constructor：提供关于类的单个构造方法的信息以及它的访问权限")]),s._v(" "),t("li",[s._v("Method：提供类或接口中某个方法的信息")])])]),s._v(" "),t("h2",{attrs:{id:"_7、反射机制有哪些优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、反射机制有哪些优缺点"}},[s._v("#")]),s._v(" 7、反射机制有哪些优缺点？")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("优点")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("能够运行时动态获取类的实例，提高灵活性；")]),s._v(" "),t("li",[s._v("与动态编译结合")])]),s._v(" "),t("p",[t("strong",[s._v("缺点")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("使用反射性能较低，需要解析字节码，将内存中的对象进行解析。")])]),s._v(" "),t("p",[s._v("解决方案：")]),s._v(" "),t("ol",[t("li",[s._v("通过setAccessible(true)关闭JDK的安全检查来提升反射速度；")]),s._v(" "),t("li",[s._v("多次创建一个类的实例时，有缓存会快很多")]),s._v(" "),t("li",[s._v("ReflflectASM工具类，通过字节码生成的方式加快反射速度")]),s._v(" "),t("li",[s._v("相对不安全，破坏了封装性（因为通过反射可以获得私有方法和属性）")])])]),s._v(" "),t("h2",{attrs:{id:"_8、java反射api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、java反射api"}},[s._v("#")]),s._v(" 8、Java反射API")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("反射 API 用来生成 JVM 中的类、接口或则对象的信息")])]),s._v(" "),t("ol",[t("li",[s._v("Class 类：反射的核心类，可以获取类的属性，方法等信息。")]),s._v(" "),t("li",[s._v("Field 类：Java.lang.reflec 包中的类，表示类的成员变量，可以用来获取和设置类之中的属性\n值。")]),s._v(" "),t("li",[s._v("Method 类： Java.lang.reflec 包中的类，表示类的方法，它可以用来获取类中的方法信息或\n者执行方法。")]),s._v(" "),t("li",[s._v("Constructor 类： Java.lang.reflec 包中的类，表示类的构造方法。")])])]),s._v(" "),t("h2",{attrs:{id:"_9、反射使用步骤-获取-class-对象、调用对象方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、反射使用步骤-获取-class-对象、调用对象方法"}},[s._v("#")]),s._v(" 9、反射使用步骤（获取 Class 对象、调用对象方法）")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("获取想要操作的类的 Class 对象，他是反射的核心，通过 Class 对象我们可以任意调用类的方法。")]),s._v(" "),t("li",[s._v("调用 Class 类中的方法，既就是反射的使用阶段。")]),s._v(" "),t("li",[s._v("使用反射 API 来操作这些信息。")])])]),s._v(" "),t("h2",{attrs:{id:"_10、获取-class-对象有几种方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、获取-class-对象有几种方法"}},[s._v("#")]),s._v(" 10、获取 Class 对象有几种方法")]),s._v(" "),t("blockquote",[t("ol",[t("li",[t("p",[s._v("调用某个对象的 getClass()方法")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("调用某个类的 class 属性来获取该类对应的 Class 对象")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用 Class 类中的 forName()静态方法(最安全/性能最好)")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"类的全路径"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//最常用")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当我们获得了想要操作的类的 Class 对象后，可以通过 Class 类中的方法获取并查看该类中的方法和属性。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取 Person 类的 Class 对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reflection.Person"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取 Person 类的所有方法信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" method"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("clazz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDeclaredMethods")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Method")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取 Person 类的所有成员属性信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Field")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" field"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("clazz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDeclaredFields")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Field")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取 Person 类的所有构造方法信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" constructor"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("clazz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDeclaredConstructors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Constructor")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("constructor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])])])]),s._v(" "),t("h2",{attrs:{id:"_11、利用反射动态创建对象实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、利用反射动态创建对象实例"}},[s._v("#")]),s._v(" 11、利用反射动态创建对象实例")]),s._v(" "),t("blockquote",[t("ol",[t("li",[t("p",[s._v("Class 对象的 newInstance()")]),s._v(" "),t("p",[s._v("使用 Class 对象的 newInstance()方法来创建该 Class 对象对应类的实例，但是这种方法要求该 Class 对象对应的类有默认的空构造器。")])]),s._v(" "),t("li",[t("p",[s._v("调用 Constructor 对象的 newInstance()")]),s._v(" "),t("p",[s._v("先使用 Class 对象获取指定的 Constructor 对象，再调用 Constructor 对象的 newInstance()方法来创建 Class 对象对应类的实例,通过这种方法可以选定构造方法创建实例。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取 Person 类的 Class 对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" clazz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reflection.Person"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用.newInstane 方法创建对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" clazz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取构造方法并创建对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Constructor")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("clazz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDeclaredConstructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建对象并设置属性13/04/2018")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" p1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"李四"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"男"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);