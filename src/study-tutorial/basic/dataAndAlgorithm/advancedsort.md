--- 
title: 4、高级排序
---

### 1、希尔排序

> 希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。
>
> 希尔排序是基于插入排序的以下两点性质而提出改进方法的：
>
> - 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
> - 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位；
>
> 希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，再对全体记录进行依次直接插入排序。

#### 1、算法步骤

> 1. 选定一个增长量h，按照增长量h作为数据分组的依据，对数据进行分组；
> 2. 对分好组的每一组数据完成插入排序；
> 3. 减小增长量，最小减为1，重复第二步操作。





*增长量h的确定：*

1. 先假设h=1
2. 如果h的值小于数组长度的一半，则h = 2h+1，直到大于数组长度的一半，即为增长量的值*
3. 每次循环之后，h变为原来的一半

```java
int h=1
while(h<5){
h=2h+1；//3,7
}
//循环结束后我们就可以确定h的最大值；
//h的减小规则为：
h=h/2
```

#### 2、代码实现

```java
public int[] hillSort(int[] nums){
    //先确定增长量的值
    int n = nums.length;
    int index = 1;
    while(index < n/2){
        index = 2*index + 1;
    }
    while(1 <= index){
        for (int i = index; i < n; i++) { 
            for (int j = i; j >= index; j -= index) {
                if(nums[j] < nums[j - index]){
                    int temp = nums[j];
                    nums[j] = nums[j-index];
                    nums[j-index] = temp;
                }else {
                    break;
                }
            }
        }
        index = index/2;
    }
    return nums;
}
```



### 2、归并排序

> 归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
>
> 作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：
>
> - 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
> - 自下而上的迭代；

#### 1、算法步骤

> 1. 尽可能的一组数据拆分成两个元素相等的子组，并对每一个子组继续拆分，直到拆分后的每个子组的元素个数是1为止。
> 2. 将相邻的两个子组进行合并成一个有序的大组；
> 3. 不断的重复步骤2，直到最终只有一个组为止。





#### 2、代码实现

Arrays.copyOfRange：主要用于对一个已有的数组进行截取复制，复制出一个左闭右开区间的数组。



```java
public int[] sort(int[] nums){
    if(1 == nums.length){
        return nums;
    }
    int mid = nums.length/2;
    //将原来数组拆分成左右两个数组
    int[] left = Arrays.copyOfRange(nums,0,mid);
    int[] right = Arrays.copyOfRange(nums,mid,nums.length);
    return mergeSort(sort(left),sort(right));
}

/**
     *
     * @param left 左边数组
     * @param right 右边数组
     * @return
     */
public int[] mergeSort(int[] left,int[] right){
    //初始化结果数组
    int[] result = new int[left.length+right.length];
    int i = 0;
    while(0 < left.length && 0 < right.length){
        if(left[0] <= right[0]){
            result[i++] = left[0];
            left = Arrays.copyOfRange(left,1,left.length);
        }else {
            result[i++] = right[0];
            right = Arrays.copyOfRange(right,1,right.length);
        }
    }
    //这里主要是把落单的元素排到最后面
    while(0 < left.length){
        result[i++] = left[0];
        left = Arrays.copyOfRange(left,1,left.length);
    }
    while(0 < right.length){
        result[i++] = right[0];
        right = Arrays.copyOfRange(right,1,right.length);
    }
    return result;
}
```

### 3、快速排序

> 快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。
>
> 快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。
>
> 它是处理大数据最快的排序算法之一。

> 快速排序的最坏运行情况是 O(n²)，比如说顺序数列的快排。但它的平摊期望时间是 O(nlogn)，且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。

#### 1、算法步骤

> 1. 首先设定一个分界值，通过该分界值将数组分成左右两部分；
> 2. 将大于或等于分界值的数据放到到数组右边，小于分界值的数据放到数组的左边。此时左边部分中各元素都小于或等于分界值，而右边部分中各元素都大于或等于分界值；
> 3. 然后，左边和右边的数据可以独立排序。对于左侧的数组数据，又可以取一个分界值，将该部分数据分成左右两部分，同样在左边放置较小值，右边放置较大值。右侧的数组数据也可以做类似处理。
> 4. 重复上述过程，可以看出，这是一个递归定义。通过递归将左侧部分排好序后，再递归排好右侧部分的顺序。当左侧和右侧两个部分的数据排完序后，整个数组的排序也就完成了。





*切分原理：*

1. 找一个基准值，用两个指针分别指向数组的头部和尾部；
2. 先从尾部向头部开始搜索一个比基准值小的元素，搜索到即停止，并记录指针的位置；
3. 再从头部向尾部开始搜索一个比基准值大的元素，搜索到即停止，并记录指针的位置；
4. 交换当前左边指针位置和右边指针位置的元素；
5. 重复2,3,4步骤，直到左边指针的值大于右边指针的值停止。

#### 2、代码实现

```java
public int[] quickSort(int[] arr, int left, int right){
    if(left < right){
        //获取基准值
        int partition = partition(arr, left, right);
        quickSort(arr,left,partition-1);
        quickSort(arr,partition+1,right);
    }
    return arr;
}

/**
     * 设置基准值并排序
     * @param nums
     * @param left
     * @param right
     * @return 下一轮基准值
     */
public int partition(int[] nums, int left, int right){
    //基准值下标
    int pivot = left;
    //开始比较下标
    int index = pivot + 1;
    for (int i = index; i < nums.length; i++) {
        if(nums[pivot] > nums[i]){
            //交换元素
            swap(nums,i,index);
            //原基准值下标 = index - 1
            index++;
        }
    }
    swap(nums,pivot,index - 1);
    return index - 1;
}

/**
     * 交换元素
     * @param nums 数组
     * @param pivot
     * @param i
     */
public void swap(int[] nums, int pivot, int i){
    int temp = nums[pivot];
    nums[pivot] = nums[i];
    nums[i] = temp;
}
```

解二：

```java
public stati int[] quickSort1(int[] nums, int start, int end){
    int left = start, right = end;
    int pivot = nums[(start+end)/ 2];
    while (left <= right){
        while (left<= right && nums[left] < pivot){
            left++;
        }
        while (left <= right && nums[left] > pivot){
            right++;
        }
        if(left <= right){
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
        quickSort(nums,start,right);
        quickSort(nums,left,end);
    }
    return nums;
}
```



#### 3、快速排序和归并排序的区别：

>  快速排序是另外一种分治的排序算法，它将一个数组分成两个子数组，将两部分独立的排序。
>
> 快速排序和归并排序是互补的：
>
> - 归并排序将数组分成两个子数组分别排序，并将有序的子数组归并从而将整个数组排序。
> - 而快速排序的方式则是当两个数组都有序时，整个数组自然就有序了。
> - 在归并排序中，一个数组被等分为两半，归并调用发生在处理整个数组之前。
> - 在快速排序中，切分数组的位置取决于数组的内容，递归调用发生在处理整个数组之后。
