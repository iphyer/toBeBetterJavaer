const t=JSON.parse('{"key":"v-ccb364be","path":"/thread/LockSupport.html","title":"深入理解Java并发线程阻塞唤醒类LockSupport","lang":"zh-CN","frontmatter":{"title":"深入理解Java并发线程阻塞唤醒类LockSupport","shortTitle":"线程阻塞唤醒类LockSupport","description":"深入理解Java并发线程阻塞唤醒类LockSupport","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,LockSupport"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/LockSupport.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"深入理解Java并发线程阻塞唤醒类LockSupport"}],["meta",{"property":"og:description","content":"深入理解Java并发线程阻塞唤醒类LockSupport"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解Java并发线程阻塞唤醒类LockSupport\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"阻塞线程","slug":"阻塞线程","link":"#阻塞线程","children":[]},{"level":2,"title":"唤醒线程","slug":"唤醒线程","link":"#唤醒线程","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8}]},"readingTime":{"minutes":4.09,"words":1228},"filePathRelative":"thread/LockSupport.md","localizedDate":"2022年3月23日","excerpt":"<h1> 深入理解Java并发线程阻塞唤醒类LockSupport</h1>\\n<p>LockSupport位于java.util.concurrent.locks包下，有兴趣的可以直接去看源码，该类的方法并不是很多。LockSupprot是线程的阻塞原语，用来阻塞线程和唤醒线程。每个使用LockSupport的线程都会与一个许可关联，如果该许可可用，并且可在线程中使用，则调用park()将会立即返回，否则可能阻塞。如果许可尚不可用，则可以调用 unpark 使其可用。但是注意许可<strong>不可重入</strong>，也就是说只能调用一次park()方法，否则会一直阻塞。</p>\\n<p>LockSupport中的方法不多，这里将这些方法做一个总结：</p>"}');export{t as data};
