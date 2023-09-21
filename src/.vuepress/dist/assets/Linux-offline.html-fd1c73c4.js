import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as t,a as e,b as i,d as l,e as a}from"./app-f55ccf80.js";const c={},u=e("h2",{id:"_1、linux离线安装gcc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1、linux离线安装gcc","aria-hidden":"true"},"#"),i(" 1、linux离线安装gcc")],-1),v=e("li",null,[e("p",null,"检查是否存在环境"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`rpm -qa | grep gcc-c++ 
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])],-1),o=e("p",null,"离线下载gcc安装包",-1),m={href:"http://mirrors.aliyun.com/centos/7/os/x86_64/Packages/",target:"_blank",rel:"noopener noreferrer"},p=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mpfr-3.1.1-4.el7.x86_64.rpm
libmpc-1.0.1-3.el7.x86_64.rpm
kernel-headers-3.10.0-123.el7.x86_64.rpm
glibc-headers-2.17-55.el7.x86_64.rpm
glibc-devel-2.17-55.el7.x86_64.rpm
cpp-4.8.2-16.el7.x86_64.rpm
gcc-4.8.2-16.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=a(`<li><p>上传至服务器</p></li><li><p>进入目录统一安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -Uvh *.rpm --nodeps --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>验证是否安装成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -v
g++ -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),x=a(`<h2 id="_2、linux离线安装perl" tabindex="-1"><a class="header-anchor" href="#_2、linux离线安装perl" aria-hidden="true">#</a> 2、linux离线安装perl</h2><ol><li><p>下载安装包，需先安装gcc环境</p></li><li><p>解压安装包，目录可指定，不指定，就解压在该目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf perl-5.26.1.tar.gz -C /[指定的目录]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>检查平台环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./Configure -des -Dprefix=/[指定的目录]/perl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编译</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_3、linux离线安装svn" tabindex="-1"><a class="header-anchor" href="#_3、linux离线安装svn" aria-hidden="true">#</a> 3、linux离线安装svn</h2>`,3),g=e("p",null,[e("strong",null,"依赖包：")],-1),h={href:"http://subversion.apache.org/download/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://apr.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},f={href:"http://apr.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},k={href:"http://linux.softpedia.com/get/Programming/Libraries/zlib-159.shtml",target:"_blank",rel:"noopener noreferrer"},z={href:"http://sqlite.org/download.html",target:"_blank",rel:"noopener noreferrer"},w={href:"http://www.linuxfromscratch.org/blfs/view/6.3/general/expat.html",target:"_blank",rel:"noopener noreferrer"},y=a(`<h4 id="_1、上传至相应目录-解压" tabindex="-1"><a class="header-anchor" href="#_1、上传至相应目录-解压" aria-hidden="true">#</a> 1、上传至相应目录，解压</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /home/
mkdir svn

压缩包上传到svn，解压
tar -xzvf subversion-1.14.0.tar.gz
tar -xzvf apr-1.7.0.tar.gz
tar -xzvf apr-util-1.6.1.tar.gz
tar -xzvf zlib-1.2.11.tar.xz
tar -xzvf sqlite-autoconf-3320300.tar.gz
tar -xzvf expat-2.0.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、安装apr" tabindex="-1"><a class="header-anchor" href="#_2、安装apr" aria-hidden="true">#</a> 2、安装apr</h4><ol><li><p>进入apr-1.7.0文件夹下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd apr-1.7.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行安装命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure prefix=/home/svn/apr-1.7.0
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_3、安装apr-util" tabindex="-1"><a class="header-anchor" href="#_3、安装apr-util" aria-hidden="true">#</a> 3、安装apr-util</h4><ol><li><p>安装expat库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd expat-2.0.1
./configure
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入apr-util-1.6.1文件夹下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd apr-util-1.6.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure prefix=/home/svn/apr-util-1.6.1 --with-apr=/usr/local/apr
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_4、安装zlib" tabindex="-1"><a class="header-anchor" href="#_4、安装zlib" aria-hidden="true">#</a> 4、安装zlib</h4><ol><li><p>进入zlib-1.2.11文件夹下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd zlib-1.2.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure
make	
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_5、将sqlite-autoconf-3320300改名为sqlite-amalgamation并移动到subversion-1-14-0文件夹下" tabindex="-1"><a class="header-anchor" href="#_5、将sqlite-autoconf-3320300改名为sqlite-amalgamation并移动到subversion-1-14-0文件夹下" aria-hidden="true">#</a> 5、将sqlite-autoconf-3320300改名为sqlite-amalgamation并移动到subversion-1.14.0文件夹下</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv sqlite-autoconf-3320300 ./subversion-1.14.0/sqlite-amalgamation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6、安装subversion" tabindex="-1"><a class="header-anchor" href="#_6、安装subversion" aria-hidden="true">#</a> 6、安装subversion</h4><ol><li><p>进入subversion-1.14.0文件夹下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd subversion-1.14.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure prefix=/home/svn/subversion-1.14.0 --with-apr=/home/svn/apr-1.7.0 --with-apr-util=/home/svn/apr-util-1.6.1 --with-zlib=/home/svn/zlib-1.2.11 --with-lz4=internal --with-utf8proc=internal

make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装完成，添加环境变量path</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi .bash_profile 
PATH=/home/svn/subversion-1.14.0/bin:$PATH
#生效配置文件
source .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_7、配置svn仓库" tabindex="-1"><a class="header-anchor" href="#_7、配置svn仓库" aria-hidden="true">#</a> 7、配置SVN仓库</h4><ol><li><p>创建库目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p myproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>添加配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>svnadmin create /home/svn/myproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入配置文件所在目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd myproject/conf
vi subversion.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#将文件中以下内容前的删除并顶格

[general]
anon-access = none         #使非授权用户无法访问
auth-access = write        #使授权用户有写权限
password-db = passwd       #指明密码文件路径
authz-db =authz            #访问控制文件
realm = repos              #认证命名空间，subversion会在认证提示里显示，并且作为凭证缓存的关键字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改passwd文件用于创建用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[users]
admin =admin       #  用户名1 = 密码1
user =user         #  用户名2 = 密码2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改authz文件用于管理用户权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> vi authz
 
 按格式输入权限内容
[库名:目录]
用户名1 = 权限
用户名2 = 权限

例如：
[myproject:/]
admin = rw
user =r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>svnserve -d --listen-port 3690  -r /home/svn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看svn服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps - ef|grep svn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>防火墙端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=3690/tcp --permanent
#重启防火墙
systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>访问svn服务</p><p>svn://svn服务器IP地址/myproject</p></li></ol><h2 id="_4、linux离线源码安装redis" tabindex="-1"><a class="header-anchor" href="#_4、linux离线源码安装redis" aria-hidden="true">#</a> 4、linux离线源码安装Redis</h2><blockquote><p>预先安装gcc和make这两个软件</p><p>yum install -y gcc make</p></blockquote>`,16),q={href:"https://download.redis.io/releases/redis-6.0.0.tar.gz",target:"_blank",rel:"noopener noreferrer"},S=a(`<ol><li><p>下载redis压缩包</p></li><li><p>压缩包上传到/usr/local/redis目录</p></li><li><p>解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf redis-6.0.0.tar.gz -C /usr/local/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>切换到/usr/local/redis/redis-6.0.0目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/redis/redis-6.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编译</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装到redis目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make install PREFIX=/usr/local/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改redis.conf配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /usr/local/redis/redis-6.0.0/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#bind 127.0.0.1 #允许所有IP访问
port 6379 #端口号为6379
protected-mode no #关闭保护模式，不然远程还是连接不了
daemonize yes #设为后台运行
#requirepass 123456 #简化开发，没有设置密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动</p><ul><li><p>把解压后的redis-6.0.0/redis.conf复制到/usr/local/redis/bin目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp redis.conf /usr/local/redis/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>后台启动redis, 先cd /usr/local/redis/bin 进入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./redis-server redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>查看进程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps -ef|grep redis

查看本机监听端口
netstat -tunlp|grep redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>常用命令</p><ul><li><p>强行终止redis</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkill redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>开启redis</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./redis-server ./redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>（可选）设置redis开机启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#文件不存在，则会创建此文件
vim /etc/systemd/system/redis.service

[Unit]
Description=redis-server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl常用命令

systemctl daemon-reload #此命令用于重新加载修改后的启动脚本
systemctl start redis.service #启动redis服务
systemctl enable redis.service #设置开机自启动
systemctl disable redis.service #停止开机自启动
systemctl status redis.service #查看服务当前状态
systemctl restart redis.service #重新启动服务
systemctl list-units --type=service #查看所有已启动的服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=6379/tcp --permanent ----添加6379端口
firewall-cmd --reload ----重启防火墙
firewall-cmd --list-port -----查看所有开放端口号
firewall-cmd --query-port=6379/tcp -----查看指定端口是否开放
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_5、linux离线安装libreoffice" tabindex="-1"><a class="header-anchor" href="#_5、linux离线安装libreoffice" aria-hidden="true">#</a> 5、linux离线安装libreoffice</h2><h4 id="_1、下载安装包" tabindex="-1"><a class="header-anchor" href="#_1、下载安装包" aria-hidden="true">#</a> 1、下载安装包</h4>`,3),P={href:"https://www.libreoffice.org/download/download/",target:"_blank",rel:"noopener noreferrer"},L=a(`<p>例如：LibreOffice_7.1.0.2_Linux_x86-64_rpm.tar.gz</p><h4 id="_2、上传至服务器目录" tabindex="-1"><a class="header-anchor" href="#_2、上传至服务器目录" aria-hidden="true">#</a> 2、上传至服务器目录</h4><h4 id="_3、解压文件" tabindex="-1"><a class="header-anchor" href="#_3、解压文件" aria-hidden="true">#</a> 3、解压文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf LibreOffice_7.1.0.2_Linux_x86-64_rpm.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、进入文件rpms目录下" tabindex="-1"><a class="header-anchor" href="#_4、进入文件rpms目录下" aria-hidden="true">#</a> 4、进入文件<code>RPMS</code>目录下</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/libreoffice7.1/LibreOffice_7.1.0.2_Linux_x86-64_rpm/RPMS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5、安装rpm文件" tabindex="-1"><a class="header-anchor" href="#_5、安装rpm文件" aria-hidden="true">#</a> 5、安装<code>rpm</code>文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -Uivh *.rpm --nodeps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6、测试是否安装成功" tabindex="-1"><a class="header-anchor" href="#_6、测试是否安装成功" aria-hidden="true">#</a> 6、测试是否安装成功</h4><blockquote><p>这里指的是启动服务成功</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/bin/libreoffice7.1 --headless --accept=&quot;socket,host=0.0.0.0,port=8100;urp;&quot; --nofirststartwizard
#速度有点慢
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker RPMS]# /usr/bin/libreoffice7.1 --headless --accept=&quot;socket,host=0.0.0.0,port=8100;urp;&quot; --nofirststartwizard
/opt/libreoffice7.1/program/oosplash: error while loading shared libraries: libXinerama.so.1: cannot open shared object file: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：因是刚搭建好的系统，又是离线安装，缺少了相关的依赖</p><p>这里整理了一份完整的离线依赖列表，需全部安装才可启动成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>avahi-libs-0.6.31-20.el7.x86_64.rpm
cairo-1.15.12-4.el7.x86_64.rpm
cups-libs-1.6.3-51.el7.x86_64.rpm
fontconfig-2.13.0-4.3.el7.x86_64.rpm
libglvnd-1.0.1-0.8.git5baa1e5.el7.x86_64.rpm
libglvnd-egl-1.0.1-0.8.git5baa1e5.el7.x86_64.rpm
libglvnd-glx-1.0.1-0.8.git5baa1e5.el7.x86_64.rpm
libICE-1.0.9-9.el7.x86_64.rpm
libSM-1.2.2-2.el7.x86_64.rpm
libX11-1.6.7-2.el7.x86_64.rpm
libXau-1.0.8-2.1.el7.x86_64.rpm
libxcb-1.13-1.el7.x86_64.rpm
libXext-1.3.3-3.el7.x86_64.rpm
libXinerama-1.1.3-2.1.el7.x86_64.rpm
libXrender-0.9.10-1.el7.x86_64.rpm
libpng15-1.5.30-7.el8.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),N={href:"https://pan.baidu.com/s/1bp5uivZyNQZUo9BezIsaUA",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"提取码：6666",-1),I=a(`<p>再接着执行命令，若没有报错，即依赖已全部装上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/bin/libreoffice7.1 --headless --accept=&quot;socket,host=0.0.0.0,port=8100;urp;&quot; --nofirststartwizard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6、linux离线安装nginx" tabindex="-1"><a class="header-anchor" href="#_6、linux离线安装nginx" aria-hidden="true">#</a> 6、linux离线安装Nginx</h2><blockquote><p>源码需安装依赖库：gcc环境、pcre、zlib、openssl</p><ul><li><code>gcc</code>：nginx 编译时依赖 gcc 环境</li><li><code>pcre</code>：nginx 支持重写功能</li><li><code>zlib</code>：zlib 库提供了很多压缩和解压缩的方式，nginx 使用 zlib 对 http 包内容进行 gzip 压缩</li><li><code>openssl</code>： 安全套接字层密码库，用于通信加密，如不需要https访问，可不安装</li></ul></blockquote>`,4),R=e("li",null,[e("p",null,"安装编译工具及库文件"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`yum -y install make zlib zlib-devel gcc-c++ libtool pcre-devel openssl openssl-devel
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])],-1),U={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},V=a(`<li><p>解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zvxf nginx-1.20.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入安装包目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd  nginx-1.20.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>检查平台环境，编译、安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./confiure  #检查平台环境
make  #编译
make install #安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检查版本型号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>其他命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx -s reload            # 重新载入配置文件
/usr/local/nginx/sbin/nginx -s reopen            # 重启 Nginx
/usr/local/nginx/sbin/nginx -s stop              # 停止 Nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,6),X=a(`<p>遇到的问题：</p><ul><li><p>部署的路径没有权限访问</p><blockquote><p>切换至root用户或</p></blockquote></li></ul><p>非Root用户启动</p><ol><li><p>增加权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod 755 nginx
chmod u+s nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user nobody;    //取消注释
error_log  /home/user/ nginx /log/error.log;
pid        /home/user/nginx /nginx.pid;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>PS：在 linux 下，只有以 root 启动的进程才能监听小于 1024 的端口。nginx 如果设置了监听 80 或 443 端口，则一定得以 root 帐号启动。如果只是测试，则可将端口设成 8080 之类大于 1024 的端口。</p></blockquote><h2 id="_7、linux离线安装mysql" tabindex="-1"><a class="header-anchor" href="#_7、linux离线安装mysql" aria-hidden="true">#</a> 7、linux离线安装MySQL</h2><h3 id="_1、rpm安装" tabindex="-1"><a class="header-anchor" href="#_1、rpm安装" aria-hidden="true">#</a> 1、RPM安装</h3>`,7),j=a(`<li><p>检测系统是否自带安装 MySQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -qa | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>卸载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -e mysql　　// 普通删除模式
rpm -e --nodeps mysql　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),B=e("p",null,"下载MySql的RPM文件",-1),C={href:"https://cdn.mysql.com/Downloads/MySQL-5.7/mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar",target:"_blank",rel:"noopener noreferrer"},E=a(`<li><p>解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xf mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar -C /home/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -Uvh *.rpm --nodeps –force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start mysqld
#查看启动状态
service mysqld status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看root密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;temporary password&#39; /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,4);function Q(A,T){const n=d("ExternalLinkIcon");return r(),t("div",null,[u,e("ol",null,[v,e("li",null,[o,e("p",null,[i("下载地址："),e("a",m,[i("http://mirrors.aliyun.com/centos/7/os/x86_64/Packages/"),l(n)])]),p]),b]),x,e("blockquote",null,[g,e("p",null,[i("主要安装包： subversion-1.14.0.tar.gz "),e("a",h,[i("http://subversion.apache.org/download/"),l(n)])]),e("p",null,[i("SVN基础依赖包： apr-1.7.0.tar.gz "),e("a",_,[i("http://apr.apache.org/download.cgi"),l(n)])]),e("p",null,[i("SVN基础依赖包： apr-util-1.6.1.tar.gz "),e("a",f,[i("http://apr.apache.org/download.cgi"),l(n)])]),e("p",null,[i("SVN基础依赖包： zlib-1.2.11.tar.xz "),e("a",k,[i("http://linux.softpedia.com/get/Programming/Libraries/zlib-159.shtml"),l(n)])]),e("p",null,[i("数据库依赖包： sqlite-autoconf-3320300.tar.gz "),e("a",z,[i("http://sqlite.org/download.html"),l(n)])]),e("p",null,[i("apr-util依赖包： expat-2.0.1.tar.gz "),e("a",w,[i("http://www.linuxfromscratch.org/blfs/view/6.3/general/expat.html"),l(n)])])]),y,e("p",null,[i("下载地址："),e("a",q,[i("https://download.redis.io/releases/redis-6.0.0.tar.gz"),l(n)])]),S,e("blockquote",null,[e("p",null,[i("下载地址："),e("a",P,[i("https://www.libreoffice.org/download/download/"),l(n)])])]),L,e("blockquote",null,[e("p",null,[i("链接："),e("a",N,[i("https://pan.baidu.com/s/1bp5uivZyNQZUo9BezIsaUA"),l(n)])]),M]),I,e("ol",null,[R,e("li",null,[e("p",null,[i("源码下载包地址："),e("a",U,[i("https://nginx.org/en/download.html"),l(n)])])]),V]),X,e("ol",null,[j,e("li",null,[B,e("blockquote",null,[e("p",null,[e("a",C,[i("https://cdn.mysql.com/Downloads/MySQL-5.7/mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar"),l(n)])])])]),E])])}const Z=s(c,[["render",Q],["__file","Linux-offline.html.vue"]]);export{Z as default};
