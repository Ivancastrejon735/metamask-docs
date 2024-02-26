"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={description:"Get started with the Gas APIs.",sidebar_position:1},o="Quickstart",s={unversionedId:"gas-api/quickstart",id:"gas-api/quickstart",title:"Quickstart",description:"Get started with the Gas APIs.",source:"@site/services/gas-api/quickstart.md",sourceDirName:"gas-api",slug:"/gas-api/quickstart",permalink:"/Adding-Biconomy-Snap-Template/services/gas-api/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get started with the Gas APIs.",sidebar_position:1},sidebar:"servicesSidebar",previous:{title:"Gas API",permalink:"/Adding-Biconomy-Snap-Template/services/gas-api/"},next:{title:"Supported networks",permalink:"/Adding-Biconomy-Snap-Template/services/gas-api/supported-networks"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize a new project directory",id:"initialize-a-new-project-directory",level:2},{value:"Install required packages",id:"install-required-packages",level:2},{value:"Create your <code>.env</code> file",id:"create-your-env-file",level:2},{value:"Create your script",id:"create-your-script",level:2},{value:"Run the script",id:"run-the-script",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"This quickstart shows you how to call the Gas API using JavaScript.\nYou can also use a tool such as ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/"},"cURL")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," to\ncall the REST APIs."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"View the ",(0,r.kt)("a",{parentName:"p",href:"/Adding-Biconomy-Snap-Template/services/gas-api/api-reference/"},"API reference content")," to view the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command for each API. ")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A valid ",(0,r.kt)("a",{parentName:"li",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"Web3 API key"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js and npm installed"),".")),(0,r.kt)("h2",{id:"initialize-a-new-project-directory"},"Initialize a new project directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir new_project\ncd new_project\nnpm init -y\n")),(0,r.kt)("h2",{id:"install-required-packages"},"Install required packages"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install axios\n")),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv"},(0,r.kt)("inlineCode",{parentName:"a"},"dotenv"))," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install dotenv\n")),(0,r.kt)("h2",{id:"create-your-env-file"},"Create your ",(0,r.kt)("inlineCode",{parentName:"h2"},".env")," file"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file at the project root and add the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"INFURA_API_KEY=<API-KEY>\nINFURA_API_KEY_SECRET=<API-KEY-SECRET>\n")),(0,r.kt)("p",null,"Replace the Infura project credential placeholders with your own."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not commit the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to your repository if it contains sensitive data.\nYou can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv#create-a-.gitignore-file"},"create a ",(0,r.kt)("inlineCode",{parentName:"a"},".gitignore"),"\nfile"),"\nto prevent accidentally committing the file.")),(0,r.kt)("h2",{id:"create-your-script"},"Create your script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"touch index.js\n")),(0,r.kt)("p",null,"Copy the following code into your script:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If using a network other than Ethereum Mainnet, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId")," value (",(0,r.kt)("inlineCode",{parentName:"p"},"1"),") in the code to an\nalternate ",(0,r.kt)("a",{parentName:"p",href:"/Adding-Biconomy-Snap-Template/services/gas-api/supported-networks"},"supported network"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const axios = require("axios");\nrequire("dotenv").config();\n\nconst Auth = Buffer.from(\n  process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n')),(0,r.kt)("h2",{id:"run-the-script"},"Run the script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,r.kt)("p",null,"The result should look similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"Suggested gas fees: {\n  low: {\n    suggestedMaxPriorityFeePerGas: '0.05',\n    suggestedMaxFeePerGas: '24.086058416',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 30000\n  },\n  medium: {\n    suggestedMaxPriorityFeePerGas: '0.1',\n    suggestedMaxFeePerGas: '32.548678862',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 45000\n  },\n  high: {\n    suggestedMaxPriorityFeePerGas: '0.3',\n    suggestedMaxFeePerGas: '41.161299308',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 60000\n  },\n  estimatedBaseFee: '24.036058416',\n  networkCongestion: 0.7143,\n  latestPriorityFeeRange: [ '0.1', '20' ],\n  historicalPriorityFeeRange: [ '0.007150439', '113' ],\n  historicalBaseFeeRange: [ '19.531410688', '36.299069766' ],\n  priorityFeeTrend: 'down',\n  baseFeeTrend: 'down'\n}\n")))}d.isMDXComponent=!0}}]);