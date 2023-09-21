--- 
title: 7、二叉树
---

### 1、树的相关概念

#### 1、树的基本定义

> 树是我们计算机中非常重要的一种数据结构，同时使用树这种数据结构，可以描述现实生活中的很多事物，例如家谱、单位的组织架构、等等。
> 树是由n（n>=1）个有限结点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。



*树具有以下特点：*

- 每个结点有零个或多个子结点；
- 没有父结点的结点为根结点；
- 每一个非根结点只有一个父结点；
- 每个结点及其后代结点整体上可以看做是一棵树，称为当前结点的父结点的一个子树；

#### 2、相关术语

##### 1、结点的度

> 一个结点含有的子树的个数称为该结点的度；

##### 2、叶子结点

> 度为0的结点称为叶结点，也可以叫做终端结点

##### 3、分支结点

> 度不为0的结点称为分支结点，也可以叫做非终端结点

##### 4、结点的层次

> 从根结点开始，根结点的层次为1，根的直接后继层次为2，以此类推

##### 5、结点的层序编号

> 将树中的结点，按照从上层到下层，同层从左到右的次序排成一个线性序列，把他们编成连续的自然数。

##### 6、树的度

> 树中所有结点的度的最大值

##### 7、树的高度(深度)

> 树中结点的最大层次

##### 8、森林

> m（m>=0）个互不相交的树的集合，将一颗非空树的根结点删去，树就变成一个森林；给森林增加一个统一的根结点，森林就变成一棵树



##### 9、孩子结点

> 一个结点的直接后继结点称为该结点的孩子结点

##### 10、双亲结点(父结点)

> 一个结点的直接前驱称为该结点的双亲结点

##### 11、兄弟结点

> 同一双亲结点的孩子结点间互称兄弟结点



### 2、二叉树

> 二叉树就是度不超过2的树(每个结点最多有两个子结点)



#### 1、相关二叉树

##### 1、满二叉树

> 一个二叉树，如果每一个层的结点树都达到最大值，则这个二叉树就是满二叉树。



##### 2、完全二叉树

> 叶节点只能出现在最下层和次下层，并且最下面一层的结点都集中在该层最左边的若干位置的二叉树



#### 2、创建二叉查找树

##### 1、API设计

- 结点类

  | 类名     | Node<Key,Value>                                              |
    | -------- | ------------------------------------------------------------ |
  | 构造方法 | Node(Key key, Value value, Node left, Node right)：创建Node对象 |
  | 成员变量 | 1.public Node left:记录左子结点<br/>2.public Node right:记录右子结点<br/>3.public Key key:存储键<br/>4.public Value value:存储值 |

- 二叉树

  | 类名     | BinaryTree<Key,value>                                        |
    | -------- | ------------------------------------------------------------ |
  | 构造方法 | BinaryTree()：创建BinaryTree对象                             |
  | 成员变量 | 1.private Node root:记录根结点<br/>2.private int N:记录树中元素的个数 |
  | 成员方法 | 1. public void put(Key key,Value value):向树中插入一个键值对<br/>2.private Node put(Node x, Key key, Value val)：给指定树x上，添加键一个键值对，并返回添加后的新树<br/>3.public Value get(Key key):根据key，从树中找出对应的值<br/>4.private Value get(Node x, Key key):从指定的树x中，找出key对应的值<br/>5.public void delete(Key key):根据key，删除树中对应的键值对<br/>6.private Node delete(Node x, Key key):删除指定树x上的键为key的键值对，并返回删除后的新树<br/>7.public int size():获取树中元素的个数 |

###### 1、put方法实现思路

> - 如果当前树中没有任何一个结点，则直接把新结点当做根结点使用
>
> - 如果当前树不为空，则从根结点开始：
    >
    >   - 如果新结点的key小于当前结点的key，则继续找当前结点的左子结点；
>
>   - 如果新结点的key大于当前结点的key，则继续找当前结点的右子结点；
>
>   - 如果新结点的key等于当前结点的key，则树中已经存在这样的结点，替换该结点的value值即可。

```java
/**
     * 给指定树x上，添加键一个键值对，并返回添加后的新树
     * @param x 树节点
     * @param key 键
     * @param val 值
     * @return Node
     */
public Node<Key, Value> put(Node<Key,Value> x, Key key, Value val){
    //当树为空时，该节点为根节点
    if(null == x){
        size++;
        return new Node<>(key, val, null, null);
    }
    int compare = key.compareTo(x.key);
    //如果compare > 0 ,则 key > x.key;继续x的右子节点
    if(0 < compare){
        x.right = put(x.right,key,val);
    }else if(0 > compare){
        //如果compare < 0 ,则 key < x.key;继续x的左子节点
        x.left = put(x.left,key,val);
    }else {
        //如果compare = 0 ,则 key = x.key;替换x.value的值
        x.value = val;
    }
    return x;
}
```

###### 2、get方法实现思路

> 从根节点开始：
>
> - 如果要查询的key小于当前结点的key，则继续找当前结点的左子结点；
> - 如果要查询的key大于当前结点的key，则继续找当前结点的右子结点；
> - 如果要查询的key等于当前结点的key，则树中返回当前结点的value。

```java
/**
     * 从指定的树x中，找出key对应的值
     * @param x 节点
     * @param key 键
     * @return 节点
     */
public Value getNode(Node<Key,Value> x, Key key){
    if (null == x){
        return null;
    }
    int compare = key.compareTo(x.key);
    if(0 < compare){
        return getNode(x.right,key);
    }else if(0 > compare){
        return getNode(x.left, key);
    }else {
        return x.value;
    }
}
```

###### 3、delete方法的实现思路

> - 找到被删除结点；
> - 找到被删除结点右子树中的最小结点minNode
> - 删除右子树中的最小结点
> - 让被删除结点的左子树称为最小结点minNode的左子树，让被删除结点的右子树称为最小结点minNode的右子树
> - 让被删除结点的父节点指向最小结点minNode

```java
/**
     * 删除指定树x中的key对应的value，并返回删除后的新树
     * @param x
     * @param key
     * @return
     */
public Node<Key,Value> delete(Node<Key, Value> x, Key key){
    if (null == x){
        return null;
    }
    int compare = key.compareTo(x.key);
    if(0 < compare){
        x.right = delete(x.right,key);
    }else if(0 > compare){
        x.left = delete(x.left,key);
    }else {
        //个数-1
        size--;
        //新结点的key等于当前结点的key,当前x就是要删除的结点
        if(x.right == null){
            return x.left;
        }if(x.left == null){
            return x.right;
        }
        //左右子结点都存在的情况下，找右子树最小的节点
        Node<Key, Value> minRight = x.right;
        while (null != minRight.left){
            minRight = minRight.left;
        }
        Node<Key, Value> node = x.right;
        while (node.left != null) {
            if (node.left.left == null) {
                node.left = null;
            } else {
                node = node.left;
            }
        }
        //让被删除结点的左子树称为最小结点minNode的左子树，让被删除结点的右子树称为最小结点minNode的右子树
        minRight.left = x.left;
        minRight.right = x.right;
        //让被删除结点的父节点指向最小结点minNode
        x = minRight;
    }
    return x;
}
```

###### 4、完整代码

```java
package com.xiaobear.BinaryTree;

/**
 * @Author xiaobear
 * @date 2021年07月30日 13:50
 * @Description 二叉树
 */
public class BinaryTree<Key extends Comparable<Key>,Value> {

    /**
     * 根节点
     */
    private Node<Key,Value> root;
    /**
     * 节点数量
     */
    private int size;

    public void put(Key key, Value val){
        root = put(root,key,val);
    }

    /**
     * 给指定树x上，添加键一个键值对，并返回添加后的新树
     * @param x 树节点
     * @param key 键
     * @param val 值
     * @return Node
     */
    public Node<Key, Value> put(Node<Key,Value> x, Key key, Value val){
        //当树为空时，该节点为根节点
       if(null == x){
           size++;
           return new Node<>(key, val, null, null);
       }
       int compare = key.compareTo(x.key);
       //如果compare > 0 ,则 key > x.key;继续x的右子节点
        if(0 < compare){
            x.right = put(x.right,key,val);
        }else if(0 > compare){
            //如果compare < 0 ,则 key < x.key;继续x的左子节点
            x.left = put(x.left,key,val);
        }else {
            //如果compare = 0 ,则 key = x.key;替换x.value的值
            x.value = val;
        }
        return x;
    }

    /**
     * 根据key，从树中找出对应的值
     * @param key 键
     */
    public Value getNode(Key key){
        return getNode(root,key);
    }

    /**
     * 从指定的树x中，找出key对应的值
     * @param x 节点
     * @param key 键
     * @return 节点
     */
    public Value getNode(Node<Key,Value> x, Key key){
        if (null == x){
            return null;
        }
        int compare = key.compareTo(x.key);
        if(0 < compare){
            return getNode(x.right,key);
        }else if(0 > compare){
            return getNode(x.left, key);
        }else {
            return x.value;
        }
    }

    public void delete(Key key){
        root = delete(root, key);
    }

    /**
     * 删除指定树x中的key对应的value，并返回删除后的新树
     * @param x
     * @param key
     * @return
     */
    public Node<Key,Value> delete(Node<Key, Value> x, Key key){
        if (null == x){
            return null;
        }
        int compare = key.compareTo(x.key);
        if(0 < compare){
            x.right = delete(x.right,key);
        }else if(0 > compare){
            x.left = delete(x.left,key);
        }else {
            //个数-1
            size--;
            //新结点的key等于当前结点的key,当前x就是要删除的结点
            if(x.right == null){
                return x.left;
            }if(x.left == null){
                return x.right;
            }
            //左右子结点都存在的情况下，找右子树最小的节点
            Node<Key, Value> minRight = x.right;
            while (null != minRight.left){
                minRight = minRight.left;
            }
            Node<Key, Value> node = x.right;
            while (node.left != null) {
                if (node.left.left == null) {
                    node.left = null;
                } else {
                    node = node.left;
                }
            }
            //让被删除结点的左子树称为最小结点minNode的左子树，让被删除结点的右子树称为最小结点minNode的右子树
            minRight.left = x.left;
            minRight.right = x.right;
            //让被删除结点的父节点指向最小结点minNode
            x = minRight;
        }
        return x;
    }

    public int size(){
        return size;
    }



    /**
     * 节点类
     * @param <Key>
     * @param <Value>
     */
    private class Node<Key,Value>{
        public Key key;

        public Value value;

        public Node<Key,Value> left;

        public Node<Key, Value> right;

        public Node(Key key, Value value, Node left, Node<Key, Value> right) {
            this.key = key;
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
}
```

测试代码

```java
public class BinaryTreeTest {

    public static void main(String[] args) {
        BinaryTree<Integer, String> binaryTree = new BinaryTree<>();
        binaryTree.put(1,"yhx");
        binaryTree.put(2,"love");
        binaryTree.put(3,"lwh");
        System.out.println(binaryTree.size());
        binaryTree.delete(2);
        String node = binaryTree.getNode(2);
        System.out.println(node);
        System.out.println(binaryTree.size());
    }
}
```



#### 3、查找二叉树中最大/最小的键

##### 1、最小的键

| 方法                     | 描述                            |
| ------------------------ | ------------------------------- |
| public Key min()         | 找出树中最小的键                |
| private Node min(Node x) | 找出指定树x中，最小键所在的结点 |

```java
/**
     * 查找树中最小的键
     * @return
     */
public Key minKey(){
    return minKey(root).key;
}

/**
     * 根据二叉树的特点，左子树 < 右子树 so最小的键肯定是位于左边
     * @param x
     * @return
     */
public Node<Key,Value> minKey(Node<Key,Value> x){
    if (x.left != null){
        return minKey(x.left);
    }else {
        return x;
    }
}
```

##### 2、最大的键

| 方法                    | 描述                            |
| ----------------------- | ------------------------------- |
| public Key max()        | 找出树中最大的键                |
| public Node max(Node x) | 找出指定树x中，最大键所在的结点 |



```java
/**
     * 查询树中最大的键
     * @return
     */
    public Key maxKey(){
        return maxKey(root).key;
    }

    /**
     * 根据二叉树的特点，右子树 > 左子树 so最大的键肯定是位于右边
     * @param x
     * @return
     */
    public Node<Key,Value> maxKey(Node<Key,Value> x){
        if(x.right != null){
            return maxKey(x.right);
        }else {
            return x;
        }
    }
```



### 3、二叉树的遍历



我们把树简单的画作上图中的样子，由一个根节点、一个左子树、一个右子树组成，那么按照根节点什么时候被访
问，我们可以把二叉树的遍历分为以下三种方式：

- 前序遍历

  > 先访问根结点，然后再访问左子树，最后访问右子树

- 中序遍历

  > 先访问左子树，中间访问根节点，最后访问右子树

- 后序遍历

  > 先访问左子树，再访问右子树，最后访问根节点



#### 1、前序遍历

前序遍历的API

| 方法                                             | 描述                                              |
|------------------------------------------------| ------------------------------------------------- |
| `public Queue<Key> preErgodic()    `             | 使用前序遍历，获取整个树中的所有键                |
| `private void preErgodic(Node x,Queue<Key> keys)` | 使用前序遍历，把指定树x中的所有键放入到keys队列中 |

```java
/**
     * 前序遍历
     * @return
     */
public Queue<Key> preErgodic(){
    Queue<Key> queue = new Queue<>();
    preErgodic(root,queue);
    return queue;
}

/**
     * 前序遍历操作 先访问根结点，然后再访问左子树，最后访问右子树
     * @param x 根节点
     * @param queue 队列
     */
private void preErgodic(Node<Key,Value> x, Queue<Key> queue){
    if (x == null) {
        return;
    }
    //把当前结点的key放入到队列中
    queue.enqueue(x.key);
    //访问左子树
    if(x.left != null){
        preErgodic(x.left,queue);
    }
    //访问右子树
    if(x.right != null){
        preErgodic(x.right,queue);
    }
}
```



#### 2、中序遍历

中序遍历的API

| 方法                                            | 描述                                              |
| ----------------------------------------------- | ------------------------------------------------- |
| `public Queue<Key> midErgodic()  `                | 使用中序遍历，获取整个树中的所有键                |
| `private void midErgodic(Node x,Queue<Key> keys)` | 使用中序遍历，把指定树x中的所有键放入到keys队列中 |

```java
/**
     * 中序遍历
     * @return
     */
    public Queue<Key> midErgodic(){
        Queue<Key> queue = new Queue<>();
        midErgodic(root,queue);
        return queue;
    }

    /**
     * 先访问左子树，中间访问根节点，最后访问右子树
     * @param x
     * @param queue
     */
    private void midErgodic(Node<Key,Value> x, Queue<Key> queue){
        if (x == null) {
            return;
        }
        //访问左子树
        if(x.left != null){
            preErgodic(x.left,queue);
        }
        //把当前结点的key放入到队列中
        queue.enqueue(x.key);
        //访问右子树
        if(x.right != null){
            preErgodic(x.right,queue);
        }
    }
```



#### 3、后序遍历

后序遍历的API

| 方法                                              | 描述                                              |
| ------------------------------------------------- | ------------------------------------------------- |
| `public Queue<Key> afterErgodic() `                 | 使用后序遍历，获取整个树中的所有键                |
| `private void afterErgodic(Node x,Queue<Key> keys)` | 使用后序遍历，把指定树x中的所有键放入到keys队列中 |

```java
 /**
     * 后序遍历
     * @return
     */
    public Queue<Key> afterErgodic(){
        Queue<Key> queue = new Queue<>();
        afterErgodic(root,queue);
        return queue;
    }

    /**
     * 先访问左子树，再访问右子树，最后访问根节点
     * @param x
     * @param queue
     */
    private void afterErgodic(Node<Key,Value> x, Queue<Key> queue){
        if (x == null) {
            return;
        }
        //访问左子树
        if(x.left != null){
            preErgodic(x.left,queue);
        }
        //访问右子树
        if(x.right != null){
            preErgodic(x.right,queue);
        }
        //把当前结点的key放入到队列中
        queue.enqueue(x.key);
    }
```



#### 4、测试

```java
public class BinaryTreeErgodicTest {

    public static void main(String[] args) {
        BinaryTree<String, String> bt = new BinaryTree<>();
        bt.put("E", "5");
        bt.put("B", "2");
        bt.put("G", "7");
        bt.put("A", "1");
        bt.put("D", "4");
        bt.put("F", "6");
        bt.put("H", "8");
        bt.put("C", "3");
        //前序遍历
        Queue<String> preErgodic = bt.preErgodic();
        //中序遍历
        Queue<String> midErgodic = bt.midErgodic();
        //后序遍历
        Queue<String> afterErgodic = bt.afterErgodic();
        for (String key : preErgodic) {
            System.out.println(key+"=" +bt.getNode(key));
        }
    }
}
```



### 4、层次遍历

> 所谓的层序遍历，就是从根节点（第一层）开始，依次向下，获取每一层所有结点的值



层次遍历的结果是：EBGADFHC

| 方法                               | 描述                                 |
| ---------------------------------- | ------------------------------------ |
| `public Queue<Key> layerErgodic()：` | 使用层序遍历，获取整个树中的所有键实 |

实现步骤：

1. 创建队列，存储每一层的结点；
2. 使用循环从队列中弹出一个结点：
    - 获取当前结点的key
    - 如果当前结点的左子结点不为空，则把左子结点放入到队列中
    - 如果当前结点的右子结点不为空，则把右子结点放入到队列中

```java
/**
     * 层次遍历
     * @return
     */
public Queue<Key> layerErgodic(){
    //存储key
    Queue<Key> keys = new Queue<>();
    //存储node
    Queue<Node<Key,Value>> nodes = new Queue<>();
    //入队头结点
    nodes.enqueue(root);
    while(!nodes.isEmpty()){
        //出队当前节点
        Node<Key,Value> dequeue = nodes.dequeue();
        //当前节点头入队
        keys.enqueue(dequeue.key);
        if(dequeue.left != null){
            nodes.enqueue(dequeue.left);
        }
        if(dequeue.right != null){
            nodes.enqueue(dequeue.right);
        }
    }
    return keys;
}
```



### 5、二叉树的最大深度

> 最大深度（树的根节点到最远叶子结点的最长路径上的结点数）



上面这颗树的最大深度为：E–>B–>D–>C，深度为4

| 方法                         | 描述                  |
| ---------------------------- | --------------------- |
| public int maxDepth()        | 计算整棵树的最大深度  |
| private int maxDepth(Node x) | 计算指定树x的最大深度 |

*实现步骤：*

1. 如果根结点为空，则最大深度为0；
2. 计算左子树的最大深度；
3. 计算右子树的最大深度；
4. 当前树的最大深度=左子树的最大深度和右子树的最大深度中的较大者+1

```java
    /**
     * 计算整棵树的最大深度
     * @return
     */
    public int maxDepth(){
        return maxDepth(root);
    }

    /**
     * 计算指定节点的最大深度
     * @param x
     * @return
     */
    private int maxDepth(Node<Key,Value> x){
        if (x == null) {
            return 0;
        }
        int maxRight = 0;
        int maxLeft = 0;
        int maxDepth;
        if(x.left != null){
            maxLeft = maxDepth(x.left);
        }
        if (x.right != null) {
            maxRight = maxDepth(x.right);
        }
        maxDepth = maxLeft > maxRight ? maxLeft + 1 : maxRight + 1;
        return maxDepth;
    }
```



### 6、折纸问题

> 请把一段纸条竖着放在桌子上，然后从纸条的下边向上方对折1次，压出折痕后展开。此时 折痕是凹下去的，即折痕突起的方向指向纸条的背面。如果从纸条的下边向上方连续对折2 次，压出折痕后展开，此时有三条折痕，从上到下依次是下折痕、下折痕和上折痕。
> 给定一 个输入参数N，代表纸条都从下边向上方连续对折N次，请从上到下打印所有折痕的方向 例如：N=1时，打印： down；N=2时，打印： down down up



#### 分析

> 我们把对折后的纸张翻过来，让粉色朝下，这时把第一次对折产生的折痕看做是根结点，那第二次对折产生的下折痕就是该结点的左子结点，而第二次对折产生的上折痕就是该结点的右子结点，这样我们就可以使用树型数据结构来描述对折后产生的折痕。

这棵树有这样的特点：

1. 根结点为下折痕；
2. 每一个结点的左子结点为下折痕；
3. 每一个结点的右子结点为上折痕；



实现步骤：

- 构建节点类
- 构建深度为n的折痕树
- 使用中序遍历，打印树中所有节点的内容

构建深度为N的折痕树：

1. 第一次对折，只有一条折痕，创建根节点
2. 如果不是第一次对折，则使用队列保存根节点
3. 循环遍历队列
    - 从队列中拿出一个节点
    - 如果当前节点的左节点不为空，则把这个左节点加入队列中
    - 如果当前节点的右节点不为空，则把这个右节点加入队列中
    - 判断当前结点的左子结点和右子结点都为空，如果是，则需要为当前结点创建一个值为down的左子结点，一个值为up的右子结点。



```java
public class PaperFolding {

    /**
     * 创建折痕树
     * @param size 深度
     */
    public static Node createTree(int size){
        Node root = null;
        for (int i = 0; i < size; i++) {
            //第一次对折，只有一条折痕，创建根节点
            if (0 == i){
                root = new Node("down",null,null);
            }else {
                //如果不是第一次对折，则使用队列保存根节点
                Queue<Node> nodes = new Queue<>();
                nodes.enqueue(root);
                //循环遍历
                while(!nodes.isEmpty()){
                    //从队列中拿出一个节点
                    Node dequeue = nodes.dequeue();
                    //如果当前节点的左节点不为空，则把这个左节点加入队列中
                    if(dequeue.left != null){
                        nodes.enqueue(dequeue.left);
                    }
                    //如果当前节点的右节点不为空，则把这个右节点加入队列中
                    if(dequeue.right != null){
                        nodes.enqueue(dequeue.right);
                    }
                    //判断当前结点的左子结点和右子结点都为空，则需要为当前结点创建一个值为down的左子结点，一个值为up的右子结点。
                    if(dequeue.left == null && dequeue.right == null){
                        dequeue.left = new Node("down",null,null);
                        dequeue.right = new Node("up",null,null);
                    }
                }
            }
        }
        return root;
    }

    /**
     * 采用中序遍历
     * @param root
     */
    public static void printTree(Node root){
        if (root == null) {
            return;
        }
        printTree(root.left);
        System.out.print(root.item+" ");
        printTree(root.right);
    }

    /**
     * 节点类
     */
    private static class Node{
        String item;
        Node left;
        Node right;

        public Node(String item, Node left, Node right) {
            this.item = item;
            this.left = left;
            this.right = right;
        }
    }

    public static void main(String[] args) {
        Node tree = createTree(2);
        printTree(tree);
    }
}
```

```
down down up 
```
