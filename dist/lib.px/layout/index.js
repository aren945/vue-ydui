/*! vue-ydui v0.2.0 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var i=r(48),o=n(i);t.Layout=o.default},1:function(e,t){e.exports=function(e,t,r,n){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:i,exports:o,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},3:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=f[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(s(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(s(r.parts[i]));f[r.id]={id:r.id,refs:1,parts:o}}}}function i(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],l=o[2],u=o[3],f={css:a,media:l,sourceMap:u};n[s]?(f.id=e+":"+n[s].parts.length,n[s].parts.push(f)):(f.id=e+":0",r.push(n[s]={id:s,parts:[f]}))}return r}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function s(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]'),i=null!=n;if(i&&h)return v;if(x){var s=p++;n=d||(d=o()),t=a.bind(null,n,s,!1),r=a.bind(null,n,s,!0)}else n=n||o(),t=l.bind(null,n),r=function(){n.parentNode.removeChild(n)};return i||t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function a(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function l(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document,i=r(4),f={},c=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var o=i(e,t);return n(o),function(t){for(var r=[],s=0;s<o.length;s++){var a=o[s],l=f[a.id];l.refs--,r.push(l)}t?(o=i(e,t),n(o)):o=[];for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],l=o[2],u=o[3],f={id:e+":"+i,css:a,media:l,sourceMap:u};n[s]?n[s].parts.push(f):r.push(n[s]={id:s,parts:[f]})}return r}},18:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.g-view{margin:0 auto;max-width:750px;min-width:300px}.g-view:before{height:45px}.g-view:after,.g-view:before{content:"";display:block;width:100%}.g-view:after{height:75px}.g-flexview{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;max-width:750px;min-width:300px}.g-scrollview{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;position:relative;margin-bottom:-1px}.g-scrollview:after{content:"";display:block;width:100%;height:25px}.ios .g-scrollview{margin-top:1px}.hairline .g-scrollview{margin-top:.5px}',""])},48:function(e,t,r){r(108);var n=r(1)(r(139),r(76),null,null);e.exports=n.exports},76:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"g-flexview"},[e.showNavbar?e._t("navbar",[e.title?r("yd-navbar",{attrs:{title:e.title}},[r("router-link",{attrs:{to:e.link||"/"},slot:"left"},[r("yd-navbar-back-icon")],1)],1):e._e()]):e._e(),e._v(" "),r("section",{ref:"scrollview",staticClass:"g-scrollview"},[e._t("default")],2),e._v(" "),e._t("tabbar")],2)},staticRenderFns:[]}},108:function(e,t,r){var n=r(18);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(3)("7114fcec",n,!0)},139:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-layout",props:{link:String,title:String,showNavbar:{type:Boolean,default:!0}}}}})});