"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9566],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28223:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const i={description:"Learn about the Snaps execution environment.",sidebar_position:3},o="Snaps execution environment",s={unversionedId:"learn/about-snaps/execution-environment",id:"learn/about-snaps/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/learn/about-snaps/execution-environment.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/execution-environment",permalink:"/eriknson-patch-1/snaps/learn/about-snaps/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/execution-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps files",permalink:"/eriknson-patch-1/snaps/learn/about-snaps/files"},next:{title:"Tutorials",permalink:"/eriknson-patch-1/snaps/learn/tutorials"}},l={},p=[{value:"Supported globals",id:"supported-globals",level:2},{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,r.yg)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,r.yg)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThis allows MetaMask to restrict access to global JavaScript APIs and to isolate a Snap's code from\nother parts of the application."),(0,r.yg)("p",null,"This environment does not have a DOM, Node.js built-ins, or platform-specific APIs other than the\ndefault ",(0,r.yg)("inlineCode",{parentName:"p"},"snap")," global and MetaMask's ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global."),(0,r.yg)("p",null,"The execution environment is designed to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Prevent Snaps from polluting the global environment."),(0,r.yg)("li",{parentName:"ul"},"Prevent malicious Snaps from stealing from users."),(0,r.yg)("li",{parentName:"ul"},"Prevent Snaps from accessing sensitive JavaScript global APIs (such as ",(0,r.yg)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,r.yg)("li",{parentName:"ul"},'Be "fully virtualizable," or platform-independent.')),(0,r.yg)("p",null,"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."),(0,r.yg)("h2",{id:"supported-globals"},"Supported globals"),(0,r.yg)("p",null,"A Snap can access the ",(0,r.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/learn/about-snaps/apis#snaps-api"},"Snaps API")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"snap")," global, and the\n",(0,r.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/learn/about-snaps/apis#metamask-json-rpc-api"},"MetaMask JSON-RPC API")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global.\nTo access the ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global, a Snap must request the\n",(0,r.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/permissions#endowmentethereum-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission."),(0,r.yg)("p",null,"Almost all\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"standard JavaScript globals"),"\nthat are also in Node.js are available to Snaps.\nThis includes globals such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Error"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Math"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Set"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,r.yg)("p",null,"The following globals are also available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"console")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,r.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/permissions#endowmentnetwork-access"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"clearTimeout")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"clearInterval")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,r.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/permissions#endowmentwebassembly"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"TextDecoder")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"atob")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"btoa")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"URL"))),(0,r.yg)("admonition",{title:"note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To use Node.js built-in modules such as ",(0,r.yg)("inlineCode",{parentName:"p"},"crypto")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"path"),", set the\n",(0,r.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/cli/options#polyfills"},(0,r.yg)("inlineCode",{parentName:"a"},"polyfills"))," configuration option to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),".")),(0,r.yg)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)")," is a subset of\nJavaScript designed to enable mutually suspicious programs to execute in the same JavaScript process\n(or the same ",(0,r.yg)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"JavaScript strict mode"),"."))}u.isMDXComponent=!0}}]);