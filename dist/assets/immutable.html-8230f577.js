import{_ as e,W as p,X as t,Y as n,a0 as s,Z as o,a1 as c,C as i}from"./framework-bb7be5cb.js";const l={},u=c(`<h1 id="深入理解java中的不可变对象" tabindex="-1"><a class="header-anchor" href="#深入理解java中的不可变对象" aria-hidden="true">#</a> 深入理解Java中的不可变对象</h1><blockquote><p>二哥，你能给我说说为什么 String 是 immutable 类（不可变对象）吗？我想研究它，想知道为什么它就不可变了，这种强烈的愿望就像想研究浩瀚的星空一样。但无奈自身功力有限，始终觉得雾里看花终隔一层。二哥你的文章总是充满趣味性，我想一定能够说明白，我也一定能够看明白，能在接下来写一写吗？</p></blockquote><p>收到读者小 R 的私信后，我就总感觉自己有一种义不容辞的责任，非要把 immutable 类说明白不可！</p><h2 id="_01、什么是不可变类" tabindex="-1"><a class="header-anchor" href="#_01、什么是不可变类" aria-hidden="true">#</a> 01、什么是不可变类</h2><p>一个类的对象在通过构造方法创建后如果状态不会再被改变，那么它就是一个不可变（immutable）类。它的所有成员变量的赋值仅在构造方法中完成，不会提供任何 setter 方法供外部类去修改。</p><p>还记得《神雕侠侣》中小龙女的古墓吗？随着那一声巨响，仅有的通道就被无情地关闭了。别较真那个密道，我这么说只是为了打开你的想象力，让你对不可变类有一个更直观的印象。</p><p>自从有了多线程，生产力就被无限地放大了，所有的程序员都爱它，因为强大的硬件能力被充分地利用了。但与此同时，所有的程序员都对它心生忌惮，因为一不小心，多线程就会把对象的状态变得混乱不堪。</p><p>为了保护状态的原子性、可见性、有序性，我们程序员可以说是竭尽所能。其中，synchronized（同步）关键字是最简单最入门的一种解决方案。</p><p>假如说类是不可变的，那么对象的状态就也是不可变的。这样的话，每次修改对象的状态，就会产生一个新的对象供不同的线程使用，我们程序员就不必再担心并发问题了。</p><h2 id="_02、常见的不可变类" tabindex="-1"><a class="header-anchor" href="#_02、常见的不可变类" aria-hidden="true">#</a> 02、常见的不可变类</h2><p>提到不可变类，几乎所有的程序员第一个想到的，就是 String 类。那为什么 String 类要被设计成不可变的呢？</p><p>1）常量池的需要</p><p>字符串常量池是 Java 堆内存中一个特殊的存储区域，当创建一个 String 对象时，假如此字符串在常量池中不存在，那么就创建一个；假如已经存，就不会再创建了，而是直接引用已经存在的对象。这样做能够减少 JVM 的内存开销，提高效率。</p><p>2）hashCode 的需要</p><p>因为字符串是不可变的，所以在它创建的时候，其 hashCode 就被缓存了，因此非常适合作为哈希值（比如说作为 HashMap 的键），多次调用只返回同一个值，来提高效率。</p><p>3）线程安全</p><p>就像之前说的那样，如果对象的状态是可变的，那么在多线程环境下，就很容易造成不可预期的结果。而 String 是不可变的，就可以在多个线程之间共享，不需要同步处理。</p><p>因此，当我们调用 String 类的任何方法（比如说 <code>trim()</code>、<code>substring()</code>、<code>toLowerCase()</code>）时，总会返回一个新的对象，而不影响之前的值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;沉默王二，一枚有趣的程序员&quot;</span><span class="token punctuation">;</span>
cmower<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cmower<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 沉默王二，一枚有趣的程序员</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然调用 <code>substring()</code> 方法对 cmower 进行了截取，但 cmower 的值没有改变。</p><p>除了 String 类，包装器类 Integer、Long 等也是不可变类。</p><h2 id="_03、手撸不可变类" tabindex="-1"><a class="header-anchor" href="#_03、手撸不可变类" aria-hidden="true">#</a> 03、手撸不可变类</h2><p>看懂一个不可变类也许容易，但要创建一个自定义的不可变类恐怕就有点难了。但知难而进是我们作为一名优秀的程序员不可或缺的品质，正因为不容易，我们才能真正地掌握它。</p><p>接下来，就请和我一起，来自定义一个不可变类吧。一个不可变类，必须要满足以下 4 个条件：</p><p>1）确保类是 final 的，不允许被其他类继承。</p><p>2）确保所有的成员变量（字段）是 final 的，这样的话，它们就只能在构造方法中初始化值，并且不会在随后被修改。</p><p>3）不要提供任何 setter 方法。</p><p>4）如果要修改类的状态，必须返回一个新的对象。</p><p>按照以上条件，我们来自定义一个简单的不可变类 Writer。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Writer 类是 final 的，name 和 age 也是 final 的，没有 setter 方法。</p><p>OK，据说这个作者分享了很多博客，广受读者的喜爱，因此某某出版社找他写了一本书（Book）。Book 类是这样定义的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> price<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">int</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Book{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, price=&quot;</span> <span class="token operator">+</span> price <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 个字段，分别是 name 和 price，以及 getter 和 setter，重写后的 <code>toString()</code> 方法。然后，在 Writer 类中追加一个可变对象字段 book。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Book</span> book<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>book <span class="token operator">=</span> book<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> book<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并在构造方法中追加了 Book 参数，以及 Book 的 getter 方法。</p><p>完成以上工作后，我们来新建一个测试类，看看 Writer 类的状态是否真的不可变。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WriterDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Web全栈开发进阶之路&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">79</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Writer</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;定价：&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">.</span><span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;促销价：&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">.</span><span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序输出的结果如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>定价：<span class="token class-name">Book</span><span class="token punctuation">{</span>name<span class="token operator">=</span>&#39;<span class="token class-name">Web</span>全栈开发进阶之路&#39;<span class="token punctuation">,</span> price<span class="token operator">=</span><span class="token number">79</span><span class="token punctuation">}</span>
促销价：<span class="token class-name">Book</span><span class="token punctuation">{</span>name<span class="token operator">=</span>&#39;<span class="token class-name">Web</span>全栈开发进阶之路&#39;<span class="token punctuation">,</span> price<span class="token operator">=</span><span class="token number">59</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>糟糕，Writer 类的不可变性被破坏了，价格发生了变化。为了解决这个问题，我们需要为不可变类的定义规则追加一条内容：</p><p>如果一个不可变类中包含了可变类的对象，那么就需要确保返回的是可变对象的副本。也就是说，Writer 类中的 <code>getBook()</code> 方法应该修改为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Book</span> clone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    clone<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>book<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    clone<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>book<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> clone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话，构造方法初始化后的 Book 对象就不会再被修改了。此时，运行 WriterDemo，就会发现价格不再发生变化了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>定价：Book{name=&#39;Web全栈开发进阶之路&#39;, price=79}
促销价：Book{name=&#39;Web全栈开发进阶之路&#39;, price=79}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04、总结" tabindex="-1"><a class="header-anchor" href="#_04、总结" aria-hidden="true">#</a> 04、总结</h2><p>不可变类有很多优点，就像之前提到的 String 类那样，尤其是在多线程环境下，它非常的安全。尽管每次修改都会创建一个新的对象，增加了内存的消耗，但这个缺点相比它带来的优点，显然是微不足道的——无非就是捡了西瓜，丢了芝麻。</p><hr>`,48),r=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),k={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),s(" 即可免费领取。")],-1),v=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function m(b,g){const a=i("ExternalLinkIcon");return p(),t("div",null,[u,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),r,s(" 等等等等……详情戳："),n("a",k,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),o(a)])]),d,v])}const y=e(l,[["render",m],["__file","immutable.html.vue"]]);export{y as default};
