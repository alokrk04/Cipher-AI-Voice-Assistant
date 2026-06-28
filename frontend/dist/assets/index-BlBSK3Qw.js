var P_=Object.defineProperty;var L_=(s,e,n)=>e in s?P_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Xn=(s,e,n)=>L_(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var ac={exports:{}},wo={},lc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function b_(){if(up)return ft;up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(U,ne,De){this.props=U,this.context=ne,this.refs=A,this.updater=De||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function I(U,ne,De){this.props=U,this.context=ne,this.refs=A,this.updater=De||y}var D=I.prototype=new g;D.constructor=I,E(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,$=Object.prototype.hasOwnProperty,O={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function X(U,ne,De){var K,ue={},Me=null,ve=null;if(ne!=null)for(K in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)$.call(ne,K)&&!N.hasOwnProperty(K)&&(ue[K]=ne[K]);var we=arguments.length-2;if(we===1)ue.children=De;else if(1<we){for(var Ue=Array(we),Ke=0;Ke<we;Ke++)Ue[Ke]=arguments[Ke+2];ue.children=Ue}if(U&&U.defaultProps)for(K in we=U.defaultProps,we)ue[K]===void 0&&(ue[K]=we[K]);return{$$typeof:s,type:U,key:Me,ref:ve,props:ue,_owner:O.current}}function P(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(De){return ne[De]})}var oe=/\/+/g;function ee(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ne.toString(36)}function fe(U,ne,De,K,ue){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case s:case e:ve=!0}}if(ve)return ve=U,ue=ue(ve),U=K===""?"."+ee(ve,0):K,C(ue)?(De="",U!=null&&(De=U.replace(oe,"$&/")+"/"),fe(ue,ne,De,"",function(Ke){return Ke})):ue!=null&&(R(ue)&&(ue=P(ue,De+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+U)),ne.push(ue)),1;if(ve=0,K=K===""?".":K+":",C(U))for(var we=0;we<U.length;we++){Me=U[we];var Ue=K+ee(Me,we);ve+=fe(Me,ne,De,Ue,ue)}else if(Ue=_(U),typeof Ue=="function")for(U=Ue.call(U),we=0;!(Me=U.next()).done;)Me=Me.value,Ue=K+ee(Me,we++),ve+=fe(Me,ne,De,Ue,ue);else if(Me==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(U,ne,De){if(U==null)return U;var K=[],ue=0;return fe(U,K,"","",function(Me){return ne.call(De,Me,ue++)}),K}function se(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(De){(U._status===0||U._status===-1)&&(U._status=1,U._result=De)},function(De){(U._status===0||U._status===-1)&&(U._status=2,U._result=De)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},k={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(U,ne,De){he(U,function(){ne.apply(this,arguments)},De)},count:function(U){var ne=0;return he(U,function(){ne++}),ne},toArray:function(U){return he(U,function(ne){return ne})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=S,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=re,ft.cloneElement=function(U,ne,De){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var K=E({},U.props),ue=U.key,Me=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=O.current),ne.key!==void 0&&(ue=""+ne.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(Ue in ne)$.call(ne,Ue)&&!N.hasOwnProperty(Ue)&&(K[Ue]=ne[Ue]===void 0&&we!==void 0?we[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)K.children=De;else if(1<Ue){we=Array(Ue);for(var Ke=0;Ke<Ue;Ke++)we[Ke]=arguments[Ke+2];K.children=we}return{$$typeof:s,type:U.type,key:ue,ref:Me,props:K,_owner:ve}},ft.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ft.createElement=X,ft.createFactory=function(U){var ne=X.bind(null,U);return ne.type=U,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:d,render:U}},ft.isValidElement=R,ft.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:se}},ft.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},ft.startTransition=function(U){var ne=k.transition;k.transition={};try{U()}finally{k.transition=ne}},ft.unstable_act=re,ft.useCallback=function(U,ne){return le.current.useCallback(U,ne)},ft.useContext=function(U){return le.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ft.useEffect=function(U,ne){return le.current.useEffect(U,ne)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(U,ne,De){return le.current.useImperativeHandle(U,ne,De)},ft.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},ft.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},ft.useMemo=function(U,ne){return le.current.useMemo(U,ne)},ft.useReducer=function(U,ne,De){return le.current.useReducer(U,ne,De)},ft.useRef=function(U){return le.current.useRef(U)},ft.useState=function(U){return le.current.useState(U)},ft.useSyncExternalStore=function(U,ne,De){return le.current.useSyncExternalStore(U,ne,De)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var cp;function Df(){return cp||(cp=1,lc.exports=b_()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function D_(){if(fp)return wo;fp=1;var s=Df(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,x={},_=null,y=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(y=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(x[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:d,key:_,ref:y,props:x,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var dp;function U_(){return dp||(dp=1,ac.exports=D_()),ac.exports}var zt=U_(),Qe=Df(),Xa={},uc={exports:{}},wn={},cc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function I_(){return hp||(hp=1,(function(s){function e(k,ae){var re=k.length;k.push(ae);e:for(;0<re;){var U=re-1>>>1,ne=k[U];if(0<a(ne,ae))k[U]=ae,k[re]=ne,re=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ae=k[0],re=k.pop();if(re!==ae){k[0]=re;e:for(var U=0,ne=k.length,De=ne>>>1;U<De;){var K=2*(U+1)-1,ue=k[K],Me=K+1,ve=k[Me];if(0>a(ue,re))Me<ne&&0>a(ve,ue)?(k[U]=ve,k[Me]=re,U=Me):(k[U]=ue,k[K]=re,U=K);else if(Me<ne&&0>a(ve,re))k[U]=ve,k[Me]=re,U=Me;else break e}}return ae}function a(k,ae){var re=k.sortIndex-ae.sortIndex;return re!==0?re:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,x=null,_=3,y=!1,E=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=k)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(k){if(A=!1,D(k),!E)if(n(p)!==null)E=!0,se($);else{var ae=n(m);ae!==null&&le(C,ae.startTime-k)}}function $(k,ae){E=!1,A&&(A=!1,g(X),X=-1),y=!0;var re=_;try{for(D(ae),x=n(p);x!==null&&(!(x.expirationTime>ae)||k&&!B());){var U=x.callback;if(typeof U=="function"){x.callback=null,_=x.priorityLevel;var ne=U(x.expirationTime<=ae);ae=s.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(p)&&r(p),D(ae)}else r(p);x=n(p)}if(x!==null)var De=!0;else{var K=n(m);K!==null&&le(C,K.startTime-ae),De=!1}return De}finally{x=null,_=re,y=!1}}var O=!1,N=null,X=-1,P=5,R=-1;function B(){return!(s.unstable_now()-R<P)}function oe(){if(N!==null){var k=s.unstable_now();R=k;var ae=!0;try{ae=N(!0,k)}finally{ae?ee():(O=!1,N=null)}}else O=!1}var ee;if(typeof I=="function")ee=function(){I(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=oe,ee=function(){he.postMessage(null)}}else ee=function(){S(oe,0)};function se(k){N=k,O||(O=!0,ee())}function le(k,ae){X=S(function(){k(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,se($))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return k()}finally{_=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=_;_=k;try{return ae()}finally{_=re}},s.unstable_scheduleCallback=function(k,ae,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,k={id:v++,callback:ae,priorityLevel:k,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(A?(g(X),X=-1):A=!0,le(C,re-U))):(k.sortIndex=ne,e(p,k),E||y||(E=!0,se($))),k},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(k){var ae=_;return function(){var re=_;_=ae;try{return k.apply(this,arguments)}finally{_=re}}}})(fc)),fc}var pp;function N_(){return pp||(pp=1,cc.exports=I_()),cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function F_(){if(mp)return wn;mp=1;var s=Df(),e=N_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(t){return p.call(x,t)?!0:p.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,c,l)&&(o=null),l||c===null?_(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var De=!1;function K(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var l=Z}Reflect.construct(t,[],i)}else{try{i.call()}catch(Z){l=Z}t.call(i.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var c=Z.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,b=h.length-1;1<=M&&0<=b&&c[M]!==h[b];)b--;for(;1<=M&&0<=b;M--,b--)if(c[M]!==h[b]){if(M!==1||b!==1)do if(M--,b--,0>b||c[M]!==h[b]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=b);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function ue(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case O:return"Portal";case P:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){t._valueTracker||(t._valueTracker=Ke(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function W(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function dn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){dt(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Et(t,i.type,o):i.hasOwnProperty("defaultValue")&&Et(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Et(t,i,o){(i!=="number"||Lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ye=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ye(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function pe(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ie=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Ze(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Oe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,ie=null,de=null;function Le(t){if(t=uo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=oa(i),Re(t.stateNode,t.type,i))}}function Pe(t){ie?de?de.push(t):de=[t]:ie=t}function rt(){if(ie){var t=ie,i=de;if(de=ie=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Dt(t,i){return t(i)}function Xt(){}var gt=!1;function vn(t,i,o){if(gt)return t(i,o);gt=!0;try{return Dt(t,i,o)}finally{gt=!1,(ie!==null||de!==null)&&(Xt(),rt())}}function hn(t,i){var o=t.stateNode;if(o===null)return null;var l=oa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Kr=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Kr=!1}function vi(t,i,o,l,c,h,M,b,F){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(o,Z)}catch(_e){this.onError(_e)}}var xi=!1,yr=null,Mr=!1,Xi=null,zo={onError:function(t){xi=!0,yr=t}};function Zr(t,i,o,l,c,h,M,b,F){xi=!1,yr=null,vi.apply(zo,arguments)}function Ho(t,i,o,l,c,h,M,b,F){if(Zr.apply(this,arguments),xi){if(xi){var Z=yr;xi=!1,yr=null}else throw Error(n(198));Mr||(Mr=!0,Xi=Z)}}function ci(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Vo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Go(t){if(ci(t)!==t)throw Error(n(188))}function Pl(t){var i=t.alternate;if(!i){if(i=ci(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Go(c),t;if(h===l)return Go(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,b=c.child;b;){if(b===o){M=!0,o=c,l=h;break}if(b===l){M=!0,l=c,o=h;break}b=b.sibling}if(!M){for(b=h.child;b;){if(b===o){M=!0,o=h,l=c;break}if(b===l){M=!0,l=h,o=c;break}b=b.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function w(t){return t=Pl(t),t!==null?V(t):null}function V(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=V(t);if(i!==null)return i;t=t.sibling}return null}var Q=e.unstable_scheduleCallback,J=e.unstable_cancelCallback,G=e.unstable_shouldYield,Te=e.unstable_requestPaint,ye=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,mt=e.unstable_IdlePriority,yt=null,pt=null;function rn(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(yt,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,Xe=Math.log,$n=Math.LN2;function xt(t){return t>>>=0,t===0?32:31-(Xe(t)/$n|0)|0}var sn=64,Kn=4194304;function Yt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var b=M&~c;b!==0?l=Yt(b):(h&=M,h!==0&&(l=Yt(h)))}else M=o&~c,M!==0?l=Yt(M):h!==0&&(l=Yt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Ct(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function On(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),b=1<<M,F=c[M];F===-1?((b&o)===0||(b&l)!==0)&&(c[M]=Ct(b,i)):F<=i&&(t.expiredLanes|=b),h&=~b}}function Si(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=sn;return sn<<=1,(sn&4194240)===0&&(sn=64),t}function kn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function xn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Wo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Ll(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Tt=0;function Hf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Vf,bl,Gf,Wf,Xf,Dl=!1,Xo=[],Yi=null,qi=null,ji=null,qs=new Map,js=new Map,$i=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(i.pointerId)}}function $s(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&bl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Qm(t,i,o,l,c){switch(i){case"focusin":return Yi=$s(Yi,t,i,o,l,c),!0;case"dragenter":return qi=$s(qi,t,i,o,l,c),!0;case"mouseover":return ji=$s(ji,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return qs.set(h,$s(qs.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,js.set(h,$s(js.get(h)||null,t,i,o,l,c)),!0}return!1}function qf(t){var i=Er(t.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=Vo(o),i!==null){t.blockedOn=i,Xf(t.priority,function(){Gf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Il(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Mt=l,o.target.dispatchEvent(l),Mt=null}else return i=uo(o),i!==null&&bl(i),t.blockedOn=o,!1;i.shift()}return!0}function jf(t,i,o){Yo(t)&&o.delete(i)}function Jm(){Dl=!1,Yi!==null&&Yo(Yi)&&(Yi=null),qi!==null&&Yo(qi)&&(qi=null),ji!==null&&Yo(ji)&&(ji=null),qs.forEach(jf),js.forEach(jf)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,Dl||(Dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jm)))}function Zs(t){function i(c){return Ks(c,t)}if(0<Xo.length){Ks(Xo[0],t);for(var o=1;o<Xo.length;o++){var l=Xo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Yi!==null&&Ks(Yi,t),qi!==null&&Ks(qi,t),ji!==null&&Ks(ji,t),qs.forEach(i),js.forEach(i),o=0;o<$i.length;o++)l=$i[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)qf(o),o.blockedOn===null&&$i.shift()}var Qr=C.ReactCurrentBatchConfig,qo=!0;function eg(t,i,o,l){var c=Tt,h=Qr.transition;Qr.transition=null;try{Tt=1,Ul(t,i,o,l)}finally{Tt=c,Qr.transition=h}}function tg(t,i,o,l){var c=Tt,h=Qr.transition;Qr.transition=null;try{Tt=4,Ul(t,i,o,l)}finally{Tt=c,Qr.transition=h}}function Ul(t,i,o,l){if(qo){var c=Il(t,i,o,l);if(c===null)Zl(t,i,l,jo,o),Yf(t,l);else if(Qm(c,t,i,o,l))l.stopPropagation();else if(Yf(t,l),i&4&&-1<Zm.indexOf(t)){for(;c!==null;){var h=uo(c);if(h!==null&&Vf(h),h=Il(t,i,o,l),h===null&&Zl(t,i,l,jo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else Zl(t,i,l,null,o)}}var jo=null;function Il(t,i,o,l){if(jo=null,t=H(l),t=Er(t),t!==null)if(i=ci(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Vo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return jo=t,null}function $f(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case Be:return 1;case et:return 4;case nt:case Ge:return 16;case mt:return 536870912;default:return 16}default:return 16}}var Ki=null,Nl=null,$o=null;function Kf(){if($o)return $o;var t,i=Nl,o=i.length,l,c="value"in Ki?Ki.value:Ki.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return $o=c.slice(t,1<l?1-l:void 0)}function Ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Zf(){return!1}function bn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(o=t[b],this[b]=o?o(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zo:Zf,this.isPropagationStopped=Zf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=bn(Jr),Qs=re({},Jr,{view:0,detail:0}),ng=bn(Qs),Ol,kl,Js,Qo=re({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Ol=t.screenX-Js.screenX,kl=t.screenY-Js.screenY):kl=Ol=0,Js=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:kl}}),Qf=bn(Qo),ig=re({},Qo,{dataTransfer:0}),rg=bn(ig),sg=re({},Qs,{relatedTarget:0}),Bl=bn(sg),og=re({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=bn(og),lg=re({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ug=bn(lg),cg=re({},Jr,{data:0}),Jf=bn(cg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=hg[t])?!!i[t]:!1}function zl(){return pg}var mg=re({},Qs,{key:function(t){if(t.key){var i=fg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gg=bn(mg),_g=re({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=bn(_g),vg=re({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),xg=bn(vg),Sg=re({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yg=bn(Sg),Mg=re({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Eg=bn(Mg),Tg=[9,13,27,32],Hl=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var wg=d&&"TextEvent"in window&&!eo,td=d&&(!Hl||eo&&8<eo&&11>=eo),nd=" ",id=!1;function rd(t,i){switch(t){case"keyup":return Tg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Ag(t,i){switch(t){case"compositionend":return sd(i);case"keypress":return i.which!==32?null:(id=!0,nd);case"textInput":return t=i.data,t===nd&&id?null:t;default:return null}}function Rg(t,i){if(es)return t==="compositionend"||!Hl&&rd(t,i)?(t=Kf(),$o=Nl=Ki=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return td&&i.locale!=="ko"?null:i.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Cg[t.type]:i==="textarea"}function ad(t,i,o,l){Pe(l),i=ia(i,"onChange"),0<i.length&&(o=new Fl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function Pg(t){wd(t,0)}function Jo(t){var i=ss(t);if(ht(i))return t}function Lg(t,i){if(t==="change")return i}var ld=!1;if(d){var Vl;if(d){var Gl="oninput"in document;if(!Gl){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),Gl=typeof ud.oninput=="function"}Vl=Gl}else Vl=!1;ld=Vl&&(!document.documentMode||9<document.documentMode)}function cd(){to&&(to.detachEvent("onpropertychange",fd),no=to=null)}function fd(t){if(t.propertyName==="value"&&Jo(no)){var i=[];ad(i,no,t,H(t)),vn(Pg,i)}}function bg(t,i,o){t==="focusin"?(cd(),to=i,no=o,to.attachEvent("onpropertychange",fd)):t==="focusout"&&cd()}function Dg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(no)}function Ug(t,i){if(t==="click")return Jo(i)}function Ig(t,i){if(t==="input"||t==="change")return Jo(i)}function Ng(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Ng;function io(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,i){var o=dd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dd(o)}}function pd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?pd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function md(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Lt(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Fg(t){var i=md(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&pd(o.ownerDocument.documentElement,o)){if(l!==null&&Wl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=hd(o,h);var M=hd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Og=d&&"documentMode"in document&&11>=document.documentMode,ts=null,Xl=null,ro=null,Yl=!1;function gd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Yl||ts==null||ts!==Lt(l)||(l=ts,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=ia(Xl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ts)))}function ea(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ns={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ql={},_d={};d&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function ta(t){if(ql[t])return ql[t];if(!ns[t])return t;var i=ns[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in _d)return ql[t]=i[o];return t}var vd=ta("animationend"),xd=ta("animationiteration"),Sd=ta("animationstart"),yd=ta("transitionend"),Md=new Map,Ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){Md.set(t,i),u(i,[t])}for(var jl=0;jl<Ed.length;jl++){var $l=Ed[jl],kg=$l.toLowerCase(),Bg=$l[0].toUpperCase()+$l.slice(1);Zi(kg,"on"+Bg)}Zi(vd,"onAnimationEnd"),Zi(xd,"onAnimationIteration"),Zi(Sd,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(yd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Td(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ho(l,i,void 0,t),t.currentTarget=null}function wd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],F=b.instance,Z=b.currentTarget;if(b=b.listener,F!==h&&c.isPropagationStopped())break e;Td(c,b,Z),h=F}else for(M=0;M<l.length;M++){if(b=l[M],F=b.instance,Z=b.currentTarget,b=b.listener,F!==h&&c.isPropagationStopped())break e;Td(c,b,Z),h=F}}}if(Mr)throw t=Xi,Mr=!1,Xi=null,t}function Ut(t,i){var o=i[iu];o===void 0&&(o=i[iu]=new Set);var l=t+"__bubble";o.has(l)||(Ad(i,t,2,!1),o.add(l))}function Kl(t,i,o){var l=0;i&&(l|=4),Ad(o,t,l,i)}var na="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[na]){t[na]=!0,r.forEach(function(o){o!=="selectionchange"&&(zg.has(o)||Kl(o,!1,t),Kl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[na]||(i[na]=!0,Kl("selectionchange",!1,i))}}function Ad(t,i,o,l){switch($f(i)){case 1:var c=eg;break;case 4:c=tg;break;default:c=Ul}o=c.bind(null,i,o,t),c=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Zl(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;b!==null;){if(M=Er(b),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}b=b.parentNode}}l=l.return}vn(function(){var Z=h,_e=H(o),xe=[];e:{var me=Md.get(t);if(me!==void 0){var be=Fl,ke=t;switch(t){case"keypress":if(Ko(o)===0)break e;case"keydown":case"keyup":be=gg;break;case"focusin":ke="focus",be=Bl;break;case"focusout":ke="blur",be=Bl;break;case"beforeblur":case"afterblur":be=Bl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=xg;break;case vd:case xd:case Sd:be=ag;break;case yd:be=yg;break;case"scroll":be=ng;break;case"wheel":be=Eg;break;case"copy":case"cut":case"paste":be=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=ed}var ze=(i&4)!==0,Bt=!ze&&t==="scroll",Y=ze?me!==null?me+"Capture":null:me;ze=[];for(var z=Z,q;z!==null;){q=z;var Ee=q.stateNode;if(q.tag===5&&Ee!==null&&(q=Ee,Y!==null&&(Ee=hn(z,Y),Ee!=null&&ze.push(ao(z,Ee,q)))),Bt)break;z=z.return}0<ze.length&&(me=new be(me,ke,null,o,_e),xe.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",me&&o!==Mt&&(ke=o.relatedTarget||o.fromElement)&&(Er(ke)||ke[yi]))break e;if((be||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,be?(ke=o.relatedTarget||o.toElement,be=Z,ke=ke?Er(ke):null,ke!==null&&(Bt=ci(ke),ke!==Bt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(be=null,ke=Z),be!==ke)){if(ze=Qf,Ee="onMouseLeave",Y="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(ze=ed,Ee="onPointerLeave",Y="onPointerEnter",z="pointer"),Bt=be==null?me:ss(be),q=ke==null?me:ss(ke),me=new ze(Ee,z+"leave",be,o,_e),me.target=Bt,me.relatedTarget=q,Ee=null,Er(_e)===Z&&(ze=new ze(Y,z+"enter",ke,o,_e),ze.target=q,ze.relatedTarget=Bt,Ee=ze),Bt=Ee,be&&ke)t:{for(ze=be,Y=ke,z=0,q=ze;q;q=is(q))z++;for(q=0,Ee=Y;Ee;Ee=is(Ee))q++;for(;0<z-q;)ze=is(ze),z--;for(;0<q-z;)Y=is(Y),q--;for(;z--;){if(ze===Y||Y!==null&&ze===Y.alternate)break t;ze=is(ze),Y=is(Y)}ze=null}else ze=null;be!==null&&Rd(xe,me,be,ze,!1),ke!==null&&Bt!==null&&Rd(xe,Bt,ke,ze,!0)}}e:{if(me=Z?ss(Z):window,be=me.nodeName&&me.nodeName.toLowerCase(),be==="select"||be==="input"&&me.type==="file")var We=Lg;else if(od(me))if(ld)We=Ig;else{We=Dg;var je=bg}else(be=me.nodeName)&&be.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=Ug);if(We&&(We=We(t,Z))){ad(xe,We,o,_e);break e}je&&je(t,me,Z),t==="focusout"&&(je=me._wrapperState)&&je.controlled&&me.type==="number"&&Et(me,"number",me.value)}switch(je=Z?ss(Z):window,t){case"focusin":(od(je)||je.contentEditable==="true")&&(ts=je,Xl=Z,ro=null);break;case"focusout":ro=Xl=ts=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,gd(xe,o,_e);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":gd(xe,o,_e)}var $e;if(Hl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else es?rd(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(td&&o.locale!=="ko"&&(es||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&es&&($e=Kf()):(Ki=_e,Nl="value"in Ki?Ki.value:Ki.textContent,es=!0)),je=ia(Z,tt),0<je.length&&(tt=new Jf(tt,t,null,o,_e),xe.push({event:tt,listeners:je}),$e?tt.data=$e:($e=sd(o),$e!==null&&(tt.data=$e)))),($e=wg?Ag(t,o):Rg(t,o))&&(Z=ia(Z,"onBeforeInput"),0<Z.length&&(_e=new Jf("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:Z}),_e.data=$e))}wd(xe,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ia(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=hn(t,o),h!=null&&l.unshift(ao(t,h,c)),h=hn(t,i),h!=null&&l.push(ao(t,h,c))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var b=o,F=b.alternate,Z=b.stateNode;if(F!==null&&F===l)break;b.tag===5&&Z!==null&&(b=Z,c?(F=hn(o,h),F!=null&&M.unshift(ao(o,F,b))):c||(F=hn(o,h),F!=null&&M.push(ao(o,F,b)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Hg=/\r\n?/g,Vg=/\u0000|\uFFFD/g;function Cd(t){return(typeof t=="string"?t:""+t).replace(Hg,`
`).replace(Vg,"")}function ra(t,i,o){if(i=Cd(i),Cd(t)!==i&&o)throw Error(n(425))}function sa(){}var Ql=null,Jl=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Gg=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(t){return Pd.resolve(null).then(t).catch(Xg)}:tu;function Xg(t){setTimeout(function(){throw t})}function nu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Zs(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ld(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),di="__reactFiber$"+rs,lo="__reactProps$"+rs,yi="__reactContainer$"+rs,iu="__reactEvents$"+rs,Yg="__reactListeners$"+rs,qg="__reactHandles$"+rs;function Er(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[yi]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Ld(t);t!==null;){if(o=t[di])return o;t=Ld(t)}return i}t=o,o=t.parentNode}return null}function uo(t){return t=t[di]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function oa(t){return t[lo]||null}var ru=[],os=-1;function Ji(t){return{current:t}}function It(t){0>os||(t.current=ru[os],ru[os]=null,os--)}function bt(t,i){os++,ru[os]=t.current,t.current=i}var er={},on=Ji(er),Sn=Ji(!1),Tr=er;function as(t,i){var o=t.type.contextTypes;if(!o)return er;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function yn(t){return t=t.childContextTypes,t!=null}function aa(){It(Sn),It(on)}function bd(t,i,o){if(on.current!==er)throw Error(n(168));bt(on,i),bt(Sn,o)}function Dd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},o,l)}function la(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Tr=on.current,bt(on,t),bt(Sn,Sn.current),!0}function Ud(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Dd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,It(Sn),It(on),bt(on,t)):It(Sn),bt(Sn,o)}var Mi=null,ua=!1,su=!1;function Id(t){Mi===null?Mi=[t]:Mi.push(t)}function jg(t){ua=!0,Id(t)}function tr(){if(!su&&Mi!==null){su=!0;var t=0,i=Tt;try{var o=Mi;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Mi=null,ua=!1}catch(c){throw Mi!==null&&(Mi=Mi.slice(t+1)),Q(Be,tr),c}finally{Tt=i,su=!1}}return null}var ls=[],us=0,ca=null,fa=0,Bn=[],zn=0,wr=null,Ei=1,Ti="";function Ar(t,i){ls[us++]=fa,ls[us++]=ca,ca=t,fa=i}function Nd(t,i,o){Bn[zn++]=Ei,Bn[zn++]=Ti,Bn[zn++]=wr,wr=t;var l=Ei;t=Ti;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ei=1<<32-st(i)+c|o<<c|l,Ti=h+t}else Ei=1<<h|o<<c|l,Ti=t}function ou(t){t.return!==null&&(Ar(t,1),Nd(t,1,0))}function au(t){for(;t===ca;)ca=ls[--us],ls[us]=null,fa=ls[--us],ls[us]=null;for(;t===wr;)wr=Bn[--zn],Bn[zn]=null,Ti=Bn[--zn],Bn[zn]=null,Ei=Bn[--zn],Bn[zn]=null}var Dn=null,Un=null,Nt=!1,Qn=null;function Fd(t,i){var o=Wn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Od(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,Un=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Wn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Dn=t,Un=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(Nt){var i=Un;if(i){var o=i;if(!Od(t,i)){if(lu(t))throw Error(n(418));i=Qi(o.nextSibling);var l=Dn;i&&Od(t,i)?Fd(l,o):(t.flags=t.flags&-4097|2,Nt=!1,Dn=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Nt=!1,Dn=t}}}function kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function da(t){if(t!==Dn)return!1;if(!Nt)return kd(t),Nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=Un)){if(lu(t))throw Bd(),Error(n(418));for(;i;)Fd(t,i),i=Qi(i.nextSibling)}if(kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Un=Qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=Dn?Qi(t.stateNode.nextSibling):null;return!0}function Bd(){for(var t=Un;t;)t=Qi(t.nextSibling)}function cs(){Un=Dn=null,Nt=!1}function cu(t){Qn===null?Qn=[t]:Qn.push(t)}var $g=C.ReactCurrentBatchConfig;function co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var b=c.refs;M===null?delete b[h]:b[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ha(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function zd(t){var i=t._init;return i(t._payload)}function Hd(t){function i(Y,z){if(t){var q=Y.deletions;q===null?(Y.deletions=[z],Y.flags|=16):q.push(z)}}function o(Y,z){if(!t)return null;for(;z!==null;)i(Y,z),z=z.sibling;return null}function l(Y,z){for(Y=new Map;z!==null;)z.key!==null?Y.set(z.key,z):Y.set(z.index,z),z=z.sibling;return Y}function c(Y,z){return Y=ur(Y,z),Y.index=0,Y.sibling=null,Y}function h(Y,z,q){return Y.index=q,t?(q=Y.alternate,q!==null?(q=q.index,q<z?(Y.flags|=2,z):q):(Y.flags|=2,z)):(Y.flags|=1048576,z)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function b(Y,z,q,Ee){return z===null||z.tag!==6?(z=tc(q,Y.mode,Ee),z.return=Y,z):(z=c(z,q),z.return=Y,z)}function F(Y,z,q,Ee){var We=q.type;return We===N?_e(Y,z,q.props.children,Ee,q.key):z!==null&&(z.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&zd(We)===z.type)?(Ee=c(z,q.props),Ee.ref=co(Y,z,q),Ee.return=Y,Ee):(Ee=Oa(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=co(Y,z,q),Ee.return=Y,Ee)}function Z(Y,z,q,Ee){return z===null||z.tag!==4||z.stateNode.containerInfo!==q.containerInfo||z.stateNode.implementation!==q.implementation?(z=nc(q,Y.mode,Ee),z.return=Y,z):(z=c(z,q.children||[]),z.return=Y,z)}function _e(Y,z,q,Ee,We){return z===null||z.tag!==7?(z=Ir(q,Y.mode,Ee,We),z.return=Y,z):(z=c(z,q),z.return=Y,z)}function xe(Y,z,q){if(typeof z=="string"&&z!==""||typeof z=="number")return z=tc(""+z,Y.mode,q),z.return=Y,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case $:return q=Oa(z.type,z.key,z.props,null,Y.mode,q),q.ref=co(Y,null,z),q.return=Y,q;case O:return z=nc(z,Y.mode,q),z.return=Y,z;case se:var Ee=z._init;return xe(Y,Ee(z._payload),q)}if(Ye(z)||ae(z))return z=Ir(z,Y.mode,q,null),z.return=Y,z;ha(Y,z)}return null}function me(Y,z,q,Ee){var We=z!==null?z.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return We!==null?null:b(Y,z,""+q,Ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case $:return q.key===We?F(Y,z,q,Ee):null;case O:return q.key===We?Z(Y,z,q,Ee):null;case se:return We=q._init,me(Y,z,We(q._payload),Ee)}if(Ye(q)||ae(q))return We!==null?null:_e(Y,z,q,Ee,null);ha(Y,q)}return null}function be(Y,z,q,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(q)||null,b(z,Y,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case $:return Y=Y.get(Ee.key===null?q:Ee.key)||null,F(z,Y,Ee,We);case O:return Y=Y.get(Ee.key===null?q:Ee.key)||null,Z(z,Y,Ee,We);case se:var je=Ee._init;return be(Y,z,q,je(Ee._payload),We)}if(Ye(Ee)||ae(Ee))return Y=Y.get(q)||null,_e(z,Y,Ee,We,null);ha(z,Ee)}return null}function ke(Y,z,q,Ee){for(var We=null,je=null,$e=z,tt=z=0,Jt=null;$e!==null&&tt<q.length;tt++){$e.index>tt?(Jt=$e,$e=null):Jt=$e.sibling;var St=me(Y,$e,q[tt],Ee);if(St===null){$e===null&&($e=Jt);break}t&&$e&&St.alternate===null&&i(Y,$e),z=h(St,z,tt),je===null?We=St:je.sibling=St,je=St,$e=Jt}if(tt===q.length)return o(Y,$e),Nt&&Ar(Y,tt),We;if($e===null){for(;tt<q.length;tt++)$e=xe(Y,q[tt],Ee),$e!==null&&(z=h($e,z,tt),je===null?We=$e:je.sibling=$e,je=$e);return Nt&&Ar(Y,tt),We}for($e=l(Y,$e);tt<q.length;tt++)Jt=be($e,Y,tt,q[tt],Ee),Jt!==null&&(t&&Jt.alternate!==null&&$e.delete(Jt.key===null?tt:Jt.key),z=h(Jt,z,tt),je===null?We=Jt:je.sibling=Jt,je=Jt);return t&&$e.forEach(function(cr){return i(Y,cr)}),Nt&&Ar(Y,tt),We}function ze(Y,z,q,Ee){var We=ae(q);if(typeof We!="function")throw Error(n(150));if(q=We.call(q),q==null)throw Error(n(151));for(var je=We=null,$e=z,tt=z=0,Jt=null,St=q.next();$e!==null&&!St.done;tt++,St=q.next()){$e.index>tt?(Jt=$e,$e=null):Jt=$e.sibling;var cr=me(Y,$e,St.value,Ee);if(cr===null){$e===null&&($e=Jt);break}t&&$e&&cr.alternate===null&&i(Y,$e),z=h(cr,z,tt),je===null?We=cr:je.sibling=cr,je=cr,$e=Jt}if(St.done)return o(Y,$e),Nt&&Ar(Y,tt),We;if($e===null){for(;!St.done;tt++,St=q.next())St=xe(Y,St.value,Ee),St!==null&&(z=h(St,z,tt),je===null?We=St:je.sibling=St,je=St);return Nt&&Ar(Y,tt),We}for($e=l(Y,$e);!St.done;tt++,St=q.next())St=be($e,Y,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&$e.delete(St.key===null?tt:St.key),z=h(St,z,tt),je===null?We=St:je.sibling=St,je=St);return t&&$e.forEach(function(C_){return i(Y,C_)}),Nt&&Ar(Y,tt),We}function Bt(Y,z,q,Ee){if(typeof q=="object"&&q!==null&&q.type===N&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case $:e:{for(var We=q.key,je=z;je!==null;){if(je.key===We){if(We=q.type,We===N){if(je.tag===7){o(Y,je.sibling),z=c(je,q.props.children),z.return=Y,Y=z;break e}}else if(je.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&zd(We)===je.type){o(Y,je.sibling),z=c(je,q.props),z.ref=co(Y,je,q),z.return=Y,Y=z;break e}o(Y,je);break}else i(Y,je);je=je.sibling}q.type===N?(z=Ir(q.props.children,Y.mode,Ee,q.key),z.return=Y,Y=z):(Ee=Oa(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=co(Y,z,q),Ee.return=Y,Y=Ee)}return M(Y);case O:e:{for(je=q.key;z!==null;){if(z.key===je)if(z.tag===4&&z.stateNode.containerInfo===q.containerInfo&&z.stateNode.implementation===q.implementation){o(Y,z.sibling),z=c(z,q.children||[]),z.return=Y,Y=z;break e}else{o(Y,z);break}else i(Y,z);z=z.sibling}z=nc(q,Y.mode,Ee),z.return=Y,Y=z}return M(Y);case se:return je=q._init,Bt(Y,z,je(q._payload),Ee)}if(Ye(q))return ke(Y,z,q,Ee);if(ae(q))return ze(Y,z,q,Ee);ha(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,z!==null&&z.tag===6?(o(Y,z.sibling),z=c(z,q),z.return=Y,Y=z):(o(Y,z),z=tc(q,Y.mode,Ee),z.return=Y,Y=z),M(Y)):o(Y,z)}return Bt}var fs=Hd(!0),Vd=Hd(!1),pa=Ji(null),ma=null,ds=null,fu=null;function du(){fu=ds=ma=null}function hu(t){var i=pa.current;It(pa),t._currentValue=i}function pu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function hs(t,i){ma=t,fu=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(ma===null)throw Error(n(308));ds=t,ma.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var Rr=null;function mu(t){Rr===null?Rr=[t]:Rr.push(t)}function Gd(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,mu(i)):(o.next=c.next,c.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var nr=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,wi(t,o)}return c=l.interleaved,c===null?(i.next=i,mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,wi(t,o)}function ga(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ll(t,o)}}function Xd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function _a(t,i,o,l){var c=t.updateQueue;nr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,Z=F.next;F.next=null,M===null?h=Z:M.next=Z,M=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,b=_e.lastBaseUpdate,b!==M&&(b===null?_e.firstBaseUpdate=Z:b.next=Z,_e.lastBaseUpdate=F))}if(h!==null){var xe=c.baseState;M=0,_e=Z=F=null,b=h;do{var me=b.lane,be=b.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:be,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ke=t,ze=b;switch(me=i,be=o,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){xe=ke.call(be,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,me=typeof ke=="function"?ke.call(be,xe,me):ke,me==null)break e;xe=re({},xe,me);break e;case 2:nr=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[b]:me.push(b))}else be={eventTime:be,lane:me,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_e===null?(Z=_e=be,F=xe):_e=_e.next=be,M|=me;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;me=b,b=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=Z,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=xe}}function Yd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},hi=Ji(fo),ho=Ji(fo),po=Ji(fo);function Cr(t){if(t===fo)throw Error(n(174));return t}function _u(t,i){switch(bt(po,i),bt(ho,t),bt(hi,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=He(i,t)}It(hi),bt(hi,i)}function ps(){It(hi),It(ho),It(po)}function qd(t){Cr(po.current);var i=Cr(hi.current),o=He(i,t.type);i!==o&&(bt(ho,t),bt(hi,o))}function vu(t){ho.current===t&&(It(hi),It(ho))}var Ft=Ji(0);function va(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function Su(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var xa=C.ReactCurrentDispatcher,yu=C.ReactCurrentBatchConfig,Pr=0,Ot=null,qt=null,Zt=null,Sa=!1,mo=!1,go=0,Kg=0;function an(){throw Error(n(321))}function Mu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Zn(t[o],i[o]))return!1;return!0}function Eu(t,i,o,l,c,h){if(Pr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xa.current=t===null||t.memoizedState===null?e_:t_,t=o(l,c),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,Zt=qt=null,i.updateQueue=null,xa.current=n_,t=o(l,c)}while(mo)}if(xa.current=Ea,i=qt!==null&&qt.next!==null,Pr=0,Zt=qt=Ot=null,Sa=!1,i)throw Error(n(300));return t}function Tu(){var t=go!==0;return go=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Vn(){if(qt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function _o(t,i){return typeof i=="function"?i(t):i}function wu(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var b=M=null,F=null,Z=h;do{var _e=Z.lane;if((Pr&_e)===_e)F!==null&&(F=F.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var xe={lane:_e,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};F===null?(b=F=xe,M=l):F=F.next=xe,Ot.lanes|=_e,Lr|=_e}Z=Z.next}while(Z!==null&&Z!==h);F===null?M=l:F.next=b,Zn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Au(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Zn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function jd(){}function $d(t,i){var o=Ot,l=Vn(),c=i(),h=!Zn(l.memoizedState,c);if(h&&(l.memoizedState=c,Mn=!0),l=l.queue,Ru(Qd.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,vo(9,Zd.bind(null,o,l,c,i),void 0,null),Qt===null)throw Error(n(349));(Pr&30)!==0||Kd(o,i,c)}return c}function Kd(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Zd(t,i,o,l){i.value=o,i.getSnapshot=l,Jd(i)&&eh(t)}function Qd(t,i,o){return o(function(){Jd(i)&&eh(t)})}function Jd(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Zn(t,o)}catch{return!0}}function eh(t){var i=wi(t,1);i!==null&&ni(i,t,1,-1)}function th(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},i.queue=t,t=t.dispatch=Jg.bind(null,Ot,t),[i.memoizedState,t]}function vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function nh(){return Vn().memoizedState}function ya(t,i,o,l){var c=pi();Ot.flags|=t,c.memoizedState=vo(1|i,o,void 0,l===void 0?null:l)}function Ma(t,i,o,l){var c=Vn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var M=qt.memoizedState;if(h=M.destroy,l!==null&&Mu(l,M.deps)){c.memoizedState=vo(i,o,h,l);return}}Ot.flags|=t,c.memoizedState=vo(1|i,o,h,l)}function ih(t,i){return ya(8390656,8,t,i)}function Ru(t,i){return Ma(2048,8,t,i)}function rh(t,i){return Ma(4,2,t,i)}function sh(t,i){return Ma(4,4,t,i)}function oh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ah(t,i,o){return o=o!=null?o.concat([t]):null,Ma(4,4,oh.bind(null,i,t),o)}function Cu(){}function lh(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function uh(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function ch(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=o):(Zn(o,i)||(o=pn(),Ot.lanes|=o,Lr|=o,t.baseState=!0),i)}function Zg(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=yu.transition;yu.transition={};try{t(!1),i()}finally{Tt=o,yu.transition=l}}function fh(){return Vn().memoizedState}function Qg(t,i,o){var l=ar(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},dh(t))hh(i,o);else if(o=Gd(t,i,o,l),o!==null){var c=gn();ni(o,t,l,c),ph(o,i,l)}}function Jg(t,i,o){var l=ar(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(dh(t))hh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,b=h(M,o);if(c.hasEagerState=!0,c.eagerState=b,Zn(b,M)){var F=i.interleaved;F===null?(c.next=c,mu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}o=Gd(t,i,c,l),o!==null&&(c=gn(),ni(o,t,l,c),ph(o,i,l))}}function dh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function hh(t,i){mo=Sa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ph(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ll(t,o)}}var Ea={readContext:Hn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},e_={readContext:Hn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:ih,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ya(4194308,4,oh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ya(4194308,4,t,i)},useInsertionEffect:function(t,i){return ya(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=pi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Qg.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:th,useDebugValue:Cu,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=th(!1),i=t[0];return t=Zg.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,c=pi();if(Nt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(Pr&30)!==0||Kd(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,ih(Qd.bind(null,l,h,t),[t]),l.flags|=2048,vo(9,Zd.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=pi(),i=Qt.identifierPrefix;if(Nt){var o=Ti,l=Ei;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Kg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},t_={readContext:Hn,useCallback:lh,useContext:Hn,useEffect:Ru,useImperativeHandle:ah,useInsertionEffect:rh,useLayoutEffect:sh,useMemo:uh,useReducer:wu,useRef:nh,useState:function(){return wu(_o)},useDebugValue:Cu,useDeferredValue:function(t){var i=Vn();return ch(i,qt.memoizedState,t)},useTransition:function(){var t=wu(_o)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:jd,useSyncExternalStore:$d,useId:fh,unstable_isNewReconciler:!1},n_={readContext:Hn,useCallback:lh,useContext:Hn,useEffect:Ru,useImperativeHandle:ah,useInsertionEffect:rh,useLayoutEffect:sh,useMemo:uh,useReducer:Au,useRef:nh,useState:function(){return Au(_o)},useDebugValue:Cu,useDeferredValue:function(t){var i=Vn();return qt===null?i.memoizedState=t:ch(i,qt.memoizedState,t)},useTransition:function(){var t=Au(_o)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:jd,useSyncExternalStore:$d,useId:fh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Pu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ta={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=gn(),c=ar(t),h=Ai(l,c);h.payload=i,o!=null&&(h.callback=o),i=ir(t,h,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=gn(),c=ar(t),h=Ai(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=ir(t,h,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=gn(),l=ar(t),c=Ai(o,l);c.tag=2,i!=null&&(c.callback=i),i=ir(t,c,l),i!==null&&(ni(i,t,l,o),ga(i,t,l))}};function mh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(c,h):!0}function gh(t,i,o){var l=!1,c=er,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(c=yn(i)?Tr:on.current,l=i.contextTypes,h=(l=l!=null)?as(t,c):er),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ta,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function _h(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ta.enqueueReplaceState(i,i.state,null)}function Lu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Hn(h):(h=yn(i)?Tr:on.current,c.context=as(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Pu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ta.enqueueReplaceState(c,c.state,null),_a(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function bu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Du(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var i_=typeof WeakMap=="function"?WeakMap:Map;function vh(t,i,o){o=Ai(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ba||(ba=!0,qu=l),Du(t,i)},o}function xh(t,i,o){o=Ai(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Du(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Du(t,i),typeof l!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Sh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new i_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=__.bind(null,t,i,o),i.then(t,t))}function yh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Mh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ai(-1,1),i.tag=2,ir(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var r_=C.ReactCurrentOwner,Mn=!1;function mn(t,i,o,l){i.child=t===null?Vd(i,null,o,l):fs(i,t.child,o,l)}function Eh(t,i,o,l,c){o=o.render;var h=i.ref;return hs(i,c),l=Eu(t,i,o,l,h,c),o=Tu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(Nt&&o&&ou(i),i.flags|=1,mn(t,i,l,c),i.child)}function Th(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,wh(t,i,h,l,c)):(t=Oa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(M,l)&&t.ref===i.ref)return Ri(t,i,c)}return i.flags|=1,t=ur(h,l),t.ref=i.ref,t.return=i,i.child=t}function wh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Ri(t,i,c)}return Uu(t,i,o,l,c)}function Ah(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(_s,In),In|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(_s,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,bt(_s,In),In|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,bt(_s,In),In|=l;return mn(t,i,c,o),i.child}function Rh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Uu(t,i,o,l,c){var h=yn(o)?Tr:on.current;return h=as(i,h),hs(i,c),o=Eu(t,i,o,l,h,c),l=Tu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(Nt&&l&&ou(i),i.flags|=1,mn(t,i,o,c),i.child)}function Ch(t,i,o,l,c){if(yn(o)){var h=!0;la(i)}else h=!1;if(hs(i,c),i.stateNode===null)Aa(t,i),gh(i,o,l),Lu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,b=i.memoizedProps;M.props=b;var F=M.context,Z=o.contextType;typeof Z=="object"&&Z!==null?Z=Hn(Z):(Z=yn(o)?Tr:on.current,Z=as(i,Z));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==l||F!==Z)&&_h(i,M,l,Z),nr=!1;var me=i.memoizedState;M.state=me,_a(i,l,M,c),F=i.memoizedState,b!==l||me!==F||Sn.current||nr?(typeof _e=="function"&&(Pu(i,o,_e,l),F=i.memoizedState),(b=nr||mh(i,o,b,l,me,F,Z))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=Z,l=b):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Wd(t,i),b=i.memoizedProps,Z=i.type===i.elementType?b:Jn(i.type,b),M.props=Z,xe=i.pendingProps,me=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Hn(F):(F=yn(o)?Tr:on.current,F=as(i,F));var be=o.getDerivedStateFromProps;(_e=typeof be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==xe||me!==F)&&_h(i,M,l,F),nr=!1,me=i.memoizedState,M.state=me,_a(i,l,M,c);var ke=i.memoizedState;b!==xe||me!==ke||Sn.current||nr?(typeof be=="function"&&(Pu(i,o,be,l),ke=i.memoizedState),(Z=nr||mh(i,o,Z,l,me,ke,F)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ke,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ke,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),M.props=l,M.state=ke,M.context=F,l=Z):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Iu(t,i,o,l,h,c)}function Iu(t,i,o,l,c,h){Rh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Ud(i,o,!1),Ri(t,i,h);l=i.stateNode,r_.current=i;var b=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,h),i.child=fs(i,null,b,h)):mn(t,i,b,h),i.memoizedState=l.state,c&&Ud(i,o,!0),i.child}function Ph(t){var i=t.stateNode;i.pendingContext?bd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&bd(t,i.context,!1),_u(t,i.containerInfo)}function Lh(t,i,o,l,c){return cs(),cu(c),i.flags|=256,mn(t,i,o,l),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bh(t,i,o){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,b;if((b=M)||(b=t!==null&&t.memoizedState===null?!1:(c&2)!==0),b?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),bt(Ft,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(o),i.memoizedState=Nu,t):Ou(i,M));if(c=t.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return s_(t,i,M,l,b,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,b=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=ur(c,F),l.subtreeFlags=c.subtreeFlags&14680064),b!==null?h=ur(b,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Fu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Nu,l}return h=t.child,t=h.sibling,l=ur(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Ou(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function wa(t,i,o,l){return l!==null&&cu(l),fs(i,t.child,null,o),t=Ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function s_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=bu(Error(n(422))),wa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&fs(i,t.child,null,M),i.child.memoizedState=Fu(M),i.memoizedState=Nu,h);if((i.mode&1)===0)return wa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var b=l.dgst;return l=b,h=Error(n(419)),l=bu(h,l,void 0),wa(t,i,M,l)}if(b=(M&t.childLanes)!==0,Mn||b){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,wi(t,c),ni(l,t,c,-1))}return Ju(),l=bu(Error(n(421))),wa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=v_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Un=Qi(c.nextSibling),Dn=i,Nt=!0,Qn=null,t!==null&&(Bn[zn++]=Ei,Bn[zn++]=Ti,Bn[zn++]=wr,Ei=t.id,Ti=t.overflow,wr=i),i=Ou(i,l.children),i.flags|=4096,i)}function Dh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pu(t.return,i,o)}function ku(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Uh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(mn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dh(t,o,i);else if(t.tag===19)Dh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&va(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),ku(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&va(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}ku(i,!0,o,null,h);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ri(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function o_(t,i,o){switch(i.tag){case 3:Ph(i),cs();break;case 5:qd(i);break;case 1:yn(i.type)&&la(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;bt(pa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?bh(t,i,o):(bt(Ft,Ft.current&1),t=Ri(t,i,o),t!==null?t.sibling:null);bt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Uh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),bt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Ah(t,i,o)}return Ri(t,i,o)}var Ih,Bu,Nh,Fh;Ih=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Bu=function(){},Nh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(hi.current);var h=null;switch(o){case"input":c=W(t,c),l=W(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=T(t,c),l=T(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=sa)}ct(o,l);var M;o=null;for(Z in c)if(!l.hasOwnProperty(Z)&&c.hasOwnProperty(Z)&&c[Z]!=null)if(Z==="style"){var b=c[Z];for(M in b)b.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(a.hasOwnProperty(Z)?h||(h=[]):(h=h||[]).push(Z,null));for(Z in l){var F=l[Z];if(b=c!=null?c[Z]:void 0,l.hasOwnProperty(Z)&&F!==b&&(F!=null||b!=null))if(Z==="style")if(b){for(M in b)!b.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&b[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(Z,o)),o=F;else Z==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,b=b?b.__html:void 0,F!=null&&b!==F&&(h=h||[]).push(Z,F)):Z==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Z,""+F):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(a.hasOwnProperty(Z)?(F!=null&&Z==="onScroll"&&Ut("scroll",t),h||b===F||(h=[])):(h=h||[]).push(Z,F))}o&&(h=h||[]).push("style",o);var Z=h;(i.updateQueue=Z)&&(i.flags|=4)}},Fh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function a_(t,i,o){var l=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return yn(i.type)&&aa(),ln(i),null;case 3:return l=i.stateNode,ps(),It(Sn),It(on),Su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(Ku(Qn),Qn=null))),Bu(t,i),ln(i),null;case 5:vu(i);var c=Cr(po.current);if(o=i.type,t!==null&&i.stateNode!=null)Nh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return ln(i),null}if(t=Cr(hi.current),da(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[di]=i,l[lo]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)Ut(so[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":dn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":j(l,h),Ut("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var b=h[M];M==="children"?typeof b=="string"?l.textContent!==b&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,b,t),c=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,b,t),c=["children",""+b]):a.hasOwnProperty(M)&&b!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":At(l),qe(l,h,!0);break;case"textarea":At(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=sa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[di]=i,t[lo]=l,Ih(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)Ut(so[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":dn(t,l),c=W(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":j(t,l),c=T(t,l),Ut("invalid",t);break;default:c=l}ct(o,c),b=c;for(h in b)if(b.hasOwnProperty(h)){var F=b[h];h==="style"?Je(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ie(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&lt(t,F):typeof F=="number"&&lt(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",t):F!=null&&D(t,h,F,M))}switch(o){case"input":At(t),qe(t,l,!1);break;case"textarea":At(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=sa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(t&&i.stateNode!=null)Fh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(po.current),Cr(hi.current),da(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(h=l.nodeValue!==o)&&(t=Dn,t!==null))switch(t.tag){case 3:ra(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return ln(i),null;case 13:if(It(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bd(),cs(),i.flags|=98560,h=!1;else if(h=da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else Qn!==null&&(Ku(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?jt===0&&(jt=3):Ju())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return ps(),Bu(t,i),t===null&&oo(i.stateNode.containerInfo),ln(i),null;case 10:return hu(i.type._context),ln(i),null;case 17:return yn(i.type)&&aa(),ln(i),null;case 19:if(It(Ft),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)xo(h,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=va(t),M!==null){for(i.flags|=128,xo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return bt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&ye()>vs&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=va(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Nt)return ln(i),null}else 2*ye()-h.renderingStartTime>vs&&o!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ye(),i.sibling=null,o=Ft.current,bt(Ft,l?o&1|2:o&1),i):(ln(i),null);case 22:case 23:return Qu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function l_(t,i){switch(au(i),i.tag){case 1:return yn(i.type)&&aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),It(Sn),It(on),Su(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return vu(i),null;case 13:if(It(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ft),null;case 4:return ps(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Ra=!1,un=!1,u_=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function zu(t,i,o){try{o()}catch(l){kt(t,i,l)}}var Oh=!1;function c_(t,i){if(Ql=qo,t=md(),Wl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,b=-1,F=-1,Z=0,_e=0,xe=t,me=null;t:for(;;){for(var be;xe!==o||c!==0&&xe.nodeType!==3||(b=M+c),xe!==h||l!==0&&xe.nodeType!==3||(F=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(be=xe.firstChild)!==null;)me=xe,xe=be;for(;;){if(xe===t)break t;if(me===o&&++Z===c&&(b=M),me===h&&++_e===l&&(F=M),(be=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=be}o=b===-1||F===-1?null:{start:b,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jl={focusedElem:t,selectionRange:o},qo=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Bt=ke.memoizedState,Y=i.stateNode,z=Y.getSnapshotBeforeUpdate(i.elementType===i.type?ze:Jn(i.type,ze),Bt);Y.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){kt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return ke=Oh,Oh=!1,ke}function So(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&zu(i,o,h)}c=c.next}while(c!==l)}}function Ca(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Hu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function kh(t){var i=t.alternate;i!==null&&(t.alternate=null,kh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[lo],delete i[iu],delete i[Yg],delete i[qg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bh(t){return t.tag===5||t.tag===3||t.tag===4}function zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(t=t.child,t!==null))for(Vu(t,i,o),t=t.sibling;t!==null;)Vu(t,i,o),t=t.sibling}function Gu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gu(t,i,o),t=t.sibling;t!==null;)Gu(t,i,o),t=t.sibling}var tn=null,ei=!1;function rr(t,i,o){for(o=o.child;o!==null;)Hh(t,i,o),o=o.sibling}function Hh(t,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 5:un||gs(o,i);case 6:var l=tn,c=ei;tn=null,rr(t,i,o),tn=l,ei=c,tn!==null&&(ei?(t=tn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ei?(t=tn,o=o.stateNode,t.nodeType===8?nu(t.parentNode,o):t.nodeType===1&&nu(t,o),Zs(t)):nu(tn,o.stateNode));break;case 4:l=tn,c=ei,tn=o.stateNode.containerInfo,ei=!0,rr(t,i,o),tn=l,ei=c;break;case 0:case 11:case 14:case 15:if(!un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&zu(o,i,M),c=c.next}while(c!==l)}rr(t,i,o);break;case 1:if(!un&&(gs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(b){kt(o,i,b)}rr(t,i,o);break;case 21:rr(t,i,o);break;case 22:o.mode&1?(un=(l=un)||o.memoizedState!==null,rr(t,i,o),un=l):rr(t,i,o);break;default:rr(t,i,o)}}function Vh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new u_),i.forEach(function(l){var c=x_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,b=M;e:for(;b!==null;){switch(b.tag){case 5:tn=b.stateNode,ei=!1;break e;case 3:tn=b.stateNode.containerInfo,ei=!0;break e;case 4:tn=b.stateNode.containerInfo,ei=!0;break e}b=b.return}if(tn===null)throw Error(n(160));Hh(h,M,c),tn=null,ei=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(Z){kt(c,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gh(i,t),i=i.sibling}function Gh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),mi(t),l&4){try{So(3,t,t.return),Ca(3,t)}catch(ze){kt(t,t.return,ze)}try{So(5,t,t.return)}catch(ze){kt(t,t.return,ze)}}break;case 1:ti(i,t),mi(t),l&512&&o!==null&&gs(o,o.return);break;case 5:if(ti(i,t),mi(t),l&512&&o!==null&&gs(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(ze){kt(t,t.return,ze)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,b=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&dt(c,h),it(b,M);var Z=it(b,h);for(M=0;M<F.length;M+=2){var _e=F[M],xe=F[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ie(c,xe):_e==="children"?lt(c,xe):D(c,_e,xe,Z)}switch(b){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var be=h.value;be!=null?L(c,!!h.multiple,be,!1):me!==!!h.multiple&&(h.defaultValue!=null?L(c,!!h.multiple,h.defaultValue,!0):L(c,!!h.multiple,h.multiple?[]:"",!1))}c[lo]=h}catch(ze){kt(t,t.return,ze)}}break;case 6:if(ti(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(ze){kt(t,t.return,ze)}}break;case 3:if(ti(i,t),mi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(ze){kt(t,t.return,ze)}break;case 4:ti(i,t),mi(t);break;case 13:ti(i,t),mi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Yu=ye())),l&4&&Vh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(un=(Z=un)||_e,ti(i,t),un=Z):ti(i,t),mi(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!_e&&(t.mode&1)!==0)for(Ne=t,_e=t.child;_e!==null;){for(xe=Ne=_e;Ne!==null;){switch(me=Ne,be=me.child,me.tag){case 0:case 11:case 14:case 15:So(4,me,me.return);break;case 1:gs(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(ze){kt(l,o,ze)}}break;case 5:gs(me,me.return);break;case 22:if(me.memoizedState!==null){Yh(xe);continue}}be!==null?(be.return=me,Ne=be):Yh(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,Z?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=xe.stateNode,F=xe.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,b.style.display=Ze("display",M))}catch(ze){kt(t,t.return,ze)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Z?"":xe.memoizedProps}catch(ze){kt(t,t.return,ze)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ti(i,t),mi(t),l&4&&Vh(t);break;case 21:break;default:ti(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Bh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=zh(t);Gu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,b=zh(t);Vu(t,b,M);break;default:throw Error(n(161))}}catch(F){kt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function f_(t,i,o){Ne=t,Wh(t)}function Wh(t,i,o){for(var l=(t.mode&1)!==0;Ne!==null;){var c=Ne,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ra;if(!M){var b=c.alternate,F=b!==null&&b.memoizedState!==null||un;b=Ra;var Z=un;if(Ra=M,(un=F)&&!Z)for(Ne=c;Ne!==null;)M=Ne,F=M.child,M.tag===22&&M.memoizedState!==null?qh(c):F!==null?(F.return=M,Ne=F):qh(c);for(;h!==null;)Ne=h,Wh(h),h=h.sibling;Ne=c,Ra=b,un=Z}Xh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ne=h):Xh(t)}}function Xh(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Ca(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Yd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Yd(i,M,o)}break;case 5:var b=i.stateNode;if(o===null&&i.flags&4){o=b;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var _e=Z.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Zs(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Hu(i)}catch(me){kt(i,i.return,me)}}if(i===t){Ne=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function Yh(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function qh(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ca(4,i)}catch(F){kt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){kt(i,c,F)}}var h=i.return;try{Hu(i)}catch(F){kt(i,h,F)}break;case 5:var M=i.return;try{Hu(i)}catch(F){kt(i,M,F)}}}catch(F){kt(i,i.return,F)}if(i===t){Ne=null;break}var b=i.sibling;if(b!==null){b.return=i.return,Ne=b;break}Ne=i.return}}var d_=Math.ceil,Pa=C.ReactCurrentDispatcher,Wu=C.ReactCurrentOwner,Gn=C.ReactCurrentBatchConfig,_t=0,Qt=null,Gt=null,nn=0,In=0,_s=Ji(0),jt=0,yo=null,Lr=0,La=0,Xu=0,Mo=null,En=null,Yu=0,vs=1/0,Ci=null,ba=!1,qu=null,sr=null,Da=!1,or=null,Ua=0,Eo=0,ju=null,Ia=-1,Na=0;function gn(){return(_t&6)!==0?ye():Ia!==-1?Ia:Ia=ye()}function ar(t){return(t.mode&1)===0?1:(_t&2)!==0&&nn!==0?nn&-nn:$g.transition!==null?(Na===0&&(Na=pn()),Na):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:$f(t.type)),t)}function ni(t,i,o,l){if(50<Eo)throw Eo=0,ju=null,Error(n(185));xn(t,o,l),((_t&2)===0||t!==Qt)&&(t===Qt&&((_t&2)===0&&(La|=o),jt===4&&lr(t,nn)),Tn(t,l),o===1&&_t===0&&(i.mode&1)===0&&(vs=ye()+500,ua&&tr()))}function Tn(t,i){var o=t.callbackNode;On(t,i);var l=fi(t,t===Qt?nn:0);if(l===0)o!==null&&J(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&J(o),i===1)t.tag===0?jg($h.bind(null,t)):Id($h.bind(null,t)),Wg(function(){(_t&6)===0&&tr()}),o=null;else{switch(Hf(l)){case 1:o=Be;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=mt;break;default:o=nt}o=ip(o,jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function jh(t,i){if(Ia=-1,Na=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(xs()&&t.callbackNode!==o)return null;var l=fi(t,t===Qt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Fa(t,l);else{i=l;var c=_t;_t|=2;var h=Zh();(Qt!==t||nn!==i)&&(Ci=null,vs=ye()+500,Dr(t,i));do try{m_();break}catch(b){Kh(t,b)}while(!0);du(),Pa.current=h,_t=c,Gt!==null?i=0:(Qt=null,nn=0,i=jt)}if(i!==0){if(i===2&&(c=Si(t),c!==0&&(l=c,i=$u(t,c))),i===1)throw o=yo,Dr(t,0),lr(t,l),Tn(t,ye()),o;if(i===6)lr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!h_(c)&&(i=Fa(t,l),i===2&&(h=Si(t),h!==0&&(l=h,i=$u(t,h))),i===1))throw o=yo,Dr(t,0),lr(t,l),Tn(t,ye()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,En,Ci);break;case 3:if(lr(t,l),(l&130023424)===l&&(i=Yu+500-ye(),10<i)){if(fi(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Ur.bind(null,t,En,Ci),i);break}Ur(t,En,Ci);break;case 4:if(lr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=ye()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*d_(l/1960))-l,10<l){t.timeoutHandle=tu(Ur.bind(null,t,En,Ci),l);break}Ur(t,En,Ci);break;case 5:Ur(t,En,Ci);break;default:throw Error(n(329))}}}return Tn(t,ye()),t.callbackNode===o?jh.bind(null,t):null}function $u(t,i){var o=Mo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Fa(t,i),t!==2&&(i=En,En=o,i!==null&&Ku(i)),t}function Ku(t){En===null?En=t:En.push.apply(En,t)}function h_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~Xu,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function $h(t){if((_t&6)!==0)throw Error(n(327));xs();var i=fi(t,0);if((i&1)===0)return Tn(t,ye()),null;var o=Fa(t,i);if(t.tag!==0&&o===2){var l=Si(t);l!==0&&(i=l,o=$u(t,l))}if(o===1)throw o=yo,Dr(t,0),lr(t,i),Tn(t,ye()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,En,Ci),Tn(t,ye()),null}function Zu(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(vs=ye()+500,ua&&tr())}}function br(t){or!==null&&or.tag===0&&(_t&6)===0&&xs();var i=_t;_t|=1;var o=Gn.transition,l=Tt;try{if(Gn.transition=null,Tt=1,t)return t()}finally{Tt=l,Gn.transition=o,_t=i,(_t&6)===0&&tr()}}function Qu(){In=_s.current,It(_s)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Gg(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&aa();break;case 3:ps(),It(Sn),It(on),Su();break;case 5:vu(l);break;case 4:ps();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:hu(l.type._context);break;case 22:case 23:Qu()}o=o.return}if(Qt=t,Gt=t=ur(t.current,null),nn=In=i,jt=0,yo=null,Xu=La=Lr=0,En=Mo=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Rr=null}return t}function Kh(t,i){do{var o=Gt;try{if(du(),xa.current=Ea,Sa){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Sa=!1}if(Pr=0,Zt=qt=Ot=null,mo=!1,go=0,Wu.current=null,o===null||o.return===null){jt=1,yo=i,Gt=null;break}e:{var h=t,M=o.return,b=o,F=i;if(i=nn,b.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Z=F,_e=b,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var be=yh(M);if(be!==null){be.flags&=-257,Mh(be,M,b,h,i),be.mode&1&&Sh(h,Z,i),i=be,F=Z;var ke=i.updateQueue;if(ke===null){var ze=new Set;ze.add(F),i.updateQueue=ze}else ke.add(F);break e}else{if((i&1)===0){Sh(h,Z,i),Ju();break e}F=Error(n(426))}}else if(Nt&&b.mode&1){var Bt=yh(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),Mh(Bt,M,b,h,i),cu(ms(F,b));break e}}h=F=ms(F,b),jt!==4&&(jt=2),Mo===null?Mo=[h]:Mo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=vh(h,F,i);Xd(h,Y);break e;case 1:b=F;var z=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(sr===null||!sr.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=xh(h,b,i);Xd(h,Ee);break e}}h=h.return}while(h!==null)}Jh(o)}catch(We){i=We,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function Zh(){var t=Pa.current;return Pa.current=Ea,t===null?Ea:t}function Ju(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(Lr&268435455)===0&&(La&268435455)===0||lr(Qt,nn)}function Fa(t,i){var o=_t;_t|=2;var l=Zh();(Qt!==t||nn!==i)&&(Ci=null,Dr(t,i));do try{p_();break}catch(c){Kh(t,c)}while(!0);if(du(),_t=o,Pa.current=l,Gt!==null)throw Error(n(261));return Qt=null,nn=0,jt}function p_(){for(;Gt!==null;)Qh(Gt)}function m_(){for(;Gt!==null&&!G();)Qh(Gt)}function Qh(t){var i=np(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?Jh(t):Gt=i,Wu.current=null}function Jh(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=a_(o,i,In),o!==null){Gt=o;return}}else{if(o=l_(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);jt===0&&(jt=5)}function Ur(t,i,o){var l=Tt,c=Gn.transition;try{Gn.transition=null,Tt=1,g_(t,i,o,l)}finally{Gn.transition=c,Tt=l}return null}function g_(t,i,o,l){do xs();while(or!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Wo(t,h),t===Qt&&(Gt=Qt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Da||(Da=!0,ip(nt,function(){return xs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Gn.transition,Gn.transition=null;var M=Tt;Tt=1;var b=_t;_t|=4,Wu.current=null,c_(t,o),Gh(o,t),Fg(Jl),qo=!!Ql,Jl=Ql=null,t.current=o,f_(o),Te(),_t=b,Tt=M,Gn.transition=h}else t.current=o;if(Da&&(Da=!1,or=t,Ua=c),h=t.pendingLanes,h===0&&(sr=null),rn(o.stateNode),Tn(t,ye()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(ba)throw ba=!1,t=qu,qu=null,t;return(Ua&1)!==0&&t.tag!==0&&xs(),h=t.pendingLanes,(h&1)!==0?t===ju?Eo++:(Eo=0,ju=t):Eo=0,tr(),null}function xs(){if(or!==null){var t=Hf(Ua),i=Gn.transition,o=Tt;try{if(Gn.transition=null,Tt=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,Ua=0,(_t&6)!==0)throw Error(n(331));var c=_t;for(_t|=4,Ne=t.current;Ne!==null;){var h=Ne,M=h.child;if((Ne.flags&16)!==0){var b=h.deletions;if(b!==null){for(var F=0;F<b.length;F++){var Z=b[F];for(Ne=Z;Ne!==null;){var _e=Ne;switch(_e.tag){case 0:case 11:case 15:So(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Ne=xe;else for(;Ne!==null;){_e=Ne;var me=_e.sibling,be=_e.return;if(kh(_e),_e===Z){Ne=null;break}if(me!==null){me.return=be,Ne=me;break}Ne=be}}}var ke=h.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Bt=ze.sibling;ze.sibling=null,ze=Bt}while(ze!==null)}}Ne=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ne=M;else e:for(;Ne!==null;){if(h=Ne,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:So(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Ne=Y;break e}Ne=h.return}}var z=t.current;for(Ne=z;Ne!==null;){M=Ne;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Ne=q;else e:for(M=z;Ne!==null;){if(b=Ne,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:Ca(9,b)}}catch(We){kt(b,b.return,We)}if(b===M){Ne=null;break e}var Ee=b.sibling;if(Ee!==null){Ee.return=b.return,Ne=Ee;break e}Ne=b.return}}if(_t=c,tr(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(yt,t)}catch{}l=!0}return l}finally{Tt=o,Gn.transition=i}}return!1}function ep(t,i,o){i=ms(o,i),i=vh(t,i,1),t=ir(t,i,1),i=gn(),t!==null&&(xn(t,1,i),Tn(t,i))}function kt(t,i,o){if(t.tag===3)ep(t,t,o);else for(;i!==null;){if(i.tag===3){ep(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sr===null||!sr.has(l))){t=ms(o,t),t=xh(i,t,1),i=ir(i,t,1),t=gn(),i!==null&&(xn(i,1,t),Tn(i,t));break}}i=i.return}}function __(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(nn&o)===o&&(jt===4||jt===3&&(nn&130023424)===nn&&500>ye()-Yu?Dr(t,0):Xu|=o),Tn(t,i)}function tp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Kn,Kn<<=1,(Kn&130023424)===0&&(Kn=4194304)));var o=gn();t=wi(t,i),t!==null&&(xn(t,i,o),Tn(t,o))}function v_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),tp(t,o)}function x_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),tp(t,o)}var np;np=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)Mn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,o_(t,i,o);Mn=(t.flags&131072)!==0}else Mn=!1,Nt&&(i.flags&1048576)!==0&&Nd(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Aa(t,i),t=i.pendingProps;var c=as(i,on.current);hs(i,o),c=Eu(null,i,l,t,c,o);var h=Tu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(l)?(h=!0,la(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=Ta,i.stateNode=c,c._reactInternals=i,Lu(i,l,t,o),i=Iu(null,i,l,!0,h,o)):(i.tag=0,Nt&&h&&ou(i),mn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Aa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=y_(l),t=Jn(l,t),c){case 0:i=Uu(null,i,l,t,o);break e;case 1:i=Ch(null,i,l,t,o);break e;case 11:i=Eh(null,i,l,t,o);break e;case 14:i=Th(null,i,l,Jn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Uu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ch(t,i,l,c,o);case 3:e:{if(Ph(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Wd(t,i),_a(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ms(Error(n(423)),i),i=Lh(t,i,l,o,c);break e}else if(l!==c){c=ms(Error(n(424)),i),i=Lh(t,i,l,o,c);break e}else for(Un=Qi(i.stateNode.containerInfo.firstChild),Dn=i,Nt=!0,Qn=null,o=Vd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(cs(),l===c){i=Ri(t,i,o);break e}mn(t,i,l,o)}i=i.child}return i;case 5:return qd(i),t===null&&uu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,eu(l,c)?M=null:h!==null&&eu(l,h)&&(i.flags|=32),Rh(t,i),mn(t,i,M,o),i.child;case 6:return t===null&&uu(i),null;case 13:return bh(t,i,o);case 4:return _u(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,o):mn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Eh(t,i,l,c,o);case 7:return mn(t,i,i.pendingProps,o),i.child;case 8:return mn(t,i,i.pendingProps.children,o),i.child;case 12:return mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,bt(pa,l._currentValue),l._currentValue=M,h!==null)if(Zn(h.value,M)){if(h.children===c.children&&!Sn.current){i=Ri(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var b=h.dependencies;if(b!==null){M=h.child;for(var F=b.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ai(-1,o&-o),F.tag=2;var Z=h.updateQueue;if(Z!==null){Z=Z.shared;var _e=Z.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),Z.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),pu(h.return,o,i),b.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,b=M.alternate,b!==null&&(b.lanes|=o),pu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}mn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,hs(i,o),c=Hn(c),l=l(c),i.flags|=1,mn(t,i,l,o),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),Th(t,i,l,c,o);case 15:return wh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Aa(t,i),i.tag=1,yn(l)?(t=!0,la(i)):t=!1,hs(i,o),gh(i,l,c),Lu(i,l,c,o),Iu(null,i,l,!0,t,o);case 19:return Uh(t,i,o);case 22:return Ah(t,i,o)}throw Error(n(156,i.tag))};function ip(t,i){return Q(t,i)}function S_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,o,l){return new S_(t,i,o,l)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function y_(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=Wn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Oa(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")ec(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Ir(o.children,c,h,i);case X:M=8,c|=8;break;case P:return t=Wn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case ee:return t=Wn(13,o,i,c),t.elementType=ee,t.lanes=h,t;case fe:return t=Wn(19,o,i,c),t.elementType=fe,t.lanes=h,t;case le:return ka(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case B:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Wn(7,t,l,i),t.lanes=o,t}function ka(t,i,o,l){return t=Wn(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function tc(t,i,o){return t=Wn(6,t,null,i),t.lanes=o,t}function nc(t,i,o){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function M_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kn(0),this.expirationTimes=kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ic(t,i,o,l,c,h,M,b,F){return t=new M_(t,i,o,b,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function E_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function rp(t){if(!t)return er;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(yn(o))return Dd(t,o,i)}return i}function sp(t,i,o,l,c,h,M,b,F){return t=ic(o,l,!0,t,c,h,M,b,F),t.context=rp(null),o=t.current,l=gn(),c=ar(o),h=Ai(l,c),h.callback=i??null,ir(o,h,c),t.current.lanes=c,xn(t,c,l),Tn(t,l),t}function Ba(t,i,o,l){var c=i.current,h=gn(),M=ar(c);return o=rp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ai(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ir(c,i,M),t!==null&&(ni(t,c,M,h),ga(t,c,M)),M}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function op(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function rc(t,i){op(t,i),(t=t.alternate)&&op(t,i)}function T_(){return null}var ap=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Ha.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Ha.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Ba(null,t,null,null)}),i[yi]=null}};function Ha(t){this._internalRoot=t}Ha.prototype.unstable_scheduleHydration=function(t){if(t){var i=Wf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,t),o===0&&qf(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lp(){}function w_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Z=za(M);h.call(Z)}}var M=sp(i,l,t,0,null,!1,!1,"",lp);return t._reactRootContainer=M,t[yi]=M.current,oo(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var b=l;l=function(){var Z=za(F);b.call(Z)}}var F=ic(t,0,!1,null,null,!1,!1,"",lp);return t._reactRootContainer=F,t[yi]=F.current,oo(t.nodeType===8?t.parentNode:t),br(function(){Ba(i,F,o,l)}),F}function Ga(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var b=c;c=function(){var F=za(M);b.call(F)}}Ba(i,M,t,c)}else M=w_(o,i,t,c,l);return za(M)}Vf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Yt(i.pendingLanes);o!==0&&(Ll(i,o|1),Tn(i,ye()),(_t&6)===0&&(vs=ye()+500,tr()))}break;case 13:br(function(){var l=wi(t,1);if(l!==null){var c=gn();ni(l,t,1,c)}}),rc(t,1)}},bl=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=gn();ni(i,t,134217728,o)}rc(t,134217728)}},Gf=function(t){if(t.tag===13){var i=ar(t),o=wi(t,i);if(o!==null){var l=gn();ni(o,t,i,l)}rc(t,i)}},Wf=function(){return Tt},Xf=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},Re=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=oa(l);if(!c)throw Error(n(90));ht(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Dt=Zu,Xt=br;var A_={usingClientEntryPoint:!1,Events:[uo,ss,oa,Pe,rt,Zu]},To={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{yt=Wa.inject(R_),pt=Wa}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A_,wn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return E_(t,i,null,o)},wn.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var o=!1,l="",c=ap;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ic(t,1,!1,null,null,o,!1,l,c),t[yi]=i.current,oo(t.nodeType===8?t.parentNode:t),new sc(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=w(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return br(t)},wn.hydrate=function(t,i,o){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!0,o)},wn.hydrateRoot=function(t,i,o){if(!oc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=ap;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=sp(i,null,t,1,o??null,c,!1,h,M),t[yi]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ha(i)},wn.render=function(t,i,o){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!1,o)},wn.unmountComponentAtNode=function(t){if(!Va(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},wn.unstable_batchedUpdates=Zu,wn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Va(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ga(t,i,o,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var gp;function O_(){if(gp)return uc.exports;gp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),uc.exports=F_(),uc.exports}var _p;function k_(){if(_p)return Xa;_p=1;var s=O_();return Xa.createRoot=s.createRoot,Xa.hydrateRoot=s.hydrateRoot,Xa}var B_=k_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="170",z_=0,vp=1,H_=2,vm=1,V_=2,Ii=3,Sr=0,Cn=1,Ni=2,vr=0,Ns=1,Vc=2,xp=3,Sp=4,G_=5,Gr=100,W_=101,X_=102,Y_=103,q_=104,j_=200,$_=201,K_=202,Z_=203,Gc=204,Wc=205,Q_=206,J_=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,ov=214,Xc=0,Yc=1,qc=2,ks=3,jc=4,$c=5,Kc=6,Zc=7,xm=0,av=1,lv=2,xr=0,uv=1,cv=2,fv=3,dv=4,hv=5,pv=6,mv=7,Sm=300,Bs=301,zs=302,Qc=303,Jc=304,Tl=306,ef=1e3,Xr=1001,tf=1002,li=1003,gv=1004,Ya=1005,_i=1006,dc=1007,Yr=1008,zi=1009,ym=1010,Mm=1011,Uo=1012,If=1013,jr=1014,Fi=1015,Io=1016,Nf=1017,Ff=1018,Hs=1020,Em=35902,Tm=1021,wm=1022,ai=1023,Am=1024,Rm=1025,Fs=1026,Vs=1027,Cm=1028,Of=1029,Pm=1030,kf=1031,Bf=1033,gl=33776,_l=33777,vl=33778,xl=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,uf=37496,cf=37808,ff=37809,df=37810,hf=37811,pf=37812,mf=37813,gf=37814,_f=37815,vf=37816,xf=37817,Sf=37818,yf=37819,Mf=37820,Ef=37821,Sl=36492,Tf=36494,wf=36495,Lm=36283,Af=36284,Rf=36285,Cf=36286,_v=3200,vv=3201,xv=0,Sv=1,_r="",qn="srgb",Ws="srgb-linear",wl="linear",Rt="srgb",Ss=7680,yp=519,yv=512,Mv=513,Ev=514,bm=515,Tv=516,wv=517,Av=518,Rv=519,Mp=35044,Ep="300 es",Oi=2e3,Ml=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,Pf=180/Math.PI;function No(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function Rn(s,e,n){return Math.max(e,Math.min(n,s))}function Cv(s,e){return(s%e+e)%e}function pc(s,e,n){return(1-n)*s+n*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],x=r[7],_=r[2],y=r[5],E=r[8],A=a[0],S=a[3],g=a[6],I=a[1],D=a[4],C=a[7],$=a[2],O=a[5],N=a[8];return u[0]=f*A+d*I+p*$,u[3]=f*S+d*D+p*O,u[6]=f*g+d*C+p*N,u[1]=m*A+v*I+x*$,u[4]=m*S+v*D+x*O,u[7]=m*g+v*C+x*N,u[2]=_*A+y*I+E*$,u[5]=_*S+y*D+E*O,u[8]=_*g+y*C+E*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=v*f-d*m,_=d*p-v*u,y=m*u-f*p,E=n*x+r*_+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(a*m-v*r)*A,e[2]=(d*r-a*f)*A,e[3]=_*A,e[4]=(v*n-a*p)*A,e[5]=(a*u-d*n)*A,e[6]=y*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new ot;function Dm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function El(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pv(){const s=El("canvas");return s.style.display="block",s}const Tp={};function bo(s){s in Tp||(Tp[s]=!0,console.warn(s))}function Lv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function bv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Rt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Rt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?wl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const wp=[.64,.33,.3,.6,.15,.06],Ap=[.2126,.7152,.0722],Rp=[.3127,.329],Cp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Ws]:{primaries:wp,whitePoint:Rp,transfer:wl,toXYZ:Cp,fromXYZ:Pp,luminanceCoefficients:Ap,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:wp,whitePoint:Rp,transfer:Rt,toXYZ:Cp,fromXYZ:Pp,luminanceCoefficients:Ap,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});let ys;class Uv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=El("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Bi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bi(n[r]/255)*255):n[r]=Bi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iv=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(gc(a[f].image)):u.push(gc(a[f]))}else u=gc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nv=0;class Pn extends Xs{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Xr,a=Xr,u=_i,f=Yr,d=ai,p=zi,m=Pn.DEFAULT_ANISOTROPY,v=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=No(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Sm;Pn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],x=p[8],_=p[1],y=p[5],E=p[9],A=p[2],S=p[6],g=p[10];if(Math.abs(v-_)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,C=(y+1)/2,$=(g+1)/2,O=(v+_)/4,N=(x+A)/4,X=(E+S)/4;return D>C&&D>$?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=O/r,u=N/r):C>$?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=O/a,u=X/a):$<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt($),r=N/u,a=X/u),this.set(r,a,u,n),this}let I=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(_-v)*(_-v));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(x-A)/I,this.z=(_-v)/I,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fv extends Xs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Um(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Fv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Im extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ov extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];const _=u[f+0],y=u[f+1],E=u[f+2],A=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d===1){e[n+0]=_,e[n+1]=y,e[n+2]=E,e[n+3]=A;return}if(x!==A||p!==_||m!==y||v!==E){let S=1-d;const g=p*_+m*y+v*E+x*A,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const $=Math.sqrt(D),O=Math.atan2($,g*I);S=Math.sin(S*O)/$,d=Math.sin(d*O)/$}const C=d*I;if(p=p*S+_*C,m=m*S+y*C,v=v*S+E*C,x=x*S+A*C,S===1-d){const $=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=$,m*=$,v*=$,x*=$}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],x=u[f],_=u[f+1],y=u[f+2],E=u[f+3];return e[n]=d*E+v*x+p*y-m*_,e[n+1]=p*E+v*_+m*x-d*y,e[n+2]=m*E+v*y+d*_-p*x,e[n+3]=v*E-d*x-p*_-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),x=d(u/2),_=p(r/2),y=p(a/2),E=p(u/2);switch(f){case"XYZ":this._x=_*v*x+m*y*E,this._y=m*y*x-_*v*E,this._z=m*v*E+_*y*x,this._w=m*v*x-_*y*E;break;case"YXZ":this._x=_*v*x+m*y*E,this._y=m*y*x-_*v*E,this._z=m*v*E-_*y*x,this._w=m*v*x+_*y*E;break;case"ZXY":this._x=_*v*x-m*y*E,this._y=m*y*x+_*v*E,this._z=m*v*E+_*y*x,this._w=m*v*x-_*y*E;break;case"ZYX":this._x=_*v*x-m*y*E,this._y=m*y*x+_*v*E,this._z=m*v*E-_*y*x,this._w=m*v*x+_*y*E;break;case"YZX":this._x=_*v*x+m*y*E,this._y=m*y*x+_*v*E,this._z=m*v*E-_*y*x,this._w=m*v*x-_*y*E;break;case"XZY":this._x=_*v*x-m*y*E,this._y=m*y*x-_*v*E,this._z=m*v*E+_*y*x,this._w=m*v*x+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],x=n[10],_=r+d+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(v-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),x=Math.sin((1-n)*v)/m,_=Math.sin(n*v)/m;return this._w=f*x+this._w*_,this._x=r*x+this._x*_,this._y=a*x+this._y*_,this._z=u*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+p*m+f*x-d*v,this.y=r+p*v+d*m-u*x,this.z=a+p*x+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new te,Lp=new Fo;class Oo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ii):ii.fromBufferAttribute(u,f),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qa.copy(r.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ja.subVectors(this.max,Ro),Ms.subVectors(e.a,Ro),Es.subVectors(e.b,Ro),Ts.subVectors(e.c,Ro),fr.subVectors(Es,Ms),dr.subVectors(Ts,Es),Nr.subVectors(Ms,Ts);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Nr.z,Nr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Nr.z,0,-Nr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Nr.y,Nr.x,0];return!vc(n,Ms,Es,Ts,ja)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,Ms,Es,Ts,ja))?!1:($a.crossVectors(fr,dr),n=[$a.x,$a.y,$a.z],vc(n,Ms,Es,Ts,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new te,new te,new te,new te,new te,new te,new te,new te],ii=new te,qa=new Oo,Ms=new te,Es=new te,Ts=new te,fr=new te,dr=new te,Nr=new te,Ro=new te,ja=new te,$a=new te,Fr=new te;function vc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),v=r.dot(Fr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const kv=new Oo,Co=new te,xc=new te;class Al{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):kv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Co,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(xc)),this.expandByPoint(Co.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new te,Sc=new te,Ka=new te,hr=new te,yc=new te,Za=new te,Mc=new te;class Nm{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Sc.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Sc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ka),d=hr.dot(this.direction),p=-hr.dot(Ka),m=hr.lengthSq(),v=Math.abs(1-f*f);let x,_,y,E;if(v>0)if(x=f*p-d,_=f*d-p,E=u*v,x>=0)if(_>=-E)if(_<=E){const A=1/v;x*=A,_*=A,y=x*(x+f*_+2*d)+_*(f*x+_+2*p)+m}else _=u,x=Math.max(0,-(f*_+d)),y=-x*x+_*(_+2*p)+m;else _=-u,x=Math.max(0,-(f*_+d)),y=-x*x+_*(_+2*p)+m;else _<=-E?(x=Math.max(0,-(-f*u+d)),_=x>0?-u:Math.min(Math.max(-u,-p),u),y=-x*x+_*(_+2*p)+m):_<=E?(x=0,_=Math.min(Math.max(-u,-p),u),y=_*(_+2*p)+m):(x=Math.max(0,-(f*u+d)),_=x>0?u:Math.min(Math.max(-u,-p),u),y=-x*x+_*(_+2*p)+m);else _=f>0?-u:u,x=Math.max(0,-(f*_+d)),y=-x*x+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Sc).addScaledVector(Ka,_),y}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,a=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,a=(e.min.x-_.x)*m),v>=0?(u=(e.min.y-_.y)*v,f=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,f=(e.min.y-_.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-_.z)*x,p=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,p=(e.min.z-_.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,u){yc.subVectors(n,e),Za.subVectors(r,e),Mc.crossVectors(yc,Za);let f=this.direction.dot(Mc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hr.subVectors(this.origin,e);const p=d*this.direction.dot(Za.crossVectors(hr,Za));if(p<0)return null;const m=d*this.direction.dot(yc.cross(hr));if(m<0||p+m>f)return null;const v=-d*hr.dot(Mc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,u,f,d,p,m,v,x,_,y,E,A,S){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,x,_,y,E,A,S)}set(e,n,r,a,u,f,d,p,m,v,x,_,y,E,A,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=x,g[14]=_,g[3]=y,g[7]=E,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ws.setFromMatrixColumn(e,0).length(),u=1/ws.setFromMatrixColumn(e,1).length(),f=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const _=f*v,y=f*x,E=d*v,A=d*x;n[0]=p*v,n[4]=-p*x,n[8]=m,n[1]=y+E*m,n[5]=_-A*m,n[9]=-d*p,n[2]=A-_*m,n[6]=E+y*m,n[10]=f*p}else if(e.order==="YXZ"){const _=p*v,y=p*x,E=m*v,A=m*x;n[0]=_+A*d,n[4]=E*d-y,n[8]=f*m,n[1]=f*x,n[5]=f*v,n[9]=-d,n[2]=y*d-E,n[6]=A+_*d,n[10]=f*p}else if(e.order==="ZXY"){const _=p*v,y=p*x,E=m*v,A=m*x;n[0]=_-A*d,n[4]=-f*x,n[8]=E+y*d,n[1]=y+E*d,n[5]=f*v,n[9]=A-_*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const _=f*v,y=f*x,E=d*v,A=d*x;n[0]=p*v,n[4]=E*m-y,n[8]=_*m+A,n[1]=p*x,n[5]=A*m+_,n[9]=y*m-E,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const _=f*p,y=f*m,E=d*p,A=d*m;n[0]=p*v,n[4]=A-_*x,n[8]=E*x+y,n[1]=x,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*x+E,n[10]=_-A*x}else if(e.order==="XZY"){const _=f*p,y=f*m,E=d*p,A=d*m;n[0]=p*v,n[4]=-x,n[8]=m*v,n[1]=_*x+A,n[5]=f*v,n[9]=y*x-E,n[2]=E*x-y,n[6]=d*v,n[10]=A*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bv,e,zv)}lookAt(e,n,r){const a=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),pr.crossVectors(r,Nn),pr.lengthSq()===0&&(Math.abs(r.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),pr.crossVectors(r,Nn)),pr.normalize(),Qa.crossVectors(Nn,pr),a[0]=pr.x,a[4]=Qa.x,a[8]=Nn.x,a[1]=pr.y,a[5]=Qa.y,a[9]=Nn.y,a[2]=pr.z,a[6]=Qa.z,a[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],x=r[5],_=r[9],y=r[13],E=r[2],A=r[6],S=r[10],g=r[14],I=r[3],D=r[7],C=r[11],$=r[15],O=a[0],N=a[4],X=a[8],P=a[12],R=a[1],B=a[5],oe=a[9],ee=a[13],fe=a[2],he=a[6],se=a[10],le=a[14],k=a[3],ae=a[7],re=a[11],U=a[15];return u[0]=f*O+d*R+p*fe+m*k,u[4]=f*N+d*B+p*he+m*ae,u[8]=f*X+d*oe+p*se+m*re,u[12]=f*P+d*ee+p*le+m*U,u[1]=v*O+x*R+_*fe+y*k,u[5]=v*N+x*B+_*he+y*ae,u[9]=v*X+x*oe+_*se+y*re,u[13]=v*P+x*ee+_*le+y*U,u[2]=E*O+A*R+S*fe+g*k,u[6]=E*N+A*B+S*he+g*ae,u[10]=E*X+A*oe+S*se+g*re,u[14]=E*P+A*ee+S*le+g*U,u[3]=I*O+D*R+C*fe+$*k,u[7]=I*N+D*B+C*he+$*ae,u[11]=I*X+D*oe+C*se+$*re,u[15]=I*P+D*ee+C*le+$*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],x=e[6],_=e[10],y=e[14],E=e[3],A=e[7],S=e[11],g=e[15];return E*(+u*p*x-a*m*x-u*d*_+r*m*_+a*d*y-r*p*y)+A*(+n*p*y-n*m*_+u*f*_-a*f*y+a*m*v-u*p*v)+S*(+n*m*x-n*d*y-u*f*x+r*f*y+u*d*v-r*m*v)+g*(-a*d*v-n*p*x+n*d*_+a*f*x-r*f*_+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=e[9],_=e[10],y=e[11],E=e[12],A=e[13],S=e[14],g=e[15],I=x*S*m-A*_*m+A*p*y-d*S*y-x*p*g+d*_*g,D=E*_*m-v*S*m-E*p*y+f*S*y+v*p*g-f*_*g,C=v*A*m-E*x*m+E*d*y-f*A*y-v*d*g+f*x*g,$=E*x*p-v*A*p-E*d*_+f*A*_+v*d*S-f*x*S,O=n*I+r*D+a*C+u*$;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=I*N,e[1]=(A*_*u-x*S*u-A*a*y+r*S*y+x*a*g-r*_*g)*N,e[2]=(d*S*u-A*p*u+A*a*m-r*S*m-d*a*g+r*p*g)*N,e[3]=(x*p*u-d*_*u-x*a*m+r*_*m+d*a*y-r*p*y)*N,e[4]=D*N,e[5]=(v*S*u-E*_*u+E*a*y-n*S*y-v*a*g+n*_*g)*N,e[6]=(E*p*u-f*S*u-E*a*m+n*S*m+f*a*g-n*p*g)*N,e[7]=(f*_*u-v*p*u+v*a*m-n*_*m-f*a*y+n*p*y)*N,e[8]=C*N,e[9]=(E*x*u-v*A*u-E*r*y+n*A*y+v*r*g-n*x*g)*N,e[10]=(f*A*u-E*d*u+E*r*m-n*A*m-f*r*g+n*d*g)*N,e[11]=(v*d*u-f*x*u-v*r*m+n*x*m+f*r*y-n*d*y)*N,e[12]=$*N,e[13]=(v*A*a-E*x*a+E*r*_-n*A*_-v*r*S+n*x*S)*N,e[14]=(E*d*a-f*A*a-E*r*p+n*A*p+f*r*S-n*d*S)*N,e[15]=(f*x*a-v*d*a+v*r*p-n*x*p-f*r*_+n*d*_)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,x=d+d,_=u*m,y=u*v,E=u*x,A=f*v,S=f*x,g=d*x,I=p*m,D=p*v,C=p*x,$=r.x,O=r.y,N=r.z;return a[0]=(1-(A+g))*$,a[1]=(y+C)*$,a[2]=(E-D)*$,a[3]=0,a[4]=(y-C)*O,a[5]=(1-(_+g))*O,a[6]=(S+I)*O,a[7]=0,a[8]=(E+D)*N,a[9]=(S-I)*N,a[10]=(1-(_+A))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=ws.set(a[0],a[1],a[2]).length();const f=ws.set(a[4],a[5],a[6]).length(),d=ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,v=1/f,x=1/d;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=v,ri.elements[5]*=v,ri.elements[6]*=v,ri.elements[8]*=x,ri.elements[9]*=x,ri.elements[10]*=x,n.setFromRotationMatrix(ri),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Oi){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),x=(n+e)/(n-e),_=(r+a)/(r-a);let y,E;if(d===Oi)y=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Ml)y=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Oi){const p=this.elements,m=1/(n-e),v=1/(r-a),x=1/(f-u),_=(n+e)*m,y=(r+a)*v;let E,A;if(d===Oi)E=(f+u)*x,A=-2*x;else if(d===Ml)E=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new te,ri=new Vt,Bv=new te(0,0,0),zv=new te(1,1,1),pr=new te,Qa=new te,Nn=new te,bp=new Vt,Dp=new Fo;class Hi{constructor(e=0,n=0,r=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],x=a[2],_=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Rn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hv=0;const Up=new te,As=new Fo,bi=new Vt,Ja=new te,Po=new te,Vv=new te,Gv=new Fo,Ip=new te(1,0,0),Np=new te(0,1,0),Fp=new te(0,0,1),Op={type:"added"},Wv={type:"removed"},Rs={type:"childadded",child:null},Ec={type:"childremoved",child:null};class Ln extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new te,n=new Hi,r=new Fo,a=new te(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ot}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ja.copy(e):Ja.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Po,Ja,this.up):bi.lookAt(Ja,Po,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),As.setFromRotationMatrix(bi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Op),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wv),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Op),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,Vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),x=f(e.shapes),_=f(e.skeletons),y=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Ln.DEFAULT_UP=new te(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new te,Di=new te,Tc=new te,Ui=new te,Cs=new te,Ps=new te,kp=new te,wc=new te,Ac=new te,Rc=new te,Cc=new Ht,Pc=new Ht,Lc=new Ht;class oi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Di.subVectors(r,n),Tc.subVectors(e,n);const f=si.dot(si),d=si.dot(Di),p=si.dot(Tc),m=Di.dot(Di),v=Di.dot(Tc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const _=1/x,y=(m*p-d*v)*_,E=(f*v-d*p)*_;return u.set(1-y-E,E,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ui)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ui.x),p.addScaledVector(f,Ui.y),p.addScaledVector(d,Ui.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Cc.setScalar(0),Pc.setScalar(0),Lc.setScalar(0),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,r),Lc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Cc,u.x),f.addScaledVector(Pc,u.y),f.addScaledVector(Lc,u.z),f}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Di.subVectors(e,n),si.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),Ps.subVectors(u,r),wc.subVectors(e,r);const p=Cs.dot(wc),m=Ps.dot(wc);if(p<=0&&m<=0)return n.copy(r);Ac.subVectors(e,a);const v=Cs.dot(Ac),x=Ps.dot(Ac);if(v>=0&&x<=v)return n.copy(a);const _=p*x-v*m;if(_<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Cs,f);Rc.subVectors(e,u);const y=Cs.dot(Rc),E=Ps.dot(Rc);if(E>=0&&y<=E)return n.copy(u);const A=y*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Ps,d);const S=v*E-y*x;if(S<=0&&x-v>=0&&y-E>=0)return kp.subVectors(u,a),d=(x-v)/(x-v+(y-E)),n.copy(a).addScaledVector(kp,d);const g=1/(S+A+_);return f=A*g,d=_*g,n.copy(r).addScaledVector(Cs,f).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},el={h:0,s:0,l:0};function bc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=vt.workingColorSpace){return this.r=e,this.g=n,this.b=r,vt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=vt.workingColorSpace){if(e=Cv(e,1),n=Rn(n,0,1),r=Rn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=bc(f,u,e+1/3),this.g=bc(f,u,e),this.b=bc(f,u,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,n=qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=Om[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return vt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Rn(fn.r*255,0,255))*65536+Math.round(Rn(fn.g*255,0,255))*256+Math.round(Rn(fn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,u=fn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=v<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=qn){vt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(el);const r=pc(mr.h,el.h,n),a=pc(mr.s,el.s,n),u=pc(mr.l,el.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new wt;wt.NAMES=Om;let Xv=0;class ko extends Xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=No(),this.name="",this.blending=Ns,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gc&&(r.blendSrc=this.blendSrc),this.blendDst!==Wc&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class km extends ko{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new te,tl=new Pt;class ui{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Mp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),u=An(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mp&&(e.usage=this.usage),e}}class Bm extends ui{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class zm extends ui{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qr extends ui{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Yv=0;const Yn=new Vt,Dc=new Ln,Ls=new te,Fn=new Oo,Lo=new Oo,en=new te;class Gi extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dm(e)?zm:Bm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new qr(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Fn.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(Fn.min,Lo.min),Fn.expandByPoint(en),en.addVectors(Fn.max,Lo.max),Fn.expandByPoint(en)):(Fn.expandByPoint(Lo.min),Fn.expandByPoint(Lo.max))}Fn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)en.fromBufferAttribute(d,m),p&&(Ls.fromBufferAttribute(e,m),en.add(Ls)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<r.count;X++)d[X]=new te,p[X]=new te;const m=new te,v=new te,x=new te,_=new Pt,y=new Pt,E=new Pt,A=new te,S=new te;function g(X,P,R){m.fromBufferAttribute(r,X),v.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),_.fromBufferAttribute(u,X),y.fromBufferAttribute(u,P),E.fromBufferAttribute(u,R),v.sub(m),x.sub(m),y.sub(_),E.sub(_);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(B),S.copy(x).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(B),d[X].add(A),d[P].add(A),d[R].add(A),p[X].add(S),p[P].add(S),p[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,P=I.length;X<P;++X){const R=I[X],B=R.start,oe=R.count;for(let ee=B,fe=B+oe;ee<fe;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new te,C=new te,$=new te,O=new te;function N(X){$.fromBufferAttribute(a,X),O.copy($);const P=d[X];D.copy(P),D.sub($.multiplyScalar($.dot(P))).normalize(),C.crossVectors(O,P);const B=C.dot(p[X])<0?-1:1;f.setXYZW(X,D.x,D.y,D.z,B)}for(let X=0,P=I.length;X<P;++X){const R=I[X],B=R.start,oe=R.count;for(let ee=B,fe=B+oe;ee<fe;ee+=3)N(e.getX(ee+0)),N(e.getX(ee+1)),N(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const a=new te,u=new te,f=new te,d=new te,p=new te,m=new te,v=new te,x=new te;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),A=e.getX(_+1),S=e.getX(_+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),v.subVectors(f,u),x.subVectors(a,u),v.cross(x),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let _=0,y=n.count;_<y;_+=3)a.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),f.fromBufferAttribute(n,_+2),v.subVectors(f,u),x.subVectors(a,u),v.cross(x),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,x=d.normalized,_=new m.constructor(p.length*v);let y=0,E=0;for(let A=0,S=p.length;A<S;A++){d.isInterleavedBufferAttribute?y=p[A]*d.data.stride+d.offset:y=p[A]*v;for(let g=0;g<v;g++)_[E++]=m[y++]}return new ui(_,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,x=m.length;v<x;v++){const _=m[v],y=e(_,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,_=m.length;x<_;x++){const y=m[x];v.push(y.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],x=u[m];for(let _=0,y=x.length;_<y;_++)v.push(x[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bp=new Vt,Or=new Nm,nl=new Al,zp=new te,il=new te,rl=new te,sl=new te,Uc=new te,ol=new te,Hp=new te,al=new te;class ki extends Ln{constructor(e=new Gi,n=new km){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ol.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],x=u[p];v!==0&&(Uc.fromBufferAttribute(x,e),f?ol.addScaledVector(Uc,v):ol.addScaledVector(Uc.sub(n),v))}n.add(ol)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(nl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(nl,zp)===null||Or.origin.distanceToSquared(zp)>(e.far-e.near)**2))&&(Bp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Bp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,_=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const S=_[E],g=f[S.materialIndex],I=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=I,$=D;C<$;C+=3){const O=d.getX(C),N=d.getX(C+1),X=d.getX(C+2);a=ll(this,g,e,r,m,v,x,O,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,g=A;S<g;S+=3){const I=d.getX(S),D=d.getX(S+1),C=d.getX(S+2);a=ll(this,f,e,r,m,v,x,I,D,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const S=_[E],g=f[S.materialIndex],I=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=I,$=D;C<$;C+=3){const O=C,N=C+1,X=C+2;a=ll(this,g,e,r,m,v,x,O,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let S=E,g=A;S<g;S+=3){const I=S,D=S+1,C=S+2;a=ll(this,f,e,r,m,v,x,I,D,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function qv(s,e,n,r,a,u,f,d){let p;if(e.side===Cn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===Sr,d),p===null)return null;al.copy(d),al.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(al);return m<n.near||m>n.far?null:{distance:m,point:al.clone(),object:s}}function ll(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,il),s.getVertexPosition(p,rl),s.getVertexPosition(m,sl);const v=qv(s,e,n,r,il,rl,sl,Hp);if(v){const x=new te;oi.getBarycoord(Hp,il,rl,sl,x),a&&(v.uv=oi.getInterpolatedAttribute(a,d,p,m,x,new Pt)),u&&(v.uv1=oi.getInterpolatedAttribute(u,d,p,m,x,new Pt)),f&&(v.normal=oi.getInterpolatedAttribute(f,d,p,m,x,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new te,materialIndex:0};oi.getNormal(il,rl,sl,_.normal),v.face=_,v.barycoord=x}return v}class Bo extends Gi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],x=[];let _=0,y=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,a,f,2),E("x","z","y",1,-1,e,r,-n,a,f,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new qr(m,3)),this.setAttribute("normal",new qr(v,3)),this.setAttribute("uv",new qr(x,2));function E(A,S,g,I,D,C,$,O,N,X,P){const R=C/N,B=$/X,oe=C/2,ee=$/2,fe=O/2,he=N+1,se=X+1;let le=0,k=0;const ae=new te;for(let re=0;re<se;re++){const U=re*B-ee;for(let ne=0;ne<he;ne++){const De=ne*R-oe;ae[A]=De*I,ae[S]=U*D,ae[g]=fe,m.push(ae.x,ae.y,ae.z),ae[A]=0,ae[S]=0,ae[g]=O>0?1:-1,v.push(ae.x,ae.y,ae.z),x.push(ne/N),x.push(1-re/X),le+=1}}for(let re=0;re<X;re++)for(let U=0;U<N;U++){const ne=_+U+he*re,De=_+U+he*(re+1),K=_+(U+1)+he*(re+1),ue=_+(U+1)+he*re;p.push(ne,De,ue),p.push(De,K,ue),k+=6}d.addGroup(y,k,P),y+=k,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=Gs(s[n]);for(const a in r)e[a]=r[a]}return e}function jv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Hm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const $v={clone:Gs,merge:_n};var Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends ko{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Vm extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new te,Vp=new Pt,Gp=new Pt;class jn extends Vm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pf*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,Vp,Gp),n.subVectors(Gp,Vp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ds=1;class Qv extends Ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(bs,Ds,e,n);a.layers=this.layers,this.add(a);const u=new jn(bs,Ds,e,n);u.layers=this.layers,this.add(u);const f=new jn(bs,Ds,e,n);f.layers=this.layers,this.add(f);const d=new jn(bs,Ds,e,n);d.layers=this.layers,this.add(d);const p=new jn(bs,Ds,e,n);p.layers=this.layers,this.add(p);const m=new jn(bs,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ml)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(x,_,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Gm extends Pn{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Gm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Bo(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:vr});u.uniforms.tEquirect.value=n;const f=new ki(a,u),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=_i),new Qv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Ic=new te,e0=new te,t0=new ot;class Hr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Ic.subVectors(r,n).cross(e0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ic),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||t0.getNormalMatrix(e),a=this.coplanarPoint(Ic).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Al,ul=new te;class Wm{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,f=new Hr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],x=a[6],_=a[7],y=a[8],E=a[9],A=a[10],S=a[11],g=a[12],I=a[13],D=a[14],C=a[15];if(r[0].setComponents(p-u,_-m,S-y,C-g).normalize(),r[1].setComponents(p+u,_+m,S+y,C+g).normalize(),r[2].setComponents(p+f,_+v,S+E,C+I).normalize(),r[3].setComponents(p-f,_-v,S-E,C-I).normalize(),r[4].setComponents(p-d,_-x,S-A,C-D).normalize(),n===Oi)r[5].setComponents(p+d,_+x,S+A,C+D).normalize();else if(n===Ml)r[5].setComponents(d,x,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ul.x=a.normal.x>0?e.max.x:e.min.x,ul.y=a.normal.y>0?e.max.y:e.min.y,ul.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xm(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function n0(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,x=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const v=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,v);else{x.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<x.length;y++){const E=x[_],A=x[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,x[_]=A)}x.length=_+1;for(let y=0,E=x.length;y<E;y++){const A=x[y];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Rl extends Gi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,x=e/d,_=n/p,y=[],E=[],A=[],S=[];for(let g=0;g<v;g++){const I=g*_-f;for(let D=0;D<m;D++){const C=D*x-u;E.push(C,-I,0),A.push(0,0,1),S.push(D/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const D=I+m*g,C=I+m*(g+1),$=I+1+m*(g+1),O=I+1+m*g;y.push(D,C,O),y.push(C,$,O)}this.setIndex(y),this.setAttribute("position",new qr(E,3)),this.setAttribute("normal",new qr(A,3)),this.setAttribute("uv",new qr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ES=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:u0,aomap_pars_fragment:c0,batching_pars_vertex:f0,batching_vertex:d0,begin_vertex:h0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:w0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:L0,emissivemap_fragment:b0,emissivemap_pars_fragment:D0,colorspace_fragment:U0,colorspace_pars_fragment:I0,envmap_fragment:N0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:$0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:q0,lights_pars_begin:j0,lights_toon_fragment:K0,lights_toon_pars_fragment:Z0,lights_phong_fragment:Q0,lights_phong_pars_fragment:J0,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:lx,map_fragment:ux,map_pars_fragment:cx,map_particle_fragment:fx,map_particle_pars_fragment:dx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:_x,morphtarget_pars_vertex:vx,morphtarget_vertex:xx,normal_fragment_begin:Sx,normal_fragment_maps:yx,normal_pars_fragment:Mx,normal_pars_vertex:Ex,normal_vertex:Tx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Cx,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:bx,premultiplied_alpha_fragment:Dx,project_vertex:Ux,dithering_fragment:Ix,dithering_pars_fragment:Nx,roughnessmap_fragment:Fx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:Bx,shadowmap_vertex:zx,shadowmask_pars_fragment:Hx,skinbase_vertex:Vx,skinning_pars_vertex:Gx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:jx,tonemapping_pars_fragment:$x,transmission_fragment:Kx,transmission_pars_fragment:Zx,uv_pars_fragment:Qx,uv_pars_vertex:Jx,uv_vertex:eS,worldpos_vertex:tS,background_vert:nS,background_frag:iS,backgroundCube_vert:rS,backgroundCube_frag:sS,cube_vert:oS,cube_frag:aS,depth_vert:lS,depth_frag:uS,distanceRGBA_vert:cS,distanceRGBA_frag:fS,equirect_vert:dS,equirect_frag:hS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:gS,meshbasic_frag:_S,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:SS,meshmatcap_frag:yS,meshnormal_vert:MS,meshnormal_frag:ES,meshphong_vert:TS,meshphong_frag:wS,meshphysical_vert:AS,meshphysical_frag:RS,meshtoon_vert:CS,meshtoon_frag:PS,points_vert:LS,points_frag:bS,shadow_vert:DS,shadow_frag:US,sprite_vert:IS,sprite_frag:NS},Ce={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:_n([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:_n([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:_n([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:_n([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:_n([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:_n([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:_n([Ce.common,Ce.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:_n([Ce.lights,Ce.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};gi.physical={uniforms:_n([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const cl={r:0,b:0,g:0},Br=new Hi,FS=new Vt;function OS(s,e,n,r,a,u,f){const d=new wt(0);let p=u===!0?0:1,m,v,x=null,_=0,y=null;function E(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?n:e).get(D)),D}function A(I){let D=!1;const C=E(I);C===null?g(d,p):C&&C.isColor&&(g(C,1),D=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,f):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(I,D){const C=E(D);C&&(C.isCubeTexture||C.mapping===Tl)?(v===void 0&&(v=new ki(new Bo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Gs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function($,O,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Br.copy(D.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(Br)),v.material.toneMapped=vt.getTransfer(C.colorSpace)!==Rt,(x!==C||_!==C.version||y!==s.toneMapping)&&(v.material.needsUpdate=!0,x=C,_=C.version,y=s.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ki(new Rl(2,2),new Vi({name:"BackgroundMaterial",uniforms:Gs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=vt.getTransfer(C.colorSpace)!==Rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||_!==C.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,x=C,_=C.version,y=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,D){I.getRGB(cl,Hm(s)),r.buffers.color.setClear(cl.r,cl.g,cl.b,D,f)}return{getClearColor:function(){return d},setClearColor:function(I,D=1){d.set(I),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(d,p)},render:A,addToRenderList:S}}function kS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let u=a,f=!1;function d(R,B,oe,ee,fe){let he=!1;const se=x(ee,oe,B);u!==se&&(u=se,m(u.object)),he=y(R,ee,oe,fe),he&&E(R,ee,oe,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(R,B,oe,ee),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function x(R,B,oe){const ee=oe.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let he=fe[B.id];he===void 0&&(he={},fe[B.id]=he);let se=he[ee];return se===void 0&&(se=_(p()),he[ee]=se),se}function _(R){const B=[],oe=[],ee=[];for(let fe=0;fe<n;fe++)B[fe]=0,oe[fe]=0,ee[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:ee,object:R,attributes:{},index:null}}function y(R,B,oe,ee){const fe=u.attributes,he=B.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){const re=fe[k];let U=he[k];if(U===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==ee}function E(R,B,oe,ee){const fe={},he=B.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){let re=he[k];re===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[k]=U,se++}u.attributes=fe,u.attributesNum=se,u.index=ee}function A(){const R=u.newAttributes;for(let B=0,oe=R.length;B<oe;B++)R[B]=0}function S(R){g(R,0)}function g(R,B){const oe=u.newAttributes,ee=u.enabledAttributes,fe=u.attributeDivisors;oe[R]=1,ee[R]===0&&(s.enableVertexAttribArray(R),ee[R]=1),fe[R]!==B&&(s.vertexAttribDivisor(R,B),fe[R]=B)}function I(){const R=u.newAttributes,B=u.enabledAttributes;for(let oe=0,ee=B.length;oe<ee;oe++)B[oe]!==R[oe]&&(s.disableVertexAttribArray(oe),B[oe]=0)}function D(R,B,oe,ee,fe,he,se){se===!0?s.vertexAttribIPointer(R,B,oe,fe,he):s.vertexAttribPointer(R,B,oe,ee,fe,he)}function C(R,B,oe,ee){A();const fe=ee.attributes,he=oe.getAttributes(),se=B.defaultAttributeValues;for(const le in he){const k=he[le];if(k.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const De=ne.buffer,K=ne.type,ue=ne.bytesPerElement,Me=K===s.INT||K===s.UNSIGNED_INT||ae.gpuType===If;if(ae.isInterleavedBufferAttribute){const ve=ae.data,we=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<k.locationSize;Ke++)g(k.location+Ke,ve.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<k.locationSize;Ke++)S(k.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ke=0;Ke<k.locationSize;Ke++)D(k.location+Ke,U/k.locationSize,K,re,we*ue,(Ue+U/k.locationSize*Ke)*ue,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)S(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ve=0;ve<k.locationSize;ve++)D(k.location+ve,U/k.locationSize,K,re,U*ue,U/k.locationSize*ve*ue,Me)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}I()}function $(){X();for(const R in r){const B=r[R];for(const oe in B){const ee=B[oe];for(const fe in ee)v(ee[fe].object),delete ee[fe];delete B[oe]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const oe in B){const ee=B[oe];for(const fe in ee)v(ee[fe].object),delete ee[fe];delete B[oe]}delete r[R.id]}function N(R){for(const B in r){const oe=r[B];if(oe[R.id]===void 0)continue;const ee=oe[R.id];for(const fe in ee)v(ee[fe].object),delete ee[fe];delete oe[R.id]}}function X(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:S,disableUnusedAttributes:I}}function BS(s,e,n){let r;function a(m){r=m}function u(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,x){x!==0&&(s.drawArraysInstanced(r,m,v,x),n.update(v,r,x))}function d(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,x);let y=0;for(let E=0;E<x;E++)y+=v[E];n.update(y,r,1)}function p(m,v,x,_){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],v[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,_,0,x);let E=0;for(let A=0;A<x;A++)E+=v[A]*_[A];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function zS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ai&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==zi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Fi&&!X)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:$,maxSamples:O}}function HS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Hr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||r!==0||a;return a=_,r=x.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,_){n=v(x,_,0)},this.setState=function(x,_,y){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,g=s.get(x);if(!a||E===null||E.length===0||u&&!S)u?v(null):m();else{const I=u?0:r,D=I*4;let C=g.clippingState||null;p.value=C,C=v(E,_,D,y);for(let $=0;$!==D;++$)C[$]=n[$];g.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,_,y,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=p.value,E!==!0||S===null){const g=y+A*4,I=_.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,C=y;D!==A;++D,C+=4)f.copy(x[D]).applyMatrix4(I,d),f.normal.toArray(S,C),S[C+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function VS(s){let e=new WeakMap;function n(f,d){return d===Qc?f.mapping=Bs:d===Jc&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qc||d===Jc)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Jv(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class GS extends Vm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Wp=[.125,.215,.35,.446,.526,.582],Wr=20,Nc=new GS,Xp=new wt;let Fc=null,Oc=0,kc=0,Bc=!1;const Vr=(1+Math.sqrt(5))/2,Us=1/Vr,Yp=[new te(-Vr,Us,0),new te(Vr,Us,0),new te(-Us,0,Vr),new te(Us,0,Vr),new te(0,Vr,-Us),new te(0,Vr,Us),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,kc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Io,format:ai,colorSpace:Ws,depthBuffer:!1},a=jp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WS(u)),this._blurMaterial=XS(u,e,n)}return a}_compileMaterial(e){const n=new ki(this._lodPlanes[0],e);this._renderer.compile(n,Nc)}_sceneToCubeUV(e,n,r,a){const d=new jn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,_=v.toneMapping;v.getClearColor(Xp),v.toneMapping=xr,v.autoClear=!1;const y=new km({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),E=new ki(new Bo,y);let A=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,A=!0):(y.color.copy(Xp),A=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;fl(a,I*D,g>2?D:0,D,D),v.setRenderTarget(a),A&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=_,v.autoClear=x,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new ki(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;fl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Nc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Yp[(a-u-1)%Yp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new ki(this._lodPlanes[a],m),_=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Wr-1),A=u/E,S=isFinite(u)?1+Math.floor(v*A):Wr;S>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Wr}`);const g=[];let I=0;for(let N=0;N<Wr;++N){const X=N/A,P=Math.exp(-X*X/2);g.push(P),N===0?I+=P:N<S&&(I+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/I;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=g,_.latitudinal.value=f==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-r;const C=this._sizeLods[a],$=3*C*(a>D-Is?a-D+Is:0),O=4*(this._cubeSize-C);fl(n,$,O,3*C,2*C),p.setRenderTarget(n),p.render(x,Nc)}}function WS(s){const e=[],n=[],r=[];let a=s;const u=s-Is+1+Wp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Is?p=Wp[f-s+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,x=1+m,_=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,E=6,A=3,S=2,g=1,I=new Float32Array(A*E*y),D=new Float32Array(S*E*y),C=new Float32Array(g*E*y);for(let O=0;O<y;O++){const N=O%3*2/3-1,X=O>2?0:-1,P=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];I.set(P,A*E*O),D.set(_,S*E*O);const R=[O,O,O,O,O,O];C.set(R,g*E*O)}const $=new Gi;$.setAttribute("position",new ui(I,A)),$.setAttribute("uv",new ui(D,S)),$.setAttribute("faceIndex",new ui(C,g)),e.push($),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function jp(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Tl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function XS(s,e,n){const r=new Float32Array(Wr),a=new te(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function $p(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Kp(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function zf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Qc||p===Jc,v=p===Bs||p===zs;if(m||v){let x=e.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new qp(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new qp(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function qS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&bo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function jS(s,e,n,r){const a={},u=new WeakMap;function f(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const A=_.morphAttributes[E];for(let S=0,g=A.length;S<g;S++)e.remove(A[S])}_.removeEventListener("dispose",f),delete a[_.id];const y=u.get(_);y&&(e.remove(y),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(x,_){return a[_.id]===!0||(_.addEventListener("dispose",f),a[_.id]=!0,n.memory.geometries++),_}function p(x){const _=x.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const y=x.morphAttributes;for(const E in y){const A=y[E];for(let S=0,g=A.length;S<g;S++)e.update(A[S],s.ARRAY_BUFFER)}}function m(x){const _=[],y=x.index,E=x.attributes.position;let A=0;if(y!==null){const I=y.array;A=y.version;for(let D=0,C=I.length;D<C;D+=3){const $=I[D+0],O=I[D+1],N=I[D+2];_.push($,O,O,N,N,$)}}else if(E!==void 0){const I=E.array;A=E.version;for(let D=0,C=I.length/3-1;D<C;D+=3){const $=D+0,O=D+1,N=D+2;_.push($,O,O,N,N,$)}}else return;const S=new(Dm(_)?zm:Bm)(_,1);S.version=A;const g=u.get(x);g&&e.remove(g),u.set(x,S)}function v(x){const _=u.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:v}}function $S(s,e,n){let r;function a(_){r=_}let u,f;function d(_){u=_.type,f=_.bytesPerElement}function p(_,y){s.drawElements(r,y,u,_*f),n.update(y,r,1)}function m(_,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,_*f,E),n.update(y,r,E))}function v(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,_,0,E);let S=0;for(let g=0;g<E;g++)S+=y[g];n.update(S,r,1)}function x(_,y,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<_.length;g++)m(_[g]/f,y[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,_,0,A,0,E);let g=0;for(let I=0;I<E;I++)g+=y[I]*A[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function KS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function ZS(s,e,n){const r=new WeakMap,a=new Ht;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==x){let R=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let $=d.attributes.position.count*C,O=1;$>e.maxTextureSize&&(O=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const N=new Float32Array($*O*4*x),X=new Im(N,$,O,x);X.type=Fi,X.needsUpdate=!0;const P=C*4;for(let B=0;B<x;B++){const oe=g[B],ee=I[B],fe=D[B],he=$*O*4*B;for(let se=0;se<oe.count;se++){const le=se*P;E===!0&&(a.fromBufferAttribute(oe,se),N[he+le+0]=a.x,N[he+le+1]=a.y,N[he+le+2]=a.z,N[he+le+3]=0),A===!0&&(a.fromBufferAttribute(ee,se),N[he+le+4]=a.x,N[he+le+5]=a.y,N[he+le+6]=a.z,N[he+le+7]=0),S===!0&&(a.fromBufferAttribute(fe,se),N[he+le+8]=a.x,N[he+le+9]=a.y,N[he+le+10]=a.z,N[he+le+11]=fe.itemSize===4?a.w:1)}}_={count:x,texture:X,size:new Pt($,O)},r.set(d,_),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:u}}function QS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,x=e.get(p,v);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;a.get(_)!==m&&(_.update(),a.set(_,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class Ym extends Pn{constructor(e,n,r,a,u,f,d,p,m,v=Fs){if(v!==Fs&&v!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Fs&&(r=jr),r===void 0&&v===Vs&&(r=Hs),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:li,this.minFilter=p!==void 0?p:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qm=new Pn,Zp=new Ym(1,1),jm=new Im,$m=new Ov,Km=new Gm,Qp=[],Jp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function Ys(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=Qp[a];if(u===void 0&&(u=new Float32Array(a),Qp[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Cl(s,e){let n=Jp[e];n===void 0&&(n=new Int32Array(e),Jp[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function JS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ey(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function ty(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function ny(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function iy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;nm.set(r),s.uniformMatrix2fv(this.addr,!1,nm),Kt(n,r)}}function ry(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;tm.set(r),s.uniformMatrix3fv(this.addr,!1,tm),Kt(n,r)}}function sy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;em.set(r),s.uniformMatrix4fv(this.addr,!1,em),Kt(n,r)}}function oy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function ay(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function ly(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function uy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function cy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function fy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function py(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Zp.compareFunction=bm,u=Zp):u=qm,n.setTexture2D(e||u,a)}function my(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$m,a)}function gy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Km,a)}function _y(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||jm,a)}function vy(s){switch(s){case 5126:return JS;case 35664:return ey;case 35665:return ty;case 35666:return ny;case 35674:return iy;case 35675:return ry;case 35676:return sy;case 5124:case 35670:return oy;case 35667:case 35671:return ay;case 35668:case 35672:return ly;case 35669:case 35673:return uy;case 5125:return cy;case 36294:return fy;case 36295:return dy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return _y}}function xy(s,e){s.uniform1fv(this.addr,e)}function Sy(s,e){const n=Ys(e,this.size,2);s.uniform2fv(this.addr,n)}function yy(s,e){const n=Ys(e,this.size,3);s.uniform3fv(this.addr,n)}function My(s,e){const n=Ys(e,this.size,4);s.uniform4fv(this.addr,n)}function Ey(s,e){const n=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Ty(s,e){const n=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function wy(s,e){const n=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Ay(s,e){s.uniform1iv(this.addr,e)}function Ry(s,e){s.uniform2iv(this.addr,e)}function Cy(s,e){s.uniform3iv(this.addr,e)}function Py(s,e){s.uniform4iv(this.addr,e)}function Ly(s,e){s.uniform1uiv(this.addr,e)}function by(s,e){s.uniform2uiv(this.addr,e)}function Dy(s,e){s.uniform3uiv(this.addr,e)}function Uy(s,e){s.uniform4uiv(this.addr,e)}function Iy(s,e,n){const r=this.cache,a=e.length,u=Cl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||qm,u[f])}function Ny(s,e,n){const r=this.cache,a=e.length,u=Cl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||$m,u[f])}function Fy(s,e,n){const r=this.cache,a=e.length,u=Cl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Km,u[f])}function Oy(s,e,n){const r=this.cache,a=e.length,u=Cl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||jm,u[f])}function ky(s){switch(s){case 5126:return xy;case 35664:return Sy;case 35665:return yy;case 35666:return My;case 35674:return Ey;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return by;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}class By{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=vy(n.type)}}class zy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ky(n.type)}}class Hy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function im(s,e){s.seq.push(e),s.map[e.id]=e}function Vy(s,e,n){const r=s.name,a=r.length;for(zc.lastIndex=0;;){const u=zc.exec(r),f=zc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){im(n,m===void 0?new By(d,s,e):new zy(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new Hy(d),im(n,x)),n=x}}}class yl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);Vy(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function rm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const Gy=37297;let Wy=0;function Xy(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const sm=new ot;function Yy(s){vt._getMatrix(sm,vt.workingColorSpace,s);const e=`mat3( ${sm.elements.map(n=>n.toFixed(4))} )`;switch(vt.getTransfer(s)){case wl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function om(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+Xy(s.getShaderSource(e),f)}else return a}function qy(s,e){const n=Yy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jy(s,e){let n;switch(e){case uv:n="Linear";break;case cv:n="Reinhard";break;case fv:n="Cineon";break;case dv:n="ACESFilmic";break;case pv:n="AgX";break;case mv:n="Neutral";break;case hv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new te;function $y(){vt.getLuminanceCoefficients(dl);const s=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ky(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function Zy(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Qy(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Do(s){return s!==""}function am(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(s){return s.replace(Jy,tM)}const eM=new Map;function tM(s,e){let n=at[e];if(n===void 0){const r=eM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lf(n)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(s){return s.replace(nM,iM)}function iM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function cm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xm:e="ENVMAP_BLENDING_MULTIPLY";break;case av:e="ENVMAP_BLENDING_MIX";break;case lv:e="ENVMAP_BLENDING_ADD";break}return e}function lM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function uM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=rM(n),m=sM(n),v=oM(n),x=aM(n),_=lM(n),y=Ky(n),E=Zy(u),A=a.createProgram();let S,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Do).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(S=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?at.tonemapping_pars_fragment:"",n.toneMapping!==xr?jy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,qy("linearToOutputTexel",n.outputColorSpace),$y(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),f=Lf(f),f=am(f,n),f=lm(f,n),d=Lf(d),d=am(d,n),d=lm(d,n),f=um(f),d=um(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+S+f,C=I+g+d,$=rm(a,a.VERTEX_SHADER,D),O=rm(a,a.FRAGMENT_SHADER,C);a.attachShader(A,$),a.attachShader(A,O),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function N(B){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(A).trim(),ee=a.getShaderInfoLog($).trim(),fe=a.getShaderInfoLog(O).trim();let he=!0,se=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,$,O);else{const le=om(a,$,"vertex"),k=om(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+le+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||fe==="")&&(se=!1);se&&(B.diagnostics={runnable:he,programLog:oe,vertexShader:{log:ee,prefix:S},fragmentShader:{log:fe,prefix:g}})}a.deleteShader($),a.deleteShader(O),X=new yl(a,A),P=Qy(a,A)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,Gy)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wy++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=$,this.fragmentShader=O,this}let cM=0;class fM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new dM(e),n.set(e,r)),r}}class dM{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}}function hM(s,e,n,r,a,u,f){const d=new Fm,p=new fM,m=new Set,v=[],x=a.logarithmicDepthBuffer,_=a.vertexTextures;let y=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,R,B,oe,ee){const fe=oe.fog,he=ee.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),k=le&&le.mapping===Tl?le.image.height:null,ae=E[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let De,K,ue,Me;if(ae){const gt=gi[ae];De=gt.vertexShader,K=gt.fragmentShader}else De=P.vertexShader,K=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Me=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,Ke=ee.isBatchedMesh===!0,At=!!P.map,ht=!!P.matcap,Lt=!!le,W=!!P.aoMap,dn=!!P.lightMap,dt=!!P.bumpMap,ut=!!P.normalMap,qe=!!P.displacementMap,Et=!!P.emissiveMap,Ye=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,j=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ce=P.sheen>0,He=P.transmission>0,Ae=T&&!!P.anisotropyMap,Ie=j&&!!P.clearcoatMap,lt=j&&!!P.clearcoatNormalMap,Se=j&&!!P.clearcoatRoughnessMap,Fe=ge&&!!P.iridescenceMap,Ze=ge&&!!P.iridescenceThicknessMap,Je=ce&&!!P.sheenColorMap,Oe=ce&&!!P.sheenRoughnessMap,ct=!!P.specularMap,it=!!P.specularColorMap,Mt=!!P.specularIntensityMap,H=He&&!!P.transmissionMap,Re=He&&!!P.thicknessMap,ie=!!P.gradientMap,de=!!P.alphaMap,Le=P.alphaTest>0,Pe=!!P.alphaHash,rt=!!P.extensions;let Dt=xr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Xt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:K,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ke,batchingColor:Ke&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ws,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:ht,envMap:Lt,envMapMode:Lt&&le.mapping,envMapCubeUVHeight:k,aoMap:W,lightMap:dn,bumpMap:dt,normalMap:ut,displacementMap:_&&qe,emissiveMap:Et,normalMapObjectSpace:ut&&P.normalMapType===Sv,normalMapTangentSpace:ut&&P.normalMapType===xv,metalnessMap:Ye,roughnessMap:L,anisotropy:T,anisotropyMap:Ae,clearcoat:j,clearcoatMap:Ie,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:Fe,iridescenceThicknessMap:Ze,sheen:ce,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:ct,specularColorMap:it,specularIntensityMap:Mt,transmission:He,transmissionMap:H,thicknessMap:Re,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Ns&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:Le,alphaHash:Pe,combine:P.combine,mapUv:At&&A(P.map.channel),aoMapUv:W&&A(P.aoMap.channel),lightMapUv:dn&&A(P.lightMap.channel),bumpMapUv:dt&&A(P.bumpMap.channel),normalMapUv:ut&&A(P.normalMap.channel),displacementMapUv:qe&&A(P.displacementMap.channel),emissiveMapUv:Et&&A(P.emissiveMap.channel),metalnessMapUv:Ye&&A(P.metalnessMap.channel),roughnessMapUv:L&&A(P.roughnessMap.channel),anisotropyMapUv:Ae&&A(P.anisotropyMap.channel),clearcoatMapUv:Ie&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&A(P.sheenRoughnessMap.channel),specularMapUv:ct&&A(P.specularMap.channel),specularColorMapUv:it&&A(P.specularColorMap.channel),specularIntensityMapUv:Mt&&A(P.specularIntensityMap.channel),transmissionMapUv:H&&A(P.transmissionMap.channel),thicknessMapUv:Re&&A(P.thicknessMap.channel),alphaMapUv:de&&A(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(At||de),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&vt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:Et&&P.emissiveMap.isVideoTexture===!0&&vt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ni,flipSided:P.side===Cn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function g(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)R.push(B),R.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(I(R,P),D(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function I(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function D(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=E[P.type];let B;if(R){const oe=gi[R];B=$v.clone(oe.uniforms)}else B=P.uniforms;return B}function $(P,R){let B;for(let oe=0,ee=v.length;oe<ee;oe++){const fe=v[oe];if(fe.cacheKey===R){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new uM(s,R,P,u),v.push(B)),B}function O(P){if(--P.usedTimes===0){const R=v.indexOf(P);v[R]=v[v.length-1],v.pop(),P.destroy()}}function N(P){p.remove(P)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:C,acquireProgram:$,releaseProgram:O,releaseShaderCache:N,programs:v,dispose:X}}function pM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function mM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function dm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,_,y,E,A,S){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:_,material:y,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[e]=g):(g.id=x.id,g.object=x,g.geometry=_,g.material=y,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=A,g.group=S),e++,g}function d(x,_,y,E,A,S){const g=f(x,_,y,E,A,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(x,_,y,E,A,S){const g=f(x,_,y,E,A,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,_){n.length>1&&n.sort(x||mM),r.length>1&&r.sort(_||fm),a.length>1&&a.sort(_||fm)}function v(){for(let x=e,_=s.length;x<_;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function gM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new dm,s.set(r,[f])):a>=u.length?(f=new dm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function _M(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new wt};break;case"SpotLight":n={position:new te,direction:new te,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function vM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let xM=0;function SM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yM(s){const e=new _M,n=vM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const a=new te,u=new Vt,f=new Vt;function d(m){let v=0,x=0,_=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,E=0,A=0,S=0,g=0,I=0,D=0,C=0,$=0,O=0,N=0;m.sort(SM);for(let P=0,R=m.length;P<R;P++){const B=m[P],oe=B.color,ee=B.intensity,fe=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=oe.r*ee,x+=oe.g*ee,_+=oe.b*ee;else if(B.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(B.sh.coefficients[se],ee);N++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const le=B.shadow,k=n.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=B.shadow.matrix,I++}r.directional[y]=se,y++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=fe,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,r.spot[A]=se;const le=B.shadow;if(B.map&&(r.spotLightMap[$]=B.map,$++,le.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[A]=le.matrix,B.castShadow){const k=n.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.spotShadow[A]=k,r.spotShadowMap[A]=he,C++}A++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=se,S++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const le=B.shadow,k=n.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,r.pointShadow[E]=k,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=B.shadow.matrix,D++}r.point[E]=se,E++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(ee),se.groundColor.copy(B.groundColor).multiplyScalar(ee),r.hemi[g]=se,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==g||X.numDirectionalShadows!==I||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==$||X.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+$-O,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,X.directionalLength=y,X.pointLength=E,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=g,X.numDirectionalShadows=I,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=$,X.numLightProbes=N,r.version=xM++)}function p(m,v){let x=0,_=0,y=0,E=0,A=0;const S=v.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const D=m[g];if(D.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),x++}else if(D.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),f.identity(),u.copy(D.matrixWorld),u.premultiply(S),f.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:d,setupView:p,state:r}}function hm(s){const e=new yM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function MM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new hm(s),e.set(a,[d])):u>=f.length?(d=new hm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class EM extends ko{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TM extends ko{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RM(s,e,n){let r=new Wm;const a=new Pt,u=new Pt,f=new Ht,d=new EM({depthPacking:vv}),p=new TM,m={},v=n.maxTextureSize,x={[Sr]:Cn,[Cn]:Sr,[Ni]:Ni},_=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:wM,fragmentShader:AM}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Gi;E.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ki(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let g=this.type;this.render=function(O,N,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(vr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=g!==Ii&&this.type===Ii,fe=g===Ii&&this.type!==Ii;for(let he=0,se=O.length;he<se;he++){const le=O[he],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ae=k.getFrameExtents();if(a.multiply(ae),u.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/ae.x),a.x=u.x*ae.x,k.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/ae.y),a.y=u.y*ae.y,k.mapSize.y=u.y)),k.map===null||ee===!0||fe===!0){const U=this.type!==Ii?{minFilter:li,magFilter:li}:{};k.map!==null&&k.map.dispose(),k.map=new $r(a.x,a.y,U),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let U=0;U<re;U++){const ne=k.getViewport(U);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),oe.viewport(f),k.updateMatrices(le,U),r=k.getFrustum(),C(N,X,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===Ii&&I(k,X),k.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(P,R,B)};function I(O,N){const X=e.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new $r(a.x,a.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(N,null,X,_,A,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(N,null,X,y,A,null)}function D(O,N,X,P){let R=null;const B=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)R=B;else if(R=X.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=R.uuid,ee=N.uuid;let fe=m[oe];fe===void 0&&(fe={},m[oe]=fe);let he=fe[ee];he===void 0&&(he=R.clone(),fe[ee]=he,N.addEventListener("dispose",$)),R=he}if(R.visible=N.visible,R.wireframe=N.wireframe,P===Ii?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:x[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=s.properties.get(R);oe.light=X}return R}function C(O,N,X,P,R){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Ii)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),fe=O.material;if(Array.isArray(fe)){const he=ee.groups;for(let se=0,le=he.length;se<le;se++){const k=he[se],ae=fe[k.materialIndex];if(ae&&ae.visible){const re=D(O,ae,P,R);O.onBeforeShadow(s,O,N,X,ee,re,k),s.renderBufferDirect(X,null,ee,re,O,k),O.onAfterShadow(s,O,N,X,ee,re,k)}}}else if(fe.visible){const he=D(O,fe,P,R);O.onBeforeShadow(s,O,N,X,ee,he,null),s.renderBufferDirect(X,null,ee,he,O,null),O.onAfterShadow(s,O,N,X,ee,he,null)}}const oe=O.children;for(let ee=0,fe=oe.length;ee<fe;ee++)C(oe[ee],N,X,P,R)}function $(O){O.target.removeEventListener("dispose",$);for(const X in m){const P=m[X],R=O.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const CM={[Xc]:Yc,[qc]:Kc,[jc]:Zc,[ks]:$c,[Yc]:Xc,[Kc]:qc,[Zc]:jc,[$c]:ks};function PM(s,e){function n(){let H=!1;const Re=new Ht;let ie=null;const de=new Ht(0,0,0,0);return{setMask:function(Le){ie!==Le&&!H&&(s.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){H=Le},setClear:function(Le,Pe,rt,Dt,Xt){Xt===!0&&(Le*=Dt,Pe*=Dt,rt*=Dt),Re.set(Le,Pe,rt,Dt),de.equals(Re)===!1&&(s.clearColor(Le,Pe,rt,Dt),de.copy(Re))},reset:function(){H=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,ie=null,de=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Le;Le=null,this.setClear(Dt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!H&&(s.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Re&&(Pe=CM[Pe]),de!==Pe){switch(Pe){case Xc:s.depthFunc(s.NEVER);break;case Yc:s.depthFunc(s.ALWAYS);break;case qc:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case jc:s.depthFunc(s.EQUAL);break;case $c:s.depthFunc(s.GEQUAL);break;case Kc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Pe}},setLocked:function(Pe){H=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),s.clearDepth(Pe),Le=Pe)},reset:function(){H=!1,ie=null,de=null,Le=null,Re=!1}}}function a(){let H=!1,Re=null,ie=null,de=null,Le=null,Pe=null,rt=null,Dt=null,Xt=null;return{setTest:function(gt){H||(gt?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(gt){Re!==gt&&!H&&(s.stencilMask(gt),Re=gt)},setFunc:function(gt,vn,hn){(ie!==gt||de!==vn||Le!==hn)&&(s.stencilFunc(gt,vn,hn),ie=gt,de=vn,Le=hn)},setOp:function(gt,vn,hn){(Pe!==gt||rt!==vn||Dt!==hn)&&(s.stencilOp(gt,vn,hn),Pe=gt,rt=vn,Dt=hn)},setLocked:function(gt){H=gt},setClear:function(gt){Xt!==gt&&(s.clearStencil(gt),Xt=gt)},reset:function(){H=!1,Re=null,ie=null,de=null,Le=null,Pe=null,rt=null,Dt=null,Xt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},x={},_=new WeakMap,y=[],E=null,A=!1,S=null,g=null,I=null,D=null,C=null,$=null,O=null,N=new wt(0,0,0),X=0,P=!1,R=null,B=null,oe=null,ee=null,fe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=le>=2);let ae=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),De=new Ht().fromArray(U),K=new Ht().fromArray(ne);function ue(H,Re,ie,de){const Le=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(H,Pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ie;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Pe}const Me={};Me[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(ks),dt(!1),ut(vp),ve(s.CULL_FACE),W(vr);function ve(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function we(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Ue(H,Re){return x[H]!==Re?(s.bindFramebuffer(H,Re),x[H]=Re,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(H,Re){let ie=y,de=!1;if(H){ie=_.get(Re),ie===void 0&&(ie=[],_.set(Re,ie));const Le=H.textures;if(ie.length!==Le.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)ie[Pe]=s.COLOR_ATTACHMENT0+Pe;ie.length=Le.length,de=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,de=!0);de&&s.drawBuffers(ie)}function At(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const ht={[Gr]:s.FUNC_ADD,[W_]:s.FUNC_SUBTRACT,[X_]:s.FUNC_REVERSE_SUBTRACT};ht[Y_]=s.MIN,ht[q_]=s.MAX;const Lt={[j_]:s.ZERO,[$_]:s.ONE,[K_]:s.SRC_COLOR,[Gc]:s.SRC_ALPHA,[nv]:s.SRC_ALPHA_SATURATE,[ev]:s.DST_COLOR,[Q_]:s.DST_ALPHA,[Z_]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[tv]:s.ONE_MINUS_DST_COLOR,[J_]:s.ONE_MINUS_DST_ALPHA,[iv]:s.CONSTANT_COLOR,[rv]:s.ONE_MINUS_CONSTANT_COLOR,[sv]:s.CONSTANT_ALPHA,[ov]:s.ONE_MINUS_CONSTANT_ALPHA};function W(H,Re,ie,de,Le,Pe,rt,Dt,Xt,gt){if(H===vr){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(ve(s.BLEND),A=!0),H!==G_){if(H!==S||gt!==P){if((g!==Gr||C!==Gr)&&(s.blendEquation(s.FUNC_ADD),g=Gr,C=Gr),gt)switch(H){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vc:s.blendFunc(s.ONE,s.ONE);break;case xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,D=null,$=null,O=null,N.set(0,0,0),X=0,S=H,P=gt}return}Le=Le||Re,Pe=Pe||ie,rt=rt||de,(Re!==g||Le!==C)&&(s.blendEquationSeparate(ht[Re],ht[Le]),g=Re,C=Le),(ie!==I||de!==D||Pe!==$||rt!==O)&&(s.blendFuncSeparate(Lt[ie],Lt[de],Lt[Pe],Lt[rt]),I=ie,D=de,$=Pe,O=rt),(Dt.equals(N)===!1||Xt!==X)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Xt),N.copy(Dt),X=Xt),S=H,P=!1}function dn(H,Re){H.side===Ni?we(s.CULL_FACE):ve(s.CULL_FACE);let ie=H.side===Cn;Re&&(ie=!ie),dt(ie),H.blending===Ns&&H.transparent===!1?W(vr):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),u.setMask(H.colorWrite);const de=H.stencilWrite;d.setTest(de),de&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Et(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function ut(H){H!==z_?(ve(s.CULL_FACE),H!==B&&(H===vp?s.cullFace(s.BACK):H===H_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),B=H}function qe(H){H!==oe&&(se&&s.lineWidth(H),oe=H)}function Et(H,Re,ie){H?(ve(s.POLYGON_OFFSET_FILL),(ee!==Re||fe!==ie)&&(s.polygonOffset(Re,ie),ee=Re,fe=ie)):we(s.POLYGON_OFFSET_FILL)}function Ye(H){H?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function L(H){H===void 0&&(H=s.TEXTURE0+he-1),ae!==H&&(s.activeTexture(H),ae=H)}function T(H,Re,ie){ie===void 0&&(ae===null?ie=s.TEXTURE0+he-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==H||de.texture!==Re)&&(ae!==ie&&(s.activeTexture(ie),ae=ie),s.bindTexture(H,Re||Me[H]),de.type=H,de.texture=Re)}function j(){const H=re[ae];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){De.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function Oe(H){K.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function ct(H,Re){let ie=m.get(Re);ie===void 0&&(ie=new WeakMap,m.set(Re,ie));let de=ie.get(H);de===void 0&&(de=s.getUniformBlockIndex(Re,H.name),ie.set(H,de))}function it(H,Re){const de=m.get(Re).get(H);p.get(Re)!==de&&(s.uniformBlockBinding(Re,de,H.__bindingPointIndex),p.set(Re,de))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ae=null,re={},x={},_=new WeakMap,y=[],E=null,A=!1,S=null,g=null,I=null,D=null,C=null,$=null,O=null,N=new wt(0,0,0),X=0,P=!1,R=null,B=null,oe=null,ee=null,fe=null,De.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:we,bindFramebuffer:Ue,drawBuffers:Ke,useProgram:At,setBlending:W,setMaterial:dn,setFlipSided:dt,setCullFace:ut,setLineWidth:qe,setPolygonOffset:Et,setScissorTest:Ye,activeTexture:L,bindTexture:T,unbindTexture:j,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:Ze,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:Je,viewport:Oe,reset:Mt}}function pm(s,e,n,r){const a=LM(r);switch(n){case Tm:return s*e;case Am:return s*e;case Rm:return s*e*2;case Cm:return s*e/a.components*a.byteLength;case Of:return s*e/a.components*a.byteLength;case Pm:return s*e*2/a.components*a.byteLength;case kf:return s*e*2/a.components*a.byteLength;case wm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Bf:return s*e*4/a.components*a.byteLength;case gl:case _l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(s,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(s,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Tf:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lm:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LM(s){switch(s){case zi:case ym:return{byteLength:1,components:1};case Uo:case Mm:case Io:return{byteLength:2,components:1};case Nf:case Ff:return{byteLength:2,components:4};case jr:case If:case Fi:return{byteLength:4,components:1};case Em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function bM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,v=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):El("canvas")}function A(L,T,j){let pe=1;const ge=Ye(L);if((ge.width>j||ge.height>j)&&(pe=j/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(pe*ge.width),He=Math.floor(pe*ge.height);x===void 0&&(x=E(ce,He));const Ae=T?E(ce,He):x;return Ae.width=ce,Ae.height=He,Ae.getContext("2d").drawImage(L,0,0,ce,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+He+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function S(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,T,j,pe,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=T;if(T===s.RED&&(j===s.FLOAT&&(ce=s.R32F),j===s.HALF_FLOAT&&(ce=s.R16F),j===s.UNSIGNED_BYTE&&(ce=s.R8)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.R8UI),j===s.UNSIGNED_SHORT&&(ce=s.R16UI),j===s.UNSIGNED_INT&&(ce=s.R32UI),j===s.BYTE&&(ce=s.R8I),j===s.SHORT&&(ce=s.R16I),j===s.INT&&(ce=s.R32I)),T===s.RG&&(j===s.FLOAT&&(ce=s.RG32F),j===s.HALF_FLOAT&&(ce=s.RG16F),j===s.UNSIGNED_BYTE&&(ce=s.RG8)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.RG8UI),j===s.UNSIGNED_SHORT&&(ce=s.RG16UI),j===s.UNSIGNED_INT&&(ce=s.RG32UI),j===s.BYTE&&(ce=s.RG8I),j===s.SHORT&&(ce=s.RG16I),j===s.INT&&(ce=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),j===s.UNSIGNED_INT&&(ce=s.RGB32UI),j===s.BYTE&&(ce=s.RGB8I),j===s.SHORT&&(ce=s.RGB16I),j===s.INT&&(ce=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),j===s.UNSIGNED_INT&&(ce=s.RGBA32UI),j===s.BYTE&&(ce=s.RGBA8I),j===s.SHORT&&(ce=s.RGBA16I),j===s.INT&&(ce=s.RGBA32I)),T===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),T===s.RGBA){const He=ge?wl:vt.getTransfer(pe);j===s.FLOAT&&(ce=s.RGBA32F),j===s.HALF_FLOAT&&(ce=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ce=He===Rt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(L,T){let j;return L?T===null||T===jr||T===Hs?j=s.DEPTH24_STENCIL8:T===Fi?j=s.DEPTH32F_STENCIL8:T===Uo&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===Hs?j=s.DEPTH_COMPONENT24:T===Fi?j=s.DEPTH_COMPONENT32F:T===Uo&&(j=s.DEPTH_COMPONENT16),j}function $(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function O(L){const T=L.target;T.removeEventListener("dispose",O),X(T),T.isVideoTexture&&v.delete(T)}function N(L){const T=L.target;T.removeEventListener("dispose",N),R(T)}function X(L){const T=r.get(L);if(T.__webglInit===void 0)return;const j=L.source,pe=_.get(j);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(pe).length===0&&_.delete(j)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const j=L.source,pe=_.get(j);delete pe[T.__cacheKey],f.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=L.textures;for(let pe=0,ge=j.length;pe<ge;pe++){const ce=r.get(j[pe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove(j[pe])}r.remove(L)}let B=0;function oe(){B=0}function ee(){const L=B;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),B+=1,L}function fe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function he(L,T){const j=r.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(j,L,T);return}}n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function se(L,T){const j=r.get(L);if(L.version>0&&j.__version!==L.version){K(j,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function le(L,T){const j=r.get(L);if(L.version>0&&j.__version!==L.version){K(j,L,T);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function k(L,T){const j=r.get(L);if(L.version>0&&j.__version!==L.version){ue(j,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}const ae={[ef]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[tf]:s.MIRRORED_REPEAT},re={[li]:s.NEAREST,[gv]:s.NEAREST_MIPMAP_NEAREST,[Ya]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[dc]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},U={[yv]:s.NEVER,[Rv]:s.ALWAYS,[Mv]:s.LESS,[bm]:s.LEQUAL,[Ev]:s.EQUAL,[Av]:s.GEQUAL,[Tv]:s.GREATER,[wv]:s.NOTEQUAL};function ne(L,T){if(T.type===Fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===dc||T.magFilter===Ya||T.magFilter===Yr||T.minFilter===_i||T.minFilter===dc||T.minFilter===Ya||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ae[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==Ya&&T.minFilter!==Yr||T.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function De(L,T){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",O));const pe=T.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ce=fe(T);if(ce!==L.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ge[ce].usedTimes++;const He=ge[L.__cacheKey];He!==void 0&&(ge[L.__cacheKey].usedTimes--,He.usedTimes===0&&P(T)),L.__cacheKey=ce,L.__webglTexture=ge[ce].texture}return j}function K(L,T,j){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=De(L,T),ce=T.source;n.bindTexture(pe,L.__webglTexture,s.TEXTURE0+j);const He=r.get(ce);if(ce.version!==He.__version||ge===!0){n.activeTexture(s.TEXTURE0+j);const Ae=vt.getPrimaries(vt.workingColorSpace),Ie=T.colorSpace===_r?null:vt.getPrimaries(T.colorSpace),lt=T.colorSpace===_r||Ae===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=A(T.image,!1,a.maxTextureSize);Se=Et(T,Se);const Fe=u.convert(T.format,T.colorSpace),Ze=u.convert(T.type);let Je=D(T.internalFormat,Fe,Ze,T.colorSpace,T.isVideoTexture);ne(pe,T);let Oe;const ct=T.mipmaps,it=T.isVideoTexture!==!0,Mt=He.__version===void 0||ge===!0,H=ce.dataReady,Re=$(T,Se);if(T.isDepthTexture)Je=C(T.format===Vs,T.type),Mt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Fe,Ze,null));else if(T.isDataTexture)if(ct.length>0){it&&Mt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let ie=0,de=ct.length;ie<de;ie++)Oe=ct[ie],it?H&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,Ze,Oe.data):n.texImage2D(s.TEXTURE_2D,ie,Je,Oe.width,Oe.height,0,Fe,Ze,Oe.data);T.generateMipmaps=!1}else it?(Mt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,Ze,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Fe,Ze,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,ct[0].width,ct[0].height,Se.depth);for(let ie=0,de=ct.length;ie<de;ie++)if(Oe=ct[ie],T.format!==ai)if(Fe!==null)if(it){if(H)if(T.layerUpdates.size>0){const Le=pm(Oe.width,Oe.height,T.format,T.type);for(const Pe of T.layerUpdates){const rt=Oe.data.subarray(Pe*Le/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Pe,Oe.width,Oe.height,1,Fe,rt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,Se.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Je,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,Se.depth,Fe,Ze,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ie,Je,Oe.width,Oe.height,Se.depth,0,Fe,Ze,Oe.data)}else{it&&Mt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let ie=0,de=ct.length;ie<de;ie++)Oe=ct[ie],T.format!==ai?Fe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,ie,Je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Fe,Ze,Oe.data):n.texImage2D(s.TEXTURE_2D,ie,Je,Oe.width,Oe.height,0,Fe,Ze,Oe.data)}else if(T.isDataArrayTexture)if(it){if(Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,Se.width,Se.height,Se.depth),H)if(T.layerUpdates.size>0){const ie=pm(Se.width,Se.height,T.format,T.type);for(const de of T.layerUpdates){const Le=Se.data.subarray(de*ie/Se.data.BYTES_PER_ELEMENT,(de+1)*ie/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,Fe,Ze,Le)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,Ze,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Fe,Ze,Se.data);else if(T.isData3DTexture)it?(Mt&&n.texStorage3D(s.TEXTURE_3D,Re,Je,Se.width,Se.height,Se.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,Ze,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Fe,Ze,Se.data);else if(T.isFramebufferTexture){if(Mt)if(it)n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height);else{let ie=Se.width,de=Se.height;for(let Le=0;Le<Re;Le++)n.texImage2D(s.TEXTURE_2D,Le,Je,ie,de,0,Fe,Ze,null),ie>>=1,de>>=1}}else if(ct.length>0){if(it&&Mt){const ie=Ye(ct[0]);n.texStorage2D(s.TEXTURE_2D,Re,Je,ie.width,ie.height)}for(let ie=0,de=ct.length;ie<de;ie++)Oe=ct[ie],it?H&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Fe,Ze,Oe):n.texImage2D(s.TEXTURE_2D,ie,Je,Fe,Ze,Oe);T.generateMipmaps=!1}else if(it){if(Mt){const ie=Ye(Se);n.texStorage2D(s.TEXTURE_2D,Re,Je,ie.width,ie.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Ze,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,Fe,Ze,Se);S(T)&&g(pe),He.__version=ce.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ue(L,T,j){if(T.image.length!==6)return;const pe=De(L,T),ge=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+j);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){n.activeTexture(s.TEXTURE0+j);const He=vt.getPrimaries(vt.workingColorSpace),Ae=T.colorSpace===_r?null:vt.getPrimaries(T.colorSpace),Ie=T.colorSpace===_r||He===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let de=0;de<6;de++)!lt&&!Se?Fe[de]=A(T.image[de],!0,a.maxCubemapSize):Fe[de]=Se?T.image[de].image:T.image[de],Fe[de]=Et(T,Fe[de]);const Ze=Fe[0],Je=u.convert(T.format,T.colorSpace),Oe=u.convert(T.type),ct=D(T.internalFormat,Je,Oe,T.colorSpace),it=T.isVideoTexture!==!0,Mt=ce.__version===void 0||pe===!0,H=ge.dataReady;let Re=$(T,Ze);ne(s.TEXTURE_CUBE_MAP,T);let ie;if(lt){it&&Mt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,Ze.width,Ze.height);for(let de=0;de<6;de++){ie=Fe[de].mipmaps;for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];T.format!==ai?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,Je,Oe,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,ct,Pe.width,Pe.height,0,Je,Oe,Pe.data)}}}else{if(ie=T.mipmaps,it&&Mt){ie.length>0&&Re++;const de=Ye(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,de.width,de.height)}for(let de=0;de<6;de++)if(Se){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe[de].width,Fe[de].height,Je,Oe,Fe[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Fe[de].width,Fe[de].height,0,Je,Oe,Fe[de].data);for(let Le=0;Le<ie.length;Le++){const rt=ie[Le].image[de].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,rt.width,rt.height,Je,Oe,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,ct,rt.width,rt.height,0,Je,Oe,rt.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,Oe,Fe[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Je,Oe,Fe[de]);for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,Je,Oe,Pe.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,ct,Je,Oe,Pe.image[de])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Me(L,T,j,pe,ge,ce){const He=u.convert(j.format,j.colorSpace),Ae=u.convert(j.type),Ie=D(j.internalFormat,He,Ae,j.colorSpace),lt=r.get(T),Se=r.get(j);if(Se.__renderTarget=T,!lt.__hasExternalTextures){const Fe=Math.max(1,T.width>>ce),Ze=Math.max(1,T.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Ie,Fe,Ze,T.depth,0,He,Ae,null):n.texImage2D(ge,ce,Ie,Fe,Ze,0,He,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,dt(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Se.__webglTexture,ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(L,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=C(T.stencilBuffer,ge),He=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=dt(T);ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ce,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ce,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,L)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],He=u.convert(ce.format,ce.colorSpace),Ae=u.convert(ce.type),Ie=D(ce.internalFormat,He,Ae,ce.colorSpace),lt=dt(T);j&&ut(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ie,T.width,T.height):ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ge=pe.__webglTexture,ce=dt(T);if(T.depthTexture.format===Fs)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Vs)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const T=r.get(L),j=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,L)}else if(j){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[pe],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,T,j){const pe=r.get(L);T!==void 0&&Me(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Ue(L)}function At(L){const T=L.texture,j=r.get(L),pe=r.get(T);L.addEventListener("dispose",N);const ge=L.textures,ce=L.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,f.memory.textures++),ce){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)j.__webglFramebuffer[Ae][Ie]=s.createFramebuffer()}else j.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(He)for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=r.get(ge[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ut(L)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ie=ge[Ae];j.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const lt=u.convert(Ie.format,Ie.colorSpace),Se=u.convert(Ie.type),Fe=D(Ie.internalFormat,lt,Se,Ie.colorSpace,L.isXRRenderTarget===!0),Ze=dt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(j.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)Me(j.__webglFramebuffer[Ae][Ie],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Me(j.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=ge[Ae],Se=r.get(lt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ne(s.TEXTURE_2D,lt),Me(j.__webglFramebuffer,L,lt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),ne(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)Me(j.__webglFramebuffer[Ie],L,T,s.COLOR_ATTACHMENT0,Ae,Ie);else Me(j.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ae,0);S(T)&&g(Ae),n.unbindTexture()}L.depthBuffer&&Ue(L)}function ht(L){const T=L.textures;for(let j=0,pe=T.length;j<pe;j++){const ge=T[j];if(S(ge)){const ce=I(L),He=r.get(ge).__webglTexture;n.bindTexture(ce,He),g(ce),n.unbindTexture()}}}const Lt=[],W=[];function dn(L){if(L.samples>0){if(ut(L)===!1){const T=L.textures,j=L.width,pe=L.height;let ge=s.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(L),Ae=T.length>1;if(Ae)for(let Ie=0;Ie<T.length;Ie++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const lt=r.get(T[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,j,pe,0,0,j,pe,ge,s.NEAREST),p===!0&&(Lt.length=0,W.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Lt.push(ce),W.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,W)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<T.length;Ie++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const lt=r.get(T[Ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function dt(L){return Math.min(a.maxSamples,L.samples)}function ut(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(L){const T=f.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Et(L,T){const j=L.colorSpace,pe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Ws&&j!==_r&&(vt.getTransfer(j)===Rt?(pe!==ai||ge!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=k,this.rebindTextures=Ke,this.setupRenderTarget=At,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function DM(s,e){function n(r,a=_r){let u;const f=vt.getTransfer(a);if(r===zi)return s.UNSIGNED_BYTE;if(r===Nf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Em)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ym)return s.BYTE;if(r===Mm)return s.SHORT;if(r===Uo)return s.UNSIGNED_SHORT;if(r===If)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Io)return s.HALF_FLOAT;if(r===Tm)return s.ALPHA;if(r===wm)return s.RGB;if(r===ai)return s.RGBA;if(r===Am)return s.LUMINANCE;if(r===Rm)return s.LUMINANCE_ALPHA;if(r===Fs)return s.DEPTH_COMPONENT;if(r===Vs)return s.DEPTH_STENCIL;if(r===Cm)return s.RED;if(r===Of)return s.RED_INTEGER;if(r===Pm)return s.RG;if(r===kf)return s.RG_INTEGER;if(r===Bf)return s.RGBA_INTEGER;if(r===gl||r===_l||r===vl||r===xl)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===rf||r===sf||r===of)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===nf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af||r===lf||r===uf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===af||r===lf)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===uf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf||r===Ef)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ff)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_f)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sl||r===Tf||r===wf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sl)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lm||r===Af||r===Rf||r===Cf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Af)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class UM extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),g=this._getHandJoint(m,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=v.position.distanceTo(x.position),y=.02,E=.005;m.inputState.pinching&&_>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Vi({vertexShader:NM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ki(new Rl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends Xs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,x=null,_=null,y=null,E=null;const A=new OM,S=n.getContextAttributes();let g=null,I=null;const D=[],C=[],$=new Pt;let O=null;const N=new jn;N.viewport=new Ht;const X=new jn;X.viewport=new Ht;const P=[N,X],R=new UM;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=D[K];return ue===void 0&&(ue=new Hc,D[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=D[K];return ue===void 0&&(ue=new Hc,D[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=D[K];return ue===void 0&&(ue=new Hc,D[K]=ue),ue.getHandSpace()};function ee(K){const ue=C.indexOf(K.inputSource);if(ue===-1)return;const Me=D[ue];Me!==void 0&&(Me.update(K.inputSource,K.frame,m||f),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let K=0;K<D.length;K++){const ue=C[K];ue!==null&&(C[K]=null,D[K].disconnect(ue))}B=null,oe=null,A.reset(),e.setRenderTarget(g),y=null,_=null,x=null,a=null,I=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new $r(y.framebufferWidth,y.framebufferHeight,{format:ai,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Me=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=S.stencil?Vs:Fs,Me=S.stencil?Hs:jr);const we={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};x=new XRWebGLBinding(a,n),_=x.createProjectionLayer(we),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new $r(_.textureWidth,_.textureHeight,{format:ai,type:zi,depthTexture:new Ym(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(K){for(let ue=0;ue<K.removed.length;ue++){const Me=K.removed[ue],ve=C.indexOf(Me);ve>=0&&(C[ve]=null,D[ve].disconnect(Me))}for(let ue=0;ue<K.added.length;ue++){const Me=K.added[ue];let ve=C.indexOf(Me);if(ve===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=C.length){C.push(Me),ve=Ue;break}else if(C[Ue]===null){C[Ue]=Me,ve=Ue;break}if(ve===-1)break}const we=D[ve];we&&we.connect(Me)}}const se=new te,le=new te;function k(K,ue,Me){se.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(le),we=ue.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Ke=we[14]/(we[10]-1),At=we[14]/(we[10]+1),ht=(we[9]+1)/we[5],Lt=(we[9]-1)/we[5],W=(we[8]-1)/we[0],dn=(Ue[8]+1)/Ue[0],dt=Ke*W,ut=Ke*dn,qe=ve/(-W+dn),Et=qe*-W;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Et),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=Ke+qe,L=At+qe,T=dt-Et,j=ut+(ve-Et),pe=ht*At/L*Ye,ge=Lt*At/L*Ye;K.projectionMatrix.makePerspective(T,j,pe,ge,Ye,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,Me=K.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(Me=A.depthFar)),R.near=X.near=N.near=ue,R.far=X.far=N.far=Me,(B!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,oe=R.far),N.layers.mask=K.layers.mask|2,X.layers.mask=K.layers.mask|4,R.layers.mask=N.layers.mask|X.layers.mask;const ve=K.parent,we=R.cameras;ae(R,ve);for(let Ue=0;Ue<we.length;Ue++)ae(we[Ue],ve);we.length===2?k(R,N,X):R.projectionMatrix.copy(N.projectionMatrix),re(K,R,ve)};function re(K,ue,Me){Me===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Pf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(K){p=K,_!==null&&(_.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let U=null;function ne(K,ue){if(v=ue.getViewerPose(m||f),E=ue,v!==null){const Me=v.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ve=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<Me.length;Ue++){const Ke=Me[Ue];let At=null;if(y!==null)At=y.getViewport(Ke);else{const Lt=x.getViewSubImage(_,Ke);At=Lt.viewport,Ue===0&&(e.setRenderTargetTextures(I,Lt.colorTexture,_.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(I))}let ht=P[Ue];ht===void 0&&(ht=new jn,ht.layers.enable(Ue),ht.viewport=new Ht,P[Ue]=ht),ht.matrix.fromArray(Ke.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ke.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(At.x,At.y,At.width,At.height),Ue===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(ht)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=x.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&A.init(e,Ue,a.renderState)}}for(let Me=0;Me<D.length;Me++){const ve=C[Me],we=D[Me];ve!==null&&we!==void 0&&we.update(ve,ue,m||f)}U&&U(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const De=new Xm;De.setAnimationLoop(ne),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}const zr=new Hi,BM=new Vt;function zM(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Hm(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,I,D,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),x(S,g)):g.isMeshPhongMaterial?(u(S,g),v(S,g)):g.isMeshStandardMaterial?(u(S,g),_(S,g),g.isMeshPhysicalMaterial&&y(S,g,C)):g.isMeshMatcapMaterial?(u(S,g),E(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),A(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,I,D):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Cn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Cn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,C=I.envMapRotation;D&&(S.envMap.value=D,zr.copy(C),zr.x*=-1,zr.y*=-1,zr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),S.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(zr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,I,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*I,S.scale.value=D*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function x(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function _(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,I){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const I=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function HM(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const C=D.program;r.uniformBlockBinding(I,C)}function m(I,D){let C=a[I.id];C===void 0&&(E(I),C=v(I),a[I.id]=C,I.addEventListener("dispose",S));const $=D.program;r.updateUBOMapping(I,$);const O=e.render.frame;u[I.id]!==O&&(_(I),u[I.id]=O)}function v(I){const D=x();I.__bindingPointIndex=D;const C=s.createBuffer(),$=I.__size,O=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,$,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function x(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const D=a[I.id],C=I.uniforms,$=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,N=C.length;O<N;O++){const X=Array.isArray(C[O])?C[O]:[C[O]];for(let P=0,R=X.length;P<R;P++){const B=X[P];if(y(B,O,P,$)===!0){const oe=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let he=0;he<ee.length;he++){const se=ee[he],le=A(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,oe+fe,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(I,D,C,$){const O=I.value,N=D+"_"+C;if($[N]===void 0)return typeof O=="number"||typeof O=="boolean"?$[N]=O:$[N]=O.clone(),!0;{const X=$[N];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return $[N]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function E(I){const D=I.uniforms;let C=0;const $=16;for(let N=0,X=D.length;N<X;N++){const P=Array.isArray(D[N])?D[N]:[D[N]];for(let R=0,B=P.length;R<B;R++){const oe=P[R],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,he=ee.length;fe<he;fe++){const se=ee[fe],le=A(se),k=C%$,ae=k%le.boundary,re=k+ae;C+=ae,re!==0&&$-re<le.storage&&(C+=$-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const O=C%$;return O>0&&(C+=$-O),I.__size=C,I.__cache={},this}function A(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function S(I){const D=I.target;D.removeEventListener("dispose",S);const C=f.indexOf(D.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class VM{constructor(e={}){const{canvas:n=Pv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,g=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=xr,this.toneMappingExposure=1;const C=this;let $=!1,O=0,N=0,X=null,P=-1,R=null;const B=new Ht,oe=new Ht;let ee=null;const fe=new wt(0);let he=0,se=n.width,le=n.height,k=1,ae=null,re=null;const U=new Ht(0,0,se,le),ne=new Ht(0,0,se,le);let De=!1;const K=new Wm;let ue=!1,Me=!1;const ve=new Vt,we=new Vt,Ue=new te,Ke=new Ht,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Lt(){return X===null?k:1}let W=r;function dn(w,V){return n.getContext(w,V)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),W===null){const V="webgl2";if(W=dn(V,w),W===null)throw dn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let dt,ut,qe,Et,Ye,L,T,j,pe,ge,ce,He,Ae,Ie,lt,Se,Fe,Ze,Je,Oe,ct,it,Mt,H;function Re(){dt=new qS(W),dt.init(),it=new DM(W,dt),ut=new zS(W,dt,e,it),qe=new PM(W,dt),ut.reverseDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),Et=new KS(W),Ye=new pM,L=new bM(W,dt,qe,Ye,ut,it,Et),T=new VS(C),j=new YS(C),pe=new n0(W),Mt=new kS(W,pe),ge=new jS(W,pe,Et,Mt),ce=new QS(W,ge,pe,Et),Je=new ZS(W,ut,L),Se=new HS(Ye),He=new hM(C,T,j,dt,ut,Mt,Se),Ae=new zM(C,Ye),Ie=new gM,lt=new MM(dt),Ze=new OS(C,T,j,qe,ce,y,p),Fe=new RM(C,ce,ut),H=new HM(W,Et,ut,qe),Oe=new BS(W,dt,Et),ct=new $S(W,dt,Et),Et.programs=He.programs,C.capabilities=ut,C.extensions=dt,C.properties=Ye,C.renderLists=Ie,C.shadowMap=Fe,C.state=qe,C.info=Et}Re();const ie=new kM(C,W);this.xr=ie,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,V,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=V,n.width=Math.floor(w*k),n.height=Math.floor(V*k),Q===!0&&(n.style.width=w+"px",n.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(se*k,le*k).floor()},this.setDrawingBufferSize=function(w,V,Q){se=w,le=V,k=Q,n.width=Math.floor(w*Q),n.height=Math.floor(V*Q),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,V,Q,J){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,V,Q,J),qe.viewport(B.copy(U).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,V,Q,J){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,V,Q,J),qe.scissor(oe.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){qe.setScissorTest(De=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,V=!0,Q=!0){let J=0;if(w){let G=!1;if(X!==null){const Te=X.texture.format;G=Te===Bf||Te===kf||Te===Of}if(G){const Te=X.texture.type,ye=Te===zi||Te===jr||Te===Uo||Te===Hs||Te===Nf||Te===Ff,Ve=Ze.getClearColor(),Be=Ze.getClearAlpha(),et=Ve.r,nt=Ve.g,Ge=Ve.b;ye?(E[0]=et,E[1]=nt,E[2]=Ge,E[3]=Be,W.clearBufferuiv(W.COLOR,0,E)):(A[0]=et,A[1]=nt,A[2]=Ge,A[3]=Be,W.clearBufferiv(W.COLOR,0,A))}else J|=W.COLOR_BUFFER_BIT}V&&(J|=W.DEPTH_BUFFER_BIT),Q&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ie.dispose(),lt.dispose(),Ye.dispose(),T.dispose(),j.dispose(),ce.dispose(),Mt.dispose(),H.dispose(),He.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Kr),ie.removeEventListener("sessionend",Wi),vi.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const w=Et.autoReset,V=Fe.enabled,Q=Fe.autoUpdate,J=Fe.needsUpdate,G=Fe.type;Re(),Et.autoReset=w,Fe.enabled=V,Fe.autoUpdate=Q,Fe.needsUpdate=J,Fe.type=G}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const V=w.target;V.removeEventListener("dispose",rt),Dt(V)}function Dt(w){Xt(w),Ye.remove(w)}function Xt(w){const V=Ye.get(w).programs;V!==void 0&&(V.forEach(function(Q){He.releaseProgram(Q)}),w.isShaderMaterial&&He.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Q,J,G,Te){V===null&&(V=At);const ye=G.isMesh&&G.matrixWorld.determinant()<0,Ve=Vo(w,V,Q,J,G);qe.setMaterial(J,ye);let Be=Q.index,et=1;if(J.wireframe===!0){if(Be=ge.getWireframeAttribute(Q),Be===void 0)return;et=2}const nt=Q.drawRange,Ge=Q.attributes.position;let mt=nt.start*et,yt=(nt.start+nt.count)*et;Te!==null&&(mt=Math.max(mt,Te.start*et),yt=Math.min(yt,(Te.start+Te.count)*et)),Be!==null?(mt=Math.max(mt,0),yt=Math.min(yt,Be.count)):Ge!=null&&(mt=Math.max(mt,0),yt=Math.min(yt,Ge.count));const pt=yt-mt;if(pt<0||pt===1/0)return;Mt.setup(G,J,Ve,Q,Be);let rn,st=Oe;if(Be!==null&&(rn=pe.get(Be),st=ct,st.setIndex(rn)),G.isMesh)J.wireframe===!0?(qe.setLineWidth(J.wireframeLinewidth*Lt()),st.setMode(W.LINES)):st.setMode(W.TRIANGLES);else if(G.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),qe.setLineWidth(Xe*Lt()),G.isLineSegments?st.setMode(W.LINES):G.isLineLoop?st.setMode(W.LINE_LOOP):st.setMode(W.LINE_STRIP)}else G.isPoints?st.setMode(W.POINTS):G.isSprite&&st.setMode(W.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xe=G._multiDrawStarts,$n=G._multiDrawCounts,xt=G._multiDrawCount,sn=Be?pe.get(Be).bytesPerElement:1,Kn=Ye.get(J).currentProgram.getUniforms();for(let Yt=0;Yt<xt;Yt++)Kn.setValue(W,"_gl_DrawID",Yt),st.render(Xe[Yt]/sn,$n[Yt])}else if(G.isInstancedMesh)st.renderInstances(mt,pt,G.count);else if(Q.isInstancedBufferGeometry){const Xe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,$n=Math.min(Q.instanceCount,Xe);st.renderInstances(mt,pt,$n)}else st.render(mt,pt)};function gt(w,V,Q){w.transparent===!0&&w.side===Ni&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,Zr(w,V,Q),w.side=Sr,w.needsUpdate=!0,Zr(w,V,Q),w.side=Ni):Zr(w,V,Q)}this.compile=function(w,V,Q=null){Q===null&&(Q=w),g=lt.get(Q),g.init(V),D.push(g),Q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),w!==Q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const J=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Te=G.material;if(Te)if(Array.isArray(Te))for(let ye=0;ye<Te.length;ye++){const Ve=Te[ye];gt(Ve,Q,G),J.add(Ve)}else gt(Te,Q,G),J.add(Te)}),D.pop(),g=null,J},this.compileAsync=function(w,V,Q=null){const J=this.compile(w,V,Q);return new Promise(G=>{function Te(){if(J.forEach(function(ye){Ye.get(ye).currentProgram.isReady()&&J.delete(ye)}),J.size===0){G(w);return}setTimeout(Te,10)}dt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let vn=null;function hn(w){vn&&vn(w)}function Kr(){vi.stop()}function Wi(){vi.start()}const vi=new Xm;vi.setAnimationLoop(hn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(w){vn=w,ie.setAnimationLoop(w),w===null?vi.stop():vi.start()},ie.addEventListener("sessionstart",Kr),ie.addEventListener("sessionend",Wi),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,V,X),g=lt.get(w,D.length),g.init(V),D.push(g),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(we),Me=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Me),S=Ie.get(w,I.length),S.init(),I.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&xi(Te,V,-1/0,C.sortObjects)}xi(w,V,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ht&&Ze.addToRenderList(S,w),this.info.render.frame++,ue===!0&&Se.beginShadows();const Q=g.state.shadowsArray;Fe.render(Q,w,V),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=S.opaque,G=S.transmissive;if(g.setupLights(),V.isArrayCamera){const Te=V.cameras;if(G.length>0)for(let ye=0,Ve=Te.length;ye<Ve;ye++){const Be=Te[ye];Mr(J,G,w,Be)}ht&&Ze.render(w);for(let ye=0,Ve=Te.length;ye<Ve;ye++){const Be=Te[ye];yr(S,w,Be,Be.viewport)}}else G.length>0&&Mr(J,G,w,V),ht&&Ze.render(w),yr(S,w,V);X!==null&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(C,w,V),Mt.resetDefaultState(),P=-1,R=null,D.pop(),D.length>0?(g=D[D.length-1],ue===!0&&Se.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function xi(w,V,Q,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){J&&Ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const ye=ce.update(w),Ve=w.material;Ve.visible&&S.push(w,ye,Ve,Q,Ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const ye=ce.update(w),Ve=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ke.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ke.copy(ye.boundingSphere.center)),Ke.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){const Be=ye.groups;for(let et=0,nt=Be.length;et<nt;et++){const Ge=Be[et],mt=Ve[Ge.materialIndex];mt&&mt.visible&&S.push(w,ye,mt,Q,Ke.z,Ge)}}else Ve.visible&&S.push(w,ye,Ve,Q,Ke.z,null)}}const Te=w.children;for(let ye=0,Ve=Te.length;ye<Ve;ye++)xi(Te[ye],V,Q,J)}function yr(w,V,Q,J){const G=w.opaque,Te=w.transmissive,ye=w.transparent;g.setupLightsView(Q),ue===!0&&Se.setGlobalState(C.clippingPlanes,Q),J&&qe.viewport(B.copy(J)),G.length>0&&Xi(G,V,Q),Te.length>0&&Xi(Te,V,Q),ye.length>0&&Xi(ye,V,Q),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Mr(w,V,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new $r(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Io:zi,minFilter:Yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[J.id],ye=J.viewport||B;Te.setSize(ye.z,ye.w);const Ve=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(fe),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Ze.render(Q);const Be=C.toneMapping;C.toneMapping=xr;const et=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),ue===!0&&Se.setGlobalState(C.clippingPlanes,J),Xi(w,Q,J),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ge=0,mt=V.length;Ge<mt;Ge++){const yt=V[Ge],pt=yt.object,rn=yt.geometry,st=yt.material,Xe=yt.group;if(st.side===Ni&&pt.layers.test(J.layers)){const $n=st.side;st.side=Cn,st.needsUpdate=!0,zo(pt,Q,J,rn,st,Xe),st.side=$n,st.needsUpdate=!0,nt=!0}}nt===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}C.setRenderTarget(Ve),C.setClearColor(fe,he),et!==void 0&&(J.viewport=et),C.toneMapping=Be}function Xi(w,V,Q){const J=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Te=w.length;G<Te;G++){const ye=w[G],Ve=ye.object,Be=ye.geometry,et=J===null?ye.material:J,nt=ye.group;Ve.layers.test(Q.layers)&&zo(Ve,V,Q,Be,et,nt)}}function zo(w,V,Q,J,G,Te){w.onBeforeRender(C,V,Q,J,G,Te),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(C,V,Q,J,w,Te),G.transparent===!0&&G.side===Ni&&G.forceSinglePass===!1?(G.side=Cn,G.needsUpdate=!0,C.renderBufferDirect(Q,V,J,G,w,Te),G.side=Sr,G.needsUpdate=!0,C.renderBufferDirect(Q,V,J,G,w,Te),G.side=Ni):C.renderBufferDirect(Q,V,J,G,w,Te),w.onAfterRender(C,V,Q,J,G,Te)}function Zr(w,V,Q){V.isScene!==!0&&(V=At);const J=Ye.get(w),G=g.state.lights,Te=g.state.shadowsArray,ye=G.state.version,Ve=He.getParameters(w,G.state,Te,V,Q),Be=He.getProgramCacheKey(Ve);let et=J.programs;J.environment=w.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(w.isMeshStandardMaterial?j:T).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",rt),et=new Map,J.programs=et);let nt=et.get(Be);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===ye)return ci(w,Ve),nt}else Ve.uniforms=He.getUniforms(w),w.onBeforeCompile(Ve,C),nt=He.acquireProgram(Ve,Be),et.set(Be,nt),J.uniforms=Ve.uniforms;const Ge=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=Se.uniform),ci(w,Ve),J.needsLights=Pl(w),J.lightsStateVersion=ye,J.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function Ho(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=yl.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function ci(w,V){const Q=Ye.get(w);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Vo(w,V,Q,J,G){V.isScene!==!0&&(V=At),L.resetTextureUnits();const Te=V.fog,ye=J.isMeshStandardMaterial?V.environment:null,Ve=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ws,Be=(J.isMeshStandardMaterial?j:T).get(J.envMap||ye),et=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!Q.morphAttributes.position,mt=!!Q.morphAttributes.normal,yt=!!Q.morphAttributes.color;let pt=xr;J.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(pt=C.toneMapping);const rn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,st=rn!==void 0?rn.length:0,Xe=Ye.get(J),$n=g.state.lights;if(ue===!0&&(Me===!0||w!==R)){const pn=w===R&&J.id===P;Se.setState(J,w,pn)}let xt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==$n.state.version||Xe.outputColorSpace!==Ve||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isBatchedMesh&&Xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==Be||J.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==nt||Xe.morphTargets!==Ge||Xe.morphNormals!==mt||Xe.morphColors!==yt||Xe.toneMapping!==pt||Xe.morphTargetsCount!==st)&&(xt=!0):(xt=!0,Xe.__version=J.version);let sn=Xe.currentProgram;xt===!0&&(sn=Zr(J,V,G));let Kn=!1,Yt=!1,fi=!1;const Ct=sn.getUniforms(),On=Xe.uniforms;if(qe.useProgram(sn.program)&&(Kn=!0,Yt=!0,fi=!0),J.id!==P&&(P=J.id,Yt=!0),Kn||R!==w){qe.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),bv(ve),Dv(ve),Ct.setValue(W,"projectionMatrix",ve)):Ct.setValue(W,"projectionMatrix",w.projectionMatrix),Ct.setValue(W,"viewMatrix",w.matrixWorldInverse);const kn=Ct.map.cameraPosition;kn!==void 0&&kn.setValue(W,Ue.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&Ct.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Yt=!0,fi=!0)}if(G.isSkinnedMesh){Ct.setOptional(W,G,"bindMatrix"),Ct.setOptional(W,G,"bindMatrixInverse");const pn=G.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ct.setValue(W,"boneTexture",pn.boneTexture,L))}G.isBatchedMesh&&(Ct.setOptional(W,G,"batchingTexture"),Ct.setValue(W,"batchingTexture",G._matricesTexture,L),Ct.setOptional(W,G,"batchingIdTexture"),Ct.setValue(W,"batchingIdTexture",G._indirectTexture,L),Ct.setOptional(W,G,"batchingColorTexture"),G._colorsTexture!==null&&Ct.setValue(W,"batchingColorTexture",G._colorsTexture,L));const Si=Q.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Je.update(G,Q,sn),(Yt||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,Ct.setValue(W,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(On.envMap.value=Be,On.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(On.envMapIntensity.value=V.environmentIntensity),Yt&&(Ct.setValue(W,"toneMappingExposure",C.toneMappingExposure),Xe.needsLights&&Go(On,fi),Te&&J.fog===!0&&Ae.refreshFogUniforms(On,Te),Ae.refreshMaterialUniforms(On,J,k,le,g.state.transmissionRenderTarget[w.id]),yl.upload(W,Ho(Xe),On,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(yl.upload(W,Ho(Xe),On,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(W,"center",G.center),Ct.setValue(W,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(W,"normalMatrix",G.normalMatrix),Ct.setValue(W,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const pn=J.uniformsGroups;for(let kn=0,xn=pn.length;kn<xn;kn++){const Wo=pn[kn];H.update(Wo,sn),H.bind(Wo,sn)}}return sn}function Go(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Pl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,V,Q){Ye.get(w.texture).__webglTexture=V,Ye.get(w.depthTexture).__webglTexture=Q;const J=Ye.get(w);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const Q=Ye.get(w);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,Q=0){X=w,O=V,N=Q;let J=!0,G=null,Te=!1,ye=!1;if(w){const Be=Ye.get(w);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(W.FRAMEBUFFER,null),J=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Be.__hasExternalTextures)L.rebindTextures(w,Ye.get(w.texture).__webglTexture,Ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ge=w.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&Ye.has(Ge)&&(w.width!==Ge.image.width||w.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(ye=!0);const nt=Ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?G=nt[V][Q]:G=nt[V],Te=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?G=Ye.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?G=nt[Q]:G=nt,B.copy(w.viewport),oe.copy(w.scissor),ee=w.scissorTest}else B.copy(U).multiplyScalar(k).floor(),oe.copy(ne).multiplyScalar(k).floor(),ee=De;if(qe.bindFramebuffer(W.FRAMEBUFFER,G)&&J&&qe.drawBuffers(w,G),qe.viewport(B),qe.scissor(oe),qe.setScissorTest(ee),Te){const Be=Ye.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,Q)}else if(ye){const Be=Ye.get(w.texture),et=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,et)}P=-1},this.readRenderTargetPixels=function(w,V,Q,J,G,Te,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ve=Ve[ye]),Ve){qe.bindFramebuffer(W.FRAMEBUFFER,Ve);try{const Be=w.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&Q>=0&&Q<=w.height-G&&W.readPixels(V,Q,J,G,it.convert(et),it.convert(nt),Te)}finally{const Be=X!==null?Ye.get(X).__webglFramebuffer:null;qe.bindFramebuffer(W.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,V,Q,J,G,Te,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ve=Ve[ye]),Ve){const Be=w.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-J&&Q>=0&&Q<=w.height-G){qe.bindFramebuffer(W.FRAMEBUFFER,Ve);const Ge=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ge),W.bufferData(W.PIXEL_PACK_BUFFER,Te.byteLength,W.STREAM_READ),W.readPixels(V,Q,J,G,it.convert(et),it.convert(nt),0);const mt=X!==null?Ye.get(X).__webglFramebuffer:null;qe.bindFramebuffer(W.FRAMEBUFFER,mt);const yt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Lv(W,yt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ge),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Te),W.deleteBuffer(Ge),W.deleteSync(yt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,Q=0){w.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const J=Math.pow(2,-Q),G=Math.floor(w.image.width*J),Te=Math.floor(w.image.height*J),ye=V!==null?V.x:0,Ve=V!==null?V.y:0;L.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,ye,Ve,G,Te),qe.unbindTexture()},this.copyTextureToTexture=function(w,V,Q=null,J=null,G=0){w.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,w=arguments[1],V=arguments[2],G=arguments[3]||0,Q=null);let Te,ye,Ve,Be,et,nt,Ge,mt,yt;const pt=w.isCompressedTexture?w.mipmaps[G]:w.image;Q!==null?(Te=Q.max.x-Q.min.x,ye=Q.max.y-Q.min.y,Ve=Q.isBox3?Q.max.z-Q.min.z:1,Be=Q.min.x,et=Q.min.y,nt=Q.isBox3?Q.min.z:0):(Te=pt.width,ye=pt.height,Ve=pt.depth||1,Be=0,et=0,nt=0),J!==null?(Ge=J.x,mt=J.y,yt=J.z):(Ge=0,mt=0,yt=0);const rn=it.convert(V.format),st=it.convert(V.type);let Xe;V.isData3DTexture?(L.setTexture3D(V,0),Xe=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(L.setTexture2DArray(V,0),Xe=W.TEXTURE_2D_ARRAY):(L.setTexture2D(V,0),Xe=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);const $n=W.getParameter(W.UNPACK_ROW_LENGTH),xt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),sn=W.getParameter(W.UNPACK_SKIP_PIXELS),Kn=W.getParameter(W.UNPACK_SKIP_ROWS),Yt=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,pt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Be),W.pixelStorei(W.UNPACK_SKIP_ROWS,et),W.pixelStorei(W.UNPACK_SKIP_IMAGES,nt);const fi=w.isDataArrayTexture||w.isData3DTexture,Ct=V.isDataArrayTexture||V.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const On=Ye.get(w),Si=Ye.get(V),pn=Ye.get(On.__renderTarget),kn=Ye.get(Si.__renderTarget);qe.bindFramebuffer(W.READ_FRAMEBUFFER,pn.__webglFramebuffer),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let xn=0;xn<Ve;xn++)fi&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(w).__webglTexture,G,nt+xn),w.isDepthTexture?(Ct&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(V).__webglTexture,G,yt+xn),W.blitFramebuffer(Be,et,Te,ye,Ge,mt,Te,ye,W.DEPTH_BUFFER_BIT,W.NEAREST)):Ct?W.copyTexSubImage3D(Xe,G,Ge,mt,yt+xn,Be,et,Te,ye):W.copyTexSubImage2D(Xe,G,Ge,mt,yt+xn,Be,et,Te,ye);qe.bindFramebuffer(W.READ_FRAMEBUFFER,null),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ct?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Xe,G,Ge,mt,yt,Te,ye,Ve,rn,st,pt.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(Xe,G,Ge,mt,yt,Te,ye,Ve,rn,pt.data):W.texSubImage3D(Xe,G,Ge,mt,yt,Te,ye,Ve,rn,st,pt):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,G,Ge,mt,Te,ye,rn,st,pt.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,G,Ge,mt,pt.width,pt.height,rn,pt.data):W.texSubImage2D(W.TEXTURE_2D,G,Ge,mt,Te,ye,rn,st,pt);W.pixelStorei(W.UNPACK_ROW_LENGTH,$n),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,sn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Kn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Yt),G===0&&V.generateMipmaps&&W.generateMipmap(Xe),qe.unbindTexture()},this.copyTextureToTexture3D=function(w,V,Q=null,J=null,G=0){return w.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,w=arguments[2],V=arguments[3],G=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,Q,J,G)},this.initRenderTarget=function(w){Ye.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),qe.unbindTexture()},this.resetState=function(){O=0,N=0,X=null,qe.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),n.unpackColorSpace=vt._getUnpackColorSpace()}}class GM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class WM extends ko{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mm=new Vt,bf=new Nm,pl=new Al,ml=new te;class XM extends Ln{constructor(e=new Gi,n=new WM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(a),pl.radius+=u,e.ray.intersectsSphere(pl)===!1)return;mm.copy(a).invert(),bf.copy(e.ray).applyMatrix4(mm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const _=Math.max(0,f.start),y=Math.min(m.count,f.start+f.count);for(let E=_,A=y;E<A;E++){const S=m.getX(E);ml.fromBufferAttribute(x,S),gm(ml,S,p,a,e,n,this)}}else{const _=Math.max(0,f.start),y=Math.min(x.count,f.start+f.count);for(let E=_,A=y;E<A;E++)ml.fromBufferAttribute(x,E),gm(ml,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function gm(s,e,n,r,a,u,f){const d=bf.distanceSqToPoint(s);if(d<n){const p=new te;bf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);const YM={idle:{color1:[.3,.6,1],color2:[.1,.3,.8],speed:.15,pulse:.08,radius:2},listening:{color1:[0,.83,1],color2:[0,.5,.8],speed:.4,pulse:.12,radius:2.2},thinking:{color1:[.66,.33,.97],color2:[.98,.75,0],speed:.8,pulse:.2,radius:2.5},speaking:{color1:[.98,.45,.09],color2:[1,.8,.4],speed:.5,pulse:.18,radius:2.4}},_m=2e3,qM=`
  uniform float uTime;
  uniform float uSpeed;
  uniform float uPulse;
  uniform float uRadius;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    float angle = uTime * uSpeed;
    float pulseFactor = 1.0 + uPulse * sin(uTime * 1.5 + pos.x * 2.0);

    pos *= pulseFactor;

    float c = cos(angle);
    float s = sin(angle);
    pos.xz = mat2(c, -s, s, c) * pos.xz;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = (200.0 / -mvPosition.z) * (0.8 + 0.4 * sin(uTime * 2.0 + pos.y * 3.0));
    gl_Position = projectionMatrix * mvPosition;

    vAlpha = 0.6 + 0.4 * sin(uTime * 1.2 + pos.x * 4.0 + pos.y * 3.0 + pos.z * 2.0);
  }
`,jM=`
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  varying float vAlpha;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    if (dist > 0.5) discard;

    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    vec3 color = mix(uColor1, uColor2, glow);

    float alpha = vAlpha * glow;
    gl_FragColor = vec4(color, alpha);
  }
`;class $M{constructor(e){Xn(this,"points");Xn(this,"material");Xn(this,"geometry");Xn(this,"time",0);Xn(this,"currentState","idle");this.geometry=new Gi;const n=new Float32Array(_m*3);for(let r=0;r<_m;r++){const a=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),f=1.8+Math.random()*.4;n[r*3]=f*Math.sin(u)*Math.cos(a),n[r*3+1]=f*Math.sin(u)*Math.sin(a),n[r*3+2]=f*Math.cos(u)}this.geometry.setAttribute("position",new ui(n,3)),this.material=new Vi({uniforms:{uTime:{value:0},uSpeed:{value:.15},uPulse:{value:.05},uRadius:{value:2},uColor1:{value:new te(.15,.3,.8)},uColor2:{value:new te(.1,.15,.5)}},vertexShader:qM,fragmentShader:jM,transparent:!0,blending:Vc,depthWrite:!1}),this.points=new XM(this.geometry,this.material),e.add(this.points)}setState(e){this.currentState=e}update(e){this.time+=e;const n=this.material.uniforms;n.uTime.value=this.time;const r=(x,_,y)=>x+(_-x)*y,a=(x,_,y)=>[r(x[0],_[0],y),r(x[1],_[1],y),r(x[2],_[2],y)],u=YM[this.currentState],f=.05;n.uSpeed.value=r(n.uSpeed.value,u.speed,f),n.uPulse.value=r(n.uPulse.value,u.pulse,f),n.uRadius.value=r(n.uRadius.value,u.radius,f);const d=n.uColor1.value,p=n.uColor2.value,m=a([d.x,d.y,d.z],u.color1,f),v=a([p.x,p.y,p.z],u.color2,f);d.set(m[0],m[1],m[2]),p.set(v[0],v[1],v[2])}dispose(){this.geometry.dispose(),this.material.dispose()}}class KM{constructor(e){Xn(this,"scene");Xn(this,"camera");Xn(this,"renderer");Xn(this,"particleSystem");Xn(this,"animId",0);Xn(this,"lastTime",0);this.scene=new GM,this.camera=new jn(60,e.clientWidth/e.clientHeight,.1,100),this.camera.position.set(0,0,5),this.renderer=new VM({canvas:e,alpha:!0,antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.particleSystem=new $M(this.scene)}setState(e){this.particleSystem.setState(e)}start(){this.lastTime=performance.now();const e=n=>{const r=(n-this.lastTime)/1e3;this.lastTime=n,this.particleSystem.update(r),this.renderer.render(this.scene,this.camera),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}stop(){cancelAnimationFrame(this.animId)}resize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}dispose(){this.stop(),this.particleSystem.dispose(),this.renderer.dispose()}}function ZM({state:s}){const e=Qe.useRef(null),n=Qe.useRef(null);return Qe.useEffect(()=>{const r=e.current;if(r)try{const a=new KM(r);n.current=a,a.start();const u=()=>{e.current&&a.resize(e.current.clientWidth,e.current.clientHeight)};return window.addEventListener("resize",u),()=>{a.dispose(),window.removeEventListener("resize",u)}}catch(a){console.warn("Three.js init failed:",a)}},[]),Qe.useEffect(()=>{var r;(r=n.current)==null||r.setState(s)},[s]),zt.jsxs(zt.Fragment,{children:[zt.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0}}),zt.jsx("div",{className:"orb-fallback",children:"JARVIS"})]})}const QM={idle:"Standing by",listening:"Listening...",thinking:"Thinking...",speaking:"Speaking"};function JM({state:s}){return zt.jsxs("div",{className:"status-bar",children:[zt.jsx("span",{className:`status-dot ${s}`}),zt.jsx("span",{children:QM[s]})]})}function eE(s){const e=Qe.useRef(null),n=Qe.useRef(0),r=10,a=Qe.useRef(s);a.current=s;const u=Qe.useCallback(()=>{var m;if(((m=e.current)==null?void 0:m.readyState)===WebSocket.OPEN)return;const d=location.protocol==="https:"?"wss:":"ws:",p=new WebSocket(`${d}//${location.host}/ws`);p.onopen=()=>{n.current=0},p.onmessage=v=>{try{const x=JSON.parse(v.data);a.current(x)}catch{}},p.onclose=()=>{if(e.current=null,n.current<r){const v=Math.min(1e3*2**n.current,3e4);n.current++,setTimeout(u,v)}},e.current=p},[]),f=Qe.useCallback(d=>{var p;((p=e.current)==null?void 0:p.readyState)===WebSocket.OPEN&&e.current.send(JSON.stringify(d))},[]);return Qe.useEffect(()=>(u(),()=>{var d;(d=e.current)==null||d.close()}),[u]),{send:f,reconnect:u}}const tE=800;function nE(s){const[e,n]=Qe.useState(!1),[r,a]=Qe.useState(""),[u,f]=Qe.useState(""),[d,p]=Qe.useState(""),m=Qe.useRef(null),v=Qe.useRef(null),x=Qe.useRef(""),_=Qe.useRef(""),y=Qe.useRef(""),E=Qe.useRef(s);E.current=s;const A=Qe.useCallback(()=>{p(""),a(""),f(""),x.current="",_.current="",y.current=""},[]),S=Qe.useCallback(()=>{var X;const $=x.current.trim(),O=_.current.trim(),N=$||O;N&&N!==y.current?(y.current=N,p(N),x.current="",_.current="",a(""),f(""),(X=E.current)==null||X.call(E,N)):N&&(x.current="",_.current="")},[]),g=Qe.useCallback(()=>{v.current!==null&&(clearTimeout(v.current),v.current=null)},[]),I=Qe.useCallback(()=>{g(),v.current=setTimeout(S,tE)},[g,S]);Qe.useEffect(()=>{const $=window.SpeechRecognition||window.webkitSpeechRecognition;if(!$){console.warn("SpeechRecognition not available");return}const O=new $;O.continuous=!0,O.interimResults=!0,O.lang="en-US",O.onresult=N=>{let X="";for(let P=N.resultIndex;P<N.results.length;P++){const R=N.results[P];R.isFinal?x.current+=R[0].transcript:X+=R[0].transcript}X?(_.current=X,f(X)):f(""),a(x.current+_.current),I()},O.onend=()=>{n(!1),S()},m.current=O},[I,S]);const D=Qe.useCallback(()=>{if(m.current&&!e){x.current="",_.current="",y.current="",a(""),f("");try{m.current.start(),n(!0)}catch($){console.warn("SpeechRecognition start failed:",$)}}},[e]),C=Qe.useCallback(()=>{if(g(),m.current&&e){try{m.current.stop()}catch($){console.warn("SpeechRecognition stop failed:",$)}n(!1)}S()},[e,g,S]);return{isListening:e,transcript:r,liveInterim:u,lastTranscript:d,start:D,stop:C,clearTranscript:A}}function iE(s){const e=Qe.useRef([]),n=Qe.useRef(!1),[r,a]=Qe.useState(!1),u=Qe.useRef(()=>{}),f=Qe.useRef(s);f.current=s;const d=Qe.useRef(null),p=Qe.useCallback(()=>{var E;if(e.current.length===0){n.current=!1,a(!1),(E=f.current)==null||E.call(f);return}n.current=!0,a(!0);const _=e.current.shift(),y=new SpeechSynthesisUtterance(_);y.rate=1,y.pitch=.9,d.current&&(y.voice=d.current),y.onend=()=>u.current(),y.onerror=()=>u.current(),window.speechSynthesis.speak(y)},[]);u.current=p,Qe.useEffect(()=>{const _=()=>{const E=window.speechSynthesis.getVoices().find(A=>A.lang.startsWith("en"));E&&(d.current=E)};return _(),window.speechSynthesis.onvoiceschanged=_,()=>{window.speechSynthesis.cancel()}},[]);const m=Qe.useCallback(_=>{window.speechSynthesis.cancel(),e.current=[],e.current.push(_),setTimeout(()=>{e.current.length>0&&p()},50)},[p]),v=Qe.useCallback(_=>{e.current.push(_),n.current||p()},[p]),x=Qe.useCallback(()=>{window.speechSynthesis.cancel(),e.current=[],n.current=!1,a(!1)},[]);return{speak:m,enqueue:v,stop:x,isSpeaking:r}}function rE(){const[s,e]=Qe.useState("idle"),[n,r]=Qe.useState([]),a=Qe.useRef(""),u=Qe.useRef(null),f=Qe.useRef(null),d=Qe.useCallback(()=>{e("idle")},[]),p=iE(d),m=Qe.useCallback(E=>{const A=E.type;A==="state"?e(E.state):A==="fragment"?(e("speaking"),a.current+=E.text,r(S=>{const g=[...S];return g.length>0&&g[g.length-1].role==="assistant"?g[g.length-1]={role:"assistant",text:a.current}:g.push({role:"assistant",text:a.current}),g})):A==="response"?(e("speaking"),a.current="",r(S=>{const g=[...S];return g.length>0&&g[g.length-1].role==="assistant"?g[g.length-1]={role:"assistant",text:E.text}:g.push({role:"assistant",text:E.text}),g}),p.speak(E.text)):A==="error"&&(console.error("Server error:",E.text),e("idle"))},[p]),v=eE(m),x=Qe.useCallback(E=>{E.trim()&&(r(A=>[...A,{role:"user",text:E}]),v.send({type:"transcript",text:E}),e("thinking"))},[v]),_=nE(Qe.useCallback(E=>{x(E)},[x])),y=Qe.useCallback(()=>{_.isListening?_.stop():_.start()},[_]);return Qe.useEffect(()=>(s==="idle"&&!_.isListening&&(u.current=setTimeout(()=>{_.start()},500)),()=>{u.current!==null&&(clearTimeout(u.current),u.current=null)}),[s,_.isListening,_.start]),Qe.useEffect(()=>{f.current&&f.current.scrollIntoView({behavior:"smooth"})},[n,_.liveInterim]),zt.jsxs(zt.Fragment,{children:[zt.jsx(ZM,{state:s}),zt.jsxs("div",{className:"overlay",children:[zt.jsx(JM,{state:s}),zt.jsx("button",{onClick:y,className:"mic-btn",children:_.isListening?"Listening...":"Speak"}),zt.jsxs("div",{className:"transcript",children:[n.map((E,A)=>zt.jsxs("div",{className:E.role,children:[zt.jsxs("strong",{children:[E.role==="user"?"You":"JARVIS",":"]})," ",E.text]},A)),_.liveInterim&&zt.jsxs("div",{className:"user interim",children:[zt.jsx("strong",{children:"You:"})," ",_.liveInterim]}),zt.jsx("div",{ref:f})]})]})]})}B_.createRoot(document.getElementById("root")).render(zt.jsx(Qe.StrictMode,{children:zt.jsx(rE,{})}));
