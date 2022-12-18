(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1661:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"windows安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows安装"}},[s._v("#")]),s._v(" Windows安装")]),s._v(" "),a("h2",{attrs:{id:"_1、安装mysql-非安装版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装mysql-非安装版本"}},[s._v("#")]),s._v(" 1、安装mysql(非安装版本)")]),s._v(" "),a("p",[s._v("1、将下载的zip文件解压至相应目录，例如C:\\web\\mysql-8.0.11")]),s._v(" "),a("p",[s._v("2、配置mysql的配置文件，在解压的文件下C:\\web\\mysql-8.0.11创建my.ini配置文件")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 3307 端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3307")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 mysql 的安装目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("basedir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:\\Java-tool\\mysql\\mysql-8.0.26-winx64-3307")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 mysql 数据库的数据的存放目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("datadir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:\\Java-tool\\mysql\\mysql-8.0.26-winx64-3307\\data")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许最大连接数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("200")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connect_errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端使用的字符集默认为 UTF8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("character-set-server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表时将使用的默认存储引擎")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-storage-engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("INNODB")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认使用“mysql_native_password”插件认证")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default_authentication_plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysql_native_password")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("sql_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION")]),s._v("'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 mysql 客户端默认字符集")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 mysql 客户端连接服务端时默认使用的端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3307")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("3、以管理员身份运行cmd，切换目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd C:\\web\\mysql-8.0.26\\bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、初始化数据库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysqld --initialize --console\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行完成后，会输出 root 用户的初始默认密码,如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("2021-12-17T01:33:30.597838Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: q(rGq1!u2P)8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("随机密码："),a("code",[s._v("q(rGq1!u2P)8")])]),s._v(" "),a("p",[s._v("5、安装mysql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysqld install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("6、启动mysql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("net start mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("7、登录mysql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql -u root -p\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入密码即可❗️")]),s._v(" "),a("p",[s._v("忘记密码教程：")]),s._v(" "),a("h2",{attrs:{id:"_2、安装jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装jdk"}},[s._v("#")]),s._v(" 2、安装JDK")]),s._v(" "),a("p",[s._v("1、下载JDk")]),s._v(" "),a("p",[s._v("🔗"),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),a("OutboundLink")],1),s._v("，例如：🇳🇦  jdk-8u311-windows-x64.exe")]),s._v(" "),a("p",[s._v("2、双击默认安装，可自行更改安装地址")]),s._v(" "),a("p",[s._v("3、配置环境变量")]),s._v(" "),a("blockquote",[a("p",[s._v('配置环境变量：右击“我的电脑”--\x3e"属性"--\x3e"高级系统设置"--\x3e"环境变量"')])]),s._v(" "),a("p",[s._v("#1、JAVA_HOME环境变量")]),s._v(" "),a("blockquote",[a("p",[s._v("配置方法：在系统变量里点击新建，变量名填写JAVA_HOME，变量值填写JDK的安装路径。（根据自己的安装路径填写）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("JAVA_HOME  C:\\Program Files\\Java\\jdk1.8.0_251\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("#2、CLASSPATH环境变量")]),s._v(" "),a("blockquote",[a("p",[s._v("配置方法： 新建CLASSPATH变量，变量值为："),a("code",[s._v(".;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;")]),s._v("。CLASSPATH变量名字，可以大写也可以小写。注意不要忘记前面的点和中间的分号。且要在英文输入的状态下的分号和逗号。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("CLASSPATH   .;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("#3、path环境变量")]),s._v(" "),a("blockquote",[a("p",[s._v("在系统变量里找到Path变量，这是系统自带的，不用新建。双击Path，由于原来的变量值已经存在，故应在已有的变量后加上"),a("code",[s._v(";%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin")]),s._v("。注意前面的分号。")])]),s._v(" "),a("p",[s._v("4、测试")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("检验是否配置成功 运行cmd 分别输入java，javac， java -version （java 和 -version 之间有空格）。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、安装maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装maven"}},[s._v("#")]),s._v(" 3、安装maven")]),s._v(" "),a("p",[s._v("1、maven下载")]),s._v(" "),a("blockquote",[a("p",[s._v("Maven 下载地址：http://maven.apache.org/download.cgi")])]),s._v(" "),a("p",[s._v("2、解压至目录")]),s._v(" "),a("blockquote",[a("p",[s._v("E:\\Maven\\apache-maven-3.3.9")])]),s._v(" "),a("p",[s._v("3、添加环境变量")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("添加环境变量"),a("code",[s._v("MAVEN_HOME")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('右键 "计算机"，选择 "属性"，之后点击 "高级系统设置"，点击"环境变量"，来设置环境变量，有以下系统变量需要配置：\n\n新建系统变量 MAVEN_HOME，变量值：E:\\Maven\\apache-maven-3.3.9\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("编辑Path")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("编辑系统变量 Path，添加变量值：;%MAVEN_HOME%\\bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("4、测试")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("检验是否配置成功 运行cmd 输入mvn -v。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4、安装redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装redis"}},[s._v("#")]),s._v(" 4、安装Redis")]),s._v(" "),a("p",[s._v("1、官网下载")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/MicrosoftArchive/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis下载地址"),a("OutboundLink")],1),s._v("，解压至相应目录")]),s._v(" "),a("p",[s._v("2、进入解压目录，启动redis")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-server redis.windows.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、安装服务至windows")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-server --service-install redis.windows.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、安装后的启动服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-server --service-start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、常用命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("卸载服务：redis-server --service-uninstall\n\n开启服务：redis-server --service-start\n\n停止服务：redis-server --service-stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_5、安装oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、安装oracle"}},[s._v("#")]),s._v(" 5、安装Oracle")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下载安装包")]),s._v(" "),a("p",[s._v("Oracle 11g 官网下载地址："),a("a",{attrs:{href:"http://www.oracle.com/technetwork/cn/database/enterprise-edition/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击下载"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("解压")])]),s._v(" "),a("li",[a("p",[s._v("点击setup.exe文件安装")]),s._v(" "),a("p",[a("img",{attrs:{src:e(582),alt:"image-20221114153801564"}})])]),s._v(" "),a("li",[a("p",[s._v("配置更新安全")]),s._v(" "),a("p",[s._v("这里可以不填写电子邮件，点击是即可")]),s._v(" "),a("p",[a("img",{attrs:{src:e(583),alt:"image-20221114105336944"}})])]),s._v(" "),a("li",[a("p",[s._v("安装选项，选择第一个【创建和配置数据库】，然后单击【下一步】按钮")]),s._v(" "),a("p",[a("img",{attrs:{src:e(584),alt:"image-20221114105720638"}})])]),s._v(" "),a("li",[a("p",[s._v("系统类，选择桌面类")]),s._v(" "),a("p",[a("img",{attrs:{src:e(585),alt:"image-20221114105746117"}})])]),s._v(" "),a("li",[a("p",[s._v("典型安装")]),s._v(" "),a("blockquote",[a("p",[s._v("选择数据安装目录，填写管理员密码")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(586),alt:"image-20221114110043350"}})])]),s._v(" "),a("li",[a("p",[s._v("接下来自动安装数据库，大概5分钟左右安装完毕")]),s._v(" "),a("p",[a("img",{attrs:{src:e(587),alt:"image-20221114110203241"}})])]),s._v(" "),a("li",[a("p",[s._v("将文件复制到相应的文件夹并安装 Oracle 组件和服务。完成所需的时间需要几分钟，请耐心等待")]),s._v(" "),a("p",[a("img",{attrs:{src:e(588),alt:"image-20221114110229617"}})])]),s._v(" "),a("li",[a("p",[s._v("等待完成")])])])])}),[],!1,null,null,null);a.default=n.exports},582:function(s,a,e){s.exports=e.p+"assets/img/image-20221114153801564.e194b9ac.png"},583:function(s,a,e){s.exports=e.p+"assets/img/image-20221114105336944.dcdc26a5.png"},584:function(s,a,e){s.exports=e.p+"assets/img/image-20221114105720638.c5f659c9.png"},585:function(s,a,e){s.exports=e.p+"assets/img/image-20221114105746117.65c5cb03.png"},586:function(s,a,e){s.exports=e.p+"assets/img/image-20221114110043350.1a82fc5b.png"},587:function(s,a,e){s.exports=e.p+"assets/img/image-20221114110203241.d4227410.png"},588:function(s,a,e){s.exports=e.p+"assets/img/image-20221114110229617.a77f9ec5.png"}}]);