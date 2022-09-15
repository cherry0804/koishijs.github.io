import{_ as s,r as d,o as l,c as h,a as e,e as o,w as i,f as c,b as t,d as a}from"./app.9dd3ff54.js";const u={},g=e("h1",{id:"\u4E8B\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8B\u4EF6","aria-hidden":"true"},"#"),t(" \u4E8B\u4EF6 (Events)")],-1),_=t("Koishi \u5C01\u88C5\u4E86\u4E00\u5957\u4E8B\u4EF6\u7CFB\u7EDF\u3002\u5176\u57FA\u672C\u7528\u6CD5\u4E0E Node.js \u81EA\u5E26\u7684 "),p={href:"https://nodejs.org/api/events.html#events_class_eventemitter",target:"_blank",rel:"noopener noreferrer"},m=t("EventEmitter"),f=t(" \u7C7B\u4F3C\uFF0C\u4F46\u652F\u6301\u66F4\u591A\u7684\u529F\u80FD\uFF0C\u6BD4\u5982\u591A\u8FBE 6 \u79CD\u7684\u89E6\u53D1\u5F62\u5F0F\u4EE5\u53CA\u4F1A\u8BDD\u4E8B\u4EF6\u7B49\u3002\u5728\u4E86\u89E3\u4E0B\u9762\u7684\u5185\u5BB9\u4E4B\u524D\uFF0C\u5EFA\u8BAE\u4F60\u5148\u9605\u8BFB\u4E0B\u9762\u7684\u7AE0\u8282\uFF1A"),b=t("\u4F1A\u8BDD\u4E8B\u4EF6"),x=t("\u4E8B\u4EF6\u7CFB\u7EDF"),B=a('<h2 id="\u901A\u7528\u4F1A\u8BDD\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u4F1A\u8BDD\u4E8B\u4EF6" aria-hidden="true">#</a> \u901A\u7528\u4F1A\u8BDD\u4E8B\u4EF6</h2><p>\u8FD9\u91CC\u7684\u4F1A\u8BDD\u4E8B\u4EF6\u90FD\u662F\u901A\u8FC7 emit \u65B9\u5F0F\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u4E2D\u89E6\u53D1\u7684 (\u5373\u4E0A\u4E0B\u6587\u9009\u62E9\u5668\u5BF9\u8FD9\u4E9B\u4E8B\u4EF6\u6709\u6548\uFF0C\u4E14\u56DE\u8C03\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E0D\u4F1A\u5F71\u54CD\u540E\u7EED\u884C\u4E3A)\u3002</p><h3 id="\u6D88\u606F\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u6D88\u606F\u7C7B\u4E8B\u4EF6</h3><p>\u8DDF\u6D88\u606F\u6709\u5173\u7684\u51E0\u79CD\u4E8B\u4EF6\u7EDF\u79F0\u4E3A\u6D88\u606F\u7C7B\u4E8B\u4EF6\uFF0C\u5171\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>message: \u6536\u5230\u65B0\u6D88\u606F</li><li>message-deleted: \u6D88\u606F\u88AB\u5220\u9664</li><li>message-updated: \u6D88\u606F\u88AB\u4FEE\u6539</li><li>send: \u673A\u5668\u4EBA\u53D1\u51FA\u6D88\u606F</li></ul><p>\u4E0E\u6B64\u7C7B\u4E8B\u4EF6\u76F8\u5173\u7684\u4F1A\u8BDD\u5C5E\u6027\u6709\uFF1A</p><ul><li><strong>messageId:</strong> <code>string</code> \u6D88\u606F ID</li><li><strong>content:</strong> <code>string</code> \u6D88\u606F\u5185\u5BB9</li><li><strong>author:</strong> \u53D1\u9001\u8005\u4FE1\u606F <ul><li><strong>author.userId:</strong> <code>string</code> \u53D1\u9001\u8005\u7684\u5E73\u53F0 ID</li><li><strong>author.avatar:</strong> <code>string</code> \u53D1\u9001\u8005\u7684\u5934\u50CF\u94FE\u63A5</li><li><strong>author.username:</strong> <code>string</code> \u53D1\u9001\u8005\u7684\u5E73\u53F0\u6635\u79F0</li><li><strong>author.nickname:</strong> <code>string</code> \u53D1\u9001\u8005\u5728\u5F53\u524D\u7FA4\u7EC4\u4E2D\u7684\u6635\u79F0</li></ul></li><li><strong>quote:</strong> \u5F15\u7528\u7684\u6D88\u606F\uFF0C\u540C\u6837\u5305\u542B <code>messageId</code>, <code>content</code> \u7B49\u5C5E\u6027</li></ul><h3 id="\u6210\u5458\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6210\u5458\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u6210\u5458\u7C7B\u4E8B\u4EF6</h3><p>\u8DDF\u7FA4\u7EC4\u3001\u597D\u53CB\u6709\u5173\u7684\u4E8B\u4EF6\u7EDF\u79F0\u4E3A\u6210\u5458\u7C7B\u4E8B\u4EF6\uFF0C\u5171\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>guild-added: \u52A0\u5165\u4E86\u7FA4\u7EC4</li><li>guild-deleted: \u9000\u51FA\u4E86\u7FA4\u7EC4</li><li>guild-request: \u6536\u5230\u4E86\u7FA4\u7EC4\u9080\u8BF7</li><li>guild-member-added: \u7FA4\u7EC4\u6210\u5458\u589E\u52A0</li><li>guild-member-deleted: \u7FA4\u7EC4\u6210\u5458\u51CF\u5C11</li><li>guild-member-request: \u6536\u5230\u4E86\u5165\u7FA4\u7533\u8BF7</li><li>friend-added: \u597D\u53CB\u6570\u91CF\u589E\u52A0</li><li>friend-deleted: \u597D\u53CB\u6570\u91CF\u51CF\u5C11</li><li>friend-request: \u6536\u5230\u4E86\u597D\u53CB\u8BF7\u6C42</li></ul><p>\u5F62\u5982 guild(-member)?-(added|deleted) \u7684\u4E8B\u4EF6\u62E5\u6709\u4EE5\u4E0B\u7684\u5C5E\u6027\uFF1A</p><ul><li><strong>operatorId:</strong> <code>string</code> \u64CD\u4F5C\u8005 ID</li></ul><p>\u4EE5 request \u7ED3\u5C3E\u7684\u4E8B\u4EF6\u62E5\u6709\u4E0B\u9762\u7684\u5C5E\u6027\uFF1A</p>',13),v=e("strong",null,"messageId:",-1),E=t(),A=e("code",null,"string",-1),I=t(" \u8BF7\u6C42 ID\uFF0C\u53EF\u7528\u4E8E "),k=t("Bot"),S=t(" \u65B9\u6CD5"),y=e("li",null,[e("strong",null,"content:"),t(),e("code",null,"string"),t(" \u8BF7\u6C42\u6587\u672C")],-1),D=a('<h3 id="\u64CD\u4F5C\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u64CD\u4F5C\u7C7B\u4E8B\u4EF6</h3><p>\u4E0A\u62A5\u4E8B\u4EF6\u4E2D\u6700\u4E3B\u8981\u7684\u4E00\u90E8\u5206\u90FD\u6709\u7740\u7EDF\u4E00\u7684\u7ED3\u6784\uFF1A<strong>\u4E8B\u4EF6\u4E3B\u4F53</strong> + <strong>\u64CD\u4F5C\u7C7B\u578B</strong>\u3002\u4F8B\u5982\u597D\u53CB\u8BF7\u6C42\u4E8B\u4EF6\u662F friend-request\uFF0C\u7FA4\u7EC4\u6587\u4EF6\u66F4\u65B0\u4E8B\u4EF6\u662F guild-file-updated \u7B49\u3002\u76EE\u524D\u652F\u6301\u7684\u4E8B\u4EF6\u4E3B\u4F53\u5305\u62EC\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>friend</li><li>channel</li><li>guild</li><li>guild-member</li><li>guild-role</li><li>guild-file</li><li>guild-emoji</li></ul><p>\u64CD\u4F5C\u7C7B\u578B\u5305\u542B\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>added</li><li>removed</li><li>deleted</li></ul>',5),q=a('<h2 id="\u5185\u7F6E\u4F1A\u8BDD\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u4F1A\u8BDD\u4E8B\u4EF6" aria-hidden="true">#</a> \u5185\u7F6E\u4F1A\u8BDD\u4E8B\u4EF6</h2><p>\u4E0E\u4E0A\u9762\u4ECB\u7ECD\u7684\u901A\u7528\u4F1A\u8BDD\u4E8B\u4EF6\u4E0D\u540C\uFF0C\u8FD9\u91CC\u7684\u4E8B\u4EF6\u90FD\u662F Koishi \u81EA\u8EAB\u5B9E\u73B0\u7684\uFF0C\u5B83\u4EEC\u6709\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F\uFF0C\u4F46\u662F\u90FD\u4F1A\u652F\u6301\u4E0A\u4E0B\u6587\u9009\u62E9\u5668\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Amiddleware" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Amiddleware" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Amiddleware</h3><ul><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u5728\u6267\u884C\u5B8C\u5168\u90E8\u4E2D\u95F4\u4EF6\u540E\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Abefore-parse" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Abefore-parse" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-parse</h3><ul><li><strong>content:</strong> <code>string</code> \u8981\u89E3\u6790\u7684\u6587\u672C</li><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> bail</li></ul><p>\u5C1D\u8BD5\u5C06\u6587\u672C\u89E3\u6790\u6210 Argv \u5BF9\u8C61\u65F6\u8C03\u7528\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A Argv \u5BF9\u8C61\u4EE5\u8986\u76D6\u9ED8\u8BA4\u7684\u89E3\u6790\u884C\u4E3A\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Aparse" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Aparse" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aparse</h3><ul><li><strong>argv:</strong> <code>Argv</code> \u8FD0\u884C\u65F6\u53C2\u6570</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> bail</li></ul><p>\u5C1D\u8BD5\u5C06\u4E00\u4E2A\u672A\u8BC6\u522B\u51FA\u6307\u4EE4\u7684 Argv \u5BF9\u8C61\u8BC6\u522B\u6210\u6307\u4EE4\u8C03\u7528\u65F6\u4F7F\u7528\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4FEE\u6539\u4F20\u5165\u7684 Argv \u5BF9\u8C61\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u8868\u793A\u8BC6\u522B\u51FA\u7684\u6307\u4EE4\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Abefore-attach-channel" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Abefore-attach-channel" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-attach-channel</h3><h3 id="\u4E8B\u4EF6\uFF1Abefore-attach-user" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Abefore-attach-user" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-attach-user</h3><ul><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>fields:</strong> <code>Set&lt;string&gt;</code> \u8981\u83B7\u53D6\u7684\u5B57\u6BB5\u5217\u8868</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u5F53 Koishi \u8BD5\u56FE\u4ECE\u6570\u636E\u5E93\u83B7\u53D6\u9891\u9053 / \u7528\u6237\u4FE1\u606F\u524D\u89E6\u53D1\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u901A\u8FC7 <code>fields.add()</code> \u4FEE\u6539\u4F20\u5165\u7684\u5B57\u6BB5\u96C6\u5408\uFF0C\u589E\u52A0\u7684\u5B57\u6BB5\u5C06\u53EF\u4EE5\u88AB\u6307\u4EE4\u4EE5\u53CA\u4E4B\u540E\u7684\u4E2D\u95F4\u4EF6\u83B7\u53D6\u5230\u3002</p><p>\u8FD9\u4E24\u4E2A\u4E8B\u4EF6\u7684\u89E6\u53D1\u4E8E\u5185\u7F6E\u4E2D\u95F4\u4EF6\u4E2D\u3002\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u6570\u636E\u5E93\uFF0C\u5219\u4E24\u4E2A\u4E8B\u4EF6\u90FD\u4E0D\u4F1A\u89E6\u53D1\uFF1B\u5982\u679C\u4E0D\u662F\u7FA4\u804A\u6D88\u606F\uFF0C\u5219 before-attach-channel \u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Aattach-channel" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Aattach-channel" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aattach-channel</h3><h3 id="\u4E8B\u4EF6\uFF1Aattach-user" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Aattach-user" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aattach-user</h3><ul><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> serial</li></ul><p>\u5F53 Koishi \u5B8C\u6210\u9891\u9053 / \u7528\u6237\u6570\u636E\u83B7\u53D6\u540E\u89E6\u53D1\u3002\u8C03\u7528\u65F6\u4F1A\u4F20\u5165\u4E00\u4E2A Session \u5BF9\u8C61\uFF0C\u5C06\u4F1A\u62E5\u6709 <code>channel</code>/<code>user</code> \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4FEE\u6539\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u4FEE\u6539\u4F1A\u5728\u540E\u7EED\u8FC7\u7A0B\u4E2D\u81EA\u52A8\u66F4\u65B0\u5230\u6570\u636E\u5E93\u3002\u5982\u679C\u4F60\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A truthy \u503C\uFF0C\u5219\u8BE5\u4F1A\u8BDD\u4E0D\u4F1A\u89E6\u53D1\u6307\u4EE4\u4EE5\u53CA\u4E4B\u540E\u7684\u4E2D\u95F4\u4EF6\u3002</p><p>\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u6570\u636E\u5E93\uFF0C\u5219\u4E24\u4E2A\u4E8B\u4EF6\u90FD\u4E0D\u4F1A\u89E6\u53D1\uFF1B\u5982\u679C\u4E0D\u662F\u7FA4\u804A\u6D88\u606F\uFF0C\u5219 attach-channel \u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Acommand-before-attach-channel" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Acommand-before-attach-channel" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Acommand/before-attach-channel</h3><h3 id="\u4E8B\u4EF6\uFF1Acommand-before-attach-user" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Acommand-before-attach-user" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Acommand/before-attach-user</h3><ul><li><strong>session:</strong> <code>Argv</code> \u8FD0\u884C\u65F6\u53C2\u6570</li><li><strong>fields:</strong> <code>Set&lt;string&gt;</code> \u8981\u83B7\u53D6\u7684\u5B57\u6BB5\u5217\u8868</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u5F53 Koishi \u8BD5\u56FE\u4ECE\u6570\u636E\u5E93\u83B7\u53D6\u9891\u9053 / \u7528\u6237\u4FE1\u606F\u524D\u89E6\u53D1\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u901A\u8FC7 <code>fields.add()</code> \u4FEE\u6539\u4F20\u5165\u7684\u5B57\u6BB5\u96C6\u5408\uFF0C\u589E\u52A0\u7684\u5B57\u6BB5\u5C06\u53EF\u4EE5\u88AB\u6307\u4EE4\u4EE5\u53CA\u4E4B\u540E\u7684\u4E2D\u95F4\u4EF6\u83B7\u53D6\u5230\u3002</p><p>\u8FD9\u4E24\u4E2A\u4E8B\u4EF6\u89E6\u53D1\u4E8E\u4EFB\u610F\u6307\u4EE4\u8C03\u7528\u524D\u3002\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u6570\u636E\u5E93\uFF0C\u5219\u4E24\u4E2A\u4E8B\u4EF6\u90FD\u4E0D\u4F1A\u89E6\u53D1\uFF1B\u5982\u679C\u4E0D\u662F\u7FA4\u804A\u6D88\u606F\uFF0C\u5219 before-attach-channel \u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Abefore-send" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Abefore-send" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-send</h3><ul><li><strong>session:</strong> <code>Session</code> \u6D88\u606F\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> bail</li></ul><p>\u5373\u5C06\u53D1\u9001\u4FE1\u606F\u65F6\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002\u8C03\u7528\u65F6\u4F1A\u4F20\u5165\u4E00\u4E2A\u4E8B\u4EF6\u7C7B\u578B\u4E3A <a href="#%E6%B6%88%E6%81%AF%E7%B1%BB%E4%BA%8B%E4%BB%B6">send</a> \u7684\u4F1A\u8BDD\u5B9E\u4F8B\u3002\u7531\u4E8E\u8BE5\u6D88\u606F\u8FD8\u672A\u53D1\u9001\uFF0C\u8FD9\u4E2A\u4F1A\u8BDD\u5E76\u6CA1\u6709 <code>messageId</code> \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 <code>session.content</code> \u6539\u53D8\u53D1\u9001\u7684\u5185\u5BB9\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A truthy \u503C\u4EE5\u53D6\u6D88\u8BE5\u6D88\u606F\u7684\u53D1\u9001\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Acommand-before-execute" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Acommand-before-execute" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Acommand/before-execute</h3><ul><li><strong>argv:</strong> <code>Argv</code> \u8FD0\u884C\u65F6\u53C2\u6570</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> serial</li></ul><p>\u8C03\u7528\u6307\u4EE4\u524D\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002\u6B64\u65F6\u6307\u4EE4\u7684\u53EF\u7528\u6027\u8FD8\u672A\u7ECF\u68C0\u6D4B\uFF0C\u56E0\u6B64\u53EF\u80FD\u51FA\u73B0\u53C2\u6570\u9519\u8BEF\u3001\u6743\u9650\u4E0D\u8DB3\u3001\u8D85\u8FC7\u4F7F\u7528\u6B21\u6570\u7B49\u60C5\u51B5\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4EE5\u53D6\u6D88\u8BE5\u6307\u4EE4\u7684\u6267\u884C\u3002\u8FDB\u4E00\u6B65\uFF0C\u5982\u679C\u8BE5\u5B57\u7B26\u4E32\u975E\u7A7A\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u6B64\u6307\u4EE4\u6267\u884C\u7684\u7ED3\u679C\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Acommand" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Acommand" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Acommand</h3><ul><li><strong>argv:</strong> <code>Argv</code> \u8FD0\u884C\u65F6\u53C2\u6570</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> parallel</li></ul><p>\u6307\u4EE4\u8C03\u7528\u5B8C\u6BD5\u540E\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002</p><h2 id="\u751F\u547D\u5468\u671F\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u4E8B\u4EF6" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u4E8B\u4EF6</h2><p>\u8FD9\u91CC\u7684\u6240\u6709\u4E8B\u4EF6\u5728\u5168\u4F53\u4E0A\u4E0B\u6587\u89E6\u53D1\u7684 (\u5373\u4E0A\u4E0B\u6587\u9009\u62E9\u5668\u5BF9\u8FD9\u4E9B\u4E8B\u4EF6\u65E0\u6548)\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Aready" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Aready" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aready</h3><ul><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> parallel</li></ul><p>\u5E94\u7528\u542F\u52A8\u65F6\u89E6\u53D1\u3002\u5982\u679C\u4E00\u4E2A\u63D2\u4EF6\u5728\u52A0\u8F7D\u65F6\uFF0C\u5E94\u7528\u5DF2\u7ECF\u5904\u4E8E\u542F\u52A8\u72B6\u6001\uFF0C\u5219\u4F1A\u7ACB\u5373\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Adispose" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Adispose" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Adispose</h3><ul><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> parallel</li></ul><p>\u5E94\u7528\u88AB\u5173\u95ED\u6216\u63D2\u4EF6\u88AB\u5378\u8F7D\u65F6\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Aservice" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Aservice" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aservice</h3><ul><li><strong>name:</strong> <code>string</code> \u670D\u52A1\u540D\u79F0</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u6709\u670D\u52A1\u88AB\u4FEE\u6539\u65F6\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Amodel" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Amodel" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Amodel</h3><ul><li><strong>name:</strong> <code>string</code> \u88AB\u6269\u5C55\u7684\u8868\u540D</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u8C03\u7528 <code>model.extend()</code> \u65F6\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6\uFF1Abot-added" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\uFF1Abot-added" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abot-added</h3>',50),N=e("strong",null,"bot:",-1),w=t(),K=e("code",null,"Bot",-1),V=t(" \u673A\u5668\u4EBA\u5B9E\u4F8B"),C=e("li",null,[e("strong",null,"\u89E6\u53D1\u65B9\u5F0F:"),t(" emit")],-1),F=e("p",null,"\u6DFB\u52A0\u673A\u5668\u4EBA\u65F6\u89E6\u53D1\u3002",-1),L=e("h3",{id:"\u4E8B\u4EF6\uFF1Abot-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\uFF1Abot-removed","aria-hidden":"true"},"#"),t(" \u4E8B\u4EF6\uFF1Abot-removed")],-1),j=e("strong",null,"bot:",-1),R=t(),T=e("code",null,"Bot",-1),z=t(" \u673A\u5668\u4EBA\u5B9E\u4F8B"),G=e("li",null,[e("strong",null,"\u89E6\u53D1\u65B9\u5F0F:"),t(" emit")],-1),H=e("p",null,"\u79FB\u9664\u673A\u5668\u4EBA\u65F6\u89E6\u53D1\u3002",-1),J=e("h3",{id:"\u4E8B\u4EF6\uFF1Abot-status-updated",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\uFF1Abot-status-updated","aria-hidden":"true"},"#"),t(" \u4E8B\u4EF6\uFF1Abot-status-updated")],-1),M=e("strong",null,"bot:",-1),O=t(),P=e("code",null,"Bot",-1),Q=t(" \u673A\u5668\u4EBA\u5B9E\u4F8B"),U=e("li",null,[e("strong",null,"\u89E6\u53D1\u65B9\u5F0F:"),t(" emit")],-1),W=t("bot.status"),X=t(" \u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u3002");function Y(Z,$){const r=d("ExternalLinkIcon"),n=d("RouterLink");return l(),h("div",null,[g,e("p",null,[_,e("a",p,[m,o(r)]),f]),e("ul",null,[e("li",null,[o(n,{to:"/guide/message/session.html#%E4%BC%9A%E8%AF%9D%E4%BA%8B%E4%BB%B6"},{default:i(()=>[b]),_:1})]),e("li",null,[o(n,{to:"/guide/plugin/lifecycle.html#%E4%BA%8B%E4%BB%B6%E7%B3%BB%E7%BB%9F"},{default:i(()=>[x]),_:1})])]),B,e("ul",null,[e("li",null,[v,E,A,I,o(n,{to:"/api/core/bot.html#%E5%A4%84%E7%90%86%E8%AF%B7%E6%B1%82"},{default:i(()=>[k]),_:1}),S]),y]),D,c(` ### \u7FA4\u6210\u5458\u7C7B\u4E8B\u4EF6

### \u901A\u77E5\u7C7B\u4E8B\u4EF6

\u7531\u7CFB\u7EDF\u5728\u9891\u9053\u4E2D\u53D1\u9001\u7684\u5404\u79CD\u901A\u77E5\u6784\u6210\u4E86\u901A\u77E5\u7C7B\u4E8B\u4EF6\uFF0C\u5171\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A

- notice/poke: \u6233\u4E00\u6233
- notice/lucky-king: \u8FD0\u6C14\u738B
- notice/honor: \u7FA4\u8363\u8A89

\u4E0E\u6B64\u7C7B\u4E8B\u4EF6\u76F8\u5173\u7684\u5C5E\u6027\u6709\uFF1A

- **targetId:** \`string\` \u6233\u4E00\u6233\u7684\u76EE\u6807\u7528\u6237 ID\uFF0C\u8FD0\u6C14\u738B\u7684\u83B7\u5F97\u8005 ID
- **honorType:** \`string\` \u8363\u8A89\u7C7B\u578B\uFF0C\u53EF\u80FD\u4E3A talkative, performer, emotion `),q,e("ul",null,[e("li",null,[N,w,o(n,{to:"/api/core/bot.html"},{default:i(()=>[K]),_:1}),V]),C]),F,L,e("ul",null,[e("li",null,[j,R,o(n,{to:"/api/core/bot.html"},{default:i(()=>[T]),_:1}),z]),G]),H,J,e("ul",null,[e("li",null,[M,O,o(n,{to:"/api/core/bot.html"},{default:i(()=>[P]),_:1}),Q]),U]),e("p",null,[o(n,{to:"/api/core/bot.html#bot-status"},{default:i(()=>[W]),_:1}),X])])}const te=s(u,[["render",Y],["__file","events.html.vue"]]);export{te as default};