(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+6XX":function(t,n,r){var e=r("y1pI");t.exports=function(t){return e(this.__data__,t)>-1}},"+aWK":function(t,n,r){"use strict";r.r(n);var e=r("qKvR"),o=(r("q1tI"),r("/MKj")),a=r("mwIZ"),c=r.n(a),i=r("ntF4"),u=r("8Rtz"),s=r("Igcr"),f=r("zrwo"),p=r("sLDa"),l={stats:-3},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.a.ADD:return Object(f.a)({},t,{stats:t.stats+n.payload});case p.a.MINUS:return Object(f.a)({},t,{stats:t.stats-n.payload});default:return t}},h=r("7zJJ"),b=r("ln6h"),d=r.n(b),y=r("5rFJ"),_=d.a.mark(j),x=d.a.mark(g);function j(){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(y.d)(p.a.MINUS);case 3:t=n.sent,console.log("Logged MINUS",t.payload),n.next=0;break;case 7:case"end":return n.stop()}},_)}function g(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)([Object(y.b)(j)]);case 2:case"end":return t.stop()}},x)}var O=g;r.d(n,"Page",function(){return w});var w=function(t){var n=t.numstats,r=t.minus5,o=t.add8;return Object(e.b)("main",null,Object(e.b)(i.a,{title:"Nextjs Typescript Eslint stats",themeColor:"red",hrefCanonical:"/stats",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(e.b)("span",null,"This is stats"),Object(e.b)("div",null,"Number is ".concat(n)),Object(e.b)("button",{type:"button",onClick:o},"add 8"),Object(e.b)("button",{type:"button",onClick:r},"minus 5"),Object(e.b)("br",null),Object(e.b)(u.a,{href:"/",prefetch:!1},Object(e.b)("a",null,"index")),Object(e.b)("br",null),Object(e.b)(u.a,{href:"/about",prefetch:!1},Object(e.b)("a",null,"about")))},k=Object(o.c)(function(t){return{numstats:c()(t,"stats.stats",0)}},function(t){return{add8:function(){return t(Object(h.a)(8))},minus5:function(){return t(Object(h.b)(5))}}})(w);n.default=Object(s.a)({callback:function(t){t.substitueReducers({stats:v}),t.substitueSagas({stats:O})},Child:k})},"/9aa":function(t,n,r){var e=r("NykK"),o=r("ExA7"),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&e(t)==a}},"2gN3":function(t,n,r){var e=r("Kz5y")["__core-js_shared__"];t.exports=e},"3Fdi":function(t,n){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},"44Ds":function(t,n,r){var e=r("e4Nc"),o="Expected a function";function a(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError(o);var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],a=r.cache;if(a.has(o))return a.get(o);var c=t.apply(this,e);return r.cache=a.set(o,c)||a,c};return r.cache=new(a.Cache||e),r}a.Cache=e,t.exports=a},"4kuk":function(t,n,r){var e=r("SfRM"),o=r("Hvzi"),a=r("u8Dt"),c=r("ekgI"),i=r("JSQU");function u(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}u.prototype.clear=e,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=c,u.prototype.set=i,t.exports=u},"4uTw":function(t,n,r){var e=r("Z0cm"),o=r("9ggG"),a=r("GNiM"),c=r("dt0z");t.exports=function(t,n){return e(t)?t:o(t,n)?[t]:a(c(t))}},"7zJJ":function(t,n,r){"use strict";r.d(n,"a",function(){return o}),r.d(n,"b",function(){return a});var e=r("sLDa"),o=function(t){return{type:e.a.ADD,payload:t}},a=function(t){return{type:e.a.MINUS,payload:t}}},"9Nap":function(t,n,r){var e=r("/9aa"),o=1/0;t.exports=function(t){if("string"==typeof t||e(t))return t;var n=t+"";return"0"==n&&1/t==-o?"-0":n}},"9ggG":function(t,n,r){var e=r("Z0cm"),o=r("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||c.test(t)||!a.test(t)||null!=n&&t in Object(n)}},AP2z:function(t,n,r){var e=r("nmnc"),o=Object.prototype,a=o.hasOwnProperty,c=o.toString,i=e?e.toStringTag:void 0;t.exports=function(t){var n=a.call(t,i),r=t[i];try{t[i]=void 0;var e=!0}catch(u){}var o=c.call(t);return e&&(n?t[i]=r:delete t[i]),o}},BnGh:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){var t=r("+aWK");return{page:t.default||t}}])},Cwc5:function(t,n,r){var e=r("NKxu"),o=r("Npjl");t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},E2jh:function(t,n,r){var e=r("2gN3"),o=function(){var t=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},EpBk:function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,n,r){var e=r("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=e(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,function(t,r,e,o){n.push(e?o.replace(a,"$1"):r||t)}),n});t.exports=c},GoyQ:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},H8j4:function(t,n,r){var e=r("QkVE");t.exports=function(t,n){var r=e(this,t),o=r.size;return r.set(t,n),this.size+=r.size==o?0:1,this}},Hvzi:function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},I01J:function(t,n,r){var e=r("44Ds"),o=500;t.exports=function(t){var n=e(t,function(t){return r.size===o&&r.clear(),t}),r=n.cache;return n}},Igcr:function(t,n,r){"use strict";var e=r("qKvR"),o=r("q1tI"),a=r("/MKj"),c=function(t){var n=t.store,r=t.callback,a=t.Child;return Object(o.useEffect)(function(){r(n)},[]),a?Object(e.b)(a,null):null};n.a=function(t){var n=t.callback,r=t.Child;return function(){return Object(e.b)(a.b.Consumer,null,function(t){var o=t.store;return Object(e.b)(c,{callback:n,store:o,Child:r})})}}},JHgL:function(t,n,r){var e=r("QkVE");t.exports=function(t){return e(this,t).get(t)}},JSQU:function(t,n,r){var e=r("YESw"),o="__lodash_hash_undefined__";t.exports=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=e&&void 0===n?o:n,this}},KMkd:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,n){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,n,r){var e=r("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=e||o||Function("return this")();t.exports=a},NKxu:function(t,n,r){var e=r("lSCD"),o=r("E2jh"),a=r("GoyQ"),c=r("3Fdi"),i=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,f=u.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(e(t)?l:i).test(c(t))}},Npjl:function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},NykK:function(t,n,r){var e=r("nmnc"),o=r("AP2z"),a=r("KfNM"),c="[object Null]",i="[object Undefined]",u=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:c:u&&u in Object(t)?o(t):a(t)}},QkVE:function(t,n,r){var e=r("EpBk");t.exports=function(t,n){var r=t.__data__;return e(n)?r["string"==typeof n?"string":"hash"]:r.map}},SfRM:function(t,n,r){var e=r("YESw");t.exports=function(){this.__data__=e?e(null):{},this.size=0}},WFqU:function(t,n,r){(function(n){var r="object"==typeof n&&n&&n.Object===Object&&n;t.exports=r}).call(this,r("yLpj"))},Xi7e:function(t,n,r){var e=r("KMkd"),o=r("adU4"),a=r("tMB7"),c=r("+6XX"),i=r("Z8oC");function u(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}u.prototype.clear=e,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=c,u.prototype.set=i,t.exports=u},YESw:function(t,n,r){var e=r("Cwc5")(Object,"create");t.exports=e},Z0cm:function(t,n){var r=Array.isArray;t.exports=r},Z8oC:function(t,n,r){var e=r("y1pI");t.exports=function(t,n){var r=this.__data__,o=e(r,t);return o<0?(++this.size,r.push([t,n])):r[o][1]=n,this}},ZWtO:function(t,n,r){var e=r("4uTw"),o=r("9Nap");t.exports=function(t,n){for(var r=0,a=(n=e(n,t)).length;null!=t&&r<a;)t=t[o(n[r++])];return r&&r==a?t:void 0}},adU4:function(t,n,r){var e=r("y1pI"),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,r=e(n,t);return!(r<0)&&(r==n.length-1?n.pop():o.call(n,r,1),--this.size,!0)}},dt0z:function(t,n,r){var e=r("zoYe");t.exports=function(t){return null==t?"":e(t)}},e4Nc:function(t,n,r){var e=r("fGT3"),o=r("k+1r"),a=r("JHgL"),c=r("pSRY"),i=r("H8j4");function u(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}u.prototype.clear=e,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=c,u.prototype.set=i,t.exports=u},eUgh:function(t,n){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}},ebwN:function(t,n,r){var e=r("Cwc5")(r("Kz5y"),"Map");t.exports=e},ekgI:function(t,n,r){var e=r("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return e?void 0!==n[t]:o.call(n,t)}},fGT3:function(t,n,r){var e=r("4kuk"),o=r("Xi7e"),a=r("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(a||o),string:new e}}},"k+1r":function(t,n,r){var e=r("QkVE");t.exports=function(t){var n=e(this,t).delete(t);return this.size-=n?1:0,n}},lSCD:function(t,n,r){var e=r("NykK"),o=r("GoyQ"),a="[object AsyncFunction]",c="[object Function]",i="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var n=e(t);return n==c||n==i||n==a||n==u}},ljhN:function(t,n){t.exports=function(t,n){return t===n||t!==t&&n!==n}},mwIZ:function(t,n,r){var e=r("ZWtO");t.exports=function(t,n,r){var o=null==t?void 0:e(t,n);return void 0===o?r:o}},nmnc:function(t,n,r){var e=r("Kz5y").Symbol;t.exports=e},pSRY:function(t,n,r){var e=r("QkVE");t.exports=function(t){return e(this,t).has(t)}},sLDa:function(t,n,r){"use strict";n.a={ADD:"ADD",MINUS:"MINUS"}},tMB7:function(t,n,r){var e=r("y1pI");t.exports=function(t){var n=this.__data__,r=e(n,t);return r<0?void 0:n[r][1]}},u8Dt:function(t,n,r){var e=r("YESw"),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(e){var r=n[t];return r===o?void 0:r}return a.call(n,t)?n[t]:void 0}},y1pI:function(t,n,r){var e=r("ljhN");t.exports=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1}},zoYe:function(t,n,r){var e=r("nmnc"),o=r("eUgh"),a=r("Z0cm"),c=r("/9aa"),i=1/0,u=e?e.prototype:void 0,s=u?u.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(a(n))return o(n,t)+"";if(c(n))return s?s.call(n):"";var r=n+"";return"0"==r&&1/n==-i?"-0":r}}},[["BnGh",1,0]]]);