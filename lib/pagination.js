module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=n(1),i=(r=l)&&r.__esModule?r:{default:r};t.default=function(e){for(var t=e.totalPages,n=e.currentPage,r=e.displayRange,o=[],u=1;u<=t;u++)o.push(u);var c=(0,l.useState)(o.slice(0,r)),f=a(c,2),s=f[0],d=f[1];function p(a){"Back"===a&&n>1?(n-=1,e.onPageFlip(n)):"Next"===a&&n<t?(n+=1,e.onPageFlip(n)):"Back"!==a&&"Next"!==a&&(n=a,e.onPageFlip(n)),function(){var e,t;n>o.length-r/2?(e=o.length-r,t=e+r):n<r/2?t=(e=0)+r:n>r/2&&(t=(e=n-r/2)+r);d(o.slice(e,t))}()}return i.default.createElement("div",{className:"unselectable"},i.default.createElement("ul",{className:"ul-pagination"},i.default.createElement("li",{className:"li-first",onClick:function(){p(1)}},e.firstText?e.firstText:"<<"),i.default.createElement("li",{className:"li-back",onClick:function(){p("Back")}},e.backText?e.backText:"<"),s.map((function(e,t){return t+1<=r&&i.default.createElement("li",{className:"li-pagination "+(n===e&&"li-active"),onClick:function(){p(e)},key:e},e)})),i.default.createElement("li",{className:"li-next",onClick:function(){p("Next")}},e.nextText?e.nextText:">"),i.default.createElement("li",{className:"li-last",onClick:function(){p(e.totalPages)}},e.lastText?e.lastText:">>")))}},function(e,t){e.exports=require("react")}]);