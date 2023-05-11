const e=JSON.parse('{"key":"v-7f4a0796","path":"/exception/gailan.html","title":"一文彻底搞懂Java异常处理，YYDS","lang":"zh-CN","frontmatter":{"title":"一文彻底搞懂Java异常处理，YYDS","shortTitle":"Java异常处理全面解析","category":["Java核心"],"tag":["异常处理"],"description":"本文详细介绍了Java异常处理的基本概念、种类和原则，以及如何使用try-catch-finally和throw、throws关键字进行异常处理。通过实际案例和代码示例，帮助读者掌握Java异常处理的关键技巧，提高编程中的错误检测与处理能力。","head":[["meta",{"name":"keywords","content":"Java,Java异常处理, try-catch-finally, throw, throws,异常处理,java 异常处理"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/exception/gailan.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"一文彻底搞懂Java异常处理，YYDS"}],["meta",{"property":"og:description","content":"本文详细介绍了Java异常处理的基本概念、种类和原则，以及如何使用try-catch-finally和throw、throws关键字进行异常处理。通过实际案例和代码示例，帮助读者掌握Java异常处理的关键技巧，提高编程中的错误检测与处理能力。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:tag","content":"异常处理"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一文彻底搞懂Java异常处理，YYDS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"01、什么是异常","slug":"_01、什么是异常","link":"#_01、什么是异常","children":[]},{"level":3,"title":"02、Exception和Error的区别","slug":"_02、exception和error的区别","link":"#_02、exception和error的区别","children":[]},{"level":3,"title":"03、checked和unchecked异常","slug":"_03、checked和unchecked异常","link":"#_03、checked和unchecked异常","children":[]},{"level":3,"title":"04、关于 throw 和 throws","slug":"_04、关于-throw-和-throws","link":"#_04、关于-throw-和-throws","children":[]},{"level":3,"title":"05、关于 try-catch-finally","slug":"_05、关于-try-catch-finally","link":"#_05、关于-try-catch-finally","children":[]},{"level":3,"title":"06、小结","slug":"_06、小结","link":"#_06、小结","children":[]}],"git":{"createdTime":1626159673000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":6},{"name":"shuimuju","email":"73344468+shuimuju@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":16.64,"words":4991},"filePathRelative":"exception/gailan.md","localizedDate":"2021年7月13日","excerpt":"<h1> 8.1 Java异常处理全面解析</h1>\\n<h3> 01、什么是异常</h3>\\n<p>“二哥，今天就要学习异常了吗？”三妹问。</p>\\n<p>“是的。只有正确地处理好异常，才能保证程序的可靠性，所以异常的学习还是很有必要的。”我说。</p>\\n<p>“那到底什么是异常呢？”三妹问。</p>\\n<p>“异常是指中断程序正常执行的一个不确定的事件。当异常发生时，程序的正常执行流程就会被打断。一般情况下，程序都会有很多条语句，如果没有异常处理机制，前面的语句一旦出现了异常，后面的语句就没办法继续执行了。”</p>\\n<p>“有了异常处理机制后，程序在发生异常的时候就不会中断，我们可以对异常进行捕获，然后改变程序执行的流程。”</p>"}');export{e as data};
