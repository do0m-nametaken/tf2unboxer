/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-pointerevents-serviceworker-setclasses !*/
!function(e,n,t){function r(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?_.className.baseVal=n:_.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),C.push((r?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?u(r,t||n):r);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,a,l,u,f="modernizr",d=i("div"),c=p();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+f,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),a=t(d,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!a}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function g(e,n,r,s){function u(){d&&(delete A.style,delete A.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=v(e,r);if(!o(f,"undefined"))return f}for(var d,c,p,m,g,y=["modernizr","tspan","samp"];!A.style&&y.length;)d=!0,A.modElem=i(y.shift()),A.style=A.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],g=A.style[m],a(m,"-")&&(m=l(m)),A.style[m]!==t){if(s||o(r,"undefined"))return u(),"pfx"==n?m:!0;try{A.style[m]=r}catch(h){}if(A.style[m]!=g)return u(),"pfx"==n?m:!0}return u(),!1}function y(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?g(a,n,r,s):(a=(e+" "+E.join(i+" ")+i).split(" "),f(a,n,t))}function h(e,n,r){return y(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr,Modernizr.addTest("serviceworker","serviceWorker"in navigator);var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",E=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=E;var P=function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=i(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=i("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}();S.hasEvent=P,Modernizr.addTest("pointerevents",function(){var e=!1,n=E.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)P(E[n]+"pointerdown")&&(e=!0);return e});var T=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=T;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var A={style:z.elem.style};Modernizr._q.unshift(function(){delete A.style}),S.testAllProps=y,S.testAllProps=h,Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),s(),r(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);