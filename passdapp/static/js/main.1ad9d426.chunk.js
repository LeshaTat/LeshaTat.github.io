(this.webpackJsonppassdapp=this.webpackJsonppassdapp||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"appId":23776094,"prepare":"AyAD6AfelqsLACYBB3ByZXBhcmUxASIOMRgjEhAxGSQSEDYaACgSEA==","confirm":"AyAD6AfelqsLACYBB2NvbmZpcm0xASIOMRgjEhAxGSQSEDYaACgSEA==","confirmTxn":"AyAD6AfelqsLACYBB2NvbmZpcm0xIDIDEkQxASIORC0XOAAxABJELRc4GCMSRC0XOBkkEkQtFzkaACgSQw==","cancel":"AyAD6AfelqsLACYBBmNhbmNlbDEBIg4xGCMSEDEZJBIQNhoAKBIQ"}')},150:function(e,t,n){e.exports={funcPanel:"funcPanel_funcPanel__3QdLC"}},159:function(e,t,n){},188:function(e,t){},190:function(e,t){},200:function(e,t){},202:function(e,t){},229:function(e,t){},231:function(e,t){},232:function(e,t){},237:function(e,t){},239:function(e,t){},245:function(e,t){},247:function(e,t){},266:function(e,t){},278:function(e,t){},281:function(e,t){},288:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(25),c=n.n(a),s=(n(159),n(85)),o=n.n(s),i=n(3),u=n.n(i),l=n(8),p=n(14),d=n(46),f=function(){return Object(d.b)()},b=d.c,x=n(19),j=n(20),h=n(9),v=n.n(h),O=Object(j.b)({name:"algorandClient",initialState:{purestake:!0,token:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",host:"http://localhost:4001",hostIndexer:"http://localhost:8980"},reducers:{setTokenHostIndexer:function(e,t){e.token=t.payload.token,e.host=t.payload.host,e.hostIndexer=t.payload.hostIndexer},setPurestake:function(e,t){e.purestake=t.payload}}}),m=O.actions,g=m.setTokenHostIndexer,k=m.setPurestake,w=function(e){return e.algorandClient.host},y=function(e){return e.algorandClient.hostIndexer},S=function(e){return e.algorandClient.token},C=function(e){return e.algorandClient.purestake},A=Object(x.a)(w,S,C,(function(e,t,n){var r=new URL(e),a=r.protocol+"//"+r.hostname+r.pathname;return new v.a.Algodv2(n?{"X-API-Key":t}:t,a,parseInt(r.port)||"")})),T=Object(x.a)(y,S,C,(function(e,t,n){var r=new URL(e),a=r.protocol+"//"+r.hostname+r.pathname;return new v.a.Indexer(n?{"X-API-Key":t}:t,a,parseInt(r.port)||"")})),I=O.reducer,P=n(294),B=n(290),R=n(1),D="https://testnet-algorand.api.purestake.io/ps2",N="https://testnet-algorand.api.purestake.io/idx2";function _(){var e=b(w),t=b(y),n=b(S),a=b(A),c=b(C),s=f(),o=Object(r.useState)(e),i=Object(p.a)(o,2),d=i[0],x=i[1],j=Object(r.useState)(t),h=Object(p.a)(j,2),v=h[0],O=h[1],m=Object(r.useState)(n),T=Object(p.a)(m,2),I=T[0],_=T[1];return Object(R.jsxs)(P.a,{children:[Object(R.jsx)(P.a.Group,{controlId:"formPurestake",children:Object(R.jsxs)(P.a.Check,{type:"checkbox",checked:c,label:"Purestake",children:[Object(R.jsx)(P.a.Check.Input,{type:"checkbox",checked:c,onChange:function(e){return s(k(e.currentTarget.checked))}}),Object(R.jsx)(P.a.Check.Label,{children:Object(R.jsx)("a",{target:"_blank",href:"https://developer.purestake.io/login",children:"Purestake"})})]})}),Object(R.jsxs)(P.a.Group,{controlId:"formToken",children:[Object(R.jsx)(P.a.Label,{children:"Token"}),Object(R.jsx)(P.a.Control,{type:"text",placeholder:"Enter token",value:I,onChange:function(e){return _(e.currentTarget.value)}})]}),Object(R.jsxs)(P.a.Group,{controlId:"formHost",children:[Object(R.jsx)(P.a.Label,{children:"Algod"}),Object(R.jsx)(P.a.Control,{type:"text",placeholder:"Enter server host",disabled:c,value:c?D:d,onChange:function(e){return x(e.currentTarget.value)}})]}),Object(R.jsxs)(P.a.Group,{controlId:"formHostIndexer",children:[Object(R.jsx)(P.a.Label,{children:"Indexer"}),Object(R.jsx)(P.a.Control,{type:"text",placeholder:"Enter server host",disabled:c,value:c?N:v,onChange:function(e){return O(e.currentTarget.value)}})]}),Object(R.jsx)(B.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),s(g({token:I,host:c?D:d,hostIndexer:c?N:v}))},children:"Save"})," ",Object(R.jsx)(B.a,{variant:"primary",type:"submit",onClick:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.status().do();case 3:n=e.sent,alert(JSON.stringify(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Test"})]})}var L=n(12),E=n(87),q=String.fromCharCode,U=function(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(q(e[n]));return btoa(t.join(""))},G=function(e){return Uint8Array.from(atob(e),Q)},Q=function(e){return e.charCodeAt(0)};function H(e,t){for(var n=Object(E.createHash)().update(e).digest(),r=0;r<t-1;++r)n=Object(E.createHash)().update(n).digest();return n}function K(e,t){var n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}function J(e,t,n){if(!e)return{status:"not-created"};var r=e["apps-local-state"];if(!r)return{status:"not-opted-in"};var a=r.find((function(e){return e.id==n}));if(!a)return{status:"not-opted-in"};console.log(a);var c=a["key-value"],s={};for(var o in c){var i=c[o];console.log(i,atob(i.key)),s[atob(i.key)]=i.value}return console.log(s),s.secret.bytes?s.mark.bytes?{status:"wait-confirm",mark:s.mark.bytes,secret:s.secret.bytes,counter:s.counter.uint}:{status:"wait-prepare",counter:s.counter.uint,secret:s.secret.bytes}:{status:"wait-setup"}}function F(e){var t=v.a.makeLogicSig(G(L.prepare)),n=v.a.makeLogicSig(G(L.confirm)),r=v.a.makeLogicSig(G(L.confirmTxn)),a=v.a.makeLogicSig(G(L.cancel));return t.sig=t.signProgram(e.sk),n.sig=n.signProgram(e.sk),r.sig=r.signProgram(e.sk),a.sig=a.signProgram(e.sk),{prepareSig:U(t.toByte()),confirmSig:U(n.toByte()),confirmTxnSig:U(r.toByte()),cancelSig:U(a.toByte())}}var Y=Object(j.b)({name:"status",initialState:{amount:"",dappState:null,processing:!1},reducers:{setFullDAppState:function(e,t){var n=t.payload,r=n.amount,a=n.dappState;e.amount=r.toString(),e.dappState=a},setUnavailableStatus:function(e,t){e.amount="",e.dappState=null},setAmount:function(e,t){e.amount=t.payload.toString()},setProcessing:function(e,t){e.processing=t.payload},setAmountUnknown:function(e,t){e.amount=""}}}),M=Y.actions,X=M.setAmount,Z=M.setAmountUnknown,W=M.setFullDAppState,V=(M.setUnavailableStatus,M.setProcessing),z=function(e){return e.status.amount},$=function(e){return e.status.processing},ee=function(e){return e.status.dappState},te=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_e(n()),a=A(n()),!r){e.next=8;break}return e.next=5,a.accountInformation(r).do();case 5:c=e.sent,t(W({amount:c.amount,dappState:J(c,0,L.appId)})),t(X(c.amount));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},ne=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r,a){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(V(!0)),n.prev=1,n.next=4,r(e);case 4:if(c=n.sent,t&&t.noStatus){n.next=8;break}return n.next=8,r(te());case 8:return n.abrupt("return",c);case 11:throw n.prev=11,n.t0=n.catch(1),n.t0;case 14:return n.prev=14,r(V(!1)),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e,t){return n.apply(this,arguments)}}()},re=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0)),e.prev=1,e.next=4,t(te());case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),e.t0;case 9:return e.prev=9,t(V(!1)),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}()},ae=Y.reducer;function ce(e,t,n){return se.apply(this,arguments)}function se(){return(se=Object(l.a)(u.a.mark((function e(t,n,r){var a,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.status().do();case 2:if("undefined"!==typeof(a=e.sent)){e.next=5;break}throw new Error("Unable to get node status");case 5:c=a["last-round"],s=c;case 7:if(!(s<c+r)){e.next=24;break}return e.next=10,t.pendingTransactionInformation(n).do();case 10:if(void 0===(o=e.sent)){e.next=18;break}if(!(null!==o["confirmed-round"]&&o["confirmed-round"]>0)){e.next=16;break}return e.next=15,t.statusAfterBlock(s).do();case 15:return e.abrupt("return",o);case 16:if(!(null!=o["pool-error"]&&o["pool-error"].length>0)){e.next=18;break}throw new Error("Transaction Rejected pool error".concat(o["pool-error"]));case 18:return console.log("Waiting on round "+s),e.next=21,t.statusAfterBlock(s).do();case 21:s+=1,e.next=7;break;case 24:throw new Error("Transaction not confirmed after ".concat(r," rounds!"));case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t,n){return ie.apply(this,arguments)}function ie(){return(ie=Object(l.a)(u.a.mark((function e(t,n,r){var a,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactionParams().do();case 2:return a=e.sent,c=v.a.makeApplicationOptInTxn(n.addr,a,r),e.next=6,t.sendRawTransaction(c.signTxn(n.sk)).do();case 6:return s=e.sent,o=s.txId,e.next=10,ce(t,o,1e3);case 10:console.log("opted in");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t,n){return le.apply(this,arguments)}function le(){return(le=Object(l.a)(u.a.mark((function e(t,n,r){var a,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactionParams().do();case 2:return a=e.sent,c=v.a.makeApplicationClearStateTxn(n.addr,a,r),e.next=6,t.sendRawTransaction(c.signTxn(n.sk)).do();case 6:return s=e.sent,o=s.txId,e.next=10,ce(t,o,1e3);case 10:console.log("cleared");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e,t,n,r){return de.apply(this,arguments)}function de(){return(de=Object(l.a)(u.a.mark((function e(t,n,r,a){var c,s,o,i,l,p,d,f,b,x,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactionParams().do();case 2:return c=e.sent,s=F(n),o=s.prepareSig,i=s.confirmSig,l=s.confirmTxnSig,p=s.cancelSig,d=function(e){return G(e)},f=H(a,we),b=v.a.makeApplicationNoOpTxn(n.addr,c,r,[G(btoa("setup")),f,v.a.encodeUint64(we)],void 0,void 0,void 0,K(f,v.a.encodeObj({address:n.addr,prepare:d(o),confirm:d(i),confirmTxn:d(l),cancel:d(p)}))),e.next=9,t.sendRawTransaction(b.signTxn(n.sk)).do();case 9:return x=e.sent,j=x.txId,e.next=13,ce(t,j,1e3);case 13:return console.log("setup",a),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e,t,n){return be.apply(this,arguments)}function be(){return(be=Object(l.a)(u.a.mark((function e(t,n,r){var a,c,s,o,i,l,p,d,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=H(r,we),e.next=3,t.searchForTransactions().applicationID(n).txType("appl").notePrefix(a).do();case 3:if(c=e.sent,(s=c&&c.transactions)&&0!=s.length){e.next=7;break}throw"Password not found";case 7:i=s.length-1;case 8:if(!(i>=0)){e.next=28;break}if((l=s[i]).note){e.next=12;break}return e.abrupt("continue",25);case 12:o=G(l.note),p=!0,d=0;case 15:if(!(d<a.length)){e.next=22;break}if(o[d]==a[d]){e.next=19;break}return p=!1,e.abrupt("break",22);case 19:++d,e.next=15;break;case 22:if(!p){e.next=24;break}return e.abrupt("break",28);case 24:o=null;case 25:--i,e.next=8;break;case 28:if(o){e.next=30;break}throw"Password not found";case 30:return f=v.a.decodeObj(o.slice(a.length)),e.abrupt("return",{address:f.address,sigs:{prepareSig:U(f.prepare),confirmSig:U(f.confirm),confirmTxnSig:U(f.confirmTxn),cancelSig:U(f.cancel)}});case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(e,t,n,r,a,c){return je.apply(this,arguments)}function je(){return(je=Object(l.a)(u.a.mark((function e(t,n,r,a,c,s){var o,i,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactionParams().do();case 2:return o=e.sent,i=v.a.makeApplicationNoOpTxn(n,o,a,[G(btoa("prepare")),c,G(s)]),e.next=6,t.sendRawTransaction(v.a.signLogicSigTransactionObject(i,v.a.logicSigFromByte(G(r.prepareSig))).blob).do();case 6:return l=e.sent,p=l.txId,e.next=10,ce(t,p,1e3);case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e,t,n,r){return ve.apply(this,arguments)}function ve(){return(ve=Object(l.a)(u.a.mark((function e(t,n,r,a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactionParams().do();case 2:return c=e.sent,e.abrupt("return",v.a.makeApplicationNoOpTxn(n,c,r,[G(btoa("confirm")),a]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e,t,n,r,a){return me.apply(this,arguments)}function me(){return(me=Object(l.a)(u.a.mark((function e(t,n,r,a,c){var s,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactionParams().do();case 2:return s=e.sent,o=v.a.makeApplicationNoOpTxn(n,s,a,[G(btoa("cancel")),c]),e.next=6,t.sendRawTransaction(v.a.signLogicSigTransactionObject(o,v.a.logicSigFromByte(G(r.cancelSig))).blob).do();case 6:return i=e.sent,l=i.txId,e.next=10,ce(t,l,1e3);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e,t,n,r){return ke.apply(this,arguments)}function ke(){return(ke=Object(l.a)(u.a.mark((function e(t,n,r,a){var c,s,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ctxn: ",r.txID()),c=v.a.signLogicSigTransactionObject(r,v.a.logicSigFromByte(G(n.confirmSig))).blob,console.log("txn: ",a.txID()),(s=v.a.logicSigFromByte(G(n.confirmTxnSig))).args=[v.a.encodeUint64(0)],o=v.a.signLogicSigTransactionObject(a,s).blob,e.next=8,t.sendRawTransaction([c,o]).do();case 8:return i=e.sent,l=i.txId,e.next=12,ce(t,l,1e3);case 12:return e.abrupt("return");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var we=1e3,ye={appId:L.appId,sigs:null},Se=Object(j.b)({name:"contract",initialState:ye,reducers:{setSigs:function(e,t){e.sigs=t.payload}}}),Ce=Se.actions.setSigs,Ae=function(e){return e.contract.sigs},Te=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,r){var a,c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Le(r()),c=A(r()),s=ee(r()),a){t.next=5;break}throw"Account is not loaded";case 5:if(s){t.next=7;break}throw"App state is not loaded";case 7:if("not-created"!=s.status){t.next=9;break}throw"App is not created";case 9:if("not-opted-in"!=s.status){t.next=11;break}throw"App is not opted in";case 11:return t.next=13,pe(c,a,L.appId,e);case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Ie=Se.reducer,Pe=Object(j.b)({name:"account",initialState:{mnemonic:"",address:""},reducers:{setAddress:function(e,t){e.address!=t.payload&&(e.mnemonic=""),e.address=t.payload},setMnemonic:function(e,t){e.mnemonic=t.payload,e.address=v.a.mnemonicToSecretKey(e.mnemonic).addr}}}),Be=Pe.actions,Re=Be.setMnemonic,De=Be.setAddress,Ne=function(e){return e.account.mnemonic},_e=function(e){return e.account.address},Le=Object(x.a)(Ne,(function(e){return e?v.a.mnemonicToSecretKey(e):null})),Ee=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=_e(r()),e.mnemonic?n(Re(e.mnemonic)):e.address&&n(De(e.address)),_e(r())!=a){t.next=5;break}return t.abrupt("return");case 5:n(Ce(null)),n(Z());case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},qe=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.mnemonic,n(Ee({mnemonic:a})),n(re());case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Ue=Pe.reducer;function Ge(){var e=b(Ne),t=f(),n=Object(r.useState)(e),a=Object(p.a)(n,2),c=a[0],s=a[1];return Object(R.jsx)("div",{children:Object(R.jsxs)(P.a,{children:[Object(R.jsxs)(P.a.Group,{controlId:"mnemonic",children:[Object(R.jsx)(P.a.Label,{children:"Mnemonic"}),Object(R.jsx)(P.a.Control,{type:"text",placeholder:"Enter 25-words mnemonic phrase",value:c,onChange:function(e){return s(e.currentTarget.value)}})]}),Object(R.jsx)(B.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault();var n=v.a.secretKeyToMnemonic(v.a.generateAccount().sk);s(n),t(qe({mnemonic:n}))},children:"New"})," ",Object(R.jsx)(B.a,{variant:"primary",type:"submit",disabled:c==e||25!=c.split(" ").length,onClick:function(e){e.preventDefault(),t(Re(c)),t(qe({mnemonic:c}))},children:"Save"})," "]})})}var Qe=n(88),He=n.n(Qe),Ke=n(296),Je=n(291),Fe=n(292),Ye=n(149);function Me(){var e=b($),t=b(z),n=b(_e),r=b(w),a=b(ee),c=f();return Object(R.jsx)(Ke.a,{children:Object(R.jsxs)(Ke.a.Body,{children:[Object(R.jsx)("div",{className:He.a.hostPlace,children:r}),Object(R.jsx)(Je.a,{children:Object(R.jsxs)(Fe.a,{as:"dl",children:[Object(R.jsx)(Ye.a,{as:"dt",children:"Address: "}),Object(R.jsx)(Ye.a,{as:"dd",children:n||"unknown"}),Object(R.jsx)(Ye.a,{as:"dt",children:"Amount: "}),Object(R.jsx)(Ye.a,{as:"dd",children:""==t?"unknown":t})]})}),Object(R.jsx)("pre",{className:He.a.statePlace,children:e?"loading...":a?JSON.stringify(a,null,4):""}),Object(R.jsx)(B.a,{variant:"primary",type:"submit",disabled:!n,onClick:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c(re());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Update"})]})})}var Xe=n(89),Ze=n.n(Xe),We=n(150),Ve=n.n(We);function ze(e){return Object(R.jsx)("div",{className:Ve.a.funcPanel,children:e.children})}function $e(e){var t=Object(r.useState)(""),n=Object(p.a)(t,2),a=n[0],c=n[1];return Object(R.jsxs)("div",{className:Ze.a.setupButton,children:[Object(R.jsx)(B.a,{disabled:!a,onClick:function(){e.onSetup(a)},children:"Setup"}),Object(R.jsxs)("span",{className:Ze.a.generatePasswd,children:[Object(R.jsx)(P.a.Control,{value:a,onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Enter password"}),Object(R.jsx)(B.a,{onClick:function(){return c(function(){var e=v.a.secretKeyToMnemonic(v.a.generateAccount().sk);return e.split(" ").slice(0,4).join(" ")}())},children:"Generate"})]})]})}function et(e){var t,n;"string"==typeof e?alert(e):alert((null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.message)||"Failed")}function tt(){var e=f(),t=b(A),n=b(Le),r=b(C);return Object(R.jsxs)(P.a,{children:[Object(R.jsx)(ze,{children:Object(R.jsx)(B.a,{disabled:!n||!t,onClick:Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(ne(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Le(n()),a=A(n()),r){e.next=4;break}throw"Account is not loaded";case 4:return e.next=6,oe(a,r,L.appId);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),et(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),children:"Opt in"})}),Object(R.jsx)(ze,{children:Object(R.jsx)($e,{onSetup:function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(ne(Te(n)));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),et(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()})}),Object(R.jsx)(ze,{children:Object(R.jsx)(B.a,{disabled:!n||!t,onClick:Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(ne(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Le(n()),a=A(n()),r){e.next=4;break}throw"Account is not loaded";case 4:return e.next=6,ue(a,r,L.appId);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),et(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),children:"Clear"})}),Object(R.jsx)(ze,{children:r?Object(R.jsxs)("div",{children:["You can get some algos to a newly created account on the following pages",Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)("a",{target:"_blank",href:"https://bank.testnet.algorand.network",children:"https://bank.testnet.algorand.network"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{target:"_blank",href:"https://testnet.algoexplorer.io/dispenser",children:"https://testnet.algoexplorer.io/dispenser"})})]})]}):Object(R.jsxs)("div",{children:["You can get some algos to a newly created account using Sandbox client. See the example in the article ",Object(R.jsx)("a",{target:"_blank",href:"https://developer.algorand.org/articles/introducing-sandbox-20/",children:"Introducing Sandbox 2.0"}),"."]})})]})}var nt=n(153),rt=Object(j.b)({name:"auth",initialState:{passwd:"",currentRequest:null},reducers:{setPasswd:function(e,t){e.passwd=t.payload},setCurrentRequest:function(e,t){e.currentRequest=t.payload}}}),at=rt.actions,ct=at.setPasswd,st=at.setCurrentRequest,ot=function(e){return e.auth.currentRequest},it=function(e){return e.auth.passwd},ut=Object(x.a)(ee,Ae,(function(e,t){return t&&e?"not-created"===e.status?{}:"not-opted-in"===e.status||"wait-setup"===e.status?{find:!0}:"wait-prepare"===e.status?{find:!0,prepare:!0}:"wait-confirm"===e.status?{find:!0,confirm:!0,cancel:!0}:{find:!0,prepare:!0,confirm:!0,cancel:!0}:{find:!0}})),lt=Object(x.a)(ee,it,(function(e,t){return!!e&&function(e,t,n){return"not-created"!==n.status&&"not-opted-in"!==n.status&&"wait-setup"!==n.status&&U(H(t,n.counter))==n.secret}(L.appId,t,e)})),pt=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r,a){var c,s,o,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=_e(a()),s=A(a()),t){n.next=4;break}throw"Payment amount is not set";case 4:if(e){n.next=6;break}throw"Receiver address is not set";case 6:return n.next=8,s.getTransactionParams().do();case 8:return o=n.sent,i=v.a.makePaymentTxnWithSuggestedParamsFromObject({from:c,to:e,amount:t,suggestedParams:o}),n.abrupt("return",i);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},dt=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,r){var a,c,s,o,i,l,d,f,b,x,j,h;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=_e(r()),c=A(r()),s=Ae(r()),o=ee(r()),i=it(r()),s){t.next=7;break}throw"Credentials were not set";case 7:if(o&&"wait-prepare"==o.status){t.next=9;break}throw"Incorrect contract local state";case 9:return n(st("prepare")),t.prev=10,l=o.counter-o.counter%3,d=H(i,l-2),t.next=16,he(c,a,L.appId,d);case 16:return f=t.sent,b=v.a.assignGroupID([f,v.a.decodeUnsignedTransaction(v.a.encodeUnsignedTransaction(e))]),x=Object(p.a)(b,2),j=x[0],h=x[1],t.next=20,xe(c,a,s,L.appId,H(d,2),U(j.rawTxID()));case 20:return t.abrupt("return",{groupCTxn:j,groupTxn:h});case 21:return t.prev=21,n(st(null)),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[10,,21,24]])})));return function(e,n){return t.apply(this,arguments)}}()},ft=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r,a){var c,s,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=A(a()),s=Ae(a()),o=ee(a()),s){n.next=5;break}throw"Signatures not loaded";case 5:if(o&&"wait-confirm"===o.status){n.next=7;break}throw"Not waiting for confirmation";case 7:if(U(e.rawTxID())==o.mark){n.next=9;break}throw"State check failed: it is not safe to proceed";case 9:return r(st("confirm")),n.prev=10,n.next=13,ge(c,s,e,t);case 13:return n.prev=13,r(st(null)),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[10,,13,16]])})));return function(e,t){return n.apply(this,arguments)}}()},bt=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=T(n()),a=it(n()),t(st("find")),e.prev=3,e.next=6,fe(r,L.appId,a);case 6:c=e.sent,s=c.address,o=c.sigs,t(De(s)),t(Ce(o));case 11:return e.prev=11,t(st(null)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[3,,11,14]])})));return function(t,n){return e.apply(this,arguments)}}()},xt=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r,a){var c,s,o,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Ae(a())&&lt(a())){n.next=4;break}return n.next=4,r(ne(bt()));case 4:return c=_e(a()),n.t0=r,n.t1=ne,n.t2=dt,n.next=10,e(c);case 10:return n.t3=n.sent,n.t4=(0,n.t2)(n.t3),n.t5=(0,n.t1)(n.t4),n.next=15,(0,n.t0)(n.t5);case 15:return s=n.sent,o=s.groupCTxn,i=s.groupTxn,null===t||void 0===t||t(o,i),n.next=21,r(ne(ft(o,i)));case 21:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},jt=rt.reducer;function ht(e){var t,n;"string"==typeof e?alert(e):alert((null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.message)||"Request failed")}function vt(e){var t=e.title,n=e.type,r=e.availableRequests,a=e.currentRequest,c=e.onClick;return Object(R.jsx)(B.a,{disabled:!r[n]||!!a,onClick:c,variant:n==a?"outline-primary":"primary",children:t})}function Ot(){var e=f(),t=b(_e),n=Object(nt.a)({},b(ut)),a=b(ot),c=b(it),s=Object(r.useState)(c),o=Object(p.a)(s,2),i=o[0],d=o[1],x=Object(r.useState)("QC7XT7QU7X6IHNRJZBR67RBMKCAPH67PCSX4LYH4QKVSQ7DQZ32PG5HSVQ"),j=Object(p.a)(x,2),h=j[0],v=j[1],O=Object(r.useState)(11e4),m=Object(p.a)(O,2),g=m[0],k=m[1],w=Object(r.useState)(null),y=Object(p.a)(w,2),S=y[0],C=y[1],T=Object(r.useState)(null),I=Object(p.a)(T,2),D=I[0],N=I[1],_=Object(r.useState)(null),E=Object(p.a)(_,2),q=E[0],G=E[1];D&&q||delete n.confirm;var Q=Object(r.useCallback)(Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i){t.next=2;break}return t.abrupt("return");case 2:return i!=c&&e(ct(i)),t.prev=3,t.next=6,e(ne(bt()));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),ht(t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])}))),[S,i]),K=Object(r.useCallback)(Object(l.a)(u.a.mark((function t(){var n,r,a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,i!=c&&e(ct(i)),t.next=6,e(pt(h,g));case 6:return n=t.sent,C(n),G(null),N(null),t.next=12,e(ne(dt(n)));case 12:r=t.sent,a=r.groupCTxn,s=r.groupTxn,G(a),N(s),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),ht(t.t0);case 22:case"end":return t.stop()}}),t,null,[[2,19]])}))),[i,t,h,g]),J=Object(r.useCallback)(Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i!=c&&e(ct(i)),q&&D){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e(ne(ft(q,D)));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),ht(t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])}))),[q,D,i]),F=Object(r.useCallback)(Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i!=c&&e(ct(i)),i){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e(ne(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_e(n()),a=A(n()),c=Ae(n()),s=ee(n()),o=it(n()),c){e.next=7;break}throw"Signatures not loaded";case 7:if(s&&"wait-confirm"===s.status){e.next=9;break}throw"Not waiting for confirmation";case 9:return t(st("cancel")),e.prev=10,e.next=13,Oe(a,r,c,L.appId,H(o,s.counter-1));case 13:return e.prev=13,t(st(null)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[10,,13,16]])})));return function(t,n){return e.apply(this,arguments)}}()));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),ht(t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])}))),[c]),Y=Object(r.useCallback)(Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,i){t.next=3;break}throw"Passwd is not set";case 3:return i!=c&&e(ct(i)),t.next=6,e(xt(Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(pt(h,g));case 2:return n=t.sent,C(n),G(null),N(null),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)}))),(function(e,t){G(e),N(t)})));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),ht(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[S,i,g,h]);return Object(R.jsxs)(Je.a,{children:[Object(R.jsx)(Fe.a,{children:Object(R.jsx)(Ye.a,{children:Object(R.jsx)(P.a.Control,{value:i,onChange:function(e){return d(e.target.value)},type:"text",placeholder:"Enter password"})})}),Object(R.jsxs)(Fe.a,{children:[Object(R.jsx)(Ye.a,{children:Object(R.jsx)(ze,{children:Object(R.jsxs)(Ke.a,{children:[Object(R.jsx)(Ke.a.Header,{children:Object(R.jsx)(B.a,{onClick:Y,children:"Sign and Send Payment Transaction"})}),Object(R.jsx)(Ke.a.Body,{children:Object(R.jsxs)(P.a,{children:[Object(R.jsxs)(P.a.Group,{controlId:"formBasicAddress",children:[Object(R.jsx)(P.a.Label,{children:"Recepient address"}),Object(R.jsx)(P.a.Control,{type:"text",placeholder:"XYZ...",value:h,onChange:function(e){return v(e.target.value)}})]}),Object(R.jsxs)(P.a.Group,{controlId:"formBasicAmount",children:[Object(R.jsx)(P.a.Label,{children:"Amount"}),Object(R.jsx)(P.a.Control,{type:"number",placeholder:"Amount",value:(null===g||void 0===g?void 0:g.toString())||0,onChange:function(e){return k(parseInt(e.target.value)||0)}})]})]})})]})})}),Object(R.jsx)(Ye.a,{xs:"auto",style:{display:"flex"},children:Object(R.jsxs)("div",{style:{display:"flex",justifyContent:"center",flex:1,flexDirection:"column"},children:[Object(R.jsxs)(ze,{children:["1. ",Object(R.jsx)(vt,{type:"find",title:"Find credentials",onClick:Q,availableRequests:n,currentRequest:a})]}),Object(R.jsxs)(ze,{children:["2. ",Object(R.jsx)(vt,{type:"prepare",title:"Prepare",onClick:K,availableRequests:n,currentRequest:a})]}),Object(R.jsxs)(ze,{children:["3. ",Object(R.jsx)(vt,{type:"confirm",title:"Confirm",onClick:J,availableRequests:n,currentRequest:a})]}),Object(R.jsxs)(ze,{children:["3",Object(R.jsx)("span",{style:{position:"absolute"},children:"*"}),". ",Object(R.jsx)(vt,{type:"cancel",title:"Cancel",onClick:F,availableRequests:n,currentRequest:a})]})]})})]}),Object(R.jsx)(Fe.a,{children:Object(R.jsx)(Ye.a,{children:Object(R.jsxs)(Ke.a,{children:[Object(R.jsx)(Ke.a.Header,{children:"Transaction Content"}),Object(R.jsxs)(Ke.a.Body,{children:[Object(R.jsx)("div",{children:null===S||void 0===S?void 0:S.txID()}),Object(R.jsx)("div",{children:q?"Raw TxID in group: "+U(q.rawTxID()):""}),Object(R.jsx)("pre",{children:JSON.stringify(JSON.parse((null===S||void 0===S?void 0:S.toString())||"{}"),null,2)})]})]})})})]})}var mt=n(295),gt=n(293),kt=n(5),wt=n.n(kt);function yt(e){return Object(R.jsx)("div",{className:wt()(o.a.tabBase,"border-bottom","border-left","border-right"),children:e.children})}var St=function(){return Object(R.jsx)("div",{className:o.a.main,children:Object(R.jsxs)(Je.a,{children:[Object(R.jsx)(Fe.a,{children:Object(R.jsx)(Ye.a,{children:Object(R.jsx)("h3",{children:"Algorand PassDApp"})})}),Object(R.jsxs)(Fe.a,{children:[Object(R.jsx)(Ye.a,{sm:3,children:Object(R.jsx)(Me,{})}),Object(R.jsx)(Ye.a,{sm:9,children:Object(R.jsxs)(mt.a,{defaultActiveKey:"algoclient",children:[Object(R.jsx)(gt.a,{eventKey:"algoclient",title:"Node Provider",children:Object(R.jsx)(yt,{children:Object(R.jsx)(_,{})})}),Object(R.jsxs)(gt.a,{eventKey:"account",title:"Setup",children:[Object(R.jsx)(yt,{children:Object(R.jsx)(Ge,{})}),Object(R.jsx)(yt,{children:Object(R.jsx)(tt,{})})]}),Object(R.jsx)(gt.a,{eventKey:"auth",title:"Transaction Authentication",children:Object(R.jsx)(yt,{children:Object(R.jsx)(Ot,{})})})]})})]})]})})},Ct=Object(j.a)({reducer:{status:ae,account:Ue,contract:Ie,algorandClient:I,auth:jt}});n(287);c.a.render(Object(R.jsx)(d.a,{store:Ct,children:Object(R.jsx)(St,{})}),document.getElementById("root"))},85:function(e,t,n){e.exports={main:"App_main__3ZkGI",tabBase:"App_tabBase__3Ir4k"}},88:function(e,t,n){e.exports={hostPlace:"Status_hostPlace__3HjW4",statePlace:"Status_statePlace__3QdJu"}},89:function(e,t,n){e.exports={setupButton:"Contract_setupButton__24urr",generatePasswd:"Contract_generatePasswd__JAHeY"}}},[[288,1,2]]]);
//# sourceMappingURL=main.1ad9d426.chunk.js.map