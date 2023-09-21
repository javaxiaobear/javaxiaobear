---
title: 4、opencsv操作csv文件
---
### 1、csv文件概述

> CSV文件：Comma-Separated Values，中文叫逗号分隔值或者字符分割值，其文件以纯文本的形式存储表格数据。该文件是一个字符序列，可以由任意数目的记录组成，记录间以某种换行符分割。每条记录由字段组成，字段间的分隔符是其他字符或者字符串。所有的记录都有完全相同的字段序列，相当于一个结构化表的纯文本形式。
> 用文本文件、excel或者类似与文本文件的编辑器都可以打开CSV文件。

为了简化开发，我们可以使用opencsv类库来导出csv文件

```xml
<dependency>
    <groupId>com.opencsv</groupId>
    <artifactId>opencsv</artifactId>
    <version>4.5</version>
</dependency>
```

### 2、opencsv常用API





### 3、导出csv文件

```java
/**
     * 导出csv文件
     * @param response
     */
public void downloadCSV(HttpServletResponse response) throws IOException {
    //获取输出流
    ServletOutputStream outputStream = response.getOutputStream();
    String fileName = "用户数据.csv";
    response.setHeader("Content-Disposition","attachment;filename"+ new String(fileName.getBytes(),"ISO8859-1"));
    response.setContentType("text/csv");
    //创建一个用来写入到csv文件的write
    CSVWriter csvWriter = new CSVWriter(new OutputStreamWriter(outputStream, "utf-8"));
    //设置标题
    csvWriter.writeNext(new String[]{"编号","姓名","手机号","入职日期","现住址"});
    //获取数据源
    List<User> users = userMapper.selectAll();
    if(!CollectionUtils.isEmpty(users)){
        for (User user : users) {
            csvWriter.writeNext(new String[]{user.getId().toString(),user.getUserName(),user.getPhone(),sd.format(user.getHireDate()),user.getAddress()});
        }
        csvWriter.flush();
    }
    csvWriter.close();
}
```



### 4、导入csv文件

```java
public class ImportCSV {

    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    public static void main(String[] args) throws Exception {
        CSVReader reader = new CSVReader(new FileReader("C:\\Users\\28611\\Downloads\\downLoadCSV"));
        //读取第一行数据 标题
        String[] readNext = reader.readNext();
        User user;
        while (true){
            user = new User();
            String[] next = reader.readNext();
            if(null == next){
                break;
            }
            user.setId(Long.parseLong(next[0]));
            user.setUserName(next[1]);
            user.setPhoto(next[2]);
            user.setHireDate(sdf.parse(next[3]));
            user.setAddress(next[4]);
            System.out.println(user);
        }
    }
}
```
