!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=73)}({29:function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var s=t(c[0]);if(u=(r.read||r)(u,s)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(o[s]=u,e===s)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}(function(){})})},73:function(e,t,n){"use strict";n.r(t);var r=n(29),o=n.n(r);!function(){var e=navigator.userAgent,t=[new RegExp("^https://[a-z-0-9]+".concat(".cnyes.com".replace(".","."),"$")),/https\:\/\/.+\.(int|beta|stage|gamma)\.withgod\-test\.anue\.in/,/https\:\/\/.+\.anue\.in/];if(window.parent.location&&!1===/Windows NT/.test(e)){var n=new URL(document.referrer);if(!t.reduce(function(e,t){return e||t.test(n.origin)},!1))throw"[dpi] frame access forbidden as you are trying to access from an invalid domain."}function r(e,t,n,r){window.parent.postMessage(JSON.stringify({type:n,data:r,tid:t}),e)}window.addEventListener("message",function(e){var n=e.origin;if(t.reduce(function(t,n){return t||n.test(e.origin)},!1))try{var i=e.data,a=i.method,c=i.args,u=i.tid;switch(a){case"storage":if("get"===c[0])r(n,u,"dpi:storage.get",o.a.get(c[1])||localStorage[c[1]]||"");else"set"===c[0]?(o.a.set(c[1],c[2],{expires:30,path:"/",domain:".cnyes.com",secure:!0,sameSite:"strict"}),r(n,u,"dpi:storage.set")):"delete"===c[0]&&(delete localStorage[c[1]],o.a.remove(c[1],{path:"/",domain:".cnyes.com"}),r(n,u,"dpi:storage.delete"))}}catch(e){}})}()}});