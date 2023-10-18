---
title: 分布式消息队列
--- 

今天我们来学习分布式消息队列，分布式消息队列的知识结构如下图。

![](http://s0.lgstatic.com/i/image2/M01/89/C5/CgoB5l13GW-AIfDbAAERpWtyIbk305.png)

主要介绍以下内容：

* 同步架构和异步架构的区别。异步架构的主要组成部分：消息生产者、消息消费者、分布式消息队列。异步架构的两种主要模型：点对点模型和发布订阅模型。

* 分布式消息队列异步架构的好处：异步处理实现快速响应；消费者易于伸缩；高并发访问压力的时削峰填谷，减轻访问高峰的系统负载压力；隔离失败任务，消费者处理任务失败，不会影响主业务流程；业务逻辑解耦，系统易于开发和维护。

* 异步架构的挑战：消息无序，竞态条件，系统复杂度提高。

* 使用分布式消息队列异步架构的反模式：消息队列阻塞式调用，生产者消费者显式依赖，缺乏坏消息处理机制。

* 常用的消息队列产品：RabbitMQ，ActiveMQ，RocketMQ，Kafka 等。

## 同步调用与异步调用

### 同步调用

先看一下什么是同步调用。所谓的同步调用，就是说从请求的发起一直到最终的处理完成期间，请求的调用方一直在同步阻塞，等待调用的处理完成。下图所示的例子中，客户端代码 ClientCode，需要执行发送邮件 sendEmail 这样一个操作，它会调用 EmailService 进行发送，而 EmailService 会调用 SmtpEmailAdapter  类来进行处理，这个类会调用远程的一个服务，通过 SMTP 和 TCP 协议发送请求。

![](http://s0.lgstatic.com/i/image2/M01/8A/38/CgotOV13V8SAacKCAACH4MjE17c508.png)

而远程服务器收到消息以后会对消息进行一系列的操作，然后将邮件发送出去，再进行返回。Adapter 收到返回后，再返回给 EmailService。EmailService 收到返回后再把返回结果返回给 ClientCode。

ClientCode 在 sendEmail 发出请求后，就一直都阻塞在这里，等待最终调用结果的返回，是成功还是失败。因为这个过程是阻塞等待的，所以这个过程是同步调用。

### 异步调用

与同步调用相反的是异步调用。异步调用过程，如下图所示，用户 ClientCode 调用 EmailService 以后，EmailService 会把这个调用请求发送给消息队列，然后就立即返回了。ClientCode 收到返回以后继续向下处理，不会继续阻塞等待，实际上消息发送到 Queue 后，还没有被处理。可以看到后面的消息消费，其实要比 EmailService 返回可能还要晚一点，EmailService 返回以后消息才会被消费处理。

![](http://s0.lgstatic.com/i/image2/M01/8A/39/CgotOV13V-uAEtBmAACbBdrSrPQ139.png)

QueueConsumer 消息队列的消费者，从消息队列中取出这个消息，再把这个消息发送给 SmtpAdapter，也就是调用 SmtpAdapter，处理逻辑跟同步调用一样。SmtpAdapter 通过 SMTP 的通讯协议，把消息发送给远程的一个服务器，进行邮件发送，通过 RemoteServer 进行处理，处理完了收到返回，再把返回结果通知消息队列 Queue。

在这个过程中，客户端的调用，也就是应用程序的调用，和业务逻辑真正发送邮件的操作是不同步的。在进行邮件发送操作的处理过程中，客户端的代码已经返回了，它可以继续进行自己的后续操作，而不需要等待邮件的发送，这就叫做异步调用。

## 消息队列构建异步调用架构

使用异步调用架构的主要手段，就是通过消息队列构建。架构图如下图所示。

![](http://s0.lgstatic.com/i/image2/M01/8A/07/CgoB5l13S8-ABqmHAABLgEvpt4w514.png)

消息的生产者将消息发送到消息队列以后，由消息的消费者从消息队列中获取消息，然后进行业务逻辑的处理，消息的生产者和消费者是异步处理的，彼此不会等待阻塞，所以叫做异步架构。

使用消息队列构建一个异步调用架构，你需要了解 3 个角色：一是消息的生产者，二是消息队列，三是消息的消费者。

![](http://s0.lgstatic.com/i/image2/M01/89/C5/CgoB5l13GXCAGQv9AABW-mX709c882.png)

### 消息生产者

消息的生产者是客户端应用程序代码的一部分，用来初始化异步调用处理流程。在消息队列的处理中，生产者的职责非常少，它要做的就是创建一个合法的消息，并把这个消息发送到消息队列中，由应用开发者决定生产者的代码在哪里执行，什么时候发送消息。

### 消息队列

消息队列异步架构的另一个重要组成部分就是消息队列，消息队列是消息发送的目的地，也是发给消费者过程中的一个缓冲。消息队列实现的方法有好多种，可以用共享文件夹，也可以用关系数据库或者 NoSQL 系统，当然最主要的还是使用专门的分布式消息队列服务器。

### 消息消费者

业务架构的第三个重要角色就是消息的消费者。消息的消费者从消息队列中接收并处理消息，也是由应用开发者实现的，但是一个异步处理的组件。消息的消费者不需要知道生产者存在，它只依赖消息队列中的消息。消息的消费者通常部署在独立的服务器上，和消息的生产者完全隔离，并且可以通过添加硬件的方式进行伸缩。

### 点对点模型

知道以上 3 种主要角色之后，使用消息队列构建异步的调用架构，还需要知道两种模型：点对点模型和发布订阅模型。

首先来看点对点模型。消费者和生产者只需要知道消息队列的名字，生产者发送消息到消息队列中，而消息队列的另一端是多个消费者竞争消费消息，每个到达消息队列的消息只会被路由到一个消费者中去，所以消费者看到的是全部消息的一个子集。如下图所示，消息的生产者有多个，消息的消费者也有多个，多个生产者将消息发送到消息队列中，而有多个消费者去消息队列中对消息进行竞争性的消费。每条消息只会被一个消费者消费，每个消费者只会消费消息队列中的一部分消息。

![](http://s0.lgstatic.com/i/image2/M01/8A/27/CgotOV13S4-AO45dAACCTzTIUMo123.png)

### 发布订阅模型

再来看发布订阅模型。在发布订阅模型中，消息可能被发送到不止一个消费者，生产者发送消息到一个主题，而不是队列中。消息被发布到主题后，就会被克隆给每一个订阅它的消费者，每个消费者接收一份消息复制到自己的私有队列。消费者可以独立于其他消费者使用自己订阅的消息，消费者之间不会竞争消息。常用的分布式消息队列都支持发布订阅模型，也就是说消息的发布订阅模型是分布式消息队列的一个功能特性。

![](http://s0.lgstatic.com/i/image2/M01/8A/27/CgotOV13S2GAXpxGAAB59bGh2YU946.png)

### 两种模型对比

两种模型结合对比来看，通常使用点对点模型的，是一些耗时较长的、逻辑相对独立的业务，比如前面讲到的发送邮件这样一个操作。因为发送邮件比较耗时，而且应用程序其实并不太关心邮件发送是否成功，发送邮件的逻辑也相对比较独立，所以它只需要把邮件消息丢到消息队列中就可以返回了。消费者也不需要关心是哪个生产者去发送的邮件，它只需要把邮件消息内容取出来以后进行消费，通过远程服务器将邮件发送出去就可以了。而且每个邮件只需要被发送一次。所以消息只被一个消费者消费就可以了。

相对应的另一些情况，比如新用户注册，就适合使用发布订阅模型。一个新用户注册成功以后，需要给用户发送一封激活邮件，发送一条欢迎短信，还需要将用户注册数据写入数据库，甚至需要将新用户信息发送给关联企业的系统，比如淘宝新用户信息发送给支付宝，这样允许用户可以一次注册就能登录使用多个关联产品。那么对于新用户注册这样一个消息，就需要使用按主题发布的方式，也就是发布订阅模型这种方式。一个新用户注册，会把注册消息发送给一个主题，多种消费者可以订阅这个主题，比如发送邮件的消费者、发送短信的消费者、将注册信息写入数据库的消费者，跨系统同步消息的消费者等。

## 消息队列的好处

通过前面的例子，可以看出消息队列有这样的一些优点，包括异步处理、易伸缩、使峰值变平缓、失败隔离及自我修复、解耦。

### 异步处理

第一个好处是实现异步处理，提升处理性能。对一些比较耗时的操作，我们可以把处理过程通过消息队列进行异步处理。这样做一个显而易见的好处就是，可以推迟耗时操作的处理，使耗时操作异步化，而不必阻塞客户端的程序，客户端的程序在得到处理结果之前就可以继续执行，从而提高客户端程序的处理性能。

### 易伸缩

第二个好处，它可以让系统获得更好的伸缩性。因为耗时的任务可以通过分布式消息队列向多台消费者服务器并行发送消息，然后在很多台消费者服务器上并行处理消息，也就是说可以在多台物理服务器上运行消费者。那么当负载上升的时候，可以很容易地添加更多的机器成为消费者。

如下图所示，用户上传文件后，通过发布消息的方式，通知后端的消费者获取数据、读取文件，进行异步的文件处理操作。那么当前端发布更多文件的时候，或者处理逻辑比较复杂的时候，就可以通过添加后端的消费者服务器，增强系统的处理能力。

![](http://s0.lgstatic.com/i/image2/M01/89/E5/CgotOV13GXKATU17AABlL42Ox4U769.png)

        

### 使峰值平缓

使用消息队列的第三个好处是可以平衡流量峰值，削峰填谷。使用消息队列，即便是访问流量持续的增长，系统依然可以持续地接收请求。这种情况下，虽然生产者发布消息的速度比消费者消费消息的速度快，但是可以持续地将消息纳入到消息队列中，用消息队列作为消息的缓冲，因此短时间内，发布者不会受到消费处理能力的影响。

如下图所示，因为消息的生产者是直接面向用户请求的，而用户的请求访问压力是不均衡的，比如淘宝每天的访问高峰是在上午 10 点左右，而新浪微博则可能在某个明星半夜发一条微博后突然出现访问高峰。

![](http://s0.lgstatic.com/i/image2/M01/8A/28/CgotOV13TBeANayOAACLzNzqryE259.png)

在访问高峰，用户的并发访问数可能超过了系统的处理能力，所以在高峰期就可能会导致系统负载过大，响应速度变慢，更严重的可能会导致系统崩溃。这种情况下，通过消息队列将用户请求的消息纳入到消息队列中，通过消息队列缓冲消费者处理消息的速度。

如图中所示，消息的生产者负载有高峰有低谷，但是到了消费者这里，只会按照自己的最佳处理能力去消费消息。高峰期它会把消息缓冲在消息队列中，而在低谷期它也还是使用自己最大的处理能力去获取消息，将前面缓冲起来、来不及及时处理的消息处理掉。那么，通过这种手段可以实现系统负载削峰填谷，也就是说将访问的高峰削掉，而将访问的低谷填平，使系统处在一个最佳的处理状态之下，不会对系统的负载产生太大的冲击。

### 失败隔离及自我修复

消息队列的第四个好处是失败隔离和自我修复。因为发布者不直接依赖消费者，所以分布式消息队列可以将消费者系统产生的错误异常与生产者系统隔离开来，生产者不受消费者失败的影响。 当在消息消费过程中出现处理逻辑失败的时候，这个错误只会影响到消费者自身，而不会传递给消息的生产者，也就是应用程序可以按照原来的处理逻辑继续执行。

这也就意味着在任何时候都可以对后端的服务器执行维护和发布操作。我们可以重启、添加或删除服务器，而不影响生产者的可用性，这样简化了部署和服务器管理的难度。

### 解耦

第五个好处，如下图所示，使用分布式消息队列，可以使生产者和消费者的代码实现解耦合，也就是说可以多个生产者发布消息，多个消费者处理消息，共同完成完整的业务处理逻辑，但是它们却不需要直接进行交互调用，没有代码的依赖耦合。在传统的同步调用中，调用者代码必须要依赖被调用者的代码，也就是生产者代码必须要依赖消费者的处理逻辑代码，代码需要直接的耦合，而使用消息队列，这两部分的代码不需要进行任何的耦合。耦合程度越低的代码越容易维护，也越容易进行扩展。

![](http://s0.lgstatic.com/i/image2/M01/8A/19/CgoB5l13WDeAZbSUAACZpbCjQVI728.png)

比如前面提到的新用户注册的例子，如果用传统同步调用的方式，那么发邮件、发短信、写数据库、通知关联系统这些代码会和用户注册代码直接耦合起来，整个代码看起来就是完成用户注册逻辑后，后面必然跟着发邮件、发短信这些代码。如果要新增一个功能，比如将监控用户注册情况，将注册信息发送到业务监控系统，就必须要修改前面的代码，至少增加一行代码，发送注册信息到监控系统，我们知道，任何代码的修改都可能会引起 bug。

而使用分布式消息队列实现生产者和消费者解耦合以后，用户注册完成，不需要调用任何后续处理代码，只需要将注册消息发送到分布式消息队列就可以了。如果要增加新功能，只需要写个新功能的消费者程序，在分布式消息队列中，订阅用户注册主题就可以了，不需要修改原来任何一行代码。

解耦的特点对于团队的工作分工也很有帮助。从消息生产者的视角看，它只需要构建消息，将消息放入消息队列中，开发就完成了；而从消费者的开发视角看，它只需要从消息队列中获取消息，然后进行逻辑处理。它们彼此之间不进行任何耦合。消息的生产者不关心放入消息队列中下一步会发生什么，而消费者也不需要知道消息从哪里来。这两部分程序的开发者也可以不关心彼此的工作进展，他们开发的代码也不需要集成在一起，只要约定好消息格式，就可以各自开发了。

## 消息队列相关挑战

了解到上面的 5 点好处，你会认为消息队列是完美的吗？其实不是的，接下来讲分布式消息队列遇到的挑战：消息无序、消息重新入队列、竞态条件、复杂度风险。

### 消息无序

先来说消息无序。因为生产者和消费者是异步处理的。虽然消息队列本身会保证先创建的消息在前面，但是消费者却并不能保证先创建的消息先消费掉。

如下图所示，生产者会创建两个消息，一个是创建用户，另一个是欢迎邮件。消费者应该先消费创建用户，然后再消费欢迎邮件，业务逻辑有先后顺序。但是由于消费者可能是在并行执行，两个消费者分别获得了创建用户和发送欢迎邮件两个消息。那么，有可能欢迎邮件被消费者先处理完了，而创建用户的消费者还没有来得及处理这条消息，就可能会导致欢迎邮件在创建用户之前就已经发出去了。

![](http://s0.lgstatic.com/i/image2/M01/8A/39/CgotOV13WGCAPpr5AAB6e0s8OFk657.png)

一个简单的解决办法就是将消息处理的顺序设计到异步流程中，也就是创建用户的消费者在处理消息后，再发送一个欢迎邮件的消息到消息队列中。这样就可以保证邮件发送一定在创建用户之后，从而满足业务逻辑的顺序性要求。

### 消息重新入队列

另一个挑战是消息重新入队列，重复消费。有些分布式消息队列产品支持将某个消费者处理失败的消息重新放入到消息队列中，被其它的消费者重新处理。但是重新放入到消息队列中的消息有可能是被处理完成了的，也就是表面看起来处理失败，实际上已经处理完成，这种情况在软件运行过程中并不鲜见。那么这种情况下就会导致同一条消息被多次消费。

解决这个问题的主要手段是将消息处理设计成幂等性，也就是说消费者可以对同一条消息进行多次处理计算，而不会影响最终的结果。有些操作天然就是幂等的，比如将商品价格设置为 50 元，不管设置多少次，都是 50 元，不会影响最终结果。而有些操作，比如发送邮件，发送两次和发送一次结果肯定是不同的，对于这类非天然幂等的操作，需要进行特别设计，才能实现最终效果上的幂等。

### 竞态条件

第三个挑战是竞态条件。所谓竞态条件就是指在程序并发执行的时候，不同的执行顺序会导致不同的结果，主要是因为对共享资源的访问顺序不同导致的结果不同。我们在编程中通过多线程实现程序的并发执行，消息队列可以在分布式的环境下实现架构层面的并发执行，并发执行就可能会导致对资源的争用。在编程中我们通常使用锁的机制进行并发的控制，以避免竞态、顺序执行。在消息队列的异步架构中也需要对共享资源的并发访问进行控制，以避免竞态条件的出现。

### 复杂度风险

消息队列的第四个挑战是复杂度风险。消息队列使系统的架构和处理流程更加复杂，带来了更多的复杂性问题，从而也对架构师的系统架构设计能力和架构把控能力提出了更高的挑战和要求。

## 消息队列的反模式

所谓模式就是指可多次复用的解决方案。当解决方案一次又一次地被证明是成功的，我们就称它为“模式”。后面有同类问题出现的时候，我们就使用相同的解决方案去处理，也就是所谓的模式复用。

但是如果解决方案被认为是错误的，它们经常会带来问题，就称之为“反模式”。典型的反模式一开始用起来不错，但是时间越长问题越多。熟悉反模式，你就能在未来避免它们，就像对常见的设计缺陷产生免疫一样。

接下来介绍消息队列常见的几种反模式。

### 阻塞式调用

有些分布式消息队列产品允许生产者阻塞，也就是生产者发送消息以后，阻塞等待消息队列处理结果，等消费者处理完成返回处理结果以后，继续向下执行。这样就使消息队列成为一个同步的调用模式。使用同步模式看起来在某些场合下是比较合理的，因为可以等待执行结果，拿到结果后继续处理，但是这种方式使得消息队列异步架构的各种好处都丧失了。

### 耦合生产者和消费者

另一种反模式是耦合生产者和消费者。虽然消息队列将生产和消费者解耦合了，但是不恰当的设计依然会使生产者和消费者产生耦合。比如说在消息中包含处理逻辑，也就是说在消息中约定消费者应该如何进行处理。或者是说使用特定的序列化协议编码消息。那么消费者必须要按照特定的序列化格式，才能解码消息。这些情况都使得生产者和消费者产生了不必要的耦合。

### 缺少坏消息处理

还有一种反模式是缺少坏消息的处理。使用消息队列的时候，不能总是假定消息永远正确。对于引发消费者崩溃的消息，应该丢弃而不是重新处理。因为如果导致消费者失败的原因是消息本身，那么每次重新处理都会导致消费者失败，最后导致整个消费者服务器集群都崩溃，系统什么也干不了。

## 常用消息队列产品

目前业界常用的消息队列产品，主要有：RabbitMQ 、ActiveMQ、RocketMQ 、Kafka。

* RabbitMQ 的主要特点是性能好，社区活跃，但是 RabbitMQ 用 Erlang 开发，我们的应用很少用 Erlang，所以不便于二次开发和维护。

* ActiveMQ 影响比较广泛，可以跨平台，使用 Java 开发，对 Java 开发者比较友好。

* RocketMQ 是阿里推出的一个开源产品，也是使用 Java 开发，性能比较好，可靠性也比较高。

* Kafka 是 Linkedin 出品的，专门针对分布式场景进行了优化，因此分布式的伸缩性会比较好。

       目前看来，Kafka 因为最初就是针对互联网的分布式、高可用应用场景而设计的，并且在大数据领域得到广泛支持，资料文档更加完善，因此在互联网企业得到更多的应用。

       分享一个技术产品选型的小技巧，技术决策时可作为参考。当在几个相似的技术产品中进行选型决策，并且拿不定主意、感觉都差不多的时候，一个办法就是利用搜索引擎搜索一下这些产品的名字。搜索结果最多的产品，一般是最热门，文档资料最多，遇到问题有更大概率找到答案的，最有发展前景不会半途而废没人维护的。利用这个技巧，我们看一下消息队列（MQ）的产品选型，Kafka 在百度中的搜索结果数量是其它三个 MQ 产品的搜索结果数量之和，那么如果你拿不定主意，选择 Kafka 至少不会是最糟糕的选择。

## 总结

使用异步调用的架构方法，就是使用消息队列，将生产者和消费者进行隔离。主要的架构模型有两种，一种是点对点模型，一种是发布订阅模型。其中点对点模型，一个消息只会被一个消费者消费；而发布订阅模型，一个消息可以被多个消费者订阅。

消息队列实现的异步架构可以在架构上带来更多的好处。它可以实现业务逻辑的异步处理，从而获得更好性能特性；可以使系统具有更好的伸缩性；可以平衡用户访问流量，实现削峰填谷；还可以隔离失败，并进行自我修复；以及对生产者和消费者进行解耦，使系统拥有更好的扩展和维护能力。

同时我们需要关注异步消息队列架构带来的挑战。第一个是消息无序，第二个是消息重复处理，第三个是竞态条件，还有一个是系统的复杂度的增加。

总之，消息队列实际上可以带来很多架构上的好处，但是不正确地使用消息队列可能会丧失这些好处。