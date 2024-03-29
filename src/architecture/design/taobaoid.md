---
title: 淘宝数据库，主键如何设计的？
---

聊一个实际问题：淘宝的数据库，主键是如何设计的？

某些错的离谱的答案还在网上年复一年的流传着，甚至还成为了所谓的MySQL军规。其中，一个最明显的错误就是关于MySQL的主键设计。

大部分人的回答如此自信：用8字节的 BIGINT 做主键，而不要用INT。 错 ！

这样的回答，只站在了数据库这一层，而没有 从业务的角度 思考主键。主键就是一个自增ID吗？站在2022年的新年档口，用自增做主键，架构设计上可能`连及格都拿不到` 。

## 1、自增ID的问题

自增ID做主键，简单易懂，几乎所有数据库都支持自增类型，只是实现上各自有所不同而已。自增ID除了简单，其他都是缺点，总体来看存在以下几方面的问题：

**1.** **可靠性不高**

存在自增ID回溯的问题，这个问题直到最新版本的MySQL 8.0才修复。

**2.** **安全性不高**

对外暴露的接口可以非常容易猜测对应的信息。比如：/User/1/这样的接口，可以非常容易猜测用户ID的值为多少，总用户数量有多少，也可以非常容易地通过接口进行数据的爬取。

**3.** **性能差**

自增ID的性能较差，需要在数据库服务器端生成。

**4.** **交互多**

业务还需要额外执行一次类似 last_insert_id() 的函数才能知道刚才插入的自增值，这需要多一次的网络交互。在海量并发的系统中，多1条SQL，就多一次性能上的开销。

**5.** **局部唯一性**

最重要的一点，自增ID是局部唯一，只在当前数据库实例中唯一，而不是全局唯一，在任意服务器间都是唯一的。对于目前分布式系统来说，这简直就是噩梦。

## 2、 业务字段做主键

为了能够唯一地标识一个会员的信息，需要为 会员信息表 设置一个主键。那么，怎么为这个表设置主键，才能达到我们理想的目标呢？ 这里我们考虑业务字段做主键。表数据如下：

![image-20230705100106124](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230705100106124.png)

在这个表里，哪个字段比较合适呢？

1. **选择卡号（cardno）**

会员卡号（cardno）看起来比较合适，因为会员卡号不能为空，而且有唯一性，可以用来 标识一条会员记录。

```sql
mysql> CREATE TABLE membermaster
-> (
-> cardno CHAR(8) PRIMARY KEY, -- 会员卡号为主键
-> membername varchar(32),
-> memberphone varchar(11),
-> memberpid TEXT,
-> memberaddress TEXT,
-> sex char(1),
-> birthday DATETIME
-> );
Query OK, 0 rows affected (0.02 sec)
```

不同的会员卡号对应不同的会员，字段“cardno”唯一地标识某一个会员。如果都是这样，会员卡号与会员一一对应，系统是可以正常运行的。

但实际情况是， 会员卡号可能存在重复使用 的情况。比如，张三因为工作变动搬离了原来的地址，不再到商家的门店消费了 （退还了会员卡），于是张三就不再是这个商家门店的会员了。但是，商家不想让这个会 员卡空着，就把卡号是“10000001”的会员卡发给了王五。

从系统设计的角度看，这个变化只是修改了会员信息表中的卡号是“10000001”这个会员 信息，并不会影响到数据一致性。也就是说，修改会员卡号是“10000001”的会员信息， 系统的各个模块，都会获取到修改后的会员信息，不会出现“有的模块获取到修改之前的会员信息，有的模块获取到修改后的会员信息，而导致系统内部数据不一致”的情况。因此，从 信息系统层面 上看是没问题的。

但是从使用 系统的业务层面 来看，就有很大的问题 了，会对商家造成影响。

比如，我们有一个销售流水表（trans），记录了所有的销售流水明细。2020 年 12 月 01 日，张三在门店购买了一本书，消费了 89 元。那么，系统中就有了张三买书的流水记录，如下所示：

![image-20230705100408722](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230705100408722.png)

接着，我们查询一下 2020 年 12 月 01 日的会员销售记录：

```sql
mysql> SELECT b.membername,c.goodsname,a.quantity,a.salesvalue,a.transdate
-> FROM demo.trans AS a
-> JOIN demo.membermaster AS b
-> JOIN demo.goodsmaster AS c
-> ON (a.cardno = b.cardno AND a.itemnumber=c.itemnumber);
+------------+-----------+----------+------------+---------------------+
| membername | goodsname | quantity | salesvalue | transdate |
+------------+-----------+----------+------------+---------------------+
| 张三 | 书 | 1.000 | 89.00 | 2020-12-01 00:00:00 |
+------------+-----------+----------+------------+---------------------+
1 row in set (0.00 sec)
```

如果会员卡“10000001”又发给了王五，我们会更改会员信息表。导致查询时：

```sql
mysql> SELECT b.membername,c.goodsname,a.quantity,a.salesvalue,a.transdate
-> FROM demo.trans AS a
-> JOIN demo.membermaster AS b
-> JOIN demo.goodsmaster AS c
-> ON (a.cardno = b.cardno AND a.itemnumber=c.itemnumber);
+------------+-----------+----------+------------+---------------------+
| membername | goodsname | quantity | salesvalue | transdate |
+------------+-----------+----------+------------+---------------------+
| 王五 | 书 | 1.000 | 89.00 | 2020-12-01 00:00:00 |
+------------+-----------+----------+------------+---------------------+
1 row in set (0.01 sec)
```

这次得到的结果是：王五在 2020 年 12 月 01 日，买了一本书，消费 89 元。显然是错误的！

==结论：千万不能把会员卡号当做主键。==



2. 选择会员电话 或 身份证号

- 会员电话可以做主键吗？不行的。在实际操作中，手机号也存在 被运营商收回 ，重新发给别人用的情况！

- 那身份证号行不行呢？好像可以。因为身份证决不会重复，身份证号与一个人存在一一对 应的关系。可问题是，身份证号属于`个人隐私` ，顾客不一定愿意给你。要是强制要求会员必须登记身份证号，会把很多客人赶跑的。其实，客户电话也有这个问题，这也是我们在设计会员信息表的时候，允许身份证号和电话都为空的原因。

**所以，建议尽量不要用跟业务有关的字段做主键。毕竟，作为项目设计的技术人员，我们谁也无法预测在项目的整个生命周期中，哪个业务字段会因为项目的业务需求而有重复，或者重用之类的情况出现**

经验：刚开始使用 MySQL 时，很多人都很容易犯的错误是喜欢用业务字段做主键，想当然地认为了解业务需求，但实际情况往往出乎意料，而更改主键设置的成本非常高。



## 3、淘宝的主键设计

在淘宝的电商业务中，订单服务是一个核心业务。请问， 订单表的主键 淘宝是如何设计的呢？是自增ID吗？打开淘宝，看一下订单信息：

![image-20230705100854022](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230705100854022.png)

从上图可以发现，订单号不是自增ID！我们详细看下上述4个订单号：

```
1550672064762308113
1481195847180308113
1431156171142308113
1431146631521308113
```

订单号是19位的长度，且订单的最后5位都是一样的，都是08113。且订单号的前面14位部分是单调递增的，大胆猜测，淘宝的订单ID设计应该是：`订单ID = 时间 + 去重字段 + 用户ID后6位尾号`，这样的设计能做到全局唯一，且对分布式系统查询及其友好。

## 4、推荐主键设计

非核心业务 ：对应表的主键自增ID，如告警、日志、监控等信息。

核心业务 ：**主键设计至少应该是全局唯一且是单调递增**。全局唯一保证在各系统之间都是唯一的，单调递增是希望插入时不影响数据库性能。

这里推荐最简单的一种主键设计：UUID。

### 1、UUID的特点：

全局唯一，占用36字节，数据无序，插入性能差。

### 2、认识UUID：

为什么UUID是全局唯一的？

为什么UUID占用36个字节？

为什么UUID是无序的？

MySQL数据库的UUID组成如下所示：

`UUID = 时间+UUID版本（16字节）- 时钟序列（4字节） - MAC地址（12字节）`

我们以UUID值`e0ea12d4-6473-11eb-943c-00155dbaa39d`举例：

![image-20230705101139723](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230705101139723.png)

**为什么UUID是全局唯一的？**

在UUID中时间部分占用60位，存储的类似TIMESTAMP的时间戳，但表示的是从1582-10-15 00：00：00.00到现在的100ns的计数。可以看到UUID存储的时间精度比TIMESTAMPE更高，时间维度发生重复的概率降低到1/100ns。时钟序列是为了避免时钟被回拨导致产生时间重复的可能性。MAC地址用于全局唯一。

**为什么UUID占用36个字节？**

UUID根据字符串进行存储，设计时还带有无用"-"字符串，因此总共需要36个字节。

**为什么UUID是随机无序的呢？**

因为UUID的设计中，将时间低位放在最前面，而这部分的数据是一直在变化的，并且是无序。

### 3、改造UUID

若将时间高低位互换，则时间就是单调递增的了，也就变得单调递增了。MySQL 8.0可以更换时间低位和时间高位的存储方式，这样UUID就是有序的UUID了。

MySQL 8.0还解决了UUID存在的空间占用的问题，除去了UUID字符串中无意义的"-"字符串，并且将字符串用二进制类型保存，这样存储空间降低为了16字节。可以通过MySQL8.0提供的uuid_to_bin函数实现上述功能，同样的，MySQL也提供了bin_to_uuid函数进行转化：

```sql
SET @uuid = UUID();
SELECT @uuid,uuid_to_bin(@uuid),uuid_to_bin(@uuid,TRUE);
```

![image-20230705101252877](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230705101252877.png)

通过函数uuid_to_bin(@uuid,true)将UUID转化为有序 UUID 了。全局唯一 + 单调递增，这不就是我们想要的主键！



### 4、有序UUID性能测试

16字节的有序UUID，相比之前8字节的自增ID，性能和存储空间对比究竟如何呢？

我们来做一个测试，插入1亿条数据，每条数据占用500字节，含有3个二级索引，最终的结果如下所示：

![image-20230705101427290](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230705101427290.png)

从上图可以看到插入1亿条数据有序UUID是最快的，而且在实际业务使用中有序UUID在 业务端就可以生成 。还可以进一步减少SQL的交互次数。

另外，虽然有序UUID相比自增ID多了8个字节，但实际只增大了3G的存储空间，还可以接受。

在当今的互联网环境中，非常不推荐自增ID作为主键的数据库设计。更推荐类似有序UUID的全局唯一的实现。

另外在真实的业务系统中，主键还可以加入业务和系统属性，如用户的尾号，机房的信息等。这样的主键设计就更为考验架构师的水平了。

### 5、如果不是MySQL8.0 肿么办？

手动赋值字段做主键！

比如，设计各个分店的会员表的主键，因为如果每台机器各自产生的数据需要合并，就可能会出现主键重复的问题。

可以在总部 MySQL 数据库中，有一个管理信息表，在这个表中添加一个字段，专门用来记录当前会员编号的最大值。

门店在添加会员的时候，先到总部 MySQL 数据库中获取这个最大值，在这个基础上加 1，然后用这个值作为新会员的“id”，同时，更新总部 MySQL 数据库管理信息表中的当 前会员编号的最大值。

这样一来，各个门店添加会员的时候，都对同一个总部 MySQL 数据库中的数据表字段进 行操作，就解决了各门店添加会员时会员编号冲突的问题。



### 6、其他主键设计

之前我发布了一篇分布式ID的解决方案的文章，更多设计可参考：

- https://mp.weixin.qq.com/s/znQy21thOMq7UVcV4PMoiA
- https://www.javaxiaobear.cn/architecture/distributed/distributedId.html