import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-aeb4ead9.js";const t={},e=p(`<blockquote><p>普通的队列是一种先进先出的数据结构，元素在队列尾追加，而从队列头删除。在某些情况下，我们可能需要找出队列中的最大值或者最小值，例如使用一个队列保存计算机的任务，一般情况下计算机的任务都是有优先级的，我们需要在这些计算机的任务中找出优先级最高的任务先执行，执行完毕后就需要把这个任务从队列中移除。普通的队列要完成这样的功能，需要每次遍历队列中的所有元素，比较并找出最大值，效率不是很高，这个时候，我们就可以使用一种特殊的队列来完成这种需求，优先队列。</p></blockquote><p>优先队列按照其作用不同，可以分为以下两种：</p><ul><li><em>最大优先队列：可以获取并删除队列中最大的值</em></li><li><em>最小优先队列：可以获取并删除队列中最小的值</em></li></ul><h3 id="_1、最大优先队列" tabindex="-1"><a class="header-anchor" href="#_1、最大优先队列" aria-hidden="true">#</a> 1、最大优先队列</h3><h4 id="_1、api设计" tabindex="-1"><a class="header-anchor" href="#_1、api设计" aria-hidden="true">#</a> 1、API设计</h4><table><thead><tr><th>类名</th><th>MaxPriorityQueue</th></tr></thead><tbody><tr><td>构造方法</td><td>MaxPriorityQueue(int capacity)：创建容量为capacity的MaxPriorityQueue对象</td></tr><tr><td>成员方法</td><td>private boolean less(int i,int j)：判断堆中索引i处的元素是否小于索引j处的元素<br>private void each(int i,int j):交换堆中i索引和j索引处的值<br>public T delMax():删除队列中最大的元素,并返回这个最大元素<br>public void insert(T t)：往队列中插入一个元素<br>private void swim(int k):使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br>private void sink(int k):使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置<br>public int size():获取队列中元素的个数<br>public boolean isEmpty():判断队列是否为空</td></tr><tr><td>成员变量</td><td>private T items：用来存储元素的数组<br>private int N：记录堆中元素的个数</td></tr></tbody></table><h4 id="_2、代码实现" tabindex="-1"><a class="header-anchor" href="#_2、代码实现" aria-hidden="true">#</a> 2、代码实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MaxPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MaxPriorityQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        items <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">[</span>capacity <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断堆中索引i处的元素是否小于索引j处的元素
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">j</span>
     * <span class="token keyword">@return</span> true
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">less</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 交换堆中i索引和j索引处的值
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">j</span>
     */</span>
   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name">T</span> temp <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
       items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
       items<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除队列中最大的元素,并返回这个最大元素
     * <span class="token keyword">@return</span>
     */</span>
   <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">delMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name">T</span> max <span class="token operator">=</span> items<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
       <span class="token function">each</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
       items<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
       size<span class="token operator">--</span><span class="token punctuation">;</span>
       <span class="token function">sink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">return</span> max<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 往队列中插入一个元素
     * <span class="token keyword">@param</span> <span class="token parameter">t</span>
     */</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>
      items<span class="token punctuation">[</span><span class="token operator">++</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
      <span class="token function">swim</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置
     * <span class="token keyword">@param</span> <span class="token parameter">k</span>
     */</span>
   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token comment">//比较k是否小于k/2，如果小于则交换元素</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token function">each</span><span class="token punctuation">(</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           k <span class="token operator">=</span> k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置
     * <span class="token keyword">@param</span> <span class="token parameter">k</span>
     */</span>
   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">sink</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k <span class="token operator">&lt;=</span> size<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">;</span>
           <span class="token comment">//如果存在右子结点</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> size<span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>k<span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">*</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                   max <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
           <span class="token comment">//比较当前结点和子结点中的较大者，如果当前结点不小，则结束循环</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">less</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">break</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token function">each</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
           k <span class="token operator">=</span> max<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取队列中元素的个数
     * <span class="token keyword">@return</span>
     */</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> size<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 判断队列是否为空
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MaxPriorityQueueTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;G&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">MaxPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MaxPriorityQueue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> max<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            max <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">delMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>max<span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>7
G F E D C B A 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2、最小优先队列" tabindex="-1"><a class="header-anchor" href="#_2、最小优先队列" aria-hidden="true">#</a> 2、最小优先队列</h3><blockquote><ul><li>最小的元素放在数组的索引1处。</li><li>每个结点的数据总是小于等于它的两个子结点的数据。</li></ul></blockquote><h4 id="_1、api设计-1" tabindex="-1"><a class="header-anchor" href="#_1、api设计-1" aria-hidden="true">#</a> 1、API设计</h4><table><thead><tr><th>类名</th><th>MinPriorityQueue</th></tr></thead><tbody><tr><td>构造方法</td><td>MinPriorityQueue(int capacity)：创建容量为capacity的MinPriorityQueue对象</td></tr><tr><td>成员方法</td><td>private boolean less(int i,int j)：判断堆中索引i处的元素是否小于索引j处的元素<br>private void exch(int i,int j):交换堆中i索引和j索引处的值<br>public T delMin():删除队列中最小的元素,并返回这个最小元素<br>public void insert(T t)：往队列中插入一个元素<br>private void swim(int k):使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br>private void sink(int k):使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置<br>public int size():获取队列中元素的个数<br>public boolean isEmpty():判断队列是否为空</td></tr><tr><td>成员变量</td><td>private T[] imtes : 用来存储元素的数组<br>private int N：记录堆中元素的个数</td></tr></tbody></table><h4 id="_2、代码实现-1" tabindex="-1"><a class="header-anchor" href="#_2、代码实现-1" aria-hidden="true">#</a> 2、代码实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MinPriorityQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        items <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">[</span>capacity<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断堆中索引i处的元素是否小于索引j处的元素
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">j</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">less</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 交换堆中i索引和j索引处的值
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">j</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">T</span> temp <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        items<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除队列中最小的元素,并返回这个最小元素
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">delMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">T</span> min <span class="token operator">=</span> items<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">each</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        items<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token function">sink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> min<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 往队列中插入一个元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
     * <span class="token keyword">@param</span> <span class="token parameter">t</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>
        items<span class="token punctuation">[</span><span class="token operator">++</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token function">swim</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
     * <span class="token keyword">@param</span> <span class="token parameter">k</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">each</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            k <span class="token operator">=</span> k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置
     * <span class="token keyword">@param</span> <span class="token parameter">k</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">sink</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>k <span class="token operator">&lt;=</span> size<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>k<span class="token punctuation">;</span>
            <span class="token comment">//如果存在右子结点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>k <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> size<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">*</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    min <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>min<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">each</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
            k <span class="token operator">=</span> min<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取队列中元素的个数
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断队列是否为空
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinPriorityQueueTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;G&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">MinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinPriorityQueue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> del<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            del <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">delMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>del<span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>7
A B C D E F G 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3、索引优先队列" tabindex="-1"><a class="header-anchor" href="#_3、索引优先队列" aria-hidden="true">#</a> 3、索引优先队列</h3><h4 id="_1、实现思路" tabindex="-1"><a class="header-anchor" href="#_1、实现思路" aria-hidden="true">#</a> 1、实现思路</h4><ol><li><p>存储数据时，给每一个数据元素关联一个整数，例如insert(int k,T t),我们可以看做k是t关联的整数，那么我们的实现需要通过k这个值，快速获取到队列中t这个元素，此时有个k这个值需要具有唯一性。</p><blockquote><p>最直观的想法就是我们可以用一个T[] items数组来保存数据元素，在insert(int k,T t)完成插入时，可以把k看做是items数组的索引，把t元素放到items数组的索引k处，这样我们再根据k获取元素t时就很方便了，直接就可以拿到items[k]即可。</p></blockquote></li><li><p>第一步完成后的结果，虽然我们给每个元素关联了一个整数，并且可以使用这个整数快速的获取到该元素，但是，items数组中的元素顺序是随机的，并不是堆有序的，所以，为了完成这个需求，我们可以增加一个数组int[]pq,来保存每个元素在items数组中的索引，pq数组需要堆有序，也就是说，pq[1]对应的数据元素items[pq[1]]要小于等于pq[2]和pq[3]对应的数据元素items[pq[2]]和items[pq[3]]。</p></li><li><p>通过第二步的分析，我们可以发现，其实我们通过上浮和下沉做堆调整的时候，其实调整的是pq数组。如果需要对items中的元素进行修改，比如让items[0]=“H”,那么很显然，我们需要对pq中的数据做堆调整，而且是调整pq[9]中元素的位置。但现在就会遇到一个问题，我们修改的是items数组中0索引处的值，如何才能快速的知道需要挑中pq[9]中元素的位置呢？</p><blockquote><p>最直观的想法就是遍历pq数组，拿出每一个元素和0做比较，如果当前元素是0，那么调整该索引处的元素即可，但是效率很低。 我们可以另外增加一个数组，int[] qp,用来存储pq的逆序。例如： 在pq数组中：pq[1]=6; 那么在qp数组中，把6作为索引，1作为值，结果是：qp[6]=1;</p></blockquote></li></ol><p>当有了pq数组后，如果我们修改items[0]=&quot;H&quot;，那么就可以先通过索引0，在qp数组中找到qp的索引：qp[0]=9,那么直接调整pq[9]即可。</p><h4 id="_2、api设计" tabindex="-1"><a class="header-anchor" href="#_2、api设计" aria-hidden="true">#</a> 2、API设计</h4><table><thead><tr><th>类名</th><th>IndexMinPriorityQueue</th></tr></thead><tbody><tr><td>构造方法</td><td>IndexMinPriorityQueue(int capacity)：创建容量为capacity的IndexMinPriorityQueue对象</td></tr><tr><td>成员方法</td><td>private boolean less(int i,int j)：判断堆中索引i处的元素是否小于索引j处的元素<br>private void exch(int i,int j):交换堆中i索引和j索引处的值<br>public int delMin():删除队列中最小的元素,并返回该元素关联的索引<br>public void insert(int i,T t)：往队列中插入一个元素,并关联索引i<br>private void swim(int k):使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置<br>private void sink(int k):使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置<br>public int size():获取队列中元素的个数<br>public boolean isEmpty():判断队列是否为空<br>public boolean contains(int k):判断k对应的元素是否存在<br>public void changeItem(int i, T t):把与索引i关联的元素修改为为t<br>public int minIndex():最小元素关联的索引<br>public void delete(int i):删除索引i关联的元素</td></tr><tr><td>成员变量</td><td>private T[] imtes : 用来存储元素的数组<br>private int[] pq:保存每个元素在items数组中的索引，pq数组需要堆有序<br>private int [] qp:保存qp的逆序，pq的值作为索引，pq的索引作为值<br>private int N：记录堆中元素的个数</td></tr></tbody></table><h4 id="_3、代码实现" tabindex="-1"><a class="header-anchor" href="#_3、代码实现" aria-hidden="true">#</a> 3、代码实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexMinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 堆中元素
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 元素个数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 保存每个元素在items数组中的索引，pq数组需要堆有序
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pq<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 保存qp的逆序，pq的值作为索引，pq的索引作为值
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> qp<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">IndexMinPriorityQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        items <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">[</span>capacity<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        qp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>capacity<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>capacity<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>qp<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断堆中索引i处的元素是否小于索引j处的元素
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">j</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">less</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> items<span class="token punctuation">[</span>pq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>pq<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 换堆中i索引和j索引处的值
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">j</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//先交换pq数组中的值</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> pq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        pq<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pq<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        pq<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>

        <span class="token comment">//更新qp数组中的值</span>
        qp<span class="token punctuation">[</span>pq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        qp<span class="token punctuation">[</span>pq<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除队列中最小的元素,并返回该元素关联的索引
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">delMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找到items中最小元素的索引</span>
        <span class="token keyword">int</span> minIndex <span class="token operator">=</span> pq<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//交换pq中索引1处的值和N处的值</span>
        <span class="token function">swap</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//删除qp中索引pq[N]处的值</span>
        qp<span class="token punctuation">[</span>pq<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//删除pq中索引N处的值</span>
        pq<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//删除items中的最小元素</span>
        items<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">//元素数量-1</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token comment">//对pq[1]做下沉，让堆有序</span>
        <span class="token function">sink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> minIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 往队列中插入一个元素,并关联索引i
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">t</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">contains</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;该索引已存在！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">//把元素存放到items数组中</span>
        items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token comment">//使用pq存放i这个索引</span>
        pq<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token comment">//在qp的i索引处存放N</span>
        qp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token comment">//上浮items[pq[N]],让pq堆有序</span>
        <span class="token function">swim</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置
     * <span class="token keyword">@param</span> <span class="token parameter">k</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swim</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//比较当前结点和父结点，如果当前结点比父结点小，则交换位置</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">swap</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            k <span class="token operator">=</span> k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :使用下沉算法，使索引k处的元素能在堆中处于一个正确的位置
     * <span class="token keyword">@param</span> <span class="token parameter">k</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">sink</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果当前结点已经没有子结点了，则结束下沉</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>k <span class="token operator">&lt;=</span> size<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>k<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>k<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">&lt;=</span> size <span class="token operator">&amp;&amp;</span> <span class="token function">less</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">*</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                min <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>min<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
            k <span class="token operator">=</span> min<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :获取队列中元素的个数
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :判断队列是否为空
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :判断k对应的元素是否存在
     * <span class="token keyword">@param</span> <span class="token parameter">k</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//默认情况下，qp的所有元素都为-1，如果某个位置插入了数据，则不为-1</span>
        <span class="token keyword">return</span> qp<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :把与索引i关联的元素修改为为t
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     * <span class="token keyword">@param</span> <span class="token parameter">t</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeItem</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//修改item数组中索引i的值为t</span>
        items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token comment">//找到i在pq中的位置</span>
        <span class="token keyword">int</span> i1 <span class="token operator">=</span> pq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//对pq[i1]做下沉，让堆有序</span>
        <span class="token function">sink</span><span class="token punctuation">(</span>i1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//对pq[k]做上浮，让堆有序</span>
        <span class="token function">swim</span><span class="token punctuation">(</span>i1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :最小元素关联的索引
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//pq的索引1处，存放的是最小元素在items中的索引</span>
        <span class="token keyword">return</span> pq<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * :删除索引i关联的元素
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找出i在pq中的索引</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> pq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//把pq中索引k处的值和索引N处的值交换</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//删除qp中索引pq[N]处的值</span>
        qp<span class="token punctuation">[</span>pq<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//删除pq中索引N处的值</span>
        pq<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//删除items中索引i处的值</span>
        items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">//元素数量-1</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token comment">//对pq[k]做下沉，让堆有序</span>
        <span class="token function">sink</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//对pq[k]做上浮，让堆有序</span>
        <span class="token function">swim</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexMinPriorityQueueTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;S&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;O&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;R&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;T&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;P&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;L&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">IndexMinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> indexMinPQ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexMinPriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//插入</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            indexMinPQ<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>indexMinPQ<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取最小值的索引</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>indexMinPQ<span class="token punctuation">.</span><span class="token function">minIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//测试修改</span>
        indexMinPQ<span class="token punctuation">.</span><span class="token function">changeItem</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> minIndex<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>indexMinPQ<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            minIndex <span class="token operator">=</span> indexMinPQ<span class="token punctuation">.</span><span class="token function">delMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>minIndex<span class="token operator">+</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>11
6
10,4,9,7,1,8,2,3,5,0,0,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,25),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","priorityqueue.html.vue"]]);export{r as default};
