const e=JSON.parse('{"key":"v-16000f89","path":"/jvm/compile-jdk.html","title":"自己编译JDK","lang":"zh-CN","frontmatter":{"title":"自己编译JDK","shortTitle":"自己编译JDK","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，自己编译JDK","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机,JDK"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/jvm/compile-jdk.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"自己编译JDK"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，自己编译JDK"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自己编译JDK\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"1、boot JDK","slug":"_1、boot-jdk","link":"#_1、boot-jdk","children":[]},{"level":3,"title":"2、Unix环境","slug":"_2、unix环境","link":"#_2、unix环境","children":[]},{"level":3,"title":"3、编译器/编译工具链","slug":"_3、编译器-编译工具链","link":"#_3、编译器-编译工具链","children":[]},{"level":3,"title":"4、其他工具","slug":"_4、其他工具","link":"#_4、其他工具","children":[]}]},{"level":2,"title":"下载JDK源码","slug":"下载jdk源码","link":"#下载jdk源码","children":[{"level":3,"title":"方式一：通过Mercurial工具下载","slug":"方式一-通过mercurial工具下载","link":"#方式一-通过mercurial工具下载","children":[]},{"level":3,"title":"方式二：直接下载打包好的源码包","slug":"方式二-直接下载打包好的源码包","link":"#方式二-直接下载打包好的源码包","children":[]},{"level":3,"title":"编译前的自动配置","slug":"编译前的自动配置","link":"#编译前的自动配置","children":[]}]},{"level":2,"title":"真正的编译动作","slug":"真正的编译动作","link":"#真正的编译动作","children":[]},{"level":2,"title":"验证成果","slug":"验证成果","link":"#验证成果","children":[{"level":3,"title":"1、JDK 8的编译输出","slug":"_1、jdk-8的编译输出","link":"#_1、jdk-8的编译输出","children":[]},{"level":3,"title":"2、JDK 11的编译输出","slug":"_2、jdk-11的编译输出","link":"#_2、jdk-11的编译输出","children":[]}]},{"level":2,"title":"使用自己编译的JDK","slug":"使用自己编译的jdk","link":"#使用自己编译的jdk","children":[]},{"level":2,"title":"关联JDK源码并修改","slug":"关联jdk源码并修改","link":"#关联jdk源码并修改","children":[]},{"level":2,"title":"多行注释的问题","slug":"多行注释的问题","link":"#多行注释的问题","children":[]}],"git":{"createdTime":1648354033000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":10},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":11.71,"words":3512},"filePathRelative":"jvm/compile-jdk.md","localizedDate":"2022年3月27日","excerpt":"<h1> 自己编译JDK</h1>\\n<p>很多小伙伴们做<code>Java</code>开发，天天写<code>Java</code>代码，肯定离不开<code>Java</code>基础环境：<code>JDK</code>，毕竟我们写好的<code>Java</code>代码也是跑在<code>JVM</code>虚拟机上。</p>\\n<p>一般来说，我们学<code>Java</code>之前，第一步就是安装<code>JDK</code>环境。这个简单啊，我们一般直接把<code>JDK</code>从官网下载下来，安装完成，配个环境变量就可以愉快地使用了。</p>\\n<p>不过话说回来，对于这个天天使用的东西，我们难道不好奇这玩意儿它到底是怎么由源码编译出来的吗？</p>"}');export{e as data};
