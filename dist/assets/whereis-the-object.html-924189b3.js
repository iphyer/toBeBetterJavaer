const e=JSON.parse('{"key":"v-5adc261b","path":"/jvm/whereis-the-object.html","title":"Java 创建的对象到底放在哪？","lang":"zh-CN","frontmatter":{"title":"Java 创建的对象到底放在哪？","shortTitle":"Java创建的对象到底放在哪？","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，Java 创建的对象到底放在哪？","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/jvm/whereis-the-object.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java 创建的对象到底放在哪？"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，Java 创建的对象到底放在哪？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 创建的对象到底放在哪？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"一、对象优先在 Eden 分配","slug":"一、对象优先在-eden-分配","link":"#一、对象优先在-eden-分配","children":[]},{"level":3,"title":"二、大对象直接进入老年代","slug":"二、大对象直接进入老年代","link":"#二、大对象直接进入老年代","children":[]},{"level":3,"title":"三、长期存活的对象将进入老年代","slug":"三、长期存活的对象将进入老年代","link":"#三、长期存活的对象将进入老年代","children":[]},{"level":3,"title":"四、动态年龄判断","slug":"四、动态年龄判断","link":"#四、动态年龄判断","children":[]},{"level":3,"title":"五、空间分配担保","slug":"五、空间分配担保","link":"#五、空间分配担保","children":[]}],"git":{"createdTime":1645920782000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":10},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":4.12,"words":1235},"filePathRelative":"jvm/whereis-the-object.md","localizedDate":"2022年2月27日","excerpt":"<h1> Java 创建的对象到底放在哪？</h1>\\n<p>大家好，我是二哥呀。创建对象的时候，对象是在堆内存中创建的。但堆内存又分为新生代和老年代，新生代又细分为 Eden 空间、From Survivor 空间、To Survivor 空间。<strong>那我们创建的对象到底在哪里</strong>？</p>\\n<h3> 一、对象优先在 Eden 分配</h3>\\n<p>堆内存分为新生代和老年代，新生代是用于存放使用后准备被回收的对象，老年代是用于存放生命周期比较长的对象。</p>\\n<p>大部分我们创建的对象，都属于生命周期比较短的，所以会存放在新生代。新生代又细分 Eden 空间、From Survivor 空间、To Survivor 空间，我们创建的对象优先在 Eden 分配。</p>"}');export{e as data};
