(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function ng(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bu={exports:{}},qs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function ig(){if(zd)return qs;zd=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(r,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:t,type:r,key:h,ref:u!==void 0?u:null,props:f}}return qs.Fragment=a,qs.jsx=l,qs.jsxs=l,qs}var Md;function ag(){return Md||(Md=1,Bu.exports=ig()),Bu.exports}var b=ag(),_u={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function sg(){if(wd)return ut;wd=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function A(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,k={};function G(z,H,P){this.props=z,this.context=H,this.refs=k,this.updater=P||E}G.prototype.isReactComponent={},G.prototype.setState=function(z,H){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,H,"setState")},G.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=G.prototype;function q(z,H,P){this.props=z,this.context=H,this.refs=k,this.updater=P||E}var L=q.prototype=new U;L.constructor=q,B(L,G.prototype),L.isPureReactComponent=!0;var F=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function Q(z,H,P,Z,nt,mt){return P=mt.ref,{$$typeof:t,type:z,key:H,ref:P!==void 0?P:null,props:mt}}function tt(z,H){return Q(z.type,H,void 0,void 0,void 0,z.props)}function St(z){return typeof z=="object"&&z!==null&&z.$$typeof===t}function Nt(z){var H={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(P){return H[P]})}var Jt=/\/+/g;function Ut(z,H){return typeof z=="object"&&z!==null&&z.key!=null?Nt(""+z.key):H.toString(36)}function Ke(){}function Oe(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Ke,Ke):(z.status="pending",z.then(function(H){z.status==="pending"&&(z.status="fulfilled",z.value=H)},function(H){z.status==="pending"&&(z.status="rejected",z.reason=H)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Qt(z,H,P,Z,nt){var mt=typeof z;(mt==="undefined"||mt==="boolean")&&(z=null);var st=!1;if(z===null)st=!0;else switch(mt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(z.$$typeof){case t:case a:st=!0;break;case y:return st=z._init,Qt(st(z._payload),H,P,Z,nt)}}if(st)return nt=nt(z),st=Z===""?"."+Ut(z,0):Z,F(nt)?(P="",st!=null&&(P=st.replace(Jt,"$&/")+"/"),Qt(nt,H,P,"",function(ue){return ue})):nt!=null&&(St(nt)&&(nt=tt(nt,P+(nt.key==null||z&&z.key===nt.key?"":(""+nt.key).replace(Jt,"$&/")+"/")+st)),H.push(nt)),1;st=0;var Wt=Z===""?".":Z+":";if(F(z))for(var Tt=0;Tt<z.length;Tt++)Z=z[Tt],mt=Wt+Ut(Z,Tt),st+=Qt(Z,H,P,mt,nt);else if(Tt=A(z),typeof Tt=="function")for(z=Tt.call(z),Tt=0;!(Z=z.next()).done;)Z=Z.value,mt=Wt+Ut(Z,Tt++),st+=Qt(Z,H,P,mt,nt);else if(mt==="object"){if(typeof z.then=="function")return Qt(Oe(z),H,P,Z,nt);throw H=String(z),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return st}function R(z,H,P){if(z==null)return z;var Z=[],nt=0;return Qt(z,Z,"","",function(mt){return H.call(P,mt,nt++)}),Z}function Y(z){if(z._status===-1){var H=z._result;H=H(),H.then(function(P){(z._status===0||z._status===-1)&&(z._status=1,z._result=P)},function(P){(z._status===0||z._status===-1)&&(z._status=2,z._result=P)}),z._status===-1&&(z._status=0,z._result=H)}if(z._status===1)return z._result.default;throw z._result}var W=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ct(){}return ut.Children={map:R,forEach:function(z,H,P){R(z,function(){H.apply(this,arguments)},P)},count:function(z){var H=0;return R(z,function(){H++}),H},toArray:function(z){return R(z,function(H){return H})||[]},only:function(z){if(!St(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ut.Component=G,ut.Fragment=l,ut.Profiler=u,ut.PureComponent=q,ut.StrictMode=r,ut.Suspense=p,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ut.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},ut.cache=function(z){return function(){return z.apply(null,arguments)}},ut.cloneElement=function(z,H,P){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=B({},z.props),nt=z.key,mt=void 0;if(H!=null)for(st in H.ref!==void 0&&(mt=void 0),H.key!==void 0&&(nt=""+H.key),H)!K.call(H,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&H.ref===void 0||(Z[st]=H[st]);var st=arguments.length-2;if(st===1)Z.children=P;else if(1<st){for(var Wt=Array(st),Tt=0;Tt<st;Tt++)Wt[Tt]=arguments[Tt+2];Z.children=Wt}return Q(z.type,nt,void 0,void 0,mt,Z)},ut.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},ut.createElement=function(z,H,P){var Z,nt={},mt=null;if(H!=null)for(Z in H.key!==void 0&&(mt=""+H.key),H)K.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(nt[Z]=H[Z]);var st=arguments.length-2;if(st===1)nt.children=P;else if(1<st){for(var Wt=Array(st),Tt=0;Tt<st;Tt++)Wt[Tt]=arguments[Tt+2];nt.children=Wt}if(z&&z.defaultProps)for(Z in st=z.defaultProps,st)nt[Z]===void 0&&(nt[Z]=st[Z]);return Q(z,mt,void 0,void 0,null,nt)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(z){return{$$typeof:m,render:z}},ut.isValidElement=St,ut.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:Y}},ut.memo=function(z,H){return{$$typeof:g,type:z,compare:H===void 0?null:H}},ut.startTransition=function(z){var H=N.T,P={};N.T=P;try{var Z=z(),nt=N.S;nt!==null&&nt(P,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ct,W)}catch(mt){W(mt)}finally{N.T=H}},ut.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ut.use=function(z){return N.H.use(z)},ut.useActionState=function(z,H,P){return N.H.useActionState(z,H,P)},ut.useCallback=function(z,H){return N.H.useCallback(z,H)},ut.useContext=function(z){return N.H.useContext(z)},ut.useDebugValue=function(){},ut.useDeferredValue=function(z,H){return N.H.useDeferredValue(z,H)},ut.useEffect=function(z,H,P){var Z=N.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(z,H)},ut.useId=function(){return N.H.useId()},ut.useImperativeHandle=function(z,H,P){return N.H.useImperativeHandle(z,H,P)},ut.useInsertionEffect=function(z,H){return N.H.useInsertionEffect(z,H)},ut.useLayoutEffect=function(z,H){return N.H.useLayoutEffect(z,H)},ut.useMemo=function(z,H){return N.H.useMemo(z,H)},ut.useOptimistic=function(z,H){return N.H.useOptimistic(z,H)},ut.useReducer=function(z,H,P){return N.H.useReducer(z,H,P)},ut.useRef=function(z){return N.H.useRef(z)},ut.useState=function(z){return N.H.useState(z)},ut.useSyncExternalStore=function(z,H,P){return N.H.useSyncExternalStore(z,H,P)},ut.useTransition=function(){return N.H.useTransition()},ut.version="19.1.0",ut}var Ed;function X1(){return Ed||(Ed=1,_u.exports=sg()),_u.exports}var I=X1();const ae=ng(I);var Lu={exports:{}},Xs={},Hu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function lg(){return $d||($d=1,function(t){function a(R,Y){var W=R.length;R.push(Y);t:for(;0<W;){var ct=W-1>>>1,z=R[ct];if(0<u(z,Y))R[ct]=Y,R[W]=z,W=ct;else break t}}function l(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var Y=R[0],W=R.pop();if(W!==Y){R[0]=W;t:for(var ct=0,z=R.length,H=z>>>1;ct<H;){var P=2*(ct+1)-1,Z=R[P],nt=P+1,mt=R[nt];if(0>u(Z,W))nt<z&&0>u(mt,Z)?(R[ct]=mt,R[nt]=W,ct=nt):(R[ct]=Z,R[P]=W,ct=P);else if(nt<z&&0>u(mt,W))R[ct]=mt,R[nt]=W,ct=nt;else break t}}return Y}function u(R,Y){var W=R.sortIndex-Y.sortIndex;return W!==0?W:R.id-Y.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;t.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();t.unstable_now=function(){return h.now()-m}}var p=[],g=[],y=1,x=null,A=3,E=!1,B=!1,k=!1,G=!1,U=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function F(R){for(var Y=l(g);Y!==null;){if(Y.callback===null)r(g);else if(Y.startTime<=R)r(g),Y.sortIndex=Y.expirationTime,a(p,Y);else break;Y=l(g)}}function N(R){if(k=!1,F(R),!B)if(l(p)!==null)B=!0,K||(K=!0,Ut());else{var Y=l(g);Y!==null&&Qt(N,Y.startTime-R)}}var K=!1,Q=-1,tt=5,St=-1;function Nt(){return G?!0:!(t.unstable_now()-St<tt)}function Jt(){if(G=!1,K){var R=t.unstable_now();St=R;var Y=!0;try{t:{B=!1,k&&(k=!1,q(Q),Q=-1),E=!0;var W=A;try{e:{for(F(R),x=l(p);x!==null&&!(x.expirationTime>R&&Nt());){var ct=x.callback;if(typeof ct=="function"){x.callback=null,A=x.priorityLevel;var z=ct(x.expirationTime<=R);if(R=t.unstable_now(),typeof z=="function"){x.callback=z,F(R),Y=!0;break e}x===l(p)&&r(p),F(R)}else r(p);x=l(p)}if(x!==null)Y=!0;else{var H=l(g);H!==null&&Qt(N,H.startTime-R),Y=!1}}break t}finally{x=null,A=W,E=!1}Y=void 0}}finally{Y?Ut():K=!1}}}var Ut;if(typeof L=="function")Ut=function(){L(Jt)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Oe=Ke.port2;Ke.port1.onmessage=Jt,Ut=function(){Oe.postMessage(null)}}else Ut=function(){U(Jt,0)};function Qt(R,Y){Q=U(function(){R(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return A},t.unstable_next=function(R){switch(A){case 1:case 2:case 3:var Y=3;break;default:Y=A}var W=A;A=Y;try{return R()}finally{A=W}},t.unstable_requestPaint=function(){G=!0},t.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=A;A=R;try{return Y()}finally{A=W}},t.unstable_scheduleCallback=function(R,Y,W){var ct=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ct+W:ct):W=ct,R){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,R={id:y++,callback:Y,priorityLevel:R,startTime:W,expirationTime:z,sortIndex:-1},W>ct?(R.sortIndex=W,a(g,R),l(p)===null&&R===l(g)&&(k?(q(Q),Q=-1):k=!0,Qt(N,W-ct))):(R.sortIndex=z,a(p,R),B||E||(B=!0,K||(K=!0,Ut()))),R},t.unstable_shouldYield=Nt,t.unstable_wrapCallback=function(R){var Y=A;return function(){var W=A;A=Y;try{return R.apply(this,arguments)}finally{A=W}}}}(Nu)),Nu}var Dd;function rg(){return Dd||(Dd=1,Hu.exports=lg()),Hu.exports}var Uu={exports:{}},de={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function og(){if(Cd)return de;Cd=1;var t=X1();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(p,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:p,containerInfo:g,implementation:y}}var h=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,de.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return f(p,g,null,y)},de.flushSync=function(p){var g=h.T,y=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=g,r.p=y,r.d.f()}},de.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},de.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},de.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,E=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:A,fetchPriority:E}):y==="script"&&r.d.X(p,{crossOrigin:x,integrity:A,fetchPriority:E,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},de.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},de.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin);r.d.L(p,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},de.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},de.requestFormReset=function(p){r.d.r(p)},de.unstable_batchedUpdates=function(p,g){return p(g)},de.useFormState=function(p,g,y){return h.H.useFormState(p,g,y)},de.useFormStatus=function(){return h.H.useHostTransitionStatus()},de.version="19.1.0",de}var jd;function cg(){if(jd)return Uu.exports;jd=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Uu.exports=og(),Uu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function ug(){if(Rd)return Xs;Rd=1;var t=rg(),a=X1(),l=cg();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,s=n;;){var o=i.return;if(o===null)break;var c=o.alternate;if(c===null){if(s=o.return,s!==null){i=s;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return m(o),e;if(c===s)return m(o),n;c=c.sibling}throw Error(r(188))}if(i.return!==s.return)i=o,s=c;else{for(var d=!1,v=o.child;v;){if(v===i){d=!0,i=o,s=c;break}if(v===s){d=!0,s=o,i=c;break}v=v.sibling}if(!d){for(v=c.child;v;){if(v===i){d=!0,i=c,s=o;break}if(v===s){d=!0,s=c,i=o;break}v=v.sibling}if(!d)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),Nt=Symbol.for("react.memo_cache_sentinel"),Jt=Symbol.iterator;function Ut(e){return e===null||typeof e!="object"?null:(e=Jt&&e[Jt]||e["@@iterator"],typeof e=="function"?e:null)}var Ke=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case G:return"Profiler";case k:return"StrictMode";case N:return"Suspense";case K:return"SuspenseList";case St:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:Oe(e.type)||"Memo";case tt:n=e._payload,e=e._init;try{return Oe(e(n))}catch{}}return null}var Qt=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ct=[],z=-1;function H(e){return{current:e}}function P(e){0>z||(e.current=ct[z],ct[z]=null,z--)}function Z(e,n){z++,ct[z]=e.current,e.current=n}var nt=H(null),mt=H(null),st=H(null),Wt=H(null);function Tt(e,n){switch(Z(st,n),Z(mt,e),Z(nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Wh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Wh(n),e=Ih(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(nt),Z(nt,e)}function ue(){P(nt),P(mt),P(st)}function oi(e){e.memoizedState!==null&&Z(Wt,e);var n=nt.current,i=Ih(n,e.type);n!==i&&(Z(mt,e),Z(nt,i))}function hn(e){mt.current===e&&(P(nt),P(mt)),Wt.current===e&&(P(Wt),Ns._currentValue=W)}var Ve=Object.prototype.hasOwnProperty,To=t.unstable_scheduleCallback,Ao=t.unstable_cancelCallback,V6=t.unstable_shouldYield,B6=t.unstable_requestPaint,en=t.unstable_now,_6=t.unstable_getCurrentPriorityLevel,j0=t.unstable_ImmediatePriority,R0=t.unstable_UserBlockingPriority,vl=t.unstable_NormalPriority,L6=t.unstable_LowPriority,O0=t.unstable_IdlePriority,H6=t.log,N6=t.unstable_setDisableYieldValue,Za=null,Ae=null;function jn(e){if(typeof H6=="function"&&N6(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Za,e)}catch{}}var ze=Math.clz32?Math.clz32:Y6,U6=Math.log,k6=Math.LN2;function Y6(e){return e>>>=0,e===0?32:31-(U6(e)/k6|0)|0}var bl=256,xl=4194304;function ci(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Sl(e,n,i){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=s&134217727;return v!==0?(s=v&~c,s!==0?o=ci(s):(d&=v,d!==0?o=ci(d):i||(i=v&~e,i!==0&&(o=ci(i))))):(v=s&~c,v!==0?o=ci(v):d!==0?o=ci(d):i||(i=s&~e,i!==0&&(o=ci(i)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:o}function Qa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function G6(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V0(){var e=bl;return bl<<=1,(bl&4194048)===0&&(bl=256),e}function B0(){var e=xl;return xl<<=1,(xl&62914560)===0&&(xl=4194304),e}function zo(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ka(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function q6(e,n,i,s,o,c){var d=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var v=e.entanglements,S=e.expirationTimes,D=e.hiddenUpdates;for(i=d&~i;0<i;){var O=31-ze(i),_=1<<O;v[O]=0,S[O]=-1;var C=D[O];if(C!==null)for(D[O]=null,O=0;O<C.length;O++){var j=C[O];j!==null&&(j.lane&=-536870913)}i&=~_}s!==0&&_0(e,s,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~n))}function _0(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ze(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|i&4194090}function L0(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var s=31-ze(i),o=1<<s;o&n|e[s]&n&&(e[s]|=n),i&=~o}}function Mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function H0(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:vd(e.type))}function X6(e,n){var i=Y.p;try{return Y.p=e,n()}finally{Y.p=i}}var Rn=Math.random().toString(36).slice(2),fe="__reactFiber$"+Rn,ye="__reactProps$"+Rn,Ni="__reactContainer$"+Rn,Eo="__reactEvents$"+Rn,P6="__reactListeners$"+Rn,Z6="__reactHandles$"+Rn,N0="__reactResources$"+Rn,Fa="__reactMarker$"+Rn;function $o(e){delete e[fe],delete e[ye],delete e[Eo],delete e[P6],delete e[Z6]}function Ui(e){var n=e[fe];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ni]||i[fe]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=id(e);e!==null;){if(i=e[fe])return i;e=id(e)}return n}e=i,i=e.parentNode}return null}function ki(e){if(e=e[fe]||e[Ni]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Yi(e){var n=e[N0];return n||(n=e[N0]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function It(e){e[Fa]=!0}var U0=new Set,k0={};function ui(e,n){Gi(e,n),Gi(e+"Capture",n)}function Gi(e,n){for(k0[e]=n,e=0;e<n.length;e++)U0.add(n[e])}var Q6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Y0={},G0={};function K6(e){return Ve.call(G0,e)?!0:Ve.call(Y0,e)?!1:Q6.test(e)?G0[e]=!0:(Y0[e]=!0,!1)}function Tl(e,n,i){if(K6(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function Al(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function dn(e,n,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+s)}}var Do,q0;function qi(e){if(Do===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Do=n&&n[1]||"",q0=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Do+e+q0}var Co=!1;function jo(e,n){if(!e||Co)return"";Co=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(j){var C=j}Reflect.construct(e,[],_)}else{try{_.call()}catch(j){C=j}e.call(_.prototype)}}else{try{throw Error()}catch(j){C=j}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(j){if(j&&C&&typeof j.stack=="string")return[j.stack,C.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),d=c[0],v=c[1];if(d&&v){var S=d.split(`
`),D=v.split(`
`);for(o=s=0;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;for(;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;if(s===S.length||o===D.length)for(s=S.length-1,o=D.length-1;1<=s&&0<=o&&S[s]!==D[o];)o--;for(;1<=s&&0<=o;s--,o--)if(S[s]!==D[o]){if(s!==1||o!==1)do if(s--,o--,0>o||S[s]!==D[o]){var O=`
`+S[s].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=s&&0<=o);break}}}finally{Co=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?qi(i):""}function F6(e){switch(e.tag){case 26:case 27:case 5:return qi(e.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 15:return jo(e.type,!1);case 11:return jo(e.type.render,!1);case 1:return jo(e.type,!0);case 31:return qi("Activity");default:return""}}function X0(e){try{var n="";do n+=F6(e),e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Be(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function P0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function J6(e){var n=P0(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function zl(e){e._valueTracker||(e._valueTracker=J6(e))}function Z0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return e&&(s=P0(e)?e.checked?"true":"false":e.value),e=s,e!==i?(n.setValue(e),!0):!1}function Ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W6=/[\n"\\]/g;function _e(e){return e.replace(W6,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ro(e,n,i,s,o,c,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Be(n)):e.value!==""+Be(n)&&(e.value=""+Be(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?Oo(e,d,Be(n)):i!=null?Oo(e,d,Be(i)):s!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Be(v):e.removeAttribute("name")}function Q0(e,n,i,s,o,c,d,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null))return;i=i!=null?""+Be(i):"",n=n!=null?""+Be(n):i,v||n===e.value||(e.value=n),e.defaultValue=n}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=v?e.checked:!!s,e.defaultChecked=!!s,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Oo(e,n,i){n==="number"&&Ml(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Xi(e,n,i,s){if(e=e.options,n){n={};for(var o=0;o<i.length;o++)n["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=n.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&s&&(e[i].defaultSelected=!0)}else{for(i=""+Be(i),n=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function K0(e,n,i){if(n!=null&&(n=""+Be(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Be(i):""}function F0(e,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(r(92));if(Qt(s)){if(1<s.length)throw Error(r(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=Be(n),e.defaultValue=i,s=e.textContent,s===i&&s!==""&&s!==null&&(e.value=s)}function Pi(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var I6=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function J0(e,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,i):typeof i!="number"||i===0||I6.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function W0(e,n,i){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var o in n)s=n[o],n.hasOwnProperty(o)&&i[o]!==s&&J0(e,o,s)}else for(var c in n)n.hasOwnProperty(c)&&J0(e,c,n[c])}function Vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(e){return e5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bo=null;function _o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Qi=null;function I0(e){var n=ki(e);if(n&&(e=n.stateNode)){var i=e[ye]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ro(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==e&&s.form===e.form){var o=s[ye]||null;if(!o)throw Error(r(90));Ro(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===e.form&&Z0(s)}break t;case"textarea":K0(e,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Xi(e,!!i.multiple,n,!1)}}}var Lo=!1;function tf(e,n,i){if(Lo)return e(n,i);Lo=!0;try{var s=e(n);return s}finally{if(Lo=!1,(Zi!==null||Qi!==null)&&(fr(),Zi&&(n=Zi,e=Qi,Qi=Zi=null,I0(n),e)))for(n=0;n<e.length;n++)I0(e[n])}}function Wa(e,n){var i=e.stateNode;if(i===null)return null;var s=i[ye]||null;if(s===null)return null;i=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ho=!1;if(mn)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Ho=!1}var On=null,No=null,El=null;function ef(){if(El)return El;var e,n=No,i=n.length,s,o="value"in On?On.value:On.textContent,c=o.length;for(e=0;e<i&&n[e]===o[e];e++);var d=i-e;for(s=1;s<=d&&n[i-s]===o[c-s];s++);return El=o.slice(e,1<s?1-s:void 0)}function $l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function nf(){return!1}function ve(e){function n(i,s,o,c,d){this._reactName=i,this._targetInst=o,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(i=e[v],this[v]=i?i(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Dl:nf,this.isPropagationStopped=nf,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=ve(fi),ts=y({},fi,{view:0,detail:0}),n5=ve(ts),Uo,ko,es,jl=y({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(Uo=e.screenX-es.screenX,ko=e.screenY-es.screenY):ko=Uo=0,es=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),af=ve(jl),i5=y({},jl,{dataTransfer:0}),a5=ve(i5),s5=y({},ts,{relatedTarget:0}),Yo=ve(s5),l5=y({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),r5=ve(l5),o5=y({},fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c5=ve(o5),u5=y({},fi,{data:0}),sf=ve(u5),f5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m5(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=d5[e])?!!n[e]:!1}function Go(){return m5}var p5=y({},ts,{key:function(e){if(e.key){var n=f5[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Go,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g5=ve(p5),y5=y({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lf=ve(y5),v5=y({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Go}),b5=ve(v5),x5=y({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),S5=ve(x5),T5=y({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A5=ve(T5),z5=y({},fi,{newState:0,oldState:0}),M5=ve(z5),w5=[9,13,27,32],qo=mn&&"CompositionEvent"in window,ns=null;mn&&"documentMode"in document&&(ns=document.documentMode);var E5=mn&&"TextEvent"in window&&!ns,rf=mn&&(!qo||ns&&8<ns&&11>=ns),of=" ",cf=!1;function uf(e,n){switch(e){case"keyup":return w5.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ki=!1;function $5(e,n){switch(e){case"compositionend":return ff(n);case"keypress":return n.which!==32?null:(cf=!0,of);case"textInput":return e=n.data,e===of&&cf?null:e;default:return null}}function D5(e,n){if(Ki)return e==="compositionend"||!qo&&uf(e,n)?(e=ef(),El=No=On=null,Ki=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rf&&n.locale!=="ko"?null:n.data;default:return null}}var C5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!C5[e.type]:n==="textarea"}function df(e,n,i,s){Zi?Qi?Qi.push(s):Qi=[s]:Zi=s,n=yr(n,"onChange"),0<n.length&&(i=new Cl("onChange","change",null,i,s),e.push({event:i,listeners:n}))}var is=null,as=null;function j5(e){Zh(e,0)}function Rl(e){var n=Ja(e);if(Z0(n))return e}function mf(e,n){if(e==="change")return n}var pf=!1;if(mn){var Xo;if(mn){var Po="oninput"in document;if(!Po){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Po=typeof gf.oninput=="function"}Xo=Po}else Xo=!1;pf=Xo&&(!document.documentMode||9<document.documentMode)}function yf(){is&&(is.detachEvent("onpropertychange",vf),as=is=null)}function vf(e){if(e.propertyName==="value"&&Rl(as)){var n=[];df(n,as,e,_o(e)),tf(j5,n)}}function R5(e,n,i){e==="focusin"?(yf(),is=n,as=i,is.attachEvent("onpropertychange",vf)):e==="focusout"&&yf()}function O5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(as)}function V5(e,n){if(e==="click")return Rl(n)}function B5(e,n){if(e==="input"||e==="change")return Rl(n)}function _5(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:_5;function ss(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var o=i[s];if(!Ve.call(n,o)||!Me(e[o],n[o]))return!1}return!0}function bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,n){var i=bf(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=n&&s>=n)return{node:i,offset:n-e};e=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=bf(i)}}function Sf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ml(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Ml(e.document)}return n}function Zo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var L5=mn&&"documentMode"in document&&11>=document.documentMode,Fi=null,Qo=null,ls=null,Ko=!1;function Af(e,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ko||Fi==null||Fi!==Ml(s)||(s=Fi,"selectionStart"in s&&Zo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ls&&ss(ls,s)||(ls=s,s=yr(Qo,"onSelect"),0<s.length&&(n=new Cl("onSelect","select",null,n,i),e.push({event:n,listeners:s}),n.target=Fi)))}function hi(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ji={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionrun:hi("Transition","TransitionRun"),transitionstart:hi("Transition","TransitionStart"),transitioncancel:hi("Transition","TransitionCancel"),transitionend:hi("Transition","TransitionEnd")},Fo={},zf={};mn&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function di(e){if(Fo[e])return Fo[e];if(!Ji[e])return e;var n=Ji[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in zf)return Fo[e]=n[i];return e}var Mf=di("animationend"),wf=di("animationiteration"),Ef=di("animationstart"),H5=di("transitionrun"),N5=di("transitionstart"),U5=di("transitioncancel"),$f=di("transitionend"),Df=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function Fe(e,n){Df.set(e,n),ui(n,[e])}var Cf=new WeakMap;function Le(e,n){if(typeof e=="object"&&e!==null){var i=Cf.get(e);return i!==void 0?i:(n={value:e,source:n,stack:X0(n)},Cf.set(e,n),n)}return{value:e,source:n,stack:X0(n)}}var He=[],Wi=0,Wo=0;function Ol(){for(var e=Wi,n=Wo=Wi=0;n<e;){var i=He[n];He[n++]=null;var s=He[n];He[n++]=null;var o=He[n];He[n++]=null;var c=He[n];if(He[n++]=null,s!==null&&o!==null){var d=s.pending;d===null?o.next=o:(o.next=d.next,d.next=o),s.pending=o}c!==0&&jf(i,o,c)}}function Vl(e,n,i,s){He[Wi++]=e,He[Wi++]=n,He[Wi++]=i,He[Wi++]=s,Wo|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Io(e,n,i,s){return Vl(e,n,i,s),Bl(e)}function Ii(e,n){return Vl(e,null,null,n),Bl(e)}function jf(e,n,i){e.lanes|=i;var s=e.alternate;s!==null&&(s.lanes|=i);for(var o=!1,c=e.return;c!==null;)c.childLanes|=i,s=c.alternate,s!==null&&(s.childLanes|=i),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&n!==null&&(o=31-ze(i),e=c.hiddenUpdates,s=e[o],s===null?e[o]=[n]:s.push(n),n.lane=i|536870912),c):null}function Bl(e){if(50<js)throw js=0,su=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ta={};function k5(e,n,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(e,n,i,s){return new k5(e,n,i,s)}function tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,n){var i=e.alternate;return i===null?(i=we(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Rf(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,i,s,o,c){var d=0;if(s=e,typeof e=="function")tc(e)&&(d=1);else if(typeof e=="string")d=Gp(e,i,nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case St:return e=we(31,i,n,o),e.elementType=St,e.lanes=c,e;case B:return mi(i.children,o,c,n);case k:d=8,o|=24;break;case G:return e=we(12,i,n,o|2),e.elementType=G,e.lanes=c,e;case N:return e=we(13,i,n,o),e.elementType=N,e.lanes=c,e;case K:return e=we(19,i,n,o),e.elementType=K,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case L:d=10;break t;case q:d=9;break t;case F:d=11;break t;case Q:d=14;break t;case tt:d=16,s=null;break t}d=29,i=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=we(d,i,n,o),n.elementType=e,n.type=s,n.lanes=c,n}function mi(e,n,i,s){return e=we(7,e,s,n),e.lanes=i,e}function ec(e,n,i){return e=we(6,e,null,n),e.lanes=i,e}function nc(e,n,i){return n=we(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ea=[],na=0,Ll=null,Hl=0,Ne=[],Ue=0,pi=null,gn=1,yn="";function gi(e,n){ea[na++]=Hl,ea[na++]=Ll,Ll=e,Hl=n}function Of(e,n,i){Ne[Ue++]=gn,Ne[Ue++]=yn,Ne[Ue++]=pi,pi=e;var s=gn;e=yn;var o=32-ze(s)-1;s&=~(1<<o),i+=1;var c=32-ze(n)+o;if(30<c){var d=o-o%5;c=(s&(1<<d)-1).toString(32),s>>=d,o-=d,gn=1<<32-ze(n)+o|i<<o|s,yn=c+e}else gn=1<<c|i<<o|s,yn=e}function ic(e){e.return!==null&&(gi(e,1),Of(e,1,0))}function ac(e){for(;e===Ll;)Ll=ea[--na],ea[na]=null,Hl=ea[--na],ea[na]=null;for(;e===pi;)pi=Ne[--Ue],Ne[Ue]=null,yn=Ne[--Ue],Ne[Ue]=null,gn=Ne[--Ue],Ne[Ue]=null}var pe=null,_t=null,xt=!1,yi=null,nn=!1,sc=Error(r(519));function vi(e){var n=Error(r(418,""));throw cs(Le(n,e)),sc}function Vf(e){var n=e.stateNode,i=e.type,s=e.memoizedProps;switch(n[fe]=e,n[ye]=s,i){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(i=0;i<Os.length;i++)gt(Os[i],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Q0(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),zl(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),F0(n,s.value,s.defaultValue,s.children),zl(n)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||Jh(n.textContent,i)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=vr),n=!0):n=!1,n||vi(e)}function Bf(e){for(pe=e.return;pe;)switch(pe.tag){case 5:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:pe=pe.return}}function rs(e){if(e!==pe)return!1;if(!xt)return Bf(e),xt=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Su(e.type,e.memoizedProps)),i=!i),i&&_t&&vi(e),Bf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(i=e.data,i==="/$"){if(n===0){_t=We(e.nextSibling);break t}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;e=e.nextSibling}_t=null}}else n===27?(n=_t,Kn(e.type)?(e=Mu,Mu=null,_t=e):_t=n):_t=pe?We(e.stateNode.nextSibling):null;return!0}function os(){_t=pe=null,xt=!1}function _f(){var e=yi;return e!==null&&(Se===null?Se=e:Se.push.apply(Se,e),yi=null),e}function cs(e){yi===null?yi=[e]:yi.push(e)}var lc=H(null),bi=null,vn=null;function Vn(e,n,i){Z(lc,n._currentValue),n._currentValue=i}function bn(e){e._currentValue=lc.current,P(lc)}function rc(e,n,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===i)break;e=e.return}}function oc(e,n,i,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var d=o.child;c=c.firstContext;t:for(;c!==null;){var v=c;c=o;for(var S=0;S<n.length;S++)if(v.context===n[S]){c.lanes|=i,v=c.alternate,v!==null&&(v.lanes|=i),rc(c.return,i,e),s||(d=null);break t}c=v.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(r(341));d.lanes|=i,c=d.alternate,c!==null&&(c.lanes|=i),rc(d,i,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function us(e,n,i,s){e=null;for(var o=n,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var v=o.type;Me(o.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(o===Wt.current){if(d=o.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ns):e=[Ns])}o=o.return}e!==null&&oc(n,e,i,s),n.flags|=262144}function Nl(e){for(e=e.firstContext;e!==null;){if(!Me(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xi(e){bi=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function he(e){return Lf(bi,e)}function Ul(e,n){return bi===null&&xi(e),Lf(e,n)}function Lf(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},vn===null){if(e===null)throw Error(r(308));vn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else vn=vn.next=n;return i}var Y5=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},G5=t.unstable_scheduleCallback,q5=t.unstable_NormalPriority,Kt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cc(){return{controller:new Y5,data:new Map,refCount:0}}function fs(e){e.refCount--,e.refCount===0&&G5(q5,function(){e.controller.abort()})}var hs=null,uc=0,ia=0,aa=null;function X5(e,n){if(hs===null){var i=hs=[];uc=0,ia=hu(),aa={status:"pending",value:void 0,then:function(s){i.push(s)}}}return uc++,n.then(Hf,Hf),n}function Hf(){if(--uc===0&&hs!==null){aa!==null&&(aa.status="fulfilled");var e=hs;hs=null,ia=0,aa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function P5(e,n){var i=[],s={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var o=0;o<i.length;o++)(0,i[o])(n)},function(o){for(s.status="rejected",s.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),s}var Nf=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&X5(e,n),Nf!==null&&Nf(e,n)};var Si=H(null);function fc(){var e=Si.current;return e!==null?e:Ct.pooledCache}function kl(e,n){n===null?Z(Si,Si.current):Z(Si,n.pool)}function Uf(){var e=fc();return e===null?null:{parent:Kt._currentValue,pool:e}}var ds=Error(r(460)),kf=Error(r(474)),Yl=Error(r(542)),hc={then:function(){}};function Yf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gl(){}function Gf(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(Gl,Gl),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e;default:if(typeof n.status=="string")n.then(Gl,Gl);else{if(e=Ct,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=s}},function(s){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e}throw ms=n,ds}}var ms=null;function qf(){if(ms===null)throw Error(r(459));var e=ms;return ms=null,e}function Xf(e){if(e===ds||e===Yl)throw Error(r(483))}var Bn=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(zt&2)!==0){var o=s.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),s.pending=n,n=Bl(e),jf(e,null,i),n}return Vl(e,s,n,i),Bl(e)}function ps(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,L0(e,i)}}function pc(e,n){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var o=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var d={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?o=c=d:c=c.next=d,i=i.next}while(i!==null);c===null?o=c=n:c=c.next=n}else o=c=n;i={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var gc=!1;function gs(){if(gc){var e=aa;if(e!==null)throw e}}function ys(e,n,i,s){gc=!1;var o=e.updateQueue;Bn=!1;var c=o.firstBaseUpdate,d=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var S=v,D=S.next;S.next=null,d===null?c=D:d.next=D,d=S;var O=e.alternate;O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==d&&(v===null?O.firstBaseUpdate=D:v.next=D,O.lastBaseUpdate=S))}if(c!==null){var _=o.baseState;d=0,O=D=S=null,v=c;do{var C=v.lane&-536870913,j=C!==v.lane;if(j?(yt&C)===C:(s&C)===C){C!==0&&C===ia&&(gc=!0),O!==null&&(O=O.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var rt=e,at=v;C=n;var $t=i;switch(at.tag){case 1:if(rt=at.payload,typeof rt=="function"){_=rt.call($t,_,C);break t}_=rt;break t;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=at.payload,C=typeof rt=="function"?rt.call($t,_,C):rt,C==null)break t;_=y({},_,C);break t;case 2:Bn=!0}}C=v.callback,C!==null&&(e.flags|=64,j&&(e.flags|=8192),j=o.callbacks,j===null?o.callbacks=[C]:j.push(C))}else j={lane:C,tag:v.tag,payload:v.payload,callback:v.callback,next:null},O===null?(D=O=j,S=_):O=O.next=j,d|=C;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;j=v,v=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);O===null&&(S=_),o.baseState=S,o.firstBaseUpdate=D,o.lastBaseUpdate=O,c===null&&(o.shared.lanes=0),Xn|=d,e.lanes=d,e.memoizedState=_}}function Pf(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Zf(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Pf(i[e],n)}var sa=H(null),ql=H(0);function Qf(e,n){e=wn,Z(ql,e),Z(sa,n),wn=e|n.baseLanes}function yc(){Z(ql,wn),Z(sa,sa.current)}function vc(){wn=ql.current,P(sa),P(ql)}var Hn=0,ht=null,wt=null,qt=null,Xl=!1,la=!1,Ti=!1,Pl=0,vs=0,ra=null,Z5=0;function kt(){throw Error(r(321))}function bc(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Me(e[i],n[i]))return!1;return!0}function xc(e,n,i,s,o,c){return Hn=c,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?j2:R2,Ti=!1,c=i(s,o),Ti=!1,la&&(c=Ff(n,i,s,o)),Kf(e),c}function Kf(e){R.H=Wl;var n=wt!==null&&wt.next!==null;if(Hn=0,qt=wt=ht=null,Xl=!1,vs=0,ra=null,n)throw Error(r(300));e===null||te||(e=e.dependencies,e!==null&&Nl(e)&&(te=!0))}function Ff(e,n,i,s){ht=e;var o=0;do{if(la&&(ra=null),vs=0,la=!1,25<=o)throw Error(r(301));if(o+=1,qt=wt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=tp,c=n(i,s)}while(la);return c}function Q5(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?bs(n):n,e=e.useState()[0],(wt!==null?wt.memoizedState:null)!==e&&(ht.flags|=1024),n}function Sc(){var e=Pl!==0;return Pl=0,e}function Tc(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Ac(e){if(Xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xl=!1}Hn=0,qt=wt=ht=null,la=!1,vs=Pl=0,ra=null}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?ht.memoizedState=qt=e:qt=qt.next=e,qt}function Xt(){if(wt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=wt.next;var n=qt===null?ht.memoizedState:qt.next;if(n!==null)qt=n,wt=e;else{if(e===null)throw ht.alternate===null?Error(r(467)):Error(r(310));wt=e,e={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},qt===null?ht.memoizedState=qt=e:qt=qt.next=e}return qt}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bs(e){var n=vs;return vs+=1,ra===null&&(ra=[]),e=Gf(ra,e,n),n=ht,(qt===null?n.memoizedState:qt.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?j2:R2),e}function Zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bs(e);if(e.$$typeof===L)return he(e)}throw Error(r(438,String(e)))}function Mc(e){var n=null,i=ht.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=ht.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=zc(),ht.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),s=0;s<e;s++)i[s]=Nt;return n.index++,i}function xn(e,n){return typeof n=="function"?n(e):n}function Ql(e){var n=Xt();return wc(n,wt,e)}function wc(e,n,i){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=i;var o=e.baseQueue,c=s.pending;if(c!==null){if(o!==null){var d=o.next;o.next=c.next,c.next=d}n.baseQueue=o=c,s.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{n=o.next;var v=d=null,S=null,D=n,O=!1;do{var _=D.lane&-536870913;if(_!==D.lane?(yt&_)===_:(Hn&_)===_){var C=D.revertLane;if(C===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),_===ia&&(O=!0);else if((Hn&C)===C){D=D.next,C===ia&&(O=!0);continue}else _={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(v=S=_,d=c):S=S.next=_,ht.lanes|=C,Xn|=C;_=D.action,Ti&&i(c,_),c=D.hasEagerState?D.eagerState:i(c,_)}else C={lane:_,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(v=S=C,d=c):S=S.next=C,ht.lanes|=_,Xn|=_;D=D.next}while(D!==null&&D!==n);if(S===null?d=c:S.next=v,!Me(c,e.memoizedState)&&(te=!0,O&&(i=aa,i!==null)))throw i;e.memoizedState=c,e.baseState=d,e.baseQueue=S,s.lastRenderedState=c}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Ec(e){var n=Xt(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=i.dispatch,o=i.pending,c=n.memoizedState;if(o!==null){i.pending=null;var d=o=o.next;do c=e(c,d.action),d=d.next;while(d!==o);Me(c,n.memoizedState)||(te=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,s]}function Jf(e,n,i){var s=ht,o=Xt(),c=xt;if(c){if(i===void 0)throw Error(r(407));i=i()}else i=n();var d=!Me((wt||o).memoizedState,i);d&&(o.memoizedState=i,te=!0),o=o.queue;var v=t2.bind(null,s,o,e);if(xs(2048,8,v,[e]),o.getSnapshot!==n||d||qt!==null&&qt.memoizedState.tag&1){if(s.flags|=2048,oa(9,Kl(),If.bind(null,s,o,i,n),null),Ct===null)throw Error(r(349));c||(Hn&124)!==0||Wf(s,n,i)}return i}function Wf(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ht.updateQueue,n===null?(n=zc(),ht.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function If(e,n,i,s){n.value=i,n.getSnapshot=s,e2(n)&&n2(e)}function t2(e,n,i){return i(function(){e2(n)&&n2(e)})}function e2(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Me(e,i)}catch{return!0}}function n2(e){var n=Ii(e,2);n!==null&&je(n,e,2)}function $c(e){var n=be();if(typeof e=="function"){var i=e;if(e=i(),Ti){jn(!0);try{i()}finally{jn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},n}function i2(e,n,i,s){return e.baseState=i,wc(e,wt,typeof s=="function"?s:xn)}function K5(e,n,i,s,o){if(Jl(e))throw Error(r(485));if(e=n.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};R.T!==null?i(!0):c.isTransition=!1,s(c),i=n.pending,i===null?(c.next=n.pending=c,a2(n,c)):(c.next=i.next,n.pending=i.next=c)}}function a2(e,n){var i=n.action,s=n.payload,o=e.state;if(n.isTransition){var c=R.T,d={};R.T=d;try{var v=i(o,s),S=R.S;S!==null&&S(d,v),s2(e,n,v)}catch(D){Dc(e,n,D)}finally{R.T=c}}else try{c=i(o,s),s2(e,n,c)}catch(D){Dc(e,n,D)}}function s2(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){l2(e,n,s)},function(s){return Dc(e,n,s)}):l2(e,n,i)}function l2(e,n,i){n.status="fulfilled",n.value=i,r2(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,a2(e,i)))}function Dc(e,n,i){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,r2(n),n=n.next;while(n!==s)}e.action=null}function r2(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function o2(e,n){return n}function c2(e,n){if(xt){var i=Ct.formState;if(i!==null){t:{var s=ht;if(xt){if(_t){e:{for(var o=_t,c=nn;o.nodeType!==8;){if(!c){o=null;break e}if(o=We(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){_t=We(o.nextSibling),s=o.data==="F!";break t}}vi(s)}s=!1}s&&(n=i[0])}}return i=be(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o2,lastRenderedState:n},i.queue=s,i=$2.bind(null,ht,s),s.dispatch=i,s=$c(!1),c=Vc.bind(null,ht,!1,s.queue),s=be(),o={state:n,dispatch:null,action:e,pending:null},s.queue=o,i=K5.bind(null,ht,o,c,i),o.dispatch=i,s.memoizedState=e,[n,i,!1]}function u2(e){var n=Xt();return f2(n,wt,e)}function f2(e,n,i){if(n=wc(e,n,o2)[0],e=Ql(xn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=bs(n)}catch(d){throw d===ds?Yl:d}else s=n;n=Xt();var o=n.queue,c=o.dispatch;return i!==n.memoizedState&&(ht.flags|=2048,oa(9,Kl(),F5.bind(null,o,i),null)),[s,c,e]}function F5(e,n){e.action=n}function h2(e){var n=Xt(),i=wt;if(i!==null)return f2(n,i,e);Xt(),n=n.memoizedState,i=Xt();var s=i.queue.dispatch;return i.memoizedState=e,[n,s,!1]}function oa(e,n,i,s){return e={tag:e,create:i,deps:s,inst:n,next:null},n=ht.updateQueue,n===null&&(n=zc(),ht.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,n.lastEffect=e),e}function Kl(){return{destroy:void 0,resource:void 0}}function d2(){return Xt().memoizedState}function Fl(e,n,i,s){var o=be();s=s===void 0?null:s,ht.flags|=e,o.memoizedState=oa(1|n,Kl(),i,s)}function xs(e,n,i,s){var o=Xt();s=s===void 0?null:s;var c=o.memoizedState.inst;wt!==null&&s!==null&&bc(s,wt.memoizedState.deps)?o.memoizedState=oa(n,c,i,s):(ht.flags|=e,o.memoizedState=oa(1|n,c,i,s))}function m2(e,n){Fl(8390656,8,e,n)}function p2(e,n){xs(2048,8,e,n)}function g2(e,n){return xs(4,2,e,n)}function y2(e,n){return xs(4,4,e,n)}function v2(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function b2(e,n,i){i=i!=null?i.concat([e]):null,xs(4,4,v2.bind(null,n,e),i)}function Cc(){}function x2(e,n){var i=Xt();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&bc(n,s[1])?s[0]:(i.memoizedState=[e,n],e)}function S2(e,n){var i=Xt();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&bc(n,s[1]))return s[0];if(s=e(),Ti){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[s,n],s}function jc(e,n,i){return i===void 0||(Hn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=i,e=zh(),ht.lanes|=e,Xn|=e,i)}function T2(e,n,i,s){return Me(i,n)?i:sa.current!==null?(e=jc(e,i,s),Me(e,n)||(te=!0),e):(Hn&42)===0?(te=!0,e.memoizedState=i):(e=zh(),ht.lanes|=e,Xn|=e,n)}function A2(e,n,i,s,o){var c=Y.p;Y.p=c!==0&&8>c?c:8;var d=R.T,v={};R.T=v,Vc(e,!1,n,i);try{var S=o(),D=R.S;if(D!==null&&D(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var O=P5(S,s);Ss(e,n,O,Ce(e))}else Ss(e,n,s,Ce(e))}catch(_){Ss(e,n,{then:function(){},status:"rejected",reason:_},Ce())}finally{Y.p=c,R.T=d}}function J5(){}function Rc(e,n,i,s){if(e.tag!==5)throw Error(r(476));var o=z2(e).queue;A2(e,o,n,W,i===null?J5:function(){return M2(e),i(s)})}function z2(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:W},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function M2(e){var n=z2(e).next.queue;Ss(e,n,{},Ce())}function Oc(){return he(Ns)}function w2(){return Xt().memoizedState}function E2(){return Xt().memoizedState}function W5(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=Ce();e=_n(i);var s=Ln(n,e,i);s!==null&&(je(s,n,i),ps(s,n,i)),n={cache:cc()},e.payload=n;return}n=n.return}}function I5(e,n,i){var s=Ce();i={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Jl(e)?D2(n,i):(i=Io(e,n,i,s),i!==null&&(je(i,e,s),C2(i,n,s)))}function $2(e,n,i){var s=Ce();Ss(e,n,i,s)}function Ss(e,n,i,s){var o={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))D2(n,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var d=n.lastRenderedState,v=c(d,i);if(o.hasEagerState=!0,o.eagerState=v,Me(v,d))return Vl(e,n,o,0),Ct===null&&Ol(),!1}catch{}finally{}if(i=Io(e,n,o,s),i!==null)return je(i,e,s),C2(i,n,s),!0}return!1}function Vc(e,n,i,s){if(s={lane:2,revertLane:hu(),action:s,hasEagerState:!1,eagerState:null,next:null},Jl(e)){if(n)throw Error(r(479))}else n=Io(e,i,s,2),n!==null&&je(n,e,2)}function Jl(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function D2(e,n){la=Xl=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function C2(e,n,i){if((i&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,L0(e,i)}}var Wl={readContext:he,use:Zl,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},j2={readContext:he,use:Zl,useCallback:function(e,n){return be().memoizedState=[e,n===void 0?null:n],e},useContext:he,useEffect:m2,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,Fl(4194308,4,v2.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Fl(4194308,4,e,n)},useInsertionEffect:function(e,n){Fl(4,2,e,n)},useMemo:function(e,n){var i=be();n=n===void 0?null:n;var s=e();if(Ti){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[s,n],s},useReducer:function(e,n,i){var s=be();if(i!==void 0){var o=i(n);if(Ti){jn(!0);try{i(n)}finally{jn(!1)}}}else o=n;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=I5.bind(null,ht,e),[s.memoizedState,e]},useRef:function(e){var n=be();return e={current:e},n.memoizedState=e},useState:function(e){e=$c(e);var n=e.queue,i=$2.bind(null,ht,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:Cc,useDeferredValue:function(e,n){var i=be();return jc(i,e,n)},useTransition:function(){var e=$c(!1);return e=A2.bind(null,ht,e.queue,!0,!1),be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var s=ht,o=be();if(xt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),Ct===null)throw Error(r(349));(yt&124)!==0||Wf(s,n,i)}o.memoizedState=i;var c={value:i,getSnapshot:n};return o.queue=c,m2(t2.bind(null,s,c,e),[e]),s.flags|=2048,oa(9,Kl(),If.bind(null,s,c,i,n),null),i},useId:function(){var e=be(),n=Ct.identifierPrefix;if(xt){var i=yn,s=gn;i=(s&~(1<<32-ze(s)-1)).toString(32)+i,n="«"+n+"R"+i,i=Pl++,0<i&&(n+="H"+i.toString(32)),n+="»"}else i=Z5++,n="«"+n+"r"+i.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Oc,useFormState:c2,useActionState:c2,useOptimistic:function(e){var n=be();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Vc.bind(null,ht,!0,i),i.dispatch=n,[e,n]},useMemoCache:Mc,useCacheRefresh:function(){return be().memoizedState=W5.bind(null,ht)}},R2={readContext:he,use:Zl,useCallback:x2,useContext:he,useEffect:p2,useImperativeHandle:b2,useInsertionEffect:g2,useLayoutEffect:y2,useMemo:S2,useReducer:Ql,useRef:d2,useState:function(){return Ql(xn)},useDebugValue:Cc,useDeferredValue:function(e,n){var i=Xt();return T2(i,wt.memoizedState,e,n)},useTransition:function(){var e=Ql(xn)[0],n=Xt().memoizedState;return[typeof e=="boolean"?e:bs(e),n]},useSyncExternalStore:Jf,useId:w2,useHostTransitionStatus:Oc,useFormState:u2,useActionState:u2,useOptimistic:function(e,n){var i=Xt();return i2(i,wt,e,n)},useMemoCache:Mc,useCacheRefresh:E2},tp={readContext:he,use:Zl,useCallback:x2,useContext:he,useEffect:p2,useImperativeHandle:b2,useInsertionEffect:g2,useLayoutEffect:y2,useMemo:S2,useReducer:Ec,useRef:d2,useState:function(){return Ec(xn)},useDebugValue:Cc,useDeferredValue:function(e,n){var i=Xt();return wt===null?jc(i,e,n):T2(i,wt.memoizedState,e,n)},useTransition:function(){var e=Ec(xn)[0],n=Xt().memoizedState;return[typeof e=="boolean"?e:bs(e),n]},useSyncExternalStore:Jf,useId:w2,useHostTransitionStatus:Oc,useFormState:h2,useActionState:h2,useOptimistic:function(e,n){var i=Xt();return wt!==null?i2(i,wt,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:E2},ca=null,Ts=0;function Il(e){var n=Ts;return Ts+=1,ca===null&&(ca=[]),Gf(ca,e,n)}function As(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function tr(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function O2(e){var n=e._init;return n(e._payload)}function V2(e){function n(w,M){if(e){var $=w.deletions;$===null?(w.deletions=[M],w.flags|=16):$.push(M)}}function i(w,M){if(!e)return null;for(;M!==null;)n(w,M),M=M.sibling;return null}function s(w){for(var M=new Map;w!==null;)w.key!==null?M.set(w.key,w):M.set(w.index,w),w=w.sibling;return M}function o(w,M){return w=pn(w,M),w.index=0,w.sibling=null,w}function c(w,M,$){return w.index=$,e?($=w.alternate,$!==null?($=$.index,$<M?(w.flags|=67108866,M):$):(w.flags|=67108866,M)):(w.flags|=1048576,M)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function v(w,M,$,V){return M===null||M.tag!==6?(M=ec($,w.mode,V),M.return=w,M):(M=o(M,$),M.return=w,M)}function S(w,M,$,V){var J=$.type;return J===B?O(w,M,$.props.children,V,$.key):M!==null&&(M.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===tt&&O2(J)===M.type)?(M=o(M,$.props),As(M,$),M.return=w,M):(M=_l($.type,$.key,$.props,null,w.mode,V),As(M,$),M.return=w,M)}function D(w,M,$,V){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=nc($,w.mode,V),M.return=w,M):(M=o(M,$.children||[]),M.return=w,M)}function O(w,M,$,V,J){return M===null||M.tag!==7?(M=mi($,w.mode,V,J),M.return=w,M):(M=o(M,$),M.return=w,M)}function _(w,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=ec(""+M,w.mode,$),M.return=w,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case A:return $=_l(M.type,M.key,M.props,null,w.mode,$),As($,M),$.return=w,$;case E:return M=nc(M,w.mode,$),M.return=w,M;case tt:var V=M._init;return M=V(M._payload),_(w,M,$)}if(Qt(M)||Ut(M))return M=mi(M,w.mode,$,null),M.return=w,M;if(typeof M.then=="function")return _(w,Il(M),$);if(M.$$typeof===L)return _(w,Ul(w,M),$);tr(w,M)}return null}function C(w,M,$,V){var J=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return J!==null?null:v(w,M,""+$,V);if(typeof $=="object"&&$!==null){switch($.$$typeof){case A:return $.key===J?S(w,M,$,V):null;case E:return $.key===J?D(w,M,$,V):null;case tt:return J=$._init,$=J($._payload),C(w,M,$,V)}if(Qt($)||Ut($))return J!==null?null:O(w,M,$,V,null);if(typeof $.then=="function")return C(w,M,Il($),V);if($.$$typeof===L)return C(w,M,Ul(w,$),V);tr(w,$)}return null}function j(w,M,$,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return w=w.get($)||null,v(M,w,""+V,J);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case A:return w=w.get(V.key===null?$:V.key)||null,S(M,w,V,J);case E:return w=w.get(V.key===null?$:V.key)||null,D(M,w,V,J);case tt:var dt=V._init;return V=dt(V._payload),j(w,M,$,V,J)}if(Qt(V)||Ut(V))return w=w.get($)||null,O(M,w,V,J,null);if(typeof V.then=="function")return j(w,M,$,Il(V),J);if(V.$$typeof===L)return j(w,M,$,Ul(M,V),J);tr(M,V)}return null}function rt(w,M,$,V){for(var J=null,dt=null,et=M,lt=M=0,ne=null;et!==null&&lt<$.length;lt++){et.index>lt?(ne=et,et=null):ne=et.sibling;var bt=C(w,et,$[lt],V);if(bt===null){et===null&&(et=ne);break}e&&et&&bt.alternate===null&&n(w,et),M=c(bt,M,lt),dt===null?J=bt:dt.sibling=bt,dt=bt,et=ne}if(lt===$.length)return i(w,et),xt&&gi(w,lt),J;if(et===null){for(;lt<$.length;lt++)et=_(w,$[lt],V),et!==null&&(M=c(et,M,lt),dt===null?J=et:dt.sibling=et,dt=et);return xt&&gi(w,lt),J}for(et=s(et);lt<$.length;lt++)ne=j(et,w,lt,$[lt],V),ne!==null&&(e&&ne.alternate!==null&&et.delete(ne.key===null?lt:ne.key),M=c(ne,M,lt),dt===null?J=ne:dt.sibling=ne,dt=ne);return e&&et.forEach(function(ti){return n(w,ti)}),xt&&gi(w,lt),J}function at(w,M,$,V){if($==null)throw Error(r(151));for(var J=null,dt=null,et=M,lt=M=0,ne=null,bt=$.next();et!==null&&!bt.done;lt++,bt=$.next()){et.index>lt?(ne=et,et=null):ne=et.sibling;var ti=C(w,et,bt.value,V);if(ti===null){et===null&&(et=ne);break}e&&et&&ti.alternate===null&&n(w,et),M=c(ti,M,lt),dt===null?J=ti:dt.sibling=ti,dt=ti,et=ne}if(bt.done)return i(w,et),xt&&gi(w,lt),J;if(et===null){for(;!bt.done;lt++,bt=$.next())bt=_(w,bt.value,V),bt!==null&&(M=c(bt,M,lt),dt===null?J=bt:dt.sibling=bt,dt=bt);return xt&&gi(w,lt),J}for(et=s(et);!bt.done;lt++,bt=$.next())bt=j(et,w,lt,bt.value,V),bt!==null&&(e&&bt.alternate!==null&&et.delete(bt.key===null?lt:bt.key),M=c(bt,M,lt),dt===null?J=bt:dt.sibling=bt,dt=bt);return e&&et.forEach(function(eg){return n(w,eg)}),xt&&gi(w,lt),J}function $t(w,M,$,V){if(typeof $=="object"&&$!==null&&$.type===B&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case A:t:{for(var J=$.key;M!==null;){if(M.key===J){if(J=$.type,J===B){if(M.tag===7){i(w,M.sibling),V=o(M,$.props.children),V.return=w,w=V;break t}}else if(M.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===tt&&O2(J)===M.type){i(w,M.sibling),V=o(M,$.props),As(V,$),V.return=w,w=V;break t}i(w,M);break}else n(w,M);M=M.sibling}$.type===B?(V=mi($.props.children,w.mode,V,$.key),V.return=w,w=V):(V=_l($.type,$.key,$.props,null,w.mode,V),As(V,$),V.return=w,w=V)}return d(w);case E:t:{for(J=$.key;M!==null;){if(M.key===J)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){i(w,M.sibling),V=o(M,$.children||[]),V.return=w,w=V;break t}else{i(w,M);break}else n(w,M);M=M.sibling}V=nc($,w.mode,V),V.return=w,w=V}return d(w);case tt:return J=$._init,$=J($._payload),$t(w,M,$,V)}if(Qt($))return rt(w,M,$,V);if(Ut($)){if(J=Ut($),typeof J!="function")throw Error(r(150));return $=J.call($),at(w,M,$,V)}if(typeof $.then=="function")return $t(w,M,Il($),V);if($.$$typeof===L)return $t(w,M,Ul(w,$),V);tr(w,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,M!==null&&M.tag===6?(i(w,M.sibling),V=o(M,$),V.return=w,w=V):(i(w,M),V=ec($,w.mode,V),V.return=w,w=V),d(w)):i(w,M)}return function(w,M,$,V){try{Ts=0;var J=$t(w,M,$,V);return ca=null,J}catch(et){if(et===ds||et===Yl)throw et;var dt=we(29,et,null,w.mode);return dt.lanes=V,dt.return=w,dt}finally{}}}var ua=V2(!0),B2=V2(!1),ke=H(null),an=null;function Nn(e){var n=e.alternate;Z(Ft,Ft.current&1),Z(ke,e),an===null&&(n===null||sa.current!==null||n.memoizedState!==null)&&(an=e)}function _2(e){if(e.tag===22){if(Z(Ft,Ft.current),Z(ke,e),an===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(an=e)}}else Un()}function Un(){Z(Ft,Ft.current),Z(ke,ke.current)}function Sn(e){P(ke),an===e&&(an=null),P(Ft)}var Ft=H(0);function er(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||zu(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Bc(e,n,i,s){n=e.memoizedState,i=i(s,n),i=i==null?n:y({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var _c={enqueueSetState:function(e,n,i){e=e._reactInternals;var s=Ce(),o=_n(s);o.payload=n,i!=null&&(o.callback=i),n=Ln(e,o,s),n!==null&&(je(n,e,s),ps(n,e,s))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var s=Ce(),o=_n(s);o.tag=1,o.payload=n,i!=null&&(o.callback=i),n=Ln(e,o,s),n!==null&&(je(n,e,s),ps(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Ce(),s=_n(i);s.tag=2,n!=null&&(s.callback=n),n=Ln(e,s,i),n!==null&&(je(n,e,i),ps(n,e,i))}};function L2(e,n,i,s,o,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,d):n.prototype&&n.prototype.isPureReactComponent?!ss(i,s)||!ss(o,c):!0}function H2(e,n,i,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==e&&_c.enqueueReplaceState(n,n.state,null)}function Ai(e,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(e=e.defaultProps){i===n&&(i=y({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function N2(e){nr(e)}function U2(e){console.error(e)}function k2(e){nr(e)}function ir(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Y2(e,n,i){try{var s=e.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Lc(e,n,i){return i=_n(i),i.tag=3,i.payload={element:null},i.callback=function(){ir(e,n)},i}function G2(e){return e=_n(e),e.tag=3,e}function q2(e,n,i,s){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var c=s.value;e.payload=function(){return o(c)},e.callback=function(){Y2(n,i,s)}}var d=i.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Y2(n,i,s),typeof o!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function ep(e,n,i,s,o){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&us(n,i,o,!0),i=ke.current,i!==null){switch(i.tag){case 13:return an===null?ru():i.alternate===null&&Lt===0&&(Lt=3),i.flags&=-257,i.flags|=65536,i.lanes=o,s===hc?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),cu(e,s,o)),!1;case 22:return i.flags|=65536,s===hc?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),cu(e,s,o)),!1}throw Error(r(435,i.tag))}return cu(e,s,o),ru(),!1}if(xt)return n=ke.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,s!==sc&&(e=Error(r(422),{cause:s}),cs(Le(e,i)))):(s!==sc&&(n=Error(r(423),{cause:s}),cs(Le(n,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=Le(s,i),o=Lc(e.stateNode,s,o),pc(e,o),Lt!==4&&(Lt=2)),!1;var c=Error(r(520),{cause:s});if(c=Le(c,i),Cs===null?Cs=[c]:Cs.push(c),Lt!==4&&(Lt=2),n===null)return!0;s=Le(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=Lc(i.stateNode,s,e),pc(i,e),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Pn===null||!Pn.has(c))))return i.flags|=65536,o&=-o,i.lanes|=o,o=G2(o),q2(o,e,i,s),pc(i,o),!1}i=i.return}while(i!==null);return!1}var X2=Error(r(461)),te=!1;function le(e,n,i,s){n.child=e===null?B2(n,null,i,s):ua(n,e.child,i,s)}function P2(e,n,i,s,o){i=i.render;var c=n.ref;if("ref"in s){var d={};for(var v in s)v!=="ref"&&(d[v]=s[v])}else d=s;return xi(n),s=xc(e,n,i,d,c,o),v=Sc(),e!==null&&!te?(Tc(e,n,o),Tn(e,n,o)):(xt&&v&&ic(n),n.flags|=1,le(e,n,s,o),n.child)}function Z2(e,n,i,s,o){if(e===null){var c=i.type;return typeof c=="function"&&!tc(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,Q2(e,n,c,s,o)):(e=_l(i.type,null,s,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!Xc(e,o)){var d=c.memoizedProps;if(i=i.compare,i=i!==null?i:ss,i(d,s)&&e.ref===n.ref)return Tn(e,n,o)}return n.flags|=1,e=pn(c,s),e.ref=n.ref,e.return=n,n.child=e}function Q2(e,n,i,s,o){if(e!==null){var c=e.memoizedProps;if(ss(c,s)&&e.ref===n.ref)if(te=!1,n.pendingProps=s=c,Xc(e,o))(e.flags&131072)!==0&&(te=!0);else return n.lanes=e.lanes,Tn(e,n,o)}return Hc(e,n,i,s,o)}function K2(e,n,i){var s=n.pendingProps,o=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=c!==null?c.baseLanes|i:i,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;n.childLanes=c&~s}else n.childLanes=0,n.child=null;return F2(e,n,s,i)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(n,c!==null?c.cachePool:null),c!==null?Qf(n,c):yc(),_2(n);else return n.lanes=n.childLanes=536870912,F2(e,n,c!==null?c.baseLanes|i:i,i)}else c!==null?(kl(n,c.cachePool),Qf(n,c),Un(),n.memoizedState=null):(e!==null&&kl(n,null),yc(),Un());return le(e,n,o,i),n.child}function F2(e,n,i,s){var o=fc();return o=o===null?null:{parent:Kt._currentValue,pool:o},n.memoizedState={baseLanes:i,cachePool:o},e!==null&&kl(n,null),yc(),_2(n),e!==null&&us(e,n,s,!0),null}function ar(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function Hc(e,n,i,s,o){return xi(n),i=xc(e,n,i,s,void 0,o),s=Sc(),e!==null&&!te?(Tc(e,n,o),Tn(e,n,o)):(xt&&s&&ic(n),n.flags|=1,le(e,n,i,o),n.child)}function J2(e,n,i,s,o,c){return xi(n),n.updateQueue=null,i=Ff(n,s,i,o),Kf(e),s=Sc(),e!==null&&!te?(Tc(e,n,c),Tn(e,n,c)):(xt&&s&&ic(n),n.flags|=1,le(e,n,i,c),n.child)}function W2(e,n,i,s,o){if(xi(n),n.stateNode===null){var c=ta,d=i.contextType;typeof d=="object"&&d!==null&&(c=he(d)),c=new i(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=_c,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},dc(n),d=i.contextType,c.context=typeof d=="object"&&d!==null?he(d):ta,c.state=n.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(Bc(n,i,d,s),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&_c.enqueueReplaceState(c,c.state,null),ys(n,s,c,o),gs(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){c=n.stateNode;var v=n.memoizedProps,S=Ai(i,v);c.props=S;var D=c.context,O=i.contextType;d=ta,typeof O=="object"&&O!==null&&(d=he(O));var _=i.getDerivedStateFromProps;O=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||D!==d)&&H2(n,c,s,d),Bn=!1;var C=n.memoizedState;c.state=C,ys(n,s,c,o),gs(),D=n.memoizedState,v||C!==D||Bn?(typeof _=="function"&&(Bc(n,i,_,s),D=n.memoizedState),(S=Bn||L2(n,i,S,s,C,D,d))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=D),c.props=s,c.state=D,c.context=d,s=S):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,mc(e,n),d=n.memoizedProps,O=Ai(i,d),c.props=O,_=n.pendingProps,C=c.context,D=i.contextType,S=ta,typeof D=="object"&&D!==null&&(S=he(D)),v=i.getDerivedStateFromProps,(D=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==_||C!==S)&&H2(n,c,s,S),Bn=!1,C=n.memoizedState,c.state=C,ys(n,s,c,o),gs();var j=n.memoizedState;d!==_||C!==j||Bn||e!==null&&e.dependencies!==null&&Nl(e.dependencies)?(typeof v=="function"&&(Bc(n,i,v,s),j=n.memoizedState),(O=Bn||L2(n,i,O,s,C,j,S)||e!==null&&e.dependencies!==null&&Nl(e.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,j,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,j,S)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=j),c.props=s,c.state=j,c.context=S,s=O):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),s=!1)}return c=s,ar(e,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&s?(n.child=ua(n,e.child,null,o),n.child=ua(n,null,i,o)):le(e,n,i,o),n.memoizedState=c.state,e=n.child):e=Tn(e,n,o),e}function I2(e,n,i,s){return os(),n.flags|=256,le(e,n,i,s),n.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:Uf()}}function kc(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=Ye),e}function th(e,n,i){var s=n.pendingProps,o=!1,c=(n.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(Ft.current&2)!==0),d&&(o=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(o?Nn(n):Un(),xt){var v=_t,S;if(S=v){t:{for(S=v,v=nn;S.nodeType!==8;){if(!v){v=null;break t}if(S=We(S.nextSibling),S===null){v=null;break t}}v=S}v!==null?(n.memoizedState={dehydrated:v,treeContext:pi!==null?{id:gn,overflow:yn}:null,retryLane:536870912,hydrationErrors:null},S=we(18,null,null,0),S.stateNode=v,S.return=n,n.child=S,pe=n,_t=null,S=!0):S=!1}S||vi(n)}if(v=n.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return zu(v)?n.lanes=32:n.lanes=536870912,null;Sn(n)}return v=s.children,s=s.fallback,o?(Un(),o=n.mode,v=sr({mode:"hidden",children:v},o),s=mi(s,o,i,null),v.return=n,s.return=n,v.sibling=s,n.child=v,o=n.child,o.memoizedState=Uc(i),o.childLanes=kc(e,d,i),n.memoizedState=Nc,s):(Nn(n),Yc(n,v))}if(S=e.memoizedState,S!==null&&(v=S.dehydrated,v!==null)){if(c)n.flags&256?(Nn(n),n.flags&=-257,n=Gc(e,n,i)):n.memoizedState!==null?(Un(),n.child=e.child,n.flags|=128,n=null):(Un(),o=s.fallback,v=n.mode,s=sr({mode:"visible",children:s.children},v),o=mi(o,v,i,null),o.flags|=2,s.return=n,o.return=n,s.sibling=o,n.child=s,ua(n,e.child,null,i),s=n.child,s.memoizedState=Uc(i),s.childLanes=kc(e,d,i),n.memoizedState=Nc,n=o);else if(Nn(n),zu(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var D=d.dgst;d=D,s=Error(r(419)),s.stack="",s.digest=d,cs({value:s,source:null,stack:null}),n=Gc(e,n,i)}else if(te||us(e,n,i,!1),d=(i&e.childLanes)!==0,te||d){if(d=Ct,d!==null&&(s=i&-i,s=(s&42)!==0?1:Mo(s),s=(s&(d.suspendedLanes|i))!==0?0:s,s!==0&&s!==S.retryLane))throw S.retryLane=s,Ii(e,s),je(d,e,s),X2;v.data==="$?"||ru(),n=Gc(e,n,i)}else v.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=S.treeContext,_t=We(v.nextSibling),pe=n,xt=!0,yi=null,nn=!1,e!==null&&(Ne[Ue++]=gn,Ne[Ue++]=yn,Ne[Ue++]=pi,gn=e.id,yn=e.overflow,pi=n),n=Yc(n,s.children),n.flags|=4096);return n}return o?(Un(),o=s.fallback,v=n.mode,S=e.child,D=S.sibling,s=pn(S,{mode:"hidden",children:s.children}),s.subtreeFlags=S.subtreeFlags&65011712,D!==null?o=pn(D,o):(o=mi(o,v,i,null),o.flags|=2),o.return=n,s.return=n,s.sibling=o,n.child=s,s=o,o=n.child,v=e.child.memoizedState,v===null?v=Uc(i):(S=v.cachePool,S!==null?(D=Kt._currentValue,S=S.parent!==D?{parent:D,pool:D}:S):S=Uf(),v={baseLanes:v.baseLanes|i,cachePool:S}),o.memoizedState=v,o.childLanes=kc(e,d,i),n.memoizedState=Nc,s):(Nn(n),i=e.child,e=i.sibling,i=pn(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=i,n.memoizedState=null,i)}function Yc(e,n){return n=sr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function sr(e,n){return e=we(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Gc(e,n,i){return ua(n,e.child,null,i),e=Yc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eh(e,n,i){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),rc(e.return,n,i)}function qc(e,n,i,s,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:o}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=i,c.tailMode=o)}function nh(e,n,i){var s=n.pendingProps,o=s.revealOrder,c=s.tail;if(le(e,n,s.children,i),s=Ft.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,i,n);else if(e.tag===19)eh(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Z(Ft,s),o){case"forwards":for(i=n.child,o=null;i!==null;)e=i.alternate,e!==null&&er(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=n.child,n.child=null):(o=i.sibling,i.sibling=null),qc(n,!1,o,i,c);break;case"backwards":for(i=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&er(e)===null){n.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}qc(n,!0,i,null,c);break;case"together":qc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(us(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=pn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=pn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Xc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Nl(e)))}function np(e,n,i){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Vn(n,Kt,e.memoizedState.cache),os();break;case 27:case 5:oi(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Vn(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Nn(n),n.flags|=128,null):(i&n.child.childLanes)!==0?th(e,n,i):(Nn(n),e=Tn(e,n,i),e!==null?e.sibling:null);Nn(n);break;case 19:var o=(e.flags&128)!==0;if(s=(i&n.childLanes)!==0,s||(us(e,n,i,!1),s=(i&n.childLanes)!==0),o){if(s)return nh(e,n,i);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(Ft,Ft.current),s)break;return null;case 22:case 23:return n.lanes=0,K2(e,n,i);case 24:Vn(n,Kt,e.memoizedState.cache)}return Tn(e,n,i)}function ih(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)te=!0;else{if(!Xc(e,i)&&(n.flags&128)===0)return te=!1,np(e,n,i);te=(e.flags&131072)!==0}else te=!1,xt&&(n.flags&1048576)!==0&&Of(n,Hl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,o=s._init;if(s=o(s._payload),n.type=s,typeof s=="function")tc(s)?(e=Ai(s,e),n.tag=1,n=W2(null,n,s,e,i)):(n.tag=0,n=Hc(null,n,s,e,i));else{if(s!=null){if(o=s.$$typeof,o===F){n.tag=11,n=P2(null,n,s,e,i);break t}else if(o===Q){n.tag=14,n=Z2(null,n,s,e,i);break t}}throw n=Oe(s)||s,Error(r(306,n,""))}}return n;case 0:return Hc(e,n,n.type,n.pendingProps,i);case 1:return s=n.type,o=Ai(s,n.pendingProps),W2(e,n,s,o,i);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;o=c.element,mc(e,n),ys(n,s,null,i);var d=n.memoizedState;if(s=d.cache,Vn(n,Kt,s),s!==c.cache&&oc(n,[Kt],i,!0),gs(),s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=I2(e,n,s,i);break t}else if(s!==o){o=Le(Error(r(424)),n),cs(o),n=I2(e,n,s,i);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_t=We(e.firstChild),pe=n,xt=!0,yi=null,nn=!0,i=B2(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(os(),s===o){n=Tn(e,n,i);break t}le(e,n,s,i)}n=n.child}return n;case 26:return ar(e,n),e===null?(i=rd(n.type,null,n.pendingProps,null))?n.memoizedState=i:xt||(i=n.type,e=n.pendingProps,s=br(st.current).createElement(i),s[fe]=n,s[ye]=e,oe(s,i,e),It(s),n.stateNode=s):n.memoizedState=rd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return oi(n),e===null&&xt&&(s=n.stateNode=ad(n.type,n.pendingProps,st.current),pe=n,nn=!0,o=_t,Kn(n.type)?(Mu=o,_t=We(s.firstChild)):_t=o),le(e,n,n.pendingProps.children,i),ar(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((o=s=_t)&&(s=Cp(s,n.type,n.pendingProps,nn),s!==null?(n.stateNode=s,pe=n,_t=We(s.firstChild),nn=!1,o=!0):o=!1),o||vi(n)),oi(n),o=n.type,c=n.pendingProps,d=e!==null?e.memoizedProps:null,s=c.children,Su(o,c)?s=null:d!==null&&Su(o,d)&&(n.flags|=32),n.memoizedState!==null&&(o=xc(e,n,Q5,null,null,i),Ns._currentValue=o),ar(e,n),le(e,n,s,i),n.child;case 6:return e===null&&xt&&((e=i=_t)&&(i=jp(i,n.pendingProps,nn),i!==null?(n.stateNode=i,pe=n,_t=null,e=!0):e=!1),e||vi(n)),null;case 13:return th(e,n,i);case 4:return Tt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ua(n,null,s,i):le(e,n,s,i),n.child;case 11:return P2(e,n,n.type,n.pendingProps,i);case 7:return le(e,n,n.pendingProps,i),n.child;case 8:return le(e,n,n.pendingProps.children,i),n.child;case 12:return le(e,n,n.pendingProps.children,i),n.child;case 10:return s=n.pendingProps,Vn(n,n.type,s.value),le(e,n,s.children,i),n.child;case 9:return o=n.type._context,s=n.pendingProps.children,xi(n),o=he(o),s=s(o),n.flags|=1,le(e,n,s,i),n.child;case 14:return Z2(e,n,n.type,n.pendingProps,i);case 15:return Q2(e,n,n.type,n.pendingProps,i);case 19:return nh(e,n,i);case 31:return s=n.pendingProps,i=n.mode,s={mode:s.mode,children:s.children},e===null?(i=sr(s,i),i.ref=n.ref,n.child=i,i.return=n,n=i):(i=pn(e.child,s),i.ref=n.ref,n.child=i,i.return=n,n=i),n;case 22:return K2(e,n,i);case 24:return xi(n),s=he(Kt),e===null?(o=fc(),o===null&&(o=Ct,c=cc(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=i),o=c),n.memoizedState={parent:s,cache:o},dc(n),Vn(n,Kt,o)):((e.lanes&i)!==0&&(mc(e,n),ys(n,null,null,i),gs()),o=e.memoizedState,c=n.memoizedState,o.parent!==s?(o={parent:s,cache:s},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Vn(n,Kt,s)):(s=c.cache,Vn(n,Kt,s),s!==o.cache&&oc(n,[Kt],i,!0))),le(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function An(e){e.flags|=4}function ah(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hd(n)){if(n=ke.current,n!==null&&((yt&4194048)===yt?an!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==an))throw ms=hc,kf;e.flags|=8192}}function lr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?B0():536870912,e.lanes|=n,ma|=n)}function zs(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ot(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(n)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=i,n}function ip(e,n,i){var s=n.pendingProps;switch(ac(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(n),null;case 1:return Ot(n),null;case 3:return i=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),bn(Kt),ue(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(rs(n)?An(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_f())),Ot(n),null;case 26:return i=n.memoizedState,e===null?(An(n),i!==null?(Ot(n),ah(n,i)):(Ot(n),n.flags&=-16777217)):i?i!==e.memoizedState?(An(n),Ot(n),ah(n,i)):(Ot(n),n.flags&=-16777217):(e.memoizedProps!==s&&An(n),Ot(n),n.flags&=-16777217),null;case 27:hn(n),i=st.current;var o=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&An(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ot(n),null}e=nt.current,rs(n)?Vf(n):(e=ad(o,s,i),n.stateNode=e,An(n))}return Ot(n),null;case 5:if(hn(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&An(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ot(n),null}if(e=nt.current,rs(n))Vf(n);else{switch(o=br(st.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?o.createElement(i,{is:s.is}):o.createElement(i)}}e[fe]=n,e[ye]=s;t:for(o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break t;for(;o.sibling===null;){if(o.return===null||o.return===n)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}n.stateNode=e;t:switch(oe(e,i,s),i){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&An(n)}}return Ot(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&An(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=st.current,rs(n)){if(e=n.stateNode,i=n.memoizedProps,s=null,o=pe,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[fe]=n,e=!!(e.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||Jh(e.nodeValue,i)),e||vi(n)}else e=br(e).createTextNode(s),e[fe]=n,n.stateNode=e}return Ot(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=rs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[fe]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ot(n),o=!1}else o=_f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Sn(n),n):(Sn(n),null)}if(Sn(n),(n.flags&128)!==0)return n.lanes=i,n;if(i=s!==null,e=e!==null&&e.memoizedState!==null,i){s=n.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool);var c=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048)}return i!==e&&i&&(n.child.flags|=8192),lr(n,n.updateQueue),Ot(n),null;case 4:return ue(),e===null&&gu(n.stateNode.containerInfo),Ot(n),null;case 10:return bn(n.type),Ot(n),null;case 19:if(P(Ft),o=n.memoizedState,o===null)return Ot(n),null;if(s=(n.flags&128)!==0,c=o.rendering,c===null)if(s)zs(o,!1);else{if(Lt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=er(e),c!==null){for(n.flags|=128,zs(o,!1),e=c.updateQueue,n.updateQueue=e,lr(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)Rf(i,e),i=i.sibling;return Z(Ft,Ft.current&1|2),n.child}e=e.sibling}o.tail!==null&&en()>cr&&(n.flags|=128,s=!0,zs(o,!1),n.lanes=4194304)}else{if(!s)if(e=er(c),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,lr(n,e),zs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Ot(n),null}else 2*en()-o.renderingStartTime>cr&&i!==536870912&&(n.flags|=128,s=!0,zs(o,!1),n.lanes=4194304);o.isBackwards?(c.sibling=n.child,n.child=c):(e=o.last,e!==null?e.sibling=c:n.child=c,o.last=c)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=en(),n.sibling=null,e=Ft.current,Z(Ft,s?e&1|2:e&1),n):(Ot(n),null);case 22:case 23:return Sn(n),vc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(Ot(n),n.subtreeFlags&6&&(n.flags|=8192)):Ot(n),i=n.updateQueue,i!==null&&lr(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),e!==null&&P(Si),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),bn(Kt),Ot(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ap(e,n){switch(ac(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bn(Kt),ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return hn(n),null;case 13:if(Sn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return P(Ft),null;case 4:return ue(),null;case 10:return bn(n.type),null;case 22:case 23:return Sn(n),vc(),e!==null&&P(Si),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return bn(Kt),null;case 25:return null;default:return null}}function sh(e,n){switch(ac(n),n.tag){case 3:bn(Kt),ue();break;case 26:case 27:case 5:hn(n);break;case 4:ue();break;case 13:Sn(n);break;case 19:P(Ft);break;case 10:bn(n.type);break;case 22:case 23:Sn(n),vc(),e!==null&&P(Si);break;case 24:bn(Kt)}}function Ms(e,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var o=s.next;i=o;do{if((i.tag&e)===e){s=void 0;var c=i.create,d=i.inst;s=c(),d.destroy=s}i=i.next}while(i!==o)}}catch(v){Dt(n,n.return,v)}}function kn(e,n,i){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){var d=s.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,o=n;var S=i,D=v;try{D()}catch(O){Dt(o,S,O)}}}s=s.next}while(s!==c)}}catch(O){Dt(n,n.return,O)}}function lh(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{Zf(n,i)}catch(s){Dt(e,e.return,s)}}}function rh(e,n,i){i.props=Ai(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(s){Dt(e,n,s)}}function ws(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof i=="function"?e.refCleanup=i(s):i.current=s}}catch(o){Dt(e,n,o)}}function sn(e,n){var i=e.ref,s=e.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(o){Dt(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){Dt(e,n,o)}else i.current=null}function oh(e){var n=e.type,i=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(o){Dt(e,e.return,o)}}function Pc(e,n,i){try{var s=e.stateNode;Mp(s,e.type,i,n),s[ye]=n}catch(o){Dt(e,e.return,o)}}function ch(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function Zc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=vr));else if(s!==4&&(s===27&&Kn(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(Qc(e,n,i),e=e.sibling;e!==null;)Qc(e,n,i),e=e.sibling}function rr(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(s!==4&&(s===27&&Kn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(rr(e,n,i),e=e.sibling;e!==null;)rr(e,n,i),e=e.sibling}function uh(e){var n=e.stateNode,i=e.memoizedProps;try{for(var s=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);oe(n,s,i),n[fe]=e,n[ye]=i}catch(c){Dt(e,e.return,c)}}var zn=!1,Yt=!1,Kc=!1,fh=typeof WeakSet=="function"?WeakSet:Set,ee=null;function sp(e,n){if(e=e.containerInfo,bu=Mr,e=Tf(e),Zo(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var o=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break t}var d=0,v=-1,S=-1,D=0,O=0,_=e,C=null;e:for(;;){for(var j;_!==i||o!==0&&_.nodeType!==3||(v=d+o),_!==c||s!==0&&_.nodeType!==3||(S=d+s),_.nodeType===3&&(d+=_.nodeValue.length),(j=_.firstChild)!==null;)C=_,_=j;for(;;){if(_===e)break e;if(C===i&&++D===o&&(v=d),C===c&&++O===s&&(S=d),(j=_.nextSibling)!==null)break;_=C,C=_.parentNode}_=j}i=v===-1||S===-1?null:{start:v,end:S}}else i=null}i=i||{start:0,end:0}}else i=null;for(xu={focusedElem:e,selectionRange:i},Mr=!1,ee=n;ee!==null;)if(n=ee,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,ee=e;else for(;ee!==null;){switch(n=ee,c=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,i=n,o=c.memoizedProps,c=c.memoizedState,s=i.stateNode;try{var rt=Ai(i.type,o,i.elementType===i.type);e=s.getSnapshotBeforeUpdate(rt,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(at){Dt(i,i.return,at)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Au(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Au(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,ee=e;break}ee=n.return}}function hh(e,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Yn(e,i),s&4&&Ms(5,i);break;case 1:if(Yn(e,i),s&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(d){Dt(i,i.return,d)}else{var o=Ai(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Dt(i,i.return,d)}}s&64&&lh(i),s&512&&ws(i,i.return);break;case 3:if(Yn(e,i),s&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Zf(e,n)}catch(d){Dt(i,i.return,d)}}break;case 27:n===null&&s&4&&uh(i);case 26:case 5:Yn(e,i),n===null&&s&4&&oh(i),s&512&&ws(i,i.return);break;case 12:Yn(e,i);break;case 13:Yn(e,i),s&4&&ph(e,i),s&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=mp.bind(null,i),Rp(e,i))));break;case 22:if(s=i.memoizedState!==null||zn,!s){n=n!==null&&n.memoizedState!==null||Yt,o=zn;var c=Yt;zn=s,(Yt=n)&&!c?Gn(e,i,(i.subtreeFlags&8772)!==0):Yn(e,i),zn=o,Yt=c}break;case 30:break;default:Yn(e,i)}}function dh(e){var n=e.alternate;n!==null&&(e.alternate=null,dh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$o(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Rt=null,xe=!1;function Mn(e,n,i){for(i=i.child;i!==null;)mh(e,n,i),i=i.sibling}function mh(e,n,i){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Za,i)}catch{}switch(i.tag){case 26:Yt||sn(i,n),Mn(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Yt||sn(i,n);var s=Rt,o=xe;Kn(i.type)&&(Rt=i.stateNode,xe=!1),Mn(e,n,i),Bs(i.stateNode),Rt=s,xe=o;break;case 5:Yt||sn(i,n);case 6:if(s=Rt,o=xe,Rt=null,Mn(e,n,i),Rt=s,xe=o,Rt!==null)if(xe)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(i.stateNode)}catch(c){Dt(i,n,c)}else try{Rt.removeChild(i.stateNode)}catch(c){Dt(i,n,c)}break;case 18:Rt!==null&&(xe?(e=Rt,nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Gs(e)):nd(Rt,i.stateNode));break;case 4:s=Rt,o=xe,Rt=i.stateNode.containerInfo,xe=!0,Mn(e,n,i),Rt=s,xe=o;break;case 0:case 11:case 14:case 15:Yt||kn(2,i,n),Yt||kn(4,i,n),Mn(e,n,i);break;case 1:Yt||(sn(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&rh(i,n,s)),Mn(e,n,i);break;case 21:Mn(e,n,i);break;case 22:Yt=(s=Yt)||i.memoizedState!==null,Mn(e,n,i),Yt=s;break;default:Mn(e,n,i)}}function ph(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gs(e)}catch(i){Dt(n,n.return,i)}}function lp(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fh),n;default:throw Error(r(435,e.tag))}}function Fc(e,n){var i=lp(e);n.forEach(function(s){var o=pp.bind(null,e,s);i.has(s)||(i.add(s),s.then(o,o))})}function Ee(e,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var o=i[s],c=e,d=n,v=d;t:for(;v!==null;){switch(v.tag){case 27:if(Kn(v.type)){Rt=v.stateNode,xe=!1;break t}break;case 5:Rt=v.stateNode,xe=!1;break t;case 3:case 4:Rt=v.stateNode.containerInfo,xe=!0;break t}v=v.return}if(Rt===null)throw Error(r(160));mh(c,d,o),Rt=null,xe=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)gh(n,e),n=n.sibling}var Je=null;function gh(e,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ee(n,e),$e(e),s&4&&(kn(3,e,e.return),Ms(3,e),kn(5,e,e.return));break;case 1:Ee(n,e),$e(e),s&512&&(Yt||i===null||sn(i,i.return)),s&64&&zn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var o=Je;if(Ee(n,e),$e(e),s&512&&(Yt||i===null||sn(i,i.return)),s&4){var c=i!==null?i.memoizedState:null;if(s=e.memoizedState,i===null)if(s===null)if(e.stateNode===null){t:{s=e.type,i=e.memoizedProps,o=o.ownerDocument||o;e:switch(s){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Fa]||c[fe]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(s),o.head.insertBefore(c,o.querySelector("head > title"))),oe(c,s,i),c[fe]=e,It(c),s=c;break t;case"link":var d=ud("link","href",o).get(s+(i.href||""));if(d){for(var v=0;v<d.length;v++)if(c=d[v],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){d.splice(v,1);break e}}c=o.createElement(s),oe(c,s,i),o.head.appendChild(c);break;case"meta":if(d=ud("meta","content",o).get(s+(i.content||""))){for(v=0;v<d.length;v++)if(c=d[v],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){d.splice(v,1);break e}}c=o.createElement(s),oe(c,s,i),o.head.appendChild(c);break;default:throw Error(r(468,s))}c[fe]=e,It(c),s=c}e.stateNode=s}else fd(o,e.type,e.stateNode);else e.stateNode=cd(o,s,e.memoizedProps);else c!==s?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,s===null?fd(o,e.type,e.stateNode):cd(o,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Pc(e,e.memoizedProps,i.memoizedProps)}break;case 27:Ee(n,e),$e(e),s&512&&(Yt||i===null||sn(i,i.return)),i!==null&&s&4&&Pc(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Ee(n,e),$e(e),s&512&&(Yt||i===null||sn(i,i.return)),e.flags&32){o=e.stateNode;try{Pi(o,"")}catch(j){Dt(e,e.return,j)}}s&4&&e.stateNode!=null&&(o=e.memoizedProps,Pc(e,o,i!==null?i.memoizedProps:o)),s&1024&&(Kc=!0);break;case 6:if(Ee(n,e),$e(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,i=e.stateNode;try{i.nodeValue=s}catch(j){Dt(e,e.return,j)}}break;case 3:if(Tr=null,o=Je,Je=xr(n.containerInfo),Ee(n,e),Je=o,$e(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(j){Dt(e,e.return,j)}Kc&&(Kc=!1,yh(e));break;case 4:s=Je,Je=xr(e.stateNode.containerInfo),Ee(n,e),$e(e),Je=s;break;case 12:Ee(n,e),$e(e);break;case 13:Ee(n,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(nu=en()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Fc(e,s)));break;case 22:o=e.memoizedState!==null;var S=i!==null&&i.memoizedState!==null,D=zn,O=Yt;if(zn=D||o,Yt=O||S,Ee(n,e),Yt=O,zn=D,$e(e),s&8192)t:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(i===null||S||zn||Yt||zi(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){S=i=n;try{if(c=S.stateNode,o)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=S.stateNode;var _=S.memoizedProps.style,C=_!=null&&_.hasOwnProperty("display")?_.display:null;v.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(j){Dt(S,S.return,j)}}}else if(n.tag===6){if(i===null){S=n;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch(j){Dt(S,S.return,j)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,Fc(e,i))));break;case 19:Ee(n,e),$e(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Fc(e,s)));break;case 30:break;case 21:break;default:Ee(n,e),$e(e)}}function $e(e){var n=e.flags;if(n&2){try{for(var i,s=e.return;s!==null;){if(ch(s)){i=s;break}s=s.return}if(i==null)throw Error(r(160));switch(i.tag){case 27:var o=i.stateNode,c=Zc(e);rr(e,c,o);break;case 5:var d=i.stateNode;i.flags&32&&(Pi(d,""),i.flags&=-33);var v=Zc(e);rr(e,v,d);break;case 3:case 4:var S=i.stateNode.containerInfo,D=Zc(e);Qc(e,D,S);break;default:throw Error(r(161))}}catch(O){Dt(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hh(e,n.alternate,n),n=n.sibling}function zi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:kn(4,n,n.return),zi(n);break;case 1:sn(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&rh(n,n.return,i),zi(n);break;case 27:Bs(n.stateNode);case 26:case 5:sn(n,n.return),zi(n);break;case 22:n.memoizedState===null&&zi(n);break;case 30:zi(n);break;default:zi(n)}e=e.sibling}}function Gn(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,o=e,c=n,d=c.flags;switch(c.tag){case 0:case 11:case 15:Gn(o,c,i),Ms(4,c);break;case 1:if(Gn(o,c,i),s=c,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){Dt(s,s.return,D)}if(s=c,o=s.updateQueue,o!==null){var v=s.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)Pf(S[o],v)}catch(D){Dt(s,s.return,D)}}i&&d&64&&lh(c),ws(c,c.return);break;case 27:uh(c);case 26:case 5:Gn(o,c,i),i&&s===null&&d&4&&oh(c),ws(c,c.return);break;case 12:Gn(o,c,i);break;case 13:Gn(o,c,i),i&&d&4&&ph(o,c);break;case 22:c.memoizedState===null&&Gn(o,c,i),ws(c,c.return);break;case 30:break;default:Gn(o,c,i)}n=n.sibling}}function Jc(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&fs(i))}function Wc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fs(e))}function ln(e,n,i,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vh(e,n,i,s),n=n.sibling}function vh(e,n,i,s){var o=n.flags;switch(n.tag){case 0:case 11:case 15:ln(e,n,i,s),o&2048&&Ms(9,n);break;case 1:ln(e,n,i,s);break;case 3:ln(e,n,i,s),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fs(e)));break;case 12:if(o&2048){ln(e,n,i,s),e=n.stateNode;try{var c=n.memoizedProps,d=c.id,v=c.onPostCommit;typeof v=="function"&&v(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Dt(n,n.return,S)}}else ln(e,n,i,s);break;case 13:ln(e,n,i,s);break;case 23:break;case 22:c=n.stateNode,d=n.alternate,n.memoizedState!==null?c._visibility&2?ln(e,n,i,s):Es(e,n):c._visibility&2?ln(e,n,i,s):(c._visibility|=2,fa(e,n,i,s,(n.subtreeFlags&10256)!==0)),o&2048&&Jc(d,n);break;case 24:ln(e,n,i,s),o&2048&&Wc(n.alternate,n);break;default:ln(e,n,i,s)}}function fa(e,n,i,s,o){for(o=o&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var c=e,d=n,v=i,S=s,D=d.flags;switch(d.tag){case 0:case 11:case 15:fa(c,d,v,S,o),Ms(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?fa(c,d,v,S,o):Es(c,d):(O._visibility|=2,fa(c,d,v,S,o)),o&&D&2048&&Jc(d.alternate,d);break;case 24:fa(c,d,v,S,o),o&&D&2048&&Wc(d.alternate,d);break;default:fa(c,d,v,S,o)}n=n.sibling}}function Es(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,s=n,o=s.flags;switch(s.tag){case 22:Es(i,s),o&2048&&Jc(s.alternate,s);break;case 24:Es(i,s),o&2048&&Wc(s.alternate,s);break;default:Es(i,s)}n=n.sibling}}var $s=8192;function ha(e){if(e.subtreeFlags&$s)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 26:ha(e),e.flags&$s&&e.memoizedState!==null&&Xp(Je,e.memoizedState,e.memoizedProps);break;case 5:ha(e);break;case 3:case 4:var n=Je;Je=xr(e.stateNode.containerInfo),ha(e),Je=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=$s,$s=16777216,ha(e),$s=n):ha(e));break;default:ha(e)}}function xh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ds(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];ee=s,Th(s,e)}xh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sh(e),e=e.sibling}function Sh(e){switch(e.tag){case 0:case 11:case 15:Ds(e),e.flags&2048&&kn(9,e,e.return);break;case 3:Ds(e);break;case 12:Ds(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,or(e)):Ds(e);break;default:Ds(e)}}function or(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];ee=s,Th(s,e)}xh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:kn(8,n,n.return),or(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,or(n));break;default:or(n)}e=e.sibling}}function Th(e,n){for(;ee!==null;){var i=ee;switch(i.tag){case 0:case 11:case 15:kn(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:fs(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,ee=s;else t:for(i=e;ee!==null;){s=ee;var o=s.sibling,c=s.return;if(dh(s),s===i){ee=null;break t}if(o!==null){o.return=c,ee=o;break t}ee=c}}}var rp={getCacheForType:function(e){var n=he(Kt),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i}},op=typeof WeakMap=="function"?WeakMap:Map,zt=0,Ct=null,pt=null,yt=0,Mt=0,De=null,qn=!1,da=!1,Ic=!1,wn=0,Lt=0,Xn=0,Mi=0,tu=0,Ye=0,ma=0,Cs=null,Se=null,eu=!1,nu=0,cr=1/0,ur=null,Pn=null,re=0,Zn=null,pa=null,ga=0,iu=0,au=null,Ah=null,js=0,su=null;function Ce(){if((zt&2)!==0&&yt!==0)return yt&-yt;if(R.T!==null){var e=ia;return e!==0?e:hu()}return H0()}function zh(){Ye===0&&(Ye=(yt&536870912)===0||xt?V0():536870912);var e=ke.current;return e!==null&&(e.flags|=32),Ye}function je(e,n,i){(e===Ct&&(Mt===2||Mt===9)||e.cancelPendingCommit!==null)&&(ya(e,0),Qn(e,yt,Ye,!1)),Ka(e,i),((zt&2)===0||e!==Ct)&&(e===Ct&&((zt&2)===0&&(Mi|=i),Lt===4&&Qn(e,yt,Ye,!1)),rn(e))}function Mh(e,n,i){if((zt&6)!==0)throw Error(r(327));var s=!i&&(n&124)===0&&(n&e.expiredLanes)===0||Qa(e,n),o=s?fp(e,n):ou(e,n,!0),c=s;do{if(o===0){da&&!s&&Qn(e,n,0,!1);break}else{if(i=e.current.alternate,c&&!cp(i)){o=ou(e,n,!1),c=!1;continue}if(o===2){if(c=n,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;t:{var v=e;o=Cs;var S=v.current.memoizedState.isDehydrated;if(S&&(ya(v,d).flags|=256),d=ou(v,d,!1),d!==2){if(Ic&&!S){v.errorRecoveryDisabledLanes|=c,Mi|=c,o=4;break t}c=Se,Se=o,c!==null&&(Se===null?Se=c:Se.push.apply(Se,c))}o=d}if(c=!1,o!==2)continue}}if(o===1){ya(e,0),Qn(e,n,0,!0);break}t:{switch(s=e,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Qn(s,n,Ye,!qn);break t;case 2:Se=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(o=nu+300-en(),10<o)){if(Qn(s,n,Ye,!qn),Sl(s,0,!0)!==0)break t;s.timeoutHandle=td(wh.bind(null,s,i,Se,ur,eu,n,Ye,Mi,ma,qn,c,2,-0,0),o);break t}wh(s,i,Se,ur,eu,n,Ye,Mi,ma,qn,c,0,-0,0)}}break}while(!0);rn(e)}function wh(e,n,i,s,o,c,d,v,S,D,O,_,C,j){if(e.timeoutHandle=-1,_=n.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Hs={stylesheets:null,count:0,unsuspend:qp},bh(n),_=Pp(),_!==null)){e.cancelPendingCommit=_(Oh.bind(null,e,n,c,i,s,o,d,v,S,O,1,C,j)),Qn(e,c,d,!D);return}Oh(e,n,c,i,s,o,d,v,S)}function cp(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var o=i[s],c=o.getSnapshot;o=o.value;try{if(!Me(c(),o))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qn(e,n,i,s){n&=~tu,n&=~Mi,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var o=n;0<o;){var c=31-ze(o),d=1<<c;s[c]=-1,o&=~d}i!==0&&_0(e,i,n)}function fr(){return(zt&6)===0?(Rs(0),!1):!0}function lu(){if(pt!==null){if(Mt===0)var e=pt.return;else e=pt,vn=bi=null,Ac(e),ca=null,Ts=0,e=pt;for(;e!==null;)sh(e.alternate,e),e=e.return;pt=null}}function ya(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Ep(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),lu(),Ct=e,pt=i=pn(e.current,null),yt=n,Mt=0,De=null,qn=!1,da=Qa(e,n),Ic=!1,ma=Ye=tu=Mi=Xn=Lt=0,Se=Cs=null,eu=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var o=31-ze(s),c=1<<o;n|=e[o],s&=~c}return wn=n,Ol(),i}function Eh(e,n){ht=null,R.H=Wl,n===ds||n===Yl?(n=qf(),Mt=3):n===kf?(n=qf(),Mt=4):Mt=n===X2?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,De=n,pt===null&&(Lt=1,ir(e,Le(n,e.current)))}function $h(){var e=R.H;return R.H=Wl,e===null?Wl:e}function Dh(){var e=R.A;return R.A=rp,e}function ru(){Lt=4,qn||(yt&4194048)!==yt&&ke.current!==null||(da=!0),(Xn&134217727)===0&&(Mi&134217727)===0||Ct===null||Qn(Ct,yt,Ye,!1)}function ou(e,n,i){var s=zt;zt|=2;var o=$h(),c=Dh();(Ct!==e||yt!==n)&&(ur=null,ya(e,n)),n=!1;var d=Lt;t:do try{if(Mt!==0&&pt!==null){var v=pt,S=De;switch(Mt){case 8:lu(),d=6;break t;case 3:case 2:case 9:case 6:ke.current===null&&(n=!0);var D=Mt;if(Mt=0,De=null,va(e,v,S,D),i&&da){d=0;break t}break;default:D=Mt,Mt=0,De=null,va(e,v,S,D)}}up(),d=Lt;break}catch(O){Eh(e,O)}while(!0);return n&&e.shellSuspendCounter++,vn=bi=null,zt=s,R.H=o,R.A=c,pt===null&&(Ct=null,yt=0,Ol()),d}function up(){for(;pt!==null;)Ch(pt)}function fp(e,n){var i=zt;zt|=2;var s=$h(),o=Dh();Ct!==e||yt!==n?(ur=null,cr=en()+500,ya(e,n)):da=Qa(e,n);t:do try{if(Mt!==0&&pt!==null){n=pt;var c=De;e:switch(Mt){case 1:Mt=0,De=null,va(e,n,c,1);break;case 2:case 9:if(Yf(c)){Mt=0,De=null,jh(n);break}n=function(){Mt!==2&&Mt!==9||Ct!==e||(Mt=7),rn(e)},c.then(n,n);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Yf(c)?(Mt=0,De=null,jh(n)):(Mt=0,De=null,va(e,n,c,7));break;case 5:var d=null;switch(pt.tag){case 26:d=pt.memoizedState;case 5:case 27:var v=pt;if(!d||hd(d)){Mt=0,De=null;var S=v.sibling;if(S!==null)pt=S;else{var D=v.return;D!==null?(pt=D,hr(D)):pt=null}break e}}Mt=0,De=null,va(e,n,c,5);break;case 6:Mt=0,De=null,va(e,n,c,6);break;case 8:lu(),Lt=6;break t;default:throw Error(r(462))}}hp();break}catch(O){Eh(e,O)}while(!0);return vn=bi=null,R.H=s,R.A=o,zt=i,pt!==null?0:(Ct=null,yt=0,Ol(),Lt)}function hp(){for(;pt!==null&&!V6();)Ch(pt)}function Ch(e){var n=ih(e.alternate,e,wn);e.memoizedProps=e.pendingProps,n===null?hr(e):pt=n}function jh(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=J2(i,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=J2(i,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Ac(n);default:sh(i,n),n=pt=Rf(n,wn),n=ih(i,n,wn)}e.memoizedProps=e.pendingProps,n===null?hr(e):pt=n}function va(e,n,i,s){vn=bi=null,Ac(n),ca=null,Ts=0;var o=n.return;try{if(ep(e,o,n,i,yt)){Lt=1,ir(e,Le(i,e.current)),pt=null;return}}catch(c){if(o!==null)throw pt=o,c;Lt=1,ir(e,Le(i,e.current)),pt=null;return}n.flags&32768?(xt||s===1?e=!0:da||(yt&536870912)!==0?e=!1:(qn=e=!0,(s===2||s===9||s===3||s===6)&&(s=ke.current,s!==null&&s.tag===13&&(s.flags|=16384))),Rh(n,e)):hr(n)}function hr(e){var n=e;do{if((n.flags&32768)!==0){Rh(n,qn);return}e=n.return;var i=ip(n.alternate,n,wn);if(i!==null){pt=i;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);Lt===0&&(Lt=5)}function Rh(e,n){do{var i=ap(e.alternate,e);if(i!==null){i.flags&=32767,pt=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=i}while(e!==null);Lt=6,pt=null}function Oh(e,n,i,s,o,c,d,v,S){e.cancelPendingCommit=null;do dr();while(re!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(c=n.lanes|n.childLanes,c|=Wo,q6(e,i,c,d,v,S),e===Ct&&(pt=Ct=null,yt=0),pa=n,Zn=e,ga=i,iu=c,au=o,Ah=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gp(vl,function(){return Hh(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=R.T,R.T=null,o=Y.p,Y.p=2,d=zt,zt|=4;try{sp(e,n,i)}finally{zt=d,Y.p=o,R.T=s}}re=1,Vh(),Bh(),_h()}}function Vh(){if(re===1){re=0;var e=Zn,n=pa,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var s=Y.p;Y.p=2;var o=zt;zt|=4;try{gh(n,e);var c=xu,d=Tf(e.containerInfo),v=c.focusedElem,S=c.selectionRange;if(d!==v&&v&&v.ownerDocument&&Sf(v.ownerDocument.documentElement,v)){if(S!==null&&Zo(v)){var D=S.start,O=S.end;if(O===void 0&&(O=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(O,v.value.length);else{var _=v.ownerDocument||document,C=_&&_.defaultView||window;if(C.getSelection){var j=C.getSelection(),rt=v.textContent.length,at=Math.min(S.start,rt),$t=S.end===void 0?at:Math.min(S.end,rt);!j.extend&&at>$t&&(d=$t,$t=at,at=d);var w=xf(v,at),M=xf(v,$t);if(w&&M&&(j.rangeCount!==1||j.anchorNode!==w.node||j.anchorOffset!==w.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var $=_.createRange();$.setStart(w.node,w.offset),j.removeAllRanges(),at>$t?(j.addRange($),j.extend(M.node,M.offset)):($.setEnd(M.node,M.offset),j.addRange($))}}}}for(_=[],j=v;j=j.parentNode;)j.nodeType===1&&_.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<_.length;v++){var V=_[v];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Mr=!!bu,xu=bu=null}finally{zt=o,Y.p=s,R.T=i}}e.current=n,re=2}}function Bh(){if(re===2){re=0;var e=Zn,n=pa,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var s=Y.p;Y.p=2;var o=zt;zt|=4;try{hh(e,n.alternate,n)}finally{zt=o,Y.p=s,R.T=i}}re=3}}function _h(){if(re===4||re===3){re=0,B6();var e=Zn,n=pa,i=ga,s=Ah;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?re=5:(re=0,pa=Zn=null,Lh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Pn=null),wo(i),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Za,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=R.T,o=Y.p,Y.p=2,R.T=null;try{for(var c=e.onRecoverableError,d=0;d<s.length;d++){var v=s[d];c(v.value,{componentStack:v.stack})}}finally{R.T=n,Y.p=o}}(ga&3)!==0&&dr(),rn(e),o=e.pendingLanes,(i&4194090)!==0&&(o&42)!==0?e===su?js++:(js=0,su=e):js=0,Rs(0)}}function Lh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fs(n)))}function dr(e){return Vh(),Bh(),_h(),Hh()}function Hh(){if(re!==5)return!1;var e=Zn,n=iu;iu=0;var i=wo(ga),s=R.T,o=Y.p;try{Y.p=32>i?32:i,R.T=null,i=au,au=null;var c=Zn,d=ga;if(re=0,pa=Zn=null,ga=0,(zt&6)!==0)throw Error(r(331));var v=zt;if(zt|=4,Sh(c.current),vh(c,c.current,d,i),zt=v,Rs(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Za,c)}catch{}return!0}finally{Y.p=o,R.T=s,Lh(e,n)}}function Nh(e,n,i){n=Le(i,n),n=Lc(e.stateNode,n,2),e=Ln(e,n,2),e!==null&&(Ka(e,2),rn(e))}function Dt(e,n,i){if(e.tag===3)Nh(e,e,i);else for(;n!==null;){if(n.tag===3){Nh(n,e,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pn===null||!Pn.has(s))){e=Le(i,e),i=G2(2),s=Ln(n,i,2),s!==null&&(q2(i,s,n,e),Ka(s,2),rn(s));break}}n=n.return}}function cu(e,n,i){var s=e.pingCache;if(s===null){s=e.pingCache=new op;var o=new Set;s.set(n,o)}else o=s.get(n),o===void 0&&(o=new Set,s.set(n,o));o.has(i)||(Ic=!0,o.add(i),e=dp.bind(null,e,n,i),n.then(e,e))}function dp(e,n,i){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ct===e&&(yt&i)===i&&(Lt===4||Lt===3&&(yt&62914560)===yt&&300>en()-nu?(zt&2)===0&&ya(e,0):tu|=i,ma===yt&&(ma=0)),rn(e)}function Uh(e,n){n===0&&(n=B0()),e=Ii(e,n),e!==null&&(Ka(e,n),rn(e))}function mp(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Uh(e,i)}function pp(e,n){var i=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Uh(e,i)}function gp(e,n){return To(e,n)}var mr=null,ba=null,uu=!1,pr=!1,fu=!1,wi=0;function rn(e){e!==ba&&e.next===null&&(ba===null?mr=ba=e:ba=ba.next=e),pr=!0,uu||(uu=!0,vp())}function Rs(e,n){if(!fu&&pr){fu=!0;do for(var i=!1,s=mr;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var c=0;else{var d=s.suspendedLanes,v=s.pingedLanes;c=(1<<31-ze(42|e)+1)-1,c&=o&~(d&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,qh(s,c))}else c=yt,c=Sl(s,s===Ct?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Qa(s,c)||(i=!0,qh(s,c));s=s.next}while(i);fu=!1}}function yp(){kh()}function kh(){pr=uu=!1;var e=0;wi!==0&&(wp()&&(e=wi),wi=0);for(var n=en(),i=null,s=mr;s!==null;){var o=s.next,c=Yh(s,n);c===0?(s.next=null,i===null?mr=o:i.next=o,o===null&&(ba=i)):(i=s,(e!==0||(c&3)!==0)&&(pr=!0)),s=o}Rs(e)}function Yh(e,n){for(var i=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-ze(c),v=1<<d,S=o[d];S===-1?((v&i)===0||(v&s)!==0)&&(o[d]=G6(v,n)):S<=n&&(e.expiredLanes|=v),c&=~v}if(n=Ct,i=yt,i=Sl(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,i===0||e===n&&(Mt===2||Mt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ao(s),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Qa(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(s!==null&&Ao(s),wo(i)){case 2:case 8:i=R0;break;case 32:i=vl;break;case 268435456:i=O0;break;default:i=vl}return s=Gh.bind(null,e),i=To(i,s),e.callbackPriority=n,e.callbackNode=i,n}return s!==null&&s!==null&&Ao(s),e.callbackPriority=2,e.callbackNode=null,2}function Gh(e,n){if(re!==0&&re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(dr()&&e.callbackNode!==i)return null;var s=yt;return s=Sl(e,e===Ct?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Mh(e,s,n),Yh(e,en()),e.callbackNode!=null&&e.callbackNode===i?Gh.bind(null,e):null)}function qh(e,n){if(dr())return null;Mh(e,n,!0)}function vp(){$p(function(){(zt&6)!==0?To(j0,yp):kh()})}function hu(){return wi===0&&(wi=V0()),wi}function Xh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wl(""+e)}function Ph(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function bp(e,n,i,s,o){if(n==="submit"&&i&&i.stateNode===o){var c=Xh((o[ye]||null).action),d=s.submitter;d&&(n=(n=d[ye]||null)?Xh(n.formAction):d.getAttribute("formAction"),n!==null&&(c=n,d=null));var v=new Cl("action","action",null,s,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(wi!==0){var S=d?Ph(o,d):new FormData(o);Rc(i,{pending:!0,data:S,method:o.method,action:c},null,S)}}else typeof c=="function"&&(v.preventDefault(),S=d?Ph(o,d):new FormData(o),Rc(i,{pending:!0,data:S,method:o.method,action:c},c,S))},currentTarget:o}]})}}for(var du=0;du<Jo.length;du++){var mu=Jo[du],xp=mu.toLowerCase(),Sp=mu[0].toUpperCase()+mu.slice(1);Fe(xp,"on"+Sp)}Fe(Mf,"onAnimationEnd"),Fe(wf,"onAnimationIteration"),Fe(Ef,"onAnimationStart"),Fe("dblclick","onDoubleClick"),Fe("focusin","onFocus"),Fe("focusout","onBlur"),Fe(H5,"onTransitionRun"),Fe(N5,"onTransitionStart"),Fe(U5,"onTransitionCancel"),Fe($f,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Os));function Zh(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],o=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var d=s.length-1;0<=d;d--){var v=s[d],S=v.instance,D=v.currentTarget;if(v=v.listener,S!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=D;try{c(o)}catch(O){nr(O)}o.currentTarget=null,c=S}else for(d=0;d<s.length;d++){if(v=s[d],S=v.instance,D=v.currentTarget,v=v.listener,S!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=D;try{c(o)}catch(O){nr(O)}o.currentTarget=null,c=S}}}}function gt(e,n){var i=n[Eo];i===void 0&&(i=n[Eo]=new Set);var s=e+"__bubble";i.has(s)||(Qh(n,e,2,!1),i.add(s))}function pu(e,n,i){var s=0;n&&(s|=4),Qh(i,e,s,n)}var gr="_reactListening"+Math.random().toString(36).slice(2);function gu(e){if(!e[gr]){e[gr]=!0,U0.forEach(function(i){i!=="selectionchange"&&(Tp.has(i)||pu(i,!1,e),pu(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[gr]||(n[gr]=!0,pu("selectionchange",!1,n))}}function Qh(e,n,i,s){switch(vd(n)){case 2:var o=Kp;break;case 8:o=Fp;break;default:o=Cu}i=o.bind(null,n,i,e),o=void 0,!Ho||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(n,i,{capture:!0,passive:o}):e.addEventListener(n,i,!0):o!==void 0?e.addEventListener(n,i,{passive:o}):e.addEventListener(n,i,!1)}function yu(e,n,i,s,o){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var v=s.stateNode.containerInfo;if(v===o)break;if(d===4)for(d=s.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;v!==null;){if(d=Ui(v),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){s=c=d;continue t}v=v.parentNode}}s=s.return}tf(function(){var D=c,O=_o(i),_=[];t:{var C=Df.get(e);if(C!==void 0){var j=Cl,rt=e;switch(e){case"keypress":if($l(i)===0)break t;case"keydown":case"keyup":j=g5;break;case"focusin":rt="focus",j=Yo;break;case"focusout":rt="blur",j=Yo;break;case"beforeblur":case"afterblur":j=Yo;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=a5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=b5;break;case Mf:case wf:case Ef:j=r5;break;case $f:j=S5;break;case"scroll":case"scrollend":j=n5;break;case"wheel":j=A5;break;case"copy":case"cut":case"paste":j=c5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=lf;break;case"toggle":case"beforetoggle":j=M5}var at=(n&4)!==0,$t=!at&&(e==="scroll"||e==="scrollend"),w=at?C!==null?C+"Capture":null:C;at=[];for(var M=D,$;M!==null;){var V=M;if($=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||$===null||w===null||(V=Wa(M,w),V!=null&&at.push(Vs(M,V,$))),$t)break;M=M.return}0<at.length&&(C=new j(C,rt,null,i,O),_.push({event:C,listeners:at}))}}if((n&7)===0){t:{if(C=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",C&&i!==Bo&&(rt=i.relatedTarget||i.fromElement)&&(Ui(rt)||rt[Ni]))break t;if((j||C)&&(C=O.window===O?O:(C=O.ownerDocument)?C.defaultView||C.parentWindow:window,j?(rt=i.relatedTarget||i.toElement,j=D,rt=rt?Ui(rt):null,rt!==null&&($t=f(rt),at=rt.tag,rt!==$t||at!==5&&at!==27&&at!==6)&&(rt=null)):(j=null,rt=D),j!==rt)){if(at=af,V="onMouseLeave",w="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(at=lf,V="onPointerLeave",w="onPointerEnter",M="pointer"),$t=j==null?C:Ja(j),$=rt==null?C:Ja(rt),C=new at(V,M+"leave",j,i,O),C.target=$t,C.relatedTarget=$,V=null,Ui(O)===D&&(at=new at(w,M+"enter",rt,i,O),at.target=$,at.relatedTarget=$t,V=at),$t=V,j&&rt)e:{for(at=j,w=rt,M=0,$=at;$;$=xa($))M++;for($=0,V=w;V;V=xa(V))$++;for(;0<M-$;)at=xa(at),M--;for(;0<$-M;)w=xa(w),$--;for(;M--;){if(at===w||w!==null&&at===w.alternate)break e;at=xa(at),w=xa(w)}at=null}else at=null;j!==null&&Kh(_,C,j,at,!1),rt!==null&&$t!==null&&Kh(_,$t,rt,at,!0)}}t:{if(C=D?Ja(D):window,j=C.nodeName&&C.nodeName.toLowerCase(),j==="select"||j==="input"&&C.type==="file")var J=mf;else if(hf(C))if(pf)J=B5;else{J=O5;var dt=R5}else j=C.nodeName,!j||j.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Vo(D.elementType)&&(J=mf):J=V5;if(J&&(J=J(e,D))){df(_,J,i,O);break t}dt&&dt(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Oo(C,"number",C.value)}switch(dt=D?Ja(D):window,e){case"focusin":(hf(dt)||dt.contentEditable==="true")&&(Fi=dt,Qo=D,ls=null);break;case"focusout":ls=Qo=Fi=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,Af(_,i,O);break;case"selectionchange":if(L5)break;case"keydown":case"keyup":Af(_,i,O)}var et;if(qo)t:{switch(e){case"compositionstart":var lt="onCompositionStart";break t;case"compositionend":lt="onCompositionEnd";break t;case"compositionupdate":lt="onCompositionUpdate";break t}lt=void 0}else Ki?uf(e,i)&&(lt="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(lt="onCompositionStart");lt&&(rf&&i.locale!=="ko"&&(Ki||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Ki&&(et=ef()):(On=O,No="value"in On?On.value:On.textContent,Ki=!0)),dt=yr(D,lt),0<dt.length&&(lt=new sf(lt,e,null,i,O),_.push({event:lt,listeners:dt}),et?lt.data=et:(et=ff(i),et!==null&&(lt.data=et)))),(et=E5?$5(e,i):D5(e,i))&&(lt=yr(D,"onBeforeInput"),0<lt.length&&(dt=new sf("onBeforeInput","beforeinput",null,i,O),_.push({event:dt,listeners:lt}),dt.data=et)),bp(_,e,D,i,O)}Zh(_,n)})}function Vs(e,n,i){return{instance:e,listener:n,currentTarget:i}}function yr(e,n){for(var i=n+"Capture",s=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Wa(e,i),o!=null&&s.unshift(Vs(e,o,c)),o=Wa(e,n),o!=null&&s.push(Vs(e,o,c))),e.tag===3)return s;e=e.return}return[]}function xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kh(e,n,i,s,o){for(var c=n._reactName,d=[];i!==null&&i!==s;){var v=i,S=v.alternate,D=v.stateNode;if(v=v.tag,S!==null&&S===s)break;v!==5&&v!==26&&v!==27||D===null||(S=D,o?(D=Wa(i,c),D!=null&&d.unshift(Vs(i,D,S))):o||(D=Wa(i,c),D!=null&&d.push(Vs(i,D,S)))),i=i.return}d.length!==0&&e.push({event:n,listeners:d})}var Ap=/\r\n?/g,zp=/\u0000|\uFFFD/g;function Fh(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(zp,"")}function Jh(e,n){return n=Fh(n),Fh(e)===n}function vr(){}function Et(e,n,i,s,o,c){switch(i){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pi(e,""+s);break;case"className":Al(e,"class",s);break;case"tabIndex":Al(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Al(e,i,s);break;case"style":W0(e,s,c);break;case"data":if(n!=="object"){Al(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=wl(""+s),e.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&Et(e,n,"name",o.name,o,null),Et(e,n,"formEncType",o.formEncType,o,null),Et(e,n,"formMethod",o.formMethod,o,null),Et(e,n,"formTarget",o.formTarget,o,null)):(Et(e,n,"encType",o.encType,o,null),Et(e,n,"method",o.method,o,null),Et(e,n,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=wl(""+s),e.setAttribute(i,s);break;case"onClick":s!=null&&(e.onclick=vr);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}i=wl(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""+s):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":s===!0?e.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,s):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(i,s):e.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(i):e.setAttribute(i,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),Tl(e,"popover",s);break;case"xlinkActuate":dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":dn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":dn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":dn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":dn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tl(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=t5.get(i)||i,Tl(e,i,s))}}function vu(e,n,i,s,o,c){switch(i){case"style":W0(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"children":typeof s=="string"?Pi(e,s):(typeof s=="number"||typeof s=="bigint")&&Pi(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=vr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!k0.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),n=i.slice(2,o?i.length-7:void 0),c=e[ye]||null,c=c!=null?c[i]:null,typeof c=="function"&&e.removeEventListener(n,c,o),typeof s=="function")){typeof c!="function"&&c!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,s,o);break t}i in e?e[i]=s:s===!0?e.setAttribute(i,""):Tl(e,i,s)}}}function oe(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,o=!1,c;for(c in i)if(i.hasOwnProperty(c)){var d=i[c];if(d!=null)switch(c){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Et(e,n,c,d,i,null)}}o&&Et(e,n,"srcSet",i.srcSet,i,null),s&&Et(e,n,"src",i.src,i,null);return;case"input":gt("invalid",e);var v=c=d=o=null,S=null,D=null;for(s in i)if(i.hasOwnProperty(s)){var O=i[s];if(O!=null)switch(s){case"name":o=O;break;case"type":d=O;break;case"checked":S=O;break;case"defaultChecked":D=O;break;case"value":c=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:Et(e,n,s,O,i,null)}}Q0(e,c,v,S,D,d,o,!1),zl(e);return;case"select":gt("invalid",e),s=d=c=null;for(o in i)if(i.hasOwnProperty(o)&&(v=i[o],v!=null))switch(o){case"value":c=v;break;case"defaultValue":d=v;break;case"multiple":s=v;default:Et(e,n,o,v,i,null)}n=c,i=d,e.multiple=!!s,n!=null?Xi(e,!!s,n,!1):i!=null&&Xi(e,!!s,i,!0);return;case"textarea":gt("invalid",e),c=o=s=null;for(d in i)if(i.hasOwnProperty(d)&&(v=i[d],v!=null))switch(d){case"value":s=v;break;case"defaultValue":o=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(91));break;default:Et(e,n,d,v,i,null)}F0(e,s,o,c),zl(e);return;case"option":for(S in i)if(i.hasOwnProperty(S)&&(s=i[S],s!=null))switch(S){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Et(e,n,S,s,i,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<Os.length;s++)gt(Os[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in i)if(i.hasOwnProperty(D)&&(s=i[D],s!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Et(e,n,D,s,i,null)}return;default:if(Vo(n)){for(O in i)i.hasOwnProperty(O)&&(s=i[O],s!==void 0&&vu(e,n,O,s,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(s=i[v],s!=null&&Et(e,n,v,s,i,null))}function Mp(e,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,d=null,v=null,S=null,D=null,O=null;for(j in i){var _=i[j];if(i.hasOwnProperty(j)&&_!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":S=_;default:s.hasOwnProperty(j)||Et(e,n,j,null,s,_)}}for(var C in s){var j=s[C];if(_=i[C],s.hasOwnProperty(C)&&(j!=null||_!=null))switch(C){case"type":c=j;break;case"name":o=j;break;case"checked":D=j;break;case"defaultChecked":O=j;break;case"value":d=j;break;case"defaultValue":v=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:j!==_&&Et(e,n,C,j,s,_)}}Ro(e,d,v,S,D,O,c,o);return;case"select":j=d=v=C=null;for(c in i)if(S=i[c],i.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":j=S;default:s.hasOwnProperty(c)||Et(e,n,c,null,s,S)}for(o in s)if(c=s[o],S=i[o],s.hasOwnProperty(o)&&(c!=null||S!=null))switch(o){case"value":C=c;break;case"defaultValue":v=c;break;case"multiple":d=c;default:c!==S&&Et(e,n,o,c,s,S)}n=v,i=d,s=j,C!=null?Xi(e,!!i,C,!1):!!s!=!!i&&(n!=null?Xi(e,!!i,n,!0):Xi(e,!!i,i?[]:"",!1));return;case"textarea":j=C=null;for(v in i)if(o=i[v],i.hasOwnProperty(v)&&o!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Et(e,n,v,null,s,o)}for(d in s)if(o=s[d],c=i[d],s.hasOwnProperty(d)&&(o!=null||c!=null))switch(d){case"value":C=o;break;case"defaultValue":j=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&Et(e,n,d,o,s,c)}K0(e,C,j);return;case"option":for(var rt in i)if(C=i[rt],i.hasOwnProperty(rt)&&C!=null&&!s.hasOwnProperty(rt))switch(rt){case"selected":e.selected=!1;break;default:Et(e,n,rt,null,s,C)}for(S in s)if(C=s[S],j=i[S],s.hasOwnProperty(S)&&C!==j&&(C!=null||j!=null))switch(S){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Et(e,n,S,C,s,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in i)C=i[at],i.hasOwnProperty(at)&&C!=null&&!s.hasOwnProperty(at)&&Et(e,n,at,null,s,C);for(D in s)if(C=s[D],j=i[D],s.hasOwnProperty(D)&&C!==j&&(C!=null||j!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,n));break;default:Et(e,n,D,C,s,j)}return;default:if(Vo(n)){for(var $t in i)C=i[$t],i.hasOwnProperty($t)&&C!==void 0&&!s.hasOwnProperty($t)&&vu(e,n,$t,void 0,s,C);for(O in s)C=s[O],j=i[O],!s.hasOwnProperty(O)||C===j||C===void 0&&j===void 0||vu(e,n,O,C,s,j);return}}for(var w in i)C=i[w],i.hasOwnProperty(w)&&C!=null&&!s.hasOwnProperty(w)&&Et(e,n,w,null,s,C);for(_ in s)C=s[_],j=i[_],!s.hasOwnProperty(_)||C===j||C==null&&j==null||Et(e,n,_,C,s,j)}var bu=null,xu=null;function br(e){return e.nodeType===9?e:e.ownerDocument}function Wh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ih(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Su(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tu=null;function wp(){var e=window.event;return e&&e.type==="popstate"?e===Tu?!1:(Tu=e,!0):(Tu=null,!1)}var td=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,$p=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(Dp)}:td;function Dp(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function nd(e,n){var i=n,s=0,o=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(0<s&&8>s){i=s;var d=e.ownerDocument;if(i&1&&Bs(d.documentElement),i&2&&Bs(d.body),i&4)for(i=d.head,Bs(i),d=i.firstChild;d;){var v=d.nextSibling,S=d.nodeName;d[Fa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&d.rel.toLowerCase()==="stylesheet"||i.removeChild(d),d=v}}if(o===0){e.removeChild(c),Gs(n);return}o--}else i==="$"||i==="$?"||i==="$!"?o++:s=i.charCodeAt(0)-48;else s=0;i=c}while(i);Gs(n)}function Au(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Au(i),$o(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Cp(e,n,i,s){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=We(e.nextSibling),e===null)break}return null}function jp(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=We(e.nextSibling),e===null))return null;return e}function zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Rp(e,n){var i=e.ownerDocument;if(e.data!=="$?"||i.readyState==="complete")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function We(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Mu=null;function id(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}function ad(e,n,i){switch(n=br(i),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Bs(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$o(e)}var Ge=new Map,sd=new Set;function xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var En=Y.d;Y.d={f:Op,r:Vp,D:Bp,C:_p,L:Lp,m:Hp,X:Up,S:Np,M:kp};function Op(){var e=En.f(),n=fr();return e||n}function Vp(e){var n=ki(e);n!==null&&n.tag===5&&n.type==="form"?M2(n):En.r(e)}var Sa=typeof document>"u"?null:document;function ld(e,n,i){var s=Sa;if(s&&typeof n=="string"&&n){var o=_e(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),sd.has(o)||(sd.add(o),e={rel:e,crossOrigin:i,href:n},s.querySelector(o)===null&&(n=s.createElement("link"),oe(n,"link",e),It(n),s.head.appendChild(n)))}}function Bp(e){En.D(e),ld("dns-prefetch",e,null)}function _p(e,n){En.C(e,n),ld("preconnect",e,n)}function Lp(e,n,i){En.L(e,n,i);var s=Sa;if(s&&e&&n){var o='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+_e(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+_e(i.imageSizes)+'"]')):o+='[href="'+_e(e)+'"]';var c=o;switch(n){case"style":c=Ta(e);break;case"script":c=Aa(e)}Ge.has(c)||(e=y({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Ge.set(c,e),s.querySelector(o)!==null||n==="style"&&s.querySelector(_s(c))||n==="script"&&s.querySelector(Ls(c))||(n=s.createElement("link"),oe(n,"link",e),It(n),s.head.appendChild(n)))}}function Hp(e,n){En.m(e,n);var i=Sa;if(i&&e){var s=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+_e(s)+'"][href="'+_e(e)+'"]',c=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Aa(e)}if(!Ge.has(c)&&(e=y({rel:"modulepreload",href:e},n),Ge.set(c,e),i.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ls(c)))return}s=i.createElement("link"),oe(s,"link",e),It(s),i.head.appendChild(s)}}}function Np(e,n,i){En.S(e,n,i);var s=Sa;if(s&&e){var o=Yi(s).hoistableStyles,c=Ta(e);n=n||"default";var d=o.get(c);if(!d){var v={loading:0,preload:null};if(d=s.querySelector(_s(c)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Ge.get(c))&&wu(e,i);var S=d=s.createElement("link");It(S),oe(S,"link",e),S._p=new Promise(function(D,O){S.onload=D,S.onerror=O}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Sr(d,n,s)}d={type:"stylesheet",instance:d,count:1,state:v},o.set(c,d)}}}function Up(e,n){En.X(e,n);var i=Sa;if(i&&e){var s=Yi(i).hoistableScripts,o=Aa(e),c=s.get(o);c||(c=i.querySelector(Ls(o)),c||(e=y({src:e,async:!0},n),(n=Ge.get(o))&&Eu(e,n),c=i.createElement("script"),It(c),oe(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function kp(e,n){En.M(e,n);var i=Sa;if(i&&e){var s=Yi(i).hoistableScripts,o=Aa(e),c=s.get(o);c||(c=i.querySelector(Ls(o)),c||(e=y({src:e,async:!0,type:"module"},n),(n=Ge.get(o))&&Eu(e,n),c=i.createElement("script"),It(c),oe(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function rd(e,n,i,s){var o=(o=st.current)?xr(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Ta(i.href),i=Yi(o).hoistableStyles,s=i.get(n),s||(s={type:"style",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ta(i.href);var c=Yi(o).hoistableStyles,d=c.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=o.querySelector(_s(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Ge.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ge.set(e,i),c||Yp(o,e,i,d.state))),n&&s===null)throw Error(r(528,""));return d}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Aa(i),i=Yi(o).hoistableScripts,s=i.get(n),s||(s={type:"script",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ta(e){return'href="'+_e(e)+'"'}function _s(e){return'link[rel="stylesheet"]['+e+"]"}function od(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Yp(e,n,i,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),oe(n,"link",i),It(n),e.head.appendChild(n))}function Aa(e){return'[src="'+_e(e)+'"]'}function Ls(e){return"script[async]"+e}function cd(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_e(i.href)+'"]');if(s)return n.instance=s,It(s),s;var o=y({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),It(s),oe(s,"style",o),Sr(s,i.precedence,e),n.instance=s;case"stylesheet":o=Ta(i.href);var c=e.querySelector(_s(o));if(c)return n.state.loading|=4,n.instance=c,It(c),c;s=od(i),(o=Ge.get(o))&&wu(s,o),c=(e.ownerDocument||e).createElement("link"),It(c);var d=c;return d._p=new Promise(function(v,S){d.onload=v,d.onerror=S}),oe(c,"link",s),n.state.loading|=4,Sr(c,i.precedence,e),n.instance=c;case"script":return c=Aa(i.src),(o=e.querySelector(Ls(c)))?(n.instance=o,It(o),o):(s=i,(o=Ge.get(c))&&(s=y({},i),Eu(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),It(o),oe(o,"link",s),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Sr(s,i.precedence,e));return n.instance}function Sr(e,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,c=o,d=0;d<s.length;d++){var v=s[d];if(v.dataset.precedence===n)c=v;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function wu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Eu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Tr=null;function ud(e,n,i){if(Tr===null){var s=new Map,o=Tr=new Map;o.set(i,s)}else o=Tr,s=o.get(i),s||(s=new Map,o.set(i,s));if(s.has(e))return s;for(s.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var c=i[o];if(!(c[Fa]||c[fe]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(n)||"";d=e+d;var v=s.get(d);v?v.push(c):s.set(d,[c])}}return s}function fd(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function Gp(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Hs=null;function qp(){}function Xp(e,n,i){if(Hs===null)throw Error(r(475));var s=Hs;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Ta(i.href),c=e.querySelector(_s(o));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Ar.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=c,It(c);return}c=e.ownerDocument||e,i=od(i),(o=Ge.get(o))&&wu(i,o),c=c.createElement("link"),It(c);var d=c;d._p=new Promise(function(v,S){d.onload=v,d.onerror=S}),oe(c,"link",i),n.instance=c}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ar.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Pp(){if(Hs===null)throw Error(r(475));var e=Hs;return e.stylesheets&&e.count===0&&$u(e,e.stylesheets),0<e.count?function(n){var i=setTimeout(function(){if(e.stylesheets&&$u(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i)}}:null}function Ar(){if(this.count--,this.count===0){if(this.stylesheets)$u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zr=null;function $u(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zr=new Map,n.forEach(Zp,e),zr=null,Ar.call(e))}function Zp(e,n){if(!(n.state.loading&4)){var i=zr.get(e);if(i)var s=i.get(null);else{i=new Map,zr.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var d=o[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(i.set(d.dataset.precedence,d),s=d)}s&&i.set(null,s)}o=n.instance,d=o.getAttribute("data-precedence"),c=i.get(d)||s,c===s&&i.set(null,o),i.set(d,o),this.count++,s=Ar.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var Ns={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Qp(e,n,i,s,o,c,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function dd(e,n,i,s,o,c,d,v,S,D,O,_){return e=new Qp(e,n,i,d,v,S,D,_),n=1,c===!0&&(n|=24),c=we(3,null,null,n),e.current=c,c.stateNode=e,n=cc(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:i,cache:n},dc(c),e}function md(e){return e?(e=ta,e):ta}function pd(e,n,i,s,o,c){o=md(o),s.context===null?s.context=o:s.pendingContext=o,s=_n(n),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Ln(e,s,n),i!==null&&(je(i,e,n),ps(i,e,n))}function gd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Du(e,n){gd(e,n),(e=e.alternate)&&gd(e,n)}function yd(e){if(e.tag===13){var n=Ii(e,67108864);n!==null&&je(n,e,67108864),Du(e,67108864)}}var Mr=!0;function Kp(e,n,i,s){var o=R.T;R.T=null;var c=Y.p;try{Y.p=2,Cu(e,n,i,s)}finally{Y.p=c,R.T=o}}function Fp(e,n,i,s){var o=R.T;R.T=null;var c=Y.p;try{Y.p=8,Cu(e,n,i,s)}finally{Y.p=c,R.T=o}}function Cu(e,n,i,s){if(Mr){var o=ju(s);if(o===null)yu(e,n,s,wr,i),bd(e,s);else if(Wp(o,e,n,i,s))s.stopPropagation();else if(bd(e,s),n&4&&-1<Jp.indexOf(e)){for(;o!==null;){var c=ki(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=ci(c.pendingLanes);if(d!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var S=1<<31-ze(d);v.entanglements[1]|=S,d&=~S}rn(c),(zt&6)===0&&(cr=en()+500,Rs(0))}}break;case 13:v=Ii(c,2),v!==null&&je(v,c,2),fr(),Du(c,2)}if(c=ju(s),c===null&&yu(e,n,s,wr,i),c===o)break;o=c}o!==null&&s.stopPropagation()}else yu(e,n,s,null,i)}}function ju(e){return e=_o(e),Ru(e)}var wr=null;function Ru(e){if(wr=null,e=Ui(e),e!==null){var n=f(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=h(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return wr=e,null}function vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_6()){case j0:return 2;case R0:return 8;case vl:case L6:return 32;case O0:return 268435456;default:return 32}default:return 32}}var Ou=!1,Fn=null,Jn=null,Wn=null,Us=new Map,ks=new Map,In=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bd(e,n){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Us.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(n.pointerId)}}function Ys(e,n,i,s,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:c,targetContainers:[o]},n!==null&&(n=ki(n),n!==null&&yd(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Wp(e,n,i,s,o){switch(n){case"focusin":return Fn=Ys(Fn,e,n,i,s,o),!0;case"dragenter":return Jn=Ys(Jn,e,n,i,s,o),!0;case"mouseover":return Wn=Ys(Wn,e,n,i,s,o),!0;case"pointerover":var c=o.pointerId;return Us.set(c,Ys(Us.get(c)||null,e,n,i,s,o)),!0;case"gotpointercapture":return c=o.pointerId,ks.set(c,Ys(ks.get(c)||null,e,n,i,s,o)),!0}return!1}function xd(e){var n=Ui(e.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){e.blockedOn=n,X6(e.priority,function(){if(i.tag===13){var s=Ce();s=Mo(s);var o=Ii(i,s);o!==null&&je(o,i,s),Du(i,s)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Er(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ju(e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Bo=s,i.target.dispatchEvent(s),Bo=null}else return n=ki(i),n!==null&&yd(n),e.blockedOn=i,!1;n.shift()}return!0}function Sd(e,n,i){Er(e)&&i.delete(n)}function Ip(){Ou=!1,Fn!==null&&Er(Fn)&&(Fn=null),Jn!==null&&Er(Jn)&&(Jn=null),Wn!==null&&Er(Wn)&&(Wn=null),Us.forEach(Sd),ks.forEach(Sd)}function $r(e,n){e.blockedOn===n&&(e.blockedOn=null,Ou||(Ou=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ip)))}var Dr=null;function Td(e){Dr!==e&&(Dr=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Dr===e&&(Dr=null);for(var n=0;n<e.length;n+=3){var i=e[n],s=e[n+1],o=e[n+2];if(typeof s!="function"){if(Ru(s||i)===null)continue;break}var c=ki(i);c!==null&&(e.splice(n,3),n-=3,Rc(c,{pending:!0,data:o,method:i.method,action:s},s,o))}}))}function Gs(e){function n(S){return $r(S,e)}Fn!==null&&$r(Fn,e),Jn!==null&&$r(Jn,e),Wn!==null&&$r(Wn,e),Us.forEach(n),ks.forEach(n);for(var i=0;i<In.length;i++){var s=In[i];s.blockedOn===e&&(s.blockedOn=null)}for(;0<In.length&&(i=In[0],i.blockedOn===null);)xd(i),i.blockedOn===null&&In.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var o=i[s],c=i[s+1],d=o[ye]||null;if(typeof c=="function")d||Td(i);else if(d){var v=null;if(c&&c.hasAttribute("formAction")){if(o=c,d=c[ye]||null)v=d.formAction;else if(Ru(o)!==null)continue}else v=d.action;typeof v=="function"?i[s+1]=v:(i.splice(s,3),s-=3),Td(i)}}}function Vu(e){this._internalRoot=e}Cr.prototype.render=Vu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var i=n.current,s=Ce();pd(i,s,e,n,null,null)},Cr.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pd(e.current,2,null,e,null,null),fr(),n[Ni]=null}};function Cr(e){this._internalRoot=e}Cr.prototype.unstable_scheduleHydration=function(e){if(e){var n=H0();e={blockedOn:null,target:e,priority:n};for(var i=0;i<In.length&&n!==0&&n<In[i].priority;i++);In.splice(i,0,e),i===0&&xd(e)}};var Ad=a.version;if(Ad!=="19.1.0")throw Error(r(527,Ad,"19.1.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var tg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{Za=jr.inject(tg),Ae=jr}catch{}}return Xs.createRoot=function(e,n){if(!u(e))throw Error(r(299));var i=!1,s="",o=N2,c=U2,d=k2,v=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks)),n=dd(e,1,!1,null,null,i,s,o,c,d,v,null),e[Ni]=n.current,gu(e),new Vu(n)},Xs.hydrateRoot=function(e,n,i){if(!u(e))throw Error(r(299));var s=!1,o="",c=N2,d=U2,v=k2,S=null,D=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(S=i.unstable_transitionCallbacks),i.formState!==void 0&&(D=i.formState)),n=dd(e,1,!0,n,i??null,s,o,c,d,v,S,D),n.context=md(null),i=n.current,s=Ce(),s=Mo(s),o=_n(s),o.callback=null,Ln(i,o,s),i=s,n.current.lanes=i,Ka(n,i),rn(n),e[Ni]=n.current,gu(e),new Cr(n)},Xs.version="19.1.0",Xs}var Od;function fg(){if(Od)return Lu.exports;Od=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Lu.exports=ug(),Lu.exports}var hg=fg(),se=function(){return se=Object.assign||function(a){for(var l,r=1,u=arguments.length;r<u;r++){l=arguments[r];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(a[f]=l[f])}return a},se.apply(this,arguments)};function _a(t,a,l){if(l||arguments.length===2)for(var r=0,u=a.length,f;r<u;r++)(f||!(r in a))&&(f||(f=Array.prototype.slice.call(a,0,r)),f[r]=a[r]);return t.concat(f||Array.prototype.slice.call(a))}var jt="-ms-",Fs="-moz-",At="-webkit-",w4="comm",uo="rule",P1="decl",dg="@import",E4="@keyframes",mg="@layer",$4=Math.abs,Z1=String.fromCharCode,m1=Object.assign;function pg(t,a){return ie(t,0)^45?(((a<<2^ie(t,0))<<2^ie(t,1))<<2^ie(t,2))<<2^ie(t,3):0}function D4(t){return t.trim()}function $n(t,a){return(t=a.exec(t))?t[0]:t}function ft(t,a,l){return t.replace(a,l)}function kr(t,a,l){return t.indexOf(a,l)}function ie(t,a){return t.charCodeAt(a)|0}function La(t,a,l){return t.slice(a,l)}function on(t){return t.length}function C4(t){return t.length}function Qs(t,a){return a.push(t),t}function gg(t,a){return t.map(a).join("")}function Vd(t,a){return t.filter(function(l){return!$n(l,a)})}var fo=1,Ha=1,j4=0,Qe=0,Zt=0,Ga="";function ho(t,a,l,r,u,f,h,m){return{value:t,root:a,parent:l,type:r,props:u,children:f,line:fo,column:Ha,length:h,return:"",siblings:m}}function ei(t,a){return m1(ho("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function za(t){for(;t.root;)t=ei(t.root,{children:[t]});Qs(t,t.siblings)}function yg(){return Zt}function vg(){return Zt=Qe>0?ie(Ga,--Qe):0,Ha--,Zt===10&&(Ha=1,fo--),Zt}function tn(){return Zt=Qe<j4?ie(Ga,Qe++):0,Ha++,Zt===10&&(Ha=1,fo++),Zt}function Vi(){return ie(Ga,Qe)}function Yr(){return Qe}function mo(t,a){return La(Ga,t,a)}function p1(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bg(t){return fo=Ha=1,j4=on(Ga=t),Qe=0,[]}function xg(t){return Ga="",t}function ku(t){return D4(mo(Qe-1,g1(t===91?t+2:t===40?t+1:t)))}function Sg(t){for(;(Zt=Vi())&&Zt<33;)tn();return p1(t)>2||p1(Zt)>3?"":" "}function Tg(t,a){for(;--a&&tn()&&!(Zt<48||Zt>102||Zt>57&&Zt<65||Zt>70&&Zt<97););return mo(t,Yr()+(a<6&&Vi()==32&&tn()==32))}function g1(t){for(;tn();)switch(Zt){case t:return Qe;case 34:case 39:t!==34&&t!==39&&g1(Zt);break;case 40:t===41&&g1(t);break;case 92:tn();break}return Qe}function Ag(t,a){for(;tn()&&t+Zt!==57;)if(t+Zt===84&&Vi()===47)break;return"/*"+mo(a,Qe-1)+"*"+Z1(t===47?t:tn())}function zg(t){for(;!p1(Vi());)tn();return mo(t,Qe)}function Mg(t){return xg(Gr("",null,null,null,[""],t=bg(t),0,[0],t))}function Gr(t,a,l,r,u,f,h,m,p){for(var g=0,y=0,x=h,A=0,E=0,B=0,k=1,G=1,U=1,q=0,L="",F=u,N=f,K=r,Q=L;G;)switch(B=q,q=tn()){case 40:if(B!=108&&ie(Q,x-1)==58){kr(Q+=ft(ku(q),"&","&\f"),"&\f",$4(g?m[g-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:Q+=ku(q);break;case 9:case 10:case 13:case 32:Q+=Sg(B);break;case 92:Q+=Tg(Yr()-1,7);continue;case 47:switch(Vi()){case 42:case 47:Qs(wg(Ag(tn(),Yr()),a,l,p),p);break;default:Q+="/"}break;case 123*k:m[g++]=on(Q)*U;case 125*k:case 59:case 0:switch(q){case 0:case 125:G=0;case 59+y:U==-1&&(Q=ft(Q,/\f/g,"")),E>0&&on(Q)-x&&Qs(E>32?_d(Q+";",r,l,x-1,p):_d(ft(Q," ","")+";",r,l,x-2,p),p);break;case 59:Q+=";";default:if(Qs(K=Bd(Q,a,l,g,y,u,m,L,F=[],N=[],x,f),f),q===123)if(y===0)Gr(Q,a,K,K,F,f,x,m,N);else switch(A===99&&ie(Q,3)===110?100:A){case 100:case 108:case 109:case 115:Gr(t,K,K,r&&Qs(Bd(t,K,K,0,0,u,m,L,u,F=[],x,N),N),u,N,x,m,r?F:N);break;default:Gr(Q,K,K,K,[""],N,0,m,N)}}g=y=E=0,k=U=1,L=Q="",x=h;break;case 58:x=1+on(Q),E=B;default:if(k<1){if(q==123)--k;else if(q==125&&k++==0&&vg()==125)continue}switch(Q+=Z1(q),q*k){case 38:U=y>0?1:(Q+="\f",-1);break;case 44:m[g++]=(on(Q)-1)*U,U=1;break;case 64:Vi()===45&&(Q+=ku(tn())),A=Vi(),y=x=on(L=Q+=zg(Yr())),q++;break;case 45:B===45&&on(Q)==2&&(k=0)}}return f}function Bd(t,a,l,r,u,f,h,m,p,g,y,x){for(var A=u-1,E=u===0?f:[""],B=C4(E),k=0,G=0,U=0;k<r;++k)for(var q=0,L=La(t,A+1,A=$4(G=h[k])),F=t;q<B;++q)(F=D4(G>0?E[q]+" "+L:ft(L,/&\f/g,E[q])))&&(p[U++]=F);return ho(t,a,l,u===0?uo:m,p,g,y,x)}function wg(t,a,l,r){return ho(t,a,l,w4,Z1(yg()),La(t,2,-2),0,r)}function _d(t,a,l,r,u){return ho(t,a,l,P1,La(t,0,r),La(t,r+1,-1),r,u)}function R4(t,a,l){switch(pg(t,a)){case 5103:return At+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return At+t+t;case 4789:return Fs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return At+t+Fs+t+jt+t+t;case 5936:switch(ie(t,a+11)){case 114:return At+t+jt+ft(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return At+t+jt+ft(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return At+t+jt+ft(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return At+t+jt+t+t;case 6165:return At+t+jt+"flex-"+t+t;case 5187:return At+t+ft(t,/(\w+).+(:[^]+)/,At+"box-$1$2"+jt+"flex-$1$2")+t;case 5443:return At+t+jt+"flex-item-"+ft(t,/flex-|-self/g,"")+($n(t,/flex-|baseline/)?"":jt+"grid-row-"+ft(t,/flex-|-self/g,""))+t;case 4675:return At+t+jt+"flex-line-pack"+ft(t,/align-content|flex-|-self/g,"")+t;case 5548:return At+t+jt+ft(t,"shrink","negative")+t;case 5292:return At+t+jt+ft(t,"basis","preferred-size")+t;case 6060:return At+"box-"+ft(t,"-grow","")+At+t+jt+ft(t,"grow","positive")+t;case 4554:return At+ft(t,/([^-])(transform)/g,"$1"+At+"$2")+t;case 6187:return ft(ft(ft(t,/(zoom-|grab)/,At+"$1"),/(image-set)/,At+"$1"),t,"")+t;case 5495:case 3959:return ft(t,/(image-set\([^]*)/,At+"$1$`$1");case 4968:return ft(ft(t,/(.+:)(flex-)?(.*)/,At+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+At+t+t;case 4200:if(!$n(t,/flex-|baseline/))return jt+"grid-column-align"+La(t,a)+t;break;case 2592:case 3360:return jt+ft(t,"template-","")+t;case 4384:case 3616:return l&&l.some(function(r,u){return a=u,$n(r.props,/grid-\w+-end/)})?~kr(t+(l=l[a].value),"span",0)?t:jt+ft(t,"-start","")+t+jt+"grid-row-span:"+(~kr(l,"span",0)?$n(l,/\d+/):+$n(l,/\d+/)-+$n(t,/\d+/))+";":jt+ft(t,"-start","")+t;case 4896:case 4128:return l&&l.some(function(r){return $n(r.props,/grid-\w+-start/)})?t:jt+ft(ft(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ft(t,/(.+)-inline(.+)/,At+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(t)-1-a>6)switch(ie(t,a+1)){case 109:if(ie(t,a+4)!==45)break;case 102:return ft(t,/(.+:)(.+)-([^]+)/,"$1"+At+"$2-$3$1"+Fs+(ie(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~kr(t,"stretch",0)?R4(ft(t,"stretch","fill-available"),a,l)+t:t}break;case 5152:case 5920:return ft(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,u,f,h,m,p,g){return jt+u+":"+f+g+(h?jt+u+"-span:"+(m?p:+p-+f)+g:"")+t});case 4949:if(ie(t,a+6)===121)return ft(t,":",":"+At)+t;break;case 6444:switch(ie(t,ie(t,14)===45?18:11)){case 120:return ft(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+At+(ie(t,14)===45?"inline-":"")+"box$3$1"+At+"$2$3$1"+jt+"$2box$3")+t;case 100:return ft(t,":",":"+jt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(t,"scroll-","scroll-snap-")+t}return t}function Fr(t,a){for(var l="",r=0;r<t.length;r++)l+=a(t[r],r,t,a)||"";return l}function Eg(t,a,l,r){switch(t.type){case mg:if(t.children.length)break;case dg:case P1:return t.return=t.return||t.value;case w4:return"";case E4:return t.return=t.value+"{"+Fr(t.children,r)+"}";case uo:if(!on(t.value=t.props.join(",")))return""}return on(l=Fr(t.children,r))?t.return=t.value+"{"+l+"}":""}function $g(t){var a=C4(t);return function(l,r,u,f){for(var h="",m=0;m<a;m++)h+=t[m](l,r,u,f)||"";return h}}function Dg(t){return function(a){a.root||(a=a.return)&&t(a)}}function Cg(t,a,l,r){if(t.length>-1&&!t.return)switch(t.type){case P1:t.return=R4(t.value,t.length,l);return;case E4:return Fr([ei(t,{value:ft(t.value,"@","@"+At)})],r);case uo:if(t.length)return gg(l=t.props,function(u){switch($n(u,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":za(ei(t,{props:[ft(u,/:(read-\w+)/,":"+Fs+"$1")]})),za(ei(t,{props:[u]})),m1(t,{props:Vd(l,r)});break;case"::placeholder":za(ei(t,{props:[ft(u,/:(plac\w+)/,":"+At+"input-$1")]})),za(ei(t,{props:[ft(u,/:(plac\w+)/,":"+Fs+"$1")]})),za(ei(t,{props:[ft(u,/:(plac\w+)/,jt+"input-$1")]})),za(ei(t,{props:[u]})),m1(t,{props:Vd(l,r)});break}return""})}}var jg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Re={},Na=typeof process<"u"&&Re!==void 0&&(Re.REACT_APP_SC_ATTR||Re.SC_ATTR)||"data-styled",O4="active",V4="data-styled-version",po="6.1.19",Q1=`/*!sc*/
`,Jr=typeof window<"u"&&typeof document<"u",Rg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==""?Re.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Re.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.SC_DISABLE_SPEEDY!==void 0&&Re.SC_DISABLE_SPEEDY!==""&&Re.SC_DISABLE_SPEEDY!=="false"&&Re.SC_DISABLE_SPEEDY),Og={},go=Object.freeze([]),Ua=Object.freeze({});function B4(t,a,l){return l===void 0&&(l=Ua),t.theme!==l.theme&&t.theme||a||l.theme}var _4=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bg=/(^-|-$)/g;function Ld(t){return t.replace(Vg,"-").replace(Bg,"")}var _g=/(a)(d)/gi,Rr=52,Hd=function(t){return String.fromCharCode(t+(t>25?39:97))};function y1(t){var a,l="";for(a=Math.abs(t);a>Rr;a=a/Rr|0)l=Hd(a%Rr)+l;return(Hd(a%Rr)+l).replace(_g,"$1-$2")}var Yu,L4=5381,Ca=function(t,a){for(var l=a.length;l;)t=33*t^a.charCodeAt(--l);return t},H4=function(t){return Ca(L4,t)};function K1(t){return y1(H4(t)>>>0)}function Lg(t){return t.displayName||t.name||"Component"}function Gu(t){return typeof t=="string"&&!0}var N4=typeof Symbol=="function"&&Symbol.for,U4=N4?Symbol.for("react.memo"):60115,Hg=N4?Symbol.for("react.forward_ref"):60112,Ng={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ug={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},k4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kg=((Yu={})[Hg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yu[U4]=k4,Yu);function Nd(t){return("type"in(a=t)&&a.type.$$typeof)===U4?k4:"$$typeof"in t?kg[t.$$typeof]:Ng;var a}var Yg=Object.defineProperty,Gg=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,qg=Object.getOwnPropertyDescriptor,Xg=Object.getPrototypeOf,kd=Object.prototype;function Y4(t,a,l){if(typeof a!="string"){if(kd){var r=Xg(a);r&&r!==kd&&Y4(t,r,l)}var u=Gg(a);Ud&&(u=u.concat(Ud(a)));for(var f=Nd(t),h=Nd(a),m=0;m<u.length;++m){var p=u[m];if(!(p in Ug||l&&l[p]||h&&p in h||f&&p in f)){var g=qg(a,p);try{Yg(t,p,g)}catch{}}}}return t}function Li(t){return typeof t=="function"}function F1(t){return typeof t=="object"&&"styledComponentId"in t}function Ci(t,a){return t&&a?"".concat(t," ").concat(a):t||a||""}function Wr(t,a){if(t.length===0)return"";for(var l=t[0],r=1;r<t.length;r++)l+=t[r];return l}function nl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function v1(t,a,l){if(l===void 0&&(l=!1),!l&&!nl(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(var r=0;r<a.length;r++)t[r]=v1(t[r],a[r]);else if(nl(a))for(var r in a)t[r]=v1(t[r],a[r]);return t}function J1(t,a){Object.defineProperty(t,"toString",{value:a})}function Hi(t){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Pg=function(){function t(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return t.prototype.indexOfGroup=function(a){for(var l=0,r=0;r<a;r++)l+=this.groupSizes[r];return l},t.prototype.insertRules=function(a,l){if(a>=this.groupSizes.length){for(var r=this.groupSizes,u=r.length,f=u;a>=f;)if((f<<=1)<0)throw Hi(16,"".concat(a));this.groupSizes=new Uint32Array(f),this.groupSizes.set(r),this.length=f;for(var h=u;h<f;h++)this.groupSizes[h]=0}for(var m=this.indexOfGroup(a+1),p=(h=0,l.length);h<p;h++)this.tag.insertRule(m,l[h])&&(this.groupSizes[a]++,m++)},t.prototype.clearGroup=function(a){if(a<this.length){var l=this.groupSizes[a],r=this.indexOfGroup(a),u=r+l;this.groupSizes[a]=0;for(var f=r;f<u;f++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(a){var l="";if(a>=this.length||this.groupSizes[a]===0)return l;for(var r=this.groupSizes[a],u=this.indexOfGroup(a),f=u+r,h=u;h<f;h++)l+="".concat(this.tag.getRule(h)).concat(Q1);return l},t}(),qr=new Map,Ir=new Map,Xr=1,Or=function(t){if(qr.has(t))return qr.get(t);for(;Ir.has(Xr);)Xr++;var a=Xr++;return qr.set(t,a),Ir.set(a,t),a},Zg=function(t,a){Xr=a+1,qr.set(t,a),Ir.set(a,t)},Qg="style[".concat(Na,"][").concat(V4,'="').concat(po,'"]'),Kg=new RegExp("^".concat(Na,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fg=function(t,a,l){for(var r,u=l.split(","),f=0,h=u.length;f<h;f++)(r=u[f])&&t.registerName(a,r)},Jg=function(t,a){for(var l,r=((l=a.textContent)!==null&&l!==void 0?l:"").split(Q1),u=[],f=0,h=r.length;f<h;f++){var m=r[f].trim();if(m){var p=m.match(Kg);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(Zg(y,g),Fg(t,y,p[3]),t.getTag().insertRules(g,u)),u.length=0}else u.push(m)}}},Yd=function(t){for(var a=document.querySelectorAll(Qg),l=0,r=a.length;l<r;l++){var u=a[l];u&&u.getAttribute(Na)!==O4&&(Jg(t,u),u.parentNode&&u.parentNode.removeChild(u))}};function Wg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var G4=function(t){var a=document.head,l=t||a,r=document.createElement("style"),u=function(m){var p=Array.from(m.querySelectorAll("style[".concat(Na,"]")));return p[p.length-1]}(l),f=u!==void 0?u.nextSibling:null;r.setAttribute(Na,O4),r.setAttribute(V4,po);var h=Wg();return h&&r.setAttribute("nonce",h),l.insertBefore(r,f),r},Ig=function(){function t(a){this.element=G4(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(l){if(l.sheet)return l.sheet;for(var r=document.styleSheets,u=0,f=r.length;u<f;u++){var h=r[u];if(h.ownerNode===l)return h}throw Hi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(a,l){try{return this.sheet.insertRule(l,a),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},t.prototype.getRule=function(a){var l=this.sheet.cssRules[a];return l&&l.cssText?l.cssText:""},t}(),t8=function(){function t(a){this.element=G4(a),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(a,l){if(a<=this.length&&a>=0){var r=document.createTextNode(l);return this.element.insertBefore(r,this.nodes[a]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},t.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},t}(),e8=function(){function t(a){this.rules=[],this.length=0}return t.prototype.insertRule=function(a,l){return a<=this.length&&(this.rules.splice(a,0,l),this.length++,!0)},t.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},t.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},t}(),Gd=Jr,n8={isServer:!Jr,useCSSOMInjection:!Rg},to=function(){function t(a,l,r){a===void 0&&(a=Ua),l===void 0&&(l={});var u=this;this.options=se(se({},n8),a),this.gs=l,this.names=new Map(r),this.server=!!a.isServer,!this.server&&Jr&&Gd&&(Gd=!1,Yd(this)),J1(this,function(){return function(f){for(var h=f.getTag(),m=h.length,p="",g=function(x){var A=function(U){return Ir.get(U)}(x);if(A===void 0)return"continue";var E=f.names.get(A),B=h.getGroup(x);if(E===void 0||!E.size||B.length===0)return"continue";var k="".concat(Na,".g").concat(x,'[id="').concat(A,'"]'),G="";E!==void 0&&E.forEach(function(U){U.length>0&&(G+="".concat(U,","))}),p+="".concat(B).concat(k,'{content:"').concat(G,'"}').concat(Q1)},y=0;y<m;y++)g(y);return p}(u)})}return t.registerId=function(a){return Or(a)},t.prototype.rehydrate=function(){!this.server&&Jr&&Yd(this)},t.prototype.reconstructWithOptions=function(a,l){return l===void 0&&(l=!0),new t(se(se({},this.options),a),this.gs,l&&this.names||void 0)},t.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(a=function(l){var r=l.useCSSOMInjection,u=l.target;return l.isServer?new e8(u):r?new Ig(u):new t8(u)}(this.options),new Pg(a)));var a},t.prototype.hasNameForId=function(a,l){return this.names.has(a)&&this.names.get(a).has(l)},t.prototype.registerName=function(a,l){if(Or(a),this.names.has(a))this.names.get(a).add(l);else{var r=new Set;r.add(l),this.names.set(a,r)}},t.prototype.insertRules=function(a,l,r){this.registerName(a,l),this.getTag().insertRules(Or(a),r)},t.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},t.prototype.clearRules=function(a){this.getTag().clearGroup(Or(a)),this.clearNames(a)},t.prototype.clearTag=function(){this.tag=void 0},t}(),i8=/&/g,a8=/^\s*\/\/.*$/gm;function q4(t,a){return t.map(function(l){return l.type==="rule"&&(l.value="".concat(a," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(a," ")),l.props=l.props.map(function(r){return"".concat(a," ").concat(r)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=q4(l.children,a)),l})}function s8(t){var a,l,r,u=Ua,f=u.options,h=f===void 0?Ua:f,m=u.plugins,p=m===void 0?go:m,g=function(A,E,B){return B.startsWith(l)&&B.endsWith(l)&&B.replaceAll(l,"").length>0?".".concat(a):A},y=p.slice();y.push(function(A){A.type===uo&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(i8,l).replace(r,g))}),h.prefix&&y.push(Cg),y.push(Eg);var x=function(A,E,B,k){E===void 0&&(E=""),B===void 0&&(B=""),k===void 0&&(k="&"),a=k,l=E,r=new RegExp("\\".concat(l,"\\b"),"g");var G=A.replace(a8,""),U=Mg(B||E?"".concat(B," ").concat(E," { ").concat(G," }"):G);h.namespace&&(U=q4(U,h.namespace));var q=[];return Fr(U,$g(y.concat(Dg(function(L){return q.push(L)})))),q};return x.hash=p.length?p.reduce(function(A,E){return E.name||Hi(15),Ca(A,E.name)},L4).toString():"",x}var l8=new to,b1=s8(),X4=ae.createContext({shouldForwardProp:void 0,styleSheet:l8,stylis:b1});X4.Consumer;ae.createContext(void 0);function x1(){return I.useContext(X4)}var P4=function(){function t(a,l){var r=this;this.inject=function(u,f){f===void 0&&(f=b1);var h=r.name+f.hash;u.hasNameForId(r.id,h)||u.insertRules(r.id,h,f(r.rules,h,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=l,J1(this,function(){throw Hi(12,String(r.name))})}return t.prototype.getName=function(a){return a===void 0&&(a=b1),this.name+a.hash},t}(),r8=function(t){return t>="A"&&t<="Z"};function qd(t){for(var a="",l=0;l<t.length;l++){var r=t[l];if(l===1&&r==="-"&&t[0]==="-")return t;r8(r)?a+="-"+r.toLowerCase():a+=r}return a.startsWith("ms-")?"-"+a:a}var Z4=function(t){return t==null||t===!1||t===""},Q4=function(t){var a,l,r=[];for(var u in t){var f=t[u];t.hasOwnProperty(u)&&!Z4(f)&&(Array.isArray(f)&&f.isCss||Li(f)?r.push("".concat(qd(u),":"),f,";"):nl(f)?r.push.apply(r,_a(_a(["".concat(u," {")],Q4(f),!1),["}"],!1)):r.push("".concat(qd(u),": ").concat((a=u,(l=f)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||a in jg||a.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return r};function ai(t,a,l,r){if(Z4(t))return[];if(F1(t))return[".".concat(t.styledComponentId)];if(Li(t)){if(!Li(f=t)||f.prototype&&f.prototype.isReactComponent||!a)return[t];var u=t(a);return ai(u,a,l,r)}var f;return t instanceof P4?l?(t.inject(l,r),[t.getName(r)]):[t]:nl(t)?Q4(t):Array.isArray(t)?Array.prototype.concat.apply(go,t.map(function(h){return ai(h,a,l,r)})):[t.toString()]}function K4(t){for(var a=0;a<t.length;a+=1){var l=t[a];if(Li(l)&&!F1(l))return!1}return!0}var o8=H4(po),c8=function(){function t(a,l,r){this.rules=a,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&K4(a),this.componentId=l,this.baseHash=Ca(o8,l),this.baseStyle=r,to.registerId(l)}return t.prototype.generateAndInjectStyles=function(a,l,r){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,l,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=Ci(u,this.staticRulesId);else{var f=Wr(ai(this.rules,a,l,r)),h=y1(Ca(this.baseHash,f)>>>0);if(!l.hasNameForId(this.componentId,h)){var m=r(f,".".concat(h),void 0,this.componentId);l.insertRules(this.componentId,h,m)}u=Ci(u,h),this.staticRulesId=h}else{for(var p=Ca(this.baseHash,r.hash),g="",y=0;y<this.rules.length;y++){var x=this.rules[y];if(typeof x=="string")g+=x;else if(x){var A=Wr(ai(x,a,l,r));p=Ca(p,A+y),g+=A}}if(g){var E=y1(p>>>0);l.hasNameForId(this.componentId,E)||l.insertRules(this.componentId,E,r(g,".".concat(E),void 0,this.componentId)),u=Ci(u,E)}}return u},t}(),il=ae.createContext(void 0);il.Consumer;function u8(t){var a=ae.useContext(il),l=I.useMemo(function(){return function(r,u){if(!r)throw Hi(14);if(Li(r)){var f=r(u);return f}if(Array.isArray(r)||typeof r!="object")throw Hi(8);return u?se(se({},u),r):r}(t.theme,a)},[t.theme,a]);return t.children?ae.createElement(il.Provider,{value:l},t.children):null}var qu={};function f8(t,a,l){var r=F1(t),u=t,f=!Gu(t),h=a.attrs,m=h===void 0?go:h,p=a.componentId,g=p===void 0?function(F,N){var K=typeof F!="string"?"sc":Ld(F);qu[K]=(qu[K]||0)+1;var Q="".concat(K,"-").concat(K1(po+K+qu[K]));return N?"".concat(N,"-").concat(Q):Q}(a.displayName,a.parentComponentId):p,y=a.displayName,x=y===void 0?function(F){return Gu(F)?"styled.".concat(F):"Styled(".concat(Lg(F),")")}(t):y,A=a.displayName&&a.componentId?"".concat(Ld(a.displayName),"-").concat(a.componentId):a.componentId||g,E=r&&u.attrs?u.attrs.concat(m).filter(Boolean):m,B=a.shouldForwardProp;if(r&&u.shouldForwardProp){var k=u.shouldForwardProp;if(a.shouldForwardProp){var G=a.shouldForwardProp;B=function(F,N){return k(F,N)&&G(F,N)}}else B=k}var U=new c8(l,A,r?u.componentStyle:void 0);function q(F,N){return function(K,Q,tt){var St=K.attrs,Nt=K.componentStyle,Jt=K.defaultProps,Ut=K.foldedComponentIds,Ke=K.styledComponentId,Oe=K.target,Qt=ae.useContext(il),R=x1(),Y=K.shouldForwardProp||R.shouldForwardProp,W=B4(Q,Qt,Jt)||Ua,ct=function(mt,st,Wt){for(var Tt,ue=se(se({},st),{className:void 0,theme:Wt}),oi=0;oi<mt.length;oi+=1){var hn=Li(Tt=mt[oi])?Tt(ue):Tt;for(var Ve in hn)ue[Ve]=Ve==="className"?Ci(ue[Ve],hn[Ve]):Ve==="style"?se(se({},ue[Ve]),hn[Ve]):hn[Ve]}return st.className&&(ue.className=Ci(ue.className,st.className)),ue}(St,Q,W),z=ct.as||Oe,H={};for(var P in ct)ct[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&ct.theme===W||(P==="forwardedAs"?H.as=ct.forwardedAs:Y&&!Y(P,z)||(H[P]=ct[P]));var Z=function(mt,st){var Wt=x1(),Tt=mt.generateAndInjectStyles(st,Wt.styleSheet,Wt.stylis);return Tt}(Nt,ct),nt=Ci(Ut,Ke);return Z&&(nt+=" "+Z),ct.className&&(nt+=" "+ct.className),H[Gu(z)&&!_4.has(z)?"class":"className"]=nt,tt&&(H.ref=tt),I.createElement(z,H)}(L,F,N)}q.displayName=x;var L=ae.forwardRef(q);return L.attrs=E,L.componentStyle=U,L.displayName=x,L.shouldForwardProp=B,L.foldedComponentIds=r?Ci(u.foldedComponentIds,u.styledComponentId):"",L.styledComponentId=A,L.target=r?u.target:t,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=r?function(N){for(var K=[],Q=1;Q<arguments.length;Q++)K[Q-1]=arguments[Q];for(var tt=0,St=K;tt<St.length;tt++)v1(N,St[tt],!0);return N}({},u.defaultProps,F):F}}),J1(L,function(){return".".concat(L.styledComponentId)}),f&&Y4(L,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function Xd(t,a){for(var l=[t[0]],r=0,u=a.length;r<u;r+=1)l.push(a[r],t[r+1]);return l}var Pd=function(t){return Object.assign(t,{isCss:!0})};function vt(t){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];if(Li(t)||nl(t))return Pd(ai(Xd(go,_a([t],a,!0))));var r=t;return a.length===0&&r.length===1&&typeof r[0]=="string"?ai(r):Pd(ai(Xd(r,a)))}function S1(t,a,l){if(l===void 0&&(l=Ua),!a)throw Hi(1,a);var r=function(u){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return t(a,l,vt.apply(void 0,_a([u],f,!1)))};return r.attrs=function(u){return S1(t,a,se(se({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},r.withConfig=function(u){return S1(t,a,se(se({},l),u))},r}var F4=function(t){return S1(f8,t)},T=F4;_4.forEach(function(t){T[t]=F4(t)});var h8=function(){function t(a,l){this.rules=a,this.componentId=l,this.isStatic=K4(a),to.registerId(this.componentId+1)}return t.prototype.createStyles=function(a,l,r,u){var f=u(Wr(ai(this.rules,l,r,u)),""),h=this.componentId+a;r.insertRules(h,h,f)},t.prototype.removeStyles=function(a,l){l.clearRules(this.componentId+a)},t.prototype.renderStyles=function(a,l,r,u){a>2&&to.registerId(this.componentId+a),this.removeStyles(a,r),this.createStyles(a,l,r,u)},t}();function d8(t){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];var r=vt.apply(void 0,_a([t],a,!1)),u="sc-global-".concat(K1(JSON.stringify(r))),f=new h8(r,u),h=function(p){var g=x1(),y=ae.useContext(il),x=ae.useRef(g.styleSheet.allocateGSInstance(u)).current;return g.styleSheet.server&&m(x,p,g.styleSheet,y,g.stylis),ae.useLayoutEffect(function(){if(!g.styleSheet.server)return m(x,p,g.styleSheet,y,g.stylis),function(){return f.removeStyles(x,g.styleSheet)}},[x,p,g.styleSheet,y,g.stylis]),null};function m(p,g,y,x,A){if(f.isStatic)f.renderStyles(p,Og,y,A);else{var E=se(se({},g),{theme:B4(g,x,h.defaultProps)});f.renderStyles(p,E,y,A)}}return ae.memo(h)}function yo(t){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];var r=Wr(vt.apply(void 0,_a([t],a,!1))),u=K1(r);return new P4(u,r)}const al={colors:{primary:{blue:"#2563eb",secondary:"#1e40af",dark:"#1e40af"},background:{dark:"#1f2020",card:"rgba(31, 32, 32, 0.1)",overlay:"rgba(0, 0, 0, 0.2)"},text:{light:"#E2E8F0",gray:"#94A3B8",white:"#FFFFFF"},border:{primary:"rgba(255, 255, 255, 0.1)"},effects:{shadow:"0 2px 8px rgba(0, 0, 0, 0.1)"}},gradients:{},fonts:{primary:"'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",weights:{normal:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem"},lineHeights:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2}},space:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem"},breakpoints:{xs:"475px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},radii:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(139, 92, 246, 0.5)",none:"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},transitions:{fast:"0.15s ease",normal:"0.3s ease",slow:"0.5s ease",colors:"color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",transform:"transform 0.3s ease",all:"all 0.3s ease"},animations:{float:`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
    `,glitch:`
      @keyframes glitch {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
      }
    `,pulse:`
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `,spin:`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `,slideIn:`
      @keyframes slideIn {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `,fadeIn:`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `},media:{xs:"@media (min-width: 475px)",sm:"@media (min-width: 640px)",md:"@media (min-width: 768px)",lg:"@media (min-width: 1024px)",xl:"@media (min-width: 1280px)","2xl":"@media (min-width: 1536px)",mobile:"@media (max-width: 767px)",tablet:"@media (min-width: 768px) and (max-width: 1023px)",desktop:"@media (min-width: 1024px)"},containers:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px","3xl":"1600px","4xl":"1800px",full:"100%"},effects:{backdropBlur:"blur(10px)",glassEffect:`
      background: rgba(15, 15, 35, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(139, 92, 246, 0.3);
    `,neonGlow:`
      box-shadow: 0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6, 0 0 20px #8B5CF6;
    `,cyberButton:`
      clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
      border: 2px solid #8B5CF6;
      background: transparent;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #8B5CF6, #EC4899);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
      }

      &:hover::before {
        opacity: 1;
      }
    `}};al.borderRadius=al.radii;al.shadows={sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(139, 92, 246, 0.5)",none:"none"};const{colors:rT,gradients:oT,fonts:cT,space:uT,breakpoints:fT,radii:hT,shadows:dT,zIndices:mT,transitions:pT,animations:gT,media:yT,containers:vT,effects:bT,borderRadius:xT}=al,m8=yo`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`,Xu=yo`
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
`,p8=yo`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,J4=yo`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,g8=T.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  // background: ${t=>t.theme.gradients.background};
  background: #1f2020;

  font-family: ${t=>t.theme.fonts.primary};
  color: ${t=>t.theme.colors.text.light};
  line-height: ${t=>t.theme.fonts.lineHeights.normal};
  overflow-x: hidden;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`,y8=T.main`
  position: relative;
  z-index: ${t=>t.theme.zIndices.docked};
`,Ma=T.section`
  position: relative;
  z-index: ${t=>t.theme.zIndices.base};
  scroll-margin-top: 80px;

  ${t=>t.fullHeight&&vt`
    min-height: 100vh;
  `}

  ${t=>t.padding&&vt`
    padding: ${a=>a.theme.space[20]} 0;

    ${a=>a.theme.media.md} {
      padding: ${a=>a.theme.space[24]} 0;
    }

    ${a=>a.theme.media.lg} {
      padding: ${a=>a.theme.space[32]} 0;
    }
  `}

  ${t=>t.darkBg&&vt`
    background: ${a=>a.theme.colors.background.overlay};
  `}
`,Ea=T.div`
  width: 100%;
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  padding: 0 ${t=>t.theme.space[4]};

  ${t=>t.theme.media.sm} {
    padding: 0 ${t=>t.theme.space[6]};
  }

  ${t=>t.theme.media.lg} {
    padding: 0 ${t=>t.theme.space[8]};
  }
`,v8=T.div`
  display: grid;
  gap: ${t=>t.theme.space[t.gap]||t.theme.space[6]};

  ${t=>t.cols&&vt`
    grid-template-columns: repeat(${t.cols}, 1fr);

    ${a=>a.theme.media.mobile} {
      grid-template-columns: 1fr;
      gap: ${a=>a.theme.space[6]};
    }
  `}

  ${t=>t.responsive&&vt`
    grid-template-columns: 1fr;

    ${a=>a.theme.media.md} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${a=>a.theme.media.lg} {
      grid-template-columns: repeat(${t.responsive}, 1fr);
    }
  `}

  ${t=>t.items&&vt`
    align-items: ${t.items};

    ${a=>a.theme.media.mobile} {
      align-items: center;
    }
  `}

  ${t=>t.justify&&vt`
    justify-content: ${t.justify};
  `}
`;T.div`
  display: flex;

  ${t=>t.direction&&vt`
    flex-direction: ${t.direction};
  `}

  ${t=>t.align&&vt`
    align-items: ${t.align};
  `}

  ${t=>t.justify&&vt`
    justify-content: ${t.justify};
  `}

  ${t=>t.gap&&vt`
    gap: ${a=>a.theme.space[a.gap]};
  `}

  ${t=>t.wrap&&vt`
    flex-wrap: wrap;
  `}
`;const vo=T.div`
  background: ${t=>t.theme.colors.background.card};
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  padding: ${t=>t.theme.space[6]};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${t=>t.theme.effects.shadow};
    border-color: ${t=>t.theme.colors.primary.blue};
  }

  ${t=>t.interactive&&vt`
    cursor: pointer;
  `}
`,b8=T.button`
  background: transparent;
  border: 2px solid ${t=>t.theme.colors.primary.blue};
  color: ${t=>t.theme.colors.primary.blue};
  padding: ${t=>t.theme.space[3]} ${t=>t.theme.space[6]};
  font-size: ${t=>t.theme.fonts.sizes.base};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  cursor: pointer;
  transition: ${t=>t.theme.transitions.all};
  border-radius: ${t=>t.theme.radii.base};
  font-family: ${t=>t.theme.fonts.primary};

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary.dark};
  }

  &:hover {
    background: ${t=>t.theme.colors.primary.blue};
    color: ${t=>t.theme.colors.text.white};
    transform: translateY(-1px);
    box-shadow: ${t=>t.theme.effects.shadow};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  ${t=>t.size==="sm"&&vt`
    padding: ${a=>a.theme.space[2]} ${a=>a.theme.space[4]};
    font-size: ${a=>a.theme.fonts.sizes.sm};
  `}

  ${t=>t.size==="lg"&&vt`
    padding: ${a=>a.theme.space[4]} ${a=>a.theme.space[8]};
    font-size: ${a=>a.theme.fonts.sizes.lg};
  `}

  ${t=>t.variant==="filled"&&vt`
    background: ${a=>a.theme.colors.primary.blue};
    color: ${a=>a.theme.colors.text.white};

    &:hover {
      background: ${a=>a.theme.colors.primary.dark};
    }
  `}
`,hl=T.h2`
  font-size: ${t=>t.theme.fonts.sizes["5xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  text-align: center;
  margin-bottom: ${t=>t.theme.space[12]};
  color: ${t=>t.theme.colors.text.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: ${t=>t.theme.colors.primary.blue};
    border-radius: ${t=>t.theme.radii.base};
  }

  ${t=>t.theme.media.mobile} {
    font-size: ${t=>t.theme.fonts.sizes["3xl"]};
  }
`;T.span`
  background: ${t=>t.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;T.span`
  position: relative;
  color: ${t=>t.theme.colors.text.light};
  animation: ${Xu} 2s infinite;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    animation: ${Xu} 0.5s infinite;
    color: ${t=>t.theme.colors.accent.neonBlue};
    z-index: -1;
  }

  &::after {
    animation: ${Xu} 0.5s infinite;
    color: ${t=>t.theme.colors.accent.pink};
    z-index: -2;
  }
`;T.div`
  animation: ${m8} 3s ease-in-out infinite;
  will-change: transform;
`;T.div`
  animation: ${p8} 2s infinite;
`;T.div`
  animation: ${J4} 1s linear infinite;
`;T.input`
  width: 100%;
  padding: ${t=>t.theme.space[3]} ${t=>t.theme.space[4]};
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  color: ${t=>t.theme.colors.text.white};
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${t=>t.theme.fonts.sizes.base};
  transition: ${t=>t.theme.transitions.colors};

  &::placeholder {
    color: ${t=>t.theme.colors.text.gray};
  }

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary.blue};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  ${t=>t.hasIcon&&vt`
    padding-left: ${a=>a.theme.space[10]};
  `}
`;T.textarea`
  width: 100%;
  padding: ${t=>t.theme.space[3]} ${t=>t.theme.space[4]};
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  color: ${t=>t.theme.colors.text.white};
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${t=>t.theme.fonts.sizes.base};
  transition: ${t=>t.theme.transitions.colors};
  resize: none;

  &::placeholder {
    color: ${t=>t.theme.colors.text.gray};
  }

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary.blue};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;T.label`
  display: block;
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  margin-bottom: ${t=>t.theme.space[2]};
`;T.div`
  height: ${t=>t.theme.space[t.size]||t.theme.space[4]};
  width: ${t=>t.theme.space[t.size]||t.theme.space[4]};
`;T.hr`
  border: none;
  height: 1px;
  background: ${t=>t.theme.colors.border.glow};
  margin: ${t=>t.theme.space[8]} 0;
`;T.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${t=>t.size&&vt`
    width: ${a=>a.theme.space[a.size]};
    height: ${a=>a.theme.space[a.size]};
  `}

  ${t=>t.color&&vt`
    color: ${a=>a.theme.colors[a.color]||a.color};
  `}
`;T.div`
  width: 100%;
  height: ${t=>t.theme.space[3]};
  background: ${t=>t.theme.colors.text.gray};
  border-radius: ${t=>t.theme.radii.full};
  overflow: hidden;
`;T.div`
  height: 100%;
  background: ${t=>t.theme.gradients.primary};
  border-radius: ${t=>t.theme.radii.full};
  transition: width 1.5s ease;
  width: ${t=>t.percentage||0}%;
`;const x8=T.span`
  display: inline-flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  padding: ${t=>t.theme.space[1]} ${t=>t.theme.space[2]};
  background: rgba(37, 99, 235, 0.2);
  color: ${t=>t.theme.colors.primary.blue};
  border-radius: ${t=>t.theme.radii.full};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  border: 1px solid rgba(37, 99, 235, 0.3);
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    background: rgba(37, 99, 235, 0.3);
    transform: scale(1.05);
  }
`;T.div`
  position: relative;
`;T.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${t=>t.theme.colors.primary.blue};

  ${t=>t.theme.media.mobile} {
    display: none;
  }
`;T.div`
  position: relative;
  margin-bottom: ${t=>t.theme.space[16]};

  ${t=>t.align==="left"&&vt`
    text-align: left;

    ${a=>a.theme.media.lg} {
      padding-right: calc(50% + ${a=>a.theme.space[8]});
    }
  `}

  ${t=>t.align==="right"&&vt`
    text-align: right;

    ${a=>a.theme.media.lg} {
      padding-left: calc(50% + ${a=>a.theme.space[8]});
    }
  `}

  ${t=>t.theme.media.mobile} {
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }
`;T.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  background: ${t=>t.theme.colors.primary.blue};
  border-radius: 50%;
  border: 4px solid ${t=>t.theme.colors.background.dark};
  z-index: 10;

  ${t=>t.theme.media.mobile} {
    display: none;
  }
`;T.div`
  position: absolute;
  top: 32px;
  width: 0;
  height: 0;

  ${t=>t.align==="left"&&vt`
    right: -12px;
    border-left: 8px solid ${a=>a.theme.colors.border.glow};
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    ${a=>a.theme.media.mobile} {
      display: none;
    }
  `}

  ${t=>t.align==="right"&&vt`
    left: -12px;
    border-right: 8px solid ${a=>a.theme.colors.border.glow};
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    ${a=>a.theme.media.mobile} {
      display: none;
    }
  `}
`;T(vo)`
  position: relative;
  overflow: hidden;
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${t=>t.theme.colors.effects.glowPurple};
  }

  ${t=>t.featured&&vt`
    border: 2px solid ${a=>a.theme.colors.primary.purple};
    background: linear-gradient(145deg,
      rgba(139, 92, 246, 0.1),
      rgba(236, 72, 153, 0.05)
    );
  `}

  ${t=>t.theme.media.mobile} {
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;T.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${t=>t.theme.gradients.card};
  border-radius: ${t=>t.theme.radii.lg};
  margin-bottom: ${t=>t.theme.space[4]};
  font-size: 4rem;

  ${t=>t.theme.media.mobile} {
    height: 150px;
    font-size: 3rem;
  }
`;T.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  margin: ${t=>t.theme.space[4]} 0;
`;T.span`
  padding: ${t=>t.theme.space[1]} ${t=>t.theme.space[3]};
  background: rgba(139, 92, 246, 0.2);
  color: ${t=>t.theme.colors.primary.purple};
  border-radius: ${t=>t.theme.radii.full};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  border: 1px solid rgba(139, 92, 246, 0.3);
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    background: rgba(139, 92, 246, 0.3);
    transform: scale(1.05);
  }
`;T.div`
  display: flex;
  gap: ${t=>t.theme.space[3]};
  margin-top: ${t=>t.theme.space[4]};
`;T.a`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  padding: ${t=>t.theme.space[2]} ${t=>t.theme.space[4]};
  background: ${t=>t.variant==="primary"?t.theme.gradients.primary:"rgba(255, 255, 255, 0.1)"};
  color: ${t=>t.theme.colors.text.white};
  border-radius: ${t=>t.theme.radii.lg};
  text-decoration: none;
  font-size: ${t=>t.theme.fonts.sizes.sm};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${t=>t.theme.shadows.lg};
  }
`;T.form`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[6]};
`;T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.space[6]};

  ${t=>t.cols===2&&vt`
    ${a=>a.theme.media.md} {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;T.div`
  display: flex;
  flex-direction: column;
`;T.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[6]};
`;T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[4]};
  padding: ${t=>t.theme.space[4]};
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${t=>t.theme.radii.lg};
  border: 1px solid ${t=>t.theme.colors.border.glow};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.purple};
    transform: translateY(-2px);
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[3]};
    gap: ${t=>t.theme.space[3]};
  }
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.color||t.theme.colors.primary.purple};
`;T.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`;T.a`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[4]};
  padding: ${t=>t.theme.space[4]};
  background: ${t=>t.bgColor||"rgba(0, 0, 0, 0.2)"};
  color: ${t=>t.theme.colors.text.light};
  border-radius: ${t=>t.theme.radii.lg};
  border: 1px solid ${t=>t.theme.colors.border.glow};
  text-decoration: none;
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.purple};
    transform: translateY(-2px) scale(1.02);

    svg {
      transform: scale(1.1);
    }
  }
`;const S8=T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.space[12]};
  margin-bottom: ${t=>t.theme.space[16]};

  ${t=>t.theme.media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`,Pu=T(vo)`
  height: auto;
  background: rgba(0, 0, 0, 0.6);
  // border: 1px solid ${t=>t.theme.colors.border.glow};

  h3 {
    color: ${t=>t.theme.colors.primary.purple};
    font-size: ${t=>t.theme.fonts.sizes.xl};
    font-weight: ${t=>t.theme.fonts.weights.bold};
    margin-bottom: ${t=>t.theme.space[6]};
    display: flex;
    align-items: center;
    gap: ${t=>t.theme.space[3]};
  }
`,T8=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t=>t.theme.space[4]};

  ${t=>t.theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: ${t=>t.theme.space[3]};
    max-width: 300px;
    margin: 0 auto;
  }
`;T.div`
  text-align: center;
  padding: ${t=>t.theme.space[4]};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${t=>t.theme.radii.lg};
  border: 1px solid ${t=>t.theme.colors.border.glow};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.purple};
    transform: translateY(-2px);
  }

  .icon {
    font-size: ${t=>t.theme.fonts.sizes["3xl"]};
    margin-bottom: ${t=>t.theme.space[2]};
  }

  .number {
    font-size: ${t=>t.theme.fonts.sizes["2xl"]};
    font-weight: ${t=>t.theme.fonts.weights.bold};
    margin-bottom: ${t=>t.theme.space[1]};
  }

  .label {
    color: ${t=>t.theme.colors.text.gray};
    font-size: ${t=>t.theme.fonts.sizes.xs};
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[3]};

    .icon {
      font-size: ${t=>t.theme.fonts.sizes["2xl"]};
    }

    .number {
      font-size: ${t=>t.theme.fonts.sizes.xl};
    }

    .label {
      font-size: ${t=>t.theme.fonts.sizes.sm};
    }
  }
`;const A8=T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.space[6]};

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${t=>t.theme.media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${t=>t.theme.media.mobile} {
    gap: ${t=>t.theme.space[4]};
  }
`,Zd=T(vo)`
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.purple};

    .icon {
      transform: scale(1.1);
    }
  }

  .icon {
    font-size: ${t=>t.theme.fonts.sizes["4xl"]};
    color: ${t=>t.theme.colors.primary.purple};
    margin-bottom: ${t=>t.theme.space[4]};
    transition: ${t=>t.theme.transitions.transform};
  }

  h4 {
    font-size: ${t=>t.theme.fonts.sizes.lg};
    font-weight: ${t=>t.theme.fonts.weights.semibold};

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[4]};

    .icon {
      font-size: ${t=>t.theme.fonts.sizes["3xl"]};
      margin-bottom: ${t=>t.theme.space[3]};
    }

    h4 {
      font-size: ${t=>t.theme.fonts.sizes.base};
      color: ${t=>t.theme.colors.text.white};
      margin-bottom: ${t=>t.theme.space[3]};
    }

    p {
      color: ${t=>t.theme.colors.text.gray};
      font-size: ${t=>t.theme.fonts.sizes.sm};
      line-height: ${t=>t.theme.fonts.lineHeights.relaxed};
      margin-bottom: ${t=>t.theme.space[4]};
    }
  }
`,z8=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 468px) {
    margin-top: 16px;
  }
`,M8=T(x8)`
  font-size: ${t=>t.theme.fonts.sizes.xs};
`;T.span`
  display: inline-block;
  padding: ${t=>t.theme.space[1]} ${t=>t.theme.space[3]};
  border-radius: ${t=>t.theme.radii.full};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  font-weight: ${t=>t.theme.fonts.weights.medium};

  ${t=>t.status==="completed"&&vt`
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
  `}

  ${t=>t.status==="in-progress"&&vt`
    background: rgba(251, 191, 36, 0.2);
    color: #fbbf24;
    border: 1px solid rgba(251, 191, 36, 0.3);
  `}

  ${t=>t.status==="planned"&&vt`
    background: rgba(139, 92, 246, 0.2);
    color: ${a=>a.theme.colors.primary.purple};
    border: 1px solid rgba(139, 92, 246, 0.3);
  `}
`;T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[12]};
`;T.button`
  padding: ${t=>t.theme.space[3]} ${t=>t.theme.space[6]};
  border-radius: ${t=>t.theme.radii.full};
  border: none;
  font-weight: ${t=>t.theme.fonts.weights.medium};
  transition: ${t=>t.theme.transitions.all};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  
  ${t=>t.active?vt`
    background: ${a=>a.theme.gradients.primary};
    color: ${a=>a.theme.colors.text.white};
    box-shadow: ${a=>a.theme.colors.effects.shadow};
  `:vt`
    background: rgba(255, 255, 255, 0.1);
    color: ${a=>a.theme.colors.text.gray};

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: ${a=>a.theme.colors.text.white};
    }
  `}
`;T.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${t=>t.theme.colors.text.white};
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${J4} 1s linear infinite;
`;const w8=d8`
  /* Webkit браузеры (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(15, 15, 35, 0.3);
    border: 1px solid rgba(139, 92, 246, 0.1);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${t=>t.theme.gradients.primary};
    border-radius: 3px;
    transition: all 0.3s ease;
    box-shadow: 0 0 3px rgba(139, 92, 246, 0.3);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #A855F7, #F472B6);
    box-shadow:
      0 0 8px rgba(139, 92, 246, 0.6),
      0 0 12px rgba(236, 72, 153, 0.4),
      inset 0 0 6px rgba(255, 255, 255, 0.1);
    transform: scaleY(1.1);
  }

  ::-webkit-scrollbar-thumb:active {
    background: linear-gradient(135deg, #7C3AED, #EC4899);
    box-shadow:
      0 0 12px rgba(139, 92, 246, 0.8),
      0 0 16px rgba(236, 72, 153, 0.6);
  }

  ::-webkit-scrollbar-corner {
    background: rgba(15, 15, 35, 0.3);
  }

  /* Firefox поддержка */
  html {
    scrollbar-width: thin;
    scrollbar-color: ${t=>t.theme.colors.primary.purple} rgba(15, 15, 35, 0.3);
    scroll-behavior: smooth;
  }

  /* Дополнительные стили для улучшения внешнего вида в Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${t=>t.theme.colors.primary.purple} rgba(15, 15, 35, 0.3);
  }

  /* Плавная анимация для всех элементов скроллбара */
  ::-webkit-scrollbar-thumb {
    transition:
      background 0.3s ease,
      box-shadow 0.3s ease,
      transform 0.2s ease;
  }

  /* Улучшенная видимость на мобильных устройствах */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
    }
  }

  /* Поддержка темной темы */
  @media (prefers-color-scheme: dark) {
    ::-webkit-scrollbar-track {
      background: rgba(10, 10, 26, 0.5);
      border: 1px solid rgba(139, 92, 246, 0.15);
    }
  }
`,W4=I.createContext({});function E8(t){const a=I.useRef(null);return a.current===null&&(a.current=t()),a.current}const W1=typeof window<"u",$8=W1?I.useLayoutEffect:I.useEffect,I1=I.createContext(null);function t0(t,a){t.indexOf(a)===-1&&t.push(a)}function e0(t,a){const l=t.indexOf(a);l>-1&&t.splice(l,1)}const Dn=(t,a,l)=>l>a?a:l<t?t:l;let n0=()=>{};const Cn={},I4=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function tm(t){return typeof t=="object"&&t!==null}const em=t=>/^0[^.\s]+$/u.test(t);function i0(t){let a;return()=>(a===void 0&&(a=t()),a)}const Ze=t=>t,D8=(t,a)=>l=>a(t(l)),dl=(...t)=>t.reduce(D8),sl=(t,a,l)=>{const r=a-t;return r===0?1:(l-t)/r};class a0{constructor(){this.subscriptions=[]}add(a){return t0(this.subscriptions,a),()=>e0(this.subscriptions,a)}notify(a,l,r){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,l,r);else for(let f=0;f<u;f++){const h=this.subscriptions[f];h&&h(a,l,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const cn=t=>t*1e3,un=t=>t/1e3;function nm(t,a){return a?t*(1e3/a):0}const im=(t,a,l)=>(((1-3*l+3*a)*t+(3*l-6*a))*t+3*a)*t,C8=1e-7,j8=12;function R8(t,a,l,r,u){let f,h,m=0;do h=a+(l-a)/2,f=im(h,r,u)-t,f>0?l=h:a=h;while(Math.abs(f)>C8&&++m<j8);return h}function ml(t,a,l,r){if(t===a&&l===r)return Ze;const u=f=>R8(f,0,1,t,l);return f=>f===0||f===1?f:im(u(f),a,r)}const am=t=>a=>a<=.5?t(2*a)/2:(2-t(2*(1-a)))/2,sm=t=>a=>1-t(1-a),lm=ml(.33,1.53,.69,.99),s0=sm(lm),rm=am(s0),om=t=>(t*=2)<1?.5*s0(t):.5*(2-Math.pow(2,-10*(t-1))),l0=t=>1-Math.sin(Math.acos(t)),cm=sm(l0),um=am(l0),O8=ml(.42,0,1,1),V8=ml(0,0,.58,1),fm=ml(.42,0,.58,1),B8=t=>Array.isArray(t)&&typeof t[0]!="number",hm=t=>Array.isArray(t)&&typeof t[0]=="number",_8={linear:Ze,easeIn:O8,easeInOut:fm,easeOut:V8,circIn:l0,circInOut:um,circOut:cm,backIn:s0,backInOut:rm,backOut:lm,anticipate:om},L8=t=>typeof t=="string",Qd=t=>{if(hm(t)){n0(t.length===4);const[a,l,r,u]=t;return ml(a,l,r,u)}else if(L8(t))return _8[t];return t},Vr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Kd={value:null};function H8(t,a){let l=new Set,r=new Set,u=!1,f=!1;const h=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1},p=0;function g(x){h.has(x)&&(y.schedule(x),t()),p++,x(m)}const y={schedule:(x,A=!1,E=!1)=>{const k=E&&u?l:r;return A&&h.add(x),k.has(x)||k.add(x),x},cancel:x=>{r.delete(x),h.delete(x)},process:x=>{if(m=x,u){f=!0;return}u=!0,[l,r]=[r,l],l.forEach(g),a&&Kd.value&&Kd.value.frameloop[a].push(p),p=0,l.clear(),u=!1,f&&(f=!1,y.process(x))}};return y}const N8=40;function dm(t,a){let l=!1,r=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>l=!0,h=Vr.reduce((L,F)=>(L[F]=H8(f,a?F:void 0),L),{}),{setup:m,read:p,resolveKeyframes:g,preUpdate:y,update:x,preRender:A,render:E,postRender:B}=h,k=()=>{const L=Cn.useManualTiming?u.timestamp:performance.now();l=!1,Cn.useManualTiming||(u.delta=r?1e3/60:Math.max(Math.min(L-u.timestamp,N8),1)),u.timestamp=L,u.isProcessing=!0,m.process(u),p.process(u),g.process(u),y.process(u),x.process(u),A.process(u),E.process(u),B.process(u),u.isProcessing=!1,l&&a&&(r=!1,t(k))},G=()=>{l=!0,r=!0,u.isProcessing||t(k)};return{schedule:Vr.reduce((L,F)=>{const N=h[F];return L[F]=(K,Q=!1,tt=!1)=>(l||G(),N.schedule(K,Q,tt)),L},{}),cancel:L=>{for(let F=0;F<Vr.length;F++)h[Vr[F]].cancel(L)},state:u,steps:h}}const{schedule:Bt,cancel:si,state:ce,steps:Zu}=dm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ze,!0);let Pr;function U8(){Pr=void 0}const Te={now:()=>(Pr===void 0&&Te.set(ce.isProcessing||Cn.useManualTiming?ce.timestamp:performance.now()),Pr),set:t=>{Pr=t,queueMicrotask(U8)}},mm=t=>a=>typeof a=="string"&&a.startsWith(t),r0=mm("--"),k8=mm("var(--"),o0=t=>k8(t)?Y8.test(t.split("/*")[0].trim()):!1,Y8=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,qa={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ll={...qa,transform:t=>Dn(0,1,t)},Br={...qa,default:1},Js=t=>Math.round(t*1e5)/1e5,c0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function G8(t){return t==null}const q8=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,u0=(t,a)=>l=>!!(typeof l=="string"&&q8.test(l)&&l.startsWith(t)||a&&!G8(l)&&Object.prototype.hasOwnProperty.call(l,a)),pm=(t,a,l)=>r=>{if(typeof r!="string")return r;const[u,f,h,m]=r.match(c0);return{[t]:parseFloat(u),[a]:parseFloat(f),[l]:parseFloat(h),alpha:m!==void 0?parseFloat(m):1}},X8=t=>Dn(0,255,t),Qu={...qa,transform:t=>Math.round(X8(t))},ji={test:u0("rgb","red"),parse:pm("red","green","blue"),transform:({red:t,green:a,blue:l,alpha:r=1})=>"rgba("+Qu.transform(t)+", "+Qu.transform(a)+", "+Qu.transform(l)+", "+Js(ll.transform(r))+")"};function P8(t){let a="",l="",r="",u="";return t.length>5?(a=t.substring(1,3),l=t.substring(3,5),r=t.substring(5,7),u=t.substring(7,9)):(a=t.substring(1,2),l=t.substring(2,3),r=t.substring(3,4),u=t.substring(4,5),a+=a,l+=l,r+=r,u+=u),{red:parseInt(a,16),green:parseInt(l,16),blue:parseInt(r,16),alpha:u?parseInt(u,16)/255:1}}const T1={test:u0("#"),parse:P8,transform:ji.transform},pl=t=>({test:a=>typeof a=="string"&&a.endsWith(t)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${t}`}),ni=pl("deg"),fn=pl("%"),ot=pl("px"),Z8=pl("vh"),Q8=pl("vw"),Fd={...fn,parse:t=>fn.parse(t)/100,transform:t=>fn.transform(t*100)},ja={test:u0("hsl","hue"),parse:pm("hue","saturation","lightness"),transform:({hue:t,saturation:a,lightness:l,alpha:r=1})=>"hsla("+Math.round(t)+", "+fn.transform(Js(a))+", "+fn.transform(Js(l))+", "+Js(ll.transform(r))+")"},Pt={test:t=>ji.test(t)||T1.test(t)||ja.test(t),parse:t=>ji.test(t)?ji.parse(t):ja.test(t)?ja.parse(t):T1.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ji.transform(t):ja.transform(t),getAnimatableNone:t=>{const a=Pt.parse(t);return a.alpha=0,Pt.transform(a)}},K8=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function F8(t){return isNaN(t)&&typeof t=="string"&&(t.match(c0)?.length||0)+(t.match(K8)?.length||0)>0}const gm="number",ym="color",J8="var",W8="var(",Jd="${}",I8=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function rl(t){const a=t.toString(),l=[],r={color:[],number:[],var:[]},u=[];let f=0;const m=a.replace(I8,p=>(Pt.test(p)?(r.color.push(f),u.push(ym),l.push(Pt.parse(p))):p.startsWith(W8)?(r.var.push(f),u.push(J8),l.push(p)):(r.number.push(f),u.push(gm),l.push(parseFloat(p))),++f,Jd)).split(Jd);return{values:l,split:m,indexes:r,types:u}}function vm(t){return rl(t).values}function bm(t){const{split:a,types:l}=rl(t),r=a.length;return u=>{let f="";for(let h=0;h<r;h++)if(f+=a[h],u[h]!==void 0){const m=l[h];m===gm?f+=Js(u[h]):m===ym?f+=Pt.transform(u[h]):f+=u[h]}return f}}const t7=t=>typeof t=="number"?0:Pt.test(t)?Pt.getAnimatableNone(t):t;function e7(t){const a=vm(t);return bm(t)(a.map(t7))}const li={test:F8,parse:vm,createTransformer:bm,getAnimatableNone:e7};function Ku(t,a,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?t+(a-t)*6*l:l<1/2?a:l<2/3?t+(a-t)*(2/3-l)*6:t}function n7({hue:t,saturation:a,lightness:l,alpha:r}){t/=360,a/=100,l/=100;let u=0,f=0,h=0;if(!a)u=f=h=l;else{const m=l<.5?l*(1+a):l+a-l*a,p=2*l-m;u=Ku(p,m,t+1/3),f=Ku(p,m,t),h=Ku(p,m,t-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(h*255),alpha:r}}function eo(t,a){return l=>l>0?a:t}const Vt=(t,a,l)=>t+(a-t)*l,Fu=(t,a,l)=>{const r=t*t,u=l*(a*a-r)+r;return u<0?0:Math.sqrt(u)},i7=[T1,ji,ja],a7=t=>i7.find(a=>a.test(t));function Wd(t){const a=a7(t);if(!a)return!1;let l=a.parse(t);return a===ja&&(l=n7(l)),l}const Id=(t,a)=>{const l=Wd(t),r=Wd(a);if(!l||!r)return eo(t,a);const u={...l};return f=>(u.red=Fu(l.red,r.red,f),u.green=Fu(l.green,r.green,f),u.blue=Fu(l.blue,r.blue,f),u.alpha=Vt(l.alpha,r.alpha,f),ji.transform(u))},A1=new Set(["none","hidden"]);function s7(t,a){return A1.has(t)?l=>l<=0?t:a:l=>l>=1?a:t}function l7(t,a){return l=>Vt(t,a,l)}function f0(t){return typeof t=="number"?l7:typeof t=="string"?o0(t)?eo:Pt.test(t)?Id:c7:Array.isArray(t)?xm:typeof t=="object"?Pt.test(t)?Id:r7:eo}function xm(t,a){const l=[...t],r=l.length,u=t.map((f,h)=>f0(f)(f,a[h]));return f=>{for(let h=0;h<r;h++)l[h]=u[h](f);return l}}function r7(t,a){const l={...t,...a},r={};for(const u in l)t[u]!==void 0&&a[u]!==void 0&&(r[u]=f0(t[u])(t[u],a[u]));return u=>{for(const f in r)l[f]=r[f](u);return l}}function o7(t,a){const l=[],r={color:0,var:0,number:0};for(let u=0;u<a.values.length;u++){const f=a.types[u],h=t.indexes[f][r[f]],m=t.values[h]??0;l[u]=m,r[f]++}return l}const c7=(t,a)=>{const l=li.createTransformer(a),r=rl(t),u=rl(a);return r.indexes.var.length===u.indexes.var.length&&r.indexes.color.length===u.indexes.color.length&&r.indexes.number.length>=u.indexes.number.length?A1.has(t)&&!u.values.length||A1.has(a)&&!r.values.length?s7(t,a):dl(xm(o7(r,u),u.values),l):eo(t,a)};function Sm(t,a,l){return typeof t=="number"&&typeof a=="number"&&typeof l=="number"?Vt(t,a,l):f0(t)(t,a)}const u7=t=>{const a=({timestamp:l})=>t(l);return{start:(l=!0)=>Bt.update(a,l),stop:()=>si(a),now:()=>ce.isProcessing?ce.timestamp:Te.now()}},Tm=(t,a,l=10)=>{let r="";const u=Math.max(Math.round(a/l),2);for(let f=0;f<u;f++)r+=Math.round(t(f/(u-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},no=2e4;function h0(t){let a=0;const l=50;let r=t.next(a);for(;!r.done&&a<no;)a+=l,r=t.next(a);return a>=no?1/0:a}function f7(t,a=100,l){const r=l({...t,keyframes:[0,a]}),u=Math.min(h0(r),no);return{type:"keyframes",ease:f=>r.next(u*f).value/a,duration:un(u)}}const h7=5;function Am(t,a,l){const r=Math.max(a-h7,0);return nm(l-t(r),a-r)}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ju=.001;function d7({duration:t=Ht.duration,bounce:a=Ht.bounce,velocity:l=Ht.velocity,mass:r=Ht.mass}){let u,f,h=1-a;h=Dn(Ht.minDamping,Ht.maxDamping,h),t=Dn(Ht.minDuration,Ht.maxDuration,un(t)),h<1?(u=g=>{const y=g*h,x=y*t,A=y-l,E=z1(g,h),B=Math.exp(-x);return Ju-A/E*B},f=g=>{const x=g*h*t,A=x*l+l,E=Math.pow(h,2)*Math.pow(g,2)*t,B=Math.exp(-x),k=z1(Math.pow(g,2),h);return(-u(g)+Ju>0?-1:1)*((A-E)*B)/k}):(u=g=>{const y=Math.exp(-g*t),x=(g-l)*t+1;return-Ju+y*x},f=g=>{const y=Math.exp(-g*t),x=(l-g)*(t*t);return y*x});const m=5/t,p=p7(u,f,m);if(t=cn(t),isNaN(p))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:t};{const g=Math.pow(p,2)*r;return{stiffness:g,damping:h*2*Math.sqrt(r*g),duration:t}}}const m7=12;function p7(t,a,l){let r=l;for(let u=1;u<m7;u++)r=r-t(r)/a(r);return r}function z1(t,a){return t*Math.sqrt(1-a*a)}const g7=["duration","bounce"],y7=["stiffness","damping","mass"];function t3(t,a){return a.some(l=>t[l]!==void 0)}function v7(t){let a={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...t};if(!t3(t,y7)&&t3(t,g7))if(t.visualDuration){const l=t.visualDuration,r=2*Math.PI/(l*1.2),u=r*r,f=2*Dn(.05,1,1-(t.bounce||0))*Math.sqrt(u);a={...a,mass:Ht.mass,stiffness:u,damping:f}}else{const l=d7(t);a={...a,...l,mass:Ht.mass},a.isResolvedFromDuration=!0}return a}function io(t=Ht.visualDuration,a=Ht.bounce){const l=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:a}:t;let{restSpeed:r,restDelta:u}=l;const f=l.keyframes[0],h=l.keyframes[l.keyframes.length-1],m={done:!1,value:f},{stiffness:p,damping:g,mass:y,duration:x,velocity:A,isResolvedFromDuration:E}=v7({...l,velocity:-un(l.velocity||0)}),B=A||0,k=g/(2*Math.sqrt(p*y)),G=h-f,U=un(Math.sqrt(p/y)),q=Math.abs(G)<5;r||(r=q?Ht.restSpeed.granular:Ht.restSpeed.default),u||(u=q?Ht.restDelta.granular:Ht.restDelta.default);let L;if(k<1){const N=z1(U,k);L=K=>{const Q=Math.exp(-k*U*K);return h-Q*((B+k*U*G)/N*Math.sin(N*K)+G*Math.cos(N*K))}}else if(k===1)L=N=>h-Math.exp(-U*N)*(G+(B+U*G)*N);else{const N=U*Math.sqrt(k*k-1);L=K=>{const Q=Math.exp(-k*U*K),tt=Math.min(N*K,300);return h-Q*((B+k*U*G)*Math.sinh(tt)+N*G*Math.cosh(tt))/N}}const F={calculatedDuration:E&&x||null,next:N=>{const K=L(N);if(E)m.done=N>=x;else{let Q=N===0?B:0;k<1&&(Q=N===0?cn(B):Am(L,N,K));const tt=Math.abs(Q)<=r,St=Math.abs(h-K)<=u;m.done=tt&&St}return m.value=m.done?h:K,m},toString:()=>{const N=Math.min(h0(F),no),K=Tm(Q=>F.next(N*Q).value,N,30);return N+"ms "+K},toTransition:()=>{}};return F}io.applyToOptions=t=>{const a=f7(t,100,io);return t.ease=a.ease,t.duration=cn(a.duration),t.type="keyframes",t};function M1({keyframes:t,velocity:a=0,power:l=.8,timeConstant:r=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:h,min:m,max:p,restDelta:g=.5,restSpeed:y}){const x=t[0],A={done:!1,value:x},E=tt=>m!==void 0&&tt<m||p!==void 0&&tt>p,B=tt=>m===void 0?p:p===void 0||Math.abs(m-tt)<Math.abs(p-tt)?m:p;let k=l*a;const G=x+k,U=h===void 0?G:h(G);U!==G&&(k=U-x);const q=tt=>-k*Math.exp(-tt/r),L=tt=>U+q(tt),F=tt=>{const St=q(tt),Nt=L(tt);A.done=Math.abs(St)<=g,A.value=A.done?U:Nt};let N,K;const Q=tt=>{E(A.value)&&(N=tt,K=io({keyframes:[A.value,B(A.value)],velocity:Am(L,tt,A.value),damping:u,stiffness:f,restDelta:g,restSpeed:y}))};return Q(0),{calculatedDuration:null,next:tt=>{let St=!1;return!K&&N===void 0&&(St=!0,F(tt),Q(tt)),N!==void 0&&tt>=N?K.next(tt-N):(!St&&F(tt),A)}}}function b7(t,a,l){const r=[],u=l||Cn.mix||Sm,f=t.length-1;for(let h=0;h<f;h++){let m=u(t[h],t[h+1]);if(a){const p=Array.isArray(a)?a[h]||Ze:a;m=dl(p,m)}r.push(m)}return r}function x7(t,a,{clamp:l=!0,ease:r,mixer:u}={}){const f=t.length;if(n0(f===a.length),f===1)return()=>a[0];if(f===2&&a[0]===a[1])return()=>a[1];const h=t[0]===t[1];t[0]>t[f-1]&&(t=[...t].reverse(),a=[...a].reverse());const m=b7(a,r,u),p=m.length,g=y=>{if(h&&y<t[0])return a[0];let x=0;if(p>1)for(;x<t.length-2&&!(y<t[x+1]);x++);const A=sl(t[x],t[x+1],y);return m[x](A)};return l?y=>g(Dn(t[0],t[f-1],y)):g}function S7(t,a){const l=t[t.length-1];for(let r=1;r<=a;r++){const u=sl(0,a,r);t.push(Vt(l,1,u))}}function T7(t){const a=[0];return S7(a,t.length-1),a}function A7(t,a){return t.map(l=>l*a)}function z7(t,a){return t.map(()=>a||fm).splice(0,t.length-1)}function Ws({duration:t=300,keyframes:a,times:l,ease:r="easeInOut"}){const u=B8(r)?r.map(Qd):Qd(r),f={done:!1,value:a[0]},h=A7(l&&l.length===a.length?l:T7(a),t),m=x7(h,a,{ease:Array.isArray(u)?u:z7(a,u)});return{calculatedDuration:t,next:p=>(f.value=m(p),f.done=p>=t,f)}}const M7=t=>t!==null;function d0(t,{repeat:a,repeatType:l="loop"},r,u=1){const f=t.filter(M7),m=u<0||a&&l!=="loop"&&a%2===1?0:f.length-1;return!m||r===void 0?f[m]:r}const w7={decay:M1,inertia:M1,tween:Ws,keyframes:Ws,spring:io};function zm(t){typeof t.type=="string"&&(t.type=w7[t.type])}class m0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,l){return this.finished.then(a,l)}}const E7=t=>t/100;class p0 extends m0{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==Te.now()&&this.tick(Te.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;zm(a);const{type:l=Ws,repeat:r=0,repeatDelay:u=0,repeatType:f,velocity:h=0}=a;let{keyframes:m}=a;const p=l||Ws;p!==Ws&&typeof m[0]!="number"&&(this.mixKeyframes=dl(E7,Sm(m[0],m[1])),m=[0,100]);const g=p({...a,keyframes:m});f==="mirror"&&(this.mirroredGenerator=p({...a,keyframes:[...m].reverse(),velocity:-h})),g.calculatedDuration===null&&(g.calculatedDuration=h0(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+u,this.totalDuration=this.resolvedDuration*(r+1)-u,this.generator=g}updateTime(a){const l=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(a,l=!1){const{generator:r,totalDuration:u,mixKeyframes:f,mirroredGenerator:h,resolvedDuration:m,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:x,repeatType:A,repeatDelay:E,type:B,onUpdate:k,finalKeyframe:G}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-u/this.speed,this.startTime)),l?this.currentTime=a:this.updateTime(a);const U=this.currentTime-g*(this.playbackSpeed>=0?1:-1),q=this.playbackSpeed>=0?U<0:U>u;this.currentTime=Math.max(U,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let L=this.currentTime,F=r;if(x){const tt=Math.min(this.currentTime,u)/m;let St=Math.floor(tt),Nt=tt%1;!Nt&&tt>=1&&(Nt=1),Nt===1&&St--,St=Math.min(St,x+1),!!(St%2)&&(A==="reverse"?(Nt=1-Nt,E&&(Nt-=E/m)):A==="mirror"&&(F=h)),L=Dn(0,1,Nt)*m}const N=q?{done:!1,value:y[0]}:F.next(L);f&&(N.value=f(N.value));let{done:K}=N;!q&&p!==null&&(K=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return Q&&B!==M1&&(N.value=d0(y,this.options,G,this.speed)),k&&k(N.value),Q&&this.finish(),N}then(a,l){return this.finished.then(a,l)}get duration(){return un(this.calculatedDuration)}get time(){return un(this.currentTime)}set time(a){a=cn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(Te.now());const l=this.playbackSpeed!==a;this.playbackSpeed=a,l&&(this.time=un(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=u7,startTime:l}=this.options;this.driver||(this.driver=a(u=>this.tick(u))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=l??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Te.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function $7(t){for(let a=1;a<t.length;a++)t[a]??(t[a]=t[a-1])}const Ri=t=>t*180/Math.PI,w1=t=>{const a=Ri(Math.atan2(t[1],t[0]));return E1(a)},D7={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:w1,rotateZ:w1,skewX:t=>Ri(Math.atan(t[1])),skewY:t=>Ri(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},E1=t=>(t=t%360,t<0&&(t+=360),t),e3=w1,n3=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),i3=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),C7={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:n3,scaleY:i3,scale:t=>(n3(t)+i3(t))/2,rotateX:t=>E1(Ri(Math.atan2(t[6],t[5]))),rotateY:t=>E1(Ri(Math.atan2(-t[2],t[0]))),rotateZ:e3,rotate:e3,skewX:t=>Ri(Math.atan(t[4])),skewY:t=>Ri(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function $1(t){return t.includes("scale")?1:0}function D1(t,a){if(!t||t==="none")return $1(a);const l=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,u;if(l)r=C7,u=l;else{const m=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=D7,u=m}if(!u)return $1(a);const f=r[a],h=u[1].split(",").map(R7);return typeof f=="function"?f(h):h[f]}const j7=(t,a)=>{const{transform:l="none"}=getComputedStyle(t);return D1(l,a)};function R7(t){return parseFloat(t.trim())}const Xa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pa=new Set(Xa),a3=t=>t===qa||t===ot,O7=new Set(["x","y","z"]),V7=Xa.filter(t=>!O7.has(t));function B7(t){const a=[];return V7.forEach(l=>{const r=t.getValue(l);r!==void 0&&(a.push([l,r.get()]),r.set(l.startsWith("scale")?1:0))}),a}const Bi={width:({x:t},{paddingLeft:a="0",paddingRight:l="0"})=>t.max-t.min-parseFloat(a)-parseFloat(l),height:({y:t},{paddingTop:a="0",paddingBottom:l="0"})=>t.max-t.min-parseFloat(a)-parseFloat(l),top:(t,{top:a})=>parseFloat(a),left:(t,{left:a})=>parseFloat(a),bottom:({y:t},{top:a})=>parseFloat(a)+(t.max-t.min),right:({x:t},{left:a})=>parseFloat(a)+(t.max-t.min),x:(t,{transform:a})=>D1(a,"x"),y:(t,{transform:a})=>D1(a,"y")};Bi.translateX=Bi.x;Bi.translateY=Bi.y;const _i=new Set;let C1=!1,j1=!1,R1=!1;function Mm(){if(j1){const t=Array.from(_i).filter(r=>r.needsMeasurement),a=new Set(t.map(r=>r.element)),l=new Map;a.forEach(r=>{const u=B7(r);u.length&&(l.set(r,u),r.render())}),t.forEach(r=>r.measureInitialState()),a.forEach(r=>{r.render();const u=l.get(r);u&&u.forEach(([f,h])=>{r.getValue(f)?.set(h)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}j1=!1,C1=!1,_i.forEach(t=>t.complete(R1)),_i.clear()}function wm(){_i.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(j1=!0)})}function _7(){R1=!0,wm(),Mm(),R1=!1}class g0{constructor(a,l,r,u,f,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=l,this.name=r,this.motionValue=u,this.element=f,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(_i.add(this),C1||(C1=!0,Bt.read(wm),Bt.resolveKeyframes(Mm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:l,element:r,motionValue:u}=this;if(a[0]===null){const f=u?.get(),h=a[a.length-1];if(f!==void 0)a[0]=f;else if(r&&l){const m=r.readValue(l,h);m!=null&&(a[0]=m)}a[0]===void 0&&(a[0]=h),u&&f===void 0&&u.set(a[0])}$7(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),_i.delete(this)}cancel(){this.state==="scheduled"&&(_i.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const L7=t=>t.startsWith("--");function H7(t,a,l){L7(a)?t.style.setProperty(a,l):t.style[a]=l}const N7=i0(()=>window.ScrollTimeline!==void 0),U7={};function k7(t,a){const l=i0(t);return()=>U7[a]??l()}const Em=k7(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ks=([t,a,l,r])=>`cubic-bezier(${t}, ${a}, ${l}, ${r})`,s3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ks([0,.65,.55,1]),circOut:Ks([.55,0,1,.45]),backIn:Ks([.31,.01,.66,-.59]),backOut:Ks([.33,1.53,.69,.99])};function $m(t,a){if(t)return typeof t=="function"?Em()?Tm(t,a):"ease-out":hm(t)?Ks(t):Array.isArray(t)?t.map(l=>$m(l,a)||s3.easeOut):s3[t]}function Y7(t,a,l,{delay:r=0,duration:u=300,repeat:f=0,repeatType:h="loop",ease:m="easeOut",times:p}={},g=void 0){const y={[a]:l};p&&(y.offset=p);const x=$m(m,u);Array.isArray(x)&&(y.easing=x);const A={delay:r,duration:u,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:f+1,direction:h==="reverse"?"alternate":"normal"};return g&&(A.pseudoElement=g),t.animate(y,A)}function Dm(t){return typeof t=="function"&&"applyToOptions"in t}function G7({type:t,...a}){return Dm(t)&&Em()?t.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class q7 extends m0{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:l,name:r,keyframes:u,pseudoElement:f,allowFlatten:h=!1,finalKeyframe:m,onComplete:p}=a;this.isPseudoElement=!!f,this.allowFlatten=h,this.options=a,n0(typeof a.type!="string");const g=G7(a);this.animation=Y7(l,r,u,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=d0(u,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(y):H7(l,r,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return un(Number(a))}get time(){return un(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=cn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&N7()?(this.animation.timeline=a,Ze):l(this)}}const Cm={anticipate:om,backInOut:rm,circInOut:um};function X7(t){return t in Cm}function P7(t){typeof t.ease=="string"&&X7(t.ease)&&(t.ease=Cm[t.ease])}const l3=10;class Z7 extends q7{constructor(a){P7(a),zm(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:l,onUpdate:r,onComplete:u,element:f,...h}=this.options;if(!l)return;if(a!==void 0){l.set(a);return}const m=new p0({...h,autoplay:!1}),p=cn(this.finishedTime??this.time);l.setWithVelocity(m.sample(p-l3).value,m.sample(p).value,l3),m.stop()}}const r3=(t,a)=>a==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(li.test(t)||t==="0")&&!t.startsWith("url("));function Q7(t){const a=t[0];if(t.length===1)return!0;for(let l=0;l<t.length;l++)if(t[l]!==a)return!0}function K7(t,a,l,r){const u=t[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const f=t[t.length-1],h=r3(u,a),m=r3(f,a);return!h||!m?!1:Q7(t)||(l==="spring"||Dm(l))&&r}function jm(t){return tm(t)&&"offsetHeight"in t}const F7=new Set(["opacity","clipPath","filter","transform"]),J7=i0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function W7(t){const{motionValue:a,name:l,repeatDelay:r,repeatType:u,damping:f,type:h}=t;if(!jm(a?.owner?.current))return!1;const{onUpdate:m,transformTemplate:p}=a.owner.getProps();return J7()&&l&&F7.has(l)&&(l!=="transform"||!p)&&!m&&!r&&u!=="mirror"&&f!==0&&h!=="inertia"}const I7=40;class t9 extends m0{constructor({autoplay:a=!0,delay:l=0,type:r="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:h="loop",keyframes:m,name:p,motionValue:g,element:y,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Te.now();const A={autoplay:a,delay:l,type:r,repeat:u,repeatDelay:f,repeatType:h,name:p,motionValue:g,element:y,...x},E=y?.KeyframeResolver||g0;this.keyframeResolver=new E(m,(B,k,G)=>this.onKeyframesResolved(B,k,A,!G),p,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,l,r,u){this.keyframeResolver=void 0;const{name:f,type:h,velocity:m,delay:p,isHandoff:g,onUpdate:y}=r;this.resolvedAt=Te.now(),K7(a,f,h,m)||((Cn.instantAnimations||!p)&&y?.(d0(a,r,l)),a[0]=a[a.length-1],r.duration=0,r.repeat=0);const A={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>I7?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...r,keyframes:a},E=!g&&W7(A)?new Z7({...A,element:A.motionValue.owner.current}):new p0(A);E.finished.then(()=>this.notifyFinished()).catch(Ze),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(a,l){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),_7()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const e9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function n9(t){const a=e9.exec(t);if(!a)return[,];const[,l,r,u]=a;return[`--${l??r}`,u]}function Rm(t,a,l=1){const[r,u]=n9(t);if(!r)return;const f=window.getComputedStyle(a).getPropertyValue(r);if(f){const h=f.trim();return I4(h)?parseFloat(h):h}return o0(u)?Rm(u,a,l+1):u}function y0(t,a){return t?.[a]??t?.default??t}const Om=new Set(["width","height","top","left","right","bottom",...Xa]),i9={test:t=>t==="auto",parse:t=>t},Vm=t=>a=>a.test(t),Bm=[qa,ot,fn,ni,Q8,Z8,i9],o3=t=>Bm.find(Vm(t));function a9(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||em(t):!0}const s9=new Set(["brightness","contrast","saturate","opacity"]);function l9(t){const[a,l]=t.slice(0,-1).split("(");if(a==="drop-shadow")return t;const[r]=l.match(c0)||[];if(!r)return t;const u=l.replace(r,"");let f=s9.has(a)?1:0;return r!==l&&(f*=100),a+"("+f+u+")"}const r9=/\b([a-z-]*)\(.*?\)/gu,O1={...li,getAnimatableNone:t=>{const a=t.match(r9);return a?a.map(l9).join(" "):t}},c3={...qa,transform:Math.round},o9={rotate:ni,rotateX:ni,rotateY:ni,rotateZ:ni,scale:Br,scaleX:Br,scaleY:Br,scaleZ:Br,skew:ni,skewX:ni,skewY:ni,distance:ot,translateX:ot,translateY:ot,translateZ:ot,x:ot,y:ot,z:ot,perspective:ot,transformPerspective:ot,opacity:ll,originX:Fd,originY:Fd,originZ:ot},v0={borderWidth:ot,borderTopWidth:ot,borderRightWidth:ot,borderBottomWidth:ot,borderLeftWidth:ot,borderRadius:ot,radius:ot,borderTopLeftRadius:ot,borderTopRightRadius:ot,borderBottomRightRadius:ot,borderBottomLeftRadius:ot,width:ot,maxWidth:ot,height:ot,maxHeight:ot,top:ot,right:ot,bottom:ot,left:ot,padding:ot,paddingTop:ot,paddingRight:ot,paddingBottom:ot,paddingLeft:ot,margin:ot,marginTop:ot,marginRight:ot,marginBottom:ot,marginLeft:ot,backgroundPositionX:ot,backgroundPositionY:ot,...o9,zIndex:c3,fillOpacity:ll,strokeOpacity:ll,numOctaves:c3},c9={...v0,color:Pt,backgroundColor:Pt,outlineColor:Pt,fill:Pt,stroke:Pt,borderColor:Pt,borderTopColor:Pt,borderRightColor:Pt,borderBottomColor:Pt,borderLeftColor:Pt,filter:O1,WebkitFilter:O1},_m=t=>c9[t];function Lm(t,a){let l=_m(t);return l!==O1&&(l=li),l.getAnimatableNone?l.getAnimatableNone(a):void 0}const u9=new Set(["auto","none","0"]);function f9(t,a,l){let r=0,u;for(;r<t.length&&!u;){const f=t[r];typeof f=="string"&&!u9.has(f)&&rl(f).values.length&&(u=t[r]),r++}if(u&&l)for(const f of a)t[f]=Lm(l,u)}class h9 extends g0{constructor(a,l,r,u,f){super(a,l,r,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:l,name:r}=this;if(!l||!l.current)return;super.readKeyframes();for(let p=0;p<a.length;p++){let g=a[p];if(typeof g=="string"&&(g=g.trim(),o0(g))){const y=Rm(g,l.current);y!==void 0&&(a[p]=y),p===a.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Om.has(r)||a.length!==2)return;const[u,f]=a,h=o3(u),m=o3(f);if(h!==m)if(a3(h)&&a3(m))for(let p=0;p<a.length;p++){const g=a[p];typeof g=="string"&&(a[p]=parseFloat(g))}else Bi[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:l}=this,r=[];for(let u=0;u<a.length;u++)(a[u]===null||a9(a[u]))&&r.push(u);r.length&&f9(a,r,l)}measureInitialState(){const{element:a,unresolvedKeyframes:l,name:r}=this;if(!a||!a.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bi[r](a.measureViewportBox(),window.getComputedStyle(a.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&a.getValue(r,u).jump(u,!1)}measureEndState(){const{element:a,name:l,unresolvedKeyframes:r}=this;if(!a||!a.current)return;const u=a.getValue(l);u&&u.jump(this.measuredOrigin,!1);const f=r.length-1,h=r[f];r[f]=Bi[l](a.measureViewportBox(),window.getComputedStyle(a.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,p])=>{a.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function d9(t,a,l){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const u=l?.[t]??r.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t)}const Hm=(t,a)=>a&&typeof t=="number"?a.transform(t):t,u3=30,m9=t=>!isNaN(parseFloat(t));class p9{constructor(a,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,u=!0)=>{const f=Te.now();if(this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty();u&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(a),this.owner=l.owner}setCurrent(a){this.current=a,this.updatedAt=Te.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=m9(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,l){this.events[a]||(this.events[a]=new a0);const r=this.events[a].add(l);return a==="change"?()=>{r(),Bt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,l){this.passiveEffect=a,this.stopPassiveEffect=l}set(a,l=!0){!l||!this.passiveEffect?this.updateAndNotify(a,l):this.passiveEffect(a,this.updateAndNotify)}setWithVelocity(a,l,r){this.set(l),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-r}jump(a,l=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=Te.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>u3)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,u3);return nm(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(a){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=a(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ka(t,a){return new p9(t,a)}const{schedule:b0}=dm(queueMicrotask,!1),Ie={x:!1,y:!1};function Nm(){return Ie.x||Ie.y}function g9(t){return t==="x"||t==="y"?Ie[t]?null:(Ie[t]=!0,()=>{Ie[t]=!1}):Ie.x||Ie.y?null:(Ie.x=Ie.y=!0,()=>{Ie.x=Ie.y=!1})}function Um(t,a){const l=d9(t),r=new AbortController,u={passive:!0,...a,signal:r.signal};return[l,u,()=>r.abort()]}function f3(t){return!(t.pointerType==="touch"||Nm())}function y9(t,a,l={}){const[r,u,f]=Um(t,l),h=m=>{if(!f3(m))return;const{target:p}=m,g=a(p,m);if(typeof g!="function"||!p)return;const y=x=>{f3(x)&&(g(x),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,u)};return r.forEach(m=>{m.addEventListener("pointerenter",h,u)}),f}const km=(t,a)=>a?t===a?!0:km(t,a.parentElement):!1,x0=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,v9=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function b9(t){return v9.has(t.tagName)||t.tabIndex!==-1}const Zr=new WeakSet;function h3(t){return a=>{a.key==="Enter"&&t(a)}}function Wu(t,a){t.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const x9=(t,a)=>{const l=t.currentTarget;if(!l)return;const r=h3(()=>{if(Zr.has(l))return;Wu(l,"down");const u=h3(()=>{Wu(l,"up")}),f=()=>Wu(l,"cancel");l.addEventListener("keyup",u,a),l.addEventListener("blur",f,a)});l.addEventListener("keydown",r,a),l.addEventListener("blur",()=>l.removeEventListener("keydown",r),a)};function d3(t){return x0(t)&&!Nm()}function S9(t,a,l={}){const[r,u,f]=Um(t,l),h=m=>{const p=m.currentTarget;if(!d3(m))return;Zr.add(p);const g=a(p,m),y=(E,B)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",A),Zr.has(p)&&Zr.delete(p),d3(E)&&typeof g=="function"&&g(E,{success:B})},x=E=>{y(E,p===window||p===document||l.useGlobalTarget||km(p,E.target))},A=E=>{y(E,!1)};window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",A,u)};return r.forEach(m=>{(l.useGlobalTarget?window:m).addEventListener("pointerdown",h,u),jm(m)&&(m.addEventListener("focus",g=>x9(g,u)),!b9(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),f}function Ym(t){return tm(t)&&"ownerSVGElement"in t}function T9(t){return Ym(t)&&t.tagName==="svg"}const me=t=>!!(t&&t.getVelocity),A9=[...Bm,Pt,li],z9=t=>A9.find(Vm(t)),Gm=I.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function M9(t=!0){const a=I.useContext(I1);if(a===null)return[!0,null];const{isPresent:l,onExitComplete:r,register:u}=a,f=I.useId();I.useEffect(()=>{if(t)return u(f)},[t]);const h=I.useCallback(()=>t&&r&&r(f),[f,r,t]);return!l&&r?[!1,h]:[!0]}const qm=I.createContext({strict:!1}),m3={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ya={};for(const t in m3)Ya[t]={isEnabled:a=>m3[t].some(l=>!!a[l])};function w9(t){for(const a in t)Ya[a]={...Ya[a],...t[a]}}const E9=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ao(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||E9.has(t)}let Xm=t=>!ao(t);function $9(t){typeof t=="function"&&(Xm=a=>a.startsWith("on")?!ao(a):t(a))}try{$9(require("@emotion/is-prop-valid").default)}catch{}function D9(t,a,l){const r={};for(const u in t)u==="values"&&typeof t.values=="object"||(Xm(u)||l===!0&&ao(u)||!a&&!ao(u)||t.draggable&&u.startsWith("onDrag"))&&(r[u]=t[u]);return r}function C9(t){if(typeof Proxy>"u")return t;const a=new Map,l=(...r)=>t(...r);return new Proxy(l,{get:(r,u)=>u==="create"?t:(a.has(u)||a.set(u,t(u)),a.get(u))})}const bo=I.createContext({});function xo(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ol(t){return typeof t=="string"||Array.isArray(t)}const S0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],T0=["initial",...S0];function So(t){return xo(t.animate)||T0.some(a=>ol(t[a]))}function Pm(t){return!!(So(t)||t.variants)}function j9(t,a){if(So(t)){const{initial:l,animate:r}=t;return{initial:l===!1||ol(l)?l:void 0,animate:ol(r)?r:void 0}}return t.inherit!==!1?a:{}}function R9(t){const{initial:a,animate:l}=j9(t,I.useContext(bo));return I.useMemo(()=>({initial:a,animate:l}),[p3(a),p3(l)])}function p3(t){return Array.isArray(t)?t.join(" "):t}const O9=Symbol.for("motionComponentSymbol");function Ra(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function V9(t,a,l){return I.useCallback(r=>{r&&t.onMount&&t.onMount(r),a&&(r?a.mount(r):a.unmount()),l&&(typeof l=="function"?l(r):Ra(l)&&(l.current=r))},[a])}const A0=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),B9="framerAppearId",Zm="data-"+A0(B9),Qm=I.createContext({});function _9(t,a,l,r,u){const{visualElement:f}=I.useContext(bo),h=I.useContext(qm),m=I.useContext(I1),p=I.useContext(Gm).reducedMotion,g=I.useRef(null);r=r||h.renderer,!g.current&&r&&(g.current=r(t,{visualState:a,parent:f,props:l,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:p}));const y=g.current,x=I.useContext(Qm);y&&!y.projection&&u&&(y.type==="html"||y.type==="svg")&&L9(g.current,l,u,x);const A=I.useRef(!1);I.useInsertionEffect(()=>{y&&A.current&&y.update(l,m)});const E=l[Zm],B=I.useRef(!!E&&!window.MotionHandoffIsComplete?.(E)&&window.MotionHasOptimisedAnimation?.(E));return $8(()=>{y&&(A.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),b0.render(y.render),B.current&&y.animationState&&y.animationState.animateChanges())}),I.useEffect(()=>{y&&(!B.current&&y.animationState&&y.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(E)}),B.current=!1))}),y}function L9(t,a,l,r){const{layoutId:u,layout:f,drag:h,dragConstraints:m,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=a;t.projection=new l(t.latestValues,a["data-framer-portal-id"]?void 0:Km(t.parent)),t.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!h||m&&Ra(m),visualElement:t,animationType:typeof f=="string"?f:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:p,layoutRoot:g})}function Km(t){if(t)return t.options.allowProjection!==!1?t.projection:Km(t.parent)}function H9({preloadedFeatures:t,createVisualElement:a,useRender:l,useVisualState:r,Component:u}){t&&w9(t);function f(m,p){let g;const y={...I.useContext(Gm),...m,layoutId:N9(m)},{isStatic:x}=y,A=R9(m),E=r(m,x);if(!x&&W1){U9();const B=k9(y);g=B.MeasureLayout,A.visualElement=_9(u,E,y,a,B.ProjectionNode)}return b.jsxs(bo.Provider,{value:A,children:[g&&A.visualElement?b.jsx(g,{visualElement:A.visualElement,...y}):null,l(u,m,V9(E,A.visualElement,p),E,x,A.visualElement)]})}f.displayName=`motion.${typeof u=="string"?u:`create(${u.displayName??u.name??""})`}`;const h=I.forwardRef(f);return h[O9]=u,h}function N9({layoutId:t}){const a=I.useContext(W4).id;return a&&t!==void 0?a+"-"+t:t}function U9(t,a){I.useContext(qm).strict}function k9(t){const{drag:a,layout:l}=Ya;if(!a&&!l)return{};const r={...a,...l};return{MeasureLayout:a?.isEnabled(t)||l?.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const cl={};function Y9(t){for(const a in t)cl[a]=t[a],r0(a)&&(cl[a].isCSSVariable=!0)}function Fm(t,{layout:a,layoutId:l}){return Pa.has(t)||t.startsWith("origin")||(a||l!==void 0)&&(!!cl[t]||t==="opacity")}const G9={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},q9=Xa.length;function X9(t,a,l){let r="",u=!0;for(let f=0;f<q9;f++){const h=Xa[f],m=t[h];if(m===void 0)continue;let p=!0;if(typeof m=="number"?p=m===(h.startsWith("scale")?1:0):p=parseFloat(m)===0,!p||l){const g=Hm(m,v0[h]);if(!p){u=!1;const y=G9[h]||h;r+=`${y}(${g}) `}l&&(a[h]=g)}}return r=r.trim(),l?r=l(a,u?"":r):u&&(r="none"),r}function z0(t,a,l){const{style:r,vars:u,transformOrigin:f}=t;let h=!1,m=!1;for(const p in a){const g=a[p];if(Pa.has(p)){h=!0;continue}else if(r0(p)){u[p]=g;continue}else{const y=Hm(g,v0[p]);p.startsWith("origin")?(m=!0,f[p]=y):r[p]=y}}if(a.transform||(h||l?r.transform=X9(a,t.transform,l):r.transform&&(r.transform="none")),m){const{originX:p="50%",originY:g="50%",originZ:y=0}=f;r.transformOrigin=`${p} ${g} ${y}`}}const M0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Jm(t,a,l){for(const r in a)!me(a[r])&&!Fm(r,l)&&(t[r]=a[r])}function P9({transformTemplate:t},a){return I.useMemo(()=>{const l=M0();return z0(l,a,t),Object.assign({},l.vars,l.style)},[a])}function Z9(t,a){const l=t.style||{},r={};return Jm(r,l,t),Object.assign(r,P9(t,a)),r}function Q9(t,a){const l={},r=Z9(t,a);return t.drag&&t.dragListener!==!1&&(l.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(l.tabIndex=0),l.style=r,l}const K9={offset:"stroke-dashoffset",array:"stroke-dasharray"},F9={offset:"strokeDashoffset",array:"strokeDasharray"};function J9(t,a,l=1,r=0,u=!0){t.pathLength=1;const f=u?K9:F9;t[f.offset]=ot.transform(-r);const h=ot.transform(a),m=ot.transform(l);t[f.array]=`${h} ${m}`}function Wm(t,{attrX:a,attrY:l,attrScale:r,pathLength:u,pathSpacing:f=1,pathOffset:h=0,...m},p,g,y){if(z0(t,m,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:A}=t;x.transform&&(A.transform=x.transform,delete x.transform),(A.transform||x.transformOrigin)&&(A.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),A.transform&&(A.transformBox=y?.transformBox??"fill-box",delete x.transformBox),a!==void 0&&(x.x=a),l!==void 0&&(x.y=l),r!==void 0&&(x.scale=r),u!==void 0&&J9(x,u,f,h,!1)}const Im=()=>({...M0(),attrs:{}}),t6=t=>typeof t=="string"&&t.toLowerCase()==="svg";function W9(t,a,l,r){const u=I.useMemo(()=>{const f=Im();return Wm(f,a,t6(r),t.transformTemplate,t.style),{...f.attrs,style:{...f.style}}},[a]);if(t.style){const f={};Jm(f,t.style,t),u.style={...f,...u.style}}return u}const I9=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function w0(t){return typeof t!="string"||t.includes("-")?!1:!!(I9.indexOf(t)>-1||/[A-Z]/u.test(t))}function ty(t=!1){return(l,r,u,{latestValues:f},h)=>{const p=(w0(l)?W9:Q9)(r,f,h,l),g=D9(r,typeof l=="string",t),y=l!==I.Fragment?{...g,...p,ref:u}:{},{children:x}=r,A=I.useMemo(()=>me(x)?x.get():x,[x]);return I.createElement(l,{...y,children:A})}}function g3(t){const a=[{},{}];return t?.values.forEach((l,r)=>{a[0][r]=l.get(),a[1][r]=l.getVelocity()}),a}function E0(t,a,l,r){if(typeof a=="function"){const[u,f]=g3(r);a=a(l!==void 0?l:t.custom,u,f)}if(typeof a=="string"&&(a=t.variants&&t.variants[a]),typeof a=="function"){const[u,f]=g3(r);a=a(l!==void 0?l:t.custom,u,f)}return a}function Qr(t){return me(t)?t.get():t}function ey({scrapeMotionValuesFromProps:t,createRenderState:a},l,r,u){return{latestValues:ny(l,r,u,t),renderState:a()}}const e6=t=>(a,l)=>{const r=I.useContext(bo),u=I.useContext(I1),f=()=>ey(t,a,r,u);return l?f():E8(f)};function ny(t,a,l,r){const u={},f=r(t,{});for(const A in f)u[A]=Qr(f[A]);let{initial:h,animate:m}=t;const p=So(t),g=Pm(t);a&&g&&!p&&t.inherit!==!1&&(h===void 0&&(h=a.initial),m===void 0&&(m=a.animate));let y=l?l.initial===!1:!1;y=y||h===!1;const x=y?m:h;if(x&&typeof x!="boolean"&&!xo(x)){const A=Array.isArray(x)?x:[x];for(let E=0;E<A.length;E++){const B=E0(t,A[E]);if(B){const{transitionEnd:k,transition:G,...U}=B;for(const q in U){let L=U[q];if(Array.isArray(L)){const F=y?L.length-1:0;L=L[F]}L!==null&&(u[q]=L)}for(const q in k)u[q]=k[q]}}}return u}function $0(t,a,l){const{style:r}=t,u={};for(const f in r)(me(r[f])||a.style&&me(a.style[f])||Fm(f,t)||l?.getValue(f)?.liveStyle!==void 0)&&(u[f]=r[f]);return u}const iy={useVisualState:e6({scrapeMotionValuesFromProps:$0,createRenderState:M0})};function n6(t,a,l){const r=$0(t,a,l);for(const u in t)if(me(t[u])||me(a[u])){const f=Xa.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;r[f]=t[u]}return r}const ay={useVisualState:e6({scrapeMotionValuesFromProps:n6,createRenderState:Im})};function sy(t,a){return function(r,{forwardMotionProps:u}={forwardMotionProps:!1}){const h={...w0(r)?ay:iy,preloadedFeatures:t,useRender:ty(u),createVisualElement:a,Component:r};return H9(h)}}function ul(t,a,l){const r=t.getProps();return E0(r,a,l!==void 0?l:r.custom,t)}const V1=t=>Array.isArray(t);function ly(t,a,l){t.hasValue(a)?t.getValue(a).set(l):t.addValue(a,ka(l))}function ry(t){return V1(t)?t[t.length-1]||0:t}function oy(t,a){const l=ul(t,a);let{transitionEnd:r={},transition:u={},...f}=l||{};f={...f,...r};for(const h in f){const m=ry(f[h]);ly(t,h,m)}}function cy(t){return!!(me(t)&&t.add)}function B1(t,a){const l=t.getValue("willChange");if(cy(l))return l.add(a);if(!l&&Cn.WillChange){const r=new Cn.WillChange("auto");t.addValue("willChange",r),r.add(a)}}function i6(t){return t.props[Zm]}const uy=t=>t!==null;function fy(t,{repeat:a,repeatType:l="loop"},r){const u=t.filter(uy),f=a&&l!=="loop"&&a%2===1?0:u.length-1;return u[f]}const hy={type:"spring",stiffness:500,damping:25,restSpeed:10},dy=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),my={type:"keyframes",duration:.8},py={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},gy=(t,{keyframes:a})=>a.length>2?my:Pa.has(t)?t.startsWith("scale")?dy(a[1]):hy:py;function yy({when:t,delay:a,delayChildren:l,staggerChildren:r,staggerDirection:u,repeat:f,repeatType:h,repeatDelay:m,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const D0=(t,a,l,r={},u,f)=>h=>{const m=y0(r,t)||{},p=m.delay||r.delay||0;let{elapsed:g=0}=r;g=g-cn(p);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-g,onUpdate:A=>{a.set(A),m.onUpdate&&m.onUpdate(A)},onComplete:()=>{h(),m.onComplete&&m.onComplete()},name:t,motionValue:a,element:f?void 0:u};yy(m)||Object.assign(y,gy(t,y)),y.duration&&(y.duration=cn(y.duration)),y.repeatDelay&&(y.repeatDelay=cn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(x=!0)),(Cn.instantAnimations||Cn.skipAnimations)&&(x=!0,y.duration=0,y.delay=0),y.allowFlatten=!m.type&&!m.ease,x&&!f&&a.get()!==void 0){const A=fy(y.keyframes,m);if(A!==void 0){Bt.update(()=>{y.onUpdate(A),y.onComplete()});return}}return m.isSync?new p0(y):new t9(y)};function vy({protectedKeys:t,needsAnimating:a},l){const r=t.hasOwnProperty(l)&&a[l]!==!0;return a[l]=!1,r}function a6(t,a,{delay:l=0,transitionOverride:r,type:u}={}){let{transition:f=t.getDefaultTransition(),transitionEnd:h,...m}=a;r&&(f=r);const p=[],g=u&&t.animationState&&t.animationState.getState()[u];for(const y in m){const x=t.getValue(y,t.latestValues[y]??null),A=m[y];if(A===void 0||g&&vy(g,y))continue;const E={delay:l,...y0(f||{},y)},B=x.get();if(B!==void 0&&!x.isAnimating&&!Array.isArray(A)&&A===B&&!E.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const U=i6(t);if(U){const q=window.MotionHandoffAnimation(U,y,Bt);q!==null&&(E.startTime=q,k=!0)}}B1(t,y),x.start(D0(y,x,A,t.shouldReduceMotion&&Om.has(y)?{type:!1}:E,t,k));const G=x.animation;G&&p.push(G)}return h&&Promise.all(p).then(()=>{Bt.update(()=>{h&&oy(t,h)})}),p}function _1(t,a,l={}){const r=ul(t,a,l.type==="exit"?t.presenceContext?.custom:void 0);let{transition:u=t.getDefaultTransition()||{}}=r||{};l.transitionOverride&&(u=l.transitionOverride);const f=r?()=>Promise.all(a6(t,r,l)):()=>Promise.resolve(),h=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=u;return by(t,a,g+p,y,x,l)}:()=>Promise.resolve(),{when:m}=u;if(m){const[p,g]=m==="beforeChildren"?[f,h]:[h,f];return p().then(()=>g())}else return Promise.all([f(),h(l.delay)])}function by(t,a,l=0,r=0,u=1,f){const h=[],m=(t.variantChildren.size-1)*r,p=u===1?(g=0)=>g*r:(g=0)=>m-g*r;return Array.from(t.variantChildren).sort(xy).forEach((g,y)=>{g.notify("AnimationStart",a),h.push(_1(g,a,{...f,delay:l+p(y)}).then(()=>g.notify("AnimationComplete",a)))}),Promise.all(h)}function xy(t,a){return t.sortNodePosition(a)}function Sy(t,a,l={}){t.notify("AnimationStart",a);let r;if(Array.isArray(a)){const u=a.map(f=>_1(t,f,l));r=Promise.all(u)}else if(typeof a=="string")r=_1(t,a,l);else{const u=typeof a=="function"?ul(t,a,l.custom):a;r=Promise.all(a6(t,u,l))}return r.then(()=>{t.notify("AnimationComplete",a)})}function s6(t,a){if(!Array.isArray(a))return!1;const l=a.length;if(l!==t.length)return!1;for(let r=0;r<l;r++)if(a[r]!==t[r])return!1;return!0}const Ty=T0.length;function l6(t){if(!t)return;if(!t.isControllingVariants){const l=t.parent?l6(t.parent)||{}:{};return t.props.initial!==void 0&&(l.initial=t.props.initial),l}const a={};for(let l=0;l<Ty;l++){const r=T0[l],u=t.props[r];(ol(u)||u===!1)&&(a[r]=u)}return a}const Ay=[...S0].reverse(),zy=S0.length;function My(t){return a=>Promise.all(a.map(({animation:l,options:r})=>Sy(t,l,r)))}function wy(t){let a=My(t),l=y3(),r=!0;const u=p=>(g,y)=>{const x=ul(t,y,p==="exit"?t.presenceContext?.custom:void 0);if(x){const{transition:A,transitionEnd:E,...B}=x;g={...g,...B,...E}}return g};function f(p){a=p(t)}function h(p){const{props:g}=t,y=l6(t.parent)||{},x=[],A=new Set;let E={},B=1/0;for(let G=0;G<zy;G++){const U=Ay[G],q=l[U],L=g[U]!==void 0?g[U]:y[U],F=ol(L),N=U===p?q.isActive:null;N===!1&&(B=G);let K=L===y[U]&&L!==g[U]&&F;if(K&&r&&t.manuallyAnimateOnMount&&(K=!1),q.protectedKeys={...E},!q.isActive&&N===null||!L&&!q.prevProp||xo(L)||typeof L=="boolean")continue;const Q=Ey(q.prevProp,L);let tt=Q||U===p&&q.isActive&&!K&&F||G>B&&F,St=!1;const Nt=Array.isArray(L)?L:[L];let Jt=Nt.reduce(u(U),{});N===!1&&(Jt={});const{prevResolvedValues:Ut={}}=q,Ke={...Ut,...Jt},Oe=Y=>{tt=!0,A.has(Y)&&(St=!0,A.delete(Y)),q.needsAnimating[Y]=!0;const W=t.getValue(Y);W&&(W.liveStyle=!1)};for(const Y in Ke){const W=Jt[Y],ct=Ut[Y];if(E.hasOwnProperty(Y))continue;let z=!1;V1(W)&&V1(ct)?z=!s6(W,ct):z=W!==ct,z?W!=null?Oe(Y):A.add(Y):W!==void 0&&A.has(Y)?Oe(Y):q.protectedKeys[Y]=!0}q.prevProp=L,q.prevResolvedValues=Jt,q.isActive&&(E={...E,...Jt}),r&&t.blockInitialAnimation&&(tt=!1),tt&&(!(K&&Q)||St)&&x.push(...Nt.map(Y=>({animation:Y,options:{type:U}})))}if(A.size){const G={};if(typeof g.initial!="boolean"){const U=ul(t,Array.isArray(g.initial)?g.initial[0]:g.initial);U&&U.transition&&(G.transition=U.transition)}A.forEach(U=>{const q=t.getBaseTarget(U),L=t.getValue(U);L&&(L.liveStyle=!0),G[U]=q??null}),x.push({animation:G})}let k=!!x.length;return r&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(k=!1),r=!1,k?a(x):Promise.resolve()}function m(p,g){if(l[p].isActive===g)return Promise.resolve();t.variantChildren?.forEach(x=>x.animationState?.setActive(p,g)),l[p].isActive=g;const y=h(p);for(const x in l)l[x].protectedKeys={};return y}return{animateChanges:h,setActive:m,setAnimateFunction:f,getState:()=>l,reset:()=>{l=y3(),r=!0}}}function Ey(t,a){return typeof a=="string"?a!==t:Array.isArray(a)?!s6(a,t):!1}function Ei(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function y3(){return{animate:Ei(!0),whileInView:Ei(),whileHover:Ei(),whileTap:Ei(),whileDrag:Ei(),whileFocus:Ei(),exit:Ei()}}class ri{constructor(a){this.isMounted=!1,this.node=a}update(){}}class $y extends ri{constructor(a){super(a),a.animationState||(a.animationState=wy(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();xo(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:l}=this.node.prevProps||{};a!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Dy=0;class Cy extends ri{constructor(){super(...arguments),this.id=Dy++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:l}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===r)return;const u=this.node.animationState.setActive("exit",!a);l&&!a&&u.then(()=>{l(this.id)})}mount(){const{register:a,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const jy={animation:{Feature:$y},exit:{Feature:Cy}};function fl(t,a,l,r={passive:!0}){return t.addEventListener(a,l,r),()=>t.removeEventListener(a,l)}function gl(t){return{point:{x:t.pageX,y:t.pageY}}}const Ry=t=>a=>x0(a)&&t(a,gl(a));function Is(t,a,l,r){return fl(t,a,Ry(l),r)}function r6({top:t,left:a,right:l,bottom:r}){return{x:{min:a,max:l},y:{min:t,max:r}}}function Oy({x:t,y:a}){return{top:a.min,right:t.max,bottom:a.max,left:t.min}}function Vy(t,a){if(!a)return t;const l=a({x:t.left,y:t.top}),r=a({x:t.right,y:t.bottom});return{top:l.y,left:l.x,bottom:r.y,right:r.x}}const o6=1e-4,By=1-o6,_y=1+o6,c6=.01,Ly=0-c6,Hy=0+c6;function ge(t){return t.max-t.min}function Ny(t,a,l){return Math.abs(t-a)<=l}function v3(t,a,l,r=.5){t.origin=r,t.originPoint=Vt(a.min,a.max,t.origin),t.scale=ge(l)/ge(a),t.translate=Vt(l.min,l.max,t.origin)-t.originPoint,(t.scale>=By&&t.scale<=_y||isNaN(t.scale))&&(t.scale=1),(t.translate>=Ly&&t.translate<=Hy||isNaN(t.translate))&&(t.translate=0)}function tl(t,a,l,r){v3(t.x,a.x,l.x,r?r.originX:void 0),v3(t.y,a.y,l.y,r?r.originY:void 0)}function b3(t,a,l){t.min=l.min+a.min,t.max=t.min+ge(a)}function Uy(t,a,l){b3(t.x,a.x,l.x),b3(t.y,a.y,l.y)}function x3(t,a,l){t.min=a.min-l.min,t.max=t.min+ge(a)}function el(t,a,l){x3(t.x,a.x,l.x),x3(t.y,a.y,l.y)}const S3=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oa=()=>({x:S3(),y:S3()}),T3=()=>({min:0,max:0}),Gt=()=>({x:T3(),y:T3()});function Xe(t){return[t("x"),t("y")]}function Iu(t){return t===void 0||t===1}function L1({scale:t,scaleX:a,scaleY:l}){return!Iu(t)||!Iu(a)||!Iu(l)}function $i(t){return L1(t)||u6(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function u6(t){return A3(t.x)||A3(t.y)}function A3(t){return t&&t!=="0%"}function so(t,a,l){const r=t-l,u=a*r;return l+u}function z3(t,a,l,r,u){return u!==void 0&&(t=so(t,u,r)),so(t,l,r)+a}function H1(t,a=0,l=1,r,u){t.min=z3(t.min,a,l,r,u),t.max=z3(t.max,a,l,r,u)}function f6(t,{x:a,y:l}){H1(t.x,a.translate,a.scale,a.originPoint),H1(t.y,l.translate,l.scale,l.originPoint)}const M3=.999999999999,w3=1.0000000000001;function ky(t,a,l,r=!1){const u=l.length;if(!u)return;a.x=a.y=1;let f,h;for(let m=0;m<u;m++){f=l[m],h=f.projectionDelta;const{visualElement:p}=f.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ba(t,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),h&&(a.x*=h.x.scale,a.y*=h.y.scale,f6(t,h)),r&&$i(f.latestValues)&&Ba(t,f.latestValues))}a.x<w3&&a.x>M3&&(a.x=1),a.y<w3&&a.y>M3&&(a.y=1)}function Va(t,a){t.min=t.min+a,t.max=t.max+a}function E3(t,a,l,r,u=.5){const f=Vt(t.min,t.max,u);H1(t,a,l,f,r)}function Ba(t,a){E3(t.x,a.x,a.scaleX,a.scale,a.originX),E3(t.y,a.y,a.scaleY,a.scale,a.originY)}function h6(t,a){return r6(Vy(t.getBoundingClientRect(),a))}function Yy(t,a,l){const r=h6(t,l),{scroll:u}=a;return u&&(Va(r.x,u.offset.x),Va(r.y,u.offset.y)),r}const d6=({current:t})=>t?t.ownerDocument.defaultView:null,$3=(t,a)=>Math.abs(t-a);function Gy(t,a){const l=$3(t.x,a.x),r=$3(t.y,a.y);return Math.sqrt(l**2+r**2)}class m6{constructor(a,l,{transformPagePoint:r,contextWindow:u,dragSnapToOrigin:f=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=e1(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,E=Gy(x.offset,{x:0,y:0})>=3;if(!A&&!E)return;const{point:B}=x,{timestamp:k}=ce;this.history.push({...B,timestamp:k});const{onStart:G,onMove:U}=this.handlers;A||(G&&G(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,x)},this.handlePointerMove=(x,A)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=t1(A,this.transformPagePoint),Bt.update(this.updatePoint,!0)},this.handlePointerUp=(x,A)=>{this.end();const{onEnd:E,onSessionEnd:B,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const G=e1(x.type==="pointercancel"?this.lastMoveEventInfo:t1(A,this.transformPagePoint),this.history);this.startEvent&&E&&E(x,G),B&&B(x,G)},!x0(a))return;this.dragSnapToOrigin=f,this.handlers=l,this.transformPagePoint=r,this.contextWindow=u||window;const h=gl(a),m=t1(h,this.transformPagePoint),{point:p}=m,{timestamp:g}=ce;this.history=[{...p,timestamp:g}];const{onSessionStart:y}=l;y&&y(a,e1(m,this.history)),this.removeListeners=dl(Is(this.contextWindow,"pointermove",this.handlePointerMove),Is(this.contextWindow,"pointerup",this.handlePointerUp),Is(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),si(this.updatePoint)}}function t1(t,a){return a?{point:a(t.point)}:t}function D3(t,a){return{x:t.x-a.x,y:t.y-a.y}}function e1({point:t},a){return{point:t,delta:D3(t,p6(a)),offset:D3(t,qy(a)),velocity:Xy(a,.1)}}function qy(t){return t[0]}function p6(t){return t[t.length-1]}function Xy(t,a){if(t.length<2)return{x:0,y:0};let l=t.length-1,r=null;const u=p6(t);for(;l>=0&&(r=t[l],!(u.timestamp-r.timestamp>cn(a)));)l--;if(!r)return{x:0,y:0};const f=un(u.timestamp-r.timestamp);if(f===0)return{x:0,y:0};const h={x:(u.x-r.x)/f,y:(u.y-r.y)/f};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function Py(t,{min:a,max:l},r){return a!==void 0&&t<a?t=r?Vt(a,t,r.min):Math.max(t,a):l!==void 0&&t>l&&(t=r?Vt(l,t,r.max):Math.min(t,l)),t}function C3(t,a,l){return{min:a!==void 0?t.min+a:void 0,max:l!==void 0?t.max+l-(t.max-t.min):void 0}}function Zy(t,{top:a,left:l,bottom:r,right:u}){return{x:C3(t.x,l,u),y:C3(t.y,a,r)}}function j3(t,a){let l=a.min-t.min,r=a.max-t.max;return a.max-a.min<t.max-t.min&&([l,r]=[r,l]),{min:l,max:r}}function Qy(t,a){return{x:j3(t.x,a.x),y:j3(t.y,a.y)}}function Ky(t,a){let l=.5;const r=ge(t),u=ge(a);return u>r?l=sl(a.min,a.max-r,t.min):r>u&&(l=sl(t.min,t.max-u,a.min)),Dn(0,1,l)}function Fy(t,a){const l={};return a.min!==void 0&&(l.min=a.min-t.min),a.max!==void 0&&(l.max=a.max-t.min),l}const N1=.35;function Jy(t=N1){return t===!1?t=0:t===!0&&(t=N1),{x:R3(t,"left","right"),y:R3(t,"top","bottom")}}function R3(t,a,l){return{min:O3(t,a),max:O3(t,l)}}function O3(t,a){return typeof t=="number"?t:t[a]||0}const Wy=new WeakMap;class Iy{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Gt(),this.visualElement=a}start(a,{snapToCursor:l=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const u=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(gl(y).point)},f=(y,x)=>{const{drag:A,dragPropagation:E,onDragStart:B}=this.getProps();if(A&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=g9(A),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(G=>{let U=this.getAxisMotionValue(G).get()||0;if(fn.test(U)){const{projection:q}=this.visualElement;if(q&&q.layout){const L=q.layout.layoutBox[G];L&&(U=ge(L)*(parseFloat(U)/100))}}this.originPoint[G]=U}),B&&Bt.postRender(()=>B(y,x)),B1(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(y,x)=>{const{dragPropagation:A,dragDirectionLock:E,onDirectionLock:B,onDrag:k}=this.getProps();if(!A&&!this.openDragLock)return;const{offset:G}=x;if(E&&this.currentDirection===null){this.currentDirection=tv(G),this.currentDirection!==null&&B&&B(this.currentDirection);return}this.updateAxis("x",x.point,G),this.updateAxis("y",x.point,G),this.visualElement.render(),k&&k(y,x)},m=(y,x)=>this.stop(y,x),p=()=>Xe(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new m6(a,{onSessionStart:u,onStart:f,onMove:h,onSessionEnd:m,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:d6(this.visualElement)})}stop(a,l){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:u}=l;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Bt.postRender(()=>f(a,l))}cancel(){this.isDragging=!1;const{projection:a,animationState:l}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(a,l,r){const{drag:u}=this.getProps();if(!r||!_r(a,u,this.currentDirection))return;const f=this.getAxisMotionValue(a);let h=this.originPoint[a]+r[a];this.constraints&&this.constraints[a]&&(h=Py(h,this.constraints[a],this.elastic[a])),f.set(h)}resolveConstraints(){const{dragConstraints:a,dragElastic:l}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&Ra(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&r?this.constraints=Zy(r.layoutBox,a):this.constraints=!1,this.elastic=Jy(l),u!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Xe(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=Fy(r.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:l}=this.getProps();if(!a||!Ra(a))return!1;const r=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=Yy(r,u.root,this.visualElement.getTransformPagePoint());let h=Qy(u.layout.layoutBox,f);if(l){const m=l(Oy(h));this.hasMutatedConstraints=!!m,m&&(h=r6(m))}return h}startAnimation(a){const{drag:l,dragMomentum:r,dragElastic:u,dragTransition:f,dragSnapToOrigin:h,onDragTransitionEnd:m}=this.getProps(),p=this.constraints||{},g=Xe(y=>{if(!_r(y,l,this.currentDirection))return;let x=p&&p[y]||{};h&&(x={min:0,max:0});const A=u?200:1e6,E=u?40:1e7,B={type:"inertia",velocity:r?a[y]:0,bounceStiffness:A,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...f,...x};return this.startAxisValueAnimation(y,B)});return Promise.all(g).then(m)}startAxisValueAnimation(a,l){const r=this.getAxisMotionValue(a);return B1(this.visualElement,a),r.start(D0(a,r,0,l,this.visualElement,!1))}stopAnimation(){Xe(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Xe(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const l=`_drag${a.toUpperCase()}`,r=this.visualElement.getProps(),u=r[l];return u||this.visualElement.getValue(a,(r.initial?r.initial[a]:void 0)||0)}snapToCursor(a){Xe(l=>{const{drag:r}=this.getProps();if(!_r(l,r,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(l);if(u&&u.layout){const{min:h,max:m}=u.layout.layoutBox[l];f.set(a[l]-Vt(h,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:l}=this.getProps(),{projection:r}=this.visualElement;if(!Ra(l)||!r||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xe(h=>{const m=this.getAxisMotionValue(h);if(m&&this.constraints!==!1){const p=m.get();u[h]=Ky({min:p,max:p},this.constraints[h])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Xe(h=>{if(!_r(h,a,null))return;const m=this.getAxisMotionValue(h),{min:p,max:g}=this.constraints[h];m.set(Vt(p,g,u[h]))})}addListeners(){if(!this.visualElement.current)return;Wy.set(this.visualElement,this);const a=this.visualElement.current,l=Is(a,"pointerdown",p=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(p)}),r=()=>{const{dragConstraints:p}=this.getProps();Ra(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",r);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Bt.read(r);const h=fl(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(Xe(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=p[y].translate,x.set(x.get()+p[y].translate))}),this.visualElement.render())});return()=>{h(),l(),f(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:r=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:h=N1,dragMomentum:m=!0}=a;return{...a,drag:l,dragDirectionLock:r,dragPropagation:u,dragConstraints:f,dragElastic:h,dragMomentum:m}}}function _r(t,a,l){return(a===!0||a===t)&&(l===null||l===t)}function tv(t,a=10){let l=null;return Math.abs(t.y)>a?l="y":Math.abs(t.x)>a&&(l="x"),l}class ev extends ri{constructor(a){super(a),this.removeGroupControls=Ze,this.removeListeners=Ze,this.controls=new Iy(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const V3=t=>(a,l)=>{t&&Bt.postRender(()=>t(a,l))};class nv extends ri{constructor(){super(...arguments),this.removePointerDownListener=Ze}onPointerDown(a){this.session=new m6(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:d6(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:l,onPan:r,onPanEnd:u}=this.node.getProps();return{onSessionStart:V3(a),onStart:V3(l),onMove:r,onEnd:(f,h)=>{delete this.session,u&&Bt.postRender(()=>u(f,h))}}}mount(){this.removePointerDownListener=Is(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Kr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function B3(t,a){return a.max===a.min?0:t/(a.max-a.min)*100}const Ps={correct:(t,a)=>{if(!a.target)return t;if(typeof t=="string")if(ot.test(t))t=parseFloat(t);else return t;const l=B3(t,a.target.x),r=B3(t,a.target.y);return`${l}% ${r}%`}},iv={correct:(t,{treeScale:a,projectionDelta:l})=>{const r=t,u=li.parse(t);if(u.length>5)return r;const f=li.createTransformer(t),h=typeof u[0]!="number"?1:0,m=l.x.scale*a.x,p=l.y.scale*a.y;u[0+h]/=m,u[1+h]/=p;const g=Vt(m,p,.5);return typeof u[2+h]=="number"&&(u[2+h]/=g),typeof u[3+h]=="number"&&(u[3+h]/=g),f(u)}};class av extends I.Component{componentDidMount(){const{visualElement:a,layoutGroup:l,switchLayoutGroup:r,layoutId:u}=this.props,{projection:f}=a;Y9(sv),f&&(l.group&&l.group.add(f),r&&r.register&&u&&r.register(f),f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),Kr.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:l,visualElement:r,drag:u,isPresent:f}=this.props,{projection:h}=r;return h&&(h.isPresent=f,u||a.layoutDependency!==l||l===void 0||a.isPresent!==f?h.willUpdate():this.safeToRemove(),a.isPresent!==f&&(f?h.promote():h.relegate()||Bt.postRender(()=>{const m=h.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),b0.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:l,switchLayoutGroup:r}=this.props,{projection:u}=a;u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),r&&r.deregister&&r.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function g6(t){const[a,l]=M9(),r=I.useContext(W4);return b.jsx(av,{...t,layoutGroup:r,switchLayoutGroup:I.useContext(Qm),isPresent:a,safeToRemove:l})}const sv={borderRadius:{...Ps,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ps,borderTopRightRadius:Ps,borderBottomLeftRadius:Ps,borderBottomRightRadius:Ps,boxShadow:iv};function lv(t,a,l){const r=me(t)?t:ka(t);return r.start(D0("",r,a,l)),r.animation}const rv=(t,a)=>t.depth-a.depth;class ov{constructor(){this.children=[],this.isDirty=!1}add(a){t0(this.children,a),this.isDirty=!0}remove(a){e0(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(rv),this.isDirty=!1,this.children.forEach(a)}}function cv(t,a){const l=Te.now(),r=({timestamp:u})=>{const f=u-l;f>=a&&(si(r),t(f-a))};return Bt.setup(r,!0),()=>si(r)}const y6=["TopLeft","TopRight","BottomLeft","BottomRight"],uv=y6.length,_3=t=>typeof t=="string"?parseFloat(t):t,L3=t=>typeof t=="number"||ot.test(t);function fv(t,a,l,r,u,f){u?(t.opacity=Vt(0,l.opacity??1,hv(r)),t.opacityExit=Vt(a.opacity??1,0,dv(r))):f&&(t.opacity=Vt(a.opacity??1,l.opacity??1,r));for(let h=0;h<uv;h++){const m=`border${y6[h]}Radius`;let p=H3(a,m),g=H3(l,m);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||L3(p)===L3(g)?(t[m]=Math.max(Vt(_3(p),_3(g),r),0),(fn.test(g)||fn.test(p))&&(t[m]+="%")):t[m]=g}(a.rotate||l.rotate)&&(t.rotate=Vt(a.rotate||0,l.rotate||0,r))}function H3(t,a){return t[a]!==void 0?t[a]:t.borderRadius}const hv=v6(0,.5,cm),dv=v6(.5,.95,Ze);function v6(t,a,l){return r=>r<t?0:r>a?1:l(sl(t,a,r))}function N3(t,a){t.min=a.min,t.max=a.max}function qe(t,a){N3(t.x,a.x),N3(t.y,a.y)}function U3(t,a){t.translate=a.translate,t.scale=a.scale,t.originPoint=a.originPoint,t.origin=a.origin}function k3(t,a,l,r,u){return t-=a,t=so(t,1/l,r),u!==void 0&&(t=so(t,1/u,r)),t}function mv(t,a=0,l=1,r=.5,u,f=t,h=t){if(fn.test(a)&&(a=parseFloat(a),a=Vt(h.min,h.max,a/100)-h.min),typeof a!="number")return;let m=Vt(f.min,f.max,r);t===f&&(m-=a),t.min=k3(t.min,a,l,m,u),t.max=k3(t.max,a,l,m,u)}function Y3(t,a,[l,r,u],f,h){mv(t,a[l],a[r],a[u],a.scale,f,h)}const pv=["x","scaleX","originX"],gv=["y","scaleY","originY"];function G3(t,a,l,r){Y3(t.x,a,pv,l?l.x:void 0,r?r.x:void 0),Y3(t.y,a,gv,l?l.y:void 0,r?r.y:void 0)}function q3(t){return t.translate===0&&t.scale===1}function b6(t){return q3(t.x)&&q3(t.y)}function X3(t,a){return t.min===a.min&&t.max===a.max}function yv(t,a){return X3(t.x,a.x)&&X3(t.y,a.y)}function P3(t,a){return Math.round(t.min)===Math.round(a.min)&&Math.round(t.max)===Math.round(a.max)}function x6(t,a){return P3(t.x,a.x)&&P3(t.y,a.y)}function Z3(t){return ge(t.x)/ge(t.y)}function Q3(t,a){return t.translate===a.translate&&t.scale===a.scale&&t.originPoint===a.originPoint}class vv{constructor(){this.members=[]}add(a){t0(this.members,a),a.scheduleRender()}remove(a){if(e0(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(a){const l=this.members.findIndex(u=>a===u);if(l===0)return!1;let r;for(let u=l;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){r=f;break}}return r?(this.promote(r),!0):!1}promote(a,l){const r=this.lead;if(a!==r&&(this.prevLead=r,this.lead=a,a.show(),r)){r.instance&&r.scheduleRender(),a.scheduleRender(),a.resumeFrom=r,l&&(a.resumeFrom.preserveOpacity=!0),r.snapshot&&(a.snapshot=r.snapshot,a.snapshot.latestValues=r.animationValues||r.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:l,resumingFrom:r}=a;l.onExitComplete&&l.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function bv(t,a,l){let r="";const u=t.x.translate/a.x,f=t.y.translate/a.y,h=l?.z||0;if((u||f||h)&&(r=`translate3d(${u}px, ${f}px, ${h}px) `),(a.x!==1||a.y!==1)&&(r+=`scale(${1/a.x}, ${1/a.y}) `),l){const{transformPerspective:g,rotate:y,rotateX:x,rotateY:A,skewX:E,skewY:B}=l;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),x&&(r+=`rotateX(${x}deg) `),A&&(r+=`rotateY(${A}deg) `),E&&(r+=`skewX(${E}deg) `),B&&(r+=`skewY(${B}deg) `)}const m=t.x.scale*a.x,p=t.y.scale*a.y;return(m!==1||p!==1)&&(r+=`scale(${m}, ${p})`),r||"none"}const n1=["","X","Y","Z"],xv={visibility:"hidden"},Sv=1e3;let Tv=0;function i1(t,a,l,r){const{latestValues:u}=a;u[t]&&(l[t]=u[t],a.setStaticValue(t,0),r&&(r[t]=0))}function S6(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:a}=t.options;if(!a)return;const l=i6(a);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:f}=t.options;window.MotionCancelOptimisedAnimation(l,"transform",Bt,!(u||f))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&S6(r)}function T6({attachResizeListener:t,defaultParent:a,measureScroll:l,checkIsScrollRoot:r,resetTransform:u}){return class{constructor(h={},m=a?.()){this.id=Tv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Mv),this.nodes.forEach(Dv),this.nodes.forEach(Cv),this.nodes.forEach(wv)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new ov)}addEventListener(h,m){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new a0),this.eventHandlers.get(h).add(m)}notifyListeners(h,...m){const p=this.eventHandlers.get(h);p&&p.notify(...m)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=Ym(h)&&!T9(h),this.instance=h;const{layoutId:m,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||m)&&(this.isLayoutDirty=!0),t){let y;const x=()=>this.root.updateBlockedByResize=!1;t(h,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=cv(x,250),Kr.hasAnimatedSinceResize&&(Kr.hasAnimatedSinceResize=!1,this.nodes.forEach(J3))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&g&&(m||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:A,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const B=this.options.transition||g.getDefaultTransition()||Bv,{onLayoutAnimationStart:k,onLayoutAnimationComplete:G}=g.getProps(),U=!this.targetLayout||!x6(this.targetLayout,E),q=!x&&A;if(this.options.layoutRoot||this.resumeFrom||q||x&&(U||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...y0(B,"layout"),onPlay:k,onComplete:G};(g.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(y,q)}else x||J3(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),si(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jv),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&S6(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:p}=this.options;if(m===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(K3);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(F3);return}this.isUpdating||this.nodes.forEach(F3),this.animationCommitId=this.animationId,this.isUpdating=!1,this.nodes.forEach($v),this.nodes.forEach(Av),this.nodes.forEach(zv),this.clearAllSnapshots();const m=Te.now();ce.delta=Dn(0,1e3/60,m-ce.timestamp),ce.timestamp=m,ce.isProcessing=!0,Zu.update.process(ce),Zu.preRender.process(ce),Zu.render.process(ce),ce.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,b0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ev),this.sharedNodes.forEach(Rv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Bt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Bt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ge(this.snapshot.measuredBox.x)&&!ge(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Gt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(m=!1),m&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!u)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!b6(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;h&&this.instance&&(m||$i(this.latestValues)||y)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const m=this.measurePageBox();let p=this.removeElementScroll(m);return h&&(p=this.removeTransform(p)),_v(p),{animationId:this.root.animationId,measuredBox:m,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:h}=this.options;if(!h)return Gt();const m=h.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Lv))){const{scroll:g}=this.root;g&&(Va(m.x,g.offset.x),Va(m.y,g.offset.y))}return m}removeElementScroll(h){const m=Gt();if(qe(m,h),this.scroll?.wasRoot)return m;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&qe(m,h),Va(m.x,y.offset.x),Va(m.y,y.offset.y))}return m}applyTransform(h,m=!1){const p=Gt();qe(p,h);for(let g=0;g<this.path.length;g++){const y=this.path[g];!m&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ba(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),$i(y.latestValues)&&Ba(p,y.latestValues)}return $i(this.latestValues)&&Ba(p,this.latestValues),p}removeTransform(h){const m=Gt();qe(m,h);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!$i(g.latestValues))continue;L1(g.latestValues)&&g.updateSnapshot();const y=Gt(),x=g.measurePageBox();qe(y,x),G3(m,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return $i(this.latestValues)&&G3(m,this.latestValues),m}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(h||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=ce.timestamp,!this.targetDelta&&!this.relativeTarget){const A=this.getClosestProjectingParent();A&&A.layout&&this.animationProgress!==1?(this.relativeParent=A,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),el(this.relativeTargetOrigin,this.layout.layoutBox,A.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Gt(),this.targetWithTransforms=Gt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Uy(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),f6(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const A=this.getClosestProjectingParent();A&&!!A.resumingFrom==!!this.resumingFrom&&!A.options.layoutScroll&&A.target&&this.animationProgress!==1?(this.relativeParent=A,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),el(this.relativeTargetOrigin,this.target,A.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||L1(this.parent.latestValues)||u6(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const h=this.getLead(),m=!!this.resumingFrom||this!==h;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ce.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;qe(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,A=this.treeScale.y;ky(this.layoutCorrected,this.treeScale,this.path,m),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Gt());const{target:E}=h;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U3(this.prevProjectionDelta.x,this.projectionDelta.x),U3(this.prevProjectionDelta.y,this.projectionDelta.y)),tl(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==A||!Q3(this.projectionDelta.x,this.prevProjectionDelta.x)||!Q3(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){if(this.options.visualElement?.scheduleRender(),h){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oa(),this.projectionDelta=Oa(),this.projectionDeltaWithTransform=Oa()}setAnimationOrigin(h,m=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},x=Oa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const A=Gt(),E=p?p.source:void 0,B=this.layout?this.layout.source:void 0,k=E!==B,G=this.getStack(),U=!G||G.members.length<=1,q=!!(k&&!U&&this.options.crossfade===!0&&!this.path.some(Vv));this.animationProgress=0;let L;this.mixTargetDelta=F=>{const N=F/1e3;W3(x.x,h.x,N),W3(x.y,h.y,N),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(el(A,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ov(this.relativeTarget,this.relativeTargetOrigin,A,N),L&&yv(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=Gt()),qe(L,this.relativeTarget)),k&&(this.animationValues=y,fv(y,g,this.latestValues,N,q,U)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(si(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Bt.update(()=>{Kr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ka(0)),this.currentAnimation=lv(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),h.onUpdate&&h.onUpdate(m)},onStop:()=>{},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Sv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:m,target:p,layout:g,latestValues:y}=h;if(!(!m||!p||!g)){if(this!==h&&this.layout&&g&&A6(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Gt();const x=ge(this.layout.layoutBox.x);p.x.min=h.target.x.min,p.x.max=p.x.min+x;const A=ge(this.layout.layoutBox.y);p.y.min=h.target.y.min,p.y.max=p.y.min+A}qe(m,p),Ba(m,y),tl(this.projectionDeltaWithTransform,this.layoutCorrected,m,y)}}registerSharedNode(h,m){this.sharedNodes.has(h)||this.sharedNodes.set(h,new vv),this.sharedNodes.get(h).add(m);const g=m.options.initialPromotionConfig;m.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(m):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){const{layoutId:h}=this.options;return h?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:h}=this.options;return h?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:m,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),h&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let m=!1;const{latestValues:p}=h;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(m=!0),!m)return;const g={};p.z&&i1("z",h,g,this.animationValues);for(let y=0;y<n1.length;y++)i1(`rotate${n1[y]}`,h,g,this.animationValues),i1(`skew${n1[y]}`,h,g,this.animationValues);h.render();for(const y in g)h.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);h.scheduleRender()}getProjectionStyles(h){if(!this.instance||this.isSVG)return;if(!this.isVisible)return xv;const m={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=Qr(h?.pointerEvents)||"",m.transform=p?p(this.latestValues,""):"none",m;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Qr(h?.pointerEvents)||""),this.hasProjected&&!$i(this.latestValues)&&(E.transform=p?p({},""):"none",this.hasProjected=!1),E}const y=g.animationValues||g.latestValues;this.applyTransformsToTarget(),m.transform=bv(this.projectionDeltaWithTransform,this.treeScale,y),p&&(m.transform=p(y,m.transform));const{x,y:A}=this.projectionDelta;m.transformOrigin=`${x.origin*100}% ${A.origin*100}% 0`,g.animationValues?m.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:m.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const E in cl){if(y[E]===void 0)continue;const{correct:B,applyTo:k,isCSSVariable:G}=cl[E],U=m.transform==="none"?y[E]:B(y[E],g);if(k){const q=k.length;for(let L=0;L<q;L++)m[k[L]]=U}else G?this.options.visualElement.renderState.vars[E]=U:m[E]=U}return this.options.layoutId&&(m.pointerEvents=g===this?Qr(h?.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>h.currentAnimation?.stop()),this.root.nodes.forEach(K3),this.root.sharedNodes.clear()}}}function Av(t){t.updateLayout()}function zv(t){const a=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&a&&t.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:r}=t.layout,{animationType:u}=t.options,f=a.source!==t.layout.source;u==="size"?Xe(y=>{const x=f?a.measuredBox[y]:a.layoutBox[y],A=ge(x);x.min=l[y].min,x.max=x.min+A}):A6(u,a.layoutBox,l)&&Xe(y=>{const x=f?a.measuredBox[y]:a.layoutBox[y],A=ge(l[y]);x.max=x.min+A,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+A)});const h=Oa();tl(h,l,a.layoutBox);const m=Oa();f?tl(m,t.applyTransform(r,!0),a.measuredBox):tl(m,l,a.layoutBox);const p=!b6(h);let g=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:A}=y;if(x&&A){const E=Gt();el(E,a.layoutBox,x.layoutBox);const B=Gt();el(B,l,A.layoutBox),x6(E,B)||(g=!0),y.options.layoutRoot&&(t.relativeTarget=B,t.relativeTargetOrigin=E,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:l,snapshot:a,delta:m,layoutDelta:h,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:l}=t.options;l&&l()}t.options.transition=void 0}function Mv(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function wv(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Ev(t){t.clearSnapshot()}function K3(t){t.clearMeasurements()}function F3(t){t.isLayoutDirty=!1}function $v(t){const{visualElement:a}=t.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),t.resetTransform()}function J3(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Dv(t){t.resolveTargetDelta()}function Cv(t){t.calcProjection()}function jv(t){t.resetSkewAndRotation()}function Rv(t){t.removeLeadSnapshot()}function W3(t,a,l){t.translate=Vt(a.translate,0,l),t.scale=Vt(a.scale,1,l),t.origin=a.origin,t.originPoint=a.originPoint}function I3(t,a,l,r){t.min=Vt(a.min,l.min,r),t.max=Vt(a.max,l.max,r)}function Ov(t,a,l,r){I3(t.x,a.x,l.x,r),I3(t.y,a.y,l.y,r)}function Vv(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Bv={duration:.45,ease:[.4,0,.1,1]},t4=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),e4=t4("applewebkit/")&&!t4("chrome/")?Math.round:Ze;function n4(t){t.min=e4(t.min),t.max=e4(t.max)}function _v(t){n4(t.x),n4(t.y)}function A6(t,a,l){return t==="position"||t==="preserve-aspect"&&!Ny(Z3(a),Z3(l),.2)}function Lv(t){return t!==t.root&&t.scroll?.wasRoot}const Hv=T6({attachResizeListener:(t,a)=>fl(t,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),a1={current:void 0},z6=T6({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!a1.current){const t=new Hv({});t.mount(window),t.setOptions({layoutScroll:!0}),a1.current=t}return a1.current},resetTransform:(t,a)=>{t.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Nv={pan:{Feature:nv},drag:{Feature:ev,ProjectionNode:z6,MeasureLayout:g6}};function i4(t,a,l){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,f=r[u];f&&Bt.postRender(()=>f(a,gl(a)))}class Uv extends ri{mount(){const{current:a}=this.node;a&&(this.unmount=y9(a,(l,r)=>(i4(this.node,r,"Start"),u=>i4(this.node,u,"End"))))}unmount(){}}class kv extends ri{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=dl(fl(this.node.current,"focus",()=>this.onFocus()),fl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function a4(t,a,l){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),f=r[u];f&&Bt.postRender(()=>f(a,gl(a)))}class Yv extends ri{mount(){const{current:a}=this.node;a&&(this.unmount=S9(a,(l,r)=>(a4(this.node,r,"Start"),(u,{success:f})=>a4(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const U1=new WeakMap,s1=new WeakMap,Gv=t=>{const a=U1.get(t.target);a&&a(t)},qv=t=>{t.forEach(Gv)};function Xv({root:t,...a}){const l=t||document;s1.has(l)||s1.set(l,{});const r=s1.get(l),u=JSON.stringify(a);return r[u]||(r[u]=new IntersectionObserver(qv,{root:t,...a})),r[u]}function Pv(t,a,l){const r=Xv(a);return U1.set(t,l),r.observe(t),()=>{U1.delete(t),r.unobserve(t)}}const Zv={some:0,all:1};class Qv extends ri{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:l,margin:r,amount:u="some",once:f}=a,h={root:l?l.current:void 0,rootMargin:r,threshold:typeof u=="number"?u:Zv[u]},m=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),A=g?y:x;A&&A(p)};return Pv(this.node.current,h,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:l}=this.node;["amount","margin","root"].some(Kv(a,l))&&this.startObserver()}unmount(){}}function Kv({viewport:t={}},{viewport:a={}}={}){return l=>t[l]!==a[l]}const Fv={inView:{Feature:Qv},tap:{Feature:Yv},focus:{Feature:kv},hover:{Feature:Uv}},Jv={layout:{ProjectionNode:z6,MeasureLayout:g6}},k1={current:null},M6={current:!1};function Wv(){if(M6.current=!0,!!W1)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),a=()=>k1.current=t.matches;t.addListener(a),a()}else k1.current=!1}const Iv=new WeakMap;function tb(t,a,l){for(const r in a){const u=a[r],f=l[r];if(me(u))t.addValue(r,u);else if(me(f))t.addValue(r,ka(u,{owner:t}));else if(f!==u)if(t.hasValue(r)){const h=t.getValue(r);h.liveStyle===!0?h.jump(u):h.hasAnimated||h.set(u)}else{const h=t.getStaticValue(r);t.addValue(r,ka(h!==void 0?h:u,{owner:t}))}}for(const r in l)a[r]===void 0&&t.removeValue(r);return a}const s4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class eb{scrapeMotionValuesFromProps(a,l,r){return{}}constructor({parent:a,props:l,presenceContext:r,reducedMotionConfig:u,blockInitialAnimation:f,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=g0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const A=Te.now();this.renderScheduledAt<A&&(this.renderScheduledAt=A,Bt.render(this.render,!1,!0))};const{latestValues:p,renderState:g}=h;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=g,this.parent=a,this.props=l,this.presenceContext=r,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!f,this.isControllingVariants=So(l),this.isVariantNode=Pm(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(l,{},this);for(const A in x){const E=x[A];p[A]!==void 0&&me(E)&&E.set(p[A],!1)}}mount(a){this.current=a,Iv.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,r)=>this.bindToMotionValue(r,l)),M6.current||Wv(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:k1.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),si(this.notifyUpdate),si(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const l=this.features[a];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(a,l){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const r=Pa.has(a);r&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",m=>{this.latestValues[a]=m,this.props.onUpdate&&Bt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),f=l.on("renderRequest",this.scheduleRender);let h;window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,a,l)),this.valueSubscriptions.set(a,()=>{u(),f(),h&&h(),l.owner&&l.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Ya){const l=Ya[a];if(!l)continue;const{isEnabled:r,Feature:u}=l;if(!this.features[a]&&u&&r(this.props)&&(this.features[a]=new u(this)),this.features[a]){const f=this.features[a];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Gt()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,l){this.latestValues[a]=l}update(a,l){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let r=0;r<s4.length;r++){const u=s4[r];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,h=a[f];h&&(this.propEventSubscriptions[u]=this.on(u,h))}this.prevMotionValues=tb(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(a),()=>l.variantChildren.delete(a)}addValue(a,l){const r=this.values.get(a);l!==r&&(r&&this.removeValue(a),this.bindToMotionValue(a,l),this.values.set(a,l),this.latestValues[a]=l.get())}removeValue(a){this.values.delete(a);const l=this.valueSubscriptions.get(a);l&&(l(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,l){if(this.props.values&&this.props.values[a])return this.props.values[a];let r=this.values.get(a);return r===void 0&&l!==void 0&&(r=ka(l===null?void 0:l,{owner:this}),this.addValue(a,r)),r}readValue(a,l){let r=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return r!=null&&(typeof r=="string"&&(I4(r)||em(r))?r=parseFloat(r):!z9(r)&&li.test(l)&&(r=Lm(a,l)),this.setBaseTarget(a,me(r)?r.get():r)),me(r)?r.get():r}setBaseTarget(a,l){this.baseTarget[a]=l}getBaseTarget(a){const{initial:l}=this.props;let r;if(typeof l=="string"||typeof l=="object"){const f=E0(this.props,l,this.presenceContext?.custom);f&&(r=f[a])}if(l&&r!==void 0)return r;const u=this.getBaseTargetFromProps(this.props,a);return u!==void 0&&!me(u)?u:this.initialValues[a]!==void 0&&r===void 0?void 0:this.baseTarget[a]}on(a,l){return this.events[a]||(this.events[a]=new a0),this.events[a].add(l)}notify(a,...l){this.events[a]&&this.events[a].notify(...l)}}class w6 extends eb{constructor(){super(...arguments),this.KeyframeResolver=h9}sortInstanceNodePosition(a,l){return a.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(a,l){return a.style?a.style[l]:void 0}removeValueFromRenderState(a,{vars:l,style:r}){delete l[a],delete r[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;me(a)&&(this.childSubscription=a.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function E6(t,{style:a,vars:l},r,u){Object.assign(t.style,a,u&&u.getProjectionStyles(r));for(const f in l)t.style.setProperty(f,l[f])}function nb(t){return window.getComputedStyle(t)}class ib extends w6{constructor(){super(...arguments),this.type="html",this.renderInstance=E6}readValueFromInstance(a,l){if(Pa.has(l))return this.projection?.isProjecting?$1(l):j7(a,l);{const r=nb(a),u=(r0(l)?r.getPropertyValue(l):r[l])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:l}){return h6(a,l)}build(a,l,r){z0(a,l,r.transformTemplate)}scrapeMotionValuesFromProps(a,l,r){return $0(a,l,r)}}const $6=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ab(t,a,l,r){E6(t,a,void 0,r);for(const u in a.attrs)t.setAttribute($6.has(u)?u:A0(u),a.attrs[u])}class sb extends w6{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Gt}getBaseTargetFromProps(a,l){return a[l]}readValueFromInstance(a,l){if(Pa.has(l)){const r=_m(l);return r&&r.default||0}return l=$6.has(l)?l:A0(l),a.getAttribute(l)}scrapeMotionValuesFromProps(a,l,r){return n6(a,l,r)}build(a,l,r){Wm(a,l,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(a,l,r,u){ab(a,l,r,u)}mount(a){this.isSVGTag=t6(a.tagName),super.mount(a)}}const lb=(t,a)=>w0(t)?new sb(a):new ib(a,{allowProjection:t!==I.Fragment}),rb=sy({...jy,...Fv,...Nv,...Jv},lb),X=C9(rb),ob=T(X.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${t=>t.theme.zIndices.banner};
  transition: ${t=>t.theme.transitions.all};
  display: flex;
  align-items: center;
  justify-content: center;

  ${t=>t.isScrolled&&`
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${t.theme.colors.border.primary};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `}
`,cb=T(X.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${t=>t.theme.colors.primary.blue};
`,ub=T.div`
  width: 100%;
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  padding: ${t=>t.theme.space[6]};
`,fb=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,hb=T(X.div)`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  cursor: pointer;
  display: flex;
  align-items: center;
`,db=T.span`
  color: ${t=>t.theme.colors.text.white};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.blue};
  }
`,mb=T.span`
  color: ${t=>t.theme.colors.primary.blue};
  margin-left: ${t=>t.theme.space[2]};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.dark};
  }
`,pb=T.nav`
  display: none;
  gap: ${t=>t.theme.space[8]};

  ${t=>t.theme.media.md} {
    display: flex;
  }
`,gb=T(X.button)`
  position: relative;
  transition: ${t=>t.theme.transitions.all};
  padding: ${t=>t.theme.space[2]} ${t=>t.theme.space[3]};
  border-radius: ${t=>t.theme.radii.lg};
  border: none;
  background: none;
  cursor: pointer;
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${t=>t.theme.fonts.sizes.base};

  ${t=>t.active?`
    color: ${t.theme.colors.primary.blue};
    background: rgba(37, 99, 235, 0.1);
  `:`
    color: ${t.theme.colors.text.gray};

    &:hover {
      color: ${t.theme.colors.primary.blue};
      background: rgba(37, 99, 235, 0.05);
    }
  `}
`,l4=T(X.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${t=>t.theme.colors.primary.blue};
  border-radius: ${t=>t.theme.radii.full};
`,yb=T(X.button)`
  display: flex;
  padding: ${t=>t.theme.space[2]};
  border: none;
  background: none;
  cursor: pointer;
  border-radius: ${t=>t.theme.radii.lg};
  transition: ${t=>t.theme.transitions.all};
  opacity: ${t=>t.isHidden?0:1};
  pointer-events: ${t=>t.isHidden?"none":"auto"};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
  }

  ${t=>t.theme.media.md} {
    display: none;
  }
`,l1=T(X.div)`
  width: 24px;
  height: 2px;
  background: ${t=>t.theme.colors.text.white};
  border-radius: ${t=>t.theme.radii.full};
`,vb=T(X.nav)`
  overflow: hidden;
  opacity: ${t=>t.isHidden?0:1};
  pointer-events: ${t=>t.isHidden?"none":"auto"};

  ${t=>t.theme.media.md} {
    display: none;
  }
`,bb=T.div`
  padding-top: ${t=>t.theme.space[4]};
  padding-bottom: ${t=>t.theme.space[2]};
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[2]};
`,xb=T(X.button)`
  width: 100%;
  text-align: left;
  padding: ${t=>t.theme.space[3]} ${t=>t.theme.space[4]};
  border-radius: ${t=>t.theme.radii.lg};
  border: none;
  background: none;
  cursor: pointer;
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${t=>t.theme.fonts.sizes.base};
  transition: ${t=>t.theme.transitions.all};

  ${t=>t.active?`
    color: ${t.theme.colors.primary.blue};
    background: rgba(37, 99, 235, 0.1);
  `:`
    color: ${t.theme.colors.text.gray};

    &:hover {
      color: ${t.theme.colors.primary.blue};
      background: rgba(37, 99, 235, 0.05);
    }
  `}
`,Sb=T.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Tb=T(X.div)`
  width: 8px;
  height: 8px;
  background: ${t=>t.theme.colors.primary.blue};
  border-radius: ${t=>t.theme.radii.full};
`,Ab=()=>{const[t,a]=I.useState(!1),[l,r]=I.useState(!1),[u,f]=I.useState("hero"),[h,m]=I.useState(0);I.useEffect(()=>{const y=()=>{const x=window.scrollY,A=document.documentElement.scrollHeight-window.innerHeight,E=x/A*100;a(x>50),m(E);const k=["hero","about","skills","experience","projects","education","contact"].find(G=>{const U=document.getElementById(G);if(U){const q=U.getBoundingClientRect();return q.top<=100&&q.bottom>=100}return!1});k&&f(k)};return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]),I.useEffect(()=>{const y=x=>{l&&!x.target.closest("#mobile-menu")&&!x.target.closest("button[aria-expanded]")&&r(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[l]);const p=y=>{const x=document.getElementById(y);x&&(r(!1),setTimeout(()=>{const E=x.offsetTop-80;window.scrollTo({top:E,behavior:"smooth"}),f(y)},100))},g=[{id:"hero",label:"Главная"},{id:"about",label:"О себе"},{id:"skills",label:"Навыки"},{id:"experience",label:"Опыт"},{id:"projects",label:"Проекты"},{id:"education",label:"Образование"}];return b.jsxs(ob,{initial:{y:-100},animate:{y:0},transition:{duration:.6},isScrolled:t,role:"banner",children:[b.jsx(cb,{style:{width:`${h}%`},initial:{width:0},animate:{width:`${h}%`},transition:{duration:.1}}),b.jsxs(ub,{children:[b.jsxs(fb,{children:[b.jsxs(hb,{whileHover:{scale:1.05},whileTap:{scale:.98},onClick:()=>p("hero"),role:"button",tabIndex:0,"aria-label":"Перейти на главную",onKeyDown:y=>{(y.key==="Enter"||y.key===" ")&&p("hero")},children:[b.jsx(db,{children:"Valeriy"}),b.jsx(mb,{"data-text":"Dev",children:"Dev"})]}),b.jsx(pb,{role:"navigation","aria-label":"Основная навигация",children:g.map((y,x)=>b.jsxs(gb,{active:u===y.id,whileHover:{y:-2},whileTap:{scale:.98},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:x*.1+.3},onClick:()=>p(y.id),"aria-label":`Перейти к секции ${y.label}`,"aria-current":u===y.id?"page":void 0,children:[y.label,b.jsx(l4,{initial:{width:0},animate:{width:u===y.id?"100%":0},transition:{duration:.3}}),b.jsx(l4,{initial:{width:0},whileHover:{width:u!==y.id?"100%":0},transition:{duration:.3},style:{opacity:.5}})]},y.id))}),b.jsx(yb,{isHidden:!t,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>r(!l),"aria-label":l?"Закрыть меню":"Открыть меню","aria-expanded":l,"aria-controls":"mobile-menu",children:b.jsxs("div",{style:{width:"24px",height:"24px",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[b.jsx(l1,{animate:{rotate:l?45:0,y:l?2:0},transition:{duration:.3}}),b.jsx(l1,{animate:{opacity:l?0:1},transition:{duration:.3}}),b.jsx(l1,{animate:{rotate:l?-45:0,y:l?-2:0},transition:{duration:.3}})]})})]}),b.jsx(vb,{id:"mobile-menu",isHidden:!t,initial:!1,animate:{height:l&&t?"auto":0,opacity:l&&t?1:0},transition:{duration:.4,ease:"easeInOut"},role:"navigation","aria-label":"Мобильная навигация",children:b.jsx(bb,{children:g.map((y,x)=>b.jsx(xb,{active:u===y.id,initial:{x:-50,opacity:0},animate:{x:l?0:-50,opacity:l?1:0},transition:{delay:x*.1,duration:.3},onClick:()=>p(y.id),"aria-label":`Перейти к секции ${y.label}`,"aria-current":u===y.id?"page":void 0,children:b.jsxs(Sb,{children:[y.label,u===y.id&&b.jsx(Tb,{initial:{scale:0},animate:{scale:1}})]})},y.id))})})]})]})};var D6={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r4=ae.createContext&&ae.createContext(D6),zb=["attr","size","title"];function Mb(t,a){if(t==null)return{};var l=wb(t,a),r,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);for(u=0;u<f.length;u++)r=f[u],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}function wb(t,a){if(t==null)return{};var l={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(a.indexOf(r)>=0)continue;l[r]=t[r]}return l}function lo(){return lo=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r])}return t},lo.apply(this,arguments)}function o4(t,a){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),l.push.apply(l,r)}return l}function ro(t){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?o4(Object(l),!0).forEach(function(r){Eb(t,r,l[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o4(Object(l)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(l,r))})}return t}function Eb(t,a,l){return a=$b(a),a in t?Object.defineProperty(t,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[a]=l,t}function $b(t){var a=Db(t,"string");return typeof a=="symbol"?a:a+""}function Db(t,a){if(typeof t!="object"||!t)return t;var l=t[Symbol.toPrimitive];if(l!==void 0){var r=l.call(t,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function C6(t){return t&&t.map((a,l)=>ae.createElement(a.tag,ro({key:l},a.attr),C6(a.child)))}function it(t){return a=>ae.createElement(Cb,lo({attr:ro({},t.attr)},a),C6(t.child))}function Cb(t){var a=l=>{var{attr:r,size:u,title:f}=t,h=Mb(t,zb),m=u||l.size||"1em",p;return l.className&&(p=l.className),t.className&&(p=(p?p+" ":"")+t.className),ae.createElement("svg",lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,r,h,{className:p,style:ro(ro({color:t.color||l.color},l.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),f&&ae.createElement("title",null,f),t.children)};return r4!==void 0?ae.createElement(r4.Consumer,null,l=>a(l)):a(D6)}function c4(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"},child:[]}]})(t)}function jb(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(t)}function Rb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"},child:[]}]})(t)}function Ob(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(t)}function r1(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(t)}function Vb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"},child:[]}]})(t)}function C0(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function Y1(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(t)}function u4(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(t)}function Lr(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(t)}function j6(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"},child:[]}]})(t)}function f4(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(t)}function Oi(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(t)}function Pe(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(t)}function R6(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"},child:[]}]})(t)}function Bb(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function _b(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(t)}function oo(t){return it({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(t)}function Lb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function Hb(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(t)}function h4(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function d4(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(t)}function Nb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(t)}function Ub(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"},child:[]}]})(t)}function ii(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function O6(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function kb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(t)}function Yb(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(t)}function Gb(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function qb(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(t)}function Xb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function m4(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"},child:[]}]})(t)}function Pb(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function wa(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(t)}function Di(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(t)}function $a(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(t)}function co(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function Zb(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}const Qb="/assets/profile-Bc----iC.jpg",Kb=T.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  ${t=>t.theme.media.mobile} {
    align-items: flex-start;
    padding-top: ${t=>t.theme.space[20]};
  }
`,Fb=T.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,o1=T.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);

  &.blob-1 {
    top: 80px;
    left: 40px;
    width: 100px;
    height: 100px;
    background: rgba(37, 99, 235, 0.05);
  }

  &.blob-2 {
    bottom: 80px;
    right: 40px;
    width: 120px;
    height: 120px;
    background: rgba(37, 99, 235, 0.03);
  }

  &.blob-3 {
    top: 50%;
    left: 25%;
    width: 80px;
    height: 80px;
    background: rgba(37, 99, 235, 0.03);
  }
`,Jb=T(X.div)`
  position: relative;
  z-index: ${t=>t.theme.zIndices.docked};
`,Wb=T.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[6]};

  ${t=>t.theme.media.mobile} {
    gap: ${t=>t.theme.space[5]};
    text-align: center;
  }
`;T(X.div)`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
  color: ${t=>t.theme.colors.primary.blue};
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.medium};
`;T(X.span)`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
`;const Ib=T(X.h1)`
  font-size: ${t=>t.theme.fonts.sizes["5xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  line-height: ${t=>t.theme.fonts.lineHeights.tight};
  text-align: left;
  letter-spacing: -1px;

  ${t=>t.theme.media.lg} {
    font-size: ${t=>t.theme.fonts.sizes["6xl"]};
  }

  ${t=>t.theme.media.mobile} {
    font-size: ${t=>t.theme.fonts.sizes["3xl"]};
    line-height: ${t=>t.theme.fonts.lineHeights.snug};
    margin-bottom: ${t=>t.theme.space[2]};
  }
`,tx=T.span`
  color: ${t=>t.theme.colors.text.white};
`,ex=T.span`
  color: ${t=>t.theme.colors.primary.blue};
`,nx=T(X.div)`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  color: ${t=>t.theme.colors.text.light};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${t=>t.theme.media.lg} {
    font-size: ${t=>t.theme.fonts.sizes["2xl"]};
    justify-content: flex-start;
  }

  ${t=>t.theme.media.mobile} {
    font-size: ${t=>t.theme.fonts.sizes.base};
    height: 32px;
    text-align: center;
  }
`,ix=T.span`
  color: ${t=>t.theme.colors.primary.blue};
  margin-right: ${t=>t.theme.space[2]};
  font-family: monospace;
`,ax=T.span`
  font-family: monospace;
`,sx=T(X.span)`
  color: ${t=>t.theme.colors.primary.blue};
  margin-left: ${t=>t.theme.space[1]};
`,lx=T(X.p)`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  color: ${t=>t.theme.colors.text.light};
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};
  max-width: 600px;
  text-align: center;
  font-weight: ${t=>t.theme.fonts.weights.normal};
  letter-spacing: 0.3px;

  ${t=>t.theme.media.lg} {
    text-align: left;
  }

  ${t=>t.theme.media.mobile} {
    font-size: ${t=>t.theme.fonts.sizes.base};
    max-width: 100%;
    padding: 0 ${t=>t.theme.space[4]};
  }
`,Hr=T.span`
  font-weight: ${t=>t.theme.fonts.weights.semibold};

  &.purple,
  &.pink {
    color: ${t=>t.theme.colors.primary.blue};
  }

  &.blue {
    color: ${t=>t.theme.colors.primary.blue};
  }
`,rx=T(X.div)`
  display: flex;
  gap: ${t=>t.theme.space[4]};
  flex-wrap: wrap;


  @media (max-width: 468px) {
    justify-content: center;
  }
`,ox=T(X.div)`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  padding: ${t=>t.theme.space[3]} ${t=>t.theme.space[4]};
  border-radius: ${t=>t.theme.radii.full};
  border: 1.5px solid ${t=>t.theme.colors.border.primary};
  background: ${t=>t.backgroundColor};
  cursor: pointer;
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    transform: translateY(-3px) scale(1.08);
    border-color: ${t=>t.theme.colors.primary.blue};
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
  }
`,cx=T.div`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  color: ${t=>t.color};
`,ux=T.span`
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  color: ${t=>t.color};
`;T(X.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[4]};
  padding-top: ${t=>t.theme.space[4]};
  justify-content: center;

  ${t=>t.theme.media.lg} {
    justify-content: flex-start;
  }

  ${t=>t.theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: ${t=>t.theme.space[3]};
    width: 100%;

    > * {
      width: 100%;
      max-width: 280px;
    }
  }
`;T(b8)`
  background: ${t=>t.theme.gradients.primary};
  border: none;
  color: ${t=>t.theme.colors.text.white};
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};

  &::before {
    opacity: 1;
  }

  &:hover::before {
    opacity: 0.8;
  }
`;const fx=T(X.div)`
  display: flex;
  gap: ${t=>t.theme.space[6]};
  padding-top: ${t=>t.theme.space[4]};
  justify-content: center;

  ${t=>t.theme.media.lg} {
    justify-content: flex-start;
  }

  ${t=>t.theme.media.mobile} {
    gap: ${t=>t.theme.space[4]};
    padding-top: ${t=>t.theme.space[6]};
  }
`,hx=T(X.a)`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.theme.colors.text.gray};
  transition: ${t=>t.theme.transitions.colors};
  padding: ${t=>t.theme.space[2]};
  border-radius: ${t=>t.theme.radii.lg};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${t=>t.theme.colors.primary.blue};
  }

  &.github:hover {
    color: ${t=>t.theme.colors.text.light};
  }

  &.linkedin:hover {
    color: ${t=>t.theme.colors.primary.blue};
  }

  &.email:hover {
    color: ${t=>t.theme.colors.primary.blue};
  }
`,dx=T(X.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t=>t.theme.space[6]};
  position: relative;

  ${t=>t.theme.media.lg} {
    align-items: center;
    padding-left: 0;
  }

  ${t=>t.theme.media.mobile} {
    gap: ${t=>t.theme.space[5]};
    margin-top: ${t=>t.theme.space[6]};
  }
`,mx=T.div`
  position: relative;
  z-index: 1;
`,px=T(X.div)`
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, rgba(37, 99, 235, 0.1) 70%, transparent 100%);
  border-radius: 40px;
  opacity: 0.4;
  filter: blur(25px);
  z-index: 0;
`,gx=T(X.div)`
  position: relative;
  width: 280px;
  height: 320px;
  border-radius: 32px;
  overflow: hidden;
  border: 2.5px solid rgba(37, 99, 235, 0.5);
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(37, 99, 235, 0.08));
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  z-index: 5;
  will-change: transform, box-shadow;

  ${t=>t.theme.media.lg} {
    width: 300px;
    height: 350px;
  }

  ${t=>t.theme.media.mobile} {
    width: 220px;
    height: 260px;
    border-width: 2px;
    border-radius: 24px;
  }


`,yx=T.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;
  transition: transform 0.5s ease, filter 0.5s ease;
  position: relative;

  ${t=>t.theme.media.lg} {
    font-size: 140px;
  }

  ${t=>t.theme.media.mobile} {
    font-size: 90px;
  }

`,vx=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: brightness(0.95);

  @media(max-width: 468px) {
    width: 100%;
  }
`,bx=T.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(37, 99, 235, 0.1), transparent, rgba(37, 99, 235, 0.05));
  transition: ${t=>t.theme.transitions.all};

`;T(X.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;T(X.div)`
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.6), transparent);
  pointer-events: none;

  &.line-top {
    top: -8px;
    left: 0;
    right: 0;
    height: 2px;
    width: 40%;
  }

  &.line-bottom {
    bottom: -8px;
    left: 0;
    right: 0;
    height: 2px;
    width: 40%;
  }

  &.line-left {
    left: -8px;
    top: 0;
    bottom: 0;
    width: 2px;
    height: 30%;
  }

  &.line-right {
    right: -8px;
    top: 0;
    bottom: 0;
    width: 2px;
    height: 30%;
  }
`;const Nr=T(X.div)`
  position: absolute;
  width: 24px;
  height: 24px;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: rgba(37, 99, 235, 0.6);
  }

  &.corner-tl {
    top: -12px;
    left: -12px;

    &::before {
      width: 2px;
      height: 24px;
      left: 11px;
      top: 0;
    }

    &::after {
      width: 24px;
      height: 2px;
      left: 0;
      top: 11px;
    }
  }

  &.corner-tr {
    top: -12px;
    right: -12px;

    &::before {
      width: 2px;
      height: 24px;
      right: 11px;
      top: 0;
    }

    &::after {
      width: 24px;
      height: 2px;
      right: 0;
      top: 11px;
    }
  }

  &.corner-bl {
    bottom: -12px;
    left: -12px;

    &::before {
      width: 2px;
      height: 24px;
      left: 11px;
      bottom: 0;
    }

    &::after {
      width: 24px;
      height: 2px;
      left: 0;
      bottom: 11px;
    }
  }

  &.corner-br {
    bottom: -12px;
    right: -12px;

    &::before {
      width: 2px;
      height: 24px;
      right: 11px;
      bottom: 0;
    }

    &::after {
      width: 24px;
      height: 2px;
      right: 0;
      bottom: 11px;
    }
  }
`;T.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  padding: ${t=>t.theme.space[4]};
  border-radius: ${t=>t.theme.radii.lg};
  border: 1px solid rgba(139, 92, 246, 0.5);
  text-align: center;
`;const Da=T(X.div)`
  position: absolute;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(37, 99, 235, 0.1));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(37, 99, 235, 0.4);
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
  pointer-events: auto;
  z-index: 10;
  will-change: transform;
  transform: translateZ(0);

  ${t=>t.theme.media.lg} {
    width: 64px;
    height: 64px;
  }

  &:hover {
    border-color: rgba(37, 99, 235, 0.7);
    transform: scale(1.15) rotate(5deg) translateZ(0);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2);
  }

  &.pos-1 {
    top: -10px;
    right: -30px;
  }

  &.pos-2 {
    bottom: 5px;
    left: -30px;
  }

  &.pos-3 {
    top: 40%;
    right: -35px;
    transform: translateY(-50%);
  }

  &.pos-4 {
    top: 15%;
    left: -35px;
  }

  &.pos-5 {
    bottom: 0%;
    right: -35px;
  }
`,Zs=T.div`
  font-size: 28px;
  transition: transform 0.2s ease;
  color: ${t=>t.theme.colors.primary.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  ${t=>t.theme.media.lg} {
    font-size: 32px;
    width: 36px;
    height: 36px;
  }

  ${Da}:hover & {
    transform: scale(1.1) rotate(-5deg);
  }
`;T(X.div)`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`;T.h3`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.primary.purple};
  margin-bottom: ${t=>t.theme.space[4]};
  text-align: center;

  ${t=>t.theme.media.lg} {
    text-align: left;
  }
`;T(X.div)`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
  color: ${t=>t.theme.colors.text.gray};
  padding: ${t=>t.theme.space[3]};
  border-radius: ${t=>t.theme.radii.lg};
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: rgba(139, 92, 246, 0.4);
    transform: translateX(5px) scale(1.02);
  }
`;T.div`
  color: ${t=>t.theme.colors.primary.purple};
  flex-shrink: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;T.a`
  color: inherit;
  text-decoration: none;
  font-size: ${t=>t.theme.fonts.sizes.sm};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`;T.span`
  font-size: ${t=>t.theme.fonts.sizes.sm};
`;T(X.div)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: none;

  ${t=>t.theme.media.lg} {
    display: block;
  }
`;T(X.div)`
  width: 24px;
  height: 40px;
  border: 2px solid ${t=>t.theme.colors.primary.purple};
  border-radius: ${t=>t.theme.radii.full};
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.secondary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${t=>t.theme.colors.primary.purple};
  }
`;T(X.div)`
  width: 4px;
  height: 12px;
  background: ${t=>t.theme.colors.primary.purple};
  border-radius: ${t=>t.theme.radii.full};
  margin-top: 8px;
`;T.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  margin-top: ${t=>t.theme.space[2]};
  text-align: center;
`;T(X.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${t=>t.theme.space[4]};
  width: 100%;
  max-width: 320px;

  ${t=>t.theme.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 280px;
    gap: ${t=>t.theme.space[3]};
  }
`;T(X.div)`
  display: flex;опо
  flex-direction: column;
  align-items: center;
  padding: ${t=>t.theme.space[4]};
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  text-align: center;
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.1);
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[3]};
  }
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  margin-bottom: ${t=>t.theme.space[2]};
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes.xs};
  color: ${t=>t.theme.colors.text.gray};
  font-weight: ${t=>t.theme.fonts.weights.medium};
`;T(X.div)`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
  padding: ${t=>t.theme.space[4]};
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  width: 100%;
  max-width: 320px;
  margin-top: ${t=>t.theme.space[6]};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
  }

  ${t=>t.theme.media.mobile} {
    max-width: 280px;
    padding: ${t=>t.theme.space[3]};
  }
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  color: #10b981;
  flex-shrink: 0;
`;T.div`
  flex: 1;
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes.xs};
  color: ${t=>t.theme.colors.text.gray};
`;const xx=()=>{const[t,a]=I.useState(""),[l,r]=I.useState(0),[u,f]=I.useState(!1);I.useEffect(()=>{const A=["Middle React Developer","Python Developer","AI/ML Enthusiast","Full-Stack Developer"],E=A[l],B=u,G=setTimeout(()=>{if(!B&&t===E)setTimeout(()=>f(!0),2e3);else if(B&&t==="")f(!1),r(U=>(U+1)%A.length);else{const U=B?E.substring(0,t.length-1):E.substring(0,t.length+1);a(U)}},B?50:150);return()=>clearTimeout(G)},[t,l,u]);const h={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},m={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},p={hidden:{opacity:0,scale:.8,x:50},visible:{opacity:1,scale:1,x:0,transition:{duration:1,ease:[.6,-.05,.01,.99]}}},g={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{duration:.6,ease:"easeOut"}},hover:{scale:1.2,y:-5,transition:{type:"spring",stiffness:400,damping:10}}},y=[{icon:ii,title:"Frontend",color:"#2563eb",bgColor:"rgba(37, 99, 235, 0.1)"},{icon:Oi,title:"Python",color:"#2563eb",bgColor:"rgba(37, 99, 235, 0.1)"},{icon:oo,title:"AI/ML",color:"#2563eb",bgColor:"rgba(37, 99, 235, 0.1)"}],x=[{icon:C0,href:"https://github.com/legion3trunn3r",className:"github",label:"GitHub профиль"},{icon:R6,href:"https://t.me/ValeryLegion",className:"linkedin",label:"LinkedIn профиль"},{icon:O6,href:"mailto:valery.trishevsky@gmail.com",className:"email",label:"Написать email"}];return b.jsxs(Kb,{children:[b.jsxs(Fb,{children:[b.jsx(o1,{className:"blob-1"}),b.jsx(o1,{className:"blob-2"}),b.jsx(o1,{className:"blob-3"})]}),b.jsx(Ea,{children:b.jsx(Jb,{variants:h,initial:"hidden",animate:"visible",children:b.jsxs(v8,{cols:2,gap:12,items:"center",style:{gap:"3rem 4rem"},children:[b.jsxs(Wb,{children:[b.jsxs(X.div,{variants:m,style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[b.jsxs(Ib,{variants:m,children:[b.jsx(tx,{children:"Валерий"}),b.jsx("br",{}),b.jsx(ex,{children:"Тришевский"})]}),b.jsxs(nx,{variants:m,children:[b.jsx(ix,{children:">"}),b.jsxs(ax,{children:[t,b.jsx(sx,{animate:{opacity:[0,1,0]},transition:{duration:1,repeat:1/0},children:"|"})]})]})]}),b.jsxs(lx,{variants:m,children:["Разработчик с ",b.jsx(Hr,{className:"purple",children:"5+ годами опыта"})," в создании современных веб-приложений. Специализируюсь на ",b.jsx(Hr,{className:"purple",children:"React"}),",",b.jsx(Hr,{className:"pink",children:" Python"})," и ",b.jsx(Hr,{className:"blue",children:"AI/ML"})," решениях."]}),b.jsx(rx,{variants:m,children:y.map((A,E)=>b.jsxs(ox,{backgroundColor:A.bgColor,whileHover:{scale:1.05,y:-2},transition:{delay:E*.1},children:[b.jsx(cx,{as:A.icon,color:A.color}),b.jsx(ux,{color:A.color,children:A.title})]},E))}),b.jsx(fx,{variants:m,children:x.map((A,E)=>b.jsx(hx,{href:A.href,target:"_blank",rel:"noopener noreferrer",className:A.className,variants:g,whileHover:"hover","aria-label":A.label,children:b.jsx(A.icon,{})},E))})]}),b.jsxs(dx,{initial:"hidden",animate:"visible",variants:p,children:[b.jsxs(mx,{children:[b.jsx(px,{animate:{scale:[1,1.05,1],opacity:[.2,.4,.2]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),b.jsx(Da,{className:"pos-1",animate:{y:[0,-6,0],rotate:[0,5,0]},transition:{duration:5,repeat:1/0,delay:0},children:b.jsx(Zs,{as:ii,fontSize:"24px"})}),b.jsx(Da,{className:"pos-2",animate:{y:[0,6,0],rotate:[0,-5,0]},transition:{duration:6,repeat:1/0,delay:.5},children:b.jsx(Zs,{as:Oi,fontSize:"24px"})}),b.jsx(Da,{className:"pos-3",animate:{x:[0,8,0],rotate:[0,-8,0]},transition:{duration:6,repeat:1/0,delay:1},children:b.jsx(Zs,{as:oo,fontSize:"24px"})}),b.jsx(Da,{className:"pos-4",animate:{y:[0,7,0],rotate:[0,5,0]},transition:{duration:5.5,repeat:1/0,delay:.3},children:b.jsx(Zs,{as:Di,fontSize:"24px"})}),b.jsx(Da,{className:"pos-5",animate:{y:[0,-7,0],rotate:[0,-5,0]},transition:{duration:5.8,repeat:1/0,delay:.8},children:b.jsx(Zs,{as:co,fontSize:"24px"})}),b.jsxs(gx,{transition:{duration:.3},children:[b.jsx(Nr,{className:"corner-tl"}),b.jsx(Nr,{className:"corner-tr"}),b.jsx(Nr,{className:"corner-bl"}),b.jsx(Nr,{className:"corner-br"}),b.jsx(yx,{children:b.jsx(vx,{src:Qb,alt:"Валерий Тришевский"})}),b.jsx(bx,{})]})]}),b.jsx(X.div,{variants:m,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.6,duration:.8},style:{maxWidth:"320px",width:"100%",textAlign:"center"}})]})]})})})]})};var G1=new Map,Ur=new WeakMap,p4=0,Sx=void 0;function Tx(t){return t?(Ur.has(t)||(p4+=1,Ur.set(t,p4.toString())),Ur.get(t)):"0"}function Ax(t){return Object.keys(t).sort().filter(a=>t[a]!==void 0).map(a=>`${a}_${a==="root"?Tx(t.root):t[a]}`).toString()}function zx(t){const a=Ax(t);let l=G1.get(a);if(!l){const r=new Map;let u;const f=new IntersectionObserver(h=>{h.forEach(m=>{var p;const g=m.isIntersecting&&u.some(y=>m.intersectionRatio>=y);t.trackVisibility&&typeof m.isVisible>"u"&&(m.isVisible=g),(p=r.get(m.target))==null||p.forEach(y=>{y(g,m)})})},t);u=f.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),l={id:a,observer:f,elements:r},G1.set(a,l)}return l}function Mx(t,a,l={},r=Sx){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const p=t.getBoundingClientRect();return a(r,{isIntersecting:r,target:t,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:u,observer:f,elements:h}=zx(l),m=h.get(t)||[];return h.has(t)||h.set(t,m),m.push(a),f.observe(t),function(){m.splice(m.indexOf(a),1),m.length===0&&(h.delete(t),f.unobserve(t)),h.size===0&&(f.disconnect(),G1.delete(u))}}function yl({threshold:t,delay:a,trackVisibility:l,rootMargin:r,root:u,triggerOnce:f,skip:h,initialInView:m,fallbackInView:p,onChange:g}={}){var y;const[x,A]=I.useState(null),E=I.useRef(g),[B,k]=I.useState({inView:!!m,entry:void 0});E.current=g,I.useEffect(()=>{if(h||!x)return;let L;return L=Mx(x,(F,N)=>{k({inView:F,entry:N}),E.current&&E.current(F,N),N.isIntersecting&&f&&L&&(L(),L=void 0)},{root:u,rootMargin:r,threshold:t,trackVisibility:l,delay:a},p),()=>{L&&L()}},[Array.isArray(t)?t.toString():t,x,u,r,f,h,l,p,a]);const G=(y=B.entry)==null?void 0:y.target,U=I.useRef(void 0);!x&&G&&!f&&!h&&U.current!==G&&(U.current=G,k({inView:!!m,entry:void 0}));const q=[A,B.inView,B.entry];return q.ref=q[0],q.inView=q[1],q.entry=q[2],q}const wx=()=>{const[t,a]=yl({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},r={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},u={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.6,ease:"easeOut"}}},f=[{icon:ii,title:"Frontend Development",description:"React, JavaScript, TypeScript, современные подходы к разработке UI/UX",technologies:["React","JavaScript","TypeScript","CSS3","styled-components"]},{icon:Oi,title:"Python Development",description:"Веб-разработка на Django/Flask, fastapi, скрипты и автоматизация, обработка данных",technologies:["Django","Flask","FastAPI","Data Science","Automation"]},{icon:oo,title:"AI & Machine Learning",description:"LLM разработка, обработка естественного языка, распознавание объектов, редактирование изображений",technologies:["Python","PyTorch","NLP","Computer Vision","RAG"]},{icon:$a,title:"DevOps & Backend",description:"Docker, CI/CD, облачные технологии, системное администрирование",technologies:["Docker","REST API","Linux","Nginx","Express JS"]}],h=["Создал персональную AI-модель для обучения и консультаций разработчиков","Разработал ИИ-платформу для генерации изображений интерьера с использованием Stable Diffusion","Интегрировал автоматизированное тестирование, сократив время релизов на 40%","Разработал систему машинного обучения для прогнозирования пользовательского поведения","Создал микросервисную архитектуру с автоматическим масштабированием","Разработал Telegram Mini App с миллионами активных пользователей","Создал чат-систему для внутренней коммуникации с real-time синхронизацией"];return b.jsx("section",{id:"about",ref:t,children:b.jsxs(X.div,{variants:l,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(X.div,{variants:r,style:{textAlign:"center",marginBottom:"4rem"},children:[b.jsx(hl,{as:X.h2,children:"О себе"}),b.jsx(X.p,{variants:r,style:{fontSize:"1.2rem",color:"#D1D5DB",maxWidth:"56rem",margin:"0 auto",lineHeight:"1.7",fontWeight:"500"},children:"Ответственный разработчик с системным подходом, способный ясно структурировать сложные задачи и доводить решения до высокого уровня исполнения."})]}),b.jsxs(S8,{children:[b.jsxs(X.div,{variants:r,style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[b.jsxs(Pu,{children:[b.jsxs("h3",{children:[b.jsx(oo,{}),"Профессиональная философия"]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",color:"#D1D5DB",lineHeight:"1.625"},children:b.jsx("p",{children:"Я убеждён, что роль разработчика — быть мостом между возможностями технологий и реальными потребностями людей. Поэтому я строю не отдельные компоненты, а целостные продукты, которые приносят пользу и радость от использования."})})]}),b.jsxs(Pu,{children:[b.jsxs("h3",{children:[b.jsx(Zb,{}),"Мои принципы"]}),b.jsx(T8,{children:[{icon:Hb,title:"Качество",desc:"Чистый код"},{icon:Di,title:"Инновации",desc:"Новые технологии"},{icon:qb,title:"Команда",desc:"Основа успеха"},{icon:_b,title:"Обучение",desc:"Постоянный рост"}].map((m,p)=>b.jsxs(X.div,{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0.75rem",background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(12px)",borderRadius:"0.5rem",border:"1px solid rgba(37, 99, 235, 0.1)",transition:"all 0.3s ease"},initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{delay:p*.1+1},whileHover:{scale:1.05},children:[b.jsx(m.icon,{style:{fontSize:"1.5rem",marginBottom:"0.5rem",color:"#2563eb"}}),b.jsx("h4",{style:{color:"#FFFFFF",fontWeight:"600",fontSize:"0.875rem",marginBottom:"0.25rem"},children:m.title}),b.jsx("p",{style:{color:"#9CA3AF",fontSize:"0.75rem"},children:m.desc})]},p))})]})]}),b.jsx(X.div,{variants:r,style:{display:"flex",flexDirection:"column",gap:"2rem"},children:b.jsxs(Pu,{children:[b.jsxs("h3",{children:[b.jsx(co,{}),"Ключевые достижения"]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:h.slice(0,8).map((m,p)=>b.jsxs(X.div,{style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",padding:"0.75rem",background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(12px)",borderRadius:"0.5rem",border:"1px solid rgba(37, 99, 235, 0.1)",transition:"all 0.3s ease"},initial:{opacity:0,x:20},animate:a?{opacity:1,x:0}:{opacity:0,x:20},transition:{delay:p*.1+.5},whileHover:{scale:1.02,x:5},children:[b.jsx("div",{style:{width:"0.5rem",height:"0.5rem",backgroundColor:"#22C55E",borderRadius:"50%",marginTop:"0.5rem",flexShrink:0}}),b.jsx("span",{style:{color:"#D1D5DB",fontSize:"0.875rem",lineHeight:"1.625"},children:m})]},p))})]})})]}),b.jsxs(X.div,{variants:r,style:{marginBottom:"4rem"},children:[b.jsx("h3",{style:{fontSize:"1.875rem",fontWeight:"700",textAlign:"center",color:"#2563eb",marginBottom:"3rem"},children:"Области экспертизы"}),b.jsx(A8,{children:f.map((m,p)=>b.jsxs(Zd,{as:Zd,variants:u,whileHover:{y:-10},children:[b.jsx("div",{style:{marginBottom:"1rem"},children:b.jsx(m.icon,{className:"icon"})}),b.jsx("h4",{children:m.title}),b.jsx("p",{children:m.description}),b.jsx(z8,{children:m.technologies.map((g,y)=>b.jsx(M8,{children:g},y))})]},p))})]})]})})};function Ex(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"},child:[]}]})(t)}function $x(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.4446 11.5059c0 1.1021.1673 2.1585.4847 3.1563-.0378-.0028-.0691-.0058-.1058-.0058-.4209 0-.8015.16-1.0704.4512-.3454.3737-.4984.8335-.4316 1.293a1.576 1.576 0 0 0 .2148.5978c-.2319.1864-.4018.4456-.4844.7578-.0646.2448-.131.7543.2149 1.2794a1.4552 1.4552 0 0 0-.0625.1055c-.208.3923-.2207.8372-.0371 1.25.2783.6258.9696 1.1175 2.3126 1.6467.8356.3292 1.5988.5411 1.6056.543 1.1046.2847 2.104.4277 2.969.4277 1.4173 0 2.4754-.3849 3.1525-1.1446 1.538.2651 2.791.1403 3.592.006.6773.7555 1.7332 1.1387 3.1467 1.1387.8649 0 1.8643-.143 2.969-.4278.0068-.0019.77-.2138 1.6056-.543 1.343-.5292 2.0343-1.0208 2.3126-1.6466.1836-.4129.171-.8577-.037-1.25a1.4685 1.4685 0 0 0-.0626-.1056c.346-.525.2795-1.0346.2149-1.2793-.0826-.3122-.2525-.5714-.4844-.7579.11-.1816.1831-.3788.2148-.5977.0669-.4595-.0862-.9193-.4316-1.293-.2688-.2913-.6495-.4513-1.0704-.4513-.0209 0-.0376.0008-.0588.0018.3162-.9966.4846-2.0518.4846-3.1523 0-5.807-4.7362-10.5144-10.5789-10.5144-5.8426 0-10.5788 4.7073-10.5788 10.5144Zm10.5788-9.4831c5.2727 0 9.5476 4.246 9.5476 9.483a9.4201 9.4201 0 0 1-.2696 2.2365c-.0039-.0047-.0079-.011-.0117-.0156-.274-.3255-.6679-.5059-1.1075-.5059-.352 0-.714.1155-1.0763.3438-.2403.1517-.5058.422-.7793.7598-.2534-.3492-.608-.5832-1.0137-.6465a1.5174 1.5174 0 0 0-.2344-.0176c-.9263 0-1.4828.7993-1.6935 1.5177-.1046.2426-.6065 1.3482-1.3614 2.0978-1.1681 1.1601-1.4458 2.3534-.8396 3.6382-.843.1029-1.5836.0927-2.365-.006.5906-1.212.3626-2.4388-.8426-3.6322-.755-.7496-1.2568-1.8552-1.3614-2.0978-.2107-.7184-.7673-1.5177-1.6935-1.5177-.078 0-.1568.0054-.2344.0176-.4057.0633-.7604.2973-1.0137.6465-.2735-.3379-.539-.6081-.7794-.7598-.3622-.2283-.7243-.3438-1.0762-.3438-.4266 0-.8094.171-1.0821.4786a9.4208 9.4208 0 0 1-.2598-2.1936c0-5.237 4.2749-9.483 9.5475-9.483zM8.6443 7.0036c-.4838.0043-.9503.2667-1.1934.7227-.3536.6633-.1006 1.4873.5645 1.84.351.1862.4883-.5261.836-.6485.3107-.1095.841.399 1.0078.086.3536-.6634.1025-1.4874-.5625-1.84a1.3659 1.3659 0 0 0-.6524-.1602Zm6.8403 0c-.2199-.002-.4426.05-.6504.1602-.665.3526-.9181 1.1766-.5645 1.84.1669.313.6971-.1955 1.0079-.086.3476.1224.4867.8347.838.6485.6649-.3527.916-1.1767.5624-1.84-.243-.456-.7096-.7184-1.1934-.7227Zm-9.7565 1.418a.8768.8768 0 0 0-.877.877c0 .4846.3925.877.877.877a.8768.8768 0 0 0 .877-.877.8768.8768 0 0 0-.877-.877zm12.6434 0c-.4845 0-.879.3925-.879.877 0 .4846.3945.877.879.877a.8768.8768 0 0 0 .877-.877.8768.8768 0 0 0-.877-.877zM8.7927 11.459c-.179-.003-.2793.1107-.2793.416 0 .8097.3874 2.125 1.4279 2.924.207-.7123 1.3453-1.2832 1.5079-1.2012.2315.1167.2191.4417.6074.7266.3884-.285.374-.6098.6056-.7266.1627-.082 1.3009.4889 1.5079 1.2012 1.0404-.799 1.4278-2.1144 1.4278-2.924 0-1.2212-1.583.6402-3.5413.6485-1.4686-.0061-2.7266-1.0558-3.2639-1.0645zM4.312 14.4768c.5792.365 1.6964 2.2751 2.1056 3.0177.1371.2488.371.3536.582.3536.4188 0 .7465-.4138.0391-.9395-1.0636-.791-.6914-2.0846-.1836-2.1642a.4302.4302 0 0 1 .0664-.004c.4616 0 .666.7892.666.7892s.5959 1.4898 1.6213 2.508c.942.9356 1.062 1.703.4961 2.6661-.0164-.004-.0159.0236-.1484.2149-.1853.2673-.4322.4688-.7188.6152-.5062.2269-1.1397.2696-1.7833.2696-1.037 0-2.1017-.1824-2.6975-.336-.0293-.0075-3.6505-.9567-3.1916-1.8224.0771-.1454.2033-.2031.3633-.2031.6463 0 1.823.9551 2.3283.9551.113 0 .196-.0865.2285-.2031.2249-.8045-3.2787-1.0522-2.9846-2.1642.0519-.1967.193-.2757.3907-.2754.854 0 2.7704 1.4923 3.172 1.4923.0307 0 .0525-.0085.0645-.0274.2012-.3227.1096-.5865-1.3087-1.4395-1.4182-.8533-2.4315-1.329-1.8653-1.9416.0651-.0707.1574-.1015.2695-.1015.8611.0002 2.8948 1.84 2.8948 1.84s.5487.5683.8809.5683c.0762 0 .1416-.0315.1855-.1054.2355-.3946-2.1858-2.2183-2.3224-2.971-.0926-.51.0641-.7676.3555-.7676-.0006.008.1701-.0285.4942.1759zm16.2257.5918c-.1366.7526-2.5579 2.5764-2.3224 2.9709.044.074.1092.1055.1855.1055.3321 0 .881-.5684.881-.5684s2.0336-1.8397 2.8947-1.84c.1121 0 .2044.0308.2695.1016.5662.6125-.447 1.0882-1.8653 1.9415-1.4183.853-1.51 1.1168-1.3087 1.4396.012.0188.0337.0273.0644.0273.4016 0 2.3181-1.4923 3.1721-1.4923.1977-.0002.3388.0787.3907.2754.294 1.112-3.2095 1.3597-2.9846 2.1642.0325.1166.1156.2032.2285.2032.5054 0 1.682-.9552 2.3283-.9552.16 0 .2862.0577.3633.2032.459.8656-3.1623 1.8149-3.1916 1.8224-.5958.1535-1.6605.336-2.6975.336-.6351 0-1.261-.0409-1.7638-.2599-.2949-.1472-.5488-.3516-.7383-.625-.0411-.0682-.1026-.1476-.1426-.205-.5726-.9679-.455-1.7371.4903-2.676 1.0254-1.0182 1.6212-2.508 1.6212-2.508s.2044-.7891.666-.7891a.4318.4318 0 0 1 .0665.0039c.5078.0796.88 1.3732-.1836 2.1642-.7074.5257-.3797.9395.039.9395.211 0 .445-.1047.5821-.3535.4092-.7426 1.5264-2.6527 2.1056-3.0178.5588-.3524.99-.1816.8497.5918z"},child:[]}]})(t)}function Dx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function Cx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"},child:[]}]})(t)}function jx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(t)}function Rx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(t)}function q1(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z"},child:[]}]})(t)}function Ox(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"},child:[]}]})(t)}function Vx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(t)}function g4(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(t)}function y4(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z"},child:[]}]})(t)}function Bx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"},child:[]}]})(t)}function _x(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(t)}function Lx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(t)}const Hx=T.section`
  padding: ${t=>t.theme.space[20]} ${t=>t.theme.space[6]};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 ${t=>t.theme.space[0]};
  }
`,Nx=T.div`
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,Ux=T(X.div)`
  text-align: center;
  margin-bottom: ${t=>t.theme.space[16]};
`,kx=T.p`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  color: ${t=>t.theme.colors.text.gray};
  max-width: 768px;
  margin: 0 auto;
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};

  ${t=>t.theme.media.mobile} {
    font-size: ${t=>t.theme.fonts.sizes.lg};
    padding: 0 ${t=>t.theme.space[4]};
    max-width: 100%;
  }
`,Yx=T.div`
  display: grid;
  gap: ${t=>t.theme.space[8]};

  ${t=>t.theme.media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${t=>t.theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`,Gx=T(X.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  padding: ${t=>t.theme.space[6]};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }


`,qx=T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
  margin-bottom: ${t=>t.theme.space[6]};
`,Xx=T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: ${t=>t.theme.radii.lg};
`,Px=T.h3`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
`,Zx=T.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[3]};
`,Qx=T(X.div)`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
  padding: ${t=>t.theme.space[3]};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${t=>t.theme.radii.base};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    background: rgba(37, 99, 235, 0.05);
  }
`,Kx=T.span`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  color: ${t=>t.theme.colors.primary.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: ${t=>t.theme.radii.base};
  flex-shrink: 0;
`,Fx=T.span`
  color: ${t=>t.theme.colors.text.white};
  font-weight: ${t=>t.theme.fonts.weights.medium};
`,Jx=()=>{const[t,a]=yl({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),l=[{id:"frontend",title:"Frontend",icon:Pe,skills:[{name:"React",icon:Pe},{name:"JavaScript",icon:u4},{name:"TypeScript",icon:Lx},{name:"HTML5",icon:Y1},{name:"CSS3",icon:jb},{name:"Styled Components",icon:_x},{name:"Vite",icon:r1}]},{id:"backend",title:"Backend & DevOps",icon:f4,skills:[{name:"Node.js",icon:f4},{name:"Express.js",icon:r1},{name:"Docker",icon:Ob},{name:"Linux",icon:j6},{name:"AWS",icon:c4},{name:"Nginx",icon:q1},{name:"Git",icon:r1}]},{id:"python",title:"Python",icon:Oi,skills:[{name:"Django",icon:Oi},{name:"FastAPI",icon:Pe},{name:"Data Science",icon:Pe},{name:"Automation",icon:u4},{name:"Flask",icon:Y1},{name:"Pandas",icon:c4},{name:"NumPy",icon:Oi}]},{id:"ai",title:"AI & Databases",icon:y4,skills:[{name:"PyTorch",icon:y4},{name:"Hugging Face",icon:$x},{name:"Machine Learning",icon:Oi},{name:"PostgreSQL",icon:Vx},{name:"MongoDB",icon:jx}]}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},u={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},f={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}};return b.jsx(Hx,{id:"skills",ref:t,children:b.jsx(Nx,{children:b.jsxs(X.div,{variants:r,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(Ux,{variants:u,children:[b.jsx(hl,{children:"Навыки и технологии"}),b.jsx(kx,{children:"Мои основные технологические навыки, которыми я активно владею и использую в разработке современных проектов."})]}),b.jsx(Yx,{children:l.map((h,m)=>b.jsxs(Gx,{variants:u,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:m*.2},children:[b.jsxs(qx,{children:[b.jsx(Xx,{children:b.jsx(h.icon,{})}),b.jsx(Px,{children:h.title})]}),b.jsx(Zx,{children:h.skills.map((p,g)=>b.jsxs(Qx,{variants:f,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:m*.2+g*.1},children:[b.jsx(Kx,{children:b.jsx(p.icon,{})}),b.jsx(Fx,{children:p.name})]},p.name))})]},h.id))})]})})})},Wx=()=>{const[t,a]=yl({threshold:.1,triggerOnce:!0}),l=[{title:"Junior Frontend Developer",company:"StartupVibe",period:"Март 2018 – Сентябрь 2020",location:"Удаленно",description:"Начал карьеру с разработки интерфейсов для стартапов. Изучал современные фреймворки и лучшие практики frontend-разработки. Работал в команде над несколькими проектами одновременно. Постоянно улучшал свои навыки на ошибках",achievements:["Освоил React и современный JavaScript","Изучил языки программирования, такие как: C++, Python, PHP, JS","Изучил основы UX/UI дизайна","Получил опыт и наставления от сеньоров"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:Lr,color:"#fbbf24"},{name:"HTML/CSS",icon:Y1,color:"#E34F26"},{name:"Git",icon:Vb,color:"#F05032"},{name:"C++",icon:Ex,color:"#3238f0ff"},{name:"Python",icon:g4,color:"#32f03bff"},{name:"PHP",icon:Ox,color:"#32f0eaff"}]},{title:"Junior+ React Developer",company:"EIS",period:"Ноябрь 2020 – Май 2023",location:"Офис",description:"Руководил командой разработчиков по созданию Блог платформы для помощи молодым людям найти себя в карьере",achievements:["Создал кроссбраузерную платформу для реализации блога","Разработал систему администрации для фильтрации контента и добавлении статей","Разработал современные адаптивные веб-сайты для клиентов","Интегрировал frontend решения с backend API"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:Lr,color:"#fbbf24"},{name:"Nginx",icon:q1,color:"#A855F7"},{name:"REST API",icon:$a,color:"#22C55E"},{name:"Responsive Design",icon:Pe,color:"#00D4FF"},{name:"MySQL",icon:Rx,color:"#ff00eaff"}]},{title:"Middle React Developer",company:"Фриланс",period:"Июнь 2023 – Январь 2025",location:"Удаленно",description:"Занимался заказными проектами в различных сферах",achievements:["Создал CRM систему для отслеживания рентабельности магазина","Разработал Telegram Mini App приложение медитаций и вдохновения включаяя ИИ","Разработал современные адаптивные веб-сайты для клиентов","Интегрировал frontend решения с backend API","Разработал систему вычисления матрицы и его детализация по всем сферам жизни"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:Lr,color:"#fbbf24"},{name:"AI/ML",icon:$a,color:"#A855F7"},{name:"styled-components",icon:Rb,color:"#2248c5ff"},{name:"REST API",icon:$a,color:"#22C55E"},{name:"Responsive Design",icon:Pe,color:"#00D4FF"}]},{title:"Full-Stack Developer & DevOps Engineer",company:"FIGORA",period:"Январь 2025 – Ноябрь 2025",location:"Удаленно",description:"Разработал kanban-систему управления задачами, включаяя разработку полноценной системы коммуникации между исполнителем и заказчиком в сфере дизайна интерьеров и архитектуры. Проектировал и внедрял AI-функции для генерации текста, распознавания объектов и преобразовании планировки в 3D-модель.",achievements:["Создал kanban-систему управления задачами на React","Внедрил AI-функции для улучшения пользовательского опыта","Разработал современные адаптивные веб-сайты для клиентов","Интегрировал frontend решения с backend API","Реализовал общий канбан для работы с сотрудниками","Создал чат-мессенджер внутри платформы для коммуникации с заказчиками и командой","Разработал маркетплейс покупки необходимых материалов для интерьерных проектов","Разработал отдельный ИИ сервис для генерации и редактировании изображений","Разработал TMA приложение для сканирования чеков и получении бонусов"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:Lr,color:"#fbbf24"},{name:"AI/ML",icon:$a,color:"#A855F7"},{name:"REST API",icon:$a,color:"#22C55E"},{name:"Express JS",icon:Dx,color:"#c5c022ff"},{name:"Responsive Design",icon:Pe,color:"#00D4FF"},{name:"socketIO",icon:Bx,color:"#6a00ffff"},{name:"Linux",icon:Cx,color:"#ff3700ff"},{name:"Nginx",icon:q1,color:"#ffee00ff"},{name:"Python",icon:g4,color:"#61da16ff"}]}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},u={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return b.jsx("section",{id:"experience",ref:t,children:b.jsxs(X.div,{variants:r,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(X.div,{variants:u,style:{textAlign:"center",marginBottom:"4rem"},children:[b.jsx(hl,{as:X.h2,children:"Опыт работы"}),b.jsx(X.p,{style:{fontSize:"1.25rem",color:"#94A3B8",maxWidth:"48rem",margin:"0 auto",lineHeight:"1.625"},children:"Профессиональное развитие в IT: путь от начинающего до уверенного разработчика"})]}),b.jsx(X.div,{style:{display:"flex",flexDirection:"column",gap:"3rem",maxWidth:"80rem",margin:"0 auto"},children:l.reverse().map((f,h)=>b.jsx(X.div,{variants:u,style:{position:"relative"},children:b.jsxs(vo,{style:{position:"relative",background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(16px)",border:"1px solid rgba(37, 99, 235, 0.2)",borderRadius:"1rem",overflow:"hidden",transition:"all 0.3s ease"},whileHover:{y:-5,scale:1.01},children:[b.jsx(X.div,{style:{position:"absolute",top:"1.5rem",right:"1.5rem",background:"rgba(37, 99, 235, 0.1)",border:"1px solid rgba(37, 99, 235, 0.3)",borderRadius:"2rem",padding:"0.5rem 1rem",fontSize:"0.75rem",fontWeight:"600",color:"#2563eb"},initial:{opacity:0,scale:.8},animate:a?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:h*.1},children:f.period}),b.jsxs(X.div,{style:{padding:"2.5rem 2rem 2rem 2rem",position:"relative",zIndex:2},initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{delay:h*.2},children:[b.jsxs("div",{style:{marginBottom:"1.5rem"},children:[b.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#FFFFFF",marginBottom:"0.5rem",textAlign:"left"},children:f.title}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem",flexWrap:"wrap"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#2563eb"},children:[b.jsx(Lb,{style:{fontSize:"1rem"}}),b.jsx("span",{style:{fontWeight:"600",fontSize:"0.875rem"},children:f.company})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#94A3B8"},children:[b.jsx(Pb,{style:{fontSize:"1rem"}}),b.jsx("span",{style:{fontSize:"0.875rem"},children:f.location})]})]})]}),b.jsx(X.p,{style:{color:"#D1D5DB",lineHeight:"1.7",fontSize:"0.95rem",marginBottom:"2rem",textAlign:"left"},initial:{opacity:0},animate:a?{opacity:1}:{opacity:0},transition:{delay:h*.3+.2},children:f.description}),b.jsxs("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"1fr","@media (min-width: 768px)":{gridTemplateColumns:"1fr 1fr"}},children:[b.jsxs(X.div,{initial:{opacity:0,x:-20},animate:a?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:h*.3+.4},children:[b.jsxs("h4",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#2563eb",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[b.jsx("div",{style:{width:"6px",height:"6px",backgroundColor:"#2563eb",borderRadius:"50%"}}),"Ключевые достижения"]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:f.achievements.slice(0,4).map((m,p)=>b.jsxs(X.div,{style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",padding:"0.75rem",background:"rgba(34, 197, 94, 0.05)",borderRadius:"0.5rem",border:"1px solid rgba(34, 197, 94, 0.1)",transition:"all 0.3s ease"},whileHover:{backgroundColor:"rgba(34, 197, 94, 0.08)",x:5},initial:{opacity:0,x:-20},animate:a?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:h*.2+p*.1+.6},children:[b.jsx(Nb,{style:{fontSize:"0.875rem",color:"#22C55E",marginTop:"0.125rem",flexShrink:0}}),b.jsx("span",{style:{color:"#D1D5DB",fontSize:"0.875rem",lineHeight:"1.5"},children:m})]},p))})]}),b.jsxs(X.div,{initial:{opacity:0,x:20},animate:a?{opacity:1,x:0}:{opacity:0,x:20},transition:{delay:h*.3+.6},children:[b.jsxs("h4",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#2563eb",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[b.jsx("div",{style:{width:"6px",height:"6px",backgroundColor:"#2563eb",borderRadius:"50%"}}),"Технологии"]}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem"},children:f.technologies.slice(0,6).map((m,p)=>b.jsxs(X.div,{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(37, 99, 235, 0.1)",border:"1px solid rgba(37, 99, 235, 0.2)",borderRadius:"2rem",padding:"0.5rem 1rem",fontSize:"0.75rem",fontWeight:"500",color:"#D1D5DB"},whileHover:{backgroundColor:"rgba(37, 99, 235, 0.2)",scale:1.05,x:5},initial:{opacity:0,scale:.8},animate:a?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:h*.2+p*.05+.8},children:[b.jsx(m.icon,{style:{color:m.color,fontSize:"1rem"}}),m.name]},p))})]})]})]})]})},h))})]})})},Ix=T.section`
  padding: ${t=>t.theme.space[20]} ${t=>t.theme.space[6]};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 ${t=>t.theme.space[0]};
  }
`,tS=T.div`
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,eS=T(X.div)`
  text-align: center;
  margin-bottom: ${t=>t.theme.space[16]};
`,nS=T.p`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  color: ${t=>t.theme.colors.text.gray};
  max-width: 768px;
  margin: 0 auto;
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};

  ${t=>t.theme.media.mobile} {
    font-size: ${t=>t.theme.fonts.sizes.lg};
    padding: 0 ${t=>t.theme.space[4]};
  }
`,iS=T(X.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[12]};
`,aS=T.button`
  padding: ${t=>t.theme.space[3]} ${t=>t.theme.space[6]};
  border-radius: ${t=>t.theme.radii.lg};
  border: none;
  background: ${t=>t.$active?t.theme.colors.primary.blue:"transparent"};
  color: ${t=>t.$active?"white":t.theme.colors.text.gray};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  cursor: pointer;
  transition: ${t=>t.theme.transitions.all};
  border: 2px solid ${t=>t.$active?t.theme.colors.primary.blue:"transparent"};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
    color: ${t=>t.theme.colors.primary.blue};
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[2]} ${t=>t.theme.space[4]};
    font-size: ${t=>t.theme.fonts.sizes.sm};
  }
`,sS=T.div`
  display: grid;
  gap: ${t=>t.theme.space[8]};
  margin-bottom: ${t=>t.theme.space[16]};

  ${t=>t.theme.media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${t=>t.theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`,lS=T(X.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  padding: ${t=>t.theme.space[8]};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[6]};
  }
`,rS=T.div`
  display: flex;
  align-items: flex-start;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[4]};
`,oS=T.div`
  font-size: ${t=>t.theme.fonts.sizes["3xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`,cS=T.div`
  flex: 1;
`,uS=T.h3`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[2]};
`,fS=T.span`
  display: inline-block;
  padding: ${t=>t.theme.space[1]} ${t=>t.theme.space[3]};
  background: ${t=>t.theme.colors.primary.blue};
  color: white;
  border-radius: ${t=>t.theme.radii.full};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  margin-bottom: ${t=>t.theme.space[3]};
`,hS=T.p`
  color: ${t=>t.theme.colors.text.gray};
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};
  margin-bottom: ${t=>t.theme.space[4]};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,dS=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  margin-bottom: ${t=>t.theme.space[4]};
`,mS=T.span`
  padding: ${t=>t.theme.space[1]} ${t=>t.theme.space[2]};
  background: rgba(37, 99, 235, 0.1);
  color: ${t=>t.theme.colors.primary.blue};
  border-radius: ${t=>t.theme.radii.base};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  border: 1px solid rgba(37, 99, 235, 0.2);
`,pS=T.div`
  display: flex;
  gap: ${t=>t.theme.space[4]};
  align-items: center;
`,v4=T.a`
  display: inline-flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  padding: ${t=>t.theme.space[2]} ${t=>t.theme.space[4]};
  border-radius: ${t=>t.theme.radii.base};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  text-decoration: none;
  transition: ${t=>t.theme.transitions.all};

  ${t=>t.$primary?`
    background: ${t.theme.colors.primary.blue};
    color: white;

    &:hover {
      background: ${a=>a.theme.colors.primary.dark};
    }
  `:`
    background: transparent;
    border: 2px solid ${a=>a.theme.colors.primary.blue};
    color: ${a=>a.theme.colors.primary.blue};

    &:hover {
      background: ${a=>a.theme.colors.primary.blue};
      color: white;
    }
  `}
`;T.div`
  display: grid;
  gap: ${t=>t.theme.space[8]};
  margin-bottom: ${t=>t.theme.space[16]};

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${t=>t.theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;T(X.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  padding: ${t=>t.theme.space[6]};
  text-align: center;
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[4]};
  }
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes["4xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  margin-bottom: ${t=>t.theme.space[2]};
`;T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
`;T.div`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`;const gS=()=>{const[t,a]=yl({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),[l,r]=I.useState("Все"),u=[{title:"Transcripta - AI Транскрибация",description:"Сервис транскрибации аудио и видео в текст с использованием ИИ. Автоматическое создание отчетов, возможность задавать вопросы ИИ о содержимом транскрипции. Веб-интерфейс для загрузки и анализа контента.",icon:wa,technologies:["Python","Speech Recognition","NLP","FastAPI","React","WebRTC"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"https://transcripta.ru"},{title:"ValHire - Платформа для HR",description:"Сервис для улучшения резюме и подготовки к собеседованиям. AI анализ резюме, практика интервью, рекомендации по улучшению профиля. Персонализированные советы для карьерного роста.",icon:Di,technologies:["Python","NLP","React","FastAPI","PostgreSQL","AI/ML"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"https://hire.valtrify.ru"},{title:"Figora - Экосистема строительства",description:"Комплексная платформа для строительства, ремонта и дизайна архитектуры. Канбан-система управления проектами, 3D-моделирование, автоматизация процессов, связь с подрядчиками через WebSocket.",icon:ii,technologies:["React","Python","WebSocket","3D Graphics","PostgreSQL","Docker"],category:"Full-Stack",github:"https://github.com/legion3trunn3r",demo:"https://service.figora.ru"},{title:"ValHub - Блог о ИИ",description:"Платформа для изучения искусственного интеллекта. Новости, статьи, курсы, сообщество. Персонализированные рекомендации контента и интерактивные курсы по машинному обучению.",icon:wa,technologies:["React","Python","FastAPI","PostgreSQL","NLP","Content Management"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"https://blog.valtrify.ru"},{title:"Personal AI Mentor",description:"Персональная LLM-модель как AI-ментор с персонализированными советами и обучающими путями. Pixovoy Music Автоматизированная система для генерации заголовков к постам музыкальных треков в телеграм канале.",icon:wa,technologies:["Python","PyTorch","NLP","React","FastAPI","Docker"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Data Analysis Dashboard",description:"Интерактивный дашборд для анализа больших данных с использованием Python, Pandas и Plotly. Автоматизированный ETL процесс для обработки и визуализации данных в реальном времени.",icon:ii,technologies:["Python","Pandas","Plotly","Streamlit","PostgreSQL","Docker"],category:"Data Science",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Автоматизация рутинных задач",description:"Набор Python-скриптов для автоматизации ежедневных процессов: автоматическая обработка email, генерация отчетов, веб-скраппинг, резервное копирование данных и автоматические уведомления.",icon:Di,technologies:["Python","BeautifulSoup","Selenium","SMTP","Asyncio","docker"],category:"Automation",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Система компьютерного зрения",description:"Комплексная система распознавания изображений: детекция объектов, распознавание лиц, OCR, классификация изображений. Web-интерфейс для загрузки и анализа фото/видео.",icon:wa,technologies:["Python","OpenCV","TensorFlow","Flask","YOLO","Tesseract"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Сетевая автоматизация скриптов",description:"Набор Python-скриптов для автоматизации сетевое управление: резервное копирование конфигураций, мониторинг сетевых устройств, автоматическая генерация отчетов о состоянии сети.",icon:Di,technologies:["Python","Netmiko","Napalm","Ansible","Bash","Docker"],category:"Automation",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Telegram Bot Ecosystem",description:"Система связаных Telegram ботов для различных задач: бот для генерации постов с AI, бот для мониторинга и анализа чатов, бот для автоматизации бизнес-процессов.",icon:wa,technologies:["Python","Telegram API","SQLite","Asyncio","Machine Learning","Docker"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Прогностическая модель продаж",description:"Система машинного обучения для прогнозирования продаж. Анализ исторических данных, выявление трендов и паттернов. Интеграция с CRM системами для автоматических рекомендаций.",icon:ii,technologies:["Python","Scikit-learn","Pandas","Time Series","Flask","Chart.js"],category:"Machine Learning",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Kanban Task Manager",description:"Система управления задачами с drag&drop, real-time синхронизацией и аналитикой. Встроенная интеграция с Python скриптами для автоматизации процессов.",icon:Ub,technologies:["React","Node.js","Python","WebSocket","PostgreSQL"],category:"Full-Stack",github:"https://github.com/legion3trunn3r",demo:"https://platform.figora.ru"},{title:"API & Microservices Platform",description:"Платформа микросервисов с Python FastAPI, автоматизированным тестированием и CI/CD пайплайнами. RESTful API для различных бизнес-приложений.",icon:Di,technologies:["Python","FastAPI","Redis","PostgreSQL","Docker","Kubernetes"],category:"Backend",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Анализатор больших данных",description:"Фреймворк для обработки и анализа больших данных с использованием Python, Dask и Apache Spark. Автоматизированные отчеты и визуализация данных.",icon:ii,technologies:["Python","Dask","Apache Spark","Polars","Jupyter","Docker"],category:"Data Science",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"ChatGPT Telegram Mini App",description:"Telegram Mini App с интегрированным ChatGPT для медитаций и вдохновения. Обработка естественного языка, персонализация ответов и пользовательский интерфейс.",icon:wa,technologies:["React","Python","Telegram API","NLP","FastAPI","PostgreSQL"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Python ETL Pipeline",description:"Автоматизированная ETL система для обработки данных из различных источников. Schedule-based исполнение, error handling, logging, интеграция с облачными хранилищами.",icon:ii,technologies:["Python","Apache Airflow","Pandas","PostgreSQL","AWS S3","Docker"],category:"Data Science",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"RESTful API Generator",description:"Инструмент для автоматической генерации REST API из моделей данных. Поддержка различных фреймворков, автоматическое создание документации, интеграция с базами данных.",icon:Di,technologies:["Python","FastAPI","SQLAlchemy","Pydantic","Docker","Swagger"],category:"Backend",github:"https://github.com/legion3trunn3r",demo:"#"}],f=["Все","AI/ML","Full-Stack","Data Science","Machine Learning","Automation","Backend"],h=l==="Все"?u:u.filter(y=>y.category.toLowerCase().includes(l.toLowerCase())),m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},p={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},g={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.6,ease:"easeOut"}}};return b.jsx(Ix,{id:"projects",ref:t,children:b.jsx(tS,{children:b.jsxs(X.div,{variants:m,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(eS,{variants:p,children:[b.jsx(hl,{as:X.h2,children:"Портфолио проектов"}),b.jsx(nS,{children:"Подборка моих лучших проектов, демонстрирующих опыт в различных областях разработки"})]}),b.jsx(iS,{variants:p,children:f.map(y=>b.jsx(aS,{$active:l===y,onClick:()=>r(y),children:y},y))}),b.jsx(sS,{children:h.map((y,x)=>b.jsxs(lS,{variants:g,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:x*.1},children:[b.jsxs(rS,{children:[b.jsx(oS,{children:b.jsx(y.icon,{})}),b.jsxs(cS,{children:[b.jsx(uS,{children:y.title}),b.jsx(fS,{children:y.category}),b.jsx(hS,{children:y.description})]})]}),b.jsx(dS,{children:y.technologies.map((A,E)=>b.jsx(mS,{children:A},E))}),b.jsxs(pS,{children:[y.github&&y.github!=="#"&&b.jsxs(v4,{href:y.github,target:"_blank",children:[b.jsx(C0,{}),"GitHub"]}),y.demo&&y.demo!=="#"&&b.jsxs(v4,{href:y.demo,target:"_blank",$primary:!0,children:[b.jsx(kb,{}),"Демо"]})]})]},y.title))})]})})})},yS=T.section`
  padding: ${t=>t.theme.space[20]} ${t=>t.theme.space[6]};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 ${t=>t.theme.space[0]};
  }
`,vS=T.div`
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  position: relative;
`,bS=T(X.div)`
  text-align: center;
  margin-bottom: ${t=>t.theme.space[16]};
`,xS=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${t=>t.theme.space[8]};
  margin-bottom: ${t=>t.theme.space[16]};

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${t=>t.theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`,c1=T(X.div)`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1.5px solid rgba(37, 99, 235, 0.3);
  border-radius: 24px;
  padding: ${t=>t.theme.space[8]} ${t=>t.theme.space[7]};
  transition: ${t=>t.theme.transitions.all};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[6]};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.4), transparent);
  }

  &:hover {
    border-color: rgba(37, 99, 235, 0.5);
    box-shadow: 0 16px 40px rgba(37, 99, 235, 0.15);
    transform: translateY(-4px);
  }
`,u1=T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[4]};
`,f1=T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(37, 99, 235, 0.1));
  border-radius: 12px;
  border: 1px solid rgba(37, 99, 235, 0.3);
`,b4=T.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[3]};
`,h1=T.h3`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
`,x4=T(X.div)`
  padding: ${t=>t.theme.space[4]};
  background: rgba(37, 99, 235, 0.08);
  border-radius: 14px;
  border: 1px solid rgba(37, 99, 235, 0.15);
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    background: rgba(37, 99, 235, 0.12);
    border-color: rgba(37, 99, 235, 0.3);
  }

  &:not(:last-child) {
    margin-bottom: ${t=>t.theme.space[3]};
  }
`,S4=T.h4`
  font-size: ${t=>t.theme.fonts.sizes.base};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
  line-height: ${t=>t.theme.fonts.lineHeights.snug};
`,T4=T.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  margin-bottom: ${t=>t.theme.space[2]};

  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
`,A4=T.span`
  display: inline-block;
  padding: ${t=>t.theme.space[2]} ${t=>t.theme.space[3]};
  background: linear-gradient(135deg, ${t=>t.theme.colors.primary.blue}, rgba(37, 99, 235, 0.8));
  color: white;
  border-radius: 20px;
  font-size: ${t=>t.theme.fonts.sizes.xs};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`,z4=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  margin-top: ${t=>t.theme.space[5]};
`,d1=T.span`
  padding: ${t=>t.theme.space[2]} ${t=>t.theme.space[3]};
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(37, 99, 235, 0.05));
  color: ${t=>t.theme.colors.primary.blue};
  border-radius: 12px;
  font-size: ${t=>t.theme.fonts.sizes.xs};
  border: 1px solid rgba(37, 99, 235, 0.3);
  transition: ${t=>t.theme.transitions.all};
  font-weight: 500;

  &:hover {
    border-color: rgba(37, 99, 235, 0.6);
    background: rgba(37, 99, 235, 0.2);
    transform: scale(1.05);
  }
`,SS=T(X.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${t=>t.theme.space[4]} ${t=>t.theme.space[5]};
  background: rgba(37, 99, 235, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(37, 99, 235, 0.15);
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    background: rgba(37, 99, 235, 0.12);
    border-color: rgba(37, 99, 235, 0.3);
  }
`,TS=T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
`,AS=T.span`
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.text.white};
  font-size: ${t=>t.theme.fonts.sizes.base};
`,zS=T.span`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,MS=T.div`
  display: grid;
  gap: ${t=>t.theme.space[6]};
`,wS=T(X.div)`
  padding: ${t=>t.theme.space[4]};
  background: rgba(37, 99, 235, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(37, 99, 235, 0.15);
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    background: rgba(37, 99, 235, 0.12);
    border-color: rgba(37, 99, 235, 0.3);
  }

  &:not(:last-child) {
    margin-bottom: ${t=>t.theme.space[3]};
  }
`,ES=T.div`
  display: flex;
  align-items: flex-start;
  gap: ${t=>t.theme.space[3]};
  margin-bottom: ${t=>t.theme.space[2]};
`,$S=T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(37, 99, 235, 0.1));
  border-radius: 14px;
  border: 1px solid rgba(37, 99, 235, 0.3);
`,DS=T.div`
  flex: 1;
`,CS=T.h4`
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
  line-height: ${t=>t.theme.fonts.lineHeights.snug};
`,jS=T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  margin-bottom: 0;
  flex-wrap: wrap;
  font-size: ${t=>t.theme.fonts.sizes.xs};
`,RS=T.span`
  color: ${t=>t.theme.colors.primary.blue};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  font-size: ${t=>t.theme.fonts.sizes.xs};
`,OS=T.span`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[1]};
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.xs};
`,VS=T.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  line-height: ${t=>t.theme.fonts.lineHeights.normal};
  margin: 0;
`,BS=()=>{const[t,a]=yl({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),l={university:"Центр профессионального образования и обучения в области технологий и бизнеса",period:"2020 - 2022",courses:["Пневматика","Электроника","Гидравлика","Техническое обслуживание и монтаж электрокоммутационных аппаратов и двигателей","Программирование","Электрика"]},r={university:"SMK коллегия",period:"2022 - 2024",courses:["Дискретная математика","Основы программирования","Проектирование систем и базы данных","Мультимедийные технологии","Программирование интернет-систем","3D-моделирование и анимация","Аудиовизуальные технологии","Дискретная математика"]},u=[{title:"Мастер этического хакинга Wi-Fi - Атаки злых близнецов",issuer:"Udemy",year:"2020",icon:co,description:"Освоение этического взлома Wi-Fi сетей с акцентом на атаки типа 'Злой близнец'"},{title:"Этический хакинг - Практическое обучение - Часть I",issuer:"Udemy",year:"2021",icon:d4,description:"Практическое обучение этическому хакингу, часть 1"},{title:"Основы команд терминала BASH Shell в Linux",issuer:"Udemy",year:"2020",icon:j6,description:"Основы работы с командами терминала BASH в Linux"},{title:"Курс анализа уязвимостей для этического хакинга",issuer:"Udemy",year:"2020",icon:co,description:"Анализ уязвимостей в рамках этического хакинга"}],f=[{name:"Русский",level:"Родной",icon:m4},{name:"English",level:"Fluent",icon:Yb}],h={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},m={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},p={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}};return b.jsx(yS,{id:"education",ref:t,children:b.jsx(vS,{children:b.jsxs(X.div,{variants:h,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsx(bS,{variants:m,children:b.jsx(hl,{as:X.h2,children:"Образование и сертификаты"})}),b.jsxs(xS,{children:[b.jsxs(c1,{variants:m,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.1},children:[b.jsxs(u1,{children:[b.jsx(f1,{children:b.jsx(Gb,{})}),b.jsx(h1,{children:"Образование"})]}),b.jsxs(b4,{children:[b.jsxs(x4,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.2},children:[b.jsx(S4,{children:l.university}),b.jsxs(T4,{children:[b.jsx(h4,{}),b.jsxs("span",{children:[l.period," • Окончил"]})]}),b.jsx(A4,{children:"Профессиональное"}),b.jsx(z4,{children:l.courses.map((g,y)=>b.jsx(d1,{children:g},y))})]}),b.jsxs(x4,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3},children:[b.jsx(S4,{children:r.university}),b.jsxs(T4,{children:[b.jsx(h4,{}),b.jsxs("span",{children:[r.period," • Ушёл со второго курса"]})]}),b.jsx(A4,{children:"Высшее"}),b.jsxs(z4,{children:[r.courses.slice(0,6).map((g,y)=>b.jsx(d1,{children:g},y)),b.jsxs(d1,{children:["+",r.courses.length-6]})]})]})]})]}),b.jsxs(c1,{variants:m,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.2},children:[b.jsxs(u1,{children:[b.jsx(f1,{children:b.jsx(m4,{})}),b.jsx(h1,{children:"Языки"})]}),b.jsx(b4,{children:f.map((g,y)=>b.jsx(SS,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3+y*.1},children:b.jsxs(TS,{children:[b.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[b.jsx(g.icon,{}),b.jsx(AS,{children:g.name})]}),b.jsx(zS,{children:g.level})]})},g.name))})]}),b.jsxs(c1,{variants:m,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3},children:[b.jsxs(u1,{children:[b.jsx(f1,{children:b.jsx(d4,{})}),b.jsx(h1,{children:"Сертификаты"})]}),b.jsx(MS,{children:u.map((g,y)=>b.jsxs(wS,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.4+y*.1},children:[b.jsxs(ES,{children:[b.jsx($S,{children:b.jsx(g.icon,{})}),b.jsxs(DS,{children:[b.jsx(CS,{children:g.title}),b.jsxs(jS,{children:[b.jsx(RS,{children:g.issuer}),b.jsxs(OS,{children:[b.jsx(Bb,{}),g.year]})]})]})]}),b.jsx(VS,{children:g.description})]},g.title))})]})]})]})})})},_S=T.footer`
  background: ${t=>t.theme.colors.background.darker};
  border-top: 1px solid ${t=>t.theme.colors.border.primary};
  padding: ${t=>t.theme.space[12]} ${t=>t.theme.space[6]};
`,LS=T.div`
  max-width: ${t=>t.theme.containers.xl};
  margin: 0 auto;
`,HS=T.div`
  display: grid;
  gap: ${t=>t.theme.space[8]};
  margin-bottom: ${t=>t.theme.space[8]};

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`,NS=T(X.div)`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`,US=T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
`,kS=T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
`,YS=T.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.primary.purple};
`,GS=T.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};
`,qS=T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,XS=T(Xb)`
  color: #EF4444;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,PS=T(Pe)`
  color: #60A5FA;
  animation: spin 3s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,ZS=T(X.div)`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`,M4=T.h3`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.primary.purple};
`,QS=T.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${t=>t.theme.space[2]};
`,KS=T(X.a)`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  text-decoration: none;
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`,FS=T(X.div)`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`,JS=T.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[3]};
`,WS=T.a`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  text-decoration: none;
  transition: ${t=>t.theme.transitions.colors};
  display: block;

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`,IS=T.div`
  display: flex;
  gap: ${t=>t.theme.space[4]};
`,tT=T(X.a)`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.xl};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`,eT=T(X.div)`
  padding-top: ${t=>t.theme.space[8]};
  border-top: 1px solid ${t=>t.theme.colors.border.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t=>t.theme.space[4]};

  ${t=>t.theme.media.md} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`,nT=T.div`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,iT=T.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[6]};
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,aT=T.div`
  width: 8px;
  height: 8px;
  background: #4ADE80;
  border-radius: 50%;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,sT=()=>{const t=new Date().getFullYear(),a=[{icon:C0,href:"https://github.com/legion3trunn3r",label:"GitHub"},{icon:R6,href:"https://t.me/ValeryLegion",label:"Telegram"},{icon:O6,href:"mailto:valery.trishevsky@gmail.com",label:"Email"}],l=[{name:"О себе",href:"#about"},{name:"Навыки",href:"#skills"},{name:"Опыт",href:"#experience"},{name:"Проекты",href:"#projects"},{name:"Контакты",href:"#contact"}];return b.jsx(_S,{children:b.jsxs(LS,{children:[b.jsxs(HS,{children:[b.jsxs(NS,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},children:[b.jsxs(US,{children:[b.jsx(kS,{children:"Valeriy"}),b.jsx(YS,{children:"Dev"})]}),b.jsx(GS,{children:"Создаю веб-приложения с фокусом на качество, производительность и пользовательский опыт."}),b.jsxs(qS,{children:[b.jsx("span",{children:"Сделано с"}),b.jsx(XS,{}),b.jsx("span",{children:"и"}),b.jsx(PS,{})]})]}),b.jsxs(ZS,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[b.jsx(M4,{children:"Навигация"}),b.jsx(QS,{children:l.map((r,u)=>b.jsx(KS,{href:r.href,whileHover:{x:5},onClick:f=>{f.preventDefault(),document.querySelector(r.href)?.scrollIntoView({behavior:"smooth"})},children:r.name},u))})]}),b.jsxs(FS,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[b.jsx(M4,{children:"Связаться"}),b.jsxs(JS,{children:[b.jsx(WS,{href:"mailto:valery.trishevsky@gmail.com",children:"valery.trishevsky@gmail.com"}),b.jsx(IS,{children:a.map((r,u)=>b.jsx(tT,{href:r.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,y:-2},title:r.label,children:b.jsx(r.icon,{})},u))})]})]})]}),b.jsxs(eT,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6,delay:.6},children:[b.jsxs(nT,{children:["© ",t," Valeriy Trishevskiy. Все права защищены."]}),b.jsxs(iT,{children:[b.jsx("span",{children:"Открыт для новых возможностей"}),b.jsx(aT,{})]})]})]})})};function lT(){return b.jsxs(u8,{theme:al,children:[b.jsx(w8,{}),b.jsxs(g8,{children:[b.jsx(Ab,{}),b.jsxs(y8,{children:[b.jsx(Ma,{id:"hero",fullHeight:!0,children:b.jsx(xx,{})}),b.jsx(Ma,{id:"about",padding:!0,children:b.jsx(Ea,{children:b.jsx(wx,{})})}),b.jsx(Ma,{id:"skills",padding:!0,darkBg:!0,children:b.jsx(Ea,{children:b.jsx(Jx,{})})}),b.jsx(Ma,{id:"experience",padding:!0,children:b.jsx(Ea,{children:b.jsx(Wx,{})})}),b.jsx(Ma,{id:"projects",padding:!0,darkBg:!0,children:b.jsx(Ea,{children:b.jsx(gS,{})})}),b.jsx(Ma,{id:"education",padding:!0,children:b.jsx(Ea,{children:b.jsx(BS,{})})})]}),b.jsx(sT,{})]})]})}hg.createRoot(document.getElementById("root")).render(b.jsx(I.StrictMode,{children:b.jsx(lT,{})}));
