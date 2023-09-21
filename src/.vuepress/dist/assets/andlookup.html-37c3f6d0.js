import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-f55ccf80.js";const t={},e=p(`<blockquote><p>并查集是一种树型的数据结构 ，并查集可以高效地进行如下操作：</p><ul><li>查询元素p和元素q是否属于同一组</li><li>合并元素p和元素q所在的组</li></ul></blockquote><h3 id="_1、并查集的结构" tabindex="-1"><a class="header-anchor" href="#_1、并查集的结构" aria-hidden="true">#</a> 1、并查集的结构</h3><blockquote><p>并查集也是一种树型结构，但这棵树跟我们之前讲的二叉树、红黑树、B树等都不一样，这种树的要求比较简单：</p><ol><li>每个元素都唯一的对应一个结点；</li><li>每一组数据中的多个元素都在同一颗树中；</li><li>一个组中的数据对应的树和另外一个组中的数据对应的树之间没有任何联系；</li><li>元素在树中并没有子父级关系的硬性要求；</li></ol></blockquote><h3 id="_2、并查集的api设计与实现" tabindex="-1"><a class="header-anchor" href="#_2、并查集的api设计与实现" aria-hidden="true">#</a> 2、并查集的API设计与实现</h3><h4 id="_1、api设计" tabindex="-1"><a class="header-anchor" href="#_1、api设计" aria-hidden="true">#</a> 1、API设计</h4><table><thead><tr><th>类名</th><th>UnionFind</th></tr></thead><tbody><tr><td>构造方法</td><td>UF(int N)：初始化并查集，以整数标识(0,N-1)个结点</td></tr><tr><td>成员方法</td><td>public int count()：获取当前并查集中的数据有多少个分组<br>public boolean connected(int p,int q):判断并查集中元素p和元素q是否在同一分组中<br>public int find(int p):元素p所在分组的标识符<br>public void union(int p,int q)：把p元素所在分组和q元素所在分组合并</td></tr><tr><td>成员变量</td><td>private int[] eleAndGroup: 记录结点元素和该元素所在分组的标识<br>private int count：记录并查集中数据的分组个数</td></tr></tbody></table><h4 id="_2、实现" tabindex="-1"><a class="header-anchor" href="#_2、实现" aria-hidden="true">#</a> 2、实现</h4><h5 id="_1、uf-int-n-构造方法实现" tabindex="-1"><a class="header-anchor" href="#_1、uf-int-n-构造方法实现" aria-hidden="true">#</a> 1、UF(int N)构造方法实现</h5><ol><li>初始情况下，每个元素都在一个独立的分组中，所以，初始情况下，并查集中的数据默认分为N个组；</li><li>初始化数组eleAndGroup；</li><li>把eleAndGroup数组的索引看做是每个结点存储的元素，把eleAndGroup数组每个索引处的值看做是该结点所在的分组，那么初始化情况下，i索引处存储的值就是i</li></ol><h5 id="_2、union-int-p-int-q-合并方法实现" tabindex="-1"><a class="header-anchor" href="#_2、union-int-p-int-q-合并方法实现" aria-hidden="true">#</a> 2、union(int p,int q)合并方法实现</h5><ol><li>如果p和q已经在同一个分组中，则无需合并</li><li>如果p和q不在同一个分组，则只需要将p元素所在组的所有的元素的组标识符修改为q元素所在组的标识符即可</li><li>分组数量-1</li></ol><h5 id="_3、代码实现" tabindex="-1"><a class="header-anchor" href="#_3、代码实现" aria-hidden="true">#</a> 3、代码实现</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 记录结点元素和该元素所在分组的标识
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> eleAndGroup<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 记录并查集中数据的分组个数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UnionFind</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//初始情况下，每个元素都在一个独立的分组中，所以，初始情况下，并查集中的数据默认分为N个组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token comment">//初始化数组</span>
        eleAndGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//把eleAndGroup数组的索引看做是每个结点存储的元素，</span>
        <span class="token comment">// 把eleAndGroup数组每个索引处的值看做是该结点所在的分组，</span>
        <span class="token comment">// 那么初始化情况下，i索引处存储的值就是i</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            eleAndGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取当前并查集中的数据有多少个分组
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断并查集中元素p和元素q是否在同一分组中
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@param</span> <span class="token parameter">q</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">connected</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span><span class="token keyword">int</span> q<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> eleAndGroup<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">==</span> eleAndGroup<span class="token punctuation">[</span>q<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 元素p所在分组的标识符
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> eleAndGroup<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 把p元素所在分组和q元素所在分组合并
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@param</span> <span class="token parameter">q</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">union</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span><span class="token keyword">int</span> q<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果q和p已经在同一个分组中，不需要合并</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">connected</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//不在一个分组中</span>
        <span class="token keyword">int</span> pFind <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> qFind <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> eleAndGroup<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>eleAndGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> pFind<span class="token punctuation">)</span><span class="token punctuation">{</span>
                eleAndGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> qFind<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//数量减1</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnionFindTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UnionFind</span> uf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UnionFind</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> uf<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总共有&quot;</span><span class="token operator">+</span>count<span class="token operator">+</span><span class="token string">&quot;个分组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你要合并的第一个点&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你要合并的第二个点&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>uf<span class="token punctuation">.</span><span class="token function">connected</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;结点&quot;</span><span class="token operator">+</span> i <span class="token operator">+</span><span class="token string">&quot;和结点&quot;</span><span class="token operator">+</span> j <span class="token operator">+</span><span class="token string">&quot;已经在同一个组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            uf<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总共还有&quot;</span><span class="token operator">+</span>uf<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;个分组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3、并查集应用举例" tabindex="-1"><a class="header-anchor" href="#_3、并查集应用举例" aria-hidden="true">#</a> 3、并查集应用举例</h3><blockquote><p>如果我们并查集存储的每一个整数表示的是一个大型计算机网络中的计算机，则我们就可以通过connected(intp,int q)来检测，该网络中的某两台计算机之间是否连通？如果连通，则他们之间可以通信，如果不连通，则不能通信，此时我们又可以调用union(int p,int q)使得p和q之间连通，这样两台计算机之间就可以通信了。</p><p>一般像计算机这样网络型的数据，我们要求网络中的每两个数据之间都是相连通的，也就是说，我们需要调用很多次union方法，使得网络中所有数据相连，其实我们很容易可以得出，如果要让网络中的数据都相连，则我们至少要调用N-1次union方法才可以，但由于我们的union方法中使用for循环遍历了所有的元素，所以很明显，我们之前实现的合并算法的时间复杂度是O(N^2)，如果要解决大规模问题，它是不合适的，所以我们需要对算法进行优化。</p></blockquote><h3 id="_4、算法优化" tabindex="-1"><a class="header-anchor" href="#_4、算法优化" aria-hidden="true">#</a> 4、算法优化</h3><blockquote><p>为了提升union算法的性能，我们需要重新设计find方法和union方法的实现，此时我们先需要对我们的之前数据结构中的eleAndGourp数组的含义进行重新设定：</p><ul><li>我们仍然让eleAndGroup数组的索引作为某个结点的元素；</li><li>eleAndGroup[i]的值不再是当前结点所在的分组标识，而是该结点的父结点；</li></ul></blockquote><h4 id="_1、api设计-1" tabindex="-1"><a class="header-anchor" href="#_1、api设计-1" aria-hidden="true">#</a> 1、API设计</h4><table><thead><tr><th>类名</th><th>UF_Tree</th></tr></thead><tbody><tr><td>构造方法</td><td>UF_Tree(int N)：初始化并查集，以整数标识(0,N-1)个结点</td></tr><tr><td>成员方法</td><td>public int count()：获取当前并查集中的数据有多少个分组<br>public boolean connected(int p,int q):判断并查集中元素p和元素q是否在同一分组中<br>public int find(int p):元素p所在分组的标识符<br>public void union(int p,int q)：把p元素所在分组和q元素所在分组合并</td></tr><tr><td>成员变量</td><td>private int[] eleAndGroup: 记录结点元素和该元素的父结点<br>private int count：记录并查集中数据的分组个数</td></tr></tbody></table><h4 id="_2、实现-1" tabindex="-1"><a class="header-anchor" href="#_2、实现-1" aria-hidden="true">#</a> 2、实现</h4><h5 id="_1、find-int-p-查询方法实现" tabindex="-1"><a class="header-anchor" href="#_1、find-int-p-查询方法实现" aria-hidden="true">#</a> 1、find(int p)查询方法实现</h5><blockquote><ol><li>判断当前元素p的父结点eleAndGroup[p]是不是自己，如果是自己则证明已经是根结点了；</li><li>如果当前元素p的父结点不是自己，则让p=eleAndGroup[p]，继续找父结点的父结点,直到找到根结点为止；</li></ol></blockquote><h5 id="_2、union-int-p-int-q-合并方法实现-1" tabindex="-1"><a class="header-anchor" href="#_2、union-int-p-int-q-合并方法实现-1" aria-hidden="true">#</a> 2、union(int p,int q)合并方法实现</h5><blockquote><ol><li>找到p元素所在树的根结点</li><li>找到q元素所在树的根结点</li><li>如果p和q已经在同一个树中，则无需合并；</li><li>如果p和q不在同一个分组，则只需要将p元素所在树根结点的父结点设置为q元素的根结点即可；</li><li>分组数量-1</li></ol></blockquote><h4 id="_3、完成代码" tabindex="-1"><a class="header-anchor" href="#_3、完成代码" aria-hidden="true">#</a> 3、完成代码</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UF_Tree</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 记录结点元素和该元素所在分组的标识
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> eleAndGroup<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 记录并查集中数据的分组个数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UF_Tree</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//初始情况下，每个元素都在一个独立的分组中，所以，初始情况下，并查集中的数据默认分为N个组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token comment">//初始化数组</span>
        eleAndGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//把eleAndGroup数组的索引看做是每个结点存储的元素，</span>
        <span class="token comment">// 把eleAndGroup数组每个索引处的值看做是该结点所在的分组，</span>
        <span class="token comment">// 那么初始化情况下，i索引处存储的值就是i</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            eleAndGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取当前并查集中的数据有多少个分组
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断并查集中元素p和元素q是否在同一分组中
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@param</span> <span class="token parameter">q</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">connected</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span><span class="token keyword">int</span> q<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> eleAndGroup<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">==</span> eleAndGroup<span class="token punctuation">[</span>q<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 元素p所在分组的标识符
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//判断当前元素p的父结点eleAndGroup[p]是不是自己，如果是自己则证明已经是根结点了；</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> eleAndGroup<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> p<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//如果当前元素p的父结点不是自己，则让p=eleAndGroup[p]，继续找父结点的父结点,直到找到根结点为止；</span>
            p <span class="token operator">=</span> eleAndGroup<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 把p元素所在分组和q元素所在分组合并
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@param</span> <span class="token parameter">q</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">union</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span><span class="token keyword">int</span> q<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//不在一个分组中</span>
        <span class="token keyword">int</span> pFind <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> qFind <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>qFind <span class="token operator">==</span> pFind<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//如果p和q不在同一个分组，则只需要将p元素所在树根结点的父结点设置为q元素的根结点即可；</span>
        eleAndGroup<span class="token punctuation">[</span>pFind<span class="token punctuation">]</span> <span class="token operator">=</span> qFind<span class="token punctuation">;</span>
        <span class="token comment">//数量减1</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnionFindTreeTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UF_Tree</span> uf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UF_Tree</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> uf<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总共有&quot;</span><span class="token operator">+</span>count<span class="token operator">+</span><span class="token string">&quot;个分组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你要合并的第一个点&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你要合并的第二个点&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>uf<span class="token punctuation">.</span><span class="token function">connected</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;结点&quot;</span><span class="token operator">+</span> i <span class="token operator">+</span><span class="token string">&quot;和结点&quot;</span><span class="token operator">+</span> j <span class="token operator">+</span><span class="token string">&quot;已经在同一个组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            uf<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总共还有&quot;</span><span class="token operator">+</span>uf<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;个分组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_5、路径压缩" tabindex="-1"><a class="header-anchor" href="#_5、路径压缩" aria-hidden="true">#</a> 5、路径压缩</h3><blockquote><p>UF_Tree中最坏情况下union算法的时间复杂度为O(N^2)，其最主要的问题在于最坏情况下，树的深度和数组的大小一样，如果我们能够通过一些算法让合并时，生成的树的深度尽可能的小，就可以优化find方法。</p><p>之前我们在union算法中，合并树的时候将任意的一棵树连接到了另外一棵树，这种合并方法是比较暴力的，如果我们把并查集中每一棵树的大小记录下来，然后在每次合并树的时候，把较小的树连接到较大的树上，就可以减小树的深度。</p></blockquote><p>只要我们保证每次合并，都能把小树合并到大树上，就能够压缩合并后新树的路径，这样就能提高find方法的效率。为了完成这个需求，我们需要另外一个数组来记录存储每个根结点对应的树中元素的个数，并且需要一些代码调整数组中的值。</p><h4 id="_1、api设计-2" tabindex="-1"><a class="header-anchor" href="#_1、api设计-2" aria-hidden="true">#</a> 1、API设计</h4><table><thead><tr><th>类名</th><th>UF_Tree_Weighted</th></tr></thead><tbody><tr><td>构造方法</td><td>UF_Tree_Weighted(int N)：初始化并查集，以整数标识(0,N-1)个结点</td></tr><tr><td>成员方法</td><td>public int count()：获取当前并查集中的数据有多少个分组<br>public boolean connected(int p,int q):判断并查集中元素p和元素q是否在同一分组中<br>public int find(int p):元素p所在分组的标识符<br>public void union(int p,int q)：把p元素所在分组和q元素所在分组合并</td></tr><tr><td>成员变量</td><td>private int[] eleAndGroup: 记录结点元素和该元素的父结点<br>private int[] sz: 存储每个根结点对应的树中元素的个数<br>private int count：记录并查集中数据的分组个数</td></tr></tbody></table><h4 id="_2、实现-2" tabindex="-1"><a class="header-anchor" href="#_2、实现-2" aria-hidden="true">#</a> 2、实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UFTreeWeighted</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> eleAndGroup<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rootSize<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UFTreeWeighted</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
        <span class="token comment">//初始化数组</span>
        eleAndGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
        rootSize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 把eleAndGroup数组的索引看做是每个结点存储的元素，
         * 把eleAndGroup数组每个索引处的值看做是该结点所在的分组，
         * 那么初始化情况下，i索引处存储的值就是i
         */</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            eleAndGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//把sz数组中所有的元素初始化为1，默认情况下，每个结点都是一个独立的树，每个树中只有一个元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rootSize<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取当前并查集中的数据有多少个分组
     * <span class="token keyword">@return</span> count
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断并查集中元素p和元素q是否在同一分组中
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@param</span> <span class="token parameter">q</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">connected</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span><span class="token keyword">int</span> q<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">find</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">find</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 元素p所在分组的标识符
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> eleAndGroup<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> p<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            p <span class="token operator">=</span> eleAndGroup<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * ：把p元素所在分组和q元素所在分组合并
     * <span class="token keyword">@param</span> <span class="token parameter">p</span>
     * <span class="token keyword">@param</span> <span class="token parameter">q</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">union</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span><span class="token keyword">int</span> q<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找到p元素的根结点</span>
        <span class="token keyword">int</span> pRoot <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//找到q元素的根结点</span>
        <span class="token keyword">int</span> qRoot <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果已经在一个组中，无需合并</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pRoot <span class="token operator">==</span> qRoot<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//不在一个组中，比较q所在树中的元素个数和p所在树中的元素个数，小树向大树合并</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>rootSize<span class="token punctuation">[</span>pRoot<span class="token punctuation">]</span> <span class="token operator">&lt;</span> rootSize<span class="token punctuation">[</span>qRoot<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            eleAndGroup<span class="token punctuation">[</span>pRoot<span class="token punctuation">]</span> <span class="token operator">=</span> qRoot<span class="token punctuation">;</span>
            rootSize<span class="token punctuation">[</span>qRoot<span class="token punctuation">]</span> <span class="token operator">+=</span> rootSize<span class="token punctuation">[</span>pRoot<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            eleAndGroup<span class="token punctuation">[</span>qRoot<span class="token punctuation">]</span> <span class="token operator">=</span> pRoot<span class="token punctuation">;</span>
            rootSize<span class="token punctuation">[</span>pRoot<span class="token punctuation">]</span> <span class="token operator">+=</span> rootSize<span class="token punctuation">[</span>qRoot<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//分组数组-1</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","andlookup.html.vue"]]);export{k as default};
