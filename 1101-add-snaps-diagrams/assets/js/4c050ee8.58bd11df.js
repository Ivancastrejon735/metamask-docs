"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4506],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),i=a(85162);const o={description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},p="Create an account management Snap",l={unversionedId:"how-to/use-keyring-api/create-account-snap",id:"how-to/use-keyring-api/create-account-snap",title:"Create an account management Snap",description:"Get started by creating an account management Snap.",source:"@site/snaps/how-to/use-keyring-api/create-account-snap.md",sourceDirName:"how-to/use-keyring-api",slug:"/how-to/use-keyring-api/create-account-snap",permalink:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-account-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-keyring-api/create-account-snap.md",tags:[{label:"Keyring API",permalink:"/1101-add-snaps-diagrams/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Use the Keyring API",permalink:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api"},next:{title:"Create a companion dapp",permalink:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-companion-dapp"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Add permissions",id:"2-add-permissions",level:3},{value:"3. Implement the Keyring API",id:"3-implement-the-keyring-api",level:3},{value:"4. Handle requests submitted by MetaMask",id:"4-handle-requests-submitted-by-metamask",level:3},{value:"5. Notify MetaMask about events",id:"5-notify-metamask-about-events",level:3},{value:"6. Expose the Keyring API",id:"6-expose-the-keyring-api",level:3},{value:"7. Create a companion dapp",id:"7-create-a-companion-dapp",level:3},{value:"Example",id:"example",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-account-management-snap"},"Create an account management Snap"),(0,r.kt)("p",null,"Create an account management Snap to connect to custom EVM accounts."),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-companion-dapp"},"Create an account management companion dapp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/security"},"Account management Snap security guidelines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/concepts/keyring-api"},"About the Keyring API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a Snap.\nSee the ",(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/get-started/quickstart"},"Snaps quickstart")," and ",(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/how-to/develop-a-snap"},"how to develop a Snap"),"."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/security"},"account management Snap security guidelines"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/keyring-api")," in your project directory using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("h3",{id:"2-add-permissions"},"2. Add permissions"),(0,r.kt)("p",null,"Specify the following ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/how-to/request-permissions"},"permissions")," in your Snap manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": [\n      "https://<dapp domain>"\n    ]\n  },\n  "endowment:rpc": {\n    "dapps": true\n  },\n  "snap_manageAccounts": {},\n  "snap_manageState": {}\n},\n')),(0,r.kt)("p",null,"Add a list of dapp URLs allowed to call Keyring API methods on your Snap using the\n",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/reference/permissions#endowmentkeyring"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:keyring"))," permission."),(0,r.kt)("h3",{id:"3-implement-the-keyring-api"},"3. Implement the Keyring API"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/security#limit-the-methods-exposed-to-dapps"},"required Keyring API methods")," in your Snap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class MySnapKeyring implements Keyring {\n  // Implement the required methods here...\n}\n")),(0,r.kt)("h3",{id:"4-handle-requests-submitted-by-metamask"},"4. Handle requests submitted by MetaMask"),(0,r.kt)("p",null,"MetaMask submits Ethereum sign requests from dapps using the\n",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/reference/keyring-api/type-aliases/Keyring#submitrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"submitRequest"))," method of the\nKeyring API.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/concepts/keyring-api#supported-signing-methods"},"supported signing methods"),"."),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "d6e23af6-4bea-48dd-aeb0-7d3c30ea67f9",\n  "scope": "",\n  "account": "69438371-bef3-4957-9f91-c3f22c1d75f3",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The request includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - The unique identifier for the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," - The CAIP-2 chain ID of the selected chain.\nCurrently, this property is always an empty string.\nYour Snap should use the chain ID present in the request object instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account")," - The ID of the account that should handle the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - The request object.")),(0,r.kt)("p",null,"Your Snap must respond with either a synchronous or asynchronous result:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Synchronous",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return { pending: false, result };\n"))),(0,r.kt)(i.Z,{value:"Asynchronous",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return { pending: true, redirect: { message, url } };\n")),(0,r.kt)("p",null,"The redirect message and URL is displayed to the user to help them continue the transaction flow."))),(0,r.kt)("h3",{id:"5-notify-metamask-about-events"},"5. Notify MetaMask about events"),(0,r.kt)("p",null,"Notify MetaMask when the following events take place, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"emitSnapKeyringEvent()")," helper function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An account is created:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"}," MetaMask returns an error if the account already exists or the account object is invalid.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An account is updated:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountUpdated, { account });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"}," MetaMask returns an error if the account does not exist, the account object is invalid, or the\naccount address changes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An account is deleted:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountDeleted, {\n    id: account.id,\n  });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"}," The delete event is idempotent, so it is safe to emit even if the account does not exist.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A request is approved:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestApproved, {\n    id: request.id,\n    result,\n  });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"}," MetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that implement the\n",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/concepts/keyring-api#asynchronous-transaction-flow"},"asynchronous transaction flow"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A request is rejected:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestRejected, {\n    id: request.id,\n  });\n  // Update your snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"}," MetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that implement the\n",(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/concepts/keyring-api#asynchronous-transaction-flow"},"asynchronous transaction flow"),"."))),(0,r.kt)("h3",{id:"6-expose-the-keyring-api"},"6. Expose the Keyring API"),(0,r.kt)("p",null,"Create an ",(0,r.kt)("inlineCode",{parentName:"p"},"onKeyringRequest")," entry point handler method to expose the Keyring API methods\nto MetaMask and your dapp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Your custom logic here...\n  return handleKeyringRequest(keyring, request);\n};\n")),(0,r.kt)("h3",{id:"7-create-a-companion-dapp"},"7. Create a companion dapp"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/1101-add-snaps-diagrams/snaps/how-to/use-keyring-api/create-companion-dapp"},"Create a companion dapp")," to provide a user interface for your account\nmanagement Snap, enabling them to create and interact with custom EVM accounts."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/snap"},"example account management Snap source code"),"\nfor more information."))}h.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),i=a(12466),o=a(70989),p=a(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(d(t),p(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:m},i,{className:(0,s.Z)("tabs__item",l.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function c(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",l.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(c,(0,n.Z)({},e,t)))}function m(e){const t=(0,p.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(67294),r=a(16550),s=a(91980),i=a(67392),o=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function l(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=l(e),[i,p]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,m]=c({queryString:a,groupId:r}),[h,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),k=(()=>{const e=d??h;return u({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{k&&p(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);p(e),m(e),g(e)}),[m,g,s]),tabValues:s}}}}]);