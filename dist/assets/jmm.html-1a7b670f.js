const e=JSON.parse('{"key":"v-31e3344a","path":"/thread/jmm.html","title":"全面理解Java的内存模型（JMM）","lang":"zh-CN","frontmatter":{"title":"全面理解Java的内存模型（JMM）","shortTitle":"全面理解Java的内存模型（JMM）","description":"全面理解Java的内存模型（JMM）","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,内存模型"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/jmm.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"全面理解Java的内存模型（JMM）"}],["meta",{"property":"og:description","content":"全面理解Java的内存模型（JMM）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"全面理解Java的内存模型（JMM）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"并发编程模型的两个关键问题","slug":"并发编程模型的两个关键问题","link":"#并发编程模型的两个关键问题","children":[]},{"level":2,"title":"Java内存模型的抽象结构","slug":"java内存模型的抽象结构","link":"#java内存模型的抽象结构","children":[{"level":3,"title":"运行时内存的划分","slug":"运行时内存的划分","link":"#运行时内存的划分","children":[]},{"level":3,"title":"既然堆是共享的，为什么在堆中会有内存不可见问题？","slug":"既然堆是共享的-为什么在堆中会有内存不可见问题","link":"#既然堆是共享的-为什么在堆中会有内存不可见问题","children":[]},{"level":3,"title":"JMM与Java内存区域划分的区别与联系","slug":"jmm与java内存区域划分的区别与联系","link":"#jmm与java内存区域划分的区别与联系","children":[]}]},{"level":2,"title":"什么是重排序？","slug":"什么是重排序","link":"#什么是重排序","children":[]},{"level":2,"title":"顺序一致性模型与JMM的保证","slug":"顺序一致性模型与jmm的保证","link":"#顺序一致性模型与jmm的保证","children":[{"level":3,"title":"数据竞争与顺序一致性","slug":"数据竞争与顺序一致性","link":"#数据竞争与顺序一致性","children":[]},{"level":3,"title":"顺序一致性模型","slug":"顺序一致性模型","link":"#顺序一致性模型","children":[]},{"level":3,"title":"JMM中同步程序的顺序一致性效果","slug":"jmm中同步程序的顺序一致性效果","link":"#jmm中同步程序的顺序一致性效果","children":[]},{"level":3,"title":"JMM中未同步程序的顺序一致性效果","slug":"jmm中未同步程序的顺序一致性效果","link":"#jmm中未同步程序的顺序一致性效果","children":[]}]},{"level":2,"title":"happens-before","slug":"happens-before","link":"#happens-before","children":[{"level":3,"title":"什么是happens-before?","slug":"什么是happens-before","link":"#什么是happens-before","children":[]},{"level":3,"title":"天然的happens-before关系","slug":"天然的happens-before关系","link":"#天然的happens-before关系","children":[]}]}],"git":{"createdTime":1648037338000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":17.42,"words":5225},"filePathRelative":"thread/jmm.md","localizedDate":"2022年3月23日","excerpt":"<h1> 全面理解Java的内存模型（JMM）</h1>\\n<p>在面试中，面试官经常喜欢问：『说说什么是Java内存模型(JMM)？』</p>\\n<p>面试者内心狂喜，这题刚背过：『Java内存主要分为五大块：堆、方法区、虚拟机栈、本地方法栈、PC寄存器，balabala……』</p>\\n<p>面试官会心一笑，露出一道光芒：『好了，今天的面试先到这里了，回去等通知吧』</p>\\n<p>一般听到等通知这句话，这场面试大概率就是凉凉了。为什么呢？因为面试者弄错了概念，面试官是想考察JMM，但是面试者一听到<code>Java内存</code>这几个关键字就开始背诵八股文了。Java内存模型(JMM)和Java运行时内存区域区别可大了呢，不要走开接着往下看，答应我要看完。</p>"}');export{e as data};
