const l=JSON.parse('{"key":"v-629d9a00","path":"/study-tutorial/basic/features/java8.html","title":"Java 8新特性","lang":"zh-CN","frontmatter":{"title":"Java 8新特性","icon":"code","description":"1、Lambda表达式 1、初体验\\r 目标：了解使用匿名内部类存在的问题，体验Lambda\\r 匿名内部类存在的问题：当需要启动一个线程去完成任务时，通常会通过Runnable 接口来定义任务内容，并使用Thread 类来启动该线程。 1、传统写法 ```java public class LambdaIntro01 { public static vo...","head":[["meta",{"property":"og:url","content":"https://javaxiaobear.cn/study-tutorial/basic/features/java8.html"}],["meta",{"property":"og:site_name","content":"小熊学Java 全能学习+面试指南"}],["meta",{"property":"og:title","content":"Java 8新特性"}],["meta",{"property":"og:description","content":"1、Lambda表达式 1、初体验\\r 目标：了解使用匿名内部类存在的问题，体验Lambda\\r 匿名内部类存在的问题：当需要启动一个线程去完成任务时，通常会通过Runnable 接口来定义任务内容，并使用Thread 类来启动该线程。 1、传统写法 ```java public class LambdaIntro01 { public static vo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T11:19:08.000Z"}],["meta",{"property":"article:author","content":"小熊同学"}],["meta",{"property":"article:modified_time","content":"2023-09-21T11:19:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 8新特性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T11:19:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小熊同学\\",\\"url\\":\\"https://javaxiaobear.cn\\"}]}"]]},"headers":[{"level":2,"title":"1、Lambda表达式","slug":"_1、lambda表达式","link":"#_1、lambda表达式","children":[{"level":3,"title":"1、初体验","slug":"_1、初体验","link":"#_1、初体验","children":[]},{"level":3,"title":"2、Lambda的标准格式","slug":"_2、lambda的标准格式","link":"#_2、lambda的标准格式","children":[]},{"level":3,"title":"3、省略格式","slug":"_3、省略格式","link":"#_3、省略格式","children":[]},{"level":3,"title":"4、前提条件","slug":"_4、前提条件","link":"#_4、前提条件","children":[]},{"level":3,"title":"5、函数式接口","slug":"_5、函数式接口","link":"#_5、函数式接口","children":[]},{"level":3,"title":"6、Lambda和匿名内部类对比","slug":"_6、lambda和匿名内部类对比","link":"#_6、lambda和匿名内部类对比","children":[]}]},{"level":2,"title":"2、接口静态方法","slug":"_2、接口静态方法","link":"#_2、接口静态方法","children":[{"level":3,"title":"1、接口静态方法的使用","slug":"_1、接口静态方法的使用","link":"#_1、接口静态方法的使用","children":[]},{"level":3,"title":"2、接口默认方法和静态方法的区别","slug":"_2、接口默认方法和静态方法的区别","link":"#_2、接口默认方法和静态方法的区别","children":[]},{"level":3,"title":"3、总结","slug":"_3、总结","link":"#_3、总结","children":[]}]},{"level":2,"title":"3、内置函数式接口","slug":"_3、内置函数式接口","link":"#_3、内置函数式接口","children":[{"level":3,"title":"1、函数式接口的由来","slug":"_1、函数式接口的由来","link":"#_1、函数式接口的由来","children":[]},{"level":3,"title":"2、常用内置函数式接口","slug":"_2、常用内置函数式接口","link":"#_2、常用内置函数式接口","children":[]}]},{"level":2,"title":"4、引用","slug":"_4、引用","link":"#_4、引用","children":[{"level":3,"title":"1、方法引用","slug":"_1、方法引用","link":"#_1、方法引用","children":[]},{"level":3,"title":"2、常见的引用方式","slug":"_2、常见的引用方式","link":"#_2、常见的引用方式","children":[]},{"level":3,"title":"3、对象::方法名","slug":"_3、对象-方法名","link":"#_3、对象-方法名","children":[]},{"level":3,"title":"4、类名::引用静态方法","slug":"_4、类名-引用静态方法","link":"#_4、类名-引用静态方法","children":[]},{"level":3,"title":"5、类名::引用实例方法","slug":"_5、类名-引用实例方法","link":"#_5、类名-引用实例方法","children":[]},{"level":3,"title":"6、类名::new引用构造器","slug":"_6、类名-new引用构造器","link":"#_6、类名-new引用构造器","children":[]},{"level":3,"title":"7、数组::new 引用数组构造器","slug":"_7、数组-new-引用数组构造器","link":"#_7、数组-new-引用数组构造器","children":[]}]},{"level":2,"title":"5、Stream流","slug":"_5、stream流","link":"#_5、stream流","children":[{"level":3,"title":"1、思想概述","slug":"_1、思想概述","link":"#_1、思想概述","children":[]},{"level":3,"title":"2、获取流的两种方式","slug":"_2、获取流的两种方式","link":"#_2、获取流的两种方式","children":[]},{"level":3,"title":"3、Stream常用方法和注意事项","slug":"_3、stream常用方法和注意事项","link":"#_3、stream常用方法和注意事项","children":[]},{"level":3,"title":"4、收集流中的结果","slug":"_4、收集流中的结果","link":"#_4、收集流中的结果","children":[]}]},{"level":2,"title":"6、并行流","slug":"_6、并行流","link":"#_6、并行流","children":[{"level":3,"title":"1、初体验","slug":"_1、初体验-1","link":"#_1、初体验-1","children":[]},{"level":3,"title":"2、parallelStream线程安全问题","slug":"_2、parallelstream线程安全问题","link":"#_2、parallelstream线程安全问题","children":[]},{"level":3,"title":"3、parallelStream背后的技术","slug":"_3、parallelstream背后的技术","link":"#_3、parallelstream背后的技术","children":[]}]},{"level":2,"title":"7、Optional类","slug":"_7、optional类","link":"#_7、optional类","children":[{"level":3,"title":"1、初体验","slug":"_1、初体验-2","link":"#_1、初体验-2","children":[]},{"level":3,"title":"2、Optional的基本使用","slug":"_2、optional的基本使用","link":"#_2、optional的基本使用","children":[]},{"level":3,"title":"3、Optional的高级使用","slug":"_3、optional的高级使用","link":"#_3、optional的高级使用","children":[]}]},{"level":2,"title":"8、日期和时间","slug":"_8、日期和时间","link":"#_8、日期和时间","children":[{"level":3,"title":"1、旧版日期时间API存在的问题","slug":"_1、旧版日期时间api存在的问题","link":"#_1、旧版日期时间api存在的问题","children":[]},{"level":3,"title":"2、新版的日期和时间API","slug":"_2、新版的日期和时间api","link":"#_2、新版的日期和时间api","children":[]},{"level":3,"title":"3、日期和时间类","slug":"_3、日期和时间类","link":"#_3、日期和时间类","children":[]},{"level":3,"title":"4、时间格式化与解析","slug":"_4、时间格式化与解析","link":"#_4、时间格式化与解析","children":[]},{"level":3,"title":"5、Instant 类","slug":"_5、instant-类","link":"#_5、instant-类","children":[]},{"level":3,"title":"6、计算日期时间差类","slug":"_6、计算日期时间差类","link":"#_6、计算日期时间差类","children":[]},{"level":3,"title":"7、时间校正器","slug":"_7、时间校正器","link":"#_7、时间校正器","children":[]},{"level":3,"title":"8、设置日期时间的时区","slug":"_8、设置日期时间的时区","link":"#_8、设置日期时间的时区","children":[]}]}],"git":{"createdTime":1695295148000,"updatedTime":1695295148000,"contributors":[{"name":"javaxiaobear","email":"2861184805@qq.com","commits":1}]},"readingTime":{"minutes":37.95,"words":11384},"filePathRelative":"study-tutorial/basic/features/java8.md","localizedDate":"2023年9月21日","copyright":{"author":"小熊学Java"},"autoDesc":true,"excerpt":""}');export{l as data};
