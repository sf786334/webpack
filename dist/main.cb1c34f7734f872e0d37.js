(()=>{"use strict";var e,t,r={821:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"body{background:gray}",""]);const a=o},668:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"body{background:red}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=n.base?u[0]+n.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var f=r(d),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(t[f].references++,t[f].updater(p)):t.push({identifier:d,updater:o(p,n),references:1}),i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var u=n(e,o),s=0;s<a.length;s++){var l=r(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".7499f100e0d63f122b26.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpack-domo-1:",o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[n];var f=(t,n)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=a);var i=o.p+o.u(t),c=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[i,c,u]=r,s=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);for(u&&u(o),t&&t(r);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0},r=self.webpackChunkwebpack_domo_1=self.webpackChunkwebpack_domo_1||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{var e=o(379),t=o.n(e),r=o(795),n=o.n(r),a=o(569),i=o.n(a),c=o(565),u=o.n(c),s=o(216),l=o.n(s),d=o(589),f=o.n(d),p=o(821),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var v=o(668),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=n(),h.insertStyleElement=l(),t()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const b=o.p+"717e2087449967f08d6d2217647ea019.png",g=document.getElementById("app");g.innerHTML=`<img src="${b} ">`;const y=document.createElement("button");y.innerText="懒加载",y.onclick=()=>{o.e(679).then(o.bind(o,679)).then((e=>{(0,e.default)()}),(()=>{}))},g.appendChild(y)})()})();