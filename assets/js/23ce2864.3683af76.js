"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1614:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),l=["components"],i={id:"faq",title:"CKB FAQs"},s=void 0,c={unversionedId:"essays/faq",id:"essays/faq",title:"CKB FAQs",description:"How do you allocate transaction fees to the committer and proposer?",source:"@site/docs/essays/faq.md",sourceDirName:"essays",slug:"/essays/faq",permalink:"/docs/essays/faq",tags:[],version:"current",lastUpdatedBy:"xying21",lastUpdatedAt:1653543220,formattedLastUpdatedAt:"5/26/2022",frontMatter:{id:"faq",title:"CKB FAQs"},sidebar:"Essays",previous:{title:"Technical Bits on Polyjuice",permalink:"/docs/essays/polyjuice"},next:{title:"Tips for CKB development",permalink:"/docs/essays/ckb-core-dev"}},p=[{value:"How do you allocate transaction fees to the committer and proposer?",id:"how-do-you-allocate-transaction-fees-to-the-committer-and-proposer",children:[],level:2},{value:"What is the RPC <code>send_transaction</code> Outputs Validator?",id:"what-is-the-rpc-send_transaction-outputs-validator",children:[],level:2},{value:"How the primary and secondary epoch reward is allocated among blocks?",id:"how-the-primary-and-secondary-epoch-reward-is-allocated-among-blocks",children:[],level:2},{value:"How do you calculate transaction fee?",id:"how-do-you-calculate-transaction-fee",children:[],level:2},{value:"What is the <code>min_fee_rate</code>?",id:"what-is-the-min_fee_rate",children:[],level:2},{value:"Can you estimate transaction fee?",id:"can-you-estimate-transaction-fee",children:[],level:2},{value:"What is <code>compact_target</code> in the block header?",id:"what-is-compact_target-in-the-block-header",children:[],level:2},{value:"How do you set the value of <code>capacity</code> in a Cell?",id:"how-do-you-set-the-value-of-capacity-in-a-cell",children:[],level:2},{value:"How do you use the RPC subscription?",id:"how-do-you-use-the-rpc-subscription",children:[],level:2},{value:"What are the special live cells in CKB?",id:"what-are-the-special-live-cells-in-ckb",children:[],level:2},{value:"How do you estimate the timestamp in CKB?",id:"how-do-you-estimate-the-timestamp-in-ckb",children:[],level:2},{value:"What gotchas should you pay attention to in Nervos DAO?",id:"what-gotchas-should-you-pay-attention-to-in-nervos-dao",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-you-allocate-transaction-fees-to-the-committer-and-proposer"},"How do you allocate transaction fees to the committer and proposer?"),(0,r.kt)("p",null,"one transaction fee is F Shannon, poposer will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"floor(F * 4 / 10)\n")),(0,r.kt)("p",null,"and committer will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"F - floor(F * 4 / 10)\n")),(0,r.kt)("p",null,"We should allocate each transaction fee separately, instead of summing all transaction fees and then allocating to the committer and proposer."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-the-rpc-send_transaction-outputs-validator"},"What is the RPC ",(0,r.kt)("inlineCode",{parentName:"h2"},"send_transaction")," Outputs Validator?"),(0,r.kt)("p",null,"Outputs validator prevents improperly formed transactions from entering the tx-pool, in most cases, the main reason for the client to send these transactions is simply due to error codes or abuse of the SDK, which makes the transactions unlockable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implementation details")),(0,r.kt)("p",null,"CKB provides two built-in validators: ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"passthrough"),"."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," validator, these checks should conform to the pseudocode described below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'transaction.outputs.all{ |output|\n    script = output.script\n    (script.code_hash == secp256k1_blake160_sighash_all && script.hash_type == "type" && script.args.size == 20) ||\n    (script.code_hash == secp256k1_blake160_multisig_all && script.hash_type == "type" && \uff08script.args.size == 20 || (script.args.size == 28 && script.args[20..28].is_valid_since_format))\n}\ntransaction.outputs.all{ |output|\n    script = output.type\n    script.is_null || script.code_hash == dao && script.hash_type == "type"\n}\n')),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"passthrough")," validator, it will skip validation."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-the-primary-and-secondary-epoch-reward-is-allocated-among-blocks"},"How the primary and secondary epoch reward is allocated among blocks?"),(0,r.kt)("p",null,"Let's suppose that the epoch reward is R, and the epoch length is L. The start block number of the epoch is S. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"M = R mod L\n")),(0,r.kt)("p",null,"For block from S (inclusively) to S + M (exclusively), the reward is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"floor(R / L) + 1\n")),(0,r.kt)("p",null,"And for block from S + M (inclusively) to S + L (exclusively), the reward is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"floor(R / L)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-do-you-calculate-transaction-fee"},"How do you calculate transaction fee?"),(0,r.kt)("p",null,"The size of a normal two-in-two-out transaction is 597 bytes, to calculate transaction fee we need add extra 4 bytes size due to the cost of serialized tx in a block."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(tx_size + 4) * fee_rate / 1000")),(0,r.kt)("p",null,"Let's suppose that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"1000 shannons/KB")," as fee_rate(how many shannons per KB charge), the transaction fee is ",(0,r.kt)("inlineCode",{parentName:"p"},"(597 + 4) * 1000 / 1000"),", 601 shannons (0.00000601 CKB)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTICE: this fee calculation method may do not match txs consumed too many cycles. In that case,  unless you pay more, the node will package tx in low priority.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-the-min_fee_rate"},"What is the ",(0,r.kt)("inlineCode",{parentName:"h2"},"min_fee_rate"),"?"),(0,r.kt)("p",null,"CKB Node operator can set the value called ",(0,r.kt)("inlineCode",{parentName:"p"},"min_fee_rate")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb.toml")," to decide ignore txs with lower fees than ",(0,r.kt)("inlineCode",{parentName:"p"},"min_fee_rate"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"send_transaction")," RPC will not accept txs which fee lower than ",(0,r.kt)("inlineCode",{parentName:"li"},"min_fee_rate")),(0,r.kt)("li",{parentName:"ul"},"The node will stop to relay txs with lower fee than ",(0,r.kt)("inlineCode",{parentName:"li"},"min_fee_rate"))),(0,r.kt)("p",null,"The default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"min_fee_rate")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"min_fee_rate = 1_000 # shannons/KB\n")),(0,r.kt)("p",null,"Which mean a tx need at least ",(0,r.kt)("inlineCode",{parentName:"p"},"(tx_size + 4) * 1000 / 1000")," shannons as the tx fee."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTICE: Even though you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"min_fee_rate")," lower than the default value, other nodes in the network may still use the default value, which may cause the tx you accept still can't be relayed to other nodes, unless your node is also a miner or mining pool so that you can mine those txs by yourself.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"can-you-estimate-transaction-fee"},"Can you estimate transaction fee?"),(0,r.kt)("p",null,"The CKB node supports to estimate transaction fee, you can open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Experiment")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb.toml")," RPC modules to use the feature. For more details, you may refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/tree/develop/rpc#estimate_fee_rate"},"estimate_fee_rate")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-compact_target-in-the-block-header"},"What is ",(0,r.kt)("inlineCode",{parentName:"h2"},"compact_target")," in the block header?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"compact_target")," is the encoded form of the target threshold which appears in the block header."),(0,r.kt)("p",null,"It is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"nBits")," of bitcoin, the original ",(0,r.kt)("inlineCode",{parentName:"p"},"nBits")," implementation inherits properties from a signed data class,if the high bit of the effective number of bits is set, the target threshold will be negative. This is useless\u2014the header hash is considered as an unsigned number, so it can never be equal to or lower than a negative target threshold."),(0,r.kt)("p",null,'In CKB, the "compact" format is represented a whole number N using an unsigned 32bit number,which is similar to a floating-point format. '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The most significant 8 bits are the unsigned exponent of base 256."),(0,r.kt)("li",{parentName:"ul"},'The exponent can be considered as "number of bytes of N". '),(0,r.kt)("li",{parentName:"ul"},"The lower 24 bits are the mantissa. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"N = mantissa * 256^(exponent-3)\n")),(0,r.kt)("p",null,"There are example and test vectors in Python 3, you may refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/blob/develop/util/types/src/utilities/difficulty.rs#L103"},"here")," for more details :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import unittest\n\ndef compact_to_target(compact):\n    exponent = compact >> 24\n    mantissa = compact & 0x00ffffff\n    rtn = 0\n    if (exponent <= 3):\n        mantissa >>= (8 * (3 - exponent))\n        rtn = mantissa\n    else:\n        rtn = mantissa\n        rtn <<= (8 * (exponent - 3))\n    overflow = mantissa != 0 and (exponent > 32)\n    return rtn, overflow\n\n\ndef target_to_compact(target):\n    bits = (target).bit_length()\n    exponent = ((bits + 7) // 8)\n    compact = target << (\n        8 * (3 - exponent)) if exponent <= 3 else (target >> (8 * (exponent - 3)))\n    compact = (compact | (exponent << 24))\n    return compact\n\n\nclass TestCompactTarget(unittest.TestCase):\n\n    def test_compact_target1(self):\n        compact = target_to_compact(0x2)\n        self.assertEqual('0x1020000', hex(compact))\n        target, overflow = compact_to_target(0x1020000)\n        self.assertTupleEqual((2, False), (target, overflow))\n\n    def test_compact_target2(self):\n        compact = target_to_compact(0xfe)\n        self.assertEqual('0x1fe0000', hex(compact))\n        target, overflow = compact_to_target(0x1fedcba)\n        self.assertTupleEqual((0xfe, False), (target, overflow))\n\n\nif __name__ == '__main__':\n    unittest.main()\n\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-do-you-set-the-value-of-capacity-in-a-cell"},"How do you set the value of ",(0,r.kt)("inlineCode",{parentName:"h2"},"capacity")," in a Cell?"),(0,r.kt)("p",null,"The field ",(0,r.kt)("inlineCode",{parentName:"p"},"capacity")," in a cell must be larger than or equal to cell's own occupied capacity. The minimal occupied capacity of a secp256k1 cell is 61 bytes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"occupied(cell: Cell) = sum of\n- capacity: 8 bytes\n- data: len(data) bytes\n- lock: occupied(lock: Script)\n- type:\n    - when present: occupied(type: Script)\n    - when absent: 0 bytes\n\noccupied(script: Script) = sum of:\n- args: len(args) bytes\n- code\\_hash: 32 bytes\n- hash\\_type: 1 byte\n")),(0,r.kt)("p",null,"There is a demo in JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function hex_data_occupied_bytes(hex_string) {\n  // Exclude 0x prefix, and every 2 hex digits are one byte\n  return (hex_string.length - 2) / 2;\n}\n\nfunction script_occupied_bytes(script) {\n  if (script !== undefined && script !== null) {\n    return (\n      1 + hex_data_occupied_bytes(script.code_hash) +\n      hex_data_occupied_bytes(script.args)\n    );\n  }\n  return 0;\n}\n\nfunction cell_occupied_bytes(cell) {\n  return (\n    8 +\n    hex_data_occupied_bytes(cell.data) +\n    script_occupied_bytes(cell.lock) +\n    script_occupied_bytes(cell.type)\n  );\n}\n")),(0,r.kt)("p",null,"There is the test case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(\n  cell_occupied_bytes({\n    capacity: "4500000000",\n    data: "0x72796c6169",\n    lock: {\n      args: "0x",\n      hash_type: "data",\n      code_hash:\n        "0xb35557e7e9854206f7bc13e3c3a7fa4cf8892c84a09237fb0aab40aab3771eee"\n    },\n    type: null\n  })\n);\n// => 46\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-do-you-use-the-rpc-subscription"},"How do you use the RPC subscription?"),(0,r.kt)("p",null,"RPC subscriptions require a full duplex connection. CKB provides this kind of connection by tcp (enable with rpc.tcp_listen_address configuration option) and websockets (enable with rpc.ws_listen_address)."),(0,r.kt)("p",null,"tcp rpc subscription example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'telnet localhost 18114\n> {"id": 2, "jsonrpc": "2.0", "method": "subscribe", "params": ["new_tip_header"]}\n< {"jsonrpc":"2.0","result":0,"id":2}\n< {"jsonrpc":"2.0","method":"subscribe","params":{"result":"...block header json...","subscription":0}}\n< {"jsonrpc":"2.0","method":"subscribe","params":{"result":"...block header json...","subscription":0}}\n< ...\n> {"id": 2, "jsonrpc": "2.0", "method": "unsubscribe", "params": [0]}\n< {"jsonrpc":"2.0","result":true,"id":2}\n')),(0,r.kt)("p",null,"websocket rpc subscription example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let socket = new WebSocket("ws://localhost:28114")\n\nsocket.onmessage = function(event) {\n  console.log(`Data received from server: ${event.data}`);\n}\n\nsocket.send(`{"id": 2, "jsonrpc": "2.0", "method": "subscribe", "params": ["new_tip_header"]}`)\n\nsocket.send(`{"id": 2, "jsonrpc": "2.0", "method": "unsubscribe", "params": [0]}`)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-are-the-special-live-cells-in-ckb"},"What are the special live cells in CKB?"),(0,r.kt)("p",null," There are some special live cells deployed in Testnet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"duktape VM (JavaScript) cell")),(0,r.kt)("p",null,"The VM cell is deployed in transaction ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/aggron/transaction/0xff4893d8054a365e505074c1d0ee2cc13e72dd9be4c0487fe7a48478f075b036"},(0,r.kt)("inlineCode",{parentName:"a"},"0xff4893d8054a365e505074c1d0ee2cc13e72dd9be4c0487fe7a48478f075b036"))," output index ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".\nWe should put the ",(0,r.kt)("inlineCode",{parentName:"p"},"out_point")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_deps"),", looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "out_point": {\n    "tx_hash": "0xff4893d8054a365e505074c1d0ee2cc13e72dd9be4c0487fe7a48478f075b036",\n    "index": "0x0"\n  },\n  "dep_type": "code"\n}\n')),(0,r.kt)("p",null,"And your type script may use this VM like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "code_hash": "0xfb8e791d70c4622ae0bd0127ee9597aea612e42929e725f7f3f25475bb954ce9",\n  "hash_type": "data",\n  "args": "0x<your javascript code in hex>",\n}\n')),(0,r.kt)("p",null,"There is an ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/aggron/transaction/0xbbe58d19e6177ea16336e566c6cdbb91cb6ad74e0f76ccb17d980e5702e4615a"},"example transaction")," using duktape VM. If your logger(in ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb.toml"),") filter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},'filter = "info,ckb-script=debug"')," , you will see a log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DEBUG ckb-script  script group: Byte32(0xafe527276275a4a25defee32ed59ecebf4813256866a7577431e5293acd2048b) DEBUG OUTPUT: I'm running in JS!\n")),(0,r.kt)("p",null,"If you want to deploy the duktape VM cell by yourself, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://xuejie.space/2019_07_13_introduction_to_ckb_script_programming_script_basics/#introducing-duktape"},"this article"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mruby VM (Ruby)cell")),(0,r.kt)("p",null,"The VM cell is deployed in transaction ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/aggron/transaction/0x1850f997f867b6d3f1154444498a15e9fc4ce080215e34d0c41b33349bcc119a"},(0,r.kt)("inlineCode",{parentName:"a"},"0x1850f997f867b6d3f1154444498a15e9fc4ce080215e34d0c41b33349bcc119a"))," output index ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".\nWe should put the ",(0,r.kt)("inlineCode",{parentName:"p"},"out_point")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_deps"),", looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "out_point": {\n    "tx_hash": "0x1850f997f867b6d3f1154444498a15e9fc4ce080215e34d0c41b33349bcc119a",\n    "index": "0x0"\n  },\n  "dep_type": "code"\n}\n')),(0,r.kt)("p",null,"And your type script may use this VM like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "code_hash": "0xc3815b09286d825574f672bf4e04566ae6daaf1b45f3f1bcfd20c720198652ec",\n  "hash_type": "data",\n  "args": "0x<your ruby code in hex>",\n}\n')),(0,r.kt)("p",null,"If you want to deploy the mruby VM (Ruby)cell by yourself, you may follow these instructions below"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 1, build the mruby binary:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git clone --recursive https://github.com/nervosnetwork/ckb-mruby\n$ cd ckb-mruby\n$ sudo docker run --rm -it -v `pwd`:/code nervos/ckb-riscv-gnu-toolchain:bionic-20191012 bash\nroot@982d1e906b76:/# apt-get update\nroot@982d1e906b76:/# apt-get install -y ruby\nroot@982d1e906b76:/# cd /code\nroot@982d1e906b76:/code# make\nroot@982d1e906b76:/code# exit\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 2, deploy the binary via create a cell with the binary data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ckb-cli wallet transfer --from-account <from-account> --to-address <to-address> --capacity 462000 --to-data-path build/entry --tx-fee 0.01\n0x1850f997f867b6d3f1154444498a15e9fc4ce080215e34d0c41b33349bcc119a\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 3, query the data hash of the binary:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ckb-cli rpc get_live_cell --tx-hash 0x1850f997f867b6d3f1154444498a15e9fc4ce080215e34d0c41b33349bcc119a --index 0 --with-data\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-do-you-estimate-the-timestamp-in-ckb"},"How do you estimate the timestamp in CKB?"),(0,r.kt)("p",null,"In CKB, based on the deterministic state of the chain,there is no way to know which block a transaction will be packaged into, and there is no way to get an accurate time,so we can estimate the timestamp like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"median of previous 37 block timpstamp < timestamp <= local_time + 15s\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-gotchas-should-you-pay-attention-to-in-nervos-dao"},"What gotchas should you pay attention to in ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0023-dao-deposit-withdraw/0023-dao-deposit-withdraw.md"},"Nervos DAO"),"?"),(0,r.kt)("p",null,"Due to CKB's unique flexibility, it also comes with some gotchas to be aware of. Otherwise there might be risk locking your cell forever with no way to unlock them. Here, we try our best to document the gotchas we know:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nervos DAO only supports ",(0,r.kt)("em",{parentName:"p"},"absolute epoch number")," as since value when withdrawing from Nervos DAO. So if you are using a lock that supports lock period, such as the system included ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_multisig_all.c"},"multi-sign script"),", please make sure to ONLY use ",(0,r.kt)("em",{parentName:"p"},"absolute epoch number")," as lock period. Otherwise the locked Nervos DAO cell cannot be spent.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CKB has a maturity limitation on referencing headers: a block header can only be referenced in a cell that is committed at least 4 epochs after the referenced block header. This means in situations where header deps are used, those 4 epoch limitation also applies. Nervos DAO, for example, is restricted in the following places:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Phase 1 transaction can only be committed 4 epochs after the fund is originally deposited."),(0,r.kt)("li",{parentName:"ul"},"Phase 2 transaction can only be committed 4 epochs after phase 1 transaction is committed.")))))}u.isMDXComponent=!0}}]);