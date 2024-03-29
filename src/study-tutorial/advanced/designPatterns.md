## 1、设计模式的目的

> 编写软件过程中，程序员面临着来自耦合性，内聚性以及可维护性，可扩展性，重用性，灵活性等多方面的，挑战设计模式是为 了让程序软件，具有更好：
>
> - 代码重用性（相同功能的代码，不用多次编写）
> - 可读性（编程规范性，便于其他程序员的阅读和理解）
> - 可扩展性（当需要增加新的功能时，非常的方便，称为可维护性）
> - 可靠性（当我们增加新的功能时，对原来的功能没有影响）
> - 使程序呈现高内聚、低耦合的特性

设计模式包含了面向对象的精髓 懂了设计模式，你就懂了面向对象分析和设计（OOA/D ）的精要

## 2、设计模式的七大原则

> 设计模式原则，其实就是程序员在编程时，应当遵守的原则， 也是各种设计模式的基础 即： 设计模式为什么这样设计的依据
>
> - 单一职责原则
> - 接口隔离原则
> - 依赖倒转（倒置）原则
> - 里氏替换原则
> - 开闭原则
> - 迪米特法则
> - 合成复用原则

### 1、单一职责原则

> 对于一个类来说，一个类应该只负责一个职责。如类 A 负 责两个不同职责：职责1 ，职责2 。当职责1需求变更而改变A时 ，可能造成职 责 2 执行错误， 所以需要将类A的粒度分解 为A1、A2

#### 1、案例说明

以交通工具为例进行说明

##### 1、案例1

```java
public class SingleResponsibility {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        vehicle.run("摩托");
        vehicle.run("汽车");
        //违反了单一职责原则
        vehicle.run("飞机");
    }

    static class Vehicle{
        public void run(String vehicle) {
            System.out.println(vehicle + "在公路上跑！！！");
        }

    }
}
```

分析：

> ```java
> vehicle.run("飞机");
> ```
>
> 与其他两个交通工具的方式不同，违反了单一职责
>
> 解决：根据交通方式的运行方法不同，分解成不同的类即可



##### 2、案例2

```java
public class SingleResponsibility1 {
    public static void main(String[] args) {
        RoadVehicle roadVehicle = new RoadVehicle();
        roadVehicle.run("汽车");

        AirVehicle vehicle = new AirVehicle();
        vehicle.run("飞机");

        WaterVehicle waterVehicle = new WaterVehicle();
        waterVehicle.run("船");

    }

    static class RoadVehicle{
        public void run(String vehicle) {
            System.out.println(vehicle + "在公路上运行！！！");
        }
    }
    static class AirVehicle{
        public void run(String vehicle) {
            System.out.println(vehicle + "在天空上运行！！！");
        }
    }
    static class WaterVehicle{
        public void run(String vehicle) {
            System.out.println(vehicle + "在水里上运行！！！");
        }
    }
}
```

分析：

> 案例2遵守了单一职责原则，但这样的改动很大，将类分解，同时也要需要客户端
>
> 改进：直接修改`Vehicle`，改动的代码会比较少==》案例3



##### 3、案例3

```java
public class SingleResponsibility2 {
    public static void main(String[] args) {
        Vehicle2 vehicle2 = new Vehicle2();
        vehicle2.run("汽车");
        vehicle2.runRir("飞机");
        vehicle2.runWater("船");
    }

    static class Vehicle2{
        public void run(String vehicle) {
            System.out.println(vehicle + "在公路上运行！！！");
        }
        public void runRir(String vehicle) {
            System.out.println(vehicle + "在天空上运行！！！");
        }
        public void runWater(String vehicle) {
            System.out.println(vehicle + "在水里上运行！！！");
        }
    }
}
```

分析：

> 这种修改方法没有改动很大，只是增加了方法。
>
> 但类级别上没有遵循单一职责原则，方法级别上遵守单一职责原则



#### 2、注意事项和细节

> - 降低类的复杂度，一个类只负责一项职责
> - 提高类的可读性，可维护性
> - 降低变更引起的风险
> - 通常情况下，我们应当遵守单一职责原则，只有逻辑足够简单，才可以在代码级别违反单一职责原则；只有类中方法数量足够少，可以在方法级别保持单一职责原则



### 2、接口隔离原则

> 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上

#### 1、案例说明

> 类 A 通过接口 Interface1 依赖类 B ，类 C 通过接口 Interface1 依赖类 D ，如果接口Interface1 对于类 A 和类 C 来说不是最小接口，那么类 B 和类 D 必须去实现他们不需要的方法。


##### 1、案例1

```java
public class Segregation1 {
    public static void main(String[] args) {

    }
}

interface interface1{
    void operation1();
    void operation2();
    void operation3();
    void operation4();
    void operation5();
}
class B implements interface1{

    public void operation1() {
        System.out.println("B 实现了operation1");
    }

    public void operation2() {
        System.out.println("B 实现了operation2");
    }

    public void operation3() {
        System.out.println("B 实现了operation3");
    }

    public void operation4() {
        System.out.println("B 实现了operation4");
    }

    public void operation5() {
        System.out.println("B 实现了operation5");
    }
}
class D implements interface1{

    public void operation1() {
        System.out.println("D 实现了operation1");
    }

    public void operation2() {
        System.out.println("D 实现了operation2");
    }

    public void operation3() {
        System.out.println("D 实现了operation3");
    }

    public void operation4() {
        System.out.println("D 实现了operation4");
    }

    public void operation5() {
        System.out.println("D 实现了operation5");
    }
}
class A { /**A 类通过接口Interface1 依赖(使用) B 类，但是只会用到1,2,3 方法*/
    public void depend1(interface1 i) {
        i.operation1();
    }
    public void depend2(interface1 i) {
        i.operation2();
    }
    public void depend3(interface1 i) {
        i.operation3();
    }
}
class C {
    /**
    C 类通过接口Interface1 依赖(使用) D 类，但是只会用到1,4,5 方法
    */
    public void depend1(interface1 i) {
        i.operation1();
    }
    public void depend4(interface1 i) {
        i.operation4();
    }
    public void depend5(interface1 i) {
        i.operation5();
    }
}
```

分析：

> 类 A 通过接口 Interface1 依赖类 B ，类 C 通过接口 Interface1 依赖类 D ，如果接口Interface1 对于类 A 和类 C 来说不是最小接口，那么类 B 和类 D 必须去实现他们不需要的方法。
>
> 将 接口 Interface1 拆分为独立的几个接口，类 A 和类 C 分别与他们需要的接口建立依赖关系。也就是采用接口隔离原则


##### 2、案例2

```java
public class Segregation2 {
    public static void main(String[] args) {
        A a = new A();
        a.depend1(new B());
        a.depend2(new B());
        a.depend3(new B());

        //C类通过接口去依赖D类
        C c = new C();
        c.depend1(new D());
        c.depend4(new D());
        c.depend5(new D());
    }
}

interface Interface1{
    void operation1();
}

interface Interface2{
    void operation2();
    void operation3();
}

interface Interface3{
    void operation4();
    void operation5();
}

class B implements Interface1 ,Interface2,Interface3{

    public void operation1() {
        System.out.println("B 实现了operation1");
    }

    public void operation2() {
        System.out.println("B 实现了operation2");
    }

    public void operation3() {
        System.out.println("B 实现了operation3");
    }

    public void operation4() {
        System.out.println("B 实现了operation4");
    }

    public void operation5() {
        System.out.println("B 实现了operation5");
    }
}

class D implements Interface1 ,Interface2,Interface3{

    public void operation1() {
        System.out.println("D 实现了operation1");
    }

    public void operation2() {
        System.out.println("D 实现了operation2");
    }

    public void operation3() {
        System.out.println("D 实现了operation3");
    }

    public void operation4() {
        System.out.println("D 实现了operation4");
    }

    public void operation5() {
        System.out.println("D 实现了operation5");
    }
}

class A { /**A 类通过接口Interface1 依赖(使用) B 类，但是只会用到1,2,3 方法*/
    public void depend1(Interface1 i) {
        i.operation1();
    }
    public void depend2(Interface2 i) {
        i.operation2();
    }
    public void depend3(Interface2 i) {
        i.operation3();
    }
}

class C {
    /**
    C 类通过接口Interface1 依赖(使用) D 类，但是只会用到1,4,5 方法
    */
    public void depend1(Interface1 i) {
        i.operation1();
    }
    public void depend4(Interface3 i) {
        i.operation4();
    }
    public void depend5(Interface3 i) {
        i.operation5();
    }
}
```



### 3、依赖倒转原则

> 依赖倒转原则`Dependence Inversion Principle` 是指：
>
> - 高层模块不应该依赖低层模块，二者都应该依赖其抽象
> - 抽象不应该依赖细节，细节应该依赖抽象
> - 依赖倒转（倒置）的中心思想是面向接口编程
>
> 设计理念：相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建的架构要比以细节为基础的架构要稳定的多。在Java中，抽象指的是接口或抽象类，细节就是具体的实现类。
>
> 使用接口或抽象类的目的是：制定好规范，而不涉及任何具体的操作，把展现的细节的任务交给他们的实现类去完成

#### 1、案例说明

> Person完成接收消息

##### 1、案例1

```java
public class DependenceInversion {

    public static void main(String[] args) {
        Person person = new Person();
        person.receive(new Email());
    }

    static class Email{
        public String getInfo(){
            return "发送成功！";
        }
    }

    static class Person{
        public void receive(Email email){
            System.out.println(email.getInfo());
        }
    }
}
```

分析：

> 案例1是比较简单，很容易想到的
>
> 如果我们获取的对象是微信或者QQ等消息，则需要新增类，同时Person也要增加相应的方法。
>
> 解决思路：引入一个抽象的接口IReceive，表示接收者，这样Person类与接口IReceiver发生依赖，因为Email, WeiXin 等等属于接收的范围，他们各自实现IReceiver 接口就ok, 这样我们就符号依赖倒转原则



##### 2、案例2

```java
public class DependenceInversion {

    public static void main(String[] args) {
        Person person = new Person();
        person.receive(new Email());
        person.receive(new WeChat());
    }

    static class Email implements IReceive{
        public String getInfo(){
            return "发送成功！";
        }
    }
    static class WeChat implements IReceive{
        public String getInfo(){
            return "WeChat发送成功！";
        }
    }

    interface IReceive{
        public String getInfo();
    }

    static class Person {
        public void receive(IReceive iReceive){
            System.out.println(iReceive.getInfo());
        }
    }
}
```



#### 2、依赖关系传递的三种方式

##### 1、接口传递

```java
public class DependencyPassByInterface {

    public static void main(String[] args) {
        HuaWei huaWei = new HuaWei();
        TvOpen iTvOpen = new TvOpen();
        iTvOpen.open(huaWei);
    }

    interface ITv{
        public void play();
    }
    interface ITvOpen{
        public void open(ITv iTv);
    }

     static class HuaWei implements ITv{
        public void play() {
            System.out.println("鸿蒙电视牛逼！");
        }
    }

    static class TvOpen implements ITvOpen{
        public void open(ITv iTv) {
            iTv.play();
        }
    }
}
```

##### 2、构造方法传递

```java
public class DependencyPassByConstructor {

    public static void main(String[] args) {
        HuaWei huaWei = new HuaWei();
        TvOpen tvOpen = new TvOpen(huaWei);
        tvOpen.open();
    }

    interface ITv{
        public void play();
    }
    interface ITvOpen{
        public void open();
    }

     static class HuaWei implements ITv{
        public void play() {
            System.out.println("鸿蒙电视牛逼！");
        }
    }

    static class TvOpen implements ITvOpen{
        public ITv iTv;
        public TvOpen(ITv iTv){
            this.iTv = iTv;
        }

        public void open() {
            this.iTv.play();
        }
    }
}
```



##### 3、setter方法传递

```java
public class DependencyPassBySetter {

    public static void main(String[] args) {
        HuaWei huaWei = new HuaWei();
        TvOpen tvOpen = new TvOpen();
        tvOpen.setTv(huaWei);
        tvOpen.open();
    }

    interface ITv{
        public void play();
    }
    interface ITvOpen{
        public void open();

        public void setTv(ITv iTv);
    }

     static class HuaWei implements ITv{
        public void play() {
            System.out.println("鸿蒙电视牛逼！");
        }
     }

    static class TvOpen implements ITvOpen{
        public ITv iTv;
        public void setTv(ITv iTv) {
            this.iTv = iTv;
        }
        public void open() {
            this.iTv.play();
        }
    }
}
```



#### 3、注意事项和细节

> - 底层模块尽量都要有抽象类或接口，或者两者都有，程序稳定性更好
>
> - 变量的声明类型尽量是抽象类或接口，这样我们的变量引用和实际对象间，就存在一个缓冲层，利于程序扩展和优化
> - 继承时遵循里氏替换原则



### 4、里氏替换原则

#### 1、OO中的继承性的思考和说明

> 继承包含这样一层含义：父类中凡是已经实现好的方法， 实际上是在设定规范和契约，虽然它不强制要求所有的子类必须遵循这些契约，但是如果子类对这些已经实现的方法任意修改，就会对整个继承体系造成破坏 。
>
> 继承在 给程序设计带 来 便利 的 同时，也带来了弊端。比如使用继承会给程序带来侵入性，程序的可移植性降低，增加对象间的耦合性，如果一个类被其他的类所继承，则当这个类需要修改时，必须考虑到所有的子类，并且父类修改后，所有涉及到子类的功能都有可能产生故障。
>
> 问题提出：在编程中，如何正确的使用继承 ? => **里氏替换原则**

#### 2、基本介绍

> 里氏替换原则 Liskov Substitution Principle 在 1988 年，由麻省理工学院的以为姓里的女士提出的 。
>
> 如果对每个类型为T1的对象o1 ，都有类型为 T2 的对象 o2 ，使得以 T1 定义的所有程序P 在所有的对象 o1 都代换成 o2 时，程序 P 的行为没有发生变化，那么类型 T2 是类型 T1的子类型 。换句话说，所有引用基类的地方必须能透明地使用其子类的对象 。
>
> 在 使用继承时，遵循里氏替换原则，在子类中尽量不要重写父类的方法
>
> 里氏替换原则告诉我们，**继承实际上让两个类耦合性增强了，在适当的情况下，可以通过聚合，组合，依赖来解决问题。**

#### 3、案例说明

##### 1、案例1

```java
public class Liskov {
    public static void main(String[] args) {
        A a = new A();
        System.out.println("10 - 4 = " + a.fun1(10, 4));
        B b = new B();
        System.out.println("10 - 4 = " + b.fun1(10, 4));
        System.out.println("11 + 3 = " + b.fun2(11, 3));
    }
}

class A{
    public int fun1(int a, int b){
        return a - b;
    }
}

class B extends A{
    //类B继承类A 重写了fun1方法
    @Override
    public int fun1(int a, int b){
        return a + b;
    }
    public int fun2(int a, int b){
        return a - b;
    }
}
```

分析：

> 我们发现原来运行正常的相减功能发生了错误。原因就是类B 无意中重写了父类的方法，造成原有功能出现错误。在实际编程中，我们常常会通过重写父类的方法完成新的功能，这样写起来虽然简单，但整个继承体系的复用性会比较差。特别是运行多态比较频繁的时候
>
> 通用的做法是：原来的父类和子类都继承一个更通俗的基类，原有的继承关系去掉，采用依赖，聚合，组合等关系代替.


##### 2、案例2

```java
public class Liskov {
    public static void main(String[] args) {
        A a = new A();
        System.out.println("10 - 4 = " + a.fun1(10, 4));
        B b = new B();
        System.out.println("10 - 4 = " + b.fun1(10, 4));
        System.out.println("10 - 4 = " + b.fun3(10, 4));
    }
}

class Base{
    //把更加基础的方法和成员写到Base 类
}
class A extends Base{
    public int fun1(int a, int b){
        return a - b;
    }
}

class B extends Base{

    private A a = new A();

    public int fun1(int a, int b){
        return a + b;
    }
    public int fun2(int a, int b){
        return a - b;
    }

    /**
     * 调用A类的方法
     * @param a
     * @param b
     * @return
     */
    public int fun3(int a, int b){
       return this.a.fun1(a, b);
    }
}
```



### 5、开闭原则

> 开闭原则（ Open Closed Principle 是编程中最基础、最重要的设计原则
>
> 一个软件实体如类，模块和函数应该对扩展开放(对提供方)，对修改关闭(对使用方)。用抽象构建框架，用实现扩展细节。
>
> 当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化。
>
> 编程中遵循其它原则，以及使用设计模式的目的就是遵循开闭原则。

#### 1、案例说明


##### 1、案例1

```java
public class Ocp {
    public static void main(String[] args) {
        GraphicEditor graphicEditor = new GraphicEditor();
        graphicEditor.drawRectangle(new Rectangle());
        graphicEditor.drawRectangle(new CieCle());
    }

}

class GraphicEditor{
    public void drawShape(Shape s){
        if (s.type == 1){
            drawCieCle(s);
        }else if(s.type == 2){
            drawRectangle(s);
        }
    }
    public void drawRectangle(Shape r){
        System.out.println("绘制矩形");
    }
    public void drawCieCle(Shape r){
        System.out.println("绘制圆形");
    }
}

class Shape{
    int type;
}
class Rectangle extends Shape{
    Rectangle(){
        super.type = 1;
    }
}
class CieCle extends Shape{
    CieCle(){
        super.type = 2;
    }
}
```



分析：

> 优点是比较好理解，简单易操作
>
> 缺点是违反了设计模式的ocp 原则，即对扩展开放(提供方)，对修改关闭(使用方)。即当我们给类增加新功能的时候，尽量不修改代码，或者尽可能少修改代码.
>
> 比如我们这时要新增加一个图形种类三角形，我们需要做如下修改，修改的地方较多
>
> 改进的思路：
>
> 把创建Shape类做成抽象类，并提供一个抽象的draw方法，让子类去实现即可，这样有新的图形种类时，只需要让新的图形继承Shape，并实现draw方法即可，使用方的代码就不需要修改，满足开闭原则



##### 2、案例2

```java
public class Ocp {
    public static void main(String[] args) {
        GraphicEditor graphicEditor = new GraphicEditor();
        graphicEditor.drawShape(new CieCle());
        graphicEditor.drawShape(new Rectangle());
        graphicEditor.drawShape(new Triangle());
    }

}

class GraphicEditor{
    public void drawShape(Shape s){
        s.draw();
    }
}

abstract class Shape{
    int type;

    public abstract void draw();
}

class Rectangle extends Shape{
    Rectangle(){
        super.type = 1;
    }

    @Override
    public void draw() {
        System.out.println("绘制矩形");
    }
}

class CieCle extends Shape{
    CieCle(){
        super.type = 2;
    }

    @Override
    public void draw() {
        System.out.println("绘制圆形");
    }
}

class Triangle extends Shape{
    Triangle(){
        super.type = 3;
    }

    @Override
    public void draw() {
        System.out.println("绘制三角形");
    }
}
```



### 6、迪米特原则

#### 1、基本介绍

> 1. 一个对象应该对其他对象保持最少的了解
> 2. 类与类关系越密切，耦合度越大
> 3. 迪米特法则(Demeter Principle)又叫最少知道原则，即一个类对自己依赖的类知道的越少越好。也就是说，对于被依赖的类不管多么复杂，都尽量将逻辑封装在类的内部。对外除了提供的public 方法，不对外泄露任何信息
> 4. 迪米特法则还有个更简单的定义：只与直接的朋友通信
>
> **直接的朋友**：每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。耦合的方式很多，依赖，关联，组合，聚合等。其中，我们称出现成员变量，方法参数，方法返回值中的类为直接的朋友，而出现在局部变量中的类不是直接的朋友。也就是说，陌生的类最好不要以局部变量的形式出现在类的内部。



#### 2、案例说明

##### 1、案例1

```java
public class Demeter1 {
    public static void main(String[] args) {
        //创建了一个SchoolManager 对象
        SchoolManager schoolManager = new SchoolManager();
        //输出学院的员工id 和学校总部的员工信息
        schoolManager.printAllEmployee(new CollegeManager());
    }
}
//学校总部员工类
class Employee {
    private String id;
    public void setId(String id) {
        this.id = id;
    }
    public String getId() {
        return id;
    }
}
//学院的员工类
class CollegeEmployee {
    private String id;
    public void setId(String id) {
        this.id = id;
    }
    public String getId() {
        return id;
    }
}

/**
 * 管理学院员工的管理类
 */
class CollegeManager {
    /**
     * 返回学院的所有员工
     * @return
     */
    public List<CollegeEmployee> getAllEmployee() {
        List<CollegeEmployee> list = new ArrayList<CollegeEmployee>();
        //这里我们增加了10 个员工到list
        for (int i = 0; i < 10; i++) {
            CollegeEmployee emp = new CollegeEmployee();
            emp.setId("学院员工id= " + i);
            list.add(emp);
        }
        return list;
    }
}
//分析SchoolManager 类的直接朋友类有哪些Employee、CollegeManager
//CollegeEmployee 不是直接朋友而是一个陌生类，这样违背了迪米特法则
class SchoolManager {
    //返回学校总部的员工
    public List<Employee> getAllEmployee() {
        List<Employee> list = new ArrayList<Employee>();
        for (int i = 0; i < 5; i++) { //这里我们增加了5 个员工到list
            Employee emp = new Employee();
            emp.setId("学校总部员工id= " + i);
            list.add(emp);
        }
        return list;
    }

    //该方法完成输出学校总部和学院员工信息(id)
    void printAllEmployee(CollegeManager sub) {
        //分析问题
        //1. 这里的CollegeEmployee 不是SchoolManager 的直接朋友
        //2. CollegeEmployee 是以局部变量方式出现在SchoolManager
        //3. 违反了迪米特法则
        //获取到学院员工
        List<CollegeEmployee> list1 = sub.getAllEmployee();
        System.out.println("------------学院员工------------");
        for (CollegeEmployee e : list1) {
            System.out.println(e.getId());
        }
        //获取到学校总部员工
        List<Employee> list2 = this.getAllEmployee();
        System.out.println("------------学校总部员工------------");
        for (Employee e : list2) {
            System.out.println(e.getId());
        }
    }
}
```

分析：

> 前面设计的问题在于SchoolManager 中，CollegeEmployee 类并不是SchoolManager 类的直接朋友(分析)
>
> 按照迪米特法则，应该避免类中出现这样非直接朋友关系的耦合
>
> 对代码按照迪米特法则进行改进



##### 2、案例2

```java
public class Demeter {
    public static void main(String[] args) {
        System.out.println("~~~使用迪米特法则的改进~~~");
        //创建了一个SchoolManager 对象
        SchoolManager schoolManager = new SchoolManager();
        //输出学院的员工id 和学校总部的员工信息
        schoolManager.printAllEmployee(new CollegeManager());
    }
}
//学校总部员工类
class Employee {
    private String id;
    public void setId(String id) {
        this.id = id;
    }
    public String getId() {
        return id;
    }
}
//学院的员工类
class CollegeEmployee {
    private String id;
    public void setId(String id) {
        this.id = id;
    }
    public String getId() {
        return id;
    }
}
//管理学院员工的管理类
class CollegeManager {
    //返回学院的所有员工
    public List<CollegeEmployee> getAllEmployee() {
        List<CollegeEmployee> list = new ArrayList<CollegeEmployee>();
        for (int i = 0; i < 10; i++) { //这里我们增加了10 个员工到list
            CollegeEmployee emp = new CollegeEmployee();
            emp.setId("学院员工id= " + i);
            list.add(emp);
        }
        return list;
    }
       //输出学院员工的信息
    public void printEmployee() {
        //获取到学院员工
        List<CollegeEmployee> list1 = getAllEmployee();
        System.out.println("------------学院员工------------");
        for (CollegeEmployee e : list1) {
            System.out.println(e.getId());
        }
    }
}
//学校管理类
//分析SchoolManager 类的直接朋友类有哪些Employee、CollegeManager
//CollegeEmployee 不是直接朋友而是一个陌生类，这样违背了迪米特法则
class SchoolManager {
    //返回学校总部的员工
    public List<Employee> getAllEmployee() {
        List<Employee> list = new ArrayList<Employee>();
        for (int i = 0; i < 5; i++) { //这里我们增加了5 个员工到list
            Employee emp = new Employee();
            emp.setId("学校总部员工id= " + i);
            list.add(emp);
        }
        return list;
    }
    //该方法完成输出学校总部和学院员工信息(id)
    void printAllEmployee(CollegeManager sub) {
//分析问题
//1. 将输出学院的员工方法，封装到CollegeManager
        sub.printEmployee();
//获取到学校总部员工
        List<Employee> list2 = this.getAllEmployee();
        System.out.println("------------学校总部员工------------");
        for (Employee e : list2) {
            System.out.println(e.getId());
        }
    }
}
```



#### 3、注意事项和细节

> 迪米特法则的核心是降低类之间的耦合
>
> 但是注意：由于每个类都减少了不必要的依赖，因此迪米特法则只是要求降低类间(对象间)耦合关系， 并不是要求完全没有依赖关系



### 7、合成复用原则

> 原则是尽量使用合成/聚合的方式，而不是使用继承



## 3、设计模式的核心思想

> 1. 找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起。
> 2. 针对接口编程，而不是针对实现编程。
> 3. 为了交互对象之间的松耦合设计而努力

## 4、设计模式的分类

> 设计模式是程序员在面对同类软件工程设计问题所总结出来的有用的经验，模式不是代码，而是某类问题的通用解决方案，设计模式（Design pattern）代表了最佳的实践。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。
>
> 设计模式的本质提高软件的维护性，通用性和扩展性，并降低软件的复杂度。
>
> <<设计模式>> 是经典的书，作者是Erich Gamma、Richard Helm、Ralph Johnson 和John Vlissides Design（俗称“四人组GOF”）

| 模式 & 描述                                                  | 包括                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| **创建型模式** 这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。 | 工厂模式（Factory Pattern）<br>抽象工厂模式（Abstract Factory Pattern）<br/>单例模式（Singleton Pattern）<br/>建造者模式（Builder Pattern）<br/>原型模式（Prototype Pattern） |
| **结构型模式** 这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。 | 适配器模式（Adapter Pattern）<br/>桥接模式（Bridge Pattern）<br/>过滤器模式（Filter、Criteria Pattern）<br/>组合模式（Composite Pattern）<br/>装饰器模式（Decorator Pattern）<br/>外观模式（Facade Pattern）<br/>享元模式（Flyweight Pattern）<br/>代理模式（Proxy Pattern） |
| **行为型模式** 这些设计模式特别关注对象之间的通信。          | 责任链模式（Chain of Responsibility Pattern）<br/>命令模式（Command Pattern）<br/>解释器模式（Interpreter Pattern）<br/>迭代器模式（Iterator Pattern）<br/>中介者模式（Mediator Pattern）<br/>备忘录模式（Memento Pattern）<br/>观察者模式（Observer Pattern）<br/>状态模式（State Pattern）<br/>空对象模式（Null Object Pattern）<br/>策略模式（Strategy Pattern）<br/>模板模式（Template Pattern）<br/>访问者模式（Visitor Pattern） |
| **J2EE 模式** 这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。 | MVC 模式（MVC Pattern）<br/>业务代表模式（Business Delegate Pattern）<br/>组合实体模式（Composite Entity Pattern）<br/>数据访问对象模式（Data Access Object Pattern）<br/>前端控制器模式（Front Controller Pattern）<br/>拦截过滤器模式（Intercepting Filter Pattern）<br/>服务定位器模式（Service Locator Pattern）<br/>传输对象模式（Transfer Object Pattern） |


## 5、单例模式

### 1、单例模式介绍

> 所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例，并且该类只提供一个取得其对象实例的方法(静态方法)。
>
> 比如Hibernate 的SessionFactory，它充当数据存储源的代理，并负责创建Session 对象。SessionFactory 并不是轻量级的，一般情况下，一个项目通常只需要一个SessionFactory 就够，这是就会使用到单例模式。

### 2、单例模式的种类

> - 饿汉式（静态常量）
> - 饿汉式（静态代码块）
> - 懒汉式（线程不安全）
> - 懒汉式（线程安全，同步方法）
> - 懒汉式（线程安全，同步代码块）
> - 双重检查
> - 静态内部类
> - 枚举



#### 1、饿汉式（静态常量）

> 步骤：
>
> - 构造方法私有化
> - 内的内部创建对象
> - 向外暴露一个静态的公共方法

```java
public class Singleton01 {
    
    private static final Singleton01 INSTANCE = new Singleton01();

    /**
     * 构造方法私有化，防止new
     */
    private Singleton01(){

    }

    /**
     * 提供一个公有的静态方法，返回实例对象
     * @return INSTANCE
     */
    public static Singleton01 getINSTANCE() {
        return INSTANCE;
    }

    public static void main(String[] args) {
        Singleton01 instance1 = Singleton01.getINSTANCE();
        Singleton01 instance2 = Singleton01.getINSTANCE();
        System.out.println(instance1 == instance2);
        System.out.println("instance1.hashCode = " + instance1.hashCode());
        System.out.println("instance2.hashCode = " + instance2.hashCode());
    }
}
```



**优缺点**：

> 优点：这种写法比较简单，就是在类装载的时候就完成实例化。避免了线程同步问题。
>
> 缺点：在类装载的时候就完成实例化，没有达到Lazy Loading 的效果。如果从始至终从未使用过这个实例，则会造成内存的浪费

> 这种方式基于classloder 机制避免了多线程的同步问题，不过，instance 在类装载时就实例化，在单例模式中大多数都是调用getInstance 方法，但是导致类装载的原因有很多种，因此不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化instance 就没有达到lazy loading 的效果

##### 破坏单例的情形

- **反射破坏单例**：利用反射创建实例对象
- **反序列化破坏单例**：前提是实现了`implements Serializable`接口
- **Unsafe 破坏单例**：这种情形是不能避免的



###### 1、反射破坏单例

> 利用反射获取类的构造方法

```java
private static void reflection(Class<?> clazz) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException {
    Constructor<?> constructor = clazz.getDeclaredConstructor();
    constructor.setAccessible(true);
    System.out.println("反射创建实例:" + constructor.newInstance());
}
```



**如何避免呢？**:point_down:

> 调用的时候加一层判断，如果创建了，则返回原实例或者抛出异常

```java
private Singleton1() {
    if (INSTANCE != null) {
        throw new RuntimeException("单例对象不能重复创建");
    }
    System.out.println("private Singleton1()");
}
```



###### 2、反序列化破坏单例

> 通过对象输出流将对象转成为字节流，再通过`ByteArrayInputStream`方法将字节流转为对象

```java
private static void serializable(Object instance) throws IOException, ClassNotFoundException {
    ByteArrayOutputStream bos = new ByteArrayOutputStream();
    ObjectOutputStream oos = new ObjectOutputStream(bos);
    oos.writeObject(instance);
    ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(bos.toByteArray()));
    System.out.println("反序列化创建实例:" + ois.readObject());
}
```

**如何避免呢？**:point_down:

```java
//方法名是固定的
public Object readResolve() {
    return INSTANCE;
}
```



###### 3、Unsafe 破坏单例

> 通过反射调用JDK内置的Unsafe方法破坏单例

```java
private static void unsafe(Class<?> clazz) throws InstantiationException {
    Object o = UnsafeUtils.getUnsafe().allocateInstance(clazz);
    System.out.println("Unsafe 创建实例:" + o);
}
```

**如何避免呢？**:point_down:

暂时还没有找到解决的方法，大佬们知道如何解决吗？



**总结：这种单例模式可用，可能造成内存浪费，启动就创建对象实例**



#### 2、饿汉式（静态代码块）

```java
public class Singleton02 {

    private static final Singleton02 INSTANCE ;

    /**
     * 在静态代码块中，创建单例对象
     */
    static {
        INSTANCE = new Singleton02();
    }

    /**
     * 构造方法私有化，防止new
     */
    private Singleton02(){

    }

    /**
     * 提供一个公有的静态方法，返回实例对象
     * @return INSTANCE
     */
    public static Singleton02 getINSTANCE() {
        return INSTANCE;
    }

    public static void main(String[] args) {
        Singleton02 instance1 = Singleton02.getINSTANCE();
        Singleton02 instance2 = Singleton02.getINSTANCE();
        System.out.println(instance1 == instance2);
        System.out.println("instance1.hashCode = " + instance1.hashCode());
        System.out.println("instance2.hashCode = " + instance2.hashCode());
    }
}
```



**优缺点**：

> 这种方式和上面的方式其实类似，只不过将类实例化的过程放在了静态代码块中，也是在类装载的时候，就执行静态代码块中的代码，初始化类的实例。优缺点和上面是一样的。

**总结**：这种单例模式可用，但是可能造成内存浪费



#### 3、懒汉式（线程不安全）

```java
public class Singleton03 {

    private static Singleton03 INSTANCE ;

    /**
     * 构造方法私有化，防止new
     */
    private Singleton03(){

    }

    /**
     * 提供一个静态的公有方法，当使用到该方法时，才去创建instance
     * @return INSTANCE
     */
    public static Singleton03 getINSTANCE() {
        if (INSTANCE == null) {
            INSTANCE = new Singleton03();
        }
        return INSTANCE;
    }

    public static void main(String[] args) {
        //模拟1000个线程访问
        for (int i = 0; i < 1000; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    System.out.println("instance.hashCode= " + Singleton03.getINSTANCE().hashCode());
                }
            }).start();
        }
    }
}
```



**优缺点**：

> 达到了Lazy Loading 的效果，但是只能在单线程下使用。
>
> 如果在多线程下，一个线程进入了if (singleton == null)判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例。所以在多线程环境下不可使用这种方式。

**结论：在实际开发中，不要使用这种方式.**



#### 4、懒汉式（线程安全，同步方法）

```java
public class Singleton04 {

    private static Singleton04 INSTANCE ;

    /**
     * 构造方法私有化，防止new
     */
    private Singleton04(){

    }

    /**
     * 提供一个静态的公有方法，加入同步处理的代码，解决线程安全问题
     * @return INSTANCE
     */
    public static synchronized Singleton04 getINSTANCE() {
        if (INSTANCE == null) {
            INSTANCE = new Singleton04();
        }
        return INSTANCE;
    }

    public static void main(String[] args) {
        for (int i = 0; i < 1000; i++) {
            new Thread(() ->{
                System.out.println("instance.hashCode= " + Singleton03.getINSTANCE().hashCode());
            }).start();
        }
    }
}
```



**优缺点**：

> 解决了线程安全问题，给公有方法加上了锁
>
> 效率太低了，每个线程在想获得类的实例时候，执行getInstance()方法都要进行同步。而其实这个方法只执行一次实例化代码就够了，后面的想获得该类实例，直接return 就行了。方法进行同步效率太低

**结论：在实际开发中，不推荐使用这种方式**



#### 5、懒汉式（线程安全，同步代码块）

```java
public class Singleton05 {

    private static Singleton05 INSTANCE ;

    /**
     * 构造方法私有化，防止new
     */
    private Singleton05(){

    }

    /**
     * 提供一个静态的公有方法，加入同步处理的代码，解决线程安全问题
     * @return INSTANCE
     */
    public static Singleton05 getINSTANCE() {
        if (INSTANCE == null) {
            //同步代码块
            synchronized (Singleton03.class){
                INSTANCE = new Singleton05();
            }
        }
        return INSTANCE;
    }

    public static void main(String[] args) {
        for (int i = 0; i < 1000; i++) {
            new Thread(() ->{
                System.out.println("instance.hashCode= " + Singleton03.getINSTANCE().hashCode());
            }).start();
        }
    }
}
```



**优缺点**：

> 通过试图同步代码块来提高效率，解决线程安全
>
> 但事实上不可行，如果在多线程下，一个线程进入了if (singleton == null)判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例。所以在多线程环境下不可使用这种方式。



#### 6、双重检查

```java
public class Singleton06 {

    private static volatile Singleton06 INSTANCE ;

    /**
     * 构造方法私有化，防止new
     */
    private Singleton06(){

    }

    /**
     * 提供一个静态的公有方法，加入双重检查代码，解决线程安全问题, 同时解决懒加载问题
     * @return INSTANCE
     */
    public static Singleton06 getINSTANCE() {
        if (INSTANCE == null) {
            //同步代码块
            synchronized (Singleton03.class){
                if (INSTANCE == null) {
                    INSTANCE = new Singleton06();
                }
            }
        }
        return INSTANCE;
    }

    public static void main(String[] args) {
        for (int i = 0; i < 1000; i++) {
            new Thread(() ->{
                System.out.println("instance.hashCode= " + Singleton06.getINSTANCE().hashCode());
            }).start();
        }
    }
}
```

为何必须加 volatile：

* `INSTANCE = new Singleton4()` 不是原子的，分成 3 步：创建对象、调用构造、给静态变量赋值，其中后两步可能被指令重排序优化，变成先赋值、再调用构造
* 如果线程1 先执行了赋值，线程2 执行到第一个 `INSTANCE == null` 时发现 INSTANCE 已经不为 null，此时就会返回一个未完全构造的对象



**优缺点**：

> Double-Check 概念是多线程开发中常使用到的，如代码中所示，我们进行了两次if (singleton == null)检查，这样就可以保证线程安全了。
>
> 这样，实例化代码只用执行一次，后面再次访问时，判断if (singleton == null)，直接return 实例化对象，也避免的反复进行方法同步.
>
> 线程安全；延迟加载；效率较高

**总结：在实际开发中，推荐使用这种单例设计模式**



#### 7、静态内部类

```java
public class Singleton07 {

    /**
     * 构造方法私有化，防止new
     */
    private Singleton07(){

    }

    /**
     * 写一个静态内部类,该类中有一个静态属性Singleton
     */
    public static class SingletonClass{
        private static final Singleton07 INSTANCE = new Singleton07();
    }

    /**
     * 提供一个静态的公有方法，加入双重检查代码，解决线程安全问题, 同时解决懒加载问题
     * @return INSTANCE
     */
    public static Singleton07 getINSTANCE() {
        return SingletonClass.INSTANCE;
    }

    public static void main(String[] args) {
        for (int i = 0; i < 1000; i++) {
            new Thread(() ->{
                System.out.println("instance.hashCode= " + Singleton07.getINSTANCE().hashCode());
            }).start();
        }
    }
}
```



**优缺点**：

> 这种方式采用了类装载的机制来保证初始化实例时只有一个线程。
>
> 静态内部类方式在Singleton 类被装载时并不会立即实例化，而是在需要实例化时，调用getInstance 方法，才会装载SingletonClass 类，从而完成Singleton 的实例化。
>
> 类的静态属性只会在第一次加载类的时候初始化，所以在这里，JVM 帮助我们保证了线程的安全性，在类进行初始化时，别的线程是无法进入的。
>
> 优点：避免了线程不安全，利用静态内部类特点实现延迟加载，效率高

**结论：推荐使用**



#### 8、枚举

```java
public enum Singleton08 {
    INSTANCE;

    public void sayHello(){
        System.out.println("你好，枚举单例模式！");
    }

    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            new Thread(() ->{
                INSTANCE.sayHello();
                System.out.println("instance.hashCode = "+INSTANCE.hashCode());
            }).start();
        }
    }
}
```



**优缺点**：

> 借助JDK1.5 中添加的枚举来实现单例模式。不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象，绝对防止多次实例化。



### 3、单例模式在JDK 应用的源码分析

#### 1、饿汉式

> JDK 中，java.lang.Runtime 就是经典的单例模式(饿汉式)

```java
public class Runtime {
    private static Runtime currentRuntime = new Runtime();

    /**
     * Returns the runtime object associated with the current Java application.
     * Most of the methods of class <code>Runtime</code> are instance
     * methods and must be invoked with respect to the current runtime object.
     *
     * @return  the <code>Runtime</code> object associated with the current
     *          Java application.
     */
    public static Runtime getRuntime() {
        return currentRuntime;
    }

    /** Don't let anyone else instantiate this class */
    private Runtime() {}
    
    ······
}
```



#### 2、双检锁懒汉式单例

> System类中的Console对象的创建就是用的双重检锁

```java
private static volatile Console cons = null;
/**
     * Returns the unique {@link java.io.Console Console} object associated
     * with the current Java virtual machine, if any.
     *
     * @return  The system console, if any, otherwise <tt>null</tt>.
     *
     * @since   1.6
     */
public static Console console() {
    if (cons == null) {
        synchronized (System.class) {
            if (cons == null) {
                cons = sun.misc.SharedSecrets.getJavaIOAccess().console();
            }
        }
    }
    return cons;
}
```





#### 3、内部类懒汉式单例

> Collections类中的ReverseComparator.REVERSE_ORDER 就是内部类懒汉式单例

```java
private static class ReverseComparator
    implements Comparator<Comparable<Object>>, Serializable {

    private static final long serialVersionUID = 7207038068494060240L;

    static final ReverseComparator REVERSE_ORDER
        = new ReverseComparator();

    public int compare(Comparable<Object> c1, Comparable<Object> c2) {
        return c2.compareTo(c1);
    }

    private Object readResolve() { return Collections.reverseOrder(); }

    @Override
    public Comparator<Comparable<Object>> reversed() {
        return Comparator.naturalOrder();
    }
}
```



#### 4、内部类懒汉式单例

> Collections 中的 EmptyNavigableSet 就是内部类懒汉式单例

```java
private static class EmptyNavigableSet<E> extends UnmodifiableNavigableSet<E>
    implements Serializable {
    private static final long serialVersionUID = -6291252904449939134L;

    public EmptyNavigableSet() {
        super(new TreeSet<E>());
    }

    private Object readResolve()        { return EMPTY_NAVIGABLE_SET; }
}
```



#### 5、枚举饿汉式单例

> Comparators.NaturalOrderComparator.INSTANCE 枚举饿汉式单例

```java
class Comparators {
    private Comparators() {
        throw new AssertionError("no instances");
    }

    /**
     * Compares {@link Comparable} objects in natural order.
     *
     * @see Comparable
     */
    enum NaturalOrderComparator implements Comparator<Comparable<Object>> {
        INSTANCE;

        @Override
        public int compare(Comparable<Object> c1, Comparable<Object> c2) {
            return c1.compareTo(c2);
        }

        @Override
        public Comparator<Comparable<Object>> reversed() {
            return Comparator.reverseOrder();
        }
    }
    ......
}
```



### 4、注意事项和细节说明

> 单例模式保证了系统内存中该类只存在一个对象，节省了系统资源，对于一些需要频繁创建销毁的对象，使用单例模式可以提高系统性能。
>
> 当想实例化一个单例类的时候，必须要记住使用相应的获取对象的方法，而不是使用new
>
> 单例模式使用的场景：
>
> - 需要频繁的进行创建和销毁的对象
> - 创建对象时耗时过多或耗费资源过多(即：重量级对象)
> - 但又经常用到的对象、工具类对象、频繁访问数据库或文件的对象(比如数据源、session 工厂等)



### 5、总结

> **经验之谈：**一般情况下，不建议使用第 1 种和第 2 种懒汉方式，建议使用第 3 种饿汉方式。只有在要明确实现 lazy loading 效果时，才会使用第 5 种登记方式。如果涉及到反序列化创建对象时，可以尝试使用第 6 种枚举方式。如果有其他特殊的需求，可以考虑使用第 4 种双检锁方式。


## 6、工厂模式

需求：便于手机种类的扩展

- 手机的种类很多(比如HuaWeiPhone、XiaoMiPhone等)
- 手机的制作有prepare，production, assemble, box
- 完成手机店订购功能。

### 1、传统模式

- 手机抽象类

  ```java
  public abstract class Phone {
  
      private String name;
  
      /**
       * 准备的抽象类
       */
      public abstract void prepare();
  
      /**
       * 手机生产
       */
      public void production(){
          System.out.println(name + "手机production");
      }
  
      /**
       * 手机组装
       */
      public void assemble(){
          System.out.println(name + "手机assemble");
      }
  
      /**
       * 手机打包
       */
      public void box(){
          System.out.println(name + "手机box");
      }
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  }
  ```



- 实体类

  ```java
  public class HuaWeiPhone extends Phone{
      @Override
      public void prepare() {
          System.out.println("准备华为手机原材料！");
      }
  }
  ```

  ```java
  public class XiaoMiPhone extends Phone{
  
      @Override
      public void prepare() {
          System.out.println("准备小米手机原材料！");
      }
  }
  ```

- 基于方法实现

  ```java
  public class OrderPhone {
  
      public OrderPhone() {
          Phone phone;
          String orderType;
          while (true){
              orderType = inputType();
              if (orderType.equals("huawei")){
                  phone = new HuaWeiPhone();
                  phone.setName("华为");
              }else if(orderType.equals("xiaomi")){
                  phone = new XiaoMiPhone();
                  phone.setName("小米");
              }else {
                  break;
              }
              phone.prepare();
              phone.production();
              phone.assemble();
              phone.box();
          }
      }
  
      /**
       * 键盘输入类型
       * @return
       */
      public String inputType(){
          Scanner scanner = new Scanner(System.in);
          System.out.println("请输入手机类型：");
          String next = scanner.next();
          return next;
      }
  }
  ```



- 调用

  ```java
  public class PhoneStore {
  
      public static void main(String[] args) {
          new OrderPhone();
      }
  }
  ```



**传统方法的优缺点**：

> 优点：比较好理解，简单易操作。
>
> 缺点：违反了设计模式的ocp 原则，即对扩展开放，对修改关闭。即当我们给类增加新功能的时候，尽量不修改代码，或者尽可能少修改代码.
>
> 比如我们这时要新增加一个Phone的种类(oppo Phone)，就需要增加OPPOPhone类，同时也要修改OrderPhone类



**改进的思路**：

> 修改代码可以接受，但是如果我们在其它的地方也有创建Phone的代码，就意味着，也需要修改，而创建Phone的代码，往往有多处。
>
> 思路：把创建Phone对象封装到一个类中，这样我们有新的Phone种类时，只需要修改该类就可，其它有创建到Phone对象的代码就不需要修改了=> 简单工厂模式

### 2、简单工厂模式

#### 1、介绍

> 简单工厂模式是属于创建型模式，是工厂模式的一种。简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例。简单工厂模式是工厂模式家族中最简单实用的模式。
>
> 简单工厂模式：定义了一个创建对象的类，由这个类来封装实例化对象的行为(代码)
>
> 在软件开发中，当我们会用到大量的创建某种、某类或者某批对象时，就会使用到工厂模式.

#### 2、代码实现

1. 新建`SimpleFactory`类

   ```java
   public class SimpleFactory {
   
       public Phone createPhone(String orderType) {
           Phone phone = null;
           if (orderType.equals("huawei")){
               phone = new HuaWeiPhone();
               phone.setName("华为");
           }else if(orderType.equals("xiaomi")){
               phone = new XiaoMiPhone();
               phone.setName("小米");
           }
           return phone;
       }
   }
   ```

2. 修改订购手机类`OrderPhone`

   ```java
   public class OrderPhone {
       /**
        * 键盘输入类型
        * @return
        */
       public String inputType(){
           Scanner scanner = new Scanner(System.in);
           System.out.println("请输入手机类型：");
           String next = scanner.next();
           return next;
       }
   
       SimpleFactory simpleFactory;
       Phone phone = null;
   
   
       public OrderPhone(SimpleFactory simpleFactory){
           setSimpleFactory(simpleFactory);
       }
   
       public void setSimpleFactory(SimpleFactory simpleFactory){
           String orderType;
           //设置简单工厂对象
          this.simpleFactory = simpleFactory;
          do {
              orderType = inputType();
              phone = this.simpleFactory.createPhone(orderType);
              if (phone != null) {
                  phone.prepare();
                  phone.production();
                  phone.assemble();
                  phone.box();
              }else {
                  System.out.println("订购失败");
                  break;
              }
          }while (true);
       }
   }
   ```

3. 修改调用类

   ```java
   public class PhoneStore {
   
       public static void main(String[] args) {
   //        new OrderPhone();
           new OrderPhone(new SimpleFactory());
       }
   }
   ```



### 3、工厂方法模式

新的需求：

> 订购不同种类的、不同厂家的手机

思路

> 1. 使用简单工厂模式，创建不同的远程工厂，这样也是可以的，之前简单工厂模式就实现了，但考虑到项目的规模，以及软件的维护性，可扩展性并不是特别好
> 2. 使用工厂方法模式

#### 1、工厂方法模式介绍

> 定义了一个创建对象的抽象方法，由子类决定要实例化的类。工厂方法模式将对象的实例化推迟到子类。

思路：

> 将创建的过程写成抽象类和抽象方法

步骤

1. 将订购手机的类变成抽象类，抽象方法为创建手机

   ```java
   public abstract class OrderPhone {
   
       /**
        * 键盘输入类型
        * @return
        */
       public String inputType(){
           Scanner scanner = new Scanner(System.in);
           System.out.println("请输入手机类型：");
           String next = scanner.next();
           return next;
       }
   
       abstract Phone createPhone(String orderType);
       
       public OrderPhone(){
           Phone phone;
           String orderType;
           do {
               orderType = inputType();
               //抽象方法，由工厂子类完成
               phone = createPhone(orderType);
               phone.prepare();
               phone.production();
               phone.assemble();
               phone.box();
           }while (true);
       }
   
       public static void main(String[] args) {
           new DomesticPhone();
       }
   
   }
   ```

2. 分类手机，继承抽象类

   ```java
   public class DomesticPhone extends OrderPhone{
       @Override
       Phone createPhone(String orderType) {
           Phone phone = null;
           if (orderType.equals("huawei")){
               phone = new HuaWeiPhone();
               phone.setName("华为");
           }else if (orderType.equals("xiaomi")){
               phone = new XiaoMiPhone();
               phone.setName("小米");
           }
           return phone;
       }
   }
   ```

   ```java
   public class IPhone extends OrderPhone{
       @Override
       Phone createPhone(String orderType) {
           Phone phone = null;
           if (orderType.equals("pingguo")){
               phone = new PingGuoPhone();
               phone.setName("苹果");
           }else if (orderType.equals("sanxing")){
               phone = new SanXingPhone();
               phone.setName("三星");
           }
           return phone;
       }
   }
   ```



### 4、抽象工厂模式

> 定义了一个interface 用于创建相关或有依赖关系的对象簇，而无需指明具体的类
>
> 抽象工厂模式可以将简单工厂模式和工厂方法模式进行整合。
>
> 从设计层面看，抽象工厂模式就是对简单工厂模式的改进(或者称为进一步的抽象)。
>
> 将工厂抽象成两层，AbsFactory(抽象工厂) 和具体实现的工厂子类。程序员可以根据创建对象类型使用对应的工厂子类。这样将单个的简单工厂类变成了工厂簇，更利于代码的维护和扩展。

1. 定义接口，让子类工厂进行实现

   ```java
   public interface AbstractFactory {
   
       /**
        * 建Phone，让工厂子类实现
        * @param orderType 类型
        * @return  phone
        */
       public Phone createPhone(String orderType);
   }
   ```

2. 子类工厂实现接口

   ```java
   public class DomesticPhoneFactory implements AbstractFactory {
   
       @Override
       public Phone createPhone(String orderType) {
           Phone phone = null;
           System.out.println("~使用的是抽象工厂模式~");
           if (orderType.equals("huawei")){
               phone = new HuaWeiPhone();
               phone.setName("华为");
           }else if (orderType.equals("xiaomi")){
               phone = new XiaoMiPhone();
               phone.setName("小米");
           }
           return phone;
       }
   }
   ```

   ```java
   public class ForeignPhoneFactory implements AbstractFactory {
   
       @Override
       public Phone createPhone(String orderType) {
           Phone phone = null;
           if (orderType.equals("pingguo")){
               phone = new PingGuoPhone();
               phone.setName("苹果");
           }else if (orderType.equals("sanxing")){
               phone = new SanXingPhone();
               phone.setName("三星");
           }
           return phone;
       }
   }
   ```

3. 具体调用实现

   ```java
   public class OrderPhone {
   
       AbstractFactory factory;
   
       /**
        * 键盘输入类型
        * @return
        */
       public String inputType(){
           Scanner scanner = new Scanner(System.in);
           System.out.println("请输入手机类型：");
           String next = scanner.next();
           return next;
       }
   
       public OrderPhone(AbstractFactory factory){
           setFactory(factory);
       }
   
   
       private void setFactory(AbstractFactory factory){
           Phone phone;
           String orderType;
           this.factory = factory;
           do {
               orderType = inputType();
               //抽象工厂方法
               phone = factory.createPhone(orderType);
               if (phone != null) {
                   phone.prepare();
                   phone.production();
                   phone.assemble();
                   phone.box();
               }else {
                   System.out.println("订购失败！");
                   break;
               }
           }while (true);
       }
   
       public static void main(String[] args) {
           new OrderPhone(new DomesticPhoneFactory());
       }
   }
   ```



### 5、工厂模式在JDK-Calendar 应用的源码分析

```java
public class FactoryTest {

    public static void main(String[] args) {

        Calendar cal = Calendar.getInstance();
        // 注意月份下标从0 开始，所以取月份要+1
        System.out.println("年:" + cal.get(Calendar.YEAR));
        System.out.println("月:" + (cal.get(Calendar.MONTH) + 1));
        System.out.println("日:" + cal.get(Calendar.DAY_OF_MONTH));
        System.out.println("时:" + cal.get(Calendar.HOUR_OF_DAY));
        System.out.println("分:" + cal.get(Calendar.MINUTE));
        System.out.println("秒:" + cal.get(Calendar.SECOND));
    }
}
```

```java
public static Calendar getInstance()
{
    return createCalendar(TimeZone.getDefault(), Locale.getDefault(Locale.Category.FORMAT));
}


  private static Calendar createCalendar(TimeZone zone,
                                           Locale aLocale)
    {
        CalendarProvider provider =
            LocaleProviderAdapter.getAdapter(CalendarProvider.class, aLocale)
                                 .getCalendarProvider();
        if (provider != null) {
            try {
                return provider.getInstance(zone, aLocale);
            } catch (IllegalArgumentException iae) {
                // fall back to the default instantiation
            }
        }

        Calendar cal = null;

        if (aLocale.hasExtensions()) {
            String caltype = aLocale.getUnicodeLocaleType("ca");
            if (caltype != null) {
                switch (caltype) {
                case "buddhist":
                cal = new BuddhistCalendar(zone, aLocale);
                    break;
                case "japanese":
                    cal = new JapaneseImperialCalendar(zone, aLocale);
                    break;
                case "gregory":
                    cal = new GregorianCalendar(zone, aLocale);
                    break;
                }
            }
        }
        if (cal == null) {
            // If no known calendar type is explicitly specified,
            // perform the traditional way to create a Calendar:
            // create a BuddhistCalendar for th_TH locale,
            // a JapaneseImperialCalendar for ja_JP_JP locale, or
            // a GregorianCalendar for any other locales.
            // NOTE: The language, country and variant strings are interned.
            if (aLocale.getLanguage() == "th" && aLocale.getCountry() == "TH") {
                cal = new BuddhistCalendar(zone, aLocale);
            } else if (aLocale.getVariant() == "JP" && aLocale.getLanguage() == "ja"
                       && aLocale.getCountry() == "JP") {
                cal = new JapaneseImperialCalendar(zone, aLocale);
            } else {
                cal = new GregorianCalendar(zone, aLocale);
            }
        }
        return cal;
    }
```



### 6、工厂模式小结

> **意义**：将实例化对象的代码提取出来，放到一个类中统一管理和维护，达到和主项目的依赖关系的解耦。从而提高项目的扩展和维护性。
>
> 三种工厂模式：
>
> - 简单工厂模式
> - 工厂方法模式
> - 抽象工厂模式
>
> 涉及到设计模式的依赖抽象原则
>
> 创建对象实例时，不要直接new 类, 而是把这个new 类的动作放在一个工厂的方法中，并返回。有的书上说，变量不要直接持有具体类的引用。
>
> 不要让类继承具体类，而是继承抽象类或者是实现interface(接口)，不要覆盖基类中已经实现的方法。
