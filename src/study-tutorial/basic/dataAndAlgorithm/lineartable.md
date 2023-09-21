---
title: 5、线性表
---

> 线性表是最基本、最简单、也是最常用的一种数据结构。一个线性表是n个具有相同特性的数据元素的有限序列。



*前驱元素：若A元素在B元素的前面，则称A为B的前驱元素*

*后继元素：若B元素在A元素的后面，则称B为A的后继元素*

*线性表的特征：数据元素之间具有一种“一对一”的逻辑关系。*

- 第一个数据元素没有前驱，这个数据元素被称为头结点；
2. 最后一个数据元素没有后继，这个数据元素被称为尾结点；
3. 除了第一个和最后一个数据元素外，其他数据元素有且仅有一个前驱和一个后继。

如果把线性表用数学语言来定义，则可以表示为(a1,...ai-1,ai,ai+1,...an)，ai-1领先于ai,ai领先于ai+1，称ai-1是ai的前驱元素，ai+1是ai的后继元素



*线性表的分类：*

- 存储结构
    - 顺序存储
    - 链式存储
- 存储方式
    - 顺序表
    - 链表

常见的线性结构：数组、队列、链表和栈

### 1、顺序表

> 顺序表是在计算机内存中以数组的形式保存的线性表，线性表的顺序存储是指用一组地址连续的存储单元，依次存储线性表中的各个元素、使得线性表中再逻辑结构上响铃的数据元素存储在相邻的物理存储单元中，即通过数据元素物理存储的相邻关系来反映数据元素之间逻辑上的相邻关系。



#### 1、顺序表的实现

##### 1、API设计

| 类名     | SequenceCase                                                 |
| -------- | ------------------------------------------------------------ |
| 构造方法 | SequenceCase(int capacity)：创建容量为capacity的SequenceList对象 |
| 成员方法 | public void clear()：空置线性表<br/>public boolean isEmpty()：判断线性表是否为空，是返回true，否返回false<br/>public int length():获取线性表中元素的个数<br/>public T get(int i):读取并返回线性表中的第i个元素的值<br/>public void insert(int i,T t)：在线性表的第i个元素之前插入一个值为t的数据元素。<br/>public void insert(T t):向线性表中添加一个元素t<br/>public T remove(int i):删除并返回线性表中第i个数据元素。<br/>public int indexOf(T t):返回线性表中首次出现的指定的数据元素的位序号，若不存在，则返回-1。 |
| 成员变量 | private T[] arr：存储元素的数组<br/>private int N:当前线性表的长度 |

##### 2、代码实现

```java
public class SequenceCase<T> {

    /**
     * 存储线性表
     */
    public T[] arr;

    /**
     * 线性表元素个数
     */
    public int sequenceLength;

    public SequenceCase(int capacity) {
        arr = (T[]) new Object[capacity];
        sequenceLength = 0;
    }

    /**
     * 插入元素
     * @param name
     */
    public void insert(T name){
        if(sequenceLength == arr.length){
            throw new RuntimeException("线性表已满");
        }
        arr[sequenceLength++] = name;
    }

    /**
     * 指定索引插入元素
     * @param i
     * @param name
     */
    public void insert(int i, T name){
        if (i == arr.length){
            throw new RuntimeException("当前表已满");
        }
        if (i < 0 || i > sequenceLength){
            throw new RuntimeException("插入的位置不合法");
        }
        for (int j = sequenceLength; j > i; j--) {
            arr[j] = arr[j-1];
        }
        arr[i] = name;
        sequenceLength++;
    }

    /**
     * 根据索引删除元素
     * @param i
     */
    public T remove(int i){
        if (i < 0 || i > sequenceLength-1){
            throw new RuntimeException("当前要删除的元素不存在");
        }
        T t = arr[i];
        for (int j = i; j < sequenceLength; j++) {
            arr[j] = arr[j+1];
        }
        sequenceLength--;
        return t;
    }

    /**
     * 清空整个线性表
     */
    public void clear(){
        sequenceLength = 0;
    }

    /**
     * 线性表是否为空
     * @return
     */
    public boolean isEmpty(){
        return 0 == sequenceLength;
    }

    /**
     * 获取线性表的长度
     * @return
     */
    public int getSequenceLength(){
        return sequenceLength;
    }

    /**
     * 根据索引查询线性表
     * @param i
     * @return
     */
    public T getNameByIndex(int i){
        if(0 > i || i > sequenceLength){
            throw new RuntimeException("未存在该元素");
        }
        return arr[i];
    }

    /**
     * 获取线性表首次出现的序列号
     * @param t
     * @return
     */
    public int indexOf(T t){
        for (int i = 0; i < sequenceLength; i++) {
            if (t.equals(arr[i])){
                return i;
            }
        }
        return -1;
    }
}
```

```java
public class SequenceCaseTest {
    public static void main(String[] args) {
        SequenceCase<String> aCase = new SequenceCase<>(10);
        aCase.insert("yhx");
        aCase.insert("xiaobear");
        aCase.insert("lwh");
        aCase.insert("xiaohuahua");
        aCase.insert(2,"love");
        String nameByIndex = aCase.getNameByIndex(2);
        System.out.println("索引2的名字为：" + nameByIndex);
        String remove = aCase.remove(2);
        System.out.println("删除索引2的元素名称为：" + remove);
        //清空操作
        aCase.clear();
        System.out.println("线性表长度为：" + aCase.getSequenceLength());
    }
}
```

#### 2、顺序表的遍历

> 在java中，遍历集合的方式一般都是用的是foreach循环，如果想让我们的SequenceList也能支持foreach循环，则需要做如下操作：
>
> - 让SequenceList实现Iterable接口，重写iterator方法；
> - 在SequenceList内部提供一个内部类SIterator,实现Iterator接口，重写hasNext方法和next方法；

```java
public class SequenceCase<T> implements Iterable<T>{
        private class SequenceIterator implements Iterator{

        private int temp;

        //遍历从0开始
        public SequenceIterator() {
            this.temp = 0;
        }

        @Override
        public boolean hasNext() {
            return temp < sequenceLength;
        }

        @Override
        public Object next() {
            return arr[temp++];
        }
    }

    @Override
    public Iterator<T> iterator() {
        return new SequenceIterator();
    }
}
```

#### 3、顺序表的扩容

> 在之前的实现中，当我们使用SequenceCase时，先new SequenceCase(5)创建一个对象，创建对象时就需要指定容器的大小，初始化指定大小的数组来存储元素，当我们插入元素时，如果已经插入了5个元素，还要继续插入数据，则会报错，就不能插入了。这种设计不符合容器的设计理念，因此我们在设计顺序表时，应该考虑它的容量的伸缩性。

##### 1、添加元素

> 添加元素时，应该检查当前数组的大小是否能容纳新的元素，如果不能容纳，则需要创建新的容量更大的数组，我们这里创建一个是原数组两倍容量的新数组存储元素。



##### 2、删除元素

> 移除元素时，应该检查当前数组的大小是否太大，比如正在用100个容量的数组存储10个元素，这样就会造成内存空间的浪费，应该创建一个容量更小的数组存储元素。如果我们发现数据元素的数量不足数组容量的1/4，则创建一个是原数组容量的1/2的新数组存储元素。



```java
/**
     * 重置线性表大小
     * @param newSize
     */
public void resize(int newSize){
    T[] temp = arr;
    arr = (T[]) new Object[newSize];
    for (int i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
}
```

添加元素时：

```java
/**
     * 指定索引插入元素
     * @param i
     * @param name
     */
public void insert(int i, T name){
    if (i == arr.length){
        resize(arr.length*2);
    }
    if (i < 0 || i > sequenceLength){
        throw new RuntimeException("插入的位置不合法");
    }
    for (int j = sequenceLength; j > i; j--) {
        arr[j] = arr[j-1];
    }
    arr[i] = name;
    sequenceLength++;
}
```

删除元素时：

```java
/**
     * 根据索引删除元素
     * @param i
     */
public T remove(int i){
    if (i < 0 || i > sequenceLength-1){
        throw new RuntimeException("当前要删除的元素不存在");
    }
    T t = arr[i];
    for (int j = i; j < sequenceLength; j++) {
        arr[j] = arr[j+1];
    }
    sequenceLength--;
    //当线性表元素不足数组的1/4时，重置数组元素大小
    if(0 < sequenceLength && sequenceLength < arr.length/4){
        resize(arr.length/2);
    }
    return t;
}
```

#### 4、顺序表的时间复杂度

> - get(i):不难看出，不论数据元素量N有多大，只需要一次eles[i]就可以获取到对应的元素，所以时间复杂度为O(1);
>
> - insert(int i,T t):每一次插入，都需要把i位置后面的元素移动一次，随着元素数量N的增大，移动的元素也越多，时间复杂为O(n);
> - remove(int i):每一次删除，都需要把i位置后面的元素移动一次，随着数据量N的增大,移动的元素也越多，时间复杂度为O(n);
> - 由于顺序表的底层由数组实现，数组的长度是固定的，所以在操作的过程中涉及到了容器扩容操作。这样会导致顺序表在使用过程中的时间复杂度不是线性的，在某些需要扩容的结点处，耗时会突增，尤其是元素越多，这个问题越明显



### 2、链表

> 链表是一种线性数据结构，其中的每个元素实际上是一个单独的对象，而所有对象都通过每个元素中的引用字段链接在一起。
>
> 链表是一种物理存储单元上非连续、非顺序的存储结构，其物理结构不能只管的表示数据元素的逻辑顺序，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列的结点（链表中的每一个元素称为结点）组成，结点可以在运行时动态生成。

```java
public class LinkedList<T>{

    /**
     * 存储元素
     */
    private T item;

    /**
     * 指向下一节点
     */
    private LinkedList next;

    public LinkedList(T item, LinkedList next) {
        this.item = item;
        this.next = next;
    }
}
```



#### 1、单链表

> 单链表中的每个结点不仅包含值，还包含链接到下一个结点的引用字段。通过这种方式，单链表将所有结点按顺序组织起来。
>
> 单向链表是链表的一种，它由多个结点组成，每个结点都由一个数据域和一个指针域组成，数据域用来存储数据，指针域用来指向其后继结点。链表的头结点的数据域不存储数据，指针域指向第一个真正存储数据的结点。



##### 1、添加元素

如果我们想在给定的结点 prev 之后添加新值，我们应该：

1. 使用给定值初始化新结点 cur；



2. 将 cur 的 next 字段链接到 prev 的下一个结点 next ；



3. 将 prev 中的 next 字段链接到 cur 。



与数组不同，我们不需要将所有元素移动到插入元素之后。因此，我们可以在 O(1) 时间复杂度中将新结点插入到链表中，这非常高效。

在开头添加节点

我们使用头结点开始遍历整个链表，头结点对我们来说是非常重要的。

步骤：

1. 初始化一个新节点cur
2. 将新节点链接到我们的原始节点head
3. 将cur指定为head

##### 2、删除元素



让我们尝试把结点 6从上面的单链表中删除。

1. 从头遍历链表，直到我们找到前一个结点 prev，即结点 23

2. 将 prev（结点 23）与 next（结点 15）链接



结点 6 现在不在我们的单链表中。

##### 3、代码实现

```java
public class SinglyListNode<T> implements Iterable<T> {

    /**
     * 记录头结点
     */
    private LinkedList head;

    /**
     * 链表长度
     */
    private int n;

    public SinglyListNode() {
        head = new LinkedList(null,null);
        n = 0;
    }

    /**
     * 清空链表
     * 头结点.next 指向下一节点为空，头结点元素为空，链表长度为空
     */
    public void clear(){
        head.next = null;
        head.item = null;
        n = 0;
    }

    /**
     * 链表长度
     * @return n
     */
    public int length(){
        return n;
    }

    /**
     * 判断链表是否为空
     * @return
     */
    public boolean isEmpty(){
        return n==0;
    }

    /**
     * 链表增加元素，最后节点
     * @param t 元素
     */
    public void insertNode(T t){
        //获取头结点
        LinkedList linkedList = head;
        //寻找最后一个节点
        while(null != linkedList.next){
            linkedList = linkedList.next;
        }
        //初始化插入的节点,下一节点为空
        LinkedList linkedList1 = new LinkedList(t, null);
        //最后节点的next指向下一节点
        linkedList.next = linkedList1;
        //链表长度+1
        n++;
    }

    /**
     * 指定位置插入元素
     * @param i 插入位置
     * @param t 元素
     */
    public void insertNode(int i,T t){
        //获取头结点
        LinkedList pre = head;
        //获取插入元素的前一节点
        for (int j = 0; j < i; j++) {
            pre = pre.next;
        }
        //获取下一节点（位于i的节点）
        LinkedList next = pre.next;
        //初始化插入节点，且next指向插入元素的下一节点（位于i的节点）
        LinkedList tLinkedList = new LinkedList(t, next);
        //插入元素的前一节点指向插入元素
        pre.next = tLinkedList;
        //链表长度+1
        n++;
    }

    /**
     * 删除指定位置的节点
     * @param i
     */
    public T delete(int i){
        //获取头结点
        LinkedList pre = head;
        for (int j = 0; j < i; j++) {
            pre = pre.next;
        }
        //当前i位置的结点
        LinkedList next = pre.next;
        //前一个结点指向下一个结点，删除当前结点
        pre.next = next.next;
        //长度-1
        n--;
        return next.item;
    }

    public T getIndexOf(int i){
        LinkedList pre = head;
        for (int j = 0; j < i; j++) {
            pre = pre.next;
        }
        LinkedList next = pre.next;
        return next.item;
    }

    private class LinkedList{

        /**
         * 存储元素
         */
        T item;

        /**
         * 指向下一节点
         */
       LinkedList next;

        public LinkedList(T item,LinkedList next) {
            this.item = item;
            this.next = next;
        }
    }

    @Override
    public Iterator<T> iterator() {
        return new LIterator();
    }

    private class LIterator implements Iterator<T>{
        private LinkedList n;
        public LIterator() {
            this.n = head;
        }
        @Override
        public boolean hasNext() {
            return n.next!=null;
        }
        @Override
        public T next() {
            n = n.next;
            return (T) n.item;
        }
    }
}

```

测试类

```java
public class SinglyListNodeTest{
    public static void main(String[] args) {
        SinglyListNode<String> head = new SinglyListNode<>();
        head.insertNode(0,"张胜男");
        head.insertNode(1,"李四");
        head.insertNode(2,"王五");
        head.insertNode(3,"6666");
        head.insertNode(4,"7777");
        for (String s : head) {
            System.out.println(s);
        }
        head.delete(0);
        String indexOf = head.getIndexOf(3);
        System.out.println(indexOf);
        for (String s : head) {
            System.out.println(s);
        }

    }
}
```



#### 2、双链表

> 双向链表也叫双向表，是链表的一种，它由多个结点组成，每个结点都由一个数据域和两个指针域组成，数据域用
> 来存储数据，其中一个指针域用来指向其后继结点，另一个指针域用来指向前驱结点。链表的头结点的数据域不存
> 储数据，指向前驱结点的指针域值为null，指向后继结点的指针域指向第一个真正存储数据的结点。



我们可以与单链表相同的方式访问数据：

1. 我们不能在常量级的时间内访问随机位置。
2. 我们必须从头部遍历才能得到我们想要的第一个结点。
3. 在最坏的情况下，时间复杂度将是 O(N)，其中 N 是链表的长度

##### 1、添加元素

如果我们想在现有的结点 prev 之后插入一个新的结点 cur，我们可以将此过程分为两个步骤：

1. 链接 cur 与 prev 和 next，其中 next 是 prev 原始的下一个节点；



2. 用 cur 重新链接 prev 和 next。



##### 2、删除链表

> 如果我们想从双链表中删除一个现有的结点 cur，我们可以简单地将它的前一个结点 prev 与下一个结点 next 链接起来。
>
> 与单链表不同，使用“prev”字段可以很容易地在常量时间内获得前一个结点。
>
> 因为我们不再需要遍历链表来获取前一个结点，所以时间和空间复杂度都是O(1)。



我们的目标是从双链表中删除结点 6。

因此，我们将它的前一个结点 23 和下一个结点 15 链接起来：



##### 3、代码实现

```java
package com.xiaobear.LinkedList;

import java.util.Iterator;

/**
 * @Author xiaobear
 * @date 2021年07月27日 14:11
 * @Description 双向链表
 */
public class DoublyLinkedList<T> implements Iterable<T>{

    /**
     * 链表长度
     */
    private int n;

    /**
     * 头结点
     */
    private Node head;
    /**
     * 尾结点
     */
    private Node last;

    /**
     * 初始化链表
     */
    public DoublyLinkedList() {
        head = new Node(null,null,null);
        last = null;
        n = 0;
    }

    /**
     * 清空链表
     */
    public void clear(){
        head = null;
        last = null;
        n = 0;
    }

    /**
     * 链表是否为空
     * @return
     */
    public boolean isEmpty(){
        return n==0;
    }

    /**
     * 数组长度
     * @return
     */
    public int length(){
        return n;
    }

    /**
     * 插入元素t
     * @param t
     */
    public void insert(T t){
        if (last==null){
            last = new Node(t,head,null);
            head.next = last;
        }else{
            Node oldLast = last;
            Node node = new Node(t, oldLast, null);
            oldLast.next = node;
            last = node;
        }
        //长度+1
        n++;
    }

    /**
     * 指定位置插入元素
     * @param i
     * @param t
     */
    public void insert(int i,T t){
        if (i < 0 || i >= n){
            throw new RuntimeException("位置不合法");
        }
        Node pre = head;
        for (int j = 0; j < i; j++) {
            pre = pre.next;
        }
        //插入位置的下一节点
        Node nextNode = pre.next;
        //初始化节点
        Node newNode = new Node(t, pre, nextNode);
       //插入节点的前一节点指向head
        nextNode.pre = newNode;
        pre.next = newNode;
        n++;

    }

    /**
     * 尾部插入元素
     * @param t
     */
    public void insertLast(T t){
        insert(n,t);
    }

    /**
     * 获取第一个元素
     * @return
     */
    public T getFirst(){
        if(isEmpty()){
            return null;
        }
        return head.next.item;
    }

    /**
     * 获取最后一个元素
     * @return
     */
    public T getLast(){
        if(isEmpty()){
            return null;
        }
        return last.item;
    }

    /**
     * 获取第i个元素的值
     * @param i
     * @return
     */
    public T getItem(int i){
        if (isEmpty()){
            return null;
        }
        Node firstNode = head.next;
        for (int j = 0; j < i; j++) {
            firstNode = firstNode.next;
        }
        return firstNode.item;
    }

    /**
     * 删除第I个元素
     * @param i
     * @return
     */
    public T remove(int i){
        Node pre = head;
        for (int j = 0; j < i; j++) {
            pre = pre.next;
        }
        //获取当前元素
        Node cur = pre.next;
        Node curNext = cur.next;
        pre.next = curNext;
        curNext.pre = pre;
        n--;
        return cur.item;
    }

    @Override
    public Iterator<T> iterator() {
        return new DIterator();
    }

    private class DIterator implements Iterator{

        private Node n = head;

        @Override
        public boolean hasNext() {
            return n.next != null;
        }

        @Override
        public Object next() {
            n = n.next;
            return n.item;
        }
    }


    /**
     * 节点类
     */
    private class Node{
        //存储元素
        public T item;
        //前一节点
        public Node pre;
        //后一个节点
        public Node next;

        public Node(T item, Node pre, Node next) {
            this.item = item;
            this.pre = pre;
            this.next = next;
        }
    }
}

```

```java
public class ListNode {
  int val;
  ListNode next;
  ListNode prev;
  ListNode(int x) { val = x; }
}

class MyLinkedList {
  int size;
  // sentinel nodes as pseudo-head and pseudo-tail
  ListNode head, tail;
  public MyLinkedList() {
    size = 0;
    head = new ListNode(0);
    tail = new ListNode(0);
    head.next = tail;
    tail.prev = head;
  }

  /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
  public int get(int index) {
    // if index is invalid
    if (index < 0 || index >= size) return -1;

    // choose the fastest way: to move from the head
    // or to move from the tail
    ListNode curr = head;
    if (index + 1 < size - index)
      for(int i = 0; i < index + 1; ++i) curr = curr.next;
    else {
      curr = tail;
      for(int i = 0; i < size - index; ++i) curr = curr.prev;
    }

    return curr.val;
  }

  /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
  public void addAtHead(int val) {
    ListNode pred = head, succ = head.next;

    ++size;
    ListNode toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
  }

  /** Append a node of value val to the last element of the linked list. */
  public void addAtTail(int val) {
    ListNode succ = tail, pred = tail.prev;

    ++size;
    ListNode toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
  }

  /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
  public void addAtIndex(int index, int val) {
    // If index is greater than the length, 
    // the node will not be inserted.
    if (index > size) return;

    // [so weird] If index is negative, 
    // the node will be inserted at the head of the list.
    if (index < 0) index = 0;

    // find predecessor and successor of the node to be added
    ListNode pred, succ;
    if (index < size - index) {
      pred = head;
      for(int i = 0; i < index; ++i) pred = pred.next;
      succ = pred.next;
    }
    else {
      succ = tail;
      for (int i = 0; i < size - index; ++i) succ = succ.prev;
      pred = succ.prev;
    }

    // insertion itself
    ++size;
    ListNode toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
  }

  /** Delete the index-th node in the linked list, if the index is valid. */
  public void deleteAtIndex(int index) {
    // if the index is invalid, do nothing
    if (index < 0 || index >= size) return;

    // find predecessor and successor of the node to be deleted
    ListNode pred, succ;
    if (index < size - index) {
      pred = head;
      for(int i = 0; i < index; ++i) pred = pred.next;
      succ = pred.next.next;
    }
    else {
      succ = tail;
      for (int i = 0; i < size - index - 1; ++i) succ = succ.prev;
      pred = succ.prev.prev;
    }

    // delete pred.next 
    --size;
    pred.next = succ;
    succ.prev = pred;
  }
}
```



#### 3、链表反转

> 定义一个函数， 输入一个链表的头节点， 反转该链表并输出反转后链表的头节点。
>
> 原链表中数据为：1->2->3>4
>
> 反转后链表中数据为：4->3->2->1

##### 1、递归

回顾递归的模板

```java
public ListNode reverseList(ListNode head){
    if(终止条件){
        return;
    }
    //逻辑处理
    //递归调用
    ListNode temp = reverseList(参数);
    //逻辑处理
}
```

*终止条件：链表为空或者链表没有尾节点的时候*

```java
if(head == null || head.next == null){
    return head;
}
```

*怎样递归调用：从当前节点的下一节点开始递归*

*逻辑处理：把当前节点挂在递归之后的链表的末尾*



```java
    /**
     * 链表反转
     */
    public void reverse(){
        if(null == head){
            return;
        }
        //从下一节点开始
        reverseList(head.next);
    }

    /**
     * 链表反转
     * @param curr
     * @return
     */
    public LinkedList reverseList(LinkedList curr){
        //如果链表的下一节点为空
        if(null == curr.next){
            head.next = curr;
            return curr;
        }
        //当前节点的上一个节点
        LinkedList pre = reverseList(curr.next);
        pre.next = curr;
        //当前节点的下一节点指向null
        curr.next = null;
        //返回当前节点
        return curr;
    }
```

第二种：

```java
public ListNode reverseList(ListNode head){
    if(null == head || null ==head.next){
        return head;
    }
    //保存当前节点的下一节点
    ListNode temp = head.next;
    //开始递归调用,reverse就是反转之后的链表，不包括头结点
    ListNode reverse = reverseList(temp);
    //将头结点挂在当前节点的后面
    temp.next = head;
    //反转之后头节点变成尾节点了，下一节点为空
    head.next = null;
    return reverse;
}
```

因为递归调用之后h e a d . n e x t 节点就会成为r e v e r s e 节点的尾结点， 我们可以直接让h e a d . n e x t . n e x t = h e a d ; ， 这样代码会更简洁一些。

```java
public ListNode reverse(ListNode head){
    if(null == head || null ==head.next){
        return head;
    }
    ListNode reverse = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return reverse;
}
```

> 这种递归往下传递的时候基本上没有逻辑处理， 当往回反弹的时候才开始处理， 也就是从链表的尾端往前开始处理的。我们还可以再来改一下， 在链表递归的时候从前往后处理， 处理完之后直接返回递归的结果， 这就是所谓的尾递归， 这种运行效率要比上一种好很多。

```java
public ListNode reverseList(ListNode head){
    return reverseListEnd(head, null);
}
public ListNode reverseListEnd(ListNode head, ListNode newNode){
    if(head == null){
        return newNode;
    }
    //当前节点的下一节点
    ListNode next = head.next;
    head.next = newNode;
    ListNode node = reverseListEnd(next,head);
    return node;
}
```

##### 2、双链表

> 双链表求解是把原链表的结点一个个摘掉， 每次摘掉的链表都让它成为新的链表的头结点， 然后更新新链表。





```java
public ListNode reverseList(ListNode head){
    //初始化新链表
    ListNode result = null;
    while(head != null){
        //保存当前节点的下一节点
        ListNode temp = head.next;
        //每次访问的原链表节点都会成为新链表的头结点
        head.next = result;
        //更新新链表
        result = head;
        //重新赋值
        head = temp;
    }
    return result;
}
```

##### 3、栈

> 栈的原理：先进后出
>
> 实现原理就是把链表节点一个个入栈， 当全部入栈完之后再一个个出栈， 出栈的时候在把出栈的结点串成一个新的链表。



```java
public LinkedList reverseListByStack(ListNode head){
    Stack<LinkedList> stack = new Stack<>();
    while (head != null){
        //链表入栈
        stack.push(head);
        head = head.next; 
    }
    if(stack.isEmpty()){
        return null;
    }
    //栈中元素出栈
    LinkedList pop = stack.pop();
    LinkedList result = pop;
    while (!stack.isEmpty()){
        LinkedList pop1 = stack.pop();
        pop.next = pop1;
        pop = pop.next;
    }
    //最后一个结点就是反转前的头结点，一定要让他的next等于空，否则会构成环
    pop.next =null;
    return result;
}
```

#### 4、快慢指针

> 快慢指针指的是定义两个指针，这两个指针的移动速度一块一慢，以此来制造出自己想要的差值，这个差值可以然我们找到链表上相应的结点。一般情况下，快指针的移动步长为慢指针的两倍

##### 1、中间值问题

> 找到链表的中间元素并返回
>
> 利用快慢指针，我们把一个链表看成一个跑道，假设a的速度是b的两倍，那么当a跑完全程后，b刚好跑一半，以此来达到找到中间节点的目的。



```java
public class FastAndSlowPointer {
    public static void main(String[] args) {
        Node<String> aa = new Node<>("aa", null);
        Node<String> bb = new Node<>("bb", null);
        Node<String> cc = new Node<>("cc", null);
        Node<String> dd = new Node<>("dd", null);
        Node<String> ee = new Node<>("ee", null);
        Node<String> ff = new Node<>("ff", null);
        Node<String> gg = new Node<>("gg", null);

        aa.next = bb;
        bb.next = cc;
        cc.next = dd;
        dd.next = ee;
        ee.next = ff;
        ff.next = gg;

        System.out.println("链表的中间元素为："+getMiddle(aa));
    }

    /**
     * 寻找链表的中间元素
     * @param first 链表的头结点
     * @return 链表中间节点的值
     */
    public static String getMiddle(Node<String> first){
        //定义两个指针分别等于first
        Node<String> fast = first;
        Node<String> slow = first;
        while(null != fast && null != fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.item;
    }

    public static class Node<T>{
        T item;
        Node next;

        public Node(T item, Node next) {
            this.item = item;
            this.next = next;
        }
    }
}
```

*方法代码：*

```java
/**
     * 寻找链表的中间元素
     * @param first 链表的头结点
     * @return 链表中间节点的值
     */
public String getMiddle(Node<String> first){
    //定义两个指针分别等于first
    Node<String> fast = first;
    Node<String> slow = first;
    while(null != fast && null != fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.item;
}
```

##### 2、单向链表是否有环



> - 使用快慢指针的思想，还是把链表比作一条跑道，链表中有环，那么这条跑道就是一条圆环跑道，在一条圆环跑道中，两个人有速度差，那么迟早两个人会相遇，只要相遇那么就说明有环。
> - 使用哈希表，将链表的值存入Set中，如果有存在相同元素的，就说明有环

- 快慢指针

```java
/**
     * 判断链表是否有环--快慢指针
     * @param first 链表的头结点
     * @return
     */
public static boolean isCircle(Node<String> first){
    //定义两个指针分别等于first
    Node<String> fast = first;
    Node<String> slow = first;
    while(null != first && null != first.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast.equals(slow)){
            return true;
        }
    }
    return false;
}
```

- 哈希表

```java
/**
     *
     * @param first
     * @return
     */
public static boolean isCircleBySet(Node<String> first){
    Set<String> strings = new HashSet<>();
    while(null !=first){
        //将值存入set集合中
        if(!strings.add(first.item)){
            return true;
        }
        first = first.next;
    }
    return false;
}
```

##### 3、有环链表入口问题

> 当快慢指针相遇时，我们可以判断到链表中有环，这时重新设定一个新指针指向链表的起点，且步长与慢指针一样为1，则慢指针与“新”指针相遇的地方就是环的入口



```java
/**
     * 寻找有环链表的入口
     * @param first
     * @return
     */
public String getEntrance(Node<String> first){
    //定义两个指针分别等于first
    Node<String> fast = first;
    Node<String> slow = first;
    //新节点
    Node<String> temp = null;
    while(null != first && null != first.next){
        fast = fast.next.next;
        slow = slow.next;
        //快慢指针相遇，初始化新节点，接着遍历
        if(fast.equals(slow)){
            temp = first;
            continue;
        }
        if(null != temp){
            temp = temp.next;
            if(temp.equals(slow)){
                return temp.item;
            }
        }
    }
    return null;
}
```



#### 5、循环链表

> 循环链表，顾名思义，链表整体要形成一个圆环状。在单向链表中，最后一个节点的指针为null，不指向任何结点，因为没有下一个元素了。要实现循环链表，我们只需要让单向链表的最后一个节点的指针指向头结点即可。



#### 6、约瑟夫问题

> 传说有这样一个故事，在罗马人占领乔塔帕特后，39 个犹太人与约瑟夫及他的朋友躲到一个洞中，39个犹太人决定宁愿死也不要被敌人抓到，于是决定了一个自杀方式，41个人排成一个圆圈，第一个人从1开始报数，依次往后，如果有人报数到3，那么这个人就必须自杀，然后再由他的下一个人重新从1开始报数，直到所有人都自杀身亡为止。然而约瑟夫和他的朋友并不想遵从。于是，约瑟夫要他的朋友先假装遵从，他将朋友与自己安排在第16个与第31个位置，从而逃过了这场死亡游戏 。

*问题转换：*

> 41个人坐一圈，第一个人编号为1，第二个人编号为2，第n个人编号为n。
> 1.编号为1的人开始从1报数，依次向后，报数为3的那个人退出圈；
> 2.自退出那个人开始的下一个人再次从1开始报数，以此类推；
> 3.求出最后退出的那个人的编号。



*解题思路：*

> 1. 构建含有41个结点的单向循环链表，分别存储1~41的值，分别代表这41个人；
> 2. 使用计数器count，记录当前报数的值；
> 3. 遍历链表，每循环一次，count++；
> 4. 判断count的值，如果是3，则从链表中删除这个结点并打印结点的值，把count重置为0；

```java
public class JosephQuestion {
    public static void main(String[] args) {
        //先构建循环链表
        Node<Integer> first = null;
        //记录当前节点的值
        Node<Integer> pre = null;
        for (int i = 1; i <= 41; i++) {
            //如果是第一个节点
            if(1 == i){
                first = new Node<>(i,null);
                pre = first;
                continue;
            }
            Node node = new Node(i, null);
            pre.next = node;
            //重置pre
            pre = node;
            //构建循环链表，让最后一个结点指向第一个结点
            if (41 == i){
                pre.next = first;
            }
        }
        //记录当前的报数值
        int count = 0;
        Node<Integer> head = first;
        //记录当前节点
        Node<Integer> temp = null;
        while (head != head.next){
            count++;
            if(3 == count){
                //判断count的值，如果是3，则从链表中删除这个结点并打印结点的值，把count重置为0；
                temp.next = head.next;
                System.out.print(head.item+",");
                count = 0;
            }else {
                temp = head;
            }
            head = head.next;
        }
        System.out.println(head.item);
    }

    public static class Node<T>{
        T item;
        Node next;

        public Node(T item, Node next) {
            this.item = item;
            this.next = next;
        }
    }
}
```



### 3、栈

> 栈是一种基于先进后出(FILO)的数据结构，是一种只能在一端进行插入和删除操作的特殊线性表。它按照先进后出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据（最后一个数据被第一个读出来）。
>
> 我们称数据进入到栈的动作为压栈，数据从栈中出去的动作为弹栈。



#### 1、栈的API设计

| 类名     | Stack                                                        |
| -------- | ------------------------------------------------------------ |
| 构造方法 | Stack：创建Stack对象                                         |
| 成员方法 | 1.public boolean isEmpty()：判断栈是否为空，是返回true，否返回false<br/>2.public int size():获取栈中元素的个数<br/>3.public T pop():弹出栈顶元素<br/>4.public void push(T t)：向栈中压入元素t |
| 成员变量 | private Node head:记录首结点<br/>private int N:当前栈的元素个数 |

```java
public class Stack<T> implements Iterable<T>{
    /**
     *   栈长度
     */
    private int size;

    /**
     * 头结点
     */
    private Node head;

    public Stack() {
        head = new Node(null,null);
        size = 0;
    }

    public boolean isEmpty(){
        return size == 0;
    }

    public int size(){
        return size;
    }

    /**
     * 数据入栈
     * @param t
     */
    public void push(T t){
        Node next = head.next;
        //新节点
        Node newNode = new Node(t, next);
        //重新赋值
        head.next = newNode;
        size++;
    }

    /**
     * 数据出栈
     * @return
     */
    public T pop(){
        Node next = head.next;
        if(null == next){
            return null;
        }
        head.next = head.next.next;
        size--;
        return next.item;
    }

    @Override
    public Iterator<T> iterator() {
        return new SIterator();
    }

    private class SIterator implements Iterator<T>{
        private Node n = head;
        @Override
        public boolean hasNext() {
            return n.next!=null;
        }
        @Override
        public T next() {
            Node node = n.next;
            n = n.next;
            return node.item;
        }
    }

    private class Node{
        public T item;
        public Node next;
        public Node(T item, Node next) {
            this.item = item;
            this.next = next;
        }
    }
}
```

#### 2、括号匹配问题

> 给定一个字符串，里边可能包含"()"小括号和其他字符，请编写程序检查该字符串的中的小括号是否成对出现。
> 例如：
> "(上海)(长安)"：正确匹配
> "上海((长安))"：正确匹配
> "上海(长安(北京)(深圳)南京)":正确匹配
> "上海(长安))"：错误匹配
> "((上海)长安"：错误匹配

步骤：

1. 创建一个栈用来存储左括号
2. 从左往右遍历字符串，拿到每一个字符
3. 判断该字符是不是左括号，如果是，放入栈中存储
4. 判断该字符是不是右括号，如果不是，继续下一次循环
5. 如果该字符是右括号，则从栈中弹出一个元素t；
6. 判断元素t是否为null，如果不是，则证明有对应的左括号，如果不是，则证明没有对应的左括号
7. 循环结束后，判断栈中还有没有剩余的左括号，如果有，则不匹配，如果没有，则匹配



```java
/**
     * 左括号入栈，右括号出栈
     * @param str
     * @return
     */
public boolean isMatch(String str){
    //创建一个栈存储左括号
    Stack<String> stack = new Stack<>();
    for (int i = 0; i < str.length(); i++) {
        
        if(s.equals("(")){
            stack.push(s);
        }else if(s.equals(")")){
            String pop = stack.pop();
            if (pop == null) {
                return false;
            }
        }
    }
    //栈中元素是否为空
    if(stack.size == 0){
        return true;
    }
    return false;
}
```

#### 3、逆波兰表达式

> 中缀表达式就是我们平常生活中使用的表达式，例如：1+32,2-(1+3)等等*
>
> 中缀表达式的特点是：二元运算符总是置于两个操作数中间

逆波兰表达式(后缀表达式)：

> 逆波兰表达式是波兰逻辑学家J・卢卡西维兹(J・ Lukasewicz)于19 29年首先提出的一种表达式的表示方法，后缀表达式的特点：运算符总是放在跟它相关的操作数之后。



给定一个只包含加减乘除四种运算的逆波兰表达式的数组表示方式，求出该逆波兰表达式的结果

```java
/**
     * 求逆波兰表达式
     * @param number
     * @return
     */
public int caculate(String[] number){
    Stack<Integer> stack = new Stack<>();
    for (int i = 0; i < number.length; i++) {
        String s = number[i];
        Integer pop;
        Integer pop1;
        Integer temp;
        if("+".equals(s)){
            pop = stack.pop();
            pop1 = stack.pop();
            temp = pop + pop1;
            stack.push(temp);
        }else if("-".equals(s)){
            pop = stack.pop();
            pop1 = stack.pop();
            temp = pop1 - pop;
            stack.push(temp);
        }else if("*".equals(s)){
            pop = stack.pop();
            pop1 = stack.pop();
            temp = pop1 * pop;
            stack.push(temp);
        }else if("/".equals(s)){
            pop = stack.pop();
            pop1 = stack.pop();
            temp = pop1 / pop;
            stack.push(temp);
        }else {
            stack.push(Integer.parseInt(s));
        }
    }
    return stack.pop();
}
```



### 4、队列

> 队列是一种基于先进先出(FIFO)的数据结构，是一种只能在一端进行插入,在另一端进行删除操作的特殊线性表，它按照先进先出的原则存储数据，先进入的数据，在读取数据时先读被读出来。



#### 1、队列的API设计

| 类名     | Queue                                                        |
| -------- | ------------------------------------------------------------ |
| 构造方法 | Queue()：创建Queue对象                                       |
| 成员方法 | 1.public boolean isEmpty()：判断队列是否为空，是返回true，否返回false<br/>2.public int size():获取队列中元素的个数<br/>3.public T dequeue():从队列中拿出一个元素<br/>4.public void enqueue(T t)：往队列中插入一个元素 |
| 成员变量 | 1.private Node head:记录首结点<br/>2.private int N:当前栈的元素个数<br/>3.private Node last:记录最后一个结点 |

```java
public class Queue<T> implements Iterable<T>{

    private int size;

    private Node head;

    private Node last;

    public Queue() {
        size = 0;
        head = new Node(null,null);
        last = null;
    }

    public boolean isEmpty(){
        return size == 0;
    }

    public int size(){
        return size;
    }

    /**
     * 插入元素到队列
     * @param t
     */
    public void enqueue(T t){
        //如果链尾都为空
        if(null == last){
            last = new Node(t,null);
            head.next = last;
        }else {
            //如果链尾不为空
            Node pre = last;
            last = new Node(t, null);
            pre.next = last;
        }
        size++;
    }

    /**
     * 取出元素
     * @return
     */
    public T dequeue(){
        if (isEmpty()){
            return null;
        }
        Node oldHead = head.next;
        head.next = oldHead.next;
        size--;
        if (isEmpty()){
            last = null;
        }
        return oldHead.item;
    }

    /**
     * 节点类
     */
    private class Node{
        public T item;
        public Node next;

        public Node(T item, Node next) {
            this.item = item;
            this.next = next;
        }
    }

    @Override
    public Iterator<T> iterator() {
        return new QIterator();
    }

    public class QIterator implements Iterator<T>{

        private Node n = head;

        @Override
        public boolean hasNext() {
            return n.next != null;
        }

        @Override
        public T next() {
            Node node = n.next;
            n = n.next;
            return node.item;
        }
    }
}
```
