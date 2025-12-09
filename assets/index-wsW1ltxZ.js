(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(u){if(u.ep)return;u.ep=!0;const h=r(u);fetch(u.href,h)}})();function ig(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bu={exports:{}},qs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function ag(){if(zd)return qs;zd=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(l,u,h){var f=null;if(h!==void 0&&(f=""+h),u.key!==void 0&&(f=""+u.key),"key"in u){h={};for(var m in u)m!=="key"&&(h[m]=u[m])}else h=u;return u=h.ref,{$$typeof:t,type:l,key:f,ref:u!==void 0?u:null,props:h}}return qs.Fragment=a,qs.jsx=r,qs.jsxs=r,qs}var Md;function sg(){return Md||(Md=1,Bu.exports=ag()),Bu.exports}var b=sg(),_u={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function rg(){if(wd)return ut;wd=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,k={};function G(z,H,P){this.props=z,this.context=H,this.refs=k,this.updater=P||$}G.prototype.isReactComponent={},G.prototype.setState=function(z,H){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,H,"setState")},G.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=G.prototype;function q(z,H,P){this.props=z,this.context=H,this.refs=k,this.updater=P||$}var _=q.prototype=new U;_.constructor=q,V(_,G.prototype),_.isPureReactComponent=!0;var K=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function Q(z,H,P,Z,nt,mt){return P=mt.ref,{$$typeof:t,type:z,key:H,ref:P!==void 0?P:null,props:mt}}function tt(z,H){return Q(z.type,H,void 0,void 0,void 0,z.props)}function St(z){return typeof z=="object"&&z!==null&&z.$$typeof===t}function Nt(z){var H={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(P){return H[P]})}var Jt=/\/+/g;function Ut(z,H){return typeof z=="object"&&z!==null&&z.key!=null?Nt(""+z.key):H.toString(36)}function Ke(){}function Oe(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Ke,Ke):(z.status="pending",z.then(function(H){z.status==="pending"&&(z.status="fulfilled",z.value=H)},function(H){z.status==="pending"&&(z.status="rejected",z.reason=H)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Qt(z,H,P,Z,nt){var mt=typeof z;(mt==="undefined"||mt==="boolean")&&(z=null);var st=!1;if(z===null)st=!0;else switch(mt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(z.$$typeof){case t:case a:st=!0;break;case y:return st=z._init,Qt(st(z._payload),H,P,Z,nt)}}if(st)return nt=nt(z),st=Z===""?"."+Ut(z,0):Z,K(nt)?(P="",st!=null&&(P=st.replace(Jt,"$&/")+"/"),Qt(nt,H,P,"",function(ue){return ue})):nt!=null&&(St(nt)&&(nt=tt(nt,P+(nt.key==null||z&&z.key===nt.key?"":(""+nt.key).replace(Jt,"$&/")+"/")+st)),H.push(nt)),1;st=0;var Wt=Z===""?".":Z+":";if(K(z))for(var Tt=0;Tt<z.length;Tt++)Z=z[Tt],mt=Wt+Ut(Z,Tt),st+=Qt(Z,H,P,mt,nt);else if(Tt=S(z),typeof Tt=="function")for(z=Tt.call(z),Tt=0;!(Z=z.next()).done;)Z=Z.value,mt=Wt+Ut(Z,Tt++),st+=Qt(Z,H,P,mt,nt);else if(mt==="object"){if(typeof z.then=="function")return Qt(Oe(z),H,P,Z,nt);throw H=String(z),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return st}function R(z,H,P){if(z==null)return z;var Z=[],nt=0;return Qt(z,Z,"","",function(mt){return H.call(P,mt,nt++)}),Z}function Y(z){if(z._status===-1){var H=z._result;H=H(),H.then(function(P){(z._status===0||z._status===-1)&&(z._status=1,z._result=P)},function(P){(z._status===0||z._status===-1)&&(z._status=2,z._result=P)}),z._status===-1&&(z._status=0,z._result=H)}if(z._status===1)return z._result.default;throw z._result}var I=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ct(){}return ut.Children={map:R,forEach:function(z,H,P){R(z,function(){H.apply(this,arguments)},P)},count:function(z){var H=0;return R(z,function(){H++}),H},toArray:function(z){return R(z,function(H){return H})||[]},only:function(z){if(!St(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ut.Component=G,ut.Fragment=r,ut.Profiler=u,ut.PureComponent=q,ut.StrictMode=l,ut.Suspense=p,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ut.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},ut.cache=function(z){return function(){return z.apply(null,arguments)}},ut.cloneElement=function(z,H,P){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=V({},z.props),nt=z.key,mt=void 0;if(H!=null)for(st in H.ref!==void 0&&(mt=void 0),H.key!==void 0&&(nt=""+H.key),H)!F.call(H,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&H.ref===void 0||(Z[st]=H[st]);var st=arguments.length-2;if(st===1)Z.children=P;else if(1<st){for(var Wt=Array(st),Tt=0;Tt<st;Tt++)Wt[Tt]=arguments[Tt+2];Z.children=Wt}return Q(z.type,nt,void 0,void 0,mt,Z)},ut.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:h,_context:z},z},ut.createElement=function(z,H,P){var Z,nt={},mt=null;if(H!=null)for(Z in H.key!==void 0&&(mt=""+H.key),H)F.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(nt[Z]=H[Z]);var st=arguments.length-2;if(st===1)nt.children=P;else if(1<st){for(var Wt=Array(st),Tt=0;Tt<st;Tt++)Wt[Tt]=arguments[Tt+2];nt.children=Wt}if(z&&z.defaultProps)for(Z in st=z.defaultProps,st)nt[Z]===void 0&&(nt[Z]=st[Z]);return Q(z,mt,void 0,void 0,null,nt)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(z){return{$$typeof:m,render:z}},ut.isValidElement=St,ut.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:Y}},ut.memo=function(z,H){return{$$typeof:g,type:z,compare:H===void 0?null:H}},ut.startTransition=function(z){var H=N.T,P={};N.T=P;try{var Z=z(),nt=N.S;nt!==null&&nt(P,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ct,I)}catch(mt){I(mt)}finally{N.T=H}},ut.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ut.use=function(z){return N.H.use(z)},ut.useActionState=function(z,H,P){return N.H.useActionState(z,H,P)},ut.useCallback=function(z,H){return N.H.useCallback(z,H)},ut.useContext=function(z){return N.H.useContext(z)},ut.useDebugValue=function(){},ut.useDeferredValue=function(z,H){return N.H.useDeferredValue(z,H)},ut.useEffect=function(z,H,P){var Z=N.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(z,H)},ut.useId=function(){return N.H.useId()},ut.useImperativeHandle=function(z,H,P){return N.H.useImperativeHandle(z,H,P)},ut.useInsertionEffect=function(z,H){return N.H.useInsertionEffect(z,H)},ut.useLayoutEffect=function(z,H){return N.H.useLayoutEffect(z,H)},ut.useMemo=function(z,H){return N.H.useMemo(z,H)},ut.useOptimistic=function(z,H){return N.H.useOptimistic(z,H)},ut.useReducer=function(z,H,P){return N.H.useReducer(z,H,P)},ut.useRef=function(z){return N.H.useRef(z)},ut.useState=function(z){return N.H.useState(z)},ut.useSyncExternalStore=function(z,H,P){return N.H.useSyncExternalStore(z,H,P)},ut.useTransition=function(){return N.H.useTransition()},ut.version="19.1.0",ut}var $d;function X1(){return $d||($d=1,_u.exports=rg()),_u.exports}var W=X1();const ae=ig(W);var Lu={exports:{}},Xs={},Hu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function lg(){return Ed||(Ed=1,function(t){function a(R,Y){var I=R.length;R.push(Y);t:for(;0<I;){var ct=I-1>>>1,z=R[ct];if(0<u(z,Y))R[ct]=Y,R[I]=z,I=ct;else break t}}function r(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var Y=R[0],I=R.pop();if(I!==Y){R[0]=I;t:for(var ct=0,z=R.length,H=z>>>1;ct<H;){var P=2*(ct+1)-1,Z=R[P],nt=P+1,mt=R[nt];if(0>u(Z,I))nt<z&&0>u(mt,Z)?(R[ct]=mt,R[nt]=I,ct=nt):(R[ct]=Z,R[P]=I,ct=P);else if(nt<z&&0>u(mt,I))R[ct]=mt,R[nt]=I,ct=nt;else break t}}return Y}function u(R,Y){var I=R.sortIndex-Y.sortIndex;return I!==0?I:R.id-Y.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;t.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();t.unstable_now=function(){return f.now()-m}}var p=[],g=[],y=1,x=null,S=3,$=!1,V=!1,k=!1,G=!1,U=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function K(R){for(var Y=r(g);Y!==null;){if(Y.callback===null)l(g);else if(Y.startTime<=R)l(g),Y.sortIndex=Y.expirationTime,a(p,Y);else break;Y=r(g)}}function N(R){if(k=!1,K(R),!V)if(r(p)!==null)V=!0,F||(F=!0,Ut());else{var Y=r(g);Y!==null&&Qt(N,Y.startTime-R)}}var F=!1,Q=-1,tt=5,St=-1;function Nt(){return G?!0:!(t.unstable_now()-St<tt)}function Jt(){if(G=!1,F){var R=t.unstable_now();St=R;var Y=!0;try{t:{V=!1,k&&(k=!1,q(Q),Q=-1),$=!0;var I=S;try{e:{for(K(R),x=r(p);x!==null&&!(x.expirationTime>R&&Nt());){var ct=x.callback;if(typeof ct=="function"){x.callback=null,S=x.priorityLevel;var z=ct(x.expirationTime<=R);if(R=t.unstable_now(),typeof z=="function"){x.callback=z,K(R),Y=!0;break e}x===r(p)&&l(p),K(R)}else l(p);x=r(p)}if(x!==null)Y=!0;else{var H=r(g);H!==null&&Qt(N,H.startTime-R),Y=!1}}break t}finally{x=null,S=I,$=!1}Y=void 0}}finally{Y?Ut():F=!1}}}var Ut;if(typeof _=="function")Ut=function(){_(Jt)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Oe=Ke.port2;Ke.port1.onmessage=Jt,Ut=function(){Oe.postMessage(null)}}else Ut=function(){U(Jt,0)};function Qt(R,Y){Q=U(function(){R(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(R){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var I=S;S=Y;try{return R()}finally{S=I}},t.unstable_requestPaint=function(){G=!0},t.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var I=S;S=R;try{return Y()}finally{S=I}},t.unstable_scheduleCallback=function(R,Y,I){var ct=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ct+I:ct):I=ct,R){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=I+z,R={id:y++,callback:Y,priorityLevel:R,startTime:I,expirationTime:z,sortIndex:-1},I>ct?(R.sortIndex=I,a(g,R),r(p)===null&&R===r(g)&&(k?(q(Q),Q=-1):k=!0,Qt(N,I-ct))):(R.sortIndex=z,a(p,R),V||$||(V=!0,F||(F=!0,Ut()))),R},t.unstable_shouldYield=Nt,t.unstable_wrapCallback=function(R){var Y=S;return function(){var I=S;S=Y;try{return R.apply(this,arguments)}finally{S=I}}}}(Nu)),Nu}var Dd;function og(){return Dd||(Dd=1,Hu.exports=lg()),Hu.exports}var Uu={exports:{}},de={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function cg(){if(Cd)return de;Cd=1;var t=X1();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(p,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:p,containerInfo:g,implementation:y}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,de.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return h(p,g,null,y)},de.flushSync=function(p){var g=f.T,y=l.p;try{if(f.T=null,l.p=2,p)return p()}finally{f.T=g,l.p=y,l.d.f()}},de.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(p,g))},de.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},de.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,$=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?l.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:$}):y==="script"&&l.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:$,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},de.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);l.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(p)},de.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin);l.d.L(p,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},de.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=m(g.as,g.crossOrigin);l.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(p)},de.requestFormReset=function(p){l.d.r(p)},de.unstable_batchedUpdates=function(p,g){return p(g)},de.useFormState=function(p,g,y){return f.H.useFormState(p,g,y)},de.useFormStatus=function(){return f.H.useHostTransitionStatus()},de.version="19.1.0",de}var jd;function ug(){if(jd)return Uu.exports;jd=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Uu.exports=cg(),Uu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function fg(){if(Rd)return Xs;Rd=1;var t=og(),a=X1(),r=ug();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(h(e)!==e)throw Error(l(188))}function p(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(l(188));return n!==e?null:e}for(var i=e,s=n;;){var o=i.return;if(o===null)break;var c=o.alternate;if(c===null){if(s=o.return,s!==null){i=s;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return m(o),e;if(c===s)return m(o),n;c=c.sibling}throw Error(l(188))}if(i.return!==s.return)i=o,s=c;else{for(var d=!1,v=o.child;v;){if(v===i){d=!0,i=o,s=c;break}if(v===s){d=!0,s=o,i=c;break}v=v.sibling}if(!d){for(v=c.child;v;){if(v===i){d=!0,i=c,s=o;break}if(v===s){d=!0,s=c,i=o;break}v=v.sibling}if(!d)throw Error(l(189))}}if(i.alternate!==s)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),_=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),Nt=Symbol.for("react.memo_cache_sentinel"),Jt=Symbol.iterator;function Ut(e){return e===null||typeof e!="object"?null:(e=Jt&&e[Jt]||e["@@iterator"],typeof e=="function"?e:null)}var Ke=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case G:return"Profiler";case k:return"StrictMode";case N:return"Suspense";case F:return"SuspenseList";case St:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case _:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case K:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:Oe(e.type)||"Memo";case tt:n=e._payload,e=e._init;try{return Oe(e(n))}catch{}}return null}var Qt=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ct=[],z=-1;function H(e){return{current:e}}function P(e){0>z||(e.current=ct[z],ct[z]=null,z--)}function Z(e,n){z++,ct[z]=e.current,e.current=n}var nt=H(null),mt=H(null),st=H(null),Wt=H(null);function Tt(e,n){switch(Z(st,n),Z(mt,e),Z(nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Wh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Wh(n),e=Ih(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(nt),Z(nt,e)}function ue(){P(nt),P(mt),P(st)}function oi(e){e.memoizedState!==null&&Z(Wt,e);var n=nt.current,i=Ih(n,e.type);n!==i&&(Z(mt,e),Z(nt,i))}function hn(e){mt.current===e&&(P(nt),P(mt)),Wt.current===e&&(P(Wt),Ns._currentValue=I)}var Ve=Object.prototype.hasOwnProperty,To=t.unstable_scheduleCallback,Ao=t.unstable_cancelCallback,B5=t.unstable_shouldYield,_5=t.unstable_requestPaint,en=t.unstable_now,L5=t.unstable_getCurrentPriorityLevel,j0=t.unstable_ImmediatePriority,R0=t.unstable_UserBlockingPriority,yr=t.unstable_NormalPriority,H5=t.unstable_LowPriority,O0=t.unstable_IdlePriority,N5=t.log,U5=t.unstable_setDisableYieldValue,Za=null,Ae=null;function jn(e){if(typeof N5=="function"&&U5(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Za,e)}catch{}}var ze=Math.clz32?Math.clz32:G5,k5=Math.log,Y5=Math.LN2;function G5(e){return e>>>=0,e===0?32:31-(k5(e)/Y5|0)|0}var vr=256,br=4194304;function ci(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xr(e,n,i){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=s&134217727;return v!==0?(s=v&~c,s!==0?o=ci(s):(d&=v,d!==0?o=ci(d):i||(i=v&~e,i!==0&&(o=ci(i))))):(v=s&~c,v!==0?o=ci(v):d!==0?o=ci(d):i||(i=s&~e,i!==0&&(o=ci(i)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:o}function Qa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function q5(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V0(){var e=vr;return vr<<=1,(vr&4194048)===0&&(vr=256),e}function B0(){var e=br;return br<<=1,(br&62914560)===0&&(br=4194304),e}function zo(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ka(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function X5(e,n,i,s,o,c){var d=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var v=e.entanglements,T=e.expirationTimes,D=e.hiddenUpdates;for(i=d&~i;0<i;){var O=31-ze(i),L=1<<O;v[O]=0,T[O]=-1;var C=D[O];if(C!==null)for(D[O]=null,O=0;O<C.length;O++){var j=C[O];j!==null&&(j.lane&=-536870913)}i&=~L}s!==0&&_0(e,s,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~n))}function _0(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ze(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|i&4194090}function L0(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var s=31-ze(i),o=1<<s;o&n|e[s]&n&&(e[s]|=n),i&=~o}}function Mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function H0(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:vd(e.type))}function P5(e,n){var i=Y.p;try{return Y.p=e,n()}finally{Y.p=i}}var Rn=Math.random().toString(36).slice(2),fe="__reactFiber$"+Rn,ye="__reactProps$"+Rn,Ni="__reactContainer$"+Rn,$o="__reactEvents$"+Rn,Z5="__reactListeners$"+Rn,Q5="__reactHandles$"+Rn,N0="__reactResources$"+Rn,Fa="__reactMarker$"+Rn;function Eo(e){delete e[fe],delete e[ye],delete e[$o],delete e[Z5],delete e[Q5]}function Ui(e){var n=e[fe];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ni]||i[fe]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=id(e);e!==null;){if(i=e[fe])return i;e=id(e)}return n}e=i,i=e.parentNode}return null}function ki(e){if(e=e[fe]||e[Ni]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function Yi(e){var n=e[N0];return n||(n=e[N0]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function It(e){e[Fa]=!0}var U0=new Set,k0={};function ui(e,n){Gi(e,n),Gi(e+"Capture",n)}function Gi(e,n){for(k0[e]=n,e=0;e<n.length;e++)U0.add(n[e])}var K5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Y0={},G0={};function F5(e){return Ve.call(G0,e)?!0:Ve.call(Y0,e)?!1:K5.test(e)?G0[e]=!0:(Y0[e]=!0,!1)}function Sr(e,n,i){if(F5(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function Tr(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function dn(e,n,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+s)}}var Do,q0;function qi(e){if(Do===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Do=n&&n[1]||"",q0=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Do+e+q0}var Co=!1;function jo(e,n){if(!e||Co)return"";Co=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(j){var C=j}Reflect.construct(e,[],L)}else{try{L.call()}catch(j){C=j}e.call(L.prototype)}}else{try{throw Error()}catch(j){C=j}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(j){if(j&&C&&typeof j.stack=="string")return[j.stack,C.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),d=c[0],v=c[1];if(d&&v){var T=d.split(`
`),D=v.split(`
`);for(o=s=0;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;for(;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;if(s===T.length||o===D.length)for(s=T.length-1,o=D.length-1;1<=s&&0<=o&&T[s]!==D[o];)o--;for(;1<=s&&0<=o;s--,o--)if(T[s]!==D[o]){if(s!==1||o!==1)do if(s--,o--,0>o||T[s]!==D[o]){var O=`
`+T[s].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=s&&0<=o);break}}}finally{Co=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?qi(i):""}function J5(e){switch(e.tag){case 26:case 27:case 5:return qi(e.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 15:return jo(e.type,!1);case 11:return jo(e.type.render,!1);case 1:return jo(e.type,!0);case 31:return qi("Activity");default:return""}}function X0(e){try{var n="";do n+=J5(e),e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Be(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function P0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function W5(e){var n=P0(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ar(e){e._valueTracker||(e._valueTracker=W5(e))}function Z0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return e&&(s=P0(e)?e.checked?"true":"false":e.value),e=s,e!==i?(n.setValue(e),!0):!1}function zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var I5=/[\n"\\]/g;function _e(e){return e.replace(I5,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ro(e,n,i,s,o,c,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Be(n)):e.value!==""+Be(n)&&(e.value=""+Be(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?Oo(e,d,Be(n)):i!=null?Oo(e,d,Be(i)):s!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Be(v):e.removeAttribute("name")}function Q0(e,n,i,s,o,c,d,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null))return;i=i!=null?""+Be(i):"",n=n!=null?""+Be(n):i,v||n===e.value||(e.value=n),e.defaultValue=n}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=v?e.checked:!!s,e.defaultChecked=!!s,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Oo(e,n,i){n==="number"&&zr(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Xi(e,n,i,s){if(e=e.options,n){n={};for(var o=0;o<i.length;o++)n["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=n.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&s&&(e[i].defaultSelected=!0)}else{for(i=""+Be(i),n=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function K0(e,n,i){if(n!=null&&(n=""+Be(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Be(i):""}function F0(e,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(l(92));if(Qt(s)){if(1<s.length)throw Error(l(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=Be(n),e.defaultValue=i,s=e.textContent,s===i&&s!==""&&s!==null&&(e.value=s)}function Pi(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var t6=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function J0(e,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,i):typeof i!="number"||i===0||t6.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function W0(e,n,i){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var o in n)s=n[o],n.hasOwnProperty(o)&&i[o]!==s&&J0(e,o,s)}else for(var c in n)n.hasOwnProperty(c)&&J0(e,c,n[c])}function Vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e6=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n6=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mr(e){return n6.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bo=null;function _o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Qi=null;function I0(e){var n=ki(e);if(n&&(e=n.stateNode)){var i=e[ye]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ro(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==e&&s.form===e.form){var o=s[ye]||null;if(!o)throw Error(l(90));Ro(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===e.form&&Z0(s)}break t;case"textarea":K0(e,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Xi(e,!!i.multiple,n,!1)}}}var Lo=!1;function tf(e,n,i){if(Lo)return e(n,i);Lo=!0;try{var s=e(n);return s}finally{if(Lo=!1,(Zi!==null||Qi!==null)&&(ul(),Zi&&(n=Zi,e=Qi,Qi=Zi=null,I0(n),e)))for(n=0;n<e.length;n++)I0(e[n])}}function Wa(e,n){var i=e.stateNode;if(i===null)return null;var s=i[ye]||null;if(s===null)return null;i=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(l(231,n,typeof i));return i}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ho=!1;if(mn)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Ho=!1}var On=null,No=null,wr=null;function ef(){if(wr)return wr;var e,n=No,i=n.length,s,o="value"in On?On.value:On.textContent,c=o.length;for(e=0;e<i&&n[e]===o[e];e++);var d=i-e;for(s=1;s<=d&&n[i-s]===o[c-s];s++);return wr=o.slice(e,1<s?1-s:void 0)}function $r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function nf(){return!1}function ve(e){function n(i,s,o,c,d){this._reactName=i,this._targetInst=o,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(i=e[v],this[v]=i?i(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Er:nf,this.isPropagationStopped=nf,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dr=ve(fi),ts=y({},fi,{view:0,detail:0}),i6=ve(ts),Uo,ko,es,Cr=y({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(Uo=e.screenX-es.screenX,ko=e.screenY-es.screenY):ko=Uo=0,es=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),af=ve(Cr),a6=y({},Cr,{dataTransfer:0}),s6=ve(a6),r6=y({},ts,{relatedTarget:0}),Yo=ve(r6),l6=y({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),o6=ve(l6),c6=y({},fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u6=ve(c6),f6=y({},fi,{data:0}),sf=ve(f6),h6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p6(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=m6[e])?!!n[e]:!1}function Go(){return p6}var g6=y({},ts,{key:function(e){if(e.key){var n=h6[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Go,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y6=ve(g6),v6=y({},Cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=ve(v6),b6=y({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Go}),x6=ve(b6),S6=y({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),T6=ve(S6),A6=y({},Cr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z6=ve(A6),M6=y({},fi,{newState:0,oldState:0}),w6=ve(M6),$6=[9,13,27,32],qo=mn&&"CompositionEvent"in window,ns=null;mn&&"documentMode"in document&&(ns=document.documentMode);var E6=mn&&"TextEvent"in window&&!ns,lf=mn&&(!qo||ns&&8<ns&&11>=ns),of=" ",cf=!1;function uf(e,n){switch(e){case"keyup":return $6.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ki=!1;function D6(e,n){switch(e){case"compositionend":return ff(n);case"keypress":return n.which!==32?null:(cf=!0,of);case"textInput":return e=n.data,e===of&&cf?null:e;default:return null}}function C6(e,n){if(Ki)return e==="compositionend"||!qo&&uf(e,n)?(e=ef(),wr=No=On=null,Ki=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lf&&n.locale!=="ko"?null:n.data;default:return null}}var j6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!j6[e.type]:n==="textarea"}function df(e,n,i,s){Zi?Qi?Qi.push(s):Qi=[s]:Zi=s,n=gl(n,"onChange"),0<n.length&&(i=new Dr("onChange","change",null,i,s),e.push({event:i,listeners:n}))}var is=null,as=null;function R6(e){Zh(e,0)}function jr(e){var n=Ja(e);if(Z0(n))return e}function mf(e,n){if(e==="change")return n}var pf=!1;if(mn){var Xo;if(mn){var Po="oninput"in document;if(!Po){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Po=typeof gf.oninput=="function"}Xo=Po}else Xo=!1;pf=Xo&&(!document.documentMode||9<document.documentMode)}function yf(){is&&(is.detachEvent("onpropertychange",vf),as=is=null)}function vf(e){if(e.propertyName==="value"&&jr(as)){var n=[];df(n,as,e,_o(e)),tf(R6,n)}}function O6(e,n,i){e==="focusin"?(yf(),is=n,as=i,is.attachEvent("onpropertychange",vf)):e==="focusout"&&yf()}function V6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jr(as)}function B6(e,n){if(e==="click")return jr(n)}function _6(e,n){if(e==="input"||e==="change")return jr(n)}function L6(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:L6;function ss(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var o=i[s];if(!Ve.call(n,o)||!Me(e[o],n[o]))return!1}return!0}function bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,n){var i=bf(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=n&&s>=n)return{node:i,offset:n-e};e=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=bf(i)}}function Sf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=zr(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=zr(e.document)}return n}function Zo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var H6=mn&&"documentMode"in document&&11>=document.documentMode,Fi=null,Qo=null,rs=null,Ko=!1;function Af(e,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ko||Fi==null||Fi!==zr(s)||(s=Fi,"selectionStart"in s&&Zo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),rs&&ss(rs,s)||(rs=s,s=gl(Qo,"onSelect"),0<s.length&&(n=new Dr("onSelect","select",null,n,i),e.push({event:n,listeners:s}),n.target=Fi)))}function hi(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ji={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionrun:hi("Transition","TransitionRun"),transitionstart:hi("Transition","TransitionStart"),transitioncancel:hi("Transition","TransitionCancel"),transitionend:hi("Transition","TransitionEnd")},Fo={},zf={};mn&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function di(e){if(Fo[e])return Fo[e];if(!Ji[e])return e;var n=Ji[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in zf)return Fo[e]=n[i];return e}var Mf=di("animationend"),wf=di("animationiteration"),$f=di("animationstart"),N6=di("transitionrun"),U6=di("transitionstart"),k6=di("transitioncancel"),Ef=di("transitionend"),Df=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function Fe(e,n){Df.set(e,n),ui(n,[e])}var Cf=new WeakMap;function Le(e,n){if(typeof e=="object"&&e!==null){var i=Cf.get(e);return i!==void 0?i:(n={value:e,source:n,stack:X0(n)},Cf.set(e,n),n)}return{value:e,source:n,stack:X0(n)}}var He=[],Wi=0,Wo=0;function Rr(){for(var e=Wi,n=Wo=Wi=0;n<e;){var i=He[n];He[n++]=null;var s=He[n];He[n++]=null;var o=He[n];He[n++]=null;var c=He[n];if(He[n++]=null,s!==null&&o!==null){var d=s.pending;d===null?o.next=o:(o.next=d.next,d.next=o),s.pending=o}c!==0&&jf(i,o,c)}}function Or(e,n,i,s){He[Wi++]=e,He[Wi++]=n,He[Wi++]=i,He[Wi++]=s,Wo|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Io(e,n,i,s){return Or(e,n,i,s),Vr(e)}function Ii(e,n){return Or(e,null,null,n),Vr(e)}function jf(e,n,i){e.lanes|=i;var s=e.alternate;s!==null&&(s.lanes|=i);for(var o=!1,c=e.return;c!==null;)c.childLanes|=i,s=c.alternate,s!==null&&(s.childLanes|=i),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&n!==null&&(o=31-ze(i),e=c.hiddenUpdates,s=e[o],s===null?e[o]=[n]:s.push(n),n.lane=i|536870912),c):null}function Vr(e){if(50<js)throw js=0,su=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ta={};function Y6(e,n,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(e,n,i,s){return new Y6(e,n,i,s)}function tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,n){var i=e.alternate;return i===null?(i=we(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Rf(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Br(e,n,i,s,o,c){var d=0;if(s=e,typeof e=="function")tc(e)&&(d=1);else if(typeof e=="string")d=qp(e,i,nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case St:return e=we(31,i,n,o),e.elementType=St,e.lanes=c,e;case V:return mi(i.children,o,c,n);case k:d=8,o|=24;break;case G:return e=we(12,i,n,o|2),e.elementType=G,e.lanes=c,e;case N:return e=we(13,i,n,o),e.elementType=N,e.lanes=c,e;case F:return e=we(19,i,n,o),e.elementType=F,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case _:d=10;break t;case q:d=9;break t;case K:d=11;break t;case Q:d=14;break t;case tt:d=16,s=null;break t}d=29,i=Error(l(130,e===null?"null":typeof e,"")),s=null}return n=we(d,i,n,o),n.elementType=e,n.type=s,n.lanes=c,n}function mi(e,n,i,s){return e=we(7,e,s,n),e.lanes=i,e}function ec(e,n,i){return e=we(6,e,null,n),e.lanes=i,e}function nc(e,n,i){return n=we(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ea=[],na=0,_r=null,Lr=0,Ne=[],Ue=0,pi=null,gn=1,yn="";function gi(e,n){ea[na++]=Lr,ea[na++]=_r,_r=e,Lr=n}function Of(e,n,i){Ne[Ue++]=gn,Ne[Ue++]=yn,Ne[Ue++]=pi,pi=e;var s=gn;e=yn;var o=32-ze(s)-1;s&=~(1<<o),i+=1;var c=32-ze(n)+o;if(30<c){var d=o-o%5;c=(s&(1<<d)-1).toString(32),s>>=d,o-=d,gn=1<<32-ze(n)+o|i<<o|s,yn=c+e}else gn=1<<c|i<<o|s,yn=e}function ic(e){e.return!==null&&(gi(e,1),Of(e,1,0))}function ac(e){for(;e===_r;)_r=ea[--na],ea[na]=null,Lr=ea[--na],ea[na]=null;for(;e===pi;)pi=Ne[--Ue],Ne[Ue]=null,yn=Ne[--Ue],Ne[Ue]=null,gn=Ne[--Ue],Ne[Ue]=null}var pe=null,_t=null,xt=!1,yi=null,nn=!1,sc=Error(l(519));function vi(e){var n=Error(l(418,""));throw cs(Le(n,e)),sc}function Vf(e){var n=e.stateNode,i=e.type,s=e.memoizedProps;switch(n[fe]=e,n[ye]=s,i){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(i=0;i<Os.length;i++)gt(Os[i],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Q0(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ar(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),F0(n,s.value,s.defaultValue,s.children),Ar(n)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||Jh(n.textContent,i)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=yl),n=!0):n=!1,n||vi(e)}function Bf(e){for(pe=e.return;pe;)switch(pe.tag){case 5:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:pe=pe.return}}function ls(e){if(e!==pe)return!1;if(!xt)return Bf(e),xt=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Su(e.type,e.memoizedProps)),i=!i),i&&_t&&vi(e),Bf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(i=e.data,i==="/$"){if(n===0){_t=We(e.nextSibling);break t}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;e=e.nextSibling}_t=null}}else n===27?(n=_t,Kn(e.type)?(e=Mu,Mu=null,_t=e):_t=n):_t=pe?We(e.stateNode.nextSibling):null;return!0}function os(){_t=pe=null,xt=!1}function _f(){var e=yi;return e!==null&&(Se===null?Se=e:Se.push.apply(Se,e),yi=null),e}function cs(e){yi===null?yi=[e]:yi.push(e)}var rc=H(null),bi=null,vn=null;function Vn(e,n,i){Z(rc,n._currentValue),n._currentValue=i}function bn(e){e._currentValue=rc.current,P(rc)}function lc(e,n,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===i)break;e=e.return}}function oc(e,n,i,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var d=o.child;c=c.firstContext;t:for(;c!==null;){var v=c;c=o;for(var T=0;T<n.length;T++)if(v.context===n[T]){c.lanes|=i,v=c.alternate,v!==null&&(v.lanes|=i),lc(c.return,i,e),s||(d=null);break t}c=v.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=i,c=d.alternate,c!==null&&(c.lanes|=i),lc(d,i,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function us(e,n,i,s){e=null;for(var o=n,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var v=o.type;Me(o.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(o===Wt.current){if(d=o.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ns):e=[Ns])}o=o.return}e!==null&&oc(n,e,i,s),n.flags|=262144}function Hr(e){for(e=e.firstContext;e!==null;){if(!Me(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xi(e){bi=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function he(e){return Lf(bi,e)}function Nr(e,n){return bi===null&&xi(e),Lf(e,n)}function Lf(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},vn===null){if(e===null)throw Error(l(308));vn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else vn=vn.next=n;return i}var G6=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},q6=t.unstable_scheduleCallback,X6=t.unstable_NormalPriority,Kt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cc(){return{controller:new G6,data:new Map,refCount:0}}function fs(e){e.refCount--,e.refCount===0&&q6(X6,function(){e.controller.abort()})}var hs=null,uc=0,ia=0,aa=null;function P6(e,n){if(hs===null){var i=hs=[];uc=0,ia=hu(),aa={status:"pending",value:void 0,then:function(s){i.push(s)}}}return uc++,n.then(Hf,Hf),n}function Hf(){if(--uc===0&&hs!==null){aa!==null&&(aa.status="fulfilled");var e=hs;hs=null,ia=0,aa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Z6(e,n){var i=[],s={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var o=0;o<i.length;o++)(0,i[o])(n)},function(o){for(s.status="rejected",s.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),s}var Nf=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&P6(e,n),Nf!==null&&Nf(e,n)};var Si=H(null);function fc(){var e=Si.current;return e!==null?e:Ct.pooledCache}function Ur(e,n){n===null?Z(Si,Si.current):Z(Si,n.pool)}function Uf(){var e=fc();return e===null?null:{parent:Kt._currentValue,pool:e}}var ds=Error(l(460)),kf=Error(l(474)),kr=Error(l(542)),hc={then:function(){}};function Yf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yr(){}function Gf(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(Yr,Yr),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e;default:if(typeof n.status=="string")n.then(Yr,Yr);else{if(e=Ct,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=s}},function(s){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xf(e),e}throw ms=n,ds}}var ms=null;function qf(){if(ms===null)throw Error(l(459));var e=ms;return ms=null,e}function Xf(e){if(e===ds||e===kr)throw Error(l(483))}var Bn=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(zt&2)!==0){var o=s.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),s.pending=n,n=Vr(e),jf(e,null,i),n}return Or(e,s,n,i),Vr(e)}function ps(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,L0(e,i)}}function pc(e,n){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var o=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var d={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?o=c=d:c=c.next=d,i=i.next}while(i!==null);c===null?o=c=n:c=c.next=n}else o=c=n;i={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var gc=!1;function gs(){if(gc){var e=aa;if(e!==null)throw e}}function ys(e,n,i,s){gc=!1;var o=e.updateQueue;Bn=!1;var c=o.firstBaseUpdate,d=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var T=v,D=T.next;T.next=null,d===null?c=D:d.next=D,d=T;var O=e.alternate;O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==d&&(v===null?O.firstBaseUpdate=D:v.next=D,O.lastBaseUpdate=T))}if(c!==null){var L=o.baseState;d=0,O=D=T=null,v=c;do{var C=v.lane&-536870913,j=C!==v.lane;if(j?(yt&C)===C:(s&C)===C){C!==0&&C===ia&&(gc=!0),O!==null&&(O=O.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var lt=e,at=v;C=n;var Et=i;switch(at.tag){case 1:if(lt=at.payload,typeof lt=="function"){L=lt.call(Et,L,C);break t}L=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=at.payload,C=typeof lt=="function"?lt.call(Et,L,C):lt,C==null)break t;L=y({},L,C);break t;case 2:Bn=!0}}C=v.callback,C!==null&&(e.flags|=64,j&&(e.flags|=8192),j=o.callbacks,j===null?o.callbacks=[C]:j.push(C))}else j={lane:C,tag:v.tag,payload:v.payload,callback:v.callback,next:null},O===null?(D=O=j,T=L):O=O.next=j,d|=C;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;j=v,v=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);O===null&&(T=L),o.baseState=T,o.firstBaseUpdate=D,o.lastBaseUpdate=O,c===null&&(o.shared.lanes=0),Xn|=d,e.lanes=d,e.memoizedState=L}}function Pf(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function Zf(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Pf(i[e],n)}var sa=H(null),Gr=H(0);function Qf(e,n){e=wn,Z(Gr,e),Z(sa,n),wn=e|n.baseLanes}function yc(){Z(Gr,wn),Z(sa,sa.current)}function vc(){wn=Gr.current,P(sa),P(Gr)}var Hn=0,ht=null,wt=null,qt=null,qr=!1,ra=!1,Ti=!1,Xr=0,vs=0,la=null,Q6=0;function kt(){throw Error(l(321))}function bc(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Me(e[i],n[i]))return!1;return!0}function xc(e,n,i,s,o,c){return Hn=c,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?j2:R2,Ti=!1,c=i(s,o),Ti=!1,ra&&(c=Ff(n,i,s,o)),Kf(e),c}function Kf(e){R.H=Jr;var n=wt!==null&&wt.next!==null;if(Hn=0,qt=wt=ht=null,qr=!1,vs=0,la=null,n)throw Error(l(300));e===null||te||(e=e.dependencies,e!==null&&Hr(e)&&(te=!0))}function Ff(e,n,i,s){ht=e;var o=0;do{if(ra&&(la=null),vs=0,ra=!1,25<=o)throw Error(l(301));if(o+=1,qt=wt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=ep,c=n(i,s)}while(ra);return c}function K6(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?bs(n):n,e=e.useState()[0],(wt!==null?wt.memoizedState:null)!==e&&(ht.flags|=1024),n}function Sc(){var e=Xr!==0;return Xr=0,e}function Tc(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Ac(e){if(qr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}qr=!1}Hn=0,qt=wt=ht=null,ra=!1,vs=Xr=0,la=null}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?ht.memoizedState=qt=e:qt=qt.next=e,qt}function Xt(){if(wt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=wt.next;var n=qt===null?ht.memoizedState:qt.next;if(n!==null)qt=n,wt=e;else{if(e===null)throw ht.alternate===null?Error(l(467)):Error(l(310));wt=e,e={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},qt===null?ht.memoizedState=qt=e:qt=qt.next=e}return qt}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bs(e){var n=vs;return vs+=1,la===null&&(la=[]),e=Gf(la,e,n),n=ht,(qt===null?n.memoizedState:qt.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?j2:R2),e}function Pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bs(e);if(e.$$typeof===_)return he(e)}throw Error(l(438,String(e)))}function Mc(e){var n=null,i=ht.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=ht.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=zc(),ht.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),s=0;s<e;s++)i[s]=Nt;return n.index++,i}function xn(e,n){return typeof n=="function"?n(e):n}function Zr(e){var n=Xt();return wc(n,wt,e)}function wc(e,n,i){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=i;var o=e.baseQueue,c=s.pending;if(c!==null){if(o!==null){var d=o.next;o.next=c.next,c.next=d}n.baseQueue=o=c,s.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{n=o.next;var v=d=null,T=null,D=n,O=!1;do{var L=D.lane&-536870913;if(L!==D.lane?(yt&L)===L:(Hn&L)===L){var C=D.revertLane;if(C===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),L===ia&&(O=!0);else if((Hn&C)===C){D=D.next,C===ia&&(O=!0);continue}else L={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=L,d=c):T=T.next=L,ht.lanes|=C,Xn|=C;L=D.action,Ti&&i(c,L),c=D.hasEagerState?D.eagerState:i(c,L)}else C={lane:L,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=C,d=c):T=T.next=C,ht.lanes|=L,Xn|=L;D=D.next}while(D!==null&&D!==n);if(T===null?d=c:T.next=v,!Me(c,e.memoizedState)&&(te=!0,O&&(i=aa,i!==null)))throw i;e.memoizedState=c,e.baseState=d,e.baseQueue=T,s.lastRenderedState=c}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function $c(e){var n=Xt(),i=n.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var s=i.dispatch,o=i.pending,c=n.memoizedState;if(o!==null){i.pending=null;var d=o=o.next;do c=e(c,d.action),d=d.next;while(d!==o);Me(c,n.memoizedState)||(te=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,s]}function Jf(e,n,i){var s=ht,o=Xt(),c=xt;if(c){if(i===void 0)throw Error(l(407));i=i()}else i=n();var d=!Me((wt||o).memoizedState,i);d&&(o.memoizedState=i,te=!0),o=o.queue;var v=t2.bind(null,s,o,e);if(xs(2048,8,v,[e]),o.getSnapshot!==n||d||qt!==null&&qt.memoizedState.tag&1){if(s.flags|=2048,oa(9,Qr(),If.bind(null,s,o,i,n),null),Ct===null)throw Error(l(349));c||(Hn&124)!==0||Wf(s,n,i)}return i}function Wf(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ht.updateQueue,n===null?(n=zc(),ht.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function If(e,n,i,s){n.value=i,n.getSnapshot=s,e2(n)&&n2(e)}function t2(e,n,i){return i(function(){e2(n)&&n2(e)})}function e2(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Me(e,i)}catch{return!0}}function n2(e){var n=Ii(e,2);n!==null&&je(n,e,2)}function Ec(e){var n=be();if(typeof e=="function"){var i=e;if(e=i(),Ti){jn(!0);try{i()}finally{jn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},n}function i2(e,n,i,s){return e.baseState=i,wc(e,wt,typeof s=="function"?s:xn)}function F6(e,n,i,s,o){if(Fr(e))throw Error(l(485));if(e=n.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};R.T!==null?i(!0):c.isTransition=!1,s(c),i=n.pending,i===null?(c.next=n.pending=c,a2(n,c)):(c.next=i.next,n.pending=i.next=c)}}function a2(e,n){var i=n.action,s=n.payload,o=e.state;if(n.isTransition){var c=R.T,d={};R.T=d;try{var v=i(o,s),T=R.S;T!==null&&T(d,v),s2(e,n,v)}catch(D){Dc(e,n,D)}finally{R.T=c}}else try{c=i(o,s),s2(e,n,c)}catch(D){Dc(e,n,D)}}function s2(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){r2(e,n,s)},function(s){return Dc(e,n,s)}):r2(e,n,i)}function r2(e,n,i){n.status="fulfilled",n.value=i,l2(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,a2(e,i)))}function Dc(e,n,i){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,l2(n),n=n.next;while(n!==s)}e.action=null}function l2(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function o2(e,n){return n}function c2(e,n){if(xt){var i=Ct.formState;if(i!==null){t:{var s=ht;if(xt){if(_t){e:{for(var o=_t,c=nn;o.nodeType!==8;){if(!c){o=null;break e}if(o=We(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){_t=We(o.nextSibling),s=o.data==="F!";break t}}vi(s)}s=!1}s&&(n=i[0])}}return i=be(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o2,lastRenderedState:n},i.queue=s,i=E2.bind(null,ht,s),s.dispatch=i,s=Ec(!1),c=Vc.bind(null,ht,!1,s.queue),s=be(),o={state:n,dispatch:null,action:e,pending:null},s.queue=o,i=F6.bind(null,ht,o,c,i),o.dispatch=i,s.memoizedState=e,[n,i,!1]}function u2(e){var n=Xt();return f2(n,wt,e)}function f2(e,n,i){if(n=wc(e,n,o2)[0],e=Zr(xn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=bs(n)}catch(d){throw d===ds?kr:d}else s=n;n=Xt();var o=n.queue,c=o.dispatch;return i!==n.memoizedState&&(ht.flags|=2048,oa(9,Qr(),J6.bind(null,o,i),null)),[s,c,e]}function J6(e,n){e.action=n}function h2(e){var n=Xt(),i=wt;if(i!==null)return f2(n,i,e);Xt(),n=n.memoizedState,i=Xt();var s=i.queue.dispatch;return i.memoizedState=e,[n,s,!1]}function oa(e,n,i,s){return e={tag:e,create:i,deps:s,inst:n,next:null},n=ht.updateQueue,n===null&&(n=zc(),ht.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,n.lastEffect=e),e}function Qr(){return{destroy:void 0,resource:void 0}}function d2(){return Xt().memoizedState}function Kr(e,n,i,s){var o=be();s=s===void 0?null:s,ht.flags|=e,o.memoizedState=oa(1|n,Qr(),i,s)}function xs(e,n,i,s){var o=Xt();s=s===void 0?null:s;var c=o.memoizedState.inst;wt!==null&&s!==null&&bc(s,wt.memoizedState.deps)?o.memoizedState=oa(n,c,i,s):(ht.flags|=e,o.memoizedState=oa(1|n,c,i,s))}function m2(e,n){Kr(8390656,8,e,n)}function p2(e,n){xs(2048,8,e,n)}function g2(e,n){return xs(4,2,e,n)}function y2(e,n){return xs(4,4,e,n)}function v2(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function b2(e,n,i){i=i!=null?i.concat([e]):null,xs(4,4,v2.bind(null,n,e),i)}function Cc(){}function x2(e,n){var i=Xt();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&bc(n,s[1])?s[0]:(i.memoizedState=[e,n],e)}function S2(e,n){var i=Xt();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&bc(n,s[1]))return s[0];if(s=e(),Ti){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[s,n],s}function jc(e,n,i){return i===void 0||(Hn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=i,e=zh(),ht.lanes|=e,Xn|=e,i)}function T2(e,n,i,s){return Me(i,n)?i:sa.current!==null?(e=jc(e,i,s),Me(e,n)||(te=!0),e):(Hn&42)===0?(te=!0,e.memoizedState=i):(e=zh(),ht.lanes|=e,Xn|=e,n)}function A2(e,n,i,s,o){var c=Y.p;Y.p=c!==0&&8>c?c:8;var d=R.T,v={};R.T=v,Vc(e,!1,n,i);try{var T=o(),D=R.S;if(D!==null&&D(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var O=Z6(T,s);Ss(e,n,O,Ce(e))}else Ss(e,n,s,Ce(e))}catch(L){Ss(e,n,{then:function(){},status:"rejected",reason:L},Ce())}finally{Y.p=c,R.T=d}}function W6(){}function Rc(e,n,i,s){if(e.tag!==5)throw Error(l(476));var o=z2(e).queue;A2(e,o,n,I,i===null?W6:function(){return M2(e),i(s)})}function z2(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:I},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function M2(e){var n=z2(e).next.queue;Ss(e,n,{},Ce())}function Oc(){return he(Ns)}function w2(){return Xt().memoizedState}function $2(){return Xt().memoizedState}function I6(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=Ce();e=_n(i);var s=Ln(n,e,i);s!==null&&(je(s,n,i),ps(s,n,i)),n={cache:cc()},e.payload=n;return}n=n.return}}function tp(e,n,i){var s=Ce();i={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Fr(e)?D2(n,i):(i=Io(e,n,i,s),i!==null&&(je(i,e,s),C2(i,n,s)))}function E2(e,n,i){var s=Ce();Ss(e,n,i,s)}function Ss(e,n,i,s){var o={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Fr(e))D2(n,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var d=n.lastRenderedState,v=c(d,i);if(o.hasEagerState=!0,o.eagerState=v,Me(v,d))return Or(e,n,o,0),Ct===null&&Rr(),!1}catch{}finally{}if(i=Io(e,n,o,s),i!==null)return je(i,e,s),C2(i,n,s),!0}return!1}function Vc(e,n,i,s){if(s={lane:2,revertLane:hu(),action:s,hasEagerState:!1,eagerState:null,next:null},Fr(e)){if(n)throw Error(l(479))}else n=Io(e,i,s,2),n!==null&&je(n,e,2)}function Fr(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function D2(e,n){ra=qr=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function C2(e,n,i){if((i&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,L0(e,i)}}var Jr={readContext:he,use:Pr,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},j2={readContext:he,use:Pr,useCallback:function(e,n){return be().memoizedState=[e,n===void 0?null:n],e},useContext:he,useEffect:m2,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,Kr(4194308,4,v2.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Kr(4194308,4,e,n)},useInsertionEffect:function(e,n){Kr(4,2,e,n)},useMemo:function(e,n){var i=be();n=n===void 0?null:n;var s=e();if(Ti){jn(!0);try{e()}finally{jn(!1)}}return i.memoizedState=[s,n],s},useReducer:function(e,n,i){var s=be();if(i!==void 0){var o=i(n);if(Ti){jn(!0);try{i(n)}finally{jn(!1)}}}else o=n;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=tp.bind(null,ht,e),[s.memoizedState,e]},useRef:function(e){var n=be();return e={current:e},n.memoizedState=e},useState:function(e){e=Ec(e);var n=e.queue,i=E2.bind(null,ht,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:Cc,useDeferredValue:function(e,n){var i=be();return jc(i,e,n)},useTransition:function(){var e=Ec(!1);return e=A2.bind(null,ht,e.queue,!0,!1),be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var s=ht,o=be();if(xt){if(i===void 0)throw Error(l(407));i=i()}else{if(i=n(),Ct===null)throw Error(l(349));(yt&124)!==0||Wf(s,n,i)}o.memoizedState=i;var c={value:i,getSnapshot:n};return o.queue=c,m2(t2.bind(null,s,c,e),[e]),s.flags|=2048,oa(9,Qr(),If.bind(null,s,c,i,n),null),i},useId:function(){var e=be(),n=Ct.identifierPrefix;if(xt){var i=yn,s=gn;i=(s&~(1<<32-ze(s)-1)).toString(32)+i,n="«"+n+"R"+i,i=Xr++,0<i&&(n+="H"+i.toString(32)),n+="»"}else i=Q6++,n="«"+n+"r"+i.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Oc,useFormState:c2,useActionState:c2,useOptimistic:function(e){var n=be();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Vc.bind(null,ht,!0,i),i.dispatch=n,[e,n]},useMemoCache:Mc,useCacheRefresh:function(){return be().memoizedState=I6.bind(null,ht)}},R2={readContext:he,use:Pr,useCallback:x2,useContext:he,useEffect:p2,useImperativeHandle:b2,useInsertionEffect:g2,useLayoutEffect:y2,useMemo:S2,useReducer:Zr,useRef:d2,useState:function(){return Zr(xn)},useDebugValue:Cc,useDeferredValue:function(e,n){var i=Xt();return T2(i,wt.memoizedState,e,n)},useTransition:function(){var e=Zr(xn)[0],n=Xt().memoizedState;return[typeof e=="boolean"?e:bs(e),n]},useSyncExternalStore:Jf,useId:w2,useHostTransitionStatus:Oc,useFormState:u2,useActionState:u2,useOptimistic:function(e,n){var i=Xt();return i2(i,wt,e,n)},useMemoCache:Mc,useCacheRefresh:$2},ep={readContext:he,use:Pr,useCallback:x2,useContext:he,useEffect:p2,useImperativeHandle:b2,useInsertionEffect:g2,useLayoutEffect:y2,useMemo:S2,useReducer:$c,useRef:d2,useState:function(){return $c(xn)},useDebugValue:Cc,useDeferredValue:function(e,n){var i=Xt();return wt===null?jc(i,e,n):T2(i,wt.memoizedState,e,n)},useTransition:function(){var e=$c(xn)[0],n=Xt().memoizedState;return[typeof e=="boolean"?e:bs(e),n]},useSyncExternalStore:Jf,useId:w2,useHostTransitionStatus:Oc,useFormState:h2,useActionState:h2,useOptimistic:function(e,n){var i=Xt();return wt!==null?i2(i,wt,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:$2},ca=null,Ts=0;function Wr(e){var n=Ts;return Ts+=1,ca===null&&(ca=[]),Gf(ca,e,n)}function As(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ir(e,n){throw n.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function O2(e){var n=e._init;return n(e._payload)}function V2(e){function n(w,M){if(e){var E=w.deletions;E===null?(w.deletions=[M],w.flags|=16):E.push(M)}}function i(w,M){if(!e)return null;for(;M!==null;)n(w,M),M=M.sibling;return null}function s(w){for(var M=new Map;w!==null;)w.key!==null?M.set(w.key,w):M.set(w.index,w),w=w.sibling;return M}function o(w,M){return w=pn(w,M),w.index=0,w.sibling=null,w}function c(w,M,E){return w.index=E,e?(E=w.alternate,E!==null?(E=E.index,E<M?(w.flags|=67108866,M):E):(w.flags|=67108866,M)):(w.flags|=1048576,M)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function v(w,M,E,B){return M===null||M.tag!==6?(M=ec(E,w.mode,B),M.return=w,M):(M=o(M,E),M.return=w,M)}function T(w,M,E,B){var J=E.type;return J===V?O(w,M,E.props.children,B,E.key):M!==null&&(M.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===tt&&O2(J)===M.type)?(M=o(M,E.props),As(M,E),M.return=w,M):(M=Br(E.type,E.key,E.props,null,w.mode,B),As(M,E),M.return=w,M)}function D(w,M,E,B){return M===null||M.tag!==4||M.stateNode.containerInfo!==E.containerInfo||M.stateNode.implementation!==E.implementation?(M=nc(E,w.mode,B),M.return=w,M):(M=o(M,E.children||[]),M.return=w,M)}function O(w,M,E,B,J){return M===null||M.tag!==7?(M=mi(E,w.mode,B,J),M.return=w,M):(M=o(M,E),M.return=w,M)}function L(w,M,E){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=ec(""+M,w.mode,E),M.return=w,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return E=Br(M.type,M.key,M.props,null,w.mode,E),As(E,M),E.return=w,E;case $:return M=nc(M,w.mode,E),M.return=w,M;case tt:var B=M._init;return M=B(M._payload),L(w,M,E)}if(Qt(M)||Ut(M))return M=mi(M,w.mode,E,null),M.return=w,M;if(typeof M.then=="function")return L(w,Wr(M),E);if(M.$$typeof===_)return L(w,Nr(w,M),E);Ir(w,M)}return null}function C(w,M,E,B){var J=M!==null?M.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:v(w,M,""+E,B);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case S:return E.key===J?T(w,M,E,B):null;case $:return E.key===J?D(w,M,E,B):null;case tt:return J=E._init,E=J(E._payload),C(w,M,E,B)}if(Qt(E)||Ut(E))return J!==null?null:O(w,M,E,B,null);if(typeof E.then=="function")return C(w,M,Wr(E),B);if(E.$$typeof===_)return C(w,M,Nr(w,E),B);Ir(w,E)}return null}function j(w,M,E,B,J){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return w=w.get(E)||null,v(M,w,""+B,J);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return w=w.get(B.key===null?E:B.key)||null,T(M,w,B,J);case $:return w=w.get(B.key===null?E:B.key)||null,D(M,w,B,J);case tt:var dt=B._init;return B=dt(B._payload),j(w,M,E,B,J)}if(Qt(B)||Ut(B))return w=w.get(E)||null,O(M,w,B,J,null);if(typeof B.then=="function")return j(w,M,E,Wr(B),J);if(B.$$typeof===_)return j(w,M,E,Nr(M,B),J);Ir(M,B)}return null}function lt(w,M,E,B){for(var J=null,dt=null,et=M,rt=M=0,ne=null;et!==null&&rt<E.length;rt++){et.index>rt?(ne=et,et=null):ne=et.sibling;var bt=C(w,et,E[rt],B);if(bt===null){et===null&&(et=ne);break}e&&et&&bt.alternate===null&&n(w,et),M=c(bt,M,rt),dt===null?J=bt:dt.sibling=bt,dt=bt,et=ne}if(rt===E.length)return i(w,et),xt&&gi(w,rt),J;if(et===null){for(;rt<E.length;rt++)et=L(w,E[rt],B),et!==null&&(M=c(et,M,rt),dt===null?J=et:dt.sibling=et,dt=et);return xt&&gi(w,rt),J}for(et=s(et);rt<E.length;rt++)ne=j(et,w,rt,E[rt],B),ne!==null&&(e&&ne.alternate!==null&&et.delete(ne.key===null?rt:ne.key),M=c(ne,M,rt),dt===null?J=ne:dt.sibling=ne,dt=ne);return e&&et.forEach(function(ti){return n(w,ti)}),xt&&gi(w,rt),J}function at(w,M,E,B){if(E==null)throw Error(l(151));for(var J=null,dt=null,et=M,rt=M=0,ne=null,bt=E.next();et!==null&&!bt.done;rt++,bt=E.next()){et.index>rt?(ne=et,et=null):ne=et.sibling;var ti=C(w,et,bt.value,B);if(ti===null){et===null&&(et=ne);break}e&&et&&ti.alternate===null&&n(w,et),M=c(ti,M,rt),dt===null?J=ti:dt.sibling=ti,dt=ti,et=ne}if(bt.done)return i(w,et),xt&&gi(w,rt),J;if(et===null){for(;!bt.done;rt++,bt=E.next())bt=L(w,bt.value,B),bt!==null&&(M=c(bt,M,rt),dt===null?J=bt:dt.sibling=bt,dt=bt);return xt&&gi(w,rt),J}for(et=s(et);!bt.done;rt++,bt=E.next())bt=j(et,w,rt,bt.value,B),bt!==null&&(e&&bt.alternate!==null&&et.delete(bt.key===null?rt:bt.key),M=c(bt,M,rt),dt===null?J=bt:dt.sibling=bt,dt=bt);return e&&et.forEach(function(ng){return n(w,ng)}),xt&&gi(w,rt),J}function Et(w,M,E,B){if(typeof E=="object"&&E!==null&&E.type===V&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case S:t:{for(var J=E.key;M!==null;){if(M.key===J){if(J=E.type,J===V){if(M.tag===7){i(w,M.sibling),B=o(M,E.props.children),B.return=w,w=B;break t}}else if(M.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===tt&&O2(J)===M.type){i(w,M.sibling),B=o(M,E.props),As(B,E),B.return=w,w=B;break t}i(w,M);break}else n(w,M);M=M.sibling}E.type===V?(B=mi(E.props.children,w.mode,B,E.key),B.return=w,w=B):(B=Br(E.type,E.key,E.props,null,w.mode,B),As(B,E),B.return=w,w=B)}return d(w);case $:t:{for(J=E.key;M!==null;){if(M.key===J)if(M.tag===4&&M.stateNode.containerInfo===E.containerInfo&&M.stateNode.implementation===E.implementation){i(w,M.sibling),B=o(M,E.children||[]),B.return=w,w=B;break t}else{i(w,M);break}else n(w,M);M=M.sibling}B=nc(E,w.mode,B),B.return=w,w=B}return d(w);case tt:return J=E._init,E=J(E._payload),Et(w,M,E,B)}if(Qt(E))return lt(w,M,E,B);if(Ut(E)){if(J=Ut(E),typeof J!="function")throw Error(l(150));return E=J.call(E),at(w,M,E,B)}if(typeof E.then=="function")return Et(w,M,Wr(E),B);if(E.$$typeof===_)return Et(w,M,Nr(w,E),B);Ir(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,M!==null&&M.tag===6?(i(w,M.sibling),B=o(M,E),B.return=w,w=B):(i(w,M),B=ec(E,w.mode,B),B.return=w,w=B),d(w)):i(w,M)}return function(w,M,E,B){try{Ts=0;var J=Et(w,M,E,B);return ca=null,J}catch(et){if(et===ds||et===kr)throw et;var dt=we(29,et,null,w.mode);return dt.lanes=B,dt.return=w,dt}finally{}}}var ua=V2(!0),B2=V2(!1),ke=H(null),an=null;function Nn(e){var n=e.alternate;Z(Ft,Ft.current&1),Z(ke,e),an===null&&(n===null||sa.current!==null||n.memoizedState!==null)&&(an=e)}function _2(e){if(e.tag===22){if(Z(Ft,Ft.current),Z(ke,e),an===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(an=e)}}else Un()}function Un(){Z(Ft,Ft.current),Z(ke,ke.current)}function Sn(e){P(ke),an===e&&(an=null),P(Ft)}var Ft=H(0);function tl(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||zu(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Bc(e,n,i,s){n=e.memoizedState,i=i(s,n),i=i==null?n:y({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var _c={enqueueSetState:function(e,n,i){e=e._reactInternals;var s=Ce(),o=_n(s);o.payload=n,i!=null&&(o.callback=i),n=Ln(e,o,s),n!==null&&(je(n,e,s),ps(n,e,s))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var s=Ce(),o=_n(s);o.tag=1,o.payload=n,i!=null&&(o.callback=i),n=Ln(e,o,s),n!==null&&(je(n,e,s),ps(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Ce(),s=_n(i);s.tag=2,n!=null&&(s.callback=n),n=Ln(e,s,i),n!==null&&(je(n,e,i),ps(n,e,i))}};function L2(e,n,i,s,o,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,d):n.prototype&&n.prototype.isPureReactComponent?!ss(i,s)||!ss(o,c):!0}function H2(e,n,i,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==e&&_c.enqueueReplaceState(n,n.state,null)}function Ai(e,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(e=e.defaultProps){i===n&&(i=y({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}var el=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function N2(e){el(e)}function U2(e){console.error(e)}function k2(e){el(e)}function nl(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Y2(e,n,i){try{var s=e.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Lc(e,n,i){return i=_n(i),i.tag=3,i.payload={element:null},i.callback=function(){nl(e,n)},i}function G2(e){return e=_n(e),e.tag=3,e}function q2(e,n,i,s){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var c=s.value;e.payload=function(){return o(c)},e.callback=function(){Y2(n,i,s)}}var d=i.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Y2(n,i,s),typeof o!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function np(e,n,i,s,o){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&us(n,i,o,!0),i=ke.current,i!==null){switch(i.tag){case 13:return an===null?lu():i.alternate===null&&Lt===0&&(Lt=3),i.flags&=-257,i.flags|=65536,i.lanes=o,s===hc?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),cu(e,s,o)),!1;case 22:return i.flags|=65536,s===hc?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),cu(e,s,o)),!1}throw Error(l(435,i.tag))}return cu(e,s,o),lu(),!1}if(xt)return n=ke.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,s!==sc&&(e=Error(l(422),{cause:s}),cs(Le(e,i)))):(s!==sc&&(n=Error(l(423),{cause:s}),cs(Le(n,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=Le(s,i),o=Lc(e.stateNode,s,o),pc(e,o),Lt!==4&&(Lt=2)),!1;var c=Error(l(520),{cause:s});if(c=Le(c,i),Cs===null?Cs=[c]:Cs.push(c),Lt!==4&&(Lt=2),n===null)return!0;s=Le(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=Lc(i.stateNode,s,e),pc(i,e),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Pn===null||!Pn.has(c))))return i.flags|=65536,o&=-o,i.lanes|=o,o=G2(o),q2(o,e,i,s),pc(i,o),!1}i=i.return}while(i!==null);return!1}var X2=Error(l(461)),te=!1;function re(e,n,i,s){n.child=e===null?B2(n,null,i,s):ua(n,e.child,i,s)}function P2(e,n,i,s,o){i=i.render;var c=n.ref;if("ref"in s){var d={};for(var v in s)v!=="ref"&&(d[v]=s[v])}else d=s;return xi(n),s=xc(e,n,i,d,c,o),v=Sc(),e!==null&&!te?(Tc(e,n,o),Tn(e,n,o)):(xt&&v&&ic(n),n.flags|=1,re(e,n,s,o),n.child)}function Z2(e,n,i,s,o){if(e===null){var c=i.type;return typeof c=="function"&&!tc(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,Q2(e,n,c,s,o)):(e=Br(i.type,null,s,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!Xc(e,o)){var d=c.memoizedProps;if(i=i.compare,i=i!==null?i:ss,i(d,s)&&e.ref===n.ref)return Tn(e,n,o)}return n.flags|=1,e=pn(c,s),e.ref=n.ref,e.return=n,n.child=e}function Q2(e,n,i,s,o){if(e!==null){var c=e.memoizedProps;if(ss(c,s)&&e.ref===n.ref)if(te=!1,n.pendingProps=s=c,Xc(e,o))(e.flags&131072)!==0&&(te=!0);else return n.lanes=e.lanes,Tn(e,n,o)}return Hc(e,n,i,s,o)}function K2(e,n,i){var s=n.pendingProps,o=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=c!==null?c.baseLanes|i:i,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;n.childLanes=c&~s}else n.childLanes=0,n.child=null;return F2(e,n,s,i)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ur(n,c!==null?c.cachePool:null),c!==null?Qf(n,c):yc(),_2(n);else return n.lanes=n.childLanes=536870912,F2(e,n,c!==null?c.baseLanes|i:i,i)}else c!==null?(Ur(n,c.cachePool),Qf(n,c),Un(),n.memoizedState=null):(e!==null&&Ur(n,null),yc(),Un());return re(e,n,o,i),n.child}function F2(e,n,i,s){var o=fc();return o=o===null?null:{parent:Kt._currentValue,pool:o},n.memoizedState={baseLanes:i,cachePool:o},e!==null&&Ur(n,null),yc(),_2(n),e!==null&&us(e,n,s,!0),null}function il(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function Hc(e,n,i,s,o){return xi(n),i=xc(e,n,i,s,void 0,o),s=Sc(),e!==null&&!te?(Tc(e,n,o),Tn(e,n,o)):(xt&&s&&ic(n),n.flags|=1,re(e,n,i,o),n.child)}function J2(e,n,i,s,o,c){return xi(n),n.updateQueue=null,i=Ff(n,s,i,o),Kf(e),s=Sc(),e!==null&&!te?(Tc(e,n,c),Tn(e,n,c)):(xt&&s&&ic(n),n.flags|=1,re(e,n,i,c),n.child)}function W2(e,n,i,s,o){if(xi(n),n.stateNode===null){var c=ta,d=i.contextType;typeof d=="object"&&d!==null&&(c=he(d)),c=new i(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=_c,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},dc(n),d=i.contextType,c.context=typeof d=="object"&&d!==null?he(d):ta,c.state=n.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(Bc(n,i,d,s),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&_c.enqueueReplaceState(c,c.state,null),ys(n,s,c,o),gs(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){c=n.stateNode;var v=n.memoizedProps,T=Ai(i,v);c.props=T;var D=c.context,O=i.contextType;d=ta,typeof O=="object"&&O!==null&&(d=he(O));var L=i.getDerivedStateFromProps;O=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||D!==d)&&H2(n,c,s,d),Bn=!1;var C=n.memoizedState;c.state=C,ys(n,s,c,o),gs(),D=n.memoizedState,v||C!==D||Bn?(typeof L=="function"&&(Bc(n,i,L,s),D=n.memoizedState),(T=Bn||L2(n,i,T,s,C,D,d))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=D),c.props=s,c.state=D,c.context=d,s=T):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,mc(e,n),d=n.memoizedProps,O=Ai(i,d),c.props=O,L=n.pendingProps,C=c.context,D=i.contextType,T=ta,typeof D=="object"&&D!==null&&(T=he(D)),v=i.getDerivedStateFromProps,(D=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==L||C!==T)&&H2(n,c,s,T),Bn=!1,C=n.memoizedState,c.state=C,ys(n,s,c,o),gs();var j=n.memoizedState;d!==L||C!==j||Bn||e!==null&&e.dependencies!==null&&Hr(e.dependencies)?(typeof v=="function"&&(Bc(n,i,v,s),j=n.memoizedState),(O=Bn||L2(n,i,O,s,C,j,T)||e!==null&&e.dependencies!==null&&Hr(e.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,j,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,j,T)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=j),c.props=s,c.state=j,c.context=T,s=O):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),s=!1)}return c=s,il(e,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&s?(n.child=ua(n,e.child,null,o),n.child=ua(n,null,i,o)):re(e,n,i,o),n.memoizedState=c.state,e=n.child):e=Tn(e,n,o),e}function I2(e,n,i,s){return os(),n.flags|=256,re(e,n,i,s),n.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:Uf()}}function kc(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=Ye),e}function th(e,n,i){var s=n.pendingProps,o=!1,c=(n.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(Ft.current&2)!==0),d&&(o=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(o?Nn(n):Un(),xt){var v=_t,T;if(T=v){t:{for(T=v,v=nn;T.nodeType!==8;){if(!v){v=null;break t}if(T=We(T.nextSibling),T===null){v=null;break t}}v=T}v!==null?(n.memoizedState={dehydrated:v,treeContext:pi!==null?{id:gn,overflow:yn}:null,retryLane:536870912,hydrationErrors:null},T=we(18,null,null,0),T.stateNode=v,T.return=n,n.child=T,pe=n,_t=null,T=!0):T=!1}T||vi(n)}if(v=n.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return zu(v)?n.lanes=32:n.lanes=536870912,null;Sn(n)}return v=s.children,s=s.fallback,o?(Un(),o=n.mode,v=al({mode:"hidden",children:v},o),s=mi(s,o,i,null),v.return=n,s.return=n,v.sibling=s,n.child=v,o=n.child,o.memoizedState=Uc(i),o.childLanes=kc(e,d,i),n.memoizedState=Nc,s):(Nn(n),Yc(n,v))}if(T=e.memoizedState,T!==null&&(v=T.dehydrated,v!==null)){if(c)n.flags&256?(Nn(n),n.flags&=-257,n=Gc(e,n,i)):n.memoizedState!==null?(Un(),n.child=e.child,n.flags|=128,n=null):(Un(),o=s.fallback,v=n.mode,s=al({mode:"visible",children:s.children},v),o=mi(o,v,i,null),o.flags|=2,s.return=n,o.return=n,s.sibling=o,n.child=s,ua(n,e.child,null,i),s=n.child,s.memoizedState=Uc(i),s.childLanes=kc(e,d,i),n.memoizedState=Nc,n=o);else if(Nn(n),zu(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var D=d.dgst;d=D,s=Error(l(419)),s.stack="",s.digest=d,cs({value:s,source:null,stack:null}),n=Gc(e,n,i)}else if(te||us(e,n,i,!1),d=(i&e.childLanes)!==0,te||d){if(d=Ct,d!==null&&(s=i&-i,s=(s&42)!==0?1:Mo(s),s=(s&(d.suspendedLanes|i))!==0?0:s,s!==0&&s!==T.retryLane))throw T.retryLane=s,Ii(e,s),je(d,e,s),X2;v.data==="$?"||lu(),n=Gc(e,n,i)}else v.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=T.treeContext,_t=We(v.nextSibling),pe=n,xt=!0,yi=null,nn=!1,e!==null&&(Ne[Ue++]=gn,Ne[Ue++]=yn,Ne[Ue++]=pi,gn=e.id,yn=e.overflow,pi=n),n=Yc(n,s.children),n.flags|=4096);return n}return o?(Un(),o=s.fallback,v=n.mode,T=e.child,D=T.sibling,s=pn(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&65011712,D!==null?o=pn(D,o):(o=mi(o,v,i,null),o.flags|=2),o.return=n,s.return=n,s.sibling=o,n.child=s,s=o,o=n.child,v=e.child.memoizedState,v===null?v=Uc(i):(T=v.cachePool,T!==null?(D=Kt._currentValue,T=T.parent!==D?{parent:D,pool:D}:T):T=Uf(),v={baseLanes:v.baseLanes|i,cachePool:T}),o.memoizedState=v,o.childLanes=kc(e,d,i),n.memoizedState=Nc,s):(Nn(n),i=e.child,e=i.sibling,i=pn(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=i,n.memoizedState=null,i)}function Yc(e,n){return n=al({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function al(e,n){return e=we(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Gc(e,n,i){return ua(n,e.child,null,i),e=Yc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eh(e,n,i){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),lc(e.return,n,i)}function qc(e,n,i,s,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:o}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=i,c.tailMode=o)}function nh(e,n,i){var s=n.pendingProps,o=s.revealOrder,c=s.tail;if(re(e,n,s.children,i),s=Ft.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,i,n);else if(e.tag===19)eh(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Z(Ft,s),o){case"forwards":for(i=n.child,o=null;i!==null;)e=i.alternate,e!==null&&tl(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=n.child,n.child=null):(o=i.sibling,i.sibling=null),qc(n,!1,o,i,c);break;case"backwards":for(i=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&tl(e)===null){n.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}qc(n,!0,i,null,c);break;case"together":qc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(us(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,i=pn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=pn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Xc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Hr(e)))}function ip(e,n,i){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Vn(n,Kt,e.memoizedState.cache),os();break;case 27:case 5:oi(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Vn(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Nn(n),n.flags|=128,null):(i&n.child.childLanes)!==0?th(e,n,i):(Nn(n),e=Tn(e,n,i),e!==null?e.sibling:null);Nn(n);break;case 19:var o=(e.flags&128)!==0;if(s=(i&n.childLanes)!==0,s||(us(e,n,i,!1),s=(i&n.childLanes)!==0),o){if(s)return nh(e,n,i);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(Ft,Ft.current),s)break;return null;case 22:case 23:return n.lanes=0,K2(e,n,i);case 24:Vn(n,Kt,e.memoizedState.cache)}return Tn(e,n,i)}function ih(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)te=!0;else{if(!Xc(e,i)&&(n.flags&128)===0)return te=!1,ip(e,n,i);te=(e.flags&131072)!==0}else te=!1,xt&&(n.flags&1048576)!==0&&Of(n,Lr,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,o=s._init;if(s=o(s._payload),n.type=s,typeof s=="function")tc(s)?(e=Ai(s,e),n.tag=1,n=W2(null,n,s,e,i)):(n.tag=0,n=Hc(null,n,s,e,i));else{if(s!=null){if(o=s.$$typeof,o===K){n.tag=11,n=P2(null,n,s,e,i);break t}else if(o===Q){n.tag=14,n=Z2(null,n,s,e,i);break t}}throw n=Oe(s)||s,Error(l(306,n,""))}}return n;case 0:return Hc(e,n,n.type,n.pendingProps,i);case 1:return s=n.type,o=Ai(s,n.pendingProps),W2(e,n,s,o,i);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(l(387));s=n.pendingProps;var c=n.memoizedState;o=c.element,mc(e,n),ys(n,s,null,i);var d=n.memoizedState;if(s=d.cache,Vn(n,Kt,s),s!==c.cache&&oc(n,[Kt],i,!0),gs(),s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=I2(e,n,s,i);break t}else if(s!==o){o=Le(Error(l(424)),n),cs(o),n=I2(e,n,s,i);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_t=We(e.firstChild),pe=n,xt=!0,yi=null,nn=!0,i=B2(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(os(),s===o){n=Tn(e,n,i);break t}re(e,n,s,i)}n=n.child}return n;case 26:return il(e,n),e===null?(i=ld(n.type,null,n.pendingProps,null))?n.memoizedState=i:xt||(i=n.type,e=n.pendingProps,s=vl(st.current).createElement(i),s[fe]=n,s[ye]=e,oe(s,i,e),It(s),n.stateNode=s):n.memoizedState=ld(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return oi(n),e===null&&xt&&(s=n.stateNode=ad(n.type,n.pendingProps,st.current),pe=n,nn=!0,o=_t,Kn(n.type)?(Mu=o,_t=We(s.firstChild)):_t=o),re(e,n,n.pendingProps.children,i),il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((o=s=_t)&&(s=jp(s,n.type,n.pendingProps,nn),s!==null?(n.stateNode=s,pe=n,_t=We(s.firstChild),nn=!1,o=!0):o=!1),o||vi(n)),oi(n),o=n.type,c=n.pendingProps,d=e!==null?e.memoizedProps:null,s=c.children,Su(o,c)?s=null:d!==null&&Su(o,d)&&(n.flags|=32),n.memoizedState!==null&&(o=xc(e,n,K6,null,null,i),Ns._currentValue=o),il(e,n),re(e,n,s,i),n.child;case 6:return e===null&&xt&&((e=i=_t)&&(i=Rp(i,n.pendingProps,nn),i!==null?(n.stateNode=i,pe=n,_t=null,e=!0):e=!1),e||vi(n)),null;case 13:return th(e,n,i);case 4:return Tt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ua(n,null,s,i):re(e,n,s,i),n.child;case 11:return P2(e,n,n.type,n.pendingProps,i);case 7:return re(e,n,n.pendingProps,i),n.child;case 8:return re(e,n,n.pendingProps.children,i),n.child;case 12:return re(e,n,n.pendingProps.children,i),n.child;case 10:return s=n.pendingProps,Vn(n,n.type,s.value),re(e,n,s.children,i),n.child;case 9:return o=n.type._context,s=n.pendingProps.children,xi(n),o=he(o),s=s(o),n.flags|=1,re(e,n,s,i),n.child;case 14:return Z2(e,n,n.type,n.pendingProps,i);case 15:return Q2(e,n,n.type,n.pendingProps,i);case 19:return nh(e,n,i);case 31:return s=n.pendingProps,i=n.mode,s={mode:s.mode,children:s.children},e===null?(i=al(s,i),i.ref=n.ref,n.child=i,i.return=n,n=i):(i=pn(e.child,s),i.ref=n.ref,n.child=i,i.return=n,n=i),n;case 22:return K2(e,n,i);case 24:return xi(n),s=he(Kt),e===null?(o=fc(),o===null&&(o=Ct,c=cc(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=i),o=c),n.memoizedState={parent:s,cache:o},dc(n),Vn(n,Kt,o)):((e.lanes&i)!==0&&(mc(e,n),ys(n,null,null,i),gs()),o=e.memoizedState,c=n.memoizedState,o.parent!==s?(o={parent:s,cache:s},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Vn(n,Kt,s)):(s=c.cache,Vn(n,Kt,s),s!==o.cache&&oc(n,[Kt],i,!0))),re(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function An(e){e.flags|=4}function ah(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hd(n)){if(n=ke.current,n!==null&&((yt&4194048)===yt?an!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==an))throw ms=hc,kf;e.flags|=8192}}function sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?B0():536870912,e.lanes|=n,ma|=n)}function zs(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ot(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(n)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=i,n}function ap(e,n,i){var s=n.pendingProps;switch(ac(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(n),null;case 1:return Ot(n),null;case 3:return i=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),bn(Kt),ue(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ls(n)?An(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_f())),Ot(n),null;case 26:return i=n.memoizedState,e===null?(An(n),i!==null?(Ot(n),ah(n,i)):(Ot(n),n.flags&=-16777217)):i?i!==e.memoizedState?(An(n),Ot(n),ah(n,i)):(Ot(n),n.flags&=-16777217):(e.memoizedProps!==s&&An(n),Ot(n),n.flags&=-16777217),null;case 27:hn(n),i=st.current;var o=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&An(n);else{if(!s){if(n.stateNode===null)throw Error(l(166));return Ot(n),null}e=nt.current,ls(n)?Vf(n):(e=ad(o,s,i),n.stateNode=e,An(n))}return Ot(n),null;case 5:if(hn(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&An(n);else{if(!s){if(n.stateNode===null)throw Error(l(166));return Ot(n),null}if(e=nt.current,ls(n))Vf(n);else{switch(o=vl(st.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?o.createElement(i,{is:s.is}):o.createElement(i)}}e[fe]=n,e[ye]=s;t:for(o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break t;for(;o.sibling===null;){if(o.return===null||o.return===n)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}n.stateNode=e;t:switch(oe(e,i,s),i){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&An(n)}}return Ot(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&An(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(l(166));if(e=st.current,ls(n)){if(e=n.stateNode,i=n.memoizedProps,s=null,o=pe,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[fe]=n,e=!!(e.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||Jh(e.nodeValue,i)),e||vi(n)}else e=vl(e).createTextNode(s),e[fe]=n,n.stateNode=e}return Ot(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ls(n),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[fe]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ot(n),o=!1}else o=_f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Sn(n),n):(Sn(n),null)}if(Sn(n),(n.flags&128)!==0)return n.lanes=i,n;if(i=s!==null,e=e!==null&&e.memoizedState!==null,i){s=n.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool);var c=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048)}return i!==e&&i&&(n.child.flags|=8192),sl(n,n.updateQueue),Ot(n),null;case 4:return ue(),e===null&&gu(n.stateNode.containerInfo),Ot(n),null;case 10:return bn(n.type),Ot(n),null;case 19:if(P(Ft),o=n.memoizedState,o===null)return Ot(n),null;if(s=(n.flags&128)!==0,c=o.rendering,c===null)if(s)zs(o,!1);else{if(Lt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=tl(e),c!==null){for(n.flags|=128,zs(o,!1),e=c.updateQueue,n.updateQueue=e,sl(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)Rf(i,e),i=i.sibling;return Z(Ft,Ft.current&1|2),n.child}e=e.sibling}o.tail!==null&&en()>ol&&(n.flags|=128,s=!0,zs(o,!1),n.lanes=4194304)}else{if(!s)if(e=tl(c),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,sl(n,e),zs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Ot(n),null}else 2*en()-o.renderingStartTime>ol&&i!==536870912&&(n.flags|=128,s=!0,zs(o,!1),n.lanes=4194304);o.isBackwards?(c.sibling=n.child,n.child=c):(e=o.last,e!==null?e.sibling=c:n.child=c,o.last=c)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=en(),n.sibling=null,e=Ft.current,Z(Ft,s?e&1|2:e&1),n):(Ot(n),null);case 22:case 23:return Sn(n),vc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(Ot(n),n.subtreeFlags&6&&(n.flags|=8192)):Ot(n),i=n.updateQueue,i!==null&&sl(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),e!==null&&P(Si),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),bn(Kt),Ot(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function sp(e,n){switch(ac(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bn(Kt),ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return hn(n),null;case 13:if(Sn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return P(Ft),null;case 4:return ue(),null;case 10:return bn(n.type),null;case 22:case 23:return Sn(n),vc(),e!==null&&P(Si),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return bn(Kt),null;case 25:return null;default:return null}}function sh(e,n){switch(ac(n),n.tag){case 3:bn(Kt),ue();break;case 26:case 27:case 5:hn(n);break;case 4:ue();break;case 13:Sn(n);break;case 19:P(Ft);break;case 10:bn(n.type);break;case 22:case 23:Sn(n),vc(),e!==null&&P(Si);break;case 24:bn(Kt)}}function Ms(e,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var o=s.next;i=o;do{if((i.tag&e)===e){s=void 0;var c=i.create,d=i.inst;s=c(),d.destroy=s}i=i.next}while(i!==o)}}catch(v){Dt(n,n.return,v)}}function kn(e,n,i){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){var d=s.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,o=n;var T=i,D=v;try{D()}catch(O){Dt(o,T,O)}}}s=s.next}while(s!==c)}}catch(O){Dt(n,n.return,O)}}function rh(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{Zf(n,i)}catch(s){Dt(e,e.return,s)}}}function lh(e,n,i){i.props=Ai(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(s){Dt(e,n,s)}}function ws(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof i=="function"?e.refCleanup=i(s):i.current=s}}catch(o){Dt(e,n,o)}}function sn(e,n){var i=e.ref,s=e.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(o){Dt(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){Dt(e,n,o)}else i.current=null}function oh(e){var n=e.type,i=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(o){Dt(e,e.return,o)}}function Pc(e,n,i){try{var s=e.stateNode;wp(s,e.type,i,n),s[ye]=n}catch(o){Dt(e,e.return,o)}}function ch(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function Zc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=yl));else if(s!==4&&(s===27&&Kn(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(Qc(e,n,i),e=e.sibling;e!==null;)Qc(e,n,i),e=e.sibling}function rl(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(s!==4&&(s===27&&Kn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(rl(e,n,i),e=e.sibling;e!==null;)rl(e,n,i),e=e.sibling}function uh(e){var n=e.stateNode,i=e.memoizedProps;try{for(var s=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);oe(n,s,i),n[fe]=e,n[ye]=i}catch(c){Dt(e,e.return,c)}}var zn=!1,Yt=!1,Kc=!1,fh=typeof WeakSet=="function"?WeakSet:Set,ee=null;function rp(e,n){if(e=e.containerInfo,bu=zl,e=Tf(e),Zo(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var o=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break t}var d=0,v=-1,T=-1,D=0,O=0,L=e,C=null;e:for(;;){for(var j;L!==i||o!==0&&L.nodeType!==3||(v=d+o),L!==c||s!==0&&L.nodeType!==3||(T=d+s),L.nodeType===3&&(d+=L.nodeValue.length),(j=L.firstChild)!==null;)C=L,L=j;for(;;){if(L===e)break e;if(C===i&&++D===o&&(v=d),C===c&&++O===s&&(T=d),(j=L.nextSibling)!==null)break;L=C,C=L.parentNode}L=j}i=v===-1||T===-1?null:{start:v,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(xu={focusedElem:e,selectionRange:i},zl=!1,ee=n;ee!==null;)if(n=ee,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,ee=e;else for(;ee!==null;){switch(n=ee,c=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,i=n,o=c.memoizedProps,c=c.memoizedState,s=i.stateNode;try{var lt=Ai(i.type,o,i.elementType===i.type);e=s.getSnapshotBeforeUpdate(lt,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(at){Dt(i,i.return,at)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Au(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Au(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,ee=e;break}ee=n.return}}function hh(e,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Yn(e,i),s&4&&Ms(5,i);break;case 1:if(Yn(e,i),s&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(d){Dt(i,i.return,d)}else{var o=Ai(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Dt(i,i.return,d)}}s&64&&rh(i),s&512&&ws(i,i.return);break;case 3:if(Yn(e,i),s&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Zf(e,n)}catch(d){Dt(i,i.return,d)}}break;case 27:n===null&&s&4&&uh(i);case 26:case 5:Yn(e,i),n===null&&s&4&&oh(i),s&512&&ws(i,i.return);break;case 12:Yn(e,i);break;case 13:Yn(e,i),s&4&&ph(e,i),s&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=pp.bind(null,i),Op(e,i))));break;case 22:if(s=i.memoizedState!==null||zn,!s){n=n!==null&&n.memoizedState!==null||Yt,o=zn;var c=Yt;zn=s,(Yt=n)&&!c?Gn(e,i,(i.subtreeFlags&8772)!==0):Yn(e,i),zn=o,Yt=c}break;case 30:break;default:Yn(e,i)}}function dh(e){var n=e.alternate;n!==null&&(e.alternate=null,dh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Rt=null,xe=!1;function Mn(e,n,i){for(i=i.child;i!==null;)mh(e,n,i),i=i.sibling}function mh(e,n,i){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Za,i)}catch{}switch(i.tag){case 26:Yt||sn(i,n),Mn(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Yt||sn(i,n);var s=Rt,o=xe;Kn(i.type)&&(Rt=i.stateNode,xe=!1),Mn(e,n,i),Bs(i.stateNode),Rt=s,xe=o;break;case 5:Yt||sn(i,n);case 6:if(s=Rt,o=xe,Rt=null,Mn(e,n,i),Rt=s,xe=o,Rt!==null)if(xe)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(i.stateNode)}catch(c){Dt(i,n,c)}else try{Rt.removeChild(i.stateNode)}catch(c){Dt(i,n,c)}break;case 18:Rt!==null&&(xe?(e=Rt,nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Gs(e)):nd(Rt,i.stateNode));break;case 4:s=Rt,o=xe,Rt=i.stateNode.containerInfo,xe=!0,Mn(e,n,i),Rt=s,xe=o;break;case 0:case 11:case 14:case 15:Yt||kn(2,i,n),Yt||kn(4,i,n),Mn(e,n,i);break;case 1:Yt||(sn(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&lh(i,n,s)),Mn(e,n,i);break;case 21:Mn(e,n,i);break;case 22:Yt=(s=Yt)||i.memoizedState!==null,Mn(e,n,i),Yt=s;break;default:Mn(e,n,i)}}function ph(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gs(e)}catch(i){Dt(n,n.return,i)}}function lp(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fh),n;default:throw Error(l(435,e.tag))}}function Fc(e,n){var i=lp(e);n.forEach(function(s){var o=gp.bind(null,e,s);i.has(s)||(i.add(s),s.then(o,o))})}function $e(e,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var o=i[s],c=e,d=n,v=d;t:for(;v!==null;){switch(v.tag){case 27:if(Kn(v.type)){Rt=v.stateNode,xe=!1;break t}break;case 5:Rt=v.stateNode,xe=!1;break t;case 3:case 4:Rt=v.stateNode.containerInfo,xe=!0;break t}v=v.return}if(Rt===null)throw Error(l(160));mh(c,d,o),Rt=null,xe=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)gh(n,e),n=n.sibling}var Je=null;function gh(e,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$e(n,e),Ee(e),s&4&&(kn(3,e,e.return),Ms(3,e),kn(5,e,e.return));break;case 1:$e(n,e),Ee(e),s&512&&(Yt||i===null||sn(i,i.return)),s&64&&zn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var o=Je;if($e(n,e),Ee(e),s&512&&(Yt||i===null||sn(i,i.return)),s&4){var c=i!==null?i.memoizedState:null;if(s=e.memoizedState,i===null)if(s===null)if(e.stateNode===null){t:{s=e.type,i=e.memoizedProps,o=o.ownerDocument||o;e:switch(s){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Fa]||c[fe]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(s),o.head.insertBefore(c,o.querySelector("head > title"))),oe(c,s,i),c[fe]=e,It(c),s=c;break t;case"link":var d=ud("link","href",o).get(s+(i.href||""));if(d){for(var v=0;v<d.length;v++)if(c=d[v],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){d.splice(v,1);break e}}c=o.createElement(s),oe(c,s,i),o.head.appendChild(c);break;case"meta":if(d=ud("meta","content",o).get(s+(i.content||""))){for(v=0;v<d.length;v++)if(c=d[v],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){d.splice(v,1);break e}}c=o.createElement(s),oe(c,s,i),o.head.appendChild(c);break;default:throw Error(l(468,s))}c[fe]=e,It(c),s=c}e.stateNode=s}else fd(o,e.type,e.stateNode);else e.stateNode=cd(o,s,e.memoizedProps);else c!==s?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,s===null?fd(o,e.type,e.stateNode):cd(o,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Pc(e,e.memoizedProps,i.memoizedProps)}break;case 27:$e(n,e),Ee(e),s&512&&(Yt||i===null||sn(i,i.return)),i!==null&&s&4&&Pc(e,e.memoizedProps,i.memoizedProps);break;case 5:if($e(n,e),Ee(e),s&512&&(Yt||i===null||sn(i,i.return)),e.flags&32){o=e.stateNode;try{Pi(o,"")}catch(j){Dt(e,e.return,j)}}s&4&&e.stateNode!=null&&(o=e.memoizedProps,Pc(e,o,i!==null?i.memoizedProps:o)),s&1024&&(Kc=!0);break;case 6:if($e(n,e),Ee(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,i=e.stateNode;try{i.nodeValue=s}catch(j){Dt(e,e.return,j)}}break;case 3:if(Sl=null,o=Je,Je=bl(n.containerInfo),$e(n,e),Je=o,Ee(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(j){Dt(e,e.return,j)}Kc&&(Kc=!1,yh(e));break;case 4:s=Je,Je=bl(e.stateNode.containerInfo),$e(n,e),Ee(e),Je=s;break;case 12:$e(n,e),Ee(e);break;case 13:$e(n,e),Ee(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(nu=en()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Fc(e,s)));break;case 22:o=e.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,D=zn,O=Yt;if(zn=D||o,Yt=O||T,$e(n,e),Yt=O,zn=D,Ee(e),s&8192)t:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(i===null||T||zn||Yt||zi(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){T=i=n;try{if(c=T.stateNode,o)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=T.stateNode;var L=T.memoizedProps.style,C=L!=null&&L.hasOwnProperty("display")?L.display:null;v.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(j){Dt(T,T.return,j)}}}else if(n.tag===6){if(i===null){T=n;try{T.stateNode.nodeValue=o?"":T.memoizedProps}catch(j){Dt(T,T.return,j)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,Fc(e,i))));break;case 19:$e(n,e),Ee(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Fc(e,s)));break;case 30:break;case 21:break;default:$e(n,e),Ee(e)}}function Ee(e){var n=e.flags;if(n&2){try{for(var i,s=e.return;s!==null;){if(ch(s)){i=s;break}s=s.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var o=i.stateNode,c=Zc(e);rl(e,c,o);break;case 5:var d=i.stateNode;i.flags&32&&(Pi(d,""),i.flags&=-33);var v=Zc(e);rl(e,v,d);break;case 3:case 4:var T=i.stateNode.containerInfo,D=Zc(e);Qc(e,D,T);break;default:throw Error(l(161))}}catch(O){Dt(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hh(e,n.alternate,n),n=n.sibling}function zi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:kn(4,n,n.return),zi(n);break;case 1:sn(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&lh(n,n.return,i),zi(n);break;case 27:Bs(n.stateNode);case 26:case 5:sn(n,n.return),zi(n);break;case 22:n.memoizedState===null&&zi(n);break;case 30:zi(n);break;default:zi(n)}e=e.sibling}}function Gn(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,o=e,c=n,d=c.flags;switch(c.tag){case 0:case 11:case 15:Gn(o,c,i),Ms(4,c);break;case 1:if(Gn(o,c,i),s=c,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){Dt(s,s.return,D)}if(s=c,o=s.updateQueue,o!==null){var v=s.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)Pf(T[o],v)}catch(D){Dt(s,s.return,D)}}i&&d&64&&rh(c),ws(c,c.return);break;case 27:uh(c);case 26:case 5:Gn(o,c,i),i&&s===null&&d&4&&oh(c),ws(c,c.return);break;case 12:Gn(o,c,i);break;case 13:Gn(o,c,i),i&&d&4&&ph(o,c);break;case 22:c.memoizedState===null&&Gn(o,c,i),ws(c,c.return);break;case 30:break;default:Gn(o,c,i)}n=n.sibling}}function Jc(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&fs(i))}function Wc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fs(e))}function rn(e,n,i,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vh(e,n,i,s),n=n.sibling}function vh(e,n,i,s){var o=n.flags;switch(n.tag){case 0:case 11:case 15:rn(e,n,i,s),o&2048&&Ms(9,n);break;case 1:rn(e,n,i,s);break;case 3:rn(e,n,i,s),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fs(e)));break;case 12:if(o&2048){rn(e,n,i,s),e=n.stateNode;try{var c=n.memoizedProps,d=c.id,v=c.onPostCommit;typeof v=="function"&&v(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Dt(n,n.return,T)}}else rn(e,n,i,s);break;case 13:rn(e,n,i,s);break;case 23:break;case 22:c=n.stateNode,d=n.alternate,n.memoizedState!==null?c._visibility&2?rn(e,n,i,s):$s(e,n):c._visibility&2?rn(e,n,i,s):(c._visibility|=2,fa(e,n,i,s,(n.subtreeFlags&10256)!==0)),o&2048&&Jc(d,n);break;case 24:rn(e,n,i,s),o&2048&&Wc(n.alternate,n);break;default:rn(e,n,i,s)}}function fa(e,n,i,s,o){for(o=o&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var c=e,d=n,v=i,T=s,D=d.flags;switch(d.tag){case 0:case 11:case 15:fa(c,d,v,T,o),Ms(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?fa(c,d,v,T,o):$s(c,d):(O._visibility|=2,fa(c,d,v,T,o)),o&&D&2048&&Jc(d.alternate,d);break;case 24:fa(c,d,v,T,o),o&&D&2048&&Wc(d.alternate,d);break;default:fa(c,d,v,T,o)}n=n.sibling}}function $s(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,s=n,o=s.flags;switch(s.tag){case 22:$s(i,s),o&2048&&Jc(s.alternate,s);break;case 24:$s(i,s),o&2048&&Wc(s.alternate,s);break;default:$s(i,s)}n=n.sibling}}var Es=8192;function ha(e){if(e.subtreeFlags&Es)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 26:ha(e),e.flags&Es&&e.memoizedState!==null&&Pp(Je,e.memoizedState,e.memoizedProps);break;case 5:ha(e);break;case 3:case 4:var n=Je;Je=bl(e.stateNode.containerInfo),ha(e),Je=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Es,Es=16777216,ha(e),Es=n):ha(e));break;default:ha(e)}}function xh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ds(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];ee=s,Th(s,e)}xh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sh(e),e=e.sibling}function Sh(e){switch(e.tag){case 0:case 11:case 15:Ds(e),e.flags&2048&&kn(9,e,e.return);break;case 3:Ds(e);break;case 12:Ds(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ll(e)):Ds(e);break;default:Ds(e)}}function ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];ee=s,Th(s,e)}xh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:kn(8,n,n.return),ll(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,ll(n));break;default:ll(n)}e=e.sibling}}function Th(e,n){for(;ee!==null;){var i=ee;switch(i.tag){case 0:case 11:case 15:kn(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:fs(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,ee=s;else t:for(i=e;ee!==null;){s=ee;var o=s.sibling,c=s.return;if(dh(s),s===i){ee=null;break t}if(o!==null){o.return=c,ee=o;break t}ee=c}}}var op={getCacheForType:function(e){var n=he(Kt),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i}},cp=typeof WeakMap=="function"?WeakMap:Map,zt=0,Ct=null,pt=null,yt=0,Mt=0,De=null,qn=!1,da=!1,Ic=!1,wn=0,Lt=0,Xn=0,Mi=0,tu=0,Ye=0,ma=0,Cs=null,Se=null,eu=!1,nu=0,ol=1/0,cl=null,Pn=null,le=0,Zn=null,pa=null,ga=0,iu=0,au=null,Ah=null,js=0,su=null;function Ce(){if((zt&2)!==0&&yt!==0)return yt&-yt;if(R.T!==null){var e=ia;return e!==0?e:hu()}return H0()}function zh(){Ye===0&&(Ye=(yt&536870912)===0||xt?V0():536870912);var e=ke.current;return e!==null&&(e.flags|=32),Ye}function je(e,n,i){(e===Ct&&(Mt===2||Mt===9)||e.cancelPendingCommit!==null)&&(ya(e,0),Qn(e,yt,Ye,!1)),Ka(e,i),((zt&2)===0||e!==Ct)&&(e===Ct&&((zt&2)===0&&(Mi|=i),Lt===4&&Qn(e,yt,Ye,!1)),ln(e))}function Mh(e,n,i){if((zt&6)!==0)throw Error(l(327));var s=!i&&(n&124)===0&&(n&e.expiredLanes)===0||Qa(e,n),o=s?hp(e,n):ou(e,n,!0),c=s;do{if(o===0){da&&!s&&Qn(e,n,0,!1);break}else{if(i=e.current.alternate,c&&!up(i)){o=ou(e,n,!1),c=!1;continue}if(o===2){if(c=n,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;t:{var v=e;o=Cs;var T=v.current.memoizedState.isDehydrated;if(T&&(ya(v,d).flags|=256),d=ou(v,d,!1),d!==2){if(Ic&&!T){v.errorRecoveryDisabledLanes|=c,Mi|=c,o=4;break t}c=Se,Se=o,c!==null&&(Se===null?Se=c:Se.push.apply(Se,c))}o=d}if(c=!1,o!==2)continue}}if(o===1){ya(e,0),Qn(e,n,0,!0);break}t:{switch(s=e,c=o,c){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:Qn(s,n,Ye,!qn);break t;case 2:Se=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(o=nu+300-en(),10<o)){if(Qn(s,n,Ye,!qn),xr(s,0,!0)!==0)break t;s.timeoutHandle=td(wh.bind(null,s,i,Se,cl,eu,n,Ye,Mi,ma,qn,c,2,-0,0),o);break t}wh(s,i,Se,cl,eu,n,Ye,Mi,ma,qn,c,0,-0,0)}}break}while(!0);ln(e)}function wh(e,n,i,s,o,c,d,v,T,D,O,L,C,j){if(e.timeoutHandle=-1,L=n.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(Hs={stylesheets:null,count:0,unsuspend:Xp},bh(n),L=Zp(),L!==null)){e.cancelPendingCommit=L(Oh.bind(null,e,n,c,i,s,o,d,v,T,O,1,C,j)),Qn(e,c,d,!D);return}Oh(e,n,c,i,s,o,d,v,T)}function up(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var o=i[s],c=o.getSnapshot;o=o.value;try{if(!Me(c(),o))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qn(e,n,i,s){n&=~tu,n&=~Mi,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var o=n;0<o;){var c=31-ze(o),d=1<<c;s[c]=-1,o&=~d}i!==0&&_0(e,i,n)}function ul(){return(zt&6)===0?(Rs(0),!1):!0}function ru(){if(pt!==null){if(Mt===0)var e=pt.return;else e=pt,vn=bi=null,Ac(e),ca=null,Ts=0,e=pt;for(;e!==null;)sh(e.alternate,e),e=e.return;pt=null}}function ya(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Ep(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),ru(),Ct=e,pt=i=pn(e.current,null),yt=n,Mt=0,De=null,qn=!1,da=Qa(e,n),Ic=!1,ma=Ye=tu=Mi=Xn=Lt=0,Se=Cs=null,eu=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var o=31-ze(s),c=1<<o;n|=e[o],s&=~c}return wn=n,Rr(),i}function $h(e,n){ht=null,R.H=Jr,n===ds||n===kr?(n=qf(),Mt=3):n===kf?(n=qf(),Mt=4):Mt=n===X2?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,De=n,pt===null&&(Lt=1,nl(e,Le(n,e.current)))}function Eh(){var e=R.H;return R.H=Jr,e===null?Jr:e}function Dh(){var e=R.A;return R.A=op,e}function lu(){Lt=4,qn||(yt&4194048)!==yt&&ke.current!==null||(da=!0),(Xn&134217727)===0&&(Mi&134217727)===0||Ct===null||Qn(Ct,yt,Ye,!1)}function ou(e,n,i){var s=zt;zt|=2;var o=Eh(),c=Dh();(Ct!==e||yt!==n)&&(cl=null,ya(e,n)),n=!1;var d=Lt;t:do try{if(Mt!==0&&pt!==null){var v=pt,T=De;switch(Mt){case 8:ru(),d=6;break t;case 3:case 2:case 9:case 6:ke.current===null&&(n=!0);var D=Mt;if(Mt=0,De=null,va(e,v,T,D),i&&da){d=0;break t}break;default:D=Mt,Mt=0,De=null,va(e,v,T,D)}}fp(),d=Lt;break}catch(O){$h(e,O)}while(!0);return n&&e.shellSuspendCounter++,vn=bi=null,zt=s,R.H=o,R.A=c,pt===null&&(Ct=null,yt=0,Rr()),d}function fp(){for(;pt!==null;)Ch(pt)}function hp(e,n){var i=zt;zt|=2;var s=Eh(),o=Dh();Ct!==e||yt!==n?(cl=null,ol=en()+500,ya(e,n)):da=Qa(e,n);t:do try{if(Mt!==0&&pt!==null){n=pt;var c=De;e:switch(Mt){case 1:Mt=0,De=null,va(e,n,c,1);break;case 2:case 9:if(Yf(c)){Mt=0,De=null,jh(n);break}n=function(){Mt!==2&&Mt!==9||Ct!==e||(Mt=7),ln(e)},c.then(n,n);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Yf(c)?(Mt=0,De=null,jh(n)):(Mt=0,De=null,va(e,n,c,7));break;case 5:var d=null;switch(pt.tag){case 26:d=pt.memoizedState;case 5:case 27:var v=pt;if(!d||hd(d)){Mt=0,De=null;var T=v.sibling;if(T!==null)pt=T;else{var D=v.return;D!==null?(pt=D,fl(D)):pt=null}break e}}Mt=0,De=null,va(e,n,c,5);break;case 6:Mt=0,De=null,va(e,n,c,6);break;case 8:ru(),Lt=6;break t;default:throw Error(l(462))}}dp();break}catch(O){$h(e,O)}while(!0);return vn=bi=null,R.H=s,R.A=o,zt=i,pt!==null?0:(Ct=null,yt=0,Rr(),Lt)}function dp(){for(;pt!==null&&!B5();)Ch(pt)}function Ch(e){var n=ih(e.alternate,e,wn);e.memoizedProps=e.pendingProps,n===null?fl(e):pt=n}function jh(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=J2(i,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=J2(i,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Ac(n);default:sh(i,n),n=pt=Rf(n,wn),n=ih(i,n,wn)}e.memoizedProps=e.pendingProps,n===null?fl(e):pt=n}function va(e,n,i,s){vn=bi=null,Ac(n),ca=null,Ts=0;var o=n.return;try{if(np(e,o,n,i,yt)){Lt=1,nl(e,Le(i,e.current)),pt=null;return}}catch(c){if(o!==null)throw pt=o,c;Lt=1,nl(e,Le(i,e.current)),pt=null;return}n.flags&32768?(xt||s===1?e=!0:da||(yt&536870912)!==0?e=!1:(qn=e=!0,(s===2||s===9||s===3||s===6)&&(s=ke.current,s!==null&&s.tag===13&&(s.flags|=16384))),Rh(n,e)):fl(n)}function fl(e){var n=e;do{if((n.flags&32768)!==0){Rh(n,qn);return}e=n.return;var i=ap(n.alternate,n,wn);if(i!==null){pt=i;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);Lt===0&&(Lt=5)}function Rh(e,n){do{var i=sp(e.alternate,e);if(i!==null){i.flags&=32767,pt=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=i}while(e!==null);Lt=6,pt=null}function Oh(e,n,i,s,o,c,d,v,T){e.cancelPendingCommit=null;do hl();while(le!==0);if((zt&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(c=n.lanes|n.childLanes,c|=Wo,X5(e,i,c,d,v,T),e===Ct&&(pt=Ct=null,yt=0),pa=n,Zn=e,ga=i,iu=c,au=o,Ah=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yp(yr,function(){return Hh(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=R.T,R.T=null,o=Y.p,Y.p=2,d=zt,zt|=4;try{rp(e,n,i)}finally{zt=d,Y.p=o,R.T=s}}le=1,Vh(),Bh(),_h()}}function Vh(){if(le===1){le=0;var e=Zn,n=pa,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var s=Y.p;Y.p=2;var o=zt;zt|=4;try{gh(n,e);var c=xu,d=Tf(e.containerInfo),v=c.focusedElem,T=c.selectionRange;if(d!==v&&v&&v.ownerDocument&&Sf(v.ownerDocument.documentElement,v)){if(T!==null&&Zo(v)){var D=T.start,O=T.end;if(O===void 0&&(O=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(O,v.value.length);else{var L=v.ownerDocument||document,C=L&&L.defaultView||window;if(C.getSelection){var j=C.getSelection(),lt=v.textContent.length,at=Math.min(T.start,lt),Et=T.end===void 0?at:Math.min(T.end,lt);!j.extend&&at>Et&&(d=Et,Et=at,at=d);var w=xf(v,at),M=xf(v,Et);if(w&&M&&(j.rangeCount!==1||j.anchorNode!==w.node||j.anchorOffset!==w.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var E=L.createRange();E.setStart(w.node,w.offset),j.removeAllRanges(),at>Et?(j.addRange(E),j.extend(M.node,M.offset)):(E.setEnd(M.node,M.offset),j.addRange(E))}}}}for(L=[],j=v;j=j.parentNode;)j.nodeType===1&&L.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<L.length;v++){var B=L[v];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}zl=!!bu,xu=bu=null}finally{zt=o,Y.p=s,R.T=i}}e.current=n,le=2}}function Bh(){if(le===2){le=0;var e=Zn,n=pa,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var s=Y.p;Y.p=2;var o=zt;zt|=4;try{hh(e,n.alternate,n)}finally{zt=o,Y.p=s,R.T=i}}le=3}}function _h(){if(le===4||le===3){le=0,_5();var e=Zn,n=pa,i=ga,s=Ah;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?le=5:(le=0,pa=Zn=null,Lh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Pn=null),wo(i),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Za,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=R.T,o=Y.p,Y.p=2,R.T=null;try{for(var c=e.onRecoverableError,d=0;d<s.length;d++){var v=s[d];c(v.value,{componentStack:v.stack})}}finally{R.T=n,Y.p=o}}(ga&3)!==0&&hl(),ln(e),o=e.pendingLanes,(i&4194090)!==0&&(o&42)!==0?e===su?js++:(js=0,su=e):js=0,Rs(0)}}function Lh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fs(n)))}function hl(e){return Vh(),Bh(),_h(),Hh()}function Hh(){if(le!==5)return!1;var e=Zn,n=iu;iu=0;var i=wo(ga),s=R.T,o=Y.p;try{Y.p=32>i?32:i,R.T=null,i=au,au=null;var c=Zn,d=ga;if(le=0,pa=Zn=null,ga=0,(zt&6)!==0)throw Error(l(331));var v=zt;if(zt|=4,Sh(c.current),vh(c,c.current,d,i),zt=v,Rs(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Za,c)}catch{}return!0}finally{Y.p=o,R.T=s,Lh(e,n)}}function Nh(e,n,i){n=Le(i,n),n=Lc(e.stateNode,n,2),e=Ln(e,n,2),e!==null&&(Ka(e,2),ln(e))}function Dt(e,n,i){if(e.tag===3)Nh(e,e,i);else for(;n!==null;){if(n.tag===3){Nh(n,e,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pn===null||!Pn.has(s))){e=Le(i,e),i=G2(2),s=Ln(n,i,2),s!==null&&(q2(i,s,n,e),Ka(s,2),ln(s));break}}n=n.return}}function cu(e,n,i){var s=e.pingCache;if(s===null){s=e.pingCache=new cp;var o=new Set;s.set(n,o)}else o=s.get(n),o===void 0&&(o=new Set,s.set(n,o));o.has(i)||(Ic=!0,o.add(i),e=mp.bind(null,e,n,i),n.then(e,e))}function mp(e,n,i){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ct===e&&(yt&i)===i&&(Lt===4||Lt===3&&(yt&62914560)===yt&&300>en()-nu?(zt&2)===0&&ya(e,0):tu|=i,ma===yt&&(ma=0)),ln(e)}function Uh(e,n){n===0&&(n=B0()),e=Ii(e,n),e!==null&&(Ka(e,n),ln(e))}function pp(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Uh(e,i)}function gp(e,n){var i=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(n),Uh(e,i)}function yp(e,n){return To(e,n)}var dl=null,ba=null,uu=!1,ml=!1,fu=!1,wi=0;function ln(e){e!==ba&&e.next===null&&(ba===null?dl=ba=e:ba=ba.next=e),ml=!0,uu||(uu=!0,bp())}function Rs(e,n){if(!fu&&ml){fu=!0;do for(var i=!1,s=dl;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var c=0;else{var d=s.suspendedLanes,v=s.pingedLanes;c=(1<<31-ze(42|e)+1)-1,c&=o&~(d&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,qh(s,c))}else c=yt,c=xr(s,s===Ct?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Qa(s,c)||(i=!0,qh(s,c));s=s.next}while(i);fu=!1}}function vp(){kh()}function kh(){ml=uu=!1;var e=0;wi!==0&&($p()&&(e=wi),wi=0);for(var n=en(),i=null,s=dl;s!==null;){var o=s.next,c=Yh(s,n);c===0?(s.next=null,i===null?dl=o:i.next=o,o===null&&(ba=i)):(i=s,(e!==0||(c&3)!==0)&&(ml=!0)),s=o}Rs(e)}function Yh(e,n){for(var i=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-ze(c),v=1<<d,T=o[d];T===-1?((v&i)===0||(v&s)!==0)&&(o[d]=q5(v,n)):T<=n&&(e.expiredLanes|=v),c&=~v}if(n=Ct,i=yt,i=xr(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,i===0||e===n&&(Mt===2||Mt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ao(s),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Qa(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(s!==null&&Ao(s),wo(i)){case 2:case 8:i=R0;break;case 32:i=yr;break;case 268435456:i=O0;break;default:i=yr}return s=Gh.bind(null,e),i=To(i,s),e.callbackPriority=n,e.callbackNode=i,n}return s!==null&&s!==null&&Ao(s),e.callbackPriority=2,e.callbackNode=null,2}function Gh(e,n){if(le!==0&&le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(hl()&&e.callbackNode!==i)return null;var s=yt;return s=xr(e,e===Ct?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Mh(e,s,n),Yh(e,en()),e.callbackNode!=null&&e.callbackNode===i?Gh.bind(null,e):null)}function qh(e,n){if(hl())return null;Mh(e,n,!0)}function bp(){Dp(function(){(zt&6)!==0?To(j0,vp):kh()})}function hu(){return wi===0&&(wi=V0()),wi}function Xh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mr(""+e)}function Ph(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function xp(e,n,i,s,o){if(n==="submit"&&i&&i.stateNode===o){var c=Xh((o[ye]||null).action),d=s.submitter;d&&(n=(n=d[ye]||null)?Xh(n.formAction):d.getAttribute("formAction"),n!==null&&(c=n,d=null));var v=new Dr("action","action",null,s,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(wi!==0){var T=d?Ph(o,d):new FormData(o);Rc(i,{pending:!0,data:T,method:o.method,action:c},null,T)}}else typeof c=="function"&&(v.preventDefault(),T=d?Ph(o,d):new FormData(o),Rc(i,{pending:!0,data:T,method:o.method,action:c},c,T))},currentTarget:o}]})}}for(var du=0;du<Jo.length;du++){var mu=Jo[du],Sp=mu.toLowerCase(),Tp=mu[0].toUpperCase()+mu.slice(1);Fe(Sp,"on"+Tp)}Fe(Mf,"onAnimationEnd"),Fe(wf,"onAnimationIteration"),Fe($f,"onAnimationStart"),Fe("dblclick","onDoubleClick"),Fe("focusin","onFocus"),Fe("focusout","onBlur"),Fe(N6,"onTransitionRun"),Fe(U6,"onTransitionStart"),Fe(k6,"onTransitionCancel"),Fe(Ef,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ap=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Os));function Zh(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],o=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var d=s.length-1;0<=d;d--){var v=s[d],T=v.instance,D=v.currentTarget;if(v=v.listener,T!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=D;try{c(o)}catch(O){el(O)}o.currentTarget=null,c=T}else for(d=0;d<s.length;d++){if(v=s[d],T=v.instance,D=v.currentTarget,v=v.listener,T!==c&&o.isPropagationStopped())break t;c=v,o.currentTarget=D;try{c(o)}catch(O){el(O)}o.currentTarget=null,c=T}}}}function gt(e,n){var i=n[$o];i===void 0&&(i=n[$o]=new Set);var s=e+"__bubble";i.has(s)||(Qh(n,e,2,!1),i.add(s))}function pu(e,n,i){var s=0;n&&(s|=4),Qh(i,e,s,n)}var pl="_reactListening"+Math.random().toString(36).slice(2);function gu(e){if(!e[pl]){e[pl]=!0,U0.forEach(function(i){i!=="selectionchange"&&(Ap.has(i)||pu(i,!1,e),pu(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pl]||(n[pl]=!0,pu("selectionchange",!1,n))}}function Qh(e,n,i,s){switch(vd(n)){case 2:var o=Fp;break;case 8:o=Jp;break;default:o=Cu}i=o.bind(null,n,i,e),o=void 0,!Ho||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(n,i,{capture:!0,passive:o}):e.addEventListener(n,i,!0):o!==void 0?e.addEventListener(n,i,{passive:o}):e.addEventListener(n,i,!1)}function yu(e,n,i,s,o){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var v=s.stateNode.containerInfo;if(v===o)break;if(d===4)for(d=s.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;v!==null;){if(d=Ui(v),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){s=c=d;continue t}v=v.parentNode}}s=s.return}tf(function(){var D=c,O=_o(i),L=[];t:{var C=Df.get(e);if(C!==void 0){var j=Dr,lt=e;switch(e){case"keypress":if($r(i)===0)break t;case"keydown":case"keyup":j=y6;break;case"focusin":lt="focus",j=Yo;break;case"focusout":lt="blur",j=Yo;break;case"beforeblur":case"afterblur":j=Yo;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=s6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=x6;break;case Mf:case wf:case $f:j=o6;break;case Ef:j=T6;break;case"scroll":case"scrollend":j=i6;break;case"wheel":j=z6;break;case"copy":case"cut":case"paste":j=u6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=rf;break;case"toggle":case"beforetoggle":j=w6}var at=(n&4)!==0,Et=!at&&(e==="scroll"||e==="scrollend"),w=at?C!==null?C+"Capture":null:C;at=[];for(var M=D,E;M!==null;){var B=M;if(E=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||E===null||w===null||(B=Wa(M,w),B!=null&&at.push(Vs(M,B,E))),Et)break;M=M.return}0<at.length&&(C=new j(C,lt,null,i,O),L.push({event:C,listeners:at}))}}if((n&7)===0){t:{if(C=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",C&&i!==Bo&&(lt=i.relatedTarget||i.fromElement)&&(Ui(lt)||lt[Ni]))break t;if((j||C)&&(C=O.window===O?O:(C=O.ownerDocument)?C.defaultView||C.parentWindow:window,j?(lt=i.relatedTarget||i.toElement,j=D,lt=lt?Ui(lt):null,lt!==null&&(Et=h(lt),at=lt.tag,lt!==Et||at!==5&&at!==27&&at!==6)&&(lt=null)):(j=null,lt=D),j!==lt)){if(at=af,B="onMouseLeave",w="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(at=rf,B="onPointerLeave",w="onPointerEnter",M="pointer"),Et=j==null?C:Ja(j),E=lt==null?C:Ja(lt),C=new at(B,M+"leave",j,i,O),C.target=Et,C.relatedTarget=E,B=null,Ui(O)===D&&(at=new at(w,M+"enter",lt,i,O),at.target=E,at.relatedTarget=Et,B=at),Et=B,j&&lt)e:{for(at=j,w=lt,M=0,E=at;E;E=xa(E))M++;for(E=0,B=w;B;B=xa(B))E++;for(;0<M-E;)at=xa(at),M--;for(;0<E-M;)w=xa(w),E--;for(;M--;){if(at===w||w!==null&&at===w.alternate)break e;at=xa(at),w=xa(w)}at=null}else at=null;j!==null&&Kh(L,C,j,at,!1),lt!==null&&Et!==null&&Kh(L,Et,lt,at,!0)}}t:{if(C=D?Ja(D):window,j=C.nodeName&&C.nodeName.toLowerCase(),j==="select"||j==="input"&&C.type==="file")var J=mf;else if(hf(C))if(pf)J=_6;else{J=V6;var dt=O6}else j=C.nodeName,!j||j.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Vo(D.elementType)&&(J=mf):J=B6;if(J&&(J=J(e,D))){df(L,J,i,O);break t}dt&&dt(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Oo(C,"number",C.value)}switch(dt=D?Ja(D):window,e){case"focusin":(hf(dt)||dt.contentEditable==="true")&&(Fi=dt,Qo=D,rs=null);break;case"focusout":rs=Qo=Fi=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,Af(L,i,O);break;case"selectionchange":if(H6)break;case"keydown":case"keyup":Af(L,i,O)}var et;if(qo)t:{switch(e){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Ki?uf(e,i)&&(rt="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(rt="onCompositionStart");rt&&(lf&&i.locale!=="ko"&&(Ki||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ki&&(et=ef()):(On=O,No="value"in On?On.value:On.textContent,Ki=!0)),dt=gl(D,rt),0<dt.length&&(rt=new sf(rt,e,null,i,O),L.push({event:rt,listeners:dt}),et?rt.data=et:(et=ff(i),et!==null&&(rt.data=et)))),(et=E6?D6(e,i):C6(e,i))&&(rt=gl(D,"onBeforeInput"),0<rt.length&&(dt=new sf("onBeforeInput","beforeinput",null,i,O),L.push({event:dt,listeners:rt}),dt.data=et)),xp(L,e,D,i,O)}Zh(L,n)})}function Vs(e,n,i){return{instance:e,listener:n,currentTarget:i}}function gl(e,n){for(var i=n+"Capture",s=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Wa(e,i),o!=null&&s.unshift(Vs(e,o,c)),o=Wa(e,n),o!=null&&s.push(Vs(e,o,c))),e.tag===3)return s;e=e.return}return[]}function xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kh(e,n,i,s,o){for(var c=n._reactName,d=[];i!==null&&i!==s;){var v=i,T=v.alternate,D=v.stateNode;if(v=v.tag,T!==null&&T===s)break;v!==5&&v!==26&&v!==27||D===null||(T=D,o?(D=Wa(i,c),D!=null&&d.unshift(Vs(i,D,T))):o||(D=Wa(i,c),D!=null&&d.push(Vs(i,D,T)))),i=i.return}d.length!==0&&e.push({event:n,listeners:d})}var zp=/\r\n?/g,Mp=/\u0000|\uFFFD/g;function Fh(e){return(typeof e=="string"?e:""+e).replace(zp,`
`).replace(Mp,"")}function Jh(e,n){return n=Fh(n),Fh(e)===n}function yl(){}function $t(e,n,i,s,o,c){switch(i){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pi(e,""+s);break;case"className":Tr(e,"class",s);break;case"tabIndex":Tr(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(e,i,s);break;case"style":W0(e,s,c);break;case"data":if(n!=="object"){Tr(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Mr(""+s),e.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&$t(e,n,"name",o.name,o,null),$t(e,n,"formEncType",o.formEncType,o,null),$t(e,n,"formMethod",o.formMethod,o,null),$t(e,n,"formTarget",o.formTarget,o,null)):($t(e,n,"encType",o.encType,o,null),$t(e,n,"method",o.method,o,null),$t(e,n,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Mr(""+s),e.setAttribute(i,s);break;case"onClick":s!=null&&(e.onclick=yl);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}i=Mr(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""+s):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":s===!0?e.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,s):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(i,s):e.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(i):e.setAttribute(i,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),Sr(e,"popover",s);break;case"xlinkActuate":dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":dn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":dn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":dn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":dn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Sr(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=e6.get(i)||i,Sr(e,i,s))}}function vu(e,n,i,s,o,c){switch(i){case"style":W0(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"children":typeof s=="string"?Pi(e,s):(typeof s=="number"||typeof s=="bigint")&&Pi(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!k0.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),n=i.slice(2,o?i.length-7:void 0),c=e[ye]||null,c=c!=null?c[i]:null,typeof c=="function"&&e.removeEventListener(n,c,o),typeof s=="function")){typeof c!="function"&&c!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,s,o);break t}i in e?e[i]=s:s===!0?e.setAttribute(i,""):Sr(e,i,s)}}}function oe(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,o=!1,c;for(c in i)if(i.hasOwnProperty(c)){var d=i[c];if(d!=null)switch(c){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:$t(e,n,c,d,i,null)}}o&&$t(e,n,"srcSet",i.srcSet,i,null),s&&$t(e,n,"src",i.src,i,null);return;case"input":gt("invalid",e);var v=c=d=o=null,T=null,D=null;for(s in i)if(i.hasOwnProperty(s)){var O=i[s];if(O!=null)switch(s){case"name":o=O;break;case"type":d=O;break;case"checked":T=O;break;case"defaultChecked":D=O;break;case"value":c=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,n));break;default:$t(e,n,s,O,i,null)}}Q0(e,c,v,T,D,d,o,!1),Ar(e);return;case"select":gt("invalid",e),s=d=c=null;for(o in i)if(i.hasOwnProperty(o)&&(v=i[o],v!=null))switch(o){case"value":c=v;break;case"defaultValue":d=v;break;case"multiple":s=v;default:$t(e,n,o,v,i,null)}n=c,i=d,e.multiple=!!s,n!=null?Xi(e,!!s,n,!1):i!=null&&Xi(e,!!s,i,!0);return;case"textarea":gt("invalid",e),c=o=s=null;for(d in i)if(i.hasOwnProperty(d)&&(v=i[d],v!=null))switch(d){case"value":s=v;break;case"defaultValue":o=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(l(91));break;default:$t(e,n,d,v,i,null)}F0(e,s,o,c),Ar(e);return;case"option":for(T in i)if(i.hasOwnProperty(T)&&(s=i[T],s!=null))switch(T){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:$t(e,n,T,s,i,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<Os.length;s++)gt(Os[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in i)if(i.hasOwnProperty(D)&&(s=i[D],s!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:$t(e,n,D,s,i,null)}return;default:if(Vo(n)){for(O in i)i.hasOwnProperty(O)&&(s=i[O],s!==void 0&&vu(e,n,O,s,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(s=i[v],s!=null&&$t(e,n,v,s,i,null))}function wp(e,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,d=null,v=null,T=null,D=null,O=null;for(j in i){var L=i[j];if(i.hasOwnProperty(j)&&L!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":T=L;default:s.hasOwnProperty(j)||$t(e,n,j,null,s,L)}}for(var C in s){var j=s[C];if(L=i[C],s.hasOwnProperty(C)&&(j!=null||L!=null))switch(C){case"type":c=j;break;case"name":o=j;break;case"checked":D=j;break;case"defaultChecked":O=j;break;case"value":d=j;break;case"defaultValue":v=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(137,n));break;default:j!==L&&$t(e,n,C,j,s,L)}}Ro(e,d,v,T,D,O,c,o);return;case"select":j=d=v=C=null;for(c in i)if(T=i[c],i.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":j=T;default:s.hasOwnProperty(c)||$t(e,n,c,null,s,T)}for(o in s)if(c=s[o],T=i[o],s.hasOwnProperty(o)&&(c!=null||T!=null))switch(o){case"value":C=c;break;case"defaultValue":v=c;break;case"multiple":d=c;default:c!==T&&$t(e,n,o,c,s,T)}n=v,i=d,s=j,C!=null?Xi(e,!!i,C,!1):!!s!=!!i&&(n!=null?Xi(e,!!i,n,!0):Xi(e,!!i,i?[]:"",!1));return;case"textarea":j=C=null;for(v in i)if(o=i[v],i.hasOwnProperty(v)&&o!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:$t(e,n,v,null,s,o)}for(d in s)if(o=s[d],c=i[d],s.hasOwnProperty(d)&&(o!=null||c!=null))switch(d){case"value":C=o;break;case"defaultValue":j=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&$t(e,n,d,o,s,c)}K0(e,C,j);return;case"option":for(var lt in i)if(C=i[lt],i.hasOwnProperty(lt)&&C!=null&&!s.hasOwnProperty(lt))switch(lt){case"selected":e.selected=!1;break;default:$t(e,n,lt,null,s,C)}for(T in s)if(C=s[T],j=i[T],s.hasOwnProperty(T)&&C!==j&&(C!=null||j!=null))switch(T){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:$t(e,n,T,C,s,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in i)C=i[at],i.hasOwnProperty(at)&&C!=null&&!s.hasOwnProperty(at)&&$t(e,n,at,null,s,C);for(D in s)if(C=s[D],j=i[D],s.hasOwnProperty(D)&&C!==j&&(C!=null||j!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(l(137,n));break;default:$t(e,n,D,C,s,j)}return;default:if(Vo(n)){for(var Et in i)C=i[Et],i.hasOwnProperty(Et)&&C!==void 0&&!s.hasOwnProperty(Et)&&vu(e,n,Et,void 0,s,C);for(O in s)C=s[O],j=i[O],!s.hasOwnProperty(O)||C===j||C===void 0&&j===void 0||vu(e,n,O,C,s,j);return}}for(var w in i)C=i[w],i.hasOwnProperty(w)&&C!=null&&!s.hasOwnProperty(w)&&$t(e,n,w,null,s,C);for(L in s)C=s[L],j=i[L],!s.hasOwnProperty(L)||C===j||C==null&&j==null||$t(e,n,L,C,s,j)}var bu=null,xu=null;function vl(e){return e.nodeType===9?e:e.ownerDocument}function Wh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ih(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Su(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tu=null;function $p(){var e=window.event;return e&&e.type==="popstate"?e===Tu?!1:(Tu=e,!0):(Tu=null,!1)}var td=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,Dp=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(Cp)}:td;function Cp(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function nd(e,n){var i=n,s=0,o=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(0<s&&8>s){i=s;var d=e.ownerDocument;if(i&1&&Bs(d.documentElement),i&2&&Bs(d.body),i&4)for(i=d.head,Bs(i),d=i.firstChild;d;){var v=d.nextSibling,T=d.nodeName;d[Fa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||i.removeChild(d),d=v}}if(o===0){e.removeChild(c),Gs(n);return}o--}else i==="$"||i==="$?"||i==="$!"?o++:s=i.charCodeAt(0)-48;else s=0;i=c}while(i);Gs(n)}function Au(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Au(i),Eo(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function jp(e,n,i,s){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=We(e.nextSibling),e===null)break}return null}function Rp(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=We(e.nextSibling),e===null))return null;return e}function zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Op(e,n){var i=e.ownerDocument;if(e.data!=="$?"||i.readyState==="complete")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function We(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Mu=null;function id(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}function ad(e,n,i){switch(n=vl(i),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Bs(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Eo(e)}var Ge=new Map,sd=new Set;function bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=Y.d;Y.d={f:Vp,r:Bp,D:_p,C:Lp,L:Hp,m:Np,X:kp,S:Up,M:Yp};function Vp(){var e=$n.f(),n=ul();return e||n}function Bp(e){var n=ki(e);n!==null&&n.tag===5&&n.type==="form"?M2(n):$n.r(e)}var Sa=typeof document>"u"?null:document;function rd(e,n,i){var s=Sa;if(s&&typeof n=="string"&&n){var o=_e(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),sd.has(o)||(sd.add(o),e={rel:e,crossOrigin:i,href:n},s.querySelector(o)===null&&(n=s.createElement("link"),oe(n,"link",e),It(n),s.head.appendChild(n)))}}function _p(e){$n.D(e),rd("dns-prefetch",e,null)}function Lp(e,n){$n.C(e,n),rd("preconnect",e,n)}function Hp(e,n,i){$n.L(e,n,i);var s=Sa;if(s&&e&&n){var o='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+_e(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+_e(i.imageSizes)+'"]')):o+='[href="'+_e(e)+'"]';var c=o;switch(n){case"style":c=Ta(e);break;case"script":c=Aa(e)}Ge.has(c)||(e=y({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Ge.set(c,e),s.querySelector(o)!==null||n==="style"&&s.querySelector(_s(c))||n==="script"&&s.querySelector(Ls(c))||(n=s.createElement("link"),oe(n,"link",e),It(n),s.head.appendChild(n)))}}function Np(e,n){$n.m(e,n);var i=Sa;if(i&&e){var s=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+_e(s)+'"][href="'+_e(e)+'"]',c=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Aa(e)}if(!Ge.has(c)&&(e=y({rel:"modulepreload",href:e},n),Ge.set(c,e),i.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ls(c)))return}s=i.createElement("link"),oe(s,"link",e),It(s),i.head.appendChild(s)}}}function Up(e,n,i){$n.S(e,n,i);var s=Sa;if(s&&e){var o=Yi(s).hoistableStyles,c=Ta(e);n=n||"default";var d=o.get(c);if(!d){var v={loading:0,preload:null};if(d=s.querySelector(_s(c)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Ge.get(c))&&wu(e,i);var T=d=s.createElement("link");It(T),oe(T,"link",e),T._p=new Promise(function(D,O){T.onload=D,T.onerror=O}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,xl(d,n,s)}d={type:"stylesheet",instance:d,count:1,state:v},o.set(c,d)}}}function kp(e,n){$n.X(e,n);var i=Sa;if(i&&e){var s=Yi(i).hoistableScripts,o=Aa(e),c=s.get(o);c||(c=i.querySelector(Ls(o)),c||(e=y({src:e,async:!0},n),(n=Ge.get(o))&&$u(e,n),c=i.createElement("script"),It(c),oe(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function Yp(e,n){$n.M(e,n);var i=Sa;if(i&&e){var s=Yi(i).hoistableScripts,o=Aa(e),c=s.get(o);c||(c=i.querySelector(Ls(o)),c||(e=y({src:e,async:!0,type:"module"},n),(n=Ge.get(o))&&$u(e,n),c=i.createElement("script"),It(c),oe(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function ld(e,n,i,s){var o=(o=st.current)?bl(o):null;if(!o)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Ta(i.href),i=Yi(o).hoistableStyles,s=i.get(n),s||(s={type:"style",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ta(i.href);var c=Yi(o).hoistableStyles,d=c.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=o.querySelector(_s(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Ge.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ge.set(e,i),c||Gp(o,e,i,d.state))),n&&s===null)throw Error(l(528,""));return d}if(n&&s!==null)throw Error(l(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Aa(i),i=Yi(o).hoistableScripts,s=i.get(n),s||(s={type:"script",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ta(e){return'href="'+_e(e)+'"'}function _s(e){return'link[rel="stylesheet"]['+e+"]"}function od(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Gp(e,n,i,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),oe(n,"link",i),It(n),e.head.appendChild(n))}function Aa(e){return'[src="'+_e(e)+'"]'}function Ls(e){return"script[async]"+e}function cd(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_e(i.href)+'"]');if(s)return n.instance=s,It(s),s;var o=y({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),It(s),oe(s,"style",o),xl(s,i.precedence,e),n.instance=s;case"stylesheet":o=Ta(i.href);var c=e.querySelector(_s(o));if(c)return n.state.loading|=4,n.instance=c,It(c),c;s=od(i),(o=Ge.get(o))&&wu(s,o),c=(e.ownerDocument||e).createElement("link"),It(c);var d=c;return d._p=new Promise(function(v,T){d.onload=v,d.onerror=T}),oe(c,"link",s),n.state.loading|=4,xl(c,i.precedence,e),n.instance=c;case"script":return c=Aa(i.src),(o=e.querySelector(Ls(c)))?(n.instance=o,It(o),o):(s=i,(o=Ge.get(c))&&(s=y({},i),$u(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),It(o),oe(o,"link",s),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,xl(s,i.precedence,e));return n.instance}function xl(e,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,c=o,d=0;d<s.length;d++){var v=s[d];if(v.dataset.precedence===n)c=v;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function wu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $u(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Sl=null;function ud(e,n,i){if(Sl===null){var s=new Map,o=Sl=new Map;o.set(i,s)}else o=Sl,s=o.get(i),s||(s=new Map,o.set(i,s));if(s.has(e))return s;for(s.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var c=i[o];if(!(c[Fa]||c[fe]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(n)||"";d=e+d;var v=s.get(d);v?v.push(c):s.set(d,[c])}}return s}function fd(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function qp(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Hs=null;function Xp(){}function Pp(e,n,i){if(Hs===null)throw Error(l(475));var s=Hs;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Ta(i.href),c=e.querySelector(_s(o));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Tl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=c,It(c);return}c=e.ownerDocument||e,i=od(i),(o=Ge.get(o))&&wu(i,o),c=c.createElement("link"),It(c);var d=c;d._p=new Promise(function(v,T){d.onload=v,d.onerror=T}),oe(c,"link",i),n.instance=c}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Tl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Zp(){if(Hs===null)throw Error(l(475));var e=Hs;return e.stylesheets&&e.count===0&&Eu(e,e.stylesheets),0<e.count?function(n){var i=setTimeout(function(){if(e.stylesheets&&Eu(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i)}}:null}function Tl(){if(this.count--,this.count===0){if(this.stylesheets)Eu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Al=null;function Eu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Al=new Map,n.forEach(Qp,e),Al=null,Tl.call(e))}function Qp(e,n){if(!(n.state.loading&4)){var i=Al.get(e);if(i)var s=i.get(null);else{i=new Map,Al.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var d=o[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(i.set(d.dataset.precedence,d),s=d)}s&&i.set(null,s)}o=n.instance,d=o.getAttribute("data-precedence"),c=i.get(d)||s,c===s&&i.set(null,o),i.set(d,o),this.count++,s=Tl.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var Ns={$$typeof:_,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Kp(e,n,i,s,o,c,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function dd(e,n,i,s,o,c,d,v,T,D,O,L){return e=new Kp(e,n,i,d,v,T,D,L),n=1,c===!0&&(n|=24),c=we(3,null,null,n),e.current=c,c.stateNode=e,n=cc(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:i,cache:n},dc(c),e}function md(e){return e?(e=ta,e):ta}function pd(e,n,i,s,o,c){o=md(o),s.context===null?s.context=o:s.pendingContext=o,s=_n(n),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Ln(e,s,n),i!==null&&(je(i,e,n),ps(i,e,n))}function gd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Du(e,n){gd(e,n),(e=e.alternate)&&gd(e,n)}function yd(e){if(e.tag===13){var n=Ii(e,67108864);n!==null&&je(n,e,67108864),Du(e,67108864)}}var zl=!0;function Fp(e,n,i,s){var o=R.T;R.T=null;var c=Y.p;try{Y.p=2,Cu(e,n,i,s)}finally{Y.p=c,R.T=o}}function Jp(e,n,i,s){var o=R.T;R.T=null;var c=Y.p;try{Y.p=8,Cu(e,n,i,s)}finally{Y.p=c,R.T=o}}function Cu(e,n,i,s){if(zl){var o=ju(s);if(o===null)yu(e,n,s,Ml,i),bd(e,s);else if(Ip(o,e,n,i,s))s.stopPropagation();else if(bd(e,s),n&4&&-1<Wp.indexOf(e)){for(;o!==null;){var c=ki(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=ci(c.pendingLanes);if(d!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var T=1<<31-ze(d);v.entanglements[1]|=T,d&=~T}ln(c),(zt&6)===0&&(ol=en()+500,Rs(0))}}break;case 13:v=Ii(c,2),v!==null&&je(v,c,2),ul(),Du(c,2)}if(c=ju(s),c===null&&yu(e,n,s,Ml,i),c===o)break;o=c}o!==null&&s.stopPropagation()}else yu(e,n,s,null,i)}}function ju(e){return e=_o(e),Ru(e)}var Ml=null;function Ru(e){if(Ml=null,e=Ui(e),e!==null){var n=h(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=f(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ml=e,null}function vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(L5()){case j0:return 2;case R0:return 8;case yr:case H5:return 32;case O0:return 268435456;default:return 32}default:return 32}}var Ou=!1,Fn=null,Jn=null,Wn=null,Us=new Map,ks=new Map,In=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bd(e,n){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Us.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(n.pointerId)}}function Ys(e,n,i,s,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:c,targetContainers:[o]},n!==null&&(n=ki(n),n!==null&&yd(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Ip(e,n,i,s,o){switch(n){case"focusin":return Fn=Ys(Fn,e,n,i,s,o),!0;case"dragenter":return Jn=Ys(Jn,e,n,i,s,o),!0;case"mouseover":return Wn=Ys(Wn,e,n,i,s,o),!0;case"pointerover":var c=o.pointerId;return Us.set(c,Ys(Us.get(c)||null,e,n,i,s,o)),!0;case"gotpointercapture":return c=o.pointerId,ks.set(c,Ys(ks.get(c)||null,e,n,i,s,o)),!0}return!1}function xd(e){var n=Ui(e.target);if(n!==null){var i=h(n);if(i!==null){if(n=i.tag,n===13){if(n=f(i),n!==null){e.blockedOn=n,P5(e.priority,function(){if(i.tag===13){var s=Ce();s=Mo(s);var o=Ii(i,s);o!==null&&je(o,i,s),Du(i,s)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ju(e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Bo=s,i.target.dispatchEvent(s),Bo=null}else return n=ki(i),n!==null&&yd(n),e.blockedOn=i,!1;n.shift()}return!0}function Sd(e,n,i){wl(e)&&i.delete(n)}function tg(){Ou=!1,Fn!==null&&wl(Fn)&&(Fn=null),Jn!==null&&wl(Jn)&&(Jn=null),Wn!==null&&wl(Wn)&&(Wn=null),Us.forEach(Sd),ks.forEach(Sd)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,Ou||(Ou=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,tg)))}var El=null;function Td(e){El!==e&&(El=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){El===e&&(El=null);for(var n=0;n<e.length;n+=3){var i=e[n],s=e[n+1],o=e[n+2];if(typeof s!="function"){if(Ru(s||i)===null)continue;break}var c=ki(i);c!==null&&(e.splice(n,3),n-=3,Rc(c,{pending:!0,data:o,method:i.method,action:s},s,o))}}))}function Gs(e){function n(T){return $l(T,e)}Fn!==null&&$l(Fn,e),Jn!==null&&$l(Jn,e),Wn!==null&&$l(Wn,e),Us.forEach(n),ks.forEach(n);for(var i=0;i<In.length;i++){var s=In[i];s.blockedOn===e&&(s.blockedOn=null)}for(;0<In.length&&(i=In[0],i.blockedOn===null);)xd(i),i.blockedOn===null&&In.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var o=i[s],c=i[s+1],d=o[ye]||null;if(typeof c=="function")d||Td(i);else if(d){var v=null;if(c&&c.hasAttribute("formAction")){if(o=c,d=c[ye]||null)v=d.formAction;else if(Ru(o)!==null)continue}else v=d.action;typeof v=="function"?i[s+1]=v:(i.splice(s,3),s-=3),Td(i)}}}function Vu(e){this._internalRoot=e}Dl.prototype.render=Vu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var i=n.current,s=Ce();pd(i,s,e,n,null,null)},Dl.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pd(e.current,2,null,e,null,null),ul(),n[Ni]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=H0();e={blockedOn:null,target:e,priority:n};for(var i=0;i<In.length&&n!==0&&n<In[i].priority;i++);In.splice(i,0,e),i===0&&xd(e)}};var Ad=a.version;if(Ad!=="19.1.0")throw Error(l(527,Ad,"19.1.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var eg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Za=Cl.inject(eg),Ae=Cl}catch{}}return Xs.createRoot=function(e,n){if(!u(e))throw Error(l(299));var i=!1,s="",o=N2,c=U2,d=k2,v=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks)),n=dd(e,1,!1,null,null,i,s,o,c,d,v,null),e[Ni]=n.current,gu(e),new Vu(n)},Xs.hydrateRoot=function(e,n,i){if(!u(e))throw Error(l(299));var s=!1,o="",c=N2,d=U2,v=k2,T=null,D=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks),i.formState!==void 0&&(D=i.formState)),n=dd(e,1,!0,n,i??null,s,o,c,d,v,T,D),n.context=md(null),i=n.current,s=Ce(),s=Mo(s),o=_n(s),o.callback=null,Ln(i,o,s),i=s,n.current.lanes=i,Ka(n,i),ln(n),e[Ni]=n.current,gu(e),new Dl(n)},Xs.version="19.1.0",Xs}var Od;function hg(){if(Od)return Lu.exports;Od=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Lu.exports=fg(),Lu.exports}var dg=hg(),se=function(){return se=Object.assign||function(a){for(var r,l=1,u=arguments.length;l<u;l++){r=arguments[l];for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&(a[h]=r[h])}return a},se.apply(this,arguments)};function _a(t,a,r){if(r||arguments.length===2)for(var l=0,u=a.length,h;l<u;l++)(h||!(l in a))&&(h||(h=Array.prototype.slice.call(a,0,l)),h[l]=a[l]);return t.concat(h||Array.prototype.slice.call(a))}var jt="-ms-",Fs="-moz-",At="-webkit-",w4="comm",uo="rule",P1="decl",mg="@import",$4="@keyframes",pg="@layer",E4=Math.abs,Z1=String.fromCharCode,m1=Object.assign;function gg(t,a){return ie(t,0)^45?(((a<<2^ie(t,0))<<2^ie(t,1))<<2^ie(t,2))<<2^ie(t,3):0}function D4(t){return t.trim()}function En(t,a){return(t=a.exec(t))?t[0]:t}function ft(t,a,r){return t.replace(a,r)}function Ul(t,a,r){return t.indexOf(a,r)}function ie(t,a){return t.charCodeAt(a)|0}function La(t,a,r){return t.slice(a,r)}function on(t){return t.length}function C4(t){return t.length}function Qs(t,a){return a.push(t),t}function yg(t,a){return t.map(a).join("")}function Vd(t,a){return t.filter(function(r){return!En(r,a)})}var fo=1,Ha=1,j4=0,Qe=0,Zt=0,Ga="";function ho(t,a,r,l,u,h,f,m){return{value:t,root:a,parent:r,type:l,props:u,children:h,line:fo,column:Ha,length:f,return:"",siblings:m}}function ei(t,a){return m1(ho("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function za(t){for(;t.root;)t=ei(t.root,{children:[t]});Qs(t,t.siblings)}function vg(){return Zt}function bg(){return Zt=Qe>0?ie(Ga,--Qe):0,Ha--,Zt===10&&(Ha=1,fo--),Zt}function tn(){return Zt=Qe<j4?ie(Ga,Qe++):0,Ha++,Zt===10&&(Ha=1,fo++),Zt}function Vi(){return ie(Ga,Qe)}function kl(){return Qe}function mo(t,a){return La(Ga,t,a)}function p1(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xg(t){return fo=Ha=1,j4=on(Ga=t),Qe=0,[]}function Sg(t){return Ga="",t}function ku(t){return D4(mo(Qe-1,g1(t===91?t+2:t===40?t+1:t)))}function Tg(t){for(;(Zt=Vi())&&Zt<33;)tn();return p1(t)>2||p1(Zt)>3?"":" "}function Ag(t,a){for(;--a&&tn()&&!(Zt<48||Zt>102||Zt>57&&Zt<65||Zt>70&&Zt<97););return mo(t,kl()+(a<6&&Vi()==32&&tn()==32))}function g1(t){for(;tn();)switch(Zt){case t:return Qe;case 34:case 39:t!==34&&t!==39&&g1(Zt);break;case 40:t===41&&g1(t);break;case 92:tn();break}return Qe}function zg(t,a){for(;tn()&&t+Zt!==57;)if(t+Zt===84&&Vi()===47)break;return"/*"+mo(a,Qe-1)+"*"+Z1(t===47?t:tn())}function Mg(t){for(;!p1(Vi());)tn();return mo(t,Qe)}function wg(t){return Sg(Yl("",null,null,null,[""],t=xg(t),0,[0],t))}function Yl(t,a,r,l,u,h,f,m,p){for(var g=0,y=0,x=f,S=0,$=0,V=0,k=1,G=1,U=1,q=0,_="",K=u,N=h,F=l,Q=_;G;)switch(V=q,q=tn()){case 40:if(V!=108&&ie(Q,x-1)==58){Ul(Q+=ft(ku(q),"&","&\f"),"&\f",E4(g?m[g-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:Q+=ku(q);break;case 9:case 10:case 13:case 32:Q+=Tg(V);break;case 92:Q+=Ag(kl()-1,7);continue;case 47:switch(Vi()){case 42:case 47:Qs($g(zg(tn(),kl()),a,r,p),p);break;default:Q+="/"}break;case 123*k:m[g++]=on(Q)*U;case 125*k:case 59:case 0:switch(q){case 0:case 125:G=0;case 59+y:U==-1&&(Q=ft(Q,/\f/g,"")),$>0&&on(Q)-x&&Qs($>32?_d(Q+";",l,r,x-1,p):_d(ft(Q," ","")+";",l,r,x-2,p),p);break;case 59:Q+=";";default:if(Qs(F=Bd(Q,a,r,g,y,u,m,_,K=[],N=[],x,h),h),q===123)if(y===0)Yl(Q,a,F,F,K,h,x,m,N);else switch(S===99&&ie(Q,3)===110?100:S){case 100:case 108:case 109:case 115:Yl(t,F,F,l&&Qs(Bd(t,F,F,0,0,u,m,_,u,K=[],x,N),N),u,N,x,m,l?K:N);break;default:Yl(Q,F,F,F,[""],N,0,m,N)}}g=y=$=0,k=U=1,_=Q="",x=f;break;case 58:x=1+on(Q),$=V;default:if(k<1){if(q==123)--k;else if(q==125&&k++==0&&bg()==125)continue}switch(Q+=Z1(q),q*k){case 38:U=y>0?1:(Q+="\f",-1);break;case 44:m[g++]=(on(Q)-1)*U,U=1;break;case 64:Vi()===45&&(Q+=ku(tn())),S=Vi(),y=x=on(_=Q+=Mg(kl())),q++;break;case 45:V===45&&on(Q)==2&&(k=0)}}return h}function Bd(t,a,r,l,u,h,f,m,p,g,y,x){for(var S=u-1,$=u===0?h:[""],V=C4($),k=0,G=0,U=0;k<l;++k)for(var q=0,_=La(t,S+1,S=E4(G=f[k])),K=t;q<V;++q)(K=D4(G>0?$[q]+" "+_:ft(_,/&\f/g,$[q])))&&(p[U++]=K);return ho(t,a,r,u===0?uo:m,p,g,y,x)}function $g(t,a,r,l){return ho(t,a,r,w4,Z1(vg()),La(t,2,-2),0,l)}function _d(t,a,r,l,u){return ho(t,a,r,P1,La(t,0,l),La(t,l+1,-1),l,u)}function R4(t,a,r){switch(gg(t,a)){case 5103:return At+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return At+t+t;case 4789:return Fs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return At+t+Fs+t+jt+t+t;case 5936:switch(ie(t,a+11)){case 114:return At+t+jt+ft(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return At+t+jt+ft(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return At+t+jt+ft(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return At+t+jt+t+t;case 6165:return At+t+jt+"flex-"+t+t;case 5187:return At+t+ft(t,/(\w+).+(:[^]+)/,At+"box-$1$2"+jt+"flex-$1$2")+t;case 5443:return At+t+jt+"flex-item-"+ft(t,/flex-|-self/g,"")+(En(t,/flex-|baseline/)?"":jt+"grid-row-"+ft(t,/flex-|-self/g,""))+t;case 4675:return At+t+jt+"flex-line-pack"+ft(t,/align-content|flex-|-self/g,"")+t;case 5548:return At+t+jt+ft(t,"shrink","negative")+t;case 5292:return At+t+jt+ft(t,"basis","preferred-size")+t;case 6060:return At+"box-"+ft(t,"-grow","")+At+t+jt+ft(t,"grow","positive")+t;case 4554:return At+ft(t,/([^-])(transform)/g,"$1"+At+"$2")+t;case 6187:return ft(ft(ft(t,/(zoom-|grab)/,At+"$1"),/(image-set)/,At+"$1"),t,"")+t;case 5495:case 3959:return ft(t,/(image-set\([^]*)/,At+"$1$`$1");case 4968:return ft(ft(t,/(.+:)(flex-)?(.*)/,At+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+At+t+t;case 4200:if(!En(t,/flex-|baseline/))return jt+"grid-column-align"+La(t,a)+t;break;case 2592:case 3360:return jt+ft(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(l,u){return a=u,En(l.props,/grid-\w+-end/)})?~Ul(t+(r=r[a].value),"span",0)?t:jt+ft(t,"-start","")+t+jt+"grid-row-span:"+(~Ul(r,"span",0)?En(r,/\d+/):+En(r,/\d+/)-+En(t,/\d+/))+";":jt+ft(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(l){return En(l.props,/grid-\w+-start/)})?t:jt+ft(ft(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ft(t,/(.+)-inline(.+)/,At+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(t)-1-a>6)switch(ie(t,a+1)){case 109:if(ie(t,a+4)!==45)break;case 102:return ft(t,/(.+:)(.+)-([^]+)/,"$1"+At+"$2-$3$1"+Fs+(ie(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~Ul(t,"stretch",0)?R4(ft(t,"stretch","fill-available"),a,r)+t:t}break;case 5152:case 5920:return ft(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,h,f,m,p,g){return jt+u+":"+h+g+(f?jt+u+"-span:"+(m?p:+p-+h)+g:"")+t});case 4949:if(ie(t,a+6)===121)return ft(t,":",":"+At)+t;break;case 6444:switch(ie(t,ie(t,14)===45?18:11)){case 120:return ft(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+At+(ie(t,14)===45?"inline-":"")+"box$3$1"+At+"$2$3$1"+jt+"$2box$3")+t;case 100:return ft(t,":",":"+jt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(t,"scroll-","scroll-snap-")+t}return t}function Kl(t,a){for(var r="",l=0;l<t.length;l++)r+=a(t[l],l,t,a)||"";return r}function Eg(t,a,r,l){switch(t.type){case pg:if(t.children.length)break;case mg:case P1:return t.return=t.return||t.value;case w4:return"";case $4:return t.return=t.value+"{"+Kl(t.children,l)+"}";case uo:if(!on(t.value=t.props.join(",")))return""}return on(r=Kl(t.children,l))?t.return=t.value+"{"+r+"}":""}function Dg(t){var a=C4(t);return function(r,l,u,h){for(var f="",m=0;m<a;m++)f+=t[m](r,l,u,h)||"";return f}}function Cg(t){return function(a){a.root||(a=a.return)&&t(a)}}function jg(t,a,r,l){if(t.length>-1&&!t.return)switch(t.type){case P1:t.return=R4(t.value,t.length,r);return;case $4:return Kl([ei(t,{value:ft(t.value,"@","@"+At)})],l);case uo:if(t.length)return yg(r=t.props,function(u){switch(En(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":za(ei(t,{props:[ft(u,/:(read-\w+)/,":"+Fs+"$1")]})),za(ei(t,{props:[u]})),m1(t,{props:Vd(r,l)});break;case"::placeholder":za(ei(t,{props:[ft(u,/:(plac\w+)/,":"+At+"input-$1")]})),za(ei(t,{props:[ft(u,/:(plac\w+)/,":"+Fs+"$1")]})),za(ei(t,{props:[ft(u,/:(plac\w+)/,jt+"input-$1")]})),za(ei(t,{props:[u]})),m1(t,{props:Vd(r,l)});break}return""})}}var Rg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Re={},Na=typeof process<"u"&&Re!==void 0&&(Re.REACT_APP_SC_ATTR||Re.SC_ATTR)||"data-styled",O4="active",V4="data-styled-version",po="6.1.19",Q1=`/*!sc*/
`,Fl=typeof window<"u"&&typeof document<"u",Og=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==""?Re.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Re.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.SC_DISABLE_SPEEDY!==void 0&&Re.SC_DISABLE_SPEEDY!==""&&Re.SC_DISABLE_SPEEDY!=="false"&&Re.SC_DISABLE_SPEEDY),Vg={},go=Object.freeze([]),Ua=Object.freeze({});function B4(t,a,r){return r===void 0&&(r=Ua),t.theme!==r.theme&&t.theme||a||r.theme}var _4=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_g=/(^-|-$)/g;function Ld(t){return t.replace(Bg,"-").replace(_g,"")}var Lg=/(a)(d)/gi,jl=52,Hd=function(t){return String.fromCharCode(t+(t>25?39:97))};function y1(t){var a,r="";for(a=Math.abs(t);a>jl;a=a/jl|0)r=Hd(a%jl)+r;return(Hd(a%jl)+r).replace(Lg,"$1-$2")}var Yu,L4=5381,Ca=function(t,a){for(var r=a.length;r;)t=33*t^a.charCodeAt(--r);return t},H4=function(t){return Ca(L4,t)};function K1(t){return y1(H4(t)>>>0)}function Hg(t){return t.displayName||t.name||"Component"}function Gu(t){return typeof t=="string"&&!0}var N4=typeof Symbol=="function"&&Symbol.for,U4=N4?Symbol.for("react.memo"):60115,Ng=N4?Symbol.for("react.forward_ref"):60112,Ug={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},k4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yg=((Yu={})[Ng]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yu[U4]=k4,Yu);function Nd(t){return("type"in(a=t)&&a.type.$$typeof)===U4?k4:"$$typeof"in t?Yg[t.$$typeof]:Ug;var a}var Gg=Object.defineProperty,qg=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,Xg=Object.getOwnPropertyDescriptor,Pg=Object.getPrototypeOf,kd=Object.prototype;function Y4(t,a,r){if(typeof a!="string"){if(kd){var l=Pg(a);l&&l!==kd&&Y4(t,l,r)}var u=qg(a);Ud&&(u=u.concat(Ud(a)));for(var h=Nd(t),f=Nd(a),m=0;m<u.length;++m){var p=u[m];if(!(p in kg||r&&r[p]||f&&p in f||h&&p in h)){var g=Xg(a,p);try{Gg(t,p,g)}catch{}}}}return t}function Li(t){return typeof t=="function"}function F1(t){return typeof t=="object"&&"styledComponentId"in t}function Ci(t,a){return t&&a?"".concat(t," ").concat(a):t||a||""}function Jl(t,a){if(t.length===0)return"";for(var r=t[0],l=1;l<t.length;l++)r+=t[l];return r}function nr(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function v1(t,a,r){if(r===void 0&&(r=!1),!r&&!nr(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(var l=0;l<a.length;l++)t[l]=v1(t[l],a[l]);else if(nr(a))for(var l in a)t[l]=v1(t[l],a[l]);return t}function J1(t,a){Object.defineProperty(t,"toString",{value:a})}function Hi(t){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Zg=function(){function t(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return t.prototype.indexOfGroup=function(a){for(var r=0,l=0;l<a;l++)r+=this.groupSizes[l];return r},t.prototype.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,h=u;a>=h;)if((h<<=1)<0)throw Hi(16,"".concat(a));this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(var f=u;f<h;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(a+1),p=(f=0,r.length);f<p;f++)this.tag.insertRule(m,r[f])&&(this.groupSizes[a]++,m++)},t.prototype.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],l=this.indexOfGroup(a),u=l+r;this.groupSizes[a]=0;for(var h=l;h<u;h++)this.tag.deleteRule(l)}},t.prototype.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var l=this.groupSizes[a],u=this.indexOfGroup(a),h=u+l,f=u;f<h;f++)r+="".concat(this.tag.getRule(f)).concat(Q1);return r},t}(),Gl=new Map,Wl=new Map,ql=1,Rl=function(t){if(Gl.has(t))return Gl.get(t);for(;Wl.has(ql);)ql++;var a=ql++;return Gl.set(t,a),Wl.set(a,t),a},Qg=function(t,a){ql=a+1,Gl.set(t,a),Wl.set(a,t)},Kg="style[".concat(Na,"][").concat(V4,'="').concat(po,'"]'),Fg=new RegExp("^".concat(Na,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jg=function(t,a,r){for(var l,u=r.split(","),h=0,f=u.length;h<f;h++)(l=u[h])&&t.registerName(a,l)},Wg=function(t,a){for(var r,l=((r=a.textContent)!==null&&r!==void 0?r:"").split(Q1),u=[],h=0,f=l.length;h<f;h++){var m=l[h].trim();if(m){var p=m.match(Fg);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(Qg(y,g),Jg(t,y,p[3]),t.getTag().insertRules(g,u)),u.length=0}else u.push(m)}}},Yd=function(t){for(var a=document.querySelectorAll(Kg),r=0,l=a.length;r<l;r++){var u=a[r];u&&u.getAttribute(Na)!==O4&&(Wg(t,u),u.parentNode&&u.parentNode.removeChild(u))}};function Ig(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var G4=function(t){var a=document.head,r=t||a,l=document.createElement("style"),u=function(m){var p=Array.from(m.querySelectorAll("style[".concat(Na,"]")));return p[p.length-1]}(r),h=u!==void 0?u.nextSibling:null;l.setAttribute(Na,O4),l.setAttribute(V4,po);var f=Ig();return f&&l.setAttribute("nonce",f),r.insertBefore(l,h),l},t8=function(){function t(a){this.element=G4(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var l=document.styleSheets,u=0,h=l.length;u<h;u++){var f=l[u];if(f.ownerNode===r)return f}throw Hi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},t.prototype.getRule=function(a){var r=this.sheet.cssRules[a];return r&&r.cssText?r.cssText:""},t}(),e8=function(){function t(a){this.element=G4(a),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(a,r){if(a<=this.length&&a>=0){var l=document.createTextNode(r);return this.element.insertBefore(l,this.nodes[a]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},t.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},t}(),n8=function(){function t(a){this.rules=[],this.length=0}return t.prototype.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},t.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},t.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},t}(),Gd=Fl,i8={isServer:!Fl,useCSSOMInjection:!Og},Il=function(){function t(a,r,l){a===void 0&&(a=Ua),r===void 0&&(r={});var u=this;this.options=se(se({},i8),a),this.gs=r,this.names=new Map(l),this.server=!!a.isServer,!this.server&&Fl&&Gd&&(Gd=!1,Yd(this)),J1(this,function(){return function(h){for(var f=h.getTag(),m=f.length,p="",g=function(x){var S=function(U){return Wl.get(U)}(x);if(S===void 0)return"continue";var $=h.names.get(S),V=f.getGroup(x);if($===void 0||!$.size||V.length===0)return"continue";var k="".concat(Na,".g").concat(x,'[id="').concat(S,'"]'),G="";$!==void 0&&$.forEach(function(U){U.length>0&&(G+="".concat(U,","))}),p+="".concat(V).concat(k,'{content:"').concat(G,'"}').concat(Q1)},y=0;y<m;y++)g(y);return p}(u)})}return t.registerId=function(a){return Rl(a)},t.prototype.rehydrate=function(){!this.server&&Fl&&Yd(this)},t.prototype.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new t(se(se({},this.options),a),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(a=function(r){var l=r.useCSSOMInjection,u=r.target;return r.isServer?new n8(u):l?new t8(u):new e8(u)}(this.options),new Zg(a)));var a},t.prototype.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},t.prototype.registerName=function(a,r){if(Rl(a),this.names.has(a))this.names.get(a).add(r);else{var l=new Set;l.add(r),this.names.set(a,l)}},t.prototype.insertRules=function(a,r,l){this.registerName(a,r),this.getTag().insertRules(Rl(a),l)},t.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},t.prototype.clearRules=function(a){this.getTag().clearGroup(Rl(a)),this.clearNames(a)},t.prototype.clearTag=function(){this.tag=void 0},t}(),a8=/&/g,s8=/^\s*\/\/.*$/gm;function q4(t,a){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(a," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(a," ")),r.props=r.props.map(function(l){return"".concat(a," ").concat(l)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=q4(r.children,a)),r})}function r8(t){var a,r,l,u=Ua,h=u.options,f=h===void 0?Ua:h,m=u.plugins,p=m===void 0?go:m,g=function(S,$,V){return V.startsWith(r)&&V.endsWith(r)&&V.replaceAll(r,"").length>0?".".concat(a):S},y=p.slice();y.push(function(S){S.type===uo&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(a8,r).replace(l,g))}),f.prefix&&y.push(jg),y.push(Eg);var x=function(S,$,V,k){$===void 0&&($=""),V===void 0&&(V=""),k===void 0&&(k="&"),a=k,r=$,l=new RegExp("\\".concat(r,"\\b"),"g");var G=S.replace(s8,""),U=wg(V||$?"".concat(V," ").concat($," { ").concat(G," }"):G);f.namespace&&(U=q4(U,f.namespace));var q=[];return Kl(U,Dg(y.concat(Cg(function(_){return q.push(_)})))),q};return x.hash=p.length?p.reduce(function(S,$){return $.name||Hi(15),Ca(S,$.name)},L4).toString():"",x}var l8=new Il,b1=r8(),X4=ae.createContext({shouldForwardProp:void 0,styleSheet:l8,stylis:b1});X4.Consumer;ae.createContext(void 0);function x1(){return W.useContext(X4)}var P4=function(){function t(a,r){var l=this;this.inject=function(u,h){h===void 0&&(h=b1);var f=l.name+h.hash;u.hasNameForId(l.id,f)||u.insertRules(l.id,f,h(l.rules,f,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=r,J1(this,function(){throw Hi(12,String(l.name))})}return t.prototype.getName=function(a){return a===void 0&&(a=b1),this.name+a.hash},t}(),o8=function(t){return t>="A"&&t<="Z"};function qd(t){for(var a="",r=0;r<t.length;r++){var l=t[r];if(r===1&&l==="-"&&t[0]==="-")return t;o8(l)?a+="-"+l.toLowerCase():a+=l}return a.startsWith("ms-")?"-"+a:a}var Z4=function(t){return t==null||t===!1||t===""},Q4=function(t){var a,r,l=[];for(var u in t){var h=t[u];t.hasOwnProperty(u)&&!Z4(h)&&(Array.isArray(h)&&h.isCss||Li(h)?l.push("".concat(qd(u),":"),h,";"):nr(h)?l.push.apply(l,_a(_a(["".concat(u," {")],Q4(h),!1),["}"],!1)):l.push("".concat(qd(u),": ").concat((a=u,(r=h)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||a in Rg||a.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return l};function ai(t,a,r,l){if(Z4(t))return[];if(F1(t))return[".".concat(t.styledComponentId)];if(Li(t)){if(!Li(h=t)||h.prototype&&h.prototype.isReactComponent||!a)return[t];var u=t(a);return ai(u,a,r,l)}var h;return t instanceof P4?r?(t.inject(r,l),[t.getName(l)]):[t]:nr(t)?Q4(t):Array.isArray(t)?Array.prototype.concat.apply(go,t.map(function(f){return ai(f,a,r,l)})):[t.toString()]}function K4(t){for(var a=0;a<t.length;a+=1){var r=t[a];if(Li(r)&&!F1(r))return!1}return!0}var c8=H4(po),u8=function(){function t(a,r,l){this.rules=a,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&K4(a),this.componentId=r,this.baseHash=Ca(c8,r),this.baseStyle=l,Il.registerId(r)}return t.prototype.generateAndInjectStyles=function(a,r,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,r,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))u=Ci(u,this.staticRulesId);else{var h=Jl(ai(this.rules,a,r,l)),f=y1(Ca(this.baseHash,h)>>>0);if(!r.hasNameForId(this.componentId,f)){var m=l(h,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,m)}u=Ci(u,f),this.staticRulesId=f}else{for(var p=Ca(this.baseHash,l.hash),g="",y=0;y<this.rules.length;y++){var x=this.rules[y];if(typeof x=="string")g+=x;else if(x){var S=Jl(ai(x,a,r,l));p=Ca(p,S+y),g+=S}}if(g){var $=y1(p>>>0);r.hasNameForId(this.componentId,$)||r.insertRules(this.componentId,$,l(g,".".concat($),void 0,this.componentId)),u=Ci(u,$)}}return u},t}(),ir=ae.createContext(void 0);ir.Consumer;function f8(t){var a=ae.useContext(ir),r=W.useMemo(function(){return function(l,u){if(!l)throw Hi(14);if(Li(l)){var h=l(u);return h}if(Array.isArray(l)||typeof l!="object")throw Hi(8);return u?se(se({},u),l):l}(t.theme,a)},[t.theme,a]);return t.children?ae.createElement(ir.Provider,{value:r},t.children):null}var qu={};function h8(t,a,r){var l=F1(t),u=t,h=!Gu(t),f=a.attrs,m=f===void 0?go:f,p=a.componentId,g=p===void 0?function(K,N){var F=typeof K!="string"?"sc":Ld(K);qu[F]=(qu[F]||0)+1;var Q="".concat(F,"-").concat(K1(po+F+qu[F]));return N?"".concat(N,"-").concat(Q):Q}(a.displayName,a.parentComponentId):p,y=a.displayName,x=y===void 0?function(K){return Gu(K)?"styled.".concat(K):"Styled(".concat(Hg(K),")")}(t):y,S=a.displayName&&a.componentId?"".concat(Ld(a.displayName),"-").concat(a.componentId):a.componentId||g,$=l&&u.attrs?u.attrs.concat(m).filter(Boolean):m,V=a.shouldForwardProp;if(l&&u.shouldForwardProp){var k=u.shouldForwardProp;if(a.shouldForwardProp){var G=a.shouldForwardProp;V=function(K,N){return k(K,N)&&G(K,N)}}else V=k}var U=new u8(r,S,l?u.componentStyle:void 0);function q(K,N){return function(F,Q,tt){var St=F.attrs,Nt=F.componentStyle,Jt=F.defaultProps,Ut=F.foldedComponentIds,Ke=F.styledComponentId,Oe=F.target,Qt=ae.useContext(ir),R=x1(),Y=F.shouldForwardProp||R.shouldForwardProp,I=B4(Q,Qt,Jt)||Ua,ct=function(mt,st,Wt){for(var Tt,ue=se(se({},st),{className:void 0,theme:Wt}),oi=0;oi<mt.length;oi+=1){var hn=Li(Tt=mt[oi])?Tt(ue):Tt;for(var Ve in hn)ue[Ve]=Ve==="className"?Ci(ue[Ve],hn[Ve]):Ve==="style"?se(se({},ue[Ve]),hn[Ve]):hn[Ve]}return st.className&&(ue.className=Ci(ue.className,st.className)),ue}(St,Q,I),z=ct.as||Oe,H={};for(var P in ct)ct[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&ct.theme===I||(P==="forwardedAs"?H.as=ct.forwardedAs:Y&&!Y(P,z)||(H[P]=ct[P]));var Z=function(mt,st){var Wt=x1(),Tt=mt.generateAndInjectStyles(st,Wt.styleSheet,Wt.stylis);return Tt}(Nt,ct),nt=Ci(Ut,Ke);return Z&&(nt+=" "+Z),ct.className&&(nt+=" "+ct.className),H[Gu(z)&&!_4.has(z)?"class":"className"]=nt,tt&&(H.ref=tt),W.createElement(z,H)}(_,K,N)}q.displayName=x;var _=ae.forwardRef(q);return _.attrs=$,_.componentStyle=U,_.displayName=x,_.shouldForwardProp=V,_.foldedComponentIds=l?Ci(u.foldedComponentIds,u.styledComponentId):"",_.styledComponentId=S,_.target=l?u.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=l?function(N){for(var F=[],Q=1;Q<arguments.length;Q++)F[Q-1]=arguments[Q];for(var tt=0,St=F;tt<St.length;tt++)v1(N,St[tt],!0);return N}({},u.defaultProps,K):K}}),J1(_,function(){return".".concat(_.styledComponentId)}),h&&Y4(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Xd(t,a){for(var r=[t[0]],l=0,u=a.length;l<u;l+=1)r.push(a[l],t[l+1]);return r}var Pd=function(t){return Object.assign(t,{isCss:!0})};function vt(t){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];if(Li(t)||nr(t))return Pd(ai(Xd(go,_a([t],a,!0))));var l=t;return a.length===0&&l.length===1&&typeof l[0]=="string"?ai(l):Pd(ai(Xd(l,a)))}function S1(t,a,r){if(r===void 0&&(r=Ua),!a)throw Hi(1,a);var l=function(u){for(var h=[],f=1;f<arguments.length;f++)h[f-1]=arguments[f];return t(a,r,vt.apply(void 0,_a([u],h,!1)))};return l.attrs=function(u){return S1(t,a,se(se({},r),{attrs:Array.prototype.concat(r.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return S1(t,a,se(se({},r),u))},l}var F4=function(t){return S1(h8,t)},A=F4;_4.forEach(function(t){A[t]=F4(t)});var d8=function(){function t(a,r){this.rules=a,this.componentId=r,this.isStatic=K4(a),Il.registerId(this.componentId+1)}return t.prototype.createStyles=function(a,r,l,u){var h=u(Jl(ai(this.rules,r,l,u)),""),f=this.componentId+a;l.insertRules(f,f,h)},t.prototype.removeStyles=function(a,r){r.clearRules(this.componentId+a)},t.prototype.renderStyles=function(a,r,l,u){a>2&&Il.registerId(this.componentId+a),this.removeStyles(a,l),this.createStyles(a,r,l,u)},t}();function m8(t){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var l=vt.apply(void 0,_a([t],a,!1)),u="sc-global-".concat(K1(JSON.stringify(l))),h=new d8(l,u),f=function(p){var g=x1(),y=ae.useContext(ir),x=ae.useRef(g.styleSheet.allocateGSInstance(u)).current;return g.styleSheet.server&&m(x,p,g.styleSheet,y,g.stylis),ae.useLayoutEffect(function(){if(!g.styleSheet.server)return m(x,p,g.styleSheet,y,g.stylis),function(){return h.removeStyles(x,g.styleSheet)}},[x,p,g.styleSheet,y,g.stylis]),null};function m(p,g,y,x,S){if(h.isStatic)h.renderStyles(p,Vg,y,S);else{var $=se(se({},g),{theme:B4(g,x,f.defaultProps)});h.renderStyles(p,$,y,S)}}return ae.memo(f)}function yo(t){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var l=Jl(vt.apply(void 0,_a([t],a,!1))),u=K1(l);return new P4(u,l)}const J4={primary:{blue:"#2563eb",secondary:"#1e40af",dark:"#1e40af"},background:{dark:"#1f2020",card:"rgba(31, 32, 32, 0.1)",overlay:"rgba(0, 0, 0, 0.2)"},text:{light:"#E2E8F0",gray:"#94A3B8",white:"#FFFFFF"},border:{primary:"rgba(255, 255, 255, 0.1)"},effects:{shadow:"0 2px 8px rgba(0, 0, 0, 0.1)"}},p8={primary:{blue:"#2563eb",secondary:"#1e40af",dark:"#1e40af"},background:{dark:"#FFFFFF",card:"rgba(255, 255, 255, 1)",overlay:"rgba(37, 99, 235, 0.04)"},text:{light:"#334155",gray:"#64748B",white:"#1F2937"},border:{primary:"rgba(37, 99, 235, 0.2)"},effects:{shadow:"0 4px 16px rgba(37, 99, 235, 0.1)"}},to={colors:J4,gradients:{},fonts:{primary:"'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",weights:{normal:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem"},lineHeights:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2}},space:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem"},breakpoints:{xs:"475px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},radii:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(139, 92, 246, 0.5)",none:"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},transitions:{fast:"0.15s ease",normal:"0.3s ease",slow:"0.5s ease",colors:"color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",transform:"transform 0.3s ease",all:"all 0.3s ease"},animations:{float:`
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
    `}};to.borderRadius=to.radii;to.shadows={sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(139, 92, 246, 0.5)",none:"none"};const g8=t=>({...to,colors:t?J4:p8}),y8=yo`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`,Xu=yo`
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
`,v8=yo`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,W4=yo`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,b8=A.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background: ${t=>t.theme.colors.background.dark};
  transition: ${t=>t.theme.transitions.all};

  font-family: ${t=>t.theme.fonts.primary};
  color: ${t=>t.theme.colors.text.light};
  line-height: ${t=>t.theme.fonts.lineHeights.normal};
  overflow-x: hidden;

  /* CSS переменные для компонентов с inline стилями */
  --bg-overlay: rgba(37, 99, 235, 0.08);
  --border-primary: ${t=>t.theme.colors.border.primary};
  --text-gray: ${t=>t.theme.colors.text.gray};
  --text-primary: ${t=>t.theme.colors.text.white};
  --text-secondary: ${t=>t.theme.colors.text.light};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`,x8=A.main`
  position: relative;
  z-index: ${t=>t.theme.zIndices.docked};
`,Ma=A.section`
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
`,$a=A.div`
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
`,S8=A.div`
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
`;A.div`
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
`;const vo=A.div`
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
`,T8=A.button`
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
`,fr=A.h2`
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
`;A.span`
  background: ${t=>t.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;A.span`
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
`;A.div`
  animation: ${y8} 3s ease-in-out infinite;
  will-change: transform;
`;A.div`
  animation: ${v8} 2s infinite;
`;A.div`
  animation: ${W4} 1s linear infinite;
`;A.input`
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
`;A.textarea`
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
`;A.label`
  display: block;
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  margin-bottom: ${t=>t.theme.space[2]};
`;A.div`
  height: ${t=>t.theme.space[t.size]||t.theme.space[4]};
  width: ${t=>t.theme.space[t.size]||t.theme.space[4]};
`;A.hr`
  border: none;
  height: 1px;
  background: ${t=>t.theme.colors.border.glow};
  margin: ${t=>t.theme.space[8]} 0;
`;A.div`
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
`;A.div`
  width: 100%;
  height: ${t=>t.theme.space[3]};
  background: ${t=>t.theme.colors.text.gray};
  border-radius: ${t=>t.theme.radii.full};
  overflow: hidden;
`;A.div`
  height: 100%;
  background: ${t=>t.theme.gradients.primary};
  border-radius: ${t=>t.theme.radii.full};
  transition: width 1.5s ease;
  width: ${t=>t.percentage||0}%;
`;const A8=A.span`
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
`;A.div`
  position: relative;
`;A.div`
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
`;A.div`
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
`;A.div`
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
`;A.div`
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
`;A(vo)`
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
`;A.div`
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
`;A.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  margin: ${t=>t.theme.space[4]} 0;
`;A.span`
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
`;A.div`
  display: flex;
  gap: ${t=>t.theme.space[3]};
  margin-top: ${t=>t.theme.space[4]};
`;A.a`
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
`;A.form`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[6]};
`;A.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.space[6]};

  ${t=>t.cols===2&&vt`
    ${a=>a.theme.media.md} {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;A.div`
  display: flex;
  flex-direction: column;
`;A.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[6]};
`;A.div`
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
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.color||t.theme.colors.primary.purple};
`;A.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`;A.a`
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
`;const z8=A.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.space[12]};
  margin-bottom: ${t=>t.theme.space[16]};

  ${t=>t.theme.media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`,Pu=A(vo)`
  height: auto;
  background: var(--bg-overlay);
  // border: 1px solid ${t=>t.theme.colors.border.glow};

  h3 {
    color: ${t=>t.theme.colors.primary.blue};
    font-size: ${t=>t.theme.fonts.sizes.xl};
    font-weight: ${t=>t.theme.fonts.weights.bold};
    margin-bottom: ${t=>t.theme.space[6]};
    display: flex;
    align-items: center;
    gap: ${t=>t.theme.space[3]};
  }
`,M8=A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t=>t.theme.space[4]};

  ${t=>t.theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: ${t=>t.theme.space[3]};
    max-width: 300px;
    margin: 0 auto;
  }
`;A.div`
  text-align: center;
  padding: ${t=>t.theme.space[4]};
  background: var(--bg-overlay);
  border-radius: ${t=>t.theme.radii.lg};
  border: 1px solid ${t=>t.theme.colors.border.primary};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
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
`;const w8=A.div`
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
`,Zd=A(vo)`
  text-align: center;
  background: var(--bg-overlay);
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};

    .icon {
      transform: scale(1.1);
    }
  }

  .icon {
    font-size: ${t=>t.theme.fonts.sizes["4xl"]};
    color: ${t=>t.theme.colors.primary.blue};
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
`,$8=A.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 468px) {
    margin-top: 16px;
  }
`,E8=A(A8)`
  font-size: ${t=>t.theme.fonts.sizes.xs};
`;A.span`
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
`;A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[12]};
`;A.button`
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
`;A.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${t=>t.theme.colors.text.white};
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${W4} 1s linear infinite;
`;const D8=m8`
  /* Webkit браузеры (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${t=>t.isDarkMode?"rgba(15, 15, 35, 0.3)":"rgba(248, 249, 250, 0.8)"};
    border: 1px solid ${t=>t.isDarkMode?"rgba(139, 92, 246, 0.1)":"rgba(37, 99, 235, 0.15)"};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${t=>(t.isDarkMode,"#2563eb")};
    border-radius: 3px;
    transition: all 0.3s ease;
    box-shadow: ${t=>t.isDarkMode?"0 0 3px rgba(139, 92, 246, 0.3)":"0 0 3px rgba(37, 99, 235, 0.2)"};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #1e40af;
    box-shadow: ${t=>t.isDarkMode?"0 0 8px rgba(139, 92, 246, 0.6), 0 0 12px rgba(236, 72, 153, 0.4), inset 0 0 6px rgba(255, 255, 255, 0.1)":"0 0 8px rgba(37, 99, 235, 0.4), inset 0 0 6px rgba(255, 255, 255, 0.1)"};
  }

  ::-webkit-scrollbar-thumb:active {
    background: #1e40af;
    box-shadow: ${t=>t.isDarkMode?"0 0 12px rgba(139, 92, 246, 0.8), 0 0 16px rgba(236, 72, 153, 0.6)":"0 0 12px rgba(37, 99, 235, 0.5)"};
  }

  ::-webkit-scrollbar-corner {
    background: ${t=>t.isDarkMode?"rgba(15, 15, 35, 0.3)":"rgba(248, 249, 250, 0.8)"};
  }

  /* Firefox поддержка */
  html {
    scrollbar-width: thin;
    scrollbar-color: #2563eb ${t=>t.isDarkMode?"rgba(15, 15, 35, 0.3)":"rgba(248, 249, 250, 0.8)"};
    scroll-behavior: smooth;
  }

  /* Дополнительные стили для улучшения внешнего вида в Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #2563eb ${t=>t.isDarkMode?"rgba(15, 15, 35, 0.3)":"rgba(248, 249, 250, 0.8)"};
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
`,I4=W.createContext({});function C8(t){const a=W.useRef(null);return a.current===null&&(a.current=t()),a.current}const W1=typeof window<"u",j8=W1?W.useLayoutEffect:W.useEffect,I1=W.createContext(null);function t0(t,a){t.indexOf(a)===-1&&t.push(a)}function e0(t,a){const r=t.indexOf(a);r>-1&&t.splice(r,1)}const Dn=(t,a,r)=>r>a?a:r<t?t:r;let n0=()=>{};const Cn={},tm=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function em(t){return typeof t=="object"&&t!==null}const nm=t=>/^0[^.\s]+$/u.test(t);function i0(t){let a;return()=>(a===void 0&&(a=t()),a)}const Ze=t=>t,R8=(t,a)=>r=>a(t(r)),hr=(...t)=>t.reduce(R8),ar=(t,a,r)=>{const l=a-t;return l===0?1:(r-t)/l};class a0{constructor(){this.subscriptions=[]}add(a){return t0(this.subscriptions,a),()=>e0(this.subscriptions,a)}notify(a,r,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,r,l);else for(let h=0;h<u;h++){const f=this.subscriptions[h];f&&f(a,r,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const cn=t=>t*1e3,un=t=>t/1e3;function im(t,a){return a?t*(1e3/a):0}const am=(t,a,r)=>(((1-3*r+3*a)*t+(3*r-6*a))*t+3*a)*t,O8=1e-7,V8=12;function B8(t,a,r,l,u){let h,f,m=0;do f=a+(r-a)/2,h=am(f,l,u)-t,h>0?r=f:a=f;while(Math.abs(h)>O8&&++m<V8);return f}function dr(t,a,r,l){if(t===a&&r===l)return Ze;const u=h=>B8(h,0,1,t,r);return h=>h===0||h===1?h:am(u(h),a,l)}const sm=t=>a=>a<=.5?t(2*a)/2:(2-t(2*(1-a)))/2,rm=t=>a=>1-t(1-a),lm=dr(.33,1.53,.69,.99),s0=rm(lm),om=sm(s0),cm=t=>(t*=2)<1?.5*s0(t):.5*(2-Math.pow(2,-10*(t-1))),r0=t=>1-Math.sin(Math.acos(t)),um=rm(r0),fm=sm(r0),_8=dr(.42,0,1,1),L8=dr(0,0,.58,1),hm=dr(.42,0,.58,1),H8=t=>Array.isArray(t)&&typeof t[0]!="number",dm=t=>Array.isArray(t)&&typeof t[0]=="number",N8={linear:Ze,easeIn:_8,easeInOut:hm,easeOut:L8,circIn:r0,circInOut:fm,circOut:um,backIn:s0,backInOut:om,backOut:lm,anticipate:cm},U8=t=>typeof t=="string",Qd=t=>{if(dm(t)){n0(t.length===4);const[a,r,l,u]=t;return dr(a,r,l,u)}else if(U8(t))return N8[t];return t},Ol=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Kd={value:null};function k8(t,a){let r=new Set,l=new Set,u=!1,h=!1;const f=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1},p=0;function g(x){f.has(x)&&(y.schedule(x),t()),p++,x(m)}const y={schedule:(x,S=!1,$=!1)=>{const k=$&&u?r:l;return S&&f.add(x),k.has(x)||k.add(x),x},cancel:x=>{l.delete(x),f.delete(x)},process:x=>{if(m=x,u){h=!0;return}u=!0,[r,l]=[l,r],r.forEach(g),a&&Kd.value&&Kd.value.frameloop[a].push(p),p=0,r.clear(),u=!1,h&&(h=!1,y.process(x))}};return y}const Y8=40;function mm(t,a){let r=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},h=()=>r=!0,f=Ol.reduce((_,K)=>(_[K]=k8(h,a?K:void 0),_),{}),{setup:m,read:p,resolveKeyframes:g,preUpdate:y,update:x,preRender:S,render:$,postRender:V}=f,k=()=>{const _=Cn.useManualTiming?u.timestamp:performance.now();r=!1,Cn.useManualTiming||(u.delta=l?1e3/60:Math.max(Math.min(_-u.timestamp,Y8),1)),u.timestamp=_,u.isProcessing=!0,m.process(u),p.process(u),g.process(u),y.process(u),x.process(u),S.process(u),$.process(u),V.process(u),u.isProcessing=!1,r&&a&&(l=!1,t(k))},G=()=>{r=!0,l=!0,u.isProcessing||t(k)};return{schedule:Ol.reduce((_,K)=>{const N=f[K];return _[K]=(F,Q=!1,tt=!1)=>(r||G(),N.schedule(F,Q,tt)),_},{}),cancel:_=>{for(let K=0;K<Ol.length;K++)f[Ol[K]].cancel(_)},state:u,steps:f}}const{schedule:Bt,cancel:si,state:ce,steps:Zu}=mm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ze,!0);let Xl;function G8(){Xl=void 0}const Te={now:()=>(Xl===void 0&&Te.set(ce.isProcessing||Cn.useManualTiming?ce.timestamp:performance.now()),Xl),set:t=>{Xl=t,queueMicrotask(G8)}},pm=t=>a=>typeof a=="string"&&a.startsWith(t),l0=pm("--"),q8=pm("var(--"),o0=t=>q8(t)?X8.test(t.split("/*")[0].trim()):!1,X8=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,qa={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},sr={...qa,transform:t=>Dn(0,1,t)},Vl={...qa,default:1},Js=t=>Math.round(t*1e5)/1e5,c0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function P8(t){return t==null}const Z8=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,u0=(t,a)=>r=>!!(typeof r=="string"&&Z8.test(r)&&r.startsWith(t)||a&&!P8(r)&&Object.prototype.hasOwnProperty.call(r,a)),gm=(t,a,r)=>l=>{if(typeof l!="string")return l;const[u,h,f,m]=l.match(c0);return{[t]:parseFloat(u),[a]:parseFloat(h),[r]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},Q8=t=>Dn(0,255,t),Qu={...qa,transform:t=>Math.round(Q8(t))},ji={test:u0("rgb","red"),parse:gm("red","green","blue"),transform:({red:t,green:a,blue:r,alpha:l=1})=>"rgba("+Qu.transform(t)+", "+Qu.transform(a)+", "+Qu.transform(r)+", "+Js(sr.transform(l))+")"};function K8(t){let a="",r="",l="",u="";return t.length>5?(a=t.substring(1,3),r=t.substring(3,5),l=t.substring(5,7),u=t.substring(7,9)):(a=t.substring(1,2),r=t.substring(2,3),l=t.substring(3,4),u=t.substring(4,5),a+=a,r+=r,l+=l,u+=u),{red:parseInt(a,16),green:parseInt(r,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const T1={test:u0("#"),parse:K8,transform:ji.transform},mr=t=>({test:a=>typeof a=="string"&&a.endsWith(t)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${t}`}),ni=mr("deg"),fn=mr("%"),ot=mr("px"),F8=mr("vh"),J8=mr("vw"),Fd={...fn,parse:t=>fn.parse(t)/100,transform:t=>fn.transform(t*100)},ja={test:u0("hsl","hue"),parse:gm("hue","saturation","lightness"),transform:({hue:t,saturation:a,lightness:r,alpha:l=1})=>"hsla("+Math.round(t)+", "+fn.transform(Js(a))+", "+fn.transform(Js(r))+", "+Js(sr.transform(l))+")"},Pt={test:t=>ji.test(t)||T1.test(t)||ja.test(t),parse:t=>ji.test(t)?ji.parse(t):ja.test(t)?ja.parse(t):T1.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ji.transform(t):ja.transform(t),getAnimatableNone:t=>{const a=Pt.parse(t);return a.alpha=0,Pt.transform(a)}},W8=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function I8(t){return isNaN(t)&&typeof t=="string"&&(t.match(c0)?.length||0)+(t.match(W8)?.length||0)>0}const ym="number",vm="color",t7="var",e7="var(",Jd="${}",n7=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function rr(t){const a=t.toString(),r=[],l={color:[],number:[],var:[]},u=[];let h=0;const m=a.replace(n7,p=>(Pt.test(p)?(l.color.push(h),u.push(vm),r.push(Pt.parse(p))):p.startsWith(e7)?(l.var.push(h),u.push(t7),r.push(p)):(l.number.push(h),u.push(ym),r.push(parseFloat(p))),++h,Jd)).split(Jd);return{values:r,split:m,indexes:l,types:u}}function bm(t){return rr(t).values}function xm(t){const{split:a,types:r}=rr(t),l=a.length;return u=>{let h="";for(let f=0;f<l;f++)if(h+=a[f],u[f]!==void 0){const m=r[f];m===ym?h+=Js(u[f]):m===vm?h+=Pt.transform(u[f]):h+=u[f]}return h}}const i7=t=>typeof t=="number"?0:Pt.test(t)?Pt.getAnimatableNone(t):t;function a7(t){const a=bm(t);return xm(t)(a.map(i7))}const ri={test:I8,parse:bm,createTransformer:xm,getAnimatableNone:a7};function Ku(t,a,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(a-t)*6*r:r<1/2?a:r<2/3?t+(a-t)*(2/3-r)*6:t}function s7({hue:t,saturation:a,lightness:r,alpha:l}){t/=360,a/=100,r/=100;let u=0,h=0,f=0;if(!a)u=h=f=r;else{const m=r<.5?r*(1+a):r+a-r*a,p=2*r-m;u=Ku(p,m,t+1/3),h=Ku(p,m,t),f=Ku(p,m,t-1/3)}return{red:Math.round(u*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:l}}function eo(t,a){return r=>r>0?a:t}const Vt=(t,a,r)=>t+(a-t)*r,Fu=(t,a,r)=>{const l=t*t,u=r*(a*a-l)+l;return u<0?0:Math.sqrt(u)},r7=[T1,ji,ja],l7=t=>r7.find(a=>a.test(t));function Wd(t){const a=l7(t);if(!a)return!1;let r=a.parse(t);return a===ja&&(r=s7(r)),r}const Id=(t,a)=>{const r=Wd(t),l=Wd(a);if(!r||!l)return eo(t,a);const u={...r};return h=>(u.red=Fu(r.red,l.red,h),u.green=Fu(r.green,l.green,h),u.blue=Fu(r.blue,l.blue,h),u.alpha=Vt(r.alpha,l.alpha,h),ji.transform(u))},A1=new Set(["none","hidden"]);function o7(t,a){return A1.has(t)?r=>r<=0?t:a:r=>r>=1?a:t}function c7(t,a){return r=>Vt(t,a,r)}function f0(t){return typeof t=="number"?c7:typeof t=="string"?o0(t)?eo:Pt.test(t)?Id:h7:Array.isArray(t)?Sm:typeof t=="object"?Pt.test(t)?Id:u7:eo}function Sm(t,a){const r=[...t],l=r.length,u=t.map((h,f)=>f0(h)(h,a[f]));return h=>{for(let f=0;f<l;f++)r[f]=u[f](h);return r}}function u7(t,a){const r={...t,...a},l={};for(const u in r)t[u]!==void 0&&a[u]!==void 0&&(l[u]=f0(t[u])(t[u],a[u]));return u=>{for(const h in l)r[h]=l[h](u);return r}}function f7(t,a){const r=[],l={color:0,var:0,number:0};for(let u=0;u<a.values.length;u++){const h=a.types[u],f=t.indexes[h][l[h]],m=t.values[f]??0;r[u]=m,l[h]++}return r}const h7=(t,a)=>{const r=ri.createTransformer(a),l=rr(t),u=rr(a);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?A1.has(t)&&!u.values.length||A1.has(a)&&!l.values.length?o7(t,a):hr(Sm(f7(l,u),u.values),r):eo(t,a)};function Tm(t,a,r){return typeof t=="number"&&typeof a=="number"&&typeof r=="number"?Vt(t,a,r):f0(t)(t,a)}const d7=t=>{const a=({timestamp:r})=>t(r);return{start:(r=!0)=>Bt.update(a,r),stop:()=>si(a),now:()=>ce.isProcessing?ce.timestamp:Te.now()}},Am=(t,a,r=10)=>{let l="";const u=Math.max(Math.round(a/r),2);for(let h=0;h<u;h++)l+=Math.round(t(h/(u-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},no=2e4;function h0(t){let a=0;const r=50;let l=t.next(a);for(;!l.done&&a<no;)a+=r,l=t.next(a);return a>=no?1/0:a}function m7(t,a=100,r){const l=r({...t,keyframes:[0,a]}),u=Math.min(h0(l),no);return{type:"keyframes",ease:h=>l.next(u*h).value/a,duration:un(u)}}const p7=5;function zm(t,a,r){const l=Math.max(a-p7,0);return im(r-t(l),a-l)}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ju=.001;function g7({duration:t=Ht.duration,bounce:a=Ht.bounce,velocity:r=Ht.velocity,mass:l=Ht.mass}){let u,h,f=1-a;f=Dn(Ht.minDamping,Ht.maxDamping,f),t=Dn(Ht.minDuration,Ht.maxDuration,un(t)),f<1?(u=g=>{const y=g*f,x=y*t,S=y-r,$=z1(g,f),V=Math.exp(-x);return Ju-S/$*V},h=g=>{const x=g*f*t,S=x*r+r,$=Math.pow(f,2)*Math.pow(g,2)*t,V=Math.exp(-x),k=z1(Math.pow(g,2),f);return(-u(g)+Ju>0?-1:1)*((S-$)*V)/k}):(u=g=>{const y=Math.exp(-g*t),x=(g-r)*t+1;return-Ju+y*x},h=g=>{const y=Math.exp(-g*t),x=(r-g)*(t*t);return y*x});const m=5/t,p=v7(u,h,m);if(t=cn(t),isNaN(p))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:t};{const g=Math.pow(p,2)*l;return{stiffness:g,damping:f*2*Math.sqrt(l*g),duration:t}}}const y7=12;function v7(t,a,r){let l=r;for(let u=1;u<y7;u++)l=l-t(l)/a(l);return l}function z1(t,a){return t*Math.sqrt(1-a*a)}const b7=["duration","bounce"],x7=["stiffness","damping","mass"];function t3(t,a){return a.some(r=>t[r]!==void 0)}function S7(t){let a={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...t};if(!t3(t,x7)&&t3(t,b7))if(t.visualDuration){const r=t.visualDuration,l=2*Math.PI/(r*1.2),u=l*l,h=2*Dn(.05,1,1-(t.bounce||0))*Math.sqrt(u);a={...a,mass:Ht.mass,stiffness:u,damping:h}}else{const r=g7(t);a={...a,...r,mass:Ht.mass},a.isResolvedFromDuration=!0}return a}function io(t=Ht.visualDuration,a=Ht.bounce){const r=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:a}:t;let{restSpeed:l,restDelta:u}=r;const h=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],m={done:!1,value:h},{stiffness:p,damping:g,mass:y,duration:x,velocity:S,isResolvedFromDuration:$}=S7({...r,velocity:-un(r.velocity||0)}),V=S||0,k=g/(2*Math.sqrt(p*y)),G=f-h,U=un(Math.sqrt(p/y)),q=Math.abs(G)<5;l||(l=q?Ht.restSpeed.granular:Ht.restSpeed.default),u||(u=q?Ht.restDelta.granular:Ht.restDelta.default);let _;if(k<1){const N=z1(U,k);_=F=>{const Q=Math.exp(-k*U*F);return f-Q*((V+k*U*G)/N*Math.sin(N*F)+G*Math.cos(N*F))}}else if(k===1)_=N=>f-Math.exp(-U*N)*(G+(V+U*G)*N);else{const N=U*Math.sqrt(k*k-1);_=F=>{const Q=Math.exp(-k*U*F),tt=Math.min(N*F,300);return f-Q*((V+k*U*G)*Math.sinh(tt)+N*G*Math.cosh(tt))/N}}const K={calculatedDuration:$&&x||null,next:N=>{const F=_(N);if($)m.done=N>=x;else{let Q=N===0?V:0;k<1&&(Q=N===0?cn(V):zm(_,N,F));const tt=Math.abs(Q)<=l,St=Math.abs(f-F)<=u;m.done=tt&&St}return m.value=m.done?f:F,m},toString:()=>{const N=Math.min(h0(K),no),F=Am(Q=>K.next(N*Q).value,N,30);return N+"ms "+F},toTransition:()=>{}};return K}io.applyToOptions=t=>{const a=m7(t,100,io);return t.ease=a.ease,t.duration=cn(a.duration),t.type="keyframes",t};function M1({keyframes:t,velocity:a=0,power:r=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:h=500,modifyTarget:f,min:m,max:p,restDelta:g=.5,restSpeed:y}){const x=t[0],S={done:!1,value:x},$=tt=>m!==void 0&&tt<m||p!==void 0&&tt>p,V=tt=>m===void 0?p:p===void 0||Math.abs(m-tt)<Math.abs(p-tt)?m:p;let k=r*a;const G=x+k,U=f===void 0?G:f(G);U!==G&&(k=U-x);const q=tt=>-k*Math.exp(-tt/l),_=tt=>U+q(tt),K=tt=>{const St=q(tt),Nt=_(tt);S.done=Math.abs(St)<=g,S.value=S.done?U:Nt};let N,F;const Q=tt=>{$(S.value)&&(N=tt,F=io({keyframes:[S.value,V(S.value)],velocity:zm(_,tt,S.value),damping:u,stiffness:h,restDelta:g,restSpeed:y}))};return Q(0),{calculatedDuration:null,next:tt=>{let St=!1;return!F&&N===void 0&&(St=!0,K(tt),Q(tt)),N!==void 0&&tt>=N?F.next(tt-N):(!St&&K(tt),S)}}}function T7(t,a,r){const l=[],u=r||Cn.mix||Tm,h=t.length-1;for(let f=0;f<h;f++){let m=u(t[f],t[f+1]);if(a){const p=Array.isArray(a)?a[f]||Ze:a;m=hr(p,m)}l.push(m)}return l}function A7(t,a,{clamp:r=!0,ease:l,mixer:u}={}){const h=t.length;if(n0(h===a.length),h===1)return()=>a[0];if(h===2&&a[0]===a[1])return()=>a[1];const f=t[0]===t[1];t[0]>t[h-1]&&(t=[...t].reverse(),a=[...a].reverse());const m=T7(a,l,u),p=m.length,g=y=>{if(f&&y<t[0])return a[0];let x=0;if(p>1)for(;x<t.length-2&&!(y<t[x+1]);x++);const S=ar(t[x],t[x+1],y);return m[x](S)};return r?y=>g(Dn(t[0],t[h-1],y)):g}function z7(t,a){const r=t[t.length-1];for(let l=1;l<=a;l++){const u=ar(0,a,l);t.push(Vt(r,1,u))}}function M7(t){const a=[0];return z7(a,t.length-1),a}function w7(t,a){return t.map(r=>r*a)}function $7(t,a){return t.map(()=>a||hm).splice(0,t.length-1)}function Ws({duration:t=300,keyframes:a,times:r,ease:l="easeInOut"}){const u=H8(l)?l.map(Qd):Qd(l),h={done:!1,value:a[0]},f=w7(r&&r.length===a.length?r:M7(a),t),m=A7(f,a,{ease:Array.isArray(u)?u:$7(a,u)});return{calculatedDuration:t,next:p=>(h.value=m(p),h.done=p>=t,h)}}const E7=t=>t!==null;function d0(t,{repeat:a,repeatType:r="loop"},l,u=1){const h=t.filter(E7),m=u<0||a&&r!=="loop"&&a%2===1?0:h.length-1;return!m||l===void 0?h[m]:l}const D7={decay:M1,inertia:M1,tween:Ws,keyframes:Ws,spring:io};function Mm(t){typeof t.type=="string"&&(t.type=D7[t.type])}class m0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,r){return this.finished.then(a,r)}}const C7=t=>t/100;class p0 extends m0{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==Te.now()&&this.tick(Te.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;Mm(a);const{type:r=Ws,repeat:l=0,repeatDelay:u=0,repeatType:h,velocity:f=0}=a;let{keyframes:m}=a;const p=r||Ws;p!==Ws&&typeof m[0]!="number"&&(this.mixKeyframes=hr(C7,Tm(m[0],m[1])),m=[0,100]);const g=p({...a,keyframes:m});h==="mirror"&&(this.mirroredGenerator=p({...a,keyframes:[...m].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=h0(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+u,this.totalDuration=this.resolvedDuration*(l+1)-u,this.generator=g}updateTime(a){const r=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(a,r=!1){const{generator:l,totalDuration:u,mixKeyframes:h,mirroredGenerator:f,resolvedDuration:m,calculatedDuration:p}=this;if(this.startTime===null)return l.next(0);const{delay:g=0,keyframes:y,repeat:x,repeatType:S,repeatDelay:$,type:V,onUpdate:k,finalKeyframe:G}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-u/this.speed,this.startTime)),r?this.currentTime=a:this.updateTime(a);const U=this.currentTime-g*(this.playbackSpeed>=0?1:-1),q=this.playbackSpeed>=0?U<0:U>u;this.currentTime=Math.max(U,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let _=this.currentTime,K=l;if(x){const tt=Math.min(this.currentTime,u)/m;let St=Math.floor(tt),Nt=tt%1;!Nt&&tt>=1&&(Nt=1),Nt===1&&St--,St=Math.min(St,x+1),!!(St%2)&&(S==="reverse"?(Nt=1-Nt,$&&(Nt-=$/m)):S==="mirror"&&(K=f)),_=Dn(0,1,Nt)*m}const N=q?{done:!1,value:y[0]}:K.next(_);h&&(N.value=h(N.value));let{done:F}=N;!q&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return Q&&V!==M1&&(N.value=d0(y,this.options,G,this.speed)),k&&k(N.value),Q&&this.finish(),N}then(a,r){return this.finished.then(a,r)}get duration(){return un(this.calculatedDuration)}get time(){return un(this.currentTime)}set time(a){a=cn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(Te.now());const r=this.playbackSpeed!==a;this.playbackSpeed=a,r&&(this.time=un(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=d7,startTime:r}=this.options;this.driver||(this.driver=a(u=>this.tick(u))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=r??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Te.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function j7(t){for(let a=1;a<t.length;a++)t[a]??(t[a]=t[a-1])}const Ri=t=>t*180/Math.PI,w1=t=>{const a=Ri(Math.atan2(t[1],t[0]));return $1(a)},R7={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:w1,rotateZ:w1,skewX:t=>Ri(Math.atan(t[1])),skewY:t=>Ri(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},$1=t=>(t=t%360,t<0&&(t+=360),t),e3=w1,n3=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),i3=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),O7={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:n3,scaleY:i3,scale:t=>(n3(t)+i3(t))/2,rotateX:t=>$1(Ri(Math.atan2(t[6],t[5]))),rotateY:t=>$1(Ri(Math.atan2(-t[2],t[0]))),rotateZ:e3,rotate:e3,skewX:t=>Ri(Math.atan(t[4])),skewY:t=>Ri(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function E1(t){return t.includes("scale")?1:0}function D1(t,a){if(!t||t==="none")return E1(a);const r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(r)l=O7,u=r;else{const m=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=R7,u=m}if(!u)return E1(a);const h=l[a],f=u[1].split(",").map(B7);return typeof h=="function"?h(f):f[h]}const V7=(t,a)=>{const{transform:r="none"}=getComputedStyle(t);return D1(r,a)};function B7(t){return parseFloat(t.trim())}const Xa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pa=new Set(Xa),a3=t=>t===qa||t===ot,_7=new Set(["x","y","z"]),L7=Xa.filter(t=>!_7.has(t));function H7(t){const a=[];return L7.forEach(r=>{const l=t.getValue(r);l!==void 0&&(a.push([r,l.get()]),l.set(r.startsWith("scale")?1:0))}),a}const Bi={width:({x:t},{paddingLeft:a="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(a)-parseFloat(r),height:({y:t},{paddingTop:a="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(a)-parseFloat(r),top:(t,{top:a})=>parseFloat(a),left:(t,{left:a})=>parseFloat(a),bottom:({y:t},{top:a})=>parseFloat(a)+(t.max-t.min),right:({x:t},{left:a})=>parseFloat(a)+(t.max-t.min),x:(t,{transform:a})=>D1(a,"x"),y:(t,{transform:a})=>D1(a,"y")};Bi.translateX=Bi.x;Bi.translateY=Bi.y;const _i=new Set;let C1=!1,j1=!1,R1=!1;function wm(){if(j1){const t=Array.from(_i).filter(l=>l.needsMeasurement),a=new Set(t.map(l=>l.element)),r=new Map;a.forEach(l=>{const u=H7(l);u.length&&(r.set(l,u),l.render())}),t.forEach(l=>l.measureInitialState()),a.forEach(l=>{l.render();const u=r.get(l);u&&u.forEach(([h,f])=>{l.getValue(h)?.set(f)})}),t.forEach(l=>l.measureEndState()),t.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}j1=!1,C1=!1,_i.forEach(t=>t.complete(R1)),_i.clear()}function $m(){_i.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(j1=!0)})}function N7(){R1=!0,$m(),wm(),R1=!1}class g0{constructor(a,r,l,u,h,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=r,this.name=l,this.motionValue=u,this.element=h,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(_i.add(this),C1||(C1=!0,Bt.read($m),Bt.resolveKeyframes(wm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:r,element:l,motionValue:u}=this;if(a[0]===null){const h=u?.get(),f=a[a.length-1];if(h!==void 0)a[0]=h;else if(l&&r){const m=l.readValue(r,f);m!=null&&(a[0]=m)}a[0]===void 0&&(a[0]=f),u&&h===void 0&&u.set(a[0])}j7(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),_i.delete(this)}cancel(){this.state==="scheduled"&&(_i.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const U7=t=>t.startsWith("--");function k7(t,a,r){U7(a)?t.style.setProperty(a,r):t.style[a]=r}const Y7=i0(()=>window.ScrollTimeline!==void 0),G7={};function q7(t,a){const r=i0(t);return()=>G7[a]??r()}const Em=q7(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ks=([t,a,r,l])=>`cubic-bezier(${t}, ${a}, ${r}, ${l})`,s3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ks([0,.65,.55,1]),circOut:Ks([.55,0,1,.45]),backIn:Ks([.31,.01,.66,-.59]),backOut:Ks([.33,1.53,.69,.99])};function Dm(t,a){if(t)return typeof t=="function"?Em()?Am(t,a):"ease-out":dm(t)?Ks(t):Array.isArray(t)?t.map(r=>Dm(r,a)||s3.easeOut):s3[t]}function X7(t,a,r,{delay:l=0,duration:u=300,repeat:h=0,repeatType:f="loop",ease:m="easeOut",times:p}={},g=void 0){const y={[a]:r};p&&(y.offset=p);const x=Dm(m,u);Array.isArray(x)&&(y.easing=x);const S={delay:l,duration:u,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),t.animate(y,S)}function Cm(t){return typeof t=="function"&&"applyToOptions"in t}function P7({type:t,...a}){return Cm(t)&&Em()?t.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class Z7 extends m0{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:r,name:l,keyframes:u,pseudoElement:h,allowFlatten:f=!1,finalKeyframe:m,onComplete:p}=a;this.isPseudoElement=!!h,this.allowFlatten=f,this.options=a,n0(typeof a.type!="string");const g=P7(a);this.animation=X7(r,l,u,g,h),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const y=d0(u,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(y):k7(r,l,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return un(Number(a))}get time(){return un(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=cn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&Y7()?(this.animation.timeline=a,Ze):r(this)}}const jm={anticipate:cm,backInOut:om,circInOut:fm};function Q7(t){return t in jm}function K7(t){typeof t.ease=="string"&&Q7(t.ease)&&(t.ease=jm[t.ease])}const r3=10;class F7 extends Z7{constructor(a){K7(a),Mm(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:r,onUpdate:l,onComplete:u,element:h,...f}=this.options;if(!r)return;if(a!==void 0){r.set(a);return}const m=new p0({...f,autoplay:!1}),p=cn(this.finishedTime??this.time);r.setWithVelocity(m.sample(p-r3).value,m.sample(p).value,r3),m.stop()}}const l3=(t,a)=>a==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ri.test(t)||t==="0")&&!t.startsWith("url("));function J7(t){const a=t[0];if(t.length===1)return!0;for(let r=0;r<t.length;r++)if(t[r]!==a)return!0}function W7(t,a,r,l){const u=t[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const h=t[t.length-1],f=l3(u,a),m=l3(h,a);return!f||!m?!1:J7(t)||(r==="spring"||Cm(r))&&l}function Rm(t){return em(t)&&"offsetHeight"in t}const I7=new Set(["opacity","clipPath","filter","transform"]),t9=i0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function e9(t){const{motionValue:a,name:r,repeatDelay:l,repeatType:u,damping:h,type:f}=t;if(!Rm(a?.owner?.current))return!1;const{onUpdate:m,transformTemplate:p}=a.owner.getProps();return t9()&&r&&I7.has(r)&&(r!=="transform"||!p)&&!m&&!l&&u!=="mirror"&&h!==0&&f!=="inertia"}const n9=40;class i9 extends m0{constructor({autoplay:a=!0,delay:r=0,type:l="keyframes",repeat:u=0,repeatDelay:h=0,repeatType:f="loop",keyframes:m,name:p,motionValue:g,element:y,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Te.now();const S={autoplay:a,delay:r,type:l,repeat:u,repeatDelay:h,repeatType:f,name:p,motionValue:g,element:y,...x},$=y?.KeyframeResolver||g0;this.keyframeResolver=new $(m,(V,k,G)=>this.onKeyframesResolved(V,k,S,!G),p,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,r,l,u){this.keyframeResolver=void 0;const{name:h,type:f,velocity:m,delay:p,isHandoff:g,onUpdate:y}=l;this.resolvedAt=Te.now(),W7(a,h,f,m)||((Cn.instantAnimations||!p)&&y?.(d0(a,l,r)),a[0]=a[a.length-1],l.duration=0,l.repeat=0);const S={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>n9?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...l,keyframes:a},$=!g&&e9(S)?new F7({...S,element:S.motionValue.owner.current}):new p0(S);$.finished.then(()=>this.notifyFinished()).catch(Ze),this.pendingTimeline&&(this.stopTimeline=$.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=$}get finished(){return this._animation?this.animation.finished:this._finished}then(a,r){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),N7()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const a9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function s9(t){const a=a9.exec(t);if(!a)return[,];const[,r,l,u]=a;return[`--${r??l}`,u]}function Om(t,a,r=1){const[l,u]=s9(t);if(!l)return;const h=window.getComputedStyle(a).getPropertyValue(l);if(h){const f=h.trim();return tm(f)?parseFloat(f):f}return o0(u)?Om(u,a,r+1):u}function y0(t,a){return t?.[a]??t?.default??t}const Vm=new Set(["width","height","top","left","right","bottom",...Xa]),r9={test:t=>t==="auto",parse:t=>t},Bm=t=>a=>a.test(t),_m=[qa,ot,fn,ni,J8,F8,r9],o3=t=>_m.find(Bm(t));function l9(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||nm(t):!0}const o9=new Set(["brightness","contrast","saturate","opacity"]);function c9(t){const[a,r]=t.slice(0,-1).split("(");if(a==="drop-shadow")return t;const[l]=r.match(c0)||[];if(!l)return t;const u=r.replace(l,"");let h=o9.has(a)?1:0;return l!==r&&(h*=100),a+"("+h+u+")"}const u9=/\b([a-z-]*)\(.*?\)/gu,O1={...ri,getAnimatableNone:t=>{const a=t.match(u9);return a?a.map(c9).join(" "):t}},c3={...qa,transform:Math.round},f9={rotate:ni,rotateX:ni,rotateY:ni,rotateZ:ni,scale:Vl,scaleX:Vl,scaleY:Vl,scaleZ:Vl,skew:ni,skewX:ni,skewY:ni,distance:ot,translateX:ot,translateY:ot,translateZ:ot,x:ot,y:ot,z:ot,perspective:ot,transformPerspective:ot,opacity:sr,originX:Fd,originY:Fd,originZ:ot},v0={borderWidth:ot,borderTopWidth:ot,borderRightWidth:ot,borderBottomWidth:ot,borderLeftWidth:ot,borderRadius:ot,radius:ot,borderTopLeftRadius:ot,borderTopRightRadius:ot,borderBottomRightRadius:ot,borderBottomLeftRadius:ot,width:ot,maxWidth:ot,height:ot,maxHeight:ot,top:ot,right:ot,bottom:ot,left:ot,padding:ot,paddingTop:ot,paddingRight:ot,paddingBottom:ot,paddingLeft:ot,margin:ot,marginTop:ot,marginRight:ot,marginBottom:ot,marginLeft:ot,backgroundPositionX:ot,backgroundPositionY:ot,...f9,zIndex:c3,fillOpacity:sr,strokeOpacity:sr,numOctaves:c3},h9={...v0,color:Pt,backgroundColor:Pt,outlineColor:Pt,fill:Pt,stroke:Pt,borderColor:Pt,borderTopColor:Pt,borderRightColor:Pt,borderBottomColor:Pt,borderLeftColor:Pt,filter:O1,WebkitFilter:O1},Lm=t=>h9[t];function Hm(t,a){let r=Lm(t);return r!==O1&&(r=ri),r.getAnimatableNone?r.getAnimatableNone(a):void 0}const d9=new Set(["auto","none","0"]);function m9(t,a,r){let l=0,u;for(;l<t.length&&!u;){const h=t[l];typeof h=="string"&&!d9.has(h)&&rr(h).values.length&&(u=t[l]),l++}if(u&&r)for(const h of a)t[h]=Hm(r,u)}class p9 extends g0{constructor(a,r,l,u,h){super(a,r,l,u,h,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:r,name:l}=this;if(!r||!r.current)return;super.readKeyframes();for(let p=0;p<a.length;p++){let g=a[p];if(typeof g=="string"&&(g=g.trim(),o0(g))){const y=Om(g,r.current);y!==void 0&&(a[p]=y),p===a.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Vm.has(l)||a.length!==2)return;const[u,h]=a,f=o3(u),m=o3(h);if(f!==m)if(a3(f)&&a3(m))for(let p=0;p<a.length;p++){const g=a[p];typeof g=="string"&&(a[p]=parseFloat(g))}else Bi[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:r}=this,l=[];for(let u=0;u<a.length;u++)(a[u]===null||l9(a[u]))&&l.push(u);l.length&&m9(a,l,r)}measureInitialState(){const{element:a,unresolvedKeyframes:r,name:l}=this;if(!a||!a.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bi[l](a.measureViewportBox(),window.getComputedStyle(a.current)),r[0]=this.measuredOrigin;const u=r[r.length-1];u!==void 0&&a.getValue(l,u).jump(u,!1)}measureEndState(){const{element:a,name:r,unresolvedKeyframes:l}=this;if(!a||!a.current)return;const u=a.getValue(r);u&&u.jump(this.measuredOrigin,!1);const h=l.length-1,f=l[h];l[h]=Bi[r](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,p])=>{a.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function g9(t,a,r){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let l=document;const u=r?.[t]??l.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t)}const Nm=(t,a)=>a&&typeof t=="number"?a.transform(t):t,u3=30,y9=t=>!isNaN(parseFloat(t));class v9{constructor(a,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,u=!0)=>{const h=Te.now();if(this.updatedAt!==h&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();u&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(a),this.owner=r.owner}setCurrent(a){this.current=a,this.updatedAt=Te.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=y9(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,r){this.events[a]||(this.events[a]=new a0);const l=this.events[a].add(r);return a==="change"?()=>{l(),Bt.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,r){this.passiveEffect=a,this.stopPassiveEffect=r}set(a,r=!0){!r||!this.passiveEffect?this.updateAndNotify(a,r):this.passiveEffect(a,this.updateAndNotify)}setWithVelocity(a,r,l){this.set(r),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-l}jump(a,r=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=Te.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>u3)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,u3);return im(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(a){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=a(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ka(t,a){return new v9(t,a)}const{schedule:b0}=mm(queueMicrotask,!1),Ie={x:!1,y:!1};function Um(){return Ie.x||Ie.y}function b9(t){return t==="x"||t==="y"?Ie[t]?null:(Ie[t]=!0,()=>{Ie[t]=!1}):Ie.x||Ie.y?null:(Ie.x=Ie.y=!0,()=>{Ie.x=Ie.y=!1})}function km(t,a){const r=g9(t),l=new AbortController,u={passive:!0,...a,signal:l.signal};return[r,u,()=>l.abort()]}function f3(t){return!(t.pointerType==="touch"||Um())}function x9(t,a,r={}){const[l,u,h]=km(t,r),f=m=>{if(!f3(m))return;const{target:p}=m,g=a(p,m);if(typeof g!="function"||!p)return;const y=x=>{f3(x)&&(g(x),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,u)};return l.forEach(m=>{m.addEventListener("pointerenter",f,u)}),h}const Ym=(t,a)=>a?t===a?!0:Ym(t,a.parentElement):!1,x0=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,S9=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function T9(t){return S9.has(t.tagName)||t.tabIndex!==-1}const Pl=new WeakSet;function h3(t){return a=>{a.key==="Enter"&&t(a)}}function Wu(t,a){t.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const A9=(t,a)=>{const r=t.currentTarget;if(!r)return;const l=h3(()=>{if(Pl.has(r))return;Wu(r,"down");const u=h3(()=>{Wu(r,"up")}),h=()=>Wu(r,"cancel");r.addEventListener("keyup",u,a),r.addEventListener("blur",h,a)});r.addEventListener("keydown",l,a),r.addEventListener("blur",()=>r.removeEventListener("keydown",l),a)};function d3(t){return x0(t)&&!Um()}function z9(t,a,r={}){const[l,u,h]=km(t,r),f=m=>{const p=m.currentTarget;if(!d3(m))return;Pl.add(p);const g=a(p,m),y=($,V)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),Pl.has(p)&&Pl.delete(p),d3($)&&typeof g=="function"&&g($,{success:V})},x=$=>{y($,p===window||p===document||r.useGlobalTarget||Ym(p,$.target))},S=$=>{y($,!1)};window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",S,u)};return l.forEach(m=>{(r.useGlobalTarget?window:m).addEventListener("pointerdown",f,u),Rm(m)&&(m.addEventListener("focus",g=>A9(g,u)),!T9(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),h}function Gm(t){return em(t)&&"ownerSVGElement"in t}function M9(t){return Gm(t)&&t.tagName==="svg"}const me=t=>!!(t&&t.getVelocity),w9=[..._m,Pt,ri],$9=t=>w9.find(Bm(t)),qm=W.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function E9(t=!0){const a=W.useContext(I1);if(a===null)return[!0,null];const{isPresent:r,onExitComplete:l,register:u}=a,h=W.useId();W.useEffect(()=>{if(t)return u(h)},[t]);const f=W.useCallback(()=>t&&l&&l(h),[h,l,t]);return!r&&l?[!1,f]:[!0]}const Xm=W.createContext({strict:!1}),m3={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ya={};for(const t in m3)Ya[t]={isEnabled:a=>m3[t].some(r=>!!a[r])};function D9(t){for(const a in t)Ya[a]={...Ya[a],...t[a]}}const C9=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ao(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||C9.has(t)}let Pm=t=>!ao(t);function j9(t){typeof t=="function"&&(Pm=a=>a.startsWith("on")?!ao(a):t(a))}try{j9(require("@emotion/is-prop-valid").default)}catch{}function R9(t,a,r){const l={};for(const u in t)u==="values"&&typeof t.values=="object"||(Pm(u)||r===!0&&ao(u)||!a&&!ao(u)||t.draggable&&u.startsWith("onDrag"))&&(l[u]=t[u]);return l}function O9(t){if(typeof Proxy>"u")return t;const a=new Map,r=(...l)=>t(...l);return new Proxy(r,{get:(l,u)=>u==="create"?t:(a.has(u)||a.set(u,t(u)),a.get(u))})}const bo=W.createContext({});function xo(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function lr(t){return typeof t=="string"||Array.isArray(t)}const S0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],T0=["initial",...S0];function So(t){return xo(t.animate)||T0.some(a=>lr(t[a]))}function Zm(t){return!!(So(t)||t.variants)}function V9(t,a){if(So(t)){const{initial:r,animate:l}=t;return{initial:r===!1||lr(r)?r:void 0,animate:lr(l)?l:void 0}}return t.inherit!==!1?a:{}}function B9(t){const{initial:a,animate:r}=V9(t,W.useContext(bo));return W.useMemo(()=>({initial:a,animate:r}),[p3(a),p3(r)])}function p3(t){return Array.isArray(t)?t.join(" "):t}const _9=Symbol.for("motionComponentSymbol");function Ra(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function L9(t,a,r){return W.useCallback(l=>{l&&t.onMount&&t.onMount(l),a&&(l?a.mount(l):a.unmount()),r&&(typeof r=="function"?r(l):Ra(r)&&(r.current=l))},[a])}const A0=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),H9="framerAppearId",Qm="data-"+A0(H9),Km=W.createContext({});function N9(t,a,r,l,u){const{visualElement:h}=W.useContext(bo),f=W.useContext(Xm),m=W.useContext(I1),p=W.useContext(qm).reducedMotion,g=W.useRef(null);l=l||f.renderer,!g.current&&l&&(g.current=l(t,{visualState:a,parent:h,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:p}));const y=g.current,x=W.useContext(Km);y&&!y.projection&&u&&(y.type==="html"||y.type==="svg")&&U9(g.current,r,u,x);const S=W.useRef(!1);W.useInsertionEffect(()=>{y&&S.current&&y.update(r,m)});const $=r[Qm],V=W.useRef(!!$&&!window.MotionHandoffIsComplete?.($)&&window.MotionHasOptimisedAnimation?.($));return j8(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),b0.render(y.render),V.current&&y.animationState&&y.animationState.animateChanges())}),W.useEffect(()=>{y&&(!V.current&&y.animationState&&y.animationState.animateChanges(),V.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.($)}),V.current=!1))}),y}function U9(t,a,r,l){const{layoutId:u,layout:h,drag:f,dragConstraints:m,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=a;t.projection=new r(t.latestValues,a["data-framer-portal-id"]?void 0:Fm(t.parent)),t.projection.setOptions({layoutId:u,layout:h,alwaysMeasureLayout:!!f||m&&Ra(m),visualElement:t,animationType:typeof h=="string"?h:"both",initialPromotionConfig:l,crossfade:y,layoutScroll:p,layoutRoot:g})}function Fm(t){if(t)return t.options.allowProjection!==!1?t.projection:Fm(t.parent)}function k9({preloadedFeatures:t,createVisualElement:a,useRender:r,useVisualState:l,Component:u}){t&&D9(t);function h(m,p){let g;const y={...W.useContext(qm),...m,layoutId:Y9(m)},{isStatic:x}=y,S=B9(m),$=l(m,x);if(!x&&W1){G9();const V=q9(y);g=V.MeasureLayout,S.visualElement=N9(u,$,y,a,V.ProjectionNode)}return b.jsxs(bo.Provider,{value:S,children:[g&&S.visualElement?b.jsx(g,{visualElement:S.visualElement,...y}):null,r(u,m,L9($,S.visualElement,p),$,x,S.visualElement)]})}h.displayName=`motion.${typeof u=="string"?u:`create(${u.displayName??u.name??""})`}`;const f=W.forwardRef(h);return f[_9]=u,f}function Y9({layoutId:t}){const a=W.useContext(I4).id;return a&&t!==void 0?a+"-"+t:t}function G9(t,a){W.useContext(Xm).strict}function q9(t){const{drag:a,layout:r}=Ya;if(!a&&!r)return{};const l={...a,...r};return{MeasureLayout:a?.isEnabled(t)||r?.isEnabled(t)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const or={};function X9(t){for(const a in t)or[a]=t[a],l0(a)&&(or[a].isCSSVariable=!0)}function Jm(t,{layout:a,layoutId:r}){return Pa.has(t)||t.startsWith("origin")||(a||r!==void 0)&&(!!or[t]||t==="opacity")}const P9={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Z9=Xa.length;function Q9(t,a,r){let l="",u=!0;for(let h=0;h<Z9;h++){const f=Xa[h],m=t[f];if(m===void 0)continue;let p=!0;if(typeof m=="number"?p=m===(f.startsWith("scale")?1:0):p=parseFloat(m)===0,!p||r){const g=Nm(m,v0[f]);if(!p){u=!1;const y=P9[f]||f;l+=`${y}(${g}) `}r&&(a[f]=g)}}return l=l.trim(),r?l=r(a,u?"":l):u&&(l="none"),l}function z0(t,a,r){const{style:l,vars:u,transformOrigin:h}=t;let f=!1,m=!1;for(const p in a){const g=a[p];if(Pa.has(p)){f=!0;continue}else if(l0(p)){u[p]=g;continue}else{const y=Nm(g,v0[p]);p.startsWith("origin")?(m=!0,h[p]=y):l[p]=y}}if(a.transform||(f||r?l.transform=Q9(a,t.transform,r):l.transform&&(l.transform="none")),m){const{originX:p="50%",originY:g="50%",originZ:y=0}=h;l.transformOrigin=`${p} ${g} ${y}`}}const M0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Wm(t,a,r){for(const l in a)!me(a[l])&&!Jm(l,r)&&(t[l]=a[l])}function K9({transformTemplate:t},a){return W.useMemo(()=>{const r=M0();return z0(r,a,t),Object.assign({},r.vars,r.style)},[a])}function F9(t,a){const r=t.style||{},l={};return Wm(l,r,t),Object.assign(l,K9(t,a)),l}function J9(t,a){const r={},l=F9(t,a);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=l,r}const W9={offset:"stroke-dashoffset",array:"stroke-dasharray"},I9={offset:"strokeDashoffset",array:"strokeDasharray"};function ty(t,a,r=1,l=0,u=!0){t.pathLength=1;const h=u?W9:I9;t[h.offset]=ot.transform(-l);const f=ot.transform(a),m=ot.transform(r);t[h.array]=`${f} ${m}`}function Im(t,{attrX:a,attrY:r,attrScale:l,pathLength:u,pathSpacing:h=1,pathOffset:f=0,...m},p,g,y){if(z0(t,m,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:S}=t;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete x.transformBox),a!==void 0&&(x.x=a),r!==void 0&&(x.y=r),l!==void 0&&(x.scale=l),u!==void 0&&ty(x,u,h,f,!1)}const t5=()=>({...M0(),attrs:{}}),e5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ey(t,a,r,l){const u=W.useMemo(()=>{const h=t5();return Im(h,a,e5(l),t.transformTemplate,t.style),{...h.attrs,style:{...h.style}}},[a]);if(t.style){const h={};Wm(h,t.style,t),u.style={...h,...u.style}}return u}const ny=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function w0(t){return typeof t!="string"||t.includes("-")?!1:!!(ny.indexOf(t)>-1||/[A-Z]/u.test(t))}function iy(t=!1){return(r,l,u,{latestValues:h},f)=>{const p=(w0(r)?ey:J9)(l,h,f,r),g=R9(l,typeof r=="string",t),y=r!==W.Fragment?{...g,...p,ref:u}:{},{children:x}=l,S=W.useMemo(()=>me(x)?x.get():x,[x]);return W.createElement(r,{...y,children:S})}}function g3(t){const a=[{},{}];return t?.values.forEach((r,l)=>{a[0][l]=r.get(),a[1][l]=r.getVelocity()}),a}function $0(t,a,r,l){if(typeof a=="function"){const[u,h]=g3(l);a=a(r!==void 0?r:t.custom,u,h)}if(typeof a=="string"&&(a=t.variants&&t.variants[a]),typeof a=="function"){const[u,h]=g3(l);a=a(r!==void 0?r:t.custom,u,h)}return a}function Zl(t){return me(t)?t.get():t}function ay({scrapeMotionValuesFromProps:t,createRenderState:a},r,l,u){return{latestValues:sy(r,l,u,t),renderState:a()}}const n5=t=>(a,r)=>{const l=W.useContext(bo),u=W.useContext(I1),h=()=>ay(t,a,l,u);return r?h():C8(h)};function sy(t,a,r,l){const u={},h=l(t,{});for(const S in h)u[S]=Zl(h[S]);let{initial:f,animate:m}=t;const p=So(t),g=Zm(t);a&&g&&!p&&t.inherit!==!1&&(f===void 0&&(f=a.initial),m===void 0&&(m=a.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const x=y?m:f;if(x&&typeof x!="boolean"&&!xo(x)){const S=Array.isArray(x)?x:[x];for(let $=0;$<S.length;$++){const V=$0(t,S[$]);if(V){const{transitionEnd:k,transition:G,...U}=V;for(const q in U){let _=U[q];if(Array.isArray(_)){const K=y?_.length-1:0;_=_[K]}_!==null&&(u[q]=_)}for(const q in k)u[q]=k[q]}}}return u}function E0(t,a,r){const{style:l}=t,u={};for(const h in l)(me(l[h])||a.style&&me(a.style[h])||Jm(h,t)||r?.getValue(h)?.liveStyle!==void 0)&&(u[h]=l[h]);return u}const ry={useVisualState:n5({scrapeMotionValuesFromProps:E0,createRenderState:M0})};function i5(t,a,r){const l=E0(t,a,r);for(const u in t)if(me(t[u])||me(a[u])){const h=Xa.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[h]=t[u]}return l}const ly={useVisualState:n5({scrapeMotionValuesFromProps:i5,createRenderState:t5})};function oy(t,a){return function(l,{forwardMotionProps:u}={forwardMotionProps:!1}){const f={...w0(l)?ly:ry,preloadedFeatures:t,useRender:iy(u),createVisualElement:a,Component:l};return k9(f)}}function cr(t,a,r){const l=t.getProps();return $0(l,a,r!==void 0?r:l.custom,t)}const V1=t=>Array.isArray(t);function cy(t,a,r){t.hasValue(a)?t.getValue(a).set(r):t.addValue(a,ka(r))}function uy(t){return V1(t)?t[t.length-1]||0:t}function fy(t,a){const r=cr(t,a);let{transitionEnd:l={},transition:u={},...h}=r||{};h={...h,...l};for(const f in h){const m=uy(h[f]);cy(t,f,m)}}function hy(t){return!!(me(t)&&t.add)}function B1(t,a){const r=t.getValue("willChange");if(hy(r))return r.add(a);if(!r&&Cn.WillChange){const l=new Cn.WillChange("auto");t.addValue("willChange",l),l.add(a)}}function a5(t){return t.props[Qm]}const dy=t=>t!==null;function my(t,{repeat:a,repeatType:r="loop"},l){const u=t.filter(dy),h=a&&r!=="loop"&&a%2===1?0:u.length-1;return u[h]}const py={type:"spring",stiffness:500,damping:25,restSpeed:10},gy=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),yy={type:"keyframes",duration:.8},vy={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},by=(t,{keyframes:a})=>a.length>2?yy:Pa.has(t)?t.startsWith("scale")?gy(a[1]):py:vy;function xy({when:t,delay:a,delayChildren:r,staggerChildren:l,staggerDirection:u,repeat:h,repeatType:f,repeatDelay:m,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const D0=(t,a,r,l={},u,h)=>f=>{const m=y0(l,t)||{},p=m.delay||l.delay||0;let{elapsed:g=0}=l;g=g-cn(p);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-g,onUpdate:S=>{a.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:t,motionValue:a,element:h?void 0:u};xy(m)||Object.assign(y,by(t,y)),y.duration&&(y.duration=cn(y.duration)),y.repeatDelay&&(y.repeatDelay=cn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(x=!0)),(Cn.instantAnimations||Cn.skipAnimations)&&(x=!0,y.duration=0,y.delay=0),y.allowFlatten=!m.type&&!m.ease,x&&!h&&a.get()!==void 0){const S=my(y.keyframes,m);if(S!==void 0){Bt.update(()=>{y.onUpdate(S),y.onComplete()});return}}return m.isSync?new p0(y):new i9(y)};function Sy({protectedKeys:t,needsAnimating:a},r){const l=t.hasOwnProperty(r)&&a[r]!==!0;return a[r]=!1,l}function s5(t,a,{delay:r=0,transitionOverride:l,type:u}={}){let{transition:h=t.getDefaultTransition(),transitionEnd:f,...m}=a;l&&(h=l);const p=[],g=u&&t.animationState&&t.animationState.getState()[u];for(const y in m){const x=t.getValue(y,t.latestValues[y]??null),S=m[y];if(S===void 0||g&&Sy(g,y))continue;const $={delay:r,...y0(h||{},y)},V=x.get();if(V!==void 0&&!x.isAnimating&&!Array.isArray(S)&&S===V&&!$.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const U=a5(t);if(U){const q=window.MotionHandoffAnimation(U,y,Bt);q!==null&&($.startTime=q,k=!0)}}B1(t,y),x.start(D0(y,x,S,t.shouldReduceMotion&&Vm.has(y)?{type:!1}:$,t,k));const G=x.animation;G&&p.push(G)}return f&&Promise.all(p).then(()=>{Bt.update(()=>{f&&fy(t,f)})}),p}function _1(t,a,r={}){const l=cr(t,a,r.type==="exit"?t.presenceContext?.custom:void 0);let{transition:u=t.getDefaultTransition()||{}}=l||{};r.transitionOverride&&(u=r.transitionOverride);const h=l?()=>Promise.all(s5(t,l,r)):()=>Promise.resolve(),f=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=u;return Ty(t,a,g+p,y,x,r)}:()=>Promise.resolve(),{when:m}=u;if(m){const[p,g]=m==="beforeChildren"?[h,f]:[f,h];return p().then(()=>g())}else return Promise.all([h(),f(r.delay)])}function Ty(t,a,r=0,l=0,u=1,h){const f=[],m=(t.variantChildren.size-1)*l,p=u===1?(g=0)=>g*l:(g=0)=>m-g*l;return Array.from(t.variantChildren).sort(Ay).forEach((g,y)=>{g.notify("AnimationStart",a),f.push(_1(g,a,{...h,delay:r+p(y)}).then(()=>g.notify("AnimationComplete",a)))}),Promise.all(f)}function Ay(t,a){return t.sortNodePosition(a)}function zy(t,a,r={}){t.notify("AnimationStart",a);let l;if(Array.isArray(a)){const u=a.map(h=>_1(t,h,r));l=Promise.all(u)}else if(typeof a=="string")l=_1(t,a,r);else{const u=typeof a=="function"?cr(t,a,r.custom):a;l=Promise.all(s5(t,u,r))}return l.then(()=>{t.notify("AnimationComplete",a)})}function r5(t,a){if(!Array.isArray(a))return!1;const r=a.length;if(r!==t.length)return!1;for(let l=0;l<r;l++)if(a[l]!==t[l])return!1;return!0}const My=T0.length;function l5(t){if(!t)return;if(!t.isControllingVariants){const r=t.parent?l5(t.parent)||{}:{};return t.props.initial!==void 0&&(r.initial=t.props.initial),r}const a={};for(let r=0;r<My;r++){const l=T0[r],u=t.props[l];(lr(u)||u===!1)&&(a[l]=u)}return a}const wy=[...S0].reverse(),$y=S0.length;function Ey(t){return a=>Promise.all(a.map(({animation:r,options:l})=>zy(t,r,l)))}function Dy(t){let a=Ey(t),r=y3(),l=!0;const u=p=>(g,y)=>{const x=cr(t,y,p==="exit"?t.presenceContext?.custom:void 0);if(x){const{transition:S,transitionEnd:$,...V}=x;g={...g,...V,...$}}return g};function h(p){a=p(t)}function f(p){const{props:g}=t,y=l5(t.parent)||{},x=[],S=new Set;let $={},V=1/0;for(let G=0;G<$y;G++){const U=wy[G],q=r[U],_=g[U]!==void 0?g[U]:y[U],K=lr(_),N=U===p?q.isActive:null;N===!1&&(V=G);let F=_===y[U]&&_!==g[U]&&K;if(F&&l&&t.manuallyAnimateOnMount&&(F=!1),q.protectedKeys={...$},!q.isActive&&N===null||!_&&!q.prevProp||xo(_)||typeof _=="boolean")continue;const Q=Cy(q.prevProp,_);let tt=Q||U===p&&q.isActive&&!F&&K||G>V&&K,St=!1;const Nt=Array.isArray(_)?_:[_];let Jt=Nt.reduce(u(U),{});N===!1&&(Jt={});const{prevResolvedValues:Ut={}}=q,Ke={...Ut,...Jt},Oe=Y=>{tt=!0,S.has(Y)&&(St=!0,S.delete(Y)),q.needsAnimating[Y]=!0;const I=t.getValue(Y);I&&(I.liveStyle=!1)};for(const Y in Ke){const I=Jt[Y],ct=Ut[Y];if($.hasOwnProperty(Y))continue;let z=!1;V1(I)&&V1(ct)?z=!r5(I,ct):z=I!==ct,z?I!=null?Oe(Y):S.add(Y):I!==void 0&&S.has(Y)?Oe(Y):q.protectedKeys[Y]=!0}q.prevProp=_,q.prevResolvedValues=Jt,q.isActive&&($={...$,...Jt}),l&&t.blockInitialAnimation&&(tt=!1),tt&&(!(F&&Q)||St)&&x.push(...Nt.map(Y=>({animation:Y,options:{type:U}})))}if(S.size){const G={};if(typeof g.initial!="boolean"){const U=cr(t,Array.isArray(g.initial)?g.initial[0]:g.initial);U&&U.transition&&(G.transition=U.transition)}S.forEach(U=>{const q=t.getBaseTarget(U),_=t.getValue(U);_&&(_.liveStyle=!0),G[U]=q??null}),x.push({animation:G})}let k=!!x.length;return l&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(k=!1),l=!1,k?a(x):Promise.resolve()}function m(p,g){if(r[p].isActive===g)return Promise.resolve();t.variantChildren?.forEach(x=>x.animationState?.setActive(p,g)),r[p].isActive=g;const y=f(p);for(const x in r)r[x].protectedKeys={};return y}return{animateChanges:f,setActive:m,setAnimateFunction:h,getState:()=>r,reset:()=>{r=y3(),l=!0}}}function Cy(t,a){return typeof a=="string"?a!==t:Array.isArray(a)?!r5(a,t):!1}function $i(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function y3(){return{animate:$i(!0),whileInView:$i(),whileHover:$i(),whileTap:$i(),whileDrag:$i(),whileFocus:$i(),exit:$i()}}class li{constructor(a){this.isMounted=!1,this.node=a}update(){}}class jy extends li{constructor(a){super(a),a.animationState||(a.animationState=Dy(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();xo(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:r}=this.node.prevProps||{};a!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Ry=0;class Oy extends li{constructor(){super(...arguments),this.id=Ry++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:r}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===l)return;const u=this.node.animationState.setActive("exit",!a);r&&!a&&u.then(()=>{r(this.id)})}mount(){const{register:a,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const Vy={animation:{Feature:jy},exit:{Feature:Oy}};function ur(t,a,r,l={passive:!0}){return t.addEventListener(a,r,l),()=>t.removeEventListener(a,r)}function pr(t){return{point:{x:t.pageX,y:t.pageY}}}const By=t=>a=>x0(a)&&t(a,pr(a));function Is(t,a,r,l){return ur(t,a,By(r),l)}function o5({top:t,left:a,right:r,bottom:l}){return{x:{min:a,max:r},y:{min:t,max:l}}}function _y({x:t,y:a}){return{top:a.min,right:t.max,bottom:a.max,left:t.min}}function Ly(t,a){if(!a)return t;const r=a({x:t.left,y:t.top}),l=a({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:l.y,right:l.x}}const c5=1e-4,Hy=1-c5,Ny=1+c5,u5=.01,Uy=0-u5,ky=0+u5;function ge(t){return t.max-t.min}function Yy(t,a,r){return Math.abs(t-a)<=r}function v3(t,a,r,l=.5){t.origin=l,t.originPoint=Vt(a.min,a.max,t.origin),t.scale=ge(r)/ge(a),t.translate=Vt(r.min,r.max,t.origin)-t.originPoint,(t.scale>=Hy&&t.scale<=Ny||isNaN(t.scale))&&(t.scale=1),(t.translate>=Uy&&t.translate<=ky||isNaN(t.translate))&&(t.translate=0)}function tr(t,a,r,l){v3(t.x,a.x,r.x,l?l.originX:void 0),v3(t.y,a.y,r.y,l?l.originY:void 0)}function b3(t,a,r){t.min=r.min+a.min,t.max=t.min+ge(a)}function Gy(t,a,r){b3(t.x,a.x,r.x),b3(t.y,a.y,r.y)}function x3(t,a,r){t.min=a.min-r.min,t.max=t.min+ge(a)}function er(t,a,r){x3(t.x,a.x,r.x),x3(t.y,a.y,r.y)}const S3=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oa=()=>({x:S3(),y:S3()}),T3=()=>({min:0,max:0}),Gt=()=>({x:T3(),y:T3()});function Xe(t){return[t("x"),t("y")]}function Iu(t){return t===void 0||t===1}function L1({scale:t,scaleX:a,scaleY:r}){return!Iu(t)||!Iu(a)||!Iu(r)}function Ei(t){return L1(t)||f5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function f5(t){return A3(t.x)||A3(t.y)}function A3(t){return t&&t!=="0%"}function so(t,a,r){const l=t-r,u=a*l;return r+u}function z3(t,a,r,l,u){return u!==void 0&&(t=so(t,u,l)),so(t,r,l)+a}function H1(t,a=0,r=1,l,u){t.min=z3(t.min,a,r,l,u),t.max=z3(t.max,a,r,l,u)}function h5(t,{x:a,y:r}){H1(t.x,a.translate,a.scale,a.originPoint),H1(t.y,r.translate,r.scale,r.originPoint)}const M3=.999999999999,w3=1.0000000000001;function qy(t,a,r,l=!1){const u=r.length;if(!u)return;a.x=a.y=1;let h,f;for(let m=0;m<u;m++){h=r[m],f=h.projectionDelta;const{visualElement:p}=h.options;p&&p.props.style&&p.props.style.display==="contents"||(l&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Ba(t,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),f&&(a.x*=f.x.scale,a.y*=f.y.scale,h5(t,f)),l&&Ei(h.latestValues)&&Ba(t,h.latestValues))}a.x<w3&&a.x>M3&&(a.x=1),a.y<w3&&a.y>M3&&(a.y=1)}function Va(t,a){t.min=t.min+a,t.max=t.max+a}function $3(t,a,r,l,u=.5){const h=Vt(t.min,t.max,u);H1(t,a,r,h,l)}function Ba(t,a){$3(t.x,a.x,a.scaleX,a.scale,a.originX),$3(t.y,a.y,a.scaleY,a.scale,a.originY)}function d5(t,a){return o5(Ly(t.getBoundingClientRect(),a))}function Xy(t,a,r){const l=d5(t,r),{scroll:u}=a;return u&&(Va(l.x,u.offset.x),Va(l.y,u.offset.y)),l}const m5=({current:t})=>t?t.ownerDocument.defaultView:null,E3=(t,a)=>Math.abs(t-a);function Py(t,a){const r=E3(t.x,a.x),l=E3(t.y,a.y);return Math.sqrt(r**2+l**2)}class p5{constructor(a,r,{transformPagePoint:l,contextWindow:u,dragSnapToOrigin:h=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=e1(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,$=Py(x.offset,{x:0,y:0})>=3;if(!S&&!$)return;const{point:V}=x,{timestamp:k}=ce;this.history.push({...V,timestamp:k});const{onStart:G,onMove:U}=this.handlers;S||(G&&G(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,x)},this.handlePointerMove=(x,S)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=t1(S,this.transformPagePoint),Bt.update(this.updatePoint,!0)},this.handlePointerUp=(x,S)=>{this.end();const{onEnd:$,onSessionEnd:V,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const G=e1(x.type==="pointercancel"?this.lastMoveEventInfo:t1(S,this.transformPagePoint),this.history);this.startEvent&&$&&$(x,G),V&&V(x,G)},!x0(a))return;this.dragSnapToOrigin=h,this.handlers=r,this.transformPagePoint=l,this.contextWindow=u||window;const f=pr(a),m=t1(f,this.transformPagePoint),{point:p}=m,{timestamp:g}=ce;this.history=[{...p,timestamp:g}];const{onSessionStart:y}=r;y&&y(a,e1(m,this.history)),this.removeListeners=hr(Is(this.contextWindow,"pointermove",this.handlePointerMove),Is(this.contextWindow,"pointerup",this.handlePointerUp),Is(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),si(this.updatePoint)}}function t1(t,a){return a?{point:a(t.point)}:t}function D3(t,a){return{x:t.x-a.x,y:t.y-a.y}}function e1({point:t},a){return{point:t,delta:D3(t,g5(a)),offset:D3(t,Zy(a)),velocity:Qy(a,.1)}}function Zy(t){return t[0]}function g5(t){return t[t.length-1]}function Qy(t,a){if(t.length<2)return{x:0,y:0};let r=t.length-1,l=null;const u=g5(t);for(;r>=0&&(l=t[r],!(u.timestamp-l.timestamp>cn(a)));)r--;if(!l)return{x:0,y:0};const h=un(u.timestamp-l.timestamp);if(h===0)return{x:0,y:0};const f={x:(u.x-l.x)/h,y:(u.y-l.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function Ky(t,{min:a,max:r},l){return a!==void 0&&t<a?t=l?Vt(a,t,l.min):Math.max(t,a):r!==void 0&&t>r&&(t=l?Vt(r,t,l.max):Math.min(t,r)),t}function C3(t,a,r){return{min:a!==void 0?t.min+a:void 0,max:r!==void 0?t.max+r-(t.max-t.min):void 0}}function Fy(t,{top:a,left:r,bottom:l,right:u}){return{x:C3(t.x,r,u),y:C3(t.y,a,l)}}function j3(t,a){let r=a.min-t.min,l=a.max-t.max;return a.max-a.min<t.max-t.min&&([r,l]=[l,r]),{min:r,max:l}}function Jy(t,a){return{x:j3(t.x,a.x),y:j3(t.y,a.y)}}function Wy(t,a){let r=.5;const l=ge(t),u=ge(a);return u>l?r=ar(a.min,a.max-l,t.min):l>u&&(r=ar(t.min,t.max-u,a.min)),Dn(0,1,r)}function Iy(t,a){const r={};return a.min!==void 0&&(r.min=a.min-t.min),a.max!==void 0&&(r.max=a.max-t.min),r}const N1=.35;function tv(t=N1){return t===!1?t=0:t===!0&&(t=N1),{x:R3(t,"left","right"),y:R3(t,"top","bottom")}}function R3(t,a,r){return{min:O3(t,a),max:O3(t,r)}}function O3(t,a){return typeof t=="number"?t:t[a]||0}const ev=new WeakMap;class nv{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Gt(),this.visualElement=a}start(a,{snapToCursor:r=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(pr(y).point)},h=(y,x)=>{const{drag:S,dragPropagation:$,onDragStart:V}=this.getProps();if(S&&!$&&(this.openDragLock&&this.openDragLock(),this.openDragLock=b9(S),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(G=>{let U=this.getAxisMotionValue(G).get()||0;if(fn.test(U)){const{projection:q}=this.visualElement;if(q&&q.layout){const _=q.layout.layoutBox[G];_&&(U=ge(_)*(parseFloat(U)/100))}}this.originPoint[G]=U}),V&&Bt.postRender(()=>V(y,x)),B1(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},f=(y,x)=>{const{dragPropagation:S,dragDirectionLock:$,onDirectionLock:V,onDrag:k}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:G}=x;if($&&this.currentDirection===null){this.currentDirection=iv(G),this.currentDirection!==null&&V&&V(this.currentDirection);return}this.updateAxis("x",x.point,G),this.updateAxis("y",x.point,G),this.visualElement.render(),k&&k(y,x)},m=(y,x)=>this.stop(y,x),p=()=>Xe(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new p5(a,{onSessionStart:u,onStart:h,onMove:f,onSessionEnd:m,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:m5(this.visualElement)})}stop(a,r){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:u}=r;this.startAnimation(u);const{onDragEnd:h}=this.getProps();h&&Bt.postRender(()=>h(a,r))}cancel(){this.isDragging=!1;const{projection:a,animationState:r}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(a,r,l){const{drag:u}=this.getProps();if(!l||!Bl(a,u,this.currentDirection))return;const h=this.getAxisMotionValue(a);let f=this.originPoint[a]+l[a];this.constraints&&this.constraints[a]&&(f=Ky(f,this.constraints[a],this.elastic[a])),h.set(f)}resolveConstraints(){const{dragConstraints:a,dragElastic:r}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&Ra(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&l?this.constraints=Fy(l.layoutBox,a):this.constraints=!1,this.elastic=tv(r),u!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Xe(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=Iy(l.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:r}=this.getProps();if(!a||!Ra(a))return!1;const l=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const h=Xy(l,u.root,this.visualElement.getTransformPagePoint());let f=Jy(u.layout.layoutBox,h);if(r){const m=r(_y(f));this.hasMutatedConstraints=!!m,m&&(f=o5(m))}return f}startAnimation(a){const{drag:r,dragMomentum:l,dragElastic:u,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),p=this.constraints||{},g=Xe(y=>{if(!Bl(y,r,this.currentDirection))return;let x=p&&p[y]||{};f&&(x={min:0,max:0});const S=u?200:1e6,$=u?40:1e7,V={type:"inertia",velocity:l?a[y]:0,bounceStiffness:S,bounceDamping:$,timeConstant:750,restDelta:1,restSpeed:10,...h,...x};return this.startAxisValueAnimation(y,V)});return Promise.all(g).then(m)}startAxisValueAnimation(a,r){const l=this.getAxisMotionValue(a);return B1(this.visualElement,a),l.start(D0(a,l,0,r,this.visualElement,!1))}stopAnimation(){Xe(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Xe(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const r=`_drag${a.toUpperCase()}`,l=this.visualElement.getProps(),u=l[r];return u||this.visualElement.getValue(a,(l.initial?l.initial[a]:void 0)||0)}snapToCursor(a){Xe(r=>{const{drag:l}=this.getProps();if(!Bl(r,l,this.currentDirection))return;const{projection:u}=this.visualElement,h=this.getAxisMotionValue(r);if(u&&u.layout){const{min:f,max:m}=u.layout.layoutBox[r];h.set(a[r]-Vt(f,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:r}=this.getProps(),{projection:l}=this.visualElement;if(!Ra(r)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xe(f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const p=m.get();u[f]=Wy({min:p,max:p},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Xe(f=>{if(!Bl(f,a,null))return;const m=this.getAxisMotionValue(f),{min:p,max:g}=this.constraints[f];m.set(Vt(p,g,u[f]))})}addListeners(){if(!this.visualElement.current)return;ev.set(this.visualElement,this);const a=this.visualElement.current,r=Is(a,"pointerdown",p=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(p)}),l=()=>{const{dragConstraints:p}=this.getProps();Ra(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,h=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Bt.read(l);const f=ur(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(Xe(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=p[y].translate,x.set(x.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),r(),h(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:h=!1,dragElastic:f=N1,dragMomentum:m=!0}=a;return{...a,drag:r,dragDirectionLock:l,dragPropagation:u,dragConstraints:h,dragElastic:f,dragMomentum:m}}}function Bl(t,a,r){return(a===!0||a===t)&&(r===null||r===t)}function iv(t,a=10){let r=null;return Math.abs(t.y)>a?r="y":Math.abs(t.x)>a&&(r="x"),r}class av extends li{constructor(a){super(a),this.removeGroupControls=Ze,this.removeListeners=Ze,this.controls=new nv(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const V3=t=>(a,r)=>{t&&Bt.postRender(()=>t(a,r))};class sv extends li{constructor(){super(...arguments),this.removePointerDownListener=Ze}onPointerDown(a){this.session=new p5(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:m5(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:r,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:V3(a),onStart:V3(r),onMove:l,onEnd:(h,f)=>{delete this.session,u&&Bt.postRender(()=>u(h,f))}}}mount(){this.removePointerDownListener=Is(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ql={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function B3(t,a){return a.max===a.min?0:t/(a.max-a.min)*100}const Ps={correct:(t,a)=>{if(!a.target)return t;if(typeof t=="string")if(ot.test(t))t=parseFloat(t);else return t;const r=B3(t,a.target.x),l=B3(t,a.target.y);return`${r}% ${l}%`}},rv={correct:(t,{treeScale:a,projectionDelta:r})=>{const l=t,u=ri.parse(t);if(u.length>5)return l;const h=ri.createTransformer(t),f=typeof u[0]!="number"?1:0,m=r.x.scale*a.x,p=r.y.scale*a.y;u[0+f]/=m,u[1+f]/=p;const g=Vt(m,p,.5);return typeof u[2+f]=="number"&&(u[2+f]/=g),typeof u[3+f]=="number"&&(u[3+f]/=g),h(u)}};class lv extends W.Component{componentDidMount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:l,layoutId:u}=this.props,{projection:h}=a;X9(ov),h&&(r.group&&r.group.add(h),l&&l.register&&u&&l.register(h),h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),Ql.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:r,visualElement:l,drag:u,isPresent:h}=this.props,{projection:f}=l;return f&&(f.isPresent=h,u||a.layoutDependency!==r||r===void 0||a.isPresent!==h?f.willUpdate():this.safeToRemove(),a.isPresent!==h&&(h?f.promote():f.relegate()||Bt.postRender(()=>{const m=f.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),b0.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:l}=this.props,{projection:u}=a;u&&(u.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function y5(t){const[a,r]=E9(),l=W.useContext(I4);return b.jsx(lv,{...t,layoutGroup:l,switchLayoutGroup:W.useContext(Km),isPresent:a,safeToRemove:r})}const ov={borderRadius:{...Ps,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ps,borderTopRightRadius:Ps,borderBottomLeftRadius:Ps,borderBottomRightRadius:Ps,boxShadow:rv};function cv(t,a,r){const l=me(t)?t:ka(t);return l.start(D0("",l,a,r)),l.animation}const uv=(t,a)=>t.depth-a.depth;class fv{constructor(){this.children=[],this.isDirty=!1}add(a){t0(this.children,a),this.isDirty=!0}remove(a){e0(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(uv),this.isDirty=!1,this.children.forEach(a)}}function hv(t,a){const r=Te.now(),l=({timestamp:u})=>{const h=u-r;h>=a&&(si(l),t(h-a))};return Bt.setup(l,!0),()=>si(l)}const v5=["TopLeft","TopRight","BottomLeft","BottomRight"],dv=v5.length,_3=t=>typeof t=="string"?parseFloat(t):t,L3=t=>typeof t=="number"||ot.test(t);function mv(t,a,r,l,u,h){u?(t.opacity=Vt(0,r.opacity??1,pv(l)),t.opacityExit=Vt(a.opacity??1,0,gv(l))):h&&(t.opacity=Vt(a.opacity??1,r.opacity??1,l));for(let f=0;f<dv;f++){const m=`border${v5[f]}Radius`;let p=H3(a,m),g=H3(r,m);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||L3(p)===L3(g)?(t[m]=Math.max(Vt(_3(p),_3(g),l),0),(fn.test(g)||fn.test(p))&&(t[m]+="%")):t[m]=g}(a.rotate||r.rotate)&&(t.rotate=Vt(a.rotate||0,r.rotate||0,l))}function H3(t,a){return t[a]!==void 0?t[a]:t.borderRadius}const pv=b5(0,.5,um),gv=b5(.5,.95,Ze);function b5(t,a,r){return l=>l<t?0:l>a?1:r(ar(t,a,l))}function N3(t,a){t.min=a.min,t.max=a.max}function qe(t,a){N3(t.x,a.x),N3(t.y,a.y)}function U3(t,a){t.translate=a.translate,t.scale=a.scale,t.originPoint=a.originPoint,t.origin=a.origin}function k3(t,a,r,l,u){return t-=a,t=so(t,1/r,l),u!==void 0&&(t=so(t,1/u,l)),t}function yv(t,a=0,r=1,l=.5,u,h=t,f=t){if(fn.test(a)&&(a=parseFloat(a),a=Vt(f.min,f.max,a/100)-f.min),typeof a!="number")return;let m=Vt(h.min,h.max,l);t===h&&(m-=a),t.min=k3(t.min,a,r,m,u),t.max=k3(t.max,a,r,m,u)}function Y3(t,a,[r,l,u],h,f){yv(t,a[r],a[l],a[u],a.scale,h,f)}const vv=["x","scaleX","originX"],bv=["y","scaleY","originY"];function G3(t,a,r,l){Y3(t.x,a,vv,r?r.x:void 0,l?l.x:void 0),Y3(t.y,a,bv,r?r.y:void 0,l?l.y:void 0)}function q3(t){return t.translate===0&&t.scale===1}function x5(t){return q3(t.x)&&q3(t.y)}function X3(t,a){return t.min===a.min&&t.max===a.max}function xv(t,a){return X3(t.x,a.x)&&X3(t.y,a.y)}function P3(t,a){return Math.round(t.min)===Math.round(a.min)&&Math.round(t.max)===Math.round(a.max)}function S5(t,a){return P3(t.x,a.x)&&P3(t.y,a.y)}function Z3(t){return ge(t.x)/ge(t.y)}function Q3(t,a){return t.translate===a.translate&&t.scale===a.scale&&t.originPoint===a.originPoint}class Sv{constructor(){this.members=[]}add(a){t0(this.members,a),a.scheduleRender()}remove(a){if(e0(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(a){const r=this.members.findIndex(u=>a===u);if(r===0)return!1;let l;for(let u=r;u>=0;u--){const h=this.members[u];if(h.isPresent!==!1){l=h;break}}return l?(this.promote(l),!0):!1}promote(a,r){const l=this.lead;if(a!==l&&(this.prevLead=l,this.lead=a,a.show(),l)){l.instance&&l.scheduleRender(),a.scheduleRender(),a.resumeFrom=l,r&&(a.resumeFrom.preserveOpacity=!0),l.snapshot&&(a.snapshot=l.snapshot,a.snapshot.latestValues=l.animationValues||l.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:r,resumingFrom:l}=a;r.onExitComplete&&r.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Tv(t,a,r){let l="";const u=t.x.translate/a.x,h=t.y.translate/a.y,f=r?.z||0;if((u||h||f)&&(l=`translate3d(${u}px, ${h}px, ${f}px) `),(a.x!==1||a.y!==1)&&(l+=`scale(${1/a.x}, ${1/a.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:x,rotateY:S,skewX:$,skewY:V}=r;g&&(l=`perspective(${g}px) ${l}`),y&&(l+=`rotate(${y}deg) `),x&&(l+=`rotateX(${x}deg) `),S&&(l+=`rotateY(${S}deg) `),$&&(l+=`skewX(${$}deg) `),V&&(l+=`skewY(${V}deg) `)}const m=t.x.scale*a.x,p=t.y.scale*a.y;return(m!==1||p!==1)&&(l+=`scale(${m}, ${p})`),l||"none"}const n1=["","X","Y","Z"],Av={visibility:"hidden"},zv=1e3;let Mv=0;function i1(t,a,r,l){const{latestValues:u}=a;u[t]&&(r[t]=u[t],a.setStaticValue(t,0),l&&(l[t]=0))}function T5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:a}=t.options;if(!a)return;const r=a5(a);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:u,layoutId:h}=t.options;window.MotionCancelOptimisedAnimation(r,"transform",Bt,!(u||h))}const{parent:l}=t;l&&!l.hasCheckedOptimisedAppear&&T5(l)}function A5({attachResizeListener:t,defaultParent:a,measureScroll:r,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(f={},m=a?.()){this.id=Mv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Ev),this.nodes.forEach(Rv),this.nodes.forEach(Ov),this.nodes.forEach(Dv)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new fv)}addEventListener(f,m){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new a0),this.eventHandlers.get(f).add(m)}notifyListeners(f,...m){const p=this.eventHandlers.get(f);p&&p.notify(...m)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Gm(f)&&!M9(f),this.instance=f;const{layoutId:m,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||m)&&(this.isLayoutDirty=!0),t){let y;const x=()=>this.root.updateBlockedByResize=!1;t(f,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=hv(x,250),Ql.hasAnimatedSinceResize&&(Ql.hasAnimatedSinceResize=!1,this.nodes.forEach(J3))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&g&&(m||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:$})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const V=this.options.transition||g.getDefaultTransition()||Hv,{onLayoutAnimationStart:k,onLayoutAnimationComplete:G}=g.getProps(),U=!this.targetLayout||!S5(this.targetLayout,$),q=!x&&S;if(this.options.layoutRoot||this.resumeFrom||q||x&&(U||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...y0(V,"layout"),onPlay:k,onComplete:G};(g.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(y,q)}else x||J3(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=$})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),si(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Vv),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&T5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:p}=this.options;if(m===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(K3);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(F3);return}this.isUpdating||this.nodes.forEach(F3),this.animationCommitId=this.animationId,this.isUpdating=!1,this.nodes.forEach(jv),this.nodes.forEach(wv),this.nodes.forEach($v),this.clearAllSnapshots();const m=Te.now();ce.delta=Dn(0,1e3/60,m-ce.timestamp),ce.timestamp=m,ce.isProcessing=!0,Zu.update.process(ce),Zu.preRender.process(ce),Zu.render.process(ce),ce.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,b0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Cv),this.sharedNodes.forEach(Bv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Bt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Bt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ge(this.snapshot.measuredBox.x)&&!ge(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Gt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(m=!1),m&&this.instance){const p=l(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!x5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(m||Ei(this.latestValues)||y)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const m=this.measurePageBox();let p=this.removeElementScroll(m);return f&&(p=this.removeTransform(p)),Nv(p),{animationId:this.root.animationId,measuredBox:m,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Gt();const m=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Uv))){const{scroll:g}=this.root;g&&(Va(m.x,g.offset.x),Va(m.y,g.offset.y))}return m}removeElementScroll(f){const m=Gt();if(qe(m,f),this.scroll?.wasRoot)return m;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&qe(m,f),Va(m.x,y.offset.x),Va(m.y,y.offset.y))}return m}applyTransform(f,m=!1){const p=Gt();qe(p,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!m&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ba(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ei(y.latestValues)&&Ba(p,y.latestValues)}return Ei(this.latestValues)&&Ba(p,this.latestValues),p}removeTransform(f){const m=Gt();qe(m,f);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Ei(g.latestValues))continue;L1(g.latestValues)&&g.updateSnapshot();const y=Gt(),x=g.measurePageBox();qe(y,x),G3(m,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Ei(this.latestValues)&&G3(m,this.latestValues),m}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=ce.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),er(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Gt(),this.targetWithTransforms=Gt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Gy(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),h5(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gt(),this.relativeTargetOrigin=Gt(),er(this.relativeTargetOrigin,this.target,S.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||L1(this.parent.latestValues)||f5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),m=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ce.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;qe(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;qy(this.layoutCorrected,this.treeScale,this.path,m),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Gt());const{target:$}=f;if(!$){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U3(this.prevProjectionDelta.x,this.projectionDelta.x),U3(this.prevProjectionDelta.y,this.projectionDelta.y)),tr(this.projectionDelta,this.layoutCorrected,$,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!Q3(this.projectionDelta.x,this.prevProjectionDelta.x)||!Q3(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",$))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oa(),this.projectionDelta=Oa(),this.projectionDeltaWithTransform=Oa()}setAnimationOrigin(f,m=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},x=Oa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const S=Gt(),$=p?p.source:void 0,V=this.layout?this.layout.source:void 0,k=$!==V,G=this.getStack(),U=!G||G.members.length<=1,q=!!(k&&!U&&this.options.crossfade===!0&&!this.path.some(Lv));this.animationProgress=0;let _;this.mixTargetDelta=K=>{const N=K/1e3;W3(x.x,f.x,N),W3(x.y,f.y,N),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(er(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_v(this.relativeTarget,this.relativeTargetOrigin,S,N),_&&xv(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Gt()),qe(_,this.relativeTarget)),k&&(this.animationValues=y,mv(y,g,this.latestValues,N,q,U)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(si(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Bt.update(()=>{Ql.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ka(0)),this.currentAnimation=cv(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),f.onUpdate&&f.onUpdate(m)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:m,target:p,layout:g,latestValues:y}=f;if(!(!m||!p||!g)){if(this!==f&&this.layout&&g&&z5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Gt();const x=ge(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+x;const S=ge(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+S}qe(m,p),Ba(m,y),tr(this.projectionDeltaWithTransform,this.layoutCorrected,m,y)}}registerSharedNode(f,m){this.sharedNodes.has(f)||this.sharedNodes.set(f,new Sv),this.sharedNodes.get(f).add(m);const g=m.options.initialPromotionConfig;m.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(m):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:m,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let m=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(m=!0),!m)return;const g={};p.z&&i1("z",f,g,this.animationValues);for(let y=0;y<n1.length;y++)i1(`rotate${n1[y]}`,f,g,this.animationValues),i1(`skew${n1[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}getProjectionStyles(f){if(!this.instance||this.isSVG)return;if(!this.isVisible)return Av;const m={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=Zl(f?.pointerEvents)||"",m.transform=p?p(this.latestValues,""):"none",m;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const $={};return this.options.layoutId&&($.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,$.pointerEvents=Zl(f?.pointerEvents)||""),this.hasProjected&&!Ei(this.latestValues)&&($.transform=p?p({},""):"none",this.hasProjected=!1),$}const y=g.animationValues||g.latestValues;this.applyTransformsToTarget(),m.transform=Tv(this.projectionDeltaWithTransform,this.treeScale,y),p&&(m.transform=p(y,m.transform));const{x,y:S}=this.projectionDelta;m.transformOrigin=`${x.origin*100}% ${S.origin*100}% 0`,g.animationValues?m.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:m.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const $ in or){if(y[$]===void 0)continue;const{correct:V,applyTo:k,isCSSVariable:G}=or[$],U=m.transform==="none"?y[$]:V(y[$],g);if(k){const q=k.length;for(let _=0;_<q;_++)m[k[_]]=U}else G?this.options.visualElement.renderState.vars[$]=U:m[$]=U}return this.options.layoutId&&(m.pointerEvents=g===this?Zl(f?.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(K3),this.root.sharedNodes.clear()}}}function wv(t){t.updateLayout()}function $v(t){const a=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&a&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:l}=t.layout,{animationType:u}=t.options,h=a.source!==t.layout.source;u==="size"?Xe(y=>{const x=h?a.measuredBox[y]:a.layoutBox[y],S=ge(x);x.min=r[y].min,x.max=x.min+S}):z5(u,a.layoutBox,r)&&Xe(y=>{const x=h?a.measuredBox[y]:a.layoutBox[y],S=ge(r[y]);x.max=x.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+S)});const f=Oa();tr(f,r,a.layoutBox);const m=Oa();h?tr(m,t.applyTransform(l,!0),a.measuredBox):tr(m,r,a.layoutBox);const p=!x5(f);let g=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:S}=y;if(x&&S){const $=Gt();er($,a.layoutBox,x.layoutBox);const V=Gt();er(V,r,S.layoutBox),S5($,V)||(g=!0),y.options.layoutRoot&&(t.relativeTarget=V,t.relativeTargetOrigin=$,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:a,delta:m,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function Ev(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Dv(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Cv(t){t.clearSnapshot()}function K3(t){t.clearMeasurements()}function F3(t){t.isLayoutDirty=!1}function jv(t){const{visualElement:a}=t.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),t.resetTransform()}function J3(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Rv(t){t.resolveTargetDelta()}function Ov(t){t.calcProjection()}function Vv(t){t.resetSkewAndRotation()}function Bv(t){t.removeLeadSnapshot()}function W3(t,a,r){t.translate=Vt(a.translate,0,r),t.scale=Vt(a.scale,1,r),t.origin=a.origin,t.originPoint=a.originPoint}function I3(t,a,r,l){t.min=Vt(a.min,r.min,l),t.max=Vt(a.max,r.max,l)}function _v(t,a,r,l){I3(t.x,a.x,r.x,l),I3(t.y,a.y,r.y,l)}function Lv(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Hv={duration:.45,ease:[.4,0,.1,1]},t4=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),e4=t4("applewebkit/")&&!t4("chrome/")?Math.round:Ze;function n4(t){t.min=e4(t.min),t.max=e4(t.max)}function Nv(t){n4(t.x),n4(t.y)}function z5(t,a,r){return t==="position"||t==="preserve-aspect"&&!Yy(Z3(a),Z3(r),.2)}function Uv(t){return t!==t.root&&t.scroll?.wasRoot}const kv=A5({attachResizeListener:(t,a)=>ur(t,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),a1={current:void 0},M5=A5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!a1.current){const t=new kv({});t.mount(window),t.setOptions({layoutScroll:!0}),a1.current=t}return a1.current},resetTransform:(t,a)=>{t.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Yv={pan:{Feature:sv},drag:{Feature:av,ProjectionNode:M5,MeasureLayout:y5}};function i4(t,a,r){const{props:l}=t;t.animationState&&l.whileHover&&t.animationState.setActive("whileHover",r==="Start");const u="onHover"+r,h=l[u];h&&Bt.postRender(()=>h(a,pr(a)))}class Gv extends li{mount(){const{current:a}=this.node;a&&(this.unmount=x9(a,(r,l)=>(i4(this.node,l,"Start"),u=>i4(this.node,u,"End"))))}unmount(){}}class qv extends li{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hr(ur(this.node.current,"focus",()=>this.onFocus()),ur(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function a4(t,a,r){const{props:l}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&l.whileTap&&t.animationState.setActive("whileTap",r==="Start");const u="onTap"+(r==="End"?"":r),h=l[u];h&&Bt.postRender(()=>h(a,pr(a)))}class Xv extends li{mount(){const{current:a}=this.node;a&&(this.unmount=z9(a,(r,l)=>(a4(this.node,l,"Start"),(u,{success:h})=>a4(this.node,u,h?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const U1=new WeakMap,s1=new WeakMap,Pv=t=>{const a=U1.get(t.target);a&&a(t)},Zv=t=>{t.forEach(Pv)};function Qv({root:t,...a}){const r=t||document;s1.has(r)||s1.set(r,{});const l=s1.get(r),u=JSON.stringify(a);return l[u]||(l[u]=new IntersectionObserver(Zv,{root:t,...a})),l[u]}function Kv(t,a,r){const l=Qv(a);return U1.set(t,r),l.observe(t),()=>{U1.delete(t),l.unobserve(t)}}const Fv={some:0,all:1};class Jv extends li{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:r,margin:l,amount:u="some",once:h}=a,f={root:r?r.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:Fv[u]},m=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,h&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),S=g?y:x;S&&S(p)};return Kv(this.node.current,f,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:r}=this.node;["amount","margin","root"].some(Wv(a,r))&&this.startObserver()}unmount(){}}function Wv({viewport:t={}},{viewport:a={}}={}){return r=>t[r]!==a[r]}const Iv={inView:{Feature:Jv},tap:{Feature:Xv},focus:{Feature:qv},hover:{Feature:Gv}},tb={layout:{ProjectionNode:M5,MeasureLayout:y5}},k1={current:null},w5={current:!1};function eb(){if(w5.current=!0,!!W1)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),a=()=>k1.current=t.matches;t.addListener(a),a()}else k1.current=!1}const nb=new WeakMap;function ib(t,a,r){for(const l in a){const u=a[l],h=r[l];if(me(u))t.addValue(l,u);else if(me(h))t.addValue(l,ka(u,{owner:t}));else if(h!==u)if(t.hasValue(l)){const f=t.getValue(l);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=t.getStaticValue(l);t.addValue(l,ka(f!==void 0?f:u,{owner:t}))}}for(const l in r)a[l]===void 0&&t.removeValue(l);return a}const s4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class ab{scrapeMotionValuesFromProps(a,r,l){return{}}constructor({parent:a,props:r,presenceContext:l,reducedMotionConfig:u,blockInitialAnimation:h,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=g0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Te.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Bt.render(this.render,!1,!0))};const{latestValues:p,renderState:g}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=r.initial?{...p}:{},this.renderState=g,this.parent=a,this.props=r,this.presenceContext=l,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!h,this.isControllingVariants=So(r),this.isVariantNode=Zm(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const S in x){const $=x[S];p[S]!==void 0&&me($)&&$.set(p[S],!1)}}mount(a){this.current=a,nb.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,l)=>this.bindToMotionValue(l,r)),w5.current||eb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:k1.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),si(this.notifyUpdate),si(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(a,r){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const l=Pa.has(a);l&&this.onBindTransform&&this.onBindTransform();const u=r.on("change",m=>{this.latestValues[a]=m,this.props.onUpdate&&Bt.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),h=r.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,a,r)),this.valueSubscriptions.set(a,()=>{u(),h(),f&&f(),r.owner&&r.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Ya){const r=Ya[a];if(!r)continue;const{isEnabled:l,Feature:u}=r;if(!this.features[a]&&u&&l(this.props)&&(this.features[a]=new u(this)),this.features[a]){const h=this.features[a];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Gt()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,r){this.latestValues[a]=r}update(a,r){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let l=0;l<s4.length;l++){const u=s4[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const h="on"+u,f=a[h];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=ib(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(a),()=>r.variantChildren.delete(a)}addValue(a,r){const l=this.values.get(a);r!==l&&(l&&this.removeValue(a),this.bindToMotionValue(a,r),this.values.set(a,r),this.latestValues[a]=r.get())}removeValue(a){this.values.delete(a);const r=this.valueSubscriptions.get(a);r&&(r(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,r){if(this.props.values&&this.props.values[a])return this.props.values[a];let l=this.values.get(a);return l===void 0&&r!==void 0&&(l=ka(r===null?void 0:r,{owner:this}),this.addValue(a,l)),l}readValue(a,r){let l=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return l!=null&&(typeof l=="string"&&(tm(l)||nm(l))?l=parseFloat(l):!$9(l)&&ri.test(r)&&(l=Hm(a,r)),this.setBaseTarget(a,me(l)?l.get():l)),me(l)?l.get():l}setBaseTarget(a,r){this.baseTarget[a]=r}getBaseTarget(a){const{initial:r}=this.props;let l;if(typeof r=="string"||typeof r=="object"){const h=$0(this.props,r,this.presenceContext?.custom);h&&(l=h[a])}if(r&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,a);return u!==void 0&&!me(u)?u:this.initialValues[a]!==void 0&&l===void 0?void 0:this.baseTarget[a]}on(a,r){return this.events[a]||(this.events[a]=new a0),this.events[a].add(r)}notify(a,...r){this.events[a]&&this.events[a].notify(...r)}}class $5 extends ab{constructor(){super(...arguments),this.KeyframeResolver=p9}sortInstanceNodePosition(a,r){return a.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(a,r){return a.style?a.style[r]:void 0}removeValueFromRenderState(a,{vars:r,style:l}){delete r[a],delete l[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;me(a)&&(this.childSubscription=a.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function E5(t,{style:a,vars:r},l,u){Object.assign(t.style,a,u&&u.getProjectionStyles(l));for(const h in r)t.style.setProperty(h,r[h])}function sb(t){return window.getComputedStyle(t)}class rb extends $5{constructor(){super(...arguments),this.type="html",this.renderInstance=E5}readValueFromInstance(a,r){if(Pa.has(r))return this.projection?.isProjecting?E1(r):V7(a,r);{const l=sb(a),u=(l0(r)?l.getPropertyValue(r):l[r])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:r}){return d5(a,r)}build(a,r,l){z0(a,r,l.transformTemplate)}scrapeMotionValuesFromProps(a,r,l){return E0(a,r,l)}}const D5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function lb(t,a,r,l){E5(t,a,void 0,l);for(const u in a.attrs)t.setAttribute(D5.has(u)?u:A0(u),a.attrs[u])}class ob extends $5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Gt}getBaseTargetFromProps(a,r){return a[r]}readValueFromInstance(a,r){if(Pa.has(r)){const l=Lm(r);return l&&l.default||0}return r=D5.has(r)?r:A0(r),a.getAttribute(r)}scrapeMotionValuesFromProps(a,r,l){return i5(a,r,l)}build(a,r,l){Im(a,r,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(a,r,l,u){lb(a,r,l,u)}mount(a){this.isSVGTag=e5(a.tagName),super.mount(a)}}const cb=(t,a)=>w0(t)?new ob(a):new rb(a,{allowProjection:t!==W.Fragment}),ub=oy({...Vy,...Iv,...Yv,...tb},cb),X=O9(ub);var C5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r4=ae.createContext&&ae.createContext(C5),fb=["attr","size","title"];function hb(t,a){if(t==null)return{};var r=db(t,a),l,u;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(t);for(u=0;u<h.length;u++)l=h[u],!(a.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}function db(t,a){if(t==null)return{};var r={};for(var l in t)if(Object.prototype.hasOwnProperty.call(t,l)){if(a.indexOf(l)>=0)continue;r[l]=t[l]}return r}function ro(){return ro=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},ro.apply(this,arguments)}function l4(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);a&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,l)}return r}function lo(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?l4(Object(r),!0).forEach(function(l){mb(t,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l4(Object(r)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(r,l))})}return t}function mb(t,a,r){return a=pb(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function pb(t){var a=gb(t,"string");return typeof a=="symbol"?a:a+""}function gb(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var l=r.call(t,a);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function j5(t){return t&&t.map((a,r)=>ae.createElement(a.tag,lo({key:r},a.attr),j5(a.child)))}function it(t){return a=>ae.createElement(yb,ro({attr:lo({},t.attr)},a),j5(t.child))}function yb(t){var a=r=>{var{attr:l,size:u,title:h}=t,f=hb(t,fb),m=u||r.size||"1em",p;return r.className&&(p=r.className),t.className&&(p=(p?p+" ":"")+t.className),ae.createElement("svg",ro({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,l,f,{className:p,style:lo(lo({color:t.color||r.color},r.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),h&&ae.createElement("title",null,h),t.children)};return r4!==void 0?ae.createElement(r4.Consumer,null,r=>a(r)):a(C5)}function o4(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"},child:[]}]})(t)}function vb(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(t)}function bb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"},child:[]}]})(t)}function xb(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(t)}function r1(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(t)}function Sb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"},child:[]}]})(t)}function C0(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function Y1(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(t)}function c4(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(t)}function _l(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(t)}function R5(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"},child:[]}]})(t)}function u4(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(t)}function Oi(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(t)}function Pe(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(t)}function O5(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"},child:[]}]})(t)}function Tb(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function Ab(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(t)}function oo(t){return it({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(t)}function zb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function Mb(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(t)}function f4(t){return it({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function h4(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(t)}function wb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(t)}function $b(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"},child:[]}]})(t)}function ii(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function V5(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function Eb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(t)}function Db(t){return it({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(t)}function Cb(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function jb(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(t)}function Rb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function d4(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"},child:[]}]})(t)}function Ob(t){return it({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function Vb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(t)}function wa(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(t)}function Di(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(t)}function Ea(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(t)}function co(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function Bb(t){return it({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(t)}function _b(t){return it({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}const Lb=A(X.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${t=>t.theme.zIndices.banner};
  transition: ${t=>t.theme.transitions.all};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  ${t=>t.isScrolled&&`
    background: ${t.isDarkMode?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${t.theme.colors.border.primary};
    box-shadow: ${t.isDarkMode?"0 2px 10px rgba(0, 0, 0, 0.1)":"0 2px 10px rgba(37, 99, 235, 0.08)"};
  `}
`,Hb=A(X.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${t=>t.theme.colors.primary.blue};
`,Nb=A.div`
  width: 100%;
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  padding: ${t=>t.theme.space[6]};
`,Ub=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,kb=A(X.div)`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  cursor: pointer;
  display: flex;
  align-items: center;
`,Yb=A.span`
  color: ${t=>t.theme.colors.text.white};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.blue};
  }
`,Gb=A.span`
  color: ${t=>t.theme.colors.primary.blue};
  margin-left: ${t=>t.theme.space[2]};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.dark};
  }
`,qb=A.nav`
  display: none;
  gap: ${t=>t.theme.space[8]};

  ${t=>t.theme.media.md} {
    display: flex;
  }
`,Xb=A(X.button)`
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
`,m4=A(X.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${t=>t.theme.colors.primary.blue};
  border-radius: ${t=>t.theme.radii.full};
`,Pb=A(X.button)`
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
`,l1=A(X.div)`
  width: 24px;
  height: 2px;
  background: ${t=>(t.isDarkMode,t.theme.colors.text.white)};
  border-radius: ${t=>t.theme.radii.full};
`,Zb=A(X.nav)`
  overflow: hidden;
  opacity: ${t=>t.isHidden?0:1};
  pointer-events: ${t=>t.isHidden?"none":"auto"};

  ${t=>t.theme.media.md} {
    display: none;
  }
`,Qb=A.div`
  padding-top: ${t=>t.theme.space[4]};
  padding-bottom: ${t=>t.theme.space[2]};
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[2]};
`,Kb=A(X.button)`
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
`,Fb=A.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Jb=A(X.div)`
  width: 8px;
  height: 8px;
  background: ${t=>t.theme.colors.primary.blue};
  border-radius: ${t=>t.theme.radii.full};
`,Wb=A(X.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: rgba(37, 99, 235, 0.1);
  border-radius: ${t=>t.theme.radii.lg};
  cursor: pointer;
  color: ${t=>t.theme.colors.primary.blue};
  transition: ${t=>t.theme.transitions.all};
  font-size: ${t=>t.theme.fonts.sizes.lg};

  &:hover {
    background: rgba(37, 99, 235, 0.2);
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
  }
`,Ib=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
`,tx=({isDarkMode:t,setIsDarkMode:a})=>{const[r,l]=W.useState(!1),[u,h]=W.useState(!1),[f,m]=W.useState("hero"),[p,g]=W.useState(0);W.useEffect(()=>{const S=()=>{const $=window.scrollY,V=document.documentElement.scrollHeight-window.innerHeight,k=$/V*100;l($>50),g(k);const U=["hero","about","skills","experience","projects","education","contact"].find(q=>{const _=document.getElementById(q);if(_){const K=_.getBoundingClientRect();return K.top<=100&&K.bottom>=100}return!1});U&&m(U)};return window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},[]),W.useEffect(()=>{const S=$=>{u&&!$.target.closest("#mobile-menu")&&!$.target.closest("button[aria-expanded]")&&h(!1)};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[u]);const y=S=>{const $=document.getElementById(S);$&&(h(!1),setTimeout(()=>{const k=$.offsetTop-80;window.scrollTo({top:k,behavior:"smooth"}),m(S)},100))},x=[{id:"hero",label:"Главная"},{id:"about",label:"О себе"},{id:"skills",label:"Навыки"},{id:"experience",label:"Опыт"},{id:"projects",label:"Проекты"},{id:"education",label:"Образование"}];return b.jsxs(Lb,{initial:{y:-100},animate:{y:0},transition:{duration:.6},isScrolled:r,isDarkMode:t,role:"banner",children:[b.jsx(Hb,{style:{width:`${p}%`},initial:{width:0},animate:{width:`${p}%`},transition:{duration:.1}}),b.jsxs(Nb,{children:[b.jsxs(Ub,{children:[b.jsxs(kb,{whileHover:{scale:1.05},whileTap:{scale:.98},onClick:()=>y("hero"),role:"button",tabIndex:0,"aria-label":"Перейти на главную",onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&y("hero")},children:[b.jsx(Yb,{children:"Valeriy"}),b.jsx(Gb,{"data-text":"Dev",children:"Dev"})]}),b.jsx(qb,{role:"navigation","aria-label":"Основная навигация",children:x.map((S,$)=>b.jsxs(Xb,{active:f===S.id,whileHover:{y:-2},whileTap:{scale:.98},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:$*.1+.3},onClick:()=>y(S.id),"aria-label":`Перейти к секции ${S.label}`,"aria-current":f===S.id?"page":void 0,children:[S.label,b.jsx(m4,{initial:{width:0},animate:{width:f===S.id?"100%":0},transition:{duration:.3}}),b.jsx(m4,{initial:{width:0},whileHover:{width:f!==S.id?"100%":0},transition:{duration:.3},style:{opacity:.5}})]},S.id))}),b.jsxs(Ib,{children:[b.jsx(Wb,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>a(!t),"aria-label":t?"Переключиться на светлую тему":"Переключиться на темную тему",title:t?"Светлая тема":"Темная тема",children:b.jsx(X.div,{animate:{rotate:t?0:360},transition:{duration:.5},children:t?b.jsx(Bb,{}):b.jsx(Vb,{})})}),b.jsx(Pb,{isHidden:!r,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>h(!u),"aria-label":u?"Закрыть меню":"Открыть меню","aria-expanded":u,"aria-controls":"mobile-menu",children:b.jsxs("div",{style:{width:"24px",height:"24px",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[b.jsx(l1,{animate:{rotate:u?45:0,y:u?2:0},transition:{duration:.3}}),b.jsx(l1,{animate:{opacity:u?0:1},transition:{duration:.3}}),b.jsx(l1,{animate:{rotate:u?-45:0,y:u?-2:0},transition:{duration:.3}})]})})]})]}),b.jsx(Zb,{id:"mobile-menu",isHidden:!r,initial:!1,animate:{height:u&&r?"auto":0,opacity:u&&r?1:0},transition:{duration:.4,ease:"easeInOut"},role:"navigation","aria-label":"Мобильная навигация",children:b.jsx(Qb,{children:x.map((S,$)=>b.jsx(Kb,{active:f===S.id,initial:{x:-50,opacity:0},animate:{x:u?0:-50,opacity:u?1:0},transition:{delay:$*.1,duration:.3},onClick:()=>y(S.id),"aria-label":`Перейти к секции ${S.label}`,"aria-current":f===S.id?"page":void 0,children:b.jsxs(Fb,{children:[S.label,f===S.id&&b.jsx(Jb,{initial:{scale:0},animate:{scale:1}})]})},S.id))})})]})]})},ex="/assets/profile-Bc----iC.jpg",nx=A.div`
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
`,ix=A.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,o1=A.div`
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
`,ax=A(X.div)`
  position: relative;
  z-index: ${t=>t.theme.zIndices.docked};
`,sx=A.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[6]};

  ${t=>t.theme.media.mobile} {
    gap: ${t=>t.theme.space[5]};
    text-align: center;
  }
`;A(X.div)`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
  color: ${t=>t.theme.colors.primary.blue};
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.medium};
`;A(X.span)`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
`;const rx=A(X.h1)`
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
`,lx=A.span`
  color: ${t=>t.theme.colors.text.white};
`,ox=A.span`
  color: ${t=>t.theme.colors.primary.blue};
`,cx=A(X.div)`
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
`,ux=A.span`
  color: ${t=>t.theme.colors.primary.blue};
  margin-right: ${t=>t.theme.space[2]};
  font-family: monospace;
`,fx=A.span`
  font-family: monospace;
`,hx=A(X.span)`
  color: ${t=>t.theme.colors.primary.blue};
  margin-left: ${t=>t.theme.space[1]};
`,dx=A(X.p)`
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
`,Ll=A.span`
  font-weight: ${t=>t.theme.fonts.weights.semibold};

  &.purple,
  &.pink {
    color: ${t=>t.theme.colors.primary.blue};
  }

  &.blue {
    color: ${t=>t.theme.colors.primary.blue};
  }
`,mx=A(X.div)`
  display: flex;
  gap: ${t=>t.theme.space[4]};
  flex-wrap: wrap;


  @media (max-width: 468px) {
    justify-content: center;
  }
`,px=A(X.div)`
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
`,gx=A.div`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  color: ${t=>t.color};
`,yx=A.span`
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  color: ${t=>t.color};
`;A(X.div)`
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
`;A(T8)`
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
`;const vx=A(X.div)`
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
`,bx=A(X.a)`
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
`,xx=A(X.div)`
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
`,Sx=A.div`
  position: relative;
  z-index: 1;
`,Tx=A(X.div)`
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, rgba(37, 99, 235, 0.1) 70%, transparent 100%);
  border-radius: 40px;
  opacity: 0.4;
  filter: blur(25px);
  z-index: 0;
`,Ax=A(X.div)`
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


`,zx=A.div`
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

`,Mx=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: brightness(0.95);

  @media(max-width: 468px) {
    width: 100%;
  }
`,wx=A.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(37, 99, 235, 0.1), transparent, rgba(37, 99, 235, 0.05));
  transition: ${t=>t.theme.transitions.all};

`;A(X.div)`
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
`;A(X.div)`
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
`;const Hl=A(X.div)`
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
`;A.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  padding: ${t=>t.theme.space[4]};
  border-radius: ${t=>t.theme.radii.lg};
  border: 1px solid rgba(139, 92, 246, 0.5);
  text-align: center;
`;const Da=A(X.div)`
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
`,Zs=A.div`
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
`;A(X.div)`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`;A.h3`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.primary.purple};
  margin-bottom: ${t=>t.theme.space[4]};
  text-align: center;

  ${t=>t.theme.media.lg} {
    text-align: left;
  }
`;A(X.div)`
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
`;A.div`
  color: ${t=>t.theme.colors.primary.purple};
  flex-shrink: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;A.a`
  color: inherit;
  text-decoration: none;
  font-size: ${t=>t.theme.fonts.sizes.sm};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`;A.span`
  font-size: ${t=>t.theme.fonts.sizes.sm};
`;A(X.div)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: none;

  ${t=>t.theme.media.lg} {
    display: block;
  }
`;A(X.div)`
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
`;A(X.div)`
  width: 4px;
  height: 12px;
  background: ${t=>t.theme.colors.primary.purple};
  border-radius: ${t=>t.theme.radii.full};
  margin-top: 8px;
`;A.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  margin-top: ${t=>t.theme.space[2]};
  text-align: center;
`;A(X.div)`
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
`;A(X.div)`
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
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  margin-bottom: ${t=>t.theme.space[2]};
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes.xs};
  color: ${t=>t.theme.colors.text.gray};
  font-weight: ${t=>t.theme.fonts.weights.medium};
`;A(X.div)`
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
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  color: #10b981;
  flex-shrink: 0;
`;A.div`
  flex: 1;
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes.xs};
  color: ${t=>t.theme.colors.text.gray};
`;const $x=()=>{const[t,a]=W.useState(""),[r,l]=W.useState(0),[u,h]=W.useState(!1);W.useEffect(()=>{const S=["Middle React Developer","Python Developer","AI/ML Enthusiast","Full-Stack Developer"],$=S[r],V=u,G=setTimeout(()=>{if(!V&&t===$)setTimeout(()=>h(!0),2e3);else if(V&&t==="")h(!1),l(U=>(U+1)%S.length);else{const U=V?$.substring(0,t.length-1):$.substring(0,t.length+1);a(U)}},V?50:150);return()=>clearTimeout(G)},[t,r,u]);const f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},m={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},p={hidden:{opacity:0,scale:.8,x:50},visible:{opacity:1,scale:1,x:0,transition:{duration:1,ease:[.6,-.05,.01,.99]}}},g={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{duration:.6,ease:"easeOut"}},hover:{scale:1.2,y:-5,transition:{type:"spring",stiffness:400,damping:10}}},y=[{icon:ii,title:"Frontend",color:"#2563eb",bgColor:"rgba(37, 99, 235, 0.1)"},{icon:Oi,title:"Python",color:"#2563eb",bgColor:"rgba(37, 99, 235, 0.1)"},{icon:oo,title:"AI/ML",color:"#2563eb",bgColor:"rgba(37, 99, 235, 0.1)"}],x=[{icon:C0,href:"https://github.com/legion3trunn3r",className:"github",label:"GitHub профиль"},{icon:O5,href:"https://t.me/ValeryLegion",className:"linkedin",label:"LinkedIn профиль"},{icon:V5,href:"mailto:valery.trishevsky@gmail.com",className:"email",label:"Написать email"}];return b.jsxs(nx,{children:[b.jsxs(ix,{children:[b.jsx(o1,{className:"blob-1"}),b.jsx(o1,{className:"blob-2"}),b.jsx(o1,{className:"blob-3"})]}),b.jsx($a,{children:b.jsx(ax,{variants:f,initial:"hidden",animate:"visible",children:b.jsxs(S8,{cols:2,gap:12,items:"center",style:{gap:"3rem 4rem"},children:[b.jsxs(sx,{children:[b.jsxs(X.div,{variants:m,style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[b.jsxs(rx,{variants:m,children:[b.jsx(lx,{children:"Валерий"}),b.jsx("br",{}),b.jsx(ox,{children:"Тришевский"})]}),b.jsxs(cx,{variants:m,children:[b.jsx(ux,{children:">"}),b.jsxs(fx,{children:[t,b.jsx(hx,{animate:{opacity:[0,1,0]},transition:{duration:1,repeat:1/0},children:"|"})]})]})]}),b.jsxs(dx,{variants:m,children:["Разработчик с ",b.jsx(Ll,{className:"purple",children:"5+ годами опыта"})," в создании современных веб-приложений. Специализируюсь на ",b.jsx(Ll,{className:"purple",children:"React"}),",",b.jsx(Ll,{className:"pink",children:" Python"})," и ",b.jsx(Ll,{className:"blue",children:"AI/ML"})," решениях."]}),b.jsx(mx,{variants:m,children:y.map((S,$)=>b.jsxs(px,{backgroundColor:S.bgColor,whileHover:{scale:1.05,y:-2},transition:{delay:$*.1},children:[b.jsx(gx,{as:S.icon,color:S.color}),b.jsx(yx,{color:S.color,children:S.title})]},$))}),b.jsx(vx,{variants:m,children:x.map((S,$)=>b.jsx(bx,{href:S.href,target:"_blank",rel:"noopener noreferrer",className:S.className,variants:g,whileHover:"hover","aria-label":S.label,children:b.jsx(S.icon,{})},$))})]}),b.jsxs(xx,{initial:"hidden",animate:"visible",variants:p,children:[b.jsxs(Sx,{children:[b.jsx(Tx,{animate:{scale:[1,1.05,1],opacity:[.2,.4,.2]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),b.jsx(Da,{className:"pos-1",animate:{y:[0,-6,0],rotate:[0,5,0]},transition:{duration:5,repeat:1/0,delay:0},children:b.jsx(Zs,{as:ii,fontSize:"24px"})}),b.jsx(Da,{className:"pos-2",animate:{y:[0,6,0],rotate:[0,-5,0]},transition:{duration:6,repeat:1/0,delay:.5},children:b.jsx(Zs,{as:Oi,fontSize:"24px"})}),b.jsx(Da,{className:"pos-3",animate:{x:[0,8,0],rotate:[0,-8,0]},transition:{duration:6,repeat:1/0,delay:1},children:b.jsx(Zs,{as:oo,fontSize:"24px"})}),b.jsx(Da,{className:"pos-4",animate:{y:[0,7,0],rotate:[0,5,0]},transition:{duration:5.5,repeat:1/0,delay:.3},children:b.jsx(Zs,{as:Di,fontSize:"24px"})}),b.jsx(Da,{className:"pos-5",animate:{y:[0,-7,0],rotate:[0,-5,0]},transition:{duration:5.8,repeat:1/0,delay:.8},children:b.jsx(Zs,{as:co,fontSize:"24px"})}),b.jsxs(Ax,{transition:{duration:.3},children:[b.jsx(Hl,{className:"corner-tl"}),b.jsx(Hl,{className:"corner-tr"}),b.jsx(Hl,{className:"corner-bl"}),b.jsx(Hl,{className:"corner-br"}),b.jsx(zx,{children:b.jsx(Mx,{src:ex,alt:"Валерий Тришевский"})}),b.jsx(wx,{})]})]}),b.jsx(X.div,{variants:m,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.6,duration:.8},style:{maxWidth:"320px",width:"100%",textAlign:"center"}})]})]})})})]})};var G1=new Map,Nl=new WeakMap,p4=0,Ex=void 0;function Dx(t){return t?(Nl.has(t)||(p4+=1,Nl.set(t,p4.toString())),Nl.get(t)):"0"}function Cx(t){return Object.keys(t).sort().filter(a=>t[a]!==void 0).map(a=>`${a}_${a==="root"?Dx(t.root):t[a]}`).toString()}function jx(t){const a=Cx(t);let r=G1.get(a);if(!r){const l=new Map;let u;const h=new IntersectionObserver(f=>{f.forEach(m=>{var p;const g=m.isIntersecting&&u.some(y=>m.intersectionRatio>=y);t.trackVisibility&&typeof m.isVisible>"u"&&(m.isVisible=g),(p=l.get(m.target))==null||p.forEach(y=>{y(g,m)})})},t);u=h.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:a,observer:h,elements:l},G1.set(a,r)}return r}function Rx(t,a,r={},l=Ex){if(typeof window.IntersectionObserver>"u"&&l!==void 0){const p=t.getBoundingClientRect();return a(l,{isIntersecting:l,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:u,observer:h,elements:f}=jx(r),m=f.get(t)||[];return f.has(t)||f.set(t,m),m.push(a),h.observe(t),function(){m.splice(m.indexOf(a),1),m.length===0&&(f.delete(t),h.unobserve(t)),f.size===0&&(h.disconnect(),G1.delete(u))}}function gr({threshold:t,delay:a,trackVisibility:r,rootMargin:l,root:u,triggerOnce:h,skip:f,initialInView:m,fallbackInView:p,onChange:g}={}){var y;const[x,S]=W.useState(null),$=W.useRef(g),[V,k]=W.useState({inView:!!m,entry:void 0});$.current=g,W.useEffect(()=>{if(f||!x)return;let _;return _=Rx(x,(K,N)=>{k({inView:K,entry:N}),$.current&&$.current(K,N),N.isIntersecting&&h&&_&&(_(),_=void 0)},{root:u,rootMargin:l,threshold:t,trackVisibility:r,delay:a},p),()=>{_&&_()}},[Array.isArray(t)?t.toString():t,x,u,l,h,f,r,p,a]);const G=(y=V.entry)==null?void 0:y.target,U=W.useRef(void 0);!x&&G&&!h&&!f&&U.current!==G&&(U.current=G,k({inView:!!m,entry:void 0}));const q=[S,V.inView,V.entry];return q.ref=q[0],q.inView=q[1],q.entry=q[2],q}const Ox=()=>{const[t,a]=gr({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},l={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},u={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.6,ease:"easeOut"}}},h=[{icon:ii,title:"Frontend Development",description:"React, JavaScript, TypeScript, современные подходы к разработке UI/UX",technologies:["React","JavaScript","TypeScript","CSS3","styled-components"]},{icon:Oi,title:"Python Development",description:"Веб-разработка на Django/Flask, fastapi, скрипты и автоматизация, обработка данных",technologies:["Django","Flask","FastAPI","Data Science","Automation"]},{icon:oo,title:"AI & Machine Learning",description:"LLM разработка, обработка естественного языка, распознавание объектов, редактирование изображений",technologies:["Python","PyTorch","NLP","Computer Vision","RAG"]},{icon:Ea,title:"DevOps & Backend",description:"Docker, CI/CD, облачные технологии, системное администрирование",technologies:["Docker","REST API","Linux","Nginx","Express JS"]}],f=["Создал персональную AI-модель для обучения и консультаций разработчиков","Разработал ИИ-платформу для генерации изображений интерьера с использованием Stable Diffusion","Интегрировал автоматизированное тестирование, сократив время релизов на 40%","Разработал систему машинного обучения для прогнозирования пользовательского поведения","Создал микросервисную архитектуру с автоматическим масштабированием","Разработал Telegram Mini App с миллионами активных пользователей","Создал чат-систему для внутренней коммуникации с real-time синхронизацией"];return b.jsx("section",{id:"about",ref:t,children:b.jsxs(X.div,{variants:r,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(X.div,{variants:l,style:{textAlign:"center",marginBottom:"4rem"},children:[b.jsx(fr,{as:X.h2,children:"О себе"}),b.jsx(X.p,{variants:l,style:{fontSize:"1.2rem",color:"var(--text-gray)",maxWidth:"56rem",margin:"0 auto",lineHeight:"1.7",fontWeight:"500"},children:"Ответственный разработчик с системным подходом, способный ясно структурировать сложные задачи и доводить решения до высокого уровня исполнения."})]}),b.jsxs(z8,{children:[b.jsxs(X.div,{variants:l,style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[b.jsxs(Pu,{children:[b.jsxs("h3",{children:[b.jsx(oo,{}),"Профессиональная философия"]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",color:"var(--text-gray)",lineHeight:"1.625"},children:b.jsx("p",{children:"Я убеждён, что роль разработчика — быть мостом между возможностями технологий и реальными потребностями людей. Поэтому я строю не отдельные компоненты, а целостные продукты, которые приносят пользу и радость от использования."})})]}),b.jsxs(Pu,{children:[b.jsxs("h3",{children:[b.jsx(_b,{}),"Мои принципы"]}),b.jsx(M8,{children:[{icon:Mb,title:"Качество",desc:"Чистый код"},{icon:Di,title:"Инновации",desc:"Новые технологии"},{icon:jb,title:"Команда",desc:"Основа успеха"},{icon:Ab,title:"Обучение",desc:"Постоянный рост"}].map((m,p)=>b.jsxs(X.div,{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0.75rem",background:"var(--bg-overlay)",backdropFilter:"blur(12px)",borderRadius:"0.5rem",border:"1px solid var(--border-primary)",transition:"all 0.3s ease"},initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{delay:p*.1+1},whileHover:{scale:1.05},children:[b.jsx(m.icon,{style:{fontSize:"1.5rem",marginBottom:"0.5rem",color:"#2563eb"}}),b.jsx("h4",{style:{color:"var(--text-primary)",fontWeight:"600",fontSize:"0.875rem",marginBottom:"0.25rem"},children:m.title}),b.jsx("p",{style:{color:"var(--text-gray)",fontSize:"0.75rem"},children:m.desc})]},p))})]})]}),b.jsx(X.div,{variants:l,style:{display:"flex",flexDirection:"column",gap:"2rem"},children:b.jsxs(Pu,{children:[b.jsxs("h3",{children:[b.jsx(co,{}),"Ключевые достижения"]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:f.slice(0,8).map((m,p)=>b.jsxs(X.div,{style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",padding:"0.75rem",background:"var(--bg-overlay)",backdropFilter:"blur(12px)",borderRadius:"0.5rem",border:"1px solid var(--border-primary)",transition:"all 0.3s ease"},initial:{opacity:0,x:20},animate:a?{opacity:1,x:0}:{opacity:0,x:20},transition:{delay:p*.1+.5},whileHover:{scale:1.02,x:5},children:[b.jsx("div",{style:{width:"0.5rem",height:"0.5rem",backgroundColor:"#22C55E",borderRadius:"50%",marginTop:"0.5rem",flexShrink:0}}),b.jsx("span",{style:{color:"var(--text-gray)",fontSize:"0.875rem",lineHeight:"1.625"},children:m})]},p))})]})})]}),b.jsxs(X.div,{variants:l,style:{marginBottom:"4rem"},children:[b.jsx("h3",{style:{fontSize:"1.875rem",fontWeight:"700",textAlign:"center",color:"#2563eb",marginBottom:"3rem"},children:"Области экспертизы"}),b.jsx(w8,{children:h.map((m,p)=>b.jsxs(Zd,{as:Zd,variants:u,whileHover:{y:-10},children:[b.jsx("div",{style:{marginBottom:"1rem"},children:b.jsx(m.icon,{className:"icon"})}),b.jsx("h4",{children:m.title}),b.jsx("p",{children:m.description}),b.jsx($8,{children:m.technologies.map((g,y)=>b.jsx(E8,{children:g},y))})]},p))})]})]})})};function Vx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"},child:[]}]})(t)}function Bx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.4446 11.5059c0 1.1021.1673 2.1585.4847 3.1563-.0378-.0028-.0691-.0058-.1058-.0058-.4209 0-.8015.16-1.0704.4512-.3454.3737-.4984.8335-.4316 1.293a1.576 1.576 0 0 0 .2148.5978c-.2319.1864-.4018.4456-.4844.7578-.0646.2448-.131.7543.2149 1.2794a1.4552 1.4552 0 0 0-.0625.1055c-.208.3923-.2207.8372-.0371 1.25.2783.6258.9696 1.1175 2.3126 1.6467.8356.3292 1.5988.5411 1.6056.543 1.1046.2847 2.104.4277 2.969.4277 1.4173 0 2.4754-.3849 3.1525-1.1446 1.538.2651 2.791.1403 3.592.006.6773.7555 1.7332 1.1387 3.1467 1.1387.8649 0 1.8643-.143 2.969-.4278.0068-.0019.77-.2138 1.6056-.543 1.343-.5292 2.0343-1.0208 2.3126-1.6466.1836-.4129.171-.8577-.037-1.25a1.4685 1.4685 0 0 0-.0626-.1056c.346-.525.2795-1.0346.2149-1.2793-.0826-.3122-.2525-.5714-.4844-.7579.11-.1816.1831-.3788.2148-.5977.0669-.4595-.0862-.9193-.4316-1.293-.2688-.2913-.6495-.4513-1.0704-.4513-.0209 0-.0376.0008-.0588.0018.3162-.9966.4846-2.0518.4846-3.1523 0-5.807-4.7362-10.5144-10.5789-10.5144-5.8426 0-10.5788 4.7073-10.5788 10.5144Zm10.5788-9.4831c5.2727 0 9.5476 4.246 9.5476 9.483a9.4201 9.4201 0 0 1-.2696 2.2365c-.0039-.0047-.0079-.011-.0117-.0156-.274-.3255-.6679-.5059-1.1075-.5059-.352 0-.714.1155-1.0763.3438-.2403.1517-.5058.422-.7793.7598-.2534-.3492-.608-.5832-1.0137-.6465a1.5174 1.5174 0 0 0-.2344-.0176c-.9263 0-1.4828.7993-1.6935 1.5177-.1046.2426-.6065 1.3482-1.3614 2.0978-1.1681 1.1601-1.4458 2.3534-.8396 3.6382-.843.1029-1.5836.0927-2.365-.006.5906-1.212.3626-2.4388-.8426-3.6322-.755-.7496-1.2568-1.8552-1.3614-2.0978-.2107-.7184-.7673-1.5177-1.6935-1.5177-.078 0-.1568.0054-.2344.0176-.4057.0633-.7604.2973-1.0137.6465-.2735-.3379-.539-.6081-.7794-.7598-.3622-.2283-.7243-.3438-1.0762-.3438-.4266 0-.8094.171-1.0821.4786a9.4208 9.4208 0 0 1-.2598-2.1936c0-5.237 4.2749-9.483 9.5475-9.483zM8.6443 7.0036c-.4838.0043-.9503.2667-1.1934.7227-.3536.6633-.1006 1.4873.5645 1.84.351.1862.4883-.5261.836-.6485.3107-.1095.841.399 1.0078.086.3536-.6634.1025-1.4874-.5625-1.84a1.3659 1.3659 0 0 0-.6524-.1602Zm6.8403 0c-.2199-.002-.4426.05-.6504.1602-.665.3526-.9181 1.1766-.5645 1.84.1669.313.6971-.1955 1.0079-.086.3476.1224.4867.8347.838.6485.6649-.3527.916-1.1767.5624-1.84-.243-.456-.7096-.7184-1.1934-.7227Zm-9.7565 1.418a.8768.8768 0 0 0-.877.877c0 .4846.3925.877.877.877a.8768.8768 0 0 0 .877-.877.8768.8768 0 0 0-.877-.877zm12.6434 0c-.4845 0-.879.3925-.879.877 0 .4846.3945.877.879.877a.8768.8768 0 0 0 .877-.877.8768.8768 0 0 0-.877-.877zM8.7927 11.459c-.179-.003-.2793.1107-.2793.416 0 .8097.3874 2.125 1.4279 2.924.207-.7123 1.3453-1.2832 1.5079-1.2012.2315.1167.2191.4417.6074.7266.3884-.285.374-.6098.6056-.7266.1627-.082 1.3009.4889 1.5079 1.2012 1.0404-.799 1.4278-2.1144 1.4278-2.924 0-1.2212-1.583.6402-3.5413.6485-1.4686-.0061-2.7266-1.0558-3.2639-1.0645zM4.312 14.4768c.5792.365 1.6964 2.2751 2.1056 3.0177.1371.2488.371.3536.582.3536.4188 0 .7465-.4138.0391-.9395-1.0636-.791-.6914-2.0846-.1836-2.1642a.4302.4302 0 0 1 .0664-.004c.4616 0 .666.7892.666.7892s.5959 1.4898 1.6213 2.508c.942.9356 1.062 1.703.4961 2.6661-.0164-.004-.0159.0236-.1484.2149-.1853.2673-.4322.4688-.7188.6152-.5062.2269-1.1397.2696-1.7833.2696-1.037 0-2.1017-.1824-2.6975-.336-.0293-.0075-3.6505-.9567-3.1916-1.8224.0771-.1454.2033-.2031.3633-.2031.6463 0 1.823.9551 2.3283.9551.113 0 .196-.0865.2285-.2031.2249-.8045-3.2787-1.0522-2.9846-2.1642.0519-.1967.193-.2757.3907-.2754.854 0 2.7704 1.4923 3.172 1.4923.0307 0 .0525-.0085.0645-.0274.2012-.3227.1096-.5865-1.3087-1.4395-1.4182-.8533-2.4315-1.329-1.8653-1.9416.0651-.0707.1574-.1015.2695-.1015.8611.0002 2.8948 1.84 2.8948 1.84s.5487.5683.8809.5683c.0762 0 .1416-.0315.1855-.1054.2355-.3946-2.1858-2.2183-2.3224-2.971-.0926-.51.0641-.7676.3555-.7676-.0006.008.1701-.0285.4942.1759zm16.2257.5918c-.1366.7526-2.5579 2.5764-2.3224 2.9709.044.074.1092.1055.1855.1055.3321 0 .881-.5684.881-.5684s2.0336-1.8397 2.8947-1.84c.1121 0 .2044.0308.2695.1016.5662.6125-.447 1.0882-1.8653 1.9415-1.4183.853-1.51 1.1168-1.3087 1.4396.012.0188.0337.0273.0644.0273.4016 0 2.3181-1.4923 3.1721-1.4923.1977-.0002.3388.0787.3907.2754.294 1.112-3.2095 1.3597-2.9846 2.1642.0325.1166.1156.2032.2285.2032.5054 0 1.682-.9552 2.3283-.9552.16 0 .2862.0577.3633.2032.459.8656-3.1623 1.8149-3.1916 1.8224-.5958.1535-1.6605.336-2.6975.336-.6351 0-1.261-.0409-1.7638-.2599-.2949-.1472-.5488-.3516-.7383-.625-.0411-.0682-.1026-.1476-.1426-.205-.5726-.9679-.455-1.7371.4903-2.676 1.0254-1.0182 1.6212-2.508 1.6212-2.508s.2044-.7891.666-.7891a.4318.4318 0 0 1 .0665.0039c.5078.0796.88 1.3732-.1836 2.1642-.7074.5257-.3797.9395.039.9395.211 0 .445-.1047.5821-.3535.4092-.7426 1.5264-2.6527 2.1056-3.0178.5588-.3524.99-.1816.8497.5918z"},child:[]}]})(t)}function _x(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function Lx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"},child:[]}]})(t)}function Hx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(t)}function Nx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(t)}function q1(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z"},child:[]}]})(t)}function Ux(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"},child:[]}]})(t)}function kx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(t)}function g4(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(t)}function y4(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z"},child:[]}]})(t)}function Yx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"},child:[]}]})(t)}function Gx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(t)}function qx(t){return it({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(t)}const Xx=A.section`
  padding: ${t=>t.theme.space[20]} ${t=>t.theme.space[6]};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 ${t=>t.theme.space[0]};
  }
`,Px=A.div`
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,Zx=A(X.div)`
  text-align: center;
  margin-bottom: ${t=>t.theme.space[16]};
`,Qx=A.p`
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
`,Kx=A.div`
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
`,Fx=A(X.div)`
  background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}14, ${t.theme.colors.primary.blue}08)`};
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  padding: ${t=>t.theme.space[6]};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
    background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}1a, ${t.theme.colors.primary.blue}0f)`};
  }
  }


`,Jx=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
  margin-bottom: ${t=>t.theme.space[6]};
`,Wx=A.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: ${t=>t.theme.radii.lg};
`,Ix=A.h3`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
`,tS=A.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[3]};
`,eS=A(X.div)`
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
`,nS=A.span`
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
`,iS=A.span`
  color: ${t=>t.theme.colors.text.white};
  font-weight: ${t=>t.theme.fonts.weights.medium};
`,aS=()=>{const[t,a]=gr({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),r=[{id:"frontend",title:"Frontend",icon:Pe,skills:[{name:"React",icon:Pe},{name:"JavaScript",icon:c4},{name:"TypeScript",icon:qx},{name:"HTML5",icon:Y1},{name:"CSS3",icon:vb},{name:"Styled Components",icon:Gx},{name:"Vite",icon:r1}]},{id:"backend",title:"Backend & DevOps",icon:u4,skills:[{name:"Node.js",icon:u4},{name:"Express.js",icon:r1},{name:"Docker",icon:xb},{name:"Linux",icon:R5},{name:"AWS",icon:o4},{name:"Nginx",icon:q1},{name:"Git",icon:r1}]},{id:"python",title:"Python",icon:Oi,skills:[{name:"Django",icon:Oi},{name:"FastAPI",icon:Pe},{name:"Data Science",icon:Pe},{name:"Automation",icon:c4},{name:"Flask",icon:Y1},{name:"Pandas",icon:o4},{name:"NumPy",icon:Oi}]},{id:"ai",title:"AI & Databases",icon:y4,skills:[{name:"PyTorch",icon:y4},{name:"Hugging Face",icon:Bx},{name:"Machine Learning",icon:Oi},{name:"PostgreSQL",icon:kx},{name:"MongoDB",icon:Hx}]}],l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},u={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},h={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}};return b.jsx(Xx,{id:"skills",ref:t,children:b.jsx(Px,{children:b.jsxs(X.div,{variants:l,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(Zx,{variants:u,children:[b.jsx(fr,{children:"Навыки и технологии"}),b.jsx(Qx,{children:"Мои основные технологические навыки, которыми я активно владею и использую в разработке современных проектов."})]}),b.jsx(Kx,{children:r.map((f,m)=>b.jsxs(Fx,{variants:u,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:m*.2},children:[b.jsxs(Jx,{children:[b.jsx(Wx,{children:b.jsx(f.icon,{})}),b.jsx(Ix,{children:f.title})]}),b.jsx(tS,{children:f.skills.map((p,g)=>b.jsxs(eS,{variants:h,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:m*.2+g*.1},children:[b.jsx(nS,{children:b.jsx(p.icon,{})}),b.jsx(iS,{children:p.name})]},p.name))})]},f.id))})]})})})},sS=()=>{const[t,a]=gr({threshold:.1,triggerOnce:!0}),r=[{title:"Junior Frontend Developer",company:"StartupVibe",period:"Март 2018 – Сентябрь 2020",location:"Удаленно",description:"Начал карьеру с разработки интерфейсов для стартапов. Изучал современные фреймворки и лучшие практики frontend-разработки. Работал в команде над несколькими проектами одновременно. Постоянно улучшал свои навыки на ошибках",achievements:["Освоил React и современный JavaScript","Изучил языки программирования, такие как: C++, Python, PHP, JS","Изучил основы UX/UI дизайна","Получил опыт и наставления от сеньоров"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:_l,color:"#fbbf24"},{name:"HTML/CSS",icon:Y1,color:"#E34F26"},{name:"Git",icon:Sb,color:"#F05032"},{name:"C++",icon:Vx,color:"#3238f0ff"},{name:"Python",icon:g4,color:"#32f03bff"},{name:"PHP",icon:Ux,color:"#32f0eaff"}]},{title:"Junior+ React Developer",company:"EIS",period:"Ноябрь 2020 – Май 2023",location:"Офис",description:"Руководил командой разработчиков по созданию Блог платформы для помощи молодым людям найти себя в карьере",achievements:["Создал кроссбраузерную платформу для реализации блога","Разработал систему администрации для фильтрации контента и добавлении статей","Разработал современные адаптивные веб-сайты для клиентов","Интегрировал frontend решения с backend API"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:_l,color:"#fbbf24"},{name:"Nginx",icon:q1,color:"#A855F7"},{name:"REST API",icon:Ea,color:"#22C55E"},{name:"Responsive Design",icon:Pe,color:"#00D4FF"},{name:"MySQL",icon:Nx,color:"#ff00eaff"}]},{title:"Middle React Developer",company:"Фриланс",period:"Июнь 2023 – Январь 2025",location:"Удаленно",description:"Занимался заказными проектами в различных сферах",achievements:["Создал CRM систему для отслеживания рентабельности магазина","Разработал Telegram Mini App приложение медитаций и вдохновения включаяя ИИ","Разработал современные адаптивные веб-сайты для клиентов","Интегрировал frontend решения с backend API","Разработал систему вычисления матрицы и его детализация по всем сферам жизни"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:_l,color:"#fbbf24"},{name:"AI/ML",icon:Ea,color:"#A855F7"},{name:"styled-components",icon:bb,color:"#2248c5ff"},{name:"REST API",icon:Ea,color:"#22C55E"},{name:"Responsive Design",icon:Pe,color:"#00D4FF"}]},{title:"Full-Stack Developer & DevOps Engineer",company:"FIGORA",period:"Январь 2025 – Ноябрь 2025",location:"Удаленно",description:"Разработал kanban-систему управления задачами, включаяя разработку полноценной системы коммуникации между исполнителем и заказчиком в сфере дизайна интерьеров и архитектуры. Проектировал и внедрял AI-функции для генерации текста, распознавания объектов и преобразовании планировки в 3D-модель.",achievements:["Создал kanban-систему управления задачами на React","Внедрил AI-функции для улучшения пользовательского опыта","Разработал современные адаптивные веб-сайты для клиентов","Интегрировал frontend решения с backend API","Реализовал общий канбан для работы с сотрудниками","Создал чат-мессенджер внутри платформы для коммуникации с заказчиками и командой","Разработал маркетплейс покупки необходимых материалов для интерьерных проектов","Разработал отдельный ИИ сервис для генерации и редактировании изображений","Разработал TMA приложение для сканирования чеков и получении бонусов"],technologies:[{name:"React",icon:Pe,color:"#60A5FA"},{name:"JavaScript",icon:_l,color:"#fbbf24"},{name:"AI/ML",icon:Ea,color:"#A855F7"},{name:"REST API",icon:Ea,color:"#22C55E"},{name:"Express JS",icon:_x,color:"#c5c022ff"},{name:"Responsive Design",icon:Pe,color:"#00D4FF"},{name:"socketIO",icon:Yx,color:"#6a00ffff"},{name:"Linux",icon:Lx,color:"#ff3700ff"},{name:"Nginx",icon:q1,color:"#ffee00ff"},{name:"Python",icon:g4,color:"#61da16ff"}]}],l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},u={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return b.jsx("section",{id:"experience",ref:t,children:b.jsxs(X.div,{variants:l,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(X.div,{variants:u,style:{textAlign:"center",marginBottom:"4rem"},children:[b.jsx(fr,{as:X.h2,children:"Опыт работы"}),b.jsx(X.p,{style:{fontSize:"1.25rem",color:"#94A3B8",maxWidth:"48rem",margin:"0 auto",lineHeight:"1.625"},children:"Профессиональное развитие в IT: путь от начинающего до уверенного разработчика"})]}),b.jsx(X.div,{style:{display:"flex",flexDirection:"column",gap:"3rem",maxWidth:"80rem",margin:"0 auto"},children:r.reverse().map((h,f)=>b.jsx(X.div,{variants:u,style:{position:"relative"},children:b.jsxs(vo,{style:{position:"relative",background:"var(--bg-overlay)",backdropFilter:"blur(16px)",border:"1px solid var(--border-primary)",borderRadius:"1rem",overflow:"hidden",transition:"all 0.3s ease"},whileHover:{y:-5,scale:1.01},children:[b.jsx(X.div,{style:{position:"absolute",top:"1.5rem",right:"1.5rem",background:"rgba(37, 99, 235, 0.1)",border:"1px solid rgba(37, 99, 235, 0.3)",borderRadius:"2rem",padding:"0.5rem 1rem",fontSize:"0.75rem",fontWeight:"600",color:"#2563eb"},initial:{opacity:0,scale:.8},animate:a?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:f*.1},children:h.period}),b.jsxs(X.div,{style:{padding:"2.5rem 2rem 2rem 2rem",position:"relative",zIndex:2},initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{delay:f*.2},children:[b.jsxs("div",{style:{marginBottom:"1.5rem"},children:[b.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"700",color:"var(--text-primary)",marginBottom:"0.5rem",textAlign:"left"},children:h.title}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem",flexWrap:"wrap"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#2563eb"},children:[b.jsx(zb,{style:{fontSize:"1rem"}}),b.jsx("span",{style:{fontWeight:"600",fontSize:"0.875rem"},children:h.company})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--text-gray)"},children:[b.jsx(Ob,{style:{fontSize:"1rem"}}),b.jsx("span",{style:{fontSize:"0.875rem"},children:h.location})]})]})]}),b.jsx(X.p,{style:{color:"var(--text-gray)",lineHeight:"1.7",fontSize:"0.95rem",marginBottom:"2rem",textAlign:"left"},initial:{opacity:0},animate:a?{opacity:1}:{opacity:0},transition:{delay:f*.3+.2},children:h.description}),b.jsxs("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"1fr","@media (min-width: 768px)":{gridTemplateColumns:"1fr 1fr"}},children:[b.jsxs(X.div,{initial:{opacity:0,x:-20},animate:a?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:f*.3+.4},children:[b.jsxs("h4",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#2563eb",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[b.jsx("div",{style:{width:"6px",height:"6px",backgroundColor:"#2563eb",borderRadius:"50%"}}),"Ключевые достижения"]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:h.achievements.slice(0,4).map((m,p)=>b.jsxs(X.div,{style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",padding:"0.75rem",background:"rgba(34, 197, 94, 0.05)",borderRadius:"0.5rem",border:"1px solid rgba(34, 197, 94, 0.1)",transition:"all 0.3s ease"},whileHover:{backgroundColor:"rgba(34, 197, 94, 0.08)",x:5},initial:{opacity:0,x:-20},animate:a?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:f*.2+p*.1+.6},children:[b.jsx(wb,{style:{fontSize:"0.875rem",color:"#22C55E",marginTop:"0.125rem",flexShrink:0}}),b.jsx("span",{style:{color:"var(--text-gray)",fontSize:"0.875rem",lineHeight:"1.5"},children:m})]},p))})]}),b.jsxs(X.div,{initial:{opacity:0,x:20},animate:a?{opacity:1,x:0}:{opacity:0,x:20},transition:{delay:f*.3+.6},children:[b.jsxs("h4",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#2563eb",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[b.jsx("div",{style:{width:"6px",height:"6px",backgroundColor:"#2563eb",borderRadius:"50%"}}),"Технологии"]}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem"},children:h.technologies.slice(0,6).map((m,p)=>b.jsxs(X.div,{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(37, 99, 235, 0.1)",border:"1px solid rgba(37, 99, 235, 0.2)",borderRadius:"2rem",padding:"0.5rem 1rem",fontSize:"0.75rem",fontWeight:"500",color:"var(--text-gray)"},whileHover:{backgroundColor:"rgba(37, 99, 235, 0.2)",scale:1.05,x:5},initial:{opacity:0,scale:.8},animate:a?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:f*.2+p*.05+.8},children:[b.jsx(m.icon,{style:{color:m.color,fontSize:"1rem"}}),m.name]},p))})]})]})]})]})},f))})]})})},rS=A.section`
  padding: ${t=>t.theme.space[20]} ${t=>t.theme.space[6]};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 ${t=>t.theme.space[0]};
  }
`,lS=A.div`
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,oS=A(X.div)`
  text-align: center;
  margin-bottom: ${t=>t.theme.space[16]};
`,cS=A.p`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  color: ${t=>t.theme.colors.text.gray};
  max-width: 768px;
  margin: 0 auto;
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};

  ${t=>t.theme.media.mobile} {
    font-size: ${t=>t.theme.fonts.sizes.lg};
    padding: 0 ${t=>t.theme.space[4]};
  }
`,uS=A(X.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[12]};
`,fS=A.button`
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
`,hS=A.div`
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
`,dS=A(X.div)`
  background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}14, ${t.theme.colors.primary.blue}08)`};
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  padding: ${t=>t.theme.space[8]};
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
    background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}1a, ${t.theme.colors.primary.blue}0f)`};
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[6]};
  }
`,mS=A.div`
  display: flex;
  align-items: flex-start;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[4]};
`,pS=A.div`
  font-size: ${t=>t.theme.fonts.sizes["3xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`,gS=A.div`
  flex: 1;
`,yS=A.h3`
  font-size: ${t=>t.theme.fonts.sizes.xl};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[2]};
`,vS=A.span`
  display: inline-block;
  padding: ${t=>t.theme.space[1]} ${t=>t.theme.space[3]};
  background: ${t=>t.theme.colors.primary.blue};
  color: white;
  border-radius: ${t=>t.theme.radii.full};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  margin-bottom: ${t=>t.theme.space[3]};
`,bS=A.p`
  color: ${t=>t.theme.colors.text.gray};
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};
  margin-bottom: ${t=>t.theme.space[4]};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,xS=A.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  margin-bottom: ${t=>t.theme.space[4]};
`,SS=A.span`
  padding: ${t=>t.theme.space[1]} ${t=>t.theme.space[2]};
  background: rgba(37, 99, 235, 0.1);
  color: ${t=>t.theme.colors.primary.blue};
  border-radius: ${t=>t.theme.radii.base};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  border: 1px solid rgba(37, 99, 235, 0.2);
`,TS=A.div`
  display: flex;
  gap: ${t=>t.theme.space[4]};
  align-items: center;
`,v4=A.a`
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
`;A.div`
  display: grid;
  gap: ${t=>t.theme.space[8]};
  margin-bottom: ${t=>t.theme.space[16]};

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${t=>t.theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;A(X.div)`
  background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}14, ${t.theme.colors.primary.blue}08)`};
  backdrop-filter: blur(8px);
  border: 1px solid ${t=>t.theme.colors.border.primary};
  border-radius: ${t=>t.theme.radii.lg};
  padding: ${t=>t.theme.space[6]};
  text-align: center;
  transition: ${t=>t.theme.transitions.all};

  &:hover {
    border-color: ${t=>t.theme.colors.primary.blue};
    background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}1a, ${t.theme.colors.primary.blue}0f)`};
  }

  ${t=>t.theme.media.mobile} {
    padding: ${t=>t.theme.space[4]};
  }
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes["4xl"]};
  color: ${t=>t.theme.colors.primary.blue};
  margin-bottom: ${t=>t.theme.space[2]};
`;A.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
`;A.div`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`;const AS=()=>{const[t,a]=gr({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),[r,l]=W.useState("Все"),u=[{title:"Transcripta - AI Транскрибация",description:"Сервис транскрибации аудио и видео в текст с использованием ИИ. Автоматическое создание отчетов, возможность задавать вопросы ИИ о содержимом транскрипции. Веб-интерфейс для загрузки и анализа контента.",icon:wa,technologies:["Python","Speech Recognition","NLP","FastAPI","React","WebRTC"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"https://transcripta.ru"},{title:"ValHire - Платформа для HR",description:"Сервис для улучшения резюме и подготовки к собеседованиям. AI анализ резюме, практика интервью, рекомендации по улучшению профиля. Персонализированные советы для карьерного роста.",icon:Di,technologies:["Python","NLP","React","FastAPI","PostgreSQL","AI/ML"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"https://hire.valtrify.ru"},{title:"Figora - Экосистема строительства",description:"Комплексная платформа для строительства, ремонта и дизайна архитектуры. Канбан-система управления проектами, 3D-моделирование, автоматизация процессов, связь с подрядчиками через WebSocket.",icon:ii,technologies:["React","Python","WebSocket","3D Graphics","PostgreSQL","Docker"],category:"Full-Stack",github:"https://github.com/legion3trunn3r",demo:"https://service.figora.ru"},{title:"ValHub - Блог о ИИ",description:"Платформа для изучения искусственного интеллекта. Новости, статьи, курсы, сообщество. Персонализированные рекомендации контента и интерактивные курсы по машинному обучению.",icon:wa,technologies:["React","Python","FastAPI","PostgreSQL","NLP","Content Management"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"https://blog.valtrify.ru"},{title:"Personal AI Mentor",description:"Персональная LLM-модель как AI-ментор с персонализированными советами и обучающими путями. Pixovoy Music Автоматизированная система для генерации заголовков к постам музыкальных треков в телеграм канале.",icon:wa,technologies:["Python","PyTorch","NLP","React","FastAPI","Docker"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Data Analysis Dashboard",description:"Интерактивный дашборд для анализа больших данных с использованием Python, Pandas и Plotly. Автоматизированный ETL процесс для обработки и визуализации данных в реальном времени.",icon:ii,technologies:["Python","Pandas","Plotly","Streamlit","PostgreSQL","Docker"],category:"Data Science",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Автоматизация рутинных задач",description:"Набор Python-скриптов для автоматизации ежедневных процессов: автоматическая обработка email, генерация отчетов, веб-скраппинг, резервное копирование данных и автоматические уведомления.",icon:Di,technologies:["Python","BeautifulSoup","Selenium","SMTP","Asyncio","docker"],category:"Automation",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Система компьютерного зрения",description:"Комплексная система распознавания изображений: детекция объектов, распознавание лиц, OCR, классификация изображений. Web-интерфейс для загрузки и анализа фото/видео.",icon:wa,technologies:["Python","OpenCV","TensorFlow","Flask","YOLO","Tesseract"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Сетевая автоматизация скриптов",description:"Набор Python-скриптов для автоматизации сетевое управление: резервное копирование конфигураций, мониторинг сетевых устройств, автоматическая генерация отчетов о состоянии сети.",icon:Di,technologies:["Python","Netmiko","Napalm","Ansible","Bash","Docker"],category:"Automation",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Telegram Bot Ecosystem",description:"Система связаных Telegram ботов для различных задач: бот для генерации постов с AI, бот для мониторинга и анализа чатов, бот для автоматизации бизнес-процессов.",icon:wa,technologies:["Python","Telegram API","SQLite","Asyncio","Machine Learning","Docker"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Прогностическая модель продаж",description:"Система машинного обучения для прогнозирования продаж. Анализ исторических данных, выявление трендов и паттернов. Интеграция с CRM системами для автоматических рекомендаций.",icon:ii,technologies:["Python","Scikit-learn","Pandas","Time Series","Flask","Chart.js"],category:"Machine Learning",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Kanban Task Manager",description:"Система управления задачами с drag&drop, real-time синхронизацией и аналитикой. Встроенная интеграция с Python скриптами для автоматизации процессов.",icon:$b,technologies:["React","Node.js","Python","WebSocket","PostgreSQL"],category:"Full-Stack",github:"https://github.com/legion3trunn3r",demo:"https://platform.figora.ru"},{title:"API & Microservices Platform",description:"Платформа микросервисов с Python FastAPI, автоматизированным тестированием и CI/CD пайплайнами. RESTful API для различных бизнес-приложений.",icon:Di,technologies:["Python","FastAPI","Redis","PostgreSQL","Docker","Kubernetes"],category:"Backend",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Анализатор больших данных",description:"Фреймворк для обработки и анализа больших данных с использованием Python, Dask и Apache Spark. Автоматизированные отчеты и визуализация данных.",icon:ii,technologies:["Python","Dask","Apache Spark","Polars","Jupyter","Docker"],category:"Data Science",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"ChatGPT Telegram Mini App",description:"Telegram Mini App с интегрированным ChatGPT для медитаций и вдохновения. Обработка естественного языка, персонализация ответов и пользовательский интерфейс.",icon:wa,technologies:["React","Python","Telegram API","NLP","FastAPI","PostgreSQL"],category:"AI/ML",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"Python ETL Pipeline",description:"Автоматизированная ETL система для обработки данных из различных источников. Schedule-based исполнение, error handling, logging, интеграция с облачными хранилищами.",icon:ii,technologies:["Python","Apache Airflow","Pandas","PostgreSQL","AWS S3","Docker"],category:"Data Science",github:"https://github.com/legion3trunn3r",demo:"#"},{title:"RESTful API Generator",description:"Инструмент для автоматической генерации REST API из моделей данных. Поддержка различных фреймворков, автоматическое создание документации, интеграция с базами данных.",icon:Di,technologies:["Python","FastAPI","SQLAlchemy","Pydantic","Docker","Swagger"],category:"Backend",github:"https://github.com/legion3trunn3r",demo:"#"}],h=["Все","AI/ML","Full-Stack","Data Science","Machine Learning","Automation","Backend"],f=r==="Все"?u:u.filter(y=>y.category.toLowerCase().includes(r.toLowerCase())),m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},p={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},g={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.6,ease:"easeOut"}}};return b.jsx(rS,{id:"projects",ref:t,children:b.jsx(lS,{children:b.jsxs(X.div,{variants:m,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsxs(oS,{variants:p,children:[b.jsx(fr,{as:X.h2,children:"Портфолио проектов"}),b.jsx(cS,{children:"Подборка моих лучших проектов, демонстрирующих опыт в различных областях разработки"})]}),b.jsx(uS,{variants:p,children:h.map(y=>b.jsx(fS,{$active:r===y,onClick:()=>l(y),children:y},y))}),b.jsx(hS,{children:f.map((y,x)=>b.jsxs(dS,{variants:g,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:x*.1},children:[b.jsxs(mS,{children:[b.jsx(pS,{children:b.jsx(y.icon,{})}),b.jsxs(gS,{children:[b.jsx(yS,{children:y.title}),b.jsx(vS,{children:y.category}),b.jsx(bS,{children:y.description})]})]}),b.jsx(xS,{children:y.technologies.map((S,$)=>b.jsx(SS,{children:S},$))}),b.jsxs(TS,{children:[y.github&&y.github!=="#"&&b.jsxs(v4,{href:y.github,target:"_blank",children:[b.jsx(C0,{}),"GitHub"]}),y.demo&&y.demo!=="#"&&b.jsxs(v4,{href:y.demo,target:"_blank",$primary:!0,children:[b.jsx(Eb,{}),"Демо"]})]})]},y.title))})]})})})},zS=A.section`
  padding: ${t=>t.theme.space[20]} ${t=>t.theme.space[6]};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 ${t=>t.theme.space[0]};
  }
`,MS=A.div`
  max-width: ${t=>t.theme.containers["2xl"]};
  margin: 0 auto;
  position: relative;
`,wS=A(X.div)`
  text-align: center;
  margin-bottom: ${t=>t.theme.space[16]};
`,$S=A.div`
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
`,c1=A(X.div)`
  background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}14, ${t.theme.colors.primary.blue}08)`};
  backdrop-filter: blur(10px);
  border: 1.5px solid ${t=>t.theme.colors.border.primary};
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
    border-color: ${t=>t.theme.colors.primary.blue};
    box-shadow: 0 16px 40px rgba(37, 99, 235, 0.15);
    transform: translateY(-4px);
    background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}1a, ${t.theme.colors.primary.blue}0f)`};
  }
`,u1=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[4]};
  margin-bottom: ${t=>t.theme.space[4]};
`,f1=A.div`
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
`,b4=A.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[3]};
`,h1=A.h3`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
`,x4=A(X.div)`
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
`,S4=A.h4`
  font-size: ${t=>t.theme.fonts.sizes.base};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
  line-height: ${t=>t.theme.fonts.lineHeights.snug};
`,T4=A.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  margin-bottom: ${t=>t.theme.space[2]};

  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
`,A4=A.span`
  display: inline-block;
  padding: ${t=>t.theme.space[2]} ${t=>t.theme.space[3]};
  background: linear-gradient(135deg, ${t=>t.theme.colors.primary.blue}, rgba(37, 99, 235, 0.8));
  color: white;
  border-radius: 20px;
  font-size: ${t=>t.theme.fonts.sizes.xs};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`,z4=A.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.space[2]};
  margin-top: ${t=>t.theme.space[5]};
`,d1=A.span`
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
`,ES=A(X.div)`
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
`,DS=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[3]};
`,CS=A.span`
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.text.white};
  font-size: ${t=>t.theme.fonts.sizes.base};
`,jS=A.span`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,RS=A.div`
  display: grid;
  gap: ${t=>t.theme.space[6]};
`,OS=A(X.div)`
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
`,VS=A.div`
  display: flex;
  align-items: flex-start;
  gap: ${t=>t.theme.space[3]};
  margin-bottom: ${t=>t.theme.space[2]};
`,BS=A.div`
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
`,_S=A.div`
  flex: 1;
`,LS=A.h4`
  font-size: ${t=>t.theme.fonts.sizes.sm};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
  margin-bottom: ${t=>t.theme.space[1]};
  line-height: ${t=>t.theme.fonts.lineHeights.snug};
`,HS=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  margin-bottom: 0;
  flex-wrap: wrap;
  font-size: ${t=>t.theme.fonts.sizes.xs};
`,NS=A.span`
  color: ${t=>t.theme.colors.primary.blue};
  font-weight: ${t=>t.theme.fonts.weights.medium};
  font-size: ${t=>t.theme.fonts.sizes.xs};
`,US=A.span`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[1]};
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.xs};
`,kS=A.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.xs};
  line-height: ${t=>t.theme.fonts.lineHeights.normal};
  margin: 0;
`,YS=()=>{const[t,a]=gr({threshold:.02,triggerOnce:!0,rootMargin:"0px 0px -10% 0px"}),r={university:"Центр профессионального образования и обучения в области технологий и бизнеса",period:"2020 - 2022",courses:["Пневматика","Электроника","Гидравлика","Техническое обслуживание и монтаж электрокоммутационных аппаратов и двигателей","Программирование","Электрика"]},l={university:"SMK коллегия",period:"2022 - 2024",courses:["Дискретная математика","Основы программирования","Проектирование систем и базы данных","Мультимедийные технологии","Программирование интернет-систем","3D-моделирование и анимация","Аудиовизуальные технологии","Дискретная математика"]},u=[{title:"Мастер этического хакинга Wi-Fi - Атаки злых близнецов",issuer:"Udemy",year:"2020",icon:co,description:"Освоение этического взлома Wi-Fi сетей с акцентом на атаки типа 'Злой близнец'"},{title:"Этический хакинг - Практическое обучение - Часть I",issuer:"Udemy",year:"2021",icon:h4,description:"Практическое обучение этическому хакингу, часть 1"},{title:"Основы команд терминала BASH Shell в Linux",issuer:"Udemy",year:"2020",icon:R5,description:"Основы работы с командами терминала BASH в Linux"},{title:"Курс анализа уязвимостей для этического хакинга",issuer:"Udemy",year:"2020",icon:co,description:"Анализ уязвимостей в рамках этического хакинга"}],h=[{name:"Русский",level:"Родной",icon:d4},{name:"English",level:"Fluent",icon:Db}],f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},m={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},p={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}};return b.jsx(zS,{id:"education",ref:t,children:b.jsx(MS,{children:b.jsxs(X.div,{variants:f,initial:"hidden",animate:a?"visible":"hidden",children:[b.jsx(wS,{variants:m,children:b.jsx(fr,{as:X.h2,children:"Образование и сертификаты"})}),b.jsxs($S,{children:[b.jsxs(c1,{variants:m,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.1},children:[b.jsxs(u1,{children:[b.jsx(f1,{children:b.jsx(Cb,{})}),b.jsx(h1,{children:"Образование"})]}),b.jsxs(b4,{children:[b.jsxs(x4,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.2},children:[b.jsx(S4,{children:r.university}),b.jsxs(T4,{children:[b.jsx(f4,{}),b.jsxs("span",{children:[r.period," • Окончил"]})]}),b.jsx(A4,{children:"Профессиональное"}),b.jsx(z4,{children:r.courses.map((g,y)=>b.jsx(d1,{children:g},y))})]}),b.jsxs(x4,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3},children:[b.jsx(S4,{children:l.university}),b.jsxs(T4,{children:[b.jsx(f4,{}),b.jsxs("span",{children:[l.period," • Ушёл со второго курса"]})]}),b.jsx(A4,{children:"Высшее"}),b.jsxs(z4,{children:[l.courses.slice(0,6).map((g,y)=>b.jsx(d1,{children:g},y)),b.jsxs(d1,{children:["+",l.courses.length-6]})]})]})]})]}),b.jsxs(c1,{variants:m,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.2},children:[b.jsxs(u1,{children:[b.jsx(f1,{children:b.jsx(d4,{})}),b.jsx(h1,{children:"Языки"})]}),b.jsx(b4,{children:h.map((g,y)=>b.jsx(ES,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3+y*.1},children:b.jsxs(DS,{children:[b.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[b.jsx(g.icon,{}),b.jsx(CS,{children:g.name})]}),b.jsx(jS,{children:g.level})]})},g.name))})]}),b.jsxs(c1,{variants:m,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3},children:[b.jsxs(u1,{children:[b.jsx(f1,{children:b.jsx(h4,{})}),b.jsx(h1,{children:"Сертификаты"})]}),b.jsx(RS,{children:u.map((g,y)=>b.jsxs(OS,{variants:p,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.4+y*.1},children:[b.jsxs(VS,{children:[b.jsx(BS,{children:b.jsx(g.icon,{})}),b.jsxs(_S,{children:[b.jsx(LS,{children:g.title}),b.jsxs(HS,{children:[b.jsx(NS,{children:g.issuer}),b.jsxs(US,{children:[b.jsx(Tb,{}),g.year]})]})]})]}),b.jsx(kS,{children:g.description})]},g.title))})]})]})]})})})},GS=A.footer`
  background: ${t=>`linear-gradient(135deg, ${t.theme.colors.primary.blue}14, ${t.theme.colors.primary.blue}08)`};
  border-top: 1px solid ${t=>t.theme.colors.border.primary};
  padding: ${t=>t.theme.space[12]} ${t=>t.theme.space[6]};
`,qS=A.div`
  max-width: ${t=>t.theme.containers.xl};
  margin: 0 auto;
`,XS=A.div`
  display: grid;
  gap: ${t=>t.theme.space[8]};
  margin-bottom: ${t=>t.theme.space[8]};

  ${t=>t.theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`,PS=A(X.div)`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`,ZS=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
`,QS=A.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.text.white};
`,KS=A.div`
  font-size: ${t=>t.theme.fonts.sizes["2xl"]};
  font-weight: ${t=>t.theme.fonts.weights.bold};
  color: ${t=>t.theme.colors.primary.blue};
`,FS=A.p`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  line-height: ${t=>t.theme.fonts.lineHeights.relaxed};
`,JS=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[2]};
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,WS=A(Rb)`
  color: #EF4444;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,IS=A(Pe)`
  color: #60A5FA;
  animation: spin 3s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,tT=A(X.div)`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`,M4=A.h3`
  font-size: ${t=>t.theme.fonts.sizes.lg};
  font-weight: ${t=>t.theme.fonts.weights.semibold};
  color: ${t=>t.theme.colors.primary.purple};
`,eT=A.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${t=>t.theme.space[2]};
`,nT=A(X.a)`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  text-decoration: none;
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`,iT=A(X.div)`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[4]};
`,aT=A.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.space[3]};
`,sT=A.a`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
  text-decoration: none;
  transition: ${t=>t.theme.transitions.colors};
  display: block;

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`,rT=A.div`
  display: flex;
  gap: ${t=>t.theme.space[4]};
`,lT=A(X.a)`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.xl};
  transition: ${t=>t.theme.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.primary.purple};
  }
`,oT=A(X.div)`
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
`,cT=A.div`
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,uT=A.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.space[6]};
  color: ${t=>t.theme.colors.text.gray};
  font-size: ${t=>t.theme.fonts.sizes.sm};
`,fT=A.div`
  width: 8px;
  height: 8px;
  background: #4ADE80;
  border-radius: 50%;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,hT=()=>{const t=new Date().getFullYear(),a=[{icon:C0,href:"https://github.com/legion3trunn3r",label:"GitHub"},{icon:O5,href:"https://t.me/ValeryLegion",label:"Telegram"},{icon:V5,href:"mailto:valery.trishevsky@gmail.com",label:"Email"}],r=[{name:"О себе",href:"#about"},{name:"Навыки",href:"#skills"},{name:"Опыт",href:"#experience"},{name:"Проекты",href:"#projects"},{name:"Контакты",href:"#contact"}];return b.jsx(GS,{children:b.jsxs(qS,{children:[b.jsxs(XS,{children:[b.jsxs(PS,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},children:[b.jsxs(ZS,{children:[b.jsx(QS,{children:"Valeriy"}),b.jsx(KS,{children:"Dev"})]}),b.jsx(FS,{children:"Создаю веб-приложения с фокусом на качество, производительность и пользовательский опыт."}),b.jsxs(JS,{children:[b.jsx("span",{children:"Сделано с"}),b.jsx(WS,{}),b.jsx("span",{children:"и"}),b.jsx(IS,{})]})]}),b.jsxs(tT,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[b.jsx(M4,{children:"Навигация"}),b.jsx(eT,{children:r.map((l,u)=>b.jsx(nT,{href:l.href,whileHover:{x:5},onClick:h=>{h.preventDefault(),document.querySelector(l.href)?.scrollIntoView({behavior:"smooth"})},children:l.name},u))})]}),b.jsxs(iT,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[b.jsx(M4,{children:"Связаться"}),b.jsxs(aT,{children:[b.jsx(sT,{href:"mailto:valery.trishevsky@gmail.com",children:"valery.trishevsky@gmail.com"}),b.jsx(rT,{children:a.map((l,u)=>b.jsx(lT,{href:l.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,y:-2},title:l.label,children:b.jsx(l.icon,{})},u))})]})]})]}),b.jsxs(oT,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6,delay:.6},children:[b.jsxs(cT,{children:["© ",t," Valeriy Trishevskiy. Все права защищены."]}),b.jsxs(uT,{children:[b.jsx("span",{children:"Открыт для новых возможностей"}),b.jsx(fT,{})]})]})]})})};function dT(){const[t,a]=W.useState(()=>{const l=localStorage.getItem("theme-mode");return l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});W.useEffect(()=>{localStorage.setItem("theme-mode",t?"dark":"light"),document.documentElement.setAttribute("data-theme",t?"dark":"light")},[t]);const r=g8(t);return b.jsxs(f8,{theme:r,children:[b.jsx(D8,{isDarkMode:t}),b.jsxs(b8,{children:[b.jsx(tx,{isDarkMode:t,setIsDarkMode:a}),b.jsxs(x8,{children:[b.jsx(Ma,{id:"hero",fullHeight:!0,children:b.jsx($x,{})}),b.jsx(Ma,{id:"about",padding:!0,children:b.jsx($a,{children:b.jsx(Ox,{})})}),b.jsx(Ma,{id:"skills",padding:!0,darkBg:!0,children:b.jsx($a,{children:b.jsx(aS,{})})}),b.jsx(Ma,{id:"experience",padding:!0,children:b.jsx($a,{children:b.jsx(sS,{})})}),b.jsx(Ma,{id:"projects",padding:!0,darkBg:!0,children:b.jsx($a,{children:b.jsx(AS,{})})}),b.jsx(Ma,{id:"education",padding:!0,children:b.jsx($a,{children:b.jsx(YS,{})})})]}),b.jsx(hT,{})]})]})}dg.createRoot(document.getElementById("root")).render(b.jsx(W.StrictMode,{children:b.jsx(dT,{})}));
