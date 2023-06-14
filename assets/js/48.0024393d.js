(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1790:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、修改jar里的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、修改jar里的文件"}},[s._v("#")]),s._v(" 1、修改jar里的文件")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("使用jar tvf jar名称 | grep 目标文件名 查询出目标文件在war包中的目录")])]),s._v(" "),a("li",[a("p",[s._v("使用jar xvf jar名称 目标文件名(copy上面查出的全路径) 将目标文件及所在war包中的目录解压到当前路径")])]),s._v(" "),a("li",[a("p",[s._v("修改目标文件的内容，或者将要新的目标文件替换掉提取出来的目标文件")])]),s._v(" "),a("li",[a("p",[s._v("使用jar uvf jar名称 目标文件名（和步骤（2）中的目标文件名相同） 将新目标文件替换到 jar包中")])])]),s._v(" "),a("h3",{attrs:{id:"_1、具体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、具体"}},[s._v("#")]),s._v(" 1、具体")]),s._v(" "),a("p",[s._v("这里以blog.jar为例进行操作")]),s._v(" "),a("p",[s._v("1、首先，查找你需要修改的文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jar tvf blog-0.0.1-SNAPSHOT.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" _fragments.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(696),alt:"image-20210313125528247"}})]),s._v(" "),a("p",[s._v("2、解压文件到当前目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" blog-0.0.1-SNAPSHOT.jar BOOT-INF/classes/templates/_fragments.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(697),alt:"image-20210313125640225"}})]),s._v(" "),a("p",[s._v("3、如果你有替换的文件就直接替换，没有则修改你需要修改的部分")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" _fragments.html\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 文件 目标文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("4、将修改的新文件替换到jar包中")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uvf")]),s._v(" blog-0.0.1-SNAPSHOT.jar BOOT-INF/classes/templates/_fragments.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(698),alt:"image-20210313125921875"}})]),s._v(" "),a("h2",{attrs:{id:"_2、关于centos-8下载依赖报错问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、关于centos-8下载依赖报错问题"}},[s._v("#")]),s._v(" 2、关于centos 8下载依赖报错问题")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Error: Failed to download metadata "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" repo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'appstream'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Cannot prepare internal mirrorlist: No URLs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" mirrorlist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("原因")])]),s._v(" "),a("p",[s._v("在2022年1月31日，CentOS团队终于从官方镜像中移除CentOS 8的所有包。")]),s._v(" "),a("p",[s._v("CentOS 8已于2021年12月31日寿终正非，但软件包仍在官方镜像上保留了一段时间。现在他们被转移到"),a("a",{attrs:{href:"https://vault.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vault.centos.org"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("解决方法")])]),s._v(" "),a("p",[s._v("如果你仍然需要运行CentOS 8，你可以在/etc/yum.repos.d中更新一下源。使用"),a("a",{attrs:{href:"http://vault.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vault.centos.org"),a("OutboundLink")],1),s._v("代替"),a("a",{attrs:{href:"http://mirror.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mirror.centos.org"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|mirrorlist=|#mirrorlist=|g"')]),s._v(" /etc/yum.repos.d/CentOS-*\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g"')]),s._v(" /etc/yum.repos.d/CentOS-*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3、启动centos-没有ip-重启网卡失败-服务状态-failed-to-start-lsb-bring-up-down-networking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、启动centos-没有ip-重启网卡失败-服务状态-failed-to-start-lsb-bring-up-down-networking"}},[s._v("#")]),s._v(" 3、启动centos 没有ip，重启网卡失败，服务状态 Failed to start LSB: Bring up/down networking")]),s._v(" "),a("blockquote",[a("p",[s._v("解决方式：禁用NetworkManager")]),s._v(" "),a("ol",[a("li",[s._v("systemctl stop NetworkManager")]),s._v(" "),a("li",[s._v("systemctl disable NetworkManager")]),s._v(" "),a("li",[s._v("systemctl restart network")])])])])}),[],!1,null,null,null);a.default=r.exports},696:function(s,a,t){s.exports=t.p+"assets/img/image-20210313125528247.e430d9d8.png"},697:function(s,a,t){s.exports=t.p+"assets/img/image-20210313125640225.673e9c60.png"},698:function(s,a,t){s.exports=t.p+"assets/img/image-20210313125921875.74ac4eac.png"}}]);