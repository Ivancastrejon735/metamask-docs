"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),s=a(86010),o=a(12466),i=a(70989),l=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=d[a].value;r!==i&&(c(t),l(r))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:m},o,{className:(0,s.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function u(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function c(e){const t=(0,i.Y)(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",p.tabList)},n.createElement(d,(0,r.Z)({},e,t)),n.createElement(u,(0,r.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>c});var r=a(67294),n=a(16550),s=a(91980),o=a(67392),i=a(50012);function l(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const o=(0,n.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,m]=u({queryString:a,groupId:n}),[k,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),b=(()=>{const e=c??k;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,s]),tabValues:s}}},51828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),s=a(65488),o=a(85162);const i={description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},l="About MetaMask SDK",p={unversionedId:"concepts/sdk/index",id:"concepts/sdk/index",title:"About MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk/index.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/",permalink:"/1101-add-snaps-diagrams/wallet/concepts/sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/1101-add-snaps-diagrams/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/1101-add-snaps-diagrams/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/1101-add-snaps-diagrams/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/1101-add-snaps-diagrams/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"About the MetaMask APIs",permalink:"/1101-add-snaps-diagrams/wallet/concepts/apis"},next:{title:"SDK connections",permalink:"/1101-add-snaps-diagrams/wallet/concepts/sdk/connections"}},d={},u=[{value:"Benefits of MetaMask SDK",id:"benefits-of-metamask-sdk",level:2},{value:"User experience",id:"user-experience",level:2}],c={toc:u},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-metamask-sdk"},"About MetaMask SDK"),(0,n.kt)("p",null,"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK in existing dapps, and call any\n",(0,n.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/wallet/reference/provider-api"},"provider API methods")," from your dapp.\nGet started ",(0,n.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/wallet/how-to/use-sdk/"},"using the SDK"),"."),(0,n.kt)("h2",{id:"benefits-of-metamask-sdk"},"Benefits of MetaMask SDK"),(0,n.kt)("p",null,"MetaMask SDK enables your dapp to provide a seamless user experience for MetaMask users, from\nmultiple dapp platforms, without relying on third-party libraries.\nBy integrating your dapp using the SDK, millions of MetaMask Mobile users can connect to their\npreferred MetaMask client.\nThe SDK uses the ",(0,n.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/wallet/concepts/apis#ethereum-provider-api"},"Ethereum provider"),", so existing dapps work out\nof the box with the SDK."),(0,n.kt)("p",null,"The following table outlines some of the features available when you integrate your dapp with\nMetaMask using the SDK.\nMost of these features are not available if you only integrate your dapp directly using the MetaMask\nprovider API."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"center"},"MetaMask provider API only"),(0,n.kt)("th",{parentName:"tr",align:"center"},"MetaMask SDK"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Connect from a web dapp to the MetaMask extension"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Connect from a web dapp to MetaMask Mobile"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Connect from desktop, mobile, and gaming dapps to MetaMask Mobile"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Use custom RPC methods such as ",(0,n.kt)("a",{parentName:"td",href:"/1101-add-snaps-diagrams/wallet/how-to/sign-data/connect-and-sign"},(0,n.kt)("inlineCode",{parentName:"a"},"connectAndSign"))),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/1101-add-snaps-diagrams/wallet/how-to/batch-json-rpc-requests"},"Batch multiple RPC requests")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/1101-add-snaps-diagrams/wallet/how-to/use-3rd-party-integrations/js-infura-api"},"Make read-only requests")," using the Infura API"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,n.kt)("h2",{id:"user-experience"},"User experience"),(0,n.kt)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{label:"Desktop browser",value:"tab1",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"100%",controls:!0},(0,n.kt)("source",{src:"/sdk-desktop.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/wallet/how-to/use-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"Mobile browser",value:"tab2",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your web dapp on a mobile browser, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-mobile-browser.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/wallet/how-to/use-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"iOS",value:"tab3",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your iOS dapp, the SDK automatically deeplinks to MetaMask Mobile (or if the\nuser doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-ios.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/wallet/how-to/use-sdk/mobile/ios"},"setting up the SDK in your iOS dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-ios-sdk"},"example iOS dapp")," in the iOS SDK GitHub\nrepository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"Android",value:"tab4",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Android dapp, the SDK automatically deeplinks to MetaMask Mobile (or if\nthe user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-android.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/wallet/how-to/use-sdk/mobile/android"},"setting up the SDK in your Android dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository and the ",(0,n.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/wallet/concepts/sdk/android"},"Android SDK architecture")," for more information.")))),(0,n.kt)(o.Z,{label:"Node.js",value:"tab5",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"625",controls:!0},(0,n.kt)("source",{src:"/sdk-nodejs.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/wallet/how-to/use-sdk/javascript/nodejs"},"setting up the SDK in your Node.js dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"example Node.js dapp"),"\nin the Node.js SDK GitHub repository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"Unity",value:"tab6",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms, as demonstrated in the following screen recording."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-unity.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/wallet/how-to/use-sdk/gaming/unity"},"setting up the SDK in your Unity game"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/decentralization/demo-game-dragon-crasher-with-metamask-sdk-infura-and-truffle-249789"},"Unity demo game with the SDK installed"),"\nfor advanced use cases."))))),(0,n.kt)("p",null,"You can read more about the ",(0,n.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/wallet/concepts/sdk/connections"},"connection flow between the SDK and MetaMask"),"."))}k.isMDXComponent=!0}}]);