import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as s,a as e,b as i,d as t,e as n}from"./app-aeb4ead9.js";const o="/assets/image-20220515162316604-015c8efd.png",c="/assets/image-20220516210809260-26ed4a53.png",u="/assets/image-20220516223300944-d262389f.png",v="/assets/image-20220516223451044-097784a2.png",b="/assets/image-20220517000356775-de25b101.png",m="/assets/image-20220409200845747-0d633367.png",f={},p=n(`<h3 id="_1、什么是docker网络" tabindex="-1"><a class="header-anchor" href="#_1、什么是docker网络" aria-hidden="true">#</a> 1、什么是Docker网络</h3><ul><li>没有开启Docker网络时的网络状态：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:9e:80:10 brd ff:ff:ff:ff:ff:ff
    inet 192.168.130.132/24 brd 192.168.130.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::987d:a504:45a9:2011/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
39: veth33b55fa@if38: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue master docker0 state UP group default 
    link/ether 2a:e3:37:b2:68:47 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::28e3:37ff:feb2:6847/64 scope link 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开启docker后</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:9e:80:10 brd ff:ff:ff:ff:ff:ff
    inet 192.168.130.132/24 brd 192.168.130.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::987d:a504:45a9:2011/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: docker0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:8a:3f:98:14 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:8aff:fe3f:9814/64 scope link 
       valid_lft forever preferred_lft forever
39: veth33b55fa@if38: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue master docker0 state UP group default 
    link/ether 2a:e3:37:b2:68:47 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::28e3:37ff:feb2:6847/64 scope link 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>会产生一个名为docker0的虚拟网桥</p></blockquote><p>查看Docker网络的情况</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker docker-boot]## docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
012ef5850c2b   bridge    bridge    local
15bd0ffe79b0   host      host      local
28741f9b037c   none      null      local
[root@docker docker-boot]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、基本命令" tabindex="-1"><a class="header-anchor" href="#_2、基本命令" aria-hidden="true">#</a> 2、基本命令</h3><h4 id="_1、所有命令" tabindex="-1"><a class="header-anchor" href="#_1、所有命令" aria-hidden="true">#</a> 1、所有命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker docker-boot]## docker network --help

Usage:  docker network COMMAND

Manage networks

Commands:
  connect     Connect a container to a network
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or more networks
  ls          List networks
  prune       Remove all unused networks
  rm          Remove one or more networks

Run &#39;docker network COMMAND --help&#39; for more information on a command.
[root@docker docker-boot]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、查看网络命令" tabindex="-1"><a class="header-anchor" href="#_2、查看网络命令" aria-hidden="true">#</a> 2、查看网络命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、查看网络源" tabindex="-1"><a class="header-anchor" href="#_3、查看网络源" aria-hidden="true">#</a> 3、查看网络源</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network inspect  XXX网络名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、删除网络" tabindex="-1"><a class="header-anchor" href="#_4、删除网络" aria-hidden="true">#</a> 4、删除网络</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network rm 网络名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全程案例过程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker docker-boot]## docker network create test_network
473cef3a3e4ca58d62898caa93ae97a3772ab0d90325fc7a107082ef8c5a5bce
[root@docker docker-boot]## docker network ls
NETWORK ID     NAME           DRIVER    SCOPE
012ef5850c2b   bridge         bridge    local
15bd0ffe79b0   host           host      local
28741f9b037c   none           null      local
473cef3a3e4c   test_network   bridge    local
[root@docker docker-boot]## docker network rm test_network 
test_network
[root@docker docker-boot]## docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
012ef5850c2b   bridge    bridge    local
15bd0ffe79b0   host      host      local
28741f9b037c   none      null      local
[root@docker docker-boot]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、作用" tabindex="-1"><a class="header-anchor" href="#_3、作用" aria-hidden="true">#</a> 3、作用</h3><blockquote><ul><li>容器间的互联和通信以及端口映射</li><li>容器IP变动时候可以通过服务名直接网络通信而不受到影响</li></ul></blockquote><h3 id="_4、网络模式" tabindex="-1"><a class="header-anchor" href="#_4、网络模式" aria-hidden="true">#</a> 4、网络模式</h3><h4 id="_1、模式类型" tabindex="-1"><a class="header-anchor" href="#_1、模式类型" aria-hidden="true">#</a> 1、模式类型</h4><p><img src="`+o+`" alt="image-20220515162316604" loading="lazy"></p><ul><li><code>bridge模式</code>：使用--network bridge指定，默认使用docker0</li><li><code>host模式</code>：使用--network host指定</li><li><code>none模式</code>：使用--network none指定</li><li><code>container模式</code>：使用--network container:NAME或者容器ID指定</li></ul><h4 id="_2、容器实例内默认网络ip生产规则" tabindex="-1"><a class="header-anchor" href="#_2、容器实例内默认网络ip生产规则" aria-hidden="true">#</a> 2、容器实例内默认网络IP生产规则</h4><h5 id="_1、先启动两个centos容器实例" tabindex="-1"><a class="header-anchor" href="#_1、先启动两个centos容器实例" aria-hidden="true">#</a> 1、先启动两个centos容器实例</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -d --name c1 centos bash
docker run -it -d --name c2 centos bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、2-docker-inspect-容器id-or-容器名字" tabindex="-1"><a class="header-anchor" href="#_2、2-docker-inspect-容器id-or-容器名字" aria-hidden="true">#</a> 2、2 docker inspect 容器ID or 容器名字</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker docker-boot]## docker inspect c1 | tail -n 20
            &quot;Networks&quot;: {
                &quot;bridge&quot;: {
                    &quot;IPAMConfig&quot;: null,
                    &quot;Links&quot;: null,
                    &quot;Aliases&quot;: null,
                    &quot;NetworkID&quot;: &quot;012ef5850c2b3e380a1cb58d9365d60a6ee8ee4b943d8d6ab90aaebd22e1bf62&quot;,
                    &quot;EndpointID&quot;: &quot;257f45d018046dcfa90a5d201c436db20dea41cc9ec2bb58d88576c25143c62f&quot;,
                    &quot;Gateway&quot;: &quot;172.17.0.1&quot;,
                    &quot;IPAddress&quot;: &quot;172.17.0.3&quot;,
                    &quot;IPPrefixLen&quot;: 16,
                    &quot;IPv6Gateway&quot;: &quot;&quot;,
                    &quot;GlobalIPv6Address&quot;: &quot;&quot;,
                    &quot;GlobalIPv6PrefixLen&quot;: 0,
                    &quot;MacAddress&quot;: &quot;02:42:ac:11:00:03&quot;,
                    &quot;DriverOpts&quot;: null
                }
            }
        }
    }
]
[root@docker docker-boot]## docker inspect c2 | tail -n 20
            &quot;Networks&quot;: {
                &quot;bridge&quot;: {
                    &quot;IPAMConfig&quot;: null,
                    &quot;Links&quot;: null,
                    &quot;Aliases&quot;: null,
                    &quot;NetworkID&quot;: &quot;012ef5850c2b3e380a1cb58d9365d60a6ee8ee4b943d8d6ab90aaebd22e1bf62&quot;,
                    &quot;EndpointID&quot;: &quot;3b2688b510738178d64344d97e245b38442fbe91e71d486da2fd1ccf1953ec92&quot;,
                    &quot;Gateway&quot;: &quot;172.17.0.1&quot;,
                    &quot;IPAddress&quot;: &quot;172.17.0.4&quot;,
                    &quot;IPPrefixLen&quot;: 16,
                    &quot;IPv6Gateway&quot;: &quot;&quot;,
                    &quot;GlobalIPv6Address&quot;: &quot;&quot;,
                    &quot;GlobalIPv6PrefixLen&quot;: 0,
                    &quot;MacAddress&quot;: &quot;02:42:ac:11:00:04&quot;,
                    &quot;DriverOpts&quot;: null
                }
            }
        }
    }
]
[root@docker docker-boot]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个示例对应的ip地址分别是：<code>172.17.0.4</code>和<code>172.17.0.3</code></p><h5 id="_3、关闭其中一个实例" tabindex="-1"><a class="header-anchor" href="#_3、关闭其中一个实例" aria-hidden="true">#</a> 3、关闭其中一个实例</h5><blockquote><p>关闭c1，再新建一个c3实例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker docker-boot]## docker stop c1
c1
[root@docker docker-boot]## docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                                       NAMES
010441413dc6   centos         &quot;bash&quot;                   12 minutes ago   Up 12 minutes                                               c2
f1141e4f51b9   90c07658a4b1   &quot;java -jar /xiaobear…&quot;   2 hours ago      Up 2 hours      0.0.0.0:6688-&gt;6688/tcp, :::6688-&gt;6688/tcp   zealous_shockley
[root@docker docker-boot]## docker run -it -d --name c3 centos bash
70066a4f0735eea5a9d4f175bb4d4af4efe516f7d98e919bfbfe9a4699925515
[root@docker docker-boot]## docker inspect c3 | tail -n 20
            &quot;Networks&quot;: {
                &quot;bridge&quot;: {
                    &quot;IPAMConfig&quot;: null,
                    &quot;Links&quot;: null,
                    &quot;Aliases&quot;: null,
                    &quot;NetworkID&quot;: &quot;012ef5850c2b3e380a1cb58d9365d60a6ee8ee4b943d8d6ab90aaebd22e1bf62&quot;,
                    &quot;EndpointID&quot;: &quot;f1f8b9195c706b7e618953746be882c68a11bb36cd689519fc1a0b3ef580b6c9&quot;,
                    &quot;Gateway&quot;: &quot;172.17.0.1&quot;,
                    &quot;IPAddress&quot;: &quot;172.17.0.3&quot;,
                    &quot;IPPrefixLen&quot;: 16,
                    &quot;IPv6Gateway&quot;: &quot;&quot;,
                    &quot;GlobalIPv6Address&quot;: &quot;&quot;,
                    &quot;GlobalIPv6PrefixLen&quot;: 0,
                    &quot;MacAddress&quot;: &quot;02:42:ac:11:00:03&quot;,
                    &quot;DriverOpts&quot;: null
                }
            }
        }
    }
]
[root@docker docker-boot]## docker inspect c2 | tail -n 20
            &quot;Networks&quot;: {
                &quot;bridge&quot;: {
                    &quot;IPAMConfig&quot;: null,
                    &quot;Links&quot;: null,
                    &quot;Aliases&quot;: null,
                    &quot;NetworkID&quot;: &quot;012ef5850c2b3e380a1cb58d9365d60a6ee8ee4b943d8d6ab90aaebd22e1bf62&quot;,
                    &quot;EndpointID&quot;: &quot;3b2688b510738178d64344d97e245b38442fbe91e71d486da2fd1ccf1953ec92&quot;,
                    &quot;Gateway&quot;: &quot;172.17.0.1&quot;,
                    &quot;IPAddress&quot;: &quot;172.17.0.4&quot;,
                    &quot;IPPrefixLen&quot;: 16,
                    &quot;IPv6Gateway&quot;: &quot;&quot;,
                    &quot;GlobalIPv6Address&quot;: &quot;&quot;,
                    &quot;GlobalIPv6PrefixLen&quot;: 0,
                    &quot;MacAddress&quot;: &quot;02:42:ac:11:00:04&quot;,
                    &quot;DriverOpts&quot;: null
                }
            }
        }
    }
]
[root@docker docker-boot]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：<strong>docker容器内部的ip是有可能会发生改变的</strong></p><h4 id="_3、模式案例" tabindex="-1"><a class="header-anchor" href="#_3、模式案例" aria-hidden="true">#</a> 3、模式案例</h4><h5 id="_1、bridge" tabindex="-1"><a class="header-anchor" href="#_1、bridge" aria-hidden="true">#</a> 1、<code>bridge</code></h5><blockquote><p>Docker 服务默认会创建一个 docker0 网桥（其上有一个 docker0 内部接口），该桥接网络的名称为docker0，它在内核层连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到同一个物理网络。Docker 默认指定了 docker0 接口 的 IP 地址和子网掩码，让主机和容器之间可以通过网桥相互通信。</p></blockquote><p><strong>查看 bridge 网络的详细信息，并通过 grep 获取名称项</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network inspect bridge | grep name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker network inspect bridge | grep name
            &quot;com.docker.network.bridge.name&quot;: &quot;docker0&quot;,
[root@docker ~]## 
[root@docker ~]## ifconfig | grep docker
docker0: flags=4099&lt;UP,BROADCAST,MULTICAST&gt;  mtu 1500
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h6><blockquote><p>Docker使用Linux桥接，在宿主机虚拟一个Docker容器网桥(docker0)，Docker启动一个容器时会根据Docker网桥的网段分配给容器一个IP地址，称为Container-IP，同时Docker网桥是每个容器的默认网关。因为在同一宿主机内的容器都接入同一个网桥，这样容器之间就能够通过容器的Container-IP直接通信。</p><p>docker run 的时候，没有指定network的话默认使用的网桥模式就是bridge，使用的就是docker0。在宿主机ifconfig,就可以看到docker0和自己create的network(后面讲)eth0，eth1，eth2……代表网卡一，网卡二，网卡三……，lo代表127.0.0.1，即localhost，inet addr用来表示网卡的IP地址</p><p>网桥docker0创建一对对等虚拟设备接口一个叫veth，另一个叫eth0，成对匹配。</p><ul><li>整个宿主机的网桥模式都是docker0，类似一个交换机有一堆接口，每个接口叫veth，在本地主机和容器内分别创建一个虚拟接口，并让他们彼此联通（这样一对接口叫veth pair）；</li><li>每个容器实例内部也有一块网卡，每个接口叫eth0；</li><li>docker0上面的每个veth匹配某个容器实例内部的eth0，两两配对，一一匹配。</li></ul><p>通过上述，将宿主机上的所有容器都连接到这个内部网络上，两个容器在同一个网络下,会从这个网关下各自拿到分配的ip，此时两个容器的网络是互通的。</p><p><img src="`+c+`" alt="image-20220516210809260" loading="lazy"></p></blockquote><h6 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8081:8080   --name tomcat81 billygoo/tomcat8-jdk8
docker run -d -p 8082:8080   --name tomcat81 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>主机IP，新增了<code>5: veth2dc5f8a@if4</code> 和 <code>7: vethad18b38@if6</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:9e:80:10 brd ff:ff:ff:ff:ff:ff
    inet 192.168.130.132/24 brd 192.168.130.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::987d:a504:45a9:2011/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: docker0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:df:0e:5d:5b brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:dfff:fe0e:5d5b/64 scope link 
       valid_lft forever preferred_lft forever
9: vethe7bf9cb@if8: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue master docker0 state UP group default 
    link/ether 6a:23:3d:79:f7:ea brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::6823:3dff:fe79:f7ea/64 scope link 
       valid_lft forever preferred_lft forever
11: veth7e028d8@if10: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue master docker0 state UP group default 
    link/ether be:01:87:68:c7:c1 brd ff:ff:ff:ff:ff:ff link-netnsid 1
    inet6 fe80::bc01:87ff:fe68:c7c1/64 scope link 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器内部，发现没有ip addr 和ifconfig命令</p><p>可以拉取免修改版<code>docker pull billygoo/tomcat8-jdk8</code></p><p>验证结果：</p><p><img src="`+u+'" alt="image-20220516223300944" loading="lazy"></p><h5 id="_2、host" tabindex="-1"><a class="header-anchor" href="#_2、host" aria-hidden="true">#</a> 2、<code>host</code></h5><blockquote><p>直接使用宿主机的 IP 地址与外界进行通信，不再需要额外进行NAT 转换。</p></blockquote><h6 id="说明-1" tabindex="-1"><a class="header-anchor" href="#说明-1" aria-hidden="true">#</a> 说明</h6><blockquote><p>容器将不会获得一个独立的Network Namespace， 而是和宿主机共用一个Network Namespace。容器将不会虚拟出自己的网卡而是使用宿主机的IP和端口。</p><p><img src="'+v+`" alt="image-20220516223451044" loading="lazy"></p></blockquote><h6 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8083:8080 --network host --name tomcat83 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现了警告，但是并不影响</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -d -p 8083:8080 --network host --name tomcat83 billygoo/tomcat8-jdk8
WARNING: Published ports are discarded when using host network mode
3ef26b95ddc8a507fce7dd83becf360d1a3fe150b436a23246d68cf584b7e026
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>问题：</strong> docke启动时总是遇见标题中的警告 <strong>原因：</strong> docker启动时指定--network=host或-net=host，如果还指定了-p映射端口，那这个时候就会有此警告， 并且通过-p设置的参数将不会起到任何作用，端口号会以主机端口号为主，重复时则递增。 解决: 解决的办法就是使用docker的其他网络模式，例如--network=bridge，这样就可以解决问题，或者直接无视</p></blockquote><p>若想不出现警告，正确的命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d                          --network host --name tomcat83 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -d                          --network host --name tomcat83 billygoo/tomcat8-jdk8
a4dd488fe6958bfe58c0064c7d9082bb86e37f6549592e6d0d7e26b30c222947
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器内部</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker inspect tomcat83 | tail -n 20
            &quot;Networks&quot;: {
                &quot;host&quot;: {
                    &quot;IPAMConfig&quot;: null,
                    &quot;Links&quot;: null,
                    &quot;Aliases&quot;: null,
                    &quot;NetworkID&quot;: &quot;15bd0ffe79b02f0d6afc16e32b9c4246befedde12b2ea733f1f87f02ec24ad83&quot;,
                    &quot;EndpointID&quot;: &quot;4f72c5950edc766e80d6dad4cd9c6798e0760e5eccd53dbab473e33718e3f765&quot;,
                    &quot;Gateway&quot;: &quot;&quot;,
                    &quot;IPAddress&quot;: &quot;&quot;,
                    &quot;IPPrefixLen&quot;: 0,
                    &quot;IPv6Gateway&quot;: &quot;&quot;,
                    &quot;GlobalIPv6Address&quot;: &quot;&quot;,
                    &quot;GlobalIPv6PrefixLen&quot;: 0,
                    &quot;MacAddress&quot;: &quot;&quot;,
                    &quot;DriverOpts&quot;: null
                }
            }
        }
    }
]
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现ip地址是空的，则是访问的宿主机的ip</p><h5 id="_3、none" tabindex="-1"><a class="header-anchor" href="#_3、none" aria-hidden="true">#</a> 3、<code>none</code></h5><blockquote><p>在none模式下，并不为Docker容器进行任何网络配置。 也就是说，这个Docker容器没有网卡、IP、路由等信息，只有一个lo 需要我们自己为Docker容器添加网卡、配置IP等。</p><p><strong>禁用网络功能，只有lo标识(就是127.0.0.1表示本地回环)</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8084:8080 --network none --name tomcat84 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -d -p 8084:8080 --network none --name tomcat84 billygoo/tomcat8-jdk8
944253c3400d267e524f4235d0fc424e4ec9e37790e28cabf66a87014f1ff76d
[root@docker ~]## docker exec -it tomcat84 bash
root@944253c3400d:/usr/local/tomcat## ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在外部容器查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker inspect tomcat84 | tail -n 20
            &quot;Networks&quot;: {
                &quot;none&quot;: {
                    &quot;IPAMConfig&quot;: null,
                    &quot;Links&quot;: null,
                    &quot;Aliases&quot;: null,
                    &quot;NetworkID&quot;: &quot;28741f9b037cace317ec9b6dfad0609fb39b7dcc17e88e617298b6185d25301c&quot;,
                    &quot;EndpointID&quot;: &quot;af0d382eee640ec36b20bd6109a9c9a5e46d4652904fd17253963751d4b41bd1&quot;,
                    &quot;Gateway&quot;: &quot;&quot;,
                    &quot;IPAddress&quot;: &quot;&quot;,
                    &quot;IPPrefixLen&quot;: 0,
                    &quot;IPv6Gateway&quot;: &quot;&quot;,
                    &quot;GlobalIPv6Address&quot;: &quot;&quot;,
                    &quot;GlobalIPv6PrefixLen&quot;: 0,
                    &quot;MacAddress&quot;: &quot;&quot;,
                    &quot;DriverOpts&quot;: null
                }
            }
        }
    }
]
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、container" tabindex="-1"><a class="header-anchor" href="#_4、container" aria-hidden="true">#</a> 4、<code>container</code></h5><blockquote><p>新建的容器和已经存在的一个容器共享一个网络ip配置而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。</p></blockquote><p><img src="`+b+`" alt="image-20220517000356775" loading="lazy"></p><h6 id="错误案例" tabindex="-1"><a class="header-anchor" href="#错误案例" aria-hidden="true">#</a> 错误案例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -d -p 8085:8080                                     --name tomcat85 billygoo/tomcat8-jdk8
fb05b8d4dc8af6f4da53c755a599a5184c80f5ae26944280c6b880698832ed6a
[root@docker ~]## docker run -d -p 8086:8080 --network container:tomcat85 --name tomcat86 billygoo/tomcat8-jdk8
docker: Error response from daemon: conflicting options: port publishing and the container type network mode.
See &#39;docker run --help&#39;.
[root@docker ~]## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>相当于tomcat86和tomcat85公用同一个ip同一个端口，导致端口冲突 本案例用tomcat演示不合适。。。演示坑。。。。。。o(╥﹏╥)o</p><p>换一个镜像给大家演示，</p></blockquote><h6 id="正确案例" tabindex="-1"><a class="header-anchor" href="#正确案例" aria-hidden="true">#</a> 正确案例</h6><blockquote><p>Alpine Linux 是一款独立的、非商业的通用 Linux 发行版，专为追求安全性、简单性和资源效率的用户而设计。 可能很多人没听说过这个 Linux 发行版本，但是经常用 Docker 的朋友可能都用过，因为他小，简单，安全而著称，所以作为基础镜像是非常好的一个选择，可谓是麻雀虽小但五脏俱全，镜像非常小巧，不到 6M的大小，所以特别适合容器打包。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -it                                                    --name alpine1  alpine /bin/sh
Unable to find image &#39;alpine:latest&#39; locally
latest: Pulling from library/alpine
59bf1c3509f3: Pull complete 
Digest: sha256:21a3deaa0d32a8057914f36584b5288d2e5ecc984380bc0118285c70fa8c9300
Status: Downloaded newer image for alpine:latest
/ ## ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
14: eth0@if15: &lt;BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN&gt; mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ac:11:00:05 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.5/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ ## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -it --network container:alpine1 --name alpine2  alpine /bin/sh
/ ## ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
14: eth0@if15: &lt;BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN&gt; mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ac:11:00:05 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.5/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ ## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭alpine1，再看看alpine2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker exec -it alpine2 /bin/sh
/ ## ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
/ ## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、自定义网络" tabindex="-1"><a class="header-anchor" href="#_5、自定义网络" aria-hidden="true">#</a> 5、<code>自定义网络</code></h5><h6 id="_1、过时的link" tabindex="-1"><a class="header-anchor" href="#_1、过时的link" aria-hidden="true">#</a> 1、过时的<code>link</code></h6>`,87),k={href:"https://docs.docker.com/network/links/",target:"_blank",rel:"noopener noreferrer"},q=n(`<h6 id="_2、自定义网络之前" tabindex="-1"><a class="header-anchor" href="#_2、自定义网络之前" aria-hidden="true">#</a> 2、自定义网络之前</h6><p>启动两个实例，然后互ping 对方的ip，发现可用ping通</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker exec -it tomcat81 bash
root@91a8a3567d11:/usr/local/tomcat## ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
8: eth0@if9: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@91a8a3567d11:/usr/local/tomcat## ping 172.17.0.3
PING 172.17.0.3 (172.17.0.3) 56(84) bytes of data.
64 bytes from 172.17.0.3: icmp_seq=1 ttl=64 time=76.2 ms
64 bytes from 172.17.0.3: icmp_seq=2 ttl=64 time=0.096 ms
^C
--- 172.17.0.3 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.096/38.150/76.204/38.054 ms
root@91a8a3567d11:/usr/local/tomcat## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker exec -it tomcat82 bash
root@1cf3a8ebb134:/usr/local/tomcat## ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
10: eth0@if11: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@1cf3a8ebb134:/usr/local/tomcat## ping 172.17.0.2
PING 172.17.0.2 (172.17.0.2) 56(84) bytes of data.
64 bytes from 172.17.0.2: icmp_seq=1 ttl=64 time=9.62 ms
64 bytes from 172.17.0.2: icmp_seq=2 ttl=64 time=0.139 ms
64 bytes from 172.17.0.2: icmp_seq=3 ttl=64 time=0.139 ms
64 bytes from 172.17.0.2: icmp_seq=4 ttl=64 time=0.139 ms
64 bytes from 172.17.0.2: icmp_seq=5 ttl=64 time=0.145 ms
^Z
[1]+  Stopped                 ping 172.17.0.2
root@1cf3a8ebb134:/usr/local/tomcat## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个实例互ping服务名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@91a8a3567d11:/usr/local/tomcat## ping tomcat82
ping: tomcat82: Name or service not known
root@91a8a3567d11:/usr/local/tomcat## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3、自定义网络之后" tabindex="-1"><a class="header-anchor" href="#_3、自定义网络之后" aria-hidden="true">#</a> 3、自定义网络之后</h6><blockquote><p>自定义桥接网络,自定义网络默认使用的是桥接网络bridge</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
718aa0f569ac   bridge    bridge    local
15bd0ffe79b0   host      host      local
28741f9b037c   none      null      local
[root@docker ~]## docker network create xiaobear-network
490b2d2ac003088758a7b0fa6cb8840ffe4c34b935d0e5b0d683ee55b42256b5
[root@docker ~]## docker network ls
NETWORK ID     NAME               DRIVER    SCOPE
718aa0f569ac   bridge             bridge    local
15bd0ffe79b0   host               host      local
28741f9b037c   none               null      local
490b2d2ac003   xiaobear-network   bridge    local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建容器加入上一步新建的自定义网络</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8081:8080 --network xiaobear-network  --name tomcat81 billygoo/tomcat8-jdk8
docker run -d -p 8082:8080 --network xiaobear-network  --name tomcat82 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>互相ping测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@docker ~]## docker run -d -p 8081:8080 --network xiaobear-network  --name tomcat81 billygoo/tomcat8-jdk8
d39d6f0c02b99566a12dbbe05f3f94e4bd63de4103e19b676fa81001bd33e378
[root@docker ~]## docker run -d -p 8082:8080 --network xiaobear-network  --name tomcat82 billygoo/tomcat8-jdk8
8a84293be606ff235d9c24372703dc48db3da4e84903d0e85b7120e855082b5f
[root@docker ~]## docker exec -it tomcat81 bash
root@d39d6f0c02b9:/usr/local/tomcat## ping tomcat82
PING tomcat82 (172.18.0.3) 56(84) bytes of data.
64 bytes from tomcat82.xiaobear-network (172.18.0.3): icmp_seq=1 ttl=64 time=0.699 ms
64 bytes from tomcat82.xiaobear-network (172.18.0.3): icmp_seq=2 ttl=64 time=0.173 ms
64 bytes from tomcat82.xiaobear-network (172.18.0.3): icmp_seq=3 ttl=64 time=0.140 ms
^C
--- tomcat82 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 0.140/0.337/0.699/0.256 ms
root@d39d6f0c02b9:/usr/local/tomcat## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：<strong>自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</strong></p><h3 id="_5、docker平台架构图解" tabindex="-1"><a class="header-anchor" href="#_5、docker平台架构图解" aria-hidden="true">#</a> 5、Docker平台架构图解</h3><h4 id="_1、整体说明" tabindex="-1"><a class="header-anchor" href="#_1、整体说明" aria-hidden="true">#</a> 1、整体说明</h4><blockquote><p>从其架构和运行流程来看，Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。</p></blockquote><p>Docker 运行的基本流程为：</p><ol><li>用户是使用 Docker Client 与 Docker Daemon 建立通信，并发送请求给后者。</li><li>Docker Daemon 作为 Docker 架构中的主体部分，首先提供 Docker Server 的功能使其可以接受 Docker Client 的请求。</li><li>Docker Engine 执行 Docker 内部的一系列工作，每一项工作都是以一个 Job 的形式的存在。</li><li>Job 的运行过程中，当需要容器镜像时，则从 Docker Registry 中下载镜像，并通过镜像管理驱动 Graph driver将下载镜像以Graph的形式存储。</li><li>当需要为 Docker 创建网络环境时，通过网络管理驱动 Network driver 创建并配置 Docker 容器网络环境。</li><li>当需要限制 Docker 容器运行资源或执行用户指令等操作时，则通过 Execdriver 来完成。</li><li>Libcontainer是一项独立的容器管理包，Network driver以及Exec driver都是通过Libcontainer来实现具体对容器进行的操作。</li></ol><h4 id="_2、整体架构" tabindex="-1"><a class="header-anchor" href="#_2、整体架构" aria-hidden="true">#</a> 2、整体架构</h4><p><img src="`+m+'" alt="image-20220517220507212" loading="lazy"></p>',22);function h(g,x){const d=r("ExternalLinkIcon");return a(),s("div",null,[p,e("blockquote",null,[e("p",null,[i("官方文档："),e("a",k,[i("https://docs.docker.com/network/links/"),t(d)])])]),q])}const A=l(f,[["render",h],["__file","network.html.vue"]]);export{A as default};
