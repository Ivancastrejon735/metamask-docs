"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[531],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),g=a,y=l["".concat(c,".").concat(g)]||l[g]||u[g]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},80422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:4,description:"Learn about the contract provider in Unity.",tags:["Unity SDK"]},i="Contract provider",s={unversionedId:"how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",id:"how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",title:"Contract provider",description:"Learn about the contract provider in Unity.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",permalink:"/eriknson-patch-1/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider.md",tags:[{label:"Unity SDK",permalink:"/eriknson-patch-1/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn about the contract provider in Unity.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract proxy class",permalink:"/eriknson-patch-1/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class"},next:{title:"Enable human-readable addresses",permalink:"/eriknson-patch-1/wallet/how-to/use-sdk/gaming/unity/dweb"}},c={},p=[{value:"<code>IProvider</code>",id:"iprovider",level:2},{value:"<code>ILegacyProvider</code>",id:"ilegacyprovider",level:2}],d={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(l,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"contract-provider"},"Contract provider"),(0,a.yg)("p",null,"When ",(0,a.yg)("a",{parentName:"p",href:"/eriknson-patch-1/wallet/how-to/use-sdk/gaming/unity/smart-contracts/"},"interacting with smart contracts in Unity"),", the provider is similar to a JavaScript\nprovider.\nThe provider is responsible for sending the request formed inside the\n",(0,a.yg)("a",{parentName:"p",href:"/eriknson-patch-1/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class"},"contract proxy class")," to the blockchain RPC node and optionally decoding\nthe response.\nIf the provider doesn't decode the response, then it's considered an ",(0,a.yg)("a",{parentName:"p",href:"#ilegacyprovider"},(0,a.yg)("inlineCode",{parentName:"a"},"ILegacyProvider")),"."),(0,a.yg)("h2",{id:"iprovider"},(0,a.yg)("inlineCode",{parentName:"h2"},"IProvider")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"IProvider")," interface defines the following function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"Task<TR> Request<TR>(string method, object[] parameters = null);\n")),(0,a.yg)("p",null,"This function must send a JSON-RPC request with the given method and parameters.\nIt must decode the JSON-RPC result response into the type ",(0,a.yg)("inlineCode",{parentName:"p"},"TR"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"IProvider")," must also define two additional properties:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"// The current chain ID the provider is connected to.\nlong ChainId { get; }\n\n// The current address connected to the provider.\nstring ConnectedAddress { get; }\n")),(0,a.yg)("p",null,"For backwards compatibility, the ",(0,a.yg)("inlineCode",{parentName:"p"},"ILegacyProvider")," function is also defined:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"object Request(string method, object[] parameters = null);\n")),(0,a.yg)("p",null,"To easily support this function, use ",(0,a.yg)("inlineCode",{parentName:"p"},"Request<object>"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"public object Request(string method, object[] parameters = null)\n{\n  return this.Request<object>(method, parameters);\n}\n")),(0,a.yg)("h2",{id:"ilegacyprovider"},(0,a.yg)("inlineCode",{parentName:"h2"},"ILegacyProvider")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ILegacyProvider")," is an interface that declares an interface that does not support response decoding.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"ILegacyProvider")," interface defines the following function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"object Request(string method, object[] parameters = null);\n")),(0,a.yg)("p",null,"This function must send a JSON-RPC request with the given method and parameters.\nIt should decode the response, but it's not required.\nIt may return any of the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The response as a JSON string"),(0,a.yg)("li",{parentName:"ul"},"The response as a JSON string, wrapped in a Task"),(0,a.yg)("li",{parentName:"ul"},"The response decoded into some object"),(0,a.yg)("li",{parentName:"ul"},"The response decoded into some object, wrapped in a Task")),(0,a.yg)("p",null,"If the function returns a JSON string, then the ",(0,a.yg)("inlineCode",{parentName:"p"},"Contract")," class attempts to deserialize the JSON\nstring into the desired type.\nIf it returns any other object type, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Contract")," class attempts to convert to the desired type by\nfirst serializing the object into JSON, then deserializing the JSON back into the desired type.\nThe desired type is defined in the ",(0,a.yg)("a",{parentName:"p",href:"/eriknson-patch-1/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"},"contract interface")," used."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ILegacyProvider")," must also define two additional properties:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"// The current chain ID the provider is connected to.\nlong ChainId { get; }\n\n// The current address connected to the provider.\nstring ConnectedAddress { get; }\n")))}u.isMDXComponent=!0}}]);