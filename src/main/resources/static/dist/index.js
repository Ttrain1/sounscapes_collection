parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"lTk1":[function(require,module,exports) {
function e(e){return document.createElement(e)}module.exports={makeElement:e};
},{}],"BPM9":[function(require,module,exports) {
var e=require("./helpers"),r=e.makeElement,a=function(){var e=r("div");return e.classList.add("wrapper"),e}();module.exports={HomeWrapper:a};
},{"./helpers":"lTk1"}],"cJDT":[function(require,module,exports) {
function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}var r=function(){function n(){t(this,n)}return e(n,[{key:"render",value:function(){return"\n\t\t\t<header> \n\t\t\t\t<h1> Home</h1>\n\t\t\t\t\t<nav>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Artist, Albums, </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n\t\t\t</header>\n\t\t"}}]),n}();module.exports={Header:r};
},{}],"Focm":[function(require,module,exports) {
var e=document.querySelector("#app"),r=require("/homeWrapper"),p=r.HomeWrapper,a=require("/header"),d=a.Header,n=new d;p.innerHTML+=n.render(),e.appendChild(p);
},{"/homeWrapper":"BPM9","/header":"cJDT"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map