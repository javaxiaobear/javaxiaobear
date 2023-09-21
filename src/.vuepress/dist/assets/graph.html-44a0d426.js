import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-aeb4ead9.js";const t="/assets/image-20210817112211249-46a63000.png",e="/assets/image-20210817112235857-b6649026.png",c="/assets/image-20210817112416243-e0202e54.png",o="/assets/image-20210817112423145-f64ce52f.png",i="/assets/image-20210817113204227-070ed290.png",l="/assets/image-20210817113228805-b9cda2ae.png",u="/assets/image-20210817113243665-ec9f540f.png",d="/assets/image-20210817113858272-cf233ba5.png",k="/assets/image-20210817114347980-834d391b.png",r="/assets/image-20210817115235521-dad2fe7b.png",v="/assets/image-20210817115349035-14af0038.png",m="/assets/image-20210817135440325-31550a1c.png",b="/assets/image-20210817135705268-52989703.png",h="/assets/image-20210817152057498-bd378b60.png",w="/assets/image-20210817152441932-bf47313a.png",g="/assets/image-20210817152641423-0d243f4a.png",y="/assets/image-20210817152721070-133fae7b.png",f={},q=p(`<h3 id="_1、图的定义及分类" tabindex="-1"><a class="header-anchor" href="#_1、图的定义及分类" aria-hidden="true">#</a> 1、图的定义及分类</h3><blockquote><p>图是由一组顶点和一组能够将两个顶点相连的边组成的</p></blockquote><p>特殊的图：</p><blockquote><ol><li>自环：即一条连接一个顶点和其自身的边；</li><li>平行边：连接同一对顶点的两条边；</li></ol></blockquote><p>图的分类</p><blockquote><p>按照连接两个顶点的边的不同，可以把图分为以下两种：</p><ul><li>无向图：边仅仅连接两个顶点，没有其他含义；</li><li>有向图：边不仅连接两个顶点，并且具有方向；</li></ul></blockquote><h3 id="_2、图的相关术语" tabindex="-1"><a class="header-anchor" href="#_2、图的相关术语" aria-hidden="true">#</a> 2、图的相关术语</h3><h4 id="_1、相邻顶点" tabindex="-1"><a class="header-anchor" href="#_1、相邻顶点" aria-hidden="true">#</a> 1、相邻顶点</h4><blockquote><p>当两个顶点通过一条边相连时，我们称这两个顶点是相邻的，并且称这条边依附于这两个顶点。</p></blockquote><h4 id="_2、度" tabindex="-1"><a class="header-anchor" href="#_2、度" aria-hidden="true">#</a> 2、度</h4><blockquote><p>某个顶点的度就是依附于该顶点的边的个数</p></blockquote><h4 id="_3、子图" tabindex="-1"><a class="header-anchor" href="#_3、子图" aria-hidden="true">#</a> 3、子图</h4><blockquote><p>是一幅图的所有边的子集(包含这些边依附的顶点)组成的图；</p></blockquote><h4 id="_4、路径" tabindex="-1"><a class="header-anchor" href="#_4、路径" aria-hidden="true">#</a> 4、路径</h4><blockquote><p>是由边顺序连接的一系列的顶点组成</p></blockquote><h4 id="_5、环" tabindex="-1"><a class="header-anchor" href="#_5、环" aria-hidden="true">#</a> 5、环</h4><blockquote><p>是一条至少含有一条边且终点和起点相同的路径</p></blockquote><h4 id="_6、连通图" tabindex="-1"><a class="header-anchor" href="#_6、连通图" aria-hidden="true">#</a> 6、连通图</h4><blockquote><p>如果图中任意一个顶点都存在一条路径到达另外一个顶点，那么这幅图就称之为连通图</p></blockquote><h4 id="_7、连通子图" tabindex="-1"><a class="header-anchor" href="#_7、连通子图" aria-hidden="true">#</a> 7、连通子图</h4><blockquote><p>一个非连通图由若干连通的部分组成，每一个连通的部分都可以称为该图的连通子图</p></blockquote><h3 id="_3、图的存储结构" tabindex="-1"><a class="header-anchor" href="#_3、图的存储结构" aria-hidden="true">#</a> 3、图的存储结构</h3><blockquote><p>要表示一幅图，只需要表示清楚以下两部分内容即可：</p><ol><li>图中所有的顶点；</li><li>所有连接顶点的边；</li></ol></blockquote><h4 id="_1、邻接矩阵" tabindex="-1"><a class="header-anchor" href="#_1、邻接矩阵" aria-hidden="true">#</a> 1、邻接矩阵</h4><blockquote><ol><li>使用一个VV的二维数组intV adj,把索引的值看做是顶点；*</li><li>如果顶点v和顶点w相连，我们只需要将adjv和adjw的值设置为1,否则设置为0即可。</li></ol></blockquote><p>很明显，邻接矩阵这种存储方式的空间复杂度是V^2的，如果我们处理的问题规模比较大的话，内存空间极有可能不够用。</p><h4 id="_2、邻接表" tabindex="-1"><a class="header-anchor" href="#_2、邻接表" aria-hidden="true">#</a> 2、邻接表</h4><blockquote><p>1.使用一个大小为V的数组 Queue[V] adj，把索引看做是顶点； 2.每个索引处adj[v]存储了一个队列，该队列中存储的是所有与该顶点相邻的其他顶点</p></blockquote><p>很明显，邻接表的空间并不是是线性级别的，所以后面我们一直采用邻接表这种存储形式来表示图。</p><h3 id="_4、图的实现" tabindex="-1"><a class="header-anchor" href="#_4、图的实现" aria-hidden="true">#</a> 4、图的实现</h3><h4 id="_1、图的api设计" tabindex="-1"><a class="header-anchor" href="#_1、图的api设计" aria-hidden="true">#</a> 1、图的API设计</h4><table><thead><tr><th>类名</th><th>Graph</th></tr></thead><tbody><tr><td>构造方法</td><td>Graph(int V)：创建一个包含V个顶点但不包含边的图</td></tr><tr><td>成员方法</td><td>public int V():获取图中顶点的数量<br>public int E():获取图中边的数量<br>public void addEdge(int v,int w):向图中添加一条边 v-w<br>public Queue adj(int v)：获取和顶点v相邻的所有顶点</td></tr><tr><td>成员变量</td><td>private final int V: 记录顶点数量<br>private int E: 记录边数量<br>private Queue[] adj: 邻接表</td></tr></tbody></table><h4 id="_2、实现" tabindex="-1"><a class="header-anchor" href="#_2、实现" aria-hidden="true">#</a> 2、实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Graph</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * :记录顶点数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token class-name">V</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * :记录边数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token class-name">E</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * : 邻接表
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Queue</span><span class="token punctuation">[</span><span class="token punctuation">]</span> adj<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//初始化顶点数量</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>V</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token comment">//初始化边数量</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>E</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//初始化邻接表</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> adj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            adj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取图中顶点的数量
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">V</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取图中边的数量
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">E</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">E</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向图中添加一条边 v-w
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@param</span> <span class="token parameter">w</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">,</span><span class="token keyword">int</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//把w增加到v的链表上，顶点v多了一个相邻点</span>
        <span class="token function">adj</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">adj</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">E</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取和顶点v相邻的所有顶点
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">adj</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GraphTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Graph</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;图中边的数量为：&quot;</span> <span class="token operator">+</span> <span class="token class-name"><span class="token namespace">graph<span class="token punctuation">.</span></span>E</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;图中顶点的数量为：&quot;</span> <span class="token operator">+</span> <span class="token class-name"><span class="token namespace">graph<span class="token punctuation">.</span></span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_5、图的搜索" tabindex="-1"><a class="header-anchor" href="#_5、图的搜索" aria-hidden="true">#</a> 5、图的搜索</h3><p>最经典的算法有：</p><ul><li>深度优先搜索</li><li>广度优先搜索</li></ul><h4 id="_1、深度优先搜索" tabindex="-1"><a class="header-anchor" href="#_1、深度优先搜索" aria-hidden="true">#</a> 1、深度优先搜索</h4><blockquote><p>所谓的深度优先搜索，指的是在搜索时，如果遇到一个结点既有子结点，又有兄弟结点，那么先找子结点，然后找兄弟结点。</p></blockquote><blockquote><p>很明显，在由于边是没有方向的，所以，如果4和5顶点相连，那么4会出现在5的相邻链表中，5也会出现在4的相邻链表中，那么为了不对顶点进行重复搜索，应该要有相应的标记来表示当前顶点有没有搜索过，可以使用一个布尔类型的数组 boolean[V] marked,索引代表顶点，值代表当前顶点是否已经搜索，如果已经搜索，标记为true，如果没有搜索，标记为false；</p></blockquote><h5 id="_1、api设计" tabindex="-1"><a class="header-anchor" href="#_1、api设计" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>DepthFirstSearch</th></tr></thead><tbody><tr><td>构造方法</td><td>DepthFirstSearch(Graph G,int s)：构造深度优先搜索对象，使用深度优先搜索找出G图中s顶点的所有相通顶点</td></tr><tr><td>成员方法</td><td>private void dfs(Graph G, int v)：使用深度优先搜索找出G图中v顶点的所有相通顶点<br>public boolean marked(int w):判断w顶点与s顶点是否相通<br>public int count():获取与顶点s相通的所有顶点的总数</td></tr><tr><td>成员变量</td><td>private boolean[] marked: 索引代表顶点，值表示当前顶点是否已经被搜索<br>private int count：记录有多少个顶点与s顶点相通</td></tr></tbody></table><h5 id="_2、代码实现" tabindex="-1"><a class="header-anchor" href="#_2、代码实现" aria-hidden="true">#</a> 2、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DepthFirstSearch</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 索引代表顶点，值表示当前顶点是否已经被搜索
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> marked<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 记录有多少个顶点与s顶点相通
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 构造深度优先搜索对象，使用深度优先搜索找出G图中s顶点的所有相通顶点
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">s</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DepthFirstSearch</span><span class="token punctuation">(</span><span class="token class-name">Graph</span> <span class="token class-name">G</span><span class="token punctuation">,</span><span class="token keyword">int</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//创建一个和图的顶点数一样大小的布尔数组</span>
        marked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//搜索G图中与顶点s相同的所有顶点</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用深度优先搜索找出G图中v顶点的所有相通顶点
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">Graph</span> <span class="token class-name">G</span><span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//把当前顶点标记为已搜索</span>
        marked<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历v顶点的邻接表，得到每一个顶点i</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> i <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果当前顶点i没有被搜索过，则递归搜索与w顶点相通的其他顶点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>marked<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//相通的顶点数量+1</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断w顶点与s顶点是否相通
     * <span class="token keyword">@param</span> <span class="token parameter">w</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">marked</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> marked<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取与顶点s相通的所有顶点的总数
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DepthFirstSearchTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Graph</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DepthFirstSearch</span> search <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DepthFirstSearch</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;与0相邻的顶点个数：&quot;</span> <span class="token operator">+</span> search<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;0和5是否相邻：&quot;</span> <span class="token operator">+</span> search<span class="token punctuation">.</span><span class="token function">marked</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;0和7是否相邻：&quot;</span> <span class="token operator">+</span> search<span class="token punctuation">.</span><span class="token function">marked</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_2、广度优先搜索" tabindex="-1"><a class="header-anchor" href="#_2、广度优先搜索" aria-hidden="true">#</a> 2、广度优先搜索</h4><blockquote><p>从根结点开始，沿着树的宽度遍历树的结点，如果所有结点被访问，则终止</p></blockquote><h5 id="_1、api设计-1" tabindex="-1"><a class="header-anchor" href="#_1、api设计-1" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>BreadthFirstSearch</th></tr></thead><tbody><tr><td>构造方法</td><td>public BreadthFirstSearch(Graph G,int s)：构造广度优先搜索对象，使用广度优先搜索找到G图中s顶点的所有相邻顶点</td></tr><tr><td>成员方法</td><td>private void bfs(Graph G, int v)：使用广度优先搜索找出G图中v顶点的所有相邻顶点<br>public boolean marked(int w):判断w顶点与s顶点是否相通<br>public int count():获取与顶点s相通的所有顶点的总数</td></tr><tr><td>成员变量</td><td>private boolean[] marked: 索引代表顶点，值表示当前顶点是否已经被搜索<br>private int count：记录有多少个顶点与s顶点相通<br>private Queue waitSearch: 用来存储待搜索邻接表的点</td></tr></tbody></table><h5 id="_2、代码实现-1" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-1" aria-hidden="true">#</a> 2、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BreadthFirstSearch</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * :索引代表顶点，值表示当前顶点是否已经被搜索
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> marked<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 记录有多少个顶点与s顶点相通
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用来存储待搜索邻接表的点
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> waitSearch<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 使用广度优先搜索，找到g图中s顶点的所有相邻顶点
     * <span class="token keyword">@param</span> <span class="token parameter">g</span>
     * <span class="token keyword">@param</span> <span class="token parameter">s</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">BreadthFirstSearch</span><span class="token punctuation">(</span><span class="token class-name">Graph</span> g<span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//创建一个和图一样的boolean数组</span>
        marked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">g<span class="token punctuation">.</span></span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//初始化待搜索的索引</span>
        waitSearch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">bfs</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用广度优先搜索找出G图中v顶点的所有相邻顶点
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token class-name">Graph</span> <span class="token class-name">G</span><span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//标记当前v的搜索状态为true</span>
        marked<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//将当前顶点放入队列中，等待搜索他的邻接表</span>
        waitSearch<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//待搜索的队列不为空</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>waitSearch<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Integer</span> dequeue <span class="token operator">=</span> waitSearch<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//遍历wait顶点的邻接表，得到每一个顶点</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> w <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span>dequeue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">marked</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断w顶点与s顶点是否相通
     * <span class="token keyword">@param</span> <span class="token parameter">w</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">marked</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">marked</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取与顶点s相通的所有顶点的总数
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BreadthFirstSearchTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Graph</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BreadthFirstSearch</span> search <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BreadthFirstSearch</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;与0相邻的顶点个数：&quot;</span> <span class="token operator">+</span> search<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;0和5是否相邻：&quot;</span> <span class="token operator">+</span> search<span class="token punctuation">.</span><span class="token function">marked</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;0和7是否相邻：&quot;</span> <span class="token operator">+</span> search<span class="token punctuation">.</span><span class="token function">marked</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_3、路径查找" tabindex="-1"><a class="header-anchor" href="#_3、路径查找" aria-hidden="true">#</a> 3、路径查找</h4><p>例如在上图上查找顶点0到顶点4的路径用红色标识出来,那么我们可以把该路径表示为 0-2-3-4。</p><h5 id="_1、api设计-2" tabindex="-1"><a class="header-anchor" href="#_1、api设计-2" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>DepthFirstPaths</th></tr></thead><tbody><tr><td>构造方法</td><td>DepthFirstPaths(Graph G,int s)：构造深度优先搜索对象，使用深度优先搜索找出G图中起点为s的所有路径</td></tr><tr><td>成员方法</td><td>private void dfs(Graph G, int v)：使用深度优先搜索找出G图中v顶点的所有相邻顶点<br>public boolean hasPathTo(int v):判断v顶点与s顶点是否存在路径<br>public Stack pathTo(int v):找出从起点s到顶点v的路径(就是该路径经过的顶点)</td></tr><tr><td>成员变量</td><td>private boolean[] marked: 索引代表顶点，值表示当前顶点是否已经被搜索<br>private int s:起点<br>private int[] edgeTo:索引代表顶点，值代表从起点s到当前顶点路径上的最后一个顶点</td></tr></tbody></table><h5 id="_2、代码实现-2" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-2" aria-hidden="true">#</a> 2、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DepthFirstPaths</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 索引代表顶点，值表示当前顶点是否已经被搜索
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> marked<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 起点
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> s<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 索引代表顶点，值代表从起点s到当前顶点路径上的最后一个顶点
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> edgeTo<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 深度优先搜索
     * <span class="token keyword">@param</span> <span class="token parameter">graph</span> 图
     * <span class="token keyword">@param</span> <span class="token parameter">s</span> 起点
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DepthFirstPaths</span><span class="token punctuation">(</span><span class="token class-name">Graph</span> graph<span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//初始化数组</span>
        marked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">graph<span class="token punctuation">.</span></span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        edgeTo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">graph<span class="token punctuation">.</span></span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>s <span class="token operator">=</span> s<span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用深度优先搜索找出G图中v顶点的所有相邻顶点
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">Graph</span> <span class="token class-name">G</span><span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        marked<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//如果当前顶点w没有被搜索过，则将edgeTo[w]设置为v,表示w的前一个顶点为v，并递归搜索与w顶点相通的其他顶点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> w <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>marked<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                edgeTo<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断v顶点与s顶点是否存在路径
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasPathTo</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> marked<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 找出从起点s到顶点v的路径(就是该路径经过的顶点)
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Stack</span> <span class="token function">pathTo</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//当前v顶点与s顶点不连通，所以直接返回null，没有路径</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasPathTo</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//第一次把当前顶点存进去，然后将x变换为到达当前顶点的前一个顶点edgeTo[x],在把前一个顶点存进去，</span>
        <span class="token comment">// 继续将x变化为到达前一个顶点的前一个顶点，继续存，一直到x的值为s为止，相当于逆推法，最后把s放进去</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> v<span class="token punctuation">;</span> i <span class="token operator">!=</span> s <span class="token punctuation">;</span> i <span class="token operator">=</span> edgeTo<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//把当前顶点放入容器</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//把起点s放入容器</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DepthFirstPathsTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">//创建一个BufferReader读取流</span>
        <span class="token class-name">BufferedReader</span> bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">DepthFirstPathsTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;depth_first_search.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取第一行数据</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建图</span>
        <span class="token class-name">Graph</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取城市道路条数（边数）</span>
        <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i1<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> split <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>split<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i3 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>split<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span>i2<span class="token punctuation">,</span>i3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//起点为0</span>
        <span class="token class-name">DepthFirstPaths</span> paths <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DepthFirstPaths</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//查找0-4的路径</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> paths<span class="token punctuation">.</span><span class="token function">pathTo</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> o <span class="token operator">:</span> stack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>o <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//删除最后一个-</span>
        builder<span class="token punctuation">.</span><span class="token function">deleteCharAt</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0-2-3-4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_6、有向图" tabindex="-1"><a class="header-anchor" href="#_6、有向图" aria-hidden="true">#</a> 6、有向图</h3><h4 id="_1、有向图的定义和相关术语" tabindex="-1"><a class="header-anchor" href="#_1、有向图的定义和相关术语" aria-hidden="true">#</a> 1、有向图的定义和相关术语</h4><h5 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义" aria-hidden="true">#</a> 1、定义</h5><blockquote><p>有向图是一副具有方向性的图，是由一组顶点和一组有方向的边组成的，每条方向的边都连着一对有序的顶点。</p></blockquote><h5 id="_2、出度" tabindex="-1"><a class="header-anchor" href="#_2、出度" aria-hidden="true">#</a> 2、出度</h5><blockquote><p>由某个顶点指出的边的个数称为该顶点的出度。</p></blockquote><h5 id="_3、入度" tabindex="-1"><a class="header-anchor" href="#_3、入度" aria-hidden="true">#</a> 3、入度</h5><blockquote><p>指向某个顶点的边的个数称为该顶点的入度。</p></blockquote><h5 id="_4、有向路径" tabindex="-1"><a class="header-anchor" href="#_4、有向路径" aria-hidden="true">#</a> 4、有向路径</h5><blockquote><p>由一系列顶点组成，对于其中的每个顶点都存在一条有向边，从它指向序列中的下一个顶点。</p></blockquote><h5 id="_5、有向环" tabindex="-1"><a class="header-anchor" href="#_5、有向环" aria-hidden="true">#</a> 5、有向环</h5><blockquote><p>一条至少含有一条边，且起点和终点相同的有向路径。</p></blockquote><h5 id="_6、一副有向图中两个顶点v和w可能存在以下四种关系" tabindex="-1"><a class="header-anchor" href="#_6、一副有向图中两个顶点v和w可能存在以下四种关系" aria-hidden="true">#</a> 6、一副有向图中两个顶点v和w可能存在以下四种关系</h5><blockquote><ol><li>没有边相连</li><li>存在从v到w的边v—&gt;w</li><li>存在从w到v的边w—&gt;v</li><li>既存在w到v的边，也存在v到w的边，即双向连接；</li></ol></blockquote><h4 id="_2、api设计" tabindex="-1"><a class="header-anchor" href="#_2、api设计" aria-hidden="true">#</a> 2、API设计</h4><table><thead><tr><th>类名</th><th>Digragh</th></tr></thead><tbody><tr><td>构造方法</td><td>Digraph(int V)：创建一个包含V个顶点但不包含边的有向图</td></tr><tr><td>成员方法</td><td>public int V():获取图中顶点的数量<br>public int E():获取图中边的数量<br>public void addEdge(int v,int w):向有向图中添加一条边 v-&gt;w<br>public Queue adj(int v)：获取由v指出的边所连接的所有顶点<br>private Digraph reverse():该图的反向图</td></tr><tr><td>成员变量</td><td>private final int V: 记录顶点数量<br>private int E: 记录边数量<br>private Queue[] adj: 邻接表</td></tr></tbody></table><h4 id="_3、实现" tabindex="-1"><a class="header-anchor" href="#_3、实现" aria-hidden="true">#</a> 3、实现</h4><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public class Digraph {

    /**
     * 记录顶点数量
     */
    private final int V;

    /**
     * 记录边数量
     */
    private int E;

    /**
     * 邻接表
     */
    private Queue[] adj;

    /**
     * 创建一个包含V个顶点但不包含边的有向图
     * @param v
     */
    public Digraph(int v){
        this.V = v;
        this.E = 0;
        this.adj = new Queue[v];

        for (int i = 0; i &lt; this.adj.length; i++) {
            adj[i] = new Queue&lt;Integer&gt;();
        }
    }

    /**
     * 获取图中顶点的数量
     * @return
     */
    public int V(){
        return V;
    }

    /**
     * 获取图中边的数量
     * @return
     */
    public int E(){
        return E;
    }

    /**
     * 向有向图中添加一条边 v-&gt;w
     * @param v
     * @param w
     */
    public void addEdge(int v,int w){
        //由于有向图中边是有向的，v-&gt;w 边，只需要让w出现在v的邻接表中，而不需要让v出现在w的邻接表中
        adj[v].enqueue(w);
        E++;
    }

    /**
     * 获取由v指出的边所连接的所有顶点
     * @param v
     * @return
     */
    public Queue&lt;Integer&gt; adj(int v){
        return adj[v];
    }

    /**
     * 该图的反向图
     * @return
     */
    private Digraph reverse(){
        Digraph digraph = new Digraph(V);
        for (int i = 0; i &lt; V; i++) {
            //得到原图中的v顶点对应的邻接表,原图中的边为 v-&gt;w,则反向图中边为w-&gt;v;
            for (Integer w : adj(i)) {
                digraph.addEdge(w,i);
            }
        }
        return digraph;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、拓扑排序" tabindex="-1"><a class="header-anchor" href="#_7、拓扑排序" aria-hidden="true">#</a> 7、拓扑排序</h3><blockquote><p>在现实生活中，我们经常会同一时间接到很多任务去完成，但是这些任务的完成是有先后次序的。以我们学习java学科为例，我们需要学习很多知识，但是这些知识在学习的过程中是需要按照先后次序来完成的。从java基础，到jsp/servlet，到ssm，到springboot等是个循序渐进且有依赖的过程。在学习jsp前要首先掌握java基础和html基础，学习ssm框架前要掌握jsp/servlet之类才行。</p></blockquote><p>为了简化问题，我们使用整数为顶点编号的标准模型来表示这个案例：</p><p>拓扑排序</p><blockquote><p>给定一副有向图，将所有的顶点排序，使得所有的有向边均从排在前面的元素指向排在后面的元素，此时就可以明确的表示出每个顶点的优先级。</p></blockquote><h4 id="_1、检测有向图中的环" tabindex="-1"><a class="header-anchor" href="#_1、检测有向图中的环" aria-hidden="true">#</a> 1、检测有向图中的环</h4><blockquote><p>如果学习x课程前必须先学习y课程，学习y课程前必须先学习z课程，学习z课程前必须先学习x课程，那么一定是有问题了，我们就没有办法学习了，因为这三个条件没有办法同时满足。其实这三门课程x、y、z的条件组成了一个环。</p></blockquote><p>因此，如果我们要使用拓扑排序解决优先级问题，首先得保证图中没有环的存在。</p><h5 id="_1、api设计-3" tabindex="-1"><a class="header-anchor" href="#_1、api设计-3" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>DirectedCycle</th></tr></thead><tbody><tr><td>构造方法</td><td>public DirectedCycle(Digraph G)：创建一个检测环对象，检测图G中是否有环</td></tr><tr><td>成员方法</td><td>private void dfs(Digraph G,int v)：基于深度优先搜索，检测图G中是否有环<br>public boolean hasCycle():判断图中是否有环</td></tr><tr><td>成员变量</td><td>private boolean[] marked: 索引代表顶点，值表示当前顶点是否已经被搜索<br>private boolean hasCycle: 记录图中是否有环<br>private boolean[] onStack:索引代表顶点，使用栈的思想，记录当前顶点有没有已经处于正在搜索的有向路径上</td></tr></tbody></table><h5 id="_2、代码实现-3" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-3" aria-hidden="true">#</a> 2、代码实现</h5><p>在API中添加了onStack[] 布尔数组，索引为图的顶点，当我们深度搜索时：</p><ol><li>在如果当前顶点正在搜索，则把对应的onStack数组中的值改为true，标识进栈；</li><li>如果当前顶点搜索完毕，则把对应的onStack数组中的值改为false，标识出栈；</li><li>如果即将要搜索某个顶点，但该顶点已经在栈中，则图中有环；</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectedCycle</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 索引代表顶点，值表示当前顶点是否已经被搜索
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> marked<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 记录图中是否有环
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> hasCycle<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 索引代表顶点，使用栈的思想，记录当前顶点有没有已经处于正在搜索的有向路径上
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> onStack<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建一个检测环对象，检测图G中是否有环
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DirectedCycle</span><span class="token punctuation">(</span><span class="token class-name">Digraph</span> <span class="token class-name">G</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//创建一个和图的顶点数一样大小的marked数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>marked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//默认不存在环</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hasCycle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">//创建一个和图的顶点数一样的onStack数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>onStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果当前顶点没有搜索过，则搜索</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>marked<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 基于深度优先搜索，检测图G中是否有环
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">Digraph</span> <span class="token class-name">G</span><span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//标记当前顶点已被搜索</span>
        marked<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//让当前顶点进栈</span>
        onStack<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历v顶点的邻接表，得到每一个顶点w</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> w <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果当前顶点未被搜索，则搜索该顶点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>marked<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//如果顶点w已经被搜索过，则查看顶点w是否在栈中，如果在，则证明图中有环，修改hasCycle标记，结束循环</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>onStack<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                hasCycle <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        onStack<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断图中是否有环
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> hasCycle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、基于深度优先的顶点排序" tabindex="-1"><a class="header-anchor" href="#_2、基于深度优先的顶点排序" aria-hidden="true">#</a> 2、基于深度优先的顶点排序</h4><blockquote><p>如果要把图中的顶点生成线性序列其实是一件非常简单的事，之前我们学习并使用了多次深度优先搜索，我们会发现其实深度优先搜索有一个特点，那就是在一个连通子图上，每个顶点只会被搜索一次，如果我们能在深度优先搜索的基础上，添加一行代码，只需要将搜索的顶点放入到线性序列的数据结构中，我们就能完成这件事。</p></blockquote><h5 id="_1、api设计-4" tabindex="-1"><a class="header-anchor" href="#_1、api设计-4" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>DepthFirstOrder</th></tr></thead><tbody><tr><td>构造方法</td><td>DepthFirstOrder(Digraph G)：创建一个顶点排序对象，生成顶点线性序列；</td></tr><tr><td>成员方法</td><td>private void dfs(Digraph G,int v)：基于深度优先搜索，生成顶点线性序列<br>public Stack reversePost():获取顶点线性序列</td></tr><tr><td>成员变量</td><td>private boolean[] marked: 索引代表顶点，值表示当前顶点是否已经被搜索<br>private Stack reversePost: 使用栈，存储顶点序列</td></tr></tbody></table><h5 id="_2、顶点排序实现" tabindex="-1"><a class="header-anchor" href="#_2、顶点排序实现" aria-hidden="true">#</a> 2、顶点排序实现</h5><blockquote><p>在API的设计中，我们添加了一个栈reversePost用来存储顶点，当我们深度搜索图时，每搜索完毕一个顶点，把该顶点放入到reversePost中，这样就可以实现顶点排序。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DepthFirstOrder</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 索引代表顶点，值表示当前顶点是否已经被搜索
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> marked<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 使用栈，存储顶点序列
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Stack</span> reversePost<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建一个顶点排序对象，生成顶点线性序列；
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DepthFirstOrder</span><span class="token punctuation">(</span><span class="token class-name">Digraph</span> <span class="token class-name">G</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//初始化</span>
        marked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        reversePost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历图中的每一个顶点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>marked<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 基于深度优先搜索，生成顶点线性序列
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">Digraph</span> <span class="token class-name">G</span><span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//标记当前顶点已被搜索</span>
        marked<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//循环遍历每一个顶点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> w <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>marked<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//当前顶点已经搜索完毕，让当前顶点入栈</span>
        reversePost<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :获取顶点线性序列
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Stack</span> <span class="token function">reversePost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> reversePost<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、拓扑排序实现" tabindex="-1"><a class="header-anchor" href="#_3、拓扑排序实现" aria-hidden="true">#</a> 3、拓扑排序实现</h4><blockquote><p>前面已经实现了环的检测以及顶点排序，那么拓扑排序就很简单了，基于一幅图，先检测有没有环，如果没有环，则调用顶点排序即可。</p></blockquote><h5 id="_1、api设计-5" tabindex="-1"><a class="header-anchor" href="#_1、api设计-5" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>TopoLogical</th></tr></thead><tbody><tr><td>构造方法</td><td>TopoLogical(Digraph G)：构造拓扑排序对象</td></tr><tr><td>成员方法</td><td>public boolean isCycle()：判断图G是否有环<br>public Stack order():获取拓扑排序的所有顶点</td></tr><tr><td>成员变量</td><td>private Stack order: 顶点的拓扑排序</td></tr></tbody></table><h5 id="_2、实现-1" tabindex="-1"><a class="header-anchor" href="#_2、实现-1" aria-hidden="true">#</a> 2、实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TopologicalSort</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 顶点的拓扑排序
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> order<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 构造拓扑排序对象
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">TopologicalSort</span><span class="token punctuation">(</span><span class="token class-name">Digraph</span> <span class="token class-name">G</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//创建检测环对象，检测图G中是否有环</span>
        <span class="token class-name">DirectedCycle</span> dCycle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectedCycle</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>dCycle<span class="token punctuation">.</span><span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//如果没有环，创建顶点排序对象，进行顶点排序</span>
            <span class="token class-name">DepthFirstOrder</span> depthFirstOrder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DepthFirstOrder</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            order <span class="token operator">=</span> depthFirstOrder<span class="token punctuation">.</span><span class="token function">reversePost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断图G是否有环
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isCycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> order <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取拓扑排序的所有顶点
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> order<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TopologicalSortTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建一个有向图</span>
        <span class="token class-name">Digraph</span> digraph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Digraph</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        digraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        digraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        digraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        digraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        digraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        digraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TopologicalSort</span> topologicalSort <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TopologicalSort</span><span class="token punctuation">(</span>digraph<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> order <span class="token operator">=</span> topologicalSort<span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> o <span class="token operator">:</span> order<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>o<span class="token operator">+</span><span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1-&gt;0-&gt;3-&gt;2-&gt;4-&gt;5-&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_8、加权无向图" tabindex="-1"><a class="header-anchor" href="#_8、加权无向图" aria-hidden="true">#</a> 8、加权无向图</h3><blockquote><p>加权无向图是一种为每条边关联一个权重值或是成本的图模型。这种图能够自然地表示许多应用。在一副航空图中，边表示航线，权值则可以表示距离或是费用。在一副电路图中，边表示导线，权值则可能表示导线的长度即成本，或是信号通过这条先所需的时间。此时我们很容易就能想到，最小成本的问题，例如，从西安飞纽约，怎样飞才能使时间成本最低或者是金钱成本最低？ 在下图中，从顶点0到顶点4有三条路径，分别为0-2-3-4,0-2-4,0-5-3-4,那我们如果要通过那条路径到达4顶点最好呢？此时就要考虑，那条路径的成本最低。</p></blockquote><h4 id="_1、加权无向图边的表示" tabindex="-1"><a class="header-anchor" href="#_1、加权无向图边的表示" aria-hidden="true">#</a> 1、加权无向图边的表示</h4><blockquote><p>加权无向图中的边我们就不能简单的使用v-w两个顶点表示了，而必须要给边关联一个权重值，因此我们可以使用对象来描述一条边。</p></blockquote><h5 id="_1、api设计-6" tabindex="-1"><a class="header-anchor" href="#_1、api设计-6" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>Edge implements Comparable</th></tr></thead><tbody><tr><td>构造方法</td><td>Edge(int v,int w,double weight)：通过顶点v和w，以及权重weight值构造一个边对象</td></tr><tr><td>成员方法</td><td>public double weight():获取边的权重值<br>public int either():获取边上的一个点<br>public int other(int vertex)):获取边上除了顶点vertex外的另外一个顶点<br>public int compareTo(Edge that)：比较当前边和参数that边的权重，如果当前边权重大，返回1，如果一样大，返回0，如果当前权重小，返回-1</td></tr><tr><td>成员变量</td><td>private final int v：顶点一<br>private final int w：顶点二<br>private final double weight：当前边的权重</td></tr></tbody></table><h5 id="_2、代码实现-4" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-4" aria-hidden="true">#</a> 2、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Edge</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 顶点一
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> v<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 顶点二
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> w<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 当前边的权重
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">double</span> weight<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Edge</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">double</span> weight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>v <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>w <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取边的权重值
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> weight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取边上的一个点
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取边上除了顶点vertex外的另外一个顶点
     * <span class="token keyword">@param</span> <span class="token parameter">vertex</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">other</span><span class="token punctuation">(</span><span class="token keyword">int</span> vertex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vertex <span class="token operator">==</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> w<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> v<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Edge</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> o<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> o<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、加权无向图的实现" tabindex="-1"><a class="header-anchor" href="#_2、加权无向图的实现" aria-hidden="true">#</a> 2、加权无向图的实现</h4><h5 id="_1、api设计-7" tabindex="-1"><a class="header-anchor" href="#_1、api设计-7" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>EdgeWeightedGraph</th></tr></thead><tbody><tr><td>构造方法</td><td>EdgeWeightedGraph(int V)：创建一个含有V个顶点的空加权无向图</td></tr><tr><td>成员方法</td><td>public int V():获取图中顶点的数量<br>public int E():获取图中边的数量<br>public void addEdge(Edge e):向加权无向图中添加一条边e<br>public Queue adj(int v)：获取和顶点v关联的所有边<br>public Queue edges()：获取加权无向图的所有边</td></tr><tr><td>成员变量</td><td>private final int V: 记录顶点数量<br>private int E: 记录边数量<br>private Queue[] adj: 邻接表</td></tr></tbody></table><h5 id="_2、代码实现-5" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-5" aria-hidden="true">#</a> 2、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EdgeWeightedGraph</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 记录顶点数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token class-name">V</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 记录边数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token class-name">E</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * : 邻接表
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> adj<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">EdgeWeightedGraph</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>V</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>E</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> adj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            adj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取图中顶点的数量
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">V</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取图中边的数量
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">E</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">E</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向加权无向图中添加一条边e
     * <span class="token keyword">@param</span> <span class="token parameter">e</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token class-name">Edge</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取边上的一个顶点</span>
        <span class="token keyword">int</span> v <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取边上的另一个顶点</span>
        <span class="token keyword">int</span> w <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//因为是无向图，所以边e需要同时出现在两个顶点的邻接表中</span>
        adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        adj<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//边的数量+1</span>
        <span class="token class-name">E</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取和顶点v关联的所有边
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> <span class="token function">adj</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取加权无向图的所有边
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> <span class="token function">edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//创建一个队列，存储所有的边</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历顶点，拿到顶点的邻接表</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>V</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Edge</span> edge <span class="token operator">:</span> <span class="token function">adj</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span><span class="token function">other</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">V</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                   queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> queue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、最小生成树" tabindex="-1"><a class="header-anchor" href="#_9、最小生成树" aria-hidden="true">#</a> 9、最小生成树</h3><blockquote><p>之前学习的加权图，我们发现它的边关联了一个权重，那么我们就可以根据这个权重解决最小成本问题，但如何才能找到最小成本对应的顶点和边呢？最小生成树相关算法可以解决。</p></blockquote><h4 id="_1、最小生成树定义及相关约定" tabindex="-1"><a class="header-anchor" href="#_1、最小生成树定义及相关约定" aria-hidden="true">#</a> 1、最小生成树定义及相关约定</h4><blockquote><p>图的生成树是它的一棵含有其所有顶点的无环连通子图，一副加权无向图的最小生成树它的一棵权值(树中所有边的权重之和)最小的生成树</p></blockquote><p><img src="`+t+'" alt="image-20210817112211249" loading="lazy"></p><p>约定：</p><blockquote><p>只考虑连通图。最小生成树的定义说明它只能存在于连通图中，如果图不是连通的，那么分别计算每个连通图子图的最小生成树，合并到一起称为最小生成森林。</p></blockquote><p><img src="'+e+'" alt="image-20210817112235857" loading="lazy"></p><blockquote><p>所有边的权重都各不相同。如果不同的边权重可以相同，那么一副图的最小生成树就可能不唯一了，虽然我们的算法可以处理这种情况，但为了好理解，我们约定所有边的权重都各不相同。</p></blockquote><h5 id="_1、最小生成树的原理" tabindex="-1"><a class="header-anchor" href="#_1、最小生成树的原理" aria-hidden="true">#</a> 1、最小生成树的原理</h5><ol><li><p>用一条边接树中的任意两个顶点都会产生一个新的环；</p><p><img src="'+c+'" alt="image-20210817112416243" loading="lazy"></p></li><li><p>从树中删除任意一条边，将会得到两棵独立的树；</p><p><img src="'+o+'" alt="image-20210817112423145" loading="lazy"></p></li></ol><h5 id="_2、切分定理" tabindex="-1"><a class="header-anchor" href="#_2、切分定理" aria-hidden="true">#</a> 2、切分定理</h5><blockquote><p>要从一副连通图中找出该图的最小生成树，需要通过切分定理完成。</p></blockquote><p><strong>切分</strong>：</p><blockquote><p>将图的所有顶点按照某些规则分为两个非空且没有交集的集合。</p></blockquote><p><strong>横切边</strong>：</p><blockquote><p>连接两个属于不同集合的顶点的边称之为横切边。</p></blockquote><p>例如我们将图中的顶点切分为两个集合，灰色顶点属于一个集合，白色顶点属于另外一个集合，那么效果如下：</p><p><img src="'+i+'" alt="image-20210817113204227" loading="lazy"></p><p><strong>切分定理</strong>：</p><blockquote><p>在一副加权图中，给定任意的切分，它的横切边中的权重最小者必然属于图中的最小生成树。</p></blockquote><p><img src="'+l+'" alt="image-20210817113228805" loading="lazy"></p><p>注意:一次切分产生的多个横切边中，权重最小的边不一定是所有横切边中唯一属于图的最小生成树的边。</p><p><img src="'+u+'" alt="image-20210817113243665" loading="lazy"></p><h4 id="_2、贪心算法" tabindex="-1"><a class="header-anchor" href="#_2、贪心算法" aria-hidden="true">#</a> 2、贪心算法</h4><blockquote><p>贪心算法是计算图的最小生成树的基础算法，它的基本原理就是切分定理，使用切分定理找到最小生成树的一条边，不断的重复直到找到最小生成树的所有边。如果图有V个顶点，那么需要找到V-1条边，就可以表示该图的最小生成树。</p></blockquote><p><img src="'+d+'" alt="image-20210817113858272" loading="lazy"></p><p>计算图的最小生成树的算法有很多种，但这些算法都可以看做是贪心算法的一种特殊情况，这些算法的不同之处在于：<strong>保存切分和判定权重最小的横切边的方式</strong>。</p><h4 id="_3、prim算法" tabindex="-1"><a class="header-anchor" href="#_3、prim算法" aria-hidden="true">#</a> 3、Prim算法</h4><blockquote><p>它的每一步都会为一棵生成中的树添加一条边。一开始这棵树只有一个顶点，然后会向它添加V-1条边，每次总是将下一条连接树中的顶点与不在树中的顶点且权重最小的边加入到树中。</p></blockquote><p><strong>Prim算法的切分规则</strong>：</p><blockquote><p>把最小生成树中的顶点看做是一个集合，把不在最小生成树中的顶点看做是另外一个集合。</p></blockquote><p><img src="'+k+'" alt="image-20210817114347980" loading="lazy"></p><h5 id="_1、api算法" tabindex="-1"><a class="header-anchor" href="#_1、api算法" aria-hidden="true">#</a> 1、API算法</h5><table><thead><tr><th>类名</th><th>PrimMST</th></tr></thead><tbody><tr><td>构造方法</td><td>PrimMST(EdgeWeightedGraph G)：根据一副加权无向图，创建最小生成树计算对象；</td></tr><tr><td>成员方法</td><td>private void visit(EdgeWeightedGraph G, int v)：将顶点v添加到最小生成树中，并且更新数据<br>public Queue edges():获取最小生成树的所有边</td></tr><tr><td>成员变量</td><td>private Edge[] edgeTo: 索引代表顶点，值表示当前顶点和最小生成树之间的最短边<br>private double[] distTo: 索引代表顶点，值表示当前顶点和最小生成树之间的最短边的权重<br>private boolean[] marked:索引代表顶点，如果当前顶点已经在树中，则值为true，否则为false<br>private IndexMinPriorityQueue pq:存放树中顶点与非树中顶点之间的有效横切边</td></tr></tbody></table><h5 id="_2、实现原理" tabindex="-1"><a class="header-anchor" href="#_2、实现原理" aria-hidden="true">#</a> 2、实现原理</h5><blockquote><p>Prim算法始终将图中的顶点切分成两个集合，最小生成树顶点和非最小生成树顶点，通过不断的重复做某些操作，可以逐渐将非最小生成树中的顶点加入到最小生成树中，直到所有的顶点都加入到最小生成树中。</p></blockquote><p>我们在设计API的时候，使用最小索引优先队列存放树中顶点与非树中顶点的有效横切边，那么它是如何表示的呢？</p><blockquote><p>我们可以让最小索引优先队列的索引值表示图的顶点，让最小索引优先队列中的值表示从其他某个顶点到当前顶点的边权重。</p></blockquote><p><img src="'+r+'" alt="image-20210817115235521" loading="lazy"></p><p>初始化状态，先默认0是最小生成树中的唯一顶点，其他的顶点都不在最小生成树中，此时横切边就是顶点0的邻接表中0-2,0-4,0-6,0-7这四条边，我们只需要将索引优先队列的2、4、6、7索引处分别存储这些边的权重值就可以表示了。</p><p>现在只需要从这四条横切边中找出权重最小的边，然后把对应的顶点加进来即可。所以找到0-7这条横切边的权重最小，因此把0-7这条边添加进来，此时0和7属于最小生成树的顶点，其他的不属于，现在顶点7的邻接表中的边也成为了横切边，这时需要做两个作：</p><ul><li>0-7这条边已经不是横切边了，需要让它失效：只需要调用最小索引优先队列的delMin()方法即可完成；</li><li>2和4顶点各有两条连接指向最小生成树，需要只保留一条：</li><li>4-7的权重小于0-4的权重，所以保留4-7，调用索引优先队列的change(4,0.37)即可，</li><li>0-2的权重小于2-7的权重，所以保留0-2，不需要做额外操作。</li></ul><p><img src="'+v+`" alt="image-20210817115349035" loading="lazy"></p><p>我们不断重复上面的动作，就可以把所有的顶点添加到最小生成树中。</p><h5 id="_3、代码实现" tabindex="-1"><a class="header-anchor" href="#_3、代码实现" aria-hidden="true">#</a> 3、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PrimMST</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 索引代表顶点，值表示当前顶点和最小生成树之间的最短边
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Edge</span><span class="token punctuation">[</span><span class="token punctuation">]</span> edgeTo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 索引代表顶点，值表示当前顶点和最小生成树之间的最短边的权重
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> distTo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 索引代表顶点，如果当前顶点已经在树中，则值为true，否则为false
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> marked<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 存放树中顶点与非树中顶点之间的有效横切边
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">IndexMinPriorityQueue</span> pq<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据一副加权无向图，创建最小生成树计算对象；
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PrimMST</span><span class="token punctuation">(</span><span class="token class-name">EdgeWeightedGraph</span> <span class="token class-name">G</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//创建一个和图的顶点数一样大小的Edge数组，表示边</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>edgeTo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Edge</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//创建一个和图的顶点数一样大小的double数组，表示权重，并且初始化数组中的内容为无穷大，无穷大即表示不存在这样的边</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>distTo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>distTo<span class="token punctuation">,</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建一个和图的顶点数一样大小的boolean数组，表示当前顶点是否已经在树中</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>marked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//创建一个和图的顶点数一样大小的索引优先队列，存储有效横切边</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexMinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//默认让顶点0进入树中，0没有与其他顶点连接，初始化distTo[0]=0.0</span>
        distTo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
        <span class="token comment">//初始化pq</span>
        pq<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历有效边队列</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//找到权重最小的横切边对应的顶点，加入到最小生成树中</span>
            <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span> pq<span class="token punctuation">.</span><span class="token function">delMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *  将顶点v添加到最小生成树中，并且更新数据
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">EdgeWeightedGraph</span> <span class="token class-name">G</span><span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//把顶点v增加在树中</span>
        marked<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历顶点v的邻接表，得到每一条边Edge e</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Edge</span> edge <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//找到另一个顶点w</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> edge<span class="token punctuation">.</span><span class="token function">other</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>marked<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//如果v-w边e的权重比目前distTo[w]权重小，则需要修正数据</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>edge<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> distTo<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//把顶点w距离最小生成树的边修改为e</span>
                edgeTo<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> edge<span class="token punctuation">;</span>
                <span class="token comment">//把顶点w距离最小生成树的边的权重修改为e.weight()</span>
                distTo<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> edge<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//如果pq中存储的有效横切边已经包含了w顶点，则需要修正最小索引优先队列w索引关联的权重值</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pq<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    pq<span class="token punctuation">.</span><span class="token function">changeItem</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> edge<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">//如果pq中存储的有效横切边不包含w顶点，则需要向最小索引优先队列中添加v-w和其权重值</span>
                    pq<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> edge<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取最小生成树的所有边
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> <span class="token function">edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> edges <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> marked<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>edgeTo<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                edges<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>edgeTo<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> edges<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试数据</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>8
16
4 5 0.35
4 7 0.37
5 7 0.28
0 7 0.16
1 5 0.32
0 4 0.38
2 3 0.17
1 7 0.19
0 2 0.26
1 2 0.36
1 3 0.29
2 7 0.34
6 2 0.40
3 6 0.52
6 0 0.58
6 4 0.93
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PrimTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span><span class="token class-name">PrimTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;primTestData.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取顶点数目，初始化EdgeWeightedGraph图</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EdgeWeightedGraph</span> edgeWeightedGraph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EdgeWeightedGraph</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取边的数目</span>
        <span class="token keyword">int</span> edgeNumber <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//循环读取每一条边，并调用addEdge方法</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> edgeNumber<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> weight <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            edgeWeightedGraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Edge</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> w<span class="token punctuation">,</span> weight<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//构建PrimMST对象</span>
        <span class="token class-name">PrimMST</span> mst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrimMST</span><span class="token punctuation">(</span>edgeWeightedGraph<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取最小生成树的边</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> edges <span class="token operator">=</span> mst<span class="token punctuation">.</span><span class="token function">edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//打印输出</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Edge</span> edge <span class="token operator">:</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>edge<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span><span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> edge<span class="token punctuation">.</span><span class="token function">other</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span><span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> edge<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_4、kruskal算法" tabindex="-1"><a class="header-anchor" href="#_4、kruskal算法" aria-hidden="true">#</a> 4、kruskal算法</h4><blockquote><p>kruskal算法是计算一副加权无向图的最小生成树的另外一种算法，它的主要思想是按照边的权重(从小到大)处理它们，将边加入最小生成树中，加入的边不会与已经加入最小生成树的边构成环，直到树中含有V-1条边为止。</p></blockquote><p><strong>kruskal算法和prim算法的区别</strong>：</p><blockquote><p>Prim算法是一条边一条边的构造最小生成树，每一步都为一棵树添加一条边。</p><p>kruskal算法构造最小生成树的时候也是一条边一条边地构造，但它的切分规则是不一样的。它每一次寻找的边会连接一片森林中的两棵树。如果一副加权无向图由V个顶点组成，初始化情况下每个顶点都构成一棵独立的树，则V个顶点对应V棵树，组成一片森林，kruskal算法每一次处理都会将两棵树合并为一棵树，直到整个森林中只剩一棵树为止。</p></blockquote><p><img src="`+m+'" alt="image-20210817135440325" loading="lazy"></p><h5 id="_1、api设计-8" tabindex="-1"><a class="header-anchor" href="#_1、api设计-8" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>KruskalMST</th></tr></thead><tbody><tr><td>构造函数</td><td>KruskalMST(EdgeWeightedGraph G)：根据一副加权无向图，创建最小生成树计算对象；</td></tr><tr><td>成员方法</td><td>public Queue edges():获取最小生成树的所有边</td></tr><tr><td>成员变量</td><td>private Queue mst：保存最小生成树的所有边<br>private UF_Tree_Weighted uf: 索引代表顶点，使用uf.connect(v,w)可以判断顶点v和顶点w是否在同一颗树中，使用uf.union(v,w)可以把顶点v所在的树和顶点w所在的树合并<br>private MinPriorityQueue pq: 存储图中所有的边，使用最小优先队列，对边按照权重进行排序</td></tr></tbody></table><h5 id="_2实现原理" tabindex="-1"><a class="header-anchor" href="#_2实现原理" aria-hidden="true">#</a> 2实现原理</h5><blockquote><p>在设计API的时候，使用了一个MinPriorityQueue pq存储图中所有的边，每次使用pq.delMin()取出权重最小的边，并得到该边关联的两个顶点v和w，通过uf.connect(v,w)判断v和w是否已经连通，如果连通，则证明这两个顶点在同一棵树中，那么就不能再把这条边添加到最小生成树中，因为在一棵树的任意两个顶点上添加一条边，都会形成环，而最小生成树不能有环的存在，如果不连通，则通过uf.connect(v,w)把顶点v所在的树和顶点w所在的树合并成一棵树，并把这条边加入到mst队列中，这样如果把所有的边处理完，最终mst中存储的就是最小生树的所有边。</p></blockquote><p><img src="'+b+`" alt="image-20210817135705268" loading="lazy"></p><h5 id="_3、代码实现-1" tabindex="-1"><a class="header-anchor" href="#_3、代码实现-1" aria-hidden="true">#</a> 3、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KruskalMST</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 保存最小生成树的所有边
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> mst<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * :索引代表顶点，使用uf.connect(v,w)可以判断顶点v和顶点w是否在同一颗树中
     * 使用uf.union(v,w)可以把顶点v所在的树和顶点w所在的树合并
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">UFTreeWeighted</span> uf<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 存储图中所有的边，使用最小优先队列，对边按照权重进行排序
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">MinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> pq<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">KruskalMST</span><span class="token punctuation">(</span><span class="token class-name">EdgeWeightedGraph</span> <span class="token class-name">G</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//初始化mst队列</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//初始化并查集对象uf,容量和图的顶点数相同</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UFTreeWeighted</span><span class="token punctuation">(</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//初始化最小优先队列pq，容量比图的边的数量大1，并把图中所有的边放入pq中</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">G<span class="token punctuation">.</span>E</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Edge</span> edge <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pq<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>edge<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//如果优先队列pq不为空，也就是还有边未处理，并且mst中的边还不到V-1条，继续遍历</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> mst<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//取出pq中权重最小的边e</span>
            <span class="token class-name">Edge</span> e <span class="token operator">=</span> pq<span class="token punctuation">.</span><span class="token function">delMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取边e的两个顶点v和w</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">other</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/*
            通过uf.connect(v,w)判断v和w是否已经连通，
            如果连通:
            则证明这两个顶点在同一棵树中，那么就不能再把这条边添加到最小生成树中，因为在一棵
            树的任意两个顶点上添加一条边，都会形成环，而最小生成树不能有环的存在;

            如果不连通:
            则通过uf.connect(v,w)把顶点v所在的树和顶点w所在的树合并成一棵树,并把这条边加入到mst队列中
            */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>uf<span class="token punctuation">.</span><span class="token function">connected</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            uf<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mst<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取最小生成树的所有边
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> <span class="token function">edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> mst<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KruskalTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span><span class="token class-name">KruskalTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;primTestData.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取顶点数目，初始化EdgeWeightedGraph图</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EdgeWeightedGraph</span> edgeWeightedGraph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EdgeWeightedGraph</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取边的数目</span>
        <span class="token keyword">int</span> edgeNumber <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//循环读取每一条边，并调用addEdge方法</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> edgeNumber<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> weight <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            edgeWeightedGraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Edge</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> w<span class="token punctuation">,</span> weight<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//构建PrimMST对象</span>
        <span class="token class-name">KruskalMST</span> mst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KruskalMST</span><span class="token punctuation">(</span>edgeWeightedGraph<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取最小生成树的边</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Edge</span><span class="token punctuation">&gt;</span></span> edges <span class="token operator">=</span> mst<span class="token punctuation">.</span><span class="token function">edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//打印输出</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Edge</span> edge <span class="token operator">:</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>edge<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span><span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> edge<span class="token punctuation">.</span><span class="token function">other</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span><span class="token function">either</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> edge<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_10、加权有向图" tabindex="-1"><a class="header-anchor" href="#_10、加权有向图" aria-hidden="true">#</a> 10、加权有向图</h3><h4 id="_1、加权有向图的表示" tabindex="-1"><a class="header-anchor" href="#_1、加权有向图的表示" aria-hidden="true">#</a> 1、加权有向图的表示</h4><h5 id="_1、api设计-9" tabindex="-1"><a class="header-anchor" href="#_1、api设计-9" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>DirectedEdge</th></tr></thead><tbody><tr><td>构造方法</td><td>DirectedEdge(int v,int w,double weight)：通过顶点v和w，以及权重weight值构造一个边对象</td></tr><tr><td>成员方法</td><td>public double weight():获取边的权重值<br>public int from():获取有向边的起点<br>public int to():获取有向边的终点</td></tr><tr><td>成员变量</td><td>private final int v：起点<br>private final int w：终点<br>private final double weight：当前边的权重</td></tr></tbody></table><h5 id="_2、代码实现-6" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-6" aria-hidden="true">#</a> 2、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectedEdge</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 起点
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> v<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 终点
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> w<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 当前边的权重
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">double</span> weight<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">DirectedEdge</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">double</span> weight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>v <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>w <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取边的权重值
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> weight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取有向边的起点
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :获取有向边的终点
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token keyword">to</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> w<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、加权有向图的实现" tabindex="-1"><a class="header-anchor" href="#_2、加权有向图的实现" aria-hidden="true">#</a> 2、加权有向图的实现</h4><blockquote><p>之前我们已经完成了有向图，在有向图的基础上，我们只需要把边的表示切换成DirectedEdge对象即可。</p></blockquote><h5 id="_1、api设计-10" tabindex="-1"><a class="header-anchor" href="#_1、api设计-10" aria-hidden="true">#</a> 1、API设计</h5><table><thead><tr><th>类名</th><th>EdgeWeightedDigraph</th></tr></thead><tbody><tr><td>构造方法</td><td>EdgeWeightedDigraph(int V)：创建一个含有V个顶点的空加权有向图</td></tr><tr><td>成员方法</td><td>public int V():获取图中顶点的数量<br>public int E():获取图中边的数量<br>public void addEdge(DirectedEdge e):向加权有向图中添加一条边e<br>public Queue adj(int v)：获取由顶点v指出的所有的边<br>public Queue edges()：获取加权有向图的所有边</td></tr><tr><td>成员变量</td><td>private final int V: 记录顶点数量<br>private int E: 记录边数量<br>private Queue[] adj: 邻接表</td></tr></tbody></table><h5 id="_2、代码实现-7" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-7" aria-hidden="true">#</a> 2、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EdgeWeightedDigraph</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * : 记录顶点数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token class-name">V</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * : 记录边数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token class-name">E</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * : 邻接表
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedEdge</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> adj<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">EdgeWeightedDigraph</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//初始化顶点数</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>V</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token comment">//初始化边数量</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>E</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//初始化邻接表的空队列</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            adj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedEdge</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取图中顶点的数量
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">V</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取边的数量
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">E</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">E</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向加权有向图添加一条边
     * <span class="token keyword">@param</span> <span class="token parameter">e</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token class-name">DirectedEdge</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取有向边的起点</span>
        <span class="token keyword">int</span> from <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//因为是有向图，所以边e只需要出现在起点v的邻接表中</span>
        adj<span class="token punctuation">[</span>from<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//边的数量+1</span>
        <span class="token class-name">E</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取由顶点v指出的所有的边
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedEdge</span><span class="token punctuation">&gt;</span></span> <span class="token function">adj</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取加权有向图的所有边
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedEdge</span><span class="token punctuation">&gt;</span></span> <span class="token function">edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedEdge</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历顶点，拿到每个顶点的邻接表</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>V</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//遍历邻接表，拿到邻接表中的每条边存储到队列中</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DirectedEdge</span> e <span class="token operator">:</span> <span class="token function">adj</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> queue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、最短路径" tabindex="-1"><a class="header-anchor" href="#_11、最短路径" aria-hidden="true">#</a> 11、最短路径</h3><h4 id="_1、最短路径定义及性质" tabindex="-1"><a class="header-anchor" href="#_1、最短路径定义及性质" aria-hidden="true">#</a> 1、最短路径定义及性质</h4><h5 id="_1、定义-1" tabindex="-1"><a class="header-anchor" href="#_1、定义-1" aria-hidden="true">#</a> 1、定义</h5><blockquote><p>在一副加权有向图中，从顶点s到顶点t的最短路径是所有从顶点s到顶点t的路径中总权重最小的那条路径。</p></blockquote><p><img src="`+h+'" alt="image-20210817152057498" loading="lazy"></p><h5 id="_2、性质" tabindex="-1"><a class="header-anchor" href="#_2、性质" aria-hidden="true">#</a> 2、性质</h5><blockquote><ol><li>路径具有方向性；</li><li><strong>权重不一定等价于距离。权重可以是距离、时间、花费等内容，权重最小指的是成本最低</strong></li><li>只考虑连通图。一副图中并不是所有的顶点都是可达的，如果s和t不可达，那么它们之间也就不存在最短路径，为了简化问题，这里只考虑连通图。</li><li>最短路径不一定是唯一的。从一个顶点到达另外一个顶点的权重最小的路径可能会有很多条，这里只需要找出一条即可。</li></ol></blockquote><p><strong>最短路径树</strong>：</p><blockquote><p>给定一副加权有向图和一个顶点s，以s为起点的一棵最短路径树是图的一副子图，它包含顶点s以及从s可达的所有顶点。这棵有向树的根结点为s，树的每条路径都是有向图中的一条最短路径。</p></blockquote><h4 id="_2、最短路径树的api设计" tabindex="-1"><a class="header-anchor" href="#_2、最短路径树的api设计" aria-hidden="true">#</a> 2、最短路径树的API设计</h4><blockquote><p>计算最短路径树的经典算法是dijstra算法</p></blockquote><table><thead><tr><th>类名</th><th>DijkstraSP</th></tr></thead><tbody><tr><td>构造方法</td><td>public DijkstraSP(EdgeWeightedDigraph G, int s)：根据一副加权有向图G和顶点s，创建一个计算顶点为s的最短路径树对象</td></tr><tr><td>成员方法</td><td>private void relax(EdgeWeightedDigraph G, int v)：松弛图G中的顶点v<br>public double distTo(int v):获取从顶点s到顶点v的最短路径的总权重<br>public boolean hasPathTo(int v):判断从顶点s到顶点v是否可达<br>public Queue pathTo(int v):查询从起点s到顶点v的最短路径中所有的边</td></tr><tr><td>成员变量</td><td>private DirectedEdge[] edgeTo: 索引代表顶点，值表示从顶点s到当前顶点的最短路径上的最后一条边<br>private double[] distTo: 索引代表顶点，值从顶点s到当前顶点的最短路径的总权重<br>private IndexMinPriorityQueue pq:存放树中顶点与非树中顶点之间的有效横切边</td></tr></tbody></table><h4 id="_3、松弛技术" tabindex="-1"><a class="header-anchor" href="#_3、松弛技术" aria-hidden="true">#</a> 3、松弛技术</h4><p>松弛这个词来源于生活：一条橡皮筋沿着两个顶点的某条路径紧紧展开，如果这两个顶点之间的路径不止一条，还有存在更短的路径，那么把皮筋转移到更短的路径上，皮筋就可以放松了。</p><p><img src="'+w+'" alt="image-20210817152441932" loading="lazy"></p><p>松弛这种简单的原理刚好可以用来计算最短路径树。</p><blockquote><p>在我们的API中，需要用到两个成员变量edgeTo和distTo，分别存储边和权重。一开始给定一幅图G和顶点s，我们只知道图的边以及这些边的权重，其他的一无所知，此时初始化顶点s到顶点s的最短路径的总权重disto[s]=0；顶点s到其他顶点的总权重默认为无穷大，随着算法的执行，不断的使用松弛技术处理图的边和顶点，并按一定的条件更新edgeTo和distTo中的数据，最终就可以得到最短路劲树。</p></blockquote><h5 id="_1、边的松弛" tabindex="-1"><a class="header-anchor" href="#_1、边的松弛" aria-hidden="true">#</a> 1、边的松弛</h5><p>放松边v-&gt;w意味着检查从s到w的最短路径是否先从s到v，然后再从v到w？</p><blockquote><p>如果是，则v-w这条边需要加入到最短路径树中，更新edgeTo和distTo中的内容：edgeTo[w]=表示v-&gt;w这条边的DirectedEdge对象，distTo[w]=distTo[v]+v-&gt;w这条边的权重；</p><p>如果不是，则忽略v-&gt;w这条边。</p></blockquote><p><img src="'+g+'" alt="image-20210817152641423" loading="lazy"></p><h5 id="_2、顶点的松弛" tabindex="-1"><a class="header-anchor" href="#_2、顶点的松弛" aria-hidden="true">#</a> 2、顶点的松弛</h5><blockquote><p>顶点的松弛是基于边的松弛完成的，只需要把某个顶点指出的所有边松弛，那么该顶点就松弛完毕。例如要松弛顶点v，只需要遍历v的邻接表，把每一条边都松弛，那么顶点v就松弛了。</p></blockquote><p>如果把起点设置为顶点0，那么找出起点0到顶点6的最短路径0-&gt;2-&gt;7&gt;3-&gt;6的过程如下:</p><p><img src="'+y+`" alt="image-20210817152721070" loading="lazy"></p><h4 id="_4、-dijstra算法实现" tabindex="-1"><a class="header-anchor" href="#_4、-dijstra算法实现" aria-hidden="true">#</a> 4、 Dijstra算法实现</h4><blockquote><p>Disjstra算法的实现和Prim算法很类似，构造最短路径树的每一步都是向这棵树中添加一条新的边，而这条新的边是有效横切边pq队列中的权重最小的边。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DijkstraSP</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 索引代表顶点，值表示从顶点s到当前顶点的最短路径上的最后一条边
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">DirectedEdge</span><span class="token punctuation">[</span><span class="token punctuation">]</span> edgeTo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 索引代表顶点，值从顶点s到当前顶点的最短路径的总权重
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> distTo<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 存放树中顶点与非树中顶点之间的有效横切边
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">IndexMinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> pq<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 根据一副加权有向图G和顶点s，创建一个计算顶点为s的最短路径树对象
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DijkstraSP</span><span class="token punctuation">(</span><span class="token class-name">EdgeWeightedDigraph</span> <span class="token class-name">G</span><span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//创建一个和图的顶点数一样的数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>edgeTo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectedEdge</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>distTo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> distTo<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            distTo<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//创建一个和图的顶点数一样大小的索引优先队列，存储有效横切边</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexMinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">G<span class="token punctuation">.</span>V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//默认让顶点s进入树中，但s顶点目前没有与树中其他的顶点相连接，因此初始化distTo[s]=0.0</span>
        distTo<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
        <span class="token comment">//使用顶点s和权重0.0初始化pq</span>
        pq<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历有效边队列</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//松弛图G中的顶点</span>
            <span class="token function">relax</span><span class="token punctuation">(</span><span class="token class-name">G</span><span class="token punctuation">,</span> pq<span class="token punctuation">.</span><span class="token function">delMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * ：松弛图G中的顶点v
     * <span class="token keyword">@param</span> <span class="token parameter">G</span>
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">relax</span><span class="token punctuation">(</span><span class="token class-name">EdgeWeightedDigraph</span> <span class="token class-name">G</span><span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//松弛顶点v就是松弛顶点v邻接表中的每一条边，遍历邻接表</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DirectedEdge</span> e <span class="token operator">:</span> <span class="token class-name">G</span><span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//获取边e的终点</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//起点s到顶点w的权重是否大于起点s到顶点v的权重+边e的权重,如果大于，</span>
            <span class="token comment">// 则修改s-&gt;w的路径：edgeTo[w]=e,并修改distTo[v] = distTo[v]+e.weitht(),如果不大于，则忽略</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">distTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token function">distTo</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                distTo<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token operator">=</span>distTo<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                edgeTo<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token operator">=</span>e<span class="token punctuation">;</span>
                <span class="token comment">//如果顶点w已经存在于优先队列pq中，则重置顶点w的权重</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pq<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    pq<span class="token punctuation">.</span><span class="token function">changeItem</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token function">distTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    <span class="token comment">//如果顶点w没有出现在优先队列pq中，则把顶点w及其权重加入到pq中</span>
                    pq<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token function">distTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :获取从顶点s到顶点v的最短路径的总权重
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">distTo</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> distTo<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :判断从顶点s到顶点v是否可达
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasPathTo</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> distTo<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :查询从起点s到顶点v的最短路径中所有的边
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">pathTo</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果顶点s到v不可达，则返回null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasPathTo</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//创建队列Queue保存最短路径的边</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedEdge</span><span class="token punctuation">&gt;</span></span> edges <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//从顶点v开始，逆向寻找，一直找到顶点s为止，而起点s为最短路劲树的根结点，所以edgeTo[s]=null;</span>
        <span class="token class-name">DirectedEdge</span> e<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            e <span class="token operator">=</span> edgeTo<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            edges<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            v <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> edges<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DijkstraSPTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span><span class="token class-name">DijkstraSPTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;primTestData.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取顶点数目，初始化EdgeWeightedGraph图</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EdgeWeightedDigraph</span> edgeWeightedGraph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EdgeWeightedDigraph</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//读取边的数目</span>
        <span class="token keyword">int</span> edgeNumber <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//循环读取每一条边，并调用addEdge方法</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> edgeNumber<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> weight <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            edgeWeightedGraph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DirectedEdge</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> w<span class="token punctuation">,</span> weight<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//构建PrimMST对象</span>
        <span class="token class-name">DijkstraSP</span> mst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DijkstraSP</span><span class="token punctuation">(</span>edgeWeightedGraph<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取起点0到顶点6的最短路径</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectedEdge</span><span class="token punctuation">&gt;</span></span> edges <span class="token operator">=</span> mst<span class="token punctuation">.</span><span class="token function">pathTo</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//打印输出</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DirectedEdge</span> edge <span class="token operator">:</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>edge<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span> <span class="token operator">+</span> edge<span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> edge<span class="token punctuation">.</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,222),_=[q];function E(G,x){return s(),a("div",null,_)}const S=n(f,[["render",E],["__file","graph.html.vue"]]);export{S as default};
