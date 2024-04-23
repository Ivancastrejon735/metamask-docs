"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6433],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||s;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(58168),i=(n(96540),n(15680));const s={description:"Enable your users to sign in with Ethereum.",sidebar_position:2},r="Sign in with Ethereum",o={unversionedId:"how-to/sign-data/siwe",id:"how-to/sign-data/siwe",title:"Sign in with Ethereum",description:"Enable your users to sign in with Ethereum.",source:"@site/wallet/how-to/sign-data/siwe.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/siwe",permalink:"/eriknson-patch-1/wallet/how-to/sign-data/siwe",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/siwe.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Enable your users to sign in with Ethereum.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Sign data",permalink:"/eriknson-patch-1/wallet/how-to/sign-data/"},next:{title:"Display in MetaMask",permalink:"/eriknson-patch-1/wallet/how-to/display"}},p={},l=[{value:"Domain binding",id:"domain-binding",level:2},{value:"Example",id:"example",level:2}],c={toc:l},m="wrapper";function g(e){let{components:t,...s}=e;return(0,i.yg)(m,(0,a.A)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"sign-in-with-ethereum"},"Sign in with Ethereum"),(0,i.yg)("p",null,"You can set up ",(0,i.yg)("a",{parentName:"p",href:"https://docs.login.xyz/"},"Sign-In with Ethereum (SIWE)")," to enable users to easily\nsign in to your dapp by authenticating with their MetaMask wallet."),(0,i.yg)("p",null,"MetaMask supports the SIWE standard message format as specified in ",(0,i.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4361"},"ERC-4361"),".\nWhen your dapp prompts a user to sign a message that follows the SIWE format,\nMetaMask parses the message and gives the user a friendly interface prompting them to sign in to\nyour dapp:"),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{src:n(99421).A,alt:"Sign-in with Ethereum request",style:{border:"1px solid #DCDCDC"}})),(0,i.yg)("h2",{id:"domain-binding"},"Domain binding"),(0,i.yg)("p",null,"MetaMask supports domain binding with SIWE to help prevent phishing attacks.\nWhen a site asks a user to sign a SIWE message, but the domain in the message doesn't match the site\nthe user is on, MetaMask displays a warning in the sign-in interface.\nThe user must explicitly select to proceed, accepting the risk of a phishing attack."),(0,i.yg)("admonition",{title:"important",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"MetaMask displays a prominent warning for mismatched domains, but does ",(0,i.yg)("strong",{parentName:"p"},"not")," block users from\nbypassing the warning and accepting the sign-in request.\nThis is to not break existing dapps that may have use cases for mismatched domains.")),(0,i.yg)("div",{class:"row"},(0,i.yg)("div",{class:"column"},(0,i.yg)("img",{src:n(53650).A,alt:"Sign-in bad domain",style:{border:"1px solid #DCDCDC"}})),(0,i.yg)("div",{class:"column"},(0,i.yg)("img",{src:n(29243).A,alt:"Sign-in bad domain pop-up",style:{border:"1px solid #DCDCDC"}}))),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"The following is an example of setting up SIWE with MetaMask using\n",(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,i.yg)("inlineCode",{parentName:"a"},"personal_sign")),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const siweSign = async (siweMessage) => {\n  try {\n    const from = accounts[0];\n    const msg = `0x${Buffer.from(siweMessage, "utf8").toString("hex")}`;\n    const sign = await provider // Or window.ethereum if you don\'t support EIP-6963.\n      .request({\n        method: "personal_sign",\n        params: [msg, from],\n      });\n    siweResult.innerHTML = sign;\n  } catch (err) {\n    console.error(err);\n    siweResult.innerHTML = `Error: ${err.message}`;\n  }\n};\n\nsiwe.onclick = async () => {\n  const domain = window.location.host;\n  const from = accounts[0];\n  const siweMessage = `${domain} wants you to sign in with your Ethereum account:\\n${from}\\n\\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\\n\\nURI: https://${domain}\\nVersion: 1\\nChain ID: 1\\nNonce: 32891757\\nIssued At: 2021-09-30T16:25:24.000Z`;\n  siweSign(siweMessage);\n};\n')),(0,i.yg)("p",null,"The following HTML displays the SIWE button:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<h4>Sign-In with Ethereum</h4>\n<button type="button" id="siwe">Sign-In with Ethereum</button>\n<p class="alert">Result:<span id="siweResult"></span></p>\n')),(0,i.yg)("p",null,"See the ",(0,i.yg)("a",{parentName:"p",href:"https://metamask.github.io/test-dapp/#siwe"},"live example")," and\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/test-dapp"},"test dapp source code")," for more information."))}g.isMDXComponent=!0},29243:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/siwe-bad-domain-2-71ffe32c342b4c06e47927271989cacf.png"},53650:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/siwe-bad-domain-f344d17ce12a9914b4f1f2101bfe4ed1.png"},99421:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/siwe-4a7560a7233d0b709b2484ef550529d4.png"}}]);