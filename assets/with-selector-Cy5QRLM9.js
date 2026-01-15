import{k as N,g,i as F}from"./index-BeBsoWak.js";var V=N();const B=g(V);var C={exports:{}},r={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function W(){if(O)return r;O=1;var o=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),v=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),i=Symbol.for("react.suspense_list"),s=Symbol.for("react.memo"),t=Symbol.for("react.lazy"),u=Symbol.for("react.view_transition"),a=Symbol.for("react.client.reference");function n(e){if(typeof e=="object"&&e!==null){var f=e.$$typeof;switch(f){case o:switch(e=e.type,e){case E:case m:case S:case c:case i:case u:return e;default:switch(e=e&&e.$$typeof,e){case v:case R:case t:case s:return e;case d:return e;default:return f}}case _:return f}}}return r.ContextConsumer=d,r.ContextProvider=v,r.Element=o,r.ForwardRef=R,r.Fragment=E,r.Lazy=t,r.Memo=s,r.Portal=_,r.Profiler=m,r.StrictMode=S,r.Suspense=c,r.SuspenseList=i,r.isContextConsumer=function(e){return n(e)===d},r.isContextProvider=function(e){return n(e)===v},r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===o},r.isForwardRef=function(e){return n(e)===R},r.isFragment=function(e){return n(e)===E},r.isLazy=function(e){return n(e)===t},r.isMemo=function(e){return n(e)===s},r.isPortal=function(e){return n(e)===_},r.isProfiler=function(e){return n(e)===m},r.isStrictMode=function(e){return n(e)===S},r.isSuspense=function(e){return n(e)===c},r.isSuspenseList=function(e){return n(e)===i},r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===E||e===m||e===S||e===c||e===i||typeof e=="object"&&e!==null&&(e.$$typeof===t||e.$$typeof===s||e.$$typeof===v||e.$$typeof===d||e.$$typeof===R||e.$$typeof===a||e.getModuleId!==void 0)},r.typeOf=n,r}var Y;function z(){return Y||(Y=1,C.exports=W()),C.exports}var H=z(),h={exports:{}},P={},A={exports:{}},x={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b;function U(){if(b)return x;b=1;var o=F();function _(t,u){return t===u&&(t!==0||1/t===1/u)||t!==t&&u!==u}var E=typeof Object.is=="function"?Object.is:_,S=o.useState,m=o.useEffect,d=o.useLayoutEffect,v=o.useDebugValue;function R(t,u){var a=u(),n=S({inst:{value:a,getSnapshot:u}}),e=n[0].inst,f=n[1];return d(function(){e.value=a,e.getSnapshot=u,c(e)&&f({inst:e})},[t,a,u]),m(function(){return c(e)&&f({inst:e}),t(function(){c(e)&&f({inst:e})})},[t]),v(a),a}function c(t){var u=t.getSnapshot;t=t.value;try{var a=u();return!E(t,a)}catch{return!0}}function i(t,u){return u()}var s=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?i:R;return x.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:s,x}var L;function G(){return L||(L=1,A.exports=U()),A.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q;function k(){if(q)return P;q=1;var o=F(),_=G();function E(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var S=typeof Object.is=="function"?Object.is:E,m=_.useSyncExternalStore,d=o.useRef,v=o.useEffect,R=o.useMemo,c=o.useDebugValue;return P.useSyncExternalStoreWithSelector=function(i,s,t,u,a){var n=d(null);if(n.current===null){var e={hasValue:!1,value:null};n.current=e}else e=n.current;n=R(function(){function I(l){if(!w){if(w=!0,p=l,l=u(l),a!==void 0&&e.hasValue){var T=e.value;if(a(T,l))return y=T}return y=l}if(T=y,S(p,l))return T;var M=u(l);return a!==void 0&&a(T,M)?(p=l,T):(p=l,y=M)}var w=!1,p,y,$=t===void 0?null:t;return[function(){return I(s())},$===null?void 0:function(){return I($())}]},[s,t,u,a]);var f=m(i,n[0],n[1]);return v(function(){e.hasValue=!0,e.value=f},[f]),c(f),f},P}var D;function X(){return D||(D=1,h.exports=k()),h.exports}var J=X();export{B as R,V as a,G as b,H as r,J as w};
