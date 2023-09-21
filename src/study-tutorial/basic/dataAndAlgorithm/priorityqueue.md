---
title: 9、优先队列
---

> 普通的队列是一种先进先出的数据结构，元素在队列尾追加，而从队列头删除。在某些情况下，我们可能需要找出队列中的最大值或者最小值，例如使用一个队列保存计算机的任务，一般情况下计算机的任务都是有优先级的，我们需要在这些计算机的任务中找出优先级最高的任务先执行，执行完毕后就需要把这个任务从队列中移除。普通的队列要完成这样的功能，需要每次遍历队列中的所有元素，比较并找出最大值，效率不是很高，这个时候，我们就可以使用一种特殊的队列来完成这种需求，优先队列。



优先队列按照其作用不同，可以分为以下两种：

- *最大优先队列：可以获取并删除队列中最大的值*
- *最小优先队列：可以获取并删除队列中最小的值*



### 1、最大优先队列

#### 1、API设计

| 类名     | MaxPriorityQueue                                             |
| -------- | ------------------------------------------------------------ |
| 构造方法 | MaxPriorityQueue(int capacity)：创建容量为capacity的MaxPriorityQueue对象 |
| 成员方法 | private boolean less(int i,int j)：判断堆中索引i处的元素是否小于索引j处的元素<br>private void each(int i,int j):交换堆中i索引和j索引处的值<br>public T delMax():删除队列中最大的元素,并返回这个最大元素<br>public void insert(T t)：往队列中插入一个元素<br>private void swim(int k):使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br>private void sink(int k):使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置<br>public int size():获取队列中元素的个数<br>public boolean isEmpty():判断队列是否为空 |
| 成员变量 | private T items：用来存储元素的数组<br>private int N：记录堆中元素的个数 |



#### 2、代码实现

```java
public class MaxPriorityQueue<T extends Comparable<T>> {

    private T[] items;

    private int size;

    public MaxPriorityQueue(int capacity){
        items = (T[]) new Comparable[capacity + 1];
        size = 0;
    }

    /**
     * 判断堆中索引i处的元素是否小于索引j处的元素
     * @param i
     * @param j
     * @return true
     */
    private boolean less(int i,int j){
        return items[i].compareTo(items[j]) < 0;
    }

    /**
     * 交换堆中i索引和j索引处的值
     * @param i
     * @param j
     */
   private void each(int i,int j){
       T temp = items[i];
       items[i] = items[j];
       items[j] = temp;
   }

    /**
     * 删除队列中最大的元素,并返回这个最大元素
     * @return
     */
   public T delMax(){
       T max = items[1];
       each(1,size);
       items[size] = null;
       size--;
       sink(1);
       return max;
   }

    /**
     * 往队列中插入一个元素
     * @param t
     */
   public void insert(T t){
      items[++size] = t;
      swim(size);
   }

    /**
     * 使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置
     * @param k
     */
   private void swim(int k){
       while (1 < k){
           //比较k是否小于k/2，如果小于则交换元素
           if(less(k/2,k)){
               each(k/2,k);
           }
           k = k/2;
       }
   }

    /**
     * 使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置
     * @param k
     */
   private void sink(int k){
       while (2 * k <= size){
           int max = 2 * k;
           //如果存在右子结点
           if(2 * k + 1 <= size){
               if(less(2*k,2*k+1)){
                   max = 2 * k + 1;
               }
           }
           //比较当前结点和子结点中的较大者，如果当前结点不小，则结束循环
           if(!less(k,max)){
               break;
           }
           each(k,max);
           k = max;
       }
   }

    /**
     * 获取队列中元素的个数
     * @return
     */
   public int size(){
       return size;
   }


    /**
     * 判断队列是否为空
     * @return
     */
    public boolean isEmpty(){
        return size == 0;
    }
}
```

- 测试类

  ```java
  public class MaxPriorityQueueTest {
  
      public static void main(String[] args) {
          String[] arr = {"A", "B", "C", "D", "E", "F", "G"};
          MaxPriorityQueue<String> queue = new MaxPriorityQueue(10);
          for (String s : arr) {
              queue.insert(s);
          }
          System.out.println(queue.size());
          String max;
          while (!queue.isEmpty()){
              max = queue.delMax();
              System.out.print(max+ " ");
          }
      }
  }
  ```

  输出结果

  ```
  7
  G F E D C B A 
  ```



### 2、最小优先队列

> - 最小的元素放在数组的索引1处。
> - 每个结点的数据总是小于等于它的两个子结点的数据。



#### 1、API设计

| 类名     | MinPriorityQueue                                             |
| -------- | ------------------------------------------------------------ |
| 构造方法 | MinPriorityQueue(int capacity)：创建容量为capacity的MinPriorityQueue对象 |
| 成员方法 | private boolean less(int i,int j)：判断堆中索引i处的元素是否小于索引j处的元素<br/>private void exch(int i,int j):交换堆中i索引和j索引处的值<br/>public T delMin():删除队列中最小的元素,并返回这个最小元素<br/>public void insert(T t)：往队列中插入一个元素<br/>private void swim(int k):使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br/>private void sink(int k):使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置<br/>public int size():获取队列中元素的个数<br/>public boolean isEmpty():判断队列是否为空 |
| 成员变量 | private T[] imtes : 用来存储元素的数组<br/>private int N：记录堆中元素的个数 |

#### 2、代码实现

```java
public class MinPriorityQueue<T extends Comparable<T>> {

    private T[] items;

    private int size;

    public MinPriorityQueue(int capacity){
        items = (T[]) new Comparable[capacity+1];
        size = 0;
    }

    /**
     * 判断堆中索引i处的元素是否小于索引j处的元素
     * @param i
     * @param j
     * @return
     */
    private boolean less(int i,int j){
        return items[i].compareTo(items[j]) < 0;
    }

    /**
     * 交换堆中i索引和j索引处的值
     * @param i
     * @param j
     */
    private void each(int i,int j){
        T temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }

    /**
     * 删除队列中最小的元素,并返回这个最小元素
     * @return
     */
    public T delMin(){
        T min = items[1];
        each(1,size);
        items[size] = null;
        size--;
        sink(1);
        return min;
    }

    /**
     * 往队列中插入一个元素<br/>
     * @param t
     */
    public void insert(T t){
        items[++size] = t;
        swim(size);
    }

    /**
     * :使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br/>
     * @param k
     */
    private void swim(int k){
        while (1 < k){
            if(less(k,k/2)){
                each(k,k/2);
            }
            k = k/2;
        }
    }

    /**
     * 使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置
     * @param k
     */
    private void sink(int k){
        while (2*k <= size){
            int min = 2*k;
            //如果存在右子结点
            if(2*k + 1 <= size){
                if(less(2*k + 1,2*k)){
                    min = 2*k + 1;
                }
            }
            if(less(k,min)){
                break;
            }
            each(min,k);
            k = min;
        }
    }

    /**
     * 获取队列中元素的个数
     * @return
     */
    public int size(){
        return size;
    }

    /**
     * 判断队列是否为空
     * @return
     */
    public boolean isEmpty(){
        return size == 0;
    }
}
```

- 测试类

  ```java
  public class MinPriorityQueueTest {
      public static void main(String[] args) {
          String[] arr = {"G", "F", "E", "D", "C", "B", "A"};
          MinPriorityQueue<String> queue = new MinPriorityQueue(10);
          for (String s : arr) {
              queue.insert(s);
          }
          System.out.println(queue.size());
          String del;
          while (!queue.isEmpty()){
              del = queue.delMin();
              System.out.print(del+" ");
          }
      }
  }
  ```

  输出结果

  ```
  7
  A B C D E F G 
  ```



### 3、索引优先队列

#### 1、实现思路

1. 存储数据时，给每一个数据元素关联一个整数，例如insert(int k,T t),我们可以看做k是t关联的整数，那么我们的实现需要通过k这个值，快速获取到队列中t这个元素，此时有个k这个值需要具有唯一性。

   > 最直观的想法就是我们可以用一个T[] items数组来保存数据元素，在insert(int k,T t)完成插入时，可以把k看做是items数组的索引，把t元素放到items数组的索引k处，这样我们再根据k获取元素t时就很方便了，直接就可以拿到items[k]即可。



2. 第一步完成后的结果，虽然我们给每个元素关联了一个整数，并且可以使用这个整数快速的获取到该元素，但是，items数组中的元素顺序是随机的，并不是堆有序的，所以，为了完成这个需求，我们可以增加一个数组int[]pq,来保存每个元素在items数组中的索引，pq数组需要堆有序，也就是说，pq[1]对应的数据元素items[pq[1]]要小于等于pq[2]和pq[3]对应的数据元素items[pq[2]]和items[pq[3]]。



3. 通过第二步的分析，我们可以发现，其实我们通过上浮和下沉做堆调整的时候，其实调整的是pq数组。如果需要对items中的元素进行修改，比如让items[0]=“H”,那么很显然，我们需要对pq中的数据做堆调整，而且是调整pq[9]中元素的位置。但现在就会遇到一个问题，我们修改的是items数组中0索引处的值，如何才能快速的知道需要挑中pq[9]中元素的位置呢？

   > 最直观的想法就是遍历pq数组，拿出每一个元素和0做比较，如果当前元素是0，那么调整该索引处的元素即可，但是效率很低。
   > 我们可以另外增加一个数组，int[] qp,用来存储pq的逆序。例如：
   > 在pq数组中：pq[1]=6;
   > 那么在qp数组中，把6作为索引，1作为值，结果是：qp[6]=1;



当有了pq数组后，如果我们修改items[0]="H"，那么就可以先通过索引0，在qp数组中找到qp的索引：qp[0]=9,那么直接调整pq[9]即可。



#### 2、API设计

| 类名     | IndexMinPriorityQueue                                        |
| -------- | ------------------------------------------------------------ |
| 构造方法 | IndexMinPriorityQueue(int capacity)：创建容量为capacity的IndexMinPriorityQueue对象 |
| 成员方法 | private boolean less(int i,int j)：判断堆中索引i处的元素是否小于索引j处的元素<br/>private void exch(int i,int j):交换堆中i索引和j索引处的值<br/>public int delMin():删除队列中最小的元素,并返回该元素关联的索引<br/>public void insert(int i,T t)：往队列中插入一个元素,并关联索引i<br/>private void swim(int k):使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br/>private void sink(int k):使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置<br/>public int size():获取队列中元素的个数<br/>public boolean isEmpty():判断队列是否为空<br/>public boolean contains(int k):判断k对应的元素是否存在<br/>public void changeItem(int i, T t):把与索引i关联的元素修改为为t<br/>public int minIndex():最小元素关联的索引<br/>public void delete(int i):删除索引i关联的元素 |
| 成员变量 | private T[] imtes : 用来存储元素的数组<br/>private int[] pq:保存每个元素在items数组中的索引，pq数组需要堆有序<br/>private int [] qp:保存qp的逆序，pq的值作为索引，pq的索引作为值<br/>private int N：记录堆中元素的个数 |

#### 3、代码实现

```java
public class IndexMinPriorityQueue<T extends Comparable<T>> {

    /**
     * 堆中元素
     */
    private T[] items;

    /**
     * 元素个数
     */
    private int size;
    /**
     * 保存每个元素在items数组中的索引，pq数组需要堆有序
     */
    private int[] pq;
    /**
     * 保存qp的逆序，pq的值作为索引，pq的索引作为值
     */
    private int[] qp;

    public IndexMinPriorityQueue(int capacity){
        items = (T[]) new Comparable[capacity+1];
        size = 0;
        qp = new int[capacity+1];
        pq = new int[capacity+1];
        Arrays.fill(qp, -1);
    }

    /**
     * 判断堆中索引i处的元素是否小于索引j处的元素
     * @param i
     * @param j
     * @return
     */
    private boolean less(int i,int j){
        return items[pq[i]].compareTo(items[pq[j]]) < 0;
    }

    /**
     * 换堆中i索引和j索引处的值
     * @param i
     * @param j
     */
    private void swap(int i,int j){
        //先交换pq数组中的值
        int temp = pq[i];
        pq[i] = pq[j];
        pq[j] = temp;

        //更新qp数组中的值
        qp[pq[i]] = i;
        qp[pq[j]] = j;
    }

    /**
     * 删除队列中最小的元素,并返回该元素关联的索引
     * @return
     */
    public int delMin(){
        //找到items中最小元素的索引
        int minIndex = pq[1];
        //交换pq中索引1处的值和N处的值
        swap(1, size);
        //删除qp中索引pq[N]处的值
        qp[pq[size]] = -1;
        //删除pq中索引N处的值
        pq[size] = -1;
        //删除items中的最小元素
        items[minIndex] = null;
        //元素数量-1
        size--;
        //对pq[1]做下沉，让堆有序
        sink(1);
        return minIndex;
    }

    /**
     * 往队列中插入一个元素,并关联索引i
     * @param i
     * @param t
     */
    public void insert(int i,T t){
        if(contains(i)){
            throw new RuntimeException("该索引已存在！");
        }
        size++;
        //把元素存放到items数组中
        items[i] = t;
        //使用pq存放i这个索引
        pq[size] = i;
        //在qp的i索引处存放N
        qp[i] = size;
        //上浮items[pq[N]],让pq堆有序
        swim(size);

    }

    /**
     * 使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置
     * @param k
     */
    private void swim(int k){
        while (1 < k){
            //比较当前结点和父结点，如果当前结点比父结点小，则交换位置
            if(less(k,k/2)){
                swap(k,k/2);
            }
            k = k/2;
        }
    }

    /**
     * :使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置
     * @param k
     */
    private void sink(int k){
        //如果当前结点已经没有子结点了，则结束下沉
        while (2*k <= size){
            int min = 2*k;
            if(2*k+1 <= size && less(2*k+1,2*k)){
                min = 2*k + 1;
            }
            if(less(k,min)){
                break;
            }
            swap(k,min);
            k = min;
        }
    }

    /**
     * :获取队列中元素的个数
     * @return
     */
    public int size(){
        return size;
    }

    /**
     * :判断队列是否为空
     * @return
     */
    public boolean isEmpty(){
        return size == 0;
    }

    /**
     * :判断k对应的元素是否存在
     * @param k
     * @return
     */
    public boolean contains(int k){
        //默认情况下，qp的所有元素都为-1，如果某个位置插入了数据，则不为-1
        return qp[k] != -1;
    }

    /**
     * :把与索引i关联的元素修改为为t
     * @param i
     * @param t
     */
    public void changeItem(int i, T t){
        //修改item数组中索引i的值为t
        items[i] = t;
        //找到i在pq中的位置
        int i1 = pq[i];
        //对pq[i1]做下沉，让堆有序
        sink(i1);
        //对pq[k]做上浮，让堆有序
        swim(i1);
    }

    /**
     * :最小元素关联的索引
     * @return
     */
    public int minIndex(){
        //pq的索引1处，存放的是最小元素在items中的索引
        return pq[1];
    }

    /**
     * :删除索引i关联的元素
     * @param i
     */
    public void delete(int i){
        //找出i在pq中的索引
        int k = pq[i];
        //把pq中索引k处的值和索引N处的值交换
        swap(k,size);
        //删除qp中索引pq[N]处的值
        qp[pq[size]] = -1;
        //删除pq中索引N处的值
        pq[size] = -1;
        //删除items中索引i处的值
        items[i] = null;
        //元素数量-1
        size--;
        //对pq[k]做下沉，让堆有序
        sink(k);
        //对pq[k]做上浮，让堆有序
        swim(k);
    }
}
```

- 测试类

  ```java
  public class IndexMinPriorityQueueTest {
  
      public static void main(String[] args) {
          String[] arr = {"S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"};
          IndexMinPriorityQueue<String> indexMinPQ = new IndexMinPriorityQueue<>(20);
              //插入
          for (int i = 0; i < arr.length; i++) {
              indexMinPQ.insert(i,arr[i]);
          }
          System.out.println(indexMinPQ.size());
          //获取最小值的索引
          System.out.println(indexMinPQ.minIndex());
          //测试修改
          indexMinPQ.changeItem(0,"Z");
          int minIndex=-1;
          while(!indexMinPQ.isEmpty()){
              minIndex = indexMinPQ.delMin();
              System.out.print(minIndex+",");
          }
      }
  }
  ```

  输出

  ```
  11
  6
  10,4,9,7,1,8,2,3,5,0,0,
  ```
