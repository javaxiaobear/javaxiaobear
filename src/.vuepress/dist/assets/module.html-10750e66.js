import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as i}from"./app-aeb4ead9.js";const t="/assets/image78-ef69543e.jpeg",l="/assets/image79-d5447a73.jpeg",o="/assets/image80-3740f101.jpeg",p="/assets/image81-b8e61317.png",r="/assets/image82-1be72c7c.jpeg",c="/assets/image83-ff04d56a.png",d="/assets/image84-a8fe1588.jpeg",n="/assets/image85-af19f001.jpeg",g="/assets/image86-2be0cbc5.png",m="/assets/image87-d3daaf15.png",_="/assets/image88-efb1dbb5.png",h="/assets/image-20221126110255361-3526ad0f.png",u="/assets/image-20221126110308359-54751cfd.png",f="/assets/image94-015c7c7d.png",b="/assets/image95-8116a9ff.png",y="/assets/image96-cb6fde4a.png",z="/assets/image97-ab9c316e.jpeg",j="/assets/image98-fec9ca2e.jpeg",x="/assets/image99-eaec973c.jpeg",E="/assets/image100-a5efee36.png",I="/assets/image101-db73fe5e.jpeg",k="/assets/image102-bd273f9a.png",A="/assets/image103-943597b3.png",D="/assets/image104-b71c8250.png",M="/assets/image105-c7fd27cf.png",v="/assets/image106-7463816a.jpeg",P="/assets/image107-fb6dcdef.jpeg",q="/assets/image108-cc15ed72.png",B={},K=i('<h2 id="_1、idea项目结构" tabindex="-1"><a class="header-anchor" href="#_1、idea项目结构" aria-hidden="true">#</a> 1、IDEA项目结构</h2><h5 id="层级关系" tabindex="-1"><a class="header-anchor" href="#层级关系" aria-hidden="true">#</a> 层级关系：</h5><p>project(工程) - module(模块) - package(包) - class(类)</p><p><strong>具体的：</strong></p><ul><li>一个project中可以创建多个module</li><li>一个module中可以创建多个package</li><li>一个package中可以创建多个class</li></ul><p>这些结构的划分，是为了方便管理功能代码。</p><h2 id="_2、project和module的概念" tabindex="-1"><a class="header-anchor" href="#_2、project和module的概念" aria-hidden="true">#</a> 2、Project和Module的概念</h2><p>在 IntelliJ IDEA 中，提出了Project和Module这两个概念。</p><p><img src="'+t+'" alt="" loading="lazy"></p><p>在 IntelliJ IDEA 中Project是 最顶级的结构单元 ，然后就是Module。目前，主流的大型项目结构基本都是多Module的结构，这类项目一般是 按功能划分 的，比如：user-core-module、user-facade-module和user- hessian-module等等，模块之间彼此可以 相互依赖 ，有着不可分割的业务关系。因此，对于一个Project 来说：</p><ul><li><p>当为单Module项目的时候，这个单独的Module实际上就是一个Project。</p></li><li><p>当为多Module项目的时候，多个模块处于同一个Project之中，此时彼此之间具有 互相依赖 的关联关系。</p></li><li><p>当然多个模块没有建立依赖关系的话，也可以作为单独一个“小项目”运行。</p></li></ul><h2 id="_3、创建module" tabindex="-1"><a class="header-anchor" href="#_3、创建module" aria-hidden="true">#</a> 3、创建Module</h2><p>建议创建“Empty空工程”，然后创建多模块，每一个模块可以独立运行，相当于一个小项目。JavaSE阶段 不涉及到模块之间的依赖。后期再学习模块之间的依赖。</p><p>步骤：</p><ol><li>选择创建模块</li></ol><p><img src="'+l+'" alt="" loading="lazy"></p><ol start="2"><li><p>选择模块类型：这里选择创建Java模块，给模块命名，确定存放位置</p><p><img src="'+o+'" alt="" loading="lazy"></p></li><li><p>模块声明在工程下面</p></li></ol><p><img src="'+p+'" alt="" loading="lazy"></p><h2 id="_4、删除模块" tabindex="-1"><a class="header-anchor" href="#_4、删除模块" aria-hidden="true">#</a> 4、删除模块</h2><ol><li>移除模块</li></ol><p><img src="'+r+'" alt="" loading="lazy"></p><p><img src="'+c+'" alt="" loading="lazy"></p><ol start="2"><li>彻底删除模块</li></ol><p><img src="'+d+'" alt="" loading="lazy"></p><h2 id="_5、导入模块" tabindex="-1"><a class="header-anchor" href="#_5、导入模块" aria-hidden="true">#</a> 5、导入模块</h2><ol><li>将模块 teacher_chapter04 整个的复制到自己IDEA项目的路径下</li></ol><p><img src="'+n+'" alt="" loading="lazy"></p><p>接着打开自己IDEA的项目，会在项目目录下看到拷贝过来的module，只不过不是以模块的方式呈现。</p><p><img src="'+g+'" alt="" loading="lazy"></p><ol start="2"><li>查看Project Structure，选择import module</li></ol><p><img src="'+m+'" alt="" loading="lazy"></p><p><img src="'+_+'" alt="" loading="lazy"></p><ol start="3"><li>选择要导入的module：</li></ol><p><img src="'+h+'" alt="image-20221126110255361" loading="lazy"></p><p><img src="'+u+'" alt="image-20221126110308359" loading="lazy"></p><ol start="4"><li>接着可以一路Next下去，最后选择Overwrite</li></ol><p><img src="'+f+'" alt="" loading="lazy"><img src="'+b+'" alt="" loading="lazy"></p><blockquote><p>最后点击OK即可了。</p></blockquote><h2 id="_6、同时打开两个idea项目工程" tabindex="-1"><a class="header-anchor" href="#_6、同时打开两个idea项目工程" aria-hidden="true">#</a> 6、同时打开两个IDEA项目工程</h2><h4 id="_1、两个idea项目工程效果" tabindex="-1"><a class="header-anchor" href="#_1、两个idea项目工程效果" aria-hidden="true">#</a> 1、两个IDEA项目工程效果</h4><blockquote><p>有些同学想要把上课练习代码和作业代码分开两个IDEA项目工程。</p></blockquote><p><img src="'+y+'" alt="" loading="lazy"><img src="'+z+'" alt="" loading="lazy"></p><h4 id="_2、新建一个idea项目" tabindex="-1"><a class="header-anchor" href="#_2、新建一个idea项目" aria-hidden="true">#</a> 2、新建一个IDEA项目</h4><blockquote><p>注意：第一次需要新建，之后直接打开项目工程即可</p></blockquote><p><img src="'+j+'" alt="" loading="lazy"><img src="'+x+'" alt="" loading="lazy"></p><p><img src="'+E+'" alt="" loading="lazy"></p><p><strong>3、打开两个IDEA项目</strong></p><p><img src="'+I+'" alt="" loading="lazy"><img src="'+k+'" alt="" loading="lazy"></p><p><img src="'+A+'" alt="" loading="lazy"></p><h2 id="_7、导入前几章非idea工程代码" tabindex="-1"><a class="header-anchor" href="#_7、导入前几章非idea工程代码" aria-hidden="true">#</a> 7、导入前几章非IDEA工程代码</h2><h5 id="_1、创建chapter01、chapter02、chapter03等章节的module" tabindex="-1"><a class="header-anchor" href="#_1、创建chapter01、chapter02、chapter03等章节的module" aria-hidden="true">#</a> 1、创建chapter01、chapter02、chapter03等章节的module</h5><p>将相应章节的源文件粘贴到module的src下。</p><p><img src="'+D+'" alt="" loading="lazy"></p><p><img src="'+M+'" alt="" loading="lazy"></p><p>打开其中各个源文件，会发现有乱码。比如：</p><p><img src="'+v+'" alt="" loading="lazy"></p><h5 id="_2、设置编码" tabindex="-1"><a class="header-anchor" href="#_2、设置编码" aria-hidden="true">#</a> 2、设置编码</h5><p>当前项目是UTF-8。如果原来的.java文件都是GBK的（如果原来.java文件有的是GBK，有的是UTF-8就比较 麻烦了）。</p><p>可以单独把这两个模块设置为GBK编码的。</p><p><img src="'+P+'" alt="" loading="lazy"></p><p>改为GBK，确认即可。如图：</p><p><img src="'+q+'" alt="" loading="lazy"></p>',62),G=[K];function J(S,F){return e(),s("div",null,G)}const T=a(B,[["render",J],["__file","module.html.vue"]]);export{T as default};
