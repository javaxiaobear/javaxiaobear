---
title: 1、ArrayList扩容机制
---
### 1、底层数据结构

```java
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
{
    private static final long serialVersionUID = 8683452581122892189L;

    /**
     * 默认的初始化容量
     */
    private static final int DEFAULT_CAPACITY = 10;

    /**
     *底层采用的是数组
     */
    transient Object[] elementData; // non-private to simplify nested class access

    /**
     * 元素个数
     *
     * @serial
     */
    private int size;
}
```

> ArrayList底层采用的是数组

### 2、构造函数

```java
//指定容量构造函数初始化
public ArrayList(int initialCapacity) {
    if (initialCapacity > 0) {
        this.elementData = new Object[initialCapacity];
    } else if (initialCapacity == 0) {
        this.elementData = EMPTY_ELEMENTDATA;
    } else {
        throw new IllegalArgumentException("Illegal Capacity: "+
                                           initialCapacity);
    }
}

//无参构造 初始化为空数组
public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}

//集合构造初始化
public ArrayList(Collection<? extends E> c) {
    Object[] a = c.toArray();
    if ((size = a.length) != 0) {
        if (c.getClass() == ArrayList.class) {
            elementData = a;
        } else {
            elementData = Arrays.copyOf(a, size, Object[].class);
        }
    } else {
        // replace with empty array.
        elementData = EMPTY_ELEMENTDATA;
    }
}
```



> - ArrayList() 会使用长度为0的数组
> - ArrayList(int initialCapacity) 会初始化指定容量的数组
> - ArrayList(Collection<? extends E> c)  会初始化c的大小作为数组容量



### 3、扩容规则



```java
private static int calculateCapacity(Object[] elementData, int minCapacity) {
        if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
            //DEFAULT_CAPACITY = 10
            return Math.max(DEFAULT_CAPACITY, minCapacity);
        }
        return minCapacity;
}

private void ensureCapacityInternal(int minCapacity) {
    ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}

private void ensureExplicitCapacity(int minCapacity) {
    modCount++;

    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}

/**
     * The maximum size of array to allocate.
     * Some VMs reserve some header words in an array.
     * Attempts to allocate larger arrays may result in
     * OutOfMemoryError: Requested array size exceeds VM limit
     */
private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;

/**
     * Increases the capacity to ensure that it can hold at least the
     * number of elements specified by the minimum capacity argument.
     *
     * @param minCapacity the desired minimum capacity
     */
private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = elementData.length;
    //扩容后的规则是原来容量的1.5倍
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
}

private static int hugeCapacity(int minCapacity) {
    if (minCapacity < 0) // overflow
        throw new OutOfMemoryError();
    return (minCapacity > MAX_ARRAY_SIZE) ?
        Integer.MAX_VALUE :
    MAX_ARRAY_SIZE;
}
```



#### 1、Add(Object o)扩容



```java
public boolean add(E e) {
    //调用上面的扩容规则
    ensureCapacityInternal(size + 1);  // Increments modCount!!
    elementData[size++] = e;
    return true;
}

/**
     * Inserts the specified element at the specified position in this
     * list. Shifts the element currently at that position (if any) and
     * any subsequent elements to the right (adds one to their indices).
     *
     * @param index index at which the specified element is to be inserted
     * @param element element to be inserted
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
public void add(int index, E element) {
    rangeCheckForAdd(index);

    ensureCapacityInternal(size + 1);  // Increments modCount!!
    System.arraycopy(elementData, index, elementData, index + 1,
                     size - index);
    elementData[index] = element;
    size++;
}
```

##### add(）详解

1. 初始化ArrayList，size =0，DEFAULT_CAPACITY = 10，elementData = {}，
2. 调用add(Object o)时，调用`ensureCapacityInternal(1)`
    - 调用`calculateCapacity(elementData, 1)`，返回数组容量，elementData为空，所以返回初始化容量和指定容量1的最大值`Math.max(DEFAULT_CAPACITY, 1)`，返回10
    - 调用`ensureExplicitCapacity`方法，判断是否需要初始化数组容量，若`minCapacity - elementData.length > 0`，即10 - 1 > 0，调用`grow`方法，增加容量以确保它至少可以容纳最小容量参数指定的元素数量
    - `grow`方法做了哪些事，首先会获取数组的大小`oldCapacity`，然后进行扩容，采用的移位运算`>>`，返回一个新的容量`newCapacity`，然后跟所需的最小容量`minCapacity`比较
        - newCapacity - minCapacity < 0：说明需要的最小容量大，返回minCapacity
        - newCapacity - MAX_ARRAY_SIZE > 0：大于最大值，返回最大值
    - 最后把容量和元素赋值给数组



##### 验证扩容规则



```java
/**
     * 计算arraylist的扩容规则
     * @param n
     * @return
     */
private static List<Integer> arrayListGrowRule(int n) {
    List<Integer> list = new ArrayList<>();
    int init = 0;
    list.add(init);
    //初始容量
    if (n >= 1) {
        init = 10;
        list.add(init);
    }
    //进行扩容
    for (int i = 1; i < n; i++) {
        init += (init) >> 1;
        list.add(init);
    }
    return list;
}
```

```
[0, 10, 15, 22, 33, 49, 73, 109, 163, 244, 366]
```



##### 结论

>  add(Object o)：首次（空数组的情况下）扩容为10，之后为元容量的1.5倍

#### 2、addAll(Collection<? extends E> c)扩容规则



```java
/**
按照指定集合的​​迭代器返回的顺序，将指定集合中的所有元素附加到此列表的末尾。如果在操作正在进行时修改了指定的集合，则此操作的行为是未定义的。 （这意味着如果指定的集合是这个列表，并且这个列表是非空的，那么这个调用的行为是未定义的。）
参数：c - 包含要添加到此列表的元素的集合
返回：如果此列表因调用而更改，则为true
抛出：NullPointerException – 如果指定的集合为空
     */
public boolean addAll(Collection<? extends E> c) {
    Object[] a = c.toArray();
    int numNew = a.length;
    ensureCapacityInternal(size + numNew);  // Increments modCount
    System.arraycopy(a, 0, elementData, size, numNew);
    size += numNew;
    return numNew != 0;
}

/**
将指定集合中的所有元素插入此列表，从指定位置开始。将当前位于该位置的元素（如果有）和任何后续元素向右移动（增加它们的索引）。新元素将按照指定集合的​​迭代器返回的顺序出现在列表中。
参数：index – 插入指定集合中第一个元素的索引   c - 包含要添加到此列表的元素的集合
返回：如果此列表因调用而更改，则为true
抛出：IndexOutOfBoundsException –NullPointerException – 如果指定的集合为空
     */
public boolean addAll(int index, Collection<? extends E> c) {
    rangeCheckForAdd(index);

    Object[] a = c.toArray();
    int numNew = a.length;
    ensureCapacityInternal(size + numNew);  // Increments modCount

    int numMoved = size - index;
    if (numMoved > 0)
        System.arraycopy(elementData, index, elementData, index + numNew,
                         numMoved);

    System.arraycopy(a, 0, elementData, index, numNew);
    size += numNew;
    return numNew != 0;
}
```

##### addAll详解

- 初始化ArrayList，size =0，DEFAULT_CAPACITY = 10，elementData = {}，
- 调用addAll(Object o)时，获取数组长度n，调用`ensureCapacityInternal(size+n)`
    - 调用`calculateCapacity(elementData, size+n)`，返回数组容量，elementData为空，所以返回初始化容量和指定容量1的最大值`Math.max(DEFAULT_CAPACITY, size+n)`，返回10
    - 调用`ensureExplicitCapacity`方法，判断是否需要初始化数组容量，若`minCapacity - elementData.length > 0`，即10 - 1 > 0，调用`grow`方法，增加容量以确保它至少可以容纳最小容量参数指定的元素数量
    - `grow`方法做了哪些事，首先会获取数组的大小`oldCapacity`，然后进行扩容，采用的移位运算`>>`，返回一个新的容量`newCapacity`，然后跟所需的最小容量`minCapacity`比较
        - newCapacity - minCapacity < 0：说明需要的最小容量大，返回minCapacity
        - newCapacity - MAX_ARRAY_SIZE > 0：大于最大值，返回最大值
    - 最后把容量和元素赋值给数组

##### 验证扩容规则



```java
//空数组情况，测试增加
private static void testAddAllGrowEmpty() {
    ArrayList<Integer> list = new ArrayList<>();
    //        list.addAll(Arrays.asList(1,2,3));
    list.addAll(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
    System.out.println(length(list));
}

//不为空情况下增加
private static void testAddAllGrowNotEmpty() {
    ArrayList<Integer> list = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
        list.add(i);
    }
    //        list.addAll(Arrays.asList(1, 2, 3));
    list.addAll(Arrays.asList(1, 2, 3, 4, 5, 6));
    System.out.println(length(list));
}
//反射获取长度
public static int length(ArrayList<Integer> list) {
    try {
        Field field = ArrayList.class.getDeclaredField("elementData");
        field.setAccessible(true);
        return ((Object[]) field.get(list)).length;
    } catch (Exception e) {
        e.printStackTrace();
        return 0;
    }
}
```

- 空数组添加结合
    - 添加长度小于10，数组的初始容量扩容为10
    - 添加长度大于10，数组的初始容量扩容为Math.max(10,实际个数)
- 不为空添加集合
    - 添加长度小于扩容后的容量，数组的容量为原容量的1.5倍
    - 添加长度大于扩容后的容量，数组的容量为Math.max(原容量的1.5倍，实际个数)

##### 结论

> addAll(Object c)没有元素时，扩容为Math.max(10,实际个数)，有元素时，Math.max(原容量的1.5倍，实际个数)


### 总结

> - ArrayList() 会使用长度为0的数组
> - ArrayList(int initialCapacity) 会初始化指定容量的数组
> - ArrayList(Collection<? extends E> c)  会初始化c的大小作为数组容量
> - add(Object o)：首次（空数组的情况下）扩容为10，之后为元容量的1.5倍
> - addAll(Object c)没有元素时，扩容为Math.max(10,实际个数)，有元素时，Math.max(原容量的1.5倍，实际个数)
