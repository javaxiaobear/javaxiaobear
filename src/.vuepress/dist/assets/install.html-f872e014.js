import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as t,a as e,b as a,d as n,e as i}from"./app-aeb4ead9.js";const c="/assets/image-20220409163721410-4de96ad4.png",o="/assets/image-20220409164025440-e7d35ec7.png",u="/assets/image-20220409200835163-aeca3e99.png",m="/assets/image-20220409200845747-0d633367.png",h="/assets/image-20220409205857761-47c7c0c0.png",v="/assets/image-20220409205935957-932d00a7.png",p="/assets/image-20220409205954722-0adb675c.png",b="/assets/image-20220409210009314-6554f009.png",g="/assets/image-20220409210405190-d29459b2.png",k="/assets/image-20220409210440404-1c211ee9.png",_="/assets/image-20220409210622482-61a1b4b3.png",x="/assets/image-20220409210706973-0cc6838a.png",f={},y=i('<h3 id="_1、前提说明" tabindex="-1"><a class="header-anchor" href="#_1、前提说明" aria-hidden="true">#</a> 1、前提说明</h3><p><img src="'+c+`" alt="image-20220409163721410" loading="lazy"></p><h4 id="_1、前提条件" tabindex="-1"><a class="header-anchor" href="#_1、前提条件" aria-hidden="true">#</a> 1、前提条件</h4><p>目前，CentOS 仅发行版本中的内核支持 Docker。Docker 运行在CentOS 7 (64-bit)上，要求系统为64位、Linux系统内核版本为 3.8以上，这里选用Centos7.x</p><h4 id="_2、查看自己内核" tabindex="-1"><a class="header-anchor" href="#_2、查看自己内核" aria-hidden="true">#</a> 2、查看自己内核</h4><p>uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## cat /etc/redhat-release 
CentOS Linux release 7.8.2003 (Core)
[root@docker ~]## uname -r
3.10.0-1127.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、docker的组成" tabindex="-1"><a class="header-anchor" href="#_2、docker的组成" aria-hidden="true">#</a> 2、Docker的组成</h3><h4 id="_1、镜像image" tabindex="-1"><a class="header-anchor" href="#_1、镜像image" aria-hidden="true">#</a> 1、镜像<code>image</code></h4><blockquote><p>Docker 镜像（Image）就是一个只读的模板。镜像可以用来创建 Docker 容器，一个镜像可以创建很多容器。它也相当于是一个root文件系统。</p><p>比如官方镜像 centos:7 就包含了完整的一套 centos:7 最小系统的 root 文件系统。</p><p>相当于容器的“源代码”，docker镜像文件类似于Java的类模板，而docker容器实例类似于java中new出来的实例对象。</p></blockquote><p><img src="`+o+'" alt="image-20220409164025440" loading="lazy"></p><h4 id="_2、容器container" tabindex="-1"><a class="header-anchor" href="#_2、容器container" aria-hidden="true">#</a> 2、容器<code>container</code></h4><h5 id="_1、从面向对象角度看" tabindex="-1"><a class="header-anchor" href="#_1、从面向对象角度看" aria-hidden="true">#</a> 1、从面向对象角度看</h5><blockquote><p>Docker 利用容器（Container）独立运行的一个或一组应用，应用程序或服务运行在容器里面，容器就类似于一个虚拟化的运行环境，容器是用镜像创建的运行实例。就像是Java中的类和实例对象一样，镜像是静态的定义，容器是镜像运行时的实体。容器为镜像提供了一个标准的和隔离的运行环境，它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台</p></blockquote><h5 id="_2、从容器角度看" tabindex="-1"><a class="header-anchor" href="#_2、从容器角度看" aria-hidden="true">#</a> 2、从容器角度看</h5><blockquote><p>可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。</p></blockquote><h4 id="_3、仓库repository" tabindex="-1"><a class="header-anchor" href="#_3、仓库repository" aria-hidden="true">#</a> 3、仓库<code>repository</code></h4><blockquote><p>仓库（Repository）是集中存放镜像文件的场所。</p></blockquote><p>类似于 Maven仓库，存放各种jar包的地方； github仓库，存放各种git项目的地方； Docker公司提供的官方registry被称为Docker Hub，存放各种镜像模板的地方。</p>',19),D={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},w=i('<h4 id="_4、总结" tabindex="-1"><a class="header-anchor" href="#_4、总结" aria-hidden="true">#</a> 4、总结</h4><p>需要正确的理解仓库/镜像/容器这几个概念:</p><blockquote><p>Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个可交付的运行环境，这个打包好的运行环境就是image镜像文件。只有通过这个镜像文件才能生成Docker容器实例(类似Java中new出来一个对象)。</p><p>image文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。</p><ul><li>镜像文件</li></ul><p>image 文件生成的容器实例，本身也是一个文件，称为镜像文件。</p><ul><li>容器实例</li></ul><p>一个容器运行一种服务，当我们需要的时候，就可以通过docker客户端创建一个对应的运行实例，也就是我们的容器</p><ul><li>仓库</li></ul><p>就是放一堆镜像的地方，我们可以把镜像发布到仓库中，需要的时候再从仓库中拉下来就可以了。</p></blockquote><h3 id="_3、整体架构及底层原理" tabindex="-1"><a class="header-anchor" href="#_3、整体架构及底层原理" aria-hidden="true">#</a> 3、整体架构及底层原理</h3><blockquote><p>Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。</p></blockquote><p><img src="'+u+'" alt="image-20220409200835163" loading="lazy"></p><p><img src="'+m+'" alt="image-20220409200845747" loading="lazy"></p><h3 id="_4、docker安装" tabindex="-1"><a class="header-anchor" href="#_4、docker安装" aria-hidden="true">#</a> 4、Docker安装</h3>',8),q={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"个人总结安装地址：http://xiao_bear.gitee.io/javaxiaobear/install/linux.html#_1%E3%80%81linux%E5%AE%89%E8%A3%85docker",-1),C=i(`<h4 id="_1、卸载系统之前的docker" tabindex="-1"><a class="header-anchor" href="#_1、卸载系统之前的docker" aria-hidden="true">#</a> 1、卸载系统之前的docker</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum remove docker \\
docker-client \\
docker-client-latest \\
docker-common \\
docker-latest \\
docker-latest-logrotate \\
docker-logrotate \\
docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、yum安装gcc相关" tabindex="-1"><a class="header-anchor" href="#_2、yum安装gcc相关" aria-hidden="true">#</a> 2、yum安装gcc相关</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、安装需要的软件包" tabindex="-1"><a class="header-anchor" href="#_3、安装需要的软件包" aria-hidden="true">#</a> 3、安装需要的软件包</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、设置stable镜像仓库" tabindex="-1"><a class="header-anchor" href="#_4、设置stable镜像仓库" aria-hidden="true">#</a> 4、设置stable镜像仓库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>最好使用阿里云镜像,国外下载速度慢
官方镜像：yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
阿里云镜像：yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
已加载插件：fastestmirror, langpacks
adding repo from: http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
grabbing file http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo
repo saved to /etc/yum.repos.d/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、更新yum软件包索引" tabindex="-1"><a class="header-anchor" href="#_5、更新yum软件包索引" aria-hidden="true">#</a> 5、更新yum软件包索引</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6、安装docker-ce" tabindex="-1"><a class="header-anchor" href="#_6、安装docker-ce" aria-hidden="true">#</a> 6、安装DOCKER CE</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7、启动docker" tabindex="-1"><a class="header-anchor" href="#_7、启动docker" aria-hidden="true">#</a> 7、启动docker</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8、测试" tabindex="-1"><a class="header-anchor" href="#_8、测试" aria-hidden="true">#</a> 8、测试</h4><p>查看docker版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>永远的hello-world：没有找到镜像，会自动拉去镜像下载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run hello-world
Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:bfea6278a0a267fad2634554f4f0c6f31981eea41c553fdf5a83e95a41d40c38
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share ../../../images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、卸载" tabindex="-1"><a class="header-anchor" href="#_9、卸载" aria-hidden="true">#</a> 9、卸载</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>停止docker
systemctl stop docker

移除docker组件
yum remove docker-ce docker-ce-cli containerd.io

rm -rf /var/lib/docker

rm -rf /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、阿里云加速镜像" tabindex="-1"><a class="header-anchor" href="#_5、阿里云加速镜像" aria-hidden="true">#</a> 5、阿里云加速镜像</h3><h4 id="_1、阿里云镜像地址" tabindex="-1"><a class="header-anchor" href="#_1、阿里云镜像地址" aria-hidden="true">#</a> 1、阿里云镜像地址</h4>`,25),S={href:"https://promotion.aliyun.com/ntms/act/kubernetes.html",target:"_blank",rel:"noopener noreferrer"},E=i('<h4 id="_2、获得加速器地址连接" tabindex="-1"><a class="header-anchor" href="#_2、获得加速器地址连接" aria-hidden="true">#</a> 2、获得加速器地址连接</h4><ul><li><p>登录</p><p><img src="'+h+'" alt="image-20220409205857761" loading="lazy"></p></li><li><p>控制台</p><p><img src="'+v+'" alt="image-20220409205935957" loading="lazy"></p></li><li><p>选择容器镜像服务</p><p><img src="'+p+'" alt="image-20220409205954722" loading="lazy"></p></li><li><p>获取加速器地址</p><p><img src="'+b+`" alt="image-20220409210009314" loading="lazy"></p></li><li><p>运行命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#分步骤执行
mkdir -p /etc/docker
vim  /etc/docker/daemon.json

 #阿里云
{
  &quot;registry-mirrors&quot;: [&quot;https://｛自已的编码｝.mirror.aliyuncs.com&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_6、hello-world" tabindex="-1"><a class="header-anchor" href="#_6、hello-world" aria-hidden="true">#</a> 6、Hello World</h3><blockquote><p>启动Docker后台容器(测试运行 hello-world)</p></blockquote><p><img src="`+g+'" alt="image-20220409210405190" loading="lazy"></p><p>PS：输出这段提示以后，hello world就会停止运行，容器自动终止。</p><h4 id="run的流程" tabindex="-1"><a class="header-anchor" href="#run的流程" aria-hidden="true">#</a> run的流程</h4><p><img src="'+k+'" alt="image-20220409210440404" loading="lazy"></p><h3 id="_7、底层原理" tabindex="-1"><a class="header-anchor" href="#_7、底层原理" aria-hidden="true">#</a> 7、底层原理</h3><h4 id="_1、为什么docker会比虚拟机快" tabindex="-1"><a class="header-anchor" href="#_1、为什么docker会比虚拟机快" aria-hidden="true">#</a> 1、为什么Docker会比虚拟机快</h4><ol><li><p>docker有着比虚拟机更少的抽象层</p><blockquote><p>由于docker不需要Hypervisor(虚拟机)实现硬件资源虚拟化,运行在docker容器上的程序直接使用的都是实际物理机的硬件资源。因此在CPU、内存利用率上docker将会在效率上有明显优势。</p></blockquote></li><li><p>docker利用的是宿主机的内核,而不需要加载操作系统OS内核</p><blockquote><p>当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。进而避免引寻、加载操作系统内核返回等比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载OS,返回新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返回过程,因此新建一个docker容器只需要几秒钟。</p></blockquote><p><img src="'+_+'" alt="image-20220409210622482" loading="lazy"></p><p><img src="'+x+'" alt="image-20220409210706973" loading="lazy"></p></li></ol>',11);function T(H,O){const r=s("ExternalLinkIcon");return l(),t("div",null,[y,e("p",null,[a("仓库分为公开仓库（Public）和私有仓库（Private）两种形式。最大的公开仓库是 Docker Hub("),e("a",D,[a("https://hub.docker.com/"),n(r)]),a(")， 存放了数量庞大的镜像供用户下载。国内的公开仓库包括阿里云 、网易云等")]),w,e("blockquote",null,[e("p",null,[a("官方安装地址："),e("a",q,[a("https://docs.docker.com/engine/install/centos/"),n(r)])]),z]),C,e("p",null,[e("a",S,[a("https://promotion.aliyun.com/ntms/act/kubernetes.html"),n(r)])]),E])}const j=d(f,[["render",T],["__file","install.html.vue"]]);export{j as default};
