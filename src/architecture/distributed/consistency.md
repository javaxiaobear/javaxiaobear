---
title: 分布式理论和一致性算法
---

## 1、什么是分布式系统

> 分布式系统是一个硬件或软件组成分布在不同的网络计算机上，彼此之间仅仅通过消息传递进行通信和协调的系统


## 2、分布式系统的特征

- 分布性

  > 分布式系统的多台计算机都会在空间上随意分布的，同时，机器的分布情况也会随时变动

- 对等性

  > 分布式系统中的计算机没有主/从之分，既没有控制整个系统的主机，也没有被控制的从机，组成分布式系统的所有计算机节点都是对等的。副本 (Replica)是分布式系统最常见的概念之一，指的是分布式系统对数据和服务提供的一种冗余方式。
  > 在常见的分布式系统中，为了对外提供高可用的服务，我们往往会对数据和服务进行副本处理。数据副本是指在不同的节点上持久化同一份数据，当某一个节点上存储的数据丢失时，可以从副本上读取到该数据，这是解决分布式系统数据丢失问题
  > 最为有效的手段。另一类副本是服务副本，指多个节点提供同样的服务，每个节点都有能力接收来自外部的请求并进行相应的处理

- 并发性

  > 在“问题的提出”部分，我们已经提到过与“更新的并发性”相关的内容。在一个计算机网络中，程序运行过程中的并发性操作是非常常见的行为，例如同一个分布式系统中的多个节点，可能会并发地操作一些共享的资源，诸如数据库或分布式存储等，如何准确并高效地协调分布式并发操作也成为了分布式系统架构与设计中最大的挑战之一。

- 缺乏全局时钟

  > 前面提到，一个典型的分布式系统是由一系列在空间上随意分布的多个进程组成的，具有明显的分布性，这些进程之间通过交换消息来进行相互通信。因此，在分布式系统中，很难定义两个事件究竞谁先谁后，原因就是因为分布式系统缺乏一个全局的时钟序列控制。关于分布式系统的时钟和事件顺序中已经做了非常深刻的讲解.

- 故障总是会发生

  > 组成分布式系统的所有计算机，都有可能发生任何形式的故障。一个被大量工程实践所检验过的黄金定理是:任何在设计阶段考虑到的异常情况，一定会在系统实际运行中发生，并且，在系统实际运行过程中还会遇到很多在设计时未能考虑到的异常故障。所以，除非需求指标允许，在系统设计时不能放过任何异常情况。

## 3、分布式环境的各种问题

- 通信异常

  > 从集中式向分布式演变的过程中，必然引人了网络因素，而由于网络本身的不可靠性、因此也引人了额外的问题。分布式系统需要在各个节点之间进行网络通信，因此每次网络通信都会伴随着网络不可用的风险，网络光纤、路由器或是 DNS等硬件设备或是系统不可用都会导致最终分布式系统无法顺利完成一次网络通信。
  > 另外，即使分布式系统各节点之间的网络通信能够正常进行，其延时也会远大于单机操作。通常我们认为在现代计算机体系结构中，单机内存访问的延时在纳秒数量级(通常是10ns左右)，而正常的一次网络通信的延迟在0.1- 1ms左右(相当于内存访问延时的105~106倍)，如此巨大的延时差别，也会影响消息的收发的过程，因此消息丢失和消息延迟变得非常普遍

- 网络分区

  > 当网络由于发生异常情况，导致分布式系统中部分节点之间的网络延时不断增大，最终导致组成分布式系统的所有节点中，只有部分节点之间能够进行正常通信。而另一些节点则不能我们将这个现象称为网络分区，就是俗称的“脑裂”。当网络分区出现时
  > 分布式系统会出现局部小集群，在极端情况下，这些局部小集群会独立完成原本需要整个分布式系统才能完成的功能，包括对数据的事务处理，这就对分布式一致性提出了非常大的挑战。

- 三态

  > 前面提到，在分布式系统环境下，网络可能存在各种各样的问题；因此分布式系统的每一次请求和响应，存在特有的“三态”概念，即成功、失败与超时。
  > 在传统的单机系统中，应用程序在调用一次函数之后，能够得到一个非常明确的响应，成功或失败；而在分布式系统中，由于网络是不可靠的，虽然在绝大部分情况下，网络通信也能接收到成功或失败的响应，但是当网络出现异常时，就可能出现超时的情况，通常有以下两种情况：
  >
  > - 请求时消息丢失
  > - 响应时消息丢失

- 节点故障

  > 节点故则是分布式环境下另一个比较常见的问题，指的是组成分布式系统的服务器节点出现的宕机或“死”现象。通常根据经验来说，每个节点都有可能会出现故障，并且每天都在发生



## 4、分布式理论

### 1、CAP定理

> CAP理论告诉我们，一个分布式系统不可能同时满足一致性 (C:Consistency)、可用性(A: Availability) 和分区容错性 (P: Partition tolerance) 这三个基本需求，最多只能同时满足其中的两项。

* Consistency 一致性：访问分布式系统中任意节点，总能返回一致的结果
  * Every read receives the most recent write or an error
* Availability 可用性：分布式系统总能向客户端返回响应
  * Every request receives a (non-error) response, without the guarantee that it contains the most recent write
* Partition tolerance 分区容忍：当分布式系统节点间通信发生了消息丢失或消息延迟，仍然允许系统继续运行
  * The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes

CAP 定理：最多三选二，无法兼得，通常在 CP 或者 AP 之间做出选择

**不一致的产生**

1. client 向 Node1 写入新值 v1

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902144323586.png" alt="image-20210902144323586" style="zoom: 67%;" />

2. 写入成功 Node1 更新成 v1

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902144332846.png" alt="image-20210902144332846" style="zoom:67%;" />

3. Node1 在没有将变更同步到 Node2 时，就向客户端返回了应答

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902144346469.png" alt="image-20210902144346469" style="zoom:67%;" />

4. client 发起向 Node2 的读操作

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902144357711.png" alt="image-20210902144357711" style="zoom:67%;" />

5. 返回了旧值 v0（不一致）的结果

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902144405372.png" alt="image-20210902144405372" style="zoom:67%;" />

**保证一致性**

1. client 向 Node1 写入新值 v1

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902144821346.png" alt="image-20210902144821346" style="zoom:67%;" />

2. 写入成功 Node1 更新成 v1，此时不能立刻向 client 返回应答，而是需要将 v1 同步到 Node2

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902144917135.png" alt="image-20210902144917135" style="zoom:67%;" />

3. 同步 v1 成功

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145113734.png" alt="image-20210902145113734" style="zoom:67%;" />

4. 此时才能向 client 返回应答

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145138926.png" alt="image-20210902145138926" style="zoom:67%;" />

5. 如果此时 client 再去访问 Node2，不会出现不一致的情况

**保 CP 失 A**

1. 当发生了网络分区，Node1 与 Node2 已经失去了联系，这时仍想对外提供服务（保 P）

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145433075.png" alt="image-20210902145433075" style="zoom:67%;" />

2. client 向 Node1 写入新值 v1

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145513466.png" alt="image-20210902145513466" style="zoom:67%;" />

3. 写入 Node1 成功，但无法同步至 Node2

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145616905.png" alt="image-20210902145616905" style="zoom:67%;" />

4. 这时为了保证一致性，Node1 不能向 client 返回应答，造成操作挂起无法完成（失去可用性）

**保 AP 失 C**

1. 当发生了网络分区，Node1 与 Node2 已经失去了联系，这时仍想对外提供服务（保 P）

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145433075.png" alt="image-20210902145433075" style="zoom:67%;" />

2. client 向 Node1 写入新值 v1

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145513466.png" alt="image-20210902145513466" style="zoom:67%;" />

3. 写入 Node1 成功，但无法同步至 Node2

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902145616905.png" alt="image-20210902145616905" style="zoom:67%;" />

4. 为了保证可用性，向 client 返回了应答（但牺牲了一致性）

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902150437928.png" alt="image-20210902150437928" style="zoom:67%;" />

**一致性级别**

CP 和 AP 之间需要做权衡，其实根据需求不同，也可以将一致性划分成几个级别，在这些级别里做一个权衡。

* 强一致性：系统写入什么，读出来的也会是什么，但实现起来往往对性能影响较大，例如之前 CP 的例子
  * 例如：火车站售票，有就是有，没有就是没有，不能出现不一致的情况
  * 典型算法：Paxos、Raft、ZAB

* 弱一致性：系统写入成功后，不承诺立刻可以读到写入的值，也不承诺具体多久后数据能达到一致，还可以细分为：
  * 会话一致性，同一个客户端会话中可以保证一致，其它会话不能保证
  * 用户一致性，同一个用户中可以保证一致，其它用户不能保证
  * 例如：网上购物，在商品详情页看到库存量还有好多，下单的瞬间才被提示“库存量不足”，实际上商品详情页展示的库存并不是最新的数据，只是在某个流程上才会做准确的检查
* 最终一致性：是弱一致性的特例，保证在一定时间内，能够达到一个一致的状态
  * 例如：转账，转账完成后，会有一个提示，您的转账会在 24 小时内到账，一般用户也能接受，但最终必须是一致的
  * 典型协议：Gossip



### 2、BASE理论

> BASE是 Basically Available (基本可用)， Soft state (软状态) 和Eventually consistent(最终一致性) 三个短语的简写，是由来自eBay的架构师Dan Pritchet在其文章BASE An Acid Alternative中提出的。
> BASE是对CAP中一致性和可用性权衡的结果，其来源于对大规模互联网系统分布式实践的总结，是基于 CAP定理逐步演化而来
> consistency)，但每个应用都可以根据的，其核心思想是即使无法做到强一致性(Strong自身的业务特点，采用适当的方式来使系统达到最终一致性(Eventualconsistency)。

- Basically Available (基本可用)

  > 是指分布式系统出现不可预知故障的时候，允许损失部分可用性——但绝不等价于系统不可用。以下举例说明
  >
  > - **响应时间上的丢失**：正常情况下，一个搜索引擎需要在0.5s之内返回给用户，但由于故障（机房断电或断网故障），查询响应时间增加到了1~2s

- Soft state (软状态)

  > 弱状态也称为软状态，和硬状态相对，是指允许系统中的数据存在中间状态，并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同节点的数据副本之间进行数据同步的过程存在延时

- Eventually consistent(最终一致性)

  > 最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性。





## 5、分布式一致性算法


### 1、Paxos 算法

**问题提出**

1. 集群中有 N 个节点，如果一个节点写入后要求同步到剩余 N-1 个节点后再向客户端返回 ok，虽然看起来最保险，但其中任意一个节点同步失败，势必造成整个集群不可用，能否在此基础上稍微提高可用性呢？

<img src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902150851559.png" alt="image-20210902150851559" style="zoom:67%;" />

2. 答案是 **（写）多数派**，集群节点设置为奇数，同步超过集群中 N/2 个节点成功，则向客户端返回 ok，但存在顺序性问题，如 3 描述
3. 多数派写操作成功后的读一致性暂不考虑，思考下图中的两项操作，都满足了多数派通过，但 S3 这台服务器并没有与 S1，S2 达成一致，要**达到多数派内部一致性**

![image-20210902151020777](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902151020777.png)

**Paxos**

Paxos 是一种共识算法，目的是解决之前提到的写多数派时的顺序性问题

Paxos 角色划分：集群中的每个节点都可以充当

1. **Proposer**：负责生成提案
   * 注意：Paxos 算法允许有多个 Proposer 同时提案，但可能会引起活锁问题
2. **Acceptor**：负责批准提案
   * Acceptor 如果只有一个的话，存在单点问题，因此应当有多个

3. Learner：负责获取提案，Acceptor 批准提案后，会将提案发送给所有 Learner

执行一个修改操作，不是一上来就能执行，分成两个阶段：

1. 准备阶段：Proposer负责接收 client 请求并产生提案，必须由多数派 Acceptor 批准通过提案
2. 接受阶段：提案通过后，再将要执行的修改操作广播给 Acceptor，这次仍然多数派通过，此修改才能生效，可以返回响应给客户端

![image-20210902151606775](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902151606775.png)

算法要点：

* 整个算法分成两个阶段：预备阶段，前两个箭头，接受阶段，后两个箭头。
  * 预备阶段的目的是：第一拦截掉旧的提案，第二找到最新的 acceptValue
* 对于 Proposer
  * 预备阶段只发送`提案号`，接受阶段发送`提案号 + 值`
  * `提案号` n 唯一且全局递增，大的`提案号`有更高优先级
  * 如果见到最新`已接受值`，就会替换掉 Proposer 自己原来的值，保证一致性
* 对于 Acceptor 会持久化以下信息
  * minN（最小提案号），会在预备阶段和接受阶段被更新为更大提案号，会用来决定 Proposer 是否能选中提案
  * acceptN（已接受提案号）和 acceptValue（已接受值），会在接受阶段被更新，如果 minN > n 则不会更新



**例1**

![image-20210902152006734](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902152006734.png)

1. P 广播提案号 1

2. 有 3 个 A 接到提案，此时满足 n > minN，将 minN 更新为 1

3. 3个 A 成功返回，P 收到的应答过半，但没有遇到更大的 acceptNo 和 acceptValue，因此使用自己的 value X

4. P 广播提案号和值 1:X

5. 3 个 A 接到提案号和值，更新状态，返回 minN 值 1 给 P

6. P 收到过半应答，并检查发现没有出现 minN > 1，便选中提案值 X



**例2**

![image-20210902152121752](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902152121752.png)

1. S1 广播提案号 1，想把值更新为 X

2. S5 广播提案号 2，想把值更新为 Y

3. S1、S2、S3 已经经历了 Accept 阶段并选中值 X

4. **关键点**，S3 也接到了 S5 的prepare 提案，这时是否会有不一致的情况呢？

5. 此时 S3 状态已将 acceptN 和 acceptValue 分别更新为 1:X；再返回 S5 的 ack 时就会将 1:X 返回给 S5

6. S5 用返回的 X 替换掉了自己原有的值 Y，并执行后续流程，后续都会同步为 X



**例3**

![image-20210902152345674](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902152345674.png)

1. S1 广播提案号 1，想把值更新为 X

2. S5 广播提案号 2，想把值更新为 Y

3. S1、S2、S3 已经经历了 Accept 阶段，**与例2 不同的是，值 X 还未选中**

4. **关键点**，S3 也接到了 S5 的prepare 提案，这时是否会有不一致的情况呢？

5. 此时 S3 状态将 acceptN 和 acceptValue 分别更新为 1:X；再返回 S5 的 ack 时就会将 1:X 返回给 S5

6. S5 用返回的 X 替换掉了自己原有的值 Y，并执行后续流程，后续都会同步为 X



**例4**

![image-20210902152544031](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902152544031.png)

1. S1 广播提案号 1，想把值更新为 X

2. S5 广播提案号 2，想把值更新为 Y

3. **关键点**，S3 还未经历 Accept 阶段时，就拿到了 S5 的 prepare 提案，这时是否会有不一致的情况呢？

4. S3 在接到 S1 的 accept 请求时，n>=minN 条件不成立，因此没有更新 acceptN 和 acceptValue，并且返回的 minN 是 2

5. 对 S1 来说，S3 返回的 minN 大于 n，选中失败；想更新 X 需要发起新一轮提案

6. 对 S5 来说，accept 阶段发送的是它自己的 2:Y，后续会把值同步为 Y



**例5**

回顾最早提到的顺序性问题，看 Paxos 能否解决它

![image-20210902152742816](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902152742816.png)

下图演示了 Paxos 是如何解决顺序性问题的，分析步骤参考例3

![image-20210902152753028](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902152753028.png)



**Paxos 缺点**

1. 效率较低，两轮操作只能选中一个值

2. 难于理解

3. 活锁问题

![image-20210902153136877](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20210902153136877.png)

* Paxos 是允许多个 Proposer 的，因此如果按上图所示运行，则后一个提案总会让前面提案选中失败，显然死循环



> ***参考资料***
>
> * https://www.youtube.com/watch?v=JEpsBg0AO6o&t=41s Raft 作者讲解 Paxos

### 2、Raft 算法

> 另一种共识算法，目的是比 Paxos 更易理解，Raft正是为了探索一种更易于理解的一致性算法而产生的。它的首要设计目的就是易于理解，所以在选主的冲突处理等方式上它都选择了非常简单明了的解决方案

整个 Raft 算法分解为三部分：

1. Leader 选举

   ① 只有一个 Server 能作为 Leader

   ② 一旦此 Server 崩溃，选举新 Leader

2. 执行操作，以日志复制为例（Log replication）

   ① 由 Leader 执行自己的日志记录

   ② 将日志复制到其它 Server，会覆盖掉不一致的部分

   ③ 多数派记录日志成功，Leader 才能执行命令，向客户端返回结果

3. 确保安全

   ① 保证日志记录的一致性

   ② 拥有最新日志的 Server 才能成为 Leader



**Leader 选举**

1. **Leader** 会不断向**选民**发送 AppendEntries 请求，证明自己活着

2. **选民**收到 **Leader** AppendEntries 请求后会重置自己的 timeout 时间

![image-20230627091942873](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627091942873.png)

3. **选民**收不到 AppendEntries 请求超时后，转换角色为**候选者**，并将**任期**加1，发送 RequestVote 请求，推选自己

![image-20230627091949621](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627091949621.png)

4. **选民**收到第一个 RequestVote，会向该**候选者**投一票，这样即使有多个**候选者**，必定会选出一个 **Leader**，选票过半即当选，如果落选会变回**选民**

![image-20230627091955888](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627091955888.png)

5. 每一**任期**最多有一个 **Leader**，但也可能没有（选票都不过半的情况，需要再进行一轮投票，timeout 在 T~2T 间随机）

6. **任期**由各个 server 自己维护即可，无需全局维护，在超时后加1，在接收到任意消息时更新为更新的**任期**，遇到更旧的**任期**，视为错误



**执行操作（以日志复制为例）**

1. **客户端**发送命令至 **Leader**

2. **Leader** 将命令写入日志（S1虚框），并向所有**选民**发送 AppendEntries 请求

![image-20230627092005987](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092005987.png)

3. 多数派通过后，执行命令（即提交，S1虚框变实），此时就可以向**客户端**返回结果

![image-20230627092011961](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092011961.png)

4. 在后续的 AppendEntries 请求中通知**选民**，**选民**执行命令（即提交，S2,S3,S4,S5虚框变实）

![image-20230627092018983](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092018983.png)

5. 如果**选民**挂了，则 **Leader** 会不断尝试，待到**选民**重启，会将其缺失的日志陆续补齐



**确保安全**

Leader 日志的完整性

1. Leader 被认为拥有最完整的日志

2. 一旦 Leader 完成了某条命令提交，那么未来的 Leader 也必须存有该条命令提交信息

3. 投票时，会将候选者最新的 `<Term，Index>` 随 RequestVote 请求发送，如果候选者的日志还没选民的新，则投否决票

![image-20230627092026251](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092026251.png)

* 图中 S2 如果超时，发起选举请求，其它服务器只会对它投否决票，因为它的 Index 比其它人都旧
* 图中 S5 如果超时，发起选举请求，其它服务器也不会选它，因为他的 Term 太旧

选民日志的一致性

1. 以 Leader 为准，对选民的日志进行补充或覆盖

2. AppendEntries 请求发送时会携带最新的 `<Term,Index,Command>` 以及上一个的 `<Term,Index>`

3. 如果选民发现上一个的 `<Term,Index>` 能够对应上则成功，否则失败，继续携带更早的信息进行比对

![image-20230627092032627](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092032627.png)

* 图中 Leader 发送了 `<3,4,Command>` 和 `<2,3>` 给 follower，follower 发现 `<2,3>` 能够与当前最新日志对应，这时直接执行 `<3,4,Command>` 即可

![image-20230627092040603](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092040603.png)

* 图中 Leader 发送了 `<3,4,Command>` 和 `<2,3>` 给 follower，follower 发现 `<2,3>` 不能与当前最新日志对应，会央求 Leader 发送更早日志



* Leader 这次发送了 `<3,4,Command>` ， `<2,3,Command>` ，`<1,2>` 给 follower，follower 发现 `<1,2>` 能够与当前最新日志对应，这时补全 `<3,4,Command>` ， `<2,3,Command>`  即可



> ***参考资料***
>
> * https://www.youtube.com/watch?v=vYp4LYbnnW8 Raft 作者讲解 Raft
> * https://raft.github.io/ Raft 资源
> * https://raft.github.io/raftscope/index.html Raft 可视化

### 3、一致性Hash算法

它是为了解决在服务器增、删时普通 hash 算法造成数据大量迁移问题的



**普通 hash 算法**

* 假设有 3 台服务器，10 个 key 在服务器上的分布如下图所示

![image-20230627092052703](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092052703.png)

* 添加一台服务器后，数据分布变成下图，可以看到除了一个 key（上下颜色相同的）以外，其它 key 都得迁移

![image-20230627092105234](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092105234.png)

**一致性 hash 算法**

* 假设有 3 台服务器，10 个 key 在服务器上的分布如下图所示

![image-20230627092112658](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092112658.png)

* 添加一台服务器后，数据分布变成下图，发现仅有 3 个key 需要迁移（上下颜色不同的）

![image-20230627092118400](https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/image-20230627092118400.png)