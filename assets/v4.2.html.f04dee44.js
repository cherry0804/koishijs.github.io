import{_ as h,r as a,o as d,c,a as e,e as i,w as t,b as o,d as r}from"./app.9dd3ff54.js";const _={},u=e("h1",{id:"v4-2-\u7248\u672C\u4ECB\u7ECD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v4-2-\u7248\u672C\u4ECB\u7ECD","aria-hidden":"true"},"#"),o(" v4.2 \u7248\u672C\u4ECB\u7ECD")],-1),p={href:"https://github.com/koishijs/koishi/issues/482",target:"_blank",rel:"noopener noreferrer"},g=o("Roadmap"),f={href:"https://github.com/koishijs/koishi/releases/tag/4.1.1",target:"_blank",rel:"noopener noreferrer"},k=o("v4.1.1"),m={href:"https://github.com/koishijs/koishi/releases/tag/4.1.2",target:"_blank",rel:"noopener noreferrer"},b=o("v4.1.2"),v={href:"https://github.com/koishijs/koishi/releases/tag/4.2.0",target:"_blank",rel:"noopener noreferrer"},w=o("v4.2.0"),j=r('<h2 id="\u6307\u4EE4\u7CFB\u7EDF\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u7CFB\u7EDF\u4F18\u5316" aria-hidden="true">#</a> \u6307\u4EE4\u7CFB\u7EDF\u4F18\u5316</h2><h3 id="git-\u98CE\u683C\u7684\u6307\u4EE4\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#git-\u98CE\u683C\u7684\u6307\u4EE4\u8C03\u7528" aria-hidden="true">#</a> Git \u98CE\u683C\u7684\u6307\u4EE4\u8C03\u7528</h3><p>Koishi \u5C06\u5B50\u6307\u4EE4\u5206\u4E3A\u4E24\u7C7B\uFF1A<strong>\u5C42\u7EA7\u5F0F</strong> \u548C <strong>\u6D3E\u751F\u5F0F</strong>\u3002\u524D\u8005\u4ECE\u5F62\u5F0F\u4E0A\u5C06\u6307\u4EE4\u7EC4\u7EC7\u8D77\u6765\u65B9\u4FBF\u67E5\u770B\u548C\u7BA1\u7406\uFF0C\u800C\u540E\u8005\u5219\u4ECE\u884C\u4E3A\u4E0A\u9650\u5236\u4E86\u6307\u5B9A\u7684\u8C03\u7528\u65B9\u5F0F\u3002\u8BF4\u767D\u4E86\u5C42\u7EA7\u5F0F\u5B50\u6307\u4EE4 <code>foo/bar</code> \u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528 <code>bar</code> \u8FDB\u884C\u8C03\u7528\uFF0C\u800C\u6D3E\u751F\u5F0F\u5B50\u6307\u4EE4 <code>foo.bar</code> \u5219\u5FC5\u987B\u5B8C\u6574\u5199\u5168\u6574\u4E2A\u6307\u4EE4\u8DEF\u5F84\u3002</p><p>\u4ECE\u8FD9\u4E2A\u7248\u672C\u8D77\u6211\u4EEC\u5185\u7F6E\u652F\u6301\u4E86 Git \u98CE\u683C\u7684\u6307\u4EE4\u8C03\u7528\uFF0C\u5373\u5F53\u7236\u6307\u4EE4 <code>foo</code> \u6CA1\u6709\u5B9E\u73B0\u65F6\uFF0C<code>foo bar</code> \u5C06\u81EA\u52A8\u89C6\u4E3A <code>foo.bar</code> \u7684\u8C03\u7528\uFF0C\u5176\u53C2\u6570\u548C\u9009\u9879\u4E5F\u4F1A\u88AB\u4FDD\u7559\u3002</p><h3 id="koishijs-plugin-forward" tabindex="-1"><a class="header-anchor" href="#koishijs-plugin-forward" aria-hidden="true">#</a> @koishijs/plugin-forward</h3><p>\u4F5C\u4E3A\u5B98\u65B9\u7684\u7B2C\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u6700\u65B0\u7248\u672C\u7684 @koishijs/plugin-forward \u63D0\u4F9B\u4E86\u5728\u8FD0\u884C\u65F6\u901A\u8FC7\u6307\u4EE4\u67E5\u770B\u3001\u6DFB\u52A0\u3001\u5220\u9664\u8F6C\u53D1\u89C4\u5219\u7684\u529F\u80FD\uFF1A</p>',6),x=e("pre",null,[e("code",null,`forward add #123                // \u6DFB\u52A0\u76EE\u6807\u9891\u9053
forward list                    // \u67E5\u770B\u5168\u90E8\u76EE\u6807\u9891\u9053
fwd clear                       // \u79FB\u9664\u5168\u90E8\u76EE\u6807\u9891\u9053
fwd rm #123                     // \u79FB\u9664\u7279\u5B9A\u76EE\u6807\u9891\u9053
`)],-1),L=r('<p>\u65E0\u8BBA\u662F\u7236\u6307\u4EE4\u8FD8\u662F\u5B50\u6307\u4EE4\uFF0C\u6211\u4EEC\u90FD\u652F\u6301\u4F7F\u7528\u522B\u540D\u4E66\u5199\u3002\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C<code>fwd rm</code> \u4E0E <code>forward remove</code> \u7684\u6548\u679C\u662F\u5B8C\u5168\u4E00\u81F4\u7684\u3002</p><h2 id="\u63A7\u5236\u53F0\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53F0\u4F18\u5316" aria-hidden="true">#</a> \u63A7\u5236\u53F0\u4F18\u5316</h2><p>\u6211\u4EEC\u5F15\u5165\u4E86\u5168\u65B0\u7684\u5BA2\u6237\u7AEF API\uFF0C\u4EE5\u5B9E\u73B0\u63A7\u5236\u53F0\u63D2\u4EF6\u5728\u5BA2\u6237\u7AEF\u7684\u53EF\u63D2\u62D4\u6027\u3002\u8FD9\u4E9B\u6539\u52A8\u4E5F\u8BA9\u6211\u4EEC\u5F97\u4EE5\u63D0\u4F9B\u5168\u9762\u7684\u63A7\u5236\u53F0\u4F53\u9A8C\u3002</p><h3 id="\u66F4\u591A\u7684\u63A7\u5236\u53F0\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u7684\u63A7\u5236\u53F0\u63D2\u4EF6" aria-hidden="true">#</a> \u66F4\u591A\u7684\u63A7\u5236\u53F0\u63D2\u4EF6</h3><p>\u5728\u8FD9\u4E2A\u7248\u672C\u4E2D\u6211\u4EEC\u4F18\u5316\u4E86\u63A7\u5236\u53F0\u7CFB\u7EDF\uFF0C\u5E76\u5C06\u90E8\u5206\u529F\u80FD\u5355\u72EC\u53D1\u5E03\u4E3A\u65B0\u7684\u63D2\u4EF6\u3002\u5B83\u4EEC\u5305\u62EC\uFF1A</p>',5),N=o("@koishijs/plugin-dataview"),V=o(" (\u6765\u81EA status \u63D2\u4EF6)"),B=o("@koishijs/plugin-insight"),E=o(" (\u6765\u81EA manager \u63D2\u4EF6)"),I=o("@koishijs/plugin-logger"),R=o(" (\u6765\u81EA status \u63D2\u4EF6)"),y=e("h3",{id:"koishijs-plugin-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#koishijs-plugin-manager","aria-hidden":"true"},"#"),o(" @koishijs/plugin-manager")],-1),C=e("p",null,"@koishijs/plugin-manager \u4F5C\u4E3A\u65B0\u4EBA\u53EF\u80FD\u63A5\u89E6\u5230\u7684\u7B2C\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u6211\u4EEC\u4E5F\u5927\u5E45\u4F18\u5316\u4E86\u5B83\u7684\u80FD\u529B\uFF0C\u5305\u62EC\uFF1A",-1),G=e("ul",null,[e("li",null,"\u4F18\u5316\u4E86\u6697\u8272\u4E3B\u9898\u7684\u914D\u8272\u65B9\u6848"),e("li",null,"\u8868\u5355\u652F\u6301\u4E86\u66F4\u591A\u7C7B\u578B\u7684 Schemastery \u7C7B\u578B\uFF0C\u57FA\u672C\u5B8C\u6210\u4E86\u5BF9\u5E38\u89C1\u8868\u5355\u7C7B\u578B\u7684\u8986\u76D6"),e("li",null,"\u91CD\u6784\u4E86\u63D2\u4EF6\u5E02\u573A\u7684\u754C\u9762\uFF0C\u4F7F\u7528\u5361\u7247\u8FDB\u884C\u5C55\u793A\uFF0C\u5E76\u8F85\u4EE5\u641C\u7D22\u548C\u6807\u7B7E\u529F\u80FD"),e("li",null,"\u65B0\u589E\u4E86\u4F9D\u8D56\u7BA1\u7406\u754C\u9762\uFF0C\u5141\u8BB8\u6279\u91CF\u5B89\u88C5 / \u66F4\u65B0 / \u5220\u9664\u4F9D\u8D56"),e("li",null,"\u65B0\u589E\u4E86\u673A\u5668\u4EBA\u914D\u7F6E\u9875\u9762\uFF0C\u652F\u6301\u4E86\u767B\u5F55 / \u4E0B\u7EBF / \u79FB\u9664\u7B49\u64CD\u4F5C")],-1);function S(A,K){const s=a("ExternalLinkIcon"),l=a("panel-view"),n=a("RouterLink");return d(),c("div",null,[u,e("ul",null,[e("li",null,[e("a",p,[g,i(s)])]),e("li",null,[e("a",f,[k,i(s)])]),e("li",null,[e("a",m,[b,i(s)])]),e("li",null,[e("a",v,[w,i(s)])])]),j,i(l,{class:"code",title:"",style:{}},{default:t(()=>[x]),_:1}),L,e("ul",null,[e("li",null,[i(n,{to:"/plugins/console/dataview.html"},{default:t(()=>[N]),_:1}),V]),e("li",null,[i(n,{to:"/plugins/console/insight.html"},{default:t(()=>[B]),_:1}),E]),e("li",null,[i(n,{to:"/plugins/console/logger.html"},{default:t(()=>[I]),_:1}),R])]),y,C,G])}const T=h(_,[["render",S],["__file","v4.2.html.vue"]]);export{T as default};
