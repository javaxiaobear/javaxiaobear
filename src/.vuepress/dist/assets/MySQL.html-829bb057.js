import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as a}from"./app-f55ccf80.js";const i="/assets/img-04189f3a.png",l="/assets/img_1-c5d90025.png",d="/assets/img_2-40794213.png",t={},r=a(`<h2 id="_1、mysql忘记密码解决方法" tabindex="-1"><a class="header-anchor" href="#_1、mysql忘记密码解决方法" aria-hidden="true">#</a> 1、mysql忘记密码解决方法</h2><p>1、停止mysql服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net stop mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、以管理员身份运行cmd</p><p>进入mysql的bin目录下，开启跳过密码验证登录的mysql服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqld --console --skip-grant-tables --shared-memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个界面不要关闭</p><p>3、以管理员身份打开第二个CMD，进入mysql的bin目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#第一步：</span>
mysql
<span class="token comment">#刷新权限</span>
flush privileges<span class="token punctuation">;</span>
<span class="token comment">#第二步，MySQL 5.7.6及更高版本</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;MyNewPass&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#MySQL 5.7.5及更早版本</span>
SET PASSWORD FOR <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;MyNewPass&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、关闭第一个CMD程序，启动mysql服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动mysql服务</span>
net start mysql
<span class="token comment">#登录</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、mysql数据库编码问题" tabindex="-1"><a class="header-anchor" href="#_2、mysql数据库编码问题" aria-hidden="true">#</a> 2、mysql数据库编码问题</h2><ol><li><p>修改表的编码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改表中所有字段编码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">convert</span> <span class="token keyword">to</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_3、mysql安装出现问题-the-service-already-exists" tabindex="-1"><a class="header-anchor" href="#_3、mysql安装出现问题-the-service-already-exists" aria-hidden="true">#</a> 3、MYSQL安装出现问题（The service already exists）</h2><ol><li><p>以管理员运行cmd</p></li><li><p>查询mysql服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sc query mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除mysql</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sc delete mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_4、mysql命令报-不是内部或外部命令" tabindex="-1"><a class="header-anchor" href="#_4、mysql命令报-不是内部或外部命令" aria-hidden="true">#</a> 4、mysql命令报“不是内部或外部命令”</h2><blockquote><p>如果输入mysql命令报“不是内部或外部命令”，把mysql安装目录的bin目录配置到环境变量path中。如下：</p></blockquote><p><img src="`+i+`" alt="image-20220617160822526" loading="lazy"></p><h2 id="_5、错误error-没有选择数据库就操作表格和数据" tabindex="-1"><a class="header-anchor" href="#_5、错误error-没有选择数据库就操作表格和数据" aria-hidden="true">#</a> 5、错误ERROR ：没有选择数据库就操作表格和数据</h2><table><thead><tr><th>ERROR 1046 (3D000): No database selected</th></tr></thead><tbody><tr><td>解决方案一：就是使用“USE 数据库名;”语句，这样接下来的语句就默认针对这个数据库进行操作</td></tr><tr><td>解决方案二：就是所有的表对象前面都加上“数据库.”</td></tr></tbody></table><h2 id="_6、命令行客户端的字符集问题" tabindex="-1"><a class="header-anchor" href="#_6、命令行客户端的字符集问题" aria-hidden="true">#</a> 6、命令行客户端的字符集问题</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> INSERT INTO t_stu VALUES<span class="token punctuation">(</span><span class="token number">1</span>,<span class="token string">&#39;张三&#39;</span>,<span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ERROR <span class="token number">1366</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: Incorrect string value: <span class="token string">&#39;\\xD5\\xC5\\xC8\\xFD&#39;</span> <span class="token keyword">for</span> <span class="token function">column</span> <span class="token string">&#39;sname&#39;</span> at row <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：服务器端认为你的客户端的字符集是utf-8，而实际上你的客户端的字符集是GBK。</p><p>查看所有字符集：<strong>SHOW VARIABLES LIKE &#39;character_set_%&#39;;</strong></p><p><img src="`+l+'" alt="image-20220617161024275" loading="lazy"></p><p>解决方案，设置当前连接的客户端字符集 <strong>“SET NAMES GBK;”</strong></p><p><img src="'+d+`" alt="image-20220617161044525" loading="lazy"></p><h2 id="_7、修改数据库和表的字符编码" tabindex="-1"><a class="header-anchor" href="#_7、修改数据库和表的字符编码" aria-hidden="true">#</a> 7、修改数据库和表的字符编码</h2><p>修改编码：</p><p>（1)先停止服务，（2）修改my.ini文件（3）重新启动服务</p><p>说明：</p><p>如果是在修改my.ini之前建的库和表，那么库和表的编码还是原来的Latin1，要么删了重建，要么使用alter语句修改编码。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create database 0728db charset Latin1;
Query OK, 1 row affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; use 0728db;
Database changed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create table student (id int , name varchar(20)) charset Latin1;
Query OK, 0 rows affected (0.02 sec)


mysql&gt; show create table student\\G
*************************** 1. row ***************************
       Table: student
Create Table: CREATE TABLE \`student\` (
  \`id\` int(11) NOT NULL,
  \`name\` varchar(20) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; alter table student charset utf8; #修改表字符编码为UTF8
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0


mysql&gt; show create table student\\G
*************************** 1. row ***************************
       Table: student
Create Table: CREATE TABLE \`student\` (
  \`id\` int(11) NOT NULL,
  \`name\` varchar(20) CHARACTER SET latin1 DEFAULT NULL,  #字段仍然是latin1编码
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)


mysql&gt; alter table student modify name varchar(20) charset utf8; #修改字段字符编码为UTF8
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0


mysql&gt; show create table student\\G
*************************** 1. row ***************************
       Table: student
Create Table: CREATE TABLE \`student\` (
  \`id\` int(11) NOT NULL,
  \`name\` varchar(20) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show create database 0728db;;
+--------+-----------------------------------------------------------------+
|Database| Create Database                                                 |
+------+-------------------------------------------------------------------+
|0728db| CREATE DATABASE \`0728db\` /*!40100 DEFAULT CHARACTER SET latin1 */ |
+------+-------------------------------------------------------------------+
1 row in set (0.00 sec)


mysql&gt; alter database 0728db charset utf8; #修改数据库的字符编码为utf8
Query OK, 1 row affected (0.00 sec)


mysql&gt; show create database 0728db;
+--------+-----------------------------------------------------------------+
|Database| Create Database                                                 |
+--------+-----------------------------------------------------------------+
| 0728db | CREATE DATABASE \`0728db\` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+--------+-----------------------------------------------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、mysql-8以上的版本的数据导入到5-7的编码问题" tabindex="-1"><a class="header-anchor" href="#_8、mysql-8以上的版本的数据导入到5-7的编码问题" aria-hidden="true">#</a> 8、MySQL 8以上的版本的数据导入到5.7的编码问题</h2><p>提示**[ERR] 1273 - Unknown collation: ‘utf8mb4_0900_ai_ci’** ，原因是数据文件版本是SQL8，而本地数据库是SQL5.7</p><blockquote><ul><li><strong>方法一</strong>：数据库升级到8</li><li><strong>方法二</strong>：利用编辑器进行批量替换，把sql文件中所有的<code>utf8mb4</code>换成<code>utf8 </code>,<code>utf8mb4_0900_ai_ci</code>换成<code>utf8_general_ci</code></li></ul></blockquote><h2 id="_9、使用group-by分组报错" tabindex="-1"><a class="header-anchor" href="#_9、使用group-by分组报错" aria-hidden="true">#</a> 9、使用<code>Group By</code>分组报错</h2><blockquote><p>报错信息：ERROR 1055 (42000): Expression #2 of SELECT list is not in GROUP BY clause and contains nonaggregated column &#39;school_db.SC.Cid&#39; which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by</p></blockquote><p>ONLY_FULL_GROUP_BY的意思是：对于GROUP BY聚合操作，如果在SELECT中的列，没有在GROUP BY中出现，那么这个SQL是不合法的，因为列不在GROUP BY从句中，也就是说查出来的列必须在group by后面出现否则就会报错，或者这个字段出现在聚合函数里面。</p><p><strong>解决</strong></p><ol><li>查看<code>sql_mode</code>参数命令，查看是否存在ONLY_FULL_GROUP_BY这个配置</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看ONLY_FULL_GROUP_BY 校验规则是否开启</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@GLOBAL.sql_mode</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@SESSION.sql_mode</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>去除校验 (1)第一种，通过命令去除</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 关闭only_full_group_by的规则校验</span>
<span class="token keyword">set</span> @<span class="token variable">@GLOBAL.sql_mode</span><span class="token operator">=</span><span class="token string">&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> @<span class="token variable">@SESSION.sql_mode</span><span class="token operator">=</span><span class="token string">&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)第二种，通过修改配置文件my.ini</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 [mysqld] 下面添加代码：
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重启mysql服务</p>`,51),c=[r];function o(u,v){return e(),n("div",null,c)}const b=s(t,[["render",o],["__file","MySQL.html.vue"]]);export{b as default};
