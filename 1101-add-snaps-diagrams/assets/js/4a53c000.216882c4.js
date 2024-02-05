"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5048],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),l=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?t.createElement(g,p(p({ref:a},c),{},{components:n})):t.createElement(g,p({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81312:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(87462),r=(n(67294),n(3905));const i={description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},p="Create an account management companion dapp",o={unversionedId:"how-to/use-keyring-api/create-companion-dapp",id:"how-to/use-keyring-api/create-companion-dapp",title:"Create an account management companion dapp",description:"Call Keyring API methods from your companion dapp.",source:"@site/snaps/how-to/use-keyring-api/create-companion-dapp.md",sourceDirName:"how-to/use-keyring-api",slug:"/how-to/use-keyring-api/create-companion-dapp",permalink:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-companion-dapp",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-keyring-api/create-companion-dapp.md",tags:[{label:"Keyring API",permalink:"/1101-add-snaps-diagrams/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create an account management Snap",permalink:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-account-snap"},next:{title:"Security guidelines",permalink:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/security"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Create the KeyringSnapRpcClient",id:"2-create-the-keyringsnaprpcclient",level:3},{value:"3. Call Keyring API methods",id:"3-call-keyring-api-methods",level:3},{value:"Example",id:"example",level:2}],c={toc:l},m="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-account-management-companion-dapp"},"Create an account management companion dapp"),(0,r.kt)("p",null,"Create a companion dapp to provide a user interface for your account management Snap.\nUse the ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient"))," to\ncall Keyring API methods from your companion dapp, enabling users to create and interact with custom\nEVM accounts."),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-account-snap"},"Create an account management Snap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/concepts/keyring-api"},"About the Keyring API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-account-snap"},"account management Snap")," set up."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/keyring-api")," in your project directory using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("h3",{id:"2-create-the-keyringsnaprpcclient"},"2. Create the KeyringSnapRpcClient"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { KeyringSnapRpcClient } from \"@metamask/keyring-api\";\nimport { defaultSnapOrigin as snapId } from '../config';\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n")),(0,r.kt)("h3",{id:"3-call-keyring-api-methods"},"3. Call Keyring API methods"),(0,r.kt)("p",null,"You can now use the ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")),"\nto invoke Keyring API methods on your Snap."),(0,r.kt)("p",null,"For example, to call ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#listaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"keyring_listAccounts")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accounts = await client.listAccounts();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site"},"example companion dapp source code"),"\nfor more information."))}d.isMDXComponent=!0}}]);