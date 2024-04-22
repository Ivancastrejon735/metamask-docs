"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3557],{15680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>d});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?t.createElement(d,i(i({ref:r},l),{},{components:n})):t.createElement(d,i({ref:r},l))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46865:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(58168),a=(n(96540),n(15680));const o={description:"Learn about convenience libraries.",sidebar_position:4},i="Convenience libraries",s={unversionedId:"concepts/convenience-libraries",id:"concepts/convenience-libraries",title:"Convenience libraries",description:"Learn about convenience libraries.",source:"@site/wallet/concepts/convenience-libraries.md",sourceDirName:"concepts",slug:"/concepts/convenience-libraries",permalink:"/fix/api-specs-version-docusaurus-config/wallet/concepts/convenience-libraries",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/convenience-libraries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about convenience libraries.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Android SDK architecture",permalink:"/fix/api-specs-version-docusaurus-config/wallet/concepts/sdk/android"},next:{title:"Signing methods",permalink:"/fix/api-specs-version-docusaurus-config/wallet/concepts/signing-methods"}},c={},p=[],l={toc:p},u="wrapper";function f(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"convenience-libraries"},"Convenience libraries"),(0,a.yg)("p",null,"Various convenience libraries exist for dapp developers.\nSome of them simplify the creation of specific user interface elements, some entirely manage the\nuser account onboarding, and others give you a variety of methods for interacting with smart\ncontracts, for a variety of API preferences (for example, promises, callbacks, and strong types)."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/wallet/concepts/wallet-api#ethereum-provider-api"},"MetaMask Ethereum provider API")," is very simple, and wraps\n",(0,a.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/wallet/concepts/wallet-api#json-rpc-api"},"Ethereum JSON-RPC")," formatted messages, which is why\nsome developers use a convenience library for interacting with the provider, such as\n",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethers"},"Ethers"),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3.js"),", and\n",(0,a.yg)("a",{parentName:"p",href:"https://framework.embarklabs.io/"},"Embark"),".\nYou can refer to those tools' documentation to use them."),(0,a.yg)("p",null,"You can ",(0,a.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/wallet/how-to/use-sdk/"},"use MetaMask SDK"),", which provides a reliable, secure, and\nseamless connection from your dapp to MetaMask.\nIt onboards users smoothly from multiple dapp platforms using the MetaMask browser extension or\nMetaMask Mobile, and your dapp can call any ",(0,a.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/wallet/concepts/wallet-api"},"Wallet API")," methods with the SDK installed."),(0,a.yg)("p",null,"You can also ",(0,a.yg)("a",{parentName:"p",href:"/fix/api-specs-version-docusaurus-config/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard"},"use Web3-Onboard with MetaMask SDK"),"\nin your JavaScript dapp."))}f.isMDXComponent=!0}}]);