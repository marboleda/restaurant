!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.createElement("h1"),t=document.createElement("h2"),n=document.createElement("div"),o=document.createElement("div"),r=document.getElementById("content");e.textContent="The Tropical Grill",e.setAttribute("id","restaurant-name"),t.textContent="Succulent Filipino Comfort Food",t.setAttribute("id","headline"),n.setAttribute("id","navbar");const c=document.createElement("ul"),u=document.createElement("li"),d=document.createElement("li"),i=document.createElement("li");u.textContent="Menu",u.setAttribute("id","menu-button"),d.textContent="About",d.setAttribute("id","about-button"),i.textContent="Contact",i.setAttribute("id","contact-button"),c.appendChild(u),c.appendChild(d),c.appendChild(i),n.appendChild(c),o.setAttribute("id","info"),r.appendChild(e),r.appendChild(t),r.appendChild(n),r.appendChild(o)};var r=()=>{const e=document.createElement("ul");for(let t=0;t<6;t++){const n=document.createElement("li");n.setAttribute("data-menu-item",t.toString()),e.appendChild(n)}document.getElementById("info").appendChild(e);const t=document.createElement("h3");t.textContent="Fried Fish";const n=document.createElement("img");n.setAttribute("src","./assets/images/fried-fish.jpg");const o=document.querySelector("[data-menu-item='0']");o.appendChild(t),o.appendChild(n);document.createElement("h3").textContent="Roast Pork";document.createElement("h3").textContent="Fried Rice";document.createElement("h3").textContent="Fruit Platter";document.createElement("h3").textContent="Guava Juice";document.createElement("h3").textContent="Cheesecake"},c=n(0),u=n.n(c),d=n(1),i=n.n(d);o();const l=()=>{document.getElementById("info").textContent=""};document.getElementById("menu-button").addEventListener("click",()=>{l(),r()}),document.getElementById("about-button").addEventListener("click",()=>{l(),u()()}),document.getElementById("contact-button").addEventListener("click",()=>{l(),i()()})}]);