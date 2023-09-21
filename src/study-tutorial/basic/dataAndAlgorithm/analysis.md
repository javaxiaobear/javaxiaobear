---
title: 2、算法分析
icon: 
---
> 研究算法的最终目的就是如何花更少的时间，如何占用更少的内存去完成相同的需求，并且也通过案例演示了不同算法之间时间耗费和空间耗费上的差异，但我们并不能将时间占用和空间占用量化，因此，接下来我们要学习有关算法时间耗费和算法空间耗费的描述和分析。有关算法时间耗费分析，我们称之为算法的时间复杂度分析，有关算法的空间耗费分析，我们称之为算法的空间复杂度分析。

### 1、时间复杂度

#### 1、大O记法

> 在进行算法分析时，语句总的执行次数T(n)是关于问题规模n的函数，进而分析T(n)随着n的变化情况并确定T(n)的量级。算法的时间复杂度，就是算法的时间量度，记作:T(n)=O(f(n))。它表示随着问题规模n的增大，算法执行时间的增长率和f(n)的增长率同，称作算法的渐近时间复杂度，简称时间复杂度，其中f(n)是问题规模n的某个函数。
> 在这里，我们需要明确一个事情：执行次数=执行时间
> 用大写O()来体现算法时间复杂度的记法，我们称之为大O记法。一般情况下，随着输入规模n的增大，T(n)增长最慢的算法为最优算法。

案例1：

```java
public static void main(String[] args) {
    int sum = 0;//执行1次
    int n=100;//执行1次
    sum = (n+1)*n/2;//执行1次
    System.out.println("sum="+sum);
}
```

案例2：

```java
public static void main(String[] args) {
    int sum = 0;//执行1次
    int n=100;//执行1次
    for (int i = 1; i <= n; i++) {
        sum += i;//执行了n次
    }
    System.out.println("sum=" + sum);
}
```

案例3：

```java
public static void main(String[] args) {
    int sum=0;//执行1次
    int n=100;//执行1次
    for (int i = 1; i <=n ; i++) {
        for (int j = 1; j <=n ; j++) {
            sum+=i;//执行n^2次
        }
    }
    System.out.println("sum="+sum);
}
```

如果忽略判断条件的执行次数和输出语句的执行次数，那么当输入规模为n时，以上算法执行的次数分别为：
案例一：3次
案例二：n+3次
案例三：n^2+2次

基于我们对函数渐近增长的分析，推导大O阶的表示法有以下几个规则可以使用：

1. 用常数1取代运行时间中的所有加法常数；
2. 在修改后的运行次数中，只保留高阶项；
3. 如果最高阶项存在，且常数因子不为1，则去除与这个项相乘的常数；

所以，对应上面的3个案例为：

案例1：O(1)

案例1：O(n)

案例1：O(n^2)



#### 2、常见的大O阶

##### 1、线性阶

> 一般含有非嵌套循环涉及线性阶，线性阶就是随着输入规模的扩大，对应计算次数呈直线增长

```java
public static void main(String[] args) {
    int sum = 0;
    int n=100;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    System.out.println("sum=" + sum);
}
```

上面这段代码，它的循环的时间复杂度为O(n),因为循环体中的代码需要执行n次

##### 2、平方阶

> 一般嵌套循环属于这种时间复杂度

```java
public static void main(String[] args) {
    int sum=0,n=100;
    for (int i = 1; i <=n ; i++) {
        for (int j = 1; j <=n ; j++) {
            sum+=i;
        }
    }
    System.out.println(sum);
}
```

上面这段代码，n=100，也就是说，外层循环每执行一次，内层循环就执行100次，那总共程序想要从这两个循环出来，就需要执行100100次，也就是n的平方次，所以这段代码的时间复杂度是O(n^2).*

##### 3、立方阶

> 一般三层嵌套循环属于这种时间复杂度

```java
public static void main(String[] args) {
    int x=0,n=100;
    for (int i = 1; i <=n ; i++) {
        for (int j = i; j <=n ; j++) {
            for (int j = i; j <=n ; j++) {
                x++;
            }
        }
    }
    System.out.println(x);
}
```

上面这段代码，n=100，也就是说，外层循环每执行一次，中间循环循环就执行100次，中间循环每执行一次，最内层循环需要执行100次，那总共程序想要从这三个循环中出来，就需要执行100100100次，也就是n的立方，所以这段代码的时间复杂度是O(n^3).

##### 4、对数阶

> 对数，属于高中数学的内容，我们分析程序以程序为主，数学为辅

```java
int i=1,n=100;
while(i<n){
    i = i*2;
}
```

由于每次i2之后，就距离n更近一步，假设有x个2相乘后大于n，则会退出循环。由于是2^x=n,得到x=log(2)n,所以这个循环的时间复杂度为O(logn);*

##### 5、常数阶

> 一般不涉及循环操作的都是常数阶，因为它不会随着n的增长而增加操作次数。

```java
public static void main(String[] args) {
    int n=100;
    int i=n+2;
    System.out.println(i);
}
```

上述代码，不管输入规模n是多少，都执行2次，根据大O推导法则，常数用1来替换，所以上述代码的时间复杂度为O(1)



复杂程度从低到高依次为：O(1)<O(logn)<O(n)<O(nlogn)<O(n2)<O(n3)

#### 3、函数调用的时间复杂度分析

案例1：

```java
public static void main(String[] args) {
    int n=100;
    for (int i = 0; i < n; i++) {
        show(i);
    }
}
private static void show(int i) {
    System.out.println(i);
}
```

> 在main方法中，有一个for循环，循环体调用了show方法，由于show方法内部只执行了一行代码，所以show方法的时间复杂度为O(1),那main方法的时间复杂度就是O(n)

案例2：

```java
public static void main(String[] args) {
    int n=100;
    for (int i = 0; i < n; i++) {
        show(i);
    }
}
private static void show(int i) {
    for (int j = 0; j < i; i++) {
        System.out.println(i);
    }
}
```

> 在main方法中，有一个for循环，循环体调用了show方法，由于show方法内部也有一个for循环，所以show方法的时间复杂度为O(n),那main方法的时间复杂度为O(n^2)

案例3：

```java
public static void main(String[] args) {
    int n=100;
    show(n);
    for (int i = 0; i < n; i++) {
        show(i);
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            System.out.println(j);
        }
    }
}
private static void show(int i) {
    for (int j = 0; j < i; i++) {
        System.out.println(i);
    }
}
```

> 在show方法中，有一个for循环，所以show方法的时间复杂度为O(n),在main方法中，show(n)这行代码内部执行的次数为n，第一个for循环内调用了show方法，所以其执行次数为nn,第二个嵌套for循环内只执行了一行代码，所以其执行次数为nn,那么main方法总执行次数为n+n2+n2=2nn+n。根据大O推导规则，去掉n保留最高阶项，并去掉最高阶项的常数因子2，所以最终main方法的时间复杂度为O(n^2)*

#### 4、最坏的情况

有一个存储了n个随机数字的数组，请从中查找出指定的数字。

```java
public int search(int num){
    int[] arr={11,10,8,9,7,22,23,0};
    for (int i = 0; i < arr.length; i++) {
        if (num==arr[i]){
            return i;
        }
    }
    return -1;
}
```

*最好的情况：查找的第一个数字就是期望的数字，那么算法的时间复杂度为O(1)*

*最坏的情况：查找的最后一个数字，才是期望的数字，那么算法的时间复杂度为O(n)*

*平均情况：任何数字查找的平均成本是O(n/2)*



### 2、空间复杂度

#### 1、Java中常见的内存占用

| 数据类型 | 占用字节数 |
| -------- | ---------- |
| byte     | 1          |
| short    | 2          |
| int      | 4          |
| long     | 8          |
| float    | 4          |
| double   | 8          |
| boolean  | 1          |
| char     | 2          |

*一个引用（机器地址）需要8个字节表示：*

例如： Date date = new Date(),则date这个变量需要占用8个字节来表示

- 创建一个对象，比如new Date()，除了Date对象内部存储的数据(例如年月日等信息)占用的内存，该对象本身也有内存开销，每个对象的自身开销是16个字节，用来保存对象的头信息。
- 一般内存的使用，如果不够8个字节，都会被自动填充为8字节
- java中数组被被限定为对象，他们一般都会因为记录长度而需要额外的内存，一个原始数据类型的数组一般需要24字节的头信息(16个自己的对象开销，4字节用于保存长度以及4个填充字节)再加上保存值所需的内存。

#### 2、空间复杂度

算法的空间复杂度计算公式记作：S(n)=O(f(n))，其中n为输入规模，f(n)为语句关于n所占存储空间的函数。

*案例：对指定的数组元素进行反转，并返回反转的内容。*

解法1：

```java
public static int[] reverse2(int[] nums){
    int n = nums.length;//申请4个字节
    int temp;//申请4个字节
    for (int start = 0,end = n-1; start < end; start++,end--) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
    }
    return nums;
}
```

解法2：

```java
/**
     * 数组反转
     * @param nums
     * @return
     */
public static int[] reverse(int[] nums){
    int n = nums.length;//申请4个字节
    int[] resultArr = new int[n];//申请n*4个字节+数组自身头信息开销24个字节
    for (int i = n - 1; i >= 0; i--) {
        resultArr[n - 1 - i] = nums[i];
    }
    return resultArr;
}
```

解法1：不管传入的数组大小为多少，始终额外申请4+4=8个字节；空间复杂度为O(1)

解法2：4+4n+24=4n+28；空间复杂度为O(n)

从空间占用的角度讲，解法一要优于解法二
