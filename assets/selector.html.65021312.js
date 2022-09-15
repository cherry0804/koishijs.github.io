import{_ as i,r as s,o as d,c as r,a as e,e as n,w as c,d as o,b as t}from"./app.9dd3ff54.js";const l={},h=o('<h1 id="\u4F1A\u8BDD\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u8BDD\u9009\u62E9\u5668" aria-hidden="true">#</a> \u4F1A\u8BDD\u9009\u62E9\u5668 (Selector)</h1><h2 id="\u5B9E\u4F8B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5C5E\u6027" aria-hidden="true">#</a> \u5B9E\u4F8B\u5C5E\u6027</h2><h3 id="ctx-filter" tabindex="-1"><a class="header-anchor" href="#ctx-filter" aria-hidden="true">#</a> ctx.filter</h3><ul><li>\u7C7B\u578B: <code>(session: Session) =&gt; boolean</code></li></ul><p>\u5F53\u524D\u4E0A\u4E0B\u6587\u7ED1\u5B9A\u7684\u4F1A\u8BDD\u9009\u62E9\u5668\u3002</p><h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2>',6),x=t("\u6709\u5173\u8FD9\u91CC\u7684 API\uFF0C\u8BF7\u53C2\u89C1 "),u=t("\u4F7F\u7528\u4E0A\u4E0B\u6587"),_=t("\u3002"),f=e("h3",{id:"ctx-any",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-any","aria-hidden":"true"},"#"),t(" ctx.any()")],-1),p=e("ul",null,[e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"Context"),t(" \u65B0\u7684\u4E0A\u4E0B\u6587")])],-1),g=e("p",null,"\u9009\u53D6\u4E0A\u4E0B\u6587\u5168\u96C6\u3002",-1),b={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"TIP",-1),v=t("\u8FD9\u4E2A\u65B9\u6CD5\u4E0E "),C=e("code",null,"ctx.app",-1),E=t(" \u7684\u533A\u522B\u5728\u4E8E\uFF0C\u540E\u8005\u4E0D\u53D7\u63D2\u4EF6\u7BA1\u7406\u5668\u63A7\u5236\uFF0C\u5BB9\u6613\u4EA7\u751F\u5185\u5B58\u6CC4\u6F0F\u3002\u56E0\u6B64\u6211\u4EEC\u5EFA\u8BAE\uFF0C\u9664\u975E\u4F60\u5DF2\u7ECF\u4E3A\u4F60\u7684\u63D2\u4EF6\u58F0\u660E\u4E86\u526F\u4F5C\u7528\uFF0C\u4F60\u5E94\u5F53\u5C3D\u91CF\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002\u53C2\u89C1 "),B=t("\u63D2\u4EF6\u70ED\u91CD\u8F7D"),A=t("\u3002"),S=o('<h3 id="ctx-never" tabindex="-1"><a class="header-anchor" href="#ctx-never" aria-hidden="true">#</a> ctx.never()</h3><ul><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u9009\u53D6\u4E0A\u4E0B\u6587\u7A7A\u96C6\u3002</p><h3 id="ctx-self" tabindex="-1"><a class="header-anchor" href="#ctx-self" aria-hidden="true">#</a> ctx.self(...values)</h3><h3 id="ctx-user" tabindex="-1"><a class="header-anchor" href="#ctx-user" aria-hidden="true">#</a> ctx.user(...values)</h3><h3 id="ctx-guild" tabindex="-1"><a class="header-anchor" href="#ctx-guild" aria-hidden="true">#</a> ctx.guild(...values)</h3><h3 id="ctx-channel" tabindex="-1"><a class="header-anchor" href="#ctx-channel" aria-hidden="true">#</a> ctx.channel(...values)</h3><h3 id="ctx-platform" tabindex="-1"><a class="header-anchor" href="#ctx-platform" aria-hidden="true">#</a> ctx.platform(...values)</h3><ul><li><strong>values:</strong> <code>string[]</code> \u5141\u8BB8\u7684\u673A\u5668\u4EBA / \u7528\u6237 / \u7FA4\u7EC4 / \u9891\u9053 / \u5E73\u53F0\u540D\u79F0\u6784\u6210\u7684\u6570\u7EC4</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u9009\u53D6\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\u5B50\u96C6\uFF0C\u9650\u5B9A\u673A\u5668\u4EBA / \u7528\u6237 / \u7FA4\u7EC4 / \u9891\u9053 / \u5E73\u53F0\u540D\u79F0\u4E3A\u6240\u7ED9\u5B9A\u7684\u503C\u3002</p><h3 id="ctx-union" tabindex="-1"><a class="header-anchor" href="#ctx-union" aria-hidden="true">#</a> ctx.union(filter)</h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> \u53E6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6216\u8005\u8FC7\u6EE4\u5668\u51FD\u6570</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u7ED9\u51FA\u5F53\u524D\u4E0A\u4E0B\u6587\u548C\u5176\u4ED6\u4E0A\u4E0B\u6587\u7684\u5E76\u96C6\u3002</p><h3 id="ctx-intersect" tabindex="-1"><a class="header-anchor" href="#ctx-intersect" aria-hidden="true">#</a> ctx.intersect(filter)</h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> \u53E6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6216\u8005\u8FC7\u6EE4\u5668\u51FD\u6570</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u7ED9\u51FA\u5F53\u524D\u4E0A\u4E0B\u6587\u548C\u5176\u4ED6\u4E0A\u4E0B\u6587\u7684\u4EA4\u96C6\u3002</p><h3 id="ctx-exclude" tabindex="-1"><a class="header-anchor" href="#ctx-exclude" aria-hidden="true">#</a> ctx.exclude(filter)</h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> \u53E6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6216\u8005\u8FC7\u6EE4\u5668\u51FD\u6570</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u7ED9\u51FA\u5F53\u524D\u4E0A\u4E0B\u6587\u548C\u5176\u4ED6\u4E0A\u4E0B\u6587\u7684\u5DEE\u96C6\u3002</p>',19);function D(k,N){const a=s("RouterLink");return d(),r("div",null,[h,e("p",null,[x,n(a,{to:"/guide/plugin/context.html#%E4%BC%9A%E8%AF%9D%E9%80%89%E6%8B%A9%E5%99%A8"},{default:c(()=>[u]),_:1}),_]),f,p,g,e("div",b,[m,e("p",null,[v,C,E,n(a,{to:"/guide/plugin/events.html#%E6%8F%92%E4%BB%B6%E7%83%AD%E9%87%8D%E8%BD%BD"},{default:c(()=>[B]),_:1}),A])]),S])}const y=i(l,[["render",D],["__file","selector.html.vue"]]);export{y as default};
