(()=>{"use strict";var e={137:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".error__msg{color:red;text-transform:uppercase;font-size:1.4rem;visibility:hidden;transform:scaleY(0);transition:all .2s}.visible{visibility:visible;transform:scaleY(1)}.search{position:absolute;display:flex;background-color:#fff;height:30%;width:50%;margin-top:10vh;z-index:200}.input{width:30vw;height:5rem;padding:1rem;border-radius:5px;border:none}*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%}body{font-size:1.6rem;font-family:Arial,Helvetica,sans-serif}.container{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2}.imgcontainer{position:absolute;margin:0 auto;width:100%;height:100%;z-index:1}.img{width:100%;height:100%;object-fit:cover;object-position:right}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(137);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;let o="5851c332295f83af47503cb5be82ee3c",i=(document.querySelector(".location"),e=>{let t=Number(e.main.temp);return[Math.round(t-273.15),Math.round(9*(t-273.15)/5+32)]});document.querySelector(".countryInitials"),function(){let e=document.getElementById("input"),t=document.getElementById("btn"),n=document.querySelector(".error__msg");window.onload=()=>{e.focus()},t.addEventListener("click",(()=>{let t=function(e){let t=e.value;return t?t.split("").find((e=>parseInt(e)))?"City or country can't contain a number":void 0:"Input can't be empty"}(e);t?(n.classList.add("visible"),n.textContent=t):(!async function(e){try{let t=await fetch(e),n=await t.json();(e=>{let t=document.querySelector(".location"),n=document.querySelector(".countryInitials"),r=document.querySelector(".temperature");document.querySelector(".img").src=(e=>{let t=`../src/imgs/${e.weather[0].icon}.png`;return console.log(t),t})(e),r.textContent=i(e)[0],t.textContent=e.name,n.textContent=e.sys.country})(n),i(n);let r=n.coord.lat,a=n.coord.lon,c=await async function(e,t,n){let r=((e,t,n={})=>`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=${n}&appid=${o}`)(e,t,n),i=fetch(r);return(await i).json()}(r,a,"minutely,hourly");console.log(c)}catch(e){document.querySelector(".error__msg").textContent="Couldn't find your location"}}(`http://api.openweathermap.org/data/2.5/weather?q=${e.value}&APPID=${o}`),e.value="")})),e.addEventListener("keyup",(e=>{"Enter"===e.key&&t.click()})),e.addEventListener("focus",(()=>{n.classList.remove("visible")}))}()})()})();