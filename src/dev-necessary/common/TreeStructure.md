> 平时开发中我们经常遇到需要构建树形结构返回给前端，比如菜单结构、部门列表、文件结构、地区等具有层级关系的，都可以构建，我们一般想到的就是利用递归来循环构建；现在，就我个人解决的方法如下：
>
> - 原始递归
> - 利用Java 8 Stream流进行处理（原理还是递归）
> - Stream流升级构建



### 场景构建

```java
public class TreeSelect implements Serializable
{

    /** 节点ID */
    private Long id;

    /** 节点名称 */
    private String label;
    
    /** 父ID */
    private Long parentId;

    /** 子节点 */
    private List<TreeSelect> children;

    public TreeSelect()
    {

    }

    public TreeSelect(Long id, String label, Long parentId) {
        this.id = id;
        this.label = label;
        this.parentId = parentId;
    }

    public TreeSelect(TreeSelect treeSelect)
    {
        this.id = treeSelect.getId();
        this.label = treeSelect.getLabel();
        this.children = treeSelect.getChildren();
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getLabel()
    {
        return label;
    }

    public void setLabel(String label)
    {
        this.label = label;
    }

    public List<TreeSelect> getChildren()
    {
        return children;
    }

    public void setChildren(List<TreeSelect> children)
    {
        this.children = children;
    }
}
```



### 1、原始递归构建树

```java
    /**
     * 构建前端所需要树结构
     *
     * @param trees 列表
     * @return 树结构列表
     */
    public static List<TreeSelect> buildDeptTree(List<TreeSelect> trees)
    {
        List<TreeSelect> returnList = new ArrayList<TreeSelect>();
        List<Long> tempList = new ArrayList<Long>();
        for (TreeSelect dept : trees)
        {
            tempList.add(dept.getId());
        }
        for (Iterator<TreeSelect> iterator = trees.iterator(); iterator.hasNext();)
        {
            TreeSelect treeSelect = (TreeSelect) iterator.next();
            // 如果是顶级节点, 遍历该父节点的所有子节点
            if (!tempList.contains(treeSelect.getParentId()))
            {
                recursionFn(trees, treeSelect);
                returnList.add(treeSelect);
            }
        }
        if (returnList.isEmpty())
        {
            returnList = trees;
        }
        return returnList;
    }
    /**
     * 递归列表
     */
    private static void recursionFn(List<TreeSelect> list, TreeSelect t)
    {
        // 得到子节点列表
        List<TreeSelect> childList = getChildList(list, t);
        t.setChildren(childList);
        for (TreeSelect tChild : childList)
        {
            if (hasChild(list, tChild))
            {
                recursionFn(list, tChild);
            }
        }
    }

    /**
     * 得到子节点列表
     */
    private static List<TreeSelect> getChildList(List<TreeSelect> list, TreeSelect t)
    {
        List<TreeSelect> tlist = new ArrayList<TreeSelect>();
        for (TreeSelect n : list) {
            if (StringUtils.isNotNull(n.getParentId()) && n.getParentId().longValue() == t.getId().longValue()) {
                tlist.add(n);
            }
        }
        return tlist;
    }

    /**
     * 判断是否有子节点
     */
    private static boolean hasChild(List<TreeSelect> list, TreeSelect t)
    {
        return getChildList(list, t).size() > 0;
    }
```



### 2、利用Java 8 Stream流进行处理（原理还是递归）

```java
   public static List<TreeSelect> buildDeptTreeByStream(List<TreeSelect> trees){
        //获取parentId = 0的根节点
        List<TreeSelect> list = trees.stream().filter(item -> item.getParentId() == 0L).collect(Collectors.toList());
        //根据parentId进行分组
        Map<Long, List<TreeSelect>> map = trees.stream().collect(Collectors.groupingBy(TreeSelect::getParentId));
        recursionFnTree(list, map);
        return list;
    }

    /**
     * 递归遍历节点
     * @param list
     * @param map
     */
    public static void recursionFnTree(List<TreeSelect> list, Map<Long, List<TreeSelect>> map){
        for (TreeSelect treeSelect : list) {
            List<TreeSelect> childList = map.get(treeSelect.getId());
            treeSelect.setChildren(childList);
            if (null != childList && 0 < childList.size()){
                recursionFnTree(childList,map);
            }
        }
    }
```



### 3、Stream流升级构建

```java
//获取父节点
List<TreeSelect> collect = trees.stream().filter(m -> m.getParentId() == 0).map(
    (m) -> {
        m.setChildren(getChildrenList(m, trees));
        return m;
    }
).collect(Collectors.toList());

    /**
     * 获取子节点列表
     * @param tree
     * @param list
     * @return
     */
    public static List<TreeSelect> getChildrenList(TreeSelect tree, List<TreeSelect> list){
        List<TreeSelect> children = list.stream().filter(item -> Objects.equals(item.getParentId(), tree.getId())).map(
                (item) -> {
                    item.setChildren(getChildrenList(item, list));
                    return item;
                }
        ).collect(Collectors.toList());
        return children;
    }
```



PS：个人还是比较倾向用`Stream`流构建树形结构，节省代码量还通俗易懂！！！`Stream`在实际开发过程中，运用得体的话，既能节省代码量，还能提高效率，但是复杂的流式处理数据也会让代码看起来不易理解！
