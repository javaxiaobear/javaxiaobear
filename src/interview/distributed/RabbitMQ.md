---
title: RabbitMQ 26道面试题
---
## 1、为什么要使用MQ

### 1、流量消峰

> 举个例子：如果订单系统最多能处理一万次订单，这个处理能力应付正常时段的下单时绰绰有余，正常时段我们下单一秒后就能返回结果。但是在高峰期，如果有两万次下单操作系统是处理不了的，只能限制订单超过一万后不允许用户下单。使用消息队列做缓冲，我们可以取消这个限制，把一秒内下的订单分散成一段时间来处理，这时有些用户可能在下单十几秒后才能收到下单成功的操作，但是比不能下单的体验要好。



### 2、应用解耦

> 以电商应用为例，应用中有订单系统、库存系统、物流系统、支付系统。用户创建订单后，如果耦合调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单操作异常。当转变成基于消息队列的方式后，系统间调用的问题会减少很多，比如物流系统因为发生故障，需要几分钟来修复。在这几分钟的时间里，物流系统要处理的内存被缓存在消息队列中，用户的下单操作可以正常完成。当物流系统恢复后，继续处理订单信息即可，中单用户感受不到物流系统的故障，提升系统的可用性。

![image-20220706161100945](../images/image-20220706161100945.png)



### 3、异步处理

> 有些服务间调用是异步的，例如 A 调用 B，B 需要花费很长时间执行，但是 A 需要知道 B 什么时候可以执行完，以前一般有两种方式：
>
> 1. A 过一段时间去调用 B 的查询 api 查询
> 2. A 提供一个 callback api， B 执行完之后调用 api 通知 A 服务。
>
> 这两种方式都不是很优雅，使用消息总线，可以很方便解决这个问题，A 调用 B 服务后，只需要监听 B 处理完成的消息，当 B 处理完成后，会发送一条消息给 MQ，MQ 会将此消息转发给 A 服务。这样 A 服务既不用循环调用 B 的查询 api，也不用提供 callback api。同样 B 服务也不用做这些操作。A 服务还能及时的得到异步处理成功的消息。

![image-20220706162933487](../images/image-20220706162933487.png)





## 2、什么是`RabbitMQ`

> `RabbitMQ`是一个消息中间件：它接受并转发消息。你可以把它当做一个快递站点，当你要发送一个包裹时，你把你的包裹放到快递站，快递员最终会把你的快递送到收件人那里，按照这种逻辑`RabbitMQ`是一个快递站，一个快递员帮你传递快件。`RabbitMQ`与快递站的主要区别在于，它不处理快件而是接收，存储和转发消息数据。



## 3、`RabbitMQ`各组件的功能

- **Server**：接收客户端的连接，实现`AMQP`实体服务。

- **Connection**：连接，应用程序与Server的网络连接，TCP连接。

- **Channel**：信道，消息读写等操作在信道中进行。客户端可以建立多个信道，每个信道代表一个会话任务。如果每一次访问 RabbitMQ 都建立一个 Connection，在消息量大的时候建立 TCP Connection 的开销将是巨大的，效率也较低。Channel 是在 connection 内部建立的逻辑连接，如果应用程序支持多线程，通常每个 thread 创建单独的 channel 进行通讯，AMQP method 包含了 channel id 帮助客户端和 message broker 识别 channel，所以 channel 之间是完全隔离的。**Channel 作为轻量级的**

  **Connection** **极大减少了操作系统建立** **TCP connection** **的开销**

- **Message**：消息，应用程序和服务器之间传送的数据，消息可以非常简单，也可以很复杂。由Properties和Body组成。Properties为外包装，可以对消息进行修饰，比如消息的优先级、延迟等高级特性；Body就是消息体内容。

- **Virtual Host**：虚拟主机，用于逻辑隔离。一个虚拟主机里面可以有若干个Exchange和Queue，同一个虚拟主机里面不能有相同名称的Exchange或Queue。

- **Exchange**：交换器，接收消息，按照路由规则将消息路由到一个或者多个队列。如果路由不到，或者返回给生产者，或者直接丢弃。`RabbitMQ`常用的交换器常用类型有direct、topic、fanout、headers四种，后面详细介绍。

- **Binding**：绑定，交换器和消息队列之间的虚拟连接，绑定中可以包含一个或者多个`RoutingKey`，Binding 信息被保存到 exchange 中的查询表中，用于 message 的分发依据

- `RoutingKey`：路由键，生产者将消息发送给交换器的时候，会发送一个`RoutingKey`，用来指定路由规则，这样交换器就知道把消息发送到哪个队列。路由键通常为一个“.”分割的字符串，例如`“com.rabbitmq”`。

- **Queue**：消息队列，用来保存消息，供消费者消费。



## 3、RabbitMQ工作原理

不得不看一下经典的图了，如下:point_down:

![image-20220708092548210](../images/image-20220708092548210.png)

AMQP 协议模型由三部分组成：生产者、消费者和服务端，执行流程如下：

1. 生产者是连接到 Server，建立一个连接，开启一个信道。
2. 生产者声明交换器和队列，设置相关属性，并通过路由键将交换器和队列进行绑定。
3. 消费者也需要进行建立连接，开启信道等操作，便于接收消息。
4. 生产者发送消息，发送到服务端中的虚拟主机。
5. 虚拟主机中的交换器根据路由键选择路由规则，发送到不同的消息队列中。
6. 订阅了消息队列的消费者就可以获取到消息，进行消费。



## 4、RabbitMQ 上的一个 queue 中存放的 message 是否有数量限制？

> 可以认为是无限制，因为限制取决于机器的内存，但是消息过多会导致处理效率的下降。



## 5、RabbitMQ 允许发送的 message 最大可达多大？

> 根据 AMQP 协议规定，消息体的大小由 64-bit 的值来指定，所以你就可以知道到底能发多大的数据了



## 6、RabbitMQ的工作模式

### 1、simple模式（即最简单的收发模式）

![image-20220807220356530](../images/image-20220807220356530.png)

1. 生产者产生消息，将消息放入队列
2. 消息的消费者(consumer) 监听 消息队列，如果队列中有消息，就消费掉，消息被拿走后，自动从队列中删除(隐患 消息可能没有被消费者正确处理，已经从队列中消失了，造成消息的丢失，这里可以设置成手动的ack，但如果设置成手动ack，处理完后要及时发送ack消息给队列，否则会造成内存溢出)。



### 2、Work Queues(工作队列)

![image-20220816230638693](../images/image-20220816230638693.png)

消息产生者将消息放入队列，消费者可以有多个，消费者1,消费者2同时监听同一个队列,消息被消费。C1 C2共同争抢当前的消息队列内容,谁先拿到谁负责消费消息(隐患：高并发情况下,默认会产生某一个消息被多个消费者共同使用,可以设置一个开关(syncronize) 保证一条消息只能被一个消费者使用)。



### 3、publish/subscribe发布订阅(共享资源)

![image-20220816230733324](../images/image-20220816230733324.png)

1. 每个消费者监听自己的队列；
2. 生产者将消息发给broker，由交换机将消息转发到绑定此交换机的每个队列，每个绑定交换机的队列都将接收到消息。



### 4、routing路由模式

![image-20220816230820807](../images/image-20220816230820807.png)

1. 消息生产者将消息发送给交换机按照路由判断，路由是字符串(info) 当前产生的消息携带路由字符(对象的方法)，交换机根据路由的key，只能匹配上路由key对应的消息队列，对应的消费者才能消费消息;
2. 根据业务功能定义路由字符串
3. 从系统的代码逻辑中获取对应的功能字符串,将消息任务扔到对应的队列中。
4. 业务场景:error 通知;EXCEPTION;错误通知的功能;传统意义的错误通知;客户通知;利用key路由,可以将程序中的错误封装成消息传入到消息队列中,开发者可以自定义消费者,实时接收错误;



### 5、topic 主题模式(路由模式的一种)

![image-20220816230958075](../images/image-20220816230958075.png)

1. 星号井号代表通配符
2. 星号代表多个单词,井号代表一个单词
3. 路由功能添加模糊匹配
4. 消息产生者产生消息,把消息交给交换机
5. 交换机根据key的规则模糊匹配到对应的队列,由队列的监听消费者接收消息消费

PS：（在我的理解看来就是routing查询的一种模糊匹配，就类似sql的模糊查询方式）



## 7、如何保证RabbitMQ消息的顺序性？

> - 拆分多个 queue(消息队列)，每个 queue(消息队列) 一个 consumer(消费者)，就是多一些 queue(消息队列)而已，确实是麻烦点；
> - 或者就一个 queue (消息队列)但是对应一个 consumer(消费者)，然后这个 consumer(消费者)内部用内存队列做排队，然后分发给底层不同的 worker 来处理。



## 8、RabbitMQ消息丢失的情况有哪些？

> 1. 生产者发送消息RabbitMQ Server 消息丢失
> 2. RabbitMQ Server中存储的消息丢失
> 3. RabbitMQ Server中存储的消息分发给消费者者丢失

### 1、生产者发送消息RabbitMQ Server 消息丢失

> 1. 发送过程中存在网络问题，导致消息没有发送成功
> 2. 代码问题，导致消息没发送

### 2、RabbitMQ Server中存储的消息丢失

> 1. 消息没有持久化，服务器重启导致存储的消息丢失

### 3、RabbitMQ Server到消费者消息丢失

> 1. 消费端接收到相关消息之后，消费端还没来得及处理消息，消费端机器就宕机了
> 2. 处理消息存在异常



## 9、RabbitMQ如何保证消息不丢失？

> 针对上面的情况，确保消息不丢失
>
> 生产者发送消息RabbitMQ Server 消息丢失解决方案：
>
> - 常用解决方案：发送方确认机制（publisher confirm）
> - 开启AMQP的事务处理（不推荐）
>
> RabbitMQ Server中存储的消息丢失解决方案：
>
> - 消息回退：通过设置 mandatory 参数可以在当消息传递过程中不可达目的地时将消息返回给生产者
> - 设置持久化：保证重启过程中，交换机和队列也是持久化的
>
> RabbitMQ Server到消费者消息丢失解决方案：
>
> - 手动ack确认机制

### 1、生产者发送消息RabbitMQ Server 消息丢失解决方案

#### 1、发布确认机制

> 生产者将信道设置成 confirm 模式，一旦信道进入 confirm 模式，所有在该信道上面发布的消息都将会被指派一个唯一的 ID(从 1 开始)，一旦消息被投递到所有匹配的队列之后，broker就会发送一个确认给生产者(包含消息的唯一 ID)，这就使得生产者知道消息已经正确到达目的队列了，如果消息和队列是可持久化的，那么确认消息会在将消息写入磁盘之后发出，broker 回传给生产者的确认消息中 delivery-tag 域包含了确认消息的序列号，此外 broker 也可以设置`basic.ack` 的 multiple 域，表示到这个序列号之前的所有消息都已经得到了处理。
> confirm 模式最大的好处在于它是异步的，一旦发布一条消息，生产者应用程序就可以在等信道返回确认的同时继续发送下一条消息，当消息最终得到确认之后，生产者应用便可以通过回调方法来处理该确认消息，如果 RabbitMQ 因为自身内部错误导致消息丢失，就会发送一条 nack 消息，生产者应用程序同样可以在回调方法中处理该 nack 消息。
>
> 发布确认分为三种：
>
> - **单独发布确认**：这是一种简单的确认方式，它是一种**同步确认发布**的方式，也就是发布一个消息之后只有它被确认发布，后续的消息才能继续发布，`waitForConfirmsOrDie(long)`这个方法只有在消息被确认的时候才返回，如果在指定时间范围内这个消息没有被确认那么它将抛出异常。
    >
    >   这种确认方式有一个最大的缺点就是：**发布速度特别的慢，**因为如果没有确认发布的消息就会阻塞所有后续消息的发布，这种方式最多提供每秒不超过数百条发布消息的吞吐量。当然对于某些应用程序来说这可能已经足够了。
>
> - **批量发布确认**：上面那种方式非常慢，与单个等待确认消息相比，先发布一批消息然后一起确认可以极大地提高吞吐量，当然这种方式的缺点就是:**当发生故障导致发布出现问题时，不知道是哪个消息出现问题了，我们必须将整个批处理保存在内存中，以记录重要的信息而后重新发布消息**。当然这种方案仍然是同步的，也一样阻塞消息的发布。
>
> - **异步发布确认**：异步确认虽然编程逻辑比上两个要复杂，但是性价比最高，无论是可靠性还是效率都没得说，他是利用回调函数来达到消息可靠性传递的，这个中间件也是通过函数回调来保证是否投递成功

#### 2、开启AMQP的事务处理（不推荐）

> 为什么不推荐呢，因为它是同步的，一条消息发送之后会使发送端阻塞，以等待RabbitMQ Server的回应，之后才能继续发送下一条消息，生产者生产消息的吞吐量和性能都会大大降低，这就跟单独发布确认一样。
>
> 如何使用：在生产者发送消息之前，通过channel.txSelect开启一个事务，接着发送消息， 如果消息投递server失败，进行事务回滚channel.txRollback，然后重新发送， 如果server收到消息，就提交事务channel.txCommit



### 2、RabbitMQ Server中存储的消息丢失解决方案

> 第一种保证消息丢失，只能够保证发送方发送消息成功到达交换机，若此时服务器存在问题或者绑定的routingKey不正确，导致消息发送失败，那么消息最终也会丢失。
>
> - **采用消息回退：通过设置 mandatory 参数可以在当消息传递过程中不可达目的地时将消息返回给生产者**
> - 设置持久化

#### 1、消息回退

源码：
    mandatory参数
    true:交换机无法将消息进行路由时，会将该消息返回给生产者
    false：如果发现消息无法进行路由，则直接丢弃

```java
public void basicPublish(String exchange, String routingKey, boolean mandatory, BasicProperties props, byte[] body) throws IOException {
    this.delegate.basicPublish(exchange, routingKey, mandatory, props, body);
}
```

有了 mandatory 参数和回退消息，我们获得了对无法投递消息的感知能力，有机会在生产者的消息无法被投递时发现并处理。但有时候，我们并不知道该如何处理这些无法路由的消息，最多打个日志，然后触发报警，再来手动处理。而通过日志来处理这些无法路由的消息是很不优雅的做法，特别是当生产者所在的服务有多台机器的时候，手动复制日志会更加麻烦而且容易出错。

这时需要采用**备份交换机**了

备份交换机可以理解为 RabbitMQ 中交换机的“备胎”，当我们为某一个交换机声明一个对应的备份交换机时，

> 就是为它创建一个备胎，当交换机接收到一条不可路由消息时，将会把这条消息转发到备份交换机中，由备份交换机来进行转发和处理，通常备份交换机的类型为 Fanout ，这样就能把所有消息都投递到与其绑定的队列中，然后我们在备份交换机下绑定一个队列，这样所有那些原交换机无法被路由的消息，就会都进入这个队列了。当然，我们还可以建立一个报警队列，用独立的消费者来进行监测和报警。

具体代码请参考这篇：



#### 2、设置持久化

> 上面我们的角度是站在生产者的方向，但是如果服务器重启了，此时交换机和队列都不存在了，消息存在也发送不了，这时需要把交换机和队列都持久化。

```java
/**
* 生成一个队列
* 1.队列名称
* 2.队列里面的消息是否持久化 默认消息存储在内存中
* 3.该队列是否只供一个消费者进行消费 是否进行共享 true 可以多个消费者消费
* 4.是否自动删除 最后一个消费者端开连接以后 该队列是否自动删除 true 自动删除
* 5.其他参数
*/
channel.queueDeclare(QUEUE_NAME, false, false, false, null);
```

### 3、RabbitMQ Server到消费者消息丢失解决方案

> 默认消息采用的是自动应答，所以我们要想实现消息消费过程中不丢失，需要把自动应答改为手动应答

```java
//将自动应答关闭
boolean autoAck = false;
channel.basicConsume(TASK_QUEUE_NAME, autoAck, deliverCallback, consumerTag -> { });
```

## 10、RabbitMQ消息基于什么传输？

> 由于 TCP 连接的创建和销毁开销较大，且并发数受系统资源限制，会造成性能瓶颈。RabbitMQ 使用**信道**的方式来传输数据。信道是建立在真实的 TCP 连接内的虚拟连接，且每条 TCP 连接上的信道数量没有限制。

## 11、RabbitMQ支持消息的幂等性吗？

> 支持。在消息生产时，MQ 内部针对每条生产者发送的消息生成一个 inner-msg-id，作为去重的依据（消息投递失败并重传），避免重复的消息进入队列。
>
> 在消息消费时，要求消息体中必须要有一个 bizId（对于同一业务全局唯一，如支付 ID、订单 ID、帖子 ID 等）作为去重的依据，避免同一条消息被重复消费。

## 12、RabbitMQ怎么确保消息已被消费？

> - 消费端配置手动ACK确认机制
> - 结合数据库进行状态标记处理

## 13、RabbitMQ支持事务消息吗？

> 支持事务消息。前面在第9题中保证生产者不丢失消息，提到可以使用AMQP的事务，但是它是同步的，所以不怎么推荐使用
>
> ```java
> 事务的实现主要是对信道(Channel)的设置，主要方法如下：
> 
> 1. channel.txSelect()  声明启动事务模式
> 
> 2.channel.txCommit() 提交事务
> 
> 3.channel.txRollback()回滚事务
> ```

## 14、RabbitMQ消息持久化的条件？

> 消息持久化，当然前提是队列必须持久化
>
> - 声明队列必须设置持久化 durable 设置为 true.
> - 消息推送投递模式必须设置持久化，deliveryMode 设置为 2（持久）。
> - 消息已经到达持久化交换器。
> - 消息已经到达持久化队列。

## 15、RabiitMQ消息什么情况下会变成死信消息？

> 由于特定的**原因导致** **queue** **中的某些消息无法被消费**，这样的消息如果没有后续的处理，就变成了死信消息

## 16、RabbitMQ死信消息的来源？

> - 消息 TTL 过期
> - 队列达到最大长度(队列满了，无法再添加数据到 mq 中)
> - 消息被拒绝(basic.reject 或 basic.nack)并且 requeue=false.

## 17、RabbitMQ死信队列的用处？

> - 可以用于实现延迟队列



## 18、RabbitMQ支持延迟队列吗？

> 支持。延时队列，队列内部是有序的，最重要的特性就体现在它的延时属性上，延时队列中的元素是希望在指定时间到了以后或之前取出和处理，简单来说，延时队列就是用来存放需要在指定时间被处理的元素的队列。

## 19、RabbitMQ延迟队列的使用场景

> - 订单在十分钟之内未支付则自动取消
> - 新创建的店铺，如果在十天内都没有上传过商品，则自动发送消息提醒
> - 用户注册成功后，如果三天内没有登陆则进行短信提醒
> - 用户发起退款，如果三天内没有得到处理则通知相关运营人员
> - 预定会议后，需要在预定的时间点前十分钟通知各个与会人员参加会议

## 20、RabbitMQ实现延迟队列的有什么条件？

> - 消息设置TTL
> - 配置了死信队列

## 21、RabbitMQ怎么实现优先级队列？

> 1. 控制台页面：添加一个`x-max-priority`
     >
     >    ![image-20220902144032269](../images/image-20220902144032269.png)
>
> 2. 生产者添加优先级，案例代码
     >
     >    ```java
>    public class Product {
>    
>        private static final String QUEUE_NAME = "hello";
>    
>        public static void main(String[] args) throws Exception {
>            try(Channel channel = RabbitMQConfig.getChannel()){
>                //给消息赋予一个 priority 属性
>                AMQP.BasicProperties basicProperties = new AMQP.BasicProperties().builder().priority(5).build();
>                for (int i = 1; i < 11; i++) {
>                    String msg = "info" + i;
>                    if(i==5){
>                        channel.basicPublish("", QUEUE_NAME, basicProperties, msg.getBytes());
>                    }else{
>                        channel.basicPublish("", QUEUE_NAME, null, msg.getBytes());
>                    }
>                    System.out.println("发送消息完成:" + msg);
>                }
>            }
>        }
>    }
>    ```
>
>
>
> 3. 消费者队列中代码添加优先级
     >
     >    ```java
>    public class Consumer {
>    
>        private static final String QUEUE_NAME = "hello";
>    
>        public static void main(String[] args) throws Exception {
>            Channel channel = RabbitMQConfig.getChannel();
>            //设置队列的最大优先级 最大可以设置到 255 官网推荐 1-10 如果设置太高比较吃内存和 CPU
>            Map<String, Object> map = new HashMap<>();
>            map.put("x-max-priority", 10);
>            channel.queueDeclare(QUEUE_NAME, true, false, false, map);
>    
>            System.out.println("消费者等待启动接收消息......");
>            DeliverCallback deliverCallback = (consumerTag, delivery) ->{
>                String receivedMessage = new String(delivery.getBody());
>                System.out.println("接收到消息:"+receivedMessage);
>            };
>            channel.basicConsume(QUEUE_NAME, true, deliverCallback, (consumerTag) ->{
>                System.out.println("消费者无法消费消息时调用，如队列被删除");
>            });
>        }
>    }
>    ```

## 22、哪些情况下推荐使用RabbitMQ的惰性队列

> - 队列可能会产生消息堆积
> - 队列对性能（吞吐量）的要求不是非常高，例如TPS 1万以下的场景
> - 希望队列有稳定的生产消费性能，不受内存影响而波动

## 23、RabbitMQ如何处理消息堆积情况？

> 方法：**临时扩容，快速处理积压的消息**
>
> - 先修复 consumer 的问题，确保其恢复消费速度，然后将现有的 consumer 都停掉；
> - 临时创建原先 N 倍数量的 queue ，然后写一个临时分发数据的消费者程序，将该程序部署上去消费队列中积压的数据，消费之后不做任何耗时处理，直接均匀轮询写入临时建立好的 N 倍数量的 queue 中；
> - 接着，临时征用 N 倍的机器来部署 consumer，每个 consumer 消费一个临时 queue 的数据
> - 等快速消费完积压数据之后，恢复原先部署架构 ，重新用原先的 consumer 机器消费消息。
>
> 这种做法相当于临时将 queue 资源和 consumer 资源扩大 N 倍，以正常 N 倍速度消费。

## 24、RabbitMQ如何处理消息堆积过程中丢失的数据？

> 采用**“批量重导”**的方式，在流量低峰期，写一个程序，手动去查询丢失的那部分数据，然后将消息重新发送到mq里面，把丢失的数据重新补回来。

## 25、RabbitMQ如何处理长时间未处理导致写满的情况？

> 如果消息积压在RabbitMQ里，并且长时间都没处理掉，导致RabbitMQ都快写满了，这种情况肯定是临时扩容方案执行太慢；这种时候只好采用 **“丢弃+批量重导”** 的方式来解决了。首先，临时写个程序，连接到RabbitMQ里面消费数据，消费一个丢弃一个，快速消费掉积压的消息，降低RabbitMQ的压力，然后在流量低峰期时去手动查询重导丢失的这部分数据。

## 26、如何设计一个消息队列？

> 要考虑三点：伸缩性、持久化、可用性
>
> 1. 伸缩性：需要扩容的时候可以快速扩容，增加吞吐量和容量；可以参考`kafaka`的设计理念，broker -> topic -> partition，每个partition放一个机器，就存一部分数据；资源不够了，给topic增加partition，然后做数据迁移，增加机器；
> 2. 持久化：也就是数据要不要写入磁盘，不写入吧，进程挂了，数据就丢失了，写入磁盘该如何高效写入呢？`kafaka`的思路：顺序读写，采用磁盘缓存（Page Cache）的策略，操作系统采用预读和后写的方式，对磁盘进行优化。
     >    - 预读：磁盘顺序读取的效率是很高的（不需要寻道时间，只需要很少的旋转时间）。而在读取磁盘某块数据时，同时会顺序读取相邻地址的数据加载到PageCache，这样在读取后续连续数据时，只需要从PageCache中读取数据，相当于内存读写，速度会特别快
>    - 后写：数据并不是直接写入到磁盘，而是默认先写入到Page Cache，再由Page Cache刷新到磁盘，刷新频率是由操作系统周期性的sync触发的（用户也可以手动调用sync触发刷新操作）。后写的方式大大减少对磁盘的总写入次数，提高写入效率
> 3. 可用性：分布式系统的高可用几乎都是通过冗余实现的，Kafka同样如此。Kafka的消息存储到partition中，每个partition在其他的broker中都存在多个副本。对外通过主partition提供读写服务，当主partition所在的broker故障时，通过HA机制，将其他Broker上的某个副本partition会重新选举成主partition，继续对外提供服务。