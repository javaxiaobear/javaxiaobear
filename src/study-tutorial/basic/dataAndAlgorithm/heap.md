---
title: 8、堆
---

### 1、堆的定义

> 堆是计算机科学中一类特殊的数据结构的统称，堆通常可以被看做是一棵完全二叉树的数组对象。

#### 1、堆的特性

1. 它是完全二叉树，除了树的最后一层结点不需要是满的，其它的每一层从左到右都是满的，如果最后一层结点不是满的，那么要求左满右不满。



2. 它是由数组实现的。就是将二叉树的结点按层级顺序放入数组中，根节点在位置1，它的子节点在2和3，以此类推；

   > 如果一个节点的位置为k，则它的父节点的位置为k/2，而它的两个子节点的位置分别为2k和2k+1
   >
   > 我们可以通过计算数组的索引在树中上下移动，从a[k]向上一层，就令 k = k/2，向下一层就令k = 2k/ k = 2k+1



3. 每个节点都大于等于它的两个子节点

   > ps：这里要注意堆中仅仅规定了每个结点大于等于它的两个子结点，但这两个子结点的顺序并没有做规定，跟我们之前学习的二叉查找树是有区别的。



### 2、堆的设计

#### 1、API设计

| 类名     | Heap<>                                                       |
| -------- | ------------------------------------------------------------ |
| 构造方法 | Heap(int capacity)：创建容量为capacity的Heap对象             |
| 成员方法 | private boolean less(int i,int j)：判断堆中索引i处的元素是否小于索引j处的元素<br>private void exch(int i,int j):交换堆中i索引和j索引处的值<br>public T delMax():删除堆中最大的元素,并返回这个最大元素<br>public void insert(T t)：往堆中插入一个元素<br>private void swim(int k):使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br>private void sink(int k):使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置 |
| 成员变量 | private T[] items : 用来存储元素的数组<br>private int N：记录堆中元素的个数 |

#### 2、插入方法实现

> 堆是用数组完成数据的存储的，由于数组的底层是一串连续的内存地址，所以我们要往堆中插入数据，我们只能往数组中从索引0处开始，依次往后存放数据，但是堆中对元素的顺序是有要求的，每一个结点的数据要大于等于它的两个子结点的数据，所以每次插入一个元素，都会使得堆中的数据顺序变乱，这个时候我们就需要通过一些方法让刚才插入的这个数据放入到合适的位置。



*总结：如果往堆中新插入元素，我们只需要不断的比较新结点a[k]和它的父结点a[k/2]的大小，然后根据结果完成数据元素的交换，就可以完成堆的有序调整。*

#### 3、删除方法实现

> 由堆的特性我们可以知道，索引1处的元素，也就是根结点就是最大的元素，当我们把根结点的元素删除后，需要有一个新的根结点出现，这时我们可以暂时把堆中最后一个元素放到索引1处，充当根结点，但是它有可能不满足堆的有序性需求，这个时候我们就需要通过一些方法，让这个新的根结点放入到合适的位置。



*总结：当删除掉最大元素后，只需要将最后一个元素放到索引1处，并不断的拿着当前结点a[k]与它的子结点a[2k]和a[2k+1]中的较大者交换位置，即可完成堆的有序调整。*

#### 4、完整代码

```java
public class Heap<T extends Comparable<T>> {

    /**
     * 存储元素
     */
    private T[] items;

    /**
     * 堆元素个数
     */
    private int size;

    public Heap(int capacity){
        items = (T[]) new Comparable[capacity];
        size = 0;
    }

    /**
     * 判断堆中索引i的值是否小于索引j处的值
     * @param i
     * @param j
     * @return
     */
    private boolean less(int i, int j){
        return items[i].compareTo(items[j]) < 0;
    }

    /**
     * 交换索引i和索引j的值
     * @param i
     * @param j
     */
    private void each(int i, int j){
        T temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }

    /**
     * 插入一个元素
     * @param t
     */
    public void insert(T t){
        items[++size] = t;
        //上浮，重新排序
        swim(size);
    }

    /**
     * 上浮算法，使索引k处的元素能在堆中处于一个正确的位置
     * @param k
     */
    public void swim(int k){
        //从叶子节点往上面循环，到根节点就结束循环
        while (1 < k){
            //比较当前节点与父节点
            if(less(k/2, 2)){
                //父结点小于当前结点，需要交换
                each(k/2,k);
            }
            k = k/2;
        }
    }

    /**
     * 删除堆中最大的元素
     * @return max
     */
    public T delMax(){
        //获取最大元素
        T max = items[1];
        //交换索引1处和索引size处的值
        each(1,size);
        //交换后置null
        items[size] = null;
        size--;
        //将索引1的值下沉
        sink(1);
        return max;
    }

    /**
     * 下沉算法，使索引k的元素位于堆中一个正确的位置
     * @param k
     */
    private void sink(int k){
        //如果到底层就结束循环 2*k > size
        while(2*k <= size){
            int max;
            //是否存在右子节点
            if(2*k + 1 <= size){
                //
                if (less(2*k,2*k+1)){
                    max = 2*k + 1;
                }else {
                    max = 2*k;
                }
            }else { //不存在右节点
                max = 2*k;
            }
            //比较当前结点和子结点中的较大者，如果当前结点不小，则结束循环
            if(!less(k,max)){
                break;
            }
            each(k, max);
            k = max;
        }
    }
}
```

测试类

```java
public class HeapTest {

    public static void main(String[] args){
        Heap<String> heap = new Heap<String>(20);
        heap.insert("S");
        heap.insert("G");
        heap.insert("I");
        heap.insert("E");
        heap.insert("N");
        heap.insert("H");
        heap.insert("O");
        heap.insert("A");
        heap.insert("T");
        heap.insert("P");
        heap.insert("R");
        String del;
        while ((del= heap.delMax()) != null){
            System.out.print(del + " ");
        }
    }
}
```



### 3、堆排序

> 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。

```java
String[] arr = {"S","O","R","T","E","X","A","M","P","L","E"};
```

实现步骤

1. 构造堆
2. 获取堆顶元素，这就是最大值
3. 交换堆顶元素和数组中的最后一个元素，此时所有元素中的最大元素已经放到合适位置
4. 对堆进行调整，重新让除了最后一个元素的剩余元素中的最大值放到堆顶
5. 重复2-4步骤，直到堆中剩一个元素为止



API设计

| 类名     | HeapSort                                                     |
| -------- | ------------------------------------------------------------ |
| 成员方法 | public static void sort(Comparable[] source)：对source数组中的数据从小到大排序<br>private static void createHeap(Comparable[] source, Comparable[] heap):根据原数组source，构造出堆heap<br>private static boolean less(Comparable[] heap, int i, int j)：判断heap堆中索引i处的元素是否小于索引j处的元素<br>private static void exch(Comparable[] heap, int i, int j):交换heap堆中i索引和j索引处的值<br>private static void sink(Comparable[] heap, int target, int range):在heap堆中，对target处的元素做下沉，范围是0~range。 |



#### 1、堆构造过程

> 堆的构造，最直观的想法就是另外再创建一个和新数组数组，然后从左往右遍历原数组，每得到一个元素后，添加
> 到新数组中，并通过上浮，对堆进行调整，最后新的数组就是一个堆。
> 上述的方式虽然很直观，也很简单，但是我们可以用更聪明一点的办法完成它。创建一个新数组，把原数组0到length-1的数据拷贝到新数组的1~length处，再从新数组长度的一半处开始往1索引处扫描（从右往左），然后对扫描到的每一个元素做下沉调整即可。



#### 2、堆排序过程

对构造好的堆，我们只需要做类似于堆的删除操作，就可以完成排序。

1. 将堆顶元素和堆中最后一个元素交换位置；
2. 通过对堆顶元素下沉调整堆，把最大的元素放到堆顶(此时最后一个元素不参与堆的调整，因为最大的数据已经到了数组的最右边)
3. 重复1~2步骤，直到堆中剩最后一个元素。



#### 3、完整代码

```java
public class HeapSort {

    /**
     * 判断堆中索引i处的值是否小于索引j的值
     * @param heap 堆
     * @param i 索引i
     * @param j 索引j
     * @return true or false
     */
    private static boolean less(Comparable[] heap, int i, int j){
        return heap[i].compareTo(heap[j]) < 0;
    }

    /**
     * 交换索引i和索引j处的值
     * @param heap
     * @param i
     * @param j
     */
    private static void swap(Comparable[] heap, int i, int j){
        Comparable temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    /**
     * 根据原数组source，构造出堆heap
     * @param source 原数组
     * @param heap 目标数组
     */
    private static void createHeap(Comparable[] source, Comparable[] heap){
        //把source中的数据拷贝到heap中，从heap的1索引处开始填充
        System.arraycopy(source,0,heap,1,source.length);
        //从heap索引的一半处开始倒叙遍历，对得到的每一个元素做下沉操作
        for (int i = (heap.length - 1) / 2; i > 0; i--) {
            sink(heap,i, heap.length - 1);
        }
    }

    /**
     * 对source数组中从小到大排序
     * @param source
     */
    public static void sort(Comparable[] source){
        //创建一个比原数组大1的数组
        Comparable[] heap = new Comparable[source.length + 1];
        //创造堆
        createHeap(source,heap);
        int n = heap.length - 1;
        while (1 != n){
            //交换heap中索引1处的元素和N处的元素
            swap(heap, 1, n);
            n--;
            //对索引1处的元素在0~N范围内做下沉操作
            sink(heap, 1, n);
        }
        //heap中的数据已经有序，拷贝到source中
        System.arraycopy(heap,1,source,0,source.length);

    }

    /**
     * 在heap堆中，对target处的元素做下沉，范围是0~range。
     * @param heap 堆
     * @param target 索引
     * @param range 范围
     */
    private static void sink(Comparable[] heap, int target, int range){
        //没有子节点 退出循环
        while (2 * target <= range){
            //找出target结点的两个子结点中的较大值
            int max = 2*target;
            if(2 * target + 1 <= range){
                if (less(heap,2*target,2*target+1)){
                    max = 2 * target + 1;
                }
            }
            //如果当前结点的值小于子结点中的较大值，则交换
            if(less(heap,target,max)){
                swap(heap, target, max);
            }
            //更新target的值
            target = max;
        }
    }

    public static void main(String[] args) {
        String[] arr = {"S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"};
        HeapSort.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```
