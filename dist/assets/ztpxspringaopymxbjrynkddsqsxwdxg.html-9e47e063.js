const e=JSON.parse('{"key":"v-25052d00","path":"/nice-article/weixin/ztpxspringaopymxbjrynkddsqsxwdxg.html","title":"绝了，76张手绘图，彻底剖析清楚Spring AOP","lang":"zh-CN","frontmatter":{"title":"绝了，76张手绘图，彻底剖析清楚Spring AOP","shortTitle":"76 张手绘图，剖析 Spring AOP 源码","description":"第三篇 Sping 源码解读，肝了 2 个星期，抠图都扣麻了，深入浅出，绝对干货！","author":"楼仔","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/ztpxspringaopymxbjrynkddsqsxwdxg.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"绝了，76张手绘图，彻底剖析清楚Spring AOP"}],["meta",{"property":"og:description","content":"第三篇 Sping 源码解读，肝了 2 个星期，抠图都扣麻了，深入浅出，绝对干货！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"楼仔"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"绝了，76张手绘图，彻底剖析清楚Spring AOP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"楼仔\\"}]}"]]},"headers":[{"level":2,"title":"1. 基础知识","slug":"_1-基础知识","link":"#_1-基础知识","children":[{"level":3,"title":"1.1 什么是 AOP ？","slug":"_1-1-什么是-aop","link":"#_1-1-什么是-aop","children":[]},{"level":3,"title":"1.2 AOP 基础概念","slug":"_1-2-aop-基础概念","link":"#_1-2-aop-基础概念","children":[]},{"level":3,"title":"1.3 AOP 简单示例","slug":"_1-3-aop-简单示例","link":"#_1-3-aop-简单示例","children":[]},{"level":3,"title":"1.4 Spring AOP 工作流程","slug":"_1-4-spring-aop-工作流程","link":"#_1-4-spring-aop-工作流程","children":[]}]},{"level":2,"title":"2. 源码解读","slug":"_2-源码解读","link":"#_2-源码解读","children":[{"level":3,"title":"2.1 代码入口","slug":"_2-1-代码入口","link":"#_2-1-代码入口","children":[]},{"level":3,"title":"2.2 前置处理","slug":"_2-2-前置处理","link":"#_2-2-前置处理","children":[]},{"level":3,"title":"2.2.1 判断是否是切面","slug":"_2-2-1-判断是否是切面","link":"#_2-2-1-判断是否是切面","children":[]},{"level":3,"title":"2.2.2 获取切面列表","slug":"_2-2-2-获取切面列表","link":"#_2-2-2-获取切面列表","children":[]},{"level":3,"title":"2.3 后置处理","slug":"_2-3-后置处理","link":"#_2-3-后置处理","children":[]},{"level":3,"title":"2.4 切面执行","slug":"_2-4-切面执行","link":"#_2-4-切面执行","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":1666929463000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":13.33,"words":3998},"filePathRelative":"nice-article/weixin/ztpxspringaopymxbjrynkddsqsxwdxg.md","localizedDate":"2022年10月28日","excerpt":"<p>下面我会简单介绍一下 AOP 的基础知识，以及使用方法，然后直接对源码进行拆解。不 BB，上文章目录。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ztpxspringaopymxbjrynkddsqsxwdxg-47fdcb84-4294-416f-b95e-9d9bd427717b.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2> 1. 基础知识</h2>"}');export{e as data};
