---
title: 4、达人探店
---

### 1、发布探店笔记

#### 1、场景

> 探店笔记类似点评网站的评价，往往是图文结合。对应的表有两个：
> tb_blog：探店笔记表，包含笔记中的标题、文字、图片等
> tb_blog_comments：其他用户对探店笔记的评价



#### 2、实现查看发布探店笔记的接口

> 需求：点击首页的探店笔记，会进入详情页面，实现该页面的查询接口：

```java
/**
     * 根据ID查询博客数据
     * @param id
     * @return
     */
@Override
public Result queryBlogById(Long id) {
    Blog blog = getById(id);
    if (null == blog){
        return Result.fail("笔记不存在");
    }
    //查询博客用户
    queryBlogUser(blog);
    return Result.ok(blog);
}
/**
     * 查询博客用户
     * @param blog
     */
private void queryBlogUser(Blog blog) {
    Long userId = blog.getUserId();
    User user = userService.getById(userId);
    blog.setName(user.getNickName());
    blog.setIcon(user.getIcon());
}
```



### 2、点赞

#### 1、需求与步骤

##### 1、需求

- 同一个用户只能点赞一次，再次点击则取消点赞
- 如果当前用户已经点赞，则点赞按钮高亮显示（前端已实现，判断字段Blog类的isLike属性）



##### 2、步骤

> 1. 给Blog类中添加一个isLike字段，标示是否被当前用户点赞
> 2. 修改点赞功能，利用Redis的set集合判断是否点赞过，未点赞过则点赞数+1，已点赞过则点赞数-1
> 3. 修改根据id查询Blog的业务，判断当前登录用户是否点赞过，赋值给isLike字段
> 4. 修改分页查询Blog业务，判断当前登录用户是否点赞过，赋值给isLike字段



#### 2、实现

```
SADD key member1 [member2\]
向集合添加一个或多个成员

```



```java
/**
     * 点赞
     * @param id
     * @return
     */
@Override
public Result likeBlog(Long id) {
    //获取登录用户
    Long userId = UserHolder.getUser().getId();
    //判断是否点赞
    String key = "blog:liked:" + id;
    Boolean member = stringRedisTemplate.opsForSet().isMember(key, userId.toString());
    if (BooleanUtil.isFalse(member)){
        //数据库点赞数+1
        boolean isSuccess = update().setSql("liked = liked + 1").eq("id", id).update();
        if (isSuccess){
            //保存到set集合
            stringRedisTemplate.opsForSet().add(key, userId.toString());
        }
    }else {
        //点赞取消 -1
        boolean isSuccess = update().setSql("liked = liked - 1").eq("id", id).update();
        if (isSuccess){
            //从set集合中移除
            stringRedisTemplate.opsForSet().remove(key, userId.toString());
        }
    }
}
 /**
     * 根据ID查询博客数据
     * @param id
     * @return
     */
    @Override
    public Result queryBlogById(Long id) {
        Blog blog = getById(id);
        if (null == blog){
            return Result.fail("笔记不存在");
        }
        //查询博客用户
        queryBlogUser(blog);
        //当期blog有没有被点赞
        isBlogLiked(blog);
        return Result.ok(blog);
    }

    private void isBlogLiked(Blog blog) {
        //获取登录用户
        UserDTO user = UserHolder.getUser();
        //未登录不获取点赞
        if (user == null) {
            return;
        }
        Long userId = UserHolder.getUser().getId();
        //判断是否点赞
        String key = RedisConstants.BLOG_LIKED_KEY + blog.getId();
        Boolean member = stringRedisTemplate.opsForSet().isMember(key, userId.toString());
        blog.setIsLike(BooleanUtil.isTrue(member));
    }
```



### 3、点赞排行榜

在探店笔记的详情页面，应该把给该笔记点赞的人显示出来，比如最早点赞的TOP5，形成点赞排行榜

#### 1、需求

需求：按照点赞时间先后排序，返回Top5的用户

| ** **        | **List**             | **Set**      | **SortedSet**   |
| ------------ | -------------------- | ------------ | --------------- |
| **排序方式** | 按添加顺序排序       | 无法排序     | 根据score值排序 |
| **唯一性**   | 不唯一               | 唯一         | 唯一            |
| **查找方式** | 按索引查找或首尾查找 | 根据元素查找 | 根据元素查找    |

综合对比：满足唯一且排序的只有`SortedSet`

#### 2、实现

```java
private void isBlogLiked(Blog blog) {
    //获取登录用户
    UserDTO user = UserHolder.getUser();
    //未登录不获取点赞
    if (user == null) {
        return;
    }
    Long userId = UserHolder.getUser().getId();
    //判断是否点赞
    String key = RedisConstants.BLOG_LIKED_KEY + blog.getId();
    Double score = stringRedisTemplate.opsForZSet().score(key, userId.toString());
    blog.setIsLike(null != score);
}

/**
     * 查询博客用户
     * @param blog
     */
private void queryBlogUser(Blog blog) {
    Long userId = blog.getUserId();
    User user = userService.getById(userId);
    blog.setName(user.getNickName());
    blog.setIcon(user.getIcon());
}

@Override
public Result queryHotBlog(Integer current) {
    // 根据用户查询
    Page<Blog> page = blogService.query()
        .orderByDesc("liked")
        .page(new Page<>(current, SystemConstants.MAX_PAGE_SIZE));
    // 获取当前页数据
    List<Blog> records = page.getRecords();
    // 查询用户
    records.forEach(item ->{
        this.queryBlogUser(item);
        this.isBlogLiked(item);
    });
    return Result.ok(records);
}

/**
     * 点赞
     * @param id
     * @return
     */
@Override
public Result likeBlog(Long id) {
    //获取登录用户
    Long userId = UserHolder.getUser().getId();
    //判断是否点赞
    String key = "blog:liked:" + id;
    Double score = stringRedisTemplate.opsForZSet().score(key, userId.toString());
    if (null == score){
        //数据库点赞数+1
        boolean isSuccess = update().setSql("liked = liked + 1").eq("id", id).update();
        if (isSuccess){
            //保存到set集合
            stringRedisTemplate.opsForZSet().add(key, userId.toString(),System.currentTimeMillis());
        }
    }else {
        //点赞取消 -1
        boolean isSuccess = update().setSql("liked = liked - 1").eq("id", id).update();
        if (isSuccess){
            //从set集合中移除
            stringRedisTemplate.opsForZSet().remove(key, userId.toString());
        }
    }
    return null;
}

/**
     * 点赞前五
     * @param id
     * @return
     */
@Override
public Result queryBlogLikes(Long id) {
    //查询top 5 zrange key 0 4
    String key = RedisConstants.BLOG_LIKED_KEY + id;
    Set<String> top5 = stringRedisTemplate.opsForZSet().range(key, 0, 4);
    //解析用户iD
    if (null == top5 || top5.isEmpty()){
        return Result.ok(Collections.emptyList());
    }
    List<Long> list = top5.stream().map(Long::valueOf).collect(Collectors.toList());
    String ids = StrUtil.join(",", list);
    //查询用户返回 in(5,1) order by field(id, 5, 1)
    List<UserDTO> dtoList = userService.query().in("id", list)
        .last("order by field(id, " + ids +")").list()
        .stream()
        .map(user -> BeanUtil.copyProperties(user, UserDTO.class))
        .collect(Collectors.toList());
    
   //这里因为in 的原因，查询出来的顺序跟插入参数顺序不一致，改用order by field(id, 5, 1)，手动指定字段和s
    //        List<UserDTO> dtoList = userService.listByIds(list)
    //                .stream()
    //                .map(user -> BeanUtil.copyProperties(user, UserDTO.class))
    //                .collect(Collectors.toList());
    return Result.ok(dtoList);
}
```
