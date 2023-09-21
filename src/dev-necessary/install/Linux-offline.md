---
title: Linux离线安装
---

## 1、linux离线安装gcc

1. 检查是否存在环境

   ```
   rpm -qa | grep gcc-c++ 
   ```

2. 离线下载gcc安装包

   下载地址：http://mirrors.aliyun.com/centos/7/os/x86_64/Packages/

   ```
   mpfr-3.1.1-4.el7.x86_64.rpm
   libmpc-1.0.1-3.el7.x86_64.rpm
   kernel-headers-3.10.0-123.el7.x86_64.rpm
   glibc-headers-2.17-55.el7.x86_64.rpm
   glibc-devel-2.17-55.el7.x86_64.rpm
   cpp-4.8.2-16.el7.x86_64.rpm
   gcc-4.8.2-16.el7.x86_64.rpm
   ```

3. 上传至服务器

4. 进入目录统一安装

   ```
   rpm -Uvh *.rpm --nodeps --force
   ```

5. 验证是否安装成功

   ```
   gcc -v
   g++ -v
   ```



## 2、linux离线安装perl

1. 下载安装包，需先安装gcc环境

2. 解压安装包，目录可指定，不指定，就解压在该目录下

   ```
   tar -zxvf perl-5.26.1.tar.gz -C /[指定的目录]
   ```

3. 检查平台环境

   ```
   ./Configure -des -Dprefix=/[指定的目录]/perl
   ```

4. 编译

   ```
   make
   ```

5. 安装

   ```
   make install
   ```





## 3、linux离线安装svn

> **依赖包：**
>
> 主要安装包：           subversion-1.14.0.tar.gz    http://subversion.apache.org/download/
>
> SVN基础依赖包：   apr-1.7.0.tar.gz                     http://apr.apache.org/download.cgi
>
> SVN基础依赖包：   apr-util-1.6.1.tar.gz              http://apr.apache.org/download.cgi
>
> SVN基础依赖包：   zlib-1.2.11.tar.xz                   http://linux.softpedia.com/get/Programming/Libraries/zlib-159.shtml
>
> 数据库依赖包：       sqlite-autoconf-3320300.tar.gz      http://sqlite.org/download.html
>
> apr-util依赖包：    expat-2.0.1.tar.gz                     http://www.linuxfromscratch.org/blfs/view/6.3/general/expat.html

#### 1、上传至相应目录，解压

```
cd /home/
mkdir svn

压缩包上传到svn，解压
tar -xzvf subversion-1.14.0.tar.gz
tar -xzvf apr-1.7.0.tar.gz
tar -xzvf apr-util-1.6.1.tar.gz
tar -xzvf zlib-1.2.11.tar.xz
tar -xzvf sqlite-autoconf-3320300.tar.gz
tar -xzvf expat-2.0.1.tar.gz
```

#### 2、安装apr

1. 进入apr-1.7.0文件夹下

   ```
   cd apr-1.7.0
   ```

2. 执行安装命令

   ```
   ./configure prefix=/home/svn/apr-1.7.0
   make
   make install
   ```

#### 3、安装apr-util

1. 安装expat库

   ```
   cd expat-2.0.1
   ./configure
   make
   make install
   ```

2. 进入apr-util-1.6.1文件夹下

   ```
   cd apr-util-1.6.1
   ```

3. 安装

   ```
   ./configure prefix=/home/svn/apr-util-1.6.1 --with-apr=/usr/local/apr
   make
   make install
   ```

#### 4、安装zlib

1. 进入zlib-1.2.11文件夹下

   ```
   cd zlib-1.2.11
   ```

2. 安装命令

   ```
   ./configure
   make	
   make install
   ```

#### 5、将sqlite-autoconf-3320300改名为sqlite-amalgamation并移动到subversion-1.14.0文件夹下

```
mv sqlite-autoconf-3320300 ./subversion-1.14.0/sqlite-amalgamation
```

#### 6、安装subversion

1. 进入subversion-1.14.0文件夹下

   ```
   cd subversion-1.14.0
   ```

2. 安装命令

   ```
   ./configure prefix=/home/svn/subversion-1.14.0 --with-apr=/home/svn/apr-1.7.0 --with-apr-util=/home/svn/apr-util-1.6.1 --with-zlib=/home/svn/zlib-1.2.11 --with-lz4=internal --with-utf8proc=internal
   
   make
   make install
   ```

3. 安装完成，添加环境变量path

   ```
   vi .bash_profile 
   PATH=/home/svn/subversion-1.14.0/bin:$PATH
   #生效配置文件
   source .bash_profile
   ```



#### 7、配置SVN仓库

1. 创建库目录

   ```
   mkdir -p myproject
   ```

2. 添加配置文件

   ```
   svnadmin create /home/svn/myproject
   ```

3. 进入配置文件所在目录

   ```
   cd myproject/conf
   vi subversion.conf
   ```

4. 修改配置文件

   ```
   #将文件中以下内容前的删除并顶格
   
   [general]
   anon-access = none         #使非授权用户无法访问
   auth-access = write        #使授权用户有写权限
   password-db = passwd       #指明密码文件路径
   authz-db =authz            #访问控制文件
   realm = repos              #认证命名空间，subversion会在认证提示里显示，并且作为凭证缓存的关键字
   ```

5. 修改passwd文件用于创建用户

   ```
   vi passwd
   ```

   ```
   [users]
   admin =admin       #  用户名1 = 密码1
   user =user         #  用户名2 = 密码2
   ```

6. 修改authz文件用于管理用户权限

   ```
    vi authz
    
    按格式输入权限内容
   [库名:目录]
   用户名1 = 权限
   用户名2 = 权限
   
   例如：
   [myproject:/]
   admin = rw
   user =r
   ```

7. 启动服务

   ```
   svnserve -d --listen-port 3690  -r /home/svn
   ```

8. 查看svn服务

   ```
   ps - ef|grep svn
   ```

9. 防火墙端口

   ```
   firewall-cmd --zone=public --add-port=3690/tcp --permanent
   #重启防火墙
   systemctl restart firewalld
   ```

10. 访问svn服务

    svn://svn服务器IP地址/myproject



## 4、linux离线源码安装Redis

> 预先安装gcc和make这两个软件
>
> yum install -y gcc make

下载地址：https://download.redis.io/releases/redis-6.0.0.tar.gz

1. 下载redis压缩包

2. 压缩包上传到/usr/local/redis目录

3. 解压

   ```
   tar -zxvf redis-6.0.0.tar.gz -C /usr/local/redis
   ```

4. 切换到/usr/local/redis/redis-6.0.0目录

   ```
   cd /usr/local/redis/redis-6.0.0
   ```

5. 编译

   ```
   make
   ```

6. 安装到redis目录下

   ```
   make install PREFIX=/usr/local/redis
   ```

7. 修改redis.conf配置文件

   ```
   vim /usr/local/redis/redis-6.0.0/redis.conf
   ```

   ```
   #bind 127.0.0.1 #允许所有IP访问
   port 6379 #端口号为6379
   protected-mode no #关闭保护模式，不然远程还是连接不了
   daemonize yes #设为后台运行
   #requirepass 123456 #简化开发，没有设置密码
   ```

8. 启动

    - 把解压后的redis-6.0.0/redis.conf复制到/usr/local/redis/bin目录下

      ```
      cp redis.conf /usr/local/redis/bin/
      ```

    - 后台启动redis, 先cd /usr/local/redis/bin 进入

      ```
      ./redis-server redis.conf
      ```

9. 查看进程

   ```
   ps -ef|grep redis
   
   查看本机监听端口
   netstat -tunlp|grep redis
   ```

10. 常用命令

    - 强行终止redis

      ```
      pkill redis-server
      ```

    - 开启redis

      ```
      ./redis-server ./redis.conf
      ```

11. （可选）设置redis开机启动

    ```
    #文件不存在，则会创建此文件
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
    ```

12. 其他命令

    ```
    systemctl常用命令
    
    systemctl daemon-reload #此命令用于重新加载修改后的启动脚本
    systemctl start redis.service #启动redis服务
    systemctl enable redis.service #设置开机自启动
    systemctl disable redis.service #停止开机自启动
    systemctl status redis.service #查看服务当前状态
    systemctl restart redis.service #重新启动服务
    systemctl list-units --type=service #查看所有已启动的服务
    ```

    ```
    firewall-cmd --zone=public --add-port=6379/tcp --permanent ----添加6379端口
    firewall-cmd --reload ----重启防火墙
    firewall-cmd --list-port -----查看所有开放端口号
    firewall-cmd --query-port=6379/tcp -----查看指定端口是否开放
    ```



## 5、linux离线安装libreoffice

#### 1、下载安装包

> 下载地址：https://www.libreoffice.org/download/download/

例如：LibreOffice_7.1.0.2_Linux_x86-64_rpm.tar.gz

#### 2、上传至服务器目录

#### 3、解压文件

```
tar -zxvf LibreOffice_7.1.0.2_Linux_x86-64_rpm.tar.gz
```

#### 4、进入文件`RPMS`目录下

```
cd /opt/libreoffice7.1/LibreOffice_7.1.0.2_Linux_x86-64_rpm/RPMS
```

#### 5、安装`rpm`文件

```
rpm -Uivh *.rpm --nodeps
```

#### 6、测试是否安装成功

> 这里指的是启动服务成功

```
/usr/bin/libreoffice7.1 --headless --accept="socket,host=0.0.0.0,port=8100;urp;" --nofirststartwizard
#速度有点慢
```

```
[root@docker RPMS]# /usr/bin/libreoffice7.1 --headless --accept="socket,host=0.0.0.0,port=8100;urp;" --nofirststartwizard
/opt/libreoffice7.1/program/oosplash: error while loading shared libraries: libXinerama.so.1: cannot open shared object file: No such file or directory
```

PS：因是刚搭建好的系统，又是离线安装，缺少了相关的依赖

这里整理了一份完整的离线依赖列表，需全部安装才可启动成功。

```
avahi-libs-0.6.31-20.el7.x86_64.rpm
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
```

> 链接：https://pan.baidu.com/s/1bp5uivZyNQZUo9BezIsaUA
>
> 提取码：6666

再接着执行命令，若没有报错，即依赖已全部装上

```
/usr/bin/libreoffice7.1 --headless --accept="socket,host=0.0.0.0,port=8100;urp;" --nofirststartwizard
```



## 6、linux离线安装Nginx

> 源码需安装依赖库：gcc环境、pcre、zlib、openssl
>
> - `gcc`：nginx 编译时依赖 gcc 环境
> - `pcre`：nginx 支持重写功能
> - `zlib`：zlib 库提供了很多压缩和解压缩的方式，nginx 使用 zlib 对 http 包内容进行 gzip 压缩
> - `openssl`： 安全套接字层密码库，用于通信加密，如不需要https访问，可不安装

1. 安装编译工具及库文件

   ```
   yum -y install make zlib zlib-devel gcc-c++ libtool pcre-devel openssl openssl-devel
   ```

2. 源码下载包地址：https://nginx.org/en/download.html

3. 解压

   ```
   tar -zvxf nginx-1.20.2.tar.gz
   ```

4. 进入安装包目录

   ```
   cd  nginx-1.20.2
   ```

5. 检查平台环境，编译、安装

   ```
   ./confiure  #检查平台环境
   make  #编译
   make install #安装
   ```

6. 检查版本型号

   ```
   /usr/local/nginx/sbin/nginx -v
   ```

7. 启动nginx

   ```
   /usr/local/nginx/sbin/nginx
   ```

8. 其他命令

   ```
   /usr/local/nginx/sbin/nginx -s reload            # 重新载入配置文件
   /usr/local/nginx/sbin/nginx -s reopen            # 重启 Nginx
   /usr/local/nginx/sbin/nginx -s stop              # 停止 Nginx
   ```



遇到的问题：

- 部署的路径没有权限访问

  > 切换至root用户或



非Root用户启动

1. 增加权限

   ```
   chmod 755 nginx
   chmod u+s nginx
   ```

2. 修改配置

   ```
   vi /usr/local/nginx/conf/nginx.conf
   ```

   ```
   user nobody;    //取消注释
   error_log  /home/user/ nginx /log/error.log;
   pid        /home/user/nginx /nginx.pid;
   ```



> PS：在 linux 下，只有以 root 启动的进程才能监听小于 1024 的端口。nginx 如果设置了监听 80 或 443 端口，则一定得以 root 帐号启动。如果只是测试，则可将端口设成 8080 之类大于 1024 的端口。





## 7、linux离线安装MySQL

### 1、RPM安装

1. 检测系统是否自带安装 MySQL

   ```
   rpm -qa | grep mysql
   ```

2. 卸载

   ```
   rpm -e mysql　　// 普通删除模式
   rpm -e --nodeps mysql　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
   ```

3. 下载MySql的RPM文件

   > https://cdn.mysql.com/Downloads/MySQL-5.7/mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar

4. 解压

   ```
   tar -xf mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar -C /home/mysql/
   ```

5. 安装

   ```
   rpm -Uvh *.rpm --nodeps –force
   ```

6. 启动

   ```
   systemctl start mysqld
   #查看启动状态
   service mysqld status
   ```



7. 查看root密码

   ```
   grep 'temporary password' /var/log/mysqld.log
   ```

