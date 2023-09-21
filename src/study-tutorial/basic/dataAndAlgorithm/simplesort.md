---
title: 3、简单排序
---

### 1、Comparable接口介绍

> Comparable接口用于元素之间的比较

回顾：

#### 1、需求

1. 定义一个学生类Student，具有年龄age和姓名username两个属性，并通过Comparable接口提供比较规则；
2. 定义测试类Test，在测试类Test中定义测试方法Comparable getMax(Comparable c1,Comparable c2)完成测试

- Student类

  ```java
  public class Student implements Comparable<Student>{
  
      public String name;
  
      public int age;
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public int getAge() {
          return age;
      }
  
      public void setAge(int age) {
          this.age = age;
      }
  
      @Override
      public String toString() {
          final StringBuilder sb = new StringBuilder("Student{");
          sb.append("name='").append(name).append('\'');
          sb.append(", age=").append(age);
          sb.append('}');
          return sb.toString();
      }
      @Override
      public int compareTo(Student s){
          return this.getAge() - s.getAge();
      }
  }
  ```

- 测试类

  ```java
  public class TestCompare {
      public static void main(String[] args) {
          Student s1 = new Student();
          s1.setName("lwh");
          s1.setAge(18);
          Student s2 = new Student();
          s1.setName("yhx");
          s1.setAge(19);
          Comparable comparable = compareMax(s1, s2);
          System.out.println(comparable);
      }
  
      /**
       * 比较大小
       * @param c1
       * @param c2
       * @return
       */
      public static Comparable compareMax(Comparable c1,Comparable c2){
          int i = c1.compareTo(c2);
          /**
           * i > 0,c1 > c2
           * i == 0,c1 == c2
           * i < 0,c1 < c2
           */
          if(i >= 0){
              return c1;
          }else {
              return c2;
          }
      }
  }
  ```

### 2、冒泡排序

> 冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。

#### 1、算法步骤

> 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
>
> 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
>
> 针对所有的元素重复以上的步骤，除了最后一个。
>
> 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。





#### 2、代码实现

```java
/**
     * 冒泡排序算法 比较并交换
     * @param nums
     * @return
     */
public int[] bubbleSort(int[] nums){
    int n = nums.length;
    for (int i = n - 1; i >= 0; i--) {
        for (int j = 0; j < i; j++) {
            //交换两个元素
            if(nums[j] > nums[j+1]){
                int temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
}
```

#### 3、时间复杂度分析

冒泡排序使用了双层for循环，其中内层循环的循环体是真正完成排序的代码。

元素的比较次数：(N-1)+(N-2)+(N-3)+...+2+1=((N-1)+1)(N-1)/2 = N2/2-N/2；*

元素的交换次数：(N-1)+(N-2)+(N-3)+...+2+1=((N-1)+1)(N-1)/2 = N2/2-N/2;*

总的执行次数：N^N - N

按照大O推导法则，保留函数中的最高阶项那么最终冒泡排序的时间复杂度为O(N2).

### 2、选择排序

>  选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度

#### 1、算法步骤

> 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
>
> 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
>
> 重复第二步，直到所有元素均排序完毕。



#### 2、代码实现

```java
public int[] selectSort(int[] nums){
    int n = nums.length;
    //这里n-2是因为最后一次是跟自己比较
    for (int i = 0; i <= n-2; i++) {
        int index = i;
        //每一次内层循环找到最小元素的下标，如果不与i相等，则交换元素
        for (int j = i + 1; j < n; j++) {
            if(nums[index] > nums[j]){
                index = j;
            }
        }
        //交换元素
        if(i != index){
            int temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
        }
    }
    return nums;
}
```

#### 3、时间复杂度分析

> 选择排序使用了双层for循环，其中外层循环完成了数据交换，内层循环完成了数据比较

元素比较次数：（n-1）+(n-2)+……+1 =((n-1)+1)(n-1)/2 = n2/2 - n/2*

元素交换次数：（n-1）

总的执行次数： n2/2 - n/2 + （n-1） =  n2/2 + n/2 -1

根据大O推导法则，保留最高阶项，去除常数因子，时间复杂度为O(n2)

### 3、插入排序

> *插入排序：是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。*
>
> 插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。

插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。

#### 1、算法步骤

> 1. 把所有的元素分为两组，已经排序的和未排序的；
> 2. 找到未排序的组中的第一个元素，向已经排序的组中进行插入；
> 3. 倒叙遍历已经排序的元素，依次和待插入的元素进行比较，直到找到一个元素小于等于待插入元素，那么就把待插入元素放到这个位置，其他的元素向后移动一位；





#### 2、代码实现

````java
/**
     * 插入排序
     * @param nums
     * @return
     */
public int[] insertSort(int[] nums){
    int n = nums.length;
    // 从下标为1的元素开始选择合适的位置插入，因为下标为0的只有一个元素，默认是有序的
    for(int i=1;i < n;i++){
        //当前元素为a[i],依次和i前面的元素比较，找到一个小于等于a[i]的元素
        for (int j = i; j > 0; j--) {
            //交换元素
            if(nums[j] < nums[j-1]){
                int temp = nums[j];
                nums[j] = nums[ j-1];
                nums[j-1] = temp;
            }else {
                break;
            }
        }
    }
    return nums;
}
````

#### 3、时间复杂度分析

> 插入排序使用了双层for循环，其中内层循环的循环体是真正完成排序的代码

最坏的情况：就是原数组倒叙排列

比较的次数：（n-1）+(n-2)+……+1 =((n-1)+1)(n-1)/2 = n2/2 - n/2*

交换的次数：（n-1）+(n-2)+……+1 =((n-1)+1)(n-1)/2 = n2/2 - n/2*

总执行次数：n2 - n

按照大O推导法则，保留函数中的最高阶项那么最终插入排序的时间复杂度为O(n2)
