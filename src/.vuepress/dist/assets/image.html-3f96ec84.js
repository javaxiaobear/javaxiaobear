import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as s,a,b as e,d as r,e as n}from"./app-aeb4ead9.js";const c="/assets/image-20220410204502597-ee916f9e.png",l="/assets/image-20220410205151462-db9796b6.png",u="/assets/image-20220410215157180-7a57b318.png",m={},h=n('<h3 id="_1、什么是docker镜像" tabindex="-1"><a class="header-anchor" href="#_1、什么是docker镜像" aria-hidden="true">#</a> 1、什么是Docker镜像</h3><blockquote><p>镜像：是一种轻量级、可执行的独立软件包，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好形成一个可交付的运行环境(包括代码、运行时需要的库、环境变量和配置文件等)，这个打包好的运行环境就是image镜像文件。</p><p>只有通过这个镜像文件才能生成Docker容器实例(类似Java中new出来一个对象)。</p></blockquote><h4 id="_1、分层镜像" tabindex="-1"><a class="header-anchor" href="#_1、分层镜像" aria-hidden="true">#</a> 1、分层镜像</h4><p><code>docker pull</code>我们拉取镜像的时候，下载的时候就是多线程在下载，一层一层的下载</p><h4 id="_2、联合文件系统" tabindex="-1"><a class="header-anchor" href="#_2、联合文件系统" aria-hidden="true">#</a> 2、联合文件系统</h4><blockquote><p>UnionFS（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union 文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</p></blockquote><p><strong>特性</strong>：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录</p><h4 id="_3、镜像加速的原理" tabindex="-1"><a class="header-anchor" href="#_3、镜像加速的原理" aria-hidden="true">#</a> 3、镜像加速的原理</h4><p><img src="'+c+`" alt="image-20220410204502597" loading="lazy"></p><blockquote><p>平时我们安装进虚拟机的CentOS都是好几个G，为什么docker这里才200M？？</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker /]## docker ../../images centos
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
centos       latest    5d0da3dc9764   6 months ago   231MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一个精简的OS，rootfs可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供 rootfs 就行了。由此可见对于不同的linux发行版, bootfs基本是一致的, rootfs会有差别, 因此不同的发行版可以公用bootfs。</p><h4 id="_4、docker为什么采用分层镜像" tabindex="-1"><a class="header-anchor" href="#_4、docker为什么采用分层镜像" aria-hidden="true">#</a> 4、Docker为什么采用分层镜像</h4><blockquote><p><strong>镜像分层最大的一个好处就是共享资源，方便复制迁移，就是为了复用</strong>。</p><p>比如说有多个镜像都从相同的 base 镜像构建而来，那么 Docker Host 只需在磁盘上保存一份 base 镜像；同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。</p></blockquote><h3 id="_2、理解" tabindex="-1"><a class="header-anchor" href="#_2、理解" aria-hidden="true">#</a> 2、理解</h3><blockquote><p>Docker镜像层都是只读的，容器层是可写的 当容器启动时，一个新的可写层被加载到镜像的顶部。 这一层通常被称作“容器层”，“容器层”之下的都叫“镜像层”。</p></blockquote><p>所有对容器的改动 - 无论添加、删除、还是修改文件都只会发生在容器层中。只有容器层是可写的，容器层下面的所有镜像层都是只读的。</p><p><img src="`+l+`" alt="image-20220410205151462" loading="lazy"></p><h3 id="_3、commit操作" tabindex="-1"><a class="header-anchor" href="#_3、commit操作" aria-hidden="true">#</a> 3、<code>commit</code>操作</h3><blockquote><p>docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名]</p><p>docker commit提交容器副本使之成为一个新的镜像</p></blockquote><h5 id="案例演示" tabindex="-1"><a class="header-anchor" href="#案例演示" aria-hidden="true">#</a> 案例演示</h5><h5 id="_1、启动centos容器" tabindex="-1"><a class="header-anchor" href="#_1、启动centos容器" aria-hidden="true">#</a> 1、启动centos容器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker /]## docker run -it centos /bin/bash
[root@c7f841ff540c /]## vim a.txt
bash: vim: command not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、安装vim" tabindex="-1"><a class="header-anchor" href="#_2、安装vim" aria-hidden="true">#</a> 2、安装Vim</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@c7f841ff540c /]## yum update
Failed to set locale, defaulting to C.UTF-8
CentOS Linux 8 - AppStream                                                                            54  B/s |  38  B     00:00    
Error: Failed to download metadata for repo &#39;appstream&#39;: Cannot prepare internal mirrorlist: No URLs in mirrorlist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败原因：</p><p>在2022年1月31日，CentOS团队终于从官方镜像中移除CentOS 8的所有包。</p>`,27),p={href:"https://vault.centos.org/",target:"_blank",rel:"noopener noreferrer"},v=a("p",null,[a("strong",null,"解决方法")],-1),b={href:"http://vault.centos.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://mirror.centos.org/",target:"_blank",rel:"noopener noreferrer"},_=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &quot;s|mirrorlist=|#mirrorlist=|g&quot; /etc/yum.repos.d/CentOS-*
sed -i -e &quot;s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g&quot; /etc/yum.repos.d/CentOS-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3、提交新镜像" tabindex="-1"><a class="header-anchor" href="#_3、提交新镜像" aria-hidden="true">#</a> 3、提交新镜像</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit [OPTIONS] 容器ID [REPOSITORY[:TAG]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker /]## docker commit -m=&quot;add vim cmd&quot; -a=&quot;xiaobear&quot; c7f841ff540c centos1:1.0
sha256:08f93c12227128eef1e61d0c064ad1b74f903e4102071528a798389980e69608
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、测试" tabindex="-1"><a class="header-anchor" href="#_4、测试" aria-hidden="true">#</a> 4、测试</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker /]## docker run -it centos1:1.0 /bin/bash
[root@80c4d3b1ea3b /]## vim xiaobear.txt
[root@80c4d3b1ea3b /]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官网是默认下载的centos没有vim命令 我们自己commit构建的镜像，新增加了vim功能，可以成功使用。</p><h3 id="_4、总结" tabindex="-1"><a class="header-anchor" href="#_4、总结" aria-hidden="true">#</a> 4、总结</h3><blockquote><p>Docker中的镜像分层，支持通过扩展现有镜像，创建新的镜像。类似Java继承于一个Base基础类，自己再按需扩展。 新镜像是从 base 镜像一层一层叠加生成的。每安装一个软件，就在现有镜像的基础上增加一层</p></blockquote><p><img src="`+u+'" alt="image-20220410215157180" loading="lazy"></p>',11);function x(f,k){const t=o("ExternalLinkIcon");return d(),s("div",null,[h,a("p",null,[e("CentOS 8已于2021年12月31日寿终正非，但软件包仍在官方镜像上保留了一段时间。现在他们被转移到"),a("a",p,[e("https://vault.centos.org"),r(t)])]),v,a("p",null,[e("如果你仍然需要运行CentOS 8，你可以在/etc/yum.repos.d中更新一下源。使用"),a("a",b,[e("vault.centos.org"),r(t)]),e("代替"),a("a",g,[e("mirror.centos.org"),r(t)]),e("。")]),_])}const O=i(m,[["render",x],["__file","image.html.vue"]]);export{O as default};
