---
title: 1、Integer缓存问题引发的分析

---
## 1、引言

阿里巴巴Java开发手册在第一章节，编程规约中OOP规约的第7条提到：

> **【强制】**所有整型包装类对象之间值的比较，全部使用equals方法比较。 说明：对于Integer var = ? 在`-128至127`之间的赋值，Integer对象是在 IntegerCache.cache产生，会复用已有对象，这个区间内的Integer值可以直接使用==进行判断，但是这个区间之外的所有数据，都会在堆上产生，并不会复用已有对象，这是一个大坑，推荐使用equals方法进行判断。

这条建议非常值得大家关注， 而且该问题在 Java 面试中十分常见，看到这条建议，大家是否有以下疑问：

1. 如何知道对于Integer var = ? 会缓存`-128至127`之间的赋值？
2. 为什么会缓存这个范围的值，而不是其他呢？

## 2、分析

我们先看下面测试代码：

```java
public class IntegerTest {

    public static void main(String[] args) {
        Integer a = 99, b = 99, c = 188, d = 188;
        System.out.println(a == b);
        System.out.println(c == d);
    }
}
```

这个结果应该一眼就可以看出来，分别是`true`、`false`

为什么是这样的结果呢？

> 相信很多人都知道，Integer的值范围为-128到127，超过就会创建一个新的Integer对象，其实这里的值范围在jdk源码中是指缓存的值范围

那么为什么会缓存这一段区间的数值？缓存的区间可以修改吗？其它的包装类型有没有类似缓存？

### 1、源码分析

我们知道， `Integer var = ? `形式声明变量，会通过 `java.lang.Integer#valueOf(int) `来构造 Integer 对象。

```java
/**
      * 返回表示指定的 {@code Integer} 实例
      * {@code int} 值。 如果一个新的 {@code Integer} 实例不是
      * 必需，通常应优先使用此方法
      * 构造函数{@link #Integer(int)}，因为这个方法很可能
      * 产生明显更好的空间和时间性能
      *缓存经常请求的值。
      *
      * 此方法将始终缓存 -128 到 127 范围内的值，
      * 包括在内，并且可能缓存此范围之外的其他值。
      *
      * @param i 一个 {@code int} 值。
      * @return 一个代表 {@code i} 的 {@code Integer} 实例。
      * @since 1.5
      */
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

通过源码可以看出，如果用 Ineger.valueOf(int) 来创建整数对象，参数大于等于整数缓存的最小值（ IntegerCache.low ）并小于等于整数缓存的最大值（ IntegerCache.high）, 会直接从缓存数组 ( java.lang.Integer.IntegerCache#cache ) 中提取整数对象；否则会 new 一个整数对象。

#### 1、为什么会缓存这一段区间的整数对象呢？

> 通过注释我们可以得知：如果不要求必须新建一个整型对象，缓存最常用的值（提前构造缓存范围内的整型对象），会更省空间，速度也更快。

这给我们一个非常重要的启发：`如果想减少内存占用，提高程序运行的效率，可以将常用的对象提前缓存起来，需要时直接从缓存中提取`。

#### 2、下一个问题：缓存的区间可以修改吗？

上述的源码看不出来，接着划到IntegerCache静态类源码的部分

```java
/**
      *缓存以支持自动装箱的对象标识语义之间的值
      * JLS 要求的 -128 和 127（含）。
      *
      * 缓存在第一次使用时初始化。 缓存的大小
      * 可以由 {@code -XX:AutoBoxCacheMax=<size>} 选项控制。
      * VM初始化时，java.lang.Integer.IntegerCache.high属性
      * 可以设置并保存在私有系统属性中
      * sun.misc.VM 类。
      */    
private static class IntegerCache {
        //最小的值
        static final int low = -128;
        static final int high;
        static final Integer cache[];

        static {
            // high value may be configured by property
            int h = 127;
            //缓存的最大值是可以通过虚拟机参数 -XX:AutoBoxCacheMax=<size>} 或 -Djava.lang.Integer.IntegerCache.high=<value> 来设置的
            String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
            if (integerCacheHighPropValue != null) {
                try {
                    int i = parseInt(integerCacheHighPropValue);
                    i = Math.max(i, 127);
                    // Maximum array size is Integer.MAX_VALUE  MAX_VALUE = 0x7fffffff;
                    h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                } catch( NumberFormatException nfe) {
                    // If the property cannot be parsed into an int, ignore it.
                }
            }
            high = h;

            cache = new Integer[(high - low) + 1];
            int j = low;
            for(int k = 0; k < cache.length; k++)
                cache[k] = new Integer(j++);

            // range [-128, 127] must be interned (JLS7 5.1.7)
            assert IntegerCache.high >= 127;
        }

        private IntegerCache() {}
    }
```

从上述源码中可以得知：

- 最小的值是确定的，为`low = -128`
- 最大值并不是固定的
    - 缓存的最大值是可以通过虚拟机参数 -XX:AutoBoxCacheMax=size} 或 -Djava.lang.Integer.IntegerCache.high=value来设置的
    - 当`integerCacheHighPropValue`不为null时，首先会取一个中间值`i = Math.max(i, 127);`然后将中间值与Integer的最大值进行比较，取最小的那个赋值给最大值
- 因此，可以通过虚拟机参数修改Integer的最大值，让缓存的最大值大于160，则最开始的测试代码全为`true`

现在回答我们的问题

> 注释上也解释了，是为了自动装箱时可以复用这些对象 ，这也是 JLS2 的要求。我们可以参考 JLS 的 Boxing Conversion 部分的相关描述。
> if the value p being boxed is an integer literal of type int between -128 and 127 inclusive (§3.10.1), or the
> boolean literal true or false (§3.10.3), or a character literal between '\u0000' and '\u007f' inclusive (§3.10.4),
> then let a and b be the results of any two boxing conversions of p . It is always the case that a == b .
>
> 在 -128 到 127 （含）之间的 int 类型的值，或者 boolean 类型的 true 或 false， 以及范围在’\u0000’和’\u007f’ （含）之间的 char 类型的数值 p， 自动包装成 a 和 b 两个对象时， 可以使用 a == b 判断 a 和 b 的值是否相等。

### 2、反编译

首先编译源代码： `javac IntegerTest.java`

然后需要对代码进行反汇编，执行： javap -c IntegerTest

如果想了解 javap 的用法，直接输入 javap -help 查看用法提示（很多命令行工具都支持 -help 或 --help 给出用法提示）。

![image-20230301101941243](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230301101941243.png)

反编译后，我们得到以下代码：

```c
Compiled from "IntegerTest.java"
public class com.javaxiaobear.oop.IntegerTest {
public com.javaxiaobear.oop.IntegerTest();
Code:
	0: aload_0
	1: invokespecial #1 // Method java/lang/Object."<init>":()V
	4: return
public static void main(java.lang.String[]);
	Code:
		0: bipush 99
		2: invokestatic #2 // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
		5: astore_1
		6: bipush 99
		8: invokestatic #2 // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
		11: astore_2
		12: sipush 188
		15: invokestatic #2 // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
		18: astore_3
		19: sipush 188
		22: invokestatic #2 // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
		25: astore 4
		27: getstatic #3 // Field java/lang/System.out:Ljava/io/PrintStream;
		30: aload_1
		31: aload_2
		32: if_acmpne 39
		35: iconst_1
		36: goto 40
		39: iconst_0
		40: invokevirtual #4 // Method java/io/PrintStream.println:(Z)V
		43: getstatic #3 // Field java/lang/System.out:Ljava/io/PrintStream;
		46: aload_3
		47: aload 4
		49: if_acmpne 56
         52: iconst_1
         53: goto 57
         56: iconst_0
		57: invokevirtual #4 // Method java/io/PrintStream.println:(Z)V
		60: return
}
```

可以明确得 "看到" 这四个 ``Integer var = ? 形式声明的变量的确是通过 java.lang.Integer#valueOf(int) 来构造
Integer` 对象的。

接下来对汇编后的代码进行详细分析，如果看不懂可略过：

根据《Java Virtual Machine Specification : Java SE 8 Edition》3，后缩写为 JVMS , 第 6 章 虚拟机指令集的相关
描述以及《深入理解 Java 虚拟机》4 414-149 页的 附录 B “虚拟机字节码指令表”。 我们对上述指令进行解读：

1. 偏移为 0 的指令为： bipush 99，其含义是将单字节整型常量 99推入操作数栈的栈顶；
2. 偏移为 2 的指令为： invokestatic #2 // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer; 表示调用一个 static 函
   数，即 java.lang.Integer#valueOf(int) ；
3. 偏移为 5 的指令为： astore_1 ，其含义是从操作数栈中弹出对象引用，然后将其存到第 1 个局部变量 Slot 中；
4. 偏移 6 到 25 的指令和上面类似；
5. 偏移为 30 的指令为 aload_1 ，其含义是从第 1 个局部变量 Slot 取出对象引用（即 a），并将其压入栈；
6. 偏移为 31 的指令为 aload_2 ，其含义是从第 2 个局部变量 Slot 取出对象引用（即 b），并将其压入栈；
7. 偏移为 32 的指令为 if_acmpn，该指令为条件跳转指令， if_ 后以 a 开头表示对象的引用比较。
   由于该指令有以下特性：
   if_acmpeq 比较栈两个引用类型数值，相等则跳转
   if_acmpne 比较栈两个引用类型数值，不相等则跳转
8. 由于 Integer 的缓存问题，所以 a 和 b 引用指向同一个地址，因此此条件不成立（成立则跳转到偏移为 39 的指令
   处），执行偏移为 35 的指令。
9. 偏移为 35 的指令: iconst_1 ，其含义为将常量 1 压栈（ Java 虚拟机中 boolean 类型的运算类型为 int ，其中 true
   用 1 表示，详见 2.11.1 数据类型和 Java 虚拟机。
10. 然后执行偏移为 36 的 goto 指令，跳转到偏移为 40 的指令。
11. 偏移为 40 的指令： invokevirtual #4 // Method java/io/PrintStream.println:(Z)V 。
    可知参数描述符为 Z ，返回值描述符为 V 。
12. 根据 4.3.2 字段描述符 ，可知 FieldType 的字符为 Z 表示 boolean 类型， 值为 true 或 false 。
13. 根据 4.3.3 字段描述符 ，可知返回值为 void 。
14. 因此可以知，最终调用了 java.io.PrintStream#println(boolean) 函数打印栈顶常量即 true 。
15. 然后比较执行偏移 43 到 57 之间的指令，比较 c 和 d， 打印 false 。
16. 执行偏移为 60 的指令，即 retrun ，程序结束。

可能看这个有些生疏和抵触，一开始都是这样的，多编译几次看几次，就好了。我们重点不是是分析和研究问题，看懂核心逻辑即可，不要过分纠结于细节。

如果想深入学习 java 反汇编，强烈建议结合官方的 JVMS 或其中文版:《Java 虚拟机规范》这本书进行拓展学习。

如果大家不喜欢命令行的方式进行 Java 的反汇编，这里推荐一个简单易用的可视化工具：classpy ，大家可以自行了解学习。



## 3、Long缓存问题

> 前面我们分析了Integer缓存问题，举一反三，对Long也进行研究，看看二者有何不同

### 1、源码分析

类似的，我们接下来分析 java.lang.Long#valueOf(long) 的源码：

```java
/**
      * 返回代表指定的 {@code Long} 实例
      * {@code long} 值。
      * 如果不需要新的 {@code Long} 实例，则此方法
      * 通常应该优先于构造函数使用
      * {@link #Long(long)}，因为这种方法可能会产生
      * 通过缓存显着提高空间和时间性能
      * 经常要求的值。
      *
      * 请注意，与 {@linkplain Integer#valueOf(int)
      * {@code Integer}类中对应的方法}，这个方法
      * <em>不需要</em>在特定的缓存中缓存值
      * 范围。
      *
      * @param l 长值。
      * @return 代表 {@code l} 的 {@code Long} 实例。
      * @since 1.5
      */
public static Long valueOf(long l) {
    final int offset = 128;
    if (l >= -128 && l <= 127) { // will cache
        return LongCache.cache[(int)l + offset];
    }
    return new Long(l);
}
```

从源码中可以看到，如果long类型的变量值在[-128,127]之间的话，会直接从缓存对象中提取

而且注释同样也提到了：缓存的目的是为了提高性能。

> Note that unlike the {@linkplain Integer#valueOf(int) corresponding method} in the {@code Integer} class, this
> method is not required to cache values within a particular range.
>
> 注意：和 Ineger.valueOf(int) 不同的是，此方法并没有被要求缓存特定范围的值。

这也正是上面源码中缓存范围判断的注释为何用 // will cache 的原因（可以对比一下上面 Integer 的缓存的注释）。

因此我们可知，虽然此处采用了缓存，但应该不是 JLS 的要求。那么 Long 类型的缓存是如何构造的呢？

接着继续往下看，查看缓存数组的构造

```java
private static class LongCache {
    private LongCache(){}

    static final Long cache[] = new Long[-(-128) + 127 + 1];

    static {
        for(int i = 0; i < cache.length; i++)
            cache[i] = new Long(i - 128);
    }
}
```

可以看到，它是在静态代码块中填充缓存数组的

### 2、反编译

```c
public class com.javaxiaobear.oop.LongTest {
  public com.javaxiaobear.oop.LongTest();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: ldc2_w        #7                  // long -128l
       3: invokestatic  #9                  // Method java/lang/Long.valueOf:(J)Ljava/lang/Long;
       6: astore_1
       7: ldc2_w        #7                  // long -128l
      10: invokestatic  #9                  // Method java/lang/Long.valueOf:(J)Ljava/lang/Long;
      13: astore_2
      14: ldc2_w        #15                 // long 1001l
      17: invokestatic  #9                  // Method java/lang/Long.valueOf:(J)Ljava/lang/Long;
      20: astore_3
      21: ldc2_w        #15                 // long 1001l
      24: invokestatic  #9                  // Method java/lang/Long.valueOf:(J)Ljava/lang/Long;
      51: if_acmpne     58
      54: iconst_1
      55: goto          59
      58: iconst_0
      59: invokevirtual #23                 // Method java/io/PrintStream.println:(Z)V
      62: return
}
```

我们从上述代码中发现 Long var = ? 的确是通过 java.lang.Long#valueOf(long) 来构造对象的。



## 4、其他基本类型的缓存

```java
//boolean原生类型自动装箱成Boolean
public static Boolean valueOf(boolean b) {
    return (b ? TRUE : FALSE);
}

//byte原生类型自动装箱成Byte
public static Byte valueOf(byte b) {
    final int offset = 128;
    return ByteCache.cache[(int)b + offset];
}

//byte原生类型自动装箱成Byte
public static Short valueOf(short s) {
    final int offset = 128;
    int sAsInt = s;
    if (sAsInt >= -128 && sAsInt <= 127) { // must cache
        return ShortCache.cache[sAsInt + offset];
    }
    return new Short(s);
}

//char原生类型自动装箱成Character
public static Character valueOf(char c) {
    if (c <= 127) { // must cache
        return CharacterCache.cache[(int)c];
    }
    return new Character(c);
}

//int原生类型自动装箱成Integer
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}

//int原生类型自动装箱成Long
public static Long valueOf(long l) {
    final int offset = 128;
    if (l >= -128 && l <= 127) { // will cache
        return LongCache.cache[(int)l + offset];
    }
    return new Long(l);
}

//double原生类型自动装箱成Double
public static Double valueOf(double d) {
    return new Double(d);
}

//float原生类型自动装箱成Float
public static Float valueOf(float f) {
    return new Float(f);
}
```

从valueOf方法就可以看得出来，除了Boolean、Double和Float没有缓存以外，其余的包装类型都有缓存实现。各个包装类型对应的缓存值范围如下：

| **基本类型** | **大小** | **包装类型** | **缓存范围** | **是否支持自定义缓存范围** |
| ------------ | -------- | ------------ | ------------ | -------------------------- |
| boolean      | 6bit     | Bloolean     | /            | /                          |
| char         | 8bit     | Character    | 0~127        | 否                         |
| byte         | 8bit     | Byte         | -128~127     | 否                         |
| short        | 16bit    | Short        | -128~127     | 否                         |
| int          | 32bit    | Integer      | -128~127     | 支持，通过虚拟机参数设定   |
| long         | 64bit    | Long         | -128~127     | 否                         |
| float        | 32bit    | Float        | /            | /                          |
| double       | 64bit    | Double       | /            | /                          |

## 5、总结

> 我们通过源码分析和反编译进行Integer和Long的缓存分析，其他基本类型的缓存分析结果也一并分析并展示了
>
> **总的来说，缓存的目的：就是为了提高性能，复用这些对象**
>
> 这就跟我们项目中大部分用到缓存的目的是一样的

## 6、参考资料

1. 阿里巴巴与 Java 社区开发者.《 Java 开发手册 1.7.0》崇山版.
2. James Gosling, Bill Joy, Guy Steele, Gilad Bracha, Alex Buckley.《Java Language Specification: Java SE 8Edition》. 2015
3. 周志明.《深入理解 Java 虚拟机》. 机械工业出版社. 2018
