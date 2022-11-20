(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1357:function(_,t,v){"use strict";v.r(t);var s=v(6),a=Object(s.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h2",{attrs:{id:"_1、单体架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、单体架构"}},[_._v("#")]),_._v(" 1、单体架构")]),_._v(" "),s("p",[_._v("公司发展的初期，资金少、用户少，需要的软件产品的数据和并发量都比较小，这个时期大多数的软件系统只需要单一服务器就可以满足需求，所有的业务逻辑都在单一应用系统，单应用、单数据库。数据库部署在和应用相同的虚拟机或服务器上，或者放置在另外一台机器上。此时的架构图如下：")]),_._v(" "),s("p",[s("img",{attrs:{src:v(384),alt:"1587542005178"}}),_._v("          或      "),s("img",{attrs:{src:v(385),alt:"1587541976720"}})]),_._v(" "),s("ul",[s("li",[_._v("操作系统：windows、linux")]),_._v(" "),s("li",[_._v("应用服务器：tomcat、jetty、jboos、apache、weblogic、websphere...")]),_._v(" "),s("li",[_._v("数据库：mysql、oracle、db2...")]),_._v(" "),s("li",[_._v("应用系统：可以用java、php、asp等各种语言开发")])]),_._v(" "),s("p",[_._v("这种架构模式优点很明显：")]),_._v(" "),s("ul",[s("li",[_._v("节省服务器资源，投入少")]),_._v(" "),s("li",[_._v("管理简单：上线、部署、监控、问题排查等都比较简单")]),_._v(" "),s("li",[_._v("开发简单：软件系统功能整合在一起，不需要考虑太多服务依赖等问题，代码管理也比较简单明了。")]),_._v(" "),s("li",[_._v("测试简单")])]),_._v(" "),s("p",[_._v("随着公司和业务进入快速发展时期，软件系统面临来自多方面的考验：")]),_._v(" "),s("p",[s("img",{attrs:{src:v(386),alt:"1587529858713"}})]),_._v(" "),s("p",[_._v("单体架构的缺点也越发的凸显出来：")]),_._v(" "),s("ul",[s("li",[_._v("可用性差： 应用和数据库都是单点，无论应用还是数据库出现问题，整个系统的就会不可用了")]),_._v(" "),s("li",[_._v("稳定性差： 系统耦合度高，新增或者修改任何一个功能，哪怕只是一行代码，也需要重启服务器，此时系统是不可用的")]),_._v(" "),s("li",[_._v("性能差：单一的应用服务器和数据库服务器，性能总会有上限的，当用户变多或者准确的说相同时刻并发访问多时，系统就容易挂掉了")])]),_._v(" "),s("h2",{attrs:{id:"_2、分布式架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、分布式架构"}},[_._v("#")]),_._v(" 2、分布式架构")]),_._v(" "),s("p",[_._v("单体架构有着明显的缺陷，随着系统访问量的增多，这些缺陷越来越凸显，为了解决这些缺陷，架构升级了，变成了分布式架构。分布式，就是多个实例提供服务。下面我们来简单介绍下常见的一些解决方案。")]),_._v(" "),s("h3",{attrs:{id:"_1、应用集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、应用集群"}},[_._v("#")]),_._v(" 1、应用集群")]),_._v(" "),s("p",[s("img",{attrs:{src:v(387),alt:"1587542240498"}})]),_._v(" "),s("ul",[s("li",[_._v("反向代理服务器：把用户请求反向路由到应用服务器，常见的反向代理服务器是Nginx或HAProxy")]),_._v(" "),s("li",[_._v("应用服务器：集群化部署")]),_._v(" "),s("li",[_._v("数据库服务器：主从部署")])]),_._v(" "),s("p",[_._v("架构优点：")]),_._v(" "),s("ul",[s("li",[_._v("可用性高：代理服务器、应用服务器、数据库服务器都是做了集群，当某台机器挂掉后，其他机器能够几乎无感的接替下任务")]),_._v(" "),s("li",[_._v("性能比单体架构高： 用户的请求分发到多个应用服务器上，整体性能接近单体结构的三倍")]),_._v(" "),s("li",[_._v("安全性高： 外网用户访问的是反向代理服务器，应用和数据库隔离在内网中")])]),_._v(" "),s("h3",{attrs:{id:"_2、分布式缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、分布式缓存"}},[_._v("#")]),_._v(" 2、分布式缓存")]),_._v(" "),s("p",[s("img",{attrs:{src:v(388),alt:"1587548812099"}})]),_._v(" "),s("p",[_._v("缓存分为多级缓存，比如本地缓存（JVM中），分布式缓存服务器（Redis集群等）。本地缓存的访问速度更快一些，但是受应用服务器内存限制，其缓存数据量有限，而且会出现和应用程序争用内存的情况。远程分布式缓存可以使用集群的方式，部署大内存的服务器作为专门的缓存服务器，可以在理论上做到不受内存容量限制的缓存服务。常见缓存服务器包括Redis、Memcached等。使用缓存后，数据访问压力得到有效缓解。")]),_._v(" "),s("h3",{attrs:{id:"_3、业务拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、业务拆分"}},[_._v("#")]),_._v(" 3、业务拆分")]),_._v(" "),s("p",[s("img",{attrs:{src:v(389),alt:"1587549937977"}})]),_._v(" "),s("p",[_._v("业务进一步发展，用户越来越多，系统又出现了瓶颈，此时整个电商系统可以做系统拆分了，系统拆分分为水平拆分和垂直拆分。")]),_._v(" "),s("p",[s("strong",[_._v("水平拆分：")])]),_._v(" "),s("p",[_._v("拆分成商品、订单、交易、用户、支付等多个系统，每个系统都都是多台服务器构成的集群。")]),_._v(" "),s("p",[s("strong",[_._v("垂直拆分：")])]),_._v(" "),s("p",[_._v("将一些公共业务和服务，如用户中心拆分成注册登录中心和用户中心，短信、文件、消息等各种公共服务，从业务系统中拆分剥离出来。")]),_._v(" "),s("p",[_._v("这种架构的优势也比较明显，一方面，应用系统增加了，能够响应用户的请求也会变多，另一方面公共服务能够提供给所有的应用使用，达到服务复用的效果。但是大家需要注意的是数据库有可能只是一个，而单一数据库服务器的处理能力必然是有限的，随着用户并发量的持续增多，数据库将会是系统的瓶颈。")]),_._v(" "),s("h3",{attrs:{id:"_4、分库分表和读写分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、分库分表和读写分离"}},[_._v("#")]),_._v(" 4、分库分表和读写分离")]),_._v(" "),s("p",[s("img",{attrs:{src:v(390),alt:"1587549827002"}})]),_._v(" "),s("p",[s("strong",[_._v("读写分离：")])]),_._v(" "),s("p",[_._v("在网站的用户达到一定规模后，数据库因为负载压力过高而成为网站的瓶颈。目前大部分的主流数据库都提供主从热备功能，通过配置数据库的主从关系，可以将一台数据库服务器的数据更新同步到另外的数据库服务器上。网站利用数据库的这一功能，实现数据库读写分离，从而改善数据库负载压力。")]),_._v(" "),s("p",[_._v("应用服务器在写数据的时候，访问主数据库，主数据库通过主从复制机制将数据更新同步到从数据库，这样当应用服务器读数据的时候，就可以通过从数据库获得数据。")]),_._v(" "),s("p",[s("strong",[_._v("分库分表：")])]),_._v(" "),s("p",[_._v("随着数据库中的数据量越来越大，相应的，查询所需要的时间也越来越多，这个时候，相当于数据的处理遇到了瓶颈，另一方面单库发生意外的时候，需要修复的是所有的数据，而多库中的一个库发生意外的时候，只需要修复一个库。基于此，分库分表就成了必然。分库分表的策略很多，如按照用户、订单、交易、商品等进行分库，不同的数据库中按照时间进行分表。")]),_._v(" "),s("p",[_._v("分库分表带来性能上的显著提升，但相应的管理和维护成本也比较高，比如数据库服务器的维护、分表策略的维护。为了便于应用程序访问分库分表、读写分离后的数据库，通常在应用服务器端使用专门的数据访问模块，使数据库的分库分表和读写分离对应用透明。")]),_._v(" "),s("h3",{attrs:{id:"_5、静态化和cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、静态化和cdn"}},[_._v("#")]),_._v(" 5、静态化和CDN")]),_._v(" "),s("p",[s("img",{attrs:{src:v(391),alt:"1587551715324"}})]),_._v(" "),s("p",[_._v("随着网站业务不断发展，用户规模越来越大，和中国复杂的网络环境，不同地区的用户访问网站时，速度差别也极大。为了提供更好的用户体验，留住用户，网站需要加速网站访问速度。主要手段有使用页面的静态化和CDN。")]),_._v(" "),s("p",[_._v("操作方式上把一些页面，比如某些商品的详情信息，在发布商品时将页面静态化，静态化页面和静态资源可以放在CDN服务器，部署在网络服务提供商的机房，用户在访问静态资源时，可以很好的利用CDN的优点，从距离自己最近的网络提供商机房获取数据。")]),_._v(" "),s("h3",{attrs:{id:"_6、异步解耦"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、异步解耦"}},[_._v("#")]),_._v(" 6、异步解耦")]),_._v(" "),s("p",[s("img",{attrs:{src:v(392),alt:"1587552453810"}})]),_._v(" "),s("p",[_._v("应用之间的服务存在互相调用的情况，但有些场景下，并不需要同步调用，比如某个业务完成后，需要短信通知对方，而短信接收的时间晚几秒钟都是可以接受的，此时就不需要同步处理了，我们可以使用消息队列，把发送短信的内容扔到消息队列中，达到异步处理的效果，从而增强业务系统的性能，此时对于服务之间也达到了解耦的功能，服务之间的依赖减少了。")]),_._v(" "),s("h2",{attrs:{id:"_3、微服务架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、微服务架构"}},[_._v("#")]),_._v(" 3、微服务架构")]),_._v(" "),s("p",[_._v("微服务架构是分布式架构的深化，分布式架构偏向于部署和环境，比如上边提到的应用、数据库、缓存等，在多台机器上进行部署，就属于分布式。微服务架构通过"),s("strong",[_._v("业务拆分")]),_._v("实现服务组件化，通过组件组合快速开发系统，业务单一的服务组件又可以独立部署，使得整个系统变得清晰灵活。")]),_._v(" "),s("p",[s("img",{attrs:{src:v(393),alt:"1587556615392"}})]),_._v(" "),s("p",[_._v("大量的分布式服务又使得架构实现面临问题，如服务注册发现，服务统一接入和权限控制，服务的负载均衡，服务配置的集中管理，服务熔断，服务监控等。")]),_._v(" "),s("p",[_._v("所以微服务架构是由这些基础的服务组件和业务微服务组件共同组成：")]),_._v(" "),s("ul",[s("li",[_._v("服务注册发现组件： 进行服务治理")]),_._v(" "),s("li",[_._v("服务网关组件：提供统一入口和权限控制")]),_._v(" "),s("li",[_._v("负载均衡组件：提供客户端或服务器端的负载均衡")]),_._v(" "),s("li",[_._v("集中配置组件：提供服务集中管理")]),_._v(" "),s("li",[_._v("熔断器组件：提供服务熔断")]),_._v(" "),s("li",[_._v("服务追踪组件：提供服务监控")])]),_._v(" "),s("p",[_._v("采用微服务架构后，项目可以快速迭代与持续交付。但是也带了一些弊端，开发人员除了需要关注业务逻辑实现外还需要考虑业务的一系列问题，比如服务注册，服务发现，服务通讯，负载均衡，服务熔断，服务超时等，这些是非常重要的。大多数时候，我们需要依赖第三方库或者组件来提供这些服务，例如Hystrix，Eureka、Zookeeper等组件，在其服务组织中起到了广泛的应用。")])])}),[],!1,null,null,null);t.default=a.exports},384:function(_,t,v){_.exports=v.p+"assets/img/1587542005178.e813c4fb.png"},385:function(_,t,v){_.exports=v.p+"assets/img/1587541976720.5ddaa3eb.png"},386:function(_,t,v){_.exports=v.p+"assets/img/1587529858713.f9a99732.png"},387:function(_,t,v){_.exports=v.p+"assets/img/1587542240498.a11a6511.png"},388:function(_,t,v){_.exports=v.p+"assets/img/1587548812099.4b2e2c54.png"},389:function(_,t,v){_.exports=v.p+"assets/img/1587549937977.b08d562d.png"},390:function(_,t,v){_.exports=v.p+"assets/img/1587549827002.eb29ac9f.png"},391:function(_,t,v){_.exports=v.p+"assets/img/1587551715324.670a6c02.png"},392:function(_,t,v){_.exports=v.p+"assets/img/1587552453810.bbe64287.png"},393:function(_,t,v){_.exports=v.p+"assets/img/1587556615392.b4b0e9e8.png"}}]);