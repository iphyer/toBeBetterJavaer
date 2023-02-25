const e=JSON.parse('{"key":"v-4c7ec7a6","path":"/thread/ReentrantReadWriteLock.html","title":"深入理解Java并发读写锁ReentrantReadWriteLock","lang":"zh-CN","frontmatter":{"title":"深入理解Java并发读写锁ReentrantReadWriteLock","shortTitle":"读写锁ReentrantReadWriteLock","description":"深入理解Java并发读写锁ReentrantReadWriteLock","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,读写锁,ReentrantReadWriteLock"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/ReentrantReadWriteLock.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"深入理解Java并发读写锁ReentrantReadWriteLock"}],["meta",{"property":"og:description","content":"深入理解Java并发读写锁ReentrantReadWriteLock"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解Java并发读写锁ReentrantReadWriteLock\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"写锁详解","slug":"写锁详解","link":"#写锁详解","children":[{"level":3,"title":"写锁的获取","slug":"写锁的获取","link":"#写锁的获取","children":[]},{"level":3,"title":"写锁的释放","slug":"写锁的释放","link":"#写锁的释放","children":[]}]},{"level":2,"title":"读锁详解","slug":"读锁详解","link":"#读锁详解","children":[{"level":3,"title":"读锁的获取","slug":"读锁的获取","link":"#读锁的获取","children":[]},{"level":3,"title":"读锁的释放","slug":"读锁的释放","link":"#读锁的释放","children":[]}]},{"level":2,"title":"锁降级","slug":"锁降级","link":"#锁降级","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":8.44,"words":2531},"filePathRelative":"thread/ReentrantReadWriteLock.md","localizedDate":"2022年3月23日","excerpt":"<h1> 深入理解Java并发读写锁ReentrantReadWriteLock</h1>\\n<p>在并发场景中用于解决线程安全的问题，我们几乎会高频率的使用到独占式锁，通常使用java提供的关键字synchronized或者concurrents包中实现了Lock接口的ReentrantLock。它们都是独占式获取锁，也就是在同一时刻只有一个线程能够获取锁。</p>\\n<p>而在一些业务场景中，大部分只是读数据，写数据很少，如果仅仅是读数据的话并不会影响数据正确性（出现脏读），而如果在这种业务场景下，依然使用独占锁的话，很显然这将是出现性能瓶颈的地方。针对这种读多写少的情况，java还提供了另外一个实现Lock接口的ReentrantReadWriteLock(读写锁)。</p>"}');export{e as data};
