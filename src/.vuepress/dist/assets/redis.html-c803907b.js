const e=JSON.parse('{"key":"v-63ef531e","path":"/interview/distributed/redis.html","title":"Redis 53道面试题","lang":"zh-CN","frontmatter":{"title":"Redis 53道面试题","description":"1、什么是Redis?\\r Redis 是完全开源免费的， 遵守 BSD 协议， 是一个高性能的 key-value 数据库。\\r 特点：\\r - Redis 支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。\\r - Redis 不仅仅支持简单的 key-value 类型的数据， 同时还提供 list， set， zset， ...","head":[["meta",{"property":"og:url","content":"https://javaxiaobear.cn/interview/distributed/redis.html"}],["meta",{"property":"og:site_name","content":"小熊学Java全能学习+面试指南"}],["meta",{"property":"og:title","content":"Redis 53道面试题"}],["meta",{"property":"og:description","content":"1、什么是Redis?\\r Redis 是完全开源免费的， 遵守 BSD 协议， 是一个高性能的 key-value 数据库。\\r 特点：\\r - Redis 支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。\\r - Redis 不仅仅支持简单的 key-value 类型的数据， 同时还提供 list， set， zset， ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-04T01:42:08.000Z"}],["meta",{"property":"article:author","content":"小熊同学"}],["meta",{"property":"article:modified_time","content":"2023-07-04T01:42:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 53道面试题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-04T01:42:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小熊同学\\",\\"url\\":\\"https://javaxiaobear.cn\\"}]}"]]},"headers":[{"level":2,"title":"1、什么是Redis?","slug":"_1、什么是redis","link":"#_1、什么是redis","children":[]},{"level":2,"title":"2、Redis的数据类型？","slug":"_2、redis的数据类型","link":"#_2、redis的数据类型","children":[]},{"level":2,"title":"3、Redis有哪些优缺点？","slug":"_3、redis有哪些优缺点","link":"#_3、redis有哪些优缺点","children":[]},{"level":2,"title":"4、为什么要用 Redis做缓存？","slug":"_4、为什么要用-redis做缓存","link":"#_4、为什么要用-redis做缓存","children":[]},{"level":2,"title":"5、Redis为什么这么快？","slug":"_5、redis为什么这么快","link":"#_5、redis为什么这么快","children":[]},{"level":2,"title":"6、Redis的应用场景","slug":"_6、redis的应用场景","link":"#_6、redis的应用场景","children":[]},{"level":2,"title":"7、什么是持久化？","slug":"_7、什么是持久化","link":"#_7、什么是持久化","children":[]},{"level":2,"title":"8、Redis 的持久化机制是什么？各自的优缺点？","slug":"_8、redis-的持久化机制是什么-各自的优缺点","link":"#_8、redis-的持久化机制是什么-各自的优缺点","children":[{"level":3,"title":"RDB：","slug":"rdb","link":"#rdb","children":[]},{"level":3,"title":"AOF：","slug":"aof","link":"#aof","children":[]}]},{"level":2,"title":"9、RDB和AOF到底如何选择？","slug":"_9、rdb和aof到底如何选择","link":"#_9、rdb和aof到底如何选择","children":[]},{"level":2,"title":"10、Redis持久化数据和缓存怎么做扩容？","slug":"_10、redis持久化数据和缓存怎么做扩容","link":"#_10、redis持久化数据和缓存怎么做扩容","children":[]},{"level":2,"title":"11、Redis 过期键的删除策略？","slug":"_11、redis-过期键的删除策略","link":"#_11、redis-过期键的删除策略","children":[]},{"level":2,"title":"12、Redis的内存淘汰策略有哪些？","slug":"_12、redis的内存淘汰策略有哪些","link":"#_12、redis的内存淘汰策略有哪些","children":[]},{"level":2,"title":"13、Redis如何做内存优化？","slug":"_13、redis如何做内存优化","link":"#_13、redis如何做内存优化","children":[]},{"level":2,"title":"14、什么是事务？","slug":"_14、什么是事务","link":"#_14、什么是事务","children":[]},{"level":2,"title":"15、Redis事务的概念","slug":"_15、redis事务的概念","link":"#_15、redis事务的概念","children":[]},{"level":2,"title":"16、Redis事务的三个阶段","slug":"_16、redis事务的三个阶段","link":"#_16、redis事务的三个阶段","children":[]},{"level":2,"title":"17、 Redis事务相关命令","slug":"_17、-redis事务相关命令","link":"#_17、-redis事务相关命令","children":[]},{"level":2,"title":"18、 事务管理（ACID）概述","slug":"_18、-事务管理-acid-概述","link":"#_18、-事务管理-acid-概述","children":[]},{"level":2,"title":"19、Redis事务支持隔离性吗","slug":"_19、redis事务支持隔离性吗","link":"#_19、redis事务支持隔离性吗","children":[]},{"level":2,"title":"20、主从复制了解吗？","slug":"_20、主从复制了解吗","link":"#_20、主从复制了解吗","children":[]},{"level":2,"title":"21、Redis主从有几种常见的拓扑结构？","slug":"_21、redis主从有几种常见的拓扑结构","link":"#_21、redis主从有几种常见的拓扑结构","children":[]},{"level":2,"title":"22、Redis的主从复制原理了解吗？","slug":"_22、redis的主从复制原理了解吗","link":"#_22、redis的主从复制原理了解吗","children":[]},{"level":2,"title":"23、主从数据同步的方式？","slug":"_23、主从数据同步的方式","link":"#_23、主从数据同步的方式","children":[]},{"level":2,"title":"全量复制","slug":"全量复制","link":"#全量复制","children":[]},{"level":2,"title":"部分复制","slug":"部分复制","link":"#部分复制","children":[]},{"level":2,"title":"24、主从复制存在哪些问题呢？","slug":"_24、主从复制存在哪些问题呢","link":"#_24、主从复制存在哪些问题呢","children":[]},{"level":2,"title":"25、Redis为什么早期选择单线程？","slug":"_25、redis为什么早期选择单线程","link":"#_25、redis为什么早期选择单线程","children":[]},{"level":2,"title":"26、Redis6.0使用多线程是怎么回事?","slug":"_26、redis6-0使用多线程是怎么回事","link":"#_26、redis6-0使用多线程是怎么回事","children":[]},{"level":2,"title":"27、Redis Sentinel（哨兵）了解吗","slug":"_27、redis-sentinel-哨兵-了解吗","link":"#_27、redis-sentinel-哨兵-了解吗","children":[]},{"level":2,"title":"28、Redis Sentinel（哨兵）实现原理知道吗？","slug":"_28、redis-sentinel-哨兵-实现原理知道吗","link":"#_28、redis-sentinel-哨兵-实现原理知道吗","children":[]},{"level":2,"title":"定时监控","slug":"定时监控","link":"#定时监控","children":[]},{"level":2,"title":"29、领导者Sentinel节点选举了解吗？","slug":"_29、领导者sentinel节点选举了解吗","link":"#_29、领导者sentinel节点选举了解吗","children":[]},{"level":2,"title":"30、新的主节点是怎样被挑选出来的？","slug":"_30、新的主节点是怎样被挑选出来的","link":"#_30、新的主节点是怎样被挑选出来的","children":[]},{"level":2,"title":"31、Redis 集群了解吗？","slug":"_31、redis-集群了解吗","link":"#_31、redis-集群了解吗","children":[]},{"level":2,"title":"32、集群中数据如何分区？","slug":"_32、集群中数据如何分区","link":"#_32、集群中数据如何分区","children":[{"level":3,"title":"1、哈希取余分区","slug":"_1、哈希取余分区","link":"#_1、哈希取余分区","children":[]},{"level":3,"title":"2、一致性哈希算法分区","slug":"_2、一致性哈希算法分区","link":"#_2、一致性哈希算法分区","children":[]},{"level":3,"title":"3、哈希槽分区","slug":"_3、哈希槽分区","link":"#_3、哈希槽分区","children":[]}]},{"level":2,"title":"33、什么是缓存击穿、缓存穿透、缓存雪崩？","slug":"_33、什么是缓存击穿、缓存穿透、缓存雪崩","link":"#_33、什么是缓存击穿、缓存穿透、缓存雪崩","children":[{"level":3,"title":"缓存击穿解决方案","slug":"缓存击穿解决方案","link":"#缓存击穿解决方案","children":[]},{"level":3,"title":"缓存穿透解决方案","slug":"缓存穿透解决方案","link":"#缓存穿透解决方案","children":[]},{"level":3,"title":"缓存雪崩解决方案","slug":"缓存雪崩解决方案","link":"#缓存雪崩解决方案","children":[]}]},{"level":2,"title":"34、如何保证缓存和数据库数据的⼀致性？","slug":"_34、如何保证缓存和数据库数据的一致性","link":"#_34、如何保证缓存和数据库数据的一致性","children":[{"level":3,"title":"选择合适的缓存更新策略","slug":"选择合适的缓存更新策略","link":"#选择合适的缓存更新策略","children":[]},{"level":3,"title":"缓存不一致处理","slug":"缓存不一致处理","link":"#缓存不一致处理","children":[]},{"level":3,"title":"消息队列保证key被删除","slug":"消息队列保证key被删除","link":"#消息队列保证key被删除","children":[]},{"level":3,"title":"数据库订阅+消息队列保证key被删除","slug":"数据库订阅-消息队列保证key被删除","link":"#数据库订阅-消息队列保证key被删除","children":[]},{"level":3,"title":"延时双删防止脏数据","slug":"延时双删防止脏数据","link":"#延时双删防止脏数据","children":[]},{"level":3,"title":"设置缓存过期时间兜底","slug":"设置缓存过期时间兜底","link":"#设置缓存过期时间兜底","children":[]}]},{"level":2,"title":"35、缓存预热怎么做呢？","slug":"_35、缓存预热怎么做呢","link":"#_35、缓存预热怎么做呢","children":[]},{"level":2,"title":"36、热点key重建？问题？解决？","slug":"_36、热点key重建-问题-解决","link":"#_36、热点key重建-问题-解决","children":[]},{"level":2,"title":"37、Redis报内存不足怎么处理？","slug":"_37、redis报内存不足怎么处理","link":"#_37、redis报内存不足怎么处理","children":[]},{"level":2,"title":"38、大key问题了解吗？","slug":"_38、大key问题了解吗","link":"#_38、大key问题了解吗","children":[]},{"level":2,"title":"39、Redis常见性能问题和解决方案？","slug":"_39、redis常见性能问题和解决方案","link":"#_39、redis常见性能问题和解决方案","children":[]},{"level":2,"title":"40、使用Redis 如何实现异步队列？","slug":"_40、使用redis-如何实现异步队列","link":"#_40、使用redis-如何实现异步队列","children":[]},{"level":2,"title":"41、Redis 如何实现延时队列?","slug":"_41、redis-如何实现延时队列","link":"#_41、redis-如何实现延时队列","children":[]},{"level":2,"title":"42、Redis和Lua脚本的使用了解吗？","slug":"_42、redis和lua脚本的使用了解吗","link":"#_42、redis和lua脚本的使用了解吗","children":[]},{"level":2,"title":"43、Redis回收进程如何工作的？","slug":"_43、redis回收进程如何工作的","link":"#_43、redis回收进程如何工作的","children":[]},{"level":2,"title":"44、假如Redis里面有1亿个key，其中有10w个key是以某个固定的已知的前缀开头的，如果将它们全部找出来？","slug":"_44、假如redis里面有1亿个key-其中有10w个key是以某个固定的已知的前缀开头的-如果将它们全部找出来","link":"#_44、假如redis里面有1亿个key-其中有10w个key是以某个固定的已知的前缀开头的-如果将它们全部找出来","children":[]},{"level":2,"title":"45、Redis 底层的数据结构了解吗？","slug":"_45、redis-底层的数据结构了解吗","link":"#_45、redis-底层的数据结构了解吗","children":[]},{"level":2,"title":"46、Redis的管道命令你是怎么理解的？","slug":"_46、redis的管道命令你是怎么理解的","link":"#_46、redis的管道命令你是怎么理解的","children":[]},{"level":2,"title":"47、为什么Redis集群的最大槽树是16384？","slug":"_47、为什么redis集群的最大槽树是16384","link":"#_47、为什么redis集群的最大槽树是16384","children":[]},{"level":2,"title":"48、 请谈谈实现一个Redis分布式锁要达到哪些要求或条件?","slug":"_48、-请谈谈实现一个redis分布式锁要达到哪些要求或条件","link":"#_48、-请谈谈实现一个redis分布式锁要达到哪些要求或条件","children":[]},{"level":2,"title":"49、手写Redis分布式锁的思路和步骤？","slug":"_49、手写redis分布式锁的思路和步骤","link":"#_49、手写redis分布式锁的思路和步骤","children":[]},{"level":2,"title":"50、Redis分布式锁如何续期？watchDog看门狗是什么意思？","slug":"_50、redis分布式锁如何续期-watchdog看门狗是什么意思","link":"#_50、redis分布式锁如何续期-watchdog看门狗是什么意思","children":[]},{"level":2,"title":"51、Redis的源码读过吗，请说一下RedisObject对象？","slug":"_51、redis的源码读过吗-请说一下redisobject对象","link":"#_51、redis的源码读过吗-请说一下redisobject对象","children":[]},{"level":2,"title":"52、Redis跳表你了解吗？","slug":"_52、redis跳表你了解吗","link":"#_52、redis跳表你了解吗","children":[]},{"level":2,"title":"53、Redis单线程如何处理并发客户端连接，为什么单线程害这么快？","slug":"_53、redis单线程如何处理并发客户端连接-为什么单线程害这么快","link":"#_53、redis单线程如何处理并发客户端连接-为什么单线程害这么快","children":[]}],"git":{"createdTime":1686303414000,"updatedTime":1688434928000,"contributors":[{"name":"2861184805@qq.com","email":"2861184805@qq.com","commits":1},{"name":"javaxiaobear","email":"2861184805@qq.com","commits":1}]},"readingTime":{"minutes":68.1,"words":20429},"filePathRelative":"interview/distributed/redis.md","localizedDate":"2023年6月9日","copyright":{"author":"小熊学Java"},"autoDesc":true}');export{e as data};
