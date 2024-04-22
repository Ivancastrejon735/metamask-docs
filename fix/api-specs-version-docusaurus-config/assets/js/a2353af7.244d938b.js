"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6023],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,y=m["".concat(p,".").concat(u)]||m[u]||g[u]||i;return a?t.createElement(y,s(s({ref:n},c),{},{components:a})):t.createElement(y,s({ref:n},c))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44722:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const i={description:"Manage users' non-EVM accounts and assets.",sidebar_position:8},s="Non-EVM networks",o={unversionedId:"features/non-evm-networks",id:"features/non-evm-networks",title:"Non-EVM networks",description:"Manage users' non-EVM accounts and assets.",source:"@site/snaps/features/non-evm-networks.md",sourceDirName:"features",slug:"/features/non-evm-networks",permalink:"/fix/api-specs-version-docusaurus-config/snaps/features/non-evm-networks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/non-evm-networks.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Manage users' non-EVM accounts and assets.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Localization",permalink:"/fix/api-specs-version-docusaurus-config/snaps/features/localization"},next:{title:"Signature insights",permalink:"/fix/api-specs-version-docusaurus-config/snaps/features/signature-insights"}},p={},l=[{value:"Responsible key management",id:"responsible-key-management",level:2},{value:"Derive keys",id:"derive-keys",level:2},{value:"Dogecoin example",id:"dogecoin-example",level:3},{value:"Examples",id:"examples",level:2}],c={toc:l},m="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"non-evm-networks"},"Non-EVM networks"),(0,r.yg)("p",null,"You can manage users' non-EVM accounts and assets with their approval, using\n",(0,r.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/snaps/reference/snaps-api"},"Snaps API")," methods."),(0,r.yg)("admonition",{title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Managing users' keys comes with great responsibility: Misplaced or stolen\nprivate keys can lead to a complete loss of funds for users of your Snap.")),(0,r.yg)("h2",{id:"responsible-key-management"},"Responsible key management"),(0,r.yg)("p",null,"It's critical to practice responsible key management.\nThe general rule is: ",(0,r.yg)("strong",{parentName:"p"},"Don't create a situation where your users can lose assets.")),(0,r.yg)("admonition",{title:"examples of responsible key management:",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Deriving private keys and/or storing them in Snaps persistent storage, without ever moving them\nout of the ",(0,r.yg)("a",{parentName:"li",href:"/fix/api-specs-version-docusaurus-config/snaps/learn/about-snaps/execution-environment"},"Snaps execution environment"),"."),(0,r.yg)("li",{parentName:"ul"},"Ensuring arbitrary code execution can't access irreversible operations or private keys."),(0,r.yg)("li",{parentName:"ul"},"Asking the user for consent and informing them of what's going to happen before performing\nirreversible operations."))),(0,r.yg)("admonition",{title:"examples of irresponsible key management:",type:"danger"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Allowing extraction of private keys outside the Snap in any way, especially through RPC or\nnetwork connections."),(0,r.yg)("li",{parentName:"ul"},"Executing arbitrary or untrusted code with access to private keys."),(0,r.yg)("li",{parentName:"ul"},"Not getting properly informed consent before performing irreversible operations."),(0,r.yg)("li",{parentName:"ul"},"Asking for consent but ignoring the decision."),(0,r.yg)("li",{parentName:"ul"},"Exposing key material in clear-text."),(0,r.yg)("li",{parentName:"ul"},"Producing a bug that leads to any of the above."))),(0,r.yg)("h2",{id:"derive-keys"},"Derive keys"),(0,r.yg)("p",null,"To derive a user's private keys:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Choose between the BIP-32 or BIP-44 specifications to derive the user's private keys.\nIf the keys you want to derive conform to the\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP-44")," structure, use\n",(0,r.yg)("a",{parentName:"li",href:"/fix/api-specs-version-docusaurus-config/snaps/reference/snaps-api#snap_getbip44entropy"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getBip44Entropy"))," to derive them.\nOtherwise, use ",(0,r.yg)("a",{parentName:"li",href:"/fix/api-specs-version-docusaurus-config/snaps/reference/snaps-api#snap_getbip32entropy"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getBip32Entropy")),"."),(0,r.yg)("li",{parentName:"ol"},"Add the required permission to your manifest file."),(0,r.yg)("li",{parentName:"ol"},"Find out the derivation path to use.\nThis is dependent on the application you're building."),(0,r.yg)("li",{parentName:"ol"},"Use the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/key-tree"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/key-tree"))," module to derive the keys.\nAny additional code, for example, to derive addresses from keys, is application-specific.")),(0,r.yg)("h3",{id:"dogecoin-example"},"Dogecoin example"),(0,r.yg)("p",null,"For example, to derive Dogecoin keys:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dogecoin uses the BIP-44 scheme, so you'll use\n",(0,r.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/snaps/reference/snaps-api#snap_getbip44entropy"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getBip44Entropy")),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dogecoin has coin type ",(0,r.yg)("inlineCode",{parentName:"p"},"3"),", so add the following to the manifest file:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_getBip44Entropy": [\n    {\n      "coinType": 3\n    }\n  ]\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dogecoin uses the following derivation path:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"m/44'/3'/0'/0/{address_index}\n")),(0,r.yg)("p",{parentName:"li"},"To get the second Dogecoin account, add the following code to your Snap:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"import { getBIP44AddressKeyDeriver } from \"@metamask/key-tree\";\n\n// Get the Dogecoin node, corresponding to the path m/44'/3'.\nconst dogecoinNode = await snap.request({\n  method: \"snap_getBip44Entropy\",\n  params: {\n    coinType: 3,\n  },\n});\n\n/**\n * Create a function that takes an index and returns an extended private key for m/44'/3'/0'/0/address_index.\n * The second parameter to getBIP44AddressKeyDeriver isn't passed. This sets account and changes to 0.\n */\nconst deriveDogecoinAddress = await getBIP44AddressKeyDeriver(dogecoinNode);\n\n// Derive the second Dogecoin address, which has index 1.\nconst secondAccount = deriveDogecoinAddress(1);\n")))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"The following are examples of existing Snaps that manage accounts and keys:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/ziad-saab/dogecoin-snap"},"Dogecoin Snap tutorial")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Consensys/starknet-snap"},"Consensys StarkNet Snap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/snapdao/btcsnap"},"Account Labs Bitcoin Snap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/bip32"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/bip32-example-snap"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/bip44"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/bip44-example-snap")))))}g.isMDXComponent=!0}}]);