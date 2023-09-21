import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as n}from"./app-aeb4ead9.js";const s="/assets/image-20220417173007323-67679a28.png",d="/assets/image-20220417173322103-84d04b62.png",r="/assets/image-20220418233727804-bbf0a194.png",l="/assets/image-20220421223538381-85be49a5.png",t="/assets/image-20220421223555698-4e8bc803.png",c={},o=n(`<p>步骤：</p><ol><li>搜索镜像</li><li>拉取镜像</li><li>查看镜像</li><li>启动镜像</li><li>停止容器</li><li>移除容器</li></ol><h3 id="_1、安装tomcat" tabindex="-1"><a class="header-anchor" href="#_1、安装tomcat" aria-hidden="true">#</a> 1、安装tomcat</h3><h4 id="_1、搜索镜像" tabindex="-1"><a class="header-anchor" href="#_1、搜索镜像" aria-hidden="true">#</a> 1、搜索镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、拉取镜像" tabindex="-1"><a class="header-anchor" href="#_2、拉取镜像" aria-hidden="true">#</a> 2、拉取镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、查看镜像" tabindex="-1"><a class="header-anchor" href="#_3、查看镜像" aria-hidden="true">#</a> 3、查看镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ../../images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、创建容器示例" tabindex="-1"><a class="header-anchor" href="#_4、创建容器示例" aria-hidden="true">#</a> 4、创建容器示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -p 8080:8080 tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-p 小写，主机端口:docker容器端口</li><li>-P 大写，随机分配端口</li><li>i:交互</li><li>t:终端</li><li>d:后台</li></ul><p>PS：宿主机8080映射到容器内的8080端口</p><h5 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h5><p>访问http://[ip]:8080/</p><p><img src="`+s+`" alt="image-20220417173007323" loading="lazy"></p><h5 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h5><ol><li><p>可能没有映射端口或者没有关闭防火墙</p></li><li><p>查看tomcat文件，把webapps.dist目录换成webapps</p><ol><li><p>先后台启动tomcat</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8080:8080 tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入容器内部</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it tomcat /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看文件目录，webapps.dist目录换成webapps</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@90c2f8c553b0:/usr/local/tomcat## ls
BUILDING.txt	 LICENSE  README.md	 RUNNING.txt  conf  logs	    temp     webapps.dist
CONTRIBUTING.md  NOTICE   RELEASE-NOTES  bin	      lib   native-jni-lib  webapps  work
root@90c2f8c553b0:/usr/local/tomcat## rm -f webapps
rm: cannot remove &#39;webapps&#39;: Is a directory
root@90c2f8c553b0:/usr/local/tomcat## rm -r webapps
root@90c2f8c553b0:/usr/local/tomcat## mv webapps.dist webapps
root@90c2f8c553b0:/usr/local/tomcat## ls
BUILDING.txt	 LICENSE  README.md	 RUNNING.txt  conf  logs	    temp     work
CONTRIBUTING.md  NOTICE   RELEASE-NOTES  bin	      lib   native-jni-lib  webapps
root@90c2f8c553b0:/usr/local/tomcat## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重新访问：http://[ip]:8080/</p><p><img src="`+d+`" alt="image-20220417173322103" loading="lazy"></p></li></ol></li></ol><h4 id="_5、免修改版" tabindex="-1"><a class="header-anchor" href="#_5、免修改版" aria-hidden="true">#</a> 5、免修改版</h4><h5 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8080:8080 --name mytomcat8 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、安装mysql" tabindex="-1"><a class="header-anchor" href="#_2、安装mysql" aria-hidden="true">#</a> 2、安装MySQL</h3><h4 id="_1、搜索镜像-1" tabindex="-1"><a class="header-anchor" href="#_1、搜索镜像-1" aria-hidden="true">#</a> 1、搜索镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、拉取指定版本镜像" tabindex="-1"><a class="header-anchor" href="#_2、拉取指定版本镜像" aria-hidden="true">#</a> 2、拉取指定版本镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、创建容器" tabindex="-1"><a class="header-anchor" href="#_3、创建容器" aria-hidden="true">#</a> 3、创建容器</h4><p>查看镜像省略</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>-p 3306:3306</strong> ：映射容器服务的 3306 端口到宿主机的 3306 端口，外部主机可以直接通过 <strong>宿主机ip:3306</strong> 访问到 MySQL 的服务。</li><li><strong>MYSQL_ROOT_PASSWORD=123456</strong>：设置 MySQL 服务 root 用户的密码。</li></ul><h4 id="_4、使用" tabindex="-1"><a class="header-anchor" href="#_4、使用" aria-hidden="true">#</a> 4、使用</h4><h5 id="_1、简单版" tabindex="-1"><a class="header-anchor" href="#_1、简单版" aria-hidden="true">#</a> 1、简单版</h5><h6 id="_1、使用mysql镜像" tabindex="-1"><a class="header-anchor" href="#_1、使用mysql镜像" aria-hidden="true">#</a> 1、使用MySQL镜像</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it a6b1fc904bad /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker myHostData]## docker exec -it a6b1fc904bad /bin/bash
root@a6b1fc904bad:/## mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \\g.
Your MySQL connection id is 2
Server version: 5.7.36 MySQL Community Server (GPL)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.

mysql&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2、建库建表" tabindex="-1"><a class="header-anchor" href="#_2、建库建表" aria-hidden="true">#</a> 2、建库建表</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; create database db1;
Query OK, 1 row affected (0.01 sec)

mysql&gt; show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| db1                |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

mysql&gt; use db1;
Database changed
mysql&gt; create table test01(id int, name varchar(20));
Query OK, 0 rows affected (0.05 sec)

mysql&gt; insert into test01 values(1, &#39;xiaobear&#39;);
Query OK, 1 row affected (0.45 sec)

mysql&gt; select * from test01;
+------+----------+
| id   | name     |
+------+----------+
|    1 | xiaobear |
+------+----------+
1 row in set (0.00 sec)

mysql&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、远程连接docker中的mysql" tabindex="-1"><a class="header-anchor" href="#_3、远程连接docker中的mysql" aria-hidden="true">#</a> 3、远程连接docker中的MySQL</h6><h6 id="_4、插入中文数据" tabindex="-1"><a class="header-anchor" href="#_4、插入中文数据" aria-hidden="true">#</a> 4、插入中文数据</h6><p><img src="`+r+`" alt="image-20220418233727804" loading="lazy"></p><p>**原因：**docker上默认字符集编码隐患</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; show variables like &#39;character%&#39;;
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | latin1                     |
| character_set_connection | latin1                     |
| character_set_database   | latin1                     |
| character_set_filesystem | binary                     |
| character_set_results    | latin1                     |
| character_set_server     | latin1                     |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
8 rows in set (0.01 sec)

mysql&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、实战版" tabindex="-1"><a class="header-anchor" href="#_2、实战版" aria-hidden="true">#</a> 2、实战版</h5><h6 id="_1、创建容器" tabindex="-1"><a class="header-anchor" href="#_1、创建容器" aria-hidden="true">#</a> 1、创建容器</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 3306:3306 --privileged=true -v /xiaobear/mysql/log:/var/log/mysql -v /xiaobear/mysql/data:/var/lib/mysql -v /xiaobear/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456  --name mysql mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_2、创建配置文件" tabindex="-1"><a class="header-anchor" href="#_2、创建配置文件" aria-hidden="true">#</a> 2、创建配置文件</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -d -p 3306:3306 --privileged=true -v /xiaobear/mysql/log:/var/log/mysql -v /xiaobear/mysql/data:/var/lib/mysql -v /xiaobear/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456  --name mysql mysql:5.7
9b08a40ccc0668416dbe8abc744cf2878940203f0e4fa3cb3a46c0179ac2244b
[root@docker ~]## docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
9b08a40ccc06   mysql:5.7   &quot;docker-entrypoint.s…&quot;   7 seconds ago   Up 7 seconds   0.0.0.0:3306-&gt;3306/tcp, :::3306-&gt;3306/tcp, 33060/tcp   mysql
[root@docker ~]## cd /xiaobear/mysql/conf/
[root@docker conf]## ls
[root@docker conf]## vim my.cnf
[root@docker conf]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件内容</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">init_connect</span><span class="token punctuation">=</span><span class="token value attr-value">&#39;<span class="token inner-value">SET collation_connection = utf8_unicode_ci</span>&#39;</span>
<span class="token key attr-name">init_connect</span><span class="token punctuation">=</span><span class="token value attr-value">&#39;<span class="token inner-value">SET NAMES utf8</span>&#39;</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token key attr-name">collation-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8_unicode_ci</span>
skip-character-set-client-handshake
skip-name-resolve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、重新启动查看编码" tabindex="-1"><a class="header-anchor" href="#_3、重新启动查看编码" aria-hidden="true">#</a> 3、重新启动查看编码</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker restart mysql
docker exec -it mysql /bin/bash
mysql -u root -p

#show variables like &#39;character%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4、中文测试" tabindex="-1"><a class="header-anchor" href="#_4、中文测试" aria-hidden="true">#</a> 4、中文测试</h6><h6 id="_5、总结" tabindex="-1"><a class="header-anchor" href="#_5、总结" aria-hidden="true">#</a> 5、总结</h6><blockquote><p>docker安装完MySQL并run出容器后，建议请先修改完字符集编码后再新建mysql库-表-插数据</p></blockquote><h3 id="_3、安装redis" tabindex="-1"><a class="header-anchor" href="#_3、安装redis" aria-hidden="true">#</a> 3、安装redis</h3><h4 id="_1、拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1、拉取镜像" aria-hidden="true">#</a> 1、拉取镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、创建容器" tabindex="-1"><a class="header-anchor" href="#_2、创建容器" aria-hidden="true">#</a> 2、创建容器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 6739:6739 redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、进入容器" tabindex="-1"><a class="header-anchor" href="#_3、进入容器" aria-hidden="true">#</a> 3、进入容器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it 3f85f4351992 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、在宿主机创建目录" tabindex="-1"><a class="header-anchor" href="#_4、在宿主机创建目录" aria-hidden="true">#</a> 4、在宿主机创建目录</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /app/redis/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5、复制一份redis-conf到该目录下-修改" tabindex="-1"><a class="header-anchor" href="#_5、复制一份redis-conf到该目录下-修改" aria-hidden="true">#</a> 5、复制一份redis.conf到该目录下,修改</h4><p>/app/redis目录下修改redis.conf文件 3.1 开启redis验证 可选 requirepass 123</p><p>3.2 允许redis外地连接 必须 注释掉 ## bind 127.0.0.1</p><p><img src="`+l+'" alt="image-20220421223538381" loading="lazy"></p><p>3.3 daemonize no 将daemonize yes注释起来或者 daemonize no设置，因为该配置和docker run中-d参数冲突，会导致容器一直启动失败</p><p><img src="'+t+`" alt="image-20220421223555698" loading="lazy"></p><p>3.4 开启redis数据持久化 appendonly yes 可选</p><h4 id="_6、使用redis镜像创建容器-也叫运行镜像" tabindex="-1"><a class="header-anchor" href="#_6、使用redis镜像创建容器-也叫运行镜像" aria-hidden="true">#</a> 6、使用redis镜像创建容器(也叫运行镜像)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run  -p 6379:6379 --name myredis --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -d redis redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker redis]## docker run  -p 6379:6379 --name myredis --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -d redis redis-server /etc/redis/redis.conf
50c5ce6ccb609cb8d4e3da1d40f51e5148c57b44f821ab55483ffe1aae689a31
[root@docker redis]## docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
50c5ce6ccb60   redis       &quot;docker-entrypoint.s…&quot;   8 seconds ago   Up 6 seconds   0.0.0.0:6379-&gt;6379/tcp, :::6379-&gt;6379/tcp              myredis
9b08a40ccc06   mysql:5.7   &quot;docker-entrypoint.s…&quot;   2 days ago      Up 2 days      0.0.0.0:3306-&gt;3306/tcp, :::3306-&gt;3306/tcp, 33060/tcp   mysql
[root@docker redis]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、测试连接" tabindex="-1"><a class="header-anchor" href="#_7、测试连接" aria-hidden="true">#</a> 7、测试连接</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker redis]## docker exec -it myredis /bin/bash
root@50c5ce6ccb60:/data## redis-cli
127.0.0.1:6379&gt; set k hello
OK
127.0.0.1:6379&gt; get k
&quot;hello&quot;
127.0.0.1:6379&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker exec -it 运行着Rediis服务的容器ID redis-cli</p>`,78),v=[o];function u(m,b){return a(),i("div",null,v)}const g=e(c,[["render",u],["__file","regular_install.html.vue"]]);export{g as default};
