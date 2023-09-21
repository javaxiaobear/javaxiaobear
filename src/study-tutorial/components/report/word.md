---
title: 5、POI操作word
---
### 1、API介绍

#### 1、操作Word正文

> XWPFDocument代表一个docx文档，其可以用来读docx文档，也可以用来写docx文档
>
> 一个文档包含多个段落，一个段落包含多个Runs文本，一个Runs包含多个Run，Run是文档的最小单元

获取所有段落：

```java
List<XWPFParagraph> paragraphs = word.getParagraphs();
```

获取一个段落中的所有片段Runs：

```java
List<XWPFRun> xwpfRuns = xwpfParagraph.getRuns();
```

获取一个Runs中的一个Run：

```java
XWPFRun run = xwpfRuns.get(index);
```



#### 2、操作Word表格

> 一个文档包含多个表格，一个表格包含多行，一行包含多列单元格

获取所有表格：

```java
List<XWPFTable> xwpfTables = doc.getTables();
```

获取一个表格中的所有行：

```java
List<XWPFTableRow> xwpfTableRows = xwpfTable.getRows();
```

获取一行中的所有列：

```java
List<XWPFTableCell> xwpfTableCells = xwpfTableRow.getTableCells();
```

获取一格里的内容：

```java
List<XWPFParagraph> paragraphs = xwpfTableCell.getParagraphs();
```



##### 1、word工具类

```java
public class WordUtils {

    /**
     * 导出word工具类
     * @param response
     * @param user
     * @throws Exception
     */
    public static void exportWord(HttpServletResponse response, User user) throws Exception{
        File classpath = new File(ResourceUtils.getFile("classpath:").getPath());
        File file = new File(classpath.getAbsolutePath(), "/word_template/contract_template.docx");
        //读取模板信息
        XWPFDocument document = new XWPFDocument(new FileInputStream(file));
        Map<String, String> map = new HashMap<>(10);
        map.put("userName", user.getUserName());
        map.put("hireDate",new SimpleDateFormat("yyyy-MM-dd").format(user.getHireDate()));
        map.put("address", user.getAddress());

        //处理数据 获取所有段落
        List<XWPFParagraph> paragraphs = document.getParagraphs();
        for (XWPFParagraph paragraph : paragraphs) {
            //获取所有片段
            List<XWPFRun> runs = paragraph.getRuns();
            for (XWPFRun run : runs) {
                String text = run.getText(0);
                for (String s : map.keySet()) {
                    if (text.contains(s)){
                        //替换字段
                        run.setText(text.replaceAll(s,map.get(s)),0);
                    }
                }
            }
        }
        //处理表格
        List<com.xiaobear.pojo.Resource> resourceList = user.getResourceList();
        //获取第一个表格
        XWPFTable table = document.getTables().get(0);
        //获取第一行
        XWPFTableRow row = table.getRow(0);
        int rowIndex = 1;
        for (com.xiaobear.pojo.Resource resource : resourceList) {
            //增加行
            addBlankRow(table,row,rowIndex);
            XWPFTableRow tableRow = table.getRow(rowIndex);
            tableRow.getCell(0).setText(resource.getName());
            tableRow.getCell(1).setText(resource.getPrice().toString());
            tableRow.getCell(2).setText(resource.getNeedReturn()?"需要":"不需要");
            File imageFile = new File(classpath,"/static"+resource.getPhoto());
            setCellImage(tableRow.getCell(3),imageFile);
            rowIndex++;
        }
        //     处理表格开始结束
        //        4、导出word
        String filename = "员工(" + user.getUserName() + ")合同.docx";
        response.setHeader("content-disposition", "attachment;filename=" + new String(filename.getBytes(), "ISO8859-1"));
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        document.write(response.getOutputStream());
    }


    /**
     * 向单元格中写入图片
     * @param cell
     * @param imageFile
     */
    private static void setCellImage(XWPFTableCell cell, File imageFile) {

        XWPFRun run = cell.getParagraphs().get(0).createRun();
        //        InputStream pictureData, int pictureType, String filename, int width, int height
        try(FileInputStream inputStream = new FileInputStream(imageFile)) {
            run.addPicture(inputStream,XWPFDocument.PICTURE_TYPE_JPEG,imageFile.getName(), Units.toEMU(100),Units.toEMU(50));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    /**
     * 增加一个空行
     * @param table
     * @param row
     * @param rowIndex
     */
    public static void addBlankRow(XWPFTable table, XWPFTableRow row, int rowIndex){
        //插入一行 ps:没有样式
        XWPFTableRow xwpfTableRow = table.insertNewTableRow(rowIndex);
        xwpfTableRow.getCtRow().setTrPr(row.getCtRow().getTrPr());
        //获取原来row的单元格
        List<XWPFTableCell> tableCells = row.getTableCells();
        if (CollectionUtils.isEmpty(tableCells)) {
        }
        XWPFTableCell temp;
        for (XWPFTableCell cell : tableCells) {
            temp = xwpfTableRow.addNewTableCell();
            //单元格的样式、属性
            temp.getCTTc().setTcPr(cell.getCTTc().getTcPr());
            temp.getParagraphs().get(0).getCTP().setPPr(cell.getParagraphs().get(0).getCTP().getPPr());
        }

    }
}
```
