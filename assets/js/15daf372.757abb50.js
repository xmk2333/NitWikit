"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[2154],{93643:(A,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>Q,default:()=>r,frontMatter:()=>E,metadata:()=>i,toc:()=>l});var s=e(86070),B=e(25710);const E={title:"\u4f7f\u7528",slug:"/database/manage",sidebar_position:2,author:{commit:"e17b592",username:"lilingfengdev"}},Q=void 0,i={id:"advance/database/use",title:"\u4f7f\u7528",description:"\u6570\u636e\u5e93\u7ba1\u7406",source:"@site/docs/advance/database/use.md",sourceDirName:"advance/database",slug:"/database/manage",permalink:"/NitWikit/database/manage",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/database/use.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1723624268e3,sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528",slug:"/database/manage",sidebar_position:2,author:{commit:"e17b592",username:"ghost"}},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/NitWikit/database/install"},next:{title:"\u914d\u7f6e",permalink:"/NitWikit/database/configure"}},c={},l=[{value:"\u6570\u636e\u5e93\u7ba1\u7406",id:"\u6570\u636e\u5e93\u7ba1\u7406",level:2},{value:"\u4f7f\u7528\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6\u7ba1\u7406",id:"\u4f7f\u7528\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6\u7ba1\u7406",level:2},{value:"Navicat",id:"navicat",level:3},{value:"HeidiSQL",id:"heidisql",level:3},{value:"\u5c0f\u76ae\u6570\u636e\u5e93",id:"\u5c0f\u76ae\u6570\u636e\u5e93",level:3},{value:"\u5b9d\u5854\u9762\u677f",id:"\u5b9d\u5854\u9762\u677f",level:3},{value:"\u624b\u52a8\u7ba1\u7406",id:"\u624b\u52a8\u7ba1\u7406",level:2},{value:"\u63d2\u4ef6\u8fde\u63a5\u6570\u636e\u5e93",id:"\u63d2\u4ef6\u8fde\u63a5\u6570\u636e\u5e93",level:2}];function d(A){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,B.R)(),...A.components},{Details:E}=n;return E||function(A,n){throw new Error("Expected "+(n?"component":"object")+" `"+A+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6570\u636e\u5e93\u7ba1\u7406",children:"\u6570\u636e\u5e93\u7ba1\u7406"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6\u7ba1\u7406",children:"\u4f7f\u7528\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6\u7ba1\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u8981\u77e5\u9053\uff0c\u5728 \u6570\u636e\u5e93\u5b89\u88c5 \u90a3\u4e00\u680f\u3002\u867d\u7136\u6709\u4e24\u79cd\u622a\u7136\u4e0d\u540c\u7684\u65b9\u5f0f\u5b89\u88c5\u6570\u636e\u5e93"}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u662f\u4f60\u5b89\u88c5\u7684\u6570\u636e\u5e93\uff0c\u5b9e\u8d28\u4e0a\u90fd\u5b89\u88c5\u7684\u662f\u540c\u4e00\u4e2a\u4e1c\u897f\uff0c\u53ea\u4e0d\u8fc7\u7ba1\u7406\u5de5\u5177\u4e0d\u540c"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ec0\u4e48\u662f ",(0,s.jsx)(n.strong,{children:"\u7ba1\u7406\u5de5\u5177"})," \uff1f\u5c31\u662f\u5e2e\u52a9\u4f60\u65b9\u4fbf\u7ba1\u7406\u4f60\u7684\u6570\u636e\u5e93\u4e00\u7c7b\u5de5\u5177\u8f6f\u4ef6"]}),"\n",(0,s.jsx)(n.p,{children:"\u50cf\u5b9d\u5854\u8fd9\u79cd\u8fd0\u7ef4\u9762\u677f\u3001Navicat \u8fd9\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6\u7ed9\u6570\u636e\u5e93\u63d0\u4f9b\u4e86 \u521b\u5efa\uff0c\u5220\u9664\uff0c\u5907\u4efd \u7b49\u57fa\u7840\u64cd\u4f5c\uff08\u6709\u56fe\u5f62\u754c\u9762\uff09\uff0c\u8ba9\u4f60\u65e0\u9700\u5b66\u4f1a\u6570\u636e\u5e93\u6307\u4ee4\u64cd\u4f5c\uff0c\u5c31\u53ef\u4ee5\u7ba1\u7406\u4f60\u7684\u6570\u636e\u5e93"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u8fd9\u5e76\u4e0d\u662f\u8bf4\u4f60\u53ea\u80fd\u7528\u8fd9\u4e9b\u5de5\u5177\u7ba1\u7406\u6570\u636e\u5e93\u4e86\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u6307\u4ee4\u63a7\u5236\u4f60\u7684\u6570\u636e\u5e93\uff08\u65e0\u56fe\u5f62\u754c\u9762\uff09"}),"\n",(0,s.jsx)(n.h3,{id:"navicat",children:"Navicat"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u5b98\u7f51 ",(0,s.jsx)(n.a,{href:"https://navicat.com.cn/products",children:"https://navicat.com.cn/products"})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Navicat"})," \u662f\u4e00\u6b3e\u4f01\u4e1a\u7ea7\u7684\u7b80\u5355\u6613\u7528\u7684\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f18\u52bf"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7b80\u5355\u6613\u7528\uff0c\u5e76\u4e14\u529f\u80fd\u9f50\u5168"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u754c\u9762\u7f8e\u89c2"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"premium \u7248\u672c\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u7684\u7ba1\u7406\uff0c\u5982 MySQL \u3001 MangoDB \u7b49"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u52a3\u52bf"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6536\u8d39\uff0c\u800c\u4e14\u4e0d\u4fbf\u5b9c"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6559\u7a0b"})}),"\n",(0,s.jsxs)(E,{children:[(0,s.jsx)("summary",{children:"\u8fde\u63a5\u6570\u636e\u5e93"}),(0,s.jsx)(n.p,{children:"\u70b9\u51fb\u8fde\u63a5\uff0c\u5e76\u9009\u62e9\u4f60\u60f3\u8981\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7684\u7c7b\u578b"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(32152).A+"",width:"245",height:"400"})}),(0,s.jsx)(n.p,{children:"\u7136\u540e\u5206\u522b\u586b\u5199:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8fde\u63a5\u540d: \u4f60\u60f3\u8ba9\u4ed6\u5728 Navicat \u4e2d\u663e\u793a\u7684\u540d\u5b57\uff0c\u65b9\u4fbf\u4f60\u8fa8\u8ba4"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e3b\u673a: \u586b\u5199\u4e3b\u673a ip \u5730\u5740,\u5982\u679c\u6570\u636e\u5e93\u5c31\u5728\u672c\u5730\uff0c\u90a3\u5c31\u586b\u5199 localhost"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7aef\u53e3: \u6570\u636e\u5e93\u4f7f\u7528\u7684\u8fdc\u7a0b\u7aef\u53e3\uff0c\u9ed8\u8ba4\u662f 3306"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u540d: \u4f7f\u7528\u67d0\u4e2a\u7528\u6237\u767b\u5f55\u6570\u636e\u5e93\uff0c\u9ed8\u8ba4\u662f root"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bc6\u7801: \u5373\u767b\u5f55\u6570\u636e\u5e93\u7684\u5bc6\u7801\uff0c\u4f60\u5728\u5b89\u88c5\u6570\u636e\u5e93\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u8bbe\u7f6e\u8fc7\u4e86\uff0c\u81ea\u5df1\u8981\u8bb0\u597d\uff01"}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(27763).A+"",width:"564",height:"669"})}),(0,s.jsx)(n.p,{children:"\u586b\u5199\u5b8c\u6bd5\u540e\u70b9\u51fb\u786e\u5b9a\u5373\u53ef"}),(0,s.jsx)(n.p,{children:"\u987a\u5229\u7684\u8bdd\uff0c\u70b9\u5f00\u6570\u636e\u5e93\u540e\u4f1a\u663e\u793a\u4e00\u4e2a\u7eff\u8272\u56fe\u6807\u7684\u6d77\u8c5a\uff0c\u5e76\u5217\u51fa\u5185\u90e8\u7684\u6570\u636e\u5e93"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(95850).A+"",width:"326",height:"204"})}),(0,s.jsx)(n.p,{children:"\u5426\u5219\u4ed6\u4f1a\u62a5\u9519"}),(0,s.jsx)(n.p,{children:"\u4e00\u822c\u6709\u8fd9\u51e0\u79cd\u60c5\u51b5\u5bfc\u81f4\u8fde\u63a5\u4e0d\u4e0a:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u4e3b\u673a\u3001\u7aef\u53e3\u586b\u5199\u9519\u8bef"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u540d\u3001\u5bc6\u7801\u4e0d\u6b63\u786e"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u672a\u5f00\u542f\u8fdc\u7a0b\u8fde\u63a5\uff0c\u800c\u4e14\u6570\u636e\u5e93\u4e0d\u5728\u672c\u5730"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u6ca1\u5f00\u6216\u8005\u70b8\u4e86"}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:"\u8bf7\u6839\u636e\u5177\u4f53\u62a5\u9519\u5177\u4f53\u5206\u6790"})]}),"\n",(0,s.jsxs)(E,{children:[(0,s.jsx)("summary",{children:"\u521b\u5efa\u6570\u636e\u5e93"}),(0,s.jsx)(n.p,{children:"\u53f3\u952e\u6570\u636e\u5e93\u56fe\u6807\uff0c\u70b9\u51fb\u65b0\u5efa\u6570\u636e\u5e93"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(22973).A+"",width:"319",height:"361"})}),(0,s.jsx)(n.p,{children:"\u7136\u540e\u5206\u522b\u586b\u5199:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u540d: \u4f60\u81ea\u5df1\u60f3\u4e00\u4e2a\uff0c\u4e4b\u540e\u8981\u7ed9\u63d2\u4ef6\u8ba4\u7684\uff0c\u540c\u65f6\u4e5f\u65b9\u4fbf\u4f60\u8fa8\u522b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5b57\u7b26\u96c6: \u8bf7\u9009\u62e9 ",(0,s.jsx)(n.code,{children:"UTF8mb4"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6392\u5217\u89c4\u5219: \u53ef\u4ee5\u9009\u62e9 ",(0,s.jsx)(n.code,{children:"utf8mb4_general_ci"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"utf8mb4_bin"})]}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(85492).A+"",width:"445",height:"400"})}),(0,s.jsx)(n.p,{children:"\u7136\u540e\u70b9\u51fb\u786e\u5b9a\u5373\u53ef\u521b\u5efa\u6570\u636e\u5e93"})]}),"\n",(0,s.jsx)(n.h3,{id:"heidisql",children:"HeidiSQL"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["\u5b98\u7f51 ",(0,s.jsx)(n.a,{href:"https://www.heidisql.com/",children:"https://www.heidisql.com/"})]}),(0,s.jsxs)(n.p,{children:["GitHub ",(0,s.jsx)(n.a,{href:"https://github.com/HeidiSQL/HeidiSQL",children:"https://github.com/HeidiSQL/HeidiSQL"})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HeidiSQL"})," \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u7b80\u6613\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f18\u52bf"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7b80\u5355\u597d\u7528\uff0c\u57fa\u672c\u529f\u80fd\u9f50\u5168"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u754c\u9762\u7b80\u6d01"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u7684\u7ba1\u7406\uff0c\u5982 MySQL \u3001 MangoDB \u7b49"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u52a3\u52bf"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6ca1\u6709?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6559\u7a0b"})}),"\n",(0,s.jsx)(n.p,{children:"TODO"}),"\n",(0,s.jsx)(n.h3,{id:"\u5c0f\u76ae\u6570\u636e\u5e93",children:"\u5c0f\u76ae\u6570\u636e\u5e93"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6559\u7a0b"})}),"\n",(0,s.jsxs)(E,{children:[(0,s.jsx)("summary",{children:"\u914d\u7f6e\u6570\u636e\u5e93"}),(0,s.jsx)(n.p,{children:"TODO"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9d\u5854\u9762\u677f",children:"\u5b9d\u5854\u9762\u677f"}),"\n",(0,s.jsx)(n.p,{children:"\u5b9d\u5854\u9762\u677f\u5b9e\u9645\u4e0a\u662f\u4e00\u79cd Linux \u8fd0\u7ef4\u7ba1\u7406\u9762\u677f\uff0c\u540c\u65f6\u517c\u6709\u6570\u636e\u5e93\u7ba1\u7406\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u63a8\u8350 Linux \u7528\u6237\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6559\u7a0b"})}),"\n",(0,s.jsxs)(E,{children:[(0,s.jsx)("summary",{children:"\u914d\u7f6e\u6570\u636e\u5e93"}),(0,s.jsx)(n.p,{children:"TODO"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u624b\u52a8\u7ba1\u7406",children:"\u624b\u52a8\u7ba1\u7406"}),"\n",(0,s.jsx)(n.p,{children:"PS: \u8fd9\u5e74\u5934\u8c01\u8fd8\u7528\u6307\u4ee4\u7ba1\u7406\u6570\u636e\u5e93\u554a"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"\u8bed\u53e5\u793a\u4f8b:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE <\u6570\u636e\u5e93\u540d\u79f0> CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;\n"})}),(0,s.jsxs)(n.p,{children:["\u89e3\u91ca: ",(0,s.jsx)(n.code,{children:"CHARACTER SET utf8mb4"})," \u5c06\u6570\u636e\u5e93\u5b57\u7b26\u96c6\u8bbe\u7f6e\u4e3a utf8mb4\uff0c \u80fd\u591f\u5b58\u50a8\u5305\u62ec\u8868\u60c5\u7b26\u53f7\u5728\u5185\u7684\u6240\u6709 Unicode \u5b57\u7b26\u3002 ",(0,s.jsx)(n.code,{children:"utf8mb4_general_ci"})," \u662f\u4e00\u79cd\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff08case-insensitive\uff09\u7684\u6392\u5e8f\u89c4\u5219\uff0c\u5982\u679c\u4f60\u60f3\u533a\u5206\u5927\u5c0f\u5199\uff0c\u53ef\u4ee5\u6539\u4e3a ",(0,s.jsx)(n.code,{children:"utf8mb4_bin"}),"\uff0c",(0,s.jsx)(n.code,{children:"_bin"})," \u610f\u4e3a\u4ee5\u4e8c\u8fdb\u5236\u65b9\u5f0f\u6bd4\u8f83\u5b57\u7b26\u3002"]})]}),"\n",(0,s.jsx)(n.p,{children:"TODO"}),"\n",(0,s.jsx)(n.h2,{id:"\u63d2\u4ef6\u8fde\u63a5\u6570\u636e\u5e93",children:"\u63d2\u4ef6\u8fde\u63a5\u6570\u636e\u5e93"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\uff0c\u6211\u4eec\u6765\u6f14\u793a\u4e00\u4e0b\u600e\u4e48\u8ba9\u63d2\u4ef6\u8fde\u63a5\u4e0a\u6570\u636e\u5e93"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u4ee5 MySQL \u4e3a\u4f8b:"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u822c\u63d2\u4ef6\u7684\u6570\u636e\u5e93\u914d\u7f6e\u9879"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(14266).A+"",width:"315",height:"289"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u6765\u4e00\u4e00\u4ecb\u7ecd\u4ed6\u4eec\u7684\u7528\u9014"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"enabled: \u662f\u5426\u542f\u7528 MySQL \u5b58\u50a8\u6570\u636e\uff1f\u5982\u679c\u662f\u8bf7\u586b true \uff0c\u5426\u5219\u586b false \uff0c\u9ed8\u8ba4\u662f false \uff0c\u800c\u4e14\u6709\u4e9b\u63d2\u4ef6\u662f\u76f4\u63a5\u8ba9\u4f60\u586b\u5199\u6570\u636e\u5e93\u7c7b\u578b\u7684\uff0c\u9ed8\u8ba4\u662f SQLite \uff0c\u5bf9\u4e8e\u8fd9\u79cd\u914d\u7f6e\u6587\u4ef6\uff0c\u8bf7\u628a SQLite \u6539\u6210 MySQL \u6216\u8005\u5176\u4ed6\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5e93\u540d"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"host: \u4e5f\u5c31\u662f\u4e3b\u673a\u5730\u5740\uff0c\u5982\u679c\u6570\u636e\u5e93\u5728\u672c\u5730\uff0c\u8bf7\u586b localhost"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"port: \u6570\u636e\u5e93\u7aef\u53e3\uff0c\u9ed8\u8ba4\u662f 3306"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"database: \u6570\u636e\u5e93\u540d\uff0c\u4e5f\u5c31\u662f\u4f60\u5728\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u7684\u6570\u636e\u5e93\u4f60\u4e3a\u4ed6\u8bbe\u7f6e\u7684\u540d\u5b57"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"table-prefix: \u6570\u636e\u5e93\u8868\u7684\u524d\u7f00\uff0c\u53ef\u4ee5\u4e0d\u7ba1\u4ed6"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"username: \u4f7f\u7528\u54ea\u4e2a\u7528\u6237\u6765\u8fde\u63a5\u6570\u636e\u5e93\uff1f\u5207\u8bb0\u4e00\u822c\u522b\u7528 root \u5426\u5219\u8fde\u63a5\u6570\u6ee1\u7684\u65f6\u5019\u6709\u4f60\u597d\u53d7\u7684"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"password: \u4e5f\u5c31\u662f\u4e0a\u9762\u90a3\u4e2a username \u91cc\u9762\u586b\u7684\u90a3\u4e2a\u7528\u6237\u7684\u767b\u5f55\u5bc6\u7801"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u540e\u9762\u7684\u5c31\u4e0d\u505a\u89e3\u91ca\u4e86\uff0c\u4e00\u822c\u7528\u4e0d\u7740"}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u6539\u5b8c\u540e\u4fdd\u5b58\u914d\u7f6e\uff0c\u7136\u540e\u91cd\u542f\u670d\u52a1\u5668\uff0c\u5982\u679c\u8fde\u63a5\u6210\u529f\uff0c\u90a3\u4e48\u4f60\u5728\u6570\u636e\u5e93\u7ba1\u7406\u8f6f\u4ef6\u4e0a\u4f1a\u770b\u89c1\u90a3\u4e2a\u63d2\u4ef6\u7684\u6570\u636e\u5e93\u4e0b\u9762\u5df2\u7ecf\u81ea\u52a8\u751f\u6210\u8868\u4e86"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8fde\u63a5\u4e0d\u4e0a\uff0c\u63d2\u4ef6\u5728\u542f\u52a8\u7684\u65f6\u5019\u5c31\u4f1a\u62a5\u9519\uff0c\u4e00\u822c\u5bfc\u81f4\u8fde\u63a5\u4e0d\u4e0a\u7684\u539f\u56e0\u6709:"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u822c\u6709\u8fd9\u51e0\u79cd\u60c5\u51b5\u5bfc\u81f4\u8fde\u63a5\u4e0d\u4e0a:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u4e3b\u673a\u3001\u7aef\u53e3\u586b\u5199\u9519\u8bef"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u540d\u3001\u5bc6\u7801\u4e0d\u6b63\u786e"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u6570\u6ee1\u4e86"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u7ed3\u5408\u62a5\u9519\u5206\u6790\u539f\u56e0"})]})}function r(A={}){const{wrapper:n}={...(0,B.R)(),...A.components};return n?(0,s.jsx)(n,{...A,children:(0,s.jsx)(d,{...A})}):d(A)}},32152:(A,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/25-4d3011c1f1c276acb41796a6d72d9920.png"},27763:(A,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/26-7f456a4853cb1c44f962a87da35a3627.png"},95850:(A,n,e)=>{e.d(n,{A:()=>s});const s="data:image/png;base64,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"},22973:(A,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/28-02d7c1d43abe9931ef214eaf39907b82.png"},85492:(A,n,e)=>{e.d(n,{A:()=>s});const s="data:image/png;base64,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EEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcVHJoQQAABQYDcFFCoQgABBBQBclPBoQkBBBAQBMhNAYUqBBBAQBEgNxUcmhBAAAFBgNwUUKhCAAEEFAFyU8GhCQEEEBAEyE0BhSoEEEBAESA3FRyaEEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcVHJoQQAABQYDcFFCoQgABBBQBclPBoQkBBBAQBMhNAYUqBBBAQBEgNxUcmhBAAAFBgNwUUKhCAAEEFAFyU8GhCQEEEBAEyE0BhSoEEEBAESA3FRyaEEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcVHJoQQAABQYDcFFCoQgABBBQBclPBoQkBBBAQBMhNAYUqBBBAQBEgNxUcmhBAAAFBgNwUUKhCAAEEFAFyU8GhCQEEEBAEyE0BhSoEEEBAESA3FRyaEEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcVHJoQQAABQYDcFFCoQgABBBQBclPBoQkBBBAQBMhNAYUqBBBAQBEgNxUcmhBAAAFBgNwUUKhCAAEEFAFyU8GhCQEEEBAEyE0BhSoEEEBAESA3FRyaEEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcVHJoQQAABQYDcFFCoQgABBBQBclPBoQkBBBAQBMhNAYUqBBBAQBEgNxUcmhBAAAFBgNwUUKhCAAEEFAFyU8GhCQEEEBAEyE0BhSoEEEBAESA3FRyaEEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcVHJoQQAABQYDcFFCoQgABBBQBclPBoQkBBBAQBMhNAYUqBBBAQBEgNxUcmhBAAAFBgNwUUKhCAAEEFAFyU8GhCQEEEBAEyE0BhSoEEEBAESA3FRyaEEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcVHJoQQAABQYDcFFCoQgABBBQBclPBoQkBBBAQBMhNAYUqBBBAQBEgNxUcmhBAAAFBgNwUUKhCAAEEFAFyU8GhCQEEEBAEyE0BhSoEEEBAESA3FRyaEEAAAUGA3BRQqEIAAQQUAXJTwaEJAQQQEATITQGFKgQQQEARIDcV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"},14266:(A,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/30-282d1e173533cffd17b7a35ba98e23f9.png"},25710:(A,n,e)=>{e.d(n,{R:()=>Q,x:()=>i});var s=e(30758);const B={},E=s.createContext(B);function Q(A){const n=s.useContext(E);return s.useMemo((function(){return"function"==typeof A?A(n):{...n,...A}}),[n,A])}function i(A){let n;return n=A.disableParentContext?"function"==typeof A.components?A.components(B):A.components||B:Q(A.components),s.createElement(E.Provider,{value:n},A.children)}}}]);