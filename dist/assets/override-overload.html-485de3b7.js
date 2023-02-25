import{_ as e,W as o,X as c,Y as n,a0 as s,Z as p,a1 as t,C as i}from"./framework-bb7be5cb.js";const l={},u=t('<h2 id="_01、开篇" tabindex="-1"><a class="header-anchor" href="#_01、开篇" aria-hidden="true">#</a> 01、开篇</h2><p>入冬的夜，总是来得特别的早。我静静地站在阳台，目光所及之处，不过是若隐若现的钢筋混凝土，还有那毫无情调的灯光。</p><p>“哥，别站在那发呆了。今天学啥啊，七点半我就要回学校了，留给你的时间不多了，你要抓紧哦。”三妹傲娇的声音一下子把我从游离的状态拉回到了现实。</p><p>“今天要学习 Java 中的方法重载与方法重写。”我迅速地走到电脑前面，打开一份 Excel 文档，看了一下《教妹学 Java》的进度，然后对三妹说。</p><p>“如果一个类有多个名字相同但参数个数不同的方法，我们通常称这些方法为方法重载。 ”我面带着朴实无华的微笑继续说，“如果方法的功能是一样的，但参数不同，使用相同的名字可以提高程序的可读性。”</p><p>“如果子类具有和父类一样的方法（参数相同、返回类型相同、方法名相同，但方法体可能不同），我们称之为方法重写。 方法重写用于提供父类已经声明的方法的特殊实现，是实现多态的基础条件。”</p><p>“只不过，方法重载与方法重写在名字上很相似，就像是兄弟俩，导致初学者经常把它们俩搞混。”</p><p>“方法重载的英文名叫 Overloading，方法重写的英文名叫 Overriding，因此，不仅中文名很相近，英文名之间也很相近，这就更容易让初学者搞混了。”</p><p>“但两者其实是完全不同的！通过下面这张图，你就能看得一清二楚。”</p>',9),d={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},k=t(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/21-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_02、方法重载" tabindex="-1"><a class="header-anchor" href="#_02、方法重载" aria-hidden="true">#</a> 02、方法重载</h2><p>“三妹，你仔细听哦。”我缓了一口气后继续说道。</p><p>“在 Java 中，有两种方式可以达到方法重载的目的。”</p><p>“第一，改变参数的数目。来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadingByParamNum</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Adder</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Adder</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Adder</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“Adder 类有两个方法，第一个 <code>add()</code> 方法有两个参数，在调用的时候可以传递两个参数；第二个 <code>add()</code> 方法有三个参数，在调用的时候可以传递三个参数。”</p><p>“二哥，这样的代码不会显得啰嗦吗？如果有四个参数的时候就再追加一个方法？”三妹突然提了一个很尖锐的问题。</p><p>“那倒是，这个例子只是为了说明方法重载的一种类型。如果参数类型相同的话，Java 提供了可变参数的方式，就像下面这样。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">int</span> a<span class="token operator">:</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“第二，通过改变参数类型，也可以达到方法重载的目的。来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadingByParamType</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Adder</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Adder</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10.1</span><span class="token punctuation">,</span> <span class="token number">19.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Adder</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“Adder 类有两个方法，第一个 <code>add()</code> 方法的参数类型为 int，第二个 <code>add()</code> 方法的参数类型为 double。”</p><p>“二哥，改变参数的数目和类型都可以实现方法重载，为什么改变方法的返回值类型就不可以呢？”三妹很能抓住问题的重点嘛。</p><p>“因为仅仅改变返回值类型的话，会把编译器搞懵逼的。”我略带调皮的口吻回答她。</p><p>“编译时报错优于运行时报错，所以当两个方法的名字相同，参数个数和类型也相同的时候，虽然返回值类型不同，但依然会提示方法已经被定义的错误。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/21-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“你想啊，三妹。我们在调用一个方法的时候，可以指定返回值类型，也可以不指定。当不指定的时候，直接指定 <code>add(1, 2)</code> 的时候，编译器就不知道该调用返回 int 的 <code>add()</code> 方法还是返回 double 的 <code>add()</code> 方法，产生了歧义。”</p><p>“方法的返回值只是作为方法运行后的一个状态，它是保持方法的调用者和被调用者进行通信的一个纽带，但并不能作为某个方法的‘标识’。”</p><p>“二哥，我想到了一个点，<code>main()</code> 方法可以重载吗？”</p><p>“三妹，这是个好问题啊！答案是肯定的，毕竟 <code>main()</code> 方法也是个方法，只不过，Java 虚拟机在运行的时候只会调用带有 String 数组的那个 <code>main()</code> 方法。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadingMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;String[] args&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;String args&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;无参&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“第一个 <code>main()</code> 方法的参数形式为 <code>String[] args</code>，是最标准的写法；第二个 <code>main()</code> 方法的参数形式为 <code>String args</code>，少了中括号；第三个 <code>main()</code> 方法没有参数。”</p><p>“来看一下程序的输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String[] args
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“从结果中，我们可以看得出，尽管 <code>main()</code> 方法可以重载，但程序只认标准写法。”</p><p>“由于可以通过改变参数类型的方式实现方法重载，那么当传递的参数没有找到匹配的方法时，就会发生隐式的类型转换。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/21-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“如上图所示，byte 可以向上转换为 short、int、long、float 和 double，short 可以向上转换为 int、long、float 和 double，char 可以向上转换为 int、long、float 和 double，依次类推。”</p><p>“三妹，来看下面这个示例。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadingTypePromotion</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OverloadingTypePromotion</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OverloadingTypePromotion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“执行 <code>obj.sum(20, 20)</code> 的时候，发现没有 <code>sum(int a, int b)</code> 的方法，所以此时第二个 20 向上转型为 long，所以调用的是 <code>sum(int a, long b)</code> 的方法。”</p><p>“再来看一个示例。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadingTypePromotion1</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">long</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;long&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OverloadingTypePromotion1</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OverloadingTypePromotion1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“执行 <code>obj.sum(20, 20)</code> 的时候，发现有 <code>sum(int a, int b)</code> 的方法，所以就不会向上转型为 long，调用 <code>sum(long a, long b)</code>。”</p><p>“来看一下程序的输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“继续来看示例。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadingTypePromotion2</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">long</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;long int&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int long&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OverloadingTypePromotion2</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OverloadingTypePromotion2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“二哥，我又想到一个问题。当有两个方法 <code>sum(long a, int b)</code> 和 <code>sum(int a, long b)</code>，参数个数相同，参数类型相同，只不过位置不同的时候，会发生什么呢？”</p><p>“当通过 <code>obj.sum(20, 20)</code> 来调用 sum 方法的时候，编译器会提示错误。” <img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/21-04.png" alt="" loading="lazy"></p><p>“不明确，编译器会很为难，究竟是把第一个 20 从 int 转成 long 呢，还是把第二个 20 从 int 转成 long，智障了！所以，不能写这样让编译器左右为难的代码。”</p><h2 id="_03、方法重写" tabindex="-1"><a class="header-anchor" href="#_03、方法重写" aria-hidden="true">#</a> 03、方法重写</h2><p>“三妹，累吗？我们稍微休息一下吧。”我把眼镜摘下来，放到桌子上，闭上了眼睛，开始胡思乱想起来。</p><p>2000 年，周杰伦横空出世，让青黄不接的唱片行业为之一振，由此开启了新一代天王争霸的黄金时代。2020 年，杰伦胖了，也贪玩了，一年出一张单曲都变得可遇不可求。</p><p>20 年前，程序员很稀有；20 年后，程序员内卷了。时间永远不会停下脚步，明年会不会好起来呢？</p><p>“哥，醒醒，你就说休息一会，没说睡着啊。赶紧，我还有半个小时就要走了。”</p><p>我戴上眼镜，对三妹继续说道：“在 Java 中，方法重写需要满足以下三个规则。”</p><ul><li>重写的方法必须和父类中的方法有着相同的名字；</li><li>重写的方法必须和父类中的方法有着相同的参数；</li><li>必须是 is-a 的关系（继承关系）。</li></ul><p>“来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bike</span> <span class="token keyword">extends</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Bike</span> bike <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bike</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bike<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;车辆在跑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“来看一下程序的输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>车辆在跑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“Bike is-a Vehicle，自行车是一种车，没错。Vehicle 类有一个 <code>run()</code> 的方法，也就是说车辆可以跑，Bike 继承了 Vehicle，也可以跑。但如果 Bike 没有重写 <code>run()</code> 方法的话，自行车就只能是‘车辆在跑’，而不是‘自行车在跑’，对吧？”</p><p>“如果有了方法重写，一切就好办了。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bike</span> <span class="token keyword">extends</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;自行车在跑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Bike</span> bike <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bike</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bike<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;车辆在跑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我把鼠标移动到 Bike 类的 <code>run()</code> 方法，对三妹说：“你看，在方法重写的时候，IDEA 会建议使用 <code>@Override</code> 注解，显式的表示这是一个重写后的方法，尽管可以缺省。”</p><p>“来看一下程序的输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>自行车在跑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“Bike 重写了 <code>run()</code> 方法，也就意味着，Bike 可以跑出自己的风格。”</p><h2 id="_04、总结" tabindex="-1"><a class="header-anchor" href="#_04、总结" aria-hidden="true">#</a> 04、总结</h2><p>“好了，三妹，我来简单做个总结。”我瞥了一眼电脑右上角的时钟，离三妹离开的时间不到 10 分钟了。</p><p>“首先来说一下方法重载时的注意事项，‘两同一不同’。”</p><p>“‘两同’：在同一个类，方法名相同。”</p><p>“‘一不同’：参数不同。”</p><p>“再来说一下方法重写时的注意事项，‘两同一小一大’。”</p><p>“‘两同’：方法名相同，参数相同。”</p><p>“‘一小’：子类方法声明的异常类型要比父类小一些或者相等。”</p><p>“‘一大’：子类方法的访问权限应该比父类的更大或者相等。”</p><p>“记住了吧？三妹。带上口罩，拿好手机，咱准备出门吧。”今天限号，没法开车送三妹去学校了。</p><hr>`,71),r=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),v={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),s(" 即可免费领取。")],-1),b=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function g(y,w){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("话音刚落，我就在 IDEA 中噼里啪啦地敲了起来。两段代码，分别是方法重写和方法重载。然后，把这两段代码截图到 "),n("a",d,[s("draw.io"),p(a)]),s("（一个很漂亮的在线画图网站）上，加了一些文字说明。最后，打开 Photoscape X，把两张图片合并到了一起。")]),k,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),r,s(" 等等等等……详情戳："),n("a",v,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),p(a)])]),m,b])}const h=e(l,[["render",g],["__file","override-overload.html.vue"]]);export{h as default};
