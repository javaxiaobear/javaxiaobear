---
title: 3、条件、代码生成
---

## 6、性能分析插件

> 性能分析拦截器，用于输出每条 SQL 语句及其执行时间

  ```java
/**
     * SQL执行效率插件
     */
    @Bean
    @Profile({"dev","test"})// 设置 dev test 环境开启
    public PerformanceInterceptor performanceInterceptor() {
        return new PerformanceInterceptor();
    }
  ```

## 7、条件构造器`wrapper`

```java
    @Autowired
    private UserMapper userMapper;
    @Test
    void contextLoads() {
        QueryWrapper<User> wrapper = new QueryWrapper<> ();
        wrapper
                .isNotNull("name")
                .isNotNull("email")
                .ge("age",3);
        userMapper.selectList(wrapper).forEach(System.out::println);
    }
    @Test
    void test(){
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("name","Tom"); //查询名字
        User user = userMapper.selectOne(wrapper); //查询一个数据
        System.out.println(user);
    }
    @Test
    void test2(){
        //查询年龄10-20
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.between("age",10,20);
        Integer count = userMapper.selectCount(wrapper);
        System.out.println(count);
    }
    @Test
    void test3(){
        //模糊查询
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper
                .notLike("name","e")
                .likeRight("email","t");
        List<Map<String, Object>> maps = userMapper.selectMaps(wrapper);
        maps.forEach(System.out::println);
    }

    @Test
    void test4(){
        //
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.inSql("id","select id form user where id<3");
        List<Object> objects = userMapper.selectObjs(wrapper);
        objects.forEach(System.out::println);
    }
```

## 8、代码生成器

```java
public class XiaoBearCode {

    public static void main(String[] args) {
        AutoGenerator mpg = new AutoGenerator();
        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        String projectPath = System.getProperty("user.dir");
        gc.setOutputDir(projectPath + "/src/main/java");
        gc.setAuthor("xiaobear");
        gc.setOpen(false);
        // gc.setSwagger2(true); 实体属性 Swagger2 注解
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUrl("jdbc:mysql://localhost:3306/mybatisplus?useSSL=true&useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT");
        // dsc.setSchemaName("public");
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("密码");
        mpg.setDataSource(dsc);

        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName("blog");
        pc.setParent("com.xiaobear");
        pc.setEntity("pojo");
        pc.setMapper("mapper");
        pc.setService("com/xiaobear/service");
        pc.setServiceImpl("com.xiaobear/Service/Impl");
        pc.setController("com/xiaobear/controller");
        mpg.setPackageInfo(pc);

        // 策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setEntityLombokModel(true);  //自动lombok
        strategy.setRestControllerStyle(true);
        // 公共父类
        strategy.setSuperControllerClass("你自己的父类控制器,没有就不用设置!");
        // 写于父类中的公共字段
        strategy.setSuperEntityColumns("id");
        strategy.setInclude("user");//映射的表
        strategy.setLogicDeleteFieldName("deleted");  //逻辑删除字段
        //自动填充策略
        TableFill gmt_create = new TableFill("gmt_create", FieldFill.INSERT);
        TableFill gmt_modified = new TableFill("gmt_strate", FieldFill.INSERT);
        ArrayList<TableFill> list = new ArrayList<>();
        list.add(gmt_create);
        list.add(gmt_modified);
        strategy.setTableFillList(list);
        //乐观锁
        strategy.setVersionFieldName("version");
        strategy.setRestControllerStyle(true);  //驼峰
        strategy.setControllerMappingHyphenStyle(true);  //localhost:8080/hello_id_1
        strategy.setTablePrefix(pc.getModuleName() + "_");
        mpg.setStrategy(strategy);
        mpg.setTemplateEngine(new FreemarkerTemplateEngine());

        mpg.execute(); //执行
    }

}
```

错误：

```java
19:39:38.943 [main] DEBUG com.baomidou.mybatisplus.generator.AutoGenerator - ==========================准备生成文件...==========================
Exception in thread "main" java.lang.NoClassDefFoundError: freemarker/template/Configuration
	at com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine.init(FreemarkerTemplateEngine.java:41)
	at com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine.init(FreemarkerTemplateEngine.java:34)
	at com.baomidou.mybatisplus.generator.AutoGenerator.execute(AutoGenerator.java:103)
	at com.xiaobear.XiaoBearCode.main(XiaoBearCode.java:66)
Caused by: java.lang.ClassNotFoundException: freemarker.template.Configuration
	at java.net.URLClassLoader.findClass(URLClassLoader.java:382)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:418)
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:355)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:351)
	... 4 more
```

解决：

> 导入模板引擎依赖
>
> ```xml
> <dependency>
>     <groupId>org.freemarker</groupId>
>     <artifactId>freemarker</artifactId>
>     <version>2.3.30</version>
> </dependency>
> ```

