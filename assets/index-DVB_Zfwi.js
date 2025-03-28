var Fb=Object.defineProperty;var zb=(e,t,r)=>t in e?Fb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Un=(e,t,r)=>zb(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function Hl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nd={exports:{}},ss={},rd={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Ib(){if(N0)return ve;N0=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function x(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,_={};function k(M,B,ce){this.props=M,this.context=B,this.refs=_,this.updater=ce||b}k.prototype.isReactComponent={},k.prototype.setState=function(M,B){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,B,"setState")},k.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function P(){}P.prototype=k.prototype;function j(M,B,ce){this.props=M,this.context=B,this.refs=_,this.updater=ce||b}var D=j.prototype=new P;D.constructor=j,S(D,k.prototype),D.isPureReactComponent=!0;var R=Array.isArray,A=Object.prototype.hasOwnProperty,F={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function N(M,B,ce){var ae,de={},ye=null,Pe=null;if(B!=null)for(ae in B.ref!==void 0&&(Pe=B.ref),B.key!==void 0&&(ye=""+B.key),B)A.call(B,ae)&&!z.hasOwnProperty(ae)&&(de[ae]=B[ae]);var xe=arguments.length-2;if(xe===1)de.children=ce;else if(1<xe){for(var Te=Array(xe),ut=0;ut<xe;ut++)Te[ut]=arguments[ut+2];de.children=Te}if(M&&M.defaultProps)for(ae in xe=M.defaultProps,xe)de[ae]===void 0&&(de[ae]=xe[ae]);return{$$typeof:e,type:M,key:ye,ref:Pe,props:de,_owner:F.current}}function U(M,B){return{$$typeof:e,type:M.type,key:B,ref:M.ref,props:M.props,_owner:M._owner}}function ie(M){return typeof M=="object"&&M!==null&&M.$$typeof===e}function pe(M){var B={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ce){return B[ce]})}var he=/\/+/g;function fe(M,B){return typeof M=="object"&&M!==null&&M.key!=null?pe(""+M.key):B.toString(36)}function _e(M,B,ce,ae,de){var ye=typeof M;(ye==="undefined"||ye==="boolean")&&(M=null);var Pe=!1;if(M===null)Pe=!0;else switch(ye){case"string":case"number":Pe=!0;break;case"object":switch(M.$$typeof){case e:case t:Pe=!0}}if(Pe)return Pe=M,de=de(Pe),M=ae===""?"."+fe(Pe,0):ae,R(de)?(ce="",M!=null&&(ce=M.replace(he,"$&/")+"/"),_e(de,B,ce,"",function(ut){return ut})):de!=null&&(ie(de)&&(de=U(de,ce+(!de.key||Pe&&Pe.key===de.key?"":(""+de.key).replace(he,"$&/")+"/")+M)),B.push(de)),1;if(Pe=0,ae=ae===""?".":ae+":",R(M))for(var xe=0;xe<M.length;xe++){ye=M[xe];var Te=ae+fe(ye,xe);Pe+=_e(ye,B,ce,Te,de)}else if(Te=x(M),typeof Te=="function")for(M=Te.call(M),xe=0;!(ye=M.next()).done;)ye=ye.value,Te=ae+fe(ye,xe++),Pe+=_e(ye,B,ce,Te,de);else if(ye==="object")throw B=String(M),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Pe}function ke(M,B,ce){if(M==null)return M;var ae=[],de=0;return _e(M,ae,"","",function(ye){return B.call(ce,ye,de++)}),ae}function ge(M){if(M._status===-1){var B=M._result;B=B(),B.then(function(ce){(M._status===0||M._status===-1)&&(M._status=1,M._result=ce)},function(ce){(M._status===0||M._status===-1)&&(M._status=2,M._result=ce)}),M._status===-1&&(M._status=0,M._result=B)}if(M._status===1)return M._result.default;throw M._result}var ne={current:null},G={transition:null},q={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function J(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:ke,forEach:function(M,B,ce){ke(M,function(){B.apply(this,arguments)},ce)},count:function(M){var B=0;return ke(M,function(){B++}),B},toArray:function(M){return ke(M,function(B){return B})||[]},only:function(M){if(!ie(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ve.Component=k,ve.Fragment=r,ve.Profiler=s,ve.PureComponent=j,ve.StrictMode=o,ve.Suspense=f,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ve.act=J,ve.cloneElement=function(M,B,ce){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ae=S({},M.props),de=M.key,ye=M.ref,Pe=M._owner;if(B!=null){if(B.ref!==void 0&&(ye=B.ref,Pe=F.current),B.key!==void 0&&(de=""+B.key),M.type&&M.type.defaultProps)var xe=M.type.defaultProps;for(Te in B)A.call(B,Te)&&!z.hasOwnProperty(Te)&&(ae[Te]=B[Te]===void 0&&xe!==void 0?xe[Te]:B[Te])}var Te=arguments.length-2;if(Te===1)ae.children=ce;else if(1<Te){xe=Array(Te);for(var ut=0;ut<Te;ut++)xe[ut]=arguments[ut+2];ae.children=xe}return{$$typeof:e,type:M.type,key:de,ref:ye,props:ae,_owner:Pe}},ve.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},ve.createElement=N,ve.createFactory=function(M){var B=N.bind(null,M);return B.type=M,B},ve.createRef=function(){return{current:null}},ve.forwardRef=function(M){return{$$typeof:d,render:M}},ve.isValidElement=ie,ve.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:ge}},ve.memo=function(M,B){return{$$typeof:h,type:M,compare:B===void 0?null:B}},ve.startTransition=function(M){var B=G.transition;G.transition={};try{M()}finally{G.transition=B}},ve.unstable_act=J,ve.useCallback=function(M,B){return ne.current.useCallback(M,B)},ve.useContext=function(M){return ne.current.useContext(M)},ve.useDebugValue=function(){},ve.useDeferredValue=function(M){return ne.current.useDeferredValue(M)},ve.useEffect=function(M,B){return ne.current.useEffect(M,B)},ve.useId=function(){return ne.current.useId()},ve.useImperativeHandle=function(M,B,ce){return ne.current.useImperativeHandle(M,B,ce)},ve.useInsertionEffect=function(M,B){return ne.current.useInsertionEffect(M,B)},ve.useLayoutEffect=function(M,B){return ne.current.useLayoutEffect(M,B)},ve.useMemo=function(M,B){return ne.current.useMemo(M,B)},ve.useReducer=function(M,B,ce){return ne.current.useReducer(M,B,ce)},ve.useRef=function(M){return ne.current.useRef(M)},ve.useState=function(M){return ne.current.useState(M)},ve.useSyncExternalStore=function(M,B,ce){return ne.current.useSyncExternalStore(M,B,ce)},ve.useTransition=function(){return ne.current.useTransition()},ve.version="18.3.1",ve}var V0;function Bf(){return V0||(V0=1,rd.exports=Ib()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function Nb(){if(B0)return ss;B0=1;var e=Bf(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,h){var m,y={},x=null,b=null;h!==void 0&&(x=""+h),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(b=f.ref);for(m in f)o.call(f,m)&&!l.hasOwnProperty(m)&&(y[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)y[m]===void 0&&(y[m]=f[m]);return{$$typeof:t,type:d,key:x,ref:b,props:y,_owner:s.current}}return ss.Fragment=r,ss.jsx=u,ss.jsxs=u,ss}var U0;function Vb(){return U0||(U0=1,nd.exports=Nb()),nd.exports}var v=Vb(),V=Bf();const We=Hl(V);var nl={},id={exports:{}},$t={},od={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function Bb(){return H0||(H0=1,function(e){function t(G,q){var J=G.length;G.push(q);e:for(;0<J;){var M=J-1>>>1,B=G[M];if(0<s(B,q))G[M]=q,G[J]=B,J=M;else break e}}function r(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var q=G[0],J=G.pop();if(J!==q){G[0]=J;e:for(var M=0,B=G.length,ce=B>>>1;M<ce;){var ae=2*(M+1)-1,de=G[ae],ye=ae+1,Pe=G[ye];if(0>s(de,J))ye<B&&0>s(Pe,de)?(G[M]=Pe,G[ye]=J,M=ye):(G[M]=de,G[ae]=J,M=ae);else if(ye<B&&0>s(Pe,J))G[M]=Pe,G[ye]=J,M=ye;else break e}}return q}function s(G,q){var J=G.sortIndex-q.sortIndex;return J!==0?J:G.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var f=[],h=[],m=1,y=null,x=3,b=!1,S=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(G){for(var q=r(h);q!==null;){if(q.callback===null)o(h);else if(q.startTime<=G)o(h),q.sortIndex=q.expirationTime,t(f,q);else break;q=r(h)}}function R(G){if(_=!1,D(G),!S)if(r(f)!==null)S=!0,ge(A);else{var q=r(h);q!==null&&ne(R,q.startTime-G)}}function A(G,q){S=!1,_&&(_=!1,P(N),N=-1),b=!0;var J=x;try{for(D(q),y=r(f);y!==null&&(!(y.expirationTime>q)||G&&!pe());){var M=y.callback;if(typeof M=="function"){y.callback=null,x=y.priorityLevel;var B=M(y.expirationTime<=q);q=e.unstable_now(),typeof B=="function"?y.callback=B:y===r(f)&&o(f),D(q)}else o(f);y=r(f)}if(y!==null)var ce=!0;else{var ae=r(h);ae!==null&&ne(R,ae.startTime-q),ce=!1}return ce}finally{y=null,x=J,b=!1}}var F=!1,z=null,N=-1,U=5,ie=-1;function pe(){return!(e.unstable_now()-ie<U)}function he(){if(z!==null){var G=e.unstable_now();ie=G;var q=!0;try{q=z(!0,G)}finally{q?fe():(F=!1,z=null)}}else F=!1}var fe;if(typeof j=="function")fe=function(){j(he)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ke=_e.port2;_e.port1.onmessage=he,fe=function(){ke.postMessage(null)}}else fe=function(){k(he,0)};function ge(G){z=G,F||(F=!0,fe())}function ne(G,q){N=k(function(){G(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){S||b||(S=!0,ge(A))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return r(f)},e.unstable_next=function(G){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var J=x;x=q;try{return G()}finally{x=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,q){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var J=x;x=G;try{return q()}finally{x=J}},e.unstable_scheduleCallback=function(G,q,J){var M=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?M+J:M):J=M,G){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=J+B,G={id:m++,callback:q,priorityLevel:G,startTime:J,expirationTime:B,sortIndex:-1},J>M?(G.sortIndex=J,t(h,G),r(f)===null&&G===r(h)&&(_?(P(N),N=-1):_=!0,ne(R,J-M))):(G.sortIndex=B,t(f,G),S||b||(S=!0,ge(A))),G},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(G){var q=x;return function(){var J=x;x=q;try{return G.apply(this,arguments)}finally{x=J}}}}(sd)),sd}var W0;function Ub(){return W0||(W0=1,od.exports=Bb()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function Hb(){if(G0)return $t;G0=1;var e=Bf(),t=Ub();function r(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(s[n]=i,n=0;n<i.length;n++)o.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},y={};function x(n){return f.call(y,n)?!0:f.call(m,n)?!1:h.test(n)?y[n]=!0:(m[n]=!0,!1)}function b(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,c){if(i===null||typeof i>"u"||b(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function _(n,i,a,c,p,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){k[n]=new _(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];k[i]=new _(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){k[n]=new _(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){k[n]=new _(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){k[n]=new _(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){k[n]=new _(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){k[n]=new _(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){k[n]=new _(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){k[n]=new _(n,5,!1,n.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function j(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(P,j);k[i]=new _(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(P,j);k[i]=new _(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(P,j);k[i]=new _(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){k[n]=new _(n,1,!1,n.toLowerCase(),null,!1,!1)}),k.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){k[n]=new _(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var p=k.hasOwnProperty(i)?k[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,c)&&(a=null),c||p===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),F=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),pe=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),ke=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),G=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var J=Object.assign,M;function B(n){if(M===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||""}return`
`+M+n}var ce=!1;function ae(n,i){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(I){var c=I}Reflect.construct(n,[],i)}else{try{i.call()}catch(I){c=I}n.call(i.prototype)}else{try{throw Error()}catch(I){c=I}n()}}catch(I){if(I&&c&&typeof I.stack=="string"){for(var p=I.stack.split(`
`),g=c.stack.split(`
`),w=p.length-1,C=g.length-1;1<=w&&0<=C&&p[w]!==g[C];)C--;for(;1<=w&&0<=C;w--,C--)if(p[w]!==g[C]){if(w!==1||C!==1)do if(w--,C--,0>C||p[w]!==g[C]){var E=`
`+p[w].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=w&&0<=C);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function de(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=ae(n.type,!1),n;case 11:return n=ae(n.type.render,!1),n;case 1:return n=ae(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case F:return"Portal";case U:return"Profiler";case N:return"StrictMode";case fe:return"Suspense";case _e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case pe:return(n.displayName||"Context")+".Consumer";case ie:return(n._context.displayName||"Context")+".Provider";case he:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ke:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case ge:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function Pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ut(n){var i=Te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rn(n){n._valueTracker||(n._valueTracker=ut(n))}function un(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ys(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function uu(n,i){var a=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Yh(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=xe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Kh(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function cu(n,i){Kh(n,i);var a=xe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?du(n,i.type,a):i.hasOwnProperty("defaultValue")&&du(n,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xh(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function du(n,i,a){(i!=="number"||Ys(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _o=Array.isArray;function mi(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function fu(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(r(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Jh(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(r(92));if(_o(a)){if(1<a.length)throw Error(r(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:xe(a)}}function Qh(n,i){var a=xe(i.value),c=xe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function qh(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Zh(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Zh(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ks,ep=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ks.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function bo(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vw=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(n){Vw.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),So[i]=So[n]})});function tp(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||So.hasOwnProperty(n)&&So[n]?(""+i).trim():i+"px"}function np(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=tp(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var Bw=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(n,i){if(i){if(Bw[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(r(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(r(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(r(61))}if(i.style!=null&&typeof i.style!="object")throw Error(r(62))}}function mu(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function yu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vu=null,gi=null,yi=null;function rp(n){if(n=Wo(n)){if(typeof vu!="function")throw Error(r(280));var i=n.stateNode;i&&(i=ya(i),vu(n.stateNode,n.type,i))}}function ip(n){gi?yi?yi.push(n):yi=[n]:gi=n}function op(){if(gi){var n=gi,i=yi;if(yi=gi=null,rp(n),i)for(n=0;n<i.length;n++)rp(i[n])}}function sp(n,i){return n(i)}function ap(){}var xu=!1;function lp(n,i,a){if(xu)return n(i,a);xu=!0;try{return sp(n,i,a)}finally{xu=!1,(gi!==null||yi!==null)&&(ap(),op())}}function ko(n,i){var a=n.stateNode;if(a===null)return null;var c=ya(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var wu=!1;if(d)try{var To={};Object.defineProperty(To,"passive",{get:function(){wu=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{wu=!1}function Uw(n,i,a,c,p,g,w,C,E){var I=Array.prototype.slice.call(arguments,3);try{i.apply(a,I)}catch(W){this.onError(W)}}var Co=!1,Xs=null,Js=!1,_u=null,Hw={onError:function(n){Co=!0,Xs=n}};function Ww(n,i,a,c,p,g,w,C,E){Co=!1,Xs=null,Uw.apply(Hw,arguments)}function Gw(n,i,a,c,p,g,w,C,E){if(Ww.apply(this,arguments),Co){if(Co){var I=Xs;Co=!1,Xs=null}else throw Error(r(198));Js||(Js=!0,_u=I)}}function Rr(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function up(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function cp(n){if(Rr(n)!==n)throw Error(r(188))}function Yw(n){var i=n.alternate;if(!i){if(i=Rr(n),i===null)throw Error(r(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===a)return cp(p),n;if(g===c)return cp(p),i;g=g.sibling}throw Error(r(188))}if(a.return!==c.return)a=p,c=g;else{for(var w=!1,C=p.child;C;){if(C===a){w=!0,a=p,c=g;break}if(C===c){w=!0,c=p,a=g;break}C=C.sibling}if(!w){for(C=g.child;C;){if(C===a){w=!0,a=g,c=p;break}if(C===c){w=!0,c=g,a=p;break}C=C.sibling}if(!w)throw Error(r(189))}}if(a.alternate!==c)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?n:i}function dp(n){return n=Yw(n),n!==null?fp(n):null}function fp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fp(n);if(i!==null)return i;n=n.sibling}return null}var hp=t.unstable_scheduleCallback,pp=t.unstable_cancelCallback,Kw=t.unstable_shouldYield,Xw=t.unstable_requestPaint,Ye=t.unstable_now,Jw=t.unstable_getCurrentPriorityLevel,bu=t.unstable_ImmediatePriority,mp=t.unstable_UserBlockingPriority,Qs=t.unstable_NormalPriority,Qw=t.unstable_LowPriority,gp=t.unstable_IdlePriority,qs=null,wn=null;function qw(n){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(qs,n,void 0,(n.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:t_,Zw=Math.log,e_=Math.LN2;function t_(n){return n>>>=0,n===0?32:31-(Zw(n)/e_|0)|0}var Zs=64,ea=4194304;function Po(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ta(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var C=w&~p;C!==0?c=Po(C):(g&=w,g!==0&&(c=Po(g)))}else w=a&~p,w!==0?c=Po(w):g!==0&&(c=Po(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,g=i&-i,p>=g||p===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-cn(i),p=1<<a,c|=n[a],i&=~p;return c}function n_(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r_(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-cn(g),C=1<<w,E=p[w];E===-1?((C&a)===0||(C&c)!==0)&&(p[w]=n_(C,i)):E<=i&&(n.expiredLanes|=C),g&=~C}}function Su(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yp(){var n=Zs;return Zs<<=1,(Zs&4194240)===0&&(Zs=64),n}function ku(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Eo(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-cn(i),n[i]=a}function i_(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-cn(a),g=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~g}}function Tu(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-cn(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var je=0;function vp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xp,Cu,wp,_p,bp,Pu=!1,na=[],Zn=null,er=null,tr=null,jo=new Map,Ao=new Map,nr=[],o_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(n,i){switch(n){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(i.pointerId)}}function $o(n,i,a,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},i!==null&&(i=Wo(i),i!==null&&Cu(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function s_(n,i,a,c,p){switch(i){case"focusin":return Zn=$o(Zn,n,i,a,c,p),!0;case"dragenter":return er=$o(er,n,i,a,c,p),!0;case"mouseover":return tr=$o(tr,n,i,a,c,p),!0;case"pointerover":var g=p.pointerId;return jo.set(g,$o(jo.get(g)||null,n,i,a,c,p)),!0;case"gotpointercapture":return g=p.pointerId,Ao.set(g,$o(Ao.get(g)||null,n,i,a,c,p)),!0}return!1}function kp(n){var i=Lr(n.target);if(i!==null){var a=Rr(i);if(a!==null){if(i=a.tag,i===13){if(i=up(a),i!==null){n.blockedOn=i,bp(n.priority,function(){wp(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ra(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ju(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);gu=c,a.target.dispatchEvent(c),gu=null}else return i=Wo(a),i!==null&&Cu(i),n.blockedOn=a,!1;i.shift()}return!0}function Tp(n,i,a){ra(n)&&a.delete(i)}function a_(){Pu=!1,Zn!==null&&ra(Zn)&&(Zn=null),er!==null&&ra(er)&&(er=null),tr!==null&&ra(tr)&&(tr=null),jo.forEach(Tp),Ao.forEach(Tp)}function Do(n,i){n.blockedOn===i&&(n.blockedOn=null,Pu||(Pu=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,a_)))}function Mo(n){function i(p){return Do(p,n)}if(0<na.length){Do(na[0],n);for(var a=1;a<na.length;a++){var c=na[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Zn!==null&&Do(Zn,n),er!==null&&Do(er,n),tr!==null&&Do(tr,n),jo.forEach(i),Ao.forEach(i),a=0;a<nr.length;a++)c=nr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)kp(a),a.blockedOn===null&&nr.shift()}var vi=R.ReactCurrentBatchConfig,ia=!0;function l_(n,i,a,c){var p=je,g=vi.transition;vi.transition=null;try{je=1,Eu(n,i,a,c)}finally{je=p,vi.transition=g}}function u_(n,i,a,c){var p=je,g=vi.transition;vi.transition=null;try{je=4,Eu(n,i,a,c)}finally{je=p,vi.transition=g}}function Eu(n,i,a,c){if(ia){var p=ju(n,i,a,c);if(p===null)Gu(n,i,c,oa,a),Sp(n,c);else if(s_(p,n,i,a,c))c.stopPropagation();else if(Sp(n,c),i&4&&-1<o_.indexOf(n)){for(;p!==null;){var g=Wo(p);if(g!==null&&xp(g),g=ju(n,i,a,c),g===null&&Gu(n,i,c,oa,a),g===p)break;p=g}p!==null&&c.stopPropagation()}else Gu(n,i,c,null,a)}}var oa=null;function ju(n,i,a,c){if(oa=null,n=yu(c),n=Lr(n),n!==null)if(i=Rr(n),i===null)n=null;else if(a=i.tag,a===13){if(n=up(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return oa=n,null}function Cp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jw()){case bu:return 1;case mp:return 4;case Qs:case Qw:return 16;case gp:return 536870912;default:return 16}default:return 16}}var rr=null,Au=null,sa=null;function Pp(){if(sa)return sa;var n,i=Au,a=i.length,c,p="value"in rr?rr.value:rr.textContent,g=p.length;for(n=0;n<a&&i[n]===p[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===p[g-c];c++);return sa=p.slice(n,1<c?1-c:void 0)}function aa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function la(){return!0}function Ep(){return!1}function Ft(n){function i(a,c,p,g,w){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(a=n[C],this[C]=a?a(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?la:Ep,this.isPropagationStopped=Ep,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),i}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=Ft(xi),Ro=J({},xi,{view:0,detail:0}),c_=Ft(Ro),Du,Mu,Lo,ua=J({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(Du=n.screenX-Lo.screenX,Mu=n.screenY-Lo.screenY):Mu=Du=0,Lo=n),Du)},movementY:function(n){return"movementY"in n?n.movementY:Mu}}),jp=Ft(ua),d_=J({},ua,{dataTransfer:0}),f_=Ft(d_),h_=J({},Ro,{relatedTarget:0}),Ru=Ft(h_),p_=J({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=Ft(p_),g_=J({},xi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),y_=Ft(g_),v_=J({},xi,{data:0}),Ap=Ft(v_),x_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},__={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=__[n])?!!i[n]:!1}function Lu(){return b_}var S_=J({},Ro,{key:function(n){if(n.key){var i=x_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=aa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?w_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(n){return n.type==="keypress"?aa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?aa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),k_=Ft(S_),T_=J({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Ft(T_),C_=J({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),P_=Ft(C_),E_=J({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=Ft(E_),A_=J({},ua,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=Ft(A_),D_=[9,13,27,32],Ou=d&&"CompositionEvent"in window,Oo=null;d&&"documentMode"in document&&(Oo=document.documentMode);var M_=d&&"TextEvent"in window&&!Oo,Dp=d&&(!Ou||Oo&&8<Oo&&11>=Oo),Mp=" ",Rp=!1;function Lp(n,i){switch(n){case"keyup":return D_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wi=!1;function R_(n,i){switch(n){case"compositionend":return Op(i);case"keypress":return i.which!==32?null:(Rp=!0,Mp);case"textInput":return n=i.data,n===Mp&&Rp?null:n;default:return null}}function L_(n,i){if(wi)return n==="compositionend"||!Ou&&Lp(n,i)?(n=Pp(),sa=Au=rr=null,wi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dp&&i.locale!=="ko"?null:i.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!O_[n.type]:i==="textarea"}function zp(n,i,a,c){ip(c),i=pa(i,"onChange"),0<i.length&&(a=new $u("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Fo=null,zo=null;function F_(n){nm(n,0)}function ca(n){var i=Ti(n);if(un(i))return n}function z_(n,i){if(n==="change")return i}var Ip=!1;if(d){var Fu;if(d){var zu="oninput"in document;if(!zu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),zu=typeof Np.oninput=="function"}Fu=zu}else Fu=!1;Ip=Fu&&(!document.documentMode||9<document.documentMode)}function Vp(){Fo&&(Fo.detachEvent("onpropertychange",Bp),zo=Fo=null)}function Bp(n){if(n.propertyName==="value"&&ca(zo)){var i=[];zp(i,zo,n,yu(n)),lp(F_,i)}}function I_(n,i,a){n==="focusin"?(Vp(),Fo=i,zo=a,Fo.attachEvent("onpropertychange",Bp)):n==="focusout"&&Vp()}function N_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ca(zo)}function V_(n,i){if(n==="click")return ca(i)}function B_(n,i){if(n==="input"||n==="change")return ca(i)}function U_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var dn=typeof Object.is=="function"?Object.is:U_;function Io(n,i){if(dn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!f.call(i,p)||!dn(n[p],i[p]))return!1}return!0}function Up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hp(n,i){var a=Up(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Up(a)}}function Wp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Gp(){for(var n=window,i=Ys();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ys(n.document)}return i}function Iu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function H_(n){var i=Gp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wp(a.ownerDocument.documentElement,a)){if(c!==null&&Iu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,g=Math.min(c.start,p);c=c.end===void 0?g:Math.min(c.end,p),!n.extend&&g>c&&(p=c,c=g,g=p),p=Hp(a,g);var w=Hp(a,c);p&&w&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var W_=d&&"documentMode"in document&&11>=document.documentMode,_i=null,Nu=null,No=null,Vu=!1;function Yp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vu||_i==null||_i!==Ys(c)||(c=_i,"selectionStart"in c&&Iu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),No&&Io(No,c)||(No=c,c=pa(Nu,"onSelect"),0<c.length&&(i=new $u("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=_i)))}function da(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var bi={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Bu={},Kp={};d&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function fa(n){if(Bu[n])return Bu[n];if(!bi[n])return n;var i=bi[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Kp)return Bu[n]=i[a];return n}var Xp=fa("animationend"),Jp=fa("animationiteration"),Qp=fa("animationstart"),qp=fa("transitionend"),Zp=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){Zp.set(n,i),l(i,[n])}for(var Uu=0;Uu<em.length;Uu++){var Hu=em[Uu],G_=Hu.toLowerCase(),Y_=Hu[0].toUpperCase()+Hu.slice(1);ir(G_,"on"+Y_)}ir(Xp,"onAnimationEnd"),ir(Jp,"onAnimationIteration"),ir(Qp,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(qp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function tm(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Gw(c,i,void 0,n),n.currentTarget=null}function nm(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var C=c[w],E=C.instance,I=C.currentTarget;if(C=C.listener,E!==g&&p.isPropagationStopped())break e;tm(p,C,I),g=E}else for(w=0;w<c.length;w++){if(C=c[w],E=C.instance,I=C.currentTarget,C=C.listener,E!==g&&p.isPropagationStopped())break e;tm(p,C,I),g=E}}}if(Js)throw n=_u,Js=!1,_u=null,n}function Me(n,i){var a=i[qu];a===void 0&&(a=i[qu]=new Set);var c=n+"__bubble";a.has(c)||(rm(i,n,2,!1),a.add(c))}function Wu(n,i,a){var c=0;i&&(c|=4),rm(a,n,c,i)}var ha="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[ha]){n[ha]=!0,o.forEach(function(a){a!=="selectionchange"&&(K_.has(a)||Wu(a,!1,n),Wu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ha]||(i[ha]=!0,Wu("selectionchange",!1,i))}}function rm(n,i,a,c){switch(Cp(i)){case 1:var p=l_;break;case 4:p=u_;break;default:p=Eu}a=p.bind(null,i,a,n),p=void 0,!wu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Gu(n,i,a,c,p){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var C=c.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var E=w.tag;if((E===3||E===4)&&(E=w.stateNode.containerInfo,E===p||E.nodeType===8&&E.parentNode===p))return;w=w.return}for(;C!==null;){if(w=Lr(C),w===null)return;if(E=w.tag,E===5||E===6){c=g=w;continue e}C=C.parentNode}}c=c.return}lp(function(){var I=g,W=yu(a),Y=[];e:{var H=Zp.get(n);if(H!==void 0){var Q=$u,ee=n;switch(n){case"keypress":if(aa(a)===0)break e;case"keydown":case"keyup":Q=k_;break;case"focusin":ee="focus",Q=Ru;break;case"focusout":ee="blur",Q=Ru;break;case"beforeblur":case"afterblur":Q=Ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=f_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=P_;break;case Xp:case Jp:case Qp:Q=m_;break;case qp:Q=j_;break;case"scroll":Q=c_;break;case"wheel":Q=$_;break;case"copy":case"cut":case"paste":Q=y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=$p}var te=(i&4)!==0,Ke=!te&&n==="scroll",L=te?H!==null?H+"Capture":null:H;te=[];for(var $=I,O;$!==null;){O=$;var K=O.stateNode;if(O.tag===5&&K!==null&&(O=K,L!==null&&(K=ko($,L),K!=null&&te.push(Uo($,K,O)))),Ke)break;$=$.return}0<te.length&&(H=new Q(H,ee,null,a,W),Y.push({event:H,listeners:te}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",H&&a!==gu&&(ee=a.relatedTarget||a.fromElement)&&(Lr(ee)||ee[Ln]))break e;if((Q||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,Q?(ee=a.relatedTarget||a.toElement,Q=I,ee=ee?Lr(ee):null,ee!==null&&(Ke=Rr(ee),ee!==Ke||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(Q=null,ee=I),Q!==ee)){if(te=jp,K="onMouseLeave",L="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(te=$p,K="onPointerLeave",L="onPointerEnter",$="pointer"),Ke=Q==null?H:Ti(Q),O=ee==null?H:Ti(ee),H=new te(K,$+"leave",Q,a,W),H.target=Ke,H.relatedTarget=O,K=null,Lr(W)===I&&(te=new te(L,$+"enter",ee,a,W),te.target=O,te.relatedTarget=Ke,K=te),Ke=K,Q&&ee)t:{for(te=Q,L=ee,$=0,O=te;O;O=Si(O))$++;for(O=0,K=L;K;K=Si(K))O++;for(;0<$-O;)te=Si(te),$--;for(;0<O-$;)L=Si(L),O--;for(;$--;){if(te===L||L!==null&&te===L.alternate)break t;te=Si(te),L=Si(L)}te=null}else te=null;Q!==null&&im(Y,H,Q,te,!1),ee!==null&&Ke!==null&&im(Y,Ke,ee,te,!0)}}e:{if(H=I?Ti(I):window,Q=H.nodeName&&H.nodeName.toLowerCase(),Q==="select"||Q==="input"&&H.type==="file")var re=z_;else if(Fp(H))if(Ip)re=B_;else{re=N_;var oe=I_}else(Q=H.nodeName)&&Q.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(re=V_);if(re&&(re=re(n,I))){zp(Y,re,a,W);break e}oe&&oe(n,H,I),n==="focusout"&&(oe=H._wrapperState)&&oe.controlled&&H.type==="number"&&du(H,"number",H.value)}switch(oe=I?Ti(I):window,n){case"focusin":(Fp(oe)||oe.contentEditable==="true")&&(_i=oe,Nu=I,No=null);break;case"focusout":No=Nu=_i=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Yp(Y,a,W);break;case"selectionchange":if(W_)break;case"keydown":case"keyup":Yp(Y,a,W)}var se;if(Ou)e:{switch(n){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else wi?Lp(n,a)&&(ue="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Dp&&a.locale!=="ko"&&(wi||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&wi&&(se=Pp()):(rr=W,Au="value"in rr?rr.value:rr.textContent,wi=!0)),oe=pa(I,ue),0<oe.length&&(ue=new Ap(ue,n,null,a,W),Y.push({event:ue,listeners:oe}),se?ue.data=se:(se=Op(a),se!==null&&(ue.data=se)))),(se=M_?R_(n,a):L_(n,a))&&(I=pa(I,"onBeforeInput"),0<I.length&&(W=new Ap("onBeforeInput","beforeinput",null,a,W),Y.push({event:W,listeners:I}),W.data=se))}nm(Y,i)})}function Uo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function pa(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=ko(n,a),g!=null&&c.unshift(Uo(n,g,p)),g=ko(n,i),g!=null&&c.push(Uo(n,g,p))),n=n.return}return c}function Si(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function im(n,i,a,c,p){for(var g=i._reactName,w=[];a!==null&&a!==c;){var C=a,E=C.alternate,I=C.stateNode;if(E!==null&&E===c)break;C.tag===5&&I!==null&&(C=I,p?(E=ko(a,g),E!=null&&w.unshift(Uo(a,E,C))):p||(E=ko(a,g),E!=null&&w.push(Uo(a,E,C)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var X_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function om(n){return(typeof n=="string"?n:""+n).replace(X_,`
`).replace(J_,"")}function ma(n,i,a){if(i=om(i),om(n)!==i&&a)throw Error(r(425))}function ga(){}var Yu=null,Ku=null;function Xu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,Q_=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,q_=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(n){return sm.resolve(null).then(n).catch(Z_)}:Ju;function Z_(n){setTimeout(function(){throw n})}function Qu(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),Mo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Mo(i)}function or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function am(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ki=Math.random().toString(36).slice(2),_n="__reactFiber$"+ki,Ho="__reactProps$"+ki,Ln="__reactContainer$"+ki,qu="__reactEvents$"+ki,eb="__reactListeners$"+ki,tb="__reactHandles$"+ki;function Lr(n){var i=n[_n];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ln]||a[_n]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=am(n);n!==null;){if(a=n[_n])return a;n=am(n)}return i}n=a,a=n.parentNode}return null}function Wo(n){return n=n[_n]||n[Ln],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ti(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(r(33))}function ya(n){return n[Ho]||null}var Zu=[],Ci=-1;function sr(n){return{current:n}}function Re(n){0>Ci||(n.current=Zu[Ci],Zu[Ci]=null,Ci--)}function $e(n,i){Ci++,Zu[Ci]=n.current,n.current=i}var ar={},pt=sr(ar),Ct=sr(!1),Or=ar;function Pi(n,i){var a=n.type.contextTypes;if(!a)return ar;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in a)p[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function Pt(n){return n=n.childContextTypes,n!=null}function va(){Re(Ct),Re(pt)}function lm(n,i,a){if(pt.current!==ar)throw Error(r(168));$e(pt,i),$e(Ct,a)}function um(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(r(108,Pe(n)||"Unknown",p));return J({},a,c)}function xa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Or=pt.current,$e(pt,n),$e(Ct,Ct.current),!0}function cm(n,i,a){var c=n.stateNode;if(!c)throw Error(r(169));a?(n=um(n,i,Or),c.__reactInternalMemoizedMergedChildContext=n,Re(Ct),Re(pt),$e(pt,n)):Re(Ct),$e(Ct,a)}var On=null,wa=!1,ec=!1;function dm(n){On===null?On=[n]:On.push(n)}function nb(n){wa=!0,dm(n)}function lr(){if(!ec&&On!==null){ec=!0;var n=0,i=je;try{var a=On;for(je=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}On=null,wa=!1}catch(p){throw On!==null&&(On=On.slice(n+1)),hp(bu,lr),p}finally{je=i,ec=!1}}return null}var Ei=[],ji=0,_a=null,ba=0,Jt=[],Qt=0,Fr=null,Fn=1,zn="";function zr(n,i){Ei[ji++]=ba,Ei[ji++]=_a,_a=n,ba=i}function fm(n,i,a){Jt[Qt++]=Fn,Jt[Qt++]=zn,Jt[Qt++]=Fr,Fr=n;var c=Fn;n=zn;var p=32-cn(c)-1;c&=~(1<<p),a+=1;var g=32-cn(i)+p;if(30<g){var w=p-p%5;g=(c&(1<<w)-1).toString(32),c>>=w,p-=w,Fn=1<<32-cn(i)+p|a<<p|c,zn=g+n}else Fn=1<<g|a<<p|c,zn=n}function tc(n){n.return!==null&&(zr(n,1),fm(n,1,0))}function nc(n){for(;n===_a;)_a=Ei[--ji],Ei[ji]=null,ba=Ei[--ji],Ei[ji]=null;for(;n===Fr;)Fr=Jt[--Qt],Jt[Qt]=null,zn=Jt[--Qt],Jt[Qt]=null,Fn=Jt[--Qt],Jt[Qt]=null}var zt=null,It=null,Oe=!1,fn=null;function hm(n,i){var a=tn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function pm(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zt=n,It=or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zt=n,It=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Fr!==null?{id:Fn,overflow:zn}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=tn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zt=n,It=null,!0):!1;default:return!1}}function rc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ic(n){if(Oe){var i=It;if(i){var a=i;if(!pm(n,i)){if(rc(n))throw Error(r(418));i=or(a.nextSibling);var c=zt;i&&pm(n,i)?hm(c,a):(n.flags=n.flags&-4097|2,Oe=!1,zt=n)}}else{if(rc(n))throw Error(r(418));n.flags=n.flags&-4097|2,Oe=!1,zt=n}}}function mm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zt=n}function Sa(n){if(n!==zt)return!1;if(!Oe)return mm(n),Oe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Xu(n.type,n.memoizedProps)),i&&(i=It)){if(rc(n))throw gm(),Error(r(418));for(;i;)hm(n,i),i=or(i.nextSibling)}if(mm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){It=or(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}It=null}}else It=zt?or(n.stateNode.nextSibling):null;return!0}function gm(){for(var n=It;n;)n=or(n.nextSibling)}function Ai(){It=zt=null,Oe=!1}function oc(n){fn===null?fn=[n]:fn.push(n)}var rb=R.ReactCurrentBatchConfig;function Go(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(r(309));var c=a.stateNode}if(!c)throw Error(r(147,n));var p=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var C=p.refs;w===null?delete C[g]:C[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(r(284));if(!a._owner)throw Error(r(290,n))}return n}function ka(n,i){throw n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ym(n){var i=n._init;return i(n._payload)}function vm(n){function i(L,$){if(n){var O=L.deletions;O===null?(L.deletions=[$],L.flags|=16):O.push($)}}function a(L,$){if(!n)return null;for(;$!==null;)i(L,$),$=$.sibling;return null}function c(L,$){for(L=new Map;$!==null;)$.key!==null?L.set($.key,$):L.set($.index,$),$=$.sibling;return L}function p(L,$){return L=gr(L,$),L.index=0,L.sibling=null,L}function g(L,$,O){return L.index=O,n?(O=L.alternate,O!==null?(O=O.index,O<$?(L.flags|=2,$):O):(L.flags|=2,$)):(L.flags|=1048576,$)}function w(L){return n&&L.alternate===null&&(L.flags|=2),L}function C(L,$,O,K){return $===null||$.tag!==6?($=Jc(O,L.mode,K),$.return=L,$):($=p($,O),$.return=L,$)}function E(L,$,O,K){var re=O.type;return re===z?W(L,$,O.props.children,K,O.key):$!==null&&($.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ge&&ym(re)===$.type)?(K=p($,O.props),K.ref=Go(L,$,O),K.return=L,K):(K=Ka(O.type,O.key,O.props,null,L.mode,K),K.ref=Go(L,$,O),K.return=L,K)}function I(L,$,O,K){return $===null||$.tag!==4||$.stateNode.containerInfo!==O.containerInfo||$.stateNode.implementation!==O.implementation?($=Qc(O,L.mode,K),$.return=L,$):($=p($,O.children||[]),$.return=L,$)}function W(L,$,O,K,re){return $===null||$.tag!==7?($=Gr(O,L.mode,K,re),$.return=L,$):($=p($,O),$.return=L,$)}function Y(L,$,O){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Jc(""+$,L.mode,O),$.return=L,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case A:return O=Ka($.type,$.key,$.props,null,L.mode,O),O.ref=Go(L,null,$),O.return=L,O;case F:return $=Qc($,L.mode,O),$.return=L,$;case ge:var K=$._init;return Y(L,K($._payload),O)}if(_o($)||q($))return $=Gr($,L.mode,O,null),$.return=L,$;ka(L,$)}return null}function H(L,$,O,K){var re=$!==null?$.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return re!==null?null:C(L,$,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return O.key===re?E(L,$,O,K):null;case F:return O.key===re?I(L,$,O,K):null;case ge:return re=O._init,H(L,$,re(O._payload),K)}if(_o(O)||q(O))return re!==null?null:W(L,$,O,K,null);ka(L,O)}return null}function Q(L,$,O,K,re){if(typeof K=="string"&&K!==""||typeof K=="number")return L=L.get(O)||null,C($,L,""+K,re);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case A:return L=L.get(K.key===null?O:K.key)||null,E($,L,K,re);case F:return L=L.get(K.key===null?O:K.key)||null,I($,L,K,re);case ge:var oe=K._init;return Q(L,$,O,oe(K._payload),re)}if(_o(K)||q(K))return L=L.get(O)||null,W($,L,K,re,null);ka($,K)}return null}function ee(L,$,O,K){for(var re=null,oe=null,se=$,ue=$=0,ot=null;se!==null&&ue<O.length;ue++){se.index>ue?(ot=se,se=null):ot=se.sibling;var Ce=H(L,se,O[ue],K);if(Ce===null){se===null&&(se=ot);break}n&&se&&Ce.alternate===null&&i(L,se),$=g(Ce,$,ue),oe===null?re=Ce:oe.sibling=Ce,oe=Ce,se=ot}if(ue===O.length)return a(L,se),Oe&&zr(L,ue),re;if(se===null){for(;ue<O.length;ue++)se=Y(L,O[ue],K),se!==null&&($=g(se,$,ue),oe===null?re=se:oe.sibling=se,oe=se);return Oe&&zr(L,ue),re}for(se=c(L,se);ue<O.length;ue++)ot=Q(se,L,ue,O[ue],K),ot!==null&&(n&&ot.alternate!==null&&se.delete(ot.key===null?ue:ot.key),$=g(ot,$,ue),oe===null?re=ot:oe.sibling=ot,oe=ot);return n&&se.forEach(function(yr){return i(L,yr)}),Oe&&zr(L,ue),re}function te(L,$,O,K){var re=q(O);if(typeof re!="function")throw Error(r(150));if(O=re.call(O),O==null)throw Error(r(151));for(var oe=re=null,se=$,ue=$=0,ot=null,Ce=O.next();se!==null&&!Ce.done;ue++,Ce=O.next()){se.index>ue?(ot=se,se=null):ot=se.sibling;var yr=H(L,se,Ce.value,K);if(yr===null){se===null&&(se=ot);break}n&&se&&yr.alternate===null&&i(L,se),$=g(yr,$,ue),oe===null?re=yr:oe.sibling=yr,oe=yr,se=ot}if(Ce.done)return a(L,se),Oe&&zr(L,ue),re;if(se===null){for(;!Ce.done;ue++,Ce=O.next())Ce=Y(L,Ce.value,K),Ce!==null&&($=g(Ce,$,ue),oe===null?re=Ce:oe.sibling=Ce,oe=Ce);return Oe&&zr(L,ue),re}for(se=c(L,se);!Ce.done;ue++,Ce=O.next())Ce=Q(se,L,ue,Ce.value,K),Ce!==null&&(n&&Ce.alternate!==null&&se.delete(Ce.key===null?ue:Ce.key),$=g(Ce,$,ue),oe===null?re=Ce:oe.sibling=Ce,oe=Ce);return n&&se.forEach(function(Ob){return i(L,Ob)}),Oe&&zr(L,ue),re}function Ke(L,$,O,K){if(typeof O=="object"&&O!==null&&O.type===z&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case A:e:{for(var re=O.key,oe=$;oe!==null;){if(oe.key===re){if(re=O.type,re===z){if(oe.tag===7){a(L,oe.sibling),$=p(oe,O.props.children),$.return=L,L=$;break e}}else if(oe.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ge&&ym(re)===oe.type){a(L,oe.sibling),$=p(oe,O.props),$.ref=Go(L,oe,O),$.return=L,L=$;break e}a(L,oe);break}else i(L,oe);oe=oe.sibling}O.type===z?($=Gr(O.props.children,L.mode,K,O.key),$.return=L,L=$):(K=Ka(O.type,O.key,O.props,null,L.mode,K),K.ref=Go(L,$,O),K.return=L,L=K)}return w(L);case F:e:{for(oe=O.key;$!==null;){if($.key===oe)if($.tag===4&&$.stateNode.containerInfo===O.containerInfo&&$.stateNode.implementation===O.implementation){a(L,$.sibling),$=p($,O.children||[]),$.return=L,L=$;break e}else{a(L,$);break}else i(L,$);$=$.sibling}$=Qc(O,L.mode,K),$.return=L,L=$}return w(L);case ge:return oe=O._init,Ke(L,$,oe(O._payload),K)}if(_o(O))return ee(L,$,O,K);if(q(O))return te(L,$,O,K);ka(L,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,$!==null&&$.tag===6?(a(L,$.sibling),$=p($,O),$.return=L,L=$):(a(L,$),$=Jc(O,L.mode,K),$.return=L,L=$),w(L)):a(L,$)}return Ke}var $i=vm(!0),xm=vm(!1),Ta=sr(null),Ca=null,Di=null,sc=null;function ac(){sc=Di=Ca=null}function lc(n){var i=Ta.current;Re(Ta),n._currentValue=i}function uc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Mi(n,i){Ca=n,sc=Di=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Et=!0),n.firstContext=null)}function qt(n){var i=n._currentValue;if(sc!==n)if(n={context:n,memoizedValue:i,next:null},Di===null){if(Ca===null)throw Error(r(308));Di=n,Ca.dependencies={lanes:0,firstContext:n}}else Di=Di.next=n;return i}var Ir=null;function cc(n){Ir===null?Ir=[n]:Ir.push(n)}function wm(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,cc(i)):(a.next=p.next,p.next=a),i.interleaved=a,In(n,c)}function In(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ur=!1;function dc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nn(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,In(n,a)}return p=c.interleaved,p===null?(i.next=i,cc(c)):(i.next=p.next,p.next=i),c.interleaved=i,In(n,a)}function Pa(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tu(n,a)}}function bm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?p=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?p=g=i:g=g.next=i}else p=g=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ea(n,i,a,c){var p=n.updateQueue;ur=!1;var g=p.firstBaseUpdate,w=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var E=C,I=E.next;E.next=null,w===null?g=I:w.next=I,w=E;var W=n.alternate;W!==null&&(W=W.updateQueue,C=W.lastBaseUpdate,C!==w&&(C===null?W.firstBaseUpdate=I:C.next=I,W.lastBaseUpdate=E))}if(g!==null){var Y=p.baseState;w=0,W=I=E=null,C=g;do{var H=C.lane,Q=C.eventTime;if((c&H)===H){W!==null&&(W=W.next={eventTime:Q,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ee=n,te=C;switch(H=i,Q=a,te.tag){case 1:if(ee=te.payload,typeof ee=="function"){Y=ee.call(Q,Y,H);break e}Y=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=te.payload,H=typeof ee=="function"?ee.call(Q,Y,H):ee,H==null)break e;Y=J({},Y,H);break e;case 2:ur=!0}}C.callback!==null&&C.lane!==0&&(n.flags|=64,H=p.effects,H===null?p.effects=[C]:H.push(C))}else Q={eventTime:Q,lane:H,tag:C.tag,payload:C.payload,callback:C.callback,next:null},W===null?(I=W=Q,E=Y):W=W.next=Q,w|=H;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;H=C,C=H.next,H.next=null,p.lastBaseUpdate=H,p.shared.pending=null}}while(!0);if(W===null&&(E=Y),p.baseState=E,p.firstBaseUpdate=I,p.lastBaseUpdate=W,i=p.shared.interleaved,i!==null){p=i;do w|=p.lane,p=p.next;while(p!==i)}else g===null&&(p.shared.lanes=0);Br|=w,n.lanes=w,n.memoizedState=Y}}function Sm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(r(191,p));p.call(c)}}}var Yo={},bn=sr(Yo),Ko=sr(Yo),Xo=sr(Yo);function Nr(n){if(n===Yo)throw Error(r(174));return n}function fc(n,i){switch($e(Xo,i),$e(Ko,n),$e(bn,Yo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:hu(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=hu(i,n)}Re(bn),$e(bn,i)}function Ri(){Re(bn),Re(Ko),Re(Xo)}function km(n){Nr(Xo.current);var i=Nr(bn.current),a=hu(i,n.type);i!==a&&($e(Ko,n),$e(bn,a))}function hc(n){Ko.current===n&&(Re(bn),Re(Ko))}var ze=sr(0);function ja(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pc=[];function mc(){for(var n=0;n<pc.length;n++)pc[n]._workInProgressVersionPrimary=null;pc.length=0}var Aa=R.ReactCurrentDispatcher,gc=R.ReactCurrentBatchConfig,Vr=0,Ie=null,tt=null,rt=null,$a=!1,Jo=!1,Qo=0,ib=0;function mt(){throw Error(r(321))}function yc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!dn(n[a],i[a]))return!1;return!0}function vc(n,i,a,c,p,g){if(Vr=g,Ie=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=n===null||n.memoizedState===null?lb:ub,n=a(c,p),Jo){g=0;do{if(Jo=!1,Qo=0,25<=g)throw Error(r(301));g+=1,rt=tt=null,i.updateQueue=null,Aa.current=cb,n=a(c,p)}while(Jo)}if(Aa.current=Ra,i=tt!==null&&tt.next!==null,Vr=0,rt=tt=Ie=null,$a=!1,i)throw Error(r(300));return n}function xc(){var n=Qo!==0;return Qo=0,n}function Sn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ie.memoizedState=rt=n:rt=rt.next=n,rt}function Zt(){if(tt===null){var n=Ie.alternate;n=n!==null?n.memoizedState:null}else n=tt.next;var i=rt===null?Ie.memoizedState:rt.next;if(i!==null)rt=i,tt=n;else{if(n===null)throw Error(r(310));tt=n,n={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},rt===null?Ie.memoizedState=rt=n:rt=rt.next=n}return rt}function qo(n,i){return typeof i=="function"?i(n):i}function wc(n){var i=Zt(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var c=tt,p=c.baseQueue,g=a.pending;if(g!==null){if(p!==null){var w=p.next;p.next=g.next,g.next=w}c.baseQueue=p=g,a.pending=null}if(p!==null){g=p.next,c=c.baseState;var C=w=null,E=null,I=g;do{var W=I.lane;if((Vr&W)===W)E!==null&&(E=E.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),c=I.hasEagerState?I.eagerState:n(c,I.action);else{var Y={lane:W,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};E===null?(C=E=Y,w=c):E=E.next=Y,Ie.lanes|=W,Br|=W}I=I.next}while(I!==null&&I!==g);E===null?w=c:E.next=C,dn(c,i.memoizedState)||(Et=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=E,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do g=p.lane,Ie.lanes|=g,Br|=g,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function _c(n){var i=Zt(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,g=i.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do g=n(g,w.action),w=w.next;while(w!==p);dn(g,i.memoizedState)||(Et=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Tm(){}function Cm(n,i){var a=Ie,c=Zt(),p=i(),g=!dn(c.memoizedState,p);if(g&&(c.memoizedState=p,Et=!0),c=c.queue,bc(jm.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||rt!==null&&rt.memoizedState.tag&1){if(a.flags|=2048,Zo(9,Em.bind(null,a,c,p,i),void 0,null),it===null)throw Error(r(349));(Vr&30)!==0||Pm(a,i,p)}return p}function Pm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ie.updateQueue,i===null?(i={lastEffect:null,stores:null},Ie.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Em(n,i,a,c){i.value=a,i.getSnapshot=c,Am(i)&&$m(n)}function jm(n,i,a){return a(function(){Am(i)&&$m(n)})}function Am(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!dn(n,a)}catch{return!0}}function $m(n){var i=In(n,1);i!==null&&gn(i,n,1,-1)}function Dm(n){var i=Sn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},i.queue=n,n=n.dispatch=ab.bind(null,Ie,n),[i.memoizedState,n]}function Zo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ie.updateQueue,i===null?(i={lastEffect:null,stores:null},Ie.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Mm(){return Zt().memoizedState}function Da(n,i,a,c){var p=Sn();Ie.flags|=n,p.memoizedState=Zo(1|i,a,void 0,c===void 0?null:c)}function Ma(n,i,a,c){var p=Zt();c=c===void 0?null:c;var g=void 0;if(tt!==null){var w=tt.memoizedState;if(g=w.destroy,c!==null&&yc(c,w.deps)){p.memoizedState=Zo(i,a,g,c);return}}Ie.flags|=n,p.memoizedState=Zo(1|i,a,g,c)}function Rm(n,i){return Da(8390656,8,n,i)}function bc(n,i){return Ma(2048,8,n,i)}function Lm(n,i){return Ma(4,2,n,i)}function Om(n,i){return Ma(4,4,n,i)}function Fm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function zm(n,i,a){return a=a!=null?a.concat([n]):null,Ma(4,4,Fm.bind(null,i,n),a)}function Sc(){}function Im(n,i){var a=Zt();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&yc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Nm(n,i){var a=Zt();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&yc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Vm(n,i,a){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,Et=!0),n.memoizedState=a):(dn(a,i)||(a=yp(),Ie.lanes|=a,Br|=a,n.baseState=!0),i)}function ob(n,i){var a=je;je=a!==0&&4>a?a:4,n(!0);var c=gc.transition;gc.transition={};try{n(!1),i()}finally{je=a,gc.transition=c}}function Bm(){return Zt().memoizedState}function sb(n,i,a){var c=pr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Um(n))Hm(i,a);else if(a=wm(n,i,a,c),a!==null){var p=kt();gn(a,n,c,p),Wm(a,i,c)}}function ab(n,i,a){var c=pr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Um(n))Hm(i,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,C=g(w,a);if(p.hasEagerState=!0,p.eagerState=C,dn(C,w)){var E=i.interleaved;E===null?(p.next=p,cc(i)):(p.next=E.next,E.next=p),i.interleaved=p;return}}catch{}finally{}a=wm(n,i,p,c),a!==null&&(p=kt(),gn(a,n,c,p),Wm(a,i,c))}}function Um(n){var i=n.alternate;return n===Ie||i!==null&&i===Ie}function Hm(n,i){Jo=$a=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tu(n,a)}}var Ra={readContext:qt,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},lb={readContext:qt,useCallback:function(n,i){return Sn().memoizedState=[n,i===void 0?null:i],n},useContext:qt,useEffect:Rm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Da(4194308,4,Fm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Da(4194308,4,n,i)},useInsertionEffect:function(n,i){return Da(4,2,n,i)},useMemo:function(n,i){var a=Sn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Sn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=sb.bind(null,Ie,n),[c.memoizedState,n]},useRef:function(n){var i=Sn();return n={current:n},i.memoizedState=n},useState:Dm,useDebugValue:Sc,useDeferredValue:function(n){return Sn().memoizedState=n},useTransition:function(){var n=Dm(!1),i=n[0];return n=ob.bind(null,n[1]),Sn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ie,p=Sn();if(Oe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),it===null)throw Error(r(349));(Vr&30)!==0||Pm(c,i,a)}p.memoizedState=a;var g={value:a,getSnapshot:i};return p.queue=g,Rm(jm.bind(null,c,g,n),[n]),c.flags|=2048,Zo(9,Em.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Sn(),i=it.identifierPrefix;if(Oe){var a=zn,c=Fn;a=(c&~(1<<32-cn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Qo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=ib++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ub={readContext:qt,useCallback:Im,useContext:qt,useEffect:bc,useImperativeHandle:zm,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Nm,useReducer:wc,useRef:Mm,useState:function(){return wc(qo)},useDebugValue:Sc,useDeferredValue:function(n){var i=Zt();return Vm(i,tt.memoizedState,n)},useTransition:function(){var n=wc(qo)[0],i=Zt().memoizedState;return[n,i]},useMutableSource:Tm,useSyncExternalStore:Cm,useId:Bm,unstable_isNewReconciler:!1},cb={readContext:qt,useCallback:Im,useContext:qt,useEffect:bc,useImperativeHandle:zm,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Nm,useReducer:_c,useRef:Mm,useState:function(){return _c(qo)},useDebugValue:Sc,useDeferredValue:function(n){var i=Zt();return tt===null?i.memoizedState=n:Vm(i,tt.memoizedState,n)},useTransition:function(){var n=_c(qo)[0],i=Zt().memoizedState;return[n,i]},useMutableSource:Tm,useSyncExternalStore:Cm,useId:Bm,unstable_isNewReconciler:!1};function hn(n,i){if(n&&n.defaultProps){i=J({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function kc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:J({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var La={isMounted:function(n){return(n=n._reactInternals)?Rr(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=kt(),p=pr(n),g=Nn(c,p);g.payload=i,a!=null&&(g.callback=a),i=cr(n,g,p),i!==null&&(gn(i,n,p,c),Pa(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=kt(),p=pr(n),g=Nn(c,p);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=cr(n,g,p),i!==null&&(gn(i,n,p,c),Pa(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=kt(),c=pr(n),p=Nn(a,c);p.tag=2,i!=null&&(p.callback=i),i=cr(n,p,c),i!==null&&(gn(i,n,c,a),Pa(i,n,c))}};function Gm(n,i,a,c,p,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!Io(a,c)||!Io(p,g):!0}function Ym(n,i,a){var c=!1,p=ar,g=i.contextType;return typeof g=="object"&&g!==null?g=qt(g):(p=Pt(i)?Or:pt.current,c=i.contextTypes,g=(c=c!=null)?Pi(n,p):ar),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=g),i}function Km(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&La.enqueueReplaceState(i,i.state,null)}function Tc(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},dc(n);var g=i.contextType;typeof g=="object"&&g!==null?p.context=qt(g):(g=Pt(i)?Or:pt.current,p.context=Pi(n,g)),p.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(kc(n,i,g,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&La.enqueueReplaceState(p,p.state,null),Ea(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Li(n,i){try{var a="",c=i;do a+=de(c),c=c.return;while(c);var p=a}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:p,digest:null}}function Cc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Pc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var db=typeof WeakMap=="function"?WeakMap:Map;function Xm(n,i,a){a=Nn(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Ba||(Ba=!0,Bc=c),Pc(n,i)},a}function Jm(n,i,a){a=Nn(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){Pc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Pc(n,i),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Qm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new db;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=Tb.bind(null,n,i,a),i.then(n,n))}function qm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Zm(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Nn(-1,1),i.tag=2,cr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var fb=R.ReactCurrentOwner,Et=!1;function St(n,i,a,c){i.child=n===null?xm(i,null,a,c):$i(i,n.child,a,c)}function e0(n,i,a,c,p){a=a.render;var g=i.ref;return Mi(i,p),c=vc(n,i,a,c,g,p),a=xc(),n!==null&&!Et?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Vn(n,i,p)):(Oe&&a&&tc(i),i.flags|=1,St(n,i,c,p),i.child)}function t0(n,i,a,c,p){if(n===null){var g=a.type;return typeof g=="function"&&!Xc(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,n0(n,i,g,c,p)):(n=Ka(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&p)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(w,c)&&n.ref===i.ref)return Vn(n,i,p)}return i.flags|=1,n=gr(g,c),n.ref=i.ref,n.return=i,i.child=n}function n0(n,i,a,c,p){if(n!==null){var g=n.memoizedProps;if(Io(g,c)&&n.ref===i.ref)if(Et=!1,i.pendingProps=c=g,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Et=!0);else return i.lanes=n.lanes,Vn(n,i,p)}return Ec(n,i,a,c,p)}function r0(n,i,a){var c=i.pendingProps,p=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Fi,Nt),Nt|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$e(Fi,Nt),Nt|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,$e(Fi,Nt),Nt|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,$e(Fi,Nt),Nt|=c;return St(n,i,p,a),i.child}function i0(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ec(n,i,a,c,p){var g=Pt(a)?Or:pt.current;return g=Pi(i,g),Mi(i,p),a=vc(n,i,a,c,g,p),c=xc(),n!==null&&!Et?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Vn(n,i,p)):(Oe&&c&&tc(i),i.flags|=1,St(n,i,a,p),i.child)}function o0(n,i,a,c,p){if(Pt(a)){var g=!0;xa(i)}else g=!1;if(Mi(i,p),i.stateNode===null)Fa(n,i),Ym(i,a,c),Tc(i,a,c,p),c=!0;else if(n===null){var w=i.stateNode,C=i.memoizedProps;w.props=C;var E=w.context,I=a.contextType;typeof I=="object"&&I!==null?I=qt(I):(I=Pt(a)?Or:pt.current,I=Pi(i,I));var W=a.getDerivedStateFromProps,Y=typeof W=="function"||typeof w.getSnapshotBeforeUpdate=="function";Y||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==c||E!==I)&&Km(i,w,c,I),ur=!1;var H=i.memoizedState;w.state=H,Ea(i,c,w,p),E=i.memoizedState,C!==c||H!==E||Ct.current||ur?(typeof W=="function"&&(kc(i,a,W,c),E=i.memoizedState),(C=ur||Gm(i,a,C,c,H,E,I))?(Y||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=E),w.props=c,w.state=E,w.context=I,c=C):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,_m(n,i),C=i.memoizedProps,I=i.type===i.elementType?C:hn(i.type,C),w.props=I,Y=i.pendingProps,H=w.context,E=a.contextType,typeof E=="object"&&E!==null?E=qt(E):(E=Pt(a)?Or:pt.current,E=Pi(i,E));var Q=a.getDerivedStateFromProps;(W=typeof Q=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==Y||H!==E)&&Km(i,w,c,E),ur=!1,H=i.memoizedState,w.state=H,Ea(i,c,w,p);var ee=i.memoizedState;C!==Y||H!==ee||Ct.current||ur?(typeof Q=="function"&&(kc(i,a,Q,c),ee=i.memoizedState),(I=ur||Gm(i,a,I,c,H,ee,E)||!1)?(W||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ee,E),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ee,E)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ee),w.props=c,w.state=ee,w.context=E,c=I):(typeof w.componentDidUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),c=!1)}return jc(n,i,a,c,g,p)}function jc(n,i,a,c,p,g){i0(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return p&&cm(i,a,!1),Vn(n,i,g);c=i.stateNode,fb.current=i;var C=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=$i(i,n.child,null,g),i.child=$i(i,null,C,g)):St(n,i,C,g),i.memoizedState=c.state,p&&cm(i,a,!0),i.child}function s0(n){var i=n.stateNode;i.pendingContext?lm(n,i.pendingContext,i.pendingContext!==i.context):i.context&&lm(n,i.context,!1),fc(n,i.containerInfo)}function a0(n,i,a,c,p){return Ai(),oc(p),i.flags|=256,St(n,i,a,c),i.child}var Ac={dehydrated:null,treeContext:null,retryLane:0};function $c(n){return{baseLanes:n,cachePool:null,transitions:null}}function l0(n,i,a){var c=i.pendingProps,p=ze.current,g=!1,w=(i.flags&128)!==0,C;if((C=w)||(C=n!==null&&n.memoizedState===null?!1:(p&2)!==0),C?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),$e(ze,p&1),n===null)return ic(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Xa(w,c,0,null),n=Gr(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=$c(a),i.memoizedState=Ac,n):Dc(i,w));if(p=n.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return hb(n,i,w,c,C,p,a);if(g){g=c.fallback,w=i.mode,p=n.child,C=p.sibling;var E={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=E,i.deletions=null):(c=gr(p,E),c.subtreeFlags=p.subtreeFlags&14680064),C!==null?g=gr(C,g):(g=Gr(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?$c(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=Ac,c}return g=n.child,n=g.sibling,c=gr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Dc(n,i){return i=Xa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Oa(n,i,a,c){return c!==null&&oc(c),$i(i,n.child,null,a),n=Dc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function hb(n,i,a,c,p,g,w){if(a)return i.flags&256?(i.flags&=-257,c=Cc(Error(r(422))),Oa(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,p=i.mode,c=Xa({mode:"visible",children:c.children},p,0,null),g=Gr(g,p,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&$i(i,n.child,null,w),i.child.memoizedState=$c(w),i.memoizedState=Ac,g);if((i.mode&1)===0)return Oa(n,i,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var C=c.dgst;return c=C,g=Error(r(419)),c=Cc(g,c,void 0),Oa(n,i,w,c)}if(C=(w&n.childLanes)!==0,Et||C){if(c=it,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,In(n,p),gn(c,n,p,-1))}return Kc(),c=Cc(Error(r(421))),Oa(n,i,w,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Cb.bind(null,n),p._reactRetry=i,null):(n=g.treeContext,It=or(p.nextSibling),zt=i,Oe=!0,fn=null,n!==null&&(Jt[Qt++]=Fn,Jt[Qt++]=zn,Jt[Qt++]=Fr,Fn=n.id,zn=n.overflow,Fr=i),i=Dc(i,c.children),i.flags|=4096,i)}function u0(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),uc(n.return,i,a)}function Mc(n,i,a,c,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=p)}function c0(n,i,a){var c=i.pendingProps,p=c.revealOrder,g=c.tail;if(St(n,i,c.children,a),c=ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&u0(n,a,i);else if(n.tag===19)u0(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&ja(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Mc(i,!1,p,a,g);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&ja(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Mc(i,!0,a,null,g);break;case"together":Mc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Vn(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,a=gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function pb(n,i,a){switch(i.tag){case 3:s0(i),Ai();break;case 5:km(i);break;case 1:Pt(i.type)&&xa(i);break;case 4:fc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;$e(Ta,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?($e(ze,ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?l0(n,i,a):($e(ze,ze.current&1),n=Vn(n,i,a),n!==null?n.sibling:null);$e(ze,ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return c0(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),$e(ze,ze.current),c)break;return null;case 22:case 23:return i.lanes=0,r0(n,i,a)}return Vn(n,i,a)}var d0,Rc,f0,h0;d0=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Rc=function(){},f0=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,Nr(bn.current);var g=null;switch(a){case"input":p=uu(n,p),c=uu(n,c),g=[];break;case"select":p=J({},p,{value:void 0}),c=J({},c,{value:void 0}),g=[];break;case"textarea":p=fu(n,p),c=fu(n,c),g=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ga)}pu(a,c);var w;a=null;for(I in p)if(!c.hasOwnProperty(I)&&p.hasOwnProperty(I)&&p[I]!=null)if(I==="style"){var C=p[I];for(w in C)C.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(s.hasOwnProperty(I)?g||(g=[]):(g=g||[]).push(I,null));for(I in c){var E=c[I];if(C=p!=null?p[I]:void 0,c.hasOwnProperty(I)&&E!==C&&(E!=null||C!=null))if(I==="style")if(C){for(w in C)!C.hasOwnProperty(w)||E&&E.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in E)E.hasOwnProperty(w)&&C[w]!==E[w]&&(a||(a={}),a[w]=E[w])}else a||(g||(g=[]),g.push(I,a)),a=E;else I==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,C=C?C.__html:void 0,E!=null&&C!==E&&(g=g||[]).push(I,E)):I==="children"?typeof E!="string"&&typeof E!="number"||(g=g||[]).push(I,""+E):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(s.hasOwnProperty(I)?(E!=null&&I==="onScroll"&&Me("scroll",n),g||C===E||(g=[])):(g=g||[]).push(I,E))}a&&(g=g||[]).push("style",a);var I=g;(i.updateQueue=I)&&(i.flags|=4)}},h0=function(n,i,a,c){a!==c&&(i.flags|=4)};function es(n,i){if(!Oe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function mb(n,i,a){var c=i.pendingProps;switch(nc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(i),null;case 1:return Pt(i.type)&&va(),gt(i),null;case 3:return c=i.stateNode,Ri(),Re(Ct),Re(pt),mc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Sa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fn!==null&&(Wc(fn),fn=null))),Rc(n,i),gt(i),null;case 5:hc(i);var p=Nr(Xo.current);if(a=i.type,n!==null&&i.stateNode!=null)f0(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(r(166));return gt(i),null}if(n=Nr(bn.current),Sa(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[_n]=i,c[Ho]=g,n=(i.mode&1)!==0,a){case"dialog":Me("cancel",c),Me("close",c);break;case"iframe":case"object":case"embed":Me("load",c);break;case"video":case"audio":for(p=0;p<Vo.length;p++)Me(Vo[p],c);break;case"source":Me("error",c);break;case"img":case"image":case"link":Me("error",c),Me("load",c);break;case"details":Me("toggle",c);break;case"input":Yh(c,g),Me("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Me("invalid",c);break;case"textarea":Jh(c,g),Me("invalid",c)}pu(a,g),p=null;for(var w in g)if(g.hasOwnProperty(w)){var C=g[w];w==="children"?typeof C=="string"?c.textContent!==C&&(g.suppressHydrationWarning!==!0&&ma(c.textContent,C,n),p=["children",C]):typeof C=="number"&&c.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&ma(c.textContent,C,n),p=["children",""+C]):s.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&Me("scroll",c)}switch(a){case"input":Rn(c),Xh(c,g,!0);break;case"textarea":Rn(c),qh(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ga)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Zh(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[_n]=i,n[Ho]=c,d0(n,i,!1,!1),i.stateNode=n;e:{switch(w=mu(a,c),a){case"dialog":Me("cancel",n),Me("close",n),p=c;break;case"iframe":case"object":case"embed":Me("load",n),p=c;break;case"video":case"audio":for(p=0;p<Vo.length;p++)Me(Vo[p],n);p=c;break;case"source":Me("error",n),p=c;break;case"img":case"image":case"link":Me("error",n),Me("load",n),p=c;break;case"details":Me("toggle",n),p=c;break;case"input":Yh(n,c),p=uu(n,c),Me("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=J({},c,{value:void 0}),Me("invalid",n);break;case"textarea":Jh(n,c),p=fu(n,c),Me("invalid",n);break;default:p=c}pu(a,p),C=p;for(g in C)if(C.hasOwnProperty(g)){var E=C[g];g==="style"?np(n,E):g==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&ep(n,E)):g==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&bo(n,E):typeof E=="number"&&bo(n,""+E):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?E!=null&&g==="onScroll"&&Me("scroll",n):E!=null&&D(n,g,E,w))}switch(a){case"input":Rn(n),Xh(n,c,!1);break;case"textarea":Rn(n),qh(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?mi(n,!!c.multiple,g,!1):c.defaultValue!=null&&mi(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ga)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gt(i),null;case 6:if(n&&i.stateNode!=null)h0(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(r(166));if(a=Nr(Xo.current),Nr(bn.current),Sa(i)){if(c=i.stateNode,a=i.memoizedProps,c[_n]=i,(g=c.nodeValue!==a)&&(n=zt,n!==null))switch(n.tag){case 3:ma(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ma(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[_n]=i,i.stateNode=c}return gt(i),null;case 13:if(Re(ze),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Oe&&It!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gm(),Ai(),i.flags|=98560,g=!1;else if(g=Sa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(r(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(r(317));g[_n]=i}else Ai(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gt(i),g=!1}else fn!==null&&(Wc(fn),fn=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(ze.current&1)!==0?nt===0&&(nt=3):Kc())),i.updateQueue!==null&&(i.flags|=4),gt(i),null);case 4:return Ri(),Rc(n,i),n===null&&Bo(i.stateNode.containerInfo),gt(i),null;case 10:return lc(i.type._context),gt(i),null;case 17:return Pt(i.type)&&va(),gt(i),null;case 19:if(Re(ze),g=i.memoizedState,g===null)return gt(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)es(g,!1);else{if(nt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=ja(n),w!==null){for(i.flags|=128,es(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(ze,ze.current&1|2),i.child}n=n.sibling}g.tail!==null&&Ye()>zi&&(i.flags|=128,c=!0,es(g,!1),i.lanes=4194304)}else{if(!c)if(n=ja(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),es(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Oe)return gt(i),null}else 2*Ye()-g.renderingStartTime>zi&&a!==1073741824&&(i.flags|=128,c=!0,es(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ye(),i.sibling=null,a=ze.current,$e(ze,c?a&1|2:a&1),i):(gt(i),null);case 22:case 23:return Yc(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Nt&1073741824)!==0&&(gt(i),i.subtreeFlags&6&&(i.flags|=8192)):gt(i),null;case 24:return null;case 25:return null}throw Error(r(156,i.tag))}function gb(n,i){switch(nc(i),i.tag){case 1:return Pt(i.type)&&va(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ri(),Re(Ct),Re(pt),mc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return hc(i),null;case 13:if(Re(ze),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Ai()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Re(ze),null;case 4:return Ri(),null;case 10:return lc(i.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var za=!1,yt=!1,yb=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Oi(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ue(n,i,c)}else a.current=null}function Lc(n,i,a){try{a()}catch(c){Ue(n,i,c)}}var p0=!1;function vb(n,i){if(Yu=ia,n=Gp(),Iu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,C=-1,E=-1,I=0,W=0,Y=n,H=null;t:for(;;){for(var Q;Y!==a||p!==0&&Y.nodeType!==3||(C=w+p),Y!==g||c!==0&&Y.nodeType!==3||(E=w+c),Y.nodeType===3&&(w+=Y.nodeValue.length),(Q=Y.firstChild)!==null;)H=Y,Y=Q;for(;;){if(Y===n)break t;if(H===a&&++I===p&&(C=w),H===g&&++W===c&&(E=w),(Q=Y.nextSibling)!==null)break;Y=H,H=Y.parentNode}Y=Q}a=C===-1||E===-1?null:{start:C,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ku={focusedElem:n,selectionRange:a},ia=!1,Z=i;Z!==null;)if(i=Z,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Z=n;else for(;Z!==null;){i=Z;try{var ee=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var te=ee.memoizedProps,Ke=ee.memoizedState,L=i.stateNode,$=L.getSnapshotBeforeUpdate(i.elementType===i.type?te:hn(i.type,te),Ke);L.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var O=i.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(K){Ue(i,i.return,K)}if(n=i.sibling,n!==null){n.return=i.return,Z=n;break}Z=i.return}return ee=p0,p0=!1,ee}function ts(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var g=p.destroy;p.destroy=void 0,g!==void 0&&Lc(i,a,g)}p=p.next}while(p!==c)}}function Ia(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Oc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function m0(n){var i=n.alternate;i!==null&&(n.alternate=null,m0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_n],delete i[Ho],delete i[qu],delete i[eb],delete i[tb])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function g0(n){return n.tag===5||n.tag===3||n.tag===4}function y0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||g0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ga));else if(c!==4&&(n=n.child,n!==null))for(Fc(n,i,a),n=n.sibling;n!==null;)Fc(n,i,a),n=n.sibling}function zc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(zc(n,i,a),n=n.sibling;n!==null;)zc(n,i,a),n=n.sibling}var ct=null,pn=!1;function dr(n,i,a){for(a=a.child;a!==null;)v0(n,i,a),a=a.sibling}function v0(n,i,a){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(qs,a)}catch{}switch(a.tag){case 5:yt||Oi(a,i);case 6:var c=ct,p=pn;ct=null,dr(n,i,a),ct=c,pn=p,ct!==null&&(pn?(n=ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ct.removeChild(a.stateNode));break;case 18:ct!==null&&(pn?(n=ct,a=a.stateNode,n.nodeType===8?Qu(n.parentNode,a):n.nodeType===1&&Qu(n,a),Mo(n)):Qu(ct,a.stateNode));break;case 4:c=ct,p=pn,ct=a.stateNode.containerInfo,pn=!0,dr(n,i,a),ct=c,pn=p;break;case 0:case 11:case 14:case 15:if(!yt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var g=p,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Lc(a,i,w),p=p.next}while(p!==c)}dr(n,i,a);break;case 1:if(!yt&&(Oi(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(C){Ue(a,i,C)}dr(n,i,a);break;case 21:dr(n,i,a);break;case 22:a.mode&1?(yt=(c=yt)||a.memoizedState!==null,dr(n,i,a),yt=c):dr(n,i,a);break;default:dr(n,i,a)}}function x0(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new yb),i.forEach(function(c){var p=Pb.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function mn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var g=n,w=i,C=w;e:for(;C!==null;){switch(C.tag){case 5:ct=C.stateNode,pn=!1;break e;case 3:ct=C.stateNode.containerInfo,pn=!0;break e;case 4:ct=C.stateNode.containerInfo,pn=!0;break e}C=C.return}if(ct===null)throw Error(r(160));v0(g,w,p),ct=null,pn=!1;var E=p.alternate;E!==null&&(E.return=null),p.return=null}catch(I){Ue(p,i,I)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)w0(i,n),i=i.sibling}function w0(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mn(i,n),kn(n),c&4){try{ts(3,n,n.return),Ia(3,n)}catch(te){Ue(n,n.return,te)}try{ts(5,n,n.return)}catch(te){Ue(n,n.return,te)}}break;case 1:mn(i,n),kn(n),c&512&&a!==null&&Oi(a,a.return);break;case 5:if(mn(i,n),kn(n),c&512&&a!==null&&Oi(a,a.return),n.flags&32){var p=n.stateNode;try{bo(p,"")}catch(te){Ue(n,n.return,te)}}if(c&4&&(p=n.stateNode,p!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,C=n.type,E=n.updateQueue;if(n.updateQueue=null,E!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&Kh(p,g),mu(C,w);var I=mu(C,g);for(w=0;w<E.length;w+=2){var W=E[w],Y=E[w+1];W==="style"?np(p,Y):W==="dangerouslySetInnerHTML"?ep(p,Y):W==="children"?bo(p,Y):D(p,W,Y,I)}switch(C){case"input":cu(p,g);break;case"textarea":Qh(p,g);break;case"select":var H=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var Q=g.value;Q!=null?mi(p,!!g.multiple,Q,!1):H!==!!g.multiple&&(g.defaultValue!=null?mi(p,!!g.multiple,g.defaultValue,!0):mi(p,!!g.multiple,g.multiple?[]:"",!1))}p[Ho]=g}catch(te){Ue(n,n.return,te)}}break;case 6:if(mn(i,n),kn(n),c&4){if(n.stateNode===null)throw Error(r(162));p=n.stateNode,g=n.memoizedProps;try{p.nodeValue=g}catch(te){Ue(n,n.return,te)}}break;case 3:if(mn(i,n),kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(i.containerInfo)}catch(te){Ue(n,n.return,te)}break;case 4:mn(i,n),kn(n);break;case 13:mn(i,n),kn(n),p=n.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(Vc=Ye())),c&4&&x0(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(yt=(I=yt)||W,mn(i,n),yt=I):mn(i,n),kn(n),c&8192){if(I=n.memoizedState!==null,(n.stateNode.isHidden=I)&&!W&&(n.mode&1)!==0)for(Z=n,W=n.child;W!==null;){for(Y=Z=W;Z!==null;){switch(H=Z,Q=H.child,H.tag){case 0:case 11:case 14:case 15:ts(4,H,H.return);break;case 1:Oi(H,H.return);var ee=H.stateNode;if(typeof ee.componentWillUnmount=="function"){c=H,a=H.return;try{i=c,ee.props=i.memoizedProps,ee.state=i.memoizedState,ee.componentWillUnmount()}catch(te){Ue(c,a,te)}}break;case 5:Oi(H,H.return);break;case 22:if(H.memoizedState!==null){S0(Y);continue}}Q!==null?(Q.return=H,Z=Q):S0(Y)}W=W.sibling}e:for(W=null,Y=n;;){if(Y.tag===5){if(W===null){W=Y;try{p=Y.stateNode,I?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=Y.stateNode,E=Y.memoizedProps.style,w=E!=null&&E.hasOwnProperty("display")?E.display:null,C.style.display=tp("display",w))}catch(te){Ue(n,n.return,te)}}}else if(Y.tag===6){if(W===null)try{Y.stateNode.nodeValue=I?"":Y.memoizedProps}catch(te){Ue(n,n.return,te)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;W===Y&&(W=null),Y=Y.return}W===Y&&(W=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:mn(i,n),kn(n),c&4&&x0(n);break;case 21:break;default:mn(i,n),kn(n)}}function kn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(g0(a)){var c=a;break e}a=a.return}throw Error(r(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(bo(p,""),c.flags&=-33);var g=y0(n);zc(n,g,p);break;case 3:case 4:var w=c.stateNode.containerInfo,C=y0(n);Fc(n,C,w);break;default:throw Error(r(161))}}catch(E){Ue(n,n.return,E)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function xb(n,i,a){Z=n,_0(n)}function _0(n,i,a){for(var c=(n.mode&1)!==0;Z!==null;){var p=Z,g=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||za;if(!w){var C=p.alternate,E=C!==null&&C.memoizedState!==null||yt;C=za;var I=yt;if(za=w,(yt=E)&&!I)for(Z=p;Z!==null;)w=Z,E=w.child,w.tag===22&&w.memoizedState!==null?k0(p):E!==null?(E.return=w,Z=E):k0(p);for(;g!==null;)Z=g,_0(g),g=g.sibling;Z=p,za=C,yt=I}b0(n)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,Z=g):b0(n)}}function b0(n){for(;Z!==null;){var i=Z;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yt||Ia(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yt)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:hn(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Sm(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sm(i,w,a)}break;case 5:var C=i.stateNode;if(a===null&&i.flags&4){a=C;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var I=i.alternate;if(I!==null){var W=I.memoizedState;if(W!==null){var Y=W.dehydrated;Y!==null&&Mo(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}yt||i.flags&512&&Oc(i)}catch(H){Ue(i,i.return,H)}}if(i===n){Z=null;break}if(a=i.sibling,a!==null){a.return=i.return,Z=a;break}Z=i.return}}function S0(n){for(;Z!==null;){var i=Z;if(i===n){Z=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Z=a;break}Z=i.return}}function k0(n){for(;Z!==null;){var i=Z;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ia(4,i)}catch(E){Ue(i,a,E)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(E){Ue(i,p,E)}}var g=i.return;try{Oc(i)}catch(E){Ue(i,g,E)}break;case 5:var w=i.return;try{Oc(i)}catch(E){Ue(i,w,E)}}}catch(E){Ue(i,i.return,E)}if(i===n){Z=null;break}var C=i.sibling;if(C!==null){C.return=i.return,Z=C;break}Z=i.return}}var wb=Math.ceil,Na=R.ReactCurrentDispatcher,Ic=R.ReactCurrentOwner,en=R.ReactCurrentBatchConfig,be=0,it=null,Qe=null,dt=0,Nt=0,Fi=sr(0),nt=0,ns=null,Br=0,Va=0,Nc=0,rs=null,jt=null,Vc=0,zi=1/0,Bn=null,Ba=!1,Bc=null,fr=null,Ua=!1,hr=null,Ha=0,is=0,Uc=null,Wa=-1,Ga=0;function kt(){return(be&6)!==0?Ye():Wa!==-1?Wa:Wa=Ye()}function pr(n){return(n.mode&1)===0?1:(be&2)!==0&&dt!==0?dt&-dt:rb.transition!==null?(Ga===0&&(Ga=yp()),Ga):(n=je,n!==0||(n=window.event,n=n===void 0?16:Cp(n.type)),n)}function gn(n,i,a,c){if(50<is)throw is=0,Uc=null,Error(r(185));Eo(n,a,c),((be&2)===0||n!==it)&&(n===it&&((be&2)===0&&(Va|=a),nt===4&&mr(n,dt)),At(n,c),a===1&&be===0&&(i.mode&1)===0&&(zi=Ye()+500,wa&&lr()))}function At(n,i){var a=n.callbackNode;r_(n,i);var c=ta(n,n===it?dt:0);if(c===0)a!==null&&pp(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&pp(a),i===1)n.tag===0?nb(C0.bind(null,n)):dm(C0.bind(null,n)),q_(function(){(be&6)===0&&lr()}),a=null;else{switch(vp(c)){case 1:a=bu;break;case 4:a=mp;break;case 16:a=Qs;break;case 536870912:a=gp;break;default:a=Qs}a=R0(a,T0.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function T0(n,i){if(Wa=-1,Ga=0,(be&6)!==0)throw Error(r(327));var a=n.callbackNode;if(Ii()&&n.callbackNode!==a)return null;var c=ta(n,n===it?dt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ya(n,c);else{i=c;var p=be;be|=2;var g=E0();(it!==n||dt!==i)&&(Bn=null,zi=Ye()+500,Hr(n,i));do try{Sb();break}catch(C){P0(n,C)}while(!0);ac(),Na.current=g,be=p,Qe!==null?i=0:(it=null,dt=0,i=nt)}if(i!==0){if(i===2&&(p=Su(n),p!==0&&(c=p,i=Hc(n,p))),i===1)throw a=ns,Hr(n,0),mr(n,c),At(n,Ye()),a;if(i===6)mr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!_b(p)&&(i=Ya(n,c),i===2&&(g=Su(n),g!==0&&(c=g,i=Hc(n,g))),i===1))throw a=ns,Hr(n,0),mr(n,c),At(n,Ye()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(r(345));case 2:Wr(n,jt,Bn);break;case 3:if(mr(n,c),(c&130023424)===c&&(i=Vc+500-Ye(),10<i)){if(ta(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){kt(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Ju(Wr.bind(null,n,jt,Bn),i);break}Wr(n,jt,Bn);break;case 4:if(mr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var w=31-cn(c);g=1<<w,w=i[w],w>p&&(p=w),c&=~g}if(c=p,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*wb(c/1960))-c,10<c){n.timeoutHandle=Ju(Wr.bind(null,n,jt,Bn),c);break}Wr(n,jt,Bn);break;case 5:Wr(n,jt,Bn);break;default:throw Error(r(329))}}}return At(n,Ye()),n.callbackNode===a?T0.bind(null,n):null}function Hc(n,i){var a=rs;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=Ya(n,i),n!==2&&(i=jt,jt=a,i!==null&&Wc(i)),n}function Wc(n){jt===null?jt=n:jt.push.apply(jt,n)}function _b(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],g=p.getSnapshot;p=p.value;try{if(!dn(g(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~Nc,i&=~Va,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-cn(i),c=1<<a;n[a]=-1,i&=~c}}function C0(n){if((be&6)!==0)throw Error(r(327));Ii();var i=ta(n,0);if((i&1)===0)return At(n,Ye()),null;var a=Ya(n,i);if(n.tag!==0&&a===2){var c=Su(n);c!==0&&(i=c,a=Hc(n,c))}if(a===1)throw a=ns,Hr(n,0),mr(n,i),At(n,Ye()),a;if(a===6)throw Error(r(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Wr(n,jt,Bn),At(n,Ye()),null}function Gc(n,i){var a=be;be|=1;try{return n(i)}finally{be=a,be===0&&(zi=Ye()+500,wa&&lr())}}function Ur(n){hr!==null&&hr.tag===0&&(be&6)===0&&Ii();var i=be;be|=1;var a=en.transition,c=je;try{if(en.transition=null,je=1,n)return n()}finally{je=c,en.transition=a,be=i,(be&6)===0&&lr()}}function Yc(){Nt=Fi.current,Re(Fi)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Q_(a)),Qe!==null)for(a=Qe.return;a!==null;){var c=a;switch(nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&va();break;case 3:Ri(),Re(Ct),Re(pt),mc();break;case 5:hc(c);break;case 4:Ri();break;case 13:Re(ze);break;case 19:Re(ze);break;case 10:lc(c.type._context);break;case 22:case 23:Yc()}a=a.return}if(it=n,Qe=n=gr(n.current,null),dt=Nt=i,nt=0,ns=null,Nc=Va=Br=0,jt=rs=null,Ir!==null){for(i=0;i<Ir.length;i++)if(a=Ir[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=p,c.next=w}a.pending=c}Ir=null}return n}function P0(n,i){do{var a=Qe;try{if(ac(),Aa.current=Ra,$a){for(var c=Ie.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}$a=!1}if(Vr=0,rt=tt=Ie=null,Jo=!1,Qo=0,Ic.current=null,a===null||a.return===null){nt=1,ns=i,Qe=null;break}e:{var g=n,w=a.return,C=a,E=i;if(i=dt,C.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var I=E,W=C,Y=W.tag;if((W.mode&1)===0&&(Y===0||Y===11||Y===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var Q=qm(w);if(Q!==null){Q.flags&=-257,Zm(Q,w,C,g,i),Q.mode&1&&Qm(g,I,i),i=Q,E=I;var ee=i.updateQueue;if(ee===null){var te=new Set;te.add(E),i.updateQueue=te}else ee.add(E);break e}else{if((i&1)===0){Qm(g,I,i),Kc();break e}E=Error(r(426))}}else if(Oe&&C.mode&1){var Ke=qm(w);if(Ke!==null){(Ke.flags&65536)===0&&(Ke.flags|=256),Zm(Ke,w,C,g,i),oc(Li(E,C));break e}}g=E=Li(E,C),nt!==4&&(nt=2),rs===null?rs=[g]:rs.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var L=Xm(g,E,i);bm(g,L);break e;case 1:C=E;var $=g.type,O=g.stateNode;if((g.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(fr===null||!fr.has(O)))){g.flags|=65536,i&=-i,g.lanes|=i;var K=Jm(g,C,i);bm(g,K);break e}}g=g.return}while(g!==null)}A0(a)}catch(re){i=re,Qe===a&&a!==null&&(Qe=a=a.return);continue}break}while(!0)}function E0(){var n=Na.current;return Na.current=Ra,n===null?Ra:n}function Kc(){(nt===0||nt===3||nt===2)&&(nt=4),it===null||(Br&268435455)===0&&(Va&268435455)===0||mr(it,dt)}function Ya(n,i){var a=be;be|=2;var c=E0();(it!==n||dt!==i)&&(Bn=null,Hr(n,i));do try{bb();break}catch(p){P0(n,p)}while(!0);if(ac(),be=a,Na.current=c,Qe!==null)throw Error(r(261));return it=null,dt=0,nt}function bb(){for(;Qe!==null;)j0(Qe)}function Sb(){for(;Qe!==null&&!Kw();)j0(Qe)}function j0(n){var i=M0(n.alternate,n,Nt);n.memoizedProps=n.pendingProps,i===null?A0(n):Qe=i,Ic.current=null}function A0(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=mb(a,i,Nt),a!==null){Qe=a;return}}else{if(a=gb(a,i),a!==null){a.flags&=32767,Qe=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nt=6,Qe=null;return}}if(i=i.sibling,i!==null){Qe=i;return}Qe=i=n}while(i!==null);nt===0&&(nt=5)}function Wr(n,i,a){var c=je,p=en.transition;try{en.transition=null,je=1,kb(n,i,a,c)}finally{en.transition=p,je=c}return null}function kb(n,i,a,c){do Ii();while(hr!==null);if((be&6)!==0)throw Error(r(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(i_(n,g),n===it&&(Qe=it=null,dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ua||(Ua=!0,R0(Qs,function(){return Ii(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=en.transition,en.transition=null;var w=je;je=1;var C=be;be|=4,Ic.current=null,vb(n,a),w0(a,n),H_(Ku),ia=!!Yu,Ku=Yu=null,n.current=a,xb(a),Xw(),be=C,je=w,en.transition=g}else n.current=a;if(Ua&&(Ua=!1,hr=n,Ha=p),g=n.pendingLanes,g===0&&(fr=null),qw(a.stateNode),At(n,Ye()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(Ba)throw Ba=!1,n=Bc,Bc=null,n;return(Ha&1)!==0&&n.tag!==0&&Ii(),g=n.pendingLanes,(g&1)!==0?n===Uc?is++:(is=0,Uc=n):is=0,lr(),null}function Ii(){if(hr!==null){var n=vp(Ha),i=en.transition,a=je;try{if(en.transition=null,je=16>n?16:n,hr===null)var c=!1;else{if(n=hr,hr=null,Ha=0,(be&6)!==0)throw Error(r(331));var p=be;for(be|=4,Z=n.current;Z!==null;){var g=Z,w=g.child;if((Z.flags&16)!==0){var C=g.deletions;if(C!==null){for(var E=0;E<C.length;E++){var I=C[E];for(Z=I;Z!==null;){var W=Z;switch(W.tag){case 0:case 11:case 15:ts(8,W,g)}var Y=W.child;if(Y!==null)Y.return=W,Z=Y;else for(;Z!==null;){W=Z;var H=W.sibling,Q=W.return;if(m0(W),W===I){Z=null;break}if(H!==null){H.return=Q,Z=H;break}Z=Q}}}var ee=g.alternate;if(ee!==null){var te=ee.child;if(te!==null){ee.child=null;do{var Ke=te.sibling;te.sibling=null,te=Ke}while(te!==null)}}Z=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Z=w;else e:for(;Z!==null;){if(g=Z,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ts(9,g,g.return)}var L=g.sibling;if(L!==null){L.return=g.return,Z=L;break e}Z=g.return}}var $=n.current;for(Z=$;Z!==null;){w=Z;var O=w.child;if((w.subtreeFlags&2064)!==0&&O!==null)O.return=w,Z=O;else e:for(w=$;Z!==null;){if(C=Z,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Ia(9,C)}}catch(re){Ue(C,C.return,re)}if(C===w){Z=null;break e}var K=C.sibling;if(K!==null){K.return=C.return,Z=K;break e}Z=C.return}}if(be=p,lr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(qs,n)}catch{}c=!0}return c}finally{je=a,en.transition=i}}return!1}function $0(n,i,a){i=Li(a,i),i=Xm(n,i,1),n=cr(n,i,1),i=kt(),n!==null&&(Eo(n,1,i),At(n,i))}function Ue(n,i,a){if(n.tag===3)$0(n,n,a);else for(;i!==null;){if(i.tag===3){$0(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){n=Li(a,n),n=Jm(i,n,1),i=cr(i,n,1),n=kt(),i!==null&&(Eo(i,1,n),At(i,n));break}}i=i.return}}function Tb(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=kt(),n.pingedLanes|=n.suspendedLanes&a,it===n&&(dt&a)===a&&(nt===4||nt===3&&(dt&130023424)===dt&&500>Ye()-Vc?Hr(n,0):Nc|=a),At(n,i)}function D0(n,i){i===0&&((n.mode&1)===0?i=1:(i=ea,ea<<=1,(ea&130023424)===0&&(ea=4194304)));var a=kt();n=In(n,i),n!==null&&(Eo(n,i,a),At(n,a))}function Cb(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),D0(n,a)}function Pb(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(r(314))}c!==null&&c.delete(i),D0(n,a)}var M0;M0=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ct.current)Et=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Et=!1,pb(n,i,a);Et=(n.flags&131072)!==0}else Et=!1,Oe&&(i.flags&1048576)!==0&&fm(i,ba,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Fa(n,i),n=i.pendingProps;var p=Pi(i,pt.current);Mi(i,a),p=vc(null,i,c,n,p,a);var g=xc();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pt(c)?(g=!0,xa(i)):g=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,dc(i),p.updater=La,i.stateNode=p,p._reactInternals=i,Tc(i,c,n,a),i=jc(null,i,c,!0,g,a)):(i.tag=0,Oe&&g&&tc(i),St(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Fa(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=jb(c),n=hn(c,n),p){case 0:i=Ec(null,i,c,n,a);break e;case 1:i=o0(null,i,c,n,a);break e;case 11:i=e0(null,i,c,n,a);break e;case 14:i=t0(null,i,c,hn(c.type,n),a);break e}throw Error(r(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:hn(c,p),Ec(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:hn(c,p),o0(n,i,c,p,a);case 3:e:{if(s0(i),n===null)throw Error(r(387));c=i.pendingProps,g=i.memoizedState,p=g.element,_m(n,i),Ea(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){p=Li(Error(r(423)),i),i=a0(n,i,c,a,p);break e}else if(c!==p){p=Li(Error(r(424)),i),i=a0(n,i,c,a,p);break e}else for(It=or(i.stateNode.containerInfo.firstChild),zt=i,Oe=!0,fn=null,a=xm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ai(),c===p){i=Vn(n,i,a);break e}St(n,i,c,a)}i=i.child}return i;case 5:return km(i),n===null&&ic(i),c=i.type,p=i.pendingProps,g=n!==null?n.memoizedProps:null,w=p.children,Xu(c,p)?w=null:g!==null&&Xu(c,g)&&(i.flags|=32),i0(n,i),St(n,i,w,a),i.child;case 6:return n===null&&ic(i),null;case 13:return l0(n,i,a);case 4:return fc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=$i(i,null,c,a):St(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:hn(c,p),e0(n,i,c,p,a);case 7:return St(n,i,i.pendingProps,a),i.child;case 8:return St(n,i,i.pendingProps.children,a),i.child;case 12:return St(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,g=i.memoizedProps,w=p.value,$e(Ta,c._currentValue),c._currentValue=w,g!==null)if(dn(g.value,w)){if(g.children===p.children&&!Ct.current){i=Vn(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var C=g.dependencies;if(C!==null){w=g.child;for(var E=C.firstContext;E!==null;){if(E.context===c){if(g.tag===1){E=Nn(-1,a&-a),E.tag=2;var I=g.updateQueue;if(I!==null){I=I.shared;var W=I.pending;W===null?E.next=E:(E.next=W.next,W.next=E),I.pending=E}}g.lanes|=a,E=g.alternate,E!==null&&(E.lanes|=a),uc(g.return,a,i),C.lanes|=a;break}E=E.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(r(341));w.lanes|=a,C=w.alternate,C!==null&&(C.lanes|=a),uc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}St(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,Mi(i,a),p=qt(p),c=c(p),i.flags|=1,St(n,i,c,a),i.child;case 14:return c=i.type,p=hn(c,i.pendingProps),p=hn(c.type,p),t0(n,i,c,p,a);case 15:return n0(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:hn(c,p),Fa(n,i),i.tag=1,Pt(c)?(n=!0,xa(i)):n=!1,Mi(i,a),Ym(i,c,p),Tc(i,c,p,a),jc(null,i,c,!0,n,a);case 19:return c0(n,i,a);case 22:return r0(n,i,a)}throw Error(r(156,i.tag))};function R0(n,i){return hp(n,i)}function Eb(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(n,i,a,c){return new Eb(n,i,a,c)}function Xc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jb(n){if(typeof n=="function")return Xc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===he)return 11;if(n===ke)return 14}return 2}function gr(n,i){var a=n.alternate;return a===null?(a=tn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ka(n,i,a,c,p,g){var w=2;if(c=n,typeof n=="function")Xc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case z:return Gr(a.children,p,g,i);case N:w=8,p|=8;break;case U:return n=tn(12,a,i,p|2),n.elementType=U,n.lanes=g,n;case fe:return n=tn(13,a,i,p),n.elementType=fe,n.lanes=g,n;case _e:return n=tn(19,a,i,p),n.elementType=_e,n.lanes=g,n;case ne:return Xa(a,p,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ie:w=10;break e;case pe:w=9;break e;case he:w=11;break e;case ke:w=14;break e;case ge:w=16,c=null;break e}throw Error(r(130,n==null?n:typeof n,""))}return i=tn(w,a,i,p),i.elementType=n,i.type=c,i.lanes=g,i}function Gr(n,i,a,c){return n=tn(7,n,c,i),n.lanes=a,n}function Xa(n,i,a,c){return n=tn(22,n,c,i),n.elementType=ne,n.lanes=a,n.stateNode={isHidden:!1},n}function Jc(n,i,a){return n=tn(6,n,null,i),n.lanes=a,n}function Qc(n,i,a){return i=tn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Ab(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function qc(n,i,a,c,p,g,w,C,E){return n=new Ab(n,i,a,C,E),i===1?(i=1,g===!0&&(i|=8)):i=0,g=tn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},dc(g),n}function $b(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function L0(n){if(!n)return ar;n=n._reactInternals;e:{if(Rr(n)!==n||n.tag!==1)throw Error(r(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(r(171))}if(n.tag===1){var a=n.type;if(Pt(a))return um(n,a,i)}return i}function O0(n,i,a,c,p,g,w,C,E){return n=qc(a,c,!0,n,p,g,w,C,E),n.context=L0(null),a=n.current,c=kt(),p=pr(a),g=Nn(c,p),g.callback=i??null,cr(a,g,p),n.current.lanes=p,Eo(n,p,c),At(n,c),n}function Ja(n,i,a,c){var p=i.current,g=kt(),w=pr(p);return a=L0(a),i.context===null?i.context=a:i.pendingContext=a,i=Nn(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=cr(p,i,w),n!==null&&(gn(n,p,w,g),Pa(n,p,w)),w}function Qa(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function F0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Zc(n,i){F0(n,i),(n=n.alternate)&&F0(n,i)}function Db(){return null}var z0=typeof reportError=="function"?reportError:function(n){console.error(n)};function ed(n){this._internalRoot=n}qa.prototype.render=ed.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));Ja(n,i,null,null)},qa.prototype.unmount=ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ur(function(){Ja(null,n,null,null)}),i[Ln]=null}};function qa(n){this._internalRoot=n}qa.prototype.unstable_scheduleHydration=function(n){if(n){var i=_p();n={blockedOn:null,target:n,priority:i};for(var a=0;a<nr.length&&i!==0&&i<nr[a].priority;a++);nr.splice(a,0,n),a===0&&kp(n)}};function td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Za(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function I0(){}function Mb(n,i,a,c,p){if(p){if(typeof c=="function"){var g=c;c=function(){var I=Qa(w);g.call(I)}}var w=O0(i,c,n,0,null,!1,!1,"",I0);return n._reactRootContainer=w,n[Ln]=w.current,Bo(n.nodeType===8?n.parentNode:n),Ur(),w}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var C=c;c=function(){var I=Qa(E);C.call(I)}}var E=qc(n,0,!1,null,null,!1,!1,"",I0);return n._reactRootContainer=E,n[Ln]=E.current,Bo(n.nodeType===8?n.parentNode:n),Ur(function(){Ja(i,E,a,c)}),E}function el(n,i,a,c,p){var g=a._reactRootContainer;if(g){var w=g;if(typeof p=="function"){var C=p;p=function(){var E=Qa(w);C.call(E)}}Ja(i,w,n,p)}else w=Mb(a,i,n,p,c);return Qa(w)}xp=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Po(i.pendingLanes);a!==0&&(Tu(i,a|1),At(i,Ye()),(be&6)===0&&(zi=Ye()+500,lr()))}break;case 13:Ur(function(){var c=In(n,1);if(c!==null){var p=kt();gn(c,n,1,p)}}),Zc(n,1)}},Cu=function(n){if(n.tag===13){var i=In(n,134217728);if(i!==null){var a=kt();gn(i,n,134217728,a)}Zc(n,134217728)}},wp=function(n){if(n.tag===13){var i=pr(n),a=In(n,i);if(a!==null){var c=kt();gn(a,n,i,c)}Zc(n,i)}},_p=function(){return je},bp=function(n,i){var a=je;try{return je=n,i()}finally{je=a}},vu=function(n,i,a){switch(i){case"input":if(cu(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=ya(c);if(!p)throw Error(r(90));un(c),cu(c,p)}}}break;case"textarea":Qh(n,a);break;case"select":i=a.value,i!=null&&mi(n,!!a.multiple,i,!1)}},sp=Gc,ap=Ur;var Rb={usingClientEntryPoint:!1,Events:[Wo,Ti,ya,ip,op,Gc]},os={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lb={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dp(n),n===null?null:n.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||Db,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{qs=tl.inject(Lb),wn=tl}catch{}}return $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rb,$t.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(i))throw Error(r(200));return $b(n,i,null,a)},$t.createRoot=function(n,i){if(!td(n))throw Error(r(299));var a=!1,c="",p=z0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=qc(n,1,!1,null,null,a,!1,c,p),n[Ln]=i.current,Bo(n.nodeType===8?n.parentNode:n),new ed(i)},$t.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=dp(i),n=n===null?null:n.stateNode,n},$t.flushSync=function(n){return Ur(n)},$t.hydrate=function(n,i,a){if(!Za(i))throw Error(r(200));return el(null,n,i,!0,a)},$t.hydrateRoot=function(n,i,a){if(!td(n))throw Error(r(405));var c=a!=null&&a.hydratedSources||null,p=!1,g="",w=z0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=O0(i,null,n,1,a??null,p,!1,g,w),n[Ln]=i.current,Bo(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new qa(i)},$t.render=function(n,i,a){if(!Za(i))throw Error(r(200));return el(null,n,i,!1,a)},$t.unmountComponentAtNode=function(n){if(!Za(n))throw Error(r(40));return n._reactRootContainer?(Ur(function(){el(null,null,n,!1,function(){n._reactRootContainer=null,n[Ln]=null})}),!0):!1},$t.unstable_batchedUpdates=Gc,$t.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Za(a))throw Error(r(200));if(n==null||n._reactInternals===void 0)throw Error(r(38));return el(n,i,a,!1,c)},$t.version="18.3.1-next-f1338f8080-20240426",$t}var Y0;function Wb(){if(Y0)return id.exports;Y0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),id.exports=Hb(),id.exports}var K0;function Gb(){if(K0)return nl;K0=1;var e=Wb();return nl.createRoot=e.createRoot,nl.hydrateRoot=e.hydrateRoot,nl}var Yb=Gb(),at=function(){return at=Object.assign||function(t){for(var r,o=1,s=arguments.length;o<s;o++){r=arguments[o];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},at.apply(this,arguments)};function Ps(e,t,r){if(r||arguments.length===2)for(var o=0,s=t.length,l;o<s;o++)(l||!(o in t))&&(l||(l=Array.prototype.slice.call(t,0,o)),l[o]=t[o]);return e.concat(l||Array.prototype.slice.call(t))}var ad,X0;function Kb(){return X0||(X0=1,ad=function(t,r,o,s){var l=o?o.call(s,t,r):void 0;if(l!==void 0)return!!l;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var u=Object.keys(t),d=Object.keys(r);if(u.length!==d.length)return!1;for(var f=Object.prototype.hasOwnProperty.bind(r),h=0;h<u.length;h++){var m=u[h];if(!f(m))return!1;var y=t[m],x=r[m];if(l=o?o.call(s,y,x,m):void 0,l===!1||l===void 0&&y!==x)return!1}return!0}),ad}var Xb=Kb();const Jb=Hl(Xb);var Le="-ms-",vs="-moz-",Ee="-webkit-",yv="comm",Wl="rule",Uf="decl",Qb="@import",vv="@keyframes",qb="@layer",xv=Math.abs,Hf=String.fromCharCode,Yd=Object.assign;function Zb(e,t){return st(e,0)^45?(((t<<2^st(e,0))<<2^st(e,1))<<2^st(e,2))<<2^st(e,3):0}function wv(e){return e.trim()}function Hn(e,t){return(e=t.exec(e))?e[0]:e}function me(e,t,r){return e.replace(t,r)}function hl(e,t,r){return e.indexOf(t,r)}function st(e,t){return e.charCodeAt(t)|0}function no(e,t,r){return e.slice(t,r)}function Cn(e){return e.length}function _v(e){return e.length}function fs(e,t){return t.push(e),e}function eS(e,t){return e.map(t).join("")}function J0(e,t){return e.filter(function(r){return!Hn(r,t)})}var Gl=1,ro=1,bv=0,ln=0,et=0,yo="";function Yl(e,t,r,o,s,l,u,d){return{value:e,root:t,parent:r,type:o,props:s,children:l,line:Gl,column:ro,length:u,return:"",siblings:d}}function _r(e,t){return Yd(Yl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ni(e){for(;e.root;)e=_r(e.root,{children:[e]});fs(e,e.siblings)}function tS(){return et}function nS(){return et=ln>0?st(yo,--ln):0,ro--,et===10&&(ro=1,Gl--),et}function xn(){return et=ln<bv?st(yo,ln++):0,ro++,et===10&&(ro=1,Gl++),et}function ri(){return st(yo,ln)}function pl(){return ln}function Kl(e,t){return no(yo,e,t)}function Kd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rS(e){return Gl=ro=1,bv=Cn(yo=e),ln=0,[]}function iS(e){return yo="",e}function ld(e){return wv(Kl(ln-1,Xd(e===91?e+2:e===40?e+1:e)))}function oS(e){for(;(et=ri())&&et<33;)xn();return Kd(e)>2||Kd(et)>3?"":" "}function sS(e,t){for(;--t&&xn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Kl(e,pl()+(t<6&&ri()==32&&xn()==32))}function Xd(e){for(;xn();)switch(et){case e:return ln;case 34:case 39:e!==34&&e!==39&&Xd(et);break;case 40:e===41&&Xd(e);break;case 92:xn();break}return ln}function aS(e,t){for(;xn()&&e+et!==57;)if(e+et===84&&ri()===47)break;return"/*"+Kl(t,ln-1)+"*"+Hf(e===47?e:xn())}function lS(e){for(;!Kd(ri());)xn();return Kl(e,ln)}function uS(e){return iS(ml("",null,null,null,[""],e=rS(e),0,[0],e))}function ml(e,t,r,o,s,l,u,d,f){for(var h=0,m=0,y=u,x=0,b=0,S=0,_=1,k=1,P=1,j=0,D="",R=s,A=l,F=o,z=D;k;)switch(S=j,j=xn()){case 40:if(S!=108&&st(z,y-1)==58){hl(z+=me(ld(j),"&","&\f"),"&\f",xv(h?d[h-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:z+=ld(j);break;case 9:case 10:case 13:case 32:z+=oS(S);break;case 92:z+=sS(pl()-1,7);continue;case 47:switch(ri()){case 42:case 47:fs(cS(aS(xn(),pl()),t,r,f),f);break;default:z+="/"}break;case 123*_:d[h++]=Cn(z)*P;case 125*_:case 59:case 0:switch(j){case 0:case 125:k=0;case 59+m:P==-1&&(z=me(z,/\f/g,"")),b>0&&Cn(z)-y&&fs(b>32?q0(z+";",o,r,y-1,f):q0(me(z," ","")+";",o,r,y-2,f),f);break;case 59:z+=";";default:if(fs(F=Q0(z,t,r,h,m,s,d,D,R=[],A=[],y,l),l),j===123)if(m===0)ml(z,t,F,F,R,l,y,d,A);else switch(x===99&&st(z,3)===110?100:x){case 100:case 108:case 109:case 115:ml(e,F,F,o&&fs(Q0(e,F,F,0,0,s,d,D,s,R=[],y,A),A),s,A,y,d,o?R:A);break;default:ml(z,F,F,F,[""],A,0,d,A)}}h=m=b=0,_=P=1,D=z="",y=u;break;case 58:y=1+Cn(z),b=S;default:if(_<1){if(j==123)--_;else if(j==125&&_++==0&&nS()==125)continue}switch(z+=Hf(j),j*_){case 38:P=m>0?1:(z+="\f",-1);break;case 44:d[h++]=(Cn(z)-1)*P,P=1;break;case 64:ri()===45&&(z+=ld(xn())),x=ri(),m=y=Cn(D=z+=lS(pl())),j++;break;case 45:S===45&&Cn(z)==2&&(_=0)}}return l}function Q0(e,t,r,o,s,l,u,d,f,h,m,y){for(var x=s-1,b=s===0?l:[""],S=_v(b),_=0,k=0,P=0;_<o;++_)for(var j=0,D=no(e,x+1,x=xv(k=u[_])),R=e;j<S;++j)(R=wv(k>0?b[j]+" "+D:me(D,/&\f/g,b[j])))&&(f[P++]=R);return Yl(e,t,r,s===0?Wl:d,f,h,m,y)}function cS(e,t,r,o){return Yl(e,t,r,yv,Hf(tS()),no(e,2,-2),0,o)}function q0(e,t,r,o,s){return Yl(e,t,r,Uf,no(e,0,o),no(e,o+1,-1),o,s)}function Sv(e,t,r){switch(Zb(e,t)){case 5103:return Ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+e+e;case 4789:return vs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+e+vs+e+Le+e+e;case 5936:switch(st(e,t+11)){case 114:return Ee+e+Le+me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ee+e+Le+me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ee+e+Le+me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ee+e+Le+e+e;case 6165:return Ee+e+Le+"flex-"+e+e;case 5187:return Ee+e+me(e,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return Ee+e+Le+"flex-item-"+me(e,/flex-|-self/g,"")+(Hn(e,/flex-|baseline/)?"":Le+"grid-row-"+me(e,/flex-|-self/g,""))+e;case 4675:return Ee+e+Le+"flex-line-pack"+me(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ee+e+Le+me(e,"shrink","negative")+e;case 5292:return Ee+e+Le+me(e,"basis","preferred-size")+e;case 6060:return Ee+"box-"+me(e,"-grow","")+Ee+e+Le+me(e,"grow","positive")+e;case 4554:return Ee+me(e,/([^-])(transform)/g,"$1"+Ee+"$2")+e;case 6187:return me(me(me(e,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),e,"")+e;case 5495:case 3959:return me(e,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return me(me(e,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+e+e;case 4200:if(!Hn(e,/flex-|baseline/))return Le+"grid-column-align"+no(e,t)+e;break;case 2592:case 3360:return Le+me(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,s){return t=s,Hn(o.props,/grid-\w+-end/)})?~hl(e+(r=r[t].value),"span",0)?e:Le+me(e,"-start","")+e+Le+"grid-row-span:"+(~hl(r,"span",0)?Hn(r,/\d+/):+Hn(r,/\d+/)-+Hn(e,/\d+/))+";":Le+me(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return Hn(o.props,/grid-\w+-start/)})?e:Le+me(me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return me(e,/(.+)-inline(.+)/,Ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(st(e,t+1)){case 109:if(st(e,t+4)!==45)break;case 102:return me(e,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+vs+(st(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hl(e,"stretch",0)?Sv(me(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,l,u,d,f,h){return Le+s+":"+l+h+(u?Le+s+"-span:"+(d?f:+f-+l)+h:"")+e});case 4949:if(st(e,t+6)===121)return me(e,":",":"+Ee)+e;break;case 6444:switch(st(e,st(e,14)===45?18:11)){case 120:return me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(st(e,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Le+"$2box$3")+e;case 100:return me(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(e,"scroll-","scroll-snap-")+e}return e}function Cl(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function dS(e,t,r,o){switch(e.type){case qb:if(e.children.length)break;case Qb:case Uf:return e.return=e.return||e.value;case yv:return"";case vv:return e.return=e.value+"{"+Cl(e.children,o)+"}";case Wl:if(!Cn(e.value=e.props.join(",")))return""}return Cn(r=Cl(e.children,o))?e.return=e.value+"{"+r+"}":""}function fS(e){var t=_v(e);return function(r,o,s,l){for(var u="",d=0;d<t;d++)u+=e[d](r,o,s,l)||"";return u}}function hS(e){return function(t){t.root||(t=t.return)&&e(t)}}function pS(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case Uf:e.return=Sv(e.value,e.length,r);return;case vv:return Cl([_r(e,{value:me(e.value,"@","@"+Ee)})],o);case Wl:if(e.length)return eS(r=e.props,function(s){switch(Hn(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ni(_r(e,{props:[me(s,/:(read-\w+)/,":"+vs+"$1")]})),Ni(_r(e,{props:[s]})),Yd(e,{props:J0(r,o)});break;case"::placeholder":Ni(_r(e,{props:[me(s,/:(plac\w+)/,":"+Ee+"input-$1")]})),Ni(_r(e,{props:[me(s,/:(plac\w+)/,":"+vs+"$1")]})),Ni(_r(e,{props:[me(s,/:(plac\w+)/,Le+"input-$1")]})),Ni(_r(e,{props:[s]})),Yd(e,{props:J0(r,o)});break}return""})}}var mS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vt={},io=typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_ATTR||Vt.SC_ATTR)||"data-styled",kv="active",Tv="data-styled-version",Xl="6.1.15",Wf=`/*!sc*/
`,Pl=typeof window<"u"&&"HTMLElement"in window,gS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==""?Vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.SC_DISABLE_SPEEDY!==void 0&&Vt.SC_DISABLE_SPEEDY!==""&&Vt.SC_DISABLE_SPEEDY!=="false"&&Vt.SC_DISABLE_SPEEDY),yS={},Jl=Object.freeze([]),oo=Object.freeze({});function Cv(e,t,r){return r===void 0&&(r=oo),e.theme!==r.theme&&e.theme||t||r.theme}var Pv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xS=/(^-|-$)/g;function Z0(e){return e.replace(vS,"-").replace(xS,"")}var wS=/(a)(d)/gi,rl=52,eg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jd(e){var t,r="";for(t=Math.abs(e);t>rl;t=t/rl|0)r=eg(t%rl)+r;return(eg(t%rl)+r).replace(wS,"$1-$2")}var ud,Ev=5381,Ui=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},jv=function(e){return Ui(Ev,e)};function Av(e){return Jd(jv(e)>>>0)}function _S(e){return e.displayName||e.name||"Component"}function cd(e){return typeof e=="string"&&!0}var $v=typeof Symbol=="function"&&Symbol.for,Dv=$v?Symbol.for("react.memo"):60115,bS=$v?Symbol.for("react.forward_ref"):60112,SS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TS=((ud={})[bS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ud[Dv]=Mv,ud);function tg(e){return("type"in(t=e)&&t.type.$$typeof)===Dv?Mv:"$$typeof"in e?TS[e.$$typeof]:SS;var t}var CS=Object.defineProperty,PS=Object.getOwnPropertyNames,ng=Object.getOwnPropertySymbols,ES=Object.getOwnPropertyDescriptor,jS=Object.getPrototypeOf,rg=Object.prototype;function Rv(e,t,r){if(typeof t!="string"){if(rg){var o=jS(t);o&&o!==rg&&Rv(e,o,r)}var s=PS(t);ng&&(s=s.concat(ng(t)));for(var l=tg(e),u=tg(t),d=0;d<s.length;++d){var f=s[d];if(!(f in kS||r&&r[f]||u&&f in u||l&&f in l)){var h=ES(t,f);try{CS(e,f,h)}catch{}}}}return e}function ui(e){return typeof e=="function"}function Gf(e){return typeof e=="object"&&"styledComponentId"in e}function Zr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qd(e,t){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=e[o];return r}function Es(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qd(e,t,r){if(r===void 0&&(r=!1),!r&&!Es(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=qd(e[o],t[o]);else if(Es(t))for(var o in t)e[o]=qd(e[o],t[o]);return e}function Yf(e,t){Object.defineProperty(e,"toString",{value:t})}function ci(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var AS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,l=s;t>=l;)if((l<<=1)<0)throw ci(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var u=s;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(t+1),f=(u=0,r.length);u<f;u++)this.tag.insertRule(d,r[u])&&(this.groupSizes[t]++,d++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r;this.groupSizes[t]=0;for(var l=o;l<s;l++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),l=s+o,u=s;u<l;u++)r+="".concat(this.tag.getRule(u)).concat(Wf);return r},e}(),gl=new Map,El=new Map,yl=1,il=function(e){if(gl.has(e))return gl.get(e);for(;El.has(yl);)yl++;var t=yl++;return gl.set(e,t),El.set(t,e),t},$S=function(e,t){yl=t+1,gl.set(e,t),El.set(t,e)},DS="style[".concat(io,"][").concat(Tv,'="').concat(Xl,'"]'),MS=new RegExp("^".concat(io,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),RS=function(e,t,r){for(var o,s=r.split(","),l=0,u=s.length;l<u;l++)(o=s[l])&&e.registerName(t,o)},LS=function(e,t){for(var r,o=((r=t.textContent)!==null&&r!==void 0?r:"").split(Wf),s=[],l=0,u=o.length;l<u;l++){var d=o[l].trim();if(d){var f=d.match(MS);if(f){var h=0|parseInt(f[1],10),m=f[2];h!==0&&($S(m,h),RS(e,m,f[3]),e.getTag().insertRules(h,s)),s.length=0}else s.push(d)}}},ig=function(e){for(var t=document.querySelectorAll(DS),r=0,o=t.length;r<o;r++){var s=t[r];s&&s.getAttribute(io)!==kv&&(LS(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function OS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Lv=function(e){var t=document.head,r=e||t,o=document.createElement("style"),s=function(d){var f=Array.from(d.querySelectorAll("style[".concat(io,"]")));return f[f.length-1]}(r),l=s!==void 0?s.nextSibling:null;o.setAttribute(io,kv),o.setAttribute(Tv,Xl);var u=OS();return u&&o.setAttribute("nonce",u),r.insertBefore(o,l),o},FS=function(){function e(t){this.element=Lv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,s=0,l=o.length;s<l;s++){var u=o[s];if(u.ownerNode===r)return u}throw ci(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),zS=function(){function e(t){this.element=Lv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),IS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),og=Pl,NS={isServer:!Pl,useCSSOMInjection:!gS},jl=function(){function e(t,r,o){t===void 0&&(t=oo),r===void 0&&(r={});var s=this;this.options=at(at({},NS),t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Pl&&og&&(og=!1,ig(this)),Yf(this,function(){return function(l){for(var u=l.getTag(),d=u.length,f="",h=function(y){var x=function(P){return El.get(P)}(y);if(x===void 0)return"continue";var b=l.names.get(x),S=u.getGroup(y);if(b===void 0||!b.size||S.length===0)return"continue";var _="".concat(io,".g").concat(y,'[id="').concat(x,'"]'),k="";b!==void 0&&b.forEach(function(P){P.length>0&&(k+="".concat(P,","))}),f+="".concat(S).concat(_,'{content:"').concat(k,'"}').concat(Wf)},m=0;m<d;m++)h(m);return f}(s)})}return e.registerId=function(t){return il(t)},e.prototype.rehydrate=function(){!this.server&&Pl&&ig(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(at(at({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var o=r.useCSSOMInjection,s=r.target;return r.isServer?new IS(s):o?new FS(s):new zS(s)}(this.options),new AS(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(il(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},e.prototype.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(il(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(il(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),VS=/&/g,BS=/^\s*\/\/.*$/gm;function Ov(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ov(r.children,t)),r})}function US(e){var t,r,o,s=oo,l=s.options,u=l===void 0?oo:l,d=s.plugins,f=d===void 0?Jl:d,h=function(x,b,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):x},m=f.slice();m.push(function(x){x.type===Wl&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(VS,r).replace(o,h))}),u.prefix&&m.push(pS),m.push(dS);var y=function(x,b,S,_){b===void 0&&(b=""),S===void 0&&(S=""),_===void 0&&(_="&"),t=_,r=b,o=new RegExp("\\".concat(r,"\\b"),"g");var k=x.replace(BS,""),P=uS(S||b?"".concat(S," ").concat(b," { ").concat(k," }"):k);u.namespace&&(P=Ov(P,u.namespace));var j=[];return Cl(P,fS(m.concat(hS(function(D){return j.push(D)})))),j};return y.hash=f.length?f.reduce(function(x,b){return b.name||ci(15),Ui(x,b.name)},Ev).toString():"",y}var HS=new jl,Zd=US(),Fv=We.createContext({shouldForwardProp:void 0,styleSheet:HS,stylis:Zd});Fv.Consumer;We.createContext(void 0);function ef(){return V.useContext(Fv)}var WS=function(){function e(t,r){var o=this;this.inject=function(s,l){l===void 0&&(l=Zd);var u=o.name+l.hash;s.hasNameForId(o.id,u)||s.insertRules(o.id,u,l(o.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Yf(this,function(){throw ci(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zd),this.name+t.hash},e}(),GS=function(e){return e>="A"&&e<="Z"};function sg(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;GS(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var zv=function(e){return e==null||e===!1||e===""},Iv=function(e){var t,r,o=[];for(var s in e){var l=e[s];e.hasOwnProperty(s)&&!zv(l)&&(Array.isArray(l)&&l.isCss||ui(l)?o.push("".concat(sg(s),":"),l,";"):Es(l)?o.push.apply(o,Ps(Ps(["".concat(s," {")],Iv(l),!1),["}"],!1)):o.push("".concat(sg(s),": ").concat((t=s,(r=l)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in mS||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Cr(e,t,r,o){if(zv(e))return[];if(Gf(e))return[".".concat(e.styledComponentId)];if(ui(e)){if(!ui(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var s=e(t);return Cr(s,t,r,o)}var l;return e instanceof WS?r?(e.inject(r,o),[e.getName(o)]):[e]:Es(e)?Iv(e):Array.isArray(e)?Array.prototype.concat.apply(Jl,e.map(function(u){return Cr(u,t,r,o)})):[e.toString()]}function Nv(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ui(r)&&!Gf(r))return!1}return!0}var YS=jv(Xl),KS=function(){function e(t,r,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Nv(t),this.componentId=r,this.baseHash=Ui(YS,r),this.baseStyle=o,jl.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=Zr(s,this.staticRulesId);else{var l=Qd(Cr(this.rules,t,r,o)),u=Jd(Ui(this.baseHash,l)>>>0);if(!r.hasNameForId(this.componentId,u)){var d=o(l,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,d)}s=Zr(s,u),this.staticRulesId=u}else{for(var f=Ui(this.baseHash,o.hash),h="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")h+=y;else if(y){var x=Qd(Cr(y,t,r,o));f=Ui(f,x+m),h+=x}}if(h){var b=Jd(f>>>0);r.hasNameForId(this.componentId,b)||r.insertRules(this.componentId,b,o(h,".".concat(b),void 0,this.componentId)),s=Zr(s,b)}}return s},e}(),js=We.createContext(void 0);js.Consumer;function XS(e){var t=We.useContext(js),r=V.useMemo(function(){return function(o,s){if(!o)throw ci(14);if(ui(o)){var l=o(s);return l}if(Array.isArray(o)||typeof o!="object")throw ci(8);return s?at(at({},s),o):o}(e.theme,t)},[e.theme,t]);return e.children?We.createElement(js.Provider,{value:r},e.children):null}var dd={};function JS(e,t,r){var o=Gf(e),s=e,l=!cd(e),u=t.attrs,d=u===void 0?Jl:u,f=t.componentId,h=f===void 0?function(R,A){var F=typeof R!="string"?"sc":Z0(R);dd[F]=(dd[F]||0)+1;var z="".concat(F,"-").concat(Av(Xl+F+dd[F]));return A?"".concat(A,"-").concat(z):z}(t.displayName,t.parentComponentId):f,m=t.displayName,y=m===void 0?function(R){return cd(R)?"styled.".concat(R):"Styled(".concat(_S(R),")")}(e):m,x=t.displayName&&t.componentId?"".concat(Z0(t.displayName),"-").concat(t.componentId):t.componentId||h,b=o&&s.attrs?s.attrs.concat(d).filter(Boolean):d,S=t.shouldForwardProp;if(o&&s.shouldForwardProp){var _=s.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;S=function(R,A){return _(R,A)&&k(R,A)}}else S=_}var P=new KS(r,x,o?s.componentStyle:void 0);function j(R,A){return function(F,z,N){var U=F.attrs,ie=F.componentStyle,pe=F.defaultProps,he=F.foldedComponentIds,fe=F.styledComponentId,_e=F.target,ke=We.useContext(js),ge=ef(),ne=F.shouldForwardProp||ge.shouldForwardProp,G=Cv(z,ke,pe)||oo,q=function(de,ye,Pe){for(var xe,Te=at(at({},ye),{className:void 0,theme:Pe}),ut=0;ut<de.length;ut+=1){var Rn=ui(xe=de[ut])?xe(Te):xe;for(var un in Rn)Te[un]=un==="className"?Zr(Te[un],Rn[un]):un==="style"?at(at({},Te[un]),Rn[un]):Rn[un]}return ye.className&&(Te.className=Zr(Te.className,ye.className)),Te}(U,z,G),J=q.as||_e,M={};for(var B in q)q[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&q.theme===G||(B==="forwardedAs"?M.as=q.forwardedAs:ne&&!ne(B,J)||(M[B]=q[B]));var ce=function(de,ye){var Pe=ef(),xe=de.generateAndInjectStyles(ye,Pe.styleSheet,Pe.stylis);return xe}(ie,q),ae=Zr(he,fe);return ce&&(ae+=" "+ce),q.className&&(ae+=" "+q.className),M[cd(J)&&!Pv.has(J)?"class":"className"]=ae,N&&(M.ref=N),V.createElement(J,M)}(D,R,A)}j.displayName=y;var D=We.forwardRef(j);return D.attrs=b,D.componentStyle=P,D.displayName=y,D.shouldForwardProp=S,D.foldedComponentIds=o?Zr(s.foldedComponentIds,s.styledComponentId):"",D.styledComponentId=x,D.target=o?s.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=o?function(A){for(var F=[],z=1;z<arguments.length;z++)F[z-1]=arguments[z];for(var N=0,U=F;N<U.length;N++)qd(A,U[N],!0);return A}({},s.defaultProps,R):R}}),Yf(D,function(){return".".concat(D.styledComponentId)}),l&&Rv(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function ag(e,t){for(var r=[e[0]],o=0,s=t.length;o<s;o+=1)r.push(t[o],e[o+1]);return r}var lg=function(e){return Object.assign(e,{isCss:!0})};function Vv(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ui(e)||Es(e))return lg(Cr(ag(Jl,Ps([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Cr(o):lg(Cr(ag(o,t)))}function tf(e,t,r){if(r===void 0&&(r=oo),!t)throw ci(1,t);var o=function(s){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,r,Vv.apply(void 0,Ps([s],l,!1)))};return o.attrs=function(s){return tf(e,t,at(at({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return tf(e,t,at(at({},r),s))},o}var Bv=function(e){return tf(JS,e)},T=Bv;Pv.forEach(function(e){T[e]=Bv(e)});var QS=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Nv(t),jl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,o,s){var l=s(Qd(Cr(this.rules,r,o,s)),""),u=this.componentId+t;o.insertRules(u,u,l)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,o,s){t>2&&jl.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function qS(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=Vv.apply(void 0,Ps([e],t,!1)),s="sc-global-".concat(Av(JSON.stringify(o))),l=new QS(o,s),u=function(f){var h=ef(),m=We.useContext(js),y=We.useRef(h.styleSheet.allocateGSInstance(s)).current;return h.styleSheet.server&&d(y,f,h.styleSheet,m,h.stylis),We.useLayoutEffect(function(){if(!h.styleSheet.server)return d(y,f,h.styleSheet,m,h.stylis),function(){return l.removeStyles(y,h.styleSheet)}},[y,f,h.styleSheet,m,h.stylis]),null};function d(f,h,m,y,x){if(l.isStatic)l.renderStyles(f,yS,m,x);else{var b=at(at({},h),{theme:Cv(h,y,u.defaultProps)});l.renderStyles(f,b,m,x)}}return We.memo(u)}const Kf=V.createContext({});function vo(e){const t=V.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ql=V.createContext(null),ql=V.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ZS extends V.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ek({children:e,isPresent:t}){const r=V.useId(),o=V.useRef(null),s=V.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=V.useContext(ql);return V.useInsertionEffect(()=>{const{width:u,height:d,top:f,left:h}=s.current;if(t||!o.current||!u||!d)return;o.current.dataset.motionPopId=r;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),v.jsx(ZS,{isPresent:t,childRef:o,sizeRef:s,children:V.cloneElement(e,{ref:o})})}const tk=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:s,presenceAffectsLayout:l,mode:u})=>{const d=vo(nk),f=V.useId(),h=V.useCallback(y=>{d.set(y,!0);for(const x of d.values())if(!x)return;o&&o()},[d,o]),m=V.useMemo(()=>({id:f,initial:t,isPresent:r,custom:s,onExitComplete:h,register:y=>(d.set(y,!1),()=>d.delete(y))}),l?[Math.random(),h]:[r,h]);return V.useMemo(()=>{d.forEach((y,x)=>d.set(x,!1))},[r]),V.useEffect(()=>{!r&&!d.size&&o&&o()},[r]),u==="popLayout"&&(e=v.jsx(ek,{isPresent:r,children:e})),v.jsx(Ql.Provider,{value:m,children:e})};function nk(){return new Map}function Uv(e=!0){const t=V.useContext(Ql);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:s}=t,l=V.useId();V.useEffect(()=>{e&&s(l)},[e]);const u=V.useCallback(()=>e&&o&&o(l),[l,o,e]);return!r&&o?[!1,u]:[!0]}const ol=e=>e.key||"";function ug(e){const t=[];return V.Children.forEach(e,r=>{V.isValidElement(r)&&t.push(r)}),t}const Xf=typeof window<"u",Zl=Xf?V.useLayoutEffect:V.useEffect,Jf=({children:e,custom:t,initial:r=!0,onExitComplete:o,presenceAffectsLayout:s=!0,mode:l="sync",propagate:u=!1})=>{const[d,f]=Uv(u),h=V.useMemo(()=>ug(e),[e]),m=u&&!d?[]:h.map(ol),y=V.useRef(!0),x=V.useRef(h),b=vo(()=>new Map),[S,_]=V.useState(h),[k,P]=V.useState(h);Zl(()=>{y.current=!1,x.current=h;for(let R=0;R<k.length;R++){const A=ol(k[R]);m.includes(A)?b.delete(A):b.get(A)!==!0&&b.set(A,!1)}},[k,m.length,m.join("-")]);const j=[];if(h!==S){let R=[...h];for(let A=0;A<k.length;A++){const F=k[A],z=ol(F);m.includes(z)||(R.splice(A,0,F),j.push(F))}l==="wait"&&j.length&&(R=j),P(ug(R)),_(h);return}const{forceRender:D}=V.useContext(Kf);return v.jsx(v.Fragment,{children:k.map(R=>{const A=ol(R),F=u&&!d?!1:h===k||m.includes(A),z=()=>{if(b.has(A))b.set(A,!0);else return;let N=!0;b.forEach(U=>{U||(N=!1)}),N&&(D==null||D(),P(x.current),u&&(f==null||f()),o&&o())};return v.jsx(tk,{isPresent:F,initial:!y.current||r?void 0:!1,custom:F?void 0:t,presenceAffectsLayout:s,mode:l,onExitComplete:F?void 0:z,children:R},A)})})},Wt=e=>e;let Hv=Wt;function Qf(e){let t;return()=>(t===void 0&&(t=e()),t)}const so=(e,t,r)=>{const o=t-e;return o===0?1:(r-e)/o},Yn=e=>e*1e3,Kn=e=>e/1e3,rk={useManualTiming:!1};function ik(e){let t=new Set,r=new Set,o=!1,s=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function d(h){l.has(h)&&(f.schedule(h),e()),h(u)}const f={schedule:(h,m=!1,y=!1)=>{const b=y&&o?t:r;return m&&l.add(h),b.has(h)||b.add(h),h},cancel:h=>{r.delete(h),l.delete(h)},process:h=>{if(u=h,o){s=!0;return}o=!0,[t,r]=[r,t],t.forEach(d),t.clear(),o=!1,s&&(s=!1,f.process(h))}};return f}const sl=["read","resolveKeyframes","update","preRender","render","postRender"],ok=40;function Wv(e,t){let r=!1,o=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>r=!0,u=sl.reduce((P,j)=>(P[j]=ik(l),P),{}),{read:d,resolveKeyframes:f,update:h,preRender:m,render:y,postRender:x}=u,b=()=>{const P=performance.now();r=!1,s.delta=o?1e3/60:Math.max(Math.min(P-s.timestamp,ok),1),s.timestamp=P,s.isProcessing=!0,d.process(s),f.process(s),h.process(s),m.process(s),y.process(s),x.process(s),s.isProcessing=!1,r&&t&&(o=!1,e(b))},S=()=>{r=!0,o=!0,s.isProcessing||e(b)};return{schedule:sl.reduce((P,j)=>{const D=u[j];return P[j]=(R,A=!1,F=!1)=>(r||S(),D.schedule(R,A,F)),P},{}),cancel:P=>{for(let j=0;j<sl.length;j++)u[sl[j]].cancel(P)},state:s,steps:u}}const{schedule:De,cancel:Xn,state:ft,steps:fd}=Wv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wt,!0),Gv=V.createContext({strict:!1}),cg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ao={};for(const e in cg)ao[e]={isEnabled:t=>cg[e].some(r=>!!t[r])};function sk(e){for(const t in e)ao[t]={...ao[t],...e[t]}}const ak=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Al(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ak.has(e)}let Yv=e=>!Al(e);function lk(e){e&&(Yv=t=>t.startsWith("on")?!Al(t):e(t))}try{lk(require("@emotion/is-prop-valid").default)}catch{}function uk(e,t,r){const o={};for(const s in e)s==="values"&&typeof e.values=="object"||(Yv(s)||r===!0&&Al(s)||!t&&!Al(s)||e.draggable&&s.startsWith("onDrag"))&&(o[s]=e[s]);return o}function ck(e){if(typeof Proxy>"u")return e;const t=new Map,r=(...o)=>e(...o);return new Proxy(r,{get:(o,s)=>s==="create"?e:(t.has(s)||t.set(s,e(s)),t.get(s))})}const eu=V.createContext({});function As(e){return typeof e=="string"||Array.isArray(e)}function tu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const qf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zf=["initial",...qf];function nu(e){return tu(e.animate)||Zf.some(t=>As(e[t]))}function Kv(e){return!!(nu(e)||e.variants)}function dk(e,t){if(nu(e)){const{initial:r,animate:o}=e;return{initial:r===!1||As(r)?r:void 0,animate:As(o)?o:void 0}}return e.inherit!==!1?t:{}}function fk(e){const{initial:t,animate:r}=dk(e,V.useContext(eu));return V.useMemo(()=>({initial:t,animate:r}),[dg(t),dg(r)])}function dg(e){return Array.isArray(e)?e.join(" "):e}const hk=Symbol.for("motionComponentSymbol");function Hi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function pk(e,t,r){return V.useCallback(o=>{o&&e.onMount&&e.onMount(o),t&&(o?t.mount(o):t.unmount()),r&&(typeof r=="function"?r(o):Hi(r)&&(r.current=o))},[t])}const eh=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),mk="framerAppearId",Xv="data-"+eh(mk),{schedule:th}=Wv(queueMicrotask,!1),Jv=V.createContext({});function gk(e,t,r,o,s){var l,u;const{visualElement:d}=V.useContext(eu),f=V.useContext(Gv),h=V.useContext(Ql),m=V.useContext(ql).reducedMotion,y=V.useRef(null);o=o||f.renderer,!y.current&&o&&(y.current=o(e,{visualState:t,parent:d,props:r,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const x=y.current,b=V.useContext(Jv);x&&!x.projection&&s&&(x.type==="html"||x.type==="svg")&&yk(y.current,r,s,b);const S=V.useRef(!1);V.useInsertionEffect(()=>{x&&S.current&&x.update(r,h)});const _=r[Xv],k=V.useRef(!!_&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,_))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,_)));return Zl(()=>{x&&(S.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),th.render(x.render),k.current&&x.animationState&&x.animationState.animateChanges())}),V.useEffect(()=>{x&&(!k.current&&x.animationState&&x.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)===null||P===void 0||P.call(window,_)}),k.current=!1))}),x}function yk(e,t,r,o){const{layoutId:s,layout:l,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:h}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:Qv(e.parent)),e.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!u||d&&Hi(d),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:h})}function Qv(e){if(e)return e.options.allowProjection!==!1?e.projection:Qv(e.parent)}function vk({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:o,Component:s}){var l,u;e&&sk(e);function d(h,m){let y;const x={...V.useContext(ql),...h,layoutId:xk(h)},{isStatic:b}=x,S=fk(h),_=o(h,b);if(!b&&Xf){wk();const k=_k(x);y=k.MeasureLayout,S.visualElement=gk(s,_,x,t,k.ProjectionNode)}return v.jsxs(eu.Provider,{value:S,children:[y&&S.visualElement?v.jsx(y,{visualElement:S.visualElement,...x}):null,r(s,h,pk(_,S.visualElement,m),_,b,S.visualElement)]})}d.displayName=`motion.${typeof s=="string"?s:`create(${(u=(l=s.displayName)!==null&&l!==void 0?l:s.name)!==null&&u!==void 0?u:""})`}`;const f=V.forwardRef(d);return f[hk]=s,f}function xk({layoutId:e}){const t=V.useContext(Kf).id;return t&&e!==void 0?t+"-"+e:e}function wk(e,t){V.useContext(Gv).strict}function _k(e){const{drag:t,layout:r}=ao;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(e)||r!=null&&r.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const bk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function nh(e){return typeof e!="string"||e.includes("-")?!1:!!(bk.indexOf(e)>-1||/[A-Z]/u.test(e))}function fg(e){const t=[{},{}];return e==null||e.values.forEach((r,o)=>{t[0][o]=r.get(),t[1][o]=r.getVelocity()}),t}function rh(e,t,r,o){if(typeof t=="function"){const[s,l]=fg(o);t=t(r!==void 0?r:e.custom,s,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,l]=fg(o);t=t(r!==void 0?r:e.custom,s,l)}return t}const nf=e=>Array.isArray(e),Sk=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),kk=e=>nf(e)?e[e.length-1]||0:e,wt=e=>!!(e&&e.getVelocity);function vl(e){const t=wt(e)?e.get():e;return Sk(t)?t.toValue():t}function Tk({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:r},o,s,l){const u={latestValues:Ck(o,s,l,e),renderState:t()};return r&&(u.onMount=d=>r({props:o,current:d,...u}),u.onUpdate=d=>r(d)),u}const qv=e=>(t,r)=>{const o=V.useContext(eu),s=V.useContext(Ql),l=()=>Tk(e,t,o,s);return r?l():vo(l)};function Ck(e,t,r,o){const s={},l=o(e,{});for(const x in l)s[x]=vl(l[x]);let{initial:u,animate:d}=e;const f=nu(e),h=Kv(e);t&&h&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let m=r?r.initial===!1:!1;m=m||u===!1;const y=m?d:u;if(y&&typeof y!="boolean"&&!tu(y)){const x=Array.isArray(y)?y:[y];for(let b=0;b<x.length;b++){const S=rh(e,x[b]);if(S){const{transitionEnd:_,transition:k,...P}=S;for(const j in P){let D=P[j];if(Array.isArray(D)){const R=m?D.length-1:0;D=D[R]}D!==null&&(s[j]=D)}for(const j in _)s[j]=_[j]}}}return s}const xo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fi=new Set(xo),Zv=e=>t=>typeof t=="string"&&t.startsWith(e),ex=Zv("--"),Pk=Zv("var(--"),ih=e=>Pk(e)?Ek.test(e.split("/*")[0].trim()):!1,Ek=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,tx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Jn=(e,t,r)=>r>t?t:r<e?e:r,wo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},$s={...wo,transform:e=>Jn(0,1,e)},al={...wo,default:1},Bs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),br=Bs("deg"),jn=Bs("%"),le=Bs("px"),jk=Bs("vh"),Ak=Bs("vw"),hg={...jn,parse:e=>jn.parse(e)/100,transform:e=>jn.transform(e*100)},$k={borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,radius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,top:le,right:le,bottom:le,left:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,backgroundPositionX:le,backgroundPositionY:le},Dk={rotate:br,rotateX:br,rotateY:br,rotateZ:br,scale:al,scaleX:al,scaleY:al,scaleZ:al,skew:br,skewX:br,skewY:br,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:$s,originX:hg,originY:hg,originZ:le},pg={...wo,transform:Math.round},oh={...$k,...Dk,zIndex:pg,size:le,fillOpacity:$s,strokeOpacity:$s,numOctaves:pg},Mk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Rk=xo.length;function Lk(e,t,r){let o="",s=!0;for(let l=0;l<Rk;l++){const u=xo[l],d=e[u];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(u.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||r){const h=tx(d,oh[u]);if(!f){s=!1;const m=Mk[u]||u;o+=`${m}(${h}) `}r&&(t[u]=h)}}return o=o.trim(),r?o=r(t,s?"":o):s&&(o="none"),o}function sh(e,t,r){const{style:o,vars:s,transformOrigin:l}=e;let u=!1,d=!1;for(const f in t){const h=t[f];if(fi.has(f)){u=!0;continue}else if(ex(f)){s[f]=h;continue}else{const m=tx(h,oh[f]);f.startsWith("origin")?(d=!0,l[f]=m):o[f]=m}}if(t.transform||(u||r?o.transform=Lk(t,e.transform,r):o.transform&&(o.transform="none")),d){const{originX:f="50%",originY:h="50%",originZ:m=0}=l;o.transformOrigin=`${f} ${h} ${m}`}}const Ok={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fk={offset:"strokeDashoffset",array:"strokeDasharray"};function zk(e,t,r=1,o=0,s=!0){e.pathLength=1;const l=s?Ok:Fk;e[l.offset]=le.transform(-o);const u=le.transform(t),d=le.transform(r);e[l.array]=`${u} ${d}`}function mg(e,t,r){return typeof e=="string"?e:le.transform(t+r*e)}function Ik(e,t,r){const o=mg(t,e.x,e.width),s=mg(r,e.y,e.height);return`${o} ${s}`}function ah(e,{attrX:t,attrY:r,attrScale:o,originX:s,originY:l,pathLength:u,pathSpacing:d=1,pathOffset:f=0,...h},m,y){if(sh(e,h,y),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:b,dimensions:S}=e;x.transform&&(S&&(b.transform=x.transform),delete x.transform),S&&(s!==void 0||l!==void 0||b.transform)&&(b.transformOrigin=Ik(S,s!==void 0?s:.5,l!==void 0?l:.5)),t!==void 0&&(x.x=t),r!==void 0&&(x.y=r),o!==void 0&&(x.scale=o),u!==void 0&&zk(x,u,d,f,!1)}const lh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),nx=()=>({...lh(),attrs:{}}),uh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function rx(e,{style:t,vars:r},o,s){Object.assign(e.style,t,s&&s.getProjectionStyles(o));for(const l in r)e.style.setProperty(l,r[l])}const ix=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ox(e,t,r,o){rx(e,t,void 0,o);for(const s in t.attrs)e.setAttribute(ix.has(s)?s:eh(s),t.attrs[s])}const $l={};function Nk(e){Object.assign($l,e)}function sx(e,{layout:t,layoutId:r}){return fi.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!$l[e]||e==="opacity")}function ch(e,t,r){var o;const{style:s}=e,l={};for(const u in s)(wt(s[u])||t.style&&wt(t.style[u])||sx(u,e)||((o=r==null?void 0:r.getValue(u))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(l[u]=s[u]);return l}function ax(e,t,r){const o=ch(e,t,r);for(const s in e)if(wt(e[s])||wt(t[s])){const l=xo.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;o[l]=e[s]}return o}function Vk(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const gg=["x","y","width","height","cx","cy","r"],Bk={useVisualState:qv({scrapeMotionValuesFromProps:ax,createRenderState:nx,onUpdate:({props:e,prevProps:t,current:r,renderState:o,latestValues:s})=>{if(!r)return;let l=!!e.drag;if(!l){for(const d in s)if(fi.has(d)){l=!0;break}}if(!l)return;let u=!t;if(t)for(let d=0;d<gg.length;d++){const f=gg[d];e[f]!==t[f]&&(u=!0)}u&&De.read(()=>{Vk(r,o),De.render(()=>{ah(o,s,uh(r.tagName),e.transformTemplate),ox(r,o)})})}})},Uk={useVisualState:qv({scrapeMotionValuesFromProps:ch,createRenderState:lh})};function lx(e,t,r){for(const o in t)!wt(t[o])&&!sx(o,r)&&(e[o]=t[o])}function Hk({transformTemplate:e},t){return V.useMemo(()=>{const r=lh();return sh(r,t,e),Object.assign({},r.vars,r.style)},[t])}function Wk(e,t){const r=e.style||{},o={};return lx(o,r,e),Object.assign(o,Hk(e,t)),o}function Gk(e,t){const r={},o=Wk(e,t);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}function Yk(e,t,r,o){const s=V.useMemo(()=>{const l=nx();return ah(l,t,uh(o),e.transformTemplate),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};lx(l,e.style,e),s.style={...l,...s.style}}return s}function Kk(e=!1){return(r,o,s,{latestValues:l},u)=>{const f=(nh(r)?Yk:Gk)(o,l,u,r),h=uk(o,typeof r=="string",e),m=r!==V.Fragment?{...h,...f,ref:s}:{},{children:y}=o,x=V.useMemo(()=>wt(y)?y.get():y,[y]);return V.createElement(r,{...m,children:x})}}function Xk(e,t){return function(o,{forwardMotionProps:s}={forwardMotionProps:!1}){const u={...nh(o)?Bk:Uk,preloadedFeatures:e,useRender:Kk(s),createVisualElement:t,Component:o};return vk(u)}}function ux(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let o=0;o<r;o++)if(t[o]!==e[o])return!1;return!0}function ru(e,t,r){const o=e.getProps();return rh(o,t,r!==void 0?r:o.custom,e)}const Jk=Qf(()=>window.ScrollTimeline!==void 0);class Qk{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let o=0;o<this.animations.length;o++)this.animations[o][t]=r}attachTimeline(t,r){const o=this.animations.map(s=>{if(Jk()&&s.attachTimeline)return s.attachTimeline(t);if(typeof r=="function")return r(s)});return()=>{o.forEach((s,l)=>{s&&s(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let r=0;r<this.animations.length;r++)t=Math.max(t,this.animations[r].duration);return t}runAll(t){this.animations.forEach(r=>r[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class qk extends Qk{then(t,r){return Promise.all(this.animations).then(t).catch(r)}}function dh(e,t){return e?e[t]||e.default||e:void 0}const rf=2e4;function cx(e){let t=0;const r=50;let o=e.next(t);for(;!o.done&&t<rf;)t+=r,o=e.next(t);return t>=rf?1/0:t}function fh(e){return typeof e=="function"}function yg(e,t){e.timeline=t,e.onfinish=null}const hh=e=>Array.isArray(e)&&typeof e[0]=="number",Zk={linearEasing:void 0};function eT(e,t){const r=Qf(e);return()=>{var o;return(o=Zk[t])!==null&&o!==void 0?o:r()}}const Dl=eT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),dx=(e,t,r=10)=>{let o="";const s=Math.max(Math.round(t/r),2);for(let l=0;l<s;l++)o+=e(so(0,s-1,l))+", ";return`linear(${o.substring(0,o.length-2)})`};function fx(e){return!!(typeof e=="function"&&Dl()||!e||typeof e=="string"&&(e in of||Dl())||hh(e)||Array.isArray(e)&&e.every(fx))}const hs=([e,t,r,o])=>`cubic-bezier(${e}, ${t}, ${r}, ${o})`,of={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hs([0,.65,.55,1]),circOut:hs([.55,0,1,.45]),backIn:hs([.31,.01,.66,-.59]),backOut:hs([.33,1.53,.69,.99])};function hx(e,t){if(e)return typeof e=="function"&&Dl()?dx(e,t):hh(e)?hs(e):Array.isArray(e)?e.map(r=>hx(r,t)||of.easeOut):of[e]}const yn={x:!1,y:!1};function px(){return yn.x||yn.y}function tT(e,t,r){var o;if(e instanceof Element)return[e];if(typeof e=="string"){let s=document;const l=(o=void 0)!==null&&o!==void 0?o:s.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}function mx(e,t){const r=tT(e),o=new AbortController,s={passive:!0,...t,signal:o.signal};return[r,s,()=>o.abort()]}function vg(e){return t=>{t.pointerType==="touch"||px()||e(t)}}function nT(e,t,r={}){const[o,s,l]=mx(e,r),u=vg(d=>{const{target:f}=d,h=t(d);if(typeof h!="function"||!f)return;const m=vg(y=>{h(y),f.removeEventListener("pointerleave",m)});f.addEventListener("pointerleave",m,s)});return o.forEach(d=>{d.addEventListener("pointerenter",u,s)}),l}const gx=(e,t)=>t?e===t?!0:gx(e,t.parentElement):!1,ph=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,rT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function iT(e){return rT.has(e.tagName)||e.tabIndex!==-1}const ps=new WeakSet;function xg(e){return t=>{t.key==="Enter"&&e(t)}}function hd(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const oT=(e,t)=>{const r=e.currentTarget;if(!r)return;const o=xg(()=>{if(ps.has(r))return;hd(r,"down");const s=xg(()=>{hd(r,"up")}),l=()=>hd(r,"cancel");r.addEventListener("keyup",s,t),r.addEventListener("blur",l,t)});r.addEventListener("keydown",o,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),t)};function wg(e){return ph(e)&&!px()}function sT(e,t,r={}){const[o,s,l]=mx(e,r),u=d=>{const f=d.currentTarget;if(!wg(d)||ps.has(f))return;ps.add(f);const h=t(d),m=(b,S)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),!(!wg(b)||!ps.has(f))&&(ps.delete(f),typeof h=="function"&&h(b,{success:S}))},y=b=>{m(b,r.useGlobalTarget||gx(f,b.target))},x=b=>{m(b,!1)};window.addEventListener("pointerup",y,s),window.addEventListener("pointercancel",x,s)};return o.forEach(d=>{!iT(d)&&d.getAttribute("tabindex")===null&&(d.tabIndex=0),(r.useGlobalTarget?window:d).addEventListener("pointerdown",u,s),d.addEventListener("focus",h=>oT(h,s),s)}),l}function aT(e){return e==="x"||e==="y"?yn[e]?null:(yn[e]=!0,()=>{yn[e]=!1}):yn.x||yn.y?null:(yn.x=yn.y=!0,()=>{yn.x=yn.y=!1})}const yx=new Set(["width","height","top","left","right","bottom",...xo]);let xl;function lT(){xl=void 0}const An={now:()=>(xl===void 0&&An.set(ft.isProcessing||rk.useManualTiming?ft.timestamp:performance.now()),xl),set:e=>{xl=e,queueMicrotask(lT)}};function mh(e,t){e.indexOf(t)===-1&&e.push(t)}function gh(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class yh{constructor(){this.subscriptions=[]}add(t){return mh(this.subscriptions,t),()=>gh(this.subscriptions,t)}notify(t,r,o){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,r,o);else for(let l=0;l<s;l++){const u=this.subscriptions[l];u&&u(t,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function vx(e,t){return t?e*(1e3/t):0}const _g=30,uT=e=>!isNaN(parseFloat(e)),xs={current:void 0};class cT{constructor(t,r={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,s=!0)=>{const l=An.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=An.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=uT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new yh);const o=this.events[t].add(r);return t==="change"?()=>{o(),De.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-o}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return xs.current&&xs.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=An.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>_g)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,_g);return vx(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function lo(e,t){return new cT(e,t)}function dT(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,lo(r))}function vh(e,t){const r=ru(e,t);let{transitionEnd:o={},transition:s={},...l}=r||{};l={...l,...o};for(const u in l){const d=kk(l[u]);dT(e,u,d)}}function fT(e){return!!(wt(e)&&e.add)}function sf(e,t){const r=e.getValue("willChange");if(fT(r))return r.add(t)}function xx(e){return e.props[Xv]}const wx=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,hT=1e-7,pT=12;function mT(e,t,r,o,s){let l,u,d=0;do u=t+(r-t)/2,l=wx(u,o,s)-e,l>0?r=u:t=u;while(Math.abs(l)>hT&&++d<pT);return u}function Us(e,t,r,o){if(e===t&&r===o)return Wt;const s=l=>mT(l,0,1,e,r);return l=>l===0||l===1?l:wx(s(l),t,o)}const _x=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,bx=e=>t=>1-e(1-t),Sx=Us(.33,1.53,.69,.99),xh=bx(Sx),kx=_x(xh),Tx=e=>(e*=2)<1?.5*xh(e):.5*(2-Math.pow(2,-10*(e-1))),wh=e=>1-Math.sin(Math.acos(e)),Cx=bx(wh),Px=_x(wh),Ex=e=>/^0[^.\s]+$/u.test(e);function gT(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ex(e):!0}const ws=e=>Math.round(e*1e5)/1e5,_h=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yT(e){return e==null}const vT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bh=(e,t)=>r=>!!(typeof r=="string"&&vT.test(r)&&r.startsWith(e)||t&&!yT(r)&&Object.prototype.hasOwnProperty.call(r,t)),jx=(e,t,r)=>o=>{if(typeof o!="string")return o;const[s,l,u,d]=o.match(_h);return{[e]:parseFloat(s),[t]:parseFloat(l),[r]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},xT=e=>Jn(0,255,e),pd={...wo,transform:e=>Math.round(xT(e))},ei={test:bh("rgb","red"),parse:jx("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:o=1})=>"rgba("+pd.transform(e)+", "+pd.transform(t)+", "+pd.transform(r)+", "+ws($s.transform(o))+")"};function wT(e){let t="",r="",o="",s="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),o=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),o=e.substring(3,4),s=e.substring(4,5),t+=t,r+=r,o+=o,s+=s),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:s?parseInt(s,16)/255:1}}const af={test:bh("#"),parse:wT,transform:ei.transform},Wi={test:bh("hsl","hue"),parse:jx("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:o=1})=>"hsla("+Math.round(e)+", "+jn.transform(ws(t))+", "+jn.transform(ws(r))+", "+ws($s.transform(o))+")"},vt={test:e=>ei.test(e)||af.test(e)||Wi.test(e),parse:e=>ei.test(e)?ei.parse(e):Wi.test(e)?Wi.parse(e):af.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ei.transform(e):Wi.transform(e)},_T=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function bT(e){var t,r;return isNaN(e)&&typeof e=="string"&&(((t=e.match(_h))===null||t===void 0?void 0:t.length)||0)+(((r=e.match(_T))===null||r===void 0?void 0:r.length)||0)>0}const Ax="number",$x="color",ST="var",kT="var(",bg="${}",TT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ds(e){const t=e.toString(),r=[],o={color:[],number:[],var:[]},s=[];let l=0;const d=t.replace(TT,f=>(vt.test(f)?(o.color.push(l),s.push($x),r.push(vt.parse(f))):f.startsWith(kT)?(o.var.push(l),s.push(ST),r.push(f)):(o.number.push(l),s.push(Ax),r.push(parseFloat(f))),++l,bg)).split(bg);return{values:r,split:d,indexes:o,types:s}}function Dx(e){return Ds(e).values}function Mx(e){const{split:t,types:r}=Ds(e),o=t.length;return s=>{let l="";for(let u=0;u<o;u++)if(l+=t[u],s[u]!==void 0){const d=r[u];d===Ax?l+=ws(s[u]):d===$x?l+=vt.transform(s[u]):l+=s[u]}return l}}const CT=e=>typeof e=="number"?0:e;function PT(e){const t=Dx(e);return Mx(e)(t.map(CT))}const jr={test:bT,parse:Dx,createTransformer:Mx,getAnimatableNone:PT},ET=new Set(["brightness","contrast","saturate","opacity"]);function jT(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=r.match(_h)||[];if(!o)return e;const s=r.replace(o,"");let l=ET.has(t)?1:0;return o!==r&&(l*=100),t+"("+l+s+")"}const AT=/\b([a-z-]*)\(.*?\)/gu,lf={...jr,getAnimatableNone:e=>{const t=e.match(AT);return t?t.map(jT).join(" "):e}},$T={...oh,color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,filter:lf,WebkitFilter:lf},Sh=e=>$T[e];function Rx(e,t){let r=Sh(e);return r!==lf&&(r=jr),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const DT=new Set(["auto","none","0"]);function MT(e,t,r){let o=0,s;for(;o<e.length&&!s;){const l=e[o];typeof l=="string"&&!DT.has(l)&&Ds(l).values.length&&(s=e[o]),o++}if(s&&r)for(const l of t)e[l]=Rx(r,s)}const Sg=e=>e===wo||e===le,kg=(e,t)=>parseFloat(e.split(", ")[t]),Tg=(e,t)=>(r,{transform:o})=>{if(o==="none"||!o)return 0;const s=o.match(/^matrix3d\((.+)\)$/u);if(s)return kg(s[1],t);{const l=o.match(/^matrix\((.+)\)$/u);return l?kg(l[1],e):0}},RT=new Set(["x","y","z"]),LT=xo.filter(e=>!RT.has(e));function OT(e){const t=[];return LT.forEach(r=>{const o=e.getValue(r);o!==void 0&&(t.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),t}const uo={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Tg(4,13),y:Tg(5,14)};uo.translateX=uo.x;uo.translateY=uo.y;const ii=new Set;let uf=!1,cf=!1;function Lx(){if(cf){const e=Array.from(ii).filter(o=>o.needsMeasurement),t=new Set(e.map(o=>o.element)),r=new Map;t.forEach(o=>{const s=OT(o);s.length&&(r.set(o,s),o.render())}),e.forEach(o=>o.measureInitialState()),t.forEach(o=>{o.render();const s=r.get(o);s&&s.forEach(([l,u])=>{var d;(d=o.getValue(l))===null||d===void 0||d.set(u)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}cf=!1,uf=!1,ii.forEach(e=>e.complete()),ii.clear()}function Ox(){ii.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(cf=!0)})}function FT(){Ox(),Lx()}class kh{constructor(t,r,o,s,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=o,this.motionValue=s,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ii.add(this),uf||(uf=!0,De.read(Ox),De.resolveKeyframes(Lx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:o,motionValue:s}=this;for(let l=0;l<t.length;l++)if(t[l]===null)if(l===0){const u=s==null?void 0:s.get(),d=t[t.length-1];if(u!==void 0)t[0]=u;else if(o&&r){const f=o.readValue(r,d);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=d),s&&u===void 0&&s.set(t[0])}else t[l]=t[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ii.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ii.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Fx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),zT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function IT(e){const t=zT.exec(e);if(!t)return[,];const[,r,o,s]=t;return[`--${r??o}`,s]}function zx(e,t,r=1){const[o,s]=IT(e);if(!o)return;const l=window.getComputedStyle(t).getPropertyValue(o);if(l){const u=l.trim();return Fx(u)?parseFloat(u):u}return ih(s)?zx(s,t,r+1):s}const Ix=e=>t=>t.test(e),NT={test:e=>e==="auto",parse:e=>e},Nx=[wo,le,jn,br,Ak,jk,NT],Cg=e=>Nx.find(Ix(e));class Vx extends kh{constructor(t,r,o,s,l){super(t,r,o,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let h=t[f];if(typeof h=="string"&&(h=h.trim(),ih(h))){const m=zx(h,r.current);m!==void 0&&(t[f]=m),f===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!yx.has(o)||t.length!==2)return;const[s,l]=t,u=Cg(s),d=Cg(l);if(u!==d)if(Sg(u)&&Sg(d))for(let f=0;f<t.length;f++){const h=t[f];typeof h=="string"&&(t[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,o=[];for(let s=0;s<t.length;s++)gT(t[s])&&o.push(s);o.length&&MT(t,o,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:o}=this;if(!t||!t.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=uo[o](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const s=r[r.length-1];s!==void 0&&t.getValue(o,s).jump(s,!1)}measureEndState(){var t;const{element:r,name:o,unresolvedKeyframes:s}=this;if(!r||!r.current)return;const l=r.getValue(o);l&&l.jump(this.measuredOrigin,!1);const u=s.length-1,d=s[u];s[u]=uo[o](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([f,h])=>{r.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Pg=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(jr.test(e)||e==="0")&&!e.startsWith("url("));function VT(e){const t=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}function BT(e,t,r,o){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=Pg(s,t),d=Pg(l,t);return!u||!d?!1:VT(e)||(r==="spring"||fh(r))&&o}const UT=e=>e!==null;function iu(e,{repeat:t,repeatType:r="loop"},o){const s=e.filter(UT),l=t&&r!=="loop"&&t%2===1?0:s.length-1;return!l||o===void 0?s[l]:o}const HT=40;class Bx{constructor({autoplay:t=!0,delay:r=0,type:o="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:u="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=An.now(),this.options={autoplay:t,delay:r,type:o,repeat:s,repeatDelay:l,repeatType:u,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>HT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&FT(),this._resolved}onKeyframesResolved(t,r){this.resolvedAt=An.now(),this.hasAttemptedResolve=!0;const{name:o,type:s,velocity:l,delay:u,onComplete:d,onUpdate:f,isGenerator:h}=this.options;if(!h&&!BT(t,o,s,l))if(u)this.options.duration=0;else{f&&f(iu(t,this.options,r)),d&&d(),this.resolveFinishedPromise();return}const m=this.initPlayback(t,r);m!==!1&&(this._resolved={keyframes:t,finalKeyframe:r,...m},this.onPostResolved())}onPostResolved(){}then(t,r){return this.currentFinishedPromise.then(t,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Ve=(e,t,r)=>e+(t-e)*r;function md(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function WT({hue:e,saturation:t,lightness:r,alpha:o}){e/=360,t/=100,r/=100;let s=0,l=0,u=0;if(!t)s=l=u=r;else{const d=r<.5?r*(1+t):r+t-r*t,f=2*r-d;s=md(f,d,e+1/3),l=md(f,d,e),u=md(f,d,e-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:o}}function Ml(e,t){return r=>r>0?t:e}const gd=(e,t,r)=>{const o=e*e,s=r*(t*t-o)+o;return s<0?0:Math.sqrt(s)},GT=[af,ei,Wi],YT=e=>GT.find(t=>t.test(e));function Eg(e){const t=YT(e);if(!t)return!1;let r=t.parse(e);return t===Wi&&(r=WT(r)),r}const jg=(e,t)=>{const r=Eg(e),o=Eg(t);if(!r||!o)return Ml(e,t);const s={...r};return l=>(s.red=gd(r.red,o.red,l),s.green=gd(r.green,o.green,l),s.blue=gd(r.blue,o.blue,l),s.alpha=Ve(r.alpha,o.alpha,l),ei.transform(s))},KT=(e,t)=>r=>t(e(r)),Hs=(...e)=>e.reduce(KT),df=new Set(["none","hidden"]);function XT(e,t){return df.has(e)?r=>r<=0?e:t:r=>r>=1?t:e}function JT(e,t){return r=>Ve(e,t,r)}function Th(e){return typeof e=="number"?JT:typeof e=="string"?ih(e)?Ml:vt.test(e)?jg:ZT:Array.isArray(e)?Ux:typeof e=="object"?vt.test(e)?jg:QT:Ml}function Ux(e,t){const r=[...e],o=r.length,s=e.map((l,u)=>Th(l)(l,t[u]));return l=>{for(let u=0;u<o;u++)r[u]=s[u](l);return r}}function QT(e,t){const r={...e,...t},o={};for(const s in r)e[s]!==void 0&&t[s]!==void 0&&(o[s]=Th(e[s])(e[s],t[s]));return s=>{for(const l in o)r[l]=o[l](s);return r}}function qT(e,t){var r;const o=[],s={color:0,var:0,number:0};for(let l=0;l<t.values.length;l++){const u=t.types[l],d=e.indexes[u][s[u]],f=(r=e.values[d])!==null&&r!==void 0?r:0;o[l]=f,s[u]++}return o}const ZT=(e,t)=>{const r=jr.createTransformer(t),o=Ds(e),s=Ds(t);return o.indexes.var.length===s.indexes.var.length&&o.indexes.color.length===s.indexes.color.length&&o.indexes.number.length>=s.indexes.number.length?df.has(e)&&!s.values.length||df.has(t)&&!o.values.length?XT(e,t):Hs(Ux(qT(o,s),s.values),r):Ml(e,t)};function Hx(e,t,r){return typeof e=="number"&&typeof t=="number"&&typeof r=="number"?Ve(e,t,r):Th(e)(e,t)}const eC=5;function Wx(e,t,r){const o=Math.max(t-eC,0);return vx(r-e(o),t-o)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ag=.001;function tC({duration:e=He.duration,bounce:t=He.bounce,velocity:r=He.velocity,mass:o=He.mass}){let s,l,u=1-t;u=Jn(He.minDamping,He.maxDamping,u),e=Jn(He.minDuration,He.maxDuration,Kn(e)),u<1?(s=h=>{const m=h*u,y=m*e,x=m-r,b=ff(h,u),S=Math.exp(-y);return Ag-x/b*S},l=h=>{const y=h*u*e,x=y*r+r,b=Math.pow(u,2)*Math.pow(h,2)*e,S=Math.exp(-y),_=ff(Math.pow(h,2),u);return(-s(h)+Ag>0?-1:1)*((x-b)*S)/_}):(s=h=>{const m=Math.exp(-h*e),y=(h-r)*e+1;return-.001+m*y},l=h=>{const m=Math.exp(-h*e),y=(r-h)*(e*e);return m*y});const d=5/e,f=rC(s,l,d);if(e=Yn(e),isNaN(f))return{stiffness:He.stiffness,damping:He.damping,duration:e};{const h=Math.pow(f,2)*o;return{stiffness:h,damping:u*2*Math.sqrt(o*h),duration:e}}}const nC=12;function rC(e,t,r){let o=r;for(let s=1;s<nC;s++)o=o-e(o)/t(o);return o}function ff(e,t){return e*Math.sqrt(1-t*t)}const iC=["duration","bounce"],oC=["stiffness","damping","mass"];function $g(e,t){return t.some(r=>e[r]!==void 0)}function sC(e){let t={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...e};if(!$g(e,oC)&&$g(e,iC))if(e.visualDuration){const r=e.visualDuration,o=2*Math.PI/(r*1.2),s=o*o,l=2*Jn(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:He.mass,stiffness:s,damping:l}}else{const r=tC(e);t={...t,...r,mass:He.mass},t.isResolvedFromDuration=!0}return t}function Gx(e=He.visualDuration,t=He.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:o,restDelta:s}=r;const l=r.keyframes[0],u=r.keyframes[r.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:h,mass:m,duration:y,velocity:x,isResolvedFromDuration:b}=sC({...r,velocity:-Kn(r.velocity||0)}),S=x||0,_=h/(2*Math.sqrt(f*m)),k=u-l,P=Kn(Math.sqrt(f/m)),j=Math.abs(k)<5;o||(o=j?He.restSpeed.granular:He.restSpeed.default),s||(s=j?He.restDelta.granular:He.restDelta.default);let D;if(_<1){const A=ff(P,_);D=F=>{const z=Math.exp(-_*P*F);return u-z*((S+_*P*k)/A*Math.sin(A*F)+k*Math.cos(A*F))}}else if(_===1)D=A=>u-Math.exp(-P*A)*(k+(S+P*k)*A);else{const A=P*Math.sqrt(_*_-1);D=F=>{const z=Math.exp(-_*P*F),N=Math.min(A*F,300);return u-z*((S+_*P*k)*Math.sinh(N)+A*k*Math.cosh(N))/A}}const R={calculatedDuration:b&&y||null,next:A=>{const F=D(A);if(b)d.done=A>=y;else{let z=0;_<1&&(z=A===0?Yn(S):Wx(D,A,F));const N=Math.abs(z)<=o,U=Math.abs(u-F)<=s;d.done=N&&U}return d.value=d.done?u:F,d},toString:()=>{const A=Math.min(cx(R),rf),F=dx(z=>R.next(A*z).value,A,30);return A+"ms "+F}};return R}function Dg({keyframes:e,velocity:t=0,power:r=.8,timeConstant:o=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:f,restDelta:h=.5,restSpeed:m}){const y=e[0],x={done:!1,value:y},b=N=>d!==void 0&&N<d||f!==void 0&&N>f,S=N=>d===void 0?f:f===void 0||Math.abs(d-N)<Math.abs(f-N)?d:f;let _=r*t;const k=y+_,P=u===void 0?k:u(k);P!==k&&(_=P-y);const j=N=>-_*Math.exp(-N/o),D=N=>P+j(N),R=N=>{const U=j(N),ie=D(N);x.done=Math.abs(U)<=h,x.value=x.done?P:ie};let A,F;const z=N=>{b(x.value)&&(A=N,F=Gx({keyframes:[x.value,S(x.value)],velocity:Wx(D,N,x.value),damping:s,stiffness:l,restDelta:h,restSpeed:m}))};return z(0),{calculatedDuration:null,next:N=>{let U=!1;return!F&&A===void 0&&(U=!0,R(N),z(N)),A!==void 0&&N>=A?F.next(N-A):(!U&&R(N),x)}}}const aC=Us(.42,0,1,1),lC=Us(0,0,.58,1),Yx=Us(.42,0,.58,1),uC=e=>Array.isArray(e)&&typeof e[0]!="number",cC={linear:Wt,easeIn:aC,easeInOut:Yx,easeOut:lC,circIn:wh,circInOut:Px,circOut:Cx,backIn:xh,backInOut:kx,backOut:Sx,anticipate:Tx},Mg=e=>{if(hh(e)){Hv(e.length===4);const[t,r,o,s]=e;return Us(t,r,o,s)}else if(typeof e=="string")return cC[e];return e};function dC(e,t,r){const o=[],s=r||Hx,l=e.length-1;for(let u=0;u<l;u++){let d=s(e[u],e[u+1]);if(t){const f=Array.isArray(t)?t[u]||Wt:t;d=Hs(f,d)}o.push(d)}return o}function Kx(e,t,{clamp:r=!0,ease:o,mixer:s}={}){const l=e.length;if(Hv(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const d=dC(t,o,s),f=d.length,h=m=>{if(u&&m<e[0])return t[0];let y=0;if(f>1)for(;y<e.length-2&&!(m<e[y+1]);y++);const x=so(e[y],e[y+1],m);return d[y](x)};return r?m=>h(Jn(e[0],e[l-1],m)):h}function fC(e,t){const r=e[e.length-1];for(let o=1;o<=t;o++){const s=so(0,t,o);e.push(Ve(r,1,s))}}function hC(e){const t=[0];return fC(t,e.length-1),t}function pC(e,t){return e.map(r=>r*t)}function mC(e,t){return e.map(()=>t||Yx).splice(0,e.length-1)}function Rl({duration:e=300,keyframes:t,times:r,ease:o="easeInOut"}){const s=uC(o)?o.map(Mg):Mg(o),l={done:!1,value:t[0]},u=pC(r&&r.length===t.length?r:hC(t),e),d=Kx(u,t,{ease:Array.isArray(s)?s:mC(t,s)});return{calculatedDuration:e,next:f=>(l.value=d(f),l.done=f>=e,l)}}const gC=e=>{const t=({timestamp:r})=>e(r);return{start:()=>De.update(t,!0),stop:()=>Xn(t),now:()=>ft.isProcessing?ft.timestamp:An.now()}},yC={decay:Dg,inertia:Dg,tween:Rl,keyframes:Rl,spring:Gx},vC=e=>e/100;class Ch extends Bx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:r,motionValue:o,element:s,keyframes:l}=this.options,u=(s==null?void 0:s.KeyframeResolver)||kh,d=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new u(l,d,r,o,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:r="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:l,velocity:u=0}=this.options,d=fh(r)?r:yC[r]||Rl;let f,h;d!==Rl&&typeof t[0]!="number"&&(f=Hs(vC,Hx(t[0],t[1])),t=[0,100]);const m=d({...this.options,keyframes:t});l==="mirror"&&(h=d({...this.options,keyframes:[...t].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=cx(m));const{calculatedDuration:y}=m,x=y+s,b=x*(o+1)-s;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:y,resolvedDuration:x,totalDuration:b}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,r=!1){const{resolved:o}=this;if(!o){const{keyframes:N}=this.options;return{done:!0,value:N[N.length-1]}}const{finalKeyframe:s,generator:l,mirroredGenerator:u,mapPercentToKeyframes:d,keyframes:f,calculatedDuration:h,totalDuration:m,resolvedDuration:y}=o;if(this.startTime===null)return l.next(0);const{delay:x,repeat:b,repeatType:S,repeatDelay:_,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-m/this.speed,this.startTime)),r?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const P=this.currentTime-x*(this.speed>=0?1:-1),j=this.speed>=0?P<0:P>m;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let D=this.currentTime,R=l;if(b){const N=Math.min(this.currentTime,m)/y;let U=Math.floor(N),ie=N%1;!ie&&N>=1&&(ie=1),ie===1&&U--,U=Math.min(U,b+1),!!(U%2)&&(S==="reverse"?(ie=1-ie,_&&(ie-=_/y)):S==="mirror"&&(R=u)),D=Jn(0,1,ie)*y}const A=j?{done:!1,value:f[0]}:R.next(D);d&&(A.value=d(A.value));let{done:F}=A;!j&&h!==null&&(F=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return z&&s!==void 0&&(A.value=iu(f,this.options,s)),k&&k(A.value),z&&this.finish(),A}get duration(){const{resolved:t}=this;return t?Kn(t.calculatedDuration):0}get time(){return Kn(this.currentTime)}set time(t){t=Yn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=Kn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=gC,onPlay:r,startTime:o}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),r&&r();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const xC=new Set(["opacity","clipPath","filter","transform"]);function wC(e,t,r,{delay:o=0,duration:s=300,repeat:l=0,repeatType:u="loop",ease:d="easeInOut",times:f}={}){const h={[t]:r};f&&(h.offset=f);const m=hx(d,s);return Array.isArray(m)&&(h.easing=m),e.animate(h,{delay:o,duration:s,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const _C=Qf(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ll=10,bC=2e4;function SC(e){return fh(e.type)||e.type==="spring"||!fx(e.ease)}function kC(e,t){const r=new Ch({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:e[0]};const s=[];let l=0;for(;!o.done&&l<bC;)o=r.sample(l),s.push(o.value),l+=Ll;return{times:void 0,keyframes:s,duration:l-Ll,ease:"linear"}}const Xx={anticipate:Tx,backInOut:kx,circInOut:Px};function TC(e){return e in Xx}class Rg extends Bx{constructor(t){super(t);const{name:r,motionValue:o,element:s,keyframes:l}=this.options;this.resolver=new Vx(l,(u,d)=>this.onKeyframesResolved(u,d),r,o,s),this.resolver.scheduleResolve()}initPlayback(t,r){let{duration:o=300,times:s,ease:l,type:u,motionValue:d,name:f,startTime:h}=this.options;if(!d.owner||!d.owner.current)return!1;if(typeof l=="string"&&Dl()&&TC(l)&&(l=Xx[l]),SC(this.options)){const{onComplete:y,onUpdate:x,motionValue:b,element:S,..._}=this.options,k=kC(t,_);t=k.keyframes,t.length===1&&(t[1]=t[0]),o=k.duration,s=k.times,l=k.ease,u="keyframes"}const m=wC(d.owner.current,f,t,{...this.options,duration:o,times:s,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(yg(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:y}=this.options;d.set(iu(t,this.options,r)),y&&y(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:o,times:s,type:u,ease:l,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:r}=t;return Kn(r)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:r}=t;return Kn(r.currentTime||0)}set time(t){const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.currentTime=Yn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:r}=t;return r.playbackRate}set speed(t){const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:r}=t;return r.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:r}=t;return r.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:r}=this;if(!r)return Wt;const{animation:o}=r;yg(o,t)}return Wt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:r,keyframes:o,duration:s,type:l,ease:u,times:d}=t;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:y,element:x,...b}=this.options,S=new Ch({...b,keyframes:o,duration:s,type:l,ease:u,times:d,isGenerator:!0}),_=Yn(this.time);h.setWithVelocity(S.sample(_-Ll).value,S.sample(_).value,Ll)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:r,name:o,repeatDelay:s,repeatType:l,damping:u,type:d}=t;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=r.owner.getProps();return _C()&&o&&xC.has(o)&&!f&&!h&&!s&&l!=="mirror"&&u!==0&&d!=="inertia"}}const CC={type:"spring",stiffness:500,damping:25,restSpeed:10},PC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),EC={type:"keyframes",duration:.8},jC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AC=(e,{keyframes:t})=>t.length>2?EC:fi.has(e)?e.startsWith("scale")?PC(t[1]):CC:jC;function $C({when:e,delay:t,delayChildren:r,staggerChildren:o,staggerDirection:s,repeat:l,repeatType:u,repeatDelay:d,from:f,elapsed:h,...m}){return!!Object.keys(m).length}const Ph=(e,t,r,o={},s,l)=>u=>{const d=dh(o,e)||{},f=d.delay||o.delay||0;let{elapsed:h=0}=o;h=h-Yn(f);let m={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...d,delay:-h,onUpdate:x=>{t.set(x),d.onUpdate&&d.onUpdate(x)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:e,motionValue:t,element:l?void 0:s};$C(d)||(m={...m,...AC(e,m)}),m.duration&&(m.duration=Yn(m.duration)),m.repeatDelay&&(m.repeatDelay=Yn(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(y=!0)),y&&!l&&t.get()!==void 0){const x=iu(m.keyframes,d);if(x!==void 0)return De.update(()=>{m.onUpdate(x),m.onComplete()}),new qk([])}return!l&&Rg.supports(m)?new Rg(m):new Ch(m)};function DC({protectedKeys:e,needsAnimating:t},r){const o=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,o}function Jx(e,t,{delay:r=0,transitionOverride:o,type:s}={}){var l;let{transition:u=e.getDefaultTransition(),transitionEnd:d,...f}=t;o&&(u=o);const h=[],m=s&&e.animationState&&e.animationState.getState()[s];for(const y in f){const x=e.getValue(y,(l=e.latestValues[y])!==null&&l!==void 0?l:null),b=f[y];if(b===void 0||m&&DC(m,y))continue;const S={delay:r,...dh(u||{},y)};let _=!1;if(window.MotionHandoffAnimation){const P=xx(e);if(P){const j=window.MotionHandoffAnimation(P,y,De);j!==null&&(S.startTime=j,_=!0)}}sf(e,y),x.start(Ph(y,x,b,e.shouldReduceMotion&&yx.has(y)?{type:!1}:S,e,_));const k=x.animation;k&&h.push(k)}return d&&Promise.all(h).then(()=>{De.update(()=>{d&&vh(e,d)})}),h}function hf(e,t,r={}){var o;const s=ru(e,t,r.type==="exit"?(o=e.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(l=r.transitionOverride);const u=s?()=>Promise.all(Jx(e,s,r)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:x}=l;return MC(e,t,m+h,y,x,r)}:()=>Promise.resolve(),{when:f}=l;if(f){const[h,m]=f==="beforeChildren"?[u,d]:[d,u];return h().then(()=>m())}else return Promise.all([u(),d(r.delay)])}function MC(e,t,r=0,o=0,s=1,l){const u=[],d=(e.variantChildren.size-1)*o,f=s===1?(h=0)=>h*o:(h=0)=>d-h*o;return Array.from(e.variantChildren).sort(RC).forEach((h,m)=>{h.notify("AnimationStart",t),u.push(hf(h,t,{...l,delay:r+f(m)}).then(()=>h.notify("AnimationComplete",t)))}),Promise.all(u)}function RC(e,t){return e.sortNodePosition(t)}function Qx(e,t,r={}){e.notify("AnimationStart",t);let o;if(Array.isArray(t)){const s=t.map(l=>hf(e,l,r));o=Promise.all(s)}else if(typeof t=="string")o=hf(e,t,r);else{const s=typeof t=="function"?ru(e,t,r.custom):t;o=Promise.all(Jx(e,s,r))}return o.then(()=>{e.notify("AnimationComplete",t)})}const LC=Zf.length;function qx(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?qx(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const t={};for(let r=0;r<LC;r++){const o=Zf[r],s=e.props[o];(As(s)||s===!1)&&(t[o]=s)}return t}const OC=[...qf].reverse(),FC=qf.length;function zC(e){return t=>Promise.all(t.map(({animation:r,options:o})=>Qx(e,r,o)))}function IC(e){let t=zC(e),r=Lg(),o=!0;const s=f=>(h,m)=>{var y;const x=ru(e,m,f==="exit"?(y=e.presenceContext)===null||y===void 0?void 0:y.custom:void 0);if(x){const{transition:b,transitionEnd:S,..._}=x;h={...h,..._,...S}}return h};function l(f){t=f(e)}function u(f){const{props:h}=e,m=qx(e.parent)||{},y=[],x=new Set;let b={},S=1/0;for(let k=0;k<FC;k++){const P=OC[k],j=r[P],D=h[P]!==void 0?h[P]:m[P],R=As(D),A=P===f?j.isActive:null;A===!1&&(S=k);let F=D===m[P]&&D!==h[P]&&R;if(F&&o&&e.manuallyAnimateOnMount&&(F=!1),j.protectedKeys={...b},!j.isActive&&A===null||!D&&!j.prevProp||tu(D)||typeof D=="boolean")continue;const z=NC(j.prevProp,D);let N=z||P===f&&j.isActive&&!F&&R||k>S&&R,U=!1;const ie=Array.isArray(D)?D:[D];let pe=ie.reduce(s(P),{});A===!1&&(pe={});const{prevResolvedValues:he={}}=j,fe={...he,...pe},_e=ne=>{N=!0,x.has(ne)&&(U=!0,x.delete(ne)),j.needsAnimating[ne]=!0;const G=e.getValue(ne);G&&(G.liveStyle=!1)};for(const ne in fe){const G=pe[ne],q=he[ne];if(b.hasOwnProperty(ne))continue;let J=!1;nf(G)&&nf(q)?J=!ux(G,q):J=G!==q,J?G!=null?_e(ne):x.add(ne):G!==void 0&&x.has(ne)?_e(ne):j.protectedKeys[ne]=!0}j.prevProp=D,j.prevResolvedValues=pe,j.isActive&&(b={...b,...pe}),o&&e.blockInitialAnimation&&(N=!1),N&&(!(F&&z)||U)&&y.push(...ie.map(ne=>({animation:ne,options:{type:P}})))}if(x.size){const k={};x.forEach(P=>{const j=e.getBaseTarget(P),D=e.getValue(P);D&&(D.liveStyle=!0),k[P]=j??null}),y.push({animation:k})}let _=!!y.length;return o&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(_=!1),o=!1,_?t(y):Promise.resolve()}function d(f,h){var m;if(r[f].isActive===h)return Promise.resolve();(m=e.variantChildren)===null||m===void 0||m.forEach(x=>{var b;return(b=x.animationState)===null||b===void 0?void 0:b.setActive(f,h)}),r[f].isActive=h;const y=u(f);for(const x in r)r[x].protectedKeys={};return y}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>r,reset:()=>{r=Lg(),o=!0}}}function NC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!ux(t,e):!1}function Yr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lg(){return{animate:Yr(!0),whileInView:Yr(),whileHover:Yr(),whileTap:Yr(),whileDrag:Yr(),whileFocus:Yr(),exit:Yr()}}class Dr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class VC extends Dr{constructor(t){super(t),t.animationState||(t.animationState=IC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();tu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let BC=0;class UC extends Dr{constructor(){super(...arguments),this.id=BC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const s=this.node.animationState.setActive("exit",!t);r&&!t&&s.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const HC={animation:{Feature:VC},exit:{Feature:UC}};function Ms(e,t,r,o={passive:!0}){return e.addEventListener(t,r,o),()=>e.removeEventListener(t,r)}function Ws(e){return{point:{x:e.pageX,y:e.pageY}}}const WC=e=>t=>ph(t)&&e(t,Ws(t));function _s(e,t,r,o){return Ms(e,t,WC(r),o)}const Og=(e,t)=>Math.abs(e-t);function GC(e,t){const r=Og(e.x,t.x),o=Og(e.y,t.y);return Math.sqrt(r**2+o**2)}class Zx{constructor(t,r,{transformPagePoint:o,contextWindow:s,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=vd(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,b=GC(y.offset,{x:0,y:0})>=3;if(!x&&!b)return;const{point:S}=y,{timestamp:_}=ft;this.history.push({...S,timestamp:_});const{onStart:k,onMove:P}=this.handlers;x||(k&&k(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=yd(x,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:b,onSessionEnd:S,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=vd(y.type==="pointercancel"?this.lastMoveEventInfo:yd(x,this.transformPagePoint),this.history);this.startEvent&&b&&b(y,k),S&&S(y,k)},!ph(t))return;this.dragSnapToOrigin=l,this.handlers=r,this.transformPagePoint=o,this.contextWindow=s||window;const u=Ws(t),d=yd(u,this.transformPagePoint),{point:f}=d,{timestamp:h}=ft;this.history=[{...f,timestamp:h}];const{onSessionStart:m}=r;m&&m(t,vd(d,this.history)),this.removeListeners=Hs(_s(this.contextWindow,"pointermove",this.handlePointerMove),_s(this.contextWindow,"pointerup",this.handlePointerUp),_s(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Xn(this.updatePoint)}}function yd(e,t){return t?{point:t(e.point)}:e}function Fg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function vd({point:e},t){return{point:e,delta:Fg(e,e1(t)),offset:Fg(e,YC(t)),velocity:KC(t,.1)}}function YC(e){return e[0]}function e1(e){return e[e.length-1]}function KC(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,o=null;const s=e1(e);for(;r>=0&&(o=e[r],!(s.timestamp-o.timestamp>Yn(t)));)r--;if(!o)return{x:0,y:0};const l=Kn(s.timestamp-o.timestamp);if(l===0)return{x:0,y:0};const u={x:(s.x-o.x)/l,y:(s.y-o.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const t1=1e-4,XC=1-t1,JC=1+t1,n1=.01,QC=0-n1,qC=0+n1;function Yt(e){return e.max-e.min}function ZC(e,t,r){return Math.abs(e-t)<=r}function zg(e,t,r,o=.5){e.origin=o,e.originPoint=Ve(t.min,t.max,e.origin),e.scale=Yt(r)/Yt(t),e.translate=Ve(r.min,r.max,e.origin)-e.originPoint,(e.scale>=XC&&e.scale<=JC||isNaN(e.scale))&&(e.scale=1),(e.translate>=QC&&e.translate<=qC||isNaN(e.translate))&&(e.translate=0)}function bs(e,t,r,o){zg(e.x,t.x,r.x,o?o.originX:void 0),zg(e.y,t.y,r.y,o?o.originY:void 0)}function Ig(e,t,r){e.min=r.min+t.min,e.max=e.min+Yt(t)}function e5(e,t,r){Ig(e.x,t.x,r.x),Ig(e.y,t.y,r.y)}function Ng(e,t,r){e.min=t.min-r.min,e.max=e.min+Yt(t)}function Ss(e,t,r){Ng(e.x,t.x,r.x),Ng(e.y,t.y,r.y)}function t5(e,{min:t,max:r},o){return t!==void 0&&e<t?e=o?Ve(t,e,o.min):Math.max(e,t):r!==void 0&&e>r&&(e=o?Ve(r,e,o.max):Math.min(e,r)),e}function Vg(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function n5(e,{top:t,left:r,bottom:o,right:s}){return{x:Vg(e.x,r,s),y:Vg(e.y,t,o)}}function Bg(e,t){let r=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,o]=[o,r]),{min:r,max:o}}function r5(e,t){return{x:Bg(e.x,t.x),y:Bg(e.y,t.y)}}function i5(e,t){let r=.5;const o=Yt(e),s=Yt(t);return s>o?r=so(t.min,t.max-o,e.min):o>s&&(r=so(e.min,e.max-s,t.min)),Jn(0,1,r)}function o5(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const pf=.35;function s5(e=pf){return e===!1?e=0:e===!0&&(e=pf),{x:Ug(e,"left","right"),y:Ug(e,"top","bottom")}}function Ug(e,t,r){return{min:Hg(e,t),max:Hg(e,r)}}function Hg(e,t){return typeof e=="number"?e:e[t]||0}const Wg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Gi=()=>({x:Wg(),y:Wg()}),Gg=()=>({min:0,max:0}),Xe=()=>({x:Gg(),y:Gg()});function rn(e){return[e("x"),e("y")]}function r1({top:e,left:t,right:r,bottom:o}){return{x:{min:t,max:r},y:{min:e,max:o}}}function a5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function l5(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),o=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function xd(e){return e===void 0||e===1}function mf({scale:e,scaleX:t,scaleY:r}){return!xd(e)||!xd(t)||!xd(r)}function Jr(e){return mf(e)||i1(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function i1(e){return Yg(e.x)||Yg(e.y)}function Yg(e){return e&&e!=="0%"}function Ol(e,t,r){const o=e-r,s=t*o;return r+s}function Kg(e,t,r,o,s){return s!==void 0&&(e=Ol(e,s,o)),Ol(e,r,o)+t}function gf(e,t=0,r=1,o,s){e.min=Kg(e.min,t,r,o,s),e.max=Kg(e.max,t,r,o,s)}function o1(e,{x:t,y:r}){gf(e.x,t.translate,t.scale,t.originPoint),gf(e.y,r.translate,r.scale,r.originPoint)}const Xg=.999999999999,Jg=1.0000000000001;function u5(e,t,r,o=!1){const s=r.length;if(!s)return;t.x=t.y=1;let l,u;for(let d=0;d<s;d++){l=r[d],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(o&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Ki(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,o1(e,u)),o&&Jr(l.latestValues)&&Ki(e,l.latestValues))}t.x<Jg&&t.x>Xg&&(t.x=1),t.y<Jg&&t.y>Xg&&(t.y=1)}function Yi(e,t){e.min=e.min+t,e.max=e.max+t}function Qg(e,t,r,o,s=.5){const l=Ve(e.min,e.max,s);gf(e,t,r,l,o)}function Ki(e,t){Qg(e.x,t.x,t.scaleX,t.scale,t.originX),Qg(e.y,t.y,t.scaleY,t.scale,t.originY)}function s1(e,t){return r1(l5(e.getBoundingClientRect(),t))}function c5(e,t,r){const o=s1(e,r),{scroll:s}=t;return s&&(Yi(o.x,s.offset.x),Yi(o.y,s.offset.y)),o}const a1=({current:e})=>e?e.ownerDocument.defaultView:null,d5=new WeakMap;class f5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Xe(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const s=m=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Ws(m).point)},l=(m,y)=>{const{drag:x,dragPropagation:b,onDragStart:S}=this.getProps();if(x&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=aT(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rn(k=>{let P=this.getAxisMotionValue(k).get()||0;if(jn.test(P)){const{projection:j}=this.visualElement;if(j&&j.layout){const D=j.layout.layoutBox[k];D&&(P=Yt(D)*(parseFloat(P)/100))}}this.originPoint[k]=P}),S&&De.postRender(()=>S(m,y)),sf(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},u=(m,y)=>{const{dragPropagation:x,dragDirectionLock:b,onDirectionLock:S,onDrag:_}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:k}=y;if(b&&this.currentDirection===null){this.currentDirection=h5(k),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",y.point,k),this.updateAxis("y",y.point,k),this.visualElement.render(),_&&_(m,y)},d=(m,y)=>this.stop(m,y),f=()=>rn(m=>{var y;return this.getAnimationState(m)==="paused"&&((y=this.getAxisMotionValue(m).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Zx(t,{onSessionStart:s,onStart:l,onMove:u,onSessionEnd:d,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:a1(this.visualElement)})}stop(t,r){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:s}=r;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&De.postRender(()=>l(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,o){const{drag:s}=this.getProps();if(!o||!ll(t,s,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(u=t5(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:o}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,l=this.constraints;r&&Hi(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&s?this.constraints=n5(s.layoutBox,r):this.constraints=!1,this.elastic=s5(o),l!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&rn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=o5(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Hi(t))return!1;const o=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=c5(o,s.root,this.visualElement.getTransformPagePoint());let u=r5(s.layout.layoutBox,l);if(r){const d=r(a5(u));this.hasMutatedConstraints=!!d,d&&(u=r1(d))}return u}startAnimation(t){const{drag:r,dragMomentum:o,dragElastic:s,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},h=rn(m=>{if(!ll(m,r,this.currentDirection))return;let y=f&&f[m]||{};u&&(y={min:0,max:0});const x=s?200:1e6,b=s?40:1e7,S={type:"inertia",velocity:o?t[m]:0,bounceStiffness:x,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(m,S)});return Promise.all(h).then(d)}startAxisValueAnimation(t,r){const o=this.getAxisMotionValue(t);return sf(this.visualElement,t),o.start(Ph(t,o,0,r,this.visualElement,!1))}stopAnimation(){rn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){rn(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,o=this.visualElement.getProps(),s=o[r];return s||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){rn(r=>{const{drag:o}=this.getProps();if(!ll(r,o,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(r);if(s&&s.layout){const{min:u,max:d}=s.layout.layoutBox[r];l.set(t[r]-Ve(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Hi(r)||!o||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};rn(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();s[u]=i5({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),rn(u=>{if(!ll(u,t,null))return;const d=this.getAxisMotionValue(u),{min:f,max:h}=this.constraints[u];d.set(Ve(f,h,s[u]))})}addListeners(){if(!this.visualElement.current)return;d5.set(this.visualElement,this);const t=this.visualElement.current,r=_s(t,"pointerdown",f=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(f)}),o=()=>{const{dragConstraints:f}=this.getProps();Hi(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,l=s.addEventListener("measure",o);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),De.read(o);const u=Ms(window,"resize",()=>this.scalePositionWithinConstraints()),d=s.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(rn(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=f[m].translate,y.set(y.get()+f[m].translate))}),this.visualElement.render())});return()=>{u(),r(),l(),d&&d()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:u=pf,dragMomentum:d=!0}=t;return{...t,drag:r,dragDirectionLock:o,dragPropagation:s,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function ll(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function h5(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class p5 extends Dr{constructor(t){super(t),this.removeGroupControls=Wt,this.removeListeners=Wt,this.controls=new f5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wt}unmount(){this.removeGroupControls(),this.removeListeners()}}const qg=e=>(t,r)=>{e&&De.postRender(()=>e(t,r))};class m5 extends Dr{constructor(){super(...arguments),this.removePointerDownListener=Wt}onPointerDown(t){this.session=new Zx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:a1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:o,onPanEnd:s}=this.node.getProps();return{onSessionStart:qg(t),onStart:qg(r),onMove:o,onEnd:(l,u)=>{delete this.session,s&&De.postRender(()=>s(l,u))}}}mount(){this.removePointerDownListener=_s(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const as={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(le.test(e))e=parseFloat(e);else return e;const r=Zg(e,t.target.x),o=Zg(e,t.target.y);return`${r}% ${o}%`}},g5={correct:(e,{treeScale:t,projectionDelta:r})=>{const o=e,s=jr.parse(e);if(s.length>5)return o;const l=jr.createTransformer(e),u=typeof s[0]!="number"?1:0,d=r.x.scale*t.x,f=r.y.scale*t.y;s[0+u]/=d,s[1+u]/=f;const h=Ve(d,f,.5);return typeof s[2+u]=="number"&&(s[2+u]/=h),typeof s[3+u]=="number"&&(s[3+u]/=h),l(s)}};class y5 extends V.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:o,layoutId:s}=this.props,{projection:l}=t;Nk(v5),l&&(r.group&&r.group.add(l),o&&o.register&&s&&o.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),wl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:o,drag:s,isPresent:l}=this.props,u=o.projection;return u&&(u.isPresent=l,s||t.layoutDependency!==r||r===void 0?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||De.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),th.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(s),o&&o.deregister&&o.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function l1(e){const[t,r]=Uv(),o=V.useContext(Kf);return v.jsx(y5,{...e,layoutGroup:o,switchLayoutGroup:V.useContext(Jv),isPresent:t,safeToRemove:r})}const v5={borderRadius:{...as,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:as,borderTopRightRadius:as,borderBottomLeftRadius:as,borderBottomRightRadius:as,boxShadow:g5};function x5(e,t,r){const o=wt(e)?e:lo(e);return o.start(Ph("",o,t,r)),o.animation}function w5(e){return e instanceof SVGElement&&e.tagName!=="svg"}const _5=(e,t)=>e.depth-t.depth;class b5{constructor(){this.children=[],this.isDirty=!1}add(t){mh(this.children,t),this.isDirty=!0}remove(t){gh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(_5),this.isDirty=!1,this.children.forEach(t)}}function S5(e,t){const r=An.now(),o=({timestamp:s})=>{const l=s-r;l>=t&&(Xn(o),e(l-t))};return De.read(o,!0),()=>Xn(o)}const u1=["TopLeft","TopRight","BottomLeft","BottomRight"],k5=u1.length,ey=e=>typeof e=="string"?parseFloat(e):e,ty=e=>typeof e=="number"||le.test(e);function T5(e,t,r,o,s,l){s?(e.opacity=Ve(0,r.opacity!==void 0?r.opacity:1,C5(o)),e.opacityExit=Ve(t.opacity!==void 0?t.opacity:1,0,P5(o))):l&&(e.opacity=Ve(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,o));for(let u=0;u<k5;u++){const d=`border${u1[u]}Radius`;let f=ny(t,d),h=ny(r,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||ty(f)===ty(h)?(e[d]=Math.max(Ve(ey(f),ey(h),o),0),(jn.test(h)||jn.test(f))&&(e[d]+="%")):e[d]=h}(t.rotate||r.rotate)&&(e.rotate=Ve(t.rotate||0,r.rotate||0,o))}function ny(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const C5=c1(0,.5,Cx),P5=c1(.5,.95,Wt);function c1(e,t,r){return o=>o<e?0:o>t?1:r(so(e,t,o))}function ry(e,t){e.min=t.min,e.max=t.max}function nn(e,t){ry(e.x,t.x),ry(e.y,t.y)}function iy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function oy(e,t,r,o,s){return e-=t,e=Ol(e,1/r,o),s!==void 0&&(e=Ol(e,1/s,o)),e}function E5(e,t=0,r=1,o=.5,s,l=e,u=e){if(jn.test(t)&&(t=parseFloat(t),t=Ve(u.min,u.max,t/100)-u.min),typeof t!="number")return;let d=Ve(l.min,l.max,o);e===l&&(d-=t),e.min=oy(e.min,t,r,d,s),e.max=oy(e.max,t,r,d,s)}function sy(e,t,[r,o,s],l,u){E5(e,t[r],t[o],t[s],t.scale,l,u)}const j5=["x","scaleX","originX"],A5=["y","scaleY","originY"];function ay(e,t,r,o){sy(e.x,t,j5,r?r.x:void 0,o?o.x:void 0),sy(e.y,t,A5,r?r.y:void 0,o?o.y:void 0)}function ly(e){return e.translate===0&&e.scale===1}function d1(e){return ly(e.x)&&ly(e.y)}function uy(e,t){return e.min===t.min&&e.max===t.max}function $5(e,t){return uy(e.x,t.x)&&uy(e.y,t.y)}function cy(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function f1(e,t){return cy(e.x,t.x)&&cy(e.y,t.y)}function dy(e){return Yt(e.x)/Yt(e.y)}function fy(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class D5{constructor(){this.members=[]}add(t){mh(this.members,t),t.scheduleRender()}remove(t){if(gh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(s=>t===s);if(r===0)return!1;let o;for(let s=r;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1){o=l;break}}return o?(this.promote(o),!0):!1}promote(t,r){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,r&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:o}=t;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function M5(e,t,r){let o="";const s=e.x.translate/t.x,l=e.y.translate/t.y,u=(r==null?void 0:r.z)||0;if((s||l||u)&&(o=`translate3d(${s}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:h,rotate:m,rotateX:y,rotateY:x,skewX:b,skewY:S}=r;h&&(o=`perspective(${h}px) ${o}`),m&&(o+=`rotate(${m}deg) `),y&&(o+=`rotateX(${y}deg) `),x&&(o+=`rotateY(${x}deg) `),b&&(o+=`skewX(${b}deg) `),S&&(o+=`skewY(${S}deg) `)}const d=e.x.scale*t.x,f=e.y.scale*t.y;return(d!==1||f!==1)&&(o+=`scale(${d}, ${f})`),o||"none"}const Qr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ms=typeof window<"u"&&window.MotionDebug!==void 0,wd=["","X","Y","Z"],R5={visibility:"hidden"},hy=1e3;let L5=0;function _d(e,t,r,o){const{latestValues:s}=t;s[e]&&(r[e]=s[e],t.setStaticValue(e,0),o&&(o[e]=0))}function h1(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const r=xx(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:s,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",De,!(s||l))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&h1(o)}function p1({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:o,resetTransform:s}){return class{constructor(u={},d=t==null?void 0:t()){this.id=L5++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ms&&(Qr.totalNodes=Qr.resolvedTargetDeltas=Qr.recalculatedProjection=0),this.nodes.forEach(z5),this.nodes.forEach(U5),this.nodes.forEach(H5),this.nodes.forEach(I5),ms&&window.MotionDebug.record(Qr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new b5)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new yh),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const f=this.eventHandlers.get(u);f&&f.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=w5(u),this.instance=u;const{layoutId:f,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(h||f)&&(this.isLayoutDirty=!0),e){let y;const x=()=>this.root.updateBlockedByResize=!1;e(u,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=S5(x,250),wl.hasAnimatedSinceResize&&(wl.hasAnimatedSinceResize=!1,this.nodes.forEach(my))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&m&&(f||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeTargetChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||m.getDefaultTransition()||X5,{onLayoutAnimationStart:k,onLayoutAnimationComplete:P}=m.getProps(),j=!this.targetLayout||!f1(this.targetLayout,S)||b,D=!x&&b;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||D||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,D);const R={...dh(_,"layout"),onPlay:k,onComplete:P};(m.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else x||my(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Xn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(W5),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&h1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(py);return}this.isUpdating||this.nodes.forEach(V5),this.isUpdating=!1,this.nodes.forEach(B5),this.nodes.forEach(O5),this.nodes.forEach(F5),this.clearAllSnapshots();const d=An.now();ft.delta=Jn(0,1e3/60,d-ft.timestamp),ft.timestamp=d,ft.isProcessing=!0,fd.update.process(ft),fd.preRender.process(ft),fd.render.process(ft),ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,th.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(N5),this.sharedNodes.forEach(G5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Xe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d){const f=o(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!d1(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(d||Jr(this.latestValues)||m)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return u&&(f=this.removeTransform(f)),J5(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:d}=this.options;if(!d)return Xe();const f=d.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(Q5))){const{scroll:m}=this.root;m&&(Yi(f.x,m.offset.x),Yi(f.y,m.offset.y))}return f}removeElementScroll(u){var d;const f=Xe();if(nn(f,u),!((d=this.scroll)===null||d===void 0)&&d.wasRoot)return f;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:y,options:x}=m;m!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&nn(f,u),Yi(f.x,y.offset.x),Yi(f.y,y.offset.y))}return f}applyTransform(u,d=!1){const f=Xe();nn(f,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!d&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Ki(f,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Jr(m.latestValues)&&Ki(f,m.latestValues)}return Jr(this.latestValues)&&Ki(f,this.latestValues),f}removeTransform(u){const d=Xe();nn(d,u);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!Jr(h.latestValues))continue;mf(h.latestValues)&&h.updateSnapshot();const m=Xe(),y=h.measurePageBox();nn(m,y),ay(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return Jr(this.latestValues)&&ay(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var d;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=ft.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),Ss(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Xe(),this.targetWithTransforms=Xe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),e5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nn(this.target,this.layout.layoutBox),o1(this.target,this.targetDelta)):nn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xe(),this.relativeTargetOrigin=Xe(),Ss(this.relativeTargetOrigin,this.target,b.target),nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ms&&Qr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||mf(this.parent.latestValues)||i1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const d=this.getLead(),f=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ft.timestamp&&(h=!1),h)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;nn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;u5(this.layoutCorrected,this.treeScale,this.path,f),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Xe());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(iy(this.prevProjectionDelta.x,this.projectionDelta.x),iy(this.prevProjectionDelta.y,this.projectionDelta.y)),bs(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!fy(this.projectionDelta.x,this.prevProjectionDelta.x)||!fy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S)),ms&&Qr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)===null||d===void 0||d.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Gi(),this.projectionDelta=Gi(),this.projectionDeltaWithTransform=Gi()}setAnimationOrigin(u,d=!1){const f=this.snapshot,h=f?f.latestValues:{},m={...this.latestValues},y=Gi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const x=Xe(),b=f?f.source:void 0,S=this.layout?this.layout.source:void 0,_=b!==S,k=this.getStack(),P=!k||k.members.length<=1,j=!!(_&&!P&&this.options.crossfade===!0&&!this.path.some(K5));this.animationProgress=0;let D;this.mixTargetDelta=R=>{const A=R/1e3;gy(y.x,u.x,A),gy(y.y,u.y,A),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ss(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Y5(this.relativeTarget,this.relativeTargetOrigin,x,A),D&&$5(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Xe()),nn(D,this.relativeTarget)),_&&(this.animationValues=m,T5(m,h,this.latestValues,A,j,P)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Xn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{wl.hasAnimatedSinceResize=!0,this.currentAnimation=x5(0,hy,{...u,onUpdate:d=>{this.mixTargetDelta(d),u.onUpdate&&u.onUpdate(d)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:f,layout:h,latestValues:m}=u;if(!(!d||!f||!h)){if(this!==u&&this.layout&&h&&m1(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||Xe();const y=Yt(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+y;const x=Yt(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+x}nn(d,f),Ki(d,m),bs(this.projectionDeltaWithTransform,this.layoutCorrected,d,m)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new D5),this.sharedNodes.get(u).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:d}=this.options;return d?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:d}=this.options;return d?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const h={};f.z&&_d("z",u,h,this.animationValues);for(let m=0;m<wd.length;m++)_d(`rotate${wd[m]}`,u,h,this.animationValues),_d(`skew${wd[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var d,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return R5;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=vl(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=vl(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(_.transform=m?m({},""):"none",this.hasProjected=!1),_}const x=y.animationValues||y.latestValues;this.applyTransformsToTarget(),h.transform=M5(this.projectionDeltaWithTransform,this.treeScale,x),m&&(h.transform=m(x,h.transform));const{x:b,y:S}=this.projectionDelta;h.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,y.animationValues?h.opacity=y===this?(f=(d=x.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:h.opacity=y===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const _ in $l){if(x[_]===void 0)continue;const{correct:k,applyTo:P}=$l[_],j=h.transform==="none"?x[_]:k(x[_],y);if(P){const D=P.length;for(let R=0;R<D;R++)h[P[R]]=j}else h[_]=j}return this.options.layoutId&&(h.pointerEvents=y===this?vl(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(py),this.root.sharedNodes.clear()}}}function O5(e){e.updateLayout()}function F5(e){var t;const r=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:s}=e.layout,{animationType:l}=e.options,u=r.source!==e.layout.source;l==="size"?rn(y=>{const x=u?r.measuredBox[y]:r.layoutBox[y],b=Yt(x);x.min=o[y].min,x.max=x.min+b}):m1(l,r.layoutBox,o)&&rn(y=>{const x=u?r.measuredBox[y]:r.layoutBox[y],b=Yt(o[y]);x.max=x.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+b)});const d=Gi();bs(d,o,r.layoutBox);const f=Gi();u?bs(f,e.applyTransform(s,!0),r.measuredBox):bs(f,o,r.layoutBox);const h=!d1(d);let m=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:b}=y;if(x&&b){const S=Xe();Ss(S,r.layoutBox,x.layoutBox);const _=Xe();Ss(_,o,b.layoutBox),f1(S,_)||(m=!0),y.options.layoutRoot&&(e.relativeTarget=_,e.relativeTargetOrigin=S,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:r,delta:f,layoutDelta:d,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function z5(e){ms&&Qr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function I5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function N5(e){e.clearSnapshot()}function py(e){e.clearMeasurements()}function V5(e){e.isLayoutDirty=!1}function B5(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function my(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function U5(e){e.resolveTargetDelta()}function H5(e){e.calcProjection()}function W5(e){e.resetSkewAndRotation()}function G5(e){e.removeLeadSnapshot()}function gy(e,t,r){e.translate=Ve(t.translate,0,r),e.scale=Ve(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function yy(e,t,r,o){e.min=Ve(t.min,r.min,o),e.max=Ve(t.max,r.max,o)}function Y5(e,t,r,o){yy(e.x,t.x,r.x,o),yy(e.y,t.y,r.y,o)}function K5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const X5={duration:.45,ease:[.4,0,.1,1]},vy=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),xy=vy("applewebkit/")&&!vy("chrome/")?Math.round:Wt;function wy(e){e.min=xy(e.min),e.max=xy(e.max)}function J5(e){wy(e.x),wy(e.y)}function m1(e,t,r){return e==="position"||e==="preserve-aspect"&&!ZC(dy(t),dy(r),.2)}function Q5(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const q5=p1({attachResizeListener:(e,t)=>Ms(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),bd={current:void 0},g1=p1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!bd.current){const e=new q5({});e.mount(window),e.setOptions({layoutScroll:!0}),bd.current=e}return bd.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Z5={pan:{Feature:m5},drag:{Feature:p5,ProjectionNode:g1,MeasureLayout:l1}};function _y(e,t,r){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",r==="Start");const s="onHover"+r,l=o[s];l&&De.postRender(()=>l(t,Ws(t)))}class eP extends Dr{mount(){const{current:t}=this.node;t&&(this.unmount=nT(t,r=>(_y(this.node,r,"Start"),o=>_y(this.node,o,"End"))))}unmount(){}}class tP extends Dr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Hs(Ms(this.node.current,"focus",()=>this.onFocus()),Ms(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function by(e,t,r){const{props:o}=e;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",r==="Start");const s="onTap"+(r==="End"?"":r),l=o[s];l&&De.postRender(()=>l(t,Ws(t)))}class nP extends Dr{mount(){const{current:t}=this.node;t&&(this.unmount=sT(t,r=>(by(this.node,r,"Start"),(o,{success:s})=>by(this.node,o,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const yf=new WeakMap,Sd=new WeakMap,rP=e=>{const t=yf.get(e.target);t&&t(e)},iP=e=>{e.forEach(rP)};function oP({root:e,...t}){const r=e||document;Sd.has(r)||Sd.set(r,{});const o=Sd.get(r),s=JSON.stringify(t);return o[s]||(o[s]=new IntersectionObserver(iP,{root:e,...t})),o[s]}function sP(e,t,r){const o=oP(t);return yf.set(e,r),o.observe(e),()=>{yf.delete(e),o.unobserve(e)}}const aP={some:0,all:1};class lP extends Dr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:o,amount:s="some",once:l}=t,u={root:r?r.current:void 0,rootMargin:o,threshold:typeof s=="number"?s:aP[s]},d=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),x=h?m:y;x&&x(f)};return sP(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(uP(t,r))&&this.startObserver()}unmount(){}}function uP({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const cP={inView:{Feature:lP},tap:{Feature:nP},focus:{Feature:tP},hover:{Feature:eP}},dP={layout:{ProjectionNode:g1,MeasureLayout:l1}},vf={current:null},y1={current:!1};function fP(){if(y1.current=!0,!!Xf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>vf.current=e.matches;e.addListener(t),t()}else vf.current=!1}const hP=[...Nx,vt,jr],pP=e=>hP.find(Ix(e)),Sy=new WeakMap;function mP(e,t,r){for(const o in t){const s=t[o],l=r[o];if(wt(s))e.addValue(o,s);else if(wt(l))e.addValue(o,lo(s,{owner:e}));else if(l!==s)if(e.hasValue(o)){const u=e.getValue(o);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=e.getStaticValue(o);e.addValue(o,lo(u!==void 0?u:s,{owner:e}))}}for(const o in r)t[o]===void 0&&e.removeValue(o);return t}const ky=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class gP{scrapeMotionValuesFromProps(t,r,o){return{}}constructor({parent:t,props:r,presenceContext:o,reducedMotionConfig:s,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=An.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,De.render(this.render,!1,!0))};const{latestValues:f,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=f,this.baseTarget={...f},this.initialValues=r.initial?{...f}:{},this.renderState=h,this.parent=t,this.props=r,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=nu(r),this.isVariantNode=Kv(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const b in x){const S=x[b];f[b]!==void 0&&wt(S)&&S.set(f[b],!1)}}mount(t){this.current=t,Sy.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),y1.current||fP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:vf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Sy.delete(this.current),this.projection&&this.projection.unmount(),Xn(this.notifyUpdate),Xn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const o=fi.has(t),s=r.on("change",d=>{this.latestValues[t]=d,this.props.onUpdate&&De.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),l=r.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{s(),l(),u&&u(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ao){const r=ao[t];if(!r)continue;const{isEnabled:o,Feature:s}=r;if(!this.features[t]&&s&&o(this.props)&&(this.features[t]=new s(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Xe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<ky.length;o++){const s=ky[o];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,u=t[l];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=mP(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const o=this.values.get(t);r!==o&&(o&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&r!==void 0&&(o=lo(r===null?void 0:r,{owner:this}),this.addValue(t,o)),o}readValue(t,r){var o;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(o=this.getBaseTargetFromProps(this.props,t))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Fx(s)||Ex(s))?s=parseFloat(s):!pP(s)&&jr.test(r)&&(s=Rx(t,r)),this.setBaseTarget(t,wt(s)?s.get():s)),wt(s)?s.get():s}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:o}=this.props;let s;if(typeof o=="string"||typeof o=="object"){const u=rh(this.props,o,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);u&&(s=u[t])}if(o&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,t);return l!==void 0&&!wt(l)?l:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new yh),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class v1 extends gP{constructor(){super(...arguments),this.KeyframeResolver=Vx}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:o}){delete r[t],delete o[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;wt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function yP(e){return window.getComputedStyle(e)}class vP extends v1{constructor(){super(...arguments),this.type="html",this.renderInstance=rx}readValueFromInstance(t,r){if(fi.has(r)){const o=Sh(r);return o&&o.default||0}else{const o=yP(t),s=(ex(r)?o.getPropertyValue(r):o[r])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:r}){return s1(t,r)}build(t,r,o){sh(t,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,r,o){return ch(t,r,o)}}class xP extends v1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Xe}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(fi.has(r)){const o=Sh(r);return o&&o.default||0}return r=ix.has(r)?r:eh(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,o){return ax(t,r,o)}build(t,r,o){ah(t,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,r,o,s){ox(t,r,o,s)}mount(t){this.isSVGTag=uh(t.tagName),super.mount(t)}}const wP=(e,t)=>nh(e)?new xP(t):new vP(t,{allowProjection:e!==V.Fragment}),_P=Xk({...HC,...cP,...Z5,...dP},wP),X=ck(_P);function xf(e){const t=vo(()=>lo(e)),{isStatic:r}=V.useContext(ql);if(r){const[,o]=V.useState(e);V.useEffect(()=>t.on("change",o),[])}return t}function x1(e,t){const r=xf(t()),o=()=>r.set(t());return o(),Zl(()=>{const s=()=>De.preRender(o,!1,!0),l=e.map(u=>u.on("change",s));return()=>{l.forEach(u=>u()),Xn(o)}}),r}const bP=e=>e&&typeof e=="object"&&e.mix,SP=e=>bP(e)?e.mix:void 0;function kP(...e){const t=!Array.isArray(e[0]),r=t?0:-1,o=e[0+r],s=e[1+r],l=e[2+r],u=e[3+r],d=Kx(s,l,{mixer:SP(l[0]),...u});return t?d(o):d}function TP(e){xs.current=[],e();const t=x1(xs.current,e);return xs.current=void 0,t}function Ty(e,t,r,o){if(typeof e=="function")return TP(e);const s=typeof t=="function"?t:kP(t,r,o);return Array.isArray(e)?Cy(e,s):Cy([e],([l])=>s(l))}function Cy(e,t){const r=vo(()=>[]);return x1(e,()=>{r.length=0;const o=e.length;for(let s=0;s<o;s++)r[s]=e[s].get();return t(r)})}function CP(e){e.values.forEach(t=>t.stop())}function wf(e,t){[...t].reverse().forEach(o=>{const s=e.getVariant(o);s&&vh(e,s),e.variantChildren&&e.variantChildren.forEach(l=>{wf(l,t)})})}function PP(e,t){if(Array.isArray(t))return wf(e,t);if(typeof t=="string")return wf(e,[t]);vh(e,t)}function EP(){const e=new Set,t={subscribe(r){return e.add(r),()=>void e.delete(r)},start(r,o){const s=[];return e.forEach(l=>{s.push(Qx(l,r,{transitionOverride:o}))}),Promise.all(s)},set(r){return e.forEach(o=>{PP(o,r)})},stop(){e.forEach(r=>{CP(r)})},mount(){return()=>{t.stop()}}};return t}function jP(){const e=vo(EP);return Zl(e.mount,[]),e}const AP=jP;var kd,Py;function $P(){if(Py)return kd;Py=1;var e=typeof Element<"u",t=typeof Map=="function",r=typeof Set=="function",o=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function s(l,u){if(l===u)return!0;if(l&&u&&typeof l=="object"&&typeof u=="object"){if(l.constructor!==u.constructor)return!1;var d,f,h;if(Array.isArray(l)){if(d=l.length,d!=u.length)return!1;for(f=d;f--!==0;)if(!s(l[f],u[f]))return!1;return!0}var m;if(t&&l instanceof Map&&u instanceof Map){if(l.size!==u.size)return!1;for(m=l.entries();!(f=m.next()).done;)if(!u.has(f.value[0]))return!1;for(m=l.entries();!(f=m.next()).done;)if(!s(f.value[1],u.get(f.value[0])))return!1;return!0}if(r&&l instanceof Set&&u instanceof Set){if(l.size!==u.size)return!1;for(m=l.entries();!(f=m.next()).done;)if(!u.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(l)&&ArrayBuffer.isView(u)){if(d=l.length,d!=u.length)return!1;for(f=d;f--!==0;)if(l[f]!==u[f])return!1;return!0}if(l.constructor===RegExp)return l.source===u.source&&l.flags===u.flags;if(l.valueOf!==Object.prototype.valueOf&&typeof l.valueOf=="function"&&typeof u.valueOf=="function")return l.valueOf()===u.valueOf();if(l.toString!==Object.prototype.toString&&typeof l.toString=="function"&&typeof u.toString=="function")return l.toString()===u.toString();if(h=Object.keys(l),d=h.length,d!==Object.keys(u).length)return!1;for(f=d;f--!==0;)if(!Object.prototype.hasOwnProperty.call(u,h[f]))return!1;if(e&&l instanceof Element)return!1;for(f=d;f--!==0;)if(!((h[f]==="_owner"||h[f]==="__v"||h[f]==="__o")&&l.$$typeof)&&!s(l[h[f]],u[h[f]]))return!1;return!0}return l!==l&&u!==u}return kd=function(u,d){try{return s(u,d)}catch(f){if((f.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw f}},kd}var DP=$P();const MP=Hl(DP);var Td,Ey;function RP(){if(Ey)return Td;Ey=1;var e=function(t,r,o,s,l,u,d,f){if(!t){var h;if(r===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var m=[o,s,l,u,d,f],y=0;h=new Error(r.replace(/%s/g,function(){return m[y++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};return Td=e,Td}var LP=RP();const jy=Hl(LP);var w1=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(w1||{}),Cd={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ay=Object.values(w1),Eh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},OP=Object.entries(Eh).reduce((e,[t,r])=>(e[r]=t,e),{}),vn="data-rh",Qi={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},qi=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const o=e[r];if(Object.prototype.hasOwnProperty.call(o,t))return o[t]}return null},FP=e=>{let t=qi(e,"title");const r=qi(e,Qi.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,()=>t);const o=qi(e,Qi.DEFAULT_TITLE);return t||o||void 0},zP=e=>qi(e,Qi.ON_CHANGE_CLIENT_STATE)||(()=>{}),Pd=(e,t)=>t.filter(r=>typeof r[e]<"u").map(r=>r[e]).reduce((r,o)=>({...r,...o}),{}),IP=(e,t)=>t.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,o)=>{if(!r.length){const s=Object.keys(o);for(let l=0;l<s.length;l+=1){const d=s[l].toLowerCase();if(e.indexOf(d)!==-1&&o[d])return r.concat(o)}}return r},[]),NP=e=>console&&typeof console.warn=="function"&&console.warn(e),ls=(e,t,r)=>{const o={};return r.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&NP(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,l)=>{const u={};l.filter(f=>{let h;const m=Object.keys(f);for(let x=0;x<m.length;x+=1){const b=m[x],S=b.toLowerCase();t.indexOf(S)!==-1&&!(h==="rel"&&f[h].toLowerCase()==="canonical")&&!(S==="rel"&&f[S].toLowerCase()==="stylesheet")&&(h=S),t.indexOf(b)!==-1&&(b==="innerHTML"||b==="cssText"||b==="itemprop")&&(h=b)}if(!h||!f[h])return!1;const y=f[h].toLowerCase();return o[h]||(o[h]={}),u[h]||(u[h]={}),o[h][y]?!1:(u[h][y]=!0,!0)}).reverse().forEach(f=>s.push(f));const d=Object.keys(u);for(let f=0;f<d.length;f+=1){const h=d[f],m={...o[h],...u[h]};o[h]=m}return s},[]).reverse()},VP=(e,t)=>{if(Array.isArray(e)&&e.length){for(let r=0;r<e.length;r+=1)if(e[r][t])return!0}return!1},BP=e=>({baseTag:IP(["href"],e),bodyAttributes:Pd("bodyAttributes",e),defer:qi(e,Qi.DEFER),encode:qi(e,Qi.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Pd("htmlAttributes",e),linkTags:ls("link",["rel","href"],e),metaTags:ls("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:ls("noscript",["innerHTML"],e),onChangeClientState:zP(e),scriptTags:ls("script",["src","innerHTML"],e),styleTags:ls("style",["cssText"],e),title:FP(e),titleAttributes:Pd("titleAttributes",e),prioritizeSeoTags:VP(e,Qi.PRIORITIZE_SEO_TAGS)}),_1=e=>Array.isArray(e)?e.join(""):e,UP=(e,t)=>{const r=Object.keys(e);for(let o=0;o<r.length;o+=1)if(t[r[o]]&&t[r[o]].includes(e[r[o]]))return!0;return!1},Ed=(e,t)=>Array.isArray(e)?e.reduce((r,o)=>(UP(o,t)?r.priority.push(o):r.default.push(o),r),{priority:[],default:[]}):{default:e,priority:[]},$y=(e,t)=>({...e,[t]:void 0}),HP=["noscript","script","style"],_f=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),b1=e=>Object.keys(e).reduce((t,r)=>{const o=typeof e[r]<"u"?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${o}`:o},""),WP=(e,t,r,o)=>{const s=b1(r),l=_1(t);return s?`<${e} ${vn}="true" ${s}>${_f(l,o)}</${e}>`:`<${e} ${vn}="true">${_f(l,o)}</${e}>`},GP=(e,t,r=!0)=>t.reduce((o,s)=>{const l=s,u=Object.keys(l).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,m)=>{const y=typeof l[m]>"u"?m:`${m}="${_f(l[m],r)}"`;return h?`${h} ${y}`:y},""),d=l.innerHTML||l.cssText||"",f=HP.indexOf(e)===-1;return`${o}<${e} ${vn}="true" ${u}${f?"/>":`>${d}</${e}>`}`},""),S1=(e,t={})=>Object.keys(e).reduce((r,o)=>{const s=Eh[o];return r[s||o]=e[o],r},t),YP=(e,t,r)=>{const o={key:t,[vn]:!0},s=S1(r,o);return[We.createElement("title",s,t)]},_l=(e,t)=>t.map((r,o)=>{const s={key:o,[vn]:!0};return Object.keys(r).forEach(l=>{const d=Eh[l]||l;if(d==="innerHTML"||d==="cssText"){const f=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:f}}else s[d]=r[l]}),We.createElement(e,s)}),sn=(e,t,r=!0)=>{switch(e){case"title":return{toComponent:()=>YP(e,t.title,t.titleAttributes),toString:()=>WP(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>S1(t),toString:()=>b1(t)};default:return{toComponent:()=>_l(e,t),toString:()=>GP(e,t,r)}}},KP=({metaTags:e,linkTags:t,scriptTags:r,encode:o})=>{const s=Ed(e,Cd.meta),l=Ed(t,Cd.link),u=Ed(r,Cd.script);return{priorityMethods:{toComponent:()=>[..._l("meta",s.priority),..._l("link",l.priority),..._l("script",u.priority)],toString:()=>`${sn("meta",s.priority,o)} ${sn("link",l.priority,o)} ${sn("script",u.priority,o)}`},metaTags:s.default,linkTags:l.default,scriptTags:u.default}},XP=e=>{const{baseTag:t,bodyAttributes:r,encode:o=!0,htmlAttributes:s,noscriptTags:l,styleTags:u,title:d="",titleAttributes:f,prioritizeSeoTags:h}=e;let{linkTags:m,metaTags:y,scriptTags:x}=e,b={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:b,linkTags:m,metaTags:y,scriptTags:x}=KP(e)),{priority:b,base:sn("base",t,o),bodyAttributes:sn("bodyAttributes",r,o),htmlAttributes:sn("htmlAttributes",s,o),link:sn("link",m,o),meta:sn("meta",y,o),noscript:sn("noscript",l,o),script:sn("script",x,o),style:sn("style",u,o),title:sn("title",{title:d,titleAttributes:f},o)}},bf=XP,ul=[],k1=!!(typeof window<"u"&&window.document&&window.document.createElement),Sf=class{constructor(e,t){Un(this,"instances",[]);Un(this,"canUseDOM",k1);Un(this,"context");Un(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?ul:this.instances,add:e=>{(this.canUseDOM?ul:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?ul:this.instances).indexOf(e);(this.canUseDOM?ul:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=bf({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},JP={},T1=We.createContext(JP),ni,C1=(ni=class extends V.Component{constructor(r){super(r);Un(this,"helmetData");this.helmetData=new Sf(this.props.context||{},ni.canUseDOM)}render(){return We.createElement(T1.Provider,{value:this.helmetData.value},this.props.children)}},Un(ni,"canUseDOM",k1),ni),Vi=(e,t)=>{const r=document.head||document.querySelector("head"),o=r.querySelectorAll(`${e}[${vn}]`),s=[].slice.call(o),l=[];let u;return t&&t.length&&t.forEach(d=>{const f=document.createElement(e);for(const h in d)if(Object.prototype.hasOwnProperty.call(d,h))if(h==="innerHTML")f.innerHTML=d.innerHTML;else if(h==="cssText")f.styleSheet?f.styleSheet.cssText=d.cssText:f.appendChild(document.createTextNode(d.cssText));else{const m=h,y=typeof d[m]>"u"?"":d[m];f.setAttribute(h,y)}f.setAttribute(vn,"true"),s.some((h,m)=>(u=m,f.isEqualNode(h)))?s.splice(u,1):l.push(f)}),s.forEach(d=>{var f;return(f=d.parentNode)==null?void 0:f.removeChild(d)}),l.forEach(d=>r.appendChild(d)),{oldTags:s,newTags:l}},kf=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const o=r.getAttribute(vn),s=o?o.split(","):[],l=[...s],u=Object.keys(t);for(const d of u){const f=t[d]||"";r.getAttribute(d)!==f&&r.setAttribute(d,f),s.indexOf(d)===-1&&s.push(d);const h=l.indexOf(d);h!==-1&&l.splice(h,1)}for(let d=l.length-1;d>=0;d-=1)r.removeAttribute(l[d]);s.length===l.length?r.removeAttribute(vn):r.getAttribute(vn)!==u.join(",")&&r.setAttribute(vn,u.join(","))},QP=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=_1(e)),kf("title",t)},Dy=(e,t)=>{const{baseTag:r,bodyAttributes:o,htmlAttributes:s,linkTags:l,metaTags:u,noscriptTags:d,onChangeClientState:f,scriptTags:h,styleTags:m,title:y,titleAttributes:x}=e;kf("body",o),kf("html",s),QP(y,x);const b={baseTag:Vi("base",r),linkTags:Vi("link",l),metaTags:Vi("meta",u),noscriptTags:Vi("noscript",d),scriptTags:Vi("script",h),styleTags:Vi("style",m)},S={},_={};Object.keys(b).forEach(k=>{const{newTags:P,oldTags:j}=b[k];P.length&&(S[k]=P),j.length&&(_[k]=b[k].oldTags)}),t&&t(),f(e,S,_)},us=null,qP=e=>{us&&cancelAnimationFrame(us),e.defer?us=requestAnimationFrame(()=>{Dy(e,()=>{us=null})}):(Dy(e),us=null)},ZP=qP,My=class extends V.Component{constructor(){super(...arguments);Un(this,"rendered",!1)}shouldComponentUpdate(t){return!Jb(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:r}=this.props.context;let o=null;const s=BP(t.get().map(l=>{const u={...l.props};return delete u.context,u}));C1.canUseDOM?ZP(s):bf&&(o=bf(s)),r(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Gd,eE=(Gd=class extends V.Component{shouldComponentUpdate(e){return!MP($y(this.props,"helmetData"),$y(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,o){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,o)}]}}mapObjectTypeChildren(e,t,r,o){switch(e.type){case"title":return{...t,[e.type]:o,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach(o=>{r={...r,[o]:e[o]}}),r}warnOnInvalidChildren(e,t){return jy(Ay.some(r=>e.type===r),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ay.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),jy(!t||typeof t=="string"||Array.isArray(t)&&!t.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return We.Children.forEach(e,o=>{if(!o||!o.props)return;const{children:s,...l}=o.props,u=Object.keys(l).reduce((f,h)=>(f[OP[h]||h]=l[h],f),{});let{type:d}=o;switch(typeof d=="symbol"?d=d.toString():this.warnOnInvalidChildren(o,s),d){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(o,r,u,s);break;default:t=this.mapObjectTypeChildren(o,t,u,s);break}}),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:o}=t;if(e&&(r=this.mapChildrenToProps(e,r)),o&&!(o instanceof Sf)){const s=o;o=new Sf(s.context,!0),delete r.helmetData}return o?We.createElement(My,{...r,context:o.value}):We.createElement(T1.Consumer,null,s=>We.createElement(My,{...r,context:s}))}},Un(Gd,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Gd);const tE={colors:{primary:"#0D6EFD",secondary:"#6C757D",accent:"#20C997",success:"#198754",danger:"#DC3545",warning:"#FFC107",info:"#0DCAF0"},background:{primary:"#F8F9FA",secondary:"#E9ECEF",tertiary:"#DEE2E6",card:"#FFFFFF",modal:"rgba(255, 255, 255, 0.85)"},text:{primary:"#212529",secondary:"#495057",tertiary:"#6C757D",accent:"#0D6EFD",inverted:"#FFFFFF"},button:{primary:"#0D6EFD",hover:"#0B5ED7",text:"#FFFFFF",disabled:"#6C757D",socialBg:"rgba(0, 0, 0, 0.05)",socialHoverBg:"rgba(0, 0, 0, 0.1)",socialBorder:"rgba(0, 0, 0, 0.1)"},navbar:{background:"rgba(248, 249, 250, 0.85)",backgroundScrolled:"rgba(248, 249, 250, 0.95)",border:"rgba(13, 110, 253, 0.1)",linkHoverBg:"rgba(13, 110, 253, 0.05)",statusBg:"rgba(13, 110, 253, 0.05)",statusBorder:"rgba(13, 110, 253, 0.1)",text:"#212529",activeText:"#0D6EFD"},terminal:{background:"rgba(248, 249, 250, 0.95)",headerBackground:"#E9ECEF",bodyBackground:"#F8F9FA",headerText:"#212529",text:"#212529",prompt:"#0D6EFD",highlightBg:"#0D6EFD20",border:"#DEE2E6"},card:{background:"#FFFFFF",border:"#DEE2E6",shadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},scrollbar:{track:"#F1F1F1",thumb:"#C1C1C1"},code:{background:"#F5F5F5",text:"#212529",border:"#DEE2E6"},hero:{glowColor:"rgba(13, 110, 253, 0.15)",spotlightColor:"rgba(13, 110, 253, 0.05)",backgrounds:{primary:"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",secondary:"rgba(255, 255, 255, 0.8)"}},footer:{background:"#F8F9FA",border:"#DEE2E6",text:"#212529"}},nE={colors:{primary:"#0D6EFD",secondary:"#6C757D",accent:"#20C997",success:"#198754",danger:"#DC3545",warning:"#FFC107",info:"#0DCAF0"},background:{primary:"#121212",secondary:"#1E1E1E",tertiary:"#2D2D2D",card:"#2D2D2D",modal:"rgba(30, 30, 30, 0.85)"},text:{primary:"#F8F9FA",secondary:"#E9ECEF",tertiary:"#CED4DA",accent:"#0D6EFD",inverted:"#212529"},button:{primary:"#0D6EFD",hover:"#0B5ED7",text:"#FFFFFF",disabled:"#6C757D",socialBg:"rgba(255, 255, 255, 0.05)",socialHoverBg:"rgba(255, 255, 255, 0.1)",socialBorder:"rgba(255, 255, 255, 0.1)"},navbar:{background:"rgba(18, 18, 18, 0.85)",backgroundScrolled:"rgba(18, 18, 18, 0.95)",border:"rgba(255, 255, 255, 0.1)",linkHoverBg:"rgba(255, 255, 255, 0.05)",statusBg:"rgba(255, 255, 255, 0.05)",statusBorder:"rgba(255, 255, 255, 0.1)",text:"#F8F9FA",activeText:"#0D6EFD"},terminal:{background:"rgba(0, 0, 0, 0.95)",headerBackground:"#0F0F0F",bodyBackground:"#1A1A1A",headerText:"#FFFFFF",text:"#FFFFFF",prompt:"#0D6EFD",highlightBg:"#0D6EFD30",border:"#3D3D3D"},card:{background:"#2D2D2D",border:"#3D3D3D",shadow:"0 4px 6px rgba(0, 0, 0, 0.3)"},scrollbar:{track:"#1A1A1A",thumb:"#3D3D3D"},code:{background:"#1A1A1A",text:"#E9ECEF",border:"#3D3D3D"},hero:{glowColor:"rgba(13, 110, 253, 0.3)",spotlightColor:"rgba(64, 196, 255, 0.03)",backgrounds:{primary:"linear-gradient(135deg, #0f1723 0%, #080c14 100%)",secondary:"rgba(18, 18, 18, 0.8)"}},footer:{background:"#1A1A1A",border:"#3D3D3D",text:"#E9ECEF"}},rE=qS`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px; /* Ensures anchors don't get hidden behind the navbar */
  }
  
  body {
    background: ${e=>e.theme.background.primary};
    color: ${e=>e.theme.text.primary};
    font-family: 'Inter', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
  }
  
  #root {
    min-height: 100vh;
    width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  a {
    color: ${e=>e.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${e=>e.theme.colors.accent};
    }
  }
  
  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  code, pre {
    font-family: 'Fira Code', monospace;
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.scrollbar.track};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.scrollbar.thumb};
    border-radius: 5px;
  }
  
  ::selection {
    background: ${e=>e.theme.colors.primary};
    color: white;
  }
  
  /* Container for sections */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  /* Section spacing */
  section {
    padding: 5rem 0;
  }
  
  /* Utility classes */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  
  .d-flex { display: flex; }
  .flex-column { flex-direction: column; }
  .justify-center { justify-content: center; }
  .align-center { align-items: center; }
  .justify-between { justify-content: space-between; }
  
  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mt-5 { margin-top: 3rem; }
  
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .mb-5 { margin-bottom: 3rem; }
  
  /* Font awesome icons */
  .fa, .fas, .far, .fal, .fab {
    vertical-align: middle;
  }
`,iE=({setIsLoading:e})=>{const[t,r]=V.useState(0),[o,s]=V.useState(""),l=()=>{const f="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン日本語",h=["ENCRYPTION","FIREWALL","VULNERABILITY","EXPLOIT","BACKDOOR","MALWARE","TROJAN","AUTHENTICATION","BREACH","INJECTION","XSS","BUFFER","OVERFLOW","RANSOMWARE","PHISHING"];let m="";for(let y=0;y<400;y++)m+=f[Math.floor(Math.random()*f.length)],y%50===0&&(m+=`
`);for(let y=0;y<8;y++){const x=h[Math.floor(Math.random()*h.length)],b=Math.floor(Math.random()*(m.length-x.length));m=m.substring(0,b)+x+m.substring(b+x.length)}return m};V.useEffect(()=>{const f=setInterval(()=>{r(y=>{if(y>=100)return clearInterval(f),100;const x=Math.random()*8+2;return Math.min(y+x,100)})},100),h=setInterval(()=>{s(l())},800),m=setTimeout(()=>{e(!1)},3e3);return()=>{clearTimeout(m),clearInterval(f),clearInterval(h)}},[e]);const u=["Initializing security protocols...","Establishing secure connection...","Scanning for vulnerabilities...","Decrypting access codes...","Loading exploit database..."],d=u[Math.floor(t/25)]||u[0];return v.jsxs(oE,{as:X.div,initial:{opacity:1},exit:{opacity:0,transition:{duration:.8,ease:"easeInOut"}},children:[v.jsx(sE,{children:o}),v.jsxs(aE,{children:[v.jsx(lE,{}),v.jsxs(uE,{children:[v.jsx(Ly,{children:"SECURE"}),v.jsx(Ry,{as:X.span,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:"["}),v.jsx(cE,{as:X.span,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,textShadow:["0 0 5px #0D6EFD","0 0 20px #0D6EFD","0 0 5px #0D6EFD"]},transition:{duration:.5,delay:.2,textShadow:{repeat:1/0,duration:2,ease:"easeInOut"}},children:"J"}),v.jsx(Ry,{as:X.span,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.4},children:"]"}),v.jsx(Ly,{children:"SYSTEM"})]}),v.jsxs(dE,{children:[v.jsxs(fE,{children:[v.jsx(hE,{width:t}),v.jsx(pE,{width:t})]}),v.jsxs(mE,{children:[v.jsxs(gE,{children:[Math.floor(t),"%"]}),v.jsx(yE,{children:"|"}),v.jsx(vE,{children:d})]})]}),v.jsxs(xE,{children:[v.jsx(wE,{}),v.jsx(_E,{children:"SYSTEM SCAN IN PROGRESS"})]})]})]})},oE=T.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${e=>e.theme.background.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`,sE=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${e=>`${e.theme.colors.primary}30`};
  overflow: hidden;
  white-space: pre;
  line-height: 1;
  user-select: none;
  opacity: 0.3;
  z-index: 1;
`,aE=T.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-radius: 20px;
  background: ${e=>`${e.theme.background.secondary}95`};
  backdrop-filter: blur(10px);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border: 1px solid ${e=>`${e.theme.colors.primary}30`};
  max-width: 90%;
  width: 500px;
`,lE=T.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  opacity: 0.1;
  filter: blur(60px);
  z-index: -1;
`,uE=T.div`
  display: flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  position: relative;
`,Ry=T.span`
  color: ${e=>e.theme.colors.primary};
  opacity: 0.7;
`,cE=T.span`
  color: ${e=>e.theme.colors.primary};
  margin: 0 0.2rem;
`,Ly=T.span`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${e=>e.theme.text.tertiary};
  margin: 0 1rem;
  font-weight: 500;
  opacity: 0.7;
`,dE=T.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`,fE=T.div`
  width: 100%;
  height: 8px;
  background: ${e=>`${e.theme.background.tertiary}80`};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
`,hE=T.div`
  height: 100%;
  width: ${e=>`${e.width}%`};
  background: linear-gradient(90deg, ${e=>e.theme.colors.primary} 0%, ${e=>e.theme.colors.accent} 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
`,pE=T.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>`${e.width}%`};
  background: linear-gradient(90deg, transparent, ${e=>`${e.theme.colors.primary}80`});
  filter: blur(5px);
  opacity: 0.7;
  animation: pulse 1.5s infinite alternate;
  
  @keyframes pulse {
    from { opacity: 0.3; }
    to { opacity: 0.7; }
  }
`,mE=T.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  font-family: 'JetBrains Mono', monospace;
`,gE=T.span`
  color: ${e=>e.theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  min-width: 50px;
`,yE=T.span`
  color: ${e=>e.theme.text.tertiary};
  margin: 0 0.8rem;
  opacity: 0.5;
`,vE=T.span`
  color: ${e=>e.theme.text.secondary};
  font-size: 0.9rem;
`,xE=T.div`
  width: 100%;
  height: 60px;
  border: 1px solid ${e=>`${e.theme.colors.primary}40`};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,wE=T.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background: ${e=>e.theme.colors.primary};
  box-shadow: 0 0 10px ${e=>e.theme.colors.primary},
              0 0 20px ${e=>e.theme.colors.primary};
  top: 0;
  left: 0;
  animation: scan 2s linear infinite;
  
  @keyframes scan {
    0% { top: 0; }
    100% { top: 100%; }
  }
`,_E=T.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${e=>e.theme.text.tertiary};
  z-index: 1;
  text-align: center;
`,jd={sm:"576px",md:"768px",lg:"992px"},Se={sm:`(max-width: ${jd.sm})`,md:`(max-width: ${jd.md})`,lg:`(max-width: ${jd.lg})`},P1=({toggle:e,isDark:t})=>v.jsx(bE,{onClick:e,children:v.jsx(SE,{$isDark:t,children:t?v.jsx(X.i,{className:"fas fa-moon",initial:{opacity:0,rotate:-90},animate:{opacity:1,rotate:0},transition:{duration:.3}}):v.jsx(X.i,{className:"fas fa-sun",initial:{opacity:0,rotate:90},animate:{opacity:1,rotate:0},transition:{duration:.3}})})}),bE=T.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  
  &:hover {
    background: ${e=>e.theme.navbar.linkHoverBg};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary};
  }
`,SE=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${e=>e.$isDark?"#FFC107":"#FFA500"};
  transform: ${e=>(e.$isDark,"rotate(0deg)")};
  transition: all 0.3s;
  
  i {
    filter: ${e=>e.$isDark?"drop-shadow(0 0 2px rgba(255, 193, 7, 0.5))":"drop-shadow(0 0 2px rgba(255, 165, 0, 0.5))"};
  }
`,kE=({toggleMenu:e,toggleTheme:t,theme:r})=>{const o=[{name:"Home",icon:"terminal"},{name:"About",icon:"user-shield"},{name:"Skills",icon:"laptop-code"},{name:"Projects",icon:"code-branch"},{name:"Achievements",icon:"trophy"},{name:"Blog",icon:"newspaper"},{name:"Contact",icon:"network-wired"},{name:"Challenge",icon:"flag"}],s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.07,delayChildren:.1}},exit:{opacity:0,transition:{staggerChildren:.05,staggerDirection:-1,when:"afterChildren"}}},l={hidden:{y:20,opacity:0,filter:"blur(10px)"},visible:{y:0,opacity:1,filter:"blur(0px)",transition:{type:"spring",stiffness:300,damping:24}},exit:{y:-20,opacity:0,filter:"blur(10px)",transition:{duration:.2}}},u={hidden:{opacity:0,top:"0%"},visible:{opacity:[0,.7,0],top:["0%","100%","0%"],transition:{repeat:1/0,duration:3,ease:"linear",times:[0,.5,1]}}};return v.jsx(TE,{as:X.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:e,children:v.jsxs(CE,{as:X.div,initial:"hidden",animate:"visible",exit:"exit",variants:s,onClick:d=>d.stopPropagation(),children:[v.jsx(PE,{as:X.div,variants:u}),v.jsx(EE,{}),v.jsx(Oy,{top:"10%",right:"10%",size:"150px",color:r==="dark"?"#0D6EFD30":"#0D6EFD20"}),v.jsx(Oy,{bottom:"20%",left:"-50px",size:"200px",color:r==="dark"?"#20C99730":"#20C99720"}),v.jsxs(jE,{variants:l,children:[v.jsxs(AE,{children:[v.jsx(Fy,{children:"["}),v.jsx($E,{children:"J"}),v.jsx(Fy,{children:"]"}),v.jsx(DE,{children:"_"})]}),v.jsx(P1,{toggle:t,isDark:r==="dark"})]}),v.jsx(ME,{children:o.map((d,f)=>v.jsxs(j1,{href:`#${d.name.toLowerCase()}`,onClick:e,as:X.a,variants:l,custom:f,whileHover:{x:10,backgroundColor:"rgba(13, 110, 253, 0.15)",boxShadow:"0 0 15px rgba(13, 110, 253, 0.2)"},whileTap:{scale:.98},children:[v.jsx(RE,{children:v.jsx(E1,{className:`fas fa-${d.icon}`})}),v.jsxs(LE,{children:["~/",d.name.toLowerCase()]}),v.jsx(OE,{children:v.jsx("i",{className:"fas fa-chevron-right"})})]},d.name))}),v.jsxs(FE,{variants:l,children:[v.jsxs(zE,{children:[v.jsx(Ad,{href:"https://github.com/reschjonas",target:"_blank",rel:"noopener noreferrer",as:X.a,whileHover:{y:-5,boxShadow:"0 5px 15px rgba(0,0,0,0.2)",backgroundColor:"#0D6EFD"},whileTap:{scale:.95},children:v.jsx("i",{className:"fab fa-github"})}),v.jsx(Ad,{href:"https://www.linkedin.com/in/jonas-resch-91bba733b/",target:"_blank",rel:"noopener noreferrer",as:X.a,whileHover:{y:-5,boxShadow:"0 5px 15px rgba(0,0,0,0.2)",backgroundColor:"#0D6EFD"},whileTap:{scale:.95},children:v.jsx("i",{className:"fab fa-linkedin"})}),v.jsx(Ad,{href:"https://www.instagram.com/4realjonas/",target:"_blank",rel:"noopener noreferrer",as:X.a,whileHover:{y:-5,boxShadow:"0 5px 15px rgba(0,0,0,0.2)",backgroundColor:"#0D6EFD"},whileTap:{scale:.95},children:v.jsx("i",{className:"fab fa-instagram"})})]}),v.jsxs(IE,{children:[v.jsx(NE,{}),v.jsx(VE,{children:"Online & Available for Work"})]})]}),v.jsx(BE,{as:X.div,initial:{width:0,opacity:0},animate:{width:"80%",opacity:1},transition:{delay:.5,duration:.8}})]})})},TE=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${e=>e.theme.background.modal};
  backdrop-filter: blur(8px);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
`,CE=T(X.div)`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: ${e=>e.theme.background.secondary};
  background-image: ${e=>`linear-gradient(145deg, 
    ${e.theme.background.secondary}80, 
    ${e.theme.background.primary}
  )`};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-left: 1px solid ${e=>e.theme.navbar.border};
`,PE=T(X.div)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background: ${e=>e.theme.colors.primary};
  opacity: 0.5;
  box-shadow: 0 0 8px ${e=>e.theme.colors.primary},
              0 0 12px ${e=>e.theme.colors.primary};
  pointer-events: none;
  z-index: 1;
`,EE=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(${e=>`${e.theme.text.primary}05`} 1px, transparent 1px),
                    linear-gradient(90deg, ${e=>`${e.theme.text.primary}05`} 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.2;
  z-index: 0;
  pointer-events: none;
`,Oy=T.div`
  position: absolute;
  width: ${e=>e.size||"150px"};
  height: ${e=>e.size||"150px"};
  top: ${e=>e.top||"auto"};
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  bottom: ${e=>e.bottom||"auto"};
  background: ${e=>e.color||"#0D6EFD30"};
  border-radius: 50%;
  filter: blur(50px);
  z-index: 0;
  pointer-events: none;
`,jE=T(X.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
`,AE=T.div`
  display: flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary};
  text-shadow: 0 0 10px ${e=>`${e.theme.colors.primary}40`};
`,Fy=T.span`
  opacity: 0.5;
`,$E=T.span`
  font-weight: bold;
`,DE=T.span`
  animation: blink 1s step-end infinite;
  margin-left: 2px;
  
  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`,ME=T.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto;
  position: relative;
  z-index: 2;
`,RE=T.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${e=>`${e.theme.colors.primary}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(0,0,0,0.1));
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    height: 50%;
    background: rgba(255,255,255,0.1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 0;
  }
`,E1=T.i`
  font-size: 1rem;
  opacity: 0.9;
  transition: all 0.3s ease;
  color: ${e=>e.theme.colors.primary};
  position: relative;
  z-index: 1;
`,j1=T(X.a)`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  border-radius: 12px;
  text-decoration: none;
  color: ${e=>e.theme.text.secondary};
  background: ${e=>`${e.theme.background.tertiary}90`};
  backdrop-filter: blur(5px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid ${e=>`${e.theme.colors.primary}20`};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${e=>e.theme.colors.primary};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    border-color: ${e=>`${e.theme.colors.primary}50`};
    background: ${e=>`${e.theme.colors.primary}10`};
    color: ${e=>e.theme.colors.primary};
    
    &::before {
      transform: scaleY(1);
    }
    
    ${E1} {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`,LE=T.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 500;
  flex-grow: 1;
  color: ${e=>e.theme.text.primary};
`,OE=T.div`
  font-size: 0.8rem;
  opacity: 0.5;
  transition: all 0.3s ease;
  color: ${e=>e.theme.text.secondary};
  
  ${j1}:hover & {
    opacity: 1;
    transform: translateX(3px);
    color: ${e=>e.theme.colors.primary};
  }
`,FE=T(X.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 2;
`,zE=T.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,Ad=T(X.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>`${e.theme.button.socialBg}`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.text.primary};
  border: 1px solid ${e=>e.theme.button.socialBorder};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, ${e=>`${e.theme.colors.primary}40`} 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    color: #fff;
    transform: translateY(-3px);
    
    &::before {
      opacity: 1;
    }
  }
  
  i {
    font-size: 1.2rem;
    position: relative;
    z-index: 1;
  }
`,IE=T.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem;
  background: ${e=>`${e.theme.background.tertiary}80`};
  border: 1px solid ${e=>e.theme.navbar.border};
  border-radius: 30px;
  justify-content: center;
`,NE=T.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.success};
  box-shadow: 0 0 8px ${e=>e.theme.colors.success};
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 ${e=>`${e.theme.colors.success}80`}; }
    70% { box-shadow: 0 0 0 6px ${e=>`${e.theme.colors.success}00`}; }
    100% { box-shadow: 0 0 0 0 ${e=>`${e.theme.colors.success}00`}; }
  }
`,VE=T.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: ${e=>e.theme.text.secondary};
`,BE=T.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${e=>e.theme.colors.primary}40,
    transparent
  );
  margin: 1.5rem auto;
  position: relative;
  z-index: 2;
`,UE=(e,t)=>{let r;return function(...o){r||(e.apply(this,o),r=!0,requestAnimationFrame(()=>{r=!1}))}},HE=e=>{const t=document.getElementById(e);if(!t)return;const r=t.offsetTop-70,o=window.pageYOffset,s=r-o,l=800;let u=null;const d=f=>{u===null&&(u=f);const h=f-u,m=Math.min(h/l,1),y=x=>x<.5?2*x*x:-1+(4-2*x)*x;window.scrollTo(0,o+s*y(m)),h<l&&requestAnimationFrame(d)};requestAnimationFrame(d)},WE=({toggleTheme:e,theme:t})=>{const[r,o]=V.useState("home"),[s,l]=V.useState(!1),[u,d]=V.useState(!1),[f,h]=V.useState(!1),m=V.useRef({}),y=V.useRef(null),x=V.useCallback(()=>{y.current&&clearTimeout(y.current),h(!0),y.current=setTimeout(()=>h(!1),800)},[]);V.useEffect(()=>{const S=UE(()=>{l(window.scrollY>50)});window.addEventListener("scroll",S,{passive:!0});const _=["home","about","skills","projects","achievements","blog","contact"],k={rootMargin:"-50% 0px",threshold:[0,.25,.5,.75,1]},P=D=>{let R=0,A=null;D.forEach(F=>{const z=F.target.id;if(z==="home"&&window.scrollY<100){A="home";return}if(F.isIntersecting){const N=F.intersectionRatio;N>R&&(R=N,A=z)}}),A&&A!==r&&(o(A),x())},j=new IntersectionObserver(P,k);return m.current=j,_.forEach(D=>{const R=document.getElementById(D);R&&j.observe(R)}),()=>{window.removeEventListener("scroll",S),j.disconnect(),y.current&&clearTimeout(y.current)}},[r,x]);const b=V.useCallback((S,_)=>{_.preventDefault(),o(S),x(),HE(S)},[x]);return v.jsxs(v.Fragment,{children:[v.jsxs(YE,{isScrolled:s,as:X.nav,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.1},children:[v.jsx(KE,{active:f}),v.jsxs(qE,{children:[v.jsxs($1,{href:"#home",onClick:S=>b("home",S),children:[v.jsxs(XE,{children:[v.jsx(Iy,{children:"["}),v.jsx(QE,{children:"J"}),v.jsx(Iy,{children:"]"}),v.jsx(A1,{children:"_"})]}),v.jsx(JE,{})]}),v.jsx(ZE,{children:["Home","About","Skills","Projects","Achievements","Blog","Contact"].map((S,_)=>v.jsxs(jh,{href:`#${S.toLowerCase()}`,isActive:r===S.toLowerCase(),onClick:k=>b(S.toLowerCase(),k),"aria-current":r===S.toLowerCase()?"page":void 0,as:X.a,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1+_*.1},whileHover:{y:-3},children:[v.jsxs(e2,{children:[v.jsx(D1,{className:`fas fa-${GE(S)}`,isActive:r===S.toLowerCase()}),v.jsxs(t2,{children:["~/",S.toLowerCase()]})]}),r===S.toLowerCase()&&v.jsx(i2,{as:X.div,layoutId:"activeIndicator",transition:{type:"spring",stiffness:500,damping:40,mass:1}})]},S))}),v.jsxs(n2,{children:[v.jsx(P1,{toggle:e,isDark:t==="dark"}),v.jsxs(r2,{onClick:()=>d(!u),"aria-label":"Toggle mobile menu",children:[v.jsx(Dd,{$top:!0,$mobileMenuOpen:u}),v.jsx(Dd,{$middle:!0,$mobileMenuOpen:u}),v.jsx(Dd,{$bottom:!0,$mobileMenuOpen:u})]})]})]}),v.jsx($d,{left:"5%",width:"10%"}),v.jsx($d,{left:"23%",width:"5%"}),v.jsx($d,{right:"8%",width:"12%"}),v.jsx(zy,{position:"top-left"}),v.jsx(zy,{position:"top-right"})]}),v.jsx(Jf,{children:u&&v.jsx(kE,{toggleMenu:()=>d(!1),toggleTheme:e,theme:t})})]})};function GE(e){return{Home:"home",About:"user",Skills:"code",Projects:"folder",Achievements:"trophy",Blog:"newspaper",Contact:"envelope"}[e]||"circle"}const YE=T.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${e=>e.isScrolled?e.theme.navbar.backgroundScrolled:e.theme.navbar.background};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${e=>e.theme.navbar.border};
  padding: ${e=>e.isScrolled?"0.8rem 2rem":"1.2rem 2rem"};
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${e=>e.isScrolled?`0 4px 30px rgba(0, 0, 0, 0.1), 0 0 20px ${e.theme.colors.primary}15`:"none"};
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${e=>e.theme.colors.primary}40,
      transparent
    );
    opacity: 0.5;
    animation: scanline 8s infinite linear;
  }
  
  @keyframes scanline {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @media ${Se.md} {
    padding: ${e=>e.isScrolled?"0.8rem 1rem":"1.2rem 1rem"};
  }
`,KE=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${e=>e.theme.colors.primary};
  opacity: ${e=>e.active?.5:0};
  box-shadow: 0 0 8px ${e=>e.theme.colors.primary},
              0 0 12px ${e=>e.theme.colors.primary};
  transform: ${e=>e.active?"translateY(0)":"translateY(-10px)"};
  transition: transform 0.2s ease, opacity 0.3s ease;
  z-index: 10;
`,$d=T.div`
  position: absolute;
  bottom: 0;
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  height: 2px;
  width: ${e=>e.width||"10%"};
  background: linear-gradient(90deg, 
    transparent, 
    ${e=>e.theme.colors.primary}40, 
    ${e=>e.theme.colors.primary}, 
    ${e=>e.theme.colors.primary}40, 
    transparent
  );
  opacity: 0.5;
`,zy=T.div`
  position: absolute;
  width: 20px;
  height: 20px;
  
  /* Positioning based on prop */
  ${e=>e.position==="top-left"?`
        top: 10px;
        left: 10px;
        border-top: 2px solid ${e.theme.colors.primary}80;
        border-left: 2px solid ${e.theme.colors.primary}80;
      `:e.position==="top-right"?`
        top: 10px;
        right: 10px;
        border-top: 2px solid ${e.theme.colors.primary}80;
        border-right: 2px solid ${e.theme.colors.primary}80;
      `:""}
`,A1=T.span`
  color: ${e=>e.theme.colors.primary};
  animation: blink 1s step-end infinite;
  margin-left: 2px;
  
  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`,$1=T.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    
    ${A1} {
      opacity: 0.8;
    }
  }
`,XE=T.div`
  display: flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary};
  position: relative;
  z-index: 2;
`,JE=T.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: ${e=>e.theme.colors.primary};
  filter: blur(20px);
  opacity: 0.1;
  border-radius: 50%;
  z-index: 1;
  transition: all 0.3s ease;
  
  ${$1}:hover & {
    opacity: 0.2;
    filter: blur(25px);
  }
`,Iy=T.span`
  color: ${e=>e.theme.colors.primary};
  opacity: 0.5;
`,QE=T.span`
  color: ${e=>e.theme.colors.primary};
  font-weight: bold;
`,qE=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`,ZE=T.div`
  display: flex;
  gap: 1.5rem;
  
  @media ${Se.lg} {
    display: none;
  }
`,D1=T.i`
  font-size: 0.9rem;
  opacity: ${e=>e.isActive?1:.8};
  transition: all 0.3s ease;
  color: ${e=>e.isActive?e.theme.colors.primary:e.theme.text.secondary};
  filter: ${e=>e.isActive?`drop-shadow(0 0 5px ${e.theme.colors.primary}80)`:"none"};
`,jh=T.a`
  text-decoration: none;
  color: ${e=>e.isActive?e.theme.colors.primary:e.theme.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'JetBrains Mono', monospace;
  overflow: hidden;
  background: ${e=>e.isActive?`${e.theme.colors.primary}15`:"transparent"};
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.theme.colors.primary}10;
    border-radius: 10px;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s ease;
    z-index: 1;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    transform: translateY(-2px);
    
    &:before {
      opacity: 1;
      transform: scale(1);
    }
    
    ${D1} {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`,e2=T.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    width: 10px;
    height: 1px;
    background: ${e=>e.theme.colors.primary}40;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  ${jh}:hover &::before {
    transform: scaleX(1);
  }
`,t2=T.span`
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: ${e=>e.theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  ${jh}:hover &::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`,n2=T.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,r2=T.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: relative;
  
  @media ${Se.lg} {
    display: flex;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: ${e=>`${e.theme.colors.primary}20`};
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
`,Dd=T.span`
  display: block;
  position: absolute;
  width: 22px;
  height: 2px;
  background: ${e=>e.theme.text.primary};
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
  
  &:nth-child(1) {
    top: ${e=>e.$top?"0":e.$mobileMenuOpen?"8px":"0"};
    transform: ${e=>e.$mobileMenuOpen?"rotate(45deg)":"rotate(0)"};
  }
  
  &:nth-child(2) {
    top: 8px;
    opacity: ${e=>e.$mobileMenuOpen?"0":"1"};
  }
  
  &:nth-child(3) {
    top: ${e=>e.$bottom?"16px":e.$mobileMenuOpen?"8px":"16px"};
    transform: ${e=>e.$mobileMenuOpen?"rotate(-45deg)":"rotate(0)"};
  }
`,i2=T(X.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background: ${e=>e.theme.colors.primary};
  border-radius: 3px;
  box-shadow: 
    0 0 10px ${e=>e.theme.colors.primary}80,
    0 0 20px ${e=>e.theme.colors.primary}40;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary};
    top: -0.5px;
  }
  
  &::before {
    left: -6px;
    animation: pulse 2s infinite;
  }
  
  &::after {
    right: -6px;
    animation: pulse 2s infinite 1s;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }
`;function Wn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M1(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},co={duration:.5,overwrite:!1,delay:0},Ah,ht,Fe,$n=1e8,_t=1/$n,Tf=Math.PI*2,o2=Tf/4,s2=0,R1=Math.sqrt,a2=Math.cos,l2=Math.sin,lt=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},Qn=function(t){return typeof t=="number"},$h=function(t){return typeof t>"u"},Mn=function(t){return typeof t=="object"},Dt=function(t){return t!==!1},Dh=function(){return typeof window<"u"},cl=function(t){return Ge(t)||lt(t)},L1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bt=Array.isArray,Cf=/(?:-?\.?\d|\.)+/gi,O1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Md=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,F1=/[+-]=-?[.\d]+/,z1=/[^,'"\[\]\s]+/gi,u2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,Tn,Pf,Mh,Kt={},Fl={},I1,N1=function(t){return(Fl=fo(t,Kt))&&Ot},Rh=function(t,r){return console.warn("Invalid property",t,"set to",r,"Missing plugin? gsap.registerPlugin()")},Rs=function(t,r){return!r&&console.warn(t)},V1=function(t,r){return t&&(Kt[t]=r)&&Fl&&(Fl[t]=r)||Kt},Ls=function(){return 0},c2={suppressEvents:!0,isStart:!0,kill:!1},bl={suppressEvents:!0,kill:!1},d2={suppressEvents:!0},Lh={},Pr=[],Ef={},B1,Bt={},Rd={},Ny=30,Sl=[],Oh="",Fh=function(t){var r=t[0],o,s;if(Mn(r)||Ge(r)||(t=[t]),!(o=(r._gsap||{}).harness)){for(s=Sl.length;s--&&!Sl[s].targetTest(r););o=Sl[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new fw(t[s],o)))||t.splice(s,1);return t},oi=function(t){return t._gsap||Fh(an(t))[0]._gsap},U1=function(t,r,o){return(o=t[r])&&Ge(o)?t[r]():$h(o)&&t.getAttribute&&t.getAttribute(r)||o},Mt=function(t,r){return(t=t.split(",")).forEach(r)||t},Je=function(t){return Math.round(t*1e5)/1e5||0},Ze=function(t){return Math.round(t*1e7)/1e7||0},Zi=function(t,r){var o=r.charAt(0),s=parseFloat(r.substr(2));return t=parseFloat(t),o==="+"?t+s:o==="-"?t-s:o==="*"?t*s:t/s},f2=function(t,r){for(var o=r.length,s=0;t.indexOf(r[s])<0&&++s<o;);return s<o},zl=function(){var t=Pr.length,r=Pr.slice(0),o,s;for(Ef={},Pr.length=0,o=0;o<t;o++)s=r[o],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},H1=function(t,r,o,s){Pr.length&&!ht&&zl(),t.render(r,o,ht&&r<0&&(t._initted||t._startAt)),Pr.length&&!ht&&zl()},W1=function(t){var r=parseFloat(t);return(r||r===0)&&(t+"").match(z1).length<2?r:lt(t)?t.trim():t},G1=function(t){return t},Xt=function(t,r){for(var o in r)o in t||(t[o]=r[o]);return t},h2=function(t){return function(r,o){for(var s in o)s in r||s==="duration"&&t||s==="ease"||(r[s]=o[s])}},fo=function(t,r){for(var o in r)t[o]=r[o];return t},Vy=function e(t,r){for(var o in r)o!=="__proto__"&&o!=="constructor"&&o!=="prototype"&&(t[o]=Mn(r[o])?e(t[o]||(t[o]={}),r[o]):r[o]);return t},Il=function(t,r){var o={},s;for(s in t)s in r||(o[s]=t[s]);return o},ks=function(t){var r=t.parent||Ne,o=t.keyframes?h2(bt(t.keyframes)):Xt;if(Dt(t.inherit))for(;r;)o(t,r.vars.defaults),r=r.parent||r._dp;return t},p2=function(t,r){for(var o=t.length,s=o===r.length;s&&o--&&t[o]===r[o];);return o<0},Y1=function(t,r,o,s,l){var u=t[s],d;if(l)for(d=r[l];u&&u[l]>d;)u=u._prev;return u?(r._next=u._next,u._next=r):(r._next=t[o],t[o]=r),r._next?r._next._prev=r:t[s]=r,r._prev=u,r.parent=r._dp=t,r},ou=function(t,r,o,s){o===void 0&&(o="_first"),s===void 0&&(s="_last");var l=r._prev,u=r._next;l?l._next=u:t[o]===r&&(t[o]=u),u?u._prev=l:t[s]===r&&(t[s]=l),r._next=r._prev=r.parent=null},Ar=function(t,r){t.parent&&(!r||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},si=function(t,r){if(t&&(!r||r._end>t._dur||r._start<0))for(var o=t;o;)o._dirty=1,o=o.parent;return t},m2=function(t){for(var r=t.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return t},jf=function(t,r,o,s){return t._startAt&&(ht?t._startAt.revert(bl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(r,!0,s))},g2=function e(t){return!t||t._ts&&e(t.parent)},By=function(t){return t._repeat?ho(t._tTime,t=t.duration()+t._rDelay)*t:0},ho=function(t,r){var o=Math.floor(t=Ze(t/r));return t&&o===t?o-1:o},Nl=function(t,r){return(t-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},su=function(t){return t._end=Ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||_t)||0))},au=function(t,r){var o=t._dp;return o&&o.smoothChildTiming&&t._ts&&(t._start=Ze(o._time-(t._ts>0?r/t._ts:((t._dirty?t.totalDuration():t._tDur)-r)/-t._ts)),su(t),o._dirty||si(o,t)),t},K1=function(t,r){var o;if((r._time||!r._dur&&r._initted||r._start<t._time&&(r._dur||!r.add))&&(o=Nl(t.rawTime(),r),(!r._dur||Gs(0,r.totalDuration(),o)-r._tTime>_t)&&r.render(o,!0)),si(t,r)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(o=t;o._dp;)o.rawTime()>=0&&o.totalTime(o._tTime),o=o._dp;t._zTime=-1e-8}},Pn=function(t,r,o,s){return r.parent&&Ar(r),r._start=Ze((Qn(o)?o:o||t!==Ne?on(t,o,r):t._time)+r._delay),r._end=Ze(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Y1(t,r,"_first","_last",t._sort?"_start":0),Af(r)||(t._recent=r),s||K1(t,r),t._ts<0&&au(t,t._tTime),t},X1=function(t,r){return(Kt.ScrollTrigger||Rh("scrollTrigger",r))&&Kt.ScrollTrigger.create(r,t)},J1=function(t,r,o,s,l){if(Ih(t,r,l),!t._initted)return 1;if(!o&&t._pt&&!ht&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&B1!==Ut.frame)return Pr.push(t),t._lazy=[l,s],1},y2=function e(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||e(r))},Af=function(t){var r=t.data;return r==="isFromStart"||r==="isStart"},v2=function(t,r,o,s){var l=t.ratio,u=r<0||!r&&(!t._start&&y2(t)&&!(!t._initted&&Af(t))||(t._ts<0||t._dp._ts<0)&&!Af(t))?0:1,d=t._rDelay,f=0,h,m,y;if(d&&t._repeat&&(f=Gs(0,t._tDur,r),m=ho(f,d),t._yoyo&&m&1&&(u=1-u),m!==ho(t._tTime,d)&&(l=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==l||ht||s||t._zTime===_t||!r&&t._zTime){if(!t._initted&&J1(t,r,s,o,f))return;for(y=t._zTime,t._zTime=r||(o?_t:0),o||(o=r&&!y),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=f,h=t._pt;h;)h.r(u,h.d),h=h._next;r<0&&jf(t,r,o,!0),t._onUpdate&&!o&&Ht(t,"onUpdate"),f&&t._repeat&&!o&&t.parent&&Ht(t,"onRepeat"),(r>=t._tDur||r<0)&&t.ratio===u&&(u&&Ar(t,1),!o&&!ht&&(Ht(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=r)},x2=function(t,r,o){var s;if(o>r)for(s=t._first;s&&s._start<=o;){if(s.data==="isPause"&&s._start>r)return s;s=s._next}else for(s=t._last;s&&s._start>=o;){if(s.data==="isPause"&&s._start<r)return s;s=s._prev}},po=function(t,r,o,s){var l=t._repeat,u=Ze(r)||0,d=t._tTime/t._tDur;return d&&!s&&(t._time*=u/t._dur),t._dur=u,t._tDur=l?l<0?1e10:Ze(u*(l+1)+t._rDelay*l):u,d>0&&!s&&au(t,t._tTime=t._tDur*d),t.parent&&su(t),o||si(t.parent,t),t},Uy=function(t){return t instanceof Tt?si(t):po(t,t._dur)},w2={_start:0,endTime:Ls,totalDuration:Ls},on=function e(t,r,o){var s=t.labels,l=t._recent||w2,u=t.duration()>=$n?l.endTime(!1):t._dur,d,f,h;return lt(r)&&(isNaN(r)||r in s)?(f=r.charAt(0),h=r.substr(-1)==="%",d=r.indexOf("="),f==="<"||f===">"?(d>=0&&(r=r.replace(/=/,"")),(f==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(r.substr(1))||0)*(h?(d<0?l:o).totalDuration()/100:1)):d<0?(r in s||(s[r]=u),s[r]):(f=parseFloat(r.charAt(d-1)+r.substr(d+1)),h&&o&&(f=f/100*(bt(o)?o[0]:o).totalDuration()),d>1?e(t,r.substr(0,d-1),o)+f:u+f)):r==null?u:+r},Ts=function(t,r,o){var s=Qn(r[1]),l=(s?2:1)+(t<2?0:1),u=r[l],d,f;if(s&&(u.duration=r[1]),u.parent=o,t){for(d=u,f=o;f&&!("immediateRender"in d);)d=f.vars.defaults||{},f=Dt(f.vars.inherit)&&f.parent;u.immediateRender=Dt(d.immediateRender),t<2?u.runBackwards=1:u.startAt=r[l-1]}return new qe(r[0],u,r[l+1])},Mr=function(t,r){return t||t===0?r(t):r},Gs=function(t,r,o){return o<t?t:o>r?r:o},xt=function(t,r){return!lt(t)||!(r=u2.exec(t))?"":r[1]},_2=function(t,r,o){return Mr(o,function(s){return Gs(t,r,s)})},$f=[].slice,Q1=function(t,r){return t&&Mn(t)&&"length"in t&&(!r&&!t.length||t.length-1 in t&&Mn(t[0]))&&!t.nodeType&&t!==Tn},b2=function(t,r,o){return o===void 0&&(o=[]),t.forEach(function(s){var l;return lt(s)&&!r||Q1(s,1)?(l=o).push.apply(l,an(s)):o.push(s)})||o},an=function(t,r,o){return Fe&&!r&&Fe.selector?Fe.selector(t):lt(t)&&!o&&(Pf||!mo())?$f.call((r||Mh).querySelectorAll(t),0):bt(t)?b2(t,o):Q1(t)?$f.call(t,0):t?[t]:[]},Df=function(t){return t=an(t)[0]||Rs("Invalid scope")||{},function(r){var o=t.current||t.nativeElement||t;return an(r,o.querySelectorAll?o:o===t?Rs("Invalid scope")||Mh.createElement("div"):t)}},q1=function(t){return t.sort(function(){return .5-Math.random()})},Z1=function(t){if(Ge(t))return t;var r=Mn(t)?t:{each:t},o=ai(r.ease),s=r.from||0,l=parseFloat(r.base)||0,u={},d=s>0&&s<1,f=isNaN(s)||d,h=r.axis,m=s,y=s;return lt(s)?m=y={center:.5,edges:.5,end:1}[s]||0:!d&&f&&(m=s[0],y=s[1]),function(x,b,S){var _=(S||r).length,k=u[_],P,j,D,R,A,F,z,N,U;if(!k){if(U=r.grid==="auto"?0:(r.grid||[1,$n])[1],!U){for(z=-1e8;z<(z=S[U++].getBoundingClientRect().left)&&U<_;);U<_&&U--}for(k=u[_]=[],P=f?Math.min(U,_)*m-.5:s%U,j=U===$n?0:f?_*y/U-.5:s/U|0,z=0,N=$n,F=0;F<_;F++)D=F%U-P,R=j-(F/U|0),k[F]=A=h?Math.abs(h==="y"?R:D):R1(D*D+R*R),A>z&&(z=A),A<N&&(N=A);s==="random"&&q1(k),k.max=z-N,k.min=N,k.v=_=(parseFloat(r.amount)||parseFloat(r.each)*(U>_?_-1:h?h==="y"?_/U:U:Math.max(U,_/U))||0)*(s==="edges"?-1:1),k.b=_<0?l-_:l,k.u=xt(r.amount||r.each)||0,o=o&&_<0?uw(o):o}return _=(k[x]-k.min)/k.max||0,Ze(k.b+(o?o(_):_)*k.v)+k.u}},Mf=function(t){var r=Math.pow(10,((t+"").split(".")[1]||"").length);return function(o){var s=Ze(Math.round(parseFloat(o)/t)*t*r);return(s-s%1)/r+(Qn(o)?0:xt(o))}},ew=function(t,r){var o=bt(t),s,l;return!o&&Mn(t)&&(s=o=t.radius||$n,t.values?(t=an(t.values),(l=!Qn(t[0]))&&(s*=s)):t=Mf(t.increment)),Mr(r,o?Ge(t)?function(u){return l=t(u),Math.abs(l-u)<=s?l:u}:function(u){for(var d=parseFloat(l?u.x:u),f=parseFloat(l?u.y:0),h=$n,m=0,y=t.length,x,b;y--;)l?(x=t[y].x-d,b=t[y].y-f,x=x*x+b*b):x=Math.abs(t[y]-d),x<h&&(h=x,m=y);return m=!s||h<=s?t[m]:u,l||m===u||Qn(u)?m:m+xt(u)}:Mf(t))},tw=function(t,r,o,s){return Mr(bt(t)?!r:o===!0?!!(o=0):!s,function(){return bt(t)?t[~~(Math.random()*t.length)]:(o=o||1e-5)&&(s=o<1?Math.pow(10,(o+"").length-2):1)&&Math.floor(Math.round((t-o/2+Math.random()*(r-t+o*.99))/o)*o*s)/s})},S2=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(s){return r.reduce(function(l,u){return u(l)},s)}},k2=function(t,r){return function(o){return t(parseFloat(o))+(r||xt(o))}},T2=function(t,r,o){return rw(t,r,0,1,o)},nw=function(t,r,o){return Mr(o,function(s){return t[~~r(s)]})},C2=function e(t,r,o){var s=r-t;return bt(t)?nw(t,e(0,t.length),r):Mr(o,function(l){return(s+(l-t)%s)%s+t})},P2=function e(t,r,o){var s=r-t,l=s*2;return bt(t)?nw(t,e(0,t.length-1),r):Mr(o,function(u){return u=(l+(u-t)%l)%l||0,t+(u>s?l-u:u)})},Os=function(t){for(var r=0,o="",s,l,u,d;~(s=t.indexOf("random(",r));)u=t.indexOf(")",s),d=t.charAt(s+7)==="[",l=t.substr(s+7,u-s-7).match(d?z1:Cf),o+=t.substr(r,s-r)+tw(d?l:+l[0],d?0:+l[1],+l[2]||1e-5),r=u+1;return o+t.substr(r,t.length-r)},rw=function(t,r,o,s,l){var u=r-t,d=s-o;return Mr(l,function(f){return o+((f-t)/u*d||0)})},E2=function e(t,r,o,s){var l=isNaN(t+r)?0:function(b){return(1-b)*t+b*r};if(!l){var u=lt(t),d={},f,h,m,y,x;if(o===!0&&(s=1)&&(o=null),u)t={p:t},r={p:r};else if(bt(t)&&!bt(r)){for(m=[],y=t.length,x=y-2,h=1;h<y;h++)m.push(e(t[h-1],t[h]));y--,l=function(S){S*=y;var _=Math.min(x,~~S);return m[_](S-_)},o=r}else s||(t=fo(bt(t)?[]:{},t));if(!m){for(f in r)zh.call(d,t,f,"get",r[f]);l=function(S){return Bh(S,d)||(u?t.p:t)}}}return Mr(o,l)},Hy=function(t,r,o){var s=t.labels,l=$n,u,d,f;for(u in s)d=s[u]-r,d<0==!!o&&d&&l>(d=Math.abs(d))&&(f=u,l=d);return f},Ht=function(t,r,o){var s=t.vars,l=s[r],u=Fe,d=t._ctx,f,h,m;if(l)return f=s[r+"Params"],h=s.callbackScope||t,o&&Pr.length&&zl(),d&&(Fe=d),m=f?l.apply(h,f):l.call(h),Fe=u,m},gs=function(t){return Ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ht),t.progress()<1&&Ht(t,"onInterrupt"),t},Ji,iw=[],ow=function(t){if(t)if(t=!t.name&&t.default||t,Dh()||t.headless){var r=t.name,o=Ge(t),s=r&&!o&&t.init?function(){this._props=[]}:t,l={init:Ls,render:Bh,add:zh,kill:H2,modifier:U2,rawVars:0},u={targetTest:0,get:0,getSetter:Vh,aliases:{},register:0};if(mo(),t!==s){if(Bt[r])return;Xt(s,Xt(Il(t,l),u)),fo(s.prototype,fo(l,Il(t,u))),Bt[s.prop=r]=s,t.targetTest&&(Sl.push(s),Lh[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}V1(r,s),t.register&&t.register(Ot,s,Rt)}else iw.push(t)},Ae=255,ys={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},Ld=function(t,r,o){return t+=t<0?1:t>1?-1:0,(t*6<1?r+(o-r)*t*6:t<.5?o:t*3<2?r+(o-r)*(2/3-t)*6:r)*Ae+.5|0},sw=function(t,r,o){var s=t?Qn(t)?[t>>16,t>>8&Ae,t&Ae]:0:ys.black,l,u,d,f,h,m,y,x,b,S;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ys[t])s=ys[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),u=t.charAt(2),d=t.charAt(3),t="#"+l+l+u+u+d+d+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ae,s&Ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ae,t&Ae]}else if(t.substr(0,3)==="hsl"){if(s=S=t.match(Cf),!r)f=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,u=m<=.5?m*(h+1):m+h-m*h,l=m*2-u,s.length>3&&(s[3]*=1),s[0]=Ld(f+1/3,l,u),s[1]=Ld(f,l,u),s[2]=Ld(f-1/3,l,u);else if(~t.indexOf("="))return s=t.match(O1),o&&s.length<4&&(s[3]=1),s}else s=t.match(Cf)||ys.transparent;s=s.map(Number)}return r&&!S&&(l=s[0]/Ae,u=s[1]/Ae,d=s[2]/Ae,y=Math.max(l,u,d),x=Math.min(l,u,d),m=(y+x)/2,y===x?f=h=0:(b=y-x,h=m>.5?b/(2-y-x):b/(y+x),f=y===l?(u-d)/b+(u<d?6:0):y===u?(d-l)/b+2:(l-u)/b+4,f*=60),s[0]=~~(f+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),o&&s.length<4&&(s[3]=1),s},aw=function(t){var r=[],o=[],s=-1;return t.split(Er).forEach(function(l){var u=l.match(Xi)||[];r.push.apply(r,u),o.push(s+=u.length+1)}),r.c=o,r},Wy=function(t,r,o){var s="",l=(t+s).match(Er),u=r?"hsla(":"rgba(",d=0,f,h,m,y;if(!l)return t;if(l=l.map(function(x){return(x=sw(x,r,1))&&u+(r?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),o&&(m=aw(t),f=o.c,f.join(s)!==m.c.join(s)))for(h=t.replace(Er,"1").split(Xi),y=h.length-1;d<y;d++)s+=h[d]+(~f.indexOf(d)?l.shift()||u+"0,0,0,0)":(m.length?m:l.length?l:o).shift());if(!h)for(h=t.split(Er),y=h.length-1;d<y;d++)s+=h[d]+l[d];return s+h[y]},Er=function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ys)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),j2=/hsl[a]?\(/,lw=function(t){var r=t.join(" "),o;if(Er.lastIndex=0,Er.test(r))return o=j2.test(r),t[1]=Wy(t[1],o),t[0]=Wy(t[0],o,aw(t[1])),!0},Fs,Ut=function(){var e=Date.now,t=500,r=33,o=e(),s=o,l=1e3/240,u=l,d=[],f,h,m,y,x,b,S=function _(k){var P=e()-s,j=k===!0,D,R,A,F;if((P>t||P<0)&&(o+=P-r),s+=P,A=s-o,D=A-u,(D>0||j)&&(F=++y.frame,x=A-y.time*1e3,y.time=A=A/1e3,u+=D+(D>=l?4:l-D),R=1),j||(f=h(_)),R)for(b=0;b<d.length;b++)d[b](A,x,F,k)};return y={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(k){return x/(1e3/(k||60))},wake:function(){I1&&(!Pf&&Dh()&&(Tn=Pf=window,Mh=Tn.document||{},Kt.gsap=Ot,(Tn.gsapVersions||(Tn.gsapVersions=[])).push(Ot.version),N1(Fl||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),iw.forEach(ow)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&y.sleep(),h=m||function(k){return setTimeout(k,u-y.time*1e3+1|0)},Fs=1,S(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(f),Fs=0,h=Ls},lagSmoothing:function(k,P){t=k||1/0,r=Math.min(P||33,t)},fps:function(k){l=1e3/(k||240),u=y.time*1e3+l},add:function(k,P,j){var D=P?function(R,A,F,z){k(R,A,F,z),y.remove(D)}:k;return y.remove(k),d[j?"unshift":"push"](D),mo(),D},remove:function(k,P){~(P=d.indexOf(k))&&d.splice(P,1)&&b>=P&&b--},_listeners:d},y}(),mo=function(){return!Fs&&Ut.wake()},we={},A2=/^[\d.\-M][\d.\-,\s]/,$2=/["']/g,D2=function(t){for(var r={},o=t.substr(1,t.length-3).split(":"),s=o[0],l=1,u=o.length,d,f,h;l<u;l++)f=o[l],d=l!==u-1?f.lastIndexOf(","):f.length,h=f.substr(0,d),r[s]=isNaN(h)?h.replace($2,"").trim():+h,s=f.substr(d+1).trim();return r},M2=function(t){var r=t.indexOf("(")+1,o=t.indexOf(")"),s=t.indexOf("(",r);return t.substring(r,~s&&s<o?t.indexOf(")",o+1):o)},R2=function(t){var r=(t+"").split("("),o=we[r[0]];return o&&r.length>1&&o.config?o.config.apply(null,~t.indexOf("{")?[D2(r[1])]:M2(t).split(",").map(W1)):we._CE&&A2.test(t)?we._CE("",t):o},uw=function(t){return function(r){return 1-t(1-r)}},cw=function e(t,r){for(var o=t._first,s;o;)o instanceof Tt?e(o,r):o.vars.yoyoEase&&(!o._yoyo||!o._repeat)&&o._yoyo!==r&&(o.timeline?e(o.timeline,r):(s=o._ease,o._ease=o._yEase,o._yEase=s,o._yoyo=r)),o=o._next},ai=function(t,r){return t&&(Ge(t)?t:we[t]||R2(t))||r},hi=function(t,r,o,s){o===void 0&&(o=function(f){return 1-r(1-f)}),s===void 0&&(s=function(f){return f<.5?r(f*2)/2:1-r((1-f)*2)/2});var l={easeIn:r,easeOut:o,easeInOut:s},u;return Mt(t,function(d){we[d]=Kt[d]=l,we[u=d.toLowerCase()]=o;for(var f in l)we[u+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=we[d+"."+f]=l[f]}),l},dw=function(t){return function(r){return r<.5?(1-t(1-r*2))/2:.5+t((r-.5)*2)/2}},Od=function e(t,r,o){var s=r>=1?r:1,l=(o||(t?.3:.45))/(r<1?r:1),u=l/Tf*(Math.asin(1/s)||0),d=function(m){return m===1?1:s*Math.pow(2,-10*m)*l2((m-u)*l)+1},f=t==="out"?d:t==="in"?function(h){return 1-d(1-h)}:dw(d);return l=Tf/l,f.config=function(h,m){return e(t,h,m)},f},Fd=function e(t,r){r===void 0&&(r=1.70158);var o=function(u){return u?--u*u*((r+1)*u+r)+1:0},s=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:dw(o);return s.config=function(l){return e(t,l)},s};Mt("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var r=t<5?t+1:t;hi(e+",Power"+(r-1),t?function(o){return Math.pow(o,r)}:function(o){return o},function(o){return 1-Math.pow(1-o,r)},function(o){return o<.5?Math.pow(o*2,r)/2:1-Math.pow((1-o)*2,r)/2})});we.Linear.easeNone=we.none=we.Linear.easeIn;hi("Elastic",Od("in"),Od("out"),Od());(function(e,t){var r=1/t,o=2*r,s=2.5*r,l=function(d){return d<r?e*d*d:d<o?e*Math.pow(d-1.5/t,2)+.75:d<s?e*(d-=2.25/t)*d+.9375:e*Math.pow(d-2.625/t,2)+.984375};hi("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);hi("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});hi("Circ",function(e){return-(R1(1-e*e)-1)});hi("Sine",function(e){return e===1?1:-a2(e*o2)+1});hi("Back",Fd("in"),Fd("out"),Fd());we.SteppedEase=we.steps=Kt.SteppedEase={config:function(t,r){t===void 0&&(t=1);var o=1/t,s=t+(r?0:1),l=r?1:0,u=1-_t;return function(d){return((s*Gs(0,u,d)|0)+l)*o}}};co.ease=we["quad.out"];Mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Oh+=e+","+e+"Params,"});var fw=function(t,r){this.id=s2++,t._gsap=this,this.target=t,this.harness=r,this.get=r?r.get:U1,this.set=r?r.getSetter:Vh},zs=function(){function e(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,po(this,+r.duration,1,1),this.data=r.data,Fe&&(this._ctx=Fe,Fe.data.push(this)),Fs||Ut.wake()}var t=e.prototype;return t.delay=function(o){return o||o===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+o-this._delay),this._delay=o,this):this._delay},t.duration=function(o){return arguments.length?this.totalDuration(this._repeat>0?o+(o+this._rDelay)*this._repeat:o):this.totalDuration()&&this._dur},t.totalDuration=function(o){return arguments.length?(this._dirty=0,po(this,this._repeat<0?o:(o-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(o,s){if(mo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(au(this,o),!l._dp||l.parent||K1(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&o<this._tDur||this._ts<0&&o>0||!this._tDur&&!o)&&Pn(this._dp,this,this._start-this._delay)}return(this._tTime!==o||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===_t||!o&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=o),H1(this,o,s)),this},t.time=function(o,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),o+By(this))%(this._dur+this._rDelay)||(o?this._dur:0),s):this._time},t.totalProgress=function(o,s){return arguments.length?this.totalTime(this.totalDuration()*o,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(o,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-o:o)+By(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(o,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(o-1)*l,s):this._repeat?ho(this._tTime,l)+1:1},t.timeScale=function(o,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===o)return this;var l=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime;return this._rts=+o||0,this._ts=this._ps||o===-1e-8?0:this._rts,this.totalTime(Gs(-Math.abs(this._delay),this._tDur,l),s!==!1),su(this),m2(this)},t.paused=function(o){return arguments.length?(this._ps!==o&&(this._ps=o,o?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},t.startTime=function(o){if(arguments.length){this._start=o;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Pn(s,this,o-this._delay),this}return this._start},t.endTime=function(o){return this._start+(Dt(o)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(o){var s=this.parent||this._dp;return s?o&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(s.rawTime(o),this):this._tTime:this._tTime},t.revert=function(o){o===void 0&&(o=d2);var s=ht;return ht=o,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(o),this.totalTime(-.01,o.suppressEvents)),this.data!=="nested"&&o.kill!==!1&&this.kill(),ht=s,this},t.globalTime=function(o){for(var s=this,l=arguments.length?o:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(o):l},t.repeat=function(o){return arguments.length?(this._repeat=o===1/0?-2:o,Uy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(o){if(arguments.length){var s=this._time;return this._rDelay=o,Uy(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(o){return arguments.length?(this._yoyo=o,this):this._yoyo},t.seek=function(o,s){return this.totalTime(on(this,o),Dt(s))},t.restart=function(o,s){return this.play().totalTime(o?-this._delay:0,Dt(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(o,s){return o!=null&&this.seek(o,s),this.reversed(!1).paused(!1)},t.reverse=function(o,s){return o!=null&&this.seek(o||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(o,s){return o!=null&&this.seek(o,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(o){return arguments.length?(!!o!==this.reversed()&&this.timeScale(-this._rts||(o?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var o=this.parent||this._dp,s=this._start,l;return!!(!o||this._ts&&this._initted&&o.isActive()&&(l=o.rawTime(!0))>=s&&l<this.endTime(!0)-_t)},t.eventCallback=function(o,s,l){var u=this.vars;return arguments.length>1?(s?(u[o]=s,l&&(u[o+"Params"]=l),o==="onUpdate"&&(this._onUpdate=s)):delete u[o],this):u[o]},t.then=function(o){var s=this;return new Promise(function(l){var u=Ge(o)?o:G1,d=function(){var h=s.then;s.then=null,Ge(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=h),l(u),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},t.kill=function(){gs(this)},e}();Xt(zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Tt=function(e){M1(t,e);function t(o,s){var l;return o===void 0&&(o={}),l=e.call(this,o)||this,l.labels={},l.smoothChildTiming=!!o.smoothChildTiming,l.autoRemoveChildren=!!o.autoRemoveChildren,l._sort=Dt(o.sortChildren),Ne&&Pn(o.parent||Ne,Wn(l),s),o.reversed&&l.reverse(),o.paused&&l.paused(!0),o.scrollTrigger&&X1(Wn(l),o.scrollTrigger),l}var r=t.prototype;return r.to=function(s,l,u){return Ts(0,arguments,this),this},r.from=function(s,l,u){return Ts(1,arguments,this),this},r.fromTo=function(s,l,u,d){return Ts(2,arguments,this),this},r.set=function(s,l,u){return l.duration=0,l.parent=this,ks(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new qe(s,l,on(this,u),1),this},r.call=function(s,l,u){return Pn(this,qe.delayedCall(0,s,l),u)},r.staggerTo=function(s,l,u,d,f,h,m){return u.duration=l,u.stagger=u.stagger||d,u.onComplete=h,u.onCompleteParams=m,u.parent=this,new qe(s,u,on(this,f)),this},r.staggerFrom=function(s,l,u,d,f,h,m){return u.runBackwards=1,ks(u).immediateRender=Dt(u.immediateRender),this.staggerTo(s,l,u,d,f,h,m)},r.staggerFromTo=function(s,l,u,d,f,h,m,y){return d.startAt=u,ks(d).immediateRender=Dt(d.immediateRender),this.staggerTo(s,l,d,f,h,m,y)},r.render=function(s,l,u){var d=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:Ze(s),y=this._zTime<0!=s<0&&(this._initted||!h),x,b,S,_,k,P,j,D,R,A,F,z;if(this!==Ne&&m>f&&s>=0&&(m=f),m!==this._tTime||u||y){if(d!==this._time&&h&&(m+=this._time-d,s+=this._time-d),x=m,R=this._start,D=this._ts,P=!D,y&&(h||(d=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(F=this._yoyo,k=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(k*100+s,l,u);if(x=Ze(m%k),m===f?(_=this._repeat,x=h):(A=Ze(m/k),_=~~A,_&&_===A&&(x=h,_--),x>h&&(x=h)),A=ho(this._tTime,k),!d&&this._tTime&&A!==_&&this._tTime-A*k-this._dur<=0&&(A=_),F&&_&1&&(x=h-x,z=1),_!==A&&!this._lock){var N=F&&A&1,U=N===(F&&_&1);if(_<A&&(N=!N),d=N?0:m%h?h:m,this._lock=1,this.render(d||(z?0:Ze(_*k)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Ht(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1),d&&d!==this._time||P!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,U&&(this._lock=2,d=N?h:-1e-4,this.render(d,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!P)return this;cw(this,z)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(j=x2(this,Ze(d),Ze(x)),j&&(m-=x-(x=j._start))),this._tTime=m,this._time=x,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,d=0),!d&&x&&!l&&!_&&(Ht(this,"onStart"),this._tTime!==m))return this;if(x>=d&&s>=0)for(b=this._first;b;){if(S=b._next,(b._act||x>=b._start)&&b._ts&&j!==b){if(b.parent!==this)return this.render(s,l,u);if(b.render(b._ts>0?(x-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(x-b._start)*b._ts,l,u),x!==this._time||!this._ts&&!P){j=0,S&&(m+=this._zTime=-1e-8);break}}b=S}else{b=this._last;for(var ie=s<0?s:x;b;){if(S=b._prev,(b._act||ie<=b._end)&&b._ts&&j!==b){if(b.parent!==this)return this.render(s,l,u);if(b.render(b._ts>0?(ie-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(ie-b._start)*b._ts,l,u||ht&&(b._initted||b._startAt)),x!==this._time||!this._ts&&!P){j=0,S&&(m+=this._zTime=ie?-1e-8:_t);break}}b=S}}if(j&&!l&&(this.pause(),j.render(x>=d?0:-1e-8)._zTime=x>=d?1:-1,this._ts))return this._start=R,su(this),this.render(s,l,u);this._onUpdate&&!l&&Ht(this,"onUpdate",!0),(m===f&&this._tTime>=this.totalDuration()||!m&&d)&&(R===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===f&&this._ts>0||!m&&this._ts<0)&&Ar(this,1),!l&&!(s<0&&!d)&&(m||d||!f)&&(Ht(this,m===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(s,l){var u=this;if(Qn(l)||(l=on(this,l,s)),!(s instanceof zs)){if(bt(s))return s.forEach(function(d){return u.add(d,l)}),this;if(lt(s))return this.addLabel(s,l);if(Ge(s))s=qe.delayedCall(0,s);else return this}return this!==s?Pn(this,s,l):this},r.getChildren=function(s,l,u,d){s===void 0&&(s=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),d===void 0&&(d=-1e8);for(var f=[],h=this._first;h;)h._start>=d&&(h instanceof qe?l&&f.push(h):(u&&f.push(h),s&&f.push.apply(f,h.getChildren(!0,l,u)))),h=h._next;return f},r.getById=function(s){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===s)return l[u]},r.remove=function(s){return lt(s)?this.removeLabel(s):Ge(s)?this.killTweensOf(s):(s.parent===this&&ou(this,s),s===this._recent&&(this._recent=this._last),si(this))},r.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ze(Ut.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),e.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},r.addLabel=function(s,l){return this.labels[s]=on(this,l),this},r.removeLabel=function(s){return delete this.labels[s],this},r.addPause=function(s,l,u){var d=qe.delayedCall(0,l||Ls,u);return d.data="isPause",this._hasPause=1,Pn(this,d,on(this,s))},r.removePause=function(s){var l=this._first;for(s=on(this,s);l;)l._start===s&&l.data==="isPause"&&Ar(l),l=l._next},r.killTweensOf=function(s,l,u){for(var d=this.getTweensOf(s,u),f=d.length;f--;)Sr!==d[f]&&d[f].kill(s,l);return this},r.getTweensOf=function(s,l){for(var u=[],d=an(s),f=this._first,h=Qn(l),m;f;)f instanceof qe?f2(f._targets,d)&&(h?(!Sr||f._initted&&f._ts)&&f.globalTime(0)<=l&&f.globalTime(f.totalDuration())>l:!l||f.isActive())&&u.push(f):(m=f.getTweensOf(d,l)).length&&u.push.apply(u,m),f=f._next;return u},r.tweenTo=function(s,l){l=l||{};var u=this,d=on(u,s),f=l,h=f.startAt,m=f.onStart,y=f.onStartParams,x=f.immediateRender,b,S=qe.to(u,Xt({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:d,overwrite:"auto",duration:l.duration||Math.abs((d-(h&&"time"in h?h.time:u._time))/u.timeScale())||_t,onStart:function(){if(u.pause(),!b){var k=l.duration||Math.abs((d-(h&&"time"in h?h.time:u._time))/u.timeScale());S._dur!==k&&po(S,k,0,1).render(S._time,!0,!0),b=1}m&&m.apply(S,y||[])}},l));return x?S.render(0):S},r.tweenFromTo=function(s,l,u){return this.tweenTo(l,Xt({startAt:{time:on(this,s)}},u))},r.recent=function(){return this._recent},r.nextLabel=function(s){return s===void 0&&(s=this._time),Hy(this,on(this,s))},r.previousLabel=function(s){return s===void 0&&(s=this._time),Hy(this,on(this,s),1)},r.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+_t)},r.shiftChildren=function(s,l,u){u===void 0&&(u=0);for(var d=this._first,f=this.labels,h;d;)d._start>=u&&(d._start+=s,d._end+=s),d=d._next;if(l)for(h in f)f[h]>=u&&(f[h]+=s);return si(this)},r.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return e.prototype.invalidate.call(this,s)},r.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),si(this)},r.totalDuration=function(s){var l=0,u=this,d=u._last,f=$n,h,m,y;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(y=u.parent;d;)h=d._prev,d._dirty&&d.totalDuration(),m=d._start,m>f&&u._sort&&d._ts&&!u._lock?(u._lock=1,Pn(u,d,m-d._delay,1)._lock=0):f=m,m<0&&d._ts&&(l-=m,(!y&&!u._dp||y&&y.smoothChildTiming)&&(u._start+=m/u._ts,u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),f=0),d._end>l&&d._ts&&(l=d._end),d=h;po(u,u===Ne&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(s){if(Ne._ts&&(H1(Ne,Nl(s,Ne)),B1=Ut.frame),Ut.frame>=Ny){Ny+=Gt.autoSleep||120;var l=Ne._first;if((!l||!l._ts)&&Gt.autoSleep&&Ut._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ut.sleep()}}},t}(zs);Xt(Tt.prototype,{_lock:0,_hasPause:0,_forcing:0});var L2=function(t,r,o,s,l,u,d){var f=new Rt(this._pt,t,r,0,1,vw,null,l),h=0,m=0,y,x,b,S,_,k,P,j;for(f.b=o,f.e=s,o+="",s+="",(P=~s.indexOf("random("))&&(s=Os(s)),u&&(j=[o,s],u(j,t,r),o=j[0],s=j[1]),x=o.match(Md)||[];y=Md.exec(s);)S=y[0],_=s.substring(h,y.index),b?b=(b+1)%5:_.substr(-5)==="rgba("&&(b=1),S!==x[m++]&&(k=parseFloat(x[m-1])||0,f._pt={_next:f._pt,p:_||m===1?_:",",s:k,c:S.charAt(1)==="="?Zi(k,S)-k:parseFloat(S)-k,m:b&&b<4?Math.round:0},h=Md.lastIndex);return f.c=h<s.length?s.substring(h,s.length):"",f.fp=d,(F1.test(s)||P)&&(f.e=0),this._pt=f,f},zh=function(t,r,o,s,l,u,d,f,h,m){Ge(s)&&(s=s(l||0,t,u));var y=t[r],x=o!=="get"?o:Ge(y)?h?t[r.indexOf("set")||!Ge(t["get"+r.substr(3)])?r:"get"+r.substr(3)](h):t[r]():y,b=Ge(y)?h?N2:gw:Nh,S;if(lt(s)&&(~s.indexOf("random(")&&(s=Os(s)),s.charAt(1)==="="&&(S=Zi(x,s)+(xt(x)||0),(S||S===0)&&(s=S))),!m||x!==s||Rf)return!isNaN(x*s)&&s!==""?(S=new Rt(this._pt,t,r,+x||0,s-(x||0),typeof y=="boolean"?B2:yw,0,b),h&&(S.fp=h),d&&S.modifier(d,this,t),this._pt=S):(!y&&!(r in t)&&Rh(r,s),L2.call(this,t,r,x,s,b,f||Gt.stringFilter,h))},O2=function(t,r,o,s,l){if(Ge(t)&&(t=Cs(t,l,r,o,s)),!Mn(t)||t.style&&t.nodeType||bt(t)||L1(t))return lt(t)?Cs(t,l,r,o,s):t;var u={},d;for(d in t)u[d]=Cs(t[d],l,r,o,s);return u},hw=function(t,r,o,s,l,u){var d,f,h,m;if(Bt[t]&&(d=new Bt[t]).init(l,d.rawVars?r[t]:O2(r[t],s,l,u,o),o,s,u)!==!1&&(o._pt=f=new Rt(o._pt,l,t,0,1,d.render,d,0,d.priority),o!==Ji))for(h=o._ptLookup[o._targets.indexOf(l)],m=d._props.length;m--;)h[d._props[m]]=f;return d},Sr,Rf,Ih=function e(t,r,o){var s=t.vars,l=s.ease,u=s.startAt,d=s.immediateRender,f=s.lazy,h=s.onUpdate,m=s.runBackwards,y=s.yoyoEase,x=s.keyframes,b=s.autoRevert,S=t._dur,_=t._startAt,k=t._targets,P=t.parent,j=P&&P.data==="nested"?P.vars.targets:k,D=t._overwrite==="auto"&&!Ah,R=t.timeline,A,F,z,N,U,ie,pe,he,fe,_e,ke,ge,ne;if(R&&(!x||!l)&&(l="none"),t._ease=ai(l,co.ease),t._yEase=y?uw(ai(y===!0?l:y,co.ease)):0,y&&t._yoyo&&!t._repeat&&(y=t._yEase,t._yEase=t._ease,t._ease=y),t._from=!R&&!!s.runBackwards,!R||x&&!s.stagger){if(he=k[0]?oi(k[0]).harness:0,ge=he&&s[he.prop],A=Il(s,Lh),_&&(_._zTime<0&&_.progress(1),r<0&&m&&d&&!b?_.render(-1,!0):_.revert(m&&S?bl:c2),_._lazy=0),u){if(Ar(t._startAt=qe.set(k,Xt({data:"isStart",overwrite:!1,parent:P,immediateRender:!0,lazy:!_&&Dt(f),startAt:null,delay:0,onUpdate:h&&function(){return Ht(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(ht||!d&&!b)&&t._startAt.revert(bl),d&&S&&r<=0&&o<=0){r&&(t._zTime=r);return}}else if(m&&S&&!_){if(r&&(d=!1),z=Xt({overwrite:!1,data:"isFromStart",lazy:d&&!_&&Dt(f),immediateRender:d,stagger:0,parent:P},A),ge&&(z[he.prop]=ge),Ar(t._startAt=qe.set(k,z)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(ht?t._startAt.revert(bl):t._startAt.render(-1,!0)),t._zTime=r,!d)e(t._startAt,_t,_t);else if(!r)return}for(t._pt=t._ptCache=0,f=S&&Dt(f)||f&&!S,F=0;F<k.length;F++){if(U=k[F],pe=U._gsap||Fh(k)[F]._gsap,t._ptLookup[F]=_e={},Ef[pe.id]&&Pr.length&&zl(),ke=j===k?F:j.indexOf(U),he&&(fe=new he).init(U,ge||A,t,ke,j)!==!1&&(t._pt=N=new Rt(t._pt,U,fe.name,0,1,fe.render,fe,0,fe.priority),fe._props.forEach(function(G){_e[G]=N}),fe.priority&&(ie=1)),!he||ge)for(z in A)Bt[z]&&(fe=hw(z,A,t,ke,U,j))?fe.priority&&(ie=1):_e[z]=N=zh.call(t,U,z,"get",A[z],ke,j,0,s.stringFilter);t._op&&t._op[F]&&t.kill(U,t._op[F]),D&&t._pt&&(Sr=t,Ne.killTweensOf(U,_e,t.globalTime(r)),ne=!t.parent,Sr=0),t._pt&&f&&(Ef[pe.id]=1)}ie&&xw(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!ne,x&&r<=0&&R.render($n,!0,!0)},F2=function(t,r,o,s,l,u,d,f){var h=(t._pt&&t._ptCache||(t._ptCache={}))[r],m,y,x,b;if(!h)for(h=t._ptCache[r]=[],x=t._ptLookup,b=t._targets.length;b--;){if(m=x[b][r],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==r&&m.fp!==r;)m=m._next;if(!m)return Rf=1,t.vars[r]="+=0",Ih(t,d),Rf=0,f?Rs(r+" not eligible for reset"):1;h.push(m)}for(b=h.length;b--;)y=h[b],m=y._pt||y,m.s=(s||s===0)&&!l?s:m.s+(s||0)+u*m.c,m.c=o-m.s,y.e&&(y.e=Je(o)+xt(y.e)),y.b&&(y.b=m.s+xt(y.b))},z2=function(t,r){var o=t[0]?oi(t[0]).harness:0,s=o&&o.aliases,l,u,d,f;if(!s)return r;l=fo({},r);for(u in s)if(u in l)for(f=s[u].split(","),d=f.length;d--;)l[f[d]]=l[u];return l},I2=function(t,r,o,s){var l=r.ease||s||"power1.inOut",u,d;if(bt(r))d=o[t]||(o[t]=[]),r.forEach(function(f,h){return d.push({t:h/(r.length-1)*100,v:f,e:l})});else for(u in r)d=o[u]||(o[u]=[]),u==="ease"||d.push({t:parseFloat(t),v:r[u],e:l})},Cs=function(t,r,o,s,l){return Ge(t)?t.call(r,o,s,l):lt(t)&&~t.indexOf("random(")?Os(t):t},pw=Oh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mw={};Mt(pw+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return mw[e]=1});var qe=function(e){M1(t,e);function t(o,s,l,u){var d;typeof s=="number"&&(l.duration=s,s=l,l=null),d=e.call(this,u?s:ks(s))||this;var f=d.vars,h=f.duration,m=f.delay,y=f.immediateRender,x=f.stagger,b=f.overwrite,S=f.keyframes,_=f.defaults,k=f.scrollTrigger,P=f.yoyoEase,j=s.parent||Ne,D=(bt(o)||L1(o)?Qn(o[0]):"length"in s)?[o]:an(o),R,A,F,z,N,U,ie,pe;if(d._targets=D.length?Fh(D):Rs("GSAP target "+o+" not found. https://gsap.com",!Gt.nullTargetWarn)||[],d._ptLookup=[],d._overwrite=b,S||x||cl(h)||cl(m)){if(s=d.vars,R=d.timeline=new Tt({data:"nested",defaults:_||{},targets:j&&j.data==="nested"?j.vars.targets:D}),R.kill(),R.parent=R._dp=Wn(d),R._start=0,x||cl(h)||cl(m)){if(z=D.length,ie=x&&Z1(x),Mn(x))for(N in x)~pw.indexOf(N)&&(pe||(pe={}),pe[N]=x[N]);for(A=0;A<z;A++)F=Il(s,mw),F.stagger=0,P&&(F.yoyoEase=P),pe&&fo(F,pe),U=D[A],F.duration=+Cs(h,Wn(d),A,U,D),F.delay=(+Cs(m,Wn(d),A,U,D)||0)-d._delay,!x&&z===1&&F.delay&&(d._delay=m=F.delay,d._start+=m,F.delay=0),R.to(U,F,ie?ie(A,U,D):0),R._ease=we.none;R.duration()?h=m=0:d.timeline=0}else if(S){ks(Xt(R.vars.defaults,{ease:"none"})),R._ease=ai(S.ease||s.ease||"none");var he=0,fe,_e,ke;if(bt(S))S.forEach(function(ge){return R.to(D,ge,">")}),R.duration();else{F={};for(N in S)N==="ease"||N==="easeEach"||I2(N,S[N],F,S.easeEach);for(N in F)for(fe=F[N].sort(function(ge,ne){return ge.t-ne.t}),he=0,A=0;A<fe.length;A++)_e=fe[A],ke={ease:_e.e,duration:(_e.t-(A?fe[A-1].t:0))/100*h},ke[N]=_e.v,R.to(D,ke,he),he+=ke.duration;R.duration()<h&&R.to({},{duration:h-R.duration()})}}h||d.duration(h=R.duration())}else d.timeline=0;return b===!0&&!Ah&&(Sr=Wn(d),Ne.killTweensOf(D),Sr=0),Pn(j,Wn(d),l),s.reversed&&d.reverse(),s.paused&&d.paused(!0),(y||!h&&!S&&d._start===Ze(j._time)&&Dt(y)&&g2(Wn(d))&&j.data!=="nested")&&(d._tTime=-1e-8,d.render(Math.max(0,-m)||0)),k&&X1(Wn(d),k),d}var r=t.prototype;return r.render=function(s,l,u){var d=this._time,f=this._tDur,h=this._dur,m=s<0,y=s>f-_t&&!m?f:s<_t?0:s,x,b,S,_,k,P,j,D,R;if(!h)v2(this,s,l,u);else if(y!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(x=y,D=this.timeline,this._repeat){if(_=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(_*100+s,l,u);if(x=Ze(y%_),y===f?(S=this._repeat,x=h):(k=Ze(y/_),S=~~k,S&&S===k?(x=h,S--):x>h&&(x=h)),P=this._yoyo&&S&1,P&&(R=this._yEase,x=h-x),k=ho(this._tTime,_),x===d&&!u&&this._initted&&S===k)return this._tTime=y,this;S!==k&&(D&&this._yEase&&cw(D,P),this.vars.repeatRefresh&&!P&&!this._lock&&x!==_&&this._initted&&(this._lock=u=1,this.render(Ze(_*S),!0).invalidate()._lock=0))}if(!this._initted){if(J1(this,m?s:x,u,l,y))return this._tTime=0,this;if(d!==this._time&&!(u&&this.vars.repeatRefresh&&S!==k))return this;if(h!==this._dur)return this.render(s,l,u)}if(this._tTime=y,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=j=(R||this._ease)(x/h),this._from&&(this.ratio=j=1-j),x&&!d&&!l&&!S&&(Ht(this,"onStart"),this._tTime!==y))return this;for(b=this._pt;b;)b.r(j,b.d),b=b._next;D&&D.render(s<0?s:D._dur*D._ease(x/this._dur),l,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&jf(this,s,l,u),Ht(this,"onUpdate")),this._repeat&&S!==k&&this.vars.onRepeat&&!l&&this.parent&&Ht(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(m&&!this._onUpdate&&jf(this,s,!0,!0),(s||!h)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&Ar(this,1),!l&&!(m&&!d)&&(y||d||P)&&(Ht(this,y===f?"onComplete":"onReverseComplete",!0),this._prom&&!(y<f&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),e.prototype.invalidate.call(this,s)},r.resetTo=function(s,l,u,d,f){Fs||Ut.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||Ih(this,h),m=this._ease(h/this._dur),F2(this,s,l,u,d,m,h,f)?this.resetTo(s,l,u,d,1):(au(this,0),this.parent||Y1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?gs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ht),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Sr&&Sr.vars.overwrite!==!0)._first||gs(this),this.parent&&u!==this.timeline.totalDuration()&&po(this,this._dur*this.timeline._tDur/u,0,1),this}var d=this._targets,f=s?an(s):d,h=this._ptLookup,m=this._pt,y,x,b,S,_,k,P;if((!l||l==="all")&&p2(d,f))return l==="all"&&(this._pt=0),gs(this);for(y=this._op=this._op||[],l!=="all"&&(lt(l)&&(_={},Mt(l,function(j){return _[j]=1}),l=_),l=z2(d,l)),P=d.length;P--;)if(~f.indexOf(d[P])){x=h[P],l==="all"?(y[P]=l,S=x,b={}):(b=y[P]=y[P]||{},S=l);for(_ in S)k=x&&x[_],k&&((!("kill"in k.d)||k.d.kill(_)===!0)&&ou(this,k,"_pt"),delete x[_]),b!=="all"&&(b[_]=1)}return this._initted&&!this._pt&&m&&gs(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return Ts(1,arguments)},t.delayedCall=function(s,l,u,d){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:d})},t.fromTo=function(s,l,u){return Ts(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,u){return Ne.killTweensOf(s,l,u)},t}(zs);Xt(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mt("staggerTo,staggerFrom,staggerFromTo",function(e){qe[e]=function(){var t=new Tt,r=$f.call(arguments,0);return r.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,r)}});var Nh=function(t,r,o){return t[r]=o},gw=function(t,r,o){return t[r](o)},N2=function(t,r,o,s){return t[r](s.fp,o)},V2=function(t,r,o){return t.setAttribute(r,o)},Vh=function(t,r){return Ge(t[r])?gw:$h(t[r])&&t.setAttribute?V2:Nh},yw=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e6)/1e6,r)},B2=function(t,r){return r.set(r.t,r.p,!!(r.s+r.c*t),r)},vw=function(t,r){var o=r._pt,s="";if(!t&&r.b)s=r.b;else if(t===1&&r.e)s=r.e;else{for(;o;)s=o.p+(o.m?o.m(o.s+o.c*t):Math.round((o.s+o.c*t)*1e4)/1e4)+s,o=o._next;s+=r.c}r.set(r.t,r.p,s,r)},Bh=function(t,r){for(var o=r._pt;o;)o.r(t,o.d),o=o._next},U2=function(t,r,o,s){for(var l=this._pt,u;l;)u=l._next,l.p===s&&l.modifier(t,r,o),l=u},H2=function(t){for(var r=this._pt,o,s;r;)s=r._next,r.p===t&&!r.op||r.op===t?ou(this,r,"_pt"):r.dep||(o=1),r=s;return!o},W2=function(t,r,o,s){s.mSet(t,r,s.m.call(s.tween,o,s.mt),s)},xw=function(t){for(var r=t._pt,o,s,l,u;r;){for(o=r._next,s=l;s&&s.pr>r.pr;)s=s._next;(r._prev=s?s._prev:u)?r._prev._next=r:l=r,(r._next=s)?s._prev=r:u=r,r=o}t._pt=l},Rt=function(){function e(r,o,s,l,u,d,f,h,m){this.t=o,this.s=l,this.c=u,this.p=s,this.r=d||yw,this.d=f||this,this.set=h||Nh,this.pr=m||0,this._next=r,r&&(r._prev=this)}var t=e.prototype;return t.modifier=function(o,s,l){this.mSet=this.mSet||this.set,this.set=W2,this.m=o,this.mt=l,this.tween=s},e}();Mt(Oh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return Lh[e]=1});Kt.TweenMax=Kt.TweenLite=qe;Kt.TimelineLite=Kt.TimelineMax=Tt;Ne=new Tt({sortChildren:!1,defaults:co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gt.stringFilter=lw;var li=[],kl={},G2=[],Gy=0,Y2=0,zd=function(t){return(kl[t]||G2).map(function(r){return r()})},Lf=function(){var t=Date.now(),r=[];t-Gy>2&&(zd("matchMediaInit"),li.forEach(function(o){var s=o.queries,l=o.conditions,u,d,f,h;for(d in s)u=Tn.matchMedia(s[d]).matches,u&&(f=1),u!==l[d]&&(l[d]=u,h=1);h&&(o.revert(),f&&r.push(o))}),zd("matchMediaRevert"),r.forEach(function(o){return o.onMatch(o,function(s){return o.add(null,s)})}),Gy=t,zd("matchMedia"))},ww=function(){function e(r,o){this.selector=o&&Df(o),this.data=[],this._r=[],this.isReverted=!1,this.id=Y2++,r&&this.add(r)}var t=e.prototype;return t.add=function(o,s,l){Ge(o)&&(l=s,s=o,o=Ge);var u=this,d=function(){var h=Fe,m=u.selector,y;return h&&h!==u&&h.data.push(u),l&&(u.selector=Df(l)),Fe=u,y=s.apply(u,arguments),Ge(y)&&u._r.push(y),Fe=h,u.selector=m,u.isReverted=!1,y};return u.last=d,o===Ge?d(u,function(f){return u.add(null,f)}):o?u[o]=d:d},t.ignore=function(o){var s=Fe;Fe=null,o(this),Fe=s},t.getTweens=function(){var o=[];return this.data.forEach(function(s){return s instanceof e?o.push.apply(o,s.getTweens()):s instanceof qe&&!(s.parent&&s.parent.data==="nested")&&o.push(s)}),o},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(o,s){var l=this;if(o?function(){for(var d=l.getTweens(),f=l.data.length,h;f--;)h=l.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return d.splice(d.indexOf(m),1)}));for(d.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,y){return y.g-m.g||-1/0}).forEach(function(m){return m.t.revert(o)}),f=l.data.length;f--;)h=l.data[f],h instanceof Tt?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof qe)&&h.revert&&h.revert(o);l._r.forEach(function(m){return m(o,l)}),l.isReverted=!0}():this.data.forEach(function(d){return d.kill&&d.kill()}),this.clear(),s)for(var u=li.length;u--;)li[u].id===this.id&&li.splice(u,1)},t.revert=function(o){this.kill(o||{})},e}(),K2=function(){function e(r){this.contexts=[],this.scope=r,Fe&&Fe.data.push(this)}var t=e.prototype;return t.add=function(o,s,l){Mn(o)||(o={matches:o});var u=new ww(0,l||this.scope),d=u.conditions={},f,h,m;Fe&&!u.selector&&(u.selector=Fe.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=o;for(h in o)h==="all"?m=1:(f=Tn.matchMedia(o[h]),f&&(li.indexOf(u)<0&&li.push(u),(d[h]=f.matches)&&(m=1),f.addListener?f.addListener(Lf):f.addEventListener("change",Lf)));return m&&s(u,function(y){return u.add(null,y)}),this},t.revert=function(o){this.kill(o||{})},t.kill=function(o){this.contexts.forEach(function(s){return s.kill(o,!0)})},e}(),Vl={registerPlugin:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach(function(s){return ow(s)})},timeline:function(t){return new Tt(t)},getTweensOf:function(t,r){return Ne.getTweensOf(t,r)},getProperty:function(t,r,o,s){lt(t)&&(t=an(t)[0]);var l=oi(t||{}).get,u=o?G1:W1;return o==="native"&&(o=""),t&&(r?u((Bt[r]&&Bt[r].get||l)(t,r,o,s)):function(d,f,h){return u((Bt[d]&&Bt[d].get||l)(t,d,f,h))})},quickSetter:function(t,r,o){if(t=an(t),t.length>1){var s=t.map(function(m){return Ot.quickSetter(m,r,o)}),l=s.length;return function(m){for(var y=l;y--;)s[y](m)}}t=t[0]||{};var u=Bt[r],d=oi(t),f=d.harness&&(d.harness.aliases||{})[r]||r,h=u?function(m){var y=new u;Ji._pt=0,y.init(t,o?m+o:m,Ji,0,[t]),y.render(1,y),Ji._pt&&Bh(1,Ji)}:d.set(t,f);return u?h:function(m){return h(t,f,o?m+o:m,d,1)}},quickTo:function(t,r,o){var s,l=Ot.to(t,Xt((s={},s[r]="+=0.1",s.paused=!0,s.stagger=0,s),o||{})),u=function(f,h,m){return l.resetTo(r,f,h,m)};return u.tween=l,u},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ai(t.ease,co.ease)),Vy(co,t||{})},config:function(t){return Vy(Gt,t||{})},registerEffect:function(t){var r=t.name,o=t.effect,s=t.plugins,l=t.defaults,u=t.extendTimeline;(s||"").split(",").forEach(function(d){return d&&!Bt[d]&&!Kt[d]&&Rs(r+" effect requires "+d+" plugin.")}),Rd[r]=function(d,f,h){return o(an(d),Xt(f||{},l),h)},u&&(Tt.prototype[r]=function(d,f,h){return this.add(Rd[r](d,Mn(f)?f:(h=f)&&{},this),h)})},registerEase:function(t,r){we[t]=ai(r)},parseEase:function(t,r){return arguments.length?ai(t,r):we},getById:function(t){return Ne.getById(t)},exportRoot:function(t,r){t===void 0&&(t={});var o=new Tt(t),s,l;for(o.smoothChildTiming=Dt(t.smoothChildTiming),Ne.remove(o),o._dp=0,o._time=o._tTime=Ne._time,s=Ne._first;s;)l=s._next,(r||!(!s._dur&&s instanceof qe&&s.vars.onComplete===s._targets[0]))&&Pn(o,s,s._start-s._delay),s=l;return Pn(Ne,o,0),o},context:function(t,r){return t?new ww(t,r):Fe},matchMedia:function(t){return new K2(t)},matchMediaRefresh:function(){return li.forEach(function(t){var r=t.conditions,o,s;for(s in r)r[s]&&(r[s]=!1,o=1);o&&t.revert()})||Lf()},addEventListener:function(t,r){var o=kl[t]||(kl[t]=[]);~o.indexOf(r)||o.push(r)},removeEventListener:function(t,r){var o=kl[t],s=o&&o.indexOf(r);s>=0&&o.splice(s,1)},utils:{wrap:C2,wrapYoyo:P2,distribute:Z1,random:tw,snap:ew,normalize:T2,getUnit:xt,clamp:_2,splitColor:sw,toArray:an,selector:Df,mapRange:rw,pipe:S2,unitize:k2,interpolate:E2,shuffle:q1},install:N1,effects:Rd,ticker:Ut,updateRoot:Tt.updateRoot,plugins:Bt,globalTimeline:Ne,core:{PropTween:Rt,globals:V1,Tween:qe,Timeline:Tt,Animation:zs,getCache:oi,_removeLinkedListItem:ou,reverting:function(){return ht},context:function(t){return t&&Fe&&(Fe.data.push(t),t._ctx=Fe),Fe},suppressOverwrites:function(t){return Ah=t}}};Mt("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return Vl[e]=qe[e]});Ut.add(Tt.updateRoot);Ji=Vl.to({},{duration:0});var X2=function(t,r){for(var o=t._pt;o&&o.p!==r&&o.op!==r&&o.fp!==r;)o=o._next;return o},J2=function(t,r){var o=t._targets,s,l,u;for(s in r)for(l=o.length;l--;)u=t._ptLookup[l][s],u&&(u=u.d)&&(u._pt&&(u=X2(u,s)),u&&u.modifier&&u.modifier(r[s],t,o[l],s))},Id=function(t,r){return{name:t,rawVars:1,init:function(s,l,u){u._onInit=function(d){var f,h;if(lt(l)&&(f={},Mt(l,function(m){return f[m]=1}),l=f),r){f={};for(h in l)f[h]=r(l[h]);l=f}J2(d,l)}}}},Ot=Vl.registerPlugin({name:"attr",init:function(t,r,o,s,l){var u,d,f;this.tween=o;for(u in r)f=t.getAttribute(u)||"",d=this.add(t,"setAttribute",(f||0)+"",r[u],s,l,0,0,u),d.op=u,d.b=f,this._props.push(u)},render:function(t,r){for(var o=r._pt;o;)ht?o.set(o.t,o.p,o.b,o):o.r(t,o.d),o=o._next}},{name:"endArray",init:function(t,r){for(var o=r.length;o--;)this.add(t,o,t[o]||0,r[o],0,0,0,0,0,1)}},Id("roundProps",Mf),Id("modifiers"),Id("snap",ew))||Vl;qe.version=Tt.version=Ot.version="3.12.7";I1=1;Dh()&&mo();we.Power0;we.Power1;we.Power2;we.Power3;we.Power4;we.Linear;we.Quad;we.Cubic;we.Quart;we.Quint;we.Strong;we.Elastic;we.Back;we.SteppedEase;we.Bounce;we.Sine;we.Expo;we.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yy,kr,eo,Uh,ti,Ky,Hh,Q2=function(){return typeof window<"u"},qn={},qr=180/Math.PI,to=Math.PI/180,Bi=Math.atan2,Xy=1e8,Wh=/([A-Z])/g,q2=/(left|right|width|margin|padding|x)/i,Z2=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Of=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},ej=function(t,r){return r.set(r.t,r.p,t===1?r.e:Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},tj=function(t,r){return r.set(r.t,r.p,t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},nj=function(t,r){var o=r.s+r.c*t;r.set(r.t,r.p,~~(o+(o<0?-.5:.5))+r.u,r)},_w=function(t,r){return r.set(r.t,r.p,t?r.e:r.b,r)},bw=function(t,r){return r.set(r.t,r.p,t!==1?r.b:r.e,r)},rj=function(t,r,o){return t.style[r]=o},ij=function(t,r,o){return t.style.setProperty(r,o)},oj=function(t,r,o){return t._gsap[r]=o},sj=function(t,r,o){return t._gsap.scaleX=t._gsap.scaleY=o},aj=function(t,r,o,s,l){var u=t._gsap;u.scaleX=u.scaleY=o,u.renderTransform(l,u)},lj=function(t,r,o,s,l){var u=t._gsap;u[r]=o,u.renderTransform(l,u)},Be="transform",Lt=Be+"Origin",uj=function e(t,r){var o=this,s=this.target,l=s.style,u=s._gsap;if(t in qn&&l){if(this.tfm=this.tfm||{},t!=="transform")t=En[t]||t,~t.indexOf(",")?t.split(",").forEach(function(d){return o.tfm[d]=Gn(s,d)}):this.tfm[t]=u.x?u[t]:Gn(s,t),t===Lt&&(this.tfm.zOrigin=u.zOrigin);else return En.transform.split(",").forEach(function(d){return e.call(o,d,r)});if(this.props.indexOf(Be)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Lt,r,"")),t=Be}(l||r)&&this.props.push(t,r,l[t])},Sw=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cj=function(){var t=this.props,r=this.target,o=r.style,s=r._gsap,l,u;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?r[t[l]](t[l+2]):r[t[l]]=t[l+2]:t[l+2]?o[t[l]]=t[l+2]:o.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(Wh,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),l=Hh(),(!l||!l.isStart)&&!o[Be]&&(Sw(o),s.zOrigin&&o[Lt]&&(o[Lt]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},kw=function(t,r){var o={target:t,props:[],revert:cj,save:uj};return t._gsap||Ot.core.getCache(t),r&&t.style&&t.nodeType&&r.split(",").forEach(function(s){return o.save(s)}),o},Tw,Ff=function(t,r){var o=kr.createElementNS?kr.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):kr.createElement(t);return o&&o.style?o:kr.createElement(t)},Dn=function e(t,r,o){var s=getComputedStyle(t);return s[r]||s.getPropertyValue(r.replace(Wh,"-$1").toLowerCase())||s.getPropertyValue(r)||!o&&e(t,go(r)||r,1)||""},Jy="O,Moz,ms,Ms,Webkit".split(","),go=function(t,r,o){var s=r||ti,l=s.style,u=5;if(t in l&&!o)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(Jy[u]+t in l););return u<0?null:(u===3?"ms":u>=0?Jy[u]:"")+t},zf=function(){Q2()&&window.document&&(Yy=window,kr=Yy.document,eo=kr.documentElement,ti=Ff("div")||{style:{}},Ff("div"),Be=go(Be),Lt=Be+"Origin",ti.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Tw=!!go("perspective"),Hh=Ot.core.reverting,Uh=1)},Qy=function(t){var r=t.ownerSVGElement,o=Ff("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",o.appendChild(s),eo.appendChild(o);try{l=s.getBBox()}catch{}return o.removeChild(s),eo.removeChild(o),l},qy=function(t,r){for(var o=r.length;o--;)if(t.hasAttribute(r[o]))return t.getAttribute(r[o])},Cw=function(t){var r,o;try{r=t.getBBox()}catch{r=Qy(t),o=1}return r&&(r.width||r.height)||o||(r=Qy(t)),r&&!r.width&&!r.x&&!r.y?{x:+qy(t,["x","cx","x1"])||0,y:+qy(t,["y","cy","y1"])||0,width:0,height:0}:r},Pw=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Cw(t))},di=function(t,r){if(r){var o=t.style,s;r in qn&&r!==Lt&&(r=Be),o.removeProperty?(s=r.substr(0,2),(s==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),o.removeProperty(s==="--"?r:r.replace(Wh,"-$1").toLowerCase())):o.removeAttribute(r)}},Tr=function(t,r,o,s,l,u){var d=new Rt(t._pt,r,o,0,1,u?bw:_w);return t._pt=d,d.b=s,d.e=l,t._props.push(o),d},Zy={deg:1,rad:1,turn:1},dj={grid:1,flex:1},$r=function e(t,r,o,s){var l=parseFloat(o)||0,u=(o+"").trim().substr((l+"").length)||"px",d=ti.style,f=q2.test(r),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(f?"Width":"Height"),y=100,x=s==="px",b=s==="%",S,_,k,P;if(s===u||!l||Zy[s]||Zy[u])return l;if(u!=="px"&&!x&&(l=e(t,r,o,"px")),P=t.getCTM&&Pw(t),(b||u==="%")&&(qn[r]||~r.indexOf("adius")))return S=P?t.getBBox()[f?"width":"height"]:t[m],Je(b?l/S*y:l/100*S);if(d[f?"width":"height"]=y+(x?u:s),_=s!=="rem"&&~r.indexOf("adius")||s==="em"&&t.appendChild&&!h?t:t.parentNode,P&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===kr||!_.appendChild)&&(_=kr.body),k=_._gsap,k&&b&&k.width&&f&&k.time===Ut.time&&!k.uncache)return Je(l/k.width*y);if(b&&(r==="height"||r==="width")){var j=t.style[r];t.style[r]=y+s,S=t[m],j?t.style[r]=j:di(t,r)}else(b||u==="%")&&!dj[Dn(_,"display")]&&(d.position=Dn(t,"position")),_===t&&(d.position="static"),_.appendChild(ti),S=ti[m],_.removeChild(ti),d.position="absolute";return f&&b&&(k=oi(_),k.time=Ut.time,k.width=_[m]),Je(x?S*l/y:S&&l?y/S*l:0)},Gn=function(t,r,o,s){var l;return Uh||zf(),r in En&&r!=="transform"&&(r=En[r],~r.indexOf(",")&&(r=r.split(",")[0])),qn[r]&&r!=="transform"?(l=Ns(t,s),l=r!=="transformOrigin"?l[r]:l.svg?l.origin:Ul(Dn(t,Lt))+" "+l.zOrigin+"px"):(l=t.style[r],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Bl[r]&&Bl[r](t,r,o)||Dn(t,r)||U1(t,r)||(r==="opacity"?1:0))),o&&!~(l+"").trim().indexOf(" ")?$r(t,r,l,o)+o:l},fj=function(t,r,o,s){if(!o||o==="none"){var l=go(r,t,1),u=l&&Dn(t,l,1);u&&u!==o?(r=l,o=u):r==="borderColor"&&(o=Dn(t,"borderTopColor"))}var d=new Rt(this._pt,t.style,r,0,1,vw),f=0,h=0,m,y,x,b,S,_,k,P,j,D,R,A;if(d.b=o,d.e=s,o+="",s+="",s==="auto"&&(_=t.style[r],t.style[r]=s,s=Dn(t,r)||s,_?t.style[r]=_:di(t,r)),m=[o,s],lw(m),o=m[0],s=m[1],x=o.match(Xi)||[],A=s.match(Xi)||[],A.length){for(;y=Xi.exec(s);)k=y[0],j=s.substring(f,y.index),S?S=(S+1)%5:(j.substr(-5)==="rgba("||j.substr(-5)==="hsla(")&&(S=1),k!==(_=x[h++]||"")&&(b=parseFloat(_)||0,R=_.substr((b+"").length),k.charAt(1)==="="&&(k=Zi(b,k)+R),P=parseFloat(k),D=k.substr((P+"").length),f=Xi.lastIndex-D.length,D||(D=D||Gt.units[r]||R,f===s.length&&(s+=D,d.e+=D)),R!==D&&(b=$r(t,r,_,D)||0),d._pt={_next:d._pt,p:j||h===1?j:",",s:b,c:P-b,m:S&&S<4||r==="zIndex"?Math.round:0});d.c=f<s.length?s.substring(f,s.length):""}else d.r=r==="display"&&s==="none"?bw:_w;return F1.test(s)&&(d.e=0),this._pt=d,d},ev={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hj=function(t){var r=t.split(" "),o=r[0],s=r[1]||"50%";return(o==="top"||o==="bottom"||s==="left"||s==="right")&&(t=o,o=s,s=t),r[0]=ev[o]||o,r[1]=ev[s]||s,r.join(" ")},pj=function(t,r){if(r.tween&&r.tween._time===r.tween._dur){var o=r.t,s=o.style,l=r.u,u=o._gsap,d,f,h;if(l==="all"||l===!0)s.cssText="",f=1;else for(l=l.split(","),h=l.length;--h>-1;)d=l[h],qn[d]&&(f=1,d=d==="transformOrigin"?Lt:Be),di(o,d);f&&(di(o,Be),u&&(u.svg&&o.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Ns(o,1),u.uncache=1,Sw(s)))}},Bl={clearProps:function(t,r,o,s,l){if(l.data!=="isFromStart"){var u=t._pt=new Rt(t._pt,r,o,0,0,pj);return u.u=s,u.pr=-10,u.tween=l,t._props.push(o),1}}},Is=[1,0,0,1,0,0],Ew={},jw=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},tv=function(t){var r=Dn(t,Be);return jw(r)?Is:r.substr(7).match(O1).map(Je)},Gh=function(t,r){var o=t._gsap||oi(t),s=t.style,l=tv(t),u,d,f,h;return o.svg&&t.getAttribute("transform")?(f=t.transform.baseVal.consolidate().matrix,l=[f.a,f.b,f.c,f.d,f.e,f.f],l.join(",")==="1,0,0,1,0,0"?Is:l):(l===Is&&!t.offsetParent&&t!==eo&&!o.svg&&(f=s.display,s.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,d=t.nextElementSibling,eo.appendChild(t)),l=tv(t),f?s.display=f:di(t,"display"),h&&(d?u.insertBefore(t,d):u?u.appendChild(t):eo.removeChild(t))),r&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},If=function(t,r,o,s,l,u){var d=t._gsap,f=l||Gh(t,!0),h=d.xOrigin||0,m=d.yOrigin||0,y=d.xOffset||0,x=d.yOffset||0,b=f[0],S=f[1],_=f[2],k=f[3],P=f[4],j=f[5],D=r.split(" "),R=parseFloat(D[0])||0,A=parseFloat(D[1])||0,F,z,N,U;o?f!==Is&&(z=b*k-S*_)&&(N=R*(k/z)+A*(-_/z)+(_*j-k*P)/z,U=R*(-S/z)+A*(b/z)-(b*j-S*P)/z,R=N,A=U):(F=Cw(t),R=F.x+(~D[0].indexOf("%")?R/100*F.width:R),A=F.y+(~(D[1]||D[0]).indexOf("%")?A/100*F.height:A)),s||s!==!1&&d.smooth?(P=R-h,j=A-m,d.xOffset=y+(P*b+j*_)-P,d.yOffset=x+(P*S+j*k)-j):d.xOffset=d.yOffset=0,d.xOrigin=R,d.yOrigin=A,d.smooth=!!s,d.origin=r,d.originIsAbsolute=!!o,t.style[Lt]="0px 0px",u&&(Tr(u,d,"xOrigin",h,R),Tr(u,d,"yOrigin",m,A),Tr(u,d,"xOffset",y,d.xOffset),Tr(u,d,"yOffset",x,d.yOffset)),t.setAttribute("data-svg-origin",R+" "+A)},Ns=function(t,r){var o=t._gsap||new fw(t);if("x"in o&&!r&&!o.uncache)return o;var s=t.style,l=o.scaleX<0,u="px",d="deg",f=getComputedStyle(t),h=Dn(t,Lt)||"0",m,y,x,b,S,_,k,P,j,D,R,A,F,z,N,U,ie,pe,he,fe,_e,ke,ge,ne,G,q,J,M,B,ce,ae,de;return m=y=x=_=k=P=j=D=R=0,b=S=1,o.svg=!!(t.getCTM&&Pw(t)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[Be]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Be]!=="none"?f[Be]:"")),s.scale=s.rotate=s.translate="none"),z=Gh(t,o.svg),o.svg&&(o.uncache?(G=t.getBBox(),h=o.xOrigin-G.x+"px "+(o.yOrigin-G.y)+"px",ne=""):ne=!r&&t.getAttribute("data-svg-origin"),If(t,ne||h,!!ne||o.originIsAbsolute,o.smooth!==!1,z)),A=o.xOrigin||0,F=o.yOrigin||0,z!==Is&&(pe=z[0],he=z[1],fe=z[2],_e=z[3],m=ke=z[4],y=ge=z[5],z.length===6?(b=Math.sqrt(pe*pe+he*he),S=Math.sqrt(_e*_e+fe*fe),_=pe||he?Bi(he,pe)*qr:0,j=fe||_e?Bi(fe,_e)*qr+_:0,j&&(S*=Math.abs(Math.cos(j*to))),o.svg&&(m-=A-(A*pe+F*fe),y-=F-(A*he+F*_e))):(de=z[6],ce=z[7],J=z[8],M=z[9],B=z[10],ae=z[11],m=z[12],y=z[13],x=z[14],N=Bi(de,B),k=N*qr,N&&(U=Math.cos(-N),ie=Math.sin(-N),ne=ke*U+J*ie,G=ge*U+M*ie,q=de*U+B*ie,J=ke*-ie+J*U,M=ge*-ie+M*U,B=de*-ie+B*U,ae=ce*-ie+ae*U,ke=ne,ge=G,de=q),N=Bi(-fe,B),P=N*qr,N&&(U=Math.cos(-N),ie=Math.sin(-N),ne=pe*U-J*ie,G=he*U-M*ie,q=fe*U-B*ie,ae=_e*ie+ae*U,pe=ne,he=G,fe=q),N=Bi(he,pe),_=N*qr,N&&(U=Math.cos(N),ie=Math.sin(N),ne=pe*U+he*ie,G=ke*U+ge*ie,he=he*U-pe*ie,ge=ge*U-ke*ie,pe=ne,ke=G),k&&Math.abs(k)+Math.abs(_)>359.9&&(k=_=0,P=180-P),b=Je(Math.sqrt(pe*pe+he*he+fe*fe)),S=Je(Math.sqrt(ge*ge+de*de)),N=Bi(ke,ge),j=Math.abs(N)>2e-4?N*qr:0,R=ae?1/(ae<0?-ae:ae):0),o.svg&&(ne=t.getAttribute("transform"),o.forceCSS=t.setAttribute("transform","")||!jw(Dn(t,Be)),ne&&t.setAttribute("transform",ne))),Math.abs(j)>90&&Math.abs(j)<270&&(l?(b*=-1,j+=_<=0?180:-180,_+=_<=0?180:-180):(S*=-1,j+=j<=0?180:-180)),r=r||o.uncache,o.x=m-((o.xPercent=m&&(!r&&o.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*o.xPercent/100:0)+u,o.y=y-((o.yPercent=y&&(!r&&o.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-y)?-50:0)))?t.offsetHeight*o.yPercent/100:0)+u,o.z=x+u,o.scaleX=Je(b),o.scaleY=Je(S),o.rotation=Je(_)+d,o.rotationX=Je(k)+d,o.rotationY=Je(P)+d,o.skewX=j+d,o.skewY=D+d,o.transformPerspective=R+u,(o.zOrigin=parseFloat(h.split(" ")[2])||!r&&o.zOrigin||0)&&(s[Lt]=Ul(h)),o.xOffset=o.yOffset=0,o.force3D=Gt.force3D,o.renderTransform=o.svg?gj:Tw?Aw:mj,o.uncache=0,o},Ul=function(t){return(t=t.split(" "))[0]+" "+t[1]},Nd=function(t,r,o){var s=xt(r);return Je(parseFloat(r)+parseFloat($r(t,"x",o+"px",s)))+s},mj=function(t,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,Aw(t,r)},Kr="0deg",cs="0px",Xr=") ",Aw=function(t,r){var o=r||this,s=o.xPercent,l=o.yPercent,u=o.x,d=o.y,f=o.z,h=o.rotation,m=o.rotationY,y=o.rotationX,x=o.skewX,b=o.skewY,S=o.scaleX,_=o.scaleY,k=o.transformPerspective,P=o.force3D,j=o.target,D=o.zOrigin,R="",A=P==="auto"&&t&&t!==1||P===!0;if(D&&(y!==Kr||m!==Kr)){var F=parseFloat(m)*to,z=Math.sin(F),N=Math.cos(F),U;F=parseFloat(y)*to,U=Math.cos(F),u=Nd(j,u,z*U*-D),d=Nd(j,d,-Math.sin(F)*-D),f=Nd(j,f,N*U*-D+D)}k!==cs&&(R+="perspective("+k+Xr),(s||l)&&(R+="translate("+s+"%, "+l+"%) "),(A||u!==cs||d!==cs||f!==cs)&&(R+=f!==cs||A?"translate3d("+u+", "+d+", "+f+") ":"translate("+u+", "+d+Xr),h!==Kr&&(R+="rotate("+h+Xr),m!==Kr&&(R+="rotateY("+m+Xr),y!==Kr&&(R+="rotateX("+y+Xr),(x!==Kr||b!==Kr)&&(R+="skew("+x+", "+b+Xr),(S!==1||_!==1)&&(R+="scale("+S+", "+_+Xr),j.style[Be]=R||"translate(0, 0)"},gj=function(t,r){var o=r||this,s=o.xPercent,l=o.yPercent,u=o.x,d=o.y,f=o.rotation,h=o.skewX,m=o.skewY,y=o.scaleX,x=o.scaleY,b=o.target,S=o.xOrigin,_=o.yOrigin,k=o.xOffset,P=o.yOffset,j=o.forceCSS,D=parseFloat(u),R=parseFloat(d),A,F,z,N,U;f=parseFloat(f),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,f+=m),f||h?(f*=to,h*=to,A=Math.cos(f)*y,F=Math.sin(f)*y,z=Math.sin(f-h)*-x,N=Math.cos(f-h)*x,h&&(m*=to,U=Math.tan(h-m),U=Math.sqrt(1+U*U),z*=U,N*=U,m&&(U=Math.tan(m),U=Math.sqrt(1+U*U),A*=U,F*=U)),A=Je(A),F=Je(F),z=Je(z),N=Je(N)):(A=y,N=x,F=z=0),(D&&!~(u+"").indexOf("px")||R&&!~(d+"").indexOf("px"))&&(D=$r(b,"x",u,"px"),R=$r(b,"y",d,"px")),(S||_||k||P)&&(D=Je(D+S-(S*A+_*z)+k),R=Je(R+_-(S*F+_*N)+P)),(s||l)&&(U=b.getBBox(),D=Je(D+s/100*U.width),R=Je(R+l/100*U.height)),U="matrix("+A+","+F+","+z+","+N+","+D+","+R+")",b.setAttribute("transform",U),j&&(b.style[Be]=U)},yj=function(t,r,o,s,l){var u=360,d=lt(l),f=parseFloat(l)*(d&&~l.indexOf("rad")?qr:1),h=f-s,m=s+h+"deg",y,x;return d&&(y=l.split("_")[1],y==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-360)),y==="cw"&&h<0?h=(h+u*Xy)%u-~~(h/u)*u:y==="ccw"&&h>0&&(h=(h-u*Xy)%u-~~(h/u)*u)),t._pt=x=new Rt(t._pt,r,o,s,h,ej),x.e=m,x.u="deg",t._props.push(o),x},nv=function(t,r){for(var o in r)t[o]=r[o];return t},vj=function(t,r,o){var s=nv({},o._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=o.style,d,f,h,m,y,x,b,S;s.svg?(h=o.getAttribute("transform"),o.setAttribute("transform",""),u[Be]=r,d=Ns(o,1),di(o,Be),o.setAttribute("transform",h)):(h=getComputedStyle(o)[Be],u[Be]=r,d=Ns(o,1),u[Be]=h);for(f in qn)h=s[f],m=d[f],h!==m&&l.indexOf(f)<0&&(b=xt(h),S=xt(m),y=b!==S?$r(o,f,h,S):parseFloat(h),x=parseFloat(m),t._pt=new Rt(t._pt,d,f,y,x-y,Of),t._pt.u=S||0,t._props.push(f));nv(d,s)};Mt("padding,margin,Width,Radius",function(e,t){var r="Top",o="Right",s="Bottom",l="Left",u=(t<3?[r,o,s,l]:[r+l,r+o,s+o,s+l]).map(function(d){return t<2?e+d:"border"+d+e});Bl[t>1?"border"+e:e]=function(d,f,h,m,y){var x,b;if(arguments.length<4)return x=u.map(function(S){return Gn(d,S,h)}),b=x.join(" "),b.split(x[0]).length===5?x[0]:b;x=(m+"").split(" "),b={},u.forEach(function(S,_){return b[S]=x[_]=x[_]||x[(_-1)/2|0]}),d.init(f,b,y)}});var $w={name:"css",register:zf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,r,o,s,l){var u=this._props,d=t.style,f=o.vars.startAt,h,m,y,x,b,S,_,k,P,j,D,R,A,F,z,N;Uh||zf(),this.styles=this.styles||kw(t),N=this.styles.props,this.tween=o;for(_ in r)if(_!=="autoRound"&&(m=r[_],!(Bt[_]&&hw(_,r,o,s,t,l)))){if(b=typeof m,S=Bl[_],b==="function"&&(m=m.call(o,s,t,l),b=typeof m),b==="string"&&~m.indexOf("random(")&&(m=Os(m)),S)S(this,t,_,m,o)&&(z=1);else if(_.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(_)+"").trim(),m+="",Er.lastIndex=0,Er.test(h)||(k=xt(h),P=xt(m)),P?k!==P&&(h=$r(t,_,h,P)+P):k&&(m+=k),this.add(d,"setProperty",h,m,s,l,0,0,_),u.push(_),N.push(_,0,d[_]);else if(b!=="undefined"){if(f&&_ in f?(h=typeof f[_]=="function"?f[_].call(o,s,t,l):f[_],lt(h)&&~h.indexOf("random(")&&(h=Os(h)),xt(h+"")||h==="auto"||(h+=Gt.units[_]||xt(Gn(t,_))||""),(h+"").charAt(1)==="="&&(h=Gn(t,_))):h=Gn(t,_),x=parseFloat(h),j=b==="string"&&m.charAt(1)==="="&&m.substr(0,2),j&&(m=m.substr(2)),y=parseFloat(m),_ in En&&(_==="autoAlpha"&&(x===1&&Gn(t,"visibility")==="hidden"&&y&&(x=0),N.push("visibility",0,d.visibility),Tr(this,d,"visibility",x?"inherit":"hidden",y?"inherit":"hidden",!y)),_!=="scale"&&_!=="transform"&&(_=En[_],~_.indexOf(",")&&(_=_.split(",")[0]))),D=_ in qn,D){if(this.styles.save(_),R||(A=t._gsap,A.renderTransform&&!r.parseTransform||Ns(t,r.parseTransform),F=r.smoothOrigin!==!1&&A.smooth,R=this._pt=new Rt(this._pt,d,Be,0,1,A.renderTransform,A,0,-1),R.dep=1),_==="scale")this._pt=new Rt(this._pt,A,"scaleY",A.scaleY,(j?Zi(A.scaleY,j+y):y)-A.scaleY||0,Of),this._pt.u=0,u.push("scaleY",_),_+="X";else if(_==="transformOrigin"){N.push(Lt,0,d[Lt]),m=hj(m),A.svg?If(t,m,0,F,0,this):(P=parseFloat(m.split(" ")[2])||0,P!==A.zOrigin&&Tr(this,A,"zOrigin",A.zOrigin,P),Tr(this,d,_,Ul(h),Ul(m)));continue}else if(_==="svgOrigin"){If(t,m,1,F,0,this);continue}else if(_ in Ew){yj(this,A,_,x,j?Zi(x,j+m):m);continue}else if(_==="smoothOrigin"){Tr(this,A,"smooth",A.smooth,m);continue}else if(_==="force3D"){A[_]=m;continue}else if(_==="transform"){vj(this,m,t);continue}}else _ in d||(_=go(_)||_);if(D||(y||y===0)&&(x||x===0)&&!Z2.test(m)&&_ in d)k=(h+"").substr((x+"").length),y||(y=0),P=xt(m)||(_ in Gt.units?Gt.units[_]:k),k!==P&&(x=$r(t,_,h,P)),this._pt=new Rt(this._pt,D?A:d,_,x,(j?Zi(x,j+y):y)-x,!D&&(P==="px"||_==="zIndex")&&r.autoRound!==!1?nj:Of),this._pt.u=P||0,k!==P&&P!=="%"&&(this._pt.b=h,this._pt.r=tj);else if(_ in d)fj.call(this,t,_,h,j?j+m:m);else if(_ in t)this.add(t,_,h||t[_],j?j+m:m,s,l);else if(_!=="parseTransform"){Rh(_,m);continue}D||(_ in d?N.push(_,0,d[_]):typeof t[_]=="function"?N.push(_,2,t[_]()):N.push(_,1,h||t[_])),u.push(_)}}z&&xw(this)},render:function(t,r){if(r.tween._time||!Hh())for(var o=r._pt;o;)o.r(t,o.d),o=o._next;else r.styles.revert()},get:Gn,aliases:En,getSetter:function(t,r,o){var s=En[r];return s&&s.indexOf(",")<0&&(r=s),r in qn&&r!==Lt&&(t._gsap.x||Gn(t,"x"))?o&&Ky===o?r==="scale"?sj:oj:(Ky=o||{})&&(r==="scale"?aj:lj):t.style&&!$h(t.style[r])?rj:~r.indexOf("-")?ij:Vh(t,r)},core:{_removeProperty:di,_getMatrix:Gh}};Ot.utils.checkPrefix=go;Ot.core.getStyleSaver=kw;(function(e,t,r,o){var s=Mt(e+","+t+","+r,function(l){qn[l]=1});Mt(t,function(l){Gt.units[l]="deg",Ew[l]=1}),En[s[13]]=e+","+t,Mt(o,function(l){var u=l.split(":");En[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Gt.units[e]="px"});Ot.registerPlugin($w);var Tl=Ot.registerPlugin($w)||Ot;Tl.core.Tween;const xj=({count:e=100})=>{const t=V.useRef(null);return V.useEffect(()=>{const r=t.current;if(!r)return;const o=r.getContext("2d");let s,l=[];const u=()=>{r.width=window.innerWidth,r.height=window.innerHeight,d()},d=()=>{l=[];for(let y=0;y<e;y++)l.push({x:Math.random()*r.width,y:Math.random()*r.height,radius:Math.random()*2+.5,opacity:Math.random()*.5+.2,speedX:Math.random()*.5-.25,speedY:Math.random()*.5-.25,color:f()})},f=()=>{const y=Math.random()>.7?140:210,x=80+Math.random()*20,b=50+Math.random()*20;return`hsla(${y}, ${x}%, ${b}%, 0.8)`},h=()=>{o.clearRect(0,0,r.width,r.height),l.forEach((y,x)=>{y.x+=y.speedX,y.y+=y.speedY,y.x<0&&(y.x=r.width),y.x>r.width&&(y.x=0),y.y<0&&(y.y=r.height),y.y>r.height&&(y.y=0),o.beginPath(),o.arc(y.x,y.y,y.radius,0,Math.PI*2),o.fillStyle=y.color,o.globalAlpha=y.opacity,o.fill(),m(y,x)}),s=requestAnimationFrame(h)},m=(y,x)=>{for(let S=x+1;S<l.length;S++){const _=l[S],k=y.x-_.x,P=y.y-_.y,j=Math.sqrt(k*k+P*P);if(j<150){const D=1-j/150;o.beginPath(),o.strokeStyle=y.color,o.globalAlpha=D*.2,o.lineWidth=.5,o.moveTo(y.x,y.y),o.lineTo(_.x,_.y),o.stroke()}}};return u(),window.addEventListener("resize",u),h(),()=>{window.removeEventListener("resize",u),cancelAnimationFrame(s)}},[e]),v.jsx(wj,{ref:t})},wj=T.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,_j=We.forwardRef((e,t)=>{const r=V.useRef(null),o=V.useRef(null),[s,l]=V.useState(!1),u=xf(0),d=xf(0),f=Ty(d,[-300,300],[10,-10]),h=Ty(u,[-300,300],[-10,10]),m=AP();V.useEffect(()=>{m.start("visible");const S=setInterval(()=>{y()},7e3);return()=>clearInterval(S)},[]);const y=()=>{if(!r.current)return;const S=r.current;S.classList.add("glitch-active"),setTimeout(()=>{S.classList.remove("glitch-active")},800)};V.useEffect(()=>{if(!o.current)return;Tl.to(".hero-social-btn",{y:0,opacity:1,stagger:.2,ease:"power3.out",delay:1.8});const S=document.createElement("div");return S.classList.add("spotlight"),o.current.appendChild(S),()=>{o.current&&S.parentNode===o.current&&o.current.removeChild(S)}},[]);const x=S=>{if(!o.current)return;const _=o.current,k=_.getBoundingClientRect(),P=(S.clientX-k.left)/k.width,j=(S.clientY-k.top)/k.height;u.set(S.clientX-k.left-k.width/2),d.set(S.clientY-k.top-k.height/2),Tl.to(_,{"--mouse-x":P,"--mouse-y":j,duration:.5});const D=_.querySelector(".spotlight");D&&Tl.to(D,{x:S.clientX-k.left,y:S.clientY-k.top,duration:.8,ease:"power2.out"})},b=()=>{l(!0)};return v.jsxs(bj,{id:"home",ref:S=>{o.current=S,typeof t=="function"?t(S):t&&(t.current=S)},onMouseMove:x,onMouseEnter:b,className:s?"mouse-entered":"",children:[v.jsx(xj,{count:180}),v.jsx(rv,{className:"circle-1"}),v.jsx(rv,{className:"circle-2"}),v.jsx(Sj,{}),v.jsxs(kj,{as:X.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[v.jsx(Tj,{children:v.jsx(Cj,{ref:r,"data-text":"JONAS",as:X.h1,style:{rotateX:f,rotateY:h},initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.2,type:"spring",stiffness:100},onClick:y,children:"JONAS"})}),v.jsx(X.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:v.jsx(Pj,{children:"Portfolio"})}),v.jsx(Ej,{as:X.div,initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.9},children:v.jsx(jj,{children:"Cybersecurity Enthusiast & Ethical Hacker"})}),v.jsx(Aj,{as:X.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:m,children:[{icon:"github",url:"https://github.com/reschjonas",label:"GitHub"},{icon:"linkedin",url:"https://www.linkedin.com/in/jonas-resch-91bba733b/",label:"LinkedIn"},{icon:"instagram",url:"https://www.instagram.com/4realjonas/",label:"Instagram"}].map((S,_)=>v.jsx(X.div,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}},children:v.jsx($j,{href:S.url,target:"_blank",rel:"noopener noreferrer",className:"hero-social-btn","aria-label":S.label,style:{transform:"translateY(20px)",opacity:0},whileHover:{scale:1.1},whileTap:{scale:.95},children:v.jsx("i",{className:`fab fa-${S.icon}`})})},S.icon))}),v.jsxs(Dw,{as:X.div,initial:{opacity:0},animate:{opacity:[0,1]},transition:{delay:2.5,duration:1},children:[v.jsx(Dj,{children:"Scroll Down"}),v.jsx(Mj,{className:"fas fa-chevron-down"})]})]})]})}),bj=T.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  --mouse-x: 0.5;
  --mouse-y: 0.5;
  background: ${e=>e.theme.hero.backgrounds.primary};
  perspective: 1000px;
  
  .spotlight {
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      ${e=>e.theme.hero.spotlightColor} 0%,
      transparent 50%
    );
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &.mouse-entered .spotlight {
    opacity: 1;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%),
      ${e=>e.theme.hero.glowColor} 0%,
      transparent 70%
    );
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease;
  }
  
  &.mouse-entered::before {
    opacity: 1;
  }
`,Sj=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(${e=>`${e.theme.text.primary}10`} 1px, transparent 1px),
                    linear-gradient(90deg, ${e=>`${e.theme.text.primary}10`} 1px, transparent 1px);
  background-size: 35px 35px;
  background-position: center;
  opacity: 0.1;
  pointer-events: none;
  z-index: 1;
`,rv=T.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    ${e=>e.theme.colors.primary} 0%,
    transparent 70%
  );
  opacity: 0.1;
  pointer-events: none;
  z-index: 1;
  
  &.circle-1 {
    width: 45vw;
    height: 45vw;
    top: -10vw;
    right: -10vw;
    background: radial-gradient(
      circle at center,
      ${e=>e.theme.colors.accent} 0%,
      transparent 70%
    );
    animation: pulse 15s infinite alternate;
  }
  
  &.circle-2 {
    width: 35vw;
    height: 35vw;
    bottom: -10vw;
    left: -10vw;
    animation: pulse 12s infinite alternate-reverse;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.1; }
    50% { transform: scale(1.1); opacity: 0.15; }
    100% { transform: scale(1); opacity: 0.1; }
  }
`,kj=T.div`
  text-align: center;
  z-index: 2;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Tj=T.div`
  margin-bottom: 1rem;
  perspective: 1000px;
`,Cj=T(X.h1)`
  font-size: 8rem;
  font-weight: 800;
  color: ${e=>e.theme.text.primary};
  text-shadow: 0.05em 0 0 rgba(255,0,0,0.75),
              -0.025em -0.05em 0 rgba(0,255,0,0.75),
              0.025em 0.05em 0 rgba(0,0,255,0.75);
  position: relative;
  user-select: none;
  letter-spacing: -0.02em;
  transform-style: preserve-3d;
  
  &.glitch-active {
    animation: enhanced-glitch 0.5s steps(3) infinite;
  }
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  
  &::before {
    text-shadow: -2px 0 ${e=>e.theme.colors.primary};
    animation: glitch-animation 3s infinite linear alternate-reverse;
    left: -2px;
  }
  
  &::after {
    text-shadow: 2px 0 ${e=>e.theme.colors.accent};
    animation: glitch-animation 4s infinite linear alternate-reverse;
    left: 2px;
  }
  
  @keyframes glitch-animation {
    0% {
      clip-path: polygon(0 0%, 100% 0%, 100% 25%, 0 25%);
      transform: translate(-2px, 0);
      opacity: 0.8;
    }
    20% {
      clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
      transform: translate(-1px, 2px);
      opacity: 0.8;
    }
    60% {
      clip-path: polygon(0 55%, 100% 55%, 100% 70%, 0 70%);
      transform: translate(1px, -1px);
      opacity: 0.8;
    }
    80% {
      clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%);
      transform: translate(-2px, 2px);
      opacity: 0.8;
    }
    100% {
      clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
      transform: translate(2px, -2px);
      opacity: 0.8;
    }
  }
  
  @keyframes enhanced-glitch {
    0% { transform: translate(2px, 2px) skewX(2deg); }
    25% { transform: translate(-2px, -2px) skewX(-2deg); }
    50% { transform: translate(1px, -1px) skewX(1deg); }
    75% { transform: translate(-1px, 1px) skewX(-1deg); }
    100% { transform: translate(2px, 2px) skewX(2deg); }
  }
  
  @media ${Se.lg} {
    font-size: 6rem;
  }
  
  @media ${Se.md} {
    font-size: 5rem;
  }
  
  @media ${Se.sm} {
    font-size: 3.5rem;
  }
`,Pj=T.h2`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.primary||"#40c4ff"};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${e=>e.theme.colors.primary||"#40c4ff"},
      transparent
    );
  }
  
  @media ${Se.md} {
    font-size: 1.4rem;
    letter-spacing: 0.3rem;
  }
`,Ej=T.div`
  margin: 1.5rem 0 2.5rem;
`,jj=T.div`
  font-size: 1.5rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  border-right: 2px solid ${e=>e.theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  position: relative;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: ${e=>e.theme.colors.primary} }
  }
  
  @media ${Se.md} {
    font-size: 1.2rem;
  }
`,Aj=T(X.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`,$j=T(X.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${e=>e.theme.button.socialBg||"rgba(15, 23, 42, 0.5)"};
  color: ${e=>e.theme.text.primary};
  font-size: 1.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid ${e=>e.theme.button.socialBorder||"rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary||"#40c4ff"};
    transform: translateY(-8px);
    background: ${e=>e.theme.button.socialHoverBg||"rgba(15, 23, 42, 0.7)"};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), 
                0 0 0 5px rgba(64, 196, 255, 0.15);
    border-color: ${e=>e.theme.colors.primary||"#40c4ff"};
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  i {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: scale(1.2);
  }
`,Dw=T(X.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`,Dj=T.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${e=>e.theme.colors.primary||"#40c4ff"},
      transparent
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  
  ${Dw}:hover &::after {
    transform: scaleX(1);
  }
`,Mj=T.i`
  color: ${e=>e.theme.colors.primary||"#40c4ff"};
  font-size: 1.2rem;
  animation: bounce 2s infinite;
  filter: drop-shadow(0 0 5px ${e=>e.theme.colors.primary||"#40c4ff"});
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;var Nf=new Map,dl=new WeakMap,iv=0,Rj=void 0;function Lj(e){return e?(dl.has(e)||(iv+=1,dl.set(e,iv.toString())),dl.get(e)):"0"}function Oj(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Lj(e.root):e[t]}`).toString()}function Fj(e){const t=Oj(e);let r=Nf.get(t);if(!r){const o=new Map;let s;const l=new IntersectionObserver(u=>{u.forEach(d=>{var f;const h=d.isIntersecting&&s.some(m=>d.intersectionRatio>=m);e.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=h),(f=o.get(d.target))==null||f.forEach(m=>{m(h,d)})})},e);s=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:l,elements:o},Nf.set(t,r)}return r}function zj(e,t,r={},o=Rj){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const f=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:s,observer:l,elements:u}=Fj(r),d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(u.delete(e),l.unobserve(e)),u.size===0&&(l.disconnect(),Nf.delete(s))}}function pi({threshold:e,delay:t,trackVisibility:r,rootMargin:o,root:s,triggerOnce:l,skip:u,initialInView:d,fallbackInView:f,onChange:h}={}){var m;const[y,x]=V.useState(null),b=V.useRef(h),[S,_]=V.useState({inView:!!d,entry:void 0});b.current=h,V.useEffect(()=>{if(u||!y)return;let D;return D=zj(y,(R,A)=>{_({inView:R,entry:A}),b.current&&b.current(R,A),A.isIntersecting&&l&&D&&(D(),D=void 0)},{root:s,rootMargin:o,threshold:e,trackVisibility:r,delay:t},f),()=>{D&&D()}},[Array.isArray(e)?e.toString():e,y,s,o,l,u,r,f,t]);const k=(m=S.entry)==null?void 0:m.target,P=V.useRef(void 0);!y&&k&&!l&&!u&&P.current!==k&&(P.current=k,_({inView:!!d,entry:void 0}));const j=[x,S.inView,S.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}const Ij=(e=[])=>{const[t,r]=V.useState(e),[o,s]=V.useState(-1);return{history:t,addToHistory:f=>{f.trim()&&(t.length>0&&t[t.length-1]===f||(r(h=>[...h,f]),s(-1)))},navigateHistory:f=>{if(t.length===0)return"";if(f==="up"){if(o===t.length-1)return t[o];const h=o===-1?0:o+1;return s(h),t[t.length-1-h]}else if(f==="down"){if(o===-1)return"";const h=o-1;return s(h),h===-1?"":t[t.length-1-h]}return""},clearHistory:()=>{r([]),s(-1)}}},ov=e=>{const t=e.trim().split(" "),r=t[0].toLowerCase(),o=t.slice(1);switch(r){case"help":return Nj();case"ls":return Vj(o[0]);case"cat":return Bj(o[0]);case"whoami":return Uj();case"clear":return"";case"contact":return Hj();case"projects":return Wj();case"skills":return Gj();case"social":return Yj();default:return`Command not found: ${r}. Type 'help' for available commands.`}},Nj=()=>`Available Commands:
  help             - Display this help text
  ls [directory]   - List files in current directory
  cat [file]       - Display contents of a file
  whoami           - Display user information
  clear            - Clear the terminal screen
  contact          - Show contact information
  projects         - List projects
  skills           - List skills
  social           - Show social media links`,Vj=e=>{const t={"":["projects/","skills/","social/","contact.txt","about.txt","resume.pdf"],projects:["project1.md","project2.md","project3.md"],skills:["languages.txt","tools.txt","security.txt"],social:["github.url","linkedin.url","twitter.url"]},r=e?e.replace(/\/$/,""):"";return t[r]?t[r].join(`
`):`ls: cannot access '${e}': No such file or directory`},Bj=e=>e?{"about.txt":`Name: Jonas Resch
Role: Cybersecurity Specialist
Location: Germany
Interests: Ethical Hacking, Application Security, CTF Competitions`,"contact.txt":`Email: resch.jonas@pm.me
LinkedIn: linkedin.com/in/jonas-resch-91bba733b/
GitHub: github.com/reschjonas`,"skills/languages.txt":`Programming Languages:
- Python (Advanced)
- Bash (Intermediate)
- DuckyScript (Advanced)
- HTML/CSS (Intermediate)
- C# (Intermediate)
- Lua (Beginner)`,"skills/tools.txt":`Security Tools:
- Kali Linux (Expert)
- Burpsuite (Expert)
- Metasploit (Advanced)
- Wireshark (Advanced)
- SQLMap (Advanced)
- Bloodhound (Advanced)
- Hashcat (Intermediate)`,"skills/security.txt":`Security Skills:
- Ethical Hacking (Advanced)
- Penetration Testing (Advanced)
- Vulnerability Assessment (Advanced)
- Cryptography (Intermediate)
- Quantum-Safe Encryption (Intermediate)`,"projects/project1.md":`# FlipperZero BadUSB Collection
A comprehensive collection of BadUSB scripts for the Flipper Zero device.
Features:
- Various automation scripts for penetration testing
- Well-documented and easy to use
- Regular updates and improvements
- Supports multiple use cases

GitHub: https://github.com/reschjonas/FlipperZero_BadUSB`,"projects/project2.md":`# SecureSafe
ECC-Based File Encryption Container with secure key management.
Features:
- Elliptic Curve Cryptography for key exchange
- AES encryption for file content
- Secure key management
- Cross-platform compatibility

GitHub: https://github.com/reschjonas/SecureSafe`,"projects/project3.md":`# QuantHide (Coming Soon)
Quantum-safe steganography tool leveraging advanced algorithms.
Features:
- Quantum-resistant encryption
- Advanced steganography techniques
- File hiding capabilities
- Secure communication channel

GitHub: https://github.com/reschjonas/QuantHide`,"resume.pdf":`[This would be a PDF file in a real system]
To view my full resume, please visit my LinkedIn profile or contact me directly.`}[e]||`cat: ${e}: No such file or directory`:"cat: missing file operand",Uj=()=>`jonas (Cybersecurity Specialist)
User ID: visitor
Groups: developers, security-researchers, ctf-players`,Hj=()=>`Contact Information:
Email: resch.jonas@pm.me
LinkedIn: linkedin.com/in/jonas-resch-91bba733b/
GitHub: github.com/reschjonas
Location: Germany

Feel free to reach out for collaborations, projects, or just to chat about security!`,Wj=()=>`Projects:
1. FlipperZero BadUSB
   A collection of BadUSB scripts for the Flipper Zero device.

2. SecureSafe
   ECC-Based File Encryption Container with secure key management.

3. QuantHide
   Quantum-safe steganography tool (Coming Soon).

Type 'cat projects/project1.md' (or project2.md, etc.) for more details.`,Gj=()=>`Skills Categories:
1. Languages
   Python, Bash, DuckyScript, HTML/CSS, C#, Lua

2. Security
   Ethical Hacking, Penetration Testing, Vulnerability Assessment, 
   Cryptography, Quantum-Safe Encryption

3. Tools
   Kali Linux, Burpsuite, Metasploit, Wireshark, SQLMap, 
   Bloodhound, Hashcat

Type 'cat skills/languages.txt' (or security.txt, tools.txt) for more details.`,Yj=()=>`Social Links:
- GitHub: https://github.com/reschjonas
- LinkedIn: https://www.linkedin.com/in/jonas-resch-91bba733b/
- Instagram: https://www.instagram.com/4realjonas/`,Mw=()=>v.jsxs(Kj,{children:[v.jsx(Xj,{children:"jonas"}),v.jsx(Jj,{children:"@"}),v.jsx(Qj,{children:"secure-system"}),v.jsx(qj,{children:":"}),v.jsx(Zj,{children:"~"}),v.jsx(eA,{children:"$"})]}),Kj=T.div`
  display: flex;
  margin-right: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
`,Xj=T.span`
  color: ${e=>e.theme.colors.primary};
  font-weight: 600;
`,Jj=T.span`
  color: ${e=>e.theme.text.tertiary};
`,Qj=T.span`
  color: ${e=>e.theme.colors.accent};
  font-weight: 600;
`,qj=T.span`
  color: ${e=>e.theme.text.tertiary};
`,Zj=T.span`
  color: ${e=>e.theme.colors.info||"#0DCAF0"};
`,eA=T.span`
  color: ${e=>e.theme.colors.warning||"#FFC107"};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`,tA=({command:e,result:t})=>{const r=()=>{if(t==null)return null;if(typeof t=="string")return v.jsx(Vd,{children:t});if(We.isValidElement(t))return t;try{return v.jsx(Vd,{children:JSON.stringify(t)})}catch{return v.jsx(Vd,{children:"Error: Cannot display result"})}};return v.jsxs(nA,{children:[v.jsxs(rA,{children:[v.jsx(Mw,{}),v.jsx(iA,{children:e})]}),v.jsx(oA,{children:r()})]})},nA=T.div`
  margin-bottom: 1rem;
`,rA=T.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`,iA=T.span`
  color: ${e=>e.theme.text.primary};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
`,oA=T.div`
  margin-left: 0.5rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  
  ul {
    list-style-type: none;
    padding-left: 1rem;
    margin: 0.5rem 0;
  }
  
  li {
    margin-bottom: 0.3rem;
  }
  
  p {
    margin: 0.4rem 0;
  }
  
  strong {
    color: ${e=>e.theme.colors.primary};
    font-weight: 600;
  }
`,Vd=T.pre`
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
`,sA=({initialCommand:e="",fullscreen:t=!1,customOutput:r=null})=>{const[o,s]=V.useState(""),[l,u]=V.useState([]),{addToHistory:d,navigateHistory:f}=Ij(),h=V.useRef(null),m=V.useRef(null);V.useEffect(()=>{e&&y()},[]);const y=async()=>{const _=await ov(e);u([{command:e,result:r||_}]),d(e)},x=async _=>{_.preventDefault();const k=o.trim();if(!k)return;if(k.toLowerCase()==="clear"){u([]),d(k),s("");return}const P=await ov(k);u([...l,{command:k,result:P}]),d(k),s(""),setTimeout(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},100)},b=_=>{if(_.key==="ArrowUp"){_.preventDefault();const k=f("up");k&&s(k)}else if(_.key==="ArrowDown"){_.preventDefault();const k=f("down");s(k||"")}else _.key==="Tab"&&_.preventDefault()},S=()=>{h.current&&h.current.focus()};return V.useEffect(()=>{!e&&l.length===0&&u([{command:"help",result:`Welcome to my interactive terminal! Type commands here to explore my portfolio.
Type 'help' to see available commands.`}])},[e,l.length]),v.jsxs(aA,{fullscreen:t,onClick:S,ref:m,as:X.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[v.jsxs(lA,{children:[v.jsxs(uA,{children:[v.jsx(Bd,{color:"#ff5f56"}),v.jsx(Bd,{color:"#ffbd2e"}),v.jsx(Bd,{color:"#27c93f"})]}),v.jsx(cA,{children:t?"Terminal":"jonas@secure-system: ~"})]}),v.jsxs(dA,{children:[v.jsx(fA,{children:l.map((_,k)=>v.jsx(tA,{command:_.command,result:_.result},k))}),v.jsx("form",{onSubmit:x,children:v.jsxs(hA,{children:[v.jsx(Mw,{}),v.jsx(pA,{ref:h,type:"text",value:o,onChange:_=>s(_.target.value),onKeyDown:b,autoFocus:!0,spellCheck:"false",placeholder:"Type commands here (try 'help')"})]})})]})]})},aA=T.div`
  width: 100%;
  height: ${e=>e.fullscreen?"100vh":"500px"};
  border-radius: 10px;
  overflow: hidden;
  background: ${e=>e.theme.terminal.background};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>e.theme.terminal.border};
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`,lA=T.div`
  background: ${e=>e.theme.terminal.headerBackground};
  padding: 0.8rem;
  display: flex;
  align-items: center;
  user-select: none;
  border-bottom: 1px solid ${e=>e.theme.terminal.border};
`,uA=T.div`
  display: flex;
  gap: 8px;
`,Bd=T.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.color};
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
  }
`,cA=T.div`
  margin-left: 1rem;
  color: ${e=>e.theme.terminal.headerText};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  opacity: 0.8;
`,dA=T.div`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  background: ${e=>e.theme.terminal.bodyBackground};
  font-family: 'JetBrains Mono', monospace;
  color: ${e=>e.theme.terminal.text};
  
  scrollbar-width: thin;
  scrollbar-color: ${e=>e.theme.scrollbar.thumb} ${e=>e.theme.scrollbar.track};
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${e=>e.theme.scrollbar.track};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.scrollbar.thumb};
    border-radius: 4px;
  }
`,fA=T.div`
  margin-bottom: 1rem;
`,hA=T.div`
  display: flex;
  align-items: center;
`,pA=T.input`
  background: transparent;
  border: none;
  color: ${e=>e.theme.terminal.text};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  padding: 0;
  flex: 1;
  outline: none;
  caret-color: ${e=>e.theme.terminal.prompt};
  
  &::placeholder {
    color: ${e=>`${e.theme.terminal.text}60`};
    font-style: italic;
    font-size: 0.85rem;
  }
  
  &:focus {
    outline: none;
  }
`,mA=()=>{const[e,t]=pi({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6}}},s="whoami jonas && cat profile.txt",l=[{label:"Years Experience",value:"5+"},{label:"CTFs Completed",value:"100+"},{label:"HTB Rank",value:"Top 400"},{label:"Projects",value:"5+"}];return v.jsxs(gA,{id:"about",ref:e,children:[v.jsx(AA,{}),v.jsxs(yA,{as:X.div,variants:r,initial:"hidden",animate:t?"visible":"hidden",children:[v.jsxs(vA,{variants:o,children:[v.jsx(xA,{children:"About Me"}),v.jsx(wA,{children:"My Background and Journey"})]}),v.jsxs(_A,{children:[v.jsxs(bA,{as:X.div,variants:o,children:[v.jsxs(Ud,{children:["Hi there! I'm ",v.jsx(SA,{children:"Jonas Resch"}),", a cybersecurity specialist with a passion for application security and ethical hacking."]}),v.jsx(Ud,{children:"With a background in computer science and years of experience in the security field, I specialize in identifying vulnerabilities, conducting penetration tests, and implementing secure development practices."}),v.jsx(Ud,{children:"My approach combines technical expertise with a creative mindset to discover security issues that others might miss. I believe that the best security professionals think like attackers but work as defenders."}),v.jsx($A,{children:l.map((u,d)=>v.jsxs(DA,{as:X.div,variants:o,whileHover:{y:-5,scale:1.02},children:[v.jsx(MA,{children:u.value}),v.jsx(RA,{children:u.label})]},d))}),v.jsx(kA,{children:["Penetration Testing","Vulnerability Assessment","Secure Coding","Network Security","CTF Competitions","OWASP Top 10","Security Research"].map(u=>v.jsx(TA,{children:u},u))})]}),v.jsxs(CA,{as:X.div,variants:o,children:[v.jsx(EA,{children:"Interactive Terminal"}),v.jsx(sA,{initialCommand:s,customOutput:v.jsxs(PA,{children:[v.jsxs("div",{className:"data-group",children:[v.jsx("span",{className:"label",children:"User:"}),v.jsx("span",{className:"value",children:"Jonas Resch"})]}),v.jsxs("div",{className:"data-group",children:[v.jsx("span",{className:"label",children:"Path:"}),v.jsxs("span",{className:"value typewriter-container",children:[v.jsxs("span",{className:"typewriter-prefix",children:[">"," "]}),v.jsx("span",{className:"typewriter-text",children:"Cybersecurity Enthusiast"})]})]}),v.jsxs("div",{className:"data-group",children:[v.jsx("span",{className:"label",children:"Location:"}),v.jsx("span",{className:"value",children:"Germany"})]}),v.jsxs("div",{className:"data-group",children:[v.jsx("span",{className:"label",children:"HTB Rank:"}),v.jsx("span",{className:"value",children:"<Top 400 Worldwide>"})]})]})}),v.jsxs(jA,{children:[v.jsx("i",{className:"fas fa-keyboard"})," Try typing commands like ",v.jsx(Hd,{onClick:()=>navigator.clipboard.writeText("help"),children:"help"}),", ",v.jsx(Hd,{onClick:()=>navigator.clipboard.writeText("whoami"),children:"whoami"}),", or ",v.jsx(Hd,{onClick:()=>navigator.clipboard.writeText("skills"),children:"skills"})]})]})]})]})]})},gA=T.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.background.primary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${e=>e.theme.colors.primary} 50%,
      transparent 100%
    );
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, ${e=>`${e.theme.background.primary}90`} 0%, transparent 100%);
    pointer-events: none;
    z-index: 1;
  }
`,yA=T.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`,vA=T(X.div)`
  text-align: center;
  margin-bottom: 3rem;
`,xA=T.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  
  @media ${Se.md} {
    font-size: 2rem;
  }
`,wA=T.p`
  font-size: 1.1rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  
  @media ${Se.md} {
    font-size: 1rem;
  }
`,_A=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media ${Se.lg} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,bA=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ud=T.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${e=>e.theme.text.secondary};
  position: relative;
  padding: 0.5rem 0;
  
  &:first-of-type {
    border-left: 3px solid ${e=>e.theme.colors.primary};
    padding-left: 1rem;
    font-weight: 500;
  }
  
  @media ${Se.md} {
    font-size: 1rem;
  }
`,SA=T.span`
  color: ${e=>e.theme.colors.primary};
  font-weight: 700;
  position: relative;
  padding: 0 5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: ${e=>`${e.theme.colors.primary}15`};
    z-index: -1;
    transform: skewX(-15deg);
  }
`,kA=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
  position: relative;
  
  &::before {
    content: '// Areas of expertise';
    display: block;
    width: 100%;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: ${e=>e.theme.text.tertiary};
    margin-bottom: 0.8rem;
  }
`,TA=T.span`
  background: ${e=>`${e.theme.colors.primary}20`};
  color: ${e=>e.theme.colors.primary};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'JetBrains Mono', monospace;
  border: 1px solid ${e=>`${e.theme.colors.primary}30`};
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background: ${e=>`${e.theme.colors.primary}30`};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,CA=T.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    background: ${e=>e.theme.colors.primary};
    opacity: 0.05;
    border-radius: 50%;
    filter: blur(30px);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    background: ${e=>e.theme.colors.accent||"#4B0082"};
    opacity: 0.05;
    border-radius: 50%;
    filter: blur(30px);
    z-index: 0;
  }
`,PA=T.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;
  
  .data-group {
    display: flex;
    
    .label {
      min-width: 90px;
      color: ${e=>e.theme.colors.primary};
      margin-right: 1rem;
      font-weight: 600;
    }
    
    .value {
      color: ${e=>e.theme.text.primary};
      font-weight: 500;
      position: relative;
      padding: 2px 5px;
      border-radius: 4px;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${e=>`${e.theme.colors.primary}10`};
      }
    }
    
    .typewriter-container {
      display: flex;
      align-items: center;
    }
    
    .typewriter-prefix {
      color: ${e=>e.theme.colors.success};
      margin-right: 0.3rem;
    }
    
    .typewriter-text {
      position: relative;
      font-weight: 600;
    }
    
    .typewriter-cursor {
      display: none;
    }
    
    @keyframes typewriter-blink {
      from, to { opacity: 0; }
      50% { opacity: 0; }
    }
  }
`,EA=T.div`
  font-family: 'JetBrains Mono', monospace;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '>';
    margin-right: 0.5rem;
    font-weight: bold;
  }
`,jA=T.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: ${e=>`${e.theme.background.secondary}80`};
  border-radius: 5px;
  border-left: 3px solid ${e=>e.theme.colors.info};
  font-size: 0.85rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 0.75rem;
    color: ${e=>e.theme.colors.info};
  }
`,Hd=T.span`
  background: ${e=>e.theme.background.tertiary};
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  margin: 0 0.3rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${e=>e.theme.colors.primary}20;
    transform: translateY(-1px);
  }
`,AA=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, ${e=>`${e.theme.colors.primary}10`} 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, ${e=>`${e.theme.colors.accent}10`} 0%, transparent 20%);
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
`,$A=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  
  @media ${Se.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`,DA=T(X.div)`
  background: ${e=>e.theme.background.secondary};
  border: 1px solid ${e=>e.theme.card.border};
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`,MA=T.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.3rem;
  font-family: 'JetBrains Mono', monospace;
`,RA=T.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
`,LA=""+new URL("flipperzero-DftLOYbv.png",import.meta.url).href,OA=""+new URL("securesafe-qUN-rGYM.png",import.meta.url).href,FA=""+new URL("quanthide-EuJArBnA.png",import.meta.url).href,sv=[{id:"flipper-zero-badusb",title:"FlipperZero BadUSB",description:"A comprehensive collection of BadUSB scripts for the Flipper Zero device, featuring various automation scripts for penetration testing.",image:LA,tags:["BadUSB","Penetration Testing","Automation","Flipper Zero"],links:{github:"https://github.com/reschjonas/FlipperZero_BadUSB",live:null},features:["Various automation scripts for penetration testing","Well-documented and easy to use","Regular updates and improvements","Supports multiple use cases"],status:"active"},{id:"secure-safe",title:"SecureSafe",description:"ECC-Based File Encryption Container with secure key management, utilizing Elliptic Curve Cryptography for secure key exchange.",image:OA,tags:["Cryptography","ECC","AES","Security"],links:{github:"https://github.com/reschjonas/SecureSafe",live:null},features:["Elliptic Curve Cryptography for key exchange","AES encryption for file content","Secure key management","Cross-platform compatibility"],status:"active"},{id:"quant-hide",title:"QuantHide",description:"Quantum-safe steganography tool leveraging advanced algorithms for secure file hiding and communication.",image:FA,tags:["Quantum","Steganography","Encryption","Security"],links:{github:"https://github.com/reschjonas/QuantHide",live:null},features:["Quantum-resistant encryption","Advanced steganography techniques","File hiding capabilities","Secure communication channel"],status:"development"}],zA=()=>{const e=V.useRef(null),t=pi(e),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},[s,l]=V.useState(null),[u,d]=V.useState(null),f=h=>{const m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},y={hidden:{y:10,opacity:0},visible:{y:0,opacity:1,transition:{duration:.3}}};return v.jsxs(JA,{initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.96},transition:{duration:.3,ease:"easeOut"},children:[v.jsxs(X.div,{variants:m,initial:"hidden",animate:"visible",children:[v.jsxs(QA,{variants:y,children:[v.jsx(qA,{className:`fas ${h.icon}`,$color:h.color}),v.jsxs(ZA,{children:[v.jsx(e$,{children:h.title}),v.jsx(t$,{children:h.tags.map((x,b)=>v.jsx(n$,{$color:h.color,children:x},b))})]}),v.jsx(r$,{$status:h.status,children:h.status})]}),v.jsx(i$,{variants:y,children:h.longDescription}),v.jsxs(o$,{variants:y,children:[v.jsx(s$,{children:"Key Features"}),v.jsx(a$,{children:h.features.map((x,b)=>v.jsxs(l$,{children:[v.jsx(u$,{className:"fas fa-check-circle",$color:h.color}),v.jsx(c$,{children:x})]},b))})]}),v.jsxs(d$,{variants:y,children:[h.githubUrl&&v.jsxs(lv,{href:h.githubUrl,target:"_blank",rel:"noopener noreferrer",$color:h.color,children:[v.jsx("i",{className:"fab fa-github"})," View Code"]}),h.liveUrl&&v.jsxs(lv,{href:h.liveUrl,target:"_blank",rel:"noopener noreferrer",$color:h.color,children:[v.jsx("i",{className:"fas fa-external-link-alt"})," Live Demo"]})]})]}),v.jsx(f$,{onClick:()=>l(null),$color:h.color,children:v.jsx("i",{className:"fas fa-times"})})]})};return v.jsxs(IA,{id:"projects",children:[v.jsxs(NA,{children:[v.jsx(VA,{as:X.h2,initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:"Featured Projects"}),v.jsx(BA,{ref:e,as:X.div,variants:r,initial:"hidden",animate:t?"visible":"hidden",children:sv.map((h,m)=>v.jsxs(UA,{as:X.div,variants:o,whileHover:{y:-10},children:[v.jsxs(Lw,{children:[v.jsx("img",{src:h.image,alt:h.title}),v.jsx(Rw,{children:v.jsxs(HA,{children:[v.jsx(av,{href:h.links.github,target:"_blank",rel:"noopener noreferrer",children:v.jsx("i",{className:"fab fa-github"})}),h.links.live&&v.jsx(av,{href:h.links.live,target:"_blank",rel:"noopener noreferrer",children:v.jsx("i",{className:"fas fa-external-link-alt"})})]})})]}),v.jsxs(WA,{children:[v.jsx(GA,{children:h.title}),v.jsx(YA,{children:h.description}),v.jsx(KA,{children:h.tags.map((y,x)=>v.jsx(XA,{children:y},x))})]})]},h.title))})]}),v.jsx(Jf,{children:s&&f(sv.find(h=>h.id===s))})]})},IA=T.section`
  padding: 6rem 2rem;
  background: ${e=>e.theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${e=>e.theme.colors.primary}40, 
      ${e=>e.theme.colors.primary}, 
      ${e=>e.theme.colors.primary}40, 
      transparent
    );
  }
  
  @media ${Se.md} {
    padding: 4rem 1rem;
  }
`,NA=T.div`
  max-width: 1400px;
  margin: 0 auto;
`,VA=T.h2`
  font-size: 2.5rem;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${e=>e.theme.colors.primary};
    margin: 1rem auto;
    border-radius: 3px;
  }
  
  @media ${Se.md} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,BA=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`,Rw=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
`,Lw=T.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`,UA=T.div`
  background: ${e=>e.theme.colors.cardBackground};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  border: 1px solid ${e=>e.theme.card.border};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${e=>e.theme.colors.primary}05,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    
    &::before {
      opacity: 1;
    }
    
    ${Rw} {
      opacity: 1;
    }
    
    ${Lw} img {
      transform: scale(1.1);
    }
  }
`,HA=T.div`
  display: flex;
  gap: 1rem;
`,av=T.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid ${e=>e.theme.colors.primary}40;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>e.theme.colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1);
    color: ${e=>e.theme.colors.background};
    
    &::before {
      opacity: 1;
    }
  }
  
  i {
    font-size: 1.2rem;
    position: relative;
    z-index: 1;
  }
`,WA=T.div`
  padding: 1.5rem;
`,GA=T.h3`
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
`,YA=T.p`
  color: ${e=>e.theme.text.secondary};
  margin-bottom: 1rem;
  line-height: 1.6;
`,KA=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,XA=T.span`
  padding: 0.3rem 0.8rem;
  background: ${e=>`${e.theme.colors.primary}15`};
  color: ${e=>e.theme.colors.primary};
  border-radius: 15px;
  font-size: 0.9rem;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.3s ease;
  border: 1px solid ${e=>e.theme.colors.primary}30;
  
  &:hover {
    background: ${e=>`${e.theme.colors.primary}25`};
    transform: translateY(-2px);
  }
`,JA=T(X.div)`
  position: relative;
  background: ${e=>e.theme.card.background};
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 4rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${e=>e.theme.card.border};
  overflow: hidden;
  z-index: 10;
  will-change: opacity, transform;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(0deg, transparent 49.5%, rgba(80, 250, 123, 0.03) 50%, transparent 50.5%),
      linear-gradient(90deg, transparent 49.5%, rgba(80, 250, 123, 0.03) 50%, transparent 50.5%);
    background-size: 30px 30px;
    opacity: 0.5;
    pointer-events: none;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, 
      ${e=>e.theme.colors.primary}, 
      ${e=>e.theme.colors.secondary},
      ${e=>e.theme.colors.primary}
    );
    opacity: 0.7;
    z-index: 1;
  }
  
  @media ${Se.sm} {
    padding: 2rem 1.5rem;
  }
`,QA=T(X.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${e=>e.theme.text.secondary}20,
      transparent
    );
  }
  
  @media ${Se.sm} {
    flex-direction: column;
    gap: 1rem;
  }
`,qA=T.i`
  font-size: 2rem;
  color: ${e=>e.$color||e.theme.colors.primary};
  background: ${e=>e.$color}15;
  padding: 1rem;
  border-radius: 20px;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    border: 2px solid ${e=>e.$color}30;
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 30px;
    background: ${e=>e.$color};
    opacity: 0.05;
    filter: blur(15px);
    z-index: -1;
  }
`,ZA=T.div`
  flex: 1;
  position: relative;
`,e$=T.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${e=>e.theme.colors.primary};
    border-radius: 3px;
  }
`,t$=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`,n$=T.span`
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${e=>e.$color}10;
  color: ${e=>e.$color};
  border: 1px solid ${e=>e.$color}30;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.$color}20;
    transform: translateY(-2px);
  }
`,r$=T.div`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${e=>{switch(e.$status){case"Completed":return e.theme.colors.success+"15";case"In Progress":return e.theme.colors.warning+"15";case"Active Development":return e.theme.colors.primary+"15";case"Prototype":return e.theme.colors.info+"15";default:return e.theme.colors.secondary+"15"}}};
  color: ${e=>{switch(e.$status){case"Completed":return e.theme.colors.success;case"In Progress":return e.theme.colors.warning;case"Active Development":return e.theme.colors.primary;case"Prototype":return e.theme.colors.info;default:return e.theme.colors.secondary}}};
  border: 1px solid ${e=>{switch(e.$status){case"Completed":return e.theme.colors.success+"30";case"In Progress":return e.theme.colors.warning+"30";case"Active Development":return e.theme.colors.primary+"30";case"Prototype":return e.theme.colors.info+"30";default:return e.theme.colors.secondary+"30"}}};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 2.5s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`,i$=T(X.p)`
  color: ${e=>e.theme.text.secondary};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  position: relative;
  padding: 0.5rem 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  &::first-letter {
    font-size: 1.5em;
    font-weight: 600;
    color: ${e=>e.theme.colors.primary};
  }
`,o$=T(X.div)`
  margin-bottom: 2rem;
  background: ${e=>e.theme.background.secondary}40;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid ${e=>e.theme.card.border};
`,s$=T.h4`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  display: flex;
  align-items: center;
  
  &::before {
    content: '⚙️';
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }
`,a$=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  
  @media ${Se.sm} {
    grid-template-columns: 1fr;
  }
`,l$=T.li`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 0.5rem 0;
`,u$=T.i`
  color: ${e=>e.$color||e.theme.colors.primary};
  font-size: 1rem;
  margin-top: 0.2rem;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));
`,c$=T.span`
  color: ${e=>e.theme.text.secondary};
  font-size: 1rem;
  line-height: 1.5;
`,d$=T(X.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,lv=T.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${e=>e.$primary?e.theme.colors.primary:e.theme.background.secondary}; 
  color: ${e=>e.$primary?"#fff":e.theme.text.secondary};
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid ${e=>e.$primary?"transparent":e.theme.card.border};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%) rotate(45deg);
    transition: transform 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: translateX(100%) rotate(45deg);
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;T.i`
  font-size: 1rem;
`;const f$=T.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${e=>e.theme.background.secondary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.text.secondary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5;
  
  &:hover {
    background: ${e=>e.$color}20;
    color: ${e=>e.$color};
    transform: rotate(90deg);
  }
`;T(X.a)`
  display: block;
  text-align: center;
  margin: 2rem auto;
  font-size: 1.1rem;
  color: ${e=>e.theme.colors.primary};
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 8px;
  
  i {
    margin-right: 0.5rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    background: ${e=>e.theme.background.secondary}80;
    text-decoration: underline;
  }
`;const h$=()=>{const[e,t]=pi({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6}}},s=[{title:"Security Tools",description:"Primary tools for security testing and analysis",tools:[{name:"Kali Linux",icon:"kali-linux.svg",description:"Primary penetration testing platform"},{name:"Burp Suite",icon:"burp.svg",description:"Web application security testing"},{name:"Metasploit",icon:"metasploit.svg",description:"Penetration testing framework"},{name:"Wireshark",icon:"wireshark.svg",description:"Network protocol analyzer"},{name:"Nmap",icon:"nmap.svg",description:"Network discovery and security scanning"},{name:"SQLMap",icon:"sqlmap.svg",description:"SQL injection testing"},{name:"Bloodhound",icon:"bloodhound.svg",description:"Active Directory analysis"},{name:"Hashcat",icon:"hashcat.svg",description:"Password recovery tool"}]},{title:"Programming Languages",description:"Languages I use for development and scripting",tools:[{name:"Python",icon:"python.svg",description:"Primary scripting language"},{name:"Bash",icon:"bash.svg",description:"Shell scripting"},{name:"DuckyScript",icon:"ducky.svg",description:"USB automation"},{name:"HTML",icon:"html.svg",description:"Web development"},{name:"CSS",icon:"css.svg",description:"Web styling"},{name:"C#",icon:"csharp.svg",description:"Application development"},{name:"Lua",icon:"lua.svg",description:"Scripting language"}]},{title:"Security Focus",description:"Areas of expertise in cybersecurity",tools:[{name:"Web Security",icon:"web-security.svg",description:"OWASP Top 10, XSS, CSRF"},{name:"Network Security",icon:"network.svg",description:"Protocol analysis, packet inspection"},{name:"Cryptography",icon:"crypto.svg",description:"Encryption, hashing, PKI"},{name:"Penetration Testing",icon:"pentest.svg",description:"Systematic security assessment"}]}];return V.useEffect(()=>{const l=document.querySelectorAll(".tool-card"),u=f=>{const h=f.currentTarget,m=h.getBoundingClientRect(),y=f.clientX-m.left,x=f.clientY-m.top,b=m.width/2,S=m.height/2,_=-((y-b)/b)*3,k=(x-S)/S*3;h.style.setProperty("--rotate-x",k),h.style.setProperty("--rotate-y",_),h.style.setProperty("--rotate-deg","3deg"),h.style.setProperty("--mouse-x",`${y}px`),h.style.setProperty("--mouse-y",`${x}px`)},d=f=>{f.style.setProperty("--rotate-x","0"),f.style.setProperty("--rotate-y","0"),f.style.setProperty("--rotate-deg","0deg")};return l.forEach(f=>{f.addEventListener("mousemove",u),f.addEventListener("mouseleave",()=>d(f))}),()=>{l.forEach(f=>{f.removeEventListener("mousemove",u),f.removeEventListener("mouseleave",()=>d(f))})}},[]),v.jsx(m$,{id:"skills",ref:e,children:v.jsxs(g$,{as:X.div,variants:r,initial:"hidden",animate:t?"visible":"hidden",children:[v.jsxs(y$,{variants:o,children:[v.jsx(v$,{children:"Technical Arsenal"}),v.jsx(x$,{children:"Tools and technologies I work with"})]}),v.jsx(w$,{children:s.map((l,u)=>v.jsxs(_$,{as:X.div,variants:o,children:[v.jsxs(b$,{children:[v.jsx(S$,{children:l.title}),v.jsx(k$,{children:l.description})]}),v.jsx(T$,{children:l.tools.map(d=>v.jsxs(lu,{className:"tool-card",as:X.div,whileHover:{y:-5,boxShadow:"0 8px 20px rgba(0,0,0,0.2)"},whileTap:{scale:.98},children:[v.jsx(C$,{children:v.jsx("i",{className:`fas fa-${p$(d.name)}`})}),v.jsxs(P$,{children:[v.jsx(E$,{children:d.name}),v.jsx(j$,{children:d.description})]})]},d.name))})]},l.title))})]})})};function p$(e){return{"Kali Linux":"terminal","Burp Suite":"bug",Metasploit:"code",Wireshark:"network-wired",Nmap:"search",SQLMap:"database",Bloodhound:"project-diagram",Hashcat:"key",Python:"python",Bash:"terminal",DuckyScript:"keyboard",HTML:"code",CSS:"palette","C#":"code",Lua:"moon","Web Security":"shield-alt","Network Security":"network-wired",Cryptography:"lock","Penetration Testing":"user-secret","Vulnerability Research":"search-plus"}[e]||"circle"}const m$=T.section`
  padding: 5rem 2rem;
  background: ${e=>e.theme.background.primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${e=>e.theme.colors.primary} 50%,
      transparent 100%
    );
    opacity: 0.3;
  }
`,g$=T.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`,y$=T(X.div)`
  text-align: center;
  margin-bottom: 3rem;
`,v$=T.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  
  @media ${Se.md} {
    font-size: 2rem;
  }
`,x$=T.p`
  font-size: 1.1rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  
  @media ${Se.md} {
    font-size: 1rem;
  }
`,w$=T.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,_$=T.div`
  background: ${e=>e.theme.card.background};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: ${e=>e.theme.card.shadow};
  border: 1px solid ${e=>e.theme.card.border};
  
  @media ${Se.sm} {
    padding: 1.5rem;
  }
`,b$=T.div`
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${e=>e.theme.colors.primary};
    border-radius: 3px;
  }
`,S$=T.h3`
  font-size: 1.5rem;
  color: ${e=>e.theme.text.primary};
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
`,k$=T.p`
  color: ${e=>e.theme.text.secondary};
  font-size: 0.95rem;
`,T$=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  
  @media ${Se.sm} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,lu=T(X.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: ${e=>e.theme.background.secondary};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.card.border};
  transition: all 0.3s ease;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      ${e=>`${e.theme.colors.primary}10`},
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      ${e=>`${e.theme.colors.primary}15`},
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px) rotate3d(var(--rotate-x, 0), var(--rotate-y, 1), 0, var(--rotate-deg, 3deg));
    border-color: ${e=>e.theme.colors.primary};
    background: ${e=>`${e.theme.background.secondary}90`};
    box-shadow: 
      0 15px 25px rgba(0, 0, 0, 0.15),
      0 0 0 1px ${e=>`${e.theme.colors.primary}30`};
      
    &::before {
      transform: translateX(100%);
    }
    
    &::after {
      opacity: 1;
    }
  }
`,C$=T.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 8px;
  background: ${e=>`${e.theme.colors.primary}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.primary};
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateY(100%) rotate(45deg);
    transition: transform 0.6s ease;
  }
  
  ${lu}:hover & {
    background: ${e=>e.theme.colors.primary};
    color: white;
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 
      0 0 15px ${e=>`${e.theme.colors.primary}40`},
      0 0 30px ${e=>`${e.theme.colors.primary}20`};
      
    &::before {
      transform: translateY(-100%) rotate(45deg);
    }
  }
`,P$=T.div`
  flex: 1;
  transform: translateZ(10px);
`,E$=T.h4`
  font-size: 1rem;
  color: ${e=>e.theme.text.primary};
  margin-bottom: 0.3rem;
  font-family: 'JetBrains Mono', monospace;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background: ${e=>e.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  ${lu}:hover &::after {
    width: 100%;
  }
`,j$=T.p`
  font-size: 0.85rem;
  color: ${e=>e.theme.text.secondary};
  line-height: 1.4;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  ${lu}:hover & {
    opacity: 1;
  }
`,A$=()=>{const[e,t]=pi({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6}}},s={hidden:{y:50,opacity:0,scale:.95},visible:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:100,damping:15,mass:1,duration:.6}},hover:{y:-10,scale:1.03,boxShadow:"0 20px 30px -5px rgba(0, 0, 0, 0.3), 0 10px 15px -5px rgba(0, 0, 0, 0.2)",transition:{type:"spring",stiffness:300,damping:20}},tap:{scale:.98,transition:{type:"spring",stiffness:500,damping:20}}},l=[{title:"File Encryption Tool with ECC and AES",excerpt:"Writeup on my first project secure-safe, a file encryption tool with ECC and AES...",date:"5 Jan 2025",category:"Cryptography",readTime:"5 min read",link:"https://medium.com/@reschjonas/building-a-secure-file-encryption-tool-with-ecc-and-aes-0cfb1b071c41",isComingSoon:!1,image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",glowColor:"rgba(13, 110, 253, 0.5)"},{title:"Understanding zero-knowledge proofs",excerpt:"A detailed analysis of zero-knowledge proofs and their applications in modern cybersecurity...",date:"Coming Soon",category:"Cryptography",readTime:"10 min read",link:"#",isComingSoon:!0,image:"https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",glowColor:"rgba(32, 201, 151, 0.5)"},{title:"HackTheBox Writeup: SecCorp",excerpt:"Detailed walkthrough of the SecCorp machine on HackTheBox, featuring privilege escalation techniques...",date:"Coming Soon",category:"CTF",readTime:"10 min read",link:"#",isComingSoon:!0,image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",glowColor:"rgba(220, 53, 69, 0.5)"}];return v.jsx($$,{id:"blog",ref:e,children:v.jsxs(D$,{as:X.div,variants:r,initial:"hidden",animate:t?"visible":"hidden",children:[v.jsxs(M$,{variants:o,children:[v.jsx(R$,{children:"Latest Insights"}),v.jsx(L$,{children:"Thoughts and tutorials on cybersecurity"})]}),v.jsx(O$,{children:l.map((u,d)=>v.jsxs(Ow,{variants:s,initial:"hidden",animate:"visible",whileHover:"hover",whileTap:"tap",transition:{duration:.5,delay:d*.1},glowColor:u.glowColor,children:[v.jsxs(F$,{children:[v.jsx(z$,{style:{backgroundImage:`url(${u.image})`}}),v.jsx(I$,{}),v.jsx(U$,{children:u.category}),u.isComingSoon&&v.jsxs(H$,{children:[v.jsx("i",{className:"fas fa-clock"})," Coming Soon"]})]}),v.jsxs(N$,{children:[v.jsxs(V$,{children:[v.jsxs(B$,{children:[v.jsx("i",{className:"far fa-calendar-alt"})," ",u.date]}),v.jsxs(K$,{children:[v.jsx("i",{className:"fas fa-clock"})," ",u.readTime]})]}),v.jsx(W$,{children:u.title}),v.jsx(G$,{children:u.excerpt}),v.jsxs(Y$,{children:[u.isComingSoon?v.jsxs(zw,{children:[v.jsx(uv,{children:"Notify Me"}),v.jsx(cv,{children:v.jsx("i",{className:"fas fa-bell"})})]}):v.jsxs(Fw,{href:u.link,target:"_blank",rel:"noopener noreferrer",children:[v.jsx(uv,{children:"Read Article"}),v.jsx(cv,{children:v.jsx("i",{className:"fas fa-arrow-right"})})]}),v.jsx(X$,{children:v.jsx("i",{className:"fas fa-share-alt"})})]}),v.jsx(J$,{})]})]},d))}),v.jsxs(Q$,{as:X.a,href:"#",variants:o,whileHover:{scale:1.05},whileTap:{scale:.98},children:[v.jsx("span",{children:"View All Articles"}),v.jsx("i",{className:"fas fa-chevron-right"})]})]})})},$$=T.section`
  padding: 5rem 2rem;
  background: ${e=>e.theme.background.primary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${e=>e.theme.colors.primary} 50%,
      transparent 100%
    );
    opacity: 0.3;
  }
`,D$=T.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`,M$=T(X.div)`
  text-align: center;
  margin-bottom: 3rem;
`,R$=T.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  
  @media ${Se.md} {
    font-size: 2rem;
  }
`,L$=T.p`
  font-size: 1.1rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  
  @media ${Se.md} {
    font-size: 1rem;
  }
`,O$=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media ${Se.sm} {
    grid-template-columns: 1fr;
  }
`,Ow=T(X.div)`
  background: ${e=>e.theme.card.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.card.shadow};
  border: 1px solid ${e=>e.theme.card.border};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary}, 
                0 0 20px ${e=>e.glowColor||e.theme.colors.primary}00;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::after {
    opacity: 0.5;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, ${e=>e.glowColor||e.theme.colors.primary}, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`,F$=T.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,z$=T.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${Ow}:hover & {
    transform: scale(1.1);
  }
`,I$=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
`,N$=T.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  height: calc(100% - 200px);
  position: relative;
  z-index: 1;
`,V$=T.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
`,B$=T.span`
  font-size: 0.85rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    font-size: 0.9rem;
    color: ${e=>e.theme.colors.primary};
  }
`,U$=T.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.85rem;
  color: white;
  background: ${e=>e.theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,H$=T.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`,W$=T.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.text.primary};
  line-height: 1.4;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 2rem;
    height: 2px;
    background: ${e=>e.theme.colors.primary};
  }
`,G$=T.p`
  color: ${e=>e.theme.text.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.7;
  flex-grow: 1;
  font-size: 0.95rem;
`,Y$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid ${e=>e.theme.card.border};
  padding-top: 1.2rem;
`,K$=T.span`
  font-size: 0.85rem;
  color: ${e=>e.theme.text.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    font-size: 0.8rem;
    color: ${e=>e.theme.colors.accent};
  }
`,Fw=T.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.primary};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${e=>`${e.theme.colors.primary}10`};
  padding: 0.6rem 1rem;
  border-radius: 5px;
  
  &:hover {
    background: ${e=>e.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`,zw=T.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.accent};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${e=>`${e.theme.colors.accent}10`};
  padding: 0.6rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: ${e=>e.theme.colors.accent};
    color: white;
    transform: translateY(-2px);
  }
`,X$=T.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.background.secondary};
  color: ${e=>e.theme.text.secondary};
  border: 1px solid ${e=>e.theme.card.border};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.theme.background.tertiary};
    color: ${e=>e.theme.text.primary};
    transform: rotate(15deg);
  }
`,uv=T.span`
  position: relative;
`,cv=T.span`
  i {
    font-size: 0.8rem;
  }
  
  ${Fw}:hover & {
    animation: bounceX 0.8s infinite;
  }
  
  ${zw}:hover & {
    animation: pulse 1s infinite;
  }
  
  @keyframes bounceX {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(3px); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`,J$=T.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  opacity: 0.1;
  pointer-events: none;
  width: 70px;
  height: 70px;
  
  &::before {
    content: '{ }';
    font-family: 'JetBrains Mono', monospace;
    font-size: 2rem;
    color: ${e=>e.theme.colors.primary};
  }
`,Q$=T.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 500;
  color: ${e=>e.theme.text.primary};
  background: transparent;
  border: 1px solid ${e=>e.theme.card.border};
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  margin: 3rem auto 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  i {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: ${e=>e.theme.background.secondary};
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
    
    i {
      transform: translateX(5px);
    }
  }
`,q$=()=>{const[e,t]=pi({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6}}},s=[{prompt:!0,text:"whoami"},{prompt:!1,text:"Jonas"},{prompt:!0,text:"contact --info"}];return v.jsx(Z$,{id:"contact",ref:e,children:v.jsxs(eD,{as:X.div,variants:r,initial:"hidden",animate:t?"visible":"hidden",children:[v.jsxs(tD,{variants:o,children:[v.jsx(nD,{children:"Get In Touch"}),v.jsx(rD,{children:"Let's connect"})]}),v.jsx(iD,{children:v.jsx(oD,{as:X.div,variants:o,children:v.jsxs(sD,{children:[v.jsxs(aD,{children:[v.jsx(Wd,{}),v.jsx(Wd,{}),v.jsx(Wd,{}),v.jsx(lD,{children:"contact.sh"})]}),v.jsxs(uD,{children:[s.map((l,u)=>v.jsxs(dv,{children:[l.prompt&&v.jsx(fv,{children:"$"}),v.jsx(cD,{children:l.text})]},u)),v.jsxs(dD,{children:[v.jsxs(hv,{href:"mailto:resch.jonas@pm.me",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("i",{className:"fas fa-envelope"})," resch.jonas@pm.me"]}),v.jsxs(hv,{href:"https://discord.com/users/1327615666613649410",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("i",{className:"fab fa-discord"})," dil1thium"]})]}),v.jsxs(dv,{children:[v.jsx(fv,{children:"$"}),v.jsx(fD,{children:"█"})]})]})]})})})]})})},Z$=T.section`
  padding: 5rem 2rem;
  background: ${e=>e.theme.background.primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${e=>e.theme.colors.primary} 50%,
      transparent 100%
    );
    opacity: 0.3;
  }
`,eD=T.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`,tD=T(X.div)`
  text-align: center;
  margin-bottom: 3rem;
`,nD=T.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  
  @media ${Se.md} {
    font-size: 2rem;
  }
`,rD=T.p`
  font-size: 1.1rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  
  @media ${Se.md} {
    font-size: 1rem;
  }
`,iD=T.div`
  display: flex;
  justify-content: center;
`,oD=T.div`
  background: ${e=>e.theme.card.background};
  border-radius: 12px;
  box-shadow: ${e=>e.theme.card.shadow};
  border: 1px solid ${e=>e.theme.card.border};
  max-width: 600px;
  width: 100%;
  overflow: hidden;
`,sD=T.div`
  display: flex;
  flex-direction: column;
`,aD=T.div`
  background: ${e=>e.theme.terminal.headerBackground};
  padding: 0.8rem;
  display: flex;
  align-items: center;
  user-select: none;
`,Wd=T.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.theme.terminal.buttonColor};
  margin-right: 8px;
  
  &:nth-child(1) {
    background: #ff5f56;
  }
  
  &:nth-child(2) {
    background: #ffbd2e;
  }
  
  &:nth-child(3) {
    background: #27c93f;
  }
`,lD=T.div`
  margin-left: 0.5rem;
  color: ${e=>e.theme.terminal.headerText};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
`,uD=T.div`
  padding: 1.5rem;
  background: ${e=>e.theme.terminal.bodyBackground};
  font-family: 'JetBrains Mono', monospace;
  min-height: 250px;
`,dv=T.div`
  display: flex;
  margin-bottom: 0.8rem;
  align-items: center;
`,fv=T.span`
  color: ${e=>e.theme.colors.success};
  margin-right: 0.5rem;
`,cD=T.span`
  color: ${e=>e.theme.text.primary};
`,dD=T.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,hv=T.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${e=>e.theme.colors.primary};
  transition: all 0.3s ease;
  
  i {
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: translateX(5px);
    text-decoration: underline;
  }
`,fD=T.span`
  color: ${e=>e.theme.colors.primary};
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`,hD=()=>{const[e,t]=pi({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},o={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return v.jsx(pD,{id:"privacy",ref:e,children:v.jsxs(mD,{as:X.div,variants:r,initial:"hidden",animate:t?"visible":"hidden",children:[v.jsxs(gD,{variants:o,children:[v.jsx(yD,{children:"Privacy Policy"}),v.jsx(vD,{children:"Last Updated: March 28, 2025"})]}),v.jsx(xD,{as:X.div,variants:o,children:v.jsxs(wD,{children:[v.jsxs(vr,{children:[v.jsx(xr,{children:"1. Responsible Party (Verantwortlicher)"}),v.jsxs(wr,{children:[v.jsxs("p",{children:["Jonas Resch",v.jsx("br",{}),"Email: resch.jonas@pm.me",v.jsx("br",{}),"Website: https://reschj.one"]}),v.jsx("p",{children:"As the operator of this website, I am committed to protecting your privacy and handling your data in accordance with the EU General Data Protection Regulation (GDPR) and German data protection laws."})]})]}),v.jsxs(vr,{children:[v.jsx(xr,{children:"2. Data Collection and Processing"}),v.jsxs(wr,{children:[v.jsx("p",{children:"This website is hosted on GitHub Pages. While we don't collect any data ourselves, GitHub, as our hosting provider, may collect and process certain technical data:"}),v.jsx("h4",{children:"2.1 GitHub Pages Data Processing"}),v.jsx("p",{children:"When you visit this website, GitHub Pages may collect and process:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"IP addresses"}),v.jsx("li",{children:"Browser type and version"}),v.jsx("li",{children:"Operating system"}),v.jsx("li",{children:"Page accessed"}),v.jsx("li",{children:"Time of server request"})]}),v.jsxs("p",{children:["This data processing is performed by GitHub as part of their hosting service. For more information, please refer to ",v.jsx("a",{href:"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection",target:"_blank",rel:"noopener noreferrer",children:"GitHub's privacy policy"}),"."]}),v.jsx("h4",{children:"2.2 Our Website"}),v.jsx("p",{children:"Our website itself:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Does not use cookies"}),v.jsx("li",{children:"Does not collect any personal data"}),v.jsx("li",{children:"Does not use any tracking or analytics services"}),v.jsx("li",{children:"Does not store any data on our end"})]})]})]}),v.jsxs(vr,{children:[v.jsx(xr,{children:"3. Legal Basis for Processing"}),v.jsxs(wr,{children:[v.jsx("p",{children:"The processing of technical data by GitHub Pages is based on:"}),v.jsx("ul",{children:v.jsx("li",{children:"Art. 6(1)(f) GDPR - Legitimate interests for providing a secure and efficient web hosting service"})}),v.jsx("p",{children:"GitHub processes this data as a data processor under their own privacy policy and terms of service."})]})]}),v.jsxs(vr,{children:[v.jsx(xr,{children:"4. Data Storage and Security"}),v.jsxs(wr,{children:[v.jsx("p",{children:"This website is hosted on GitHub Pages, a service provided by GitHub, Inc. (now part of Microsoft Corporation). GitHub may store and process data in the United States or any other country where GitHub or its affiliates maintain facilities."}),v.jsx("p",{children:"GitHub adheres to:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"EU-US Data Privacy Framework"}),v.jsx("li",{children:"Standard Contractual Clauses for international data transfers"})]}),v.jsx("p",{children:`Our website itself follows a "zero-data" approach, meaning we don't collect, store, or process any personal data beyond what is necessary for GitHub Pages to serve the website.`})]})]}),v.jsxs(vr,{children:[v.jsx(xr,{children:"5. Your Rights"}),v.jsxs(wr,{children:[v.jsx("p",{children:"Under the GDPR, you have the following rights:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Right to information (Art. 15 GDPR)"}),v.jsx("li",{children:"Right to rectification (Art. 16 GDPR)"}),v.jsx("li",{children:"Right to erasure (Art. 17 GDPR)"}),v.jsx("li",{children:"Right to restriction of processing (Art. 18 GDPR)"}),v.jsx("li",{children:"Right to data portability (Art. 20 GDPR)"}),v.jsx("li",{children:"Right to object (Art. 21 GDPR)"})]}),v.jsx("p",{children:"For data processed by GitHub Pages, please contact GitHub directly through their privacy channels. For any other concerns, you can contact me using the information provided above."})]})]}),v.jsxs(vr,{children:[v.jsx(xr,{children:"6. External Links"}),v.jsx(wr,{children:v.jsx("p",{children:"This website contains links to external sites (e.g., GitHub, LinkedIn). This privacy policy does not cover these external sites. Please review their respective privacy policies before providing any personal information."})})]}),v.jsxs(vr,{children:[v.jsx(xr,{children:"7. Changes to this Policy"}),v.jsx(wr,{children:v.jsx("p",{children:"We reserve the right to modify this privacy policy to reflect changes in legal requirements or our services. Significant changes will be clearly communicated on the website. The current version can always be found in our GitHub repository."})})]}),v.jsxs(vr,{children:[v.jsx(xr,{children:"8. Data Protection Authority"}),v.jsxs(wr,{children:[v.jsx("p",{children:"You have the right to lodge a complaint with a supervisory authority. The responsible authority in Germany is:"}),v.jsxs("p",{children:["Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit",v.jsx("br",{}),"Graurheindorfer Str. 153",v.jsx("br",{}),"53117 Bonn",v.jsx("br",{}),"Germany"]})]})]})]})})]})})},pD=T.section`
  padding: 5rem 2rem;
  background: ${e=>e.theme.background.primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${e=>e.theme.colors.primary} 50%,
      transparent 100%
    );
    opacity: 0.3;
  }
`,mD=T.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`,gD=T(X.div)`
  text-align: center;
  margin-bottom: 3rem;
`,yD=T.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  
  @media ${Se.md} {
    font-size: 2rem;
  }
`,vD=T.p`
  font-size: 1.1rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  
  @media ${Se.md} {
    font-size: 1rem;
  }
`,xD=T.div`
  background: ${e=>e.theme.card.background};
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: ${e=>e.theme.card.shadow};
  border: 1px solid ${e=>e.theme.card.border};
  
  @media ${Se.sm} {
    padding: 1.5rem;
  }
`,wD=T.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,vr=T.div`
  background: ${e=>e.theme.card.background};
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid ${e=>e.theme.card.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,xr=T.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.colors.primary};
  font-family: 'JetBrains Mono', monospace;
`,wr=T.div`
  color: ${e=>e.theme.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  a {
    color: ${e=>e.theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,_D=({togglePrivacy:e})=>{const t=new Date().getFullYear();return v.jsx(bD,{children:v.jsxs(SD,{children:[v.jsxs(pv,{children:[v.jsxs(kD,{children:[v.jsx(TD,{children:"JR"}),v.jsx(CD,{children:"Jonas Resch"})]}),v.jsxs(PD,{children:[v.jsx(ds,{href:"#about",children:"About"}),v.jsx(ds,{href:"#skills",children:"Skills"}),v.jsx(ds,{href:"#projects",children:"Projects"}),v.jsx(ds,{href:"#blog",children:"Blog"}),v.jsx(ds,{href:"#contact",children:"Contact"})]})]}),v.jsx(ED,{}),v.jsxs(pv,{children:[v.jsxs(jD,{children:["© ",t," Jonas Resch. All rights reserved."]}),v.jsxs(AD,{children:[v.jsx(Vf,{onClick:e,children:"Privacy Policy"}),v.jsx(Vf,{href:"mailto:resch.jonas@pm.me",children:"Contact"}),v.jsxs($D,{href:`mailto:resch.jonas@pm.me?subject=Bug Report: Portfolio Website&body=Page URL: ${window.location.href}%0D%0A%0D%0ADescription of the bug:%0D%0A%0D%0ASteps to reproduce:%0D%0A1.%0D%0A2.%0D%0A3.%0D%0A%0D%0AExpected behavior:%0D%0A%0D%0AActual behavior:%0D%0A%0D%0ABrowser: ${navigator.userAgent}%0D%0A`,children:[v.jsx("i",{className:"fas fa-bug"}),"Report Bug"]})]})]})]})})},bD=T.footer`
  background: ${e=>e.theme.footer.background};
  border-top: 1px solid ${e=>e.theme.footer.border};
  padding: 3rem 0;
  color: ${e=>e.theme.footer.text};
`,SD=T.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,pv=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`,kD=T.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,TD=T.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #0D6EFD, #20C997);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
`,CD=T.div`
  font-weight: 600;
  font-size: 1.1rem;
`,PD=T.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`,ds=T.a`
  color: ${e=>e.theme.text.secondary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,ED=T.hr`
  border: none;
  height: 1px;
  background: ${e=>e.theme.footer.border};
  margin: 2rem 0;
`,jD=T.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.text.tertiary};
`,AD=T.div`
  display: flex;
  gap: 1.5rem;
`,Vf=T.a`
  font-size: 0.9rem;
  color: ${e=>e.theme.text.secondary};
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,$D=T(Vf)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.danger};
  transition: color 0.3s ease;
  
  i {
    font-size: 0.9rem;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.danger};
    text-decoration: underline;
  }
`,DD=()=>{const[e,t]=V.useState({x:0,y:0}),[r,o]=V.useState(!1),[s,l]=V.useState(!1),[u,d]=V.useState(!1);return V.useEffect(()=>{const f=S=>{t({x:S.clientX,y:S.clientY})},h=()=>l(!0),m=()=>l(!1),y=S=>{o(!0);const _=S.target.tagName==="A"||S.target.tagName==="BUTTON"||S.target.closest("a")||S.target.closest("button");d(_)},x=()=>{o(!1),d(!1)};document.body.style.cursor="none",document.body.style.userSelect="none";const b=document.createElement("style");return b.textContent=`
      * {
        cursor: none !important;
      }
      a, button, input, textarea, [role="button"] {
        cursor: none !important;
        outline: none !important;
      }
      a:focus, button:focus, input:focus, textarea:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    `,document.head.appendChild(b),window.addEventListener("mousemove",f),window.addEventListener("mousedown",h),window.addEventListener("mouseup",m),window.addEventListener("mouseenter",y),window.addEventListener("mouseleave",x),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mousedown",h),window.removeEventListener("mouseup",m),window.removeEventListener("mouseenter",y),window.removeEventListener("mouseleave",x),document.body.style.cursor="auto",document.body.style.userSelect="auto",b.remove()}},[]),v.jsxs(v.Fragment,{children:[v.jsx(MD,{style:{left:`${e.x}px`,top:`${e.y}px`,transform:"translate(-50%, -50%) scale(1)"}}),v.jsx(RD,{style:{left:`${e.x}px`,top:`${e.y}px`,transform:`translate(-50%, -50%) scale(${s?.8:1})`}}),u&&v.jsxs(LD,{style:{left:`${e.x}px`,top:`${e.y}px`,transform:"translate(-50%, -50%)"},children:[v.jsx(mv,{}),v.jsx(mv,{$vertical:!0}),v.jsx(fl,{$position:"top-left"}),v.jsx(fl,{$position:"top-right"}),v.jsx(fl,{$position:"bottom-left"}),v.jsx(fl,{$position:"bottom-right"}),v.jsx(OD,{})]})]})},MD=T(X.div)`
  position: fixed;
  width: 4px;
  height: 4px;
  background: ${e=>e.theme.colors.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
  will-change: transform;
  box-shadow: 0 0 5px ${e=>e.theme.colors.primary};
`,RD=T(X.div)`
  position: fixed;
  width: 16px;
  height: 16px;
  border: 1px solid ${e=>e.theme.colors.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  box-shadow: 0 0 10px ${e=>e.theme.colors.primary}20;
`,LD=T(X.div)`
  position: fixed;
  width: 40px;
  height: 40px;
  pointer-events: none;
  z-index: 9997;
  mix-blend-mode: difference;
  transition: transform 0.2s ease;
  will-change: transform;
`,mv=T.div`
  position: absolute;
  background: ${e=>e.theme.colors.primary};
  box-shadow: 0 0 5px ${e=>e.theme.colors.primary};
  
  ${e=>e.vertical?`
    width: 1px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  `:`
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  `}
`,fl=T.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border: 1px solid ${e=>e.theme.colors.primary};
  box-shadow: 0 0 5px ${e=>e.theme.colors.primary};
  
  ${e=>{switch(e.position){case"top-left":return`
          top: -1px;
          left: -1px;
          border-right: none;
          border-bottom: none;
        `;case"top-right":return`
          top: -1px;
          right: -1px;
          border-left: none;
          border-bottom: none;
        `;case"bottom-left":return`
          bottom: -1px;
          left: -1px;
          border-right: none;
          border-top: none;
        `;case"bottom-right":return`
          bottom: -1px;
          right: -1px;
          border-left: none;
          border-top: none;
        `;default:return""}}}
`,OD=T.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: ${e=>e.theme.colors.primary};
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  box-shadow: 0 0 5px ${e=>e.theme.colors.primary};
  animation: scan 2s linear infinite;
  
  @keyframes scan {
    0% { transform: translateY(-50%) translateX(-100%); }
    100% { transform: translateY(-50%) translateX(100%); }
  }
`,FD=({title:e="Jonas Resch | Cybersecurity Portfolio",description:t="Cybersecurity Specialist and Software Developer. Specializing in application security, vulnerability research, and secure software development.",canonicalUrl:r,ogType:o="website",ogImage:s="/og-image.svg",structuredData:l=null})=>{const u="https://reschj.one",d=r?`${u}${r}`:u,f=`${u}${s}`;return v.jsxs(eE,{children:[v.jsx("title",{children:e}),v.jsx("meta",{name:"description",content:t}),r&&v.jsx("link",{rel:"canonical",href:d}),v.jsx("meta",{property:"og:title",content:e}),v.jsx("meta",{property:"og:description",content:t}),v.jsx("meta",{property:"og:type",content:o}),r&&v.jsx("meta",{property:"og:url",content:d}),v.jsx("meta",{property:"og:image",content:f}),v.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),v.jsx("meta",{name:"twitter:title",content:e}),v.jsx("meta",{name:"twitter:description",content:t}),v.jsx("meta",{name:"twitter:image",content:f}),l&&v.jsx("script",{type:"application/ld+json",children:JSON.stringify(l)})]})},zD=()=>{const[e,t]=pi({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6}}},s=[{name:"DarkCorp",rank:"#211",date:"09 Feb 2025",points:75,difficulty:"Insane",logo:"/htb-logo.svg",url:"https://www.hackthebox.com/achievement/machine/1927476/647"},{name:"Infiltrator",rank:"#1237",date:"23 Jan 2025",points:75,difficulty:"Insane",logo:"/htb-logo.svg",url:"https://www.hackthebox.com/achievement/machine/1927476/623"},{name:"University",rank:"#995",date:"22 Jan 2025",points:75,difficulty:"Insane",logo:"/htb-logo.svg",url:"https://www.hackthebox.com/achievement/machine/1927476/632"}];return v.jsx(ID,{id:"achievements",ref:e,children:v.jsxs(ND,{as:X.div,variants:r,initial:"hidden",animate:t?"visible":"hidden",children:[v.jsxs(VD,{variants:o,children:[v.jsx(BD,{children:"Achievements"}),v.jsx(UD,{children:"Recent accomplishments and certifications"})]}),v.jsxs(JD,{children:[v.jsxs(Iw,{as:X.a,href:"https://www.linkedin.com/posts/jonas-resch-91bba733b_hackthebox-activity-7272946669795631104-0REK",target:"_blank",rel:"noopener noreferrer",variants:o,whileHover:{y:-5,boxShadow:"0 8px 30px rgba(0,0,0,0.2)"},children:[v.jsxs(Nw,{children:[v.jsx(QD,{src:"https://labs.hackthebox.com/storage/fortresses/8f14e45fceea167a5a36dedd4bea2543_logo.svg",alt:"AWS Logo"}),v.jsx(qD,{children:"AWS Fortress"})]}),v.jsxs(ZD,{children:[v.jsx(e3,{children:"Status: Pwned!"}),v.jsx(t3,{children:"Successfully completed the AWS Fortress challenge on HackTheBox, demonstrating advanced cloud security expertise."}),v.jsxs(n3,{children:[v.jsxs(gv,{children:[v.jsx("i",{className:"fas fa-trophy"}),v.jsx("span",{children:"Major Achievement"})]}),v.jsxs(gv,{children:[v.jsx("i",{className:"fas fa-cloud"}),v.jsx("span",{children:"Cloud Security"})]})]})]})]}),v.jsxs(r3,{as:X.div,variants:o,children:[v.jsxs(i3,{children:[v.jsx(o3,{src:"/htb-logo.svg",alt:"HackTheBox Logo"}),v.jsx(s3,{children:"Recent Machine Pwns"})]}),v.jsx(a3,{children:s.map((l,u)=>v.jsxs(l3,{whileHover:{x:10,backgroundColor:"rgba(157, 239, 0, 0.1)"},as:X.div,children:[v.jsxs(u3,{children:[l.name,v.jsx(p3,{children:l.difficulty})]}),v.jsxs(c3,{children:[v.jsxs(d3,{children:["Rank: ",l.rank]}),v.jsxs(f3,{children:[l.points," points"]}),v.jsx(h3,{children:l.date}),v.jsxs(m3,{href:l.url,target:"_blank",rel:"noopener noreferrer",children:[v.jsx("i",{className:"fas fa-external-link-alt"}),"Visit"]})]})]},l.name))})]}),v.jsxs(Vs,{as:X.a,href:"https://www.linkedin.com/posts/jonas-resch-91bba733b_hackthebox-activity-7272946669795631104-0REK",target:"_blank",rel:"noopener noreferrer",variants:o,children:[v.jsx(HD,{children:v.jsxs(WD,{children:[v.jsx(GD,{children:"Solar Pro Labs"}),v.jsxs(YD,{children:[v.jsx("i",{className:"fas fa-certificate"}),v.jsx("span",{children:"Advanced Enterprise Lab"})]}),v.jsxs(KD,{children:[v.jsx("i",{className:"fas fa-eye"}),"View Certificate"]})]})}),v.jsx(XD,{src:"/src/assets/images/solar-cert.png",alt:"Solar Labs Certificate",loading:"lazy"})]})]})]})})},ID=T.section`
  padding: 5rem 2rem;
  background: ${e=>e.theme.background.primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${e=>e.theme.colors.primary} 50%,
      transparent 100%
    );
    opacity: 0.3;
  }
`,ND=T.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`,VD=T(X.div)`
  text-align: center;
  margin-bottom: 3rem;
`,BD=T.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.text.primary};
  font-weight: 700;
  
  @media ${Se.md} {
    font-size: 2rem;
  }
`,UD=T.p`
  font-size: 1.1rem;
  color: ${e=>e.theme.text.secondary};
  font-family: 'JetBrains Mono', monospace;
  
  @media ${Se.md} {
    font-size: 1rem;
  }
`,Vs=T(X.a)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.card.shadow};
  cursor: pointer;
  background: ${e=>e.theme.background.secondary};
  aspect-ratio: 1.414/1; // Standard A4 paper ratio
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`,HD=T(X.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;

  ${Vs}:hover & {
    opacity: 1;
  }
`,WD=T.div`
  color: white;
  width: 100%;
`,GD=T.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  color: #9fef00;
`,YD=T.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  
  i {
    color: #9fef00;
  }
`,KD=T.button`
  background: rgba(159, 239, 0, 0.2);
  border: 1px solid #9fef00;
  color: #9fef00;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #9fef00;
    color: black;
  }

  i {
    font-size: 0.8rem;
  }
`,XD=T(X.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.3s ease;
  transform: scale(1.1);
  
  ${Vs}:hover & {
    filter: blur(3px);
  }
`,JD=T.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  ${Vs} {
    grid-column: 1 / -1;
    grid-row: 2;
    margin-top: 3rem;
  }
  
  @media ${Se.md} {
    grid-template-columns: 1fr;
    
    ${Vs} {
      grid-row: 3;
      aspect-ratio: 1/1.414; // Switch to portrait on mobile
    }
  }
`,Iw=T(X.div)`
  background: ${e=>e.theme.card.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.card.shadow};
  border: 1px solid ${e=>e.theme.card.border};
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`,Nw=T.div`
  padding: 1.5rem;
  background: ${e=>e.theme.background.secondary};
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${e=>e.theme.card.border};
`,QD=T.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`,qD=T.h3`
  font-size: 1.2rem;
  color: ${e=>e.theme.text.primary};
  font-family: 'JetBrains Mono', monospace;
`,ZD=T.div`
  padding: 1.5rem;
`,e3=T.div`
  color: #9fef00;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`,t3=T.p`
  color: ${e=>e.theme.text.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,n3=T.div`
  display: flex;
  gap: 1rem;
`,gv=T.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.text.secondary};
  font-size: 0.9rem;
  
  i {
    color: ${e=>e.theme.colors.primary};
  }
`,r3=T(Iw)`
  background: ${e=>e.theme.card.background};
`,i3=T(Nw)`
  background: #111927;
`,o3=T.img`
  width: 30px;
  height: 30px;
`,s3=T.h3`
  color: #9fef00;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
`,a3=T.div`
  display: flex;
  flex-direction: column;
`,l3=T(X.div)`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${e=>e.theme.card.border};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
`,u3=T.h4`
  color: ${e=>e.theme.text.primary};
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,c3=T.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${e=>e.theme.text.secondary};
  font-size: 0.9rem;
  font-family: 'JetBrains Mono', monospace;
`,d3=T.span`
  color: #9fef00;
`,f3=T.span``,h3=T.span`
  opacity: 0.7;
`,p3=T.span`
  background: rgba(255, 55, 95, 0.2);
  color: #FF375F;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  border: 1px solid rgba(255, 55, 95, 0.3);
`,m3=T.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(159, 239, 0, 0.1);
  color: #9fef00;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(159, 239, 0, 0.2);
  margin-left: auto;

  &:hover {
    background: #9fef00;
    color: black;
    text-decoration: none;
  }

  i {
    font-size: 0.7rem;
  }
`;class g3 extends We.Component{constructor(t){super(t),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,r){this.setState({error:t,errorInfo:r}),console.error("Error caught by ErrorBoundary:",t,r)}render(){return this.state.hasError?v.jsxs("div",{style:{padding:"20px",margin:"20px",backgroundColor:"#ffdddd",border:"1px solid #ff0000",borderRadius:"5px",color:"#333"},children:[v.jsx("h2",{children:"Something went wrong."}),v.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[v.jsx("summary",{children:"View Error Details"}),this.state.error&&this.state.error.toString(),v.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}const y3={"@context":"https://schema.org","@type":"Person",name:"Jonas Resch",url:"https://reschj.one",jobTitle:"Cybersecurity Specialist",knowsAbout:["Ethical Hacking","Penetration Testing","Application Security","Vulnerability Assessment","Cybersecurity"],nationality:{"@type":"Country",name:"Germany"}},v3=()=>{const[e,t]=V.useState(!0),[r,o]=V.useState("dark"),[s,l]=V.useState(!1),[u,d]=V.useState("home"),f=V.useRef(!0),h=V.useRef(null);V.useEffect(()=>{const S=localStorage.getItem("theme");if(S)o(S);else{const _=window.matchMedia("(prefers-color-scheme: dark)").matches;o(_?"dark":"light")}},[]),V.useEffect(()=>{!e&&f.current&&(window.scrollTo(0,0),f.current=!1,setTimeout(()=>{window.scrollY>0&&window.scrollTo(0,0)},100))},[e]),V.useEffect(()=>{const S=()=>{if(f.current)return;const _=["home","about","skills","projects","achievements","blog","contact"];for(const k of _){const P=document.getElementById(k);if(P){const j=P.getBoundingClientRect();if(j.top<=window.innerHeight/2&&j.bottom>=window.innerHeight/2&&u!==k){d(k);break}}}};return window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},[u]);const m=()=>{const S=r==="dark"?"light":"dark";o(S),localStorage.setItem("theme",S)},y=()=>{l(!s),s||setTimeout(()=>{var S;(S=document.getElementById("privacy"))==null||S.scrollIntoView({behavior:"smooth"})},100)},x=()=>{switch(u){case"home":return"Jonas Resch | Cybersecurity Portfolio";case"about":return"About Jonas | Cybersecurity Specialist";case"skills":return"Skills & Expertise | Jonas Resch";case"projects":return"Cybersecurity Projects | Jonas Resch";case"achievements":return"Achievements & Recognition | Jonas Resch";case"blog":return"Cybersecurity Blog | Jonas Resch";case"contact":return"Contact Jonas Resch | Cybersecurity Specialist";default:return"Jonas Resch | Cybersecurity Portfolio"}},b=()=>{switch(u){case"home":return"Jonas Resch - Cybersecurity Specialist and Software Developer. Specializing in application security, vulnerability research, and secure software development.";case"about":return"Learn about Jonas Resch, a cybersecurity specialist with a passion for application security and ethical hacking.";case"skills":return"Explore Jonas Resch's cybersecurity skills including Ethical Hacking, Penetration Testing, and Security Tools expertise.";case"projects":return"View cybersecurity projects and research by Jonas Resch, featuring vulnerability assessments and security implementations.";case"achievements":return"Discover Jonas Resch's achievements in cybersecurity, including certifications, awards, and recognition in the field.";case"blog":return"Read articles and insights on cybersecurity, ethical hacking, and application security by Jonas Resch.";case"contact":return"Get in touch with Jonas Resch for cybersecurity consulting, penetration testing, or collaboration opportunities.";default:return"Jonas Resch - Cybersecurity Specialist and Software Developer. Specializing in application security, vulnerability research, and secure software development."}};return v.jsx(C1,{children:v.jsxs(XS,{theme:r==="dark"?nE:tE,children:[v.jsx(rE,{}),v.jsx(FD,{title:x(),description:b(),canonicalUrl:`/#${u}`,structuredData:y3}),v.jsx(DD,{}),v.jsx(Jf,{children:e&&v.jsx(iE,{setIsLoading:t})}),!e&&v.jsx(g3,{children:v.jsxs(x3,{children:[v.jsx(WE,{toggleTheme:m,theme:r}),v.jsxs("main",{children:[v.jsx("div",{id:"home",children:v.jsx(_j,{ref:h})}),v.jsx("div",{id:"about",children:v.jsx(mA,{})}),v.jsx("div",{id:"skills",children:v.jsx(h$,{})}),v.jsx("div",{id:"projects",children:v.jsx(zA,{})}),v.jsx("div",{id:"achievements",children:v.jsx(zD,{})}),v.jsx("div",{id:"blog",children:v.jsx(A$,{})}),v.jsx("div",{id:"contact",children:v.jsx(q$,{})}),s&&v.jsx("div",{id:"privacy",children:v.jsx(hD,{})})]}),v.jsx(_D,{togglePrivacy:y})]})})]})})},x3=T.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;Yb.createRoot(document.getElementById("root")).render(v.jsx(V.StrictMode,{children:v.jsx(v3,{})}));
