(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))d(H);new MutationObserver(H=>{for(const q of H)if(q.type==="childList")for(const J of q.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&d(J)}).observe(document,{childList:!0,subtree:!0});function U(H){const q={};return H.integrity&&(q.integrity=H.integrity),H.referrerPolicy&&(q.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?q.credentials="include":H.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function d(H){if(H.ep)return;H.ep=!0;const q=U(H);fetch(H.href,q)}})();var cs={exports:{}},Nn={};var Td;function sh(){if(Td)return Nn;Td=1;var T=Symbol.for("react.transitional.element"),R=Symbol.for("react.fragment");function U(d,H,q){var J=null;if(q!==void 0&&(J=""+q),H.key!==void 0&&(J=""+H.key),"key"in H){q={};for(var ut in H)ut!=="key"&&(q[ut]=H[ut])}else q=H;return H=q.ref,{$$typeof:T,type:d,key:J,ref:H!==void 0?H:null,props:q}}return Nn.Fragment=R,Nn.jsx=U,Nn.jsxs=U,Nn}var Ed;function fh(){return Ed||(Ed=1,cs.exports=sh()),cs.exports}var c=fh(),ss={exports:{}},F={};var Ad;function rh(){if(Ad)return F;Ad=1;var T=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),tt=Symbol.iterator;function vt(r){return r===null||typeof r!="object"?null:(r=tt&&r[tt]||r["@@iterator"],typeof r=="function"?r:null)}var pt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ht=Object.assign,Rt={};function gt(r,p,E){this.props=r,this.context=p,this.refs=Rt,this.updater=E||pt}gt.prototype.isReactComponent={},gt.prototype.setState=function(r,p){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,p,"setState")},gt.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ht(){}Ht.prototype=gt.prototype;function bt(r,p,E){this.props=r,this.context=p,this.refs=Rt,this.updater=E||pt}var At=bt.prototype=new Ht;At.constructor=bt,ht(At,gt.prototype),At.isPureReactComponent=!0;var X=Array.isArray;function w(){}var D={H:null,A:null,T:null,S:null},at=Object.prototype.hasOwnProperty;function Q(r,p,E){var _=E.ref;return{$$typeof:T,type:r,key:p,ref:_!==void 0?_:null,props:E}}function Ot(r,p){return Q(r.type,p,r.props)}function I(r){return typeof r=="object"&&r!==null&&r.$$typeof===T}function ct(r){var p={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(E){return p[E]})}var Dt=/\/+/g;function Mt(r,p){return typeof r=="object"&&r!==null&&r.key!=null?ct(""+r.key):p.toString(36)}function Tt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(w,w):(r.status="pending",r.then(function(p){r.status==="pending"&&(r.status="fulfilled",r.value=p)},function(p){r.status==="pending"&&(r.status="rejected",r.reason=p)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function h(r,p,E,_,K){var et=typeof r;(et==="undefined"||et==="boolean")&&(r=null);var G=!1;if(r===null)G=!0;else switch(et){case"bigint":case"string":case"number":G=!0;break;case"object":switch(r.$$typeof){case T:case R:G=!0;break;case B:return G=r._init,h(G(r._payload),p,E,_,K)}}if(G)return K=K(r),G=_===""?"."+Mt(r,0):_,X(K)?(E="",G!=null&&(E=G.replace(Dt,"$&/")+"/"),h(K,p,E,"",function(It){return It})):K!=null&&(I(K)&&(K=Ot(K,E+(K.key==null||r&&r.key===K.key?"":(""+K.key).replace(Dt,"$&/")+"/")+G)),p.push(K)),1;G=0;var k=_===""?".":_+":";if(X(r))for(var W=0;W<r.length;W++)_=r[W],et=k+Mt(_,W),G+=h(_,p,E,et,K);else if(W=vt(r),typeof W=="function")for(r=W.call(r),W=0;!(_=r.next()).done;)_=_.value,et=k+Mt(_,W++),G+=h(_,p,E,et,K);else if(et==="object"){if(typeof r.then=="function")return h(Tt(r),p,E,_,K);throw p=String(r),Error("Objects are not valid as a React child (found: "+(p==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":p)+"). If you meant to render a collection of children, use an array instead.")}return G}function z(r,p,E){if(r==null)return r;var _=[],K=0;return h(r,_,"","",function(et){return p.call(E,et,K++)}),_}function A(r){if(r._status===-1){var p=r._result;p=p(),p.then(function(E){(r._status===0||r._status===-1)&&(r._status=1,r._result=E)},function(E){(r._status===0||r._status===-1)&&(r._status=2,r._result=E)}),r._status===-1&&(r._status=0,r._result=p)}if(r._status===1)return r._result.default;throw r._result}var st=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var p=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(p))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},$={map:z,forEach:function(r,p,E){z(r,function(){p.apply(this,arguments)},E)},count:function(r){var p=0;return z(r,function(){p++}),p},toArray:function(r){return z(r,function(p){return p})||[]},only:function(r){if(!I(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return F.Activity=M,F.Children=$,F.Component=gt,F.Fragment=U,F.Profiler=H,F.PureComponent=bt,F.StrictMode=d,F.Suspense=O,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,F.__COMPILER_RUNTIME={__proto__:null,c:function(r){return D.H.useMemoCache(r)}},F.cache=function(r){return function(){return r.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(r,p,E){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var _=ht({},r.props),K=r.key;if(p!=null)for(et in p.key!==void 0&&(K=""+p.key),p)!at.call(p,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&p.ref===void 0||(_[et]=p[et]);var et=arguments.length-2;if(et===1)_.children=E;else if(1<et){for(var G=Array(et),k=0;k<et;k++)G[k]=arguments[k+2];_.children=G}return Q(r.type,K,_)},F.createContext=function(r){return r={$$typeof:J,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:q,_context:r},r},F.createElement=function(r,p,E){var _,K={},et=null;if(p!=null)for(_ in p.key!==void 0&&(et=""+p.key),p)at.call(p,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(K[_]=p[_]);var G=arguments.length-2;if(G===1)K.children=E;else if(1<G){for(var k=Array(G),W=0;W<G;W++)k[W]=arguments[W+2];K.children=k}if(r&&r.defaultProps)for(_ in G=r.defaultProps,G)K[_]===void 0&&(K[_]=G[_]);return Q(r,et,K)},F.createRef=function(){return{current:null}},F.forwardRef=function(r){return{$$typeof:ut,render:r}},F.isValidElement=I,F.lazy=function(r){return{$$typeof:B,_payload:{_status:-1,_result:r},_init:A}},F.memo=function(r,p){return{$$typeof:S,type:r,compare:p===void 0?null:p}},F.startTransition=function(r){var p=D.T,E={};D.T=E;try{var _=r(),K=D.S;K!==null&&K(E,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(w,st)}catch(et){st(et)}finally{p!==null&&E.types!==null&&(p.types=E.types),D.T=p}},F.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},F.use=function(r){return D.H.use(r)},F.useActionState=function(r,p,E){return D.H.useActionState(r,p,E)},F.useCallback=function(r,p){return D.H.useCallback(r,p)},F.useContext=function(r){return D.H.useContext(r)},F.useDebugValue=function(){},F.useDeferredValue=function(r,p){return D.H.useDeferredValue(r,p)},F.useEffect=function(r,p){return D.H.useEffect(r,p)},F.useEffectEvent=function(r){return D.H.useEffectEvent(r)},F.useId=function(){return D.H.useId()},F.useImperativeHandle=function(r,p,E){return D.H.useImperativeHandle(r,p,E)},F.useInsertionEffect=function(r,p){return D.H.useInsertionEffect(r,p)},F.useLayoutEffect=function(r,p){return D.H.useLayoutEffect(r,p)},F.useMemo=function(r,p){return D.H.useMemo(r,p)},F.useOptimistic=function(r,p){return D.H.useOptimistic(r,p)},F.useReducer=function(r,p,E){return D.H.useReducer(r,p,E)},F.useRef=function(r){return D.H.useRef(r)},F.useState=function(r){return D.H.useState(r)},F.useSyncExternalStore=function(r,p,E){return D.H.useSyncExternalStore(r,p,E)},F.useTransition=function(){return D.H.useTransition()},F.version="19.2.4",F}var Od;function ms(){return Od||(Od=1,ss.exports=rh()),ss.exports}var L=ms(),fs={exports:{}},zn={},rs={exports:{}},os={};var Md;function oh(){return Md||(Md=1,(function(T){function R(h,z){var A=h.length;h.push(z);t:for(;0<A;){var st=A-1>>>1,$=h[st];if(0<H($,z))h[st]=z,h[A]=$,A=st;else break t}}function U(h){return h.length===0?null:h[0]}function d(h){if(h.length===0)return null;var z=h[0],A=h.pop();if(A!==z){h[0]=A;t:for(var st=0,$=h.length,r=$>>>1;st<r;){var p=2*(st+1)-1,E=h[p],_=p+1,K=h[_];if(0>H(E,A))_<$&&0>H(K,E)?(h[st]=K,h[_]=A,st=_):(h[st]=E,h[p]=A,st=p);else if(_<$&&0>H(K,A))h[st]=K,h[_]=A,st=_;else break t}}return z}function H(h,z){var A=h.sortIndex-z.sortIndex;return A!==0?A:h.id-z.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;T.unstable_now=function(){return q.now()}}else{var J=Date,ut=J.now();T.unstable_now=function(){return J.now()-ut}}var O=[],S=[],B=1,M=null,tt=3,vt=!1,pt=!1,ht=!1,Rt=!1,gt=typeof setTimeout=="function"?setTimeout:null,Ht=typeof clearTimeout=="function"?clearTimeout:null,bt=typeof setImmediate<"u"?setImmediate:null;function At(h){for(var z=U(S);z!==null;){if(z.callback===null)d(S);else if(z.startTime<=h)d(S),z.sortIndex=z.expirationTime,R(O,z);else break;z=U(S)}}function X(h){if(ht=!1,At(h),!pt)if(U(O)!==null)pt=!0,w||(w=!0,ct());else{var z=U(S);z!==null&&Tt(X,z.startTime-h)}}var w=!1,D=-1,at=5,Q=-1;function Ot(){return Rt?!0:!(T.unstable_now()-Q<at)}function I(){if(Rt=!1,w){var h=T.unstable_now();Q=h;var z=!0;try{t:{pt=!1,ht&&(ht=!1,Ht(D),D=-1),vt=!0;var A=tt;try{e:{for(At(h),M=U(O);M!==null&&!(M.expirationTime>h&&Ot());){var st=M.callback;if(typeof st=="function"){M.callback=null,tt=M.priorityLevel;var $=st(M.expirationTime<=h);if(h=T.unstable_now(),typeof $=="function"){M.callback=$,At(h),z=!0;break e}M===U(O)&&d(O),At(h)}else d(O);M=U(O)}if(M!==null)z=!0;else{var r=U(S);r!==null&&Tt(X,r.startTime-h),z=!1}}break t}finally{M=null,tt=A,vt=!1}z=void 0}}finally{z?ct():w=!1}}}var ct;if(typeof bt=="function")ct=function(){bt(I)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,Mt=Dt.port2;Dt.port1.onmessage=I,ct=function(){Mt.postMessage(null)}}else ct=function(){gt(I,0)};function Tt(h,z){D=gt(function(){h(T.unstable_now())},z)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(h){h.callback=null},T.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):at=0<h?Math.floor(1e3/h):5},T.unstable_getCurrentPriorityLevel=function(){return tt},T.unstable_next=function(h){switch(tt){case 1:case 2:case 3:var z=3;break;default:z=tt}var A=tt;tt=z;try{return h()}finally{tt=A}},T.unstable_requestPaint=function(){Rt=!0},T.unstable_runWithPriority=function(h,z){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var A=tt;tt=h;try{return z()}finally{tt=A}},T.unstable_scheduleCallback=function(h,z,A){var st=T.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?st+A:st):A=st,h){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=A+$,h={id:B++,callback:z,priorityLevel:h,startTime:A,expirationTime:$,sortIndex:-1},A>st?(h.sortIndex=A,R(S,h),U(O)===null&&h===U(S)&&(ht?(Ht(D),D=-1):ht=!0,Tt(X,A-st))):(h.sortIndex=$,R(O,h),pt||vt||(pt=!0,w||(w=!0,ct()))),h},T.unstable_shouldYield=Ot,T.unstable_wrapCallback=function(h){var z=tt;return function(){var A=tt;tt=z;try{return h.apply(this,arguments)}finally{tt=A}}}})(os)),os}var Dd;function dh(){return Dd||(Dd=1,rs.exports=oh()),rs.exports}var ds={exports:{}},Pt={};var _d;function mh(){if(_d)return Pt;_d=1;var T=ms();function R(O){var S="https://react.dev/errors/"+O;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)S+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+O+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var d={d:{f:U,r:function(){throw Error(R(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},H=Symbol.for("react.portal");function q(O,S,B){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:M==null?null:""+M,children:O,containerInfo:S,implementation:B}}var J=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ut(O,S){if(O==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Pt.createPortal=function(O,S){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(R(299));return q(O,S,null,B)},Pt.flushSync=function(O){var S=J.T,B=d.p;try{if(J.T=null,d.p=2,O)return O()}finally{J.T=S,d.p=B,d.d.f()}},Pt.preconnect=function(O,S){typeof O=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,d.d.C(O,S))},Pt.prefetchDNS=function(O){typeof O=="string"&&d.d.D(O)},Pt.preinit=function(O,S){if(typeof O=="string"&&S&&typeof S.as=="string"){var B=S.as,M=ut(B,S.crossOrigin),tt=typeof S.integrity=="string"?S.integrity:void 0,vt=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;B==="style"?d.d.S(O,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:M,integrity:tt,fetchPriority:vt}):B==="script"&&d.d.X(O,{crossOrigin:M,integrity:tt,fetchPriority:vt,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Pt.preinitModule=function(O,S){if(typeof O=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var B=ut(S.as,S.crossOrigin);d.d.M(O,{crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&d.d.M(O)},Pt.preload=function(O,S){if(typeof O=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var B=S.as,M=ut(B,S.crossOrigin);d.d.L(O,B,{crossOrigin:M,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Pt.preloadModule=function(O,S){if(typeof O=="string")if(S){var B=ut(S.as,S.crossOrigin);d.d.m(O,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else d.d.m(O)},Pt.requestFormReset=function(O){d.d.r(O)},Pt.unstable_batchedUpdates=function(O,S){return O(S)},Pt.useFormState=function(O,S,B){return J.H.useFormState(O,S,B)},Pt.useFormStatus=function(){return J.H.useHostTransitionStatus()},Pt.version="19.2.4",Pt}var Cd;function hh(){if(Cd)return ds.exports;Cd=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(R){console.error(R)}}return T(),ds.exports=mh(),ds.exports}var Ud;function bh(){if(Ud)return zn;Ud=1;var T=dh(),R=ms(),U=hh();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function q(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function J(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ut(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(q(t)!==t)throw Error(d(188))}function S(t){var e=t.alternate;if(!e){if(e=q(t),e===null)throw Error(d(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return O(n),t;if(i===a)return O(n),e;i=i.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,s=n.child;s;){if(s===l){u=!0,l=n,a=i;break}if(s===a){u=!0,a=n,l=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===l){u=!0,l=i,a=n;break}if(s===a){u=!0,a=i,l=n;break}s=s.sibling}if(!u)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?t:e}function B(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=B(t),e!==null)return e;t=t.sibling}return null}var M=Object.assign,tt=Symbol.for("react.element"),vt=Symbol.for("react.transitional.element"),pt=Symbol.for("react.portal"),ht=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),gt=Symbol.for("react.profiler"),Ht=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),At=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Dt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ht:return"Fragment";case gt:return"Profiler";case Rt:return"StrictMode";case X:return"Suspense";case w:return"SuspenseList";case Q:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case pt:return"Portal";case bt:return t.displayName||"Context";case Ht:return(t._context.displayName||"Context")+".Consumer";case At:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return e=t.displayName||null,e!==null?e:Mt(t.type)||"Memo";case at:e=t._payload,t=t._init;try{return Mt(t(e))}catch{}}return null}var Tt=Array.isArray,h=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},st=[],$=-1;function r(t){return{current:t}}function p(t){0>$||(t.current=st[$],st[$]=null,$--)}function E(t,e){$++,st[$]=t.current,t.current=e}var _=r(null),K=r(null),et=r(null),G=r(null);function k(t,e){switch(E(et,e),E(K,t),E(_,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Jo(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Jo(e),t=$o(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}p(_),E(_,t)}function W(){p(_),p(K),p(et)}function It(t){t.memoizedState!==null&&E(G,t);var e=_.current,l=$o(e,t.type);e!==l&&(E(K,t),E(_,l))}function Tn(t){K.current===t&&(p(_),p(K)),G.current===t&&(p(G),pn._currentValue=A)}var Li,js;function Tl(t){if(Li===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Li=e&&e[1]||"",js=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Li+t+js}var ki=!1;function Vi(t,e){if(!t||ki)return"";ki=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(v){var g=v}Reflect.construct(t,[],N)}else{try{N.call()}catch(v){g=v}t.call(N.prototype)}}else{try{throw Error()}catch(v){g=v}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var f=u.split(`
`),y=s.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===y.length)for(a=f.length-1,n=y.length-1;1<=a&&0<=n&&f[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==y[n]){var x=`
`+f[a].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=a&&0<=n);break}}}finally{ki=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Tl(l):""}function Gd(t,e){switch(t.tag){case 26:case 27:case 5:return Tl(t.type);case 16:return Tl("Lazy");case 13:return t.child!==e&&e!==null?Tl("Suspense Fallback"):Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return Tl("Activity");default:return""}}function Ns(t){try{var e="",l=null;do e+=Gd(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wi=Object.prototype.hasOwnProperty,Ki=T.unstable_scheduleCallback,Ji=T.unstable_cancelCallback,Xd=T.unstable_shouldYield,Qd=T.unstable_requestPaint,se=T.unstable_now,Zd=T.unstable_getCurrentPriorityLevel,zs=T.unstable_ImmediatePriority,Ts=T.unstable_UserBlockingPriority,En=T.unstable_NormalPriority,Ld=T.unstable_LowPriority,Es=T.unstable_IdlePriority,kd=T.log,Vd=T.unstable_setDisableYieldValue,Da=null,fe=null;function tl(t){if(typeof kd=="function"&&Vd(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(Da,t)}catch{}}var re=Math.clz32?Math.clz32:Jd,wd=Math.log,Kd=Math.LN2;function Jd(t){return t>>>=0,t===0?32:31-(wd(t)/Kd|0)|0}var An=256,On=262144,Mn=4194304;function El(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=El(a):(u&=s,u!==0?n=El(u):l||(l=s&~t,l!==0&&(n=El(l))))):(s=a&~i,s!==0?n=El(s):u!==0?n=El(u):l||(l=a&~t,l!==0&&(n=El(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function _a(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function $d(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function As(){var t=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),t}function $i(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ca(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wd(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,f=t.expirationTimes,y=t.hiddenUpdates;for(l=u&~l;0<l;){var x=31-re(l),N=1<<x;s[x]=0,f[x]=-1;var g=y[x];if(g!==null)for(y[x]=null,x=0;x<g.length;x++){var v=g[x];v!==null&&(v.lane&=-536870913)}l&=~N}a!==0&&Os(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Os(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-re(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Ms(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-re(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Ds(t,e){var l=e&-e;return l=(l&42)!==0?1:Wi(l),(l&(t.suspendedLanes|e))!==0?0:l}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _s(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:vd(t.type))}function Cs(t,e){var l=z.p;try{return z.p=t,e()}finally{z.p=l}}var el=Math.random().toString(36).slice(2),Kt="__reactFiber$"+el,ee="__reactProps$"+el,kl="__reactContainer$"+el,Ii="__reactEvents$"+el,Fd="__reactListeners$"+el,Id="__reactHandles$"+el,Us="__reactResources$"+el,Ua="__reactMarker$"+el;function Pi(t){delete t[Kt],delete t[ee],delete t[Ii],delete t[Fd],delete t[Id]}function Vl(t){var e=t[Kt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[kl]||l[Kt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=ld(t);t!==null;){if(l=t[Kt])return l;t=ld(t)}return e}t=l,l=t.parentNode}return null}function wl(t){if(t=t[Kt]||t[kl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ra(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Kl(t){var e=t[Us];return e||(e=t[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Vt(t){t[Ua]=!0}var Rs=new Set,Hs={};function Al(t,e){Jl(t,e),Jl(t+"Capture",e)}function Jl(t,e){for(Hs[t]=e,t=0;t<e.length;t++)Rs.add(e[t])}var Pd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bs={},Ys={};function tm(t){return wi.call(Ys,t)?!0:wi.call(Bs,t)?!1:Pd.test(t)?Ys[t]=!0:(Bs[t]=!0,!1)}function _n(t,e,l){if(tm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Cn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Be(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function em(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tu(t){if(!t._valueTracker){var e=qs(t)?"checked":"value";t._valueTracker=em(t,e,""+t[e])}}function Gs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=qs(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var lm=/[\n"\\]/g;function pe(t){return t.replace(lm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function eu(t,e,l,a,n,i,u,s){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ve(e)):t.value!==""+ve(e)&&(t.value=""+ve(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?lu(t,u,ve(e)):l!=null?lu(t,u,ve(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+ve(s):t.removeAttribute("name")}function Xs(t,e,l,a,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){tu(t);return}l=l!=null?""+ve(l):"",e=e!=null?""+ve(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),tu(t)}function lu(t,e,l){e==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function $l(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ve(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Qs(t,e,l){if(e!=null&&(e=""+ve(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ve(l):""}function Zs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(d(92));if(Tt(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ve(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),tu(t)}function Wl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var am=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ls(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||am.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ks(t,e,l){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Ls(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Ls(t,i,e[i])}function au(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return im.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ye(){}var nu=null;function iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fl=null,Il=null;function Vs(t){var e=wl(t);if(e&&(t=e.stateNode)){var l=t[ee]||null;t:switch(t=e.stateNode,e.type){case"input":if(eu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+pe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[ee]||null;if(!n)throw Error(d(90));eu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Gs(a)}break t;case"textarea":Qs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&$l(t,!!l.multiple,e,!1)}}}var uu=!1;function ws(t,e,l){if(uu)return t(e,l);uu=!0;try{var a=t(e);return a}finally{if(uu=!1,(Fl!==null||Il!==null)&&(Si(),Fl&&(e=Fl,t=Il,Il=Fl=null,Vs(e),t)))for(e=0;e<t.length;e++)Vs(t[e])}}function Ha(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ee]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(d(231,e,typeof l));return l}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(qe)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{cu=!1}var ll=null,su=null,Hn=null;function Ks(){if(Hn)return Hn;var t,e=su,l=e.length,a,n="value"in ll?ll.value:ll.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return Hn=n.slice(t,1<a?1-a:void 0)}function Bn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yn(){return!0}function Js(){return!1}function le(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Yn:Js,this.isPropagationStopped=Js,this}return M(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),e}var Ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=le(Ol),Ya=M({},Ol,{view:0,detail:0}),um=le(Ya),fu,ru,qa,Gn=M({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(fu=t.screenX-qa.screenX,ru=t.screenY-qa.screenY):ru=fu=0,qa=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),$s=le(Gn),cm=M({},Gn,{dataTransfer:0}),sm=le(cm),fm=M({},Ya,{relatedTarget:0}),ou=le(fm),rm=M({},Ol,{animationName:0,elapsedTime:0,pseudoElement:0}),om=le(rm),dm=M({},Ol,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mm=le(dm),hm=M({},Ol,{data:0}),Ws=le(hm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gm[t])?!!e[t]:!1}function du(){return vm}var pm=M({},Ya,{key:function(t){if(t.key){var e=bm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ym[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?Bn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xm=le(pm),Sm=M({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fs=le(Sm),jm=M({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),Nm=le(jm),zm=M({},Ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tm=le(zm),Em=M({},Gn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Am=le(Em),Om=M({},Ol,{newState:0,oldState:0}),Mm=le(Om),Dm=[9,13,27,32],mu=qe&&"CompositionEvent"in window,Ga=null;qe&&"documentMode"in document&&(Ga=document.documentMode);var _m=qe&&"TextEvent"in window&&!Ga,Is=qe&&(!mu||Ga&&8<Ga&&11>=Ga),Ps=" ",tf=!1;function ef(t,e){switch(t){case"keyup":return Dm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pl=!1;function Cm(t,e){switch(t){case"compositionend":return lf(e);case"keypress":return e.which!==32?null:(tf=!0,Ps);case"textInput":return t=e.data,t===Ps&&tf?null:t;default:return null}}function Um(t,e){if(Pl)return t==="compositionend"||!mu&&ef(t,e)?(t=Ks(),Hn=su=ll=null,Pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Is&&e.locale!=="ko"?null:e.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rm[t.type]:e==="textarea"}function nf(t,e,l,a){Fl?Il?Il.push(a):Il=[a]:Fl=a,e=Oi(e,"onChange"),0<e.length&&(l=new qn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Xa=null,Qa=null;function Hm(t){Zo(t,0)}function Xn(t){var e=Ra(t);if(Gs(e))return t}function uf(t,e){if(t==="change")return e}var cf=!1;if(qe){var hu;if(qe){var bu="oninput"in document;if(!bu){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),bu=typeof sf.oninput=="function"}hu=bu}else hu=!1;cf=hu&&(!document.documentMode||9<document.documentMode)}function ff(){Xa&&(Xa.detachEvent("onpropertychange",rf),Qa=Xa=null)}function rf(t){if(t.propertyName==="value"&&Xn(Qa)){var e=[];nf(e,Qa,t,iu(t)),ws(Hm,e)}}function Bm(t,e,l){t==="focusin"?(ff(),Xa=e,Qa=l,Xa.attachEvent("onpropertychange",rf)):t==="focusout"&&ff()}function Ym(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xn(Qa)}function qm(t,e){if(t==="click")return Xn(e)}function Gm(t,e){if(t==="input"||t==="change")return Xn(e)}function Xm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oe=typeof Object.is=="function"?Object.is:Xm;function Za(t,e){if(oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!wi.call(e,n)||!oe(t[n],e[n]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function df(t,e){var l=of(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=of(l)}}function mf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Un(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Un(t.document)}return e}function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Qm=qe&&"documentMode"in document&&11>=document.documentMode,ta=null,gu=null,La=null,vu=!1;function bf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vu||ta==null||ta!==Un(a)||(a=ta,"selectionStart"in a&&yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Za(La,a)||(La=a,a=Oi(gu,"onSelect"),0<a.length&&(e=new qn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ta)))}function Ml(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ea={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionrun:Ml("Transition","TransitionRun"),transitionstart:Ml("Transition","TransitionStart"),transitioncancel:Ml("Transition","TransitionCancel"),transitionend:Ml("Transition","TransitionEnd")},pu={},yf={};qe&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Dl(t){if(pu[t])return pu[t];if(!ea[t])return t;var e=ea[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in yf)return pu[t]=e[l];return t}var gf=Dl("animationend"),vf=Dl("animationiteration"),pf=Dl("animationstart"),Zm=Dl("transitionrun"),Lm=Dl("transitionstart"),km=Dl("transitioncancel"),xf=Dl("transitionend"),Sf=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Oe(t,e){Sf.set(t,e),Al(e,[t])}var Qn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xe=[],la=0,Su=0;function Zn(){for(var t=la,e=Su=la=0;e<t;){var l=xe[e];xe[e++]=null;var a=xe[e];xe[e++]=null;var n=xe[e];xe[e++]=null;var i=xe[e];if(xe[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&jf(l,n,i)}}function Ln(t,e,l,a){xe[la++]=t,xe[la++]=e,xe[la++]=l,xe[la++]=a,Su|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function ju(t,e,l,a){return Ln(t,e,l,a),kn(t)}function _l(t,e){return Ln(t,null,null,e),kn(t)}function jf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-re(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function kn(t){if(50<dn)throw dn=0,_c=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var aa={};function Vm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,l,a){return new Vm(t,e,l,a)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ge(t,e){var l=t.alternate;return l===null?(l=de(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Nf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Vn(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")Nu(t)&&(u=1);else if(typeof t=="string")u=W0(t,l,_.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Q:return t=de(31,l,e,n),t.elementType=Q,t.lanes=i,t;case ht:return Cl(l.children,n,i,e);case Rt:u=8,n|=24;break;case gt:return t=de(12,l,e,n|2),t.elementType=gt,t.lanes=i,t;case X:return t=de(13,l,e,n),t.elementType=X,t.lanes=i,t;case w:return t=de(19,l,e,n),t.elementType=w,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bt:u=10;break t;case Ht:u=9;break t;case At:u=11;break t;case D:u=14;break t;case at:u=16,a=null;break t}u=29,l=Error(d(130,t===null?"null":typeof t,"")),a=null}return e=de(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Cl(t,e,l,a){return t=de(7,t,a,e),t.lanes=l,t}function zu(t,e,l){return t=de(6,t,null,e),t.lanes=l,t}function zf(t){var e=de(18,null,null,0);return e.stateNode=t,e}function Tu(t,e,l){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Tf=new WeakMap;function Se(t,e){if(typeof t=="object"&&t!==null){var l=Tf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ns(e)},Tf.set(t,e),e)}return{value:t,source:e,stack:Ns(e)}}var na=[],ia=0,wn=null,ka=0,je=[],Ne=0,al=null,Ce=1,Ue="";function Xe(t,e){na[ia++]=ka,na[ia++]=wn,wn=t,ka=e}function Ef(t,e,l){je[Ne++]=Ce,je[Ne++]=Ue,je[Ne++]=al,al=t;var a=Ce;t=Ue;var n=32-re(a)-1;a&=~(1<<n),l+=1;var i=32-re(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Ce=1<<32-re(e)+n|l<<n|a,Ue=i+t}else Ce=1<<i|l<<n|a,Ue=t}function Eu(t){t.return!==null&&(Xe(t,1),Ef(t,1,0))}function Au(t){for(;t===wn;)wn=na[--ia],na[ia]=null,ka=na[--ia],na[ia]=null;for(;t===al;)al=je[--Ne],je[Ne]=null,Ue=je[--Ne],je[Ne]=null,Ce=je[--Ne],je[Ne]=null}function Af(t,e){je[Ne++]=Ce,je[Ne++]=Ue,je[Ne++]=al,Ce=e.id,Ue=e.overflow,al=t}var Jt=null,_t=null,ot=!1,nl=null,ze=!1,Ou=Error(d(519));function il(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Va(Se(e,t)),Ou}function Of(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Kt]=t,e[ee]=a,l){case"dialog":it("cancel",e),it("close",e);break;case"iframe":case"object":case"embed":it("load",e);break;case"video":case"audio":for(l=0;l<hn.length;l++)it(hn[l],e);break;case"source":it("error",e);break;case"img":case"image":case"link":it("error",e),it("load",e);break;case"details":it("toggle",e);break;case"input":it("invalid",e),Xs(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":it("invalid",e);break;case"textarea":it("invalid",e),Zs(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||wo(e.textContent,l)?(a.popover!=null&&(it("beforetoggle",e),it("toggle",e)),a.onScroll!=null&&it("scroll",e),a.onScrollEnd!=null&&it("scrollend",e),a.onClick!=null&&(e.onclick=Ye),e=!0):e=!1,e||il(t,!0)}function Mf(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:ze=!1;return;case 27:case 3:ze=!0;return;default:Jt=Jt.return}}function ua(t){if(t!==Jt)return!1;if(!ot)return Mf(t),ot=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||wc(t.type,t.memoizedProps)),l=!l),l&&_t&&il(t),Mf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));_t=ed(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));_t=ed(t)}else e===27?(e=_t,pl(t.type)?(t=Fc,Fc=null,_t=t):_t=e):_t=Jt?Ee(t.stateNode.nextSibling):null;return!0}function Ul(){_t=Jt=null,ot=!1}function Mu(){var t=nl;return t!==null&&(ue===null?ue=t:ue.push.apply(ue,t),nl=null),t}function Va(t){nl===null?nl=[t]:nl.push(t)}var Du=r(null),Rl=null,Qe=null;function ul(t,e,l){E(Du,e._currentValue),e._currentValue=l}function Ze(t){t._currentValue=Du.current,p(Du)}function _u(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Cu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=n;for(var f=0;f<e.length;f++)if(s.context===e[f]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),_u(i.return,l,t),a||(u=null);break t}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(d(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),_u(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ca(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var s=n.type;oe(n.pendingProps.value,u.value)||(t!==null?t.push(s):t=[s])}}else if(n===G.current){if(u=n.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(pn):t=[pn])}n=n.return}t!==null&&Cu(e,t,l,a),e.flags|=262144}function Kn(t){for(t=t.firstContext;t!==null;){if(!oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hl(t){Rl=t,Qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return Df(Rl,t)}function Jn(t,e){return Rl===null&&Hl(t),Df(t,e)}function Df(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Qe===null){if(t===null)throw Error(d(308));Qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Qe=Qe.next=e;return l}var wm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Km=T.unstable_scheduleCallback,Jm=T.unstable_NormalPriority,Xt={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new wm,data:new Map,refCount:0}}function wa(t){t.refCount--,t.refCount===0&&Km(Jm,function(){t.controller.abort()})}var Ka=null,Ru=0,sa=0,fa=null;function $m(t,e){if(Ka===null){var l=Ka=[];Ru=0,sa=Yc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ru++,e.then(_f,_f),e}function _f(){if(--Ru===0&&Ka!==null){fa!==null&&(fa.status="fulfilled");var t=Ka;Ka=null,sa=0,fa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Wm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Cf=h.S;h.S=function(t,e){yo=se(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&$m(t,e),Cf!==null&&Cf(t,e)};var Bl=r(null);function Hu(){var t=Bl.current;return t!==null?t:Et.pooledCache}function $n(t,e){e===null?E(Bl,Bl.current):E(Bl,e.pool)}function Uf(){var t=Hu();return t===null?null:{parent:Xt._currentValue,pool:t}}var ra=Error(d(460)),Bu=Error(d(474)),Wn=Error(d(542)),Fn={then:function(){}};function Rf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ye,Ye),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Yf(t),t;default:if(typeof e.status=="string")e.then(Ye,Ye);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Yf(t),t}throw ql=e,ra}}function Yl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ql=l,ra):l}}var ql=null;function Bf(){if(ql===null)throw Error(d(459));var t=ql;return ql=null,t}function Yf(t){if(t===ra||t===Wn)throw Error(d(483))}var oa=null,Ja=0;function In(t){var e=Ja;return Ja+=1,oa===null&&(oa=[]),Hf(oa,t,e)}function $a(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pn(t,e){throw e.$$typeof===tt?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qf(t){function e(m,o){if(t){var b=m.deletions;b===null?(m.deletions=[o],m.flags|=16):b.push(o)}}function l(m,o){if(!t)return null;for(;o!==null;)e(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=Ge(m,o),m.index=0,m.sibling=null,m}function i(m,o,b){return m.index=b,t?(b=m.alternate,b!==null?(b=b.index,b<o?(m.flags|=67108866,o):b):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function u(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function s(m,o,b,j){return o===null||o.tag!==6?(o=zu(b,m.mode,j),o.return=m,o):(o=n(o,b),o.return=m,o)}function f(m,o,b,j){var Z=b.type;return Z===ht?x(m,o,b.props.children,j,b.key):o!==null&&(o.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===at&&Yl(Z)===o.type)?(o=n(o,b.props),$a(o,b),o.return=m,o):(o=Vn(b.type,b.key,b.props,null,m.mode,j),$a(o,b),o.return=m,o)}function y(m,o,b,j){return o===null||o.tag!==4||o.stateNode.containerInfo!==b.containerInfo||o.stateNode.implementation!==b.implementation?(o=Tu(b,m.mode,j),o.return=m,o):(o=n(o,b.children||[]),o.return=m,o)}function x(m,o,b,j,Z){return o===null||o.tag!==7?(o=Cl(b,m.mode,j,Z),o.return=m,o):(o=n(o,b),o.return=m,o)}function N(m,o,b){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=zu(""+o,m.mode,b),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case vt:return b=Vn(o.type,o.key,o.props,null,m.mode,b),$a(b,o),b.return=m,b;case pt:return o=Tu(o,m.mode,b),o.return=m,o;case at:return o=Yl(o),N(m,o,b)}if(Tt(o)||ct(o))return o=Cl(o,m.mode,b,null),o.return=m,o;if(typeof o.then=="function")return N(m,In(o),b);if(o.$$typeof===bt)return N(m,Jn(m,o),b);Pn(m,o)}return null}function g(m,o,b,j){var Z=o!==null?o.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return Z!==null?null:s(m,o,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vt:return b.key===Z?f(m,o,b,j):null;case pt:return b.key===Z?y(m,o,b,j):null;case at:return b=Yl(b),g(m,o,b,j)}if(Tt(b)||ct(b))return Z!==null?null:x(m,o,b,j,null);if(typeof b.then=="function")return g(m,o,In(b),j);if(b.$$typeof===bt)return g(m,o,Jn(m,b),j);Pn(m,b)}return null}function v(m,o,b,j,Z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(b)||null,s(o,m,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case vt:return m=m.get(j.key===null?b:j.key)||null,f(o,m,j,Z);case pt:return m=m.get(j.key===null?b:j.key)||null,y(o,m,j,Z);case at:return j=Yl(j),v(m,o,b,j,Z)}if(Tt(j)||ct(j))return m=m.get(b)||null,x(o,m,j,Z,null);if(typeof j.then=="function")return v(m,o,b,In(j),Z);if(j.$$typeof===bt)return v(m,o,b,Jn(o,j),Z);Pn(o,j)}return null}function C(m,o,b,j){for(var Z=null,dt=null,Y=o,lt=o=0,rt=null;Y!==null&&lt<b.length;lt++){Y.index>lt?(rt=Y,Y=null):rt=Y.sibling;var mt=g(m,Y,b[lt],j);if(mt===null){Y===null&&(Y=rt);break}t&&Y&&mt.alternate===null&&e(m,Y),o=i(mt,o,lt),dt===null?Z=mt:dt.sibling=mt,dt=mt,Y=rt}if(lt===b.length)return l(m,Y),ot&&Xe(m,lt),Z;if(Y===null){for(;lt<b.length;lt++)Y=N(m,b[lt],j),Y!==null&&(o=i(Y,o,lt),dt===null?Z=Y:dt.sibling=Y,dt=Y);return ot&&Xe(m,lt),Z}for(Y=a(Y);lt<b.length;lt++)rt=v(Y,m,lt,b[lt],j),rt!==null&&(t&&rt.alternate!==null&&Y.delete(rt.key===null?lt:rt.key),o=i(rt,o,lt),dt===null?Z=rt:dt.sibling=rt,dt=rt);return t&&Y.forEach(function(zl){return e(m,zl)}),ot&&Xe(m,lt),Z}function V(m,o,b,j){if(b==null)throw Error(d(151));for(var Z=null,dt=null,Y=o,lt=o=0,rt=null,mt=b.next();Y!==null&&!mt.done;lt++,mt=b.next()){Y.index>lt?(rt=Y,Y=null):rt=Y.sibling;var zl=g(m,Y,mt.value,j);if(zl===null){Y===null&&(Y=rt);break}t&&Y&&zl.alternate===null&&e(m,Y),o=i(zl,o,lt),dt===null?Z=zl:dt.sibling=zl,dt=zl,Y=rt}if(mt.done)return l(m,Y),ot&&Xe(m,lt),Z;if(Y===null){for(;!mt.done;lt++,mt=b.next())mt=N(m,mt.value,j),mt!==null&&(o=i(mt,o,lt),dt===null?Z=mt:dt.sibling=mt,dt=mt);return ot&&Xe(m,lt),Z}for(Y=a(Y);!mt.done;lt++,mt=b.next())mt=v(Y,m,lt,mt.value,j),mt!==null&&(t&&mt.alternate!==null&&Y.delete(mt.key===null?lt:mt.key),o=i(mt,o,lt),dt===null?Z=mt:dt.sibling=mt,dt=mt);return t&&Y.forEach(function(ch){return e(m,ch)}),ot&&Xe(m,lt),Z}function zt(m,o,b,j){if(typeof b=="object"&&b!==null&&b.type===ht&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case vt:t:{for(var Z=b.key;o!==null;){if(o.key===Z){if(Z=b.type,Z===ht){if(o.tag===7){l(m,o.sibling),j=n(o,b.props.children),j.return=m,m=j;break t}}else if(o.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===at&&Yl(Z)===o.type){l(m,o.sibling),j=n(o,b.props),$a(j,b),j.return=m,m=j;break t}l(m,o);break}else e(m,o);o=o.sibling}b.type===ht?(j=Cl(b.props.children,m.mode,j,b.key),j.return=m,m=j):(j=Vn(b.type,b.key,b.props,null,m.mode,j),$a(j,b),j.return=m,m=j)}return u(m);case pt:t:{for(Z=b.key;o!==null;){if(o.key===Z)if(o.tag===4&&o.stateNode.containerInfo===b.containerInfo&&o.stateNode.implementation===b.implementation){l(m,o.sibling),j=n(o,b.children||[]),j.return=m,m=j;break t}else{l(m,o);break}else e(m,o);o=o.sibling}j=Tu(b,m.mode,j),j.return=m,m=j}return u(m);case at:return b=Yl(b),zt(m,o,b,j)}if(Tt(b))return C(m,o,b,j);if(ct(b)){if(Z=ct(b),typeof Z!="function")throw Error(d(150));return b=Z.call(b),V(m,o,b,j)}if(typeof b.then=="function")return zt(m,o,In(b),j);if(b.$$typeof===bt)return zt(m,o,Jn(m,b),j);Pn(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,o!==null&&o.tag===6?(l(m,o.sibling),j=n(o,b),j.return=m,m=j):(l(m,o),j=zu(b,m.mode,j),j.return=m,m=j),u(m)):l(m,o)}return function(m,o,b,j){try{Ja=0;var Z=zt(m,o,b,j);return oa=null,Z}catch(Y){if(Y===ra||Y===Wn)throw Y;var dt=de(29,Y,null,m.mode);return dt.lanes=j,dt.return=m,dt}}}var Gl=qf(!0),Gf=qf(!1),cl=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(yt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=kn(t),jf(t,null,l),e}return Ln(t,a,e,l),kn(t)}function Wa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ms(t,l)}}function Gu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Xu=!1;function Fa(){if(Xu){var t=fa;if(t!==null)throw t}}function Ia(t,e,l,a){Xu=!1;var n=t.updateQueue;cl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var f=s,y=f.next;f.next=null,u===null?i=y:u.next=y,u=f;var x=t.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==u&&(s===null?x.firstBaseUpdate=y:s.next=y,x.lastBaseUpdate=f))}if(i!==null){var N=n.baseState;u=0,x=y=f=null,s=i;do{var g=s.lane&-536870913,v=g!==s.lane;if(v?(ft&g)===g:(a&g)===g){g!==0&&g===sa&&(Xu=!0),x!==null&&(x=x.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var C=t,V=s;g=e;var zt=l;switch(V.tag){case 1:if(C=V.payload,typeof C=="function"){N=C.call(zt,N,g);break t}N=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=V.payload,g=typeof C=="function"?C.call(zt,N,g):C,g==null)break t;N=M({},N,g);break t;case 2:cl=!0}}g=s.callback,g!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[g]:v.push(g))}else v={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(y=x=v,f=N):x=x.next=v,u|=g;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;v=s,s=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);x===null&&(f=N),n.baseState=f,n.firstBaseUpdate=y,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),hl|=u,t.lanes=u,t.memoizedState=N}}function Xf(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function Qf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Xf(l[t],e)}var da=r(null),ti=r(0);function Zf(t,e){t=Fe,E(ti,t),E(da,e),Fe=t|e.baseLanes}function Qu(){E(ti,Fe),E(da,da.current)}function Zu(){Fe=ti.current,p(da),p(ti)}var me=r(null),Te=null;function rl(t){var e=t.alternate;E(qt,qt.current&1),E(me,t),Te===null&&(e===null||da.current!==null||e.memoizedState!==null)&&(Te=t)}function Lu(t){E(qt,qt.current),E(me,t),Te===null&&(Te=t)}function Lf(t){t.tag===22?(E(qt,qt.current),E(me,t),Te===null&&(Te=t)):ol()}function ol(){E(qt,qt.current),E(me,me.current)}function he(t){p(me),Te===t&&(Te=null),p(qt)}var qt=r(0);function ei(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||$c(l)||Wc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Le=0,P=null,jt=null,Qt=null,li=!1,ma=!1,Xl=!1,ai=0,Pa=0,ha=null,Fm=0;function Bt(){throw Error(d(321))}function ku(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!oe(t[l],e[l]))return!1;return!0}function Vu(t,e,l,a,n,i){return Le=i,P=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,h.H=t===null||t.memoizedState===null?Er:uc,Xl=!1,i=l(a,n),Xl=!1,ma&&(i=Vf(e,l,a,n)),kf(t),i}function kf(t){h.H=ln;var e=jt!==null&&jt.next!==null;if(Le=0,Qt=jt=P=null,li=!1,Pa=0,ha=null,e)throw Error(d(300));t===null||Zt||(t=t.dependencies,t!==null&&Kn(t)&&(Zt=!0))}function Vf(t,e,l,a){P=t;var n=0;do{if(ma&&(ha=null),Pa=0,ma=!1,25<=n)throw Error(d(301));if(n+=1,Qt=jt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}h.H=Ar,i=e(l,a)}while(ma);return i}function Im(){var t=h.H,e=t.useState()[0];return e=typeof e.then=="function"?tn(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(P.flags|=1024),e}function wu(){var t=ai!==0;return ai=0,t}function Ku(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Ju(t){if(li){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}li=!1}Le=0,Qt=jt=P=null,ma=!1,Pa=ai=0,ha=null}function te(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?P.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gt(){if(jt===null){var t=P.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Qt===null?P.memoizedState:Qt.next;if(e!==null)Qt=e,jt=t;else{if(t===null)throw P.alternate===null?Error(d(467)):Error(d(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Qt===null?P.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tn(t){var e=Pa;return Pa+=1,ha===null&&(ha=[]),t=Hf(ha,t,e),e=P,(Qt===null?e.memoizedState:Qt.next)===null&&(e=e.alternate,h.H=e===null||e.memoizedState===null?Er:uc),t}function ii(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tn(t);if(t.$$typeof===bt)return $t(t)}throw Error(d(438,String(t)))}function $u(t){var e=null,l=P.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=ni(),P.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Ot;return e.index++,l}function ke(t,e){return typeof e=="function"?e(t):e}function ui(t){var e=Gt();return Wu(e,jt,t)}function Wu(t,e,l){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var s=u=null,f=null,y=e,x=!1;do{var N=y.lane&-536870913;if(N!==y.lane?(ft&N)===N:(Le&N)===N){var g=y.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),N===sa&&(x=!0);else if((Le&g)===g){y=y.next,g===sa&&(x=!0);continue}else N={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(s=f=N,u=i):f=f.next=N,P.lanes|=g,hl|=g;N=y.action,Xl&&l(i,N),i=y.hasEagerState?y.eagerState:l(i,N)}else g={lane:N,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(s=f=g,u=i):f=f.next=g,P.lanes|=N,hl|=N;y=y.next}while(y!==null&&y!==e);if(f===null?u=i:f.next=s,!oe(i,t.memoizedState)&&(Zt=!0,x&&(l=fa,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=f,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Fu(t){var e=Gt(),l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);oe(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function wf(t,e,l){var a=P,n=Gt(),i=ot;if(i){if(l===void 0)throw Error(d(407));l=l()}else l=e();var u=!oe((jt||n).memoizedState,l);if(u&&(n.memoizedState=l,Zt=!0),n=n.queue,tc($f.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,ba(9,{destroy:void 0},Jf.bind(null,a,n,l,e),null),Et===null)throw Error(d(349));i||(Le&127)!==0||Kf(a,e,l)}return l}function Kf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=P.updateQueue,e===null?(e=ni(),P.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Jf(t,e,l,a){e.value=l,e.getSnapshot=a,Wf(e)&&Ff(t)}function $f(t,e,l){return l(function(){Wf(e)&&Ff(t)})}function Wf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!oe(t,l)}catch{return!0}}function Ff(t){var e=_l(t,2);e!==null&&ce(e,t,2)}function Iu(t){var e=te();if(typeof t=="function"){var l=t;if(t=l(),Xl){tl(!0);try{l()}finally{tl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:t},e}function If(t,e,l,a){return t.baseState=l,Wu(t,jt,typeof a=="function"?a:ke)}function Pm(t,e,l,a,n){if(fi(t))throw Error(d(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};h.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Pf(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Pf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=h.T,u={};h.T=u;try{var s=l(n,a),f=h.S;f!==null&&f(u,s),tr(t,e,s)}catch(y){Pu(t,e,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),h.T=i}}else try{i=l(n,a),tr(t,e,i)}catch(y){Pu(t,e,y)}}function tr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){er(t,e,a)},function(a){return Pu(t,e,a)}):er(t,e,l)}function er(t,e,l){e.status="fulfilled",e.value=l,lr(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Pf(t,l)))}function Pu(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,lr(e),e=e.next;while(e!==a)}t.action=null}function lr(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ar(t,e){return e}function nr(t,e){if(ot){var l=Et.formState;if(l!==null){t:{var a=P;if(ot){if(_t){e:{for(var n=_t,i=ze;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ee(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){_t=Ee(n.nextSibling),a=n.data==="F!";break t}}il(a)}a=!1}a&&(e=l[0])}}return l=te(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},l.queue=a,l=Nr.bind(null,P,a),a.dispatch=l,a=Iu(!1),i=ic.bind(null,P,!1,a.queue),a=te(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Pm.bind(null,P,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function ir(t){var e=Gt();return ur(e,jt,t)}function ur(t,e,l){if(e=Wu(t,e,ar)[0],t=ui(ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=tn(e)}catch(u){throw u===ra?Wn:u}else a=e;e=Gt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(P.flags|=2048,ba(9,{destroy:void 0},t0.bind(null,n,l),null)),[a,i,t]}function t0(t,e){t.action=e}function cr(t){var e=Gt(),l=jt;if(l!==null)return ur(e,l,t);Gt(),e=e.memoizedState,l=Gt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ba(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=P.updateQueue,e===null&&(e=ni(),P.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function sr(){return Gt().memoizedState}function ci(t,e,l,a){var n=te();P.flags|=t,n.memoizedState=ba(1|e,{destroy:void 0},l,a===void 0?null:a)}function si(t,e,l,a){var n=Gt();a=a===void 0?null:a;var i=n.memoizedState.inst;jt!==null&&a!==null&&ku(a,jt.memoizedState.deps)?n.memoizedState=ba(e,i,l,a):(P.flags|=t,n.memoizedState=ba(1|e,i,l,a))}function fr(t,e){ci(8390656,8,t,e)}function tc(t,e){si(2048,8,t,e)}function e0(t){P.flags|=4;var e=P.updateQueue;if(e===null)e=ni(),P.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function rr(t){var e=Gt().memoizedState;return e0({ref:e,nextImpl:t}),function(){if((yt&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function or(t,e){return si(4,2,t,e)}function dr(t,e){return si(4,4,t,e)}function mr(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hr(t,e,l){l=l!=null?l.concat([t]):null,si(4,4,mr.bind(null,e,t),l)}function ec(){}function br(t,e){var l=Gt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&ku(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function yr(t,e){var l=Gt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&ku(e,a[1]))return a[0];if(a=t(),Xl){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a}function lc(t,e,l){return l===void 0||(Le&1073741824)!==0&&(ft&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=vo(),P.lanes|=t,hl|=t,l)}function gr(t,e,l,a){return oe(l,e)?l:da.current!==null?(t=lc(t,l,a),oe(t,e)||(Zt=!0),t):(Le&42)===0||(Le&1073741824)!==0&&(ft&261930)===0?(Zt=!0,t.memoizedState=l):(t=vo(),P.lanes|=t,hl|=t,e)}function vr(t,e,l,a,n){var i=z.p;z.p=i!==0&&8>i?i:8;var u=h.T,s={};h.T=s,ic(t,!1,e,l);try{var f=n(),y=h.S;if(y!==null&&y(s,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=Wm(f,a);en(t,e,x,ge(t))}else en(t,e,a,ge(t))}catch(N){en(t,e,{then:function(){},status:"rejected",reason:N},ge())}finally{z.p=i,u!==null&&s.types!==null&&(u.types=s.types),h.T=u}}function l0(){}function ac(t,e,l,a){if(t.tag!==5)throw Error(d(476));var n=pr(t).queue;vr(t,n,e,A,l===null?l0:function(){return xr(t),l(a)})}function pr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:A},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function xr(t){var e=pr(t);e.next===null&&(e=t.alternate.memoizedState),en(t,e.next.queue,{},ge())}function nc(){return $t(pn)}function Sr(){return Gt().memoizedState}function jr(){return Gt().memoizedState}function a0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ge();t=sl(l);var a=fl(e,t,l);a!==null&&(ce(a,e,l),Wa(a,e,l)),e={cache:Uu()},t.payload=e;return}e=e.return}}function n0(t,e,l){var a=ge();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(t)?zr(e,l):(l=ju(t,e,l,a),l!==null&&(ce(l,t,a),Tr(l,e,a)))}function Nr(t,e,l){var a=ge();en(t,e,l,a)}function en(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fi(t))zr(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,s=i(u,l);if(n.hasEagerState=!0,n.eagerState=s,oe(s,u))return Ln(t,e,n,0),Et===null&&Zn(),!1}catch{}if(l=ju(t,e,n,a),l!==null)return ce(l,t,a),Tr(l,e,a),!0}return!1}function ic(t,e,l,a){if(a={lane:2,revertLane:Yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(e)throw Error(d(479))}else e=ju(t,l,a,2),e!==null&&ce(e,t,2)}function fi(t){var e=t.alternate;return t===P||e!==null&&e===P}function zr(t,e){ma=li=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Tr(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ms(t,l)}}var ln={readContext:$t,use:ii,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt};ln.useEffectEvent=Bt;var Er={readContext:$t,use:ii,useCallback:function(t,e){return te().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:fr,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ci(4194308,4,mr.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ci(4194308,4,t,e)},useInsertionEffect:function(t,e){ci(4,2,t,e)},useMemo:function(t,e){var l=te();e=e===void 0?null:e;var a=t();if(Xl){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=te();if(l!==void 0){var n=l(e);if(Xl){tl(!0);try{l(e)}finally{tl(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=n0.bind(null,P,t),[a.memoizedState,t]},useRef:function(t){var e=te();return t={current:t},e.memoizedState=t},useState:function(t){t=Iu(t);var e=t.queue,l=Nr.bind(null,P,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ec,useDeferredValue:function(t,e){var l=te();return lc(l,t,e)},useTransition:function(){var t=Iu(!1);return t=vr.bind(null,P,t.queue,!0,!1),te().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=P,n=te();if(ot){if(l===void 0)throw Error(d(407));l=l()}else{if(l=e(),Et===null)throw Error(d(349));(ft&127)!==0||Kf(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,fr($f.bind(null,a,i,t),[t]),a.flags|=2048,ba(9,{destroy:void 0},Jf.bind(null,a,i,l,e),null),l},useId:function(){var t=te(),e=Et.identifierPrefix;if(ot){var l=Ue,a=Ce;l=(a&~(1<<32-re(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=ai++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Fm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:nc,useFormState:nr,useActionState:nr,useOptimistic:function(t){var e=te();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ic.bind(null,P,!0,l),l.dispatch=e,[t,e]},useMemoCache:$u,useCacheRefresh:function(){return te().memoizedState=a0.bind(null,P)},useEffectEvent:function(t){var e=te(),l={impl:t};return e.memoizedState=l,function(){if((yt&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}},uc={readContext:$t,use:ii,useCallback:br,useContext:$t,useEffect:tc,useImperativeHandle:hr,useInsertionEffect:or,useLayoutEffect:dr,useMemo:yr,useReducer:ui,useRef:sr,useState:function(){return ui(ke)},useDebugValue:ec,useDeferredValue:function(t,e){var l=Gt();return gr(l,jt.memoizedState,t,e)},useTransition:function(){var t=ui(ke)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:tn(t),e]},useSyncExternalStore:wf,useId:Sr,useHostTransitionStatus:nc,useFormState:ir,useActionState:ir,useOptimistic:function(t,e){var l=Gt();return If(l,jt,t,e)},useMemoCache:$u,useCacheRefresh:jr};uc.useEffectEvent=rr;var Ar={readContext:$t,use:ii,useCallback:br,useContext:$t,useEffect:tc,useImperativeHandle:hr,useInsertionEffect:or,useLayoutEffect:dr,useMemo:yr,useReducer:Fu,useRef:sr,useState:function(){return Fu(ke)},useDebugValue:ec,useDeferredValue:function(t,e){var l=Gt();return jt===null?lc(l,t,e):gr(l,jt.memoizedState,t,e)},useTransition:function(){var t=Fu(ke)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:tn(t),e]},useSyncExternalStore:wf,useId:Sr,useHostTransitionStatus:nc,useFormState:cr,useActionState:cr,useOptimistic:function(t,e){var l=Gt();return jt!==null?If(l,jt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:$u,useCacheRefresh:jr};Ar.useEffectEvent=rr;function cc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:M({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var sc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ge(),n=sl(a);n.payload=e,l!=null&&(n.callback=l),e=fl(t,n,a),e!==null&&(ce(e,t,a),Wa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ge(),n=sl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=fl(t,n,a),e!==null&&(ce(e,t,a),Wa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ge(),a=sl(l);a.tag=2,e!=null&&(a.callback=e),e=fl(t,a,l),e!==null&&(ce(e,t,l),Wa(e,t,l))}};function Or(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Za(l,a)||!Za(n,i):!0}function Mr(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function Ql(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=M({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Dr(t){Qn(t)}function _r(t){console.error(t)}function Cr(t){Qn(t)}function ri(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Ur(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fc(t,e,l){return l=sl(l),l.tag=3,l.payload={element:null},l.callback=function(){ri(t,e)},l}function Rr(t){return t=sl(t),t.tag=3,t}function Hr(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Ur(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Ur(e,l,a),typeof n!="function"&&(bl===null?bl=new Set([this]):bl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function i0(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ca(e,l,n,!0),l=me.current,l!==null){switch(l.tag){case 31:case 13:return Te===null?ji():l.alternate===null&&Yt===0&&(Yt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Fn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Rc(t,a,n)),!1;case 22:return l.flags|=65536,a===Fn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Rc(t,a,n)),!1}throw Error(d(435,l.tag))}return Rc(t,a,n),ji(),!1}if(ot)return e=me.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Ou&&(t=Error(d(422),{cause:a}),Va(Se(t,l)))):(a!==Ou&&(e=Error(d(423),{cause:a}),Va(Se(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=Se(a,l),n=fc(t.stateNode,a,n),Gu(t,n),Yt!==4&&(Yt=2)),!1;var i=Error(d(520),{cause:a});if(i=Se(i,l),on===null?on=[i]:on.push(i),Yt!==4&&(Yt=2),e===null)return!0;a=Se(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=fc(l.stateNode,a,t),Gu(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(bl===null||!bl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Rr(n),Hr(n,t,l,a),Gu(l,n),!1}l=l.return}while(l!==null);return!1}var rc=Error(d(461)),Zt=!1;function Wt(t,e,l,a){e.child=t===null?Gf(e,null,l,a):Gl(e,t.child,l,a)}function Br(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return Hl(e),a=Vu(t,e,l,u,i,n),s=wu(),t!==null&&!Zt?(Ku(t,e,n),Ve(t,e,n)):(ot&&s&&Eu(e),e.flags|=1,Wt(t,e,a,n),e.child)}function Yr(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Nu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,qr(t,e,i,a,n)):(t=Vn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!vc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Za,l(u,a)&&t.ref===e.ref)return Ve(t,e,n)}return e.flags|=1,t=Ge(i,a),t.ref=e.ref,t.return=e,e.child=t}function qr(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Za(i,a)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=a=i,vc(t,n))(t.flags&131072)!==0&&(Zt=!0);else return e.lanes=t.lanes,Ve(t,e,n)}return oc(t,e,l,a,n)}function Gr(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return Xr(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&$n(e,i!==null?i.cachePool:null),i!==null?Zf(e,i):Qu(),Lf(e);else return a=e.lanes=536870912,Xr(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?($n(e,i.cachePool),Zf(e,i),ol(),e.memoizedState=null):(t!==null&&$n(e,null),Qu(),ol());return Wt(t,e,n,l),e.child}function an(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Xr(t,e,l,a,n){var i=Hu();return i=i===null?null:{parent:Xt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&$n(e,null),Qu(),Lf(e),t!==null&&ca(t,e,a,!0),e.childLanes=n,null}function oi(t,e){return e=mi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Qr(t,e,l){return Gl(e,t.child,null,l),t=oi(e,e.pendingProps),t.flags|=2,he(e),e.memoizedState=null,t}function u0(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ot){if(a.mode==="hidden")return t=oi(e,a),e.lanes=536870912,an(null,t);if(Lu(e),(t=_t)?(t=td(t,ze),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:al!==null?{id:Ce,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},l=zf(t),l.return=e,e.child=l,Jt=e,_t=null)):t=null,t===null)throw il(e);return e.lanes=536870912,null}return oi(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Lu(e),n)if(e.flags&256)e.flags&=-257,e=Qr(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(Zt||ca(t,e,l,!1),n=(l&t.childLanes)!==0,Zt||n){if(a=Et,a!==null&&(u=Ds(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,_l(t,u),ce(a,t,u),rc;ji(),e=Qr(t,e,l)}else t=i.treeContext,_t=Ee(u.nextSibling),Jt=e,ot=!0,nl=null,ze=!1,t!==null&&Af(e,t),e=oi(e,a),e.flags|=4096;return e}return t=Ge(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function di(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function oc(t,e,l,a,n){return Hl(e),l=Vu(t,e,l,a,void 0,n),a=wu(),t!==null&&!Zt?(Ku(t,e,n),Ve(t,e,n)):(ot&&a&&Eu(e),e.flags|=1,Wt(t,e,l,n),e.child)}function Zr(t,e,l,a,n,i){return Hl(e),e.updateQueue=null,l=Vf(e,a,l,n),kf(t),a=wu(),t!==null&&!Zt?(Ku(t,e,i),Ve(t,e,i)):(ot&&a&&Eu(e),e.flags|=1,Wt(t,e,l,i),e.child)}function Lr(t,e,l,a,n){if(Hl(e),e.stateNode===null){var i=aa,u=l.contextType;typeof u=="object"&&u!==null&&(i=$t(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=sc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Yu(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?$t(u):aa,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(cc(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&sc.enqueueReplaceState(i,i.state,null),Ia(e,a,i,n),Fa(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,f=Ql(l,s);i.props=f;var y=i.context,x=l.contextType;u=aa,typeof x=="object"&&x!==null&&(u=$t(x));var N=l.getDerivedStateFromProps;x=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||y!==u)&&Mr(e,i,a,u),cl=!1;var g=e.memoizedState;i.state=g,Ia(e,a,i,n),Fa(),y=e.memoizedState,s||g!==y||cl?(typeof N=="function"&&(cc(e,l,N,a),y=e.memoizedState),(f=cl||Or(e,l,f,a,g,y,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=y),i.props=a,i.state=y,i.context=u,a=f):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,qu(t,e),u=e.memoizedProps,x=Ql(l,u),i.props=x,N=e.pendingProps,g=i.context,y=l.contextType,f=aa,typeof y=="object"&&y!==null&&(f=$t(y)),s=l.getDerivedStateFromProps,(y=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==N||g!==f)&&Mr(e,i,a,f),cl=!1,g=e.memoizedState,i.state=g,Ia(e,a,i,n),Fa();var v=e.memoizedState;u!==N||g!==v||cl||t!==null&&t.dependencies!==null&&Kn(t.dependencies)?(typeof s=="function"&&(cc(e,l,s,a),v=e.memoizedState),(x=cl||Or(e,l,x,a,g,v,f)||t!==null&&t.dependencies!==null&&Kn(t.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,v,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,v,f)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=v),i.props=a,i.state=v,i.context=f,a=x):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,di(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Gl(e,t.child,null,n),e.child=Gl(e,null,l,n)):Wt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Ve(t,e,n),t}function kr(t,e,l,a){return Ul(),e.flags|=256,Wt(t,e,l,a),e.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(t){return{baseLanes:t,cachePool:Uf()}}function hc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=ye),t}function Vr(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(qt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(ot){if(n?rl(e):ol(),(t=_t)?(t=td(t,ze),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:al!==null?{id:Ce,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},l=zf(t),l.return=e,e.child=l,Jt=e,_t=null)):t=null,t===null)throw il(e);return Wc(t)?e.lanes=32:e.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(ol(),n=e.mode,s=mi({mode:"hidden",children:s},n),a=Cl(a,n,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,a=e.child,a.memoizedState=mc(l),a.childLanes=hc(t,u,l),e.memoizedState=dc,an(null,a)):(rl(e),bc(e,s))}var f=t.memoizedState;if(f!==null&&(s=f.dehydrated,s!==null)){if(i)e.flags&256?(rl(e),e.flags&=-257,e=yc(t,e,l)):e.memoizedState!==null?(ol(),e.child=t.child,e.flags|=128,e=null):(ol(),s=a.fallback,n=e.mode,a=mi({mode:"visible",children:a.children},n),s=Cl(s,n,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Gl(e,t.child,null,l),a=e.child,a.memoizedState=mc(l),a.childLanes=hc(t,u,l),e.memoizedState=dc,e=an(null,a));else if(rl(e),Wc(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(d(419)),a.stack="",a.digest=u,Va({value:a,source:null,stack:null}),e=yc(t,e,l)}else if(Zt||ca(t,e,l,!1),u=(l&t.childLanes)!==0,Zt||u){if(u=Et,u!==null&&(a=Ds(u,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,_l(t,a),ce(u,t,a),rc;$c(s)||ji(),e=yc(t,e,l)}else $c(s)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,_t=Ee(s.nextSibling),Jt=e,ot=!0,nl=null,ze=!1,t!==null&&Af(e,t),e=bc(e,a.children),e.flags|=4096);return e}return n?(ol(),s=a.fallback,n=e.mode,f=t.child,y=f.sibling,a=Ge(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,y!==null?s=Ge(y,s):(s=Cl(s,n,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,an(null,a),a=e.child,s=t.child.memoizedState,s===null?s=mc(l):(n=s.cachePool,n!==null?(f=Xt._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Uf(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=hc(t,u,l),e.memoizedState=dc,an(t.child,a)):(rl(e),l=t.child,t=l.sibling,l=Ge(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function bc(t,e){return e=mi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function mi(t,e){return t=de(22,t,null,e),t.lanes=0,t}function yc(t,e,l){return Gl(e,t.child,null,l),t=bc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wr(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),_u(t.return,e,l)}function gc(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Kr(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=qt.current,s=(u&2)!==0;if(s?(u=u&1|2,e.flags|=128):u&=1,E(qt,u),Wt(t,e,a,l),a=ot?ka:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wr(t,l,e);else if(t.tag===19)wr(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ei(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),gc(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ei(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}gc(e,!0,l,null,i,a);break;case"together":gc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Ve(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),hl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ca(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,l=Ge(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ge(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function vc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Kn(t)))}function c0(t,e,l){switch(e.tag){case 3:k(e,e.stateNode.containerInfo),ul(e,Xt,t.memoizedState.cache),Ul();break;case 27:case 5:It(e);break;case 4:k(e,e.stateNode.containerInfo);break;case 10:ul(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Lu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(rl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Vr(t,e,l):(rl(e),t=Ve(t,e,l),t!==null?t.sibling:null);rl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ca(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Kr(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),E(qt,qt.current),a)break;return null;case 22:return e.lanes=0,Gr(t,e,l,e.pendingProps);case 24:ul(e,Xt,t.memoizedState.cache)}return Ve(t,e,l)}function Jr(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Zt=!0;else{if(!vc(t,l)&&(e.flags&128)===0)return Zt=!1,c0(t,e,l);Zt=(t.flags&131072)!==0}else Zt=!1,ot&&(e.flags&1048576)!==0&&Ef(e,ka,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Yl(e.elementType),e.type=t,typeof t=="function")Nu(t)?(a=Ql(t,a),e.tag=1,e=Lr(null,e,t,a,l)):(e.tag=0,e=oc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===At){e.tag=11,e=Br(null,e,t,a,l);break t}else if(n===D){e.tag=14,e=Yr(null,e,t,a,l);break t}}throw e=Mt(t)||t,Error(d(306,e,""))}}return e;case 0:return oc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Ql(a,e.pendingProps),Lr(t,e,a,n,l);case 3:t:{if(k(e,e.stateNode.containerInfo),t===null)throw Error(d(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,qu(t,e),Ia(e,a,null,l);var u=e.memoizedState;if(a=u.cache,ul(e,Xt,a),a!==i.cache&&Cu(e,[Xt],l,!0),Fa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=kr(t,e,a,l);break t}else if(a!==n){n=Se(Error(d(424)),e),Va(n),e=kr(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,_t=Ee(t.firstChild),Jt=e,ot=!0,nl=null,ze=!0,l=Gf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ul(),a===n){e=Ve(t,e,l);break t}Wt(t,e,a,l)}e=e.child}return e;case 26:return di(t,e),t===null?(l=ud(e.type,null,e.pendingProps,null))?e.memoizedState=l:ot||(l=e.type,t=e.pendingProps,a=Mi(et.current).createElement(l),a[Kt]=e,a[ee]=t,Ft(a,l,t),Vt(a),e.stateNode=a):e.memoizedState=ud(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return It(e),t===null&&ot&&(a=e.stateNode=ad(e.type,e.pendingProps,et.current),Jt=e,ze=!0,n=_t,pl(e.type)?(Fc=n,_t=Ee(a.firstChild)):_t=n),Wt(t,e,e.pendingProps.children,l),di(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ot&&((n=a=_t)&&(a=Y0(a,e.type,e.pendingProps,ze),a!==null?(e.stateNode=a,Jt=e,_t=Ee(a.firstChild),ze=!1,n=!0):n=!1),n||il(e)),It(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,wc(n,i)?a=null:u!==null&&wc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Vu(t,e,Im,null,null,l),pn._currentValue=n),di(t,e),Wt(t,e,a,l),e.child;case 6:return t===null&&ot&&((t=l=_t)&&(l=q0(l,e.pendingProps,ze),l!==null?(e.stateNode=l,Jt=e,_t=null,t=!0):t=!1),t||il(e)),null;case 13:return Vr(t,e,l);case 4:return k(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Gl(e,null,a,l):Wt(t,e,a,l),e.child;case 11:return Br(t,e,e.type,e.pendingProps,l);case 7:return Wt(t,e,e.pendingProps,l),e.child;case 8:return Wt(t,e,e.pendingProps.children,l),e.child;case 12:return Wt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,ul(e,e.type,a.value),Wt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Hl(e),n=$t(n),a=a(n),e.flags|=1,Wt(t,e,a,l),e.child;case 14:return Yr(t,e,e.type,e.pendingProps,l);case 15:return qr(t,e,e.type,e.pendingProps,l);case 19:return Kr(t,e,l);case 31:return u0(t,e,l);case 22:return Gr(t,e,l,e.pendingProps);case 24:return Hl(e),a=$t(Xt),t===null?(n=Hu(),n===null&&(n=Et,i=Uu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Yu(e),ul(e,Xt,n)):((t.lanes&l)!==0&&(qu(t,e),Ia(e,null,null,l),Fa()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ul(e,Xt,a)):(a=i.cache,ul(e,Xt,a),a!==n.cache&&Cu(e,[Xt],l,!0))),Wt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function we(t){t.flags|=4}function pc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(jo())t.flags|=8192;else throw ql=Fn,Bu}else t.flags&=-16777217}function $r(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!od(e))if(jo())t.flags|=8192;else throw ql=Fn,Bu}function hi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?As():536870912,t.lanes|=e,pa|=e)}function nn(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function s0(t,e,l){var a=e.pendingProps;switch(Au(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Ct(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ze(Xt),W(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ua(e)?we(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mu())),Ct(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(we(e),i!==null?(Ct(e),$r(e,i)):(Ct(e),pc(e,n,null,a,l))):i?i!==t.memoizedState?(we(e),Ct(e),$r(e,i)):(Ct(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&we(e),Ct(e),pc(e,n,t,a,l)),null;case 27:if(Tn(e),l=et.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&we(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return Ct(e),null}t=_.current,ua(e)?Of(e):(t=ad(n,a,l),e.stateNode=t,we(e))}return Ct(e),null;case 5:if(Tn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&we(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return Ct(e),null}if(i=_.current,ua(e))Of(e);else{var u=Mi(et.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Kt]=e,i[ee]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Ft(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&we(e)}}return Ct(e),pc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&we(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(t=et.current,ua(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Jt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Kt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||wo(t.nodeValue,l)),t||il(e,!0)}else t=Mi(t).createTextNode(a),t[Kt]=e,e.stateNode=t}return Ct(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ua(e),l!==null){if(t===null){if(!a)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Kt]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),t=!1}else l=Mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(d(558))}return Ct(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ua(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Kt]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),n=!1}else n=Mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),hi(e,e.updateQueue),Ct(e),null);case 4:return W(),t===null&&Qc(e.stateNode.containerInfo),Ct(e),null;case 10:return Ze(e.type),Ct(e),null;case 19:if(p(qt),a=e.memoizedState,a===null)return Ct(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)nn(a,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ei(t),i!==null){for(e.flags|=128,nn(a,!1),t=i.updateQueue,e.updateQueue=t,hi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Nf(l,t),l=l.sibling;return E(qt,qt.current&1|2),ot&&Xe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&se()>pi&&(e.flags|=128,n=!0,nn(a,!1),e.lanes=4194304)}else{if(!n)if(t=ei(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,hi(e,t),nn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ot)return Ct(e),null}else 2*se()-a.renderingStartTime>pi&&l!==536870912&&(e.flags|=128,n=!0,nn(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,l=qt.current,E(qt,n?l&1|2:l&1),ot&&Xe(e,a.treeForkCount),t):(Ct(e),null);case 22:case 23:return he(e),Zu(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),l=e.updateQueue,l!==null&&hi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&p(Bl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ze(Xt),Ct(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function f0(t,e){switch(Au(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ze(Xt),W(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Tn(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(d(340));Ul()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(he(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));Ul()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return p(qt),null;case 4:return W(),null;case 10:return Ze(e.type),null;case 22:case 23:return he(e),Zu(),t!==null&&p(Bl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ze(Xt),null;case 25:return null;default:return null}}function Wr(t,e){switch(Au(e),e.tag){case 3:Ze(Xt),W();break;case 26:case 27:case 5:Tn(e);break;case 4:W();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:p(qt);break;case 10:Ze(e.type);break;case 22:case 23:he(e),Zu(),t!==null&&p(Bl);break;case 24:Ze(Xt)}}function un(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(s){St(e,e.return,s)}}function dl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=e;var f=l,y=s;try{y()}catch(x){St(n,f,x)}}}a=a.next}while(a!==i)}}catch(x){St(e,e.return,x)}}function Fr(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Qf(e,l)}catch(a){St(t,t.return,a)}}}function Ir(t,e,l){l.props=Ql(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){St(t,e,a)}}function cn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){St(t,e,n)}}function Re(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){St(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){St(t,e,n)}else l.current=null}function Pr(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){St(t,t.return,n)}}function xc(t,e,l){try{var a=t.stateNode;_0(a,t.type,l,e),a[ee]=e}catch(n){St(t,t.return,n)}}function to(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pl(t.type)||t.tag===4}function Sc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||to(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ye));else if(a!==4&&(a===27&&pl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(jc(t,e,l),t=t.sibling;t!==null;)jc(t,e,l),t=t.sibling}function bi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&pl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(bi(t,e,l),t=t.sibling;t!==null;)bi(t,e,l),t=t.sibling}function eo(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ft(e,a,l),e[Kt]=t,e[ee]=l}catch(i){St(t,t.return,i)}}var Ke=!1,Lt=!1,Nc=!1,lo=typeof WeakSet=="function"?WeakSet:Set,wt=null;function r0(t,e){if(t=t.containerInfo,kc=Bi,t=hf(t),yu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,s=-1,f=-1,y=0,x=0,N=t,g=null;e:for(;;){for(var v;N!==l||n!==0&&N.nodeType!==3||(s=u+n),N!==i||a!==0&&N.nodeType!==3||(f=u+a),N.nodeType===3&&(u+=N.nodeValue.length),(v=N.firstChild)!==null;)g=N,N=v;for(;;){if(N===t)break e;if(g===l&&++y===n&&(s=u),g===i&&++x===a&&(f=u),(v=N.nextSibling)!==null)break;N=g,g=N.parentNode}N=v}l=s===-1||f===-1?null:{start:s,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vc={focusedElem:t,selectionRange:l},Bi=!1,wt=e;wt!==null;)if(e=wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,wt=t;else for(;wt!==null;){switch(e=wt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var C=Ql(l.type,n);t=a.getSnapshotBeforeUpdate(C,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(V){St(l,l.return,V)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Jc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=e.sibling,t!==null){t.return=e.return,wt=t;break}wt=e.return}}function ao(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:$e(t,l),a&4&&un(5,l);break;case 1:if($e(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){St(l,l.return,u)}else{var n=Ql(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){St(l,l.return,u)}}a&64&&Fr(l),a&512&&cn(l,l.return);break;case 3:if($e(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Qf(t,e)}catch(u){St(l,l.return,u)}}break;case 27:e===null&&a&4&&eo(l);case 26:case 5:$e(t,l),e===null&&a&4&&Pr(l),a&512&&cn(l,l.return);break;case 12:$e(t,l);break;case 31:$e(t,l),a&4&&uo(t,l);break;case 13:$e(t,l),a&4&&co(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=p0.bind(null,l),G0(t,l))));break;case 22:if(a=l.memoizedState!==null||Ke,!a){e=e!==null&&e.memoizedState!==null||Lt,n=Ke;var i=Lt;Ke=a,(Lt=e)&&!i?We(t,l,(l.subtreeFlags&8772)!==0):$e(t,l),Ke=n,Lt=i}break;case 30:break;default:$e(t,l)}}function no(t){var e=t.alternate;e!==null&&(t.alternate=null,no(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Pi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,ae=!1;function Je(t,e,l){for(l=l.child;l!==null;)io(t,e,l),l=l.sibling}function io(t,e,l){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(Da,l)}catch{}switch(l.tag){case 26:Lt||Re(l,e),Je(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Lt||Re(l,e);var a=Ut,n=ae;pl(l.type)&&(Ut=l.stateNode,ae=!1),Je(t,e,l),yn(l.stateNode),Ut=a,ae=n;break;case 5:Lt||Re(l,e);case 6:if(a=Ut,n=ae,Ut=null,Je(t,e,l),Ut=a,ae=n,Ut!==null)if(ae)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(l.stateNode)}catch(i){St(l,e,i)}else try{Ut.removeChild(l.stateNode)}catch(i){St(l,e,i)}break;case 18:Ut!==null&&(ae?(t=Ut,Io(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Aa(t)):Io(Ut,l.stateNode));break;case 4:a=Ut,n=ae,Ut=l.stateNode.containerInfo,ae=!0,Je(t,e,l),Ut=a,ae=n;break;case 0:case 11:case 14:case 15:dl(2,l,e),Lt||dl(4,l,e),Je(t,e,l);break;case 1:Lt||(Re(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ir(l,e,a)),Je(t,e,l);break;case 21:Je(t,e,l);break;case 22:Lt=(a=Lt)||l.memoizedState!==null,Je(t,e,l),Lt=a;break;default:Je(t,e,l)}}function uo(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Aa(t)}catch(l){St(e,e.return,l)}}}function co(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Aa(t)}catch(l){St(e,e.return,l)}}function o0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new lo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new lo),e;default:throw Error(d(435,t.tag))}}function yi(t,e){var l=o0(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=x0.bind(null,t,a);a.then(n,n)}})}function ne(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,s=u;t:for(;s!==null;){switch(s.tag){case 27:if(pl(s.type)){Ut=s.stateNode,ae=!1;break t}break;case 5:Ut=s.stateNode,ae=!1;break t;case 3:case 4:Ut=s.stateNode.containerInfo,ae=!0;break t}s=s.return}if(Ut===null)throw Error(d(160));io(i,u,n),Ut=null,ae=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)so(e,t),e=e.sibling}var Me=null;function so(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ne(e,t),ie(t),a&4&&(dl(3,t,t.return),un(3,t),dl(5,t,t.return));break;case 1:ne(e,t),ie(t),a&512&&(Lt||l===null||Re(l,l.return)),a&64&&Ke&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Me;if(ne(e,t),ie(t),a&512&&(Lt||l===null||Re(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ua]||i[Kt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ft(i,a,l),i[Kt]=t,Vt(i),a=i;break t;case"link":var u=fd("link","href",n).get(a+(l.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(s,1);break e}}i=n.createElement(a),Ft(i,a,l),n.head.appendChild(i);break;case"meta":if(u=fd("meta","content",n).get(a+(l.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(s,1);break e}}i=n.createElement(a),Ft(i,a,l),n.head.appendChild(i);break;default:throw Error(d(468,a))}i[Kt]=t,Vt(i),a=i}t.stateNode=a}else rd(n,t.type,t.stateNode);else t.stateNode=sd(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?rd(n,t.type,t.stateNode):sd(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&xc(t,t.memoizedProps,l.memoizedProps)}break;case 27:ne(e,t),ie(t),a&512&&(Lt||l===null||Re(l,l.return)),l!==null&&a&4&&xc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(ne(e,t),ie(t),a&512&&(Lt||l===null||Re(l,l.return)),t.flags&32){n=t.stateNode;try{Wl(n,"")}catch(C){St(t,t.return,C)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,xc(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Nc=!0);break;case 6:if(ne(e,t),ie(t),a&4){if(t.stateNode===null)throw Error(d(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(C){St(t,t.return,C)}}break;case 3:if(Ci=null,n=Me,Me=Di(e.containerInfo),ne(e,t),Me=n,ie(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(C){St(t,t.return,C)}Nc&&(Nc=!1,fo(t));break;case 4:a=Me,Me=Di(t.stateNode.containerInfo),ne(e,t),ie(t),Me=a;break;case 12:ne(e,t),ie(t);break;case 31:ne(e,t),ie(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 13:ne(e,t),ie(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vi=se()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 22:n=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,y=Ke,x=Lt;if(Ke=y||n,Lt=x||f,ne(e,t),Lt=x,Ke=y,ie(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||f||Ke||Lt||Zl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(i=f.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=f.stateNode;var N=f.memoizedProps.style,g=N!=null&&N.hasOwnProperty("display")?N.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(C){St(f,f.return,C)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(C){St(f,f.return,C)}}}else if(e.tag===18){if(l===null){f=e;try{var v=f.stateNode;n?Po(v,!0):Po(f.stateNode,!1)}catch(C){St(f,f.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,yi(t,l))));break;case 19:ne(e,t),ie(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 30:break;case 21:break;default:ne(e,t),ie(t)}}function ie(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(to(a)){l=a;break}a=a.return}if(l==null)throw Error(d(160));switch(l.tag){case 27:var n=l.stateNode,i=Sc(t);bi(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Wl(u,""),l.flags&=-33);var s=Sc(t);bi(t,s,u);break;case 3:case 4:var f=l.stateNode.containerInfo,y=Sc(t);jc(t,y,f);break;default:throw Error(d(161))}}catch(x){St(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fo(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;fo(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ao(t,e.alternate,e),e=e.sibling}function Zl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:dl(4,e,e.return),Zl(e);break;case 1:Re(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Ir(e,e.return,l),Zl(e);break;case 27:yn(e.stateNode);case 26:case 5:Re(e,e.return),Zl(e);break;case 22:e.memoizedState===null&&Zl(e);break;case 30:Zl(e);break;default:Zl(e)}t=t.sibling}}function We(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:We(n,i,l),un(4,i);break;case 1:if(We(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){St(a,a.return,y)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Xf(f[n],s)}catch(y){St(a,a.return,y)}}l&&u&64&&Fr(i),cn(i,i.return);break;case 27:eo(i);case 26:case 5:We(n,i,l),l&&a===null&&u&4&&Pr(i),cn(i,i.return);break;case 12:We(n,i,l);break;case 31:We(n,i,l),l&&u&4&&uo(n,i);break;case 13:We(n,i,l),l&&u&4&&co(n,i);break;case 22:i.memoizedState===null&&We(n,i,l),cn(i,i.return);break;case 30:break;default:We(n,i,l)}e=e.sibling}}function zc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&wa(l))}function Tc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wa(t))}function De(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ro(t,e,l,a),e=e.sibling}function ro(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:De(t,e,l,a),n&2048&&un(9,e);break;case 1:De(t,e,l,a);break;case 3:De(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wa(t)));break;case 12:if(n&2048){De(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){St(e,e.return,f)}}else De(t,e,l,a);break;case 31:De(t,e,l,a);break;case 13:De(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?De(t,e,l,a):sn(t,e):i._visibility&2?De(t,e,l,a):(i._visibility|=2,ya(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&zc(u,e);break;case 24:De(t,e,l,a),n&2048&&Tc(e.alternate,e);break;default:De(t,e,l,a)}}function ya(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,s=l,f=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:ya(i,u,s,f,n),un(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?ya(i,u,s,f,n):sn(i,u):(x._visibility|=2,ya(i,u,s,f,n)),n&&y&2048&&zc(u.alternate,u);break;case 24:ya(i,u,s,f,n),n&&y&2048&&Tc(u.alternate,u);break;default:ya(i,u,s,f,n)}e=e.sibling}}function sn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:sn(l,a),n&2048&&zc(a.alternate,a);break;case 24:sn(l,a),n&2048&&Tc(a.alternate,a);break;default:sn(l,a)}e=e.sibling}}var fn=8192;function ga(t,e,l){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)oo(t,e,l),t=t.sibling}function oo(t,e,l){switch(t.tag){case 26:ga(t,e,l),t.flags&fn&&t.memoizedState!==null&&F0(l,Me,t.memoizedState,t.memoizedProps);break;case 5:ga(t,e,l);break;case 3:case 4:var a=Me;Me=Di(t.stateNode.containerInfo),ga(t,e,l),Me=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,ga(t,e,l),fn=a):ga(t,e,l));break;default:ga(t,e,l)}}function mo(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];wt=a,bo(a,t)}mo(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ho(t),t=t.sibling}function ho(t){switch(t.tag){case 0:case 11:case 15:rn(t),t.flags&2048&&dl(9,t,t.return);break;case 3:rn(t);break;case 12:rn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gi(t)):rn(t);break;default:rn(t)}}function gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];wt=a,bo(a,t)}mo(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:dl(8,e,e.return),gi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,gi(e));break;default:gi(e)}t=t.sibling}}function bo(t,e){for(;wt!==null;){var l=wt;switch(l.tag){case 0:case 11:case 15:dl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:wa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,wt=a;else t:for(l=t;wt!==null;){a=wt;var n=a.sibling,i=a.return;if(no(a),a===l){wt=null;break t}if(n!==null){n.return=i,wt=n;break t}wt=i}}}var d0={getCacheForType:function(t){var e=$t(Xt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return $t(Xt).controller.signal}},m0=typeof WeakMap=="function"?WeakMap:Map,yt=0,Et=null,nt=null,ft=0,xt=0,be=null,ml=!1,va=!1,Ec=!1,Fe=0,Yt=0,hl=0,Ll=0,Ac=0,ye=0,pa=0,on=null,ue=null,Oc=!1,vi=0,yo=0,pi=1/0,xi=null,bl=null,kt=0,yl=null,xa=null,Ie=0,Mc=0,Dc=null,go=null,dn=0,_c=null;function ge(){return(yt&2)!==0&&ft!==0?ft&-ft:h.T!==null?Yc():_s()}function vo(){if(ye===0)if((ft&536870912)===0||ot){var t=On;On<<=1,(On&3932160)===0&&(On=262144),ye=t}else ye=536870912;return t=me.current,t!==null&&(t.flags|=32),ye}function ce(t,e,l){(t===Et&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(Sa(t,0),gl(t,ft,ye,!1)),Ca(t,l),((yt&2)===0||t!==Et)&&(t===Et&&((yt&2)===0&&(Ll|=l),Yt===4&&gl(t,ft,ye,!1)),He(t))}function po(t,e,l){if((yt&6)!==0)throw Error(d(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||_a(t,e),n=a?y0(t,e):Uc(t,e,!0),i=a;do{if(n===0){va&&!a&&gl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!h0(l)){n=Uc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var s=t;n=on;var f=s.current.memoizedState.isDehydrated;if(f&&(Sa(s,u).flags|=256),u=Uc(s,u,!1),u!==2){if(Ec&&!f){s.errorRecoveryDisabledLanes|=i,Ll|=i,n=4;break t}i=ue,ue=n,i!==null&&(ue===null?ue=i:ue.push.apply(ue,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sa(t,0),gl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:gl(a,e,ye,!ml);break t;case 2:ue=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=vi+300-se(),10<n)){if(gl(a,e,ye,!ml),Dn(a,0,!0)!==0)break t;Ie=e,a.timeoutHandle=Wo(xo.bind(null,a,l,ue,xi,Oc,e,ye,Ll,pa,ml,i,"Throttled",-0,0),n);break t}xo(a,l,ue,xi,Oc,e,ye,Ll,pa,ml,i,null,-0,0)}}break}while(!0);He(t)}function xo(t,e,l,a,n,i,u,s,f,y,x,N,g,v){if(t.timeoutHandle=-1,N=e.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ye},oo(e,i,N);var C=(i&62914560)===i?vi-se():(i&4194048)===i?yo-se():0;if(C=I0(N,C),C!==null){Ie=i,t.cancelPendingCommit=C(Oo.bind(null,t,e,i,l,a,n,u,s,f,x,N,null,g,v)),gl(t,i,u,!y);return}}Oo(t,e,i,l,a,n,u,s,f)}function h0(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!oe(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gl(t,e,l,a){e&=~Ac,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-re(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Os(t,l,e)}function Si(){return(yt&6)===0?(mn(0),!1):!0}function Cc(){if(nt!==null){if(xt===0)var t=nt.return;else t=nt,Qe=Rl=null,Ju(t),oa=null,Ja=0,t=nt;for(;t!==null;)Wr(t.alternate,t),t=t.return;nt=null}}function Sa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,R0(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ie=0,Cc(),Et=t,nt=l=Ge(t.current,null),ft=e,xt=0,be=null,ml=!1,va=_a(t,e),Ec=!1,pa=ye=Ac=Ll=hl=Yt=0,ue=on=null,Oc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-re(a),i=1<<n;e|=t[n],a&=~i}return Fe=e,Zn(),l}function So(t,e){P=null,h.H=ln,e===ra||e===Wn?(e=Bf(),xt=3):e===Bu?(e=Bf(),xt=4):xt=e===rc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,be=e,nt===null&&(Yt=1,ri(t,Se(e,t.current)))}function jo(){var t=me.current;return t===null?!0:(ft&4194048)===ft?Te===null:(ft&62914560)===ft||(ft&536870912)!==0?t===Te:!1}function No(){var t=h.H;return h.H=ln,t===null?ln:t}function zo(){var t=h.A;return h.A=d0,t}function ji(){Yt=4,ml||(ft&4194048)!==ft&&me.current!==null||(va=!0),(hl&134217727)===0&&(Ll&134217727)===0||Et===null||gl(Et,ft,ye,!1)}function Uc(t,e,l){var a=yt;yt|=2;var n=No(),i=zo();(Et!==t||ft!==e)&&(xi=null,Sa(t,e)),e=!1;var u=Yt;t:do try{if(xt!==0&&nt!==null){var s=nt,f=be;switch(xt){case 8:Cc(),u=6;break t;case 3:case 2:case 9:case 6:me.current===null&&(e=!0);var y=xt;if(xt=0,be=null,ja(t,s,f,y),l&&va){u=0;break t}break;default:y=xt,xt=0,be=null,ja(t,s,f,y)}}b0(),u=Yt;break}catch(x){So(t,x)}while(!0);return e&&t.shellSuspendCounter++,Qe=Rl=null,yt=a,h.H=n,h.A=i,nt===null&&(Et=null,ft=0,Zn()),u}function b0(){for(;nt!==null;)To(nt)}function y0(t,e){var l=yt;yt|=2;var a=No(),n=zo();Et!==t||ft!==e?(xi=null,pi=se()+500,Sa(t,e)):va=_a(t,e);t:do try{if(xt!==0&&nt!==null){e=nt;var i=be;e:switch(xt){case 1:xt=0,be=null,ja(t,e,i,1);break;case 2:case 9:if(Rf(i)){xt=0,be=null,Eo(e);break}e=function(){xt!==2&&xt!==9||Et!==t||(xt=7),He(t)},i.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:Rf(i)?(xt=0,be=null,Eo(e)):(xt=0,be=null,ja(t,e,i,7));break;case 5:var u=null;switch(nt.tag){case 26:u=nt.memoizedState;case 5:case 27:var s=nt;if(u?od(u):s.stateNode.complete){xt=0,be=null;var f=s.sibling;if(f!==null)nt=f;else{var y=s.return;y!==null?(nt=y,Ni(y)):nt=null}break e}}xt=0,be=null,ja(t,e,i,5);break;case 6:xt=0,be=null,ja(t,e,i,6);break;case 8:Cc(),Yt=6;break t;default:throw Error(d(462))}}g0();break}catch(x){So(t,x)}while(!0);return Qe=Rl=null,h.H=a,h.A=n,yt=l,nt!==null?0:(Et=null,ft=0,Zn(),Yt)}function g0(){for(;nt!==null&&!Xd();)To(nt)}function To(t){var e=Jr(t.alternate,t,Fe);t.memoizedProps=t.pendingProps,e===null?Ni(t):nt=e}function Eo(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Zr(l,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=Zr(l,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:Ju(e);default:Wr(l,e),e=nt=Nf(e,Fe),e=Jr(l,e,Fe)}t.memoizedProps=t.pendingProps,e===null?Ni(t):nt=e}function ja(t,e,l,a){Qe=Rl=null,Ju(e),oa=null,Ja=0;var n=e.return;try{if(i0(t,n,e,l,ft)){Yt=1,ri(t,Se(l,t.current)),nt=null;return}}catch(i){if(n!==null)throw nt=n,i;Yt=1,ri(t,Se(l,t.current)),nt=null;return}e.flags&32768?(ot||a===1?t=!0:va||(ft&536870912)!==0?t=!1:(ml=t=!0,(a===2||a===9||a===3||a===6)&&(a=me.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ao(e,t)):Ni(e)}function Ni(t){var e=t;do{if((e.flags&32768)!==0){Ao(e,ml);return}t=e.return;var l=s0(e.alternate,e,Fe);if(l!==null){nt=l;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);Yt===0&&(Yt=5)}function Ao(t,e){do{var l=f0(t.alternate,t);if(l!==null){l.flags&=32767,nt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){nt=t;return}nt=t=l}while(t!==null);Yt=6,nt=null}function Oo(t,e,l,a,n,i,u,s,f){t.cancelPendingCommit=null;do zi();while(kt!==0);if((yt&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));if(i=e.lanes|e.childLanes,i|=Su,Wd(t,l,i,u,s,f),t===Et&&(nt=Et=null,ft=0),xa=e,yl=t,Ie=l,Mc=i,Dc=n,go=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,S0(En,function(){return Uo(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=h.T,h.T=null,n=z.p,z.p=2,u=yt,yt|=4;try{r0(t,e,l)}finally{yt=u,z.p=n,h.T=a}}kt=1,Mo(),Do(),_o()}}function Mo(){if(kt===1){kt=0;var t=yl,e=xa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=h.T,h.T=null;var a=z.p;z.p=2;var n=yt;yt|=4;try{so(e,t);var i=Vc,u=hf(t.containerInfo),s=i.focusedElem,f=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&mf(s.ownerDocument.documentElement,s)){if(f!==null&&yu(s)){var y=f.start,x=f.end;if(x===void 0&&(x=y),"selectionStart"in s)s.selectionStart=y,s.selectionEnd=Math.min(x,s.value.length);else{var N=s.ownerDocument||document,g=N&&N.defaultView||window;if(g.getSelection){var v=g.getSelection(),C=s.textContent.length,V=Math.min(f.start,C),zt=f.end===void 0?V:Math.min(f.end,C);!v.extend&&V>zt&&(u=zt,zt=V,V=u);var m=df(s,V),o=df(s,zt);if(m&&o&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var b=N.createRange();b.setStart(m.node,m.offset),v.removeAllRanges(),V>zt?(v.addRange(b),v.extend(o.node,o.offset)):(b.setEnd(o.node,o.offset),v.addRange(b))}}}}for(N=[],v=s;v=v.parentNode;)v.nodeType===1&&N.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<N.length;s++){var j=N[s];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Bi=!!kc,Vc=kc=null}finally{yt=n,z.p=a,h.T=l}}t.current=e,kt=2}}function Do(){if(kt===2){kt=0;var t=yl,e=xa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=h.T,h.T=null;var a=z.p;z.p=2;var n=yt;yt|=4;try{ao(t,e.alternate,e)}finally{yt=n,z.p=a,h.T=l}}kt=3}}function _o(){if(kt===4||kt===3){kt=0,Qd();var t=yl,e=xa,l=Ie,a=go;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?kt=5:(kt=0,xa=yl=null,Co(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(bl=null),Fi(l),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(Da,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=h.T,n=z.p,z.p=2,h.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{h.T=e,z.p=n}}(Ie&3)!==0&&zi(),He(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===_c?dn++:(dn=0,_c=t):dn=0,mn(0)}}function Co(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wa(e)))}function zi(){return Mo(),Do(),_o(),Uo()}function Uo(){if(kt!==5)return!1;var t=yl,e=Mc;Mc=0;var l=Fi(Ie),a=h.T,n=z.p;try{z.p=32>l?32:l,h.T=null,l=Dc,Dc=null;var i=yl,u=Ie;if(kt=0,xa=yl=null,Ie=0,(yt&6)!==0)throw Error(d(331));var s=yt;if(yt|=4,ho(i.current),ro(i,i.current,u,l),yt=s,mn(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(Da,i)}catch{}return!0}finally{z.p=n,h.T=a,Co(t,e)}}function Ro(t,e,l){e=Se(l,e),e=fc(t.stateNode,e,2),t=fl(t,e,2),t!==null&&(Ca(t,2),He(t))}function St(t,e,l){if(t.tag===3)Ro(t,t,l);else for(;e!==null;){if(e.tag===3){Ro(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(bl===null||!bl.has(a))){t=Se(l,t),l=Rr(2),a=fl(e,l,2),a!==null&&(Hr(l,a,e,t),Ca(a,2),He(a));break}}e=e.return}}function Rc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new m0;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Ec=!0,n.add(l),t=v0.bind(null,t,e,l),e.then(t,t))}function v0(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Et===t&&(ft&l)===l&&(Yt===4||Yt===3&&(ft&62914560)===ft&&300>se()-vi?(yt&2)===0&&Sa(t,0):Ac|=l,pa===ft&&(pa=0)),He(t)}function Ho(t,e){e===0&&(e=As()),t=_l(t,e),t!==null&&(Ca(t,e),He(t))}function p0(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Ho(t,l)}function x0(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),Ho(t,l)}function S0(t,e){return Ki(t,e)}var Ti=null,Na=null,Hc=!1,Ei=!1,Bc=!1,vl=0;function He(t){t!==Na&&t.next===null&&(Na===null?Ti=Na=t:Na=Na.next=t),Ei=!0,Hc||(Hc=!0,N0())}function mn(t,e){if(!Bc&&Ei){Bc=!0;do for(var l=!1,a=Ti;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-re(42|t)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Go(a,i))}else i=ft,i=Dn(a,a===Et?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(l=!0,Go(a,i));a=a.next}while(l);Bc=!1}}function j0(){Bo()}function Bo(){Ei=Hc=!1;var t=0;vl!==0&&U0()&&(t=vl);for(var e=se(),l=null,a=Ti;a!==null;){var n=a.next,i=Yo(a,e);i===0?(a.next=null,l===null?Ti=n:l.next=n,n===null&&(Na=l)):(l=a,(t!==0||(i&3)!==0)&&(Ei=!0)),a=n}kt!==0&&kt!==5||mn(t),vl!==0&&(vl=0)}function Yo(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-re(i),s=1<<u,f=n[u];f===-1?((s&l)===0||(s&a)!==0)&&(n[u]=$d(s,e)):f<=e&&(t.expiredLanes|=s),i&=~s}if(e=Et,l=ft,l=Dn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ji(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||_a(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Ji(a),Fi(l)){case 2:case 8:l=Ts;break;case 32:l=En;break;case 268435456:l=Es;break;default:l=En}return a=qo.bind(null,t),l=Ki(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Ji(a),t.callbackPriority=2,t.callbackNode=null,2}function qo(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(zi()&&t.callbackNode!==l)return null;var a=ft;return a=Dn(t,t===Et?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(po(t,a,e),Yo(t,se()),t.callbackNode!=null&&t.callbackNode===l?qo.bind(null,t):null)}function Go(t,e){if(zi())return null;po(t,e,!0)}function N0(){H0(function(){(yt&6)!==0?Ki(zs,j0):Bo()})}function Yc(){if(vl===0){var t=sa;t===0&&(t=An,An<<=1,(An&261888)===0&&(An=256)),vl=t}return vl}function Xo(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function Qo(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function z0(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Xo((n[ee]||null).action),u=a.submitter;u&&(e=(e=u[ee]||null)?Xo(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var s=new qn("action","action",null,a,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vl!==0){var f=u?Qo(n,u):new FormData(n);ac(l,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(s.preventDefault(),f=u?Qo(n,u):new FormData(n),ac(l,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var qc=0;qc<xu.length;qc++){var Gc=xu[qc],T0=Gc.toLowerCase(),E0=Gc[0].toUpperCase()+Gc.slice(1);Oe(T0,"on"+E0)}Oe(gf,"onAnimationEnd"),Oe(vf,"onAnimationIteration"),Oe(pf,"onAnimationStart"),Oe("dblclick","onDoubleClick"),Oe("focusin","onFocus"),Oe("focusout","onBlur"),Oe(Zm,"onTransitionRun"),Oe(Lm,"onTransitionStart"),Oe(km,"onTransitionCancel"),Oe(xf,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));function Zo(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var s=a[u],f=s.instance,y=s.currentTarget;if(s=s.listener,f!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=y;try{i(n)}catch(x){Qn(x)}n.currentTarget=null,i=f}else for(u=0;u<a.length;u++){if(s=a[u],f=s.instance,y=s.currentTarget,s=s.listener,f!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=y;try{i(n)}catch(x){Qn(x)}n.currentTarget=null,i=f}}}}function it(t,e){var l=e[Ii];l===void 0&&(l=e[Ii]=new Set);var a=t+"__bubble";l.has(a)||(Lo(e,t,2,!1),l.add(a))}function Xc(t,e,l){var a=0;e&&(a|=4),Lo(l,t,a,e)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Qc(t){if(!t[Ai]){t[Ai]=!0,Rs.forEach(function(l){l!=="selectionchange"&&(A0.has(l)||Xc(l,!1,t),Xc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ai]||(e[Ai]=!0,Xc("selectionchange",!1,e))}}function Lo(t,e,l,a){switch(vd(e)){case 2:var n=eh;break;case 8:n=lh;break;default:n=ls}l=n.bind(null,e,l,t),n=void 0,!cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Zc(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Vl(s),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=i=u;continue t}s=s.parentNode}}a=a.return}ws(function(){var y=i,x=iu(l),N=[];t:{var g=Sf.get(t);if(g!==void 0){var v=qn,C=t;switch(t){case"keypress":if(Bn(l)===0)break t;case"keydown":case"keyup":v=xm;break;case"focusin":C="focus",v=ou;break;case"focusout":C="blur",v=ou;break;case"beforeblur":case"afterblur":v=ou;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Nm;break;case gf:case vf:case pf:v=om;break;case xf:v=Tm;break;case"scroll":case"scrollend":v=um;break;case"wheel":v=Am;break;case"copy":case"cut":case"paste":v=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Fs;break;case"toggle":case"beforetoggle":v=Mm}var V=(e&4)!==0,zt=!V&&(t==="scroll"||t==="scrollend"),m=V?g!==null?g+"Capture":null:g;V=[];for(var o=y,b;o!==null;){var j=o;if(b=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||b===null||m===null||(j=Ha(o,m),j!=null&&V.push(bn(o,j,b))),zt)break;o=o.return}0<V.length&&(g=new v(g,C,null,l,x),N.push({event:g,listeners:V}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&l!==nu&&(C=l.relatedTarget||l.fromElement)&&(Vl(C)||C[kl]))break t;if((v||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,v?(C=l.relatedTarget||l.toElement,v=y,C=C?Vl(C):null,C!==null&&(zt=q(C),V=C.tag,C!==zt||V!==5&&V!==27&&V!==6)&&(C=null)):(v=null,C=y),v!==C)){if(V=$s,j="onMouseLeave",m="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(V=Fs,j="onPointerLeave",m="onPointerEnter",o="pointer"),zt=v==null?g:Ra(v),b=C==null?g:Ra(C),g=new V(j,o+"leave",v,l,x),g.target=zt,g.relatedTarget=b,j=null,Vl(x)===y&&(V=new V(m,o+"enter",C,l,x),V.target=b,V.relatedTarget=zt,j=V),zt=j,v&&C)e:{for(V=O0,m=v,o=C,b=0,j=m;j;j=V(j))b++;j=0;for(var Z=o;Z;Z=V(Z))j++;for(;0<b-j;)m=V(m),b--;for(;0<j-b;)o=V(o),j--;for(;b--;){if(m===o||o!==null&&m===o.alternate){V=m;break e}m=V(m),o=V(o)}V=null}else V=null;v!==null&&ko(N,g,v,V,!1),C!==null&&zt!==null&&ko(N,zt,C,V,!0)}}t:{if(g=y?Ra(y):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var dt=uf;else if(af(g))if(cf)dt=Gm;else{dt=Ym;var Y=Bm}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?y&&au(y.elementType)&&(dt=uf):dt=qm;if(dt&&(dt=dt(t,y))){nf(N,dt,l,x);break t}Y&&Y(t,g,y),t==="focusout"&&y&&g.type==="number"&&y.memoizedProps.value!=null&&lu(g,"number",g.value)}switch(Y=y?Ra(y):window,t){case"focusin":(af(Y)||Y.contentEditable==="true")&&(ta=Y,gu=y,La=null);break;case"focusout":La=gu=ta=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,bf(N,l,x);break;case"selectionchange":if(Qm)break;case"keydown":case"keyup":bf(N,l,x)}var lt;if(mu)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Pl?ef(t,l)&&(rt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(Is&&l.locale!=="ko"&&(Pl||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Pl&&(lt=Ks()):(ll=x,su="value"in ll?ll.value:ll.textContent,Pl=!0)),Y=Oi(y,rt),0<Y.length&&(rt=new Ws(rt,t,null,l,x),N.push({event:rt,listeners:Y}),lt?rt.data=lt:(lt=lf(l),lt!==null&&(rt.data=lt)))),(lt=_m?Cm(t,l):Um(t,l))&&(rt=Oi(y,"onBeforeInput"),0<rt.length&&(Y=new Ws("onBeforeInput","beforeinput",null,l,x),N.push({event:Y,listeners:rt}),Y.data=lt)),z0(N,t,y,l,x)}Zo(N,e)})}function bn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Oi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(t,l),n!=null&&a.unshift(bn(t,n,i)),n=Ha(t,e),n!=null&&a.push(bn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function O0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ko(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var s=l,f=s.alternate,y=s.stateNode;if(s=s.tag,f!==null&&f===a)break;s!==5&&s!==26&&s!==27||y===null||(f=y,n?(y=Ha(l,i),y!=null&&u.unshift(bn(l,y,f))):n||(y=Ha(l,i),y!=null&&u.push(bn(l,y,f)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var M0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function Vo(t){return(typeof t=="string"?t:""+t).replace(M0,`
`).replace(D0,"")}function wo(t,e){return e=Vo(e),Vo(t)===e}function Nt(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Wl(t,""+a);break;case"className":Cn(t,"class",a);break;case"tabIndex":Cn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(t,l,a);break;case"style":ks(t,a,i);break;case"data":if(e!=="object"){Cn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Rn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Nt(t,e,"name",n.name,n,null),Nt(t,e,"formEncType",n.formEncType,n,null),Nt(t,e,"formMethod",n.formMethod,n,null),Nt(t,e,"formTarget",n.formTarget,n,null)):(Nt(t,e,"encType",n.encType,n,null),Nt(t,e,"method",n.method,n,null),Nt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Rn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ye);break;case"onScroll":a!=null&&it("scroll",t);break;case"onScrollEnd":a!=null&&it("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Rn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":it("beforetoggle",t),it("toggle",t),_n(t,"popover",a);break;case"xlinkActuate":Be(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Be(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Be(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Be(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Be(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Be(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Be(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":_n(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=nm.get(l)||l,_n(t,l,a))}}function Lc(t,e,l,a,n,i){switch(l){case"style":ks(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&Wl(t,""+a);break;case"onScroll":a!=null&&it("scroll",t);break;case"onScrollEnd":a!=null&&it("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ye);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[ee]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):_n(t,l,a)}}}function Ft(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":it("error",t),it("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Nt(t,e,i,u,l,null)}}n&&Nt(t,e,"srcSet",l.srcSet,l,null),a&&Nt(t,e,"src",l.src,l,null);return;case"input":it("invalid",t);var s=i=u=n=null,f=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var x=l[a];if(x!=null)switch(a){case"name":n=x;break;case"type":u=x;break;case"checked":f=x;break;case"defaultChecked":y=x;break;case"value":i=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:Nt(t,e,a,x,l,null)}}Xs(t,i,s,f,y,u,n,!1);return;case"select":it("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:Nt(t,e,n,s,l,null)}e=i,l=u,t.multiple=!!a,e!=null?$l(t,!!a,e,!1):l!=null&&$l(t,!!a,l,!0);return;case"textarea":it("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:Nt(t,e,u,s,l,null)}Zs(t,a,n,i);return;case"option":for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null)&&(f==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":Nt(t,e,f,a,l,null));return;case"dialog":it("beforetoggle",t),it("toggle",t),it("cancel",t),it("close",t);break;case"iframe":case"object":it("load",t);break;case"video":case"audio":for(a=0;a<hn.length;a++)it(hn[a],t);break;case"image":it("error",t),it("load",t);break;case"details":it("toggle",t);break;case"embed":case"source":case"link":it("error",t),it("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Nt(t,e,y,a,l,null)}return;default:if(au(e)){for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!==void 0&&Lc(t,e,x,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&Nt(t,e,s,a,l,null))}function _0(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,f=null,y=null,x=null;for(v in l){var N=l[v];if(l.hasOwnProperty(v)&&N!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=N;default:a.hasOwnProperty(v)||Nt(t,e,v,null,a,N)}}for(var g in a){var v=a[g];if(N=l[g],a.hasOwnProperty(g)&&(v!=null||N!=null))switch(g){case"type":i=v;break;case"name":n=v;break;case"checked":y=v;break;case"defaultChecked":x=v;break;case"value":u=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,e));break;default:v!==N&&Nt(t,e,g,v,a,N)}}eu(t,u,s,f,y,x,i,n);return;case"select":v=u=s=g=null;for(i in l)if(f=l[i],l.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":v=f;default:a.hasOwnProperty(i)||Nt(t,e,i,null,a,f)}for(n in a)if(i=a[n],f=l[n],a.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":g=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==f&&Nt(t,e,n,i,a,f)}e=s,l=u,a=v,g!=null?$l(t,!!l,g,!1):!!a!=!!l&&(e!=null?$l(t,!!l,e,!0):$l(t,!!l,l?[]:"",!1));return;case"textarea":v=g=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Nt(t,e,s,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":g=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&Nt(t,e,u,n,a,i)}Qs(t,g,v);return;case"option":for(var C in l)g=l[C],l.hasOwnProperty(C)&&g!=null&&!a.hasOwnProperty(C)&&(C==="selected"?t.selected=!1:Nt(t,e,C,null,a,g));for(f in a)g=a[f],v=l[f],a.hasOwnProperty(f)&&g!==v&&(g!=null||v!=null)&&(f==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":Nt(t,e,f,g,a,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in l)g=l[V],l.hasOwnProperty(V)&&g!=null&&!a.hasOwnProperty(V)&&Nt(t,e,V,null,a,g);for(y in a)if(g=a[y],v=l[y],a.hasOwnProperty(y)&&g!==v&&(g!=null||v!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,e));break;default:Nt(t,e,y,g,a,v)}return;default:if(au(e)){for(var zt in l)g=l[zt],l.hasOwnProperty(zt)&&g!==void 0&&!a.hasOwnProperty(zt)&&Lc(t,e,zt,void 0,a,g);for(x in a)g=a[x],v=l[x],!a.hasOwnProperty(x)||g===v||g===void 0&&v===void 0||Lc(t,e,x,g,a,v);return}}for(var m in l)g=l[m],l.hasOwnProperty(m)&&g!=null&&!a.hasOwnProperty(m)&&Nt(t,e,m,null,a,g);for(N in a)g=a[N],v=l[N],!a.hasOwnProperty(N)||g===v||g==null&&v==null||Nt(t,e,N,g,a,v)}function Ko(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function C0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Ko(u)){for(u=0,s=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],y=f.startTime;if(y>s)break;var x=f.transferSize,N=f.initiatorType;x&&Ko(N)&&(f=f.responseEnd,u+=x*(f<s?1:(s-y)/(f-y)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kc=null,Vc=null;function Mi(t){return t.nodeType===9?t:t.ownerDocument}function Jo(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $o(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kc=null;function U0(){var t=window.event;return t&&t.type==="popstate"?t===Kc?!1:(Kc=t,!0):(Kc=null,!1)}var Wo=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,Fo=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fo<"u"?function(t){return Fo.resolve(null).then(t).catch(B0)}:Wo;function B0(t){setTimeout(function(){throw t})}function pl(t){return t==="head"}function Io(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Aa(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")yn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,yn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Ua]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&yn(t.ownerDocument.body);l=n}while(l);Aa(e)}function Po(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Jc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Jc(l),Pi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Y0(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ee(t.nextSibling),t===null)break}return null}function q0(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ee(t.nextSibling),t===null))return null;return t}function td(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ee(t.nextSibling),t===null))return null;return t}function $c(t){return t.data==="$?"||t.data==="$~"}function Wc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function G0(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ee(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Fc=null;function ed(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ee(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function ad(t,e,l){switch(e=Mi(l),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function yn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Pi(t)}var Ae=new Map,nd=new Set;function Di(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pe=z.d;z.d={f:X0,r:Q0,D:Z0,C:L0,L:k0,m:V0,X:K0,S:w0,M:J0};function X0(){var t=Pe.f(),e=Si();return t||e}function Q0(t){var e=wl(t);e!==null&&e.tag===5&&e.type==="form"?xr(e):Pe.r(t)}var za=typeof document>"u"?null:document;function id(t,e,l){var a=za;if(a&&typeof e=="string"&&e){var n=pe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),nd.has(n)||(nd.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Ft(e,"link",t),Vt(e),a.head.appendChild(e)))}}function Z0(t){Pe.D(t),id("dns-prefetch",t,null)}function L0(t,e){Pe.C(t,e),id("preconnect",t,e)}function k0(t,e,l){Pe.L(t,e,l);var a=za;if(a&&t&&e){var n='link[rel="preload"][as="'+pe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+pe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+pe(l.imageSizes)+'"]')):n+='[href="'+pe(t)+'"]';var i=n;switch(e){case"style":i=Ta(t);break;case"script":i=Ea(t)}Ae.has(i)||(t=M({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ae.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(gn(i))||e==="script"&&a.querySelector(vn(i))||(e=a.createElement("link"),Ft(e,"link",t),Vt(e),a.head.appendChild(e)))}}function V0(t,e){Pe.m(t,e);var l=za;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+pe(a)+'"][href="'+pe(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ea(t)}if(!Ae.has(i)&&(t=M({rel:"modulepreload",href:t},e),Ae.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vn(i)))return}a=l.createElement("link"),Ft(a,"link",t),Vt(a),l.head.appendChild(a)}}}function w0(t,e,l){Pe.S(t,e,l);var a=za;if(a&&t){var n=Kl(a).hoistableStyles,i=Ta(t);e=e||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(gn(i)))s.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ae.get(i))&&Ic(t,l);var f=u=a.createElement("link");Vt(f),Ft(f,"link",t),f._p=new Promise(function(y,x){f.onload=y,f.onerror=x}),f.addEventListener("load",function(){s.loading|=1}),f.addEventListener("error",function(){s.loading|=2}),s.loading|=4,_i(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function K0(t,e){Pe.X(t,e);var l=za;if(l&&t){var a=Kl(l).hoistableScripts,n=Ea(t),i=a.get(n);i||(i=l.querySelector(vn(n)),i||(t=M({src:t,async:!0},e),(e=Ae.get(n))&&Pc(t,e),i=l.createElement("script"),Vt(i),Ft(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function J0(t,e){Pe.M(t,e);var l=za;if(l&&t){var a=Kl(l).hoistableScripts,n=Ea(t),i=a.get(n);i||(i=l.querySelector(vn(n)),i||(t=M({src:t,async:!0,type:"module"},e),(e=Ae.get(n))&&Pc(t,e),i=l.createElement("script"),Vt(i),Ft(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ud(t,e,l,a){var n=(n=et.current)?Di(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ta(l.href),l=Kl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ta(l.href);var i=Kl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(gn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Ae.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ae.set(t,l),i||$0(n,t,l,u.state))),e&&a===null)throw Error(d(528,""));return u}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ea(l),l=Kl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Ta(t){return'href="'+pe(t)+'"'}function gn(t){return'link[rel="stylesheet"]['+t+"]"}function cd(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function $0(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ft(e,"link",l),Vt(e),t.head.appendChild(e))}function Ea(t){return'[src="'+pe(t)+'"]'}function vn(t){return"script[async]"+t}function sd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+pe(l.href)+'"]');if(a)return e.instance=a,Vt(a),a;var n=M({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Vt(a),Ft(a,"style",n),_i(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ta(l.href);var i=t.querySelector(gn(n));if(i)return e.state.loading|=4,e.instance=i,Vt(i),i;a=cd(l),(n=Ae.get(n))&&Ic(a,n),i=(t.ownerDocument||t).createElement("link"),Vt(i);var u=i;return u._p=new Promise(function(s,f){u.onload=s,u.onerror=f}),Ft(i,"link",a),e.state.loading|=4,_i(i,l.precedence,t),e.instance=i;case"script":return i=Ea(l.src),(n=t.querySelector(vn(i)))?(e.instance=n,Vt(n),n):(a=l,(n=Ae.get(i))&&(a=M({},l),Pc(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Vt(n),Ft(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,_i(a,l.precedence,t));return e.instance}function _i(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===e)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Ic(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Pc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ci=null;function fd(t,e,l){if(Ci===null){var a=new Map,n=Ci=new Map;n.set(l,a)}else n=Ci,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Ua]||i[Kt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function rd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function W0(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function od(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function F0(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ta(a.href),i=e.querySelector(gn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ui.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Vt(i);return}i=e.ownerDocument||e,a=cd(a),(n=Ae.get(n))&&Ic(a,n),i=i.createElement("link"),Vt(i);var u=i;u._p=new Promise(function(s,f){u.onload=s,u.onerror=f}),Ft(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Ui.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ts=0;function I0(t,e){return t.stylesheets&&t.count===0&&Hi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Hi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&ts===0&&(ts=62500*C0());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ts?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ri=null;function Hi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ri=new Map,e.forEach(P0,t),Ri=null,Ui.call(t))}function P0(t,e){if(!(e.state.loading&4)){var l=Ri.get(t);if(l)var a=l.get(null);else{l=new Map,Ri.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ui.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var pn={$$typeof:bt,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function th(t,e,l,a,n,i,u,s,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function dd(t,e,l,a,n,i,u,s,f,y,x,N){return t=new th(t,e,l,u,f,y,x,N,s),e=1,i===!0&&(e|=24),i=de(3,null,null,e),t.current=i,i.stateNode=t,e=Uu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Yu(i),t}function md(t){return t?(t=aa,t):aa}function hd(t,e,l,a,n,i){n=md(n),a.context===null?a.context=n:a.pendingContext=n,a=sl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=fl(t,a,e),l!==null&&(ce(l,t,e),Wa(l,t,e))}function bd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function es(t,e){bd(t,e),(t=t.alternate)&&bd(t,e)}function yd(t){if(t.tag===13||t.tag===31){var e=_l(t,67108864);e!==null&&ce(e,t,67108864),es(t,67108864)}}function gd(t){if(t.tag===13||t.tag===31){var e=ge();e=Wi(e);var l=_l(t,e);l!==null&&ce(l,t,e),es(t,e)}}var Bi=!0;function eh(t,e,l,a){var n=h.T;h.T=null;var i=z.p;try{z.p=2,ls(t,e,l,a)}finally{z.p=i,h.T=n}}function lh(t,e,l,a){var n=h.T;h.T=null;var i=z.p;try{z.p=8,ls(t,e,l,a)}finally{z.p=i,h.T=n}}function ls(t,e,l,a){if(Bi){var n=as(a);if(n===null)Zc(t,e,a,Yi,l),pd(t,a);else if(nh(n,t,e,l,a))a.stopPropagation();else if(pd(t,a),e&4&&-1<ah.indexOf(t)){for(;n!==null;){var i=wl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=El(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var f=1<<31-re(u);s.entanglements[1]|=f,u&=~f}He(i),(yt&6)===0&&(pi=se()+500,mn(0))}}break;case 31:case 13:s=_l(i,2),s!==null&&ce(s,i,2),Si(),es(i,2)}if(i=as(a),i===null&&Zc(t,e,a,Yi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Zc(t,e,a,null,l)}}function as(t){return t=iu(t),ns(t)}var Yi=null;function ns(t){if(Yi=null,t=Vl(t),t!==null){var e=q(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=J(e),t!==null)return t;t=null}else if(l===31){if(t=ut(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yi=t,null}function vd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zd()){case zs:return 2;case Ts:return 8;case En:case Ld:return 32;case Es:return 268435456;default:return 32}default:return 32}}var is=!1,xl=null,Sl=null,jl=null,xn=new Map,Sn=new Map,Nl=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":xl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":jl=null;break;case"pointerover":case"pointerout":xn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(e.pointerId)}}function jn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=wl(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function nh(t,e,l,a,n){switch(e){case"focusin":return xl=jn(xl,t,e,l,a,n),!0;case"dragenter":return Sl=jn(Sl,t,e,l,a,n),!0;case"mouseover":return jl=jn(jl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return xn.set(i,jn(xn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,jn(Sn.get(i)||null,t,e,l,a,n)),!0}return!1}function xd(t){var e=Vl(t.target);if(e!==null){var l=q(e);if(l!==null){if(e=l.tag,e===13){if(e=J(l),e!==null){t.blockedOn=e,Cs(t.priority,function(){gd(l)});return}}else if(e===31){if(e=ut(l),e!==null){t.blockedOn=e,Cs(t.priority,function(){gd(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=as(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);nu=a,l.target.dispatchEvent(a),nu=null}else return e=wl(l),e!==null&&yd(e),t.blockedOn=l,!1;e.shift()}return!0}function Sd(t,e,l){qi(t)&&l.delete(e)}function ih(){is=!1,xl!==null&&qi(xl)&&(xl=null),Sl!==null&&qi(Sl)&&(Sl=null),jl!==null&&qi(jl)&&(jl=null),xn.forEach(Sd),Sn.forEach(Sd)}function Gi(t,e){t.blockedOn===e&&(t.blockedOn=null,is||(is=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,ih)))}var Xi=null;function jd(t){Xi!==t&&(Xi=t,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){Xi===t&&(Xi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(ns(a||l)===null)continue;break}var i=wl(l);i!==null&&(t.splice(e,3),e-=3,ac(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Aa(t){function e(f){return Gi(f,t)}xl!==null&&Gi(xl,t),Sl!==null&&Gi(Sl,t),jl!==null&&Gi(jl,t),xn.forEach(e),Sn.forEach(e);for(var l=0;l<Nl.length;l++){var a=Nl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Nl.length&&(l=Nl[0],l.blockedOn===null);)xd(l),l.blockedOn===null&&Nl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[ee]||null;if(typeof i=="function")u||jd(l);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[ee]||null)s=u.formAction;else if(ns(n)!==null)continue}else s=u.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),jd(l)}}}function Nd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function us(t){this._internalRoot=t}Qi.prototype.render=us.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var l=e.current,a=ge();hd(l,a,t,e,null,null)},Qi.prototype.unmount=us.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hd(t.current,2,null,t,null,null),Si(),e[kl]=null}};function Qi(t){this._internalRoot=t}Qi.prototype.unstable_scheduleHydration=function(t){if(t){var e=_s();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Nl.length&&e!==0&&e<Nl[l].priority;l++);Nl.splice(l,0,t),l===0&&xd(t)}};var zd=R.version;if(zd!=="19.2.4")throw Error(d(527,zd,"19.2.4"));z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=S(e),t=t!==null?B(t):null,t=t===null?null:t.stateNode,t};var uh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:h,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{Da=Zi.inject(uh),fe=Zi}catch{}}return zn.createRoot=function(t,e){if(!H(t))throw Error(d(299));var l=!1,a="",n=Dr,i=_r,u=Cr;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=dd(t,1,!1,null,null,l,a,null,n,i,u,Nd),t[kl]=e.current,Qc(t),new us(e)},zn.hydrateRoot=function(t,e,l){if(!H(t))throw Error(d(299));var a=!1,n="",i=Dr,u=_r,s=Cr,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=dd(t,1,!0,e,l??null,a,n,f,i,u,s,Nd),e.context=md(null),l=e.current,a=ge(),a=Wi(a),n=sl(a),n.callback=null,fl(l,n,a),l=a,e.current.lanes=l,Ca(e,l),He(e),t[kl]=e.current,Qc(t),new Qi(e)},zn.version="19.2.4",zn}var Rd;function yh(){if(Rd)return fs.exports;Rd=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(R){console.error(R)}}return T(),fs.exports=bh(),fs.exports}var gh=yh();const Ma=(T=25,R=5)=>{const[U,d]=L.useState(T),[H,q]=L.useState(R),[J,ut]=L.useState(T*60),[O,S]=L.useState(!1),[B,M]=L.useState(!1),[tt,vt]=L.useState("focus"),[pt,ht]=L.useState([]),[Rt,gt]=L.useState(!1),[Ht,bt]=L.useState(!1),[At,X]=L.useState(""),[w,D]=L.useState(0),at=L.useRef(null),Q=L.useRef(null),Ot=L.useRef(new Audio("/pomodoro-prototypes/sounds/session-complete.mp3")),I=L.useRef(new Audio("/pomodoro-prototypes/sounds/break-time-complete.mp3")),ct=L.useCallback(G=>{const k=G==="focus"?Ot.current:I.current;k.currentTime=0,k.play().catch(W=>console.log("Audio playback failed:",W))},[]);L.useEffect(()=>(O&&!B&&J>0?at.current=setInterval(()=>{ut(G=>G-1),D(G=>G+1)},1e3):J===0&&O&&(clearInterval(at.current),S(!1),M(!1),tt==="focus"?(ct("focus"),gt(!0)):(ct("break"),Dt())),()=>clearInterval(at.current)),[O,B,J,tt,ct]);const Dt=L.useCallback(()=>{vt("focus"),ut(U*60),D(0),S(!1),M(!1)},[U]),Mt=L.useCallback(()=>{vt("break"),ut(H*60),D(0),S(!0),M(!1)},[H]),Tt=()=>{O?M(!B):(S(!0),M(!1),Q.current=Date.now())},h=()=>{clearInterval(at.current),S(!1),M(!1),ut(U*60),D(0),vt("focus")},z=G=>{const k=Math.ceil(w/60),W={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,name:G||"Unnamed Session",duration:k,date:new Date().toISOString().split("T")[0],timestamp:new Date().toISOString()};ht(It=>[W,...It]),gt(!1),$(`"${G}" was successfully saved!`),setTimeout(()=>{Mt()},1500)},A=()=>{gt(!1),Mt()},st=()=>{Dt()},$=G=>{X(G),bt(!0),setTimeout(()=>bt(!1),3e3)},r=G=>{ht(k=>k.filter(W=>W.id!==G))},p=()=>{ht([])},E=()=>{tt==="focus"&&w>0&&(S(!1),M(!1),gt(!0))},_=G=>{const k=Math.floor(G/60),W=G%60;return`${k.toString().padStart(2,"0")}:${W.toString().padStart(2,"0")}`},K=(G,k)=>{d(G),q(k),O||ut(G*60)},et=pt.reduce((G,k)=>{const W=k.date;return G[W]||(G[W]=[]),G[W].push(k),G},{});return{timeLeft:J,isActive:O,isPaused:B,sessionType:tt,elapsedTime:w,focusDuration:U,breakDuration:H,showSaveModal:Rt,showToast:Ht,toastMessage:At,sessions:pt,groupedSessions:et,toggleTimer:Tt,resetTimer:h,saveSession:z,cancelSave:A,skipBreak:st,manualSave:E,deleteSession:r,clearAllSessions:p,updateSettings:K,formatTime:_,startFocusSession:Dt}};const Yd=(...T)=>T.filter((R,U,d)=>!!R&&R.trim()!==""&&d.indexOf(R)===U).join(" ").trim();const vh=T=>T.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const ph=T=>T.replace(/^([A-Z])|[\s-_]+(\w)/g,(R,U,d)=>d?d.toUpperCase():U.toLowerCase());const Hd=T=>{const R=ph(T);return R.charAt(0).toUpperCase()+R.slice(1)};var xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Sh=T=>{for(const R in T)if(R.startsWith("aria-")||R==="role"||R==="title")return!0;return!1};const jh=L.forwardRef(({color:T="currentColor",size:R=24,strokeWidth:U=2,absoluteStrokeWidth:d,className:H="",children:q,iconNode:J,...ut},O)=>L.createElement("svg",{ref:O,...xh,width:R,height:R,stroke:T,strokeWidth:d?Number(U)*24/Number(R):U,className:Yd("lucide",H),...!q&&!Sh(ut)&&{"aria-hidden":"true"},...ut},[...J.map(([S,B])=>L.createElement(S,B)),...Array.isArray(q)?q:[q]]));const _e=(T,R)=>{const U=L.forwardRef(({className:d,...H},q)=>L.createElement(jh,{ref:q,iconNode:R,className:Yd(`lucide-${vh(Hd(T))}`,`lucide-${T}`,d),...H}));return U.displayName=Hd(T),U};const Nh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qd=_e("check",Nh);const zh=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Oa=_e("clock",zh);const Th=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],hs=_e("house",Th);const Eh=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],bs=_e("pause",Eh);const Ah=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ys=_e("play",Ah);const Oh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],gs=_e("rotate-ccw",Oh);const Mh=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],vs=_e("save",Mh);const Dh=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ps=_e("settings",Dh);const _h=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],xs=_e("skip-forward",_h);const Ch=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ss=_e("trash-2",Ch);const Uh=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Bd=_e("zap",Uh),Rh=()=>{const{timeLeft:T,isActive:R,isPaused:U,sessionType:d,elapsedTime:H,focusDuration:q,breakDuration:J,showSaveModal:ut,showToast:O,toastMessage:S,groupedSessions:B,toggleTimer:M,resetTimer:tt,saveSession:vt,cancelSave:pt,skipBreak:ht,manualSave:Rt,deleteSession:gt,clearAllSessions:Ht,updateSettings:bt,formatTime:At}=Ma(),[X,w]=L.useState("home"),[D,at]=L.useState(""),[Q,Ot]=L.useState(q),[I,ct]=L.useState(J),Dt=d==="focus"?q*60:J*60,Mt=(Dt-T)/Dt*100,Tt=110,h=2*Math.PI*Tt,z=h-Mt/100*h,A=()=>{D.trim()&&(vt(D.trim()),at(""))},st=()=>{bt(Q,I),w("home")},$=r=>{const p=new Date().toISOString().split("T")[0],E=new Date(Date.now()-864e5).toISOString().split("T")[0];return r===p?"Today":r===E?"Yesterday":new Date(r).toLocaleDateString("en-US",{month:"short",day:"numeric"})};return c.jsxs("div",{className:"frame-container frame1-modern",children:[c.jsx("div",{className:"frame1-bg"}),O&&c.jsxs("div",{className:"toast",children:[c.jsx(qd,{size:16}),c.jsx("span",{children:S})]}),ut&&c.jsx("div",{className:"modal-overlay",children:c.jsxs("div",{className:"bottom-sheet",children:[c.jsx("div",{className:"sheet-handle"}),c.jsx("h3",{children:"Do you want to save this session?"}),c.jsxs("p",{className:"sheet-subtitle",children:["You focused for ",Math.ceil(H/60)," minutes"]}),c.jsx("input",{type:"text",className:"sheet-input",placeholder:"Please enter your session name!",value:D,onChange:r=>at(r.target.value)}),c.jsxs("div",{className:"sheet-actions",children:[c.jsx("button",{className:"sheet-btn cancel",onClick:pt,children:"Cancel"}),c.jsx("button",{className:"sheet-btn save",onClick:A,children:"Save"})]})]})}),c.jsxs("div",{className:"frame1-content",children:[X==="home"&&c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"frame1-header",children:c.jsx("h3",{style:{fontSize:39,fontWeight:200},children:"Focus Flow"})}),c.jsxs("div",{className:"timer-container",children:[c.jsxs("svg",{className:"timer-svg",width:"260",height:"260",children:[c.jsx("circle",{className:"timer-circle-bg",stroke:"rgba(255,255,255,0.1)",strokeWidth:"8",fill:"transparent",r:Tt,cx:"130",cy:"130"}),c.jsx("circle",{className:"timer-circle-progress",stroke:d==="focus"?"#fff":"#4ade80",strokeWidth:"8",fill:"transparent",r:Tt,cx:"130",cy:"130",strokeLinecap:"round",style:{strokeDasharray:h,strokeDashoffset:z,transition:"stroke-dashoffset 1s linear"}})]}),c.jsxs("div",{className:"timer-text",children:[c.jsx("h1",{style:{fontWeight:700},children:At(T)}),c.jsx("p",{children:R?U?"PAUSED":d==="focus"?"FOCUSING":"RESTING":"READY"})]})]}),c.jsx("div",{className:"status-badge",style:{marginBottom:40},children:c.jsx("span",{className:`${d}`,children:d==="focus"?"Focus Mode":"Break Time"})}),c.jsxs("div",{className:"controls",children:[c.jsx("button",{className:"control-btn secondary",onClick:tt,children:c.jsx(gs,{size:24})}),c.jsx("button",{className:"control-btn main",onClick:M,children:R&&!U?c.jsx(bs,{size:32}):c.jsx(ys,{size:32,fill:"currentColor"})}),d==="focus"?c.jsx("button",{className:"control-btn secondary",onClick:Rt,disabled:H===0,children:c.jsx(vs,{size:24})}):c.jsx("button",{className:"control-btn secondary",onClick:ht,children:c.jsx(xs,{size:24})})]})]}),X==="history"&&c.jsxs("div",{className:"history-container",children:[c.jsxs("header",{className:"tab-header",children:[c.jsx("h3",{style:{fontSize:39,fontWeight:"300"},children:"History"}),Object.keys(B).length>0&&c.jsx("button",{className:"clear-all-btn",onClick:Ht,children:"Clear All"})]}),c.jsx("div",{className:"history-list",children:Object.keys(B).length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx(Oa,{size:48,strokeWidth:1}),c.jsx("p",{children:"No sessions yet"})]}):Object.entries(B).map(([r,p])=>c.jsxs("div",{className:"date-group",children:[c.jsx("div",{className:"date-header",children:$(r)}),p.map(E=>c.jsxs("div",{className:"history-item",children:[c.jsxs("div",{className:"item-info",children:[c.jsx("span",{className:"item-name",children:E.name}),c.jsxs("span",{className:"item-duration",children:[E.duration," mins"]})]}),c.jsx("button",{className:"delete-btn",onClick:()=>gt(E.id),children:c.jsx(Ss,{size:16})})]},E.id))]},r))})]}),X==="settings"&&c.jsxs("div",{className:"settings-container",children:[c.jsx("header",{className:"tab-header",children:c.jsx("h3",{style:{fontSize:39,fontWeight:"300"},children:"Settings"})}),c.jsxs("div",{className:"settings-list",children:[c.jsxs("div",{className:"setting-item",children:[c.jsx("label",{children:"Focus Duration"}),c.jsxs("div",{className:"setting-control",children:[c.jsx("button",{onClick:()=>Ot(Q<=5?1:Q-5),children:"-"}),c.jsxs("span",{children:[Q," min"]}),c.jsx("button",{onClick:()=>Ot(Q===1?5:Math.min(60,Q+5)),children:"+"})]})]}),c.jsxs("div",{className:"setting-item",children:[c.jsx("label",{children:"Break Duration"}),c.jsxs("div",{className:"setting-control",children:[c.jsx("button",{onClick:()=>ct(Math.max(1,I-1)),children:"-"}),c.jsxs("span",{children:[I," min"]}),c.jsx("button",{onClick:()=>ct(Math.min(30,I+1)),children:"+"})]})]}),c.jsx("button",{className:"save-settings-btn",onClick:st,children:"Save Settings"})]})]})]}),c.jsxs("nav",{className:"bottom-nav",children:[c.jsxs("button",{className:`nav-item ${X==="home"?"active":""}`,onClick:()=>w("home"),children:[c.jsx(hs,{size:20}),c.jsx("span",{children:"Home"})]}),c.jsxs("button",{className:`nav-item ${X==="history"?"active":""}`,onClick:()=>w("history"),children:[c.jsx(Oa,{size:20}),c.jsx("span",{children:"History"})]}),c.jsxs("button",{className:`nav-item ${X==="settings"?"active":""}`,onClick:()=>w("settings"),children:[c.jsx(ps,{size:20}),c.jsx("span",{children:"Settings"})]})]}),c.jsx("style",{children:`
        .frame1-modern {
          color: white;
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .frame1-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          z-index: 0;
        }

        .frame1-content {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          padding-bottom: 70px;
          overflow-y: hidden;
        }

        .frame1-header, .tab-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .frame1-header h3, .tab-header h3 {
          margin: 0;
          font-weight: 600;
        }

        .status-badge {
          background: rgba(255,255,255,0.2);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          backdrop-filter: blur(5px);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-badge.break {
          background: rgba(74, 222, 128, 0.3);
        }

        /* Toast */
        .toast {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(74, 222, 128, 0.9);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 100;
          font-size: 0.85rem;
          animation: slideDown 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        @keyframes slideDown {
          from { top: -50px; opacity: 0; }
          to { top: 20px; opacity: 1; }
        }

        /* Modal / Bottom Sheet */
        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 50;
          display: flex;
          align-items: flex-end;
        }

        .bottom-sheet {
          width: 100%;
          background: white;
          border-radius: 20px 20px 0 0;
          padding: 1.5rem;
          color: #333;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .sheet-handle {
          width: 40px;
          height: 4px;
          background: #ddd;
          border-radius: 2px;
          margin: 0 auto 1rem;
        }

        .bottom-sheet h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
        }

        .sheet-subtitle {
          color: #666;
          font-size: 0.85rem;
          margin: 0 0 1rem;
        }

        .sheet-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #eee;
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .sheet-input:focus {
          border-color: #667eea;
        }

        .sheet-actions {
          display: flex;
          gap: 12px;
        }

        .sheet-btn {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }

        .sheet-btn.cancel {
          background: #f0f0f0;
          color: #666;
        }

        .sheet-btn.save {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        /* Timer */
        .timer-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 1rem;
        }

        .timer-svg {
          transform: rotate(-90deg);
        }

        .timer-text {
          position: absolute;
          text-align: center;
        }

        .timer-text h1 {
          font-size: 3.5rem;
          margin: 0;
          font-weight: 200;
          letter-spacing: 2px;
        }

        .timer-text p {
          margin: 0;
          font-size: 0.8rem;
          opacity: 0.8;
          letter-spacing: 3px;
        }

        /* Controls */
        .controls {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .control-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        .control-btn:hover {
          transform: scale(1.1);
        }

        .control-btn:active {
          transform: scale(0.95);
        }

        .control-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .control-btn.main {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .control-btn.secondary {
          opacity: 0.7;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .control-btn.secondary:hover {
          opacity: 1;
          background: rgba(255,255,255,0.2);
        }

        /* History */
        .history-container, .settings-container {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .clear-all-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .history-list {
          flex: 1;
          overflow-y: auto;
        }

        .empty-state {
          text-align: center;
          opacity: 0.5;
          margin-top: 3rem;
        }

        .empty-state p {
          margin-top: 1rem;
        }

        .date-group {
          margin-bottom: 1.5rem;
        }

        .date-header {
          font-size: 0.75rem;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.1);
          padding: 0.75rem 1rem;
          border-radius: 12px;
          margin-bottom: 0.5rem;
        }

        .item-info {
          display: flex;
          flex-direction: column;
        }

        .item-name {
          font-weight: 500;
        }

        .item-duration {
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .delete-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.6;
        }

        .delete-btn:hover {
          opacity: 1;
          background: rgba(239, 68, 68, 0.5);
        }

        /* Settings */
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .setting-item {
          background: rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .setting-item label {
          font-weight: 500;
        }

        .setting-control {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .setting-control button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.2);
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .setting-control span {
          min-width: 60px;
          text-align: center;
        }

        .save-settings-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 0;
        }

        .save-settings-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        /* Bottom Navigation */
        .bottom-nav {
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          border-radius: 0;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 10;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          padding: 6px 40px;
          border-radius: 40px;
          transition: all 0.2s;
        }

        .nav-item span {
          font-size: 0.7rem;
        }

        .nav-item.active {
          color: white;
          background: rgba(255,255,255,0.1);
        }
      `})]})},Hh=()=>{const{timeLeft:T,isActive:R,isPaused:U,sessionType:d,elapsedTime:H,focusDuration:q,breakDuration:J,showSaveModal:ut,showToast:O,toastMessage:S,groupedSessions:B,toggleTimer:M,resetTimer:tt,saveSession:vt,cancelSave:pt,skipBreak:ht,manualSave:Rt,deleteSession:gt,clearAllSessions:Ht,updateSettings:bt,formatTime:At}=Ma(),[X,w]=L.useState("home"),[D,at]=L.useState(""),[Q,Ot]=L.useState(q),[I,ct]=L.useState(J),Dt=()=>{D.trim()&&(vt(D.trim()),at(""))},Mt=()=>{bt(Q,I),w("home")},Tt=h=>{const z=new Date().toISOString().split("T")[0],A=new Date(Date.now()-864e5).toISOString().split("T")[0];return h===z?"TODAY":h===A?"YESTERDAY":new Date(h).toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()};return c.jsxs("div",{className:"frame-container frame2-brutalism",children:[O&&c.jsxs("div",{className:"brutal-toast",children:["★ ",S.toUpperCase()," ★"]}),ut&&c.jsx("div",{className:"brutal-modal-overlay",children:c.jsxs("div",{className:"brutal-bottom-sheet",children:[c.jsx("h3",{children:"★★★ SAVE SESSION? ★★★"}),c.jsxs("p",{children:["YOU FOCUSED FOR ",Math.ceil(H/60)," MINUTES"]}),c.jsx("input",{type:"text",className:"brutal-input",placeholder:"ENTER SESSION NAME...",value:D,onChange:h=>at(h.target.value.toUpperCase())}),c.jsxs("div",{className:"brutal-sheet-actions",children:[c.jsx("button",{className:"brutal-btn sheet-btn",onClick:pt,children:"CANCEL"}),c.jsx("button",{className:"brutal-btn sheet-btn primary",onClick:Dt,children:"SAVE"})]})]})}),c.jsxs("div",{className:"brutal-content",children:[X==="home"&&c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"brutal-header",children:[c.jsx("h2",{children:"POMODORO"}),c.jsx("div",{className:`brutal-badge ${d}`,children:d==="focus"?"FOCUS":"BREAK"})]}),c.jsxs("div",{className:"brutal-timer-display",children:[c.jsx("h1",{children:At(T)}),c.jsx("div",{className:"brutal-status",children:R?U?"/// PAUSED ///":d==="focus"?"/// FOCUSING ///":"/// RESTING ///":"/// READY ///"})]}),c.jsxs("div",{className:"brutal-controls",children:[c.jsx("button",{className:"brutal-btn main",onClick:M,children:R&&!U?"PAUSE":"START"}),c.jsxs("div",{className:"brutal-secondary",children:[c.jsx("button",{className:"brutal-btn small",onClick:tt,children:"RESET"}),d==="focus"?c.jsx("button",{className:"brutal-btn small",onClick:Rt,disabled:H===0,children:"SAVE"}):c.jsx("button",{className:"brutal-btn small",onClick:ht,children:"SKIP"})]})]})]}),X==="history"&&c.jsxs("div",{className:"brutal-history",children:[c.jsxs("header",{className:"brutal-tab-header",children:[c.jsx("h2",{children:"LOGS"}),Object.keys(B).length>0&&c.jsx("button",{className:"brutal-btn tiny",onClick:Ht,children:"CLEAR"})]}),c.jsx("div",{className:"brutal-history-list",children:Object.keys(B).length===0?c.jsx("div",{className:"brutal-empty",children:"NO DATA"}):Object.entries(B).map(([h,z])=>c.jsxs("div",{className:"brutal-date-group",children:[c.jsxs("div",{className:"brutal-date-header",children:["[",Tt(h),"]"]}),z.map(A=>c.jsxs("div",{className:"brutal-history-item",children:[c.jsx("span",{className:"item-name",children:A.name}),c.jsxs("span",{className:"item-duration",children:[A.duration,"M"]}),c.jsx("button",{className:"brutal-delete",onClick:()=>gt(A.id),children:"X"})]},A.id))]},h))})]}),X==="settings"&&c.jsxs("div",{className:"brutal-settings",children:[c.jsx("header",{className:"brutal-tab-header",children:c.jsx("h2",{children:"CONFIG"})}),c.jsxs("div",{className:"brutal-settings-list",children:[c.jsxs("div",{className:"brutal-setting-item",children:[c.jsx("span",{children:"FOCUS TIME:"}),c.jsxs("div",{className:"brutal-setting-control",children:[c.jsx("button",{onClick:()=>Ot(Q<=5?1:Q-5),children:"-"}),c.jsxs("span",{children:[Q,"M"]}),c.jsx("button",{onClick:()=>Ot(Q===1?5:Math.min(60,Q+5)),children:"+"})]})]}),c.jsxs("div",{className:"brutal-setting-item",children:[c.jsx("span",{children:"BREAK TIME:"}),c.jsxs("div",{className:"brutal-setting-control",children:[c.jsx("button",{onClick:()=>ct(Math.max(1,I-1)),children:"-"}),c.jsxs("span",{children:[I,"M"]}),c.jsx("button",{onClick:()=>ct(Math.min(30,I+1)),children:"+"})]})]}),c.jsx("button",{className:"brutal-btn",onClick:Mt,children:"SAVE CONFIG"})]})]})]}),c.jsxs("nav",{className:"brutal-nav",children:[c.jsx("button",{className:`brutal-nav-item ${X==="home"?"active":""}`,onClick:()=>w("home"),children:"HOME"}),c.jsx("button",{className:`brutal-nav-item ${X==="history"?"active":""}`,onClick:()=>w("history"),children:"LOGS"}),c.jsx("button",{className:`brutal-nav-item ${X==="settings"?"active":""}`,onClick:()=>w("settings"),children:"CONFIG"})]}),c.jsx("style",{children:`
        .frame2-brutalism {
          background: #f0f0f0;
          font-family: 'Space Grotesk', sans-serif;
          color: #000;
          display: flex;
          flex-direction: column;
        }

        .brutal-content {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          padding-bottom: 60px;
        }

        .brutal-header, .brutal-tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 4px solid #000;
          padding-bottom: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .brutal-header h2, .brutal-tab-header h2 {
          margin: 0;
          font-weight: 900;
          font-size: 1.4rem;
        }

        .brutal-badge {
          background: #000;
          color: #fff;
          padding: 0.2rem 0.6rem;
          font-weight: bold;
          font-size: 0.75rem;
        }

        .brutal-badge.break {
          background: #4caf50;
        }

        /* Toast */
        .brutal-toast {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          background: #4caf50;
          color: #fff;
          padding: 0.75rem;
          font-weight: 900;
          text-align: center;
          border: 4px solid #000;
          z-index: 100;
          animation: brutalSlide 0.2s ease;
        }

        @keyframes brutalSlide {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        /* Modal */
        .brutal-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          z-index: 50;
          display: flex;
          align-items: flex-end;
        }

        .brutal-bottom-sheet {
          width: 100%;
          background: #ffeb3b;
          border: 4px solid #000;
          border-bottom: none;
          padding: 1.5rem;
          animation: brutalUp 0.2s ease;
        }

        @keyframes brutalUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .brutal-bottom-sheet h3 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }

        .brutal-bottom-sheet p {
          margin: 0 0 1rem;
          font-size: 0.85rem;
        }

        .brutal-input {
          width: 100%;
          padding: 0.75rem;
          border: 3px solid #000;
          font-family: inherit;
          font-weight: bold;
          font-size: 1rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .brutal-sheet-actions {
          display: flex;
          gap: 1rem;
        }

        .brutal-btn.sheet-btn {
          flex: 1;
        }

        .brutal-btn.sheet-btn.primary {
          background: #000;
          color: #fff;
        }

        /* Timer */
        .brutal-timer-display {
          text-align: center;
          border: 4px solid #000;
          padding: 7rem 1rem;
          background: #ffeb3b;
          margin-bottom: 1.5rem;
        }

        .brutal-timer-display h1 {
          font-size: 4rem;
          margin: 0;
          font-weight: 900;
        }

        .brutal-status {
          margin-top: 0.5rem;
          font-weight: bold;
          font-size: 0.9rem;
        }

        /* Controls */
        .brutal-controls {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brutal-btn {
          background: #fff;
          border: 4px solid #000;
          padding: 0.75rem;
          font-family: inherit;
          font-weight: 900;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 4px 4px 0px #000;
          transition: all 0.1s;
        }

        .brutal-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000;
        }

        .brutal-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 0px 0px 0px #000;
        }

        .brutal-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .brutal-btn.main {
          background: #ff5722;
          color: #fff;
        }

        .brutal-btn.tiny {
          padding: 0.3rem 0.6rem;
          font-size: 0.7rem;
          box-shadow: 2px 2px 0 #000;
        }

        .brutal-secondary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* History */
        .brutal-history, .brutal-settings {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .brutal-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .brutal-empty {
          text-align: center;
          padding: 2rem;
          border: 4px dashed #000;
          font-weight: bold;
          opacity: 0.5;
        }

        .brutal-date-group {
          margin-bottom: 1rem;
        }

        .brutal-date-header {
          font-weight: 900;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          text-decoration: underline;
        }

        .brutal-history-item {
          display: flex;
          align-items: center;
          border: 3px solid #000;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          background: #fff;
        }

        .brutal-history-item .item-name {
          flex: 1;
          font-weight: bold;
          font-size: 0.85rem;
        }

        .brutal-history-item .item-duration {
          font-weight: 900;
          margin-right: 0.5rem;
        }

        .brutal-delete {
          background: #000;
          color: #fff;
          border: none;
          width: 24px;
          height: 24px;
          font-weight: bold;
          cursor: pointer;
        }

        /* Settings */
        .brutal-settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brutal-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 3px solid #000;
          padding: 0.75rem;
          background: #fff;
          font-weight: bold;
        }

        .brutal-setting-control {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .brutal-setting-control button {
        display: flex;
    justify-content: center;
    align-items: center;
          width: 30px;
          height: 30px;
          border: 3px solid #000;
          background: #ffeb3b;
          font-weight: 900;
          font-size: 1.2rem;
          cursor: pointer;
        }

        /* Bottom Nav */
        .brutal-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50px;
          background: #000;
          display: flex;
          z-index: 10;
        }

        .brutal-nav-item {
          flex: 1;
          background: #000;
          color: #666;
          border: none;
          font-family: inherit;
          font-weight: 900;
          font-size: 0.75rem;
          cursor: pointer;
          border-right: 2px solid #333;
        }

        .brutal-nav-item:last-child {
          border-right: none;
        }

        .brutal-nav-item.active {
          background: #ffeb3b;
          color: #000;
        }
      `})]})},Bh=()=>{const{timeLeft:T,isActive:R,isPaused:U,sessionType:d,elapsedTime:H,focusDuration:q,breakDuration:J,showSaveModal:ut,showToast:O,toastMessage:S,groupedSessions:B,toggleTimer:M,resetTimer:tt,saveSession:vt,cancelSave:pt,skipBreak:ht,manualSave:Rt,deleteSession:gt,clearAllSessions:Ht,updateSettings:bt,formatTime:At}=Ma(),[X,w]=L.useState("home"),[D,at]=L.useState(""),[Q,Ot]=L.useState(q),[I,ct]=L.useState(J),Dt=()=>{D.trim()&&(vt(D.trim()),at(""))},Mt=()=>{bt(Q,I),w("home")},Tt=h=>{const z=new Date().toISOString().split("T")[0],A=new Date(Date.now()-864e5).toISOString().split("T")[0];return h===z?"Today":h===A?"Yesterday":new Date(h).toLocaleDateString("en-US",{month:"short",day:"numeric"})};return c.jsxs("div",{className:"frame-container frame3-flat",children:[O&&c.jsxs("div",{className:"flat-toast",children:[c.jsx(qd,{size:16}),S]}),ut&&c.jsx("div",{className:"flat-modal-overlay",children:c.jsxs("div",{className:"flat-bottom-sheet",children:[c.jsx("h3",{children:"Save this session?"}),c.jsxs("p",{children:["You focused for ",Math.ceil(H/60)," minutes"]}),c.jsx("input",{type:"text",className:"flat-input",placeholder:"Enter session name...",value:D,onChange:h=>at(h.target.value)}),c.jsxs("div",{className:"flat-sheet-actions",children:[c.jsx("button",{className:"flat-btn secondary",onClick:pt,children:"Cancel"}),c.jsx("button",{className:"flat-btn primary",onClick:Dt,children:"Save"})]})]})}),c.jsxs("div",{className:"flat-content",children:[X==="home"&&c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"flat-header",children:[c.jsx("div",{className:"flat-header-icon",children:c.jsx(Oa,{size:24})}),c.jsx("h3",{children:"Pomodoro"}),c.jsx("div",{className:`flat-badge ${d}`,children:d==="focus"?"Focus":"Break"})]}),c.jsx("div",{className:"flat-timer",children:c.jsxs("div",{className:`timer-circle ${d} ${R?"active":""}`,children:[c.jsx("span",{className:"time-digits",children:At(T)}),c.jsx("span",{className:"time-label",children:R?U?"Paused":d==="focus"?"Focusing":"Resting":"Ready"})]})}),c.jsxs("div",{className:"flat-controls",children:[c.jsx("button",{className:"flat-btn secondary icon",onClick:tt,children:c.jsx(gs,{size:20})}),c.jsx("button",{className:`flat-btn round primary ${R&&!U?"pause":""}`,onClick:M,children:R&&!U?c.jsx(bs,{fill:"white",size:28}):c.jsx(ys,{fill:"white",size:28})}),d==="focus"?c.jsx("button",{className:"flat-btn secondary icon",onClick:Rt,disabled:H===0,children:c.jsx(vs,{size:20})}):c.jsx("button",{className:"flat-btn secondary icon",onClick:ht,children:c.jsx(xs,{size:20})})]})]}),X==="history"&&c.jsxs("div",{className:"flat-history",children:[c.jsxs("header",{className:"flat-tab-header",children:[c.jsx("h3",{children:"History"}),Object.keys(B).length>0&&c.jsx("button",{className:"flat-btn small",onClick:Ht,children:"Clear All"})]}),c.jsx("div",{className:"flat-history-list",children:Object.keys(B).length===0?c.jsxs("div",{className:"flat-empty",children:[c.jsx(Oa,{size:40,strokeWidth:1.5}),c.jsx("p",{children:"No sessions yet"})]}):Object.entries(B).map(([h,z])=>c.jsxs("div",{className:"flat-date-group",children:[c.jsx("div",{className:"flat-date-header",children:Tt(h)}),z.map(A=>c.jsxs("div",{className:"flat-history-item",children:[c.jsxs("div",{className:"item-info",children:[c.jsx("span",{className:"item-name",children:A.name}),c.jsxs("span",{className:"item-duration",children:[A.duration," mins"]})]}),c.jsx("button",{className:"flat-delete",onClick:()=>gt(A.id),children:c.jsx(Ss,{size:16})})]},A.id))]},h))})]}),X==="settings"&&c.jsxs("div",{className:"flat-settings",children:[c.jsx("header",{className:"flat-tab-header",children:c.jsx("h3",{children:"Settings"})}),c.jsxs("div",{className:"flat-settings-list",children:[c.jsxs("div",{className:"flat-setting-item",children:[c.jsx("span",{children:"Focus Duration"}),c.jsxs("div",{className:"flat-setting-control",children:[c.jsx("button",{onClick:()=>Ot(Q<=5?1:Q-5),children:"−"}),c.jsxs("span",{children:[Q," min"]}),c.jsx("button",{onClick:()=>Ot(Q===1?5:Math.min(60,Q+5)),children:"+"})]})]}),c.jsxs("div",{className:"flat-setting-item",children:[c.jsx("span",{children:"Break Duration"}),c.jsxs("div",{className:"flat-setting-control",children:[c.jsx("button",{onClick:()=>ct(Math.max(1,I-1)),children:"−"}),c.jsxs("span",{children:[I," min"]}),c.jsx("button",{onClick:()=>ct(Math.min(30,I+1)),children:"+"})]})]}),c.jsx("button",{className:"flat-btn primary full",onClick:Mt,children:"Save Settings"})]})]})]}),c.jsxs("nav",{className:"flat-nav",children:[c.jsxs("button",{className:`flat-nav-item ${X==="home"?"active":""}`,onClick:()=>w("home"),children:[c.jsx(hs,{size:18}),c.jsx("span",{children:"Home"})]}),c.jsxs("button",{className:`flat-nav-item ${X==="history"?"active":""}`,onClick:()=>w("history"),children:[c.jsx(Oa,{size:18}),c.jsx("span",{children:"History"})]}),c.jsxs("button",{className:`flat-nav-item ${X==="settings"?"active":""}`,onClick:()=>w("settings"),children:[c.jsx(ps,{size:18}),c.jsx("span",{children:"Settings"})]})]}),c.jsx("style",{children:`
        .frame3-flat {
          background: #ecf0f1;
          font-family: 'Inter', sans-serif;
          color: #2c3e50;
          display: flex;
          flex-direction: column;
        }

        .flat-content {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          padding-bottom: 70px;
          display: flex;
          flex-direction: column;
        }

        .flat-header, .flat-tab-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .flat-header-icon {
          display: flex;
          align-items: center;
          margin-right: 0.75rem;
          color: #3498db;
        }

        .flat-header h3, .flat-tab-header h3 {
          flex: 1;
          margin: 0;
          font-weight: 700;
        }

        .flat-badge {
          background: #3498db;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .flat-badge.break {
          background: #2ecc71;
        }

        /* Toast */
        .flat-toast {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          background: #2ecc71;
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          z-index: 100;
          animation: flatSlide 0.2s ease;
        }

        @keyframes flatSlide {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Modal */
        .flat-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(44, 62, 80, 0.8);
          z-index: 50;
          display: flex;
          align-items: flex-end;
        }

        .flat-bottom-sheet {
          width: 100%;
          background: white;
          border-radius: 12px 12px 0 0;
          padding: 1.5rem;
          animation: flatUp 0.2s ease;
        }

        @keyframes flatUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .flat-sheet-dots {
          display: flex;
          gap: 6px;
          margin-bottom: 1rem;
        }

        .flat-bottom-sheet h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
        }

        .flat-bottom-sheet p {
          margin: 0 0 1rem;
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .flat-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: #ecf0f1;
          border-radius: 4px;
          font-size: 1rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .flat-sheet-actions {
          display: flex;
          gap: 12px;
        }

        /* Buttons */
        .flat-btn {
          border: none;
          border-radius: 4px;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.1s;
        }

        .flat-btn:active {
          transform: translateY(2px);
        }

        .flat-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .flat-btn.primary {
          background: #3498db;
          color: white;
          box-shadow: 0 4px 0 #2980b9;
        }

        .flat-btn.primary:active {
          box-shadow: 0 0 0 #2980b9;
        }

        .flat-btn.primary.pause {
          background: #f39c12;
          box-shadow: 0 4px 0 #d35400;
        }

        .flat-btn.secondary {
          background: #95a5a6;
          color: white;
          box-shadow: 0 4px 0 #7f8c8d;
          flex: 1;
        }

        .flat-btn.secondary:active {
          box-shadow: 0 0 0 #7f8c8d;
        }

        .flat-btn.round {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flat-btn.icon {
          width: 50px;
          height: 50px;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flat-btn.small {
          padding: 0.4rem 0.8rem;
          font-size: 0.75rem;
        }

        .flat-btn.full {
          width: 100%;
          margin-top: 0;
        }

        /* Timer */
        .flat-timer {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
        }

        .timer-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: #3498db;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          transition: background 0.3s;
        }

        .timer-circle.break {
          background: #2ecc71;
        }

        .timer-circle.active {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .time-digits {
          font-size: 3rem;
          font-weight: 700;
        }

        .time-label {
          font-size: 0.85rem;
          opacity: 0.9;
          text-transform: uppercase;
        }

        /* Controls */
        .flat-controls {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          margin: 2rem;
        }

        /* History */
        .flat-history, .flat-settings {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .flat-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .flat-empty {
          text-align: center;
          color: #95a5a6;
          padding: 3rem 0;
        }

        .flat-empty p {
          margin-top: 1rem;
        }

        .flat-date-group {
          margin-bottom: 1rem;
        }

        .flat-date-header {
          font-size: 0.75rem;
          font-weight: 700;
          color: #7f8c8d;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .flat-history-item {
          display: flex;
          align-items: center;
          background: white;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .flat-history-item .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .flat-history-item .item-name {
          font-weight: 600;
        }

        .flat-history-item .item-duration {
          font-size: 0.8rem;
          color: #7f8c8d;
        }

        .flat-delete {
          background: #ecf0f1;
          border: none;
          padding: 8px;
          border-radius: 4px;
          color: #7f8c8d;
          cursor: pointer;
        }

        .flat-delete:hover {
          background: #e74c3c;
          color: white;
        }

        /* Settings */
        .flat-settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .flat-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 1rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .flat-setting-control {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .flat-setting-control button {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          border: none;
          background: #3498db;
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* Bottom Nav */
        .flat-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: #34495e;
          display: flex;
          z-index: 10;
        }

        .flat-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: none;
          border: none;
          color: #7f8c8d;
          cursor: pointer;
        }

        .flat-nav-item span {
          font-size: 0.65rem;
          font-weight: 700;
        }

        .flat-nav-item.active {
          color: white;
        }
      `})]})},Yh=()=>{const{timeLeft:T,isActive:R,isPaused:U,sessionType:d,elapsedTime:H,focusDuration:q,breakDuration:J,showSaveModal:ut,showToast:O,toastMessage:S,groupedSessions:B,toggleTimer:M,resetTimer:tt,saveSession:vt,cancelSave:pt,skipBreak:ht,manualSave:Rt,deleteSession:gt,clearAllSessions:Ht,updateSettings:bt,formatTime:At}=Ma(),[X,w]=L.useState("home"),[D,at]=L.useState(""),[Q,Ot]=L.useState(q),[I,ct]=L.useState(J),Dt=()=>{D.trim()&&(vt(D.trim()),at(""))},Mt=()=>{bt(Q,I),w("home")},Tt=h=>{const z=new Date().toISOString().split("T")[0],A=new Date(Date.now()-864e5).toISOString().split("T")[0];return h===z?"TODAY":h===A?"YESTERDAY":new Date(h).toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()};return c.jsxs("div",{className:"frame-container frame4-pixel",children:[O&&c.jsxs("div",{className:"pixel-toast",children:["★ ",S.toUpperCase()," ★"]}),ut&&c.jsx("div",{className:"pixel-modal-overlay",children:c.jsx("div",{className:"pixel-modal",children:c.jsxs("div",{className:"pixel-modal-border",children:[c.jsx("h3",{children:"SAVE SESSION?"}),c.jsxs("p",{children:["TIME: ",Math.ceil(H/60)," MIN"]}),c.jsx("input",{type:"text",className:"pixel-input",placeholder:"ENTER NAME...",value:D,onChange:h=>at(h.target.value.toUpperCase())}),c.jsxs("div",{className:"pixel-modal-btns",children:[c.jsx("button",{className:"pixel-btn",onClick:pt,children:"CANCEL"}),c.jsx("button",{className:"pixel-btn primary",onClick:Dt,children:"SAVE"})]})]})})}),c.jsxs("div",{className:"pixel-content",children:[X==="home"&&c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"pixel-header",children:[c.jsx("h2",{children:"FOCUS QUEST"}),c.jsx("div",{className:`pixel-badge ${d}`,children:d==="focus"?"⚔ FOCUS":"🛡 BREAK"})]}),c.jsxs("div",{className:"pixel-timer-box",children:[c.jsx("div",{className:"pixel-timer-display",children:c.jsx("span",{className:"pixel-time",children:At(T)})}),c.jsx("div",{className:"pixel-status",children:R?U?"▸▸ PAUSED":"▶ RUNNING":"■ READY"}),c.jsxs("div",{className:"pixel-hearts",children:["❤".repeat(Math.min(5,Math.ceil(T/(q*12)))),"🖤".repeat(5-Math.min(5,Math.ceil(T/(q*12))))]})]}),c.jsxs("div",{className:"pixel-controls",children:[c.jsx("button",{className:"pixel-btn",onClick:tt,children:"RESET"}),c.jsx("button",{className:"pixel-btn primary large",onClick:M,children:R&&!U?"PAUSE":"START"}),d==="focus"?c.jsx("button",{className:"pixel-btn",onClick:Rt,disabled:H===0,children:"SAVE"}):c.jsx("button",{className:"pixel-btn",onClick:ht,children:"SKIP"})]})]}),X==="history"&&c.jsxs("div",{className:"pixel-history",children:[c.jsxs("header",{className:"pixel-tab-header",children:[c.jsx("h2",{children:"QUEST LOG"}),Object.keys(B).length>0&&c.jsx("button",{className:"pixel-btn small",onClick:Ht,children:"CLEAR"})]}),c.jsx("div",{className:"pixel-history-list",children:Object.keys(B).length===0?c.jsx("div",{className:"pixel-empty",children:"NO QUESTS YET"}):Object.entries(B).map(([h,z])=>c.jsxs("div",{className:"pixel-date-group",children:[c.jsxs("div",{className:"pixel-date-header",children:["- ",Tt(h)," -"]}),z.map(A=>c.jsxs("div",{className:"pixel-history-item",children:[c.jsxs("span",{className:"item-name",children:["★ ",A.name]}),c.jsxs("span",{className:"item-duration",children:[A.duration,"M"]}),c.jsx("button",{className:"pixel-delete",onClick:()=>gt(A.id),children:"X"})]},A.id))]},h))})]}),X==="settings"&&c.jsxs("div",{className:"pixel-settings",children:[c.jsx("header",{className:"pixel-tab-header",children:c.jsx("h2",{children:"OPTIONS"})}),c.jsxs("div",{className:"pixel-settings-list",children:[c.jsxs("div",{className:"pixel-setting-item",children:[c.jsx("span",{children:"FOCUS:"}),c.jsxs("div",{className:"pixel-setting-control",children:[c.jsx("button",{onClick:()=>Ot(Q<=5?1:Q-5),children:"◀"}),c.jsxs("span",{children:[Q,"M"]}),c.jsx("button",{onClick:()=>Ot(Q===1?5:Math.min(60,Q+5)),children:"▶"})]})]}),c.jsxs("div",{className:"pixel-setting-item",children:[c.jsx("span",{children:"BREAK:"}),c.jsxs("div",{className:"pixel-setting-control",children:[c.jsx("button",{onClick:()=>ct(Math.max(1,I-1)),children:"◀"}),c.jsxs("span",{children:[I,"M"]}),c.jsx("button",{onClick:()=>ct(Math.min(30,I+1)),children:"▶"})]})]}),c.jsx("button",{className:"pixel-btn primary",onClick:Mt,children:"SAVE CONFIG"})]})]})]}),c.jsxs("nav",{className:"pixel-nav",children:[c.jsx("button",{className:`pixel-nav-item ${X==="home"?"active":""}`,onClick:()=>w("home"),children:"HOME"}),c.jsx("button",{className:`pixel-nav-item ${X==="history"?"active":""}`,onClick:()=>w("history"),children:"LOG"}),c.jsx("button",{className:`pixel-nav-item ${X==="settings"?"active":""}`,onClick:()=>w("settings"),children:"OPT"})]}),c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .frame4-pixel {
          background: #1a1c2c;
          font-family: 'Press Start 2P', monospace;
          color: #f4f4f4;
          display: flex;
          flex-direction: column;
          image-rendering: pixelated;
        }

        .pixel-content {
          flex: 1;
          padding: 1rem;
          overflow-y: hidden;
          padding-bottom: 55px;
          display: flex;
          flex-direction: column;
        }

        .pixel-header, .pixel-tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 4px solid #5f574f;
        }

        .pixel-header h2, .pixel-tab-header h2 {
          margin: 0;
          font-size: 0.8rem;
          color: #ffcd75;
        }

        .pixel-badge {
          background: #38b764;
          color: #1a1c2c;
          padding: 0.2rem 0.4rem;
          font-size: 0.5rem;
        }

        .pixel-badge.break {
          background: #29adff;
        }

        /* Toast */
        .pixel-toast {
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          background: #38b764;
          color: #1a1c2c;
          padding: 0.5rem;
          font-size: 0.5rem;
          text-align: center;
          border: 4px solid #1a1c2c;
          z-index: 100;
        }

        /* Modal */
        .pixel-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 28, 44, 0.9);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .pixel-modal {
          width: 100%;
          background: #333c57;
          border: 4px solid #5f574f;
          padding: 4px;
        }

        .pixel-modal-border {
          border: 4px solid #ffcd75;
          padding: 1rem;
        }

        .pixel-modal h3 {
          margin: 0 0 0.5rem;
          font-size: 0.7rem;
          color: #ffcd75;
          text-align: center;
        }

        .pixel-modal p {
          font-size: 0.5rem;
          text-align: center;
          margin: 0 0 1rem;
        }

        .pixel-input {
          width: 100%;
          padding: 0.5rem;
          border: 4px solid #5f574f;
          background: #1a1c2c;
          color: #f4f4f4;
          font-family: inherit;
          font-size: 0.5rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .pixel-modal-btns {
          display: flex;
          gap: 0.5rem;
        }

        .pixel-modal-btns .pixel-btn {
          flex: 1;
        }

        /* Timer */
        .pixel-timer-box {
          background: #333c57;
          // border: 4px solid #5f574f;
          padding: 2rem 1rem;
          margin-bottom: 0;
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pixel-timer-display {
          background: #333c57;
    border: 4px dashed #ffcd75;
    padding: 2rem 1rem;
    margin-bottom: 1rem;
        }

        .pixel-time {
          font-size: 2.8rem;
          color: #ffcd75;
          letter-spacing: 6px;
        }

        .pixel-status {
          font-size: 0.6rem;
          margin-bottom: 1rem;
          color: #94b0c2;
        }

        .pixel-hearts {
          font-size: 1.2rem;
          letter-spacing: 6px;
        }

        /* Controls */
        .pixel-controls {
          display: flex;
          gap: 0.75rem;
          margin: 1rem 0;
        }

        .pixel-btn {
          background: #5f574f;
          border: 4px solid #333c57;
          color: #f4f4f4;
          padding: 0.75rem;
          font-family: inherit;
          font-size: 0.55rem;
          cursor: pointer;
          flex: 1;
          transition: all 0.1s;
        }

        .pixel-btn:hover {
          background: #94b0c2;
          color: #1a1c2c;
        }

        .pixel-btn:active {
          transform: scale(0.95);
        }

        .pixel-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pixel-btn.primary {
          background: #ff6b6b;
          border-color: #c92a2a;
        }

        .pixel-btn.primary:hover {
          background: #fa5252;
        }

        .pixel-btn.large {
          padding: 1rem;
          font-size: 0.7rem;
        }

        .pixel-btn.small {
          padding: 0.3rem 0.4rem;
          font-size: 0.4rem;
        }

        /* History */
        .pixel-history, .pixel-settings {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pixel-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .pixel-empty {
          text-align: center;
          padding: 2rem;
          font-size: 0.5rem;
          color: #5f574f;
        }

        .pixel-date-group {
          margin-bottom: 1rem;
        }

        .pixel-date-header {
          font-size: 0.5rem;
          color: #94b0c2;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .pixel-history-item {
          display: flex;
          align-items: center;
          background: #333c57;
          border: 2px solid #5f574f;
          padding: 0.4rem;
          margin-bottom: 0.25rem;
          font-size: 0.45rem;
        }

        .pixel-history-item .item-name {
          flex: 1;
          color: #ffcd75;
        }

        .pixel-history-item .item-duration {
          margin-right: 0.5rem;
        }

        .pixel-delete {
          background: #ff6b6b;
          border: 2px solid #c92a2a;
          color: #fff;
          width: 18px;
          height: 18px;
          font-family: inherit;
          font-size: 0.4rem;
          cursor: pointer;
        }

        /* Settings */
        .pixel-settings-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pixel-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #333c57;
          border: 2px solid #5f574f;
          padding: 0.5rem;
          font-size: 0.5rem;
        }

        .pixel-setting-control {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pixel-setting-control button {
          background: #5f574f;
          border: 2px solid #333c57;
          color: #f4f4f4;
          width: 24px;
          height: 24px;
          font-family: inherit;
          font-size: 0.5rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Bottom Nav */
        .pixel-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45px;
          background: #333c57;
          border-top: 4px solid #5f574f;
          display: flex;
          z-index: 10;
        }

        .pixel-nav-item {
          flex: 1;
          background: transparent;
          border: none;
          border-right: 2px solid #5f574f;
          color: #94b0c2;
          font-family: inherit;
          font-size: 0.5rem;
          cursor: pointer;
        }

        .pixel-nav-item:last-child {
          border-right: none;
        }

        .pixel-nav-item.active {
          background: #5f574f;
          color: #ffcd75;
        }
      `})]})},qh=()=>{const{timeLeft:T,isActive:R,isPaused:U,sessionType:d,elapsedTime:H,focusDuration:q,breakDuration:J,showSaveModal:ut,showToast:O,toastMessage:S,groupedSessions:B,toggleTimer:M,resetTimer:tt,saveSession:vt,cancelSave:pt,skipBreak:ht,manualSave:Rt,deleteSession:gt,clearAllSessions:Ht,updateSettings:bt,formatTime:At}=Ma(),[X,w]=L.useState("home"),[D,at]=L.useState(""),[Q,Ot]=L.useState(q),[I,ct]=L.useState(J),Dt=d==="focus"?q*60:J*60,Mt=(Dt-T)/Dt*100,[Tt,h]=L.useState(new Date);L.useEffect(()=>{const $=setInterval(()=>{h(new Date)},1e3);return()=>clearInterval($)},[]);const z=()=>{D.trim()&&(vt(D.trim()),at(""))},A=()=>{bt(Q,I),w("home")},st=$=>{const r=new Date().toISOString().split("T")[0],p=new Date(Date.now()-864e5).toISOString().split("T")[0];return $===r?"// TODAY":$===p?"// YESTERDAY":"// "+new Date($).toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()};return c.jsxs("div",{className:"frame-container frame5-cyber",children:[c.jsxs("div",{className:"cyber-bg",children:[c.jsx("div",{className:"cyber-grid"}),c.jsx("div",{className:"cyber-scanline"})]}),O&&c.jsxs("div",{className:"cyber-toast",children:[c.jsx(Bd,{size:14})," ",S]}),ut&&c.jsx("div",{className:"cyber-modal-overlay",children:c.jsxs("div",{className:"cyber-modal",children:[c.jsx("div",{className:"cyber-modal-header",children:c.jsx("span",{className:"cyber-glitch","data-text":"SAVE_SESSION",children:"SAVE_SESSION"})}),c.jsxs("p",{className:"cyber-modal-sub",children:["ELAPSED: ",Math.ceil(H/60)," CYCLES"]}),c.jsx("input",{type:"text",className:"cyber-input",placeholder:"ENTER_IDENTIFIER...",value:D,onChange:$=>at($.target.value)}),c.jsxs("div",{className:"cyber-modal-btns",children:[c.jsx("button",{className:"cyber-btn secondary",onClick:pt,children:c.jsx("span",{children:"ABORT"})}),c.jsx("button",{className:"cyber-btn primary",onClick:z,children:c.jsx("span",{children:"CONFIRM"})})]})]})}),c.jsxs("div",{className:"cyber-content",children:[X==="home"&&c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"cyber-header",children:[c.jsxs("div",{className:"cyber-logo",children:[c.jsx(Bd,{size:16}),c.jsx("span",{children:"NEURAL_FOCUS"})]}),c.jsx("div",{className:`cyber-status ${d}`,children:d==="focus"?"ACTIVE":"RECHARGE"})]}),c.jsx("div",{className:`cyber-tv-display ${R&&!U?d==="focus"?"focus-active":"break-active":""}`,children:c.jsxs("div",{className:"cyber-tv-frame",children:[c.jsxs("div",{className:"cyber-tv-screen",children:[c.jsx("div",{className:"cyber-tv-scanlines"}),c.jsxs("div",{className:"cyber-tv-content",children:[c.jsxs("div",{className:"cyber-tv-header",children:[c.jsx("span",{className:"cyber-tv-date",children:Tt.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).toUpperCase()}),c.jsx("span",{className:"cyber-tv-clock",children:Tt.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1})})]}),c.jsx("div",{className:"cyber-tv-timer",children:c.jsx("span",{className:"cyber-time",children:At(T)})}),c.jsxs("div",{className:"cyber-tv-status",children:[c.jsx("span",{className:`cyber-tv-mode ${d}`,children:d==="focus"?"◆ FOCUS MODE":"◇ BREAK MODE"}),c.jsx("span",{className:"cyber-tv-state",children:R?U?"PAUSED":"RUNNING":"STANDBY"})]}),c.jsxs("div",{className:"cyber-tv-progress",children:[c.jsx("div",{className:"cyber-tv-progress-bar",children:c.jsx("div",{className:"cyber-tv-progress-fill",style:{width:`${Mt}%`}})}),c.jsxs("span",{className:"cyber-tv-progress-text",children:[Math.round(Mt),"%"]})]})]})]}),c.jsx("div",{className:"cyber-tv-indicator"})]})}),c.jsxs("div",{className:"cyber-controls",children:[c.jsx("button",{className:"cyber-btn icon",onClick:tt,children:c.jsx(gs,{size:18})}),c.jsx("button",{className:"cyber-btn primary large",onClick:M,children:R&&!U?c.jsx(bs,{size:24}):c.jsx(ys,{size:24})}),d==="focus"?c.jsx("button",{className:"cyber-btn icon",onClick:Rt,disabled:H===0,children:c.jsx(vs,{size:18})}):c.jsx("button",{className:"cyber-btn icon",onClick:ht,children:c.jsx(xs,{size:18})})]})]}),X==="history"&&c.jsxs("div",{className:"cyber-history",children:[c.jsxs("header",{className:"cyber-tab-header",children:[c.jsx("span",{className:"cyber-glitch","data-text":"DATA_LOG",children:"DATA_LOG"}),Object.keys(B).length>0&&c.jsx("button",{className:"cyber-btn small",onClick:Ht,children:"PURGE"})]}),c.jsx("div",{className:"cyber-history-list",children:Object.keys(B).length===0?c.jsxs("div",{className:"cyber-empty",children:[c.jsx("div",{className:"cyber-empty-icon",children:"∅"}),c.jsx("p",{children:"NO_DATA_FOUND"})]}):Object.entries(B).map(([$,r])=>c.jsxs("div",{className:"cyber-date-group",children:[c.jsx("div",{className:"cyber-date-header",children:st($)}),r.map(p=>c.jsxs("div",{className:"cyber-history-item",children:[c.jsx("div",{className:"cyber-item-bar"}),c.jsxs("div",{className:"cyber-item-info",children:[c.jsx("span",{className:"item-name",children:p.name}),c.jsxs("span",{className:"item-duration",children:[p.duration," CYCLES"]})]}),c.jsx("button",{className:"cyber-delete",onClick:()=>gt(p.id),children:c.jsx(Ss,{size:14})})]},p.id))]},$))})]}),X==="settings"&&c.jsxs("div",{className:"cyber-settings",children:[c.jsx("header",{className:"cyber-tab-header",children:c.jsx("span",{className:"cyber-glitch","data-text":"CONFIG",children:"CONFIG"})}),c.jsxs("div",{className:"cyber-settings-list",children:[c.jsxs("div",{className:"cyber-setting-item",children:[c.jsx("span",{children:"FOCUS_DURATION"}),c.jsxs("div",{className:"cyber-setting-control",children:[c.jsx("button",{onClick:()=>Ot(Q<=5?1:Q-5),children:"−"}),c.jsxs("span",{children:[Q,"m"]}),c.jsx("button",{onClick:()=>Ot(Q===1?5:Math.min(60,Q+5)),children:"+"})]})]}),c.jsxs("div",{className:"cyber-setting-item",children:[c.jsx("span",{children:"BREAK_DURATION"}),c.jsxs("div",{className:"cyber-setting-control",children:[c.jsx("button",{onClick:()=>ct(Math.max(1,I-1)),children:"−"}),c.jsxs("span",{children:[I,"m"]}),c.jsx("button",{onClick:()=>ct(Math.min(30,I+1)),children:"+"})]})]}),c.jsx("button",{className:"cyber-btn primary full",onClick:A,children:"APPLY_CHANGES"})]})]})]}),c.jsxs("nav",{className:"cyber-nav",children:[c.jsxs("button",{className:`cyber-nav-item ${X==="home"?"active":""}`,onClick:()=>w("home"),children:[c.jsx(hs,{size:16}),c.jsx("span",{children:"HOME"})]}),c.jsxs("button",{className:`cyber-nav-item ${X==="history"?"active":""}`,onClick:()=>w("history"),children:[c.jsx(Oa,{size:16}),c.jsx("span",{children:"LOG"})]}),c.jsxs("button",{className:`cyber-nav-item ${X==="settings"?"active":""}`,onClick:()=>w("settings"),children:[c.jsx(ps,{size:16}),c.jsx("span",{children:"CFG"})]})]}),c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Share+Tech+Mono&display=swap');
        
        .frame5-cyber {
          background: #0a0a0f;
          font-family: 'Share Tech Mono', monospace;
          color: #00fff9;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .cyber-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(rgba(0, 255, 249, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 249, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .cyber-scanline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(
            transparent 50%,
            rgba(0, 0, 0, 0.1) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
        }

        .cyber-content {
          position: relative;
          z-index: 1;
          flex: 1;
          padding: 1rem;
          overflow-y: hidden;
          padding-bottom: 60px;
          display: flex;
          flex-direction: column;
        }

        .cyber-header, .cyber-tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .cyber-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .cyber-glitch {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          position: relative;
        }

        .cyber-status {
          background: rgba(0, 255, 249, 0.1);
          border: 1px solid #00fff9;
          padding: 0.2rem 0.6rem;
          font-size: 0.65rem;
          text-transform: uppercase;
        }

        .cyber-status.break {
          border-color: #ff00ff;
          color: #ff00ff;
          background: rgba(255, 0, 255, 0.1);
        }

        /* Toast */
        .cyber-toast {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          background: linear-gradient(90deg, rgba(0, 255, 249, 0.2), rgba(255, 0, 255, 0.2));
          border: 1px solid #00fff9;
          color: #00fff9;
          padding: 0.6rem;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 100;
        }

        /* Modal */
        .cyber-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 15, 0.95);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .cyber-modal {
          width: 100%;
          background: linear-gradient(135deg, rgba(0, 255, 249, 0.05), rgba(255, 0, 255, 0.05));
          border: 1px solid #00fff9;
          padding: 1.5rem;
        }

        .cyber-modal-header {
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .cyber-modal-sub {
          text-align: center;
          font-size: 0.7rem;
          color: #ff00ff;
          margin: 0 0 1rem;
        }

        .cyber-input {
          width: 100%;
          padding: 0.75rem;
          background: rgba(0, 255, 249, 0.05);
          border: 1px solid #00fff9;
          color: #00fff9;
          font-family: inherit;
          font-size: 0.8rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .cyber-input::placeholder {
          color: rgba(0, 255, 249, 0.4);
        }

        .cyber-modal-btns {
          display: flex;
          gap: 0.75rem;
        }

        .cyber-modal-btns .cyber-btn {
          flex: 1;
        }

        /* Timer */
        /* TV Display */
        .cyber-tv-display {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .cyber-tv-frame {
          background: linear-gradient(145deg, #1a1a2e, #0a0a15);
          border: 3px solid #333;
          border-radius: 12px;
          padding: 12px;
          box-shadow: 
            inset 0 0 20px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(0, 255, 249, 0.1);
          position: relative;
          width: 100%;
        }

        .cyber-tv-screen {
          background: #0a0a0f;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          padding: 1rem;
        }

        .cyber-tv-scanlines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.3) 2px,
            rgba(0, 0, 0, 0.3) 4px
          );
          pointer-events: none;
          z-index: 5;
        }

        .cyber-tv-content {
          position: relative;
          z-index: 1;
        }

        .cyber-tv-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0, 255, 249, 0.2);
        }

        .cyber-tv-date {
          color: #ff00ff;
        }

        .cyber-tv-clock {
          color: #00fff9;
          font-family: 'Orbitron', sans-serif;
        }

        .cyber-tv-timer {
          text-align: center;
          padding: 1rem 0;
        }

        .cyber-time {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          display: block;
          text-shadow: 0 0 20px rgba(0, 255, 249, 0.5);
        }

        .cyber-tv-status {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          margin-bottom: 0.75rem;
        }

        .cyber-tv-mode {
          color: #00fff9;
        }

        .cyber-tv-mode.break {
          color: #ff00ff;
        }

        .cyber-tv-state {
          color: #666;
        }

        .cyber-tv-progress {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cyber-tv-progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(0, 255, 249, 0.1);
          border: 1px solid rgba(0, 255, 249, 0.3);
          overflow: hidden;
        }

        .cyber-tv-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00fff9, #ff00ff);
          transition: width 1s linear;
        }

        .cyber-tv-progress-text {
          font-size: 0.6rem;
          color: #00fff9;
          min-width: 35px;
          text-align: right;
        }

        .cyber-tv-indicator {
          width: 8px;
          height: 8px;
          background: #333;
          border-radius: 50%;
          position: absolute;
          bottom: 6px;
          right: 12px;
        }

        /* Focus mode animation */
        .cyber-tv-display.focus-active .cyber-tv-frame {
          animation: focus-glow 2s ease-in-out infinite;
        }

        .cyber-tv-display.focus-active .cyber-tv-indicator {
          background: #00fff9;
          animation: indicator-pulse 1s ease-in-out infinite;
        }

        @keyframes focus-glow {
          0%, 100% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 15px rgba(0, 255, 249, 0.2),
              0 0 30px rgba(0, 255, 249, 0.1);
          }
          50% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 25px rgba(0, 255, 249, 0.4),
              0 0 50px rgba(0, 255, 249, 0.2);
          }
        }

        /* Break mode animation */
        .cyber-tv-display.break-active .cyber-tv-frame {
          animation: break-glow 2s ease-in-out infinite;
        }

        .cyber-tv-display.break-active .cyber-tv-indicator {
          background: #ff00ff;
          animation: indicator-pulse 1s ease-in-out infinite;
        }

        @keyframes break-glow {
          0%, 100% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 15px rgba(255, 0, 255, 0.2),
              0 0 30px rgba(255, 0, 255, 0.1);
          }
          50% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 25px rgba(255, 0, 255, 0.4),
              0 0 50px rgba(255, 0, 255, 0.2);
          }
        }

        @keyframes indicator-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Controls */
        .cyber-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: auto;
          padding-bottom: 1rem;
        }

        .cyber-btn {
          background: transparent;
          border: 1px solid #00fff9;
          color: #00fff9;
          padding: 0.5rem 1rem;
          font-family: inherit;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .cyber-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 249, 0.2), transparent);
          transition: left 0.3s;
        }

        .cyber-btn:hover::before {
          left: 100%;
        }

        .cyber-btn:hover {
          background: rgba(0, 255, 249, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 249, 0.3);
        }

        .cyber-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .cyber-btn.primary {
          background: linear-gradient(90deg, rgba(0, 255, 249, 0.2), rgba(255, 0, 255, 0.2));
          border-color: #ff00ff;
          color: #ff00ff;
        }

        .cyber-btn.primary:hover {
          box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
        }

        .cyber-btn.secondary {
          border-color: #666;
          color: #666;
        }

        .cyber-btn.icon {
          width: 55px;
          height: 55px;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cyber-btn.large {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          border-width: 2px;
        }

        .cyber-btn.small {
          padding: 0.3rem 0.6rem;
          font-size: 0.6rem;
        }

        .cyber-btn.full {
          width: 100%;
          margin-top: 0.5rem;
        }

        /* History */
        .cyber-history, .cyber-settings {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .cyber-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .cyber-empty {
          text-align: center;
          padding: 2rem;
          color: #666;
        }

        .cyber-empty-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .cyber-date-group {
          margin-bottom: 1rem;
        }

        .cyber-date-header {
          font-size: 0.65rem;
          color: #ff00ff;
          margin-bottom: 0.5rem;
        }

        .cyber-history-item {
          display: flex;
          align-items: center;
          background: rgba(0, 255, 249, 0.05);
          border-left: 3px solid #00fff9;
          padding: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .cyber-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cyber-item-info .item-name {
          font-size: 0.75rem;
        }

        .cyber-item-info .item-duration {
          font-size: 0.6rem;
          color: #ff00ff;
        }

        .cyber-delete {
          background: transparent;
          border: 1px solid #ff0055;
          color: #ff0055;
          padding: 6px;
          cursor: pointer;
        }

        /* Settings */
        .cyber-settings-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cyber-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 255, 249, 0.05);
          border: 1px solid rgba(0, 255, 249, 0.2);
          padding: 0.75rem;
          font-size: 0.7rem;
        }

        .cyber-setting-control {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cyber-setting-control button {
          width: 28px;
          height: 28px;
          background: transparent;
          border: 1px solid #00fff9;
          color: #00fff9;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cyber-setting-control span {
          min-width: 40px;
          text-align: center;
          color: #ff00ff;
        }

        /* Bottom Nav */
        .cyber-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55px;
          background: rgba(10, 10, 15, 0.95);
          border-top: 1px solid rgba(0, 255, 249, 0.3);
          display: flex;
          z-index: 10;
        }

        .cyber-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: transparent;
          border: none;
          color: #666;
          font-family: inherit;
          font-size: 0.55rem;
          cursor: pointer;
        }

        .cyber-nav-item.active {
          color: #00fff9;
          background: rgba(0, 255, 249, 0.1);
        }
      `}),c.jsx("svg",{width:"0",height:"0",children:c.jsx("defs",{children:c.jsxs("linearGradient",{id:"cyber-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[c.jsx("stop",{offset:"0%",stopColor:"#00fff9"}),c.jsx("stop",{offset:"100%",stopColor:"#ff00ff"})]})})})]})},Gh=()=>{const{timeLeft:T,isActive:R,isPaused:U,sessionType:d,elapsedTime:H,focusDuration:q,breakDuration:J,showSaveModal:ut,showToast:O,toastMessage:S,groupedSessions:B,toggleTimer:M,resetTimer:tt,saveSession:vt,cancelSave:pt,skipBreak:ht,manualSave:Rt,deleteSession:gt,clearAllSessions:Ht,updateSettings:bt,formatTime:At}=Ma(),[X,w]=L.useState("home"),[D,at]=L.useState(""),[Q,Ot]=L.useState(q),[I,ct]=L.useState(J),[Dt,Mt]=L.useState([]),[Tt,h]=L.useState(!0);L.useEffect(()=>{const k=setInterval(()=>{h(W=>!W)},500);return()=>clearInterval(k)},[]);const z=(k,W="output")=>{Mt(It=>[...It.slice(-15),{text:k,type:W,id:Date.now()}])},A=()=>{D.trim()&&(z(`$ save-session --name="${D.trim()}"`,"command"),z(`[OK] Session "${D.trim()}" saved successfully.`,"success"),vt(D.trim()),at(""))},st=()=>{z("$ cancel-save","command"),z("[INFO] Save cancelled. Starting break...","info"),pt()},$=()=>{R?U?(z("$ resume-timer","command"),z("[OK] Timer resumed.","success")):(z("$ pause-timer","command"),z("[INFO] Timer paused.","info")):(z(`$ start-timer --type=${d} --duration=${d==="focus"?q:J}m`,"command"),z("[OK] Timer started.","success")),M()},r=()=>{z("$ reset-timer","command"),z("[OK] Timer reset to default.","success"),tt()},p=()=>{z("$ trigger-save","command"),Rt()},E=()=>{z("$ skip-break","command"),z("[OK] Break skipped. Ready for focus.","success"),ht()},_=()=>{z(`$ config --focus=${Q}m --break=${I}m`,"command"),z("[OK] Configuration updated.","success"),bt(Q,I),w("home")},K=()=>{Mt([])},et=k=>{const W=new Date().toISOString().split("T")[0],It=new Date(Date.now()-864e5).toISOString().split("T")[0];return k===W?"today":k===It?"yesterday":k},G=()=>{const k=d==="focus"?q*60:J*60,W=Math.round((k-T)/k*20);return`[${"█".repeat(W)}${"░".repeat(20-W)}] ${Math.round((k-T)/k*100)}%`};return c.jsxs("div",{className:"frame-container frame6-terminal",children:[c.jsx("div",{className:"term-header",children:c.jsx("span",{className:"term-title",children:"pomodoro@focus:~"})}),c.jsxs("div",{className:"term-content",children:[X==="home"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"term-output",children:[c.jsx("div",{className:"term-line system",children:"╔══════════════════════════════════════╗"}),c.jsx("div",{className:"term-line system",children:"║  POMODORO TIMER v2.0.1               ║"}),c.jsx("div",{className:"term-line system",children:"║  Type 'help' for available commands  ║"}),c.jsx("div",{className:"term-line system",children:"╚══════════════════════════════════════╝"}),c.jsx("div",{className:"term-line"}),c.jsxs("div",{className:"term-line",children:[c.jsx("span",{className:"term-label",children:"STATUS:"}),c.jsxs("span",{className:`term-value ${d}`,children:[d.toUpperCase()," MODE"]})]}),c.jsxs("div",{className:"term-line",children:[c.jsx("span",{className:"term-label",children:"STATE:"}),c.jsx("span",{className:"term-value",children:R?U?"PAUSED":"RUNNING":"IDLE"})]}),c.jsx("div",{className:"term-line"}),c.jsx("div",{className:"term-line timer-display",children:c.jsx("span",{className:"term-time",children:At(T)})}),c.jsx("div",{className:"term-line progress",children:G()}),c.jsx("div",{className:"term-line"}),Dt.map(k=>c.jsx("div",{className:`term-line ${k.type}`,children:k.text},k.id))]}),ut&&c.jsxs("div",{className:"term-dialog",children:[c.jsx("div",{className:"term-line system",children:"┌─ SAVE SESSION ─────────────────────┐"}),c.jsxs("div",{className:"term-line",children:["│ Session completed: ",Math.ceil(H/60)," minutes"]}),c.jsx("div",{className:"term-line",children:"│ Enter session name:"}),c.jsxs("div",{className:"term-line input-line",children:["│ ",">",c.jsx("input",{type:"text",className:"term-input",value:D,onChange:k=>at(k.target.value),placeholder:"session_name",autoFocus:!0})]}),c.jsx("div",{className:"term-line system",children:"└──────────────────────────────────────┘"}),c.jsxs("div",{className:"term-actions",children:[c.jsx("button",{className:"term-btn-action",onClick:st,children:"[C]ancel"}),c.jsx("button",{className:"term-btn-action primary",onClick:A,children:"[S]ave"})]})]}),O&&c.jsxs("div",{className:"term-line success",children:["[SUCCESS] ",S]})]}),X==="history"&&c.jsxs("div",{className:"term-history",children:[c.jsx("div",{className:"term-line command",children:"$ ls -la ~/sessions/"}),c.jsx("div",{className:"term-line"}),Object.keys(B).length===0?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"term-line info",children:"[INFO] No sessions found."}),c.jsx("div",{className:"term-line",children:"total 0"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"term-line",children:["total ",Object.values(B).flat().length]}),Object.entries(B).map(([k,W])=>c.jsxs("div",{className:"term-date-group",children:[c.jsxs("div",{className:"term-line comment",children:["# ",et(k)]}),W.map(It=>c.jsxs("div",{className:"term-history-item",children:[c.jsx("span",{className:"perm",children:"-rw-r--r--"}),c.jsxs("span",{className:"size",children:[It.duration,"m"]}),c.jsx("span",{className:"name",children:It.name}),c.jsx("button",{className:"term-rm",onClick:()=>gt(It.id),children:"rm"})]},It.id))]},k)),Object.keys(B).length>0&&c.jsx("div",{className:"term-line",children:c.jsx("button",{className:"term-cmd danger",onClick:Ht,children:"rm -rf ~/sessions/*"})})]})]}),X==="settings"&&c.jsxs("div",{className:"term-settings",children:[c.jsx("div",{className:"term-line command",children:"$ cat /etc/pomodoro.conf"}),c.jsx("div",{className:"term-line"}),c.jsx("div",{className:"term-line comment",children:"# Pomodoro Configuration File"}),c.jsx("div",{className:"term-line comment",children:"# Edit values below"}),c.jsx("div",{className:"term-line"}),c.jsxs("div",{className:"term-config-item",children:[c.jsx("span",{className:"config-key",children:"FOCUS_DURATION="}),c.jsx("button",{onClick:()=>Ot(Q<=5?1:Q-5),children:"[-]"}),c.jsx("span",{className:"config-value",children:Q}),c.jsx("button",{onClick:()=>Ot(Q===1?5:Math.min(60,Q+5)),children:"[+]"}),c.jsx("span",{className:"config-comment",children:"# minutes"})]}),c.jsxs("div",{className:"term-config-item",children:[c.jsx("span",{className:"config-key",children:"BREAK_DURATION="}),c.jsx("button",{onClick:()=>ct(Math.max(1,I-1)),children:"[-]"}),c.jsx("span",{className:"config-value",children:I}),c.jsx("button",{onClick:()=>ct(Math.min(30,I+1)),children:"[+]"}),c.jsx("span",{className:"config-comment",children:"# minutes"})]}),c.jsx("div",{className:"term-line"}),c.jsx("button",{className:"term-cmd primary",onClick:_,children:":wq (save & quit)"})]})]}),X==="home"&&c.jsxs("div",{className:"term-command-bar",children:[c.jsx("button",{className:"term-cmd",onClick:K,children:"cls"}),c.jsx("button",{className:"term-cmd",onClick:r,children:"reset"}),c.jsx("button",{className:"term-cmd primary",onClick:$,children:R&&!U?"pause":"start"}),d==="focus"?c.jsx("button",{className:"term-cmd",onClick:p,disabled:H===0,children:"save"}):c.jsx("button",{className:"term-cmd",onClick:E,children:"skip"})]}),c.jsxs("nav",{className:"term-nav",children:[c.jsx("button",{className:`term-tab ${X==="home"?"active":""}`,onClick:()=>w("home"),children:"[1] timer"}),c.jsx("button",{className:`term-tab ${X==="history"?"active":""}`,onClick:()=>w("history"),children:"[2] logs"}),c.jsx("button",{className:`term-tab ${X==="settings"?"active":""}`,onClick:()=>w("settings"),children:"[3] config"})]}),c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap');
        
        .frame6-terminal {
          background: #0c0c0c;
          font-family: 'IBM Plex Mono', 'Consolas', monospace;
          color: #00ff00;
          display: flex;
          flex-direction: column;
          font-size: 12px;
          line-height: 1.4;
        }

        .term-header {
          background: #1a1a1a;
          padding: 6px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #333;
        }

        .term-title {
          font-size: 11px;
          color: #888;
        }

        .term-controls {
          display: flex;
          gap: 8px;
        }

        .term-controls .term-btn {
          font-size: 12px;
          cursor: pointer;
        }

        .term-controls .minimize { color: #ffbd2e; }
        .term-controls .maximize { color: #28c840; }
        .term-controls .close { color: #ff5f56; }

        .term-content {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          padding-bottom: 80px;
        }

        .term-output {
          margin-bottom: 10px;
        }

        .term-line {
          white-space: pre;
          margin-bottom: 2px;
        }

        .term-line.system {
          color: #0087ff;
        }

        .term-line.command {
          color: #ffff00;
        }

        .term-line.comment {
          color: #666;
        }

        .term-line.success {
          color: #00ff00;
        }

        .term-line.info {
          color: #00bfff;
        }

        .term-line.error {
          color: #ff4444;
        }

        .term-line.timer-display {
          text-align: center;
          margin: 10px 0;
        }

        .term-time {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }

        .term-line.progress {
          text-align: center;
          color: #00bfff;
          font-size: 11px;
        }

        .term-label {
          color: #888;
          margin-right: 8px;
        }

        .term-value {
          color: #00ff00;
        }

        .term-value.focus {
          color: #ff6b6b;
        }

        .term-value.break {
          color: #4ecdc4;
        }

        /* Dialog */
        .term-dialog {
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 10px;
          margin: 10px 0;
        }

        .term-input {
          background: transparent;
          border: none;
          color: #00ff00;
          font-family: inherit;
          font-size: inherit;
          outline: none;
          width: calc(100% - 20px);
        }

        .term-input::placeholder {
          color: #444;
        }

        .term-actions {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .term-btn-action {
          background: transparent;
          border: 1px solid #00ff00;
          color: #00ff00;
          padding: 4px 12px;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
        }

        .term-btn-action.primary {
          background: #00ff00;
          color: #0c0c0c;
        }

        /* Command bar */
        .term-command-bar {
          position: absolute;
          bottom: 32px;
          left: 0;
          right: 0;
          display: flex;
          gap: 4px;
          padding: 6px 10px;
          background: #0c0c0c;
          border-top: 1px solid #333;
          z-index: 10;
        }

        .term-cmd {
          flex: 1;
          background: #1a1a1a;
          border: 1px solid #333;
          color: #00ff00;
          padding: 8px;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.1s;
        }

        .term-cmd:hover {
          background: #333;
        }

        .term-cmd:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .term-cmd.primary {
          border-color: #00ff00;
          background: rgba(0, 255, 0, 0.1);
        }

        .term-cmd.danger {
          border-color: #ff4444;
          color: #ff4444;
        }

        /* History */
        .term-history-item {
          display: flex;
          gap: 12px;
          font-size: 11px;
          padding: 2px 0;
        }

        .term-history-item .perm {
          color: #888;
        }

        .term-history-item .size {
          color: #00bfff;
          min-width: 30px;
        }

        .term-history-item .name {
          color: #00ff00;
          flex: 1;
        }

        .term-rm {
          background: transparent;
          border: none;
          color: #ff4444;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
          padding: 0 4px;
        }

        .term-rm:hover {
          background: #ff4444;
          color: #0c0c0c;
        }

        /* Settings */
        .term-config-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .config-key {
          color: #ffff00;
        }

        .config-value {
          color: #00ff00;
          min-width: 30px;
          text-align: center;
        }

        .config-comment {
          color: #666;
          margin-left: auto;
        }

        .term-config-item button {
          background: #1a1a1a;
          border: 1px solid #333;
          color: #00ff00;
          padding: 2px 6px;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        /* Navigation */
        .term-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 32px;
          background: #1a1a1a;
          border-top: 1px solid #333;
          display: flex;
          z-index: 10;
        }

        .term-tab {
          flex: 1;
          background: transparent;
          border: none;
          border-right: 1px solid #333;
          color: #666;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        .term-tab:last-child {
          border-right: none;
        }

        .term-tab.active {
          background: #0c0c0c;
          color: #00ff00;
        }

        .term-tab:hover {
          color: #00ff00;
        }
      `})]})};function Xh(){return c.jsxs("div",{className:"app-container",children:[c.jsxs("div",{className:"frames-grid",children:[c.jsx(Rh,{}),c.jsx(Hh,{}),c.jsx(Bh,{}),c.jsx(Yh,{}),c.jsx(qh,{}),c.jsx(Gh,{})]}),c.jsx("footer",{className:"app-footer",children:"- Vibe Coded and Design by MHK -"})]})}gh.createRoot(document.getElementById("root")).render(c.jsx(L.StrictMode,{children:c.jsx(Xh,{})}));
