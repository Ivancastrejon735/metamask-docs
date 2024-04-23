"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3374],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>h});var t=a(96540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(a),g=s,h=l["".concat(p,".").concat(g)]||l[g]||m[g]||r;return a?t.createElement(h,o(o({ref:n},u),{},{components:a})):t.createElement(h,o({ref:n},u))}));function h(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},50520:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(58168),s=(a(96540),a(15680));const r={description:"Connect to custom EVM accounts using the Keyring API.",sidebar_position:2,tags:["Keyring API"]},o="Custom EVM accounts",i={unversionedId:"features/custom-evm-accounts/index",id:"features/custom-evm-accounts/index",title:"Custom EVM accounts",description:"Connect to custom EVM accounts using the Keyring API.",source:"@site/snaps/features/custom-evm-accounts/index.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/",permalink:"/eriknson-patch-1/snaps/features/custom-evm-accounts/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/index.md",tags:[{label:"Keyring API",permalink:"/eriknson-patch-1/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Connect to custom EVM accounts using the Keyring API.",sidebar_position:2,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Cron jobs",permalink:"/eriknson-patch-1/snaps/features/cron-jobs"},next:{title:"Create an account management Snap",permalink:"/eriknson-patch-1/snaps/features/custom-evm-accounts/create-account-snap"}},p={},c=[{value:"System context diagram",id:"system-context-diagram",level:2},{value:"Account management Snap installation flow",id:"account-management-snap-installation-flow",level:2},{value:"Custom account creation flow",id:"custom-account-creation-flow",level:2},{value:"Transaction flows",id:"transaction-flows",level:2},{value:"Synchronous transaction flow",id:"synchronous-transaction-flow",level:3},{value:"Asynchronous transaction flow",id:"asynchronous-transaction-flow",level:3},{value:"EOA methods",id:"eoa-methods",level:2},{value:"Account abstraction (ERC-4337)",id:"account-abstraction-erc-4337",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},l="wrapper";function m(e){let{components:n,...r}=e;return(0,s.yg)(l,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"custom-evm-accounts"},"Custom EVM accounts"),(0,s.yg)("p",null,"The Keyring API integrates custom EVM accounts inside MetaMask.\nYou can use the Keyring API to display custom accounts, such as multi-party computation (MPC)\naccounts and ",(0,s.yg)("a",{parentName:"p",href:"#account-abstraction-erc-4337"},"ERC-4337 accounts"),", alongside regular MetaMask accounts\nin the user interface:"),(0,s.yg)("p",{align:"center"},(0,s.yg)("img",{src:a(57684).A,alt:"Account management Snap accounts in Metamask UI",width:"360",style:{border:"1px solid #DCDCDC"}})),(0,s.yg)("p",null,"To use the Keyring API, you first ",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/features/custom-evm-accounts/create-account-snap"},"implement the API in an account management Snap"),'\n(also known as an "account Snap").\nYou can then ',(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/features/custom-evm-accounts/create-companion-dapp"},"call Keyring API methods from a companion dapp"),"\nto enable users to create and interact with the custom accounts."),(0,s.yg)("admonition",{title:"see also",type:"tip"},(0,s.yg)("ul",{parentName:"admonition"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,s.yg)("h2",{id:"system-context-diagram"},"System context diagram"),(0,s.yg)("p",null,"The following diagram shows the system context when interacting with accounts managed by an account\nmanagement Snap:"),(0,s.yg)("p",{align:"center"},(0,s.yg)("mermaid",{value:"graph TD\n  User --\x3e|Use to submit requests<br/>and manage accounts| MetaMask\n  User --\x3e|Start requests| Dapp\n  User --\x3e|Use to manage<br/>requests and accounts| Site\n  Dapp --\x3e|Submit requests| MetaMask\n  Site[Snap companion dapp] --\x3e|Manage requests<br/>and accounts| MetaMask\n  MetaMask --\x3e|Submit requests and<br/>manage accounts| Snap\n  Snap --\x3e|Notify about account<br/>and request events| MetaMask"})),(0,s.yg)("p",null,"The diagram contains the following components:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"User")," - The user interacting with the dapp, the Snap companion dapp, and MetaMask."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Dapp")," - The dapp requesting an action to be performed on an account."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"MetaMask")," - The wallet the dapp connects to.\nMetaMask routes requests to the account management Snap and lets the user perform some level of\naccount management."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Snap")," - The account management Snap that implements the Keyring API to manage the user's\naccounts and handle requests that use these accounts."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Snap companion dapp")," - The Snap's user interface component that allows the user to interact with\nthe Snap to manage accounts and requests.")),(0,s.yg)("h2",{id:"account-management-snap-installation-flow"},"Account management Snap installation flow"),(0,s.yg)("p",null,"The first process a user encounters when using an account management Snap is the Snap installation flow.\nThis process can be initiated through MetaMask's or the Snap companion dapp.\nThe flow looks like the following:"),(0,s.yg)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nalt Optional\n  User ->>+ MetaMask: Add account Snap\n  MetaMask ->> MetaMask: Display suggested Snaps\n  User ->> MetaMask: Select Snap\n  MetaMask ->> Site: Open in a new tab\n  deactivate MetaMask\nend\n\nSite ->>+ MetaMask: Install Snap?\nMetaMask ->> MetaMask: Display permissions dialog\nUser ->> MetaMask: Approve permissions\nMetaMask --\x3e>- Site: OK"}),(0,s.yg)("p",null,"The MetaMask account selection modal has an option called ",(0,s.yg)("strong",{parentName:"p"},"Add account Snap"),".\nThis option shows a list of account management Snaps.\nEach Snap redirects the user to the companion dapp that contains the user interface to configure and\nmanage the Snap."),(0,s.yg)("h2",{id:"custom-account-creation-flow"},"Custom account creation flow"),(0,s.yg)("p",null,"Once the account management Snap is installed, the user can use the Snap companion dapp to create or\nimport custom accounts.\nThe flow looks like the following:"),(0,s.yg)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 15,\n      'width': 245\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nUser ->>+ Site: Create new account\nSite ->> Site: Custom logic to create account\nSite ->>+ Snap: keyring_createAccount(options)\nSnap ->> Snap: Custom logic to create account\nSnap ->>+ MetaMask: snap_manageAccounts(<br/>\"notify:accountCreated\", account)\nUser ->> MetaMask: Approve account creation\nMetaMask --\x3e>- Snap: OK\nSnap --\x3e>- Site: OK\nSite --\x3e>- User: Done"}),(0,s.yg)("p",null,"The companion dapp presents a user interface allowing the user to configure their custom account.\nThe dapp creates an account using ",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/keyring-api/account-management/#keyring_createaccount"},(0,s.yg)("inlineCode",{parentName:"a"},"keyring_createAccount")),"."),(0,s.yg)("p",null,"The Snap keeps track of the accounts that it creates using ",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/snaps-api#snap_managestate"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nOnce the Snap has created an account, it notifies MetaMask using\n",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/snaps-api#snap_manageaccounts"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageAccounts")),"."),(0,s.yg)("p",null,"Once the Snap has created an account, that account can be used to sign messages and transactions."),(0,s.yg)("h2",{id:"transaction-flows"},"Transaction flows"),(0,s.yg)("p",null,"The Keyring API supports two flows for handling requests: ",(0,s.yg)("a",{parentName:"p",href:"#synchronous-transaction-flow"},"synchronous"),"\nand ",(0,s.yg)("a",{parentName:"p",href:"#asynchronous-transaction-flow"},"asynchronous"),"."),(0,s.yg)("p",null,"In general, you should use the asynchronous flow when the request requires user interaction (for\nexample, using a hardware key or a threshold signature scheme) or when the request takes a long time\nto complete.\nYou should use the synchronous flow for any other use case."),(0,s.yg)("h3",{id:"synchronous-transaction-flow"},"Synchronous transaction flow"),(0,s.yg)("p",null,"The synchronous flow looks like the following:"),(0,s.yg)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\n\nUser ->>+ Dapp: Create new sign request\nDapp ->>+ MetaMask: ethereum.request(request)\nMetaMask ->> MetaMask: Display request to user\nUser ->> MetaMask: Approve request\n\nMetaMask ->>+ Snap: keyring_submitRequest(request)\nSnap ->> Snap: Custom logic to handle request\nSnap --\x3e>- MetaMask: { pending: false, result }\n\nMetaMask --\x3e>- Dapp: result\n\nDapp --\x3e>- User: Done"}),(0,s.yg)("p",null,"The flow starts when a user or dapp initiates a sign request.\nAt that point, MetaMask detects that this interaction is requested for an account controlled by the\naccount management Snap."),(0,s.yg)("p",null,"After the user approves the transaction in MetaMask, MetaMask calls\n",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/keyring-api/account-management/#keyring_submitrequest"},(0,s.yg)("inlineCode",{parentName:"a"},"keyring_submitRequest")),",\nwhich receives the original RPC request and returns a response with ",(0,s.yg)("inlineCode",{parentName:"p"},"pending")," set to ",(0,s.yg)("inlineCode",{parentName:"p"},"false"),", and\n",(0,s.yg)("inlineCode",{parentName:"p"},"result")," set to the requested signature."),(0,s.yg)("h3",{id:"asynchronous-transaction-flow"},"Asynchronous transaction flow"),(0,s.yg)("p",null,"The asynchronous flow looks like the following:"),(0,s.yg)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 20,\n      'width': 200\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nUser ->>+ Dapp: Create new sign request\nDapp ->>+ MetaMask: ethereum.request(request)\nMetaMask ->> MetaMask: Display request to user\nUser ->> MetaMask: Approve request\n\nMetaMask ->>+ Snap: keyring_submitRequest(request)\nSnap ->> Snap: Save request to Snap's state\nSnap --\x3e>- MetaMask: { pending: true, redirect? }\nalt There is a redirect URL\n  User ->> MetaMask: Acknowledge redirection\n  MetaMask ->>+ Site: Open redirect URL in a new tab\nend\ndeactivate MetaMask\n\nSite ->>+ Snap: keyring_getRequest(id)\nSnap --\x3e>- Site: request\n\nSite ->> Site: Custom logic to handle request\nSite ->>+ Snap: keyring_approveRequest(id, data?)\nSnap ->> Snap: Custom logic to handle request\nSnap ->>+ MetaMask: snap_manageAccounts(<br/>\"notify:requestApproved\", { id, result })\n\nMetaMask --\x3e> Dapp: result\nMetaMask --\x3e>- Snap: OK\nSnap --\x3e>- Site: OK\ndeactivate Site\n\nDapp --\x3e>- User: Done"}),(0,s.yg)("p",null,"The flow starts the same way as the ",(0,s.yg)("a",{parentName:"p",href:"#synchronous-transaction-flow"},"synchronous flow"),": a user or\ndapp initiates a sign request.\nAfter approval, MetaMask calls\n",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/keyring-api/account-management/#keyring_submitrequest"},(0,s.yg)("inlineCode",{parentName:"a"},"keyring_submitRequest")),"."),(0,s.yg)("p",null,"Since the Snap doesn't answer the request directly, it stores the pending request in its internal\nstate using ",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/snaps-api#snap_managestate"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThe Snap sends a ",(0,s.yg)("inlineCode",{parentName:"p"},"{ pending: true, redirect? }")," response to indicate that the request will be\nhandled asynchronously.\nThis response can optionally contain a redirect URL that MetaMask will open in a new tab to allow\nthe user to interact with the Snap companion dapp."),(0,s.yg)("p",null,"The companion dapp gets the Snap's pending request using\n",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/keyring-api/account-management/#keyring_getrequest"},(0,s.yg)("inlineCode",{parentName:"a"},"keyring_getRequest")),".\nIt resolves the request using\n",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/keyring-api/account-management/#keyring_approverequest"},(0,s.yg)("inlineCode",{parentName:"a"},"keyring_approveRequest")),",\nand the Snap resolves the request using ",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/snaps-api#snap_manageaccounts"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageAccounts")),",\nnotifying MetaMask of the result."),(0,s.yg)("h2",{id:"eoa-methods"},"EOA methods"),(0,s.yg)("p",null,"An account management Snap can implement the following methods to support dapp requests from\nexternally owned accounts (EOAs):"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/keyring-api/chain-methods#personal_sign"},(0,s.yg)("inlineCode",{parentName:"a"},"personal_sign"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/keyring-api/chain-methods#eth_signtypeddata_v4"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/keyring-api/chain-methods#eth_signtransaction"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_signTransaction"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/wallet/concepts/signing-methods/#deprecated-signing-methods"},"Deprecated signing methods"))),(0,s.yg)("h2",{id:"account-abstraction-erc-4337"},"Account abstraction (ERC-4337)"),(0,s.yg)("admonition",{type:"flaskOnly"}),(0,s.yg)("p",null,"Account abstraction, specified by ",(0,s.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4337"},"EIP-4337"),", introduces\n",(0,s.yg)("em",{parentName:"p"},"user operations")," and enables users to manage smart contract accounts containing arbitrary\nverification logic.\nUsers can use these ERC-4337 accounts instead of externally owned accounts as primary accounts."),(0,s.yg)("p",null,"An account management Snap can implement the following methods to support dapp requests from\nERC-4337 accounts:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/keyring-api/chain-methods#eth_prepareuseroperation"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_prepareUserOperation"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/keyring-api/chain-methods#eth_patchuseroperation"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_patchUserOperation"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/eriknson-patch-1/snaps/reference/keyring-api/chain-methods#eth_signuseroperation"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_signUserOperation")))),(0,s.yg)("p",null,"The user operation signing flow in an ERC-4337 compatible account Snap looks like the following:"),(0,s.yg)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 60,\n      'width': 300\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\n\nDapp ->>+ MetaMask: Transaction intents\nnote over MetaMask: Currently, only one transaction per userOp is supported\nMetaMask ->>+ Snap: eth_prepareUserOperation(transaction intents)\nSnap --\x3e>- MetaMask: userOp details\nMetaMask ->> MetaMask: Check if account is already deployed\n\nalt The account is already deployed\nMetaMask ->> MetaMask: Remove the initCode if set\nelse The account is not deployed and the initCode is not present\nMetaMask ->> Dapp: Throw an error (without the exact reason)\nend\n\nalt The gas isn't set\nMetaMask ->> MetaMask: Estimate and set gas values\nend\n\nMetaMask ->> MetaMask: Estimate and set gas fees\nMetaMask ->>+ Snap: eth_patchUserOperation(userOp object)\nSnap --\x3e>- MetaMask: Partial userOp object\nMetaMask ->> MetaMask: Update paymasterAndData and remove dummy signature\nMetaMask ->>+ Snap: eth_signUserOperation(userOp object, entry point)\nSnap --\x3e>- MetaMask: Signature\nMetaMask ->> MetaMask: Update userOp's signature\n\nMetaMask ->> MetaMask: Submit userOp to bundler and wait for transaction hash\nMetaMask --\x3e>- Dapp: Transaction hash"}),(0,s.yg)("p",null,"See the ",(0,s.yg)("a",{parentName:"p",href:"/eriknson-patch-1/snaps/reference/keyring-api/chain-methods#erc-4337-methods"},"ERC-4337 methods")," for more\ninformation about their parameters and response details."),(0,s.yg)("h2",{id:"examples"},"Examples"),(0,s.yg)("p",null,"See the following example account management Snap implementations:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/snap-simple-keyring"},"Simple Account Snap")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/snap-account-abstraction-keyring/tree/main"},"Simple Account Abstraction Snap")," (ERC-4337)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/bcnmy/smart-account-keyring-template"},"Biconomy Smart Account Snap")," (ERC-4337)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/silence-laboratories/silent-shard-snap"},"Silent Shard Snap")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/Safeheron/multi-mpc-snap-monorepo"},"Safeheron MPC Snap")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/capsule-org/mm-snap-keyring"},"Capsule Keyring Snap"))))}m.isMDXComponent=!0},57684:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/accounts-ui-6200682f7b2f25a2753108a83abad199.png"}}]);