---
title: 11、并查集
---

> 并查集是一种树型的数据结构 ，并查集可以高效地进行如下操作：
>
> - 查询元素p和元素q是否属于同一组
> - 合并元素p和元素q所在的组



### 1、并查集的结构

> 并查集也是一种树型结构，但这棵树跟我们之前讲的二叉树、红黑树、B树等都不一样，这种树的要求比较简单：
>
> 1. 每个元素都唯一的对应一个结点；
> 2. 每一组数据中的多个元素都在同一颗树中；
> 3. 一个组中的数据对应的树和另外一个组中的数据对应的树之间没有任何联系；
> 4. 元素在树中并没有子父级关系的硬性要求；



### 2、并查集的API设计与实现

#### 1、API设计

| 类名     | UnionFind                                                    |
| -------- | ------------------------------------------------------------ |
| 构造方法 | UF(int N)：初始化并查集，以整数标识(0,N-1)个结点             |
| 成员方法 | public int count()：获取当前并查集中的数据有多少个分组<br/>public boolean connected(int p,int q):判断并查集中元素p和元素q是否在同一分组中<br/>public int find(int p):元素p所在分组的标识符<br/>public void union(int p,int q)：把p元素所在分组和q元素所在分组合并 |
| 成员变量 | private int[] eleAndGroup: 记录结点元素和该元素所在分组的标识<br/>private int count：记录并查集中数据的分组个数 |

#### 2、实现

##### 1、UF(int N)构造方法实现

1. 初始情况下，每个元素都在一个独立的分组中，所以，初始情况下，并查集中的数据默认分为N个组；
2. 初始化数组eleAndGroup；
3. 把eleAndGroup数组的索引看做是每个结点存储的元素，把eleAndGroup数组每个索引处的值看做是该结点所在的分组，那么初始化情况下，i索引处存储的值就是i



##### 2、union(int p,int q)合并方法实现

1. 如果p和q已经在同一个分组中，则无需合并
2. 如果p和q不在同一个分组，则只需要将p元素所在组的所有的元素的组标识符修改为q元素所在组的标识符即可
3. 分组数量-1



##### 3、代码实现

```java
public class UnionFind {

    /**
     * 记录结点元素和该元素所在分组的标识
     */
    private int[] eleAndGroup;

    /**
     * 记录并查集中数据的分组个数
     */
    private int count;

    public UnionFind(int n) {
        //初始情况下，每个元素都在一个独立的分组中，所以，初始情况下，并查集中的数据默认分为N个组
        this.count = n;
        //初始化数组
        eleAndGroup = new int[n];
        //把eleAndGroup数组的索引看做是每个结点存储的元素，
        // 把eleAndGroup数组每个索引处的值看做是该结点所在的分组，
        // 那么初始化情况下，i索引处存储的值就是i
        for (int i = 0; i < n; i++) {
            eleAndGroup[i] = i;
        }
    }

    /**
     * 获取当前并查集中的数据有多少个分组
     * @return
     */
    public int count(){
        return count;
    }

    /**
     * 判断并查集中元素p和元素q是否在同一分组中
     * @param p
     * @param q
     * @return
     */
    public boolean connected(int p,int q){
        return eleAndGroup[p] == eleAndGroup[q];
    }

    /**
     * 元素p所在分组的标识符
     * @param p
     * @return
     */
    public int find(int p){
        return eleAndGroup[p];
    }

    /**
     * 把p元素所在分组和q元素所在分组合并
     * @param p
     * @param q
     */
    public void union(int p,int q){
        //如果q和p已经在同一个分组中，不需要合并
        if(connected(p, q)){
            return;
        }
        //不在一个分组中
        int pFind = find(p);
        int qFind = find(q);
        for (int i = 0; i < eleAndGroup.length; i++) {
            if (eleAndGroup[i] == pFind){
                eleAndGroup[i] = qFind;
            }
        }
        //数量减1
        count--;
    }
}
```

- 测试类

  ```java
  public class UnionFindTest {
  
      public static void main(String[] args) {
          UnionFind uf = new UnionFind(5);
          int count = uf.count();
          System.out.println("总共有"+count+"个分组");
          Scanner scanner = new Scanner(System.in);
          while (true){
              System.out.println("请输入你要合并的第一个点");
              int i = scanner.nextInt();
              System.out.println("请输入你要合并的第二个点");
              int j = scanner.nextInt();
              if(uf.connected(i,j)){
                  System.out.println("结点"+ i +"和结点"+ j +"已经在同一个组");
                  continue;
              }
              uf.union(i,j);
              System.out.println("总共还有"+uf.count()+"个分组");
          }
      }
  }
  ```



### 3、并查集应用举例

> 如果我们并查集存储的每一个整数表示的是一个大型计算机网络中的计算机，则我们就可以通过connected(intp,int q)来检测，该网络中的某两台计算机之间是否连通？如果连通，则他们之间可以通信，如果不连通，则不能通信，此时我们又可以调用union(int p,int q)使得p和q之间连通，这样两台计算机之间就可以通信了。
>
> 一般像计算机这样网络型的数据，我们要求网络中的每两个数据之间都是相连通的，也就是说，我们需要调用很多次union方法，使得网络中所有数据相连，其实我们很容易可以得出，如果要让网络中的数据都相连，则我们至少要调用N-1次union方法才可以，但由于我们的union方法中使用for循环遍历了所有的元素，所以很明显，我们之前实现的合并算法的时间复杂度是O(N^2)，如果要解决大规模问题，它是不合适的，所以我们需要对算法进行优化。



### 4、算法优化

> 为了提升union算法的性能，我们需要重新设计find方法和union方法的实现，此时我们先需要对我们的之前数据结构中的eleAndGourp数组的含义进行重新设定：
>
> - 我们仍然让eleAndGroup数组的索引作为某个结点的元素；
> - eleAndGroup[i]的值不再是当前结点所在的分组标识，而是该结点的父结点；



#### 1、API设计

| 类名     | UF_Tree                                                      |
| -------- | ------------------------------------------------------------ |
| 构造方法 | UF_Tree(int N)：初始化并查集，以整数标识(0,N-1)个结点        |
| 成员方法 | public int count()：获取当前并查集中的数据有多少个分组<br/>public boolean connected(int p,int q):判断并查集中元素p和元素q是否在同一分组中<br/>public int find(int p):元素p所在分组的标识符<br/>public void union(int p,int q)：把p元素所在分组和q元素所在分组合并 |
| 成员变量 | private int[] eleAndGroup: 记录结点元素和该元素的父结点<br/>private int count：记录并查集中数据的分组个数 |

#### 2、实现

##### 1、find(int p)查询方法实现

> 1. 判断当前元素p的父结点eleAndGroup[p]是不是自己，如果是自己则证明已经是根结点了；
> 2. 如果当前元素p的父结点不是自己，则让p=eleAndGroup[p]，继续找父结点的父结点,直到找到根结点为止；



##### 2、union(int p,int q)合并方法实现

> 1. 找到p元素所在树的根结点
> 2. 找到q元素所在树的根结点
> 3. 如果p和q已经在同一个树中，则无需合并；
> 4. 如果p和q不在同一个分组，则只需要将p元素所在树根结点的父结点设置为q元素的根结点即可；
> 5. 分组数量-1





#### 3、完成代码

```java
public class UF_Tree {

    /**
     * 记录结点元素和该元素所在分组的标识
     */
    private int[] eleAndGroup;

    /**
     * 记录并查集中数据的分组个数
     */
    private int count;

    public UF_Tree(int n) {
        //初始情况下，每个元素都在一个独立的分组中，所以，初始情况下，并查集中的数据默认分为N个组
        this.count = n;
        //初始化数组
        eleAndGroup = new int[n];
        //把eleAndGroup数组的索引看做是每个结点存储的元素，
        // 把eleAndGroup数组每个索引处的值看做是该结点所在的分组，
        // 那么初始化情况下，i索引处存储的值就是i
        for (int i = 0; i < n; i++) {
            eleAndGroup[i] = i;
        }
    }

    /**
     * 获取当前并查集中的数据有多少个分组
     * @return
     */
    public int count(){
        return count;
    }

    /**
     * 判断并查集中元素p和元素q是否在同一分组中
     * @param p
     * @param q
     * @return
     */
    public boolean connected(int p,int q){
        return eleAndGroup[p] == eleAndGroup[q];
    }

    /**
     * 元素p所在分组的标识符
     * @param p
     * @return
     */
    public int find(int p){
        while (true){
            //判断当前元素p的父结点eleAndGroup[p]是不是自己，如果是自己则证明已经是根结点了；
            if(p == eleAndGroup[p]){
                return p;
            }
            //如果当前元素p的父结点不是自己，则让p=eleAndGroup[p]，继续找父结点的父结点,直到找到根结点为止；
            p = eleAndGroup[p];
        }
    }

    /**
     * 把p元素所在分组和q元素所在分组合并
     * @param p
     * @param q
     */
    public void union(int p,int q){
        //不在一个分组中
        int pFind = find(p);
        int qFind = find(q);
        if (qFind == pFind){
            return;
        }
        //如果p和q不在同一个分组，则只需要将p元素所在树根结点的父结点设置为q元素的根结点即可；
        eleAndGroup[pFind] = qFind;
        //数量减1
        count--;
    }
}
```



- 测试类

  ```java
  public class UnionFindTreeTest {
  
      public static void main(String[] args) {
          UF_Tree uf = new UF_Tree(5);
          int count = uf.count();
          System.out.println("总共有"+count+"个分组");
          Scanner scanner = new Scanner(System.in);
          while (true){
              System.out.println("请输入你要合并的第一个点");
              int i = scanner.nextInt();
              System.out.println("请输入你要合并的第二个点");
              int j = scanner.nextInt();
              if(uf.connected(i,j)){
                  System.out.println("结点"+ i +"和结点"+ j +"已经在同一个组");
                  continue;
              }
              uf.union(i,j);
              System.out.println("总共还有"+uf.count()+"个分组");
          }
      }
  }
  ```





### 5、路径压缩

> UF_Tree中最坏情况下union算法的时间复杂度为O(N^2)，其最主要的问题在于最坏情况下，树的深度和数组的大小一样，如果我们能够通过一些算法让合并时，生成的树的深度尽可能的小，就可以优化find方法。
>
> 之前我们在union算法中，合并树的时候将任意的一棵树连接到了另外一棵树，这种合并方法是比较暴力的，如果我们把并查集中每一棵树的大小记录下来，然后在每次合并树的时候，把较小的树连接到较大的树上，就可以减小树的深度。



只要我们保证每次合并，都能把小树合并到大树上，就能够压缩合并后新树的路径，这样就能提高find方法的效率。为了完成这个需求，我们需要另外一个数组来记录存储每个根结点对应的树中元素的个数，并且需要一些代码调整数组中的值。

#### 1、API设计

| 类名     | UF_Tree_Weighted                                             |
| -------- | ------------------------------------------------------------ |
| 构造方法 | UF_Tree_Weighted(int N)：初始化并查集，以整数标识(0,N-1)个结点 |
| 成员方法 | public int count()：获取当前并查集中的数据有多少个分组<br>public boolean connected(int p,int q):判断并查集中元素p和元素q是否在同一分组中<br/>public int find(int p):元素p所在分组的标识符<br/>public void union(int p,int q)：把p元素所在分组和q元素所在分组合并 |
| 成员变量 | private int[] eleAndGroup: 记录结点元素和该元素的父结点<br/>private int[] sz: 存储每个根结点对应的树中元素的个数<br/>private int count：记录并查集中数据的分组个数 |



#### 2、实现

```java
public class UFTreeWeighted {

    private int[] eleAndGroup;

    private int[] rootSize;

    private int count;

    public UFTreeWeighted(int count) {
        this.count = count;
        //初始化数组
        eleAndGroup = new int[count];
        rootSize = new int[count];
        /**
         * 把eleAndGroup数组的索引看做是每个结点存储的元素，
         * 把eleAndGroup数组每个索引处的值看做是该结点所在的分组，
         * 那么初始化情况下，i索引处存储的值就是i
         */
        for (int i = 0; i < count; i++) {
            eleAndGroup[i] = i;
        }
        //把sz数组中所有的元素初始化为1，默认情况下，每个结点都是一个独立的树，每个树中只有一个元素
        for (int i = 0; i < count; i++) {
            rootSize[i] = 1;
        }
    }

    /**
     * 获取当前并查集中的数据有多少个分组
     * @return count
     */
    public int count(){
        return count;
    }

    /**
     * 判断并查集中元素p和元素q是否在同一分组中
     * @param p
     * @param q
     * @return
     */
    public boolean connected(int p,int q){
        return find(p) == find(q);
    }

    /**
     * 元素p所在分组的标识符
     * @param p
     * @return
     */
    public int find(int p){
        while (true){
            if(p == eleAndGroup[p]){
                return p;
            }
            p = eleAndGroup[p];
        }
    }

    /**
     * ：把p元素所在分组和q元素所在分组合并
     * @param p
     * @param q
     */
    public void union(int p,int q){
        //找到p元素的根结点
        int pRoot = find(p);
        //找到q元素的根结点
        int qRoot = find(q);
        //如果已经在一个组中，无需合并
        if(pRoot == qRoot){
            return;
        }
        //不在一个组中，比较q所在树中的元素个数和p所在树中的元素个数，小树向大树合并
        if(rootSize[pRoot] < rootSize[qRoot]){
            eleAndGroup[pRoot] = qRoot;
            rootSize[qRoot] += rootSize[pRoot];
        }else {
            eleAndGroup[qRoot] = pRoot;
            rootSize[pRoot] += rootSize[qRoot];
        }
        //分组数组-1
        count--;
    }
}
```
