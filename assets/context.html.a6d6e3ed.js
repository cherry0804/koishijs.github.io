import{_ as c,r as s,o as a,c as r,a as e,e as n,w as i,d,b as t}from"./app.9dd3ff54.js";const l={},h=d('<h1 id="\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u4E0A\u4E0B\u6587 (Context)</h1><p><strong>\u4E0A\u4E0B\u6587 (Context)</strong> \u662F Koishi \u7684\u91CD\u8981\u6982\u5FF5\u3002\u4F60\u7684\u6BCF\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u4E2D\u95F4\u4EF6\uFF0C\u76D1\u542C\u5668\u548C\u6307\u4EE4\u90FD\u88AB\u7ED1\u5B9A\u5728\u4E0A\u4E0B\u6587\u4E0A\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><h4 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A</h4><p>\u4F60\u53EF\u80FD\u6B63\u5728\u5BFB\u627E\u67D0\u4E9B\u4E0A\u4E0B\u6587 API \u4F46\u5E76\u6CA1\u6709\u5728\u8FD9\u91CC\u627E\u5230\uFF0C\u8FD9\u662F\u56E0\u4E3A Koishi \u4F7F\u7528\u4E86\u9762\u5411\u5207\u9762\u7F16\u7A0B (AOP) \u7684\u5F00\u53D1\u65B9\u5F0F\uFF0C\u7EDD\u5927\u90E8\u5206\u4E0A\u4E0B\u6587\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD<strong>\u901A\u8FC7\u6DF7\u5165\u7684\u65B9\u5F0F\u642D\u8F7D\u5728\u4E86\u670D\u52A1\u4E0A</strong>\u3002\u4F60\u53EF\u4EE5\u524D\u5F80\u670D\u52A1\u90E8\u5206\u770B\u5230\u66F4\u591A\u4E0A\u4E0B\u6587\u4E2D\u53EF\u7528\u7684 API\u3002\u5982\u679C\u4F60\u60F3\u5FEB\u901F\u627E\u5230\u67D0\u4E2A\u5177\u4F53\u7684 API\uFF0C\u8BF7\u5584\u7528\u641C\u7D22\u529F\u80FD\u3002</p></div><h2 id="\u5B9E\u4F8B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5C5E\u6027" aria-hidden="true">#</a> \u5B9E\u4F8B\u5C5E\u6027</h2><h3 id="ctx-basedir" tabindex="-1"><a class="header-anchor" href="#ctx-basedir" aria-hidden="true">#</a> ctx.baseDir</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u5F53\u524D\u7684 Koishi \u9ED8\u8BA4\u8DEF\u5F84\u3002\u5982\u679C\u4F60\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u8FD9\u4E2A\u8DEF\u5F84\u662F\u914D\u7F6E\u6587\u4EF6\u6240\u5728\u7684\u8DEF\u5F84\uFF1B\u5426\u5219\u8FD9\u4E2A\u8DEF\u5F84\u662F\u5F53\u524D\u5DE5\u4F5C\u8DEF\u5F84\u3002</p><h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="ctx-extend" tabindex="-1"><a class="header-anchor" href="#ctx-extend" aria-hidden="true">#</a> ctx.extend(meta)</h3><ul><li><strong>meta:</strong> <code>Partial&lt;Context.Meta&gt;</code> \u8981\u8986\u76D6\u7684\u5C5E\u6027</li><li>\u8FD4\u56DE\u503C: <code>this</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u4EE5\u5F53\u524D\u4E0A\u4E0B\u6587\u4E3A\u539F\u578B\u521B\u5EFA\u4E00\u4E2A\u65B0\u4E0A\u4E0B\u6587\u3002<code>meta</code> \u4E2D\u7684\u5C5E\u6027\u5C06\u8986\u76D6\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\u5C5E\u6027\u3002</p><h3 id="ctx-isolate" tabindex="-1"><a class="header-anchor" href="#ctx-isolate" aria-hidden="true">#</a> ctx.isolate(names)</h3><ul><li><strong>keys:</strong> <code>string[]</code> \u9694\u79BB\u7684\u670D\u52A1\u5217\u8868</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul>',13),u=t("\u4EE5\u5F53\u524D\u4E0A\u4E0B\u6587\u4E3A\u539F\u578B\u521B\u5EFA\u4E00\u4E2A\u65B0\u4E0A\u4E0B\u6587\u3002"),_=e("code",null,"keys",-1),g=t(" \u4E2D\u6307\u5B9A\u7684\u670D\u52A1\u5C06\u5728\u65B0\u7684\u4E0A\u4E0B\u6587\u4E2D\u88AB\u9694\u79BB\uFF0C\u5176\u4ED6\u670D\u52A1\u4ECD\u7136\u4E0E\u5F53\u524D\u4E0A\u4E0B\u6587\u5171\u4EAB\u3002\u53C2\u89C1 "),x=t("\u670D\u52A1\u7684\u5171\u4EAB\u4E0E\u9694\u79BB"),m=t("\u3002"),f=e("h3",{id:"ctx-command",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-command","aria-hidden":"true"},"#"),t(" ctx.command(def, desc?, config?)")],-1),E=d("<li><strong>def:</strong> <code>string</code> \u6307\u4EE4\u540D\u4EE5\u53CA\u53EF\u80FD\u7684\u53C2\u6570</li><li><strong>desc:</strong> <code>string</code> \u6307\u4EE4\u7684\u63CF\u8FF0</li><li><strong>config:</strong> <code>CommandConfig</code> \u6307\u4EE4\u7684\u914D\u7F6E <ul><li><strong>checkUnknown:</strong> <code>boolean</code> \u662F\u5426\u5BF9\u672A\u77E5\u9009\u9879\u8FDB\u884C\u68C0\u6D4B\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code></li><li><strong>checkArgCount:</strong> <code>boolean</code> \u662F\u5426\u5BF9\u53C2\u6570\u4E2A\u6570\u8FDB\u884C\u68C0\u6D4B\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code></li><li><strong>authority:</strong> <code>number</code> \u6700\u4F4E\u8C03\u7528\u6743\u9650\uFF0C\u9ED8\u8BA4\u4E3A <code>1</code></li><li><strong>showWarning:</strong> <code>boolean</code> \u5F53\u5C0F\u4E8E\u6700\u77ED\u95F4\u9694\u65F6\u662F\u5426\u8FDB\u884C\u63D0\u9192\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code></li></ul></li>",3),p=t("\u8FD4\u56DE\u503C\uFF1A"),b=e("code",null,"Command",-1),A=t(" \u6CE8\u518C\u6216\u4FEE\u6539\u7684\u6307\u4EE4"),B=e("p",null,"\u5728\u5F53\u524D\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u6216\u4FEE\u6539\u4E00\u4E2A\u6307\u4EE4\u3002",-1),C=e("h3",{id:"ctx-logger",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-logger","aria-hidden":"true"},"#"),t(" ctx.logger(scope?)")],-1),k=e("li",null,[e("strong",null,"scope:"),t(),e("code",null,"string"),t(" \u8981\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"''")],-1),v=t("\u8FD4\u56DE\u503C: "),y=e("code",null,"Logger",-1),P=t("\u6839\u636E namespace \u751F\u6210\u4E00\u4E2A "),w=t("Logger \u5BF9\u8C61"),D=t("\u3002"),I=d('<h2 id="\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5</h2><h3 id="context-filter" tabindex="-1"><a class="header-anchor" href="#context-filter" aria-hidden="true">#</a> Context.filter</h3><ul><li>\u7C7B\u578B: <code>symbol</code></li></ul><h3 id="context-source" tabindex="-1"><a class="header-anchor" href="#context-source" aria-hidden="true">#</a> Context.source</h3><ul><li>\u7C7B\u578B: <code>symbol</code></li></ul><h3 id="context-current" tabindex="-1"><a class="header-anchor" href="#context-current" aria-hidden="true">#</a> Context.current</h3><ul><li>\u7C7B\u578B: <code>symbol</code></li></ul>',7),L=t("\u7279\u6B8A\u7684\u952E\u503C\uFF0C\u53EF\u4EE5\u5728\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027\u5BF9\u8C61\u7684\u65B9\u6CD5\u4E0A\u8BBF\u95EE\u3002\u53C2\u89C1 "),N=t("\u58F0\u660E\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027"),V=t("\u3002"),K=d('<h3 id="context-mixin" tabindex="-1"><a class="header-anchor" href="#context-mixin" aria-hidden="true">#</a> Context.mixin(name, options)</h3><ul><li><strong>name:</strong> <code>string</code> \u5C5E\u6027\u540D\u79F0</li><li><strong>options:</strong> <code>MixinOptions</code> \u6DF7\u5165\u9009\u9879</li></ul><h3 id="context-service" tabindex="-1"><a class="header-anchor" href="#context-service" aria-hidden="true">#</a> Context.service(name, options?)</h3><ul><li><strong>name:</strong> <code>string</code> \u5C5E\u6027\u540D\u79F0</li><li><strong>options:</strong> <code>MixinOptions</code> \u6DF7\u5165\u9009\u9879</li></ul>',4),M=t("\u58F0\u660E\u4E00\u4E2A\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027\u3002\u53C2\u89C1 "),O=t("\u58F0\u660E\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027"),F=t("\u3002");function R(T,S){const o=s("RouterLink");return a(),r("div",null,[h,e("p",null,[u,_,g,n(o,{to:"/guide/plugin/service.html#%E6%9C%8D%E5%8A%A1%E7%9A%84%E5%85%B1%E4%BA%AB%E4%B8%8E%E9%9A%94%E7%A6%BB"},{default:i(()=>[x]),_:1}),m]),f,e("ul",null,[E,e("li",null,[p,n(o,{to:"/api/core/command.html"},{default:i(()=>[b]),_:1}),A])]),B,C,e("ul",null,[k,e("li",null,[v,n(o,{to:"/guide/logger.html#%E4%BD%BF%E7%94%A8-logger"},{default:i(()=>[y]),_:1})])]),e("p",null,[P,n(o,{to:"/guide/logger.html#%E4%BD%BF%E7%94%A8-logger"},{default:i(()=>[w]),_:1}),D]),I,e("p",null,[L,n(o,{to:"/guide/context.html#%E5%A3%B0%E6%98%8E%E9%80%9A%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87%E5%B1%9E%E6%80%A7"},{default:i(()=>[N]),_:1}),V]),K,e("p",null,[M,n(o,{to:"/guide/context.html#%E5%A3%B0%E6%98%8E%E9%80%9A%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87%E5%B1%9E%E6%80%A7"},{default:i(()=>[O]),_:1}),F])])}const W=c(l,[["render",R],["__file","context.html.vue"]]);export{W as default};
