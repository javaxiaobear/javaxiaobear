(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1238:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、java-有没有-goto-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-有没有-goto-语句"}},[s._v("#")]),s._v(" 1、Java 有没有 goto 语句？")]),s._v(" "),t("blockquote",[t("p",[s._v("goto是 Java 中的保留字，在目前版本的 Java 中没有使用。根据 James Gosling Java 之父）编写的《 The Java Programming Language 》一书的附录中给出了一个 Java 关键字列表，其中有 goto 和 const ，但是这两个是目前无法使用的关键字，因此有些地方将其称之为保留字，其实保留字这个词应该有更广泛的意义，因为熟悉 C 语言的程序员都知道，在系统类库中使 用过的有特殊意义的单词或单词的组合都被视为保留字 。")])]),s._v(" "),t("h2",{attrs:{id:"_2、-和-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、-和-的区别"}},[s._v("#")]),s._v(" 2、& 和 && 的区别")]),s._v(" "),t("blockquote",[t("p",[s._v("&运算符有两种用法：")]),s._v(" "),t("ul",[t("li",[s._v("按位与")]),s._v(" "),t("li",[s._v("逻辑与")])]),s._v(" "),t("p",[t("strong",[s._v("&&运算符是短路与运算")]),s._v("。逻辑与跟短路与的差别是非常 巨大的，虽然二者都要求运算符左右两端的布尔值都是true 整个表达式的值才是 true")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('&&之所以称为短路 运算是因为，如果 左边的表达式的值是 false ，右边的表达式会被直接短路掉，不会进行运算。很多时候 我们可能都需要用 而不是 &&，例如在验证用户登录时判定用户名不是 null 而且不是空字符串，应当写为 username != null &&!username.equals("") equals("")，二者的顺序不能交换，更不能用 运算符，因为第一个条件如果不 成立，根本不能进行字符串的 equals 比较，否则会产生 NullPointerException 异常。\n注意：逻辑或运算符（|）和短路或运算符（||)的差别也是如此。\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"_3、在-java-中-如何跳出当前的多重嵌套循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、在-java-中-如何跳出当前的多重嵌套循环"}},[s._v("#")]),s._v(" 3、在 Java 中，如何跳出当前的多重嵌套循环？")]),s._v(" "),t("blockquote",[t("p",[s._v("使用标签跳出循环，在最外层循环前加一个标记如A ，然后用 break A; 可以跳出多重循环。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("loop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" k "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" k "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" k"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n             "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n                 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v(" loop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n             "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n             "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("其次：")]),s._v(" "),t("ul",[t("li",[s._v("break是跳出当前for循环")]),s._v(" "),t("li",[s._v("continue是跳出当前循环，开始下一循环")])])]),s._v(" "),t("h2",{attrs:{id:"_4、两个对象值相同-x-equals-y-true-但却可有不同的-hashcode-这句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、两个对象值相同-x-equals-y-true-但却可有不同的-hashcode-这句"}},[s._v("#")]),s._v(" 4、两个对象值相同 (x.equals(y) == true) ，但却可有不同的 hashCode 这句")]),s._v(" "),t("p",[s._v("话对不对？")]),s._v(" "),t("blockquote",[t("p",[s._v("不对。如果x.equals(y) == true，则它们的哈希码应当相同")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Java对于 eqauls 方法和 hashCode 方法是这样规定的：\n(1)如果两个对象相同（ equals 方法返回 true ），那么它们的 hashCode 值一定要相同；\n(2)如果两个对象的 hashCode 相同，它们并不一定相同。当然，你未必要按照要求去做，但是如果你违背了上述原则就会发现在使用容器时，相同的对象可以出现在 Set 集合中，同时增加新元素的效率会大大下降（对于使用哈希存储的系统，如果哈希码频繁的冲突将会造成存取性能急剧下降）。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("p",[s._v("首先equals 方法必须满足")]),s._v(" "),t("ul",[t("li",[s._v("自反性（ x.equals(x) 必须返回 true ）")]),s._v(" "),t("li",[s._v("对称性 x.equals(y) 返回 true 时， y.equals(x)也必须返回 true ）")]),s._v(" "),t("li",[s._v("传递性 x .equals( 和 y.equals(z) 都返回 true 时， x.equals(z) 也必须返回 true ）")]),s._v(" "),t("li",[s._v("一致性（当x 和 y 引用的对象信息没有被修改时，多次调用 x.equals(y) 应该得到同样的返回值）")]),s._v(" "),t("li",[s._v("而且对于任何非 null 值的引用 x x.equals(null) 必须返回 false 。")])]),s._v(" "),t("p",[t("strong",[s._v("实现高质量的 equals 方法的诀窍包括")]),s._v("：")]),s._v(" "),t("ol",[t("li",[s._v("使用 操作符检查 参数是否为这个对象的引用")]),s._v(" "),t("li",[s._v("使用 instanceof 操作符检查 参数是否为正确的类型")]),s._v(" "),t("li",[s._v("对于类中的关键属性，检查参数传入对象的属性是否与之相匹配；")]),s._v(" "),t("li",[s._v("编写完 equals 方法后，问自己它是否满足对称性、传递性、一致性；")]),s._v(" "),t("li",[s._v("重写 equals 时总是要重写 hashCode")]),s._v(" "),t("li",[s._v("不要将 equals 方法参数中的 Object 对象替换为其他的类型，在重写时不要忘掉@Override 注解。")])]),s._v(" "),t("h2",{attrs:{id:"_5、是否可以继承-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、是否可以继承-string"}},[s._v("#")]),s._v(" 5、是否可以继承 String")]),s._v(" "),t("blockquote",[t("p",[s._v("不可以。String类是final类，不可以继承。")])]),s._v(" "),t("h2",{attrs:{id:"_6、当一个对象被当作参数传递到一个方法后-此方法可改变这个对象的属性-并可返回变化后的结果-那么这里到底是值传递还是引用传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、当一个对象被当作参数传递到一个方法后-此方法可改变这个对象的属性-并可返回变化后的结果-那么这里到底是值传递还是引用传递"}},[s._v("#")]),s._v(" 6、当一个对象被当作参数传递到一个方法后，此方法可改变这个对象的属性，并可返回变化后的结果，那么这里到底是值传递还是引用传递？")]),s._v(" "),t("blockquote",[t("p",[s._v("是值传递。 "),t("strong",[s._v("Java 语言的方法调用只支持参数的值传递")]),s._v("。当一个对象实例作为一个参数被传递到方法中时，参数的值就是对该对象的引用。对象的属性可以在被调用过程中被改变，但对对象引用的改变是不会影响到调用者的。 C++和 C# 中可以通过传引用或传输出参数来改变传入的参数的值 。")]),s._v(" "),t("p",[s._v("说明： Java 中没有传引用实在是非常的不方便，这一点在 Java 8 中仍然没有得到改进，正是如此在 Java 编写的代码中才会出现大量的 Wrapper 类（将需要通过方法调用修改的引用置于一个 Wrapper 类中，再将 Wrapper 对象传入方法），这样的做法只会让代码变得臃肿，尤其是让从 C 和 C++ 转型为 Java 程序员的开发者无法容忍。")])]),s._v(" "),t("h2",{attrs:{id:"_7、重载-overload-和重写-override-的区别-重载的方法能否根据返回类型进行区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、重载-overload-和重写-override-的区别-重载的方法能否根据返回类型进行区分"}},[s._v("#")]),s._v(" 7、重载(overload)和重写(override)的区别 重载的方法能否根据返回类型进行区分？")]),s._v(" "),t("blockquote",[t("p",[s._v("方法的重载和重写都是"),t("strong",[s._v("实现多态")]),s._v("的方式，区别在于前者实现的是"),t("strong",[s._v("编译时的多态性")]),s._v("，而后者实现的是"),t("strong",[s._v("运行时的多态性")]),s._v("。")]),s._v(" "),t("p",[s._v("重载发生在一个类中，同名的方法如果有不同的参数列表（参数类型不同、参数个数不同或者二者都不同）则视为重载；")]),s._v(" "),t("p",[s._v("重写发生在子类与父类之间，重写要求子类被重写方法与父类被重写方法有相同的返回类型，比父类被重写方法更好访问，不能比父类被重写方法声明更多的异常（里氏代换原则）。")]),s._v(" "),t("p",[s._v("重载对返回类型没有特殊的要求。")])]),s._v(" "),t("p",[t("strong",[s._v("方法重载的规则")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("方法名一致，参数列表中参数的顺序，类型，个数不同。")]),s._v(" "),t("li",[s._v("重载与方法的返回值无关，存在于父类和子类， 同类中。")]),s._v(" "),t("li",[s._v("可以抛出不同的异常，可以有不同修饰符。")])]),s._v(" "),t("p",[t("strong",[s._v("方法重写的规则")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("参数列表必须完全与被重写方法的一致，返回类型必须完全与被重写方法的返回类型一致。")]),s._v(" "),t("li",[s._v("构造方法不能被重写，声明为 final 的方法不能被重写，声明为 static 的方法不能被重写，但是能够被再次声明。")]),s._v(" "),t("li",[s._v("访问权限不能比父类中被重写的方法的访问权限更低。")]),s._v(" "),t("li",[s._v("重写的方法能够抛出任何非强制异常（ UncheckedException ，也叫非运行时异常），无论被重写的方法是否抛出异常。但是，重写的方法不能抛出新的强制性异常，或者比被重写方法声明的更广泛的强制性异 常，反之则可以。")])]),s._v(" "),t("h2",{attrs:{id:"_8、为什么函数不能根据返回类型来区分重载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、为什么函数不能根据返回类型来区分重载"}},[s._v("#")]),s._v(" 8、为什么函数不能根据返回类型来区分重载？")]),s._v(" "),t("blockquote",[t("p",[s._v("因为调用时不能指定类型信息，编译器不知道你要调用哪个函数。")]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findMin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findMin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("当调用 max(1, 2); 时无法确定调用的是哪个，单从这一点上来说，仅返回值类型不同的重载是不应该允许的。")]),s._v(" "),t("p",[t("strong",[s._v("函数的返回值只是作为函数运行之后的一个“状态”，他是保持方法的调用者与被调用者进行通信的关键。并不能作为某个方法的“标识”。")])])]),s._v(" "),t("h2",{attrs:{id:"_9、char-型变量中能不能存储一个中文汉字-为什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、char-型变量中能不能存储一个中文汉字-为什么"}},[s._v("#")]),s._v(" 9、char 型变量中能不能存储一个中文汉字，为什么？")]),s._v(" "),t("blockquote",[t("p",[s._v("char 类型可以存储一个中文汉字，因为 Java 中使用的编码是 Unicode （不选择任何特定的编码，直接使用字符在字符集中的编号，这是统一的唯一方法），一个 char 类型占 2 个字节（ 16 比特），所以放一个中文是没问题的。")])]),s._v(" "),t("p",[t("strong",[s._v("补充")]),s._v("：使用 Unicode 意味着字符在 JVM 内部和外部有不同的表现形式，在 JVM 内部都是 Unicode ，当这个字符被从 JVM 内部转移到外部时（例如存入文件系统中），需要进行编码转换。所以 Java 中有字节流和字符流，以及在字符流和字节流之间进行转换的转换流，如 InputStreamReader 和 OutputStreamReader ，这两个类是字节流和字符流之间的适配器类，承担了编码转换的任务；")]),s._v(" "),t("h2",{attrs:{id:"_10、抽象类-abstract-和接口-interface-有什么异同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、抽象类-abstract-和接口-interface-有什么异同"}},[s._v("#")]),s._v(" 10、抽象类(abstract)和接口(interface) 有什么异同？")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th",[s._v("抽象类")]),s._v(" "),t("th",[s._v("接口")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("不同点")]),s._v(" "),t("td",[s._v("1.抽象类中可以定义构造器"),t("br"),s._v("2.可以有抽象方法和具体方法"),t("br"),s._v("3.接口中的成员全都是 public 的"),t("br"),s._v("4.抽象类中可以定义成员变量"),t("br"),s._v("5.有抽象方法的类必须被声明为抽象类，而抽象类未必要有抽象方法"),t("br"),s._v("6.抽象类中可以包含静态方法"),t("br"),s._v("7.一个类只能继承一个抽象类")]),s._v(" "),t("td",[s._v("1.接口中不能定义构造器"),t("br"),s._v("2.方法全部都是抽象方法"),t("br"),s._v("3.抽象类中的成员可以是 private 、默认、 protected 、 public"),t("br"),s._v("4.接口中定义的成员变量实际上都是常量"),t("br"),s._v("5.接口中不能有静态方法"),t("br"),s._v("6.一个类可以实现多个接口")])])])]),s._v(" "),t("p",[t("strong",[s._v("相同点")]),s._v("：")]),s._v(" "),t("ol",[t("li",[s._v("不能够实例化")]),s._v(" "),t("li",[s._v("可以将抽象类和接口类型作为引用类型")]),s._v(" "),t("li",[s._v("一个类如果继承了某个抽象类或者实现了某个接口都需要对其中的抽象方法全部进行实现，否则该类仍然需要被声明为抽象类")])]),s._v(" "),t("h2",{attrs:{id:"_11、抽象的-abstract-方法是否可同时是静态的-static-是否可同时是本地方法-native-是否可同时被-synchronized"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、抽象的-abstract-方法是否可同时是静态的-static-是否可同时是本地方法-native-是否可同时被-synchronized"}},[s._v("#")]),s._v(" 11、抽象的(abstract) 方法是否可同时是静态的 (static)， 是否可同时是本地方法(native)，是否可同时被 synchronized?")]),s._v(" "),t("blockquote",[t("p",[s._v("都不能。抽象方法需要子类重写，而静态的方法是无法被重写的，因此二者是矛盾的。"),t("code",[s._v("synchronized")]),s._v("和方法的实现细节有关，抽象方法不涉及细节，因此也是互相矛盾的。")])]),s._v(" "),t("h2",{attrs:{id:"_12、阐述静态变量和实例变量的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、阐述静态变量和实例变量的区别"}},[s._v("#")]),s._v(" 12、阐述静态变量和实例变量的区别？")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("静态变量")]),s._v("：是被static修饰的变量，也称为类变量，它属于类，不属于类中的任何一个对象，一个类不管创建多少个对象，静态变量在内存中有且仅有一个拷贝。")]),s._v(" "),t("p",[t("strong",[s._v("实例变量")]),s._v("：必须依存于某一实例，需要先创建对象然后通过对象才能访问到它。静态变量可以实现让多个对象共享内存。")])]),s._v(" "),t("h2",{attrs:{id:"_13、-和-equals-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、-和-equals-的区别"}},[s._v("#")]),s._v(" 13、"),t("code",[s._v("==")]),s._v(" 和 "),t("code",[s._v("equals")]),s._v(" 的区别？")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("equals与 == 的最大区别：一个是方法，一个是运算符")])]),s._v(" "),t("p",[t("strong",[s._v("==")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("如果比较的对象是基本类型，则比较数值是否相等")]),s._v(" "),t("li",[s._v("如果比较的对象是封装类型，则比较对象的地址值是否相等")])]),s._v(" "),t("p",[t("strong",[s._v("equals")]),s._v("：用来比较方法两个对象的内容是否相等")]),s._v(" "),t("p",[t("strong",[s._v("注")]),s._v("：equals 方法不能用于基本数据类型的变量，如果没有对 equals 方法进行重写，则比较的是引用类型的变量所指向的对象的地址。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这样定义的a和b指向的是字符串常量区变量，地址是一样的，即用equals为true，用==也为true。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xyz"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建了String类型的内容为xyz的s1对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xyz"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建了String类型的内容为xyz的s2对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Boolean")]),s._v(" b1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//比较s1对象和s2对象的内容相等，返回true。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Boolean")]),s._v(" b2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//比较s1和s2两个对象的存储地址是否相等，明显两者分别存储在不同的地址，所以返回：false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"_14、break-和-continue-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、break-和-continue-的区别"}},[s._v("#")]),s._v(" 14、break 和 continue 的区别？")]),s._v(" "),t("blockquote",[t("p",[s._v("break和 continue 都是用来控制循环的 语句。\n"),t("strong",[s._v("break")]),s._v("：用于完全结束一个循环，跳出循环体执行循环后面的语句。\n"),t("strong",[s._v("continue")]),s._v("：用于跳过本次循环，执行下次循环。")])]),s._v(" "),t("h2",{attrs:{id:"_15、string-s-hello-s-s-world-这两行代码执行后-原始的-string-对象中的内容到底变了没有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15、string-s-hello-s-s-world-这两行代码执行后-原始的-string-对象中的内容到底变了没有"}},[s._v("#")]),s._v(' 15、String s = "Hello";s = s + " world!"; 这两行代码执行后，原始的 String 对象中的内容到底变了没有？')]),s._v(" "),t("blockquote",[t("p",[s._v('没有。因为String类是不可变类，它的所有对象都是不可变对象。在这段代码中， s 原先指向一个 String 对象，内容是"Hello"，然后我们对 s 进行了“ 操作，那么 s 所指向的那个对象是否发生了改变呢？答案是没有。这时， s 不指向原来那个对象了，而指向了另一个 String 对象，内容为 "Hello world!"，原来那个对象还是存在内存中。只是s这个引用变量不再指向它了')])])])}),[],!1,null,null,null);a.default=e.exports}}]);