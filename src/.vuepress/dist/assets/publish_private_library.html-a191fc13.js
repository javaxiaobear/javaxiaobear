import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as t,a as e,b as a,d as l,e as i}from"./app-f55ccf80.js";const c="/assets/image-20220416160207057-f6b6b63b.png",o={},u=i('<h3 id="_1、本地镜像发布到私有库流程" tabindex="-1"><a class="header-anchor" href="#_1、本地镜像发布到私有库流程" aria-hidden="true">#</a> 1、本地镜像发布到私有库流程</h3><p><img src="'+c+'" alt="image-20220416160207057" loading="lazy"></p><h3 id="_2、什么是docker-registry" tabindex="-1"><a class="header-anchor" href="#_2、什么是docker-registry" aria-hidden="true">#</a> 2、什么是<code>Docker Registry</code></h3>',3),v={href:"https://hub.docker.com/%EF%BC%8C%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E8%AE%BF%E9%97%AE%E5%A4%AA%E6%85%A2%E4%BA%86%E4%B8%94%E5%87%86%E5%A4%87%E8%A2%AB%E9%98%BF%E9%87%8C%E4%BA%91%E5%8F%96%E4%BB%A3%E7%9A%84%E8%B6%8B%E5%8A%BF%EF%BC%8C%E4%B8%8D%E5%A4%AA%E4%B8%BB%E6%B5%81%E3%80%82",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"Dockerhub、阿里云这样的公共镜像仓库可能不太方便，涉及机密的公司不可能提供镜像给公网，所以需要创建一个本地私人仓库供给团队使用，基于公司内部项目构建镜像。",-1),h=e("p",null,"Docker Registry是官方提供的工具，可以用于构建私有镜像仓库",-1),m=i(`<h3 id="_3、将本地镜像推送到私有库" tabindex="-1"><a class="header-anchor" href="#_3、将本地镜像推送到私有库" aria-hidden="true">#</a> 3、将本地镜像推送到私有库</h3><h4 id="_1、下载镜像docker-registry" tabindex="-1"><a class="header-anchor" href="#_1、下载镜像docker-registry" aria-hidden="true">#</a> 1、下载镜像Docker Registry</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull registry 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker pull registry
Using default tag: latest
latest: Pulling from library/registry
79e9f2f55bf5: Pull complete 
0d96da54f60b: Pull complete 
5b27040df4a2: Pull complete 
e2ead8259a04: Pull complete 
3790aef225b9: Pull complete 
Digest: sha256:169211e20e2f2d5d115674681eb79d21a217b296b43374b8e39f97fcf866b375
Status: Downloaded newer image for registry:latest
docker.io/library/registry:latest
[root@docker ~]## docker ../../images
REPOSITORY                                                   TAG       IMAGE ID       CREATED        SIZE
centos1                                                      1.0       08f93c122271   5 days ago     298MB
registry.cn-hangzhou.aliyuncs.com/xiaobear/xiaobear-dcoker   1.0       12e7a58fc36a   5 days ago     231MB
redis                                                        latest    7614ae9453d1   3 months ago   113MB
registry                                                     latest    b8604a3fe854   5 months ago   26.2MB
hello-world                                                  latest    feb5d9fea6a5   6 months ago   13.3kB
centos                                                       latest    5d0da3dc9764   7 months ago   231MB
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、运行私有库registry-相当于本地有个私有docker-hub" tabindex="-1"><a class="header-anchor" href="#_2、运行私有库registry-相当于本地有个私有docker-hub" aria-hidden="true">#</a> 2、运行私有库Registry，相当于本地有个私有Docker hub</h4><p>默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 5000:5000  -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-p</code>：指定端口</p><p><code>-P</code>：随机端口</p><h4 id="_3、案例演示创建一个新镜像-centos安装ifconfig命令" tabindex="-1"><a class="header-anchor" href="#_3、案例演示创建一个新镜像-centos安装ifconfig命令" aria-hidden="true">#</a> 3、案例演示创建一个新镜像，centos安装ifconfig命令</h4><h5 id="_1、从hub上下载ubuntu镜像到本地并成功运行" tabindex="-1"><a class="header-anchor" href="#_1、从hub上下载ubuntu镜像到本地并成功运行" aria-hidden="true">#</a> 1、从Hub上下载ubuntu镜像到本地并成功运行</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull centos
docker run -it centos /bin/bash
[root@docker ~]## docker run -it centos /bin/bash
[root@76d96b17087a /]## ifconfig
bash: ifconfig: command not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、外网连通-安装redis" tabindex="-1"><a class="header-anchor" href="#_2、外网连通-安装redis" aria-hidden="true">#</a> 2、外网连通，安装redis</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3、安装完成-提交镜像" tabindex="-1"><a class="header-anchor" href="#_3、安装完成-提交镜像" aria-hidden="true">#</a> 3、安装完成，提交镜像</h5><blockquote><p>docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名] 命令：在容器外执行，记得</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit -m=&quot;add test&quot; -a=&quot;xiaobear&quot; 846cde73b2fd centos1:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、验证私服上镜像" tabindex="-1"><a class="header-anchor" href="#_4、验证私服上镜像" aria-hidden="true">#</a> 4、验证私服上镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -XGET http://[ip]:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS         PORTS                                       NAMES
a35006a5eb6e   registry   &quot;/entrypoint.sh /etc…&quot;   13 seconds ago   Up 7 seconds   0.0.0.0:5000-&gt;5000/tcp, :::5000-&gt;5000/tcp   tender_buck
846cde73b2fd   centos     &quot;/bin/bash&quot;              7 minutes ago    Up 7 minutes                                               stupefied_wescoff
[root@docker ~]##  curl -XGET http://192.168.130.132:5000/v2/_catalog
{&quot;repositories&quot;:[]}
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、将新镜像centos1-1-0修改符合私服规范的tag" tabindex="-1"><a class="header-anchor" href="#_5、将新镜像centos1-1-0修改符合私服规范的tag" aria-hidden="true">#</a> 5、将新镜像centos1:1.0修改符合私服规范的Tag</h4><blockquote><p>公式： docker tag 镜像:Tag Host:Port/Repository:Tag</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker tag centos1:1.0  192.168.130.132:5000/centos1:1.0
[root@docker ~]## docker ../../images
REPOSITORY                                                   TAG       IMAGE ID       CREATED          SIZE
192.168.130.132:5000/centos1                                 1.0       39cad16c0525   32 minutes ago   231MB
centos1                                                      1.0       39cad16c0525   32 minutes ago   231MB
registry.cn-hangzhou.aliyuncs.com/xiaobear/xiaobear-dcoker   1.0       12e7a58fc36a   6 days ago       231MB
redis                                                        latest    7614ae9453d1   3 months ago     113MB
registry                                                     latest    b8604a3fe854   5 months ago     26.2MB
hello-world                                                  latest    feb5d9fea6a5   6 months ago     13.3kB
centos                                                       latest    5d0da3dc9764   7 months ago     231MB
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、修改配置文件-支持http" tabindex="-1"><a class="header-anchor" href="#_6、修改配置文件-支持http" aria-hidden="true">#</a> 6、修改配置文件，支持http</h4><blockquote><p>docker默认不允许http方式推送镜像，通过配置选项来取消这个限制。</p></blockquote><h5 id="_1、查看配置文件" tabindex="-1"><a class="header-anchor" href="#_1、查看配置文件" aria-hidden="true">#</a> 1、查看配置文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2、修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2、修改配置文件" aria-hidden="true">#</a> 2、修改配置文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;registry-mirrors&quot;: [&quot;https://cmquykjm.mirror.aliyuncs.com&quot;],
  &quot;insecure-registries&quot;: [&quot;192.168.140.132:5000&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[&quot;ip:端口&quot;]:</p><ul><li>ip：自己启动服务器的ip</li><li>端口：映射的端口</li></ul><h5 id="_3、修改之后查看配置并重新启动" tabindex="-1"><a class="header-anchor" href="#_3、修改之后查看配置并重新启动" aria-hidden="true">#</a> 3、修改之后查看配置并重新启动</h5><p>PS：重新启动端口之后，需启动私有仓库</p><h4 id="_7、push到私有仓库" tabindex="-1"><a class="header-anchor" href="#_7、push到私有仓库" aria-hidden="true">#</a> 7、push到私有仓库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                                       NAMES
e36d4066ba00   registry   &quot;/entrypoint.sh /etc…&quot;   5 seconds ago   Up 5 seconds   0.0.0.0:5000-&gt;5000/tcp, :::5000-&gt;5000/tcp   ecstatic_goldstine
[root@docker ~]## docker push 192.168.130.132:5000/centos1:1.0
The push refers to repository [192.168.130.132:5000/centos1]
74ddd0ec08fa: Pushed 
1.0: digest: sha256:df7b98170728e2ae419520239adf7862c15a246a58115ba91ee5ac10dfb7fdb0 size: 529
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、验证私服镜像" tabindex="-1"><a class="header-anchor" href="#_8、验证私服镜像" aria-hidden="true">#</a> 8、验证私服镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -XGET http://192.168.130.132:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## curl -XGET http://192.168.130.132:5000/v2/_catalog
{&quot;repositories&quot;:[&quot;centos1&quot;]}
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、pull到本地并运行" tabindex="-1"><a class="header-anchor" href="#_9、pull到本地并运行" aria-hidden="true">#</a> 9、pull到本地并运行</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker pull 192.168.130.132:5000/centos1:1.0
1.0: Pulling from centos1
a1d0c7532777: Already exists 
Digest: sha256:df7b98170728e2ae419520239adf7862c15a246a58115ba91ee5ac10dfb7fdb0
Status: Downloaded newer image for 192.168.130.132:5000/centos1:1.0
192.168.130.132:5000/centos1:1.0
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function g(p,x){const d=s("ExternalLinkIcon");return r(),t("div",null,[u,e("blockquote",null,[e("p",null,[a("官方Docker Hub地址："),e("a",v,[a("https://hub.docker.com/，中国大陆访问太慢了且准备被阿里云取代的趋势，不太主流。"),l(d)])]),b,h]),m])}const k=n(o,[["render",g],["__file","publish_private_library.html.vue"]]);export{k as default};
