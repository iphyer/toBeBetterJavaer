const t=JSON.parse('{"key":"v-2e2eacb5","path":"/oo/static.html","title":"一文彻底搞懂 Java static 关键字：静态变量、静态方法、静态代码块、静态内部类","lang":"zh-CN","frontmatter":{"title":"一文彻底搞懂 Java static 关键字：静态变量、静态方法、静态代码块、静态内部类","shortTitle":"一文彻底搞懂Java static关键字","description":"Java程序员进阶之路，小白的零基础Java教程，一文彻底搞懂 Java static 关键字：静态变量、静态方法、静态代码块、静态内部类","category":["Java 核心"],"tag":["面向对象编程"],"head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,static,java静态变量,java静态方法,java静态代码块,java静态内部类"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/oo/static.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"一文彻底搞懂 Java static 关键字：静态变量、静态方法、静态代码块、静态内部类"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，一文彻底搞懂 Java static 关键字：静态变量、静态方法、静态代码块、静态内部类"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-25T05:40:29.000Z"}],["meta",{"property":"article:tag","content":"面向对象编程"}],["meta",{"property":"article:modified_time","content":"2023-02-25T05:40:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一文彻底搞懂 Java static 关键字：静态变量、静态方法、静态代码块、静态内部类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-25T05:40:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"01、静态变量","slug":"_01、静态变量","link":"#_01、静态变量","children":[]},{"level":2,"title":"02、静态方法","slug":"_02、静态方法","link":"#_02、静态方法","children":[]},{"level":2,"title":"03、静态代码块","slug":"_03、静态代码块","link":"#_03、静态代码块","children":[]},{"level":2,"title":"04、静态内部类","slug":"_04、静态内部类","link":"#_04、静态内部类","children":[]}],"git":{"createdTime":1634887330000,"updatedTime":1677303629000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":10.65,"words":3196},"filePathRelative":"oo/static.md","localizedDate":"2021年10月22日","excerpt":"<p>“哥，你牙龈肿痛轻点没？周一的《教妹学 Java》（Java程序员进阶之路的前身）你都没有更新，偷懒了呀！”三妹关心地问我。</p>\\n<p>“今天周四了，吃了三天的药，疼痛已经减轻不少，咱妈还给我打了电话，让我买点牛黄解毒片下下火。”我面带着微笑对三妹说，“学习可不能落下，今天我们来学 Java 中 <code>static</code> 关键字吧。”</p>\\n<p>“static 是 Java 中比较难以理解的一个关键字，也是各大公司的面试官最喜欢问到的一个知识点之一。”我喝了一口咖啡继续说道。</p>\\n<p>“既然是面试重点，那我可得好好学习下。”三妹连忙说。</p>\\n<p>“static 关键字的作用可以用一句话来描述：‘<strong>方便在没有创建对象的情况下进行调用</strong>，包括变量和方法’。也就是说，只要类被加载了，就可以通过类名进行访问。”我扶了扶沉重眼镜，继续说到，“static 可以用来修饰类的成员变量，以及成员方法。我们一个个来看。”</p>"}');export{t as data};
