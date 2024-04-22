"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8280],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},95131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const r={description:"See the Unity SDK API reference.",sidebar_position:2,toc_max_heading_level:4,tags:["Unity SDK"]},s="Unity SDK API",o={unversionedId:"reference/sdk-unity-api",id:"reference/sdk-unity-api",title:"Unity SDK API",description:"See the Unity SDK API reference.",source:"@site/wallet/reference/sdk-unity-api.md",sourceDirName:"reference",slug:"/reference/sdk-unity-api",permalink:"/fix/api-specs-version-docusaurus-config/wallet/reference/sdk-unity-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-unity-api.md",tags:[{label:"Unity SDK",permalink:"/fix/api-specs-version-docusaurus-config/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"See the Unity SDK API reference.",sidebar_position:2,toc_max_heading_level:4,tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript SDK options",permalink:"/fix/api-specs-version-docusaurus-config/wallet/reference/sdk-js-options"},next:{title:"Ethereum provider API",permalink:"/fix/api-specs-version-docusaurus-config/wallet/reference/provider-api"}},l={},c=[{value:"<code>MetaMaskUnity</code>",id:"metamaskunity",level:3},{value:"<code>Instance</code>",id:"instance",level:4},{value:"<code>Initialize</code>",id:"initialize",level:4},{value:"<code>SaveSession</code>",id:"savesession",level:4},{value:"<code>LoadSession</code>",id:"loadsession",level:4},{value:"<code>MetaMaskWallet</code>",id:"metamaskwallet",level:3},{value:"<code>Connect</code>",id:"connect",level:4},{value:"<code>Disconnect</code>",id:"disconnect",level:4},{value:"<code>Request</code>",id:"request",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"unity-sdk-api"},"Unity SDK API"),(0,i.yg)("p",null,"The following is an overview of the API methods used in the ",(0,i.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/wallet/how-to/use-sdk/gaming/unity/"},"Unity SDK"),"."),(0,i.yg)("h3",{id:"metamaskunity"},(0,i.yg)("inlineCode",{parentName:"h3"},"MetaMaskUnity")),(0,i.yg)("p",null,"This is a singleton class that you can use to access the ",(0,i.yg)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance, which is\nspecific to Unity."),(0,i.yg)("h4",{id:"instance"},(0,i.yg)("inlineCode",{parentName:"h4"},"Instance")),(0,i.yg)("p",null,"This is the singleton instance of the ",(0,i.yg)("inlineCode",{parentName:"p"},"MetaMaskUnity")," class that is lazy-loaded when you access it\nfor the first time."),(0,i.yg)("h4",{id:"initialize"},(0,i.yg)("inlineCode",{parentName:"h4"},"Initialize")),(0,i.yg)("p",null,"This method initializes the ",(0,i.yg)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance and makes it accessible via the ",(0,i.yg)("inlineCode",{parentName:"p"},"Wallet")," property.\nYou can also pass extra options and parameters to it to customize the wallet instance:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"// Initialize using default settings.\nMetaMaskUnity.Instance.Initialize();\n\n// Initialize using custom transport and socket provider.\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(transport, socketProvider);\n\n// Initialize using custom config, transport and socket provider.\nvar config = myMetaMaskConfig;\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(config, transport, socketProvider);\n")),(0,i.yg)("h4",{id:"savesession"},(0,i.yg)("inlineCode",{parentName:"h4"},"SaveSession")),(0,i.yg)("p",null,"This method saves the current session to persistent storage.\nIt is useful when you want to save the session and restore it later.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."),(0,i.yg)("h4",{id:"loadsession"},(0,i.yg)("inlineCode",{parentName:"h4"},"LoadSession")),(0,i.yg)("p",null,"This method loads the session from persistent storage.\nIt is useful when you want to restore the session after the application quits.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."),(0,i.yg)("h3",{id:"metamaskwallet"},(0,i.yg)("inlineCode",{parentName:"h3"},"MetaMaskWallet")),(0,i.yg)("h4",{id:"connect"},(0,i.yg)("inlineCode",{parentName:"h4"},"Connect")),(0,i.yg)("p",null,"This method connects to MetaMask.\nIt renders a generated QR code in the user interface for your users to scan with MetaMask Mobile.\nAfter the user scans this QR code, a connection screen appears in MetaMask Mobile where the user can\napprove the connection with your Unity game."),(0,i.yg)("h4",{id:"disconnect"},(0,i.yg)("inlineCode",{parentName:"h4"},"Disconnect")),(0,i.yg)("p",null,"This method disconnects the user from the MetaMask session."),(0,i.yg)("h4",{id:"request"},(0,i.yg)("inlineCode",{parentName:"h4"},"Request")),(0,i.yg)("p",null,"This method sends a request to MetaMask.\nYou can use it to call any ",(0,i.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/wallet/reference/provider-api"},"provider API method"),"."))}u.isMDXComponent=!0}}]);