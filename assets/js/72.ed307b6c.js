(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1380:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、静态内部类与非静态内部类有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、静态内部类与非静态内部类有什么区别"}},[s._v("#")]),s._v(" 1、静态内部类与非静态内部类有什么区别？")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("静态内部类可以有静态成员(方法，属性)，而非静态内部类则不能有静态成员(方法，属性)。")]),s._v(" "),a("li",[s._v("静态内部类只能够访问外部类的静态成员和静态方法,而非静态内部类则可以访问外部类的所有成员(方法，属性)。")]),s._v(" "),a("li",[s._v("实例化静态内部类与非静态内部类的方式不同")]),s._v(" "),a("li",[s._v("调用内部静态类的方法或静态变量,可以通过类名直接调用")])])]),s._v(" "),a("h2",{attrs:{id:"_2、静态内部类如何定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、静态内部类如何定义"}},[s._v("#")]),s._v(" 2、静态内部类如何定义？")]),s._v(" "),a("blockquote",[a("p",[s._v("定义在类内部的静态类，就是静态内部类。")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Inner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("ol",[a("li",[s._v("静态内部类可以访问外部类所有的静态变量和方法，即使是 private 的也一样。")]),s._v(" "),a("li",[s._v("静态内部类和一般类一致，可以定义静态变量、方法，构造方法等。")]),s._v(" "),a("li",[s._v("其它类使用静态内部类需要使用“外部类.静态内部类”方式，如下所示：Out.Inner inner = new Out.Inner();inner.print();")]),s._v(" "),a("li",[s._v("Java集合类HashMap内部就有一个静态内部类Entry。Entry是HashMap存放元素的抽象，HashMap 内部维护 Entry 数组用了存放元\n素，但是 Entry 对使用者是透明的。像这种和外部类关系密切的，且不依赖外部类实例的，都可以使用静态内部类。")])])]),s._v(" "),a("h2",{attrs:{id:"_3、什么是成员内部类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、什么是成员内部类"}},[s._v("#")]),s._v(" 3、什么是成员内部类？")]),s._v(" "),a("blockquote",[a("p",[s._v("定义在类内部的非静态类，就是成员内部类。成员内部类不能定义静态方法和变量（final修饰的除外）。这是因为成员内部类是非静态的，类初始化的时候先初始化静态成员，如果允许成员内部类定义静态变量，那么成员内部类的静态变量初始化顺序是有歧义的。")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Inner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_4、anonymous-inner-class-匿名内部类-是否可以继承其它类-是否可以实现接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、anonymous-inner-class-匿名内部类-是否可以继承其它类-是否可以实现接口"}},[s._v("#")]),s._v(" 4、Anonymous Inner Class(匿名内部类)是否可以继承其它类？是否可以实现接口？")]),s._v(" "),a("blockquote",[a("p",[s._v("可以继承其他类或实现其他接口，在 Swing 编程和 Android 开发中常用此方式来实现事件监听和回调。")])]),s._v(" "),a("h2",{attrs:{id:"_5、内部类可以引用它的包含类-外部类-的成员吗-有没有什么限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、内部类可以引用它的包含类-外部类-的成员吗-有没有什么限制"}},[s._v("#")]),s._v(" 5、内部类可以引用它的包含类（外部类）的成员吗？有没有什么限制？")]),s._v(" "),a("blockquote",[a("p",[s._v("一个内部类对象可以访问创建它的外部类对象的成员，包括私有成员。")])]),s._v(" "),a("h2",{attrs:{id:"_6、是否可以从一个静态-static-方法内部发出对非静态-non-static-方法的调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、是否可以从一个静态-static-方法内部发出对非静态-non-static-方法的调用"}},[s._v("#")]),s._v(" 6、是否可以从一个静态（static）方法内部发出对非静态（non-static）方法的调用？")]),s._v(" "),a("blockquote",[a("p",[s._v("不可以， 静态方法只能访问静态成员，因为非静态方法的调用要先创建对象， 在调用静态方法时可能对象并没有被初始化。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);