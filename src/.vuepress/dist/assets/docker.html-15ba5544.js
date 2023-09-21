import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as r,a as e,b as i,d as s,e as a}from"./app-f55ccf80.js";const c="/assets/image-20211022102823215-34eb5fe6.png",o={},u=a(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ol><li><p>查询镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull 镜像名称[:version]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除一个镜像
docker rmi 镜像名称/id
# 删除多个镜像
docker rmi 镜像名称1/id1 镜像名称2/id2 ...
# 删除所有镜像
docker rmi \`docker images ‐q\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run [options] image command [ARG...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>options选项: ‐i、‐t、‐d、‐‐name ‐i：交互式容器 ‐t：tty，终端 ‐d:后台运行，并且打印容器id</p><p>--restart=always：docker 的容器自动在开机启动</p><p><strong>创建的容器名称不能重复</strong></p></li><li><p>进入容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#方式一
docker attach 容器名称/id (ps:exit,容器停止)

#方式二
docker exec ‐it 容器名称/id /bin/bash （ps:exit,容器不会停止）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps：查看正在运行的容器
docker ps ‐a：查看运行过的容器（历史）
docker ps ‐l：最后一次运行的容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>停止/启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start 容器名称/id
docker stop 容器名称/id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取容器/镜像的元数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看容器/镜像全部信息：
docker inspect 容器/镜像
#查看容器/镜像部分信息：
docker inspect ‐f=&#39;{{.NetworkSettings.IPAddress}}&#39; 容器/镜像
‐f：可通过‐‐format代替
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#删除一个容器：
docker rm 容器名称/id
#删除多个容器：
docker rm 容器名称1/id1 容器名称2/id2 ...
#删除所有容器
docker rm \`docker ps ‐a ‐q\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PS：无法删除正在运行的容器</strong></p></li><li><p>查看容器日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs 容器名称/id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>文件拷贝</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker cp 需要拷贝的文件或目录 容器名称:容器目录
例如：docker cp 1.txt c2:/root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>目录挂载</p><blockquote><p>我们可以在创建容器的时候，将宿主机的目录与容器内的目录进行映射，这样我们就可以通过修改宿主机某个目录的文件从而去影响容器。</p><p>创建容器 添加-v参数 后边为 宿主机目录:容器目录</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run ‐id ‐‐name=c4 ‐v /opt/:/usr/local/myhtml centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你共享的是多级的目录，可能会出现权限不足的提示</p><p>这是因为CentOS7中的安全模块selinux把权限禁掉了，我们需要添加参数 --privileged=true 来解决挂载的目录没有权限的问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run ‐id ‐‐privileged=true ‐‐name=c4 ‐v /opt/:/usr/local/myhtml centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建容器时没有添加参数 <code>--restart=always</code> ，导致的后果是：当 Docker 重启时，容器未能自动启动。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker container update --restart=always 容器名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li></li></ol><h2 id="_1、docker安装mysql" tabindex="-1"><a class="header-anchor" href="#_1、docker安装mysql" aria-hidden="true">#</a> 1、docker安装MySQL</h2>`,3),v=e("p",null,"查看mysql可用的版本",-1),m={href:"https://hub.docker.com/_/mysql?tab=tags",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[i("可以通过 Sort by 查看其他版本的 MySQL，默认是最新版本 "),e("strong",null,"mysql:latest"),i(" 。")],-1),b=a(`<li><p>拉取 MySQL 镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看本地镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>-p 3306:3306</strong> ：映射容器服务的 3306 端口到宿主机的 3306 端口，外部主机可以直接通过 <strong>宿主机ip:3306</strong> 访问到 MySQL 的服务。</li><li><strong>MYSQL_ROOT_PASSWORD=123456</strong>：设置 MySQL 服务 root 用户的密码。</li></ul></li><li><p>查看是否启动成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>MySQL 配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /mydata/mysql/conf/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[client]
default-character-set=utf8

[mysql]
default-character-set=utf8

[mysqld]
init_connect=&#39;SET collation_connection = utf8_unicode_ci&#39;
init_connect=&#39;SET NAMES utf8&#39;
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启mysql</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it mysql bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>登录mysql</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql -u root -p
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加远程登录用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER &#39;root&#39;@&#39;% IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;

alter user &#39;root&#39;@&#39;%&#39; identified with mysql_native_password by &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>授权使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39; WITH GRANT OPTION;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,10),g=e("h2",{id:"_2、docker安装redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2、docker安装redis","aria-hidden":"true"},"#"),i(" 2、docker安装Redis")],-1),x=e("p",null,"查看可用的 Redis 版本",-1),h={href:"https://hub.docker.com/_/redis?tab=tags%E3%80%82",target:"_blank",rel:"noopener noreferrer"},k=a(`<li><p>取最新版的 Redis 镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看本地镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -itd --name redis -p 6379:6379 redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>-p 6379:6379</strong>：映射容器服务的 6379 端口到宿主机的 6379 端口。外部可以直接通过宿主机ip:6379 访问到 Redis 的服务</li></ul></li><li><p>查看运行状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>redis-cli 连接测试使用 redis 服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it redis /bin/bash
redis-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li>`,6),_=e("h2",{id:"_3、docker安装elasticsearch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3、docker安装elasticsearch","aria-hidden":"true"},"#"),i(" 3、docker安装Elasticsearch")],-1),E={href:"https://hub.docker.com/_/elasticsearch/tags",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>1、取最新版的 elasticsearch镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull docker.elastic.co/elasticsearch/elasticsearch:7.15.1 #存储和检索数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看本地镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、运行容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name elasticsearch -p 9200:9200 -p 9300:9300 \\
-e &quot;discovery.type=single-node&quot; \\
-e ES_JAVA_OPTS=&quot;-Xms64m -Xmx512m&quot; \\
-v /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \\
-v /mydata/elasticsearch/data:/usr/share/elasticsearch/data \\
-v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins \\
-d docker.elastic.co/elasticsearch/elasticsearch:7.15.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-p 9200:9200 -p 9300:9300</code>：这里是外部访问端口9200，elasticsearch集群内部端口9300</li><li><code>-e &quot;discovery.type=single-node&quot;</code>：以单节点方式启动</li><li><code>-e ES_JAVA_OPTS=&quot;-Xms64m -Xmx512m&quot;</code>：设置内存，不然elasticsearch会全部占用，导致死机</li><li><code>-v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins \\</code>：这里以它为例，进行目录挂载</li><li><code>-d docker.elastic.co/elasticsearch/elasticsearch:7.15.1</code>：启动容器的名称</li></ul><p>4、查看运行状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、发现突然就挂了，查看日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ElasticsearchException[failed to bind service]; nested: AccessDeniedException[/usr/share/elasticsearch/data/nodes];
Likely root cause: java.nio.file.AccessDeniedException: /usr/share/elasticsearch/data/nodes
	at java.base/sun.nio.fs.UnixException.translateToIOException(UnixException.java:90)
	at java.base/sun.nio.fs.UnixException.rethrowAsIOException(UnixException.java:106)
	at java.base/sun.nio.fs.UnixException.rethrowAsIOException(UnixException.java:111)
	at java.base/sun.nio.fs.UnixFileSystemProvider.createDirectory(UnixFileSystemProvider.java:398)
	at java.base/java.nio.file.Files.createDirectory(Files.java:700)
	at java.base/java.nio.file.Files.createAndCheckIsDirectory(Files.java:807)
	at java.base/java.nio.file.Files.createDirectories(Files.java:793)
	at org.elasticsearch.env.NodeEnvironment.lambda$new$0(NodeEnvironment.java:265)
	at org.elasticsearch.env.NodeEnvironment$NodeLock.&lt;init&gt;(NodeEnvironment.java:202)
	at org.elasticsearch.env.NodeEnvironment.&lt;init&gt;(NodeEnvironment.java:262)
	at org.elasticsearch.node.Node.&lt;init&gt;(Node.java:383)
	at org.elasticsearch.node.Node.&lt;init&gt;(Node.java:288)
	at org.elasticsearch.bootstrap.Bootstrap$5.&lt;init&gt;(Bootstrap.java:219)
	at org.elasticsearch.bootstrap.Bootstrap.setup(Bootstrap.java:219)
	at org.elasticsearch.bootstrap.Bootstrap.init(Bootstrap.java:399)
	at org.elasticsearch.bootstrap.Elasticsearch.init(Elasticsearch.java:167)
	at org.elasticsearch.bootstrap.Elasticsearch.execute(Elasticsearch.java:158)
	at org.elasticsearch.cli.EnvironmentAwareCommand.execute(EnvironmentAwareCommand.java:75)
	at org.elasticsearch.cli.Command.mainWithoutErrorHandling(Command.java:114)
	at org.elasticsearch.cli.Command.main(Command.java:79)
	at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:123)
	at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:81)
For complete error details, refer to the log at /usr/share/elasticsearch/logs/elasticsearch.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ps：没有权限访问config目录</p><p>6、添加权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod -R 777 /mydata/elasticsearch/ 保证权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-R</code>：遍历改目录下的所有目录</li></ul><p>7、重新启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+`" alt="image-20211022102823215" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start 385
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8、查看运行状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),q={href:"http://xn--ip-tx5di3ni80c:9200/",target:"_blank",rel:"noopener noreferrer"},S=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot; : &quot;3859b80b5c1a&quot;,
  &quot;cluster_name&quot; : &quot;elasticsearch&quot;,
  &quot;cluster_uuid&quot; : &quot;dSKyudV8Qleuc_CXEIYvkA&quot;,
  &quot;version&quot; : {
    &quot;number&quot; : &quot;7.15.1&quot;,
    &quot;build_flavor&quot; : &quot;default&quot;,
    &quot;build_type&quot; : &quot;docker&quot;,
    &quot;build_hash&quot; : &quot;83c34f456ae29d60e94d886e455e6a3409bba9ed&quot;,
    &quot;build_date&quot; : &quot;2021-10-07T21:56:19.031608185Z&quot;,
    &quot;build_snapshot&quot; : false,
    &quot;lucene_version&quot; : &quot;8.9.0&quot;,
    &quot;minimum_wire_compatibility_version&quot; : &quot;6.8.0&quot;,
    &quot;minimum_index_compatibility_version&quot; : &quot;6.0.0-beta1&quot;
  },
  &quot;tagline&quot; : &quot;You Know, for Search&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11、运行kibana</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、docker安装kibana" tabindex="-1"><a class="header-anchor" href="#_4、docker安装kibana" aria-hidden="true">#</a> 4、docker安装Kibana</h2>`,4),y=a(`<li><p>取 kibana镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull docker.elastic.co/kibana/kibana:7.15.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行kibana</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name kibana -e ELASTICSEARCH_HOSTS=http://192.168.222.129:9200 -p 5601:5601 \\
-d docker.elastic.co/kibana/kibana:7.15.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ELASTICSEARCH_HOSTS</code>：elasticsearch的安装服务器ip</li></ul></li>`,2),R={href:"http://ip:5601/",target:"_blank",rel:"noopener noreferrer"},T=a(`<h2 id="_5、docker安装nginx" tabindex="-1"><a class="header-anchor" href="#_5、docker安装nginx" aria-hidden="true">#</a> 5、docker安装Nginx</h2><p>1、启动一个nginx的实例，如果不存在实例，则会安装再启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 80:80 --name nginx -d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、将容器内的配置文件拷贝到当前目录，后面有个点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker container cp nginx:/etc/nginx .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、修改文件名称，把这个conf 移动到/mydata/nginx 下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv nginx conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、终止原容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、删除容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、创建新的nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 80:80 --name nginx \\
-v /mydata/nginx/html:/usr/share/nginx/html \\
-v /mydata/nginx/logs:/var/log/nginx \\
-v /mydata/nginx/conf:/etc/nginx \\
-d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给nginx 的html 下面放的所有资源可以直接访问</p><h2 id="_6、docker安装tomcat" tabindex="-1"><a class="header-anchor" href="#_6、docker安装tomcat" aria-hidden="true">#</a> 6、docker安装Tomcat</h2><h3 id="_1、正常安装" tabindex="-1"><a class="header-anchor" href="#_1、正常安装" aria-hidden="true">#</a> 1、正常安装</h3><p>1、搜索镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、查看镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、创建容器示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -p 8080:8080 tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-p 小写，主机端口:docker容器端口</li><li>-P 大写，随机分配端口</li><li>i:交互</li><li>t:终端</li><li>d:后台</li></ul><p>PS：宿主机8080映射到容器内的8080端口</p><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><p>访问http://[ip]:8080/</p><h4 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h4><ol><li><p>可能没有映射端口或者没有关闭防火墙</p></li><li><p>查看tomcat文件，把webapps.dist目录换成webapps</p><ol><li><p>先后台启动tomcat</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8080:8080 tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入容器内部</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it tomcat /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看文件目录，webapps.dist目录换成webapps</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@90c2f8c553b0:/usr/local/tomcat# ls
BUILDING.txt	 LICENSE  README.md	 RUNNING.txt  conf  logs	    temp     webapps.dist
CONTRIBUTING.md  NOTICE   RELEASE-NOTES  bin	      lib   native-jni-lib  webapps  work
root@90c2f8c553b0:/usr/local/tomcat# rm -f webapps
rm: cannot remove &#39;webapps&#39;: Is a directory
root@90c2f8c553b0:/usr/local/tomcat# rm -r webapps
root@90c2f8c553b0:/usr/local/tomcat# mv webapps.dist webapps
root@90c2f8c553b0:/usr/local/tomcat# ls
BUILDING.txt	 LICENSE  README.md	 RUNNING.txt  conf  logs	    temp     work
CONTRIBUTING.md  NOTICE   RELEASE-NOTES  bin	      lib   native-jni-lib  webapps
root@90c2f8c553b0:/usr/local/tomcat# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重新访问：http://[ip]:8080/</p></li></ol></li></ol><h3 id="_2、免修改版" tabindex="-1"><a class="header-anchor" href="#_2、免修改版" aria-hidden="true">#</a> 2、免修改版</h3><h4 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8080:8080 --name mytomcat8 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8、docker安装nacos" tabindex="-1"><a class="header-anchor" href="#_8、docker安装nacos" aria-hidden="true">#</a> 8、docker安装Nacos</h2>`,36),I=a(`<li><p>查看可用的版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>拉取最新的版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下载镜像 https://hub.docker.com/ docker 官方搜索查看有哪些 nacos 镜像版本
docker pull nacos/nacos-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动容器，以单例模式启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8848:8848 --env MODE=standalone  --name nacos  nacos/nacos-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,3),N={href:"http://192.168.130.135:8848/nacos",target:"_blank",rel:"noopener noreferrer"},A=a(`<li><p>如果出现404，则是没有开放对应的端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看开放端口
firewall-cmd --list-port
#防火墙开放8848端口
firewall-cmd --zone=public --add-port=8848/tcp --permanent
#重启防火墙
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>为Nacos配置数据库，不然未启动30天后配置就消失了</p><ul><li><p>修改容器的配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#执行如下命令进入配置nacos
docker exec -it nacos bash
#修改conf/application.properties文件，可以修改可以覆盖如下
#注意如果mysql也是使用docker启动的，需要指定mysql在docker中的ip，这里我只需要一个主数据库配置
server.contextPath=/nacos
server.servlet.contextPath=/nacos
server.port=8848
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true
db.user=root
db.password=123456
nacos.cmdb.dumpTaskInterval=3600
nacos.cmdb.eventTaskInterval=10
nacos.cmdb.labelTaskInterval=300
nacos.cmdb.loadDataAtStart=false
management.metrics.export.elastic.enabled=false
management.metrics.export.influx.enabled=false
server.tomcat.accesslog.enabled=true
server.tomcat.accesslog.pattern=%h %l %u %t &quot;%r&quot; %s %b %D %{User-Agent}i
nacos.security.ignore.urls=/,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/v1/auth/login,/v1/console/health/**,/v1/cs/**,/v1/ns/**,/v1/cmdb/**,/actuator/**,/v1/console/server/**
nacos.naming.distro.taskDispatchThreadCount=1
nacos.naming.distro.taskDispatchPeriod=200
nacos.naming.distro.batchSyncKeyCount=1000
nacos.naming.distro.initDataRatio=0.9
nacos.naming.distro.syncRetryDelay=5000
nacos.naming.data.warmup=true
nacos.naming.expireInstance=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记得重启容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker restart nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li>`,2),j=a(`<p>启动时配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
-e TZ=&quot;Asia/Shanghai&quot; \\
-e MODE=standalone \\
-e SPRING_DATASOURCE_PLATFORM=mysql \\
-e MYSQL_MASTER_SERVICE_HOST=192.168.101.11 \\
-e MYSQL_MASTER_SERVICE_PORT=3306 \\
-e MYSQL_MASTER_SERVICE_USER=root \\
-e MYSQL_MASTER_SERVICE_PASSWORD=root \\
-e MYSQL_MASTER_SERVICE_DB_NAME=nacos-config \\
-e MYSQL_SLAVE_SERVICE_HOST=192.168.101.11 \\
-p 8848:8848 \\
--expose=8848 \\
--name nacos \\
--restart=always \\
-v /root/nacos/standalone-logs/:/home/nacos/logs \\
nacos/nacos-server:1.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L={href:"https://nacos.io/zh-cn/docs/quick-start-docker.html",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"MYSQL_SLAVE_SERVICE_HOST ",-1),O=e("h2",{id:"_7、docker安装elasticsearch-head",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7、docker安装elasticsearch-head","aria-hidden":"true"},"#"),i(" 7、docker安装Elasticsearch-head")],-1),C={href:"https://hub.docker.com/r/mobz/elasticsearch-head/tags",target:"_blank",rel:"noopener noreferrer"},D=a(`<li><p>搜索镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search elasticsearch-head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mobz/elasticsearch-head:5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name es-head -d -p 9100:9100 mobz/elasticsearch-head:5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,3),M={href:"http://192.168.130.135:9100/",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"_9、docker安装seata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9、docker安装seata","aria-hidden":"true"},"#"),i(" 9、docker安装Seata")],-1),U={href:"https://hub.docker.com/r/seataio/seata-server/tags",target:"_blank",rel:"noopener noreferrer"},Q=a(`<ol><li><p>搜索镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search seataio/seata-server:1.5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull seataio/seata-server:1.5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -itd --name seata-server -p 8091:8091 -p 7091:7091 seataio/seata-server:1.5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,1);function V(B,Y){const n=l("ExternalLinkIcon");return t(),r("div",null,[u,e("ol",null,[e("li",null,[v,e("blockquote",null,[e("p",null,[i("访问 MySQL 镜像库地址："),e("a",m,[i("https://hub.docker.com/_/mysql?tab=tags"),s(n)]),i(" 。")]),p])]),b]),g,e("ol",null,[e("li",null,[x,e("blockquote",null,[e("p",null,[i("访问 Redis 镜像库地址： "),e("a",h,[i("https://hub.docker.com/_/redis?tab=tags。"),s(n)])])])]),k]),_,e("blockquote",null,[e("p",null,[i("官网镜像："),e("a",E,[i("https://hub.docker.com/_/elasticsearch/tags"),s(n)])])]),f,e("p",null,[i("9、外网访问 "),e("a",q,[i("http://虚拟机ip:9200/"),s(n)])]),S,e("ol",null,[y,e("li",null,[e("p",null,[i("访问访问："),e("a",R,[i("http://ip:5601/"),s(n)])])])]),T,e("ol",null,[I,e("li",null,[e("p",null,[i("访问："),e("a",N,[i("http://192.168.130.135:8848/nacos"),s(n)])])]),A]),e("ul",null,[e("li",null,[j,e("p",null,[i("具体配置参数参考"),e("a",L,[i("官方文档"),s(n)]),i("，这里有个注意的是 "),w,i("也需要配置")])])]),O,e("blockquote",null,[e("p",null,[i("官网镜像："),e("a",C,[i("https://hub.docker.com/r/mobz/elasticsearch-head/tags"),s(n)])])]),e("ol",null,[D,e("li",null,[e("p",null,[i("访问是否正常："),e("a",M,[i("http://192.168.130.135:9100/"),s(n)])])])]),P,e("blockquote",null,[e("p",null,[i("docker镜像仓库："),e("a",U,[i("https://hub.docker.com/r/seataio/seata-server/tags"),s(n)])])]),Q])}const H=d(o,[["render",V],["__file","docker.html.vue"]]);export{H as default};
