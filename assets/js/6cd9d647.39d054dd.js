"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[8614],{83590:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=i(74848),r=i(28453);const s={title:"\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4",sidebar_position:8},a="\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4",d={id:"start/basic/server-management-command",title:"\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4",description:"\u6b22\u8fce\u5f00\u670d\uff0c\u6709\u4e00\u4e9b\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4\u4f60\u5fc5\u987b\u4e86\u89e3\uff0c\u8fd9\u662f\u4f60\u5f00\u670d\u7684\u7b2c\u4e00\u6b65!!",source:"@site/docs-java/start/basic/server-management-command.md",sourceDirName:"start/basic",slug:"/start/basic/server-management-command",permalink:"/NitWikit/Java/start/basic/server-management-command",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/start/basic/server-management-command.md",tags:[],version:"current",lastUpdatedBy:"imgbot[bot]",lastUpdatedAt:1722526061e3,sidebarPosition:8,frontMatter:{title:"\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f\u4e16\u754c\uff1f",permalink:"/NitWikit/Java/start/basic/what-is-world"},next:{title:"\u670d\u52a1\u5668\u6838\u5fc3\u9009\u62e9",permalink:"/NitWikit/Java/start/server-core-choose"}},l={},o=[{value:"/stop",id:"stop",level:2},{value:"/restart",id:"restart",level:2},{value:"/kick [\u73a9\u5bb6\u540d\u79f0] [\u8e22\u51fa\u73a9\u5bb6\u7684\u539f\u56e0]\uff08\u53ef\u4ee5\u4e0d\u5199\uff09",id:"kick-\u73a9\u5bb6\u540d\u79f0-\u8e22\u51fa\u73a9\u5bb6\u7684\u539f\u56e0\u53ef\u4ee5\u4e0d\u5199",level:2},{value:"/ban [\u73a9\u5bb6\u540d\u79f0] [\u5c01\u7981\u73a9\u5bb6\u7684\u539f\u56e0]\uff08\u53ef\u4ee5\u4e0d\u5199\uff09",id:"ban-\u73a9\u5bb6\u540d\u79f0-\u5c01\u7981\u73a9\u5bb6\u7684\u539f\u56e0\u53ef\u4ee5\u4e0d\u5199",level:2},{value:"/pardon [\u73a9\u5bb6\u540d\u79f0]",id:"pardon-\u73a9\u5bb6\u540d\u79f0",level:2},{value:"/list",id:"list",level:2},{value:"/ban-ip [IP\u5730\u5740]",id:"ban-ip-ip\u5730\u5740",level:2},{value:"/pardon-ip [IP\u5730\u5740]",id:"pardon-ip-ip\u5730\u5740",level:2},{value:"/plugins",id:"plugins",level:2},{value:"/op [\u73a9\u5bb6\u540d\u79f0]",id:"op-\u73a9\u5bb6\u540d\u79f0",level:2},{value:"/deop [\u73a9\u5bb6\u540d\u79f0]",id:"deop-\u73a9\u5bb6\u540d\u79f0",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4",children:"\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4"}),"\n",(0,t.jsx)(n.p,{children:"\u6b22\u8fce\u5f00\u670d\uff0c\u6709\u4e00\u4e9b\u5e38\u7528\u670d\u52a1\u5668\u7ba1\u7406\u6307\u4ee4\u4f60\u5fc5\u987b\u4e86\u89e3\uff0c\u8fd9\u662f\u4f60\u5f00\u670d\u7684\u7b2c\u4e00\u6b65!!"}),"\n",(0,t.jsx)(n.h2,{id:"stop",children:"/stop"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u6307\u4ee4\u662f\u7528\u6765\u5173\u95ed\u670d\u52a1\u5668\u7684\uff0c\u6ce8\u610f:\u8bf7\u786e\u5b9a\u4f60\u9700\u8981\u5173\u95ed\u540e\u518d\u5173\u95ed\uff0c\u8fd9\u6b21\u64cd\u4f5c\u4f1a\u8e22\u51fa\u6240\u6709\u73a9\u5bb6"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"\u5343\u4e07\u4e0d\u8981\u5f3a\u5236\u5173\u95ed\u670d\u52a1\u5668\uff0c\u5426\u5219\u4f1a\u9020\u6210\u5b58\u6863\u4e22\u5931\uff0c\u73a9\u5bb6\u6570\u636e\u635f\u574f\u7b49\u591a\u79cd\u4e25\u91cd\u95ee\u9898"})}),"\n",(0,t.jsx)(n.h2,{id:"restart",children:"/restart"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u524d\u9700\u8981\u5728\u670d\u52a1\u5668\u6839\u76ee\u5f55\u7684 ",(0,t.jsx)(n.code,{children:"spigot.yml"})," \u6587\u4ef6\u627e\u5230\u5982\u4e0b\u5185\u5bb9:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  restart-script: ''\n"})}),(0,t.jsx)(n.p,{children:"\u5728\u5f15\u53f7\u5185\u8bbe\u7f6e\u542f\u52a8\u811a\u672c\u8def\u5f84\uff0c\u5426\u5219\u8fd9\u4e2a\u6307\u4ee4\u4e0d\u4f1a\u5e2e\u4f60\u81ea\u52a8\u91cd\u542f\u670d\u52a1\u5668\uff0c\u4f60\u4ecd\u7136\u9700\u8981\u81ea\u884c\u542f\u52a8\u670d\u52a1\u7aef"})]}),"\n",(0,t.jsx)(n.h2,{id:"kick-\u73a9\u5bb6\u540d\u79f0-\u8e22\u51fa\u73a9\u5bb6\u7684\u539f\u56e0\u53ef\u4ee5\u4e0d\u5199",children:"/kick [\u73a9\u5bb6\u540d\u79f0] [\u8e22\u51fa\u73a9\u5bb6\u7684\u539f\u56e0]\uff08\u53ef\u4ee5\u4e0d\u5199\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u8e22\u51fa\u670d\u52a1\u5668\u4e0a\u7684\u73a9\u5bb6\uff0c\u5f53\u7136\uff0c\u73a9\u5bb6\u53ef\u4ee5\u91cd\u65b0\u52a0\u5165"}),"\n",(0,t.jsx)(n.h2,{id:"ban-\u73a9\u5bb6\u540d\u79f0-\u5c01\u7981\u73a9\u5bb6\u7684\u539f\u56e0\u53ef\u4ee5\u4e0d\u5199",children:"/ban [\u73a9\u5bb6\u540d\u79f0] [\u5c01\u7981\u73a9\u5bb6\u7684\u539f\u56e0]\uff08\u53ef\u4ee5\u4e0d\u5199\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u5c01\u7981\u670d\u52a1\u5668\u4e0a\u7684\u73a9\u5bb6\uff0c\u9664\u975e\u89e3\u5c01\uff0c\u73a9\u5bb6\u4e0d\u53ef\u4ee5\u91cd\u65b0\u8fdb\u5165"}),"\n",(0,t.jsx)(n.h2,{id:"pardon-\u73a9\u5bb6\u540d\u79f0",children:"/pardon [\u73a9\u5bb6\u540d\u79f0]"}),"\n",(0,t.jsx)(n.p,{children:"\u89e3\u5c01\u66fe\u7ecf\u5c01\u7981\u8fc7\u7684\u73a9\u5bb6\uff0c\u6ce8\u610f\uff0c\u5728MC\u7684\u8001\u7248\u672c\uff081.0.16\u4e4b\u524d\uff09\u4e2d\u8fd9\u4e2a\u6307\u4ee4\u53ef\u80fd\u662f/unban"}),"\n",(0,t.jsx)(n.h2,{id:"list",children:"/list"}),"\n",(0,t.jsx)(n.p,{children:"\u5217\u51fa\u670d\u52a1\u5668\u4e0a\u7684\u6240\u6709\u73a9\u5bb6\uff08\u4e0d\u5305\u62ec\u5df2\u7ecf\u9000\u51fa\u670d\u52a1\u5668\u7684\uff09"}),"\n",(0,t.jsx)(n.h2,{id:"ban-ip-ip\u5730\u5740",children:"/ban-ip [IP\u5730\u5740]"}),"\n",(0,t.jsx)(n.p,{children:"\u5c01\u7981\u670d\u52a1\u5668\u4e0a\u7684\u73a9\u5bb6\uff08\u6839\u636eIP\u5730\u5740\uff09\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u5c01\u7981\u73a9\u5bb6\u6240\u5904\u7684IP\u7684\u73a9\u5bb6\u90fd\u4e0d\u53ef\u8fdb\u5165"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"\u4e0d\u8981\u5c1d\u8bd5\u5728frp\u4e0a\u4f7f\u7528\u8fd9\u4e2a\u6307\u4ee4\uff0c\u4f60\u4f1a\u60ca\u5947\u7684\u53d1\u73b0\uff0c\u6240\u6709\u4eba\u90fd\u8fdb\u4e0d\u53bb"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u5176\u5b9e\u8fd9\u73a9\u610f\u771f\u7684\u6ca1\u591a\u5927\u7528\uff0c\u5bf9\u4e8e\u73a9\u5bb6\u6765\u8bf4\uff0c\u91cd\u542f\u4e00\u4e0b\u8def\u7531\u5668\u6216\u6302\u4e2a\u4ee3\u7406\u5c31\u53ef\u4ee5"})}),"\n",(0,t.jsx)(n.h2,{id:"pardon-ip-ip\u5730\u5740",children:"/pardon-ip [IP\u5730\u5740]"}),"\n",(0,t.jsx)(n.p,{children:"\u89e3\u5c01\u5c01\u7981\u8fc7\u7684\u73a9\u5bb6"}),"\n",(0,t.jsx)(n.h2,{id:"plugins",children:"/plugins"}),"\n",(0,t.jsx)(n.p,{children:"\u770b\u5230\u670d\u52a1\u5668\u6240\u6709\u5b89\u88c5\u7684\u63d2\u4ef6(\u73a9\u5bb6\u4e5f\u53ef\u4ee5\u6267\u884c\u6b64\u6307\u4ee4)"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u60f3\u73a9\u5bb6\u770b\u5230\u63d2\u4ef6\u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528Plugin Hide Pro"}),"\n",(0,t.jsx)(n.h2,{id:"op-\u73a9\u5bb6\u540d\u79f0",children:"/op [\u73a9\u5bb6\u540d\u79f0]"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u4e88\u6307\u5b9a\u73a9\u5bb6OP\u6743\u9650"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"\u5343\u4e07\u4e0d\u8981\u968f\u610f\u7ed9\u73a9\u5bb6OP\uff0c\u6076\u610f\u73a9\u5bb6\u53ef\u4ee5\u4f7f\u7528\u6b64\u6743\u9650\u635f\u574f\u670d\u52a1\u5668\uff0c\u751a\u81f3\u5165\u4fb5\u5bbf\u4e3b\u673a"})}),"\n",(0,t.jsx)(n.h2,{id:"deop-\u73a9\u5bb6\u540d\u79f0",children:"/deop [\u73a9\u5bb6\u540d\u79f0]"}),"\n",(0,t.jsx)(n.p,{children:"\u89e3\u9664\u73a9\u5bb6\u7684OP\u6743\u9650"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);