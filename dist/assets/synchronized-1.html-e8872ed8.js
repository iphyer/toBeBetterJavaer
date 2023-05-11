const e=JSON.parse('{"key":"v-40593c55","path":"/thread/synchronized-1.html","title":"面了一个25岁的学妹，把synchronized关键字讲的那叫一个透彻","lang":"zh-CN","frontmatter":{"title":"面了一个25岁的学妹，把synchronized关键字讲的那叫一个透彻","shortTitle":"synchronized关键字","description":"主要讲解synchronized的应用方式和内存语义。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,synchronized"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/synchronized-1.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"面了一个25岁的学妹，把synchronized关键字讲的那叫一个透彻"}],["meta",{"property":"og:description","content":"主要讲解synchronized的应用方式和内存语义。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面了一个25岁的学妹，把synchronized关键字讲的那叫一个透彻\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"synchronized 的三种应用方式","slug":"synchronized-的三种应用方式","link":"#synchronized-的三种应用方式","children":[{"level":3,"title":"synchronized 作用于实例方法","slug":"synchronized-作用于实例方法","link":"#synchronized-作用于实例方法","children":[]},{"level":3,"title":"synchronized 作用于静态方法","slug":"synchronized-作用于静态方法","link":"#synchronized-作用于静态方法","children":[]},{"level":3,"title":"synchronized 同步代码块","slug":"synchronized-同步代码块","link":"#synchronized-同步代码块","children":[]}]},{"level":2,"title":"synchronized 禁止指令重排分析","slug":"synchronized-禁止指令重排分析","link":"#synchronized-禁止指令重排分析","children":[]},{"level":2,"title":"synchronized 的可重入性","slug":"synchronized-的可重入性","link":"#synchronized-的可重入性","children":[]},{"level":2,"title":"ending","slug":"ending","link":"#ending","children":[]}],"git":{"createdTime":1663127067000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":5},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9.54,"words":2863},"filePathRelative":"thread/synchronized-1.md","localizedDate":"2022年9月14日","excerpt":"<p>二哥：“三妹，今天我们来学习 synchronized 关键字的应用方式和内存语义吧。”</p>\\n<p>三妹（颜值在线，气质也在线）：“好的。”</p>\\n<h2> 前言</h2>\\n<p>建议大家先看前面的文章《<a href=\\"https://mp.weixin.qq.com/s/s983WflPH7jF0-_SpGRfBg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java 并发编程系列 1-基础知识</a>》，特别是并发编程相关的可见性、有序性，以及内存模型 JMM 等。</p>\\n<p>在 Java 中，关键字 synchronized 可以保证在同一个时刻，只有一个线程可以执行某个方法或者某个代码块(主要是对方法或者代码块中存在共享数据的操作)，同时我们还应该注意到 synchronized 另外一个重要的作用，synchronized 可保证一个线程的变化(主要是共享数据的变化)被其他线程所看到（保证可见性，完全可以替代 Volatile 功能）。</p>"}');export{e as data};
