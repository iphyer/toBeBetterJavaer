const e=JSON.parse('{"key":"v-147d8971","path":"/thread/pool.html","title":"面试必问：Java 线程池","lang":"zh-CN","frontmatter":{"title":"面试必问：Java 线程池","shortTitle":"面试必问：Java 线程池","description":"面试必问：Java 线程池","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,线程池"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/pool.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"面试必问：Java 线程池"}],["meta",{"property":"og:description","content":"面试必问：Java 线程池"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面试必问：Java 线程池\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"为什么要使用线程池","slug":"为什么要使用线程池","link":"#为什么要使用线程池","children":[]},{"level":2,"title":"线程池的原理","slug":"线程池的原理","link":"#线程池的原理","children":[{"level":3,"title":"ThreadPoolExecutor提供的构造方法","slug":"threadpoolexecutor提供的构造方法","link":"#threadpoolexecutor提供的构造方法","children":[]},{"level":3,"title":"ThreadPoolExecutor的策略","slug":"threadpoolexecutor的策略","link":"#threadpoolexecutor的策略","children":[]},{"level":3,"title":"线程池主要的任务处理流程","slug":"线程池主要的任务处理流程","link":"#线程池主要的任务处理流程","children":[]},{"level":3,"title":"ThreadPoolExecutor如何做到线程复用的？","slug":"threadpoolexecutor如何做到线程复用的","link":"#threadpoolexecutor如何做到线程复用的","children":[]}]},{"level":2,"title":"四种常见的线程池","slug":"四种常见的线程池","link":"#四种常见的线程池","children":[{"level":3,"title":"newCachedThreadPool","slug":"newcachedthreadpool","link":"#newcachedthreadpool","children":[]},{"level":3,"title":"newFixedThreadPool","slug":"newfixedthreadpool","link":"#newfixedthreadpool","children":[]},{"level":3,"title":"newSingleThreadExecutor","slug":"newsinglethreadexecutor","link":"#newsinglethreadexecutor","children":[]},{"level":3,"title":"newScheduledThreadPool","slug":"newscheduledthreadpool","link":"#newscheduledthreadpool","children":[]}]}],"git":{"createdTime":1648037338000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":16,"words":4800},"filePathRelative":"thread/pool.md","localizedDate":"2022年3月23日","excerpt":"<h2> 为什么要使用线程池</h2>\\n<p>使用线程池主要有以下三个原因：</p>\\n<ol>\\n<li>创建/销毁线程需要消耗系统资源，线程池可以<strong>复用已创建的线程</strong>。</li>\\n<li><strong>控制并发的数量</strong>。并发数量过多，可能会导致资源消耗过多，从而造成服务器崩溃。（主要原因）</li>\\n<li><strong>可以对线程做统一管理</strong>。</li>\\n</ol>\\n<h2> 线程池的原理</h2>\\n<p>Java中的线程池顶层接口是<code>Executor</code>接口，<code>ThreadPoolExecutor</code>是这个接口的实现类。</p>"}');export{e as data};
