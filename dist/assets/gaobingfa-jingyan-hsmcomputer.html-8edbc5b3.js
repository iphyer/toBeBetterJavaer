import{_ as p,W as r,X as s,Y as t,a0 as e,Z as o,a1 as a,C as i}from"./framework-bb7be5cb.js";const g={},d=a('<p><strong>先说结论。</strong></p><p>1、首先得在自己电脑上鼓捣出 Redis，kafka，dubbo，mycat 等高并发分布式组件的环境，通过这些环境了解分布式组件的基本 api。</p><p>2、为这些分布式组件找个项目场景，证明自己用过，并且解决过实际问题。这里需要指出的是，单纯背高并发的面试题没用。</p><p>3、修改简历，找到高并发面试的机会，然后通过多场面试，不断调整自己讲述高并发项目经验的水平。这时，如果能直接用高并发的说辞进大厂，那是最好的，如果不能，找个过渡性的能提供高并发实践的岗位。</p><p>4 **如果有高并发项目的实践经验，那么后面就不用说了，只要多解决实际问题，高并发技能一定能很快掌握。**这时掌握的高并发技能，就不是单纯的理论说辞和简单的 API 技能了，而是正宗的高并发项目实践技能。</p><p>可以这样说，能否找到高并发项目的实践经验，决定着程序员能否升级到架构师，不过这不容易。下面讲一下我的一个朋友的经历，二哥经常和他聊天，互相在知乎上点赞，哈哈哈。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/gaobingfa-jingyan-hsmcomputer-9c0199ae-e4ed-40d3-893a-74a87dcd1759.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1、17 年年初的时候，朋友在项目组里只用简单的 Spring + JDBC/ORM 做业务，开发是在 windows 上的，接触到的高并发组件，也就是 nginx 和 mysql 集群，加上一些 linux 上部署和调试组件的经验，并没有高并发组件的使用经验。</p><p>相信当下不少球友和我这位朋友一样，只会做 windows 系统上的增删改查，没有任何分布式组件和高并发经验。</p><p>那如果就这样下去，只会基本的增删改查，再干个几年，等年纪上来了，估计连跳槽的机会都没。</p><p>2、后来，这位朋友就去背题，什么 redis 数据结构，dubbo 协议，kafka 流程等等，高并发情况下防幂等，netty 堆外内存的使用要点，jvm 调优等。凡是和高并发有关的，他基本都背了一下。然后就开始修改简历，就写，在 xx 项目里，并发量是每秒 xx，用到了 Redis,kafka, dubbo（省略其它分布式组件）等等，然后投简历。</p><p>3、由于朋友当时的公司不错，所以投出去的简历很快得到回应，也得到了不少大厂的面试机会。刚开始面试时，Java、数据库等方面，朋友都是秒通过。但是如果问到分布式组件，朋友基本就说不上来。</p><p>因为朋友背的都是脱离项目的理论，比如 mysql 集群的搭建方法和 redis 数据结构等，面试官是结合项目问的，比如问，你项目里 Redis 如何确保高可用，用 nginx 部署 spring boot 项目时，配置文件中注意的要点是什么。<strong>由于朋友是单纯背理论，所以就回答不上来。</strong></p><p>4、尝试了几次，朋友意识到单纯背题一定不行，<strong>他就在他的电脑上，搭建了诸多高并发组件的开发环境。虽然组件在项目里都运行在 linux 上，但大多高并发组件都有 windows 版。</strong></p><p>当时朋友搭建了 mysql 主从集群，redis 主从集群，rabbitmq, dubbo+zookeeper，nginx，mycat 等开发环境，了解各组件的基本用法，然后为每个组件找了个项目背景。比如说 redis，朋友就说，我们项目需要缓存员工信息，所以用到了 Redis 里的 xxx API，对应的 Java 代码是什么，类似的，为每个组件都找个了应用背景。</p><p>5、这个时候朋友再去面试，在分布式组件方面，就能和面试官有来有去了，甚至还面试成功了几家小公司。但如果面试官问些实践要点，比如 redis 如何防穿透，redis cluster 的失效转移等，朋友就答不上来。<strong>所以朋友当时给面试官的印象是，有分布式组件的使用经验，也会用分布式组件开发基本的高并发技能，但缺乏系统的用分布式组件实现高并发的能力。</strong></p><p>6、这个时候，朋友就回想起刚开始背题的一些内容，比如 netty 防堆外内存溢出，netty 如何解决半包粘包，redis 如何防穿透，mycat 如何实现读写分离，还有限流和熔断等机制等。<strong>这时朋友才感到，原来这些题目是要等掌握一定高并发说辞后再用，不是一开始就用的。</strong></p><p><strong>明白这些以后就好办多了，这些技能和开发无关，只需要结合项目背景讲下实现要点。</strong></p><p>比如以限流为例，先准备一个限流场景，比如公司查询系统每秒只能放 1000 个请求，然后说下实践要点，无非是 redis+lua，再说下异常情况下怎么处理，无非就超量情况下抛异常。其它熔断防穿透都要点都按这样准备。</p><p>7、请注意，到了这个时间点，朋友的分布式高并发经验，也仅仅是停留在理论层面，但这个时候我去面试，就能通过用法+实践要点的说辞，成功把自己包装成有高并发项目经验的人了，后面的面试成功率就高很多了。</p><p>不过在这个阶段，为了挑战大厂的岗位，<strong>朋友还准备了“项目中解决过的实际问题”。</strong></p><p>套路说辞基本一样，首先遇到什么问题，比如 redis 穿透，或 oom 异常，或 kafka 私信堆积过多，然后说表现，表现无非是系统宕机，卡死，或功能异常，再说如何排查，无非是通过看日志，日志中遇到什么异常，发现什么问题，最后再说怎么解决的。</p><p>网上这种问题一搜一大堆，但网上的说辞大多是纯理论的，**得为这些问题找个项目背景。**比如 xx 支付系统遇到 oom 异常，xx 优惠券分发系统遇到死信过多，xx 支付系统遇到 redis 穿透等等。</p><p>8、也就是说，通过不断面试，朋友整理了高并发方面的<strong>基本用法+实践要点+解决过问题</strong>等说辞。这样虽然还是没高并发项目经验，但已经能确保进大厂了。<strong>事实上朋友就这样进大厂的。</strong></p><p>9、进大厂以后，其实朋友的日子很难过，<strong>一方面项目组通过面试，认定他有高并发项目经验，其实他没有</strong>，但朋友不这样说，他就只能在原来的公司做基本的增删改查。</p><p>这时，朋友除了自己到处查以外，只能一方面厚着脸皮到处问人，另一方面多加班。由于朋友的项目用到高并发，所以日常工作中有大量的开发，部署，调试机会，平时也经常解决高并发的问题。</p><p>所以朋友的苦日子也就过了 3 个月，后面他不仅能解决高并发的问题，还能参加压力测试**，通过压力测试提升高并发的性能，做到这个程度，朋友才算真正获得了高并发的项目经验。**</p><p>10、 <strong>掌握高并发经验的红利是相当大的</strong>。当朋友掌握高并发经验后，后面找工作，基本上大多数的技术面试都能过。</p><p>二哥就认识一个大佬，叫李智慧，由于有高并发架构的能力，目前在极客 xx 上出了一门高并发架构课，不知道有球友听说过吗？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/gaobingfa-jingyan-hsmcomputer-81c5ab21-c5dd-48e8-8af2-b301cf04d9e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果你也有高并发的经验，也可以进个外企养老，或者是找个小公司做技术总监，不至于在 35 岁被淘汰。</p><p><strong>其实我发现，不少人掌握高并发技能的经历和二哥的朋友很相似。</strong></p><p>1、在公司项目没有提供高并发实践机会的前提下，通过背题等，哪怕根据一些所谓的思维导图，把相关全学了一遍。</p><p>2、然后进入到提供高并发实践机会的项目里，得到相关经验。</p><p>3、得到高并发的实践机会，通过项目真正掌握高并发的技能。</p><p>最后做个总结，<strong>高并发能力包括哪些，如何该怎么掌握？这无法通过短短的文章来说明</strong>。</p><p>但是，你就照着我在上文里给出的步骤，先搭建环境，再掌握分布式组件的基本用法，再了解高并发的实践要点和解决问题的说辞，你至少能通过面试得到高并发项目的实践机会。</p><p>掌握高并发经验的难点在于得到实践机会，进了项目组，有了实践机会，高并发技巧就不用我说了，你自己就能知道如何掌握。</p><p><strong>前文已经说了，要得到高并发经验，一般得分两步走，第一通过面试得到实践机会，第二在项目中提升，其实难点在第一点，在零基础前提下，准备高并发方面的面试，确实难。而通过面试找到项目实践机会后，可能会被人鄙视，也会被领导认为很水，但好歹得到了能进一步提升的机会。</strong></p><p>这里特别提一句，大厂技术面试官一般眼睛都很毒，高并发项目经验，或者高并发方面只有理论经验的候选人，通过寥寥几个问题就能问出。这点大家不要有侥幸心理。</p><p><strong>那在零基础前提下，准备高并发方面的面试的难点在哪里呢？</strong></p><p>1、高并发的组件大多是运行在 linux 上，windows 很难搭建环境，没有环境其它就不用说了。</p><p>2、零基础的球友，不知道高并发场景下的分布式组件怎么用，<strong>或者只知道如何用简单的 api</strong>。由于缺乏项目经验，所以也不知道分布式组件在项目里是怎么用的。</p><p>3、在学分布式组件解决高并发问题方面，往往只会孤立地使用某个组件，比如孤立使用 redis 做缓存，孤立使用 rabbitmq 做消息中间件，但现实场景下，往往是综合使用多个分布式组件，协同解决高并发问题。</p><p>4、由于只会理论，没有在项目里接触过高并发开发，<strong>所以普遍缺乏分析排查解决高并发方面问题的经验。</strong></p><p>在高并发场景下，往往会用到集群，熔断，限流等。在使用高并发组件的时候，往往也会踩到不少坑，比如 mycat 方言不对，netty 半包，消息中间件重发等。</p><p>**大厂面试官往往是会通过这些经常遇到的问题，来确认求职者的高并发方面的经验，**而一些没有高并发项目经验的求职者，在这方面往往是不堪一击的。</p><p><strong>下面就以我考核高并发技能的方式，让大家体验一下零项目经验高并发求职者的难度。</strong></p><p>1、不问概念，比如 redis 数据结构，netty 重要组件。因为零项目经验的高并发求职者一定背过。</p><p>2、第一层难度，这块问题不固定，我先问，你项目里用到哪些分布式组件，然后指着用过的分布式组件，问下 Java 环境下的基本 api 和配置。比如用过 Redis 我就问 Jedis 的语法，用过 Netty 就问 java 层面如何做通讯协议，用过 RabbitMQ 就问 Spring Boot 要做哪些配置。</p><p>我就问你用过的组件，java 里是怎么用的。我发现不少只会背理论的求职者，单纯讲组件（比如 Redis 或 netty 等）很熟悉，但不知道怎么和 Java 整合，这就说不过去了。</p><p>3、第二层难度，有些求职者自己搭建过环境，知道分布式组件的 api。对这些求职者，我进一步提问，和我说下你用(Redis，Kafka，Netty，nginx 等的)分布式组件的项目场景，比如你说你用 Redis，你们项目的数据量是多少？你们项目是用单机版 Redis 还是 Redis 集群，如果是单机版 Redis，你们怎么确保高可用？</p><p>这样当我结合项目背景问的时候，会发现不少高并发方面的求职者露馅。用他们的话说，nginx 都是部署在 windows 上的，redis 只用单机版，而且数据量不高。这也能说明不少求职者没有高并发分布式组件的使用经验。</p><p>4、其实如果求职者能结合项目背景说分布式组件的用法，至少能说明有高并发的经验，在一些高并发要求比较低的岗位，这样的表现，至少在分布式组件这块，就可以过关了。但如果要面试资深开发或架构，那么还需要问 第三层难度，**即在高并发分布式组件方面解决过哪些问题？**这样能证明求职者有一定的高并发项目实践经验。</p><p>这方面网上有现成的问题，比如 Dubbo 超时问题，多注册中心问题，Redis 内存溢出问题等。</p><p>不过话说回来，零高并发项目经验的求职者，如果准备方法得当，其实也能通过项目背景和实际解决过的问题，证明自己有高并发项目经验。</p><p><strong>也就是说，哪怕你高并发方面缺乏项目经验，只要好好准备，一样能通过面试得到实践机会，大家应当有信心。</strong></p><p>我在文章里经常用到小二这个角色，那么接下来就以小二为例。</p><p>1、小二具备 Spring Boot+JPA 开发经验，这其实也是高并发经验的基础。</p><p>2、小二掌握了如何在 windows 环境下搭建 Redis,MyCAT,RabbitMQ，nginx，dubbo+zookeeper，MongoDB 等组件运行环境的步骤，请注意是 windows 环境，而不是 linux 环境。虽然生产环境中，这些组件都在 linux 环境下，因为大家平时都用 windows，而且这些组件在 windows 和 linux 环境下的开发差异不大。</p><p>3、小二环境搭建好以后，首先运行一通 spring boot 整合诸多分布式组件的项目，这样他就知道怎么用，而不会仅仅知道怎么说。<strong>然后我就让他为每个组件，找个业务背景。</strong>。</p><p>4、会用+结合业务背景使用高并发分布式组件以后，<strong>我再让小二背些分布式组件方面的常用坑，以及常规的使用经验</strong>，无非是 dubbo 调用超时，redis 超时，redis 内存溢出，dubbo 整合 zookeeper 的要点等。这方面不要太深，不用涉及到算法，也不用涉及到底层技能。而且这方面内容我书里大多也提到。<strong>最后我让小二通过秒杀案例，串起来讲多个分布式组件的使用要点。</strong></p><p>**5、这个是要点，我让小二准备了不少解决高并发问题的说辞。**高并发问题其实也很普遍，无非是 redis 超时，kakfa 由于重发而导致的不幂等，dubbo 注册中西中心失效等。这些方面，我让我小弟准备哪些点呢？问题是如何发现（无非是通过日志告警或系统卡顿发现），如何排查（到 linux 看日志，日志中看到哪些具体的关键字），如何解决（改文件或改配置）</p>',63),c={href:"https://www.zhihu.com/question/40609661/answer/2245612049",target:"_blank",rel:"noopener noreferrer"},b=t("p",null,"高并发其实没有那么神秘，讲来讲去就是解决“有限资源与无限用户”的矛盾。你会发现目前主流的解决方案来来去去无非那几种，你如果有心，即使没做过，但是私底下练习过了，面试说出来也是可以过的。",-1),l=t("hr",null,null,-1),u={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},x=t("p",null,[e("微信搜 "),t("strong",null,"沉默王二"),e(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),t("strong",null,"222"),e(" 即可免费领取。")],-1),f=t("figure",null,[t("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1);function _(h,w){const n=i("ExternalLinkIcon");return r(),s("div",null,[d,t("p",null,[e("参考链接："),t("a",c,[e("https://www.zhihu.com/question/40609661/answer/2245612049"),o(n)])]),b,l,t("p",null,[e("GitHub 上标星 7600+ 的开源知识库《"),t("a",u,[e("二哥的 Java 进阶之路"),o(n)]),e("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),t("a",m,[e("太赞了，GitHub 上标星 7600+ 的 Java 教程"),o(n)])]),x,f])}const y=p(g,[["render",_],["__file","gaobingfa-jingyan-hsmcomputer.html.vue"]]);export{y as default};
