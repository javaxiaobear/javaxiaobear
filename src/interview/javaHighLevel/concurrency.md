---
title: Java 并发编程 面试题
---



## 1、Java中垃圾回收有什么目的？什么时候进行垃圾回收？

> **垃圾回收的目的**：识别并且丢弃应用不再使用的对象来释放和重用资源。
>
> **垃圾回收**：是在内存中存在没有引用的对象或超过作用域的对象时进行的。

## 2、线程之间如何通信及线程之间如何同步？

> 通信：指线程之间如何来交换信息。
>
> **线程之间的通信机制：共享内存和消息传递**
>
> Java采用的是**共享内存**模型，Java线程之间的通信总是隐式的进行，整个通信机制对程序员完全透明。

## 3、什么是Java内存模型？

> **共享内存模型指的就是Java内存模型(简称JMM)**，JMM决定一个线程对共享变量的写入时,能对另一个线程可见。从抽象的角度来看，JMM定义了线程和主内存之间的抽象关系：线程之间的共享变量存储在主内存（main memory）中，每个线程都有一个私有的本地内存（local memory），本地内存中存储了该线程以读/写共享变量的副本。本地内存是JMM的一个抽象概念，并不真实存在。它涵盖了缓存，写缓冲区，寄存器以及其他的硬件和编译器优化。

## 4、线程池有几种实现方式？

> 线程池的创建方法总共有 7 种，但总体来说可分为 2 类：
>
> 1. 通过 ThreadPoolExecutor 创建的线程池；
> 2. 通过 Executors 创建的线程池。
>
> 线程池的创建方式总共包含以下 7 种（其中 6 种是通过 Executors 创建的，1 种是通过 ThreadPoolExecutor 创建的）：
>
> 1. Executors.newFixedThreadPool：创建一个固定大小的线程池，可控制并发的线程数，超出的线程会在队列中等待；
> 2. Executors.newCachedThreadPool：创建一个可缓存的线程池，若线程数超过处理所需，缓存一段时间后会回收，若线程数不够，则新建线程；
> 3. Executors.newSingleThreadExecutor：创建单个线程数的线程池，它可以保证先进先出的执行顺序；
> 4. Executors.newScheduledThreadPool：创建一个可以执行延迟任务的线程池；
> 5. Executors.newSingleThreadScheduledExecutor：创建一个单线程的可以执行延迟任务的线程池；
> 6. Executors.newWorkStealingPool：创建一个抢占式执行的线程池（任务执行顺序不确定）【JDK 1.8 添加】。
> 7. ThreadPoolExecutor：最原始的创建线程池的方式，它包含了 7 个参数可供设置，会更加可控。

## 5、自定义线程池的各个参数含义？

> **参数 1：corePoolSize**
>
> 核心线程数，线程池中始终存活的线程数。
>
> **参数 2：maximumPoolSize**
>
> 最大线程数，线程池中允许的最大线程数，当线程池的任务队列满了之后可以创建的最大线程数。
>
> **参数 3：keepAliveTime**
>
> 最大线程数可以存活的时间，当线程中没有任务执行时，最大线程就会销毁一部分，最终保持核心线程数量的线程。
>
> **参数 4：unit**
>
> 单位是和参数 3 存活时间配合使用的，合在一起用于设定线程的存活时间 ，参数 keepAliveTime 的时间单位有以下 7 种可选：
>
> - TimeUnit.DAYS：天
> - TimeUnit.HOURS：小时
> - TimeUnit.MINUTES：分
> - TimeUnit.SECONDS：秒
> - TimeUnit.MILLISECONDS：毫秒
> - TimeUnit.MICROSECONDS：微妙
> - TimeUnit.NANOSECONDS：纳秒
>
> **参数 5：workQueue**
>
> 一个阻塞队列，用来存储线程池等待执行的任务，均为线程安全，它包含以下 7 种类型：
>
> - ArrayBlockingQueue：一个由数组结构组成的有界阻塞队列；
> - LinkedBlockingQueue：一个由链表结构组成的有界阻塞队列；
> - SynchronousQueue：一个不存储元素的阻塞队列，即直接提交给线程不保持它们；
> - PriorityBlockingQueue：一个支持优先级排序的无界阻塞队列；
> - DelayQueue：一个使用优先级队列实现的无界阻塞队列，只有在延迟期满时才能从中提取元素；
> - LinkedTransferQueue：一个由链表结构组成的无界阻塞队列。与SynchronousQueue类似，还含有非阻塞方法；
> - LinkedBlockingDeque：一个由链表结构组成的双向阻塞队列。
>
> 较常用的是 LinkedBlockingQueue 和 Synchronous，线程池的排队策略与 BlockingQueue 有关。
>
> **参数 6：threadFactory**
>
> 线程工厂，主要用来创建线程，默认为正常优先级、非守护线程。
>
> **参数 7：handler**
>
> 拒绝策略，拒绝处理任务时的策略，系统提供了 4 种可选：
>
> - AbortPolicy：拒绝并抛出异常。
> - CallerRunsPolicy：使用当前调用的线程来执行此任务。
> - DiscardOldestPolicy：抛弃队列头部（最旧）的一个任务，并执行当前任务。
> - DiscardPolicy：忽略并抛弃当前任务。
>
> 默认策略为 AbortPolicy。

```java
ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(4, 9, 0L, TimeUnit.SECONDS, new LinkedBlockingDeque<>(2));
```

创建了一个`ThreadPoolExecutor`对象，并设置了以下参数：

- `corePoolSize`：线程池的核心线程数为4，即线程池中始终保持的活动线程数。
- `maximumPoolSize`：线程池的最大线程数为9，即线程池中允许的最大线程数，包括核心线程和非核心线程。
- `keepAliveTime`：空闲线程的存活时间为0秒，在空闲时间超过该值时，多余的线程将被终止。
- `unit`：存活时间的时间单位，这里是秒。
- `workQueue`：使用了一个容量为2的`LinkedBlockingDeque`作为等待队列，用于存储等待执行的任务。

这个线程池的特点是：

- 当有新任务提交时，如果核心线程数小于`corePoolSize`，则会创建新的核心线程来执行任务。
- 如果核心线程数已达到`corePoolSize`，但是等待队列未满，则任务会被添加到等待队列中。
- 如果等待队列已满，但是当前线程数小于`maximumPoolSize`，则会创建新的非核心线程来执行任务。
- 如果当前线程数已达到`maximumPoolSize`，并且等待队列也已满，则根据线程池的拒绝策略来处理新任务。

可以使用`threadPoolExecutor`对象来提交任务并执行。例如，您可以使用`execute()`方法提交`Runnable`任务或使用`submit()`方法提交`Callable`任务。请记得在不需要使用线程池时，调用`shutdown()`方法来关闭线程池，以释放资源。

## 6、wait vs sleep的区别

> 共同点：wait() ，wait(long) 和 sleep(long) 的效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态
>
> 不同点：
>
> | 不同点   | wait                                                         | sleep                                                        |
> | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
> | 方法归属 | wait()，wait(long) 都是 Object 的成员方法，每个对象都有      | sleep(long) 是 Thread 的静态方法                             |
> | 醒来时机 | wait(long) 和 wait() 还可以被 notify 唤醒，wait() 如果不唤醒就一直等下去,它们都可以被打断唤醒 | 执行 sleep(long) 和 wait(long) 的线程都会在等待相应毫秒后醒来,它们都可以被打断唤醒 |
> | 锁特性   | wait 方法的调用必须先获取 wait 对象的锁<br>wait 方法执行后会释放对象锁，允许其它线程获得该对象锁（我放弃 cpu，但你们还可以用） | 而 sleep 则无此限制<br> sleep 如果在 synchronized 代码块中执行，并不会释放对象锁（我放弃 cpu，你们也用不了） |

## 7、 lock vs synchronized的区别

> lock和synchronized都是用于实现线程同步的机制，但它们有一些区别：
>
> - 语法和使用方式：synchronized是Java语言内置的关键字，可以直接在方法或代码块中使用。而lock是一个接口，需要通过调用其方法来获取锁和释放锁。
>
> - 灵活性：lock提供了更大的灵活性。它可以实现更复杂的同步需求，例如可重入性、公平性、条件变量等。而synchronized是基于Java语言内置的监视器锁实现的，功能较为简单，只能实现基本的同步。
> - 性能：在低竞争的情况下，synchronized的性能可能比lock更好，因为synchronized是由JVM底层实现的，经过了优化。但在高竞争的情况下，lock的性能可能更好，因为它提供了更细粒度的控制和更高的并发性。
> - 异常处理：lock可以在获取锁时设置超时时间，并在超时后返回，避免线程一直等待。而synchronized在获取锁时，如果无法获取到锁，线程会一直阻塞等待。
> - 可中断性：lock提供了lockInterruptibly()方法，可以在等待锁的过程中响应中断请求。而synchronized无法响应中断请求，一旦获取锁，线程会一直执行，直到释放锁。

## 8、悲观锁 vs 乐观锁的区别

> * 悲观锁的代表是 synchronized 和 Lock 锁
>   * 其核心思想是【线程只有占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待】
>   * 线程从运行到阻塞、再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能
>   * 实际上，线程在获取 synchronized 和 Lock 锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会
>
> * 乐观锁的代表是 AtomicInteger，使用 cas 来保证原子性
>   * 其核心思想是【无需加锁，每次只有一个线程能成功修改共享变量，其它失败的线程不需要停止，不断重试直至成功】
>   * 由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换
>   * 它需要多核 cpu 支持，且线程数不应超过 cpu 核数

## 9、你了解ThreadLocal吗？

> **作用**
>
> * ThreadLocal 可以实现【资源对象】的线程隔离，让每个线程各用各的【资源对象】，避免争用引发的线程安全问题
> * ThreadLocal 同时实现了线程内的资源共享
>
> **原理**
>
> 每个线程内有一个 ThreadLocalMap 类型的成员变量，用来存储资源对象
>
> * 调用 set 方法，就是以 ThreadLocal 自己作为 key，资源对象作为 value，放入当前线程的 ThreadLocalMap 集合中
> * 调用 get 方法，就是以 ThreadLocal 自己作为 key，到当前线程中查找关联的资源值
> * 调用 remove 方法，就是以 ThreadLocal 自己作为 key，移除当前线程关联的资源值
>
> ThreadLocalMap 的一些特点
>
> * key 的 hash 值统一分配
> * 初始容量 16，扩容因子 2/3，扩容容量翻倍
> * key 索引冲突后用开放寻址法解决冲突
>
> **弱引用 key**
>
> ThreadLocalMap 中的 key 被设计为弱引用，原因如下
>
> * Thread 可能需要长时间运行（如线程池中的线程），如果 key 不再使用，需要在内存不足（GC）时释放其占用的内存
>
> **内存释放时机**
>
> * 被动 GC 释放 key
>   * 仅是让 key 的内存释放，关联 value 的内存并不会释放
> * 懒惰被动释放 value
>   * get key 时，发现是 null key，则释放其 value 内存
>   * set key 时，会使用启发式扫描，清除临近的 null key 的 value 内存，启发次数与元素个数，是否发现 null key 有关
> * 主动 remove 释放 key，value
>   * 会同时释放 key，value 的内存，也会清除临近的 null key 的 value 内存
>   * 推荐使用它，因为一般使用 ThreadLocal 时都把它作为静态变量（即强引用），因此无法被动依靠 GC 回收

## 10、start VS run的区别

> 1.  start（）方法来启动线程，真正实现了多线程运行。这时无需等待 run 方法体代码执行完毕， 可以直接继续执行下面的代码。
> 2.  通过调用 Thread 类的 start()方法来启动一个线程， 这时此线程是处于就绪状态， 并没有运行。
> 3.  方法 run()称为线程体，它包含了要执行的这个线程的内容，线程就进入了运行状态，开始运行 run 函数当中的代码。 Run 方法运行结束， 此线程终止。然后CPU 再调度其它线程。

## 11、什么是volatile关键字？它的作用是什么？

> `volatile`是Java中的关键字，用于修饰变量。它的主要作用是确保多个线程之间对变量的可见性和有序性。当一个变量被声明为
>
> `volatile`时，它将具备以下特性：
>
> - 可见性：对一个`volatile`变量的写操作会立即被其他线程可见，读操作也会读取最新的值。
> - 有序性：`volatile`变量的读写操作具备一定的顺序性，不会被重排序。

## 12、`volatile`关键字和`synchronized`关键字有什么区别？

> - `volatile`关键字用于修饰变量，而`synchronized`关键字用于修饰代码块或方法。
> - `volatile`关键字保证了变量的可见性和有序性，但不提供原子性。而`synchronized`关键字不仅保证了可见性和有序性，还提供了原子性。
> - 多个线程访问`volatile`变量时，不会阻塞线程，而`synchronized`关键字会对代码块或方法进行加锁，可能会阻塞其他线程的访问。

## 13、`volatile`关键字如何确保可见性和有序性？

> - `volatile`关键字通过使用内存屏障和禁止重排序来确保可见性和有序性。
> - 写操作：对一个`volatile`变量的写操作会立即刷新到主内存中，并清空本地缓存，使其他线程可见。
> - 读操作：对一个`volatile`变量的读操作会从主内存中读取最新的值，并刷新本地缓存。

## 14、什么情况下应该使用`volatile`关键字？

> - 当多个线程访问同一个变量时，且其中有一个线程进行写操作，其他线程进行读操作，可以考虑使用`volatile`关键字。
> - 当变量的值不依赖于当前值，或者只有单一的写操作，可以考虑使用`volatile`关键字。

## 15、`volatile`关键字能否替代锁（`synchronized`）？

> `volatile`关键字不能替代锁（`synchronized`），因为它无法提供原子性的操作。`volatile`只能保证可见性和有序性，但无法解决多线程并发修改同一变量的问题。

## 16、`volatile`关键字是否能够解决线程安全问题？

> `volatile`关键字不能解决所有的线程安全问题。它只能保证对变量的单个读/写操作具有可见性和有序性。对于复合操作（例如自增、自减等），`volatile`无法保证原子性。

## 17、`volatile`关键字和原子性有什么关系？

> - `volatile`关键字不能保证操作的原子性。原子性指的是一个操作是不可中断的，要么全部执行成功，要么全部失败。
> - 如果需要保证操作的原子性，可以使用`synchronized`关键字或`java.util.concurrent.atomic`包下的原子类。

## 18、`volatile`关键字对于单例模式中的双重检查锁定有什么作用？

> - 在双重检查锁定的单例模式中，使用`volatile`关键字修饰单例对象的引用，可以确保多线程环境下的正确性。
> - `volatile`关键字可以防止指令重排序，从而避免在多线程环境下获取到未完全初始化的实例对象。