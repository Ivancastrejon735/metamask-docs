"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=u(n),f=s,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const r={title:"Introduction"},i="Extend the functionality of MetaMask using Snaps",o={unversionedId:"index",id:"index",title:"Introduction",description:"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,",source:"@site/snaps/index.md",sourceDirName:".",slug:"/",permalink:"/zs/update-snaps-quickstart/snaps/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"snapsSidebar",next:{title:"Get started",permalink:"/zs/update-snaps-quickstart/snaps/category/get-started"}},p={},u=[{value:"What is a snap?",id:"what-is-a-snap",level:2},{value:"What can you do with a snap?",id:"what-can-you-do-with-a-snap",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"extend-the-functionality-of-metamask-using-snaps"},"Extend the functionality of MetaMask using Snaps"),(0,s.kt)("p",null,"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,\ncreating new web3 end user experiences."),(0,s.kt)("p",null,"Get started by ",(0,s.kt)("a",{parentName:"p",href:"/zs/update-snaps-quickstart/snaps/get-started/install-snaps"},"installing Snaps"),"."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Snaps is pre-release software."),(0,s.kt)("li",{parentName:"ul"},"To learn how to integrate your dapp with MetaMask, visit the\n",(0,s.kt)("a",{parentName:"li",href:"../wallet"},"MetaMask wallet developer documentation"),"."))),(0,s.kt)("h2",{id:"what-is-a-snap"},"What is a snap?"),(0,s.kt)("p",null,"A snap is a JavaScript program run in an isolated environment that customizes the wallet experience.\nSnaps have access to a limited set of capabilities, determined by the\n",(0,s.kt)("a",{parentName:"p",href:"/zs/update-snaps-quickstart/snaps/how-to/request-permissions"},"permissions")," the user granted them during installation."),(0,s.kt)("h2",{id:"what-can-you-do-with-a-snap"},"What can you do with a snap?"),(0,s.kt)("p",null,"A snap can add new API methods to MetaMask, add support for different blockchain protocols, or\nmodify existing functionalities using the ",(0,s.kt)("a",{parentName:"p",href:"/zs/update-snaps-quickstart/snaps/reference/rpc-api"},"Snaps JSON-RPC API"),"."),(0,s.kt)("p",null,"For example, you can:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-snaps-quickstart/snaps/reference/rpc-api#snap_dialog"},"Display a custom confirmation screen")," in MetaMask."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-snaps-quickstart/snaps/reference/rpc-api#snapnotify"},"Notify users")," in MetaMask."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-snaps-quickstart/snaps/reference/rpc-api#snap_managestate"},"Securely store and manage data")," on your device."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-snaps-quickstart/snaps/reference/rpc-api#snap_getbip44entropy"},"Control non-EVM accounts and assets")," in MetaMask."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-snaps-quickstart/snaps/reference/exports#ontransaction"},"Provide transaction insights")," in MetaMask's pre-transaction window."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-snaps-quickstart/snaps/reference/exports#oncronjob"},"Schedule periodic actions")," for your users."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-snaps-quickstart/snaps/how-to/use-custom-ui"},"Display custom UI")," in MetaMask using a set of pre-defined components,\nincluding inline Markdown.")),(0,s.kt)("h2",{id:"questions"},"Questions?"),(0,s.kt)("p",null,"If you have questions about using Snaps or want to propose a new feature, you can interact with the\nSnaps team and community on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/discussions"},"GitHub discussions"),"\nand the Snaps channel on ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"ConsenSys Discord"),"."))}l.isMDXComponent=!0}}]);