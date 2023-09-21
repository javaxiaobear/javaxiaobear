---
title: 6、符号表
---

> 符号表最主要的目的就是将一个键和一个值联系起来，符号表能够将存储的数据元素是一个键和一个值共同组成的键值对数据，我们可以根据键来查找对应的值。
>
> 符号表中，键具有唯一性。



符号表的应用：

| 应用     | 查找目的                 | 键     | 值       |
| -------- | ------------------------ | ------ | -------- |
| 字典     | 找出单词的释义           | 单词   | 释义     |
| 图书索引 | 找出某个术语相关的页码   | 术语   | 一串页码 |
| 网络搜索 | 找出某个关键字对应的网页 | 关键字 | 网页名称 |

### 1、符号表的API设计

- 节点类

  | 类名     | Node<Key,Value>                                              |
    | -------- | ------------------------------------------------------------ |
  | 构造方法 | Node(Key key,Value value,Node next)：创建Node对象            |
  | 成员变量 | 1.public Key key:存储键<br/>2.public Value value:存储值<br/>3.public Node next:存储下一个结点 |

- 符号表

  | 类名     | SymbolTable<Key,Value>                                       |
    | -------- | ------------------------------------------------------------ |
  | 构造方法 | SymbolTable()：创建SymbolTable对象                           |
  | 成员方法 | 1.public Value get(Key key)：根据键key，找对应的值<br/>2.public void put(Key key,Value val):向符号表中插入一个键值对<br/>3.public void delete(Key key):删除键为key的键值对<br/>4.public int size()：获取符号表的大小 |
  | 成员变量 | 1.private Node head:记录首结点<br/>2.private int N:记录符号表中键值对的个数 |



```java
public class SymbolTable<Key,Value> {
    //头结点
    private Node head;
    //长度
    private int size;


    public SymbolTable() {
        head = new Node(null,null,null);
        size = 0;
    }

    /**
     * ：根据键key，找对应的值
     * @param key
     * @return
     */
    public Value get(Key key){
        Node<Key,Value> n = head;
        while(n.next != null){
            n = n.next;
            if(n.key.equals(key)){
                return n.value;
            }
        }
        return null;
    }

    /**
     * 向符号表中插入一个键值对
     * @param key
     * @param val
     */
    public void put(Key key,Value val){
        Node<Key,Value> pre = head;
        while(pre.next != null){
            pre = pre.next;
            if(pre.key.equals(key)){
                pre.value = val;
                return;
            }
        }
        Node oldFirst = head.next;
        Node<Key, Value> node = new Node<>(key, val, oldFirst);
        head.next = node;
        size++;
    }

    /**
     * 删除键为key的键值对<br/>
     * @param key
     */
    public void delete(Key key){
        Node n = head;
        while(null != n.next){
            if(n.next.key.equals(key)){
                n.next = n.next.next;
                size--;
                return;
            }
            n = n.next;
        }
    }

    /**
     * 获取符号表的大小
     * @return
     */
    public int size(){
       return size;
    }


    private class Node<Key,Value>{
        Key key;
        Value value;
        Node next;

        public Node(Key key, Value value, Node next) {
            this.key = key;
            this.value = value;
            this.next = next;
        }
    }
}
```

### 2、有序符号表

> 刚才实现的符号表，我们可以称之为无序符号表，因为在插入的时候，并没有考虑键值对的顺序，而在实际生活中，有时候我们需要根据键的大小进行排序，插入数据时要考虑顺序，那么接下来我们就实现一下有序符号表。

```java
package com.xiaobear.SymbolTable;

/**
 * @Author xiaobear
 * @date 2021年07月30日 10:00
 * @Description 符号表
 */
public class OrderSymbolTable<Key extends Comparable<Key>,Value> {
    //头结点
    private Node head;
    //长度
    private int size;


    public OrderSymbolTable() {
        head = new Node(null,null,null);
        size = 0;
    }

    /**
     * ：根据键key，找对应的值
     * @param key
     * @return
     */
    public Value get(Key key){
        Node<Key,Value> n = head;
        while(n.next != null){
            n = n.next;
            if(n.key.equals(key)){
                return n.value;
            }
        }
        return null;
    }

    /**
     * 向符号表中插入一个键值对
     * @param key
     * @param val
     */
    public void put(Key key,Value val){
        Node<Key,Value> curr = head.next;
        //记录上一个节点
        Node pre = head;
        //1.如果key大于当前结点的key，则一直寻找下一个结点
        while(curr!=null && key.compareTo(curr.key)>0){
            pre = curr;
            curr = curr.next;
        }
        //2.如果当前结点curr的key和将要插入的key一样，则替换
        if (curr!=null && curr.key.compareTo(key)==0){
            curr.value = val;
            return;
        }
        //3.没有找到相同的key，把新结点插入到curr之前
        Node newNode = new Node(key, val, curr);
        pre.next = newNode;
        size++;
    }

    /**
     * 删除键为key的键值对<br/>
     * @param key
     */
    public void delete(Key key){
        Node n = head;
        while(null != n.next){
            if(n.next.key.equals(key)){
                n.next = n.next.next;
                size--;
                return;
            }
            n = n.next;
        }
    }

    /**
     * 获取符号表的大小
     * @return
     */
    public int size(){
       return size;
    }


    private class Node<Key,Value>{
        Key key;
        Value value;
        Node next;

        public Node(Key key, Value value, Node next) {
            this.key = key;
            this.value = value;
            this.next = next;
        }
    }
}
```
