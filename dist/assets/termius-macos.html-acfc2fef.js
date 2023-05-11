import{_ as i,W as n,X as o,Y as t,a0 as e,Z as r,a1 as c,C as s}from"./framework-bb7be5cb.js";const d={},m={href:"https://tobebetterjavaer.com/gongju/warp.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://tobebetterjavaer.com/gongju/tabby.html",target:"_blank",rel:"noopener noreferrer"},l={href:"https://tobebetterjavaer.com/gongju/windterm.html",target:"_blank",rel:"noopener noreferrer"},g=c(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/itmind//termius-macos-da746c37-59e6-41d8-820a-76cfcd3393f3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不过，termius 分为基础版和 Pro版，基础版不收费，但功能少，Pro 版功能多但收费。</p><p>于是怎么破解它就很关键了，之前折腾了 1 个小时，终于搞定，这里记录一下，免得以后再需要的时候找不到方法。</p><p>首先，需要下载绿色版的 termius。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/itmind//termius-macos-d148f533-fc21-4c0a-a715-63785c7be8eb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里设置一个门槛，需要微信搜索<strong>沉默王二</strong>关注我的公众号，在后台回复 <strong>termius</strong> 获取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/itmind-ideapxideajhideayjjhmideazxjhzcmpjjcyjjhqcyx-fc5a32f3-04ed-4bbf-9df8-a13a409a275f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下载后安装，如果打开的时候提示不安全，根据提示信息去谷歌一下就行了。执行命令如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo xattr -r -d com.apple.quarantine /Applications/Termius.app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要输入本机密码给权限。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/itmind//termius-macos-bc429f94-b091-45ae-a1e0-90dbf68827c7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完事后重新打开 termius，如果提示有付费的问题，直接关闭重新开一下就好了，不用管，不是必选项。</p>`,12);function b(f,u){const a=s("ExternalLinkIcon");return n(),o("div",null,[t("p",null,[e("termius 是一款非常值得推荐的 SSH/SFTP 跨平台终端工具，其十分亮眼的功能是可以上传文件夹，这是其他几款终端工具都不具备的，比如说 macOS 自带的终端、号称 21 世纪最强终端的 "),t("a",m,[e("wrap"),r(a)]),e("、完全开源的 "),t("a",p,[e("tabby"),r(a)]),e("、"),t("a",l,[e("WindTerm"),r(a)]),e("。")]),g])}const _=i(d,[["render",b],["__file","termius-macos.html.vue"]]);export{_ as default};
