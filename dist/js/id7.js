/*!
 * University of Warwick ID7
 */


/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*
 * Copyright 2014 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.5.6 - (c) Adobe Systems, Google. License: Apache 2.0 */
;(function(window,document,undefined){var j=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var q=this;function r(a,b){var c=a.split("."),d=q;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&void 0!==b?d[f]=b:d=d[f]?d[f]:d[f]={}}function aa(a,b,c){return a.call.apply(a.bind,arguments)}
function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return t.apply(l,arguments)}var u=Date.now||function(){return+new Date};function v(a,b){this.G=a;this.v=b||a;this.z=this.v.document}v.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.z.createTextNode(c));return a};function w(a,b,c){a=a.z.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}
function x(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),f=0;f<b.length;f+=1){for(var g=m,e=0;e<d.length;e+=1)if(b[f]===d[e]){g=j;break}g||d.push(b[f])}b=[];for(f=0;f<d.length;f+=1){g=m;for(e=0;e<c.length;e+=1)if(d[f]===c[e]){g=j;break}g||b.push(d[f])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ca(a,b){for(var c=a.className.split(/\s+/),d=0,f=c.length;d<f;d++)if(c[d]==b)return j;return m}
function y(a){var b=a.v.location.protocol;"about:"==b&&(b=a.G.location.protocol);return"https:"==b?"https:":"http:"}function da(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),d=m;c.onload=function(){d||(d=j)};c.onerror=function(){d||(d=j)};w(a,"head",c)}
function z(a,b,c,d){var f=a.z.getElementsByTagName("head")[0];if(f){var g=a.createElement("script",{src:b}),e=m;g.onload=g.onreadystatechange=function(){if(!e&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))e=j,c&&c(l),g.onload=g.onreadystatechange=l,"HEAD"==g.parentNode.tagName&&f.removeChild(g)};f.appendChild(g);window.setTimeout(function(){e||(e=j,c&&c(Error("Script load timeout")))},d||5E3);return g}return l};function A(a,b,c){this.M=a;this.U=b;this.Aa=c}r("webfont.BrowserInfo",A);A.prototype.pa=n("M");A.prototype.hasWebFontSupport=A.prototype.pa;A.prototype.qa=n("U");A.prototype.hasWebKitFallbackBug=A.prototype.qa;A.prototype.ra=n("Aa");A.prototype.hasWebKitMetricsBug=A.prototype.ra;function B(a,b,c,d){this.d=a!=l?a:l;this.o=b!=l?b:l;this.aa=c!=l?c:l;this.f=d!=l?d:l}var ea=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;B.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")};
function C(a){a=ea.exec(a);var b=l,c=l,d=l,f=l;a&&(a[1]!==l&&a[1]&&(b=parseInt(a[1],10)),a[2]!==l&&a[2]&&(c=parseInt(a[2],10)),a[3]!==l&&a[3]&&(d=parseInt(a[3],10)),a[4]!==l&&a[4]&&(f=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new B(b,c,d,f)};function D(a,b,c,d,f,g,e,h,k,p,s){this.K=a;this.Ga=b;this.za=c;this.fa=d;this.Ea=f;this.ea=g;this.wa=e;this.Fa=h;this.va=k;this.da=p;this.j=s}r("webfont.UserAgent",D);D.prototype.getName=n("K");D.prototype.getName=D.prototype.getName;D.prototype.oa=n("za");D.prototype.getVersion=D.prototype.oa;D.prototype.ka=n("fa");D.prototype.getEngine=D.prototype.ka;D.prototype.la=n("ea");D.prototype.getEngineVersion=D.prototype.la;D.prototype.ma=n("wa");D.prototype.getPlatform=D.prototype.ma;D.prototype.na=n("va");
D.prototype.getPlatformVersion=D.prototype.na;D.prototype.ja=n("da");D.prototype.getDocumentMode=D.prototype.ja;D.prototype.ia=n("j");D.prototype.getBrowserInfo=D.prototype.ia;function E(a,b){this.a=a;this.I=b}var fa=new D("Unknown",new B,"Unknown","Unknown",new B,"Unknown","Unknown",new B,"Unknown",void 0,new A(m,m,m));
E.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){a=F(this);var b=G(this),c=C(b),d=l,f=l,g=l,e=l,h=H(this.a,/Trident\/([\d\w\.]+)/,1),k=I(this.I),d=-1!=this.a.indexOf("MSIE")?H(this.a,/MSIE ([\d\w\.]+)/,1):H(this.a,/rv:([\d\w\.]+)/,1),f=C(d);""!=h?(g="Trident",e=C(h)):(g="Unknown",e=new B,h="Unknown");a=new D("MSIE",f,d,g,e,h,a,c,b,k,new A("Windows"==a&&6<=f.d||"Windows Phone"==a&&8<=c.d,m,m))}else if(-1!=this.a.indexOf("Opera"))a:if(a="Unknown",b=H(this.a,
/Presto\/([\d\w\.]+)/,1),c=C(b),d=G(this),f=C(d),g=I(this.I),c.d!==l?a="Presto":(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=H(this.a,/rv:([^\)]+)/,1),c=C(b)),-1!=this.a.indexOf("Opera Mini/"))e=H(this.a,/Opera Mini\/([\d\.]+)/,1),h=C(e),a=new D("OperaMini",h,e,a,c,b,F(this),f,d,g,new A(m,m,m));else{if(-1!=this.a.indexOf("Version/")&&(e=H(this.a,/Version\/([\d\.]+)/,1),h=C(e),h.d!==l)){a=new D("Opera",h,e,a,c,b,F(this),f,d,g,new A(10<=h.d,m,m));break a}e=H(this.a,/Opera[\/ ]([\d\.]+)/,1);h=C(e);a=
h.d!==l?new D("Opera",h,e,a,c,b,F(this),f,d,g,new A(10<=h.d,m,m)):new D("Opera",new B,"Unknown",a,c,b,F(this),f,d,g,new A(m,m,m))}else/OPR\/[\d.]+/.test(this.a)?a=ga(this):/AppleWeb(K|k)it/.test(this.a)?a=ga(this):-1!=this.a.indexOf("Gecko")?(a="Unknown",b=new B,c="Unknown",d=G(this),f=C(d),g=m,-1!=this.a.indexOf("Firefox")?(a="Firefox",c=H(this.a,/Firefox\/([\d\w\.]+)/,1),b=C(c),g=3<=b.d&&5<=b.o):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),e=H(this.a,/rv:([^\)]+)/,1),h=C(e),g||(g=1<h.d||1==h.d&&
9<h.o||1==h.d&&9==h.o&&2<=h.aa||e.match(/1\.9\.1b[123]/)!=l||e.match(/1\.9\.1\.[\d\.]+/)!=l),a=new D(a,b,c,"Gecko",h,e,F(this),f,d,I(this.I),new A(g,m,m))):a=fa;return a};function F(a){var b=H(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=H(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function G(a){var b=H(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=H(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=H(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=H(a.a,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=H(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function ga(a){var b=F(a),c=G(a),d=C(c),f=H(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),g=C(f),e="Unknown",h=new B,k="Unknown",p=m;/OPR\/[\d.]+/.test(a.a)?e="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.a)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?e="PhantomJS":-1!=a.a.indexOf("Safari")?e="Safari":-1!=a.a.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.a.indexOf("PlayStation")&&(e="BuiltinBrowser");
"BuiltinBrowser"==e?k="Unknown":"Silk"==e?k=H(a.a,/Silk\/([\d\._]+)/,1):"Chrome"==e?k=H(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?k=H(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?k=H(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?k=H(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(k=H(a.a,/PhantomJS\/([\d.]+)/,1));h=C(k);p="AdobeAIR"==e?2<h.d||2==h.d&&5<=h.o:"BlackBerry"==b?10<=d.d:"Android"==b?2<d.d||2==d.d&&1<d.o:526<=g.d||525<=g.d&&13<=g.o;return new D(e,h,k,"AppleWebKit",g,f,b,d,c,I(a.I),
new A(p,536>g.d||536==g.d&&11>g.o,"iPhone"==b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function H(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function I(a){if(a.documentMode)return a.documentMode};function ha(a){this.ua=a||"-"}ha.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ua)};function J(a,b){this.K=a;this.V=4;this.L="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.L=c[1],this.V=parseInt(c[2],10))}J.prototype.getName=n("K");function K(a){return a.L+a.V}function ia(a){var b=4,c="n",d=l;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ja(a,b,c){this.c=a;this.m=b;this.O=c;this.h="wf";this.g=new ha("-")}function L(a){var b=ca(a.m,a.g.f(a.h,"active")),c=[],d=[a.g.f(a.h,"loading")];b||c.push(a.g.f(a.h,"inactive"));x(a.m,c,d);N(a,"inactive")}function N(a,b,c){if(a.O[b])if(c)a.O[b](c.getName(),K(c));else a.O[b]()};function ka(){this.w={}};function O(a,b){this.c=a;this.C=b;this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}
function P(a,b){var c;c=[];for(var d=b.K.split(/,\s*/),f=0;f<d.length;f++){var g=d[f].replace(/['"]/g,"");-1==g.indexOf(" ")?c.push(g):c.push("'"+g+"'")}c=c.join(",");d="normal";f=b.V+"00";"o"===b.L?d="oblique":"i"===b.L&&(d="italic");a.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+f+";")}
function Q(a){w(a.c,"body",a.s)}O.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};function la(a,b,c,d,f,g,e,h){this.W=a;this.sa=b;this.c=c;this.q=d;this.C=h||"BESbswy";this.j=f;this.F={};this.T=g||5E3;this.Z=e||l;this.B=this.A=l;a=new O(this.c,this.C);Q(a);for(var k in R)R.hasOwnProperty(k)&&(P(a,new J(R[k],K(this.q))),this.F[R[k]]=a.s.offsetWidth);a.remove()}var R={Da:"serif",Ca:"sans-serif",Ba:"monospace"};
la.prototype.start=function(){this.A=new O(this.c,this.C);Q(this.A);this.B=new O(this.c,this.C);Q(this.B);this.xa=u();P(this.A,new J(this.q.getName()+",serif",K(this.q)));P(this.B,new J(this.q.getName()+",sans-serif",K(this.q)));na(this)};function oa(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.F[R[d]]&&c===a.F[R[d]])return j;return m}
function na(a){var b=a.A.s.offsetWidth,c=a.B.s.offsetWidth;b===a.F.serif&&c===a.F["sans-serif"]||a.j.U&&oa(a,b,c)?u()-a.xa>=a.T?a.j.U&&oa(a,b,c)&&(a.Z===l||a.Z.hasOwnProperty(a.q.getName()))?S(a,a.W):S(a,a.sa):setTimeout(t(function(){na(this)},a),25):S(a,a.W)}function S(a,b){a.A.remove();a.B.remove();b(a.q)};function T(a,b,c,d){this.c=b;this.t=c;this.P=0;this.ba=this.Y=m;this.T=d;this.j=a.j}function pa(a,b,c,d,f){if(0===b.length&&f)L(a.t);else{a.P+=b.length;f&&(a.Y=f);for(f=0;f<b.length;f++){var g=b[f],e=c[g.getName()],h=a.t,k=g;x(h.m,[h.g.f(h.h,k.getName(),K(k).toString(),"loading")]);N(h,"fontloading",k);(new la(t(a.ga,a),t(a.ha,a),a.c,g,a.j,a.T,d,e)).start()}}}
T.prototype.ga=function(a){var b=this.t;x(b.m,[b.g.f(b.h,a.getName(),K(a).toString(),"active")],[b.g.f(b.h,a.getName(),K(a).toString(),"loading"),b.g.f(b.h,a.getName(),K(a).toString(),"inactive")]);N(b,"fontactive",a);this.ba=j;qa(this)};T.prototype.ha=function(a){var b=this.t,c=ca(b.m,b.g.f(b.h,a.getName(),K(a).toString(),"active")),d=[],f=[b.g.f(b.h,a.getName(),K(a).toString(),"loading")];c||d.push(b.g.f(b.h,a.getName(),K(a).toString(),"inactive"));x(b.m,d,f);N(b,"fontinactive",a);qa(this)};
function qa(a){0==--a.P&&a.Y&&(a.ba?(a=a.t,x(a.m,[a.g.f(a.h,"active")],[a.g.f(a.h,"loading"),a.g.f(a.h,"inactive")]),N(a,"active")):L(a.t))};function U(a){this.G=a;this.u=new ka;this.ya=new E(a.navigator.userAgent,a.document);this.a=this.ya.parse();this.Q=this.R=0}
U.prototype.load=function(a){var b=a.context||this.G;this.c=new v(this.G,b);var b=new ja(this.c,b.document.documentElement,a),c=[],d=a.timeout;x(b.m,[b.g.f(b.h,"loading")]);N(b,"loading");var c=this.u,f=this.c,g=[],e;for(e in a)if(a.hasOwnProperty(e)){var h=c.w[e];h&&g.push(h(a[e],f))}c=g;this.Q=this.R=c.length;a=new T(this.a,this.c,b,d);e=0;for(d=c.length;e<d;e++)f=c[e],f.H(this.a,t(this.ta,this,f,b,a))};
U.prototype.ta=function(a,b,c,d){var f=this;d?a.load(function(a,b,d){var k=0==--f.R;setTimeout(function(){pa(c,a,b||{},d||l,k)},0)}):(a=0==--this.R,this.Q--,a&&0==this.Q?L(b):pa(c,[],{},l,a))};function ra(a,b,c){this.N=a?a:b+sa;this.p=[];this.S=[];this.ca=c||""}var sa="//fonts.googleapis.com/css";ra.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var a=this.p.length,b=[],c=0;c<a;c++)b.push(this.p[c].replace(/ /g,"+"));a=this.N+"?family="+b.join("%7C");0<this.S.length&&(a+="&subset="+this.S.join(","));0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca));return a};function ta(a){this.p=a;this.$=[];this.J={}}
var ua={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},va={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},wa={i:"i",italic:"i",n:"n",normal:"n"},xa=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
ta.prototype.parse=function(){for(var a=this.p.length,b=0;b<a;b++){var c=this.p[b].split(":"),d=c[0].replace(/\+/g," "),f=["n4"];if(2<=c.length){var g;var e=c[1];g=[];if(e)for(var e=e.split(","),h=e.length,k=0;k<h;k++){var p;p=e[k];if(p.match(/^[\w-]+$/)){p=xa.exec(p.toLowerCase());var s=void 0;if(p==l)s="";else{s=void 0;s=p[1];if(s==l||""==s)s="4";else var ma=va[s],s=ma?ma:isNaN(s)?"4":s.substr(0,1);s=[p[2]==l||""==p[2]?"n":wa[p[2]],s].join("")}p=s}else p="";p&&g.push(p)}0<g.length&&(f=g);3==c.length&&
(c=c[2],g=[],c=!c?g:c.split(","),0<c.length&&(c=ua[c[0]])&&(this.J[d]=c))}this.J[d]||(c=ua[d])&&(this.J[d]=c);for(c=0;c<f.length;c+=1)this.$.push(new J(d,f[c]))}};function V(a,b){this.a=(new E(navigator.userAgent,document)).parse();this.c=a;this.e=b}var ya={Arimo:j,Cousine:j,Tinos:j};V.prototype.H=function(a,b){b(a.j.M)};V.prototype.load=function(a){var b=this.c;if("MSIE"==this.a.getName()&&this.e.blocking!=j){var c=t(this.X,this,a),d=function(){b.z.body?c():setTimeout(d,0)};d()}else this.X(a)};
V.prototype.X=function(a){for(var b=this.c,c=new ra(this.e.api,y(b),this.e.text),d=this.e.families,f=d.length,g=0;g<f;g++){var e=d[g].split(":");3==e.length&&c.S.push(e.pop());var h="";2==e.length&&""!=e[1]&&(h=":");c.p.push(e.join(h))}d=new ta(d);d.parse();da(b,c.f());a(d.$,d.J,ya)};function W(a,b){this.c=a;this.e=b;this.k=[]}W.prototype.D=function(a){return y(this.c)+(this.e.api||"//f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+a+".js"};
W.prototype.H=function(a,b){var c=this.e.id,d=this.c.v,f=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,k=c.fonts.length;d<k;++d){var p=c.fonts[d];f.k.push(new J(p.name,ia("font-weight:"+p.weight+";font-style:"+p.style)))}b(a)},z(this.c,this.D(c),function(a){a&&b(m)})):b(m)};W.prototype.load=function(a){a(this.k)};function X(a,b){this.c=a;this.e=b;this.k=[]}X.prototype.D=function(a){var b=y(this.c);return(this.e.api||b+"//use.typekit.net")+"/"+a+".js"};
X.prototype.H=function(a,b){var c=this.e.id,d=this.e,f=this.c.v,g=this;c?(f.__webfonttypekitmodule__||(f.__webfonttypekitmodule__={}),f.__webfonttypekitmodule__[c]=function(c){c(a,d,function(a,c,d){for(var e=0;e<c.length;e+=1){var f=d[c[e]];if(f)for(var M=0;M<f.length;M+=1)g.k.push(new J(c[e],f[M]));else g.k.push(new J(c[e]))}b(a)})},z(this.c,this.D(c),function(a){a&&b(m)},2E3)):b(m)};X.prototype.load=function(a){a(this.k)};function Y(a,b){this.c=a;this.e=b;this.k=[]}Y.prototype.H=function(a,b){var c=this,d=c.e.projectId,f=c.e.version;if(d){var g=c.c.v;z(this.c,c.D(d,f),function(e){if(e)b(m);else{if(g["__mti_fntLst"+d]&&(e=g["__mti_fntLst"+d]()))for(var f=0;f<e.length;f++)c.k.push(new J(e[f].fontfamily));b(a.j.M)}}).id="__MonotypeAPIScript__"+d}else b(m)};Y.prototype.D=function(a,b){var c=y(this.c),d=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};
Y.prototype.load=function(a){a(this.k)};function Z(a,b){this.c=a;this.e=b}Z.prototype.load=function(a){var b,c,d=this.e.urls||[],f=this.e.families||[],g=this.e.testStrings||{};b=0;for(c=d.length;b<c;b++)da(this.c,d[b]);d=[];b=0;for(c=f.length;b<c;b++){var e=f[b].split(":");if(e[1])for(var h=e[1].split(","),k=0;k<h.length;k+=1)d.push(new J(e[0],h[k]));else d.push(new J(e[0]))}a(d,g)};Z.prototype.H=function(a,b){return b(a.j.M)};var $=new U(q);$.u.w.custom=function(a,b){return new Z(b,a)};$.u.w.fontdeck=function(a,b){return new W(b,a)};$.u.w.monotype=function(a,b){return new Y(b,a)};$.u.w.typekit=function(a,b){return new X(b,a)};$.u.w.google=function(a,b){return new V(b,a)};q.WebFont||(q.WebFont={},q.WebFont.load=t($.load,$),q.WebFontConfig&&$.load(q.WebFontConfig));})(this,document);

/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

(function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            getUniqueId: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            }(),
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            noop: function() {}
        };
    }();
    var html = function() {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion"></div>'
        };
    }();
    var css = function() {
        "use strict";
        var css = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            },
            ltr: {
                left: "0",
                right: "auto"
            },
            rtl: {
                left: "auto",
                right: " 0"
            }
        };
        if (_.isMsie()) {
            _.mixin(css.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            });
        }
        if (_.isMsie() && _.isMsie() <= 7) {
            _.mixin(css.input, {
                marginTop: "-1px"
            });
        }
        return css;
    }();
    var EventBus = function() {
        "use strict";
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o) {
            var that = this, onBlur, onFocus, onKeydown, onInput;
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            if (!_.isMsie()) {
                this.$input.on("input.tt", onInput);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    _.defer(_.bind(that._onInput, that, $e));
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._checkInputValue();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault, hintValue, inputValue;
                switch (keyName) {
                    case "tab":
                        hintValue = this.getHint();
                        inputValue = this.getInputValue();
                        preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                        break;

                    case "up":
                    case "down":
                        preventDefault = !withModifier($e);
                        break;

                    default:
                        preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                    case "tab":
                        trigger = !withModifier($e);
                        break;

                    default:
                        trigger = true;
                }
                return trigger;
            },
            _checkInputValue: function checkInputValue() {
                var inputValue, areEquivalent, hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
                this.query = inputValue;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getQuery: function getQuery() {
                return this.query;
            },
            setQuery: function setQuery(query) {
                this.query = query;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value, silent) {
                this.$input.val(value);
                silent ? this.clearHint() : this._checkInputValue();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";
        function Dataset(o) {
            o = o || {};
            o.templates = o.templates || {};
            if (!o.source) {
                $.error("missing source");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            this.query = null;
            this.highlight = !!o.highlight;
            this.name = o.name || _.getUniqueId();
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.$el = $(html.dataset.replace("%CLASS%", this.name));
        }
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return $(el).data(datasetKey);
        };
        Dataset.extractValue = function extractDatum(el) {
            return $(el).data(valueKey);
        };
        Dataset.extractDatum = function extractDatum(el) {
            return $(el).data(datumKey);
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return;
                }
                var that = this, hasSuggestions;
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                } else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                }
                this.trigger("rendered");
                function getEmptyHtml() {
                    return that.templates.empty({
                        query: query,
                        isEmpty: true
                    });
                }
                function getSuggestionsHtml() {
                    var $suggestions, nodes;
                    $suggestions = $(html.suggestions).css(css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    that.highlight && highlight({
                        className: "tt-highlight",
                        node: $suggestions[0],
                        pattern: query
                    });
                    return $suggestions;
                    function getSuggestionNode(suggestion) {
                        var $el;
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        return $el;
                    }
                }
                function getHeaderHtml() {
                    return that.templates.header({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
                function getFooterHtml() {
                    return that.templates.footer({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
            },
            getRoot: function getRoot() {
                return this.$el;
            },
            update: function update(query) {
                var that = this;
                this.query = query;
                this.canceled = false;
                this.source(query, render);
                function render(suggestions) {
                    if (!that.canceled && query === that.query) {
                        that._render(query, suggestions);
                    }
                }
            },
            cancel: function cancel() {
                this.canceled = true;
            },
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = null;
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>";
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Dropdown = function() {
        "use strict";
        function Dropdown(o) {
            var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
            o = o || {};
            if (!o.menu) {
                $.error("menu is required");
            }
            this.isOpen = false;
            this.isEmpty = true;
            this.datasets = _.map(o.datasets, initializeDataset);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {
                that.$menu.append(dataset.getRoot());
                dataset.onSync("rendered", that._onRendered, that);
            });
        }
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", $($e.currentTarget));
            },
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                this._removeCursor();
                this._setCursor($($e.currentTarget), true);
            },
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {
                this._removeCursor();
            },
            _onRendered: function onRendered() {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _hide: function() {
                this.$menu.hide();
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(".tt-suggestion");
            },
            _getCursor: function getCursor() {
                return this.$menu.find(".tt-cursor").first();
            },
            _setCursor: function setCursor($el, silent) {
                $el.first().addClass("tt-cursor");
                !silent && this.trigger("cursorMoved");
            },
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass("tt-cursor");
            },
            _moveCursor: function moveCursor(increment) {
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;
                if (!this.isOpen) {
                    return;
                }
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1;
                }
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
                this._ensureVisible($newCursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, menuScrollTop, menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed");
                }
            },
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
            },
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1);
            },
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1);
            },
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                    };
                }
                return datum;
            },
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first());
            },
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first());
            },
            update: function update(query) {
                _.each(this.datasets, updateDataset);
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty;
            },
            destroy: function destroy() {
                this.$menu.off(".tt");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Dropdown;
        function initializeDataset(oDataset) {
            return new Dataset(oDataset);
        }
    }();
    var Typeahead = function() {
        "use strict";
        var attrsKey = "ttAttrs";
        function Typeahead(o) {
            var $menu, $input, $hint;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            this.isActivated = false;
            this.autoselect = !!o.autoselect;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.$node = buildDom(o.input, o.withHint);
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-input");
            $hint = this.$node.find(".tt-hint");
            $input.on("blur.tt", function($e) {
                var active, isActive, hasActive;
                active = document.activeElement;
                isActive = $menu.is(active);
                hasActive = $menu.has(active).length > 0;
                if (_.isMsie() && (isActive || hasActive)) {
                    $e.preventDefault();
                    $e.stopImmediatePropagation();
                    _.defer(function() {
                        $input.focus();
                    });
                }
            });
            $menu.on("mousedown.tt", function($e) {
                $e.preventDefault();
            });
            this.eventBus = o.eventBus || new EventBus({
                el: $input
            });
            this.dropdown = new Dropdown({
                menu: $menu,
                datasets: o.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({
                input: $input,
                hint: $hint
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();
        }
        _.mixin(Typeahead.prototype, {
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum);
                }
            },
            _onCursorMoved: function onCursorMoved() {
                var datum = this.dropdown.getDatumForCursor();
                this.input.setInputValue(datum.value, true);
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
            },
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
            },
            _onOpened: function onOpened() {
                this._updateHint();
                this.eventBus.trigger("opened");
            },
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.eventBus.trigger("closed");
            },
            _onFocused: function onFocused() {
                this.isActivated = true;
                this.dropdown.open();
            },
            _onBlurred: function onBlurred() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close();
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum, topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                if (cursorDatum) {
                    this._select(cursorDatum);
                    $e.preventDefault();
                } else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum);
                    $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var datum;
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum);
                    $e.preventDefault();
                } else {
                    this._autocomplete(true);
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue();
            },
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();
            },
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();
            },
            _onLeftKeyed: function onLeftKeyed() {
                this.dir === "rtl" && this._autocomplete();
            },
            _onRightKeyed: function onRightKeyed() {
                this.dir === "ltr" && this._autocomplete();
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open();
            },
            _setLanguageDirection: function setLanguageDirection() {
                var dir;
                if (this.dir !== (dir = this.input.getLanguageDirection())) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir);
                }
            },
            _updateHint: function updateHint() {
                var datum, val, query, escapedQuery, frontMatchRegEx, match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(datum.value);
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();
                } else {
                    this.input.clearHint();
                }
            },
            _autocomplete: function autocomplete(laxCursor) {
                var hint, query, isCursorAtEnd, datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    datum && this.input.setInputValue(datum.value);
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
                }
            },
            _select: function select(datum) {
                this.input.setQuery(datum.value);
                this.input.setInputValue(datum.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);
                this.dropdown.close();
                _.defer(_.bind(this.dropdown.empty, this.dropdown));
            },
            open: function open() {
                this.dropdown.open();
            },
            close: function close() {
                this.dropdown.close();
            },
            setVal: function setVal(val) {
                val = _.toStr(val);
                if (this.isActivated) {
                    this.input.setInputValue(val);
                } else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true);
                }
                this._setLanguageDirection();
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            }
        });
        return Typeahead;
        function buildDom(input, withHint) {
            var $input, $wrapper, $dropdown, $hint;
            $input = $(input);
            $wrapper = $(html.wrapper).css(css.wrapper);
            $dropdown = $(html.dropdown).css(css.dropdown);
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", true).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
            $input.data(attrsKey, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(withHint ? css.input : css.inputWithNoHint);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-input");
            _.each($input.data(attrsKey), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        "use strict";
        var old, typeaheadKey, methods;
        old = $.fn.typeahead;
        typeaheadKey = "ttTypeahead";
        methods = {
            initialize: function initialize(o, datasets) {
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                return this.each(attach);
                function attach() {
                    var $input = $(this), eventBus, typeahead;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    typeahead = new Typeahead({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,
                        minLength: o.minLength,
                        autoselect: o.autoselect,
                        datasets: datasets
                    });
                    $input.data(typeaheadKey, typeahead);
                }
            },
            open: function open() {
                return this.each(openTypeahead);
                function openTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.open();
                    }
                }
            },
            close: function close() {
                return this.each(closeTypeahead);
                function closeTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.close();
                    }
                }
            },
            val: function val(newVal) {
                return !arguments.length ? getVal(this.first()) : this.each(setVal);
                function setVal() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.setVal(newVal);
                    }
                }
                function getVal($input) {
                    var typeahead, query;
                    if (typeahead = $input.data(typeaheadKey)) {
                        query = typeahead.getVal();
                    }
                    return query;
                }
            },
            destroy: function destroy() {
                return this.each(unattach);
                function unattach() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.destroy();
                        $input.removeData(typeaheadKey);
                    }
                }
            }
        };
        $.fn.typeahead = function(method) {
            var tts;
            if (methods[method] && method !== "initialize") {
                tts = this.filter(function() {
                    return !!$(this).data(typeaheadKey);
                });
                return methods[method].apply(tts, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
    })();
})(window.jQuery);
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern -o ./dist/lodash.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
;(function() {

    /** Used as a safe reference for `undefined` in pre ES5 environments */
    var undefined;

    /** Used to pool arrays and objects used internally */
    var arrayPool = [],
        objectPool = [];

    /** Used to generate unique IDs */
    var idCounter = 0;

    /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
    var keyPrefix = +new Date + '';

    /** Used as the size when optimizations are enabled for large arrays */
    var largeArraySize = 75;

    /** Used as the max size of the `arrayPool` and `objectPool` */
    var maxPoolSize = 40;

    /** Used to detect and test whitespace */
    var whitespace = (
        // whitespace
    ' \t\x0B\f\xA0\ufeff' +

        // line terminators
    '\n\r\u2028\u2029' +

        // unicode category "Zs" space separators
    '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
    );

    /** Used to match empty string literals in compiled template source */
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

    /**
     * Used to match ES6 template delimiters
     * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals
     */
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

    /** Used to match regexp flags from their coerced string values */
    var reFlags = /\w*$/;

    /** Used to detected named functions */
    var reFuncName = /^\s*function[ \n\r\t]+\w/;

    /** Used to match "interpolate" template delimiters */
    var reInterpolate = /<%=([\s\S]+?)%>/g;

    /** Used to match leading whitespace and zeros to be removed */
    var reLeadingSpacesAndZeros = RegExp('^[' + whitespace + ']*0+(?=.$)');

    /** Used to ensure capturing order of template delimiters */
    var reNoMatch = /($^)/;

    /** Used to detect functions containing a `this` reference */
    var reThis = /\bthis\b/;

    /** Used to match unescaped characters in compiled string literals */
    var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

    /** Used to assign default `context` object properties */
    var contextProps = [
        'Array', 'Boolean', 'Date', 'Function', 'Math', 'Number', 'Object',
        'RegExp', 'String', '_', 'attachEvent', 'clearTimeout', 'isFinite', 'isNaN',
        'parseInt', 'setTimeout'
    ];

    /** Used to make template sourceURLs easier to identify */
    var templateCounter = 0;

    /** `Object#toString` result shortcuts */
    var argsClass = '[object Arguments]',
        arrayClass = '[object Array]',
        boolClass = '[object Boolean]',
        dateClass = '[object Date]',
        funcClass = '[object Function]',
        numberClass = '[object Number]',
        objectClass = '[object Object]',
        regexpClass = '[object RegExp]',
        stringClass = '[object String]';

    /** Used to identify object classifications that `_.clone` supports */
    var cloneableClasses = {};
    cloneableClasses[funcClass] = false;
    cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
        cloneableClasses[boolClass] = cloneableClasses[dateClass] =
            cloneableClasses[numberClass] = cloneableClasses[objectClass] =
                cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

    /** Used as an internal `_.debounce` options object */
    var debounceOptions = {
        'leading': false,
        'maxWait': 0,
        'trailing': false
    };

    /** Used as the property descriptor for `__bindData__` */
    var descriptor = {
        'configurable': false,
        'enumerable': false,
        'value': null,
        'writable': false
    };

    /** Used to determine if values are of the language type Object */
    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };

    /** Used to escape characters for inclusion in compiled string literals */
    var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\t': 't',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    /** Used as a reference to the global object */
    var root = (objectTypes[typeof window] && window) || this;

    /** Detect free variable `exports` */
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

    /** Detect free variable `module` */
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports` */
    var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

    /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
    var freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        root = freeGlobal;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * The base implementation of `_.indexOf` without support for binary searches
     * or `fromIndex` constraints.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value or `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
        var index = (fromIndex || 0) - 1,
            length = array ? array.length : 0;

        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }

    /**
     * An implementation of `_.contains` for cache objects that mimics the return
     * signature of `_.indexOf` by returning `0` if the value is found, else `-1`.
     *
     * @private
     * @param {Object} cache The cache object to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns `0` if `value` is found, else `-1`.
     */
    function cacheIndexOf(cache, value) {
        var type = typeof value;
        cache = cache.cache;

        if (type == 'boolean' || value == null) {
            return cache[value] ? 0 : -1;
        }
        if (type != 'number' && type != 'string') {
            type = 'object';
        }
        var key = type == 'number' ? value : keyPrefix + value;
        cache = (cache = cache[type]) && cache[key];

        return type == 'object'
            ? (cache && baseIndexOf(cache, value) > -1 ? 0 : -1)
            : (cache ? 0 : -1);
    }

    /**
     * Adds a given value to the corresponding cache object.
     *
     * @private
     * @param {*} value The value to add to the cache.
     */
    function cachePush(value) {
        var cache = this.cache,
            type = typeof value;

        if (type == 'boolean' || value == null) {
            cache[value] = true;
        } else {
            if (type != 'number' && type != 'string') {
                type = 'object';
            }
            var key = type == 'number' ? value : keyPrefix + value,
                typeCache = cache[type] || (cache[type] = {});

            if (type == 'object') {
                (typeCache[key] || (typeCache[key] = [])).push(value);
            } else {
                typeCache[key] = true;
            }
        }
    }

    /**
     * Used by `_.max` and `_.min` as the default callback when a given
     * collection is a string value.
     *
     * @private
     * @param {string} value The character to inspect.
     * @returns {number} Returns the code unit of given character.
     */
    function charAtCallback(value) {
        return value.charCodeAt(0);
    }

    /**
     * Used by `sortBy` to compare transformed `collection` elements, stable sorting
     * them in ascending order.
     *
     * @private
     * @param {Object} a The object to compare to `b`.
     * @param {Object} b The object to compare to `a`.
     * @returns {number} Returns the sort order indicator of `1` or `-1`.
     */
    function compareAscending(a, b) {
        var ac = a.criteria,
            bc = b.criteria,
            index = -1,
            length = ac.length;

        while (++index < length) {
            var value = ac[index],
                other = bc[index];

            if (value !== other) {
                if (value > other || typeof value == 'undefined') {
                    return 1;
                }
                if (value < other || typeof other == 'undefined') {
                    return -1;
                }
            }
        }
        // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
        // that causes it, under certain circumstances, to return the same value for
        // `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
        //
        // This also ensures a stable sort in V8 and other engines.
        // See http://code.google.com/p/v8/issues/detail?id=90
        return a.index - b.index;
    }

    /**
     * Creates a cache object to optimize linear searches of large arrays.
     *
     * @private
     * @param {Array} [array=[]] The array to search.
     * @returns {null|Object} Returns the cache object or `null` if caching should not be used.
     */
    function createCache(array) {
        var index = -1,
            length = array.length,
            first = array[0],
            mid = array[(length / 2) | 0],
            last = array[length - 1];

        if (first && typeof first == 'object' &&
            mid && typeof mid == 'object' && last && typeof last == 'object') {
            return false;
        }
        var cache = getObject();
        cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;

        var result = getObject();
        result.array = array;
        result.cache = cache;
        result.push = cachePush;

        while (++index < length) {
            result.push(array[index]);
        }
        return result;
    }

    /**
     * Used by `template` to escape characters for inclusion in compiled
     * string literals.
     *
     * @private
     * @param {string} match The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeStringChar(match) {
        return '\\' + stringEscapes[match];
    }

    /**
     * Gets an array from the array pool or creates a new one if the pool is empty.
     *
     * @private
     * @returns {Array} The array from the pool.
     */
    function getArray() {
        return arrayPool.pop() || [];
    }

    /**
     * Gets an object from the object pool or creates a new one if the pool is empty.
     *
     * @private
     * @returns {Object} The object from the pool.
     */
    function getObject() {
        return objectPool.pop() || {
                'array': null,
                'cache': null,
                'criteria': null,
                'false': false,
                'index': 0,
                'null': false,
                'number': null,
                'object': null,
                'push': null,
                'string': null,
                'true': false,
                'undefined': false,
                'value': null
            };
    }

    /**
     * Releases the given array back to the array pool.
     *
     * @private
     * @param {Array} [array] The array to release.
     */
    function releaseArray(array) {
        array.length = 0;
        if (arrayPool.length < maxPoolSize) {
            arrayPool.push(array);
        }
    }

    /**
     * Releases the given object back to the object pool.
     *
     * @private
     * @param {Object} [object] The object to release.
     */
    function releaseObject(object) {
        var cache = object.cache;
        if (cache) {
            releaseObject(cache);
        }
        object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
        if (objectPool.length < maxPoolSize) {
            objectPool.push(object);
        }
    }

    /**
     * Slices the `collection` from the `start` index up to, but not including,
     * the `end` index.
     *
     * Note: This function is used instead of `Array#slice` to support node lists
     * in IE < 9 and to ensure dense arrays are returned.
     *
     * @private
     * @param {Array|Object|string} collection The collection to slice.
     * @param {number} start The start index.
     * @param {number} end The end index.
     * @returns {Array} Returns the new array.
     */
    function slice(array, start, end) {
        start || (start = 0);
        if (typeof end == 'undefined') {
            end = array ? array.length : 0;
        }
        var index = -1,
            length = end - start || 0,
            result = Array(length < 0 ? 0 : length);

        while (++index < length) {
            result[index] = array[start + index];
        }
        return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Create a new `lodash` function using the given context object.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Object} [context=root] The context object.
     * @returns {Function} Returns the `lodash` function.
     */
    function runInContext(context) {
        // Avoid issues with some ES3 environments that attempt to use values, named
        // after built-in constructors like `Object`, for the creation of literals.
        // ES5 clears this up by stating that literals must use built-in constructors.
        // See http://es5.github.io/#x11.1.5.
        context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

        /** Native constructor references */
        var Array = context.Array,
            Boolean = context.Boolean,
            Date = context.Date,
            Function = context.Function,
            Math = context.Math,
            Number = context.Number,
            Object = context.Object,
            RegExp = context.RegExp,
            String = context.String,
            TypeError = context.TypeError;

        /**
         * Used for `Array` method references.
         *
         * Normally `Array.prototype` would suffice, however, using an array literal
         * avoids issues in Narwhal.
         */
        var arrayRef = [];

        /** Used for native method references */
        var objectProto = Object.prototype;

        /** Used to restore the original `_` reference in `noConflict` */
        var oldDash = context._;

        /** Used to resolve the internal [[Class]] of values */
        var toString = objectProto.toString;

        /** Used to detect if a method is native */
        var reNative = RegExp('^' +
            String(toString)
                .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                .replace(/toString| for [^\]]+/g, '.*?') + '$'
        );

        /** Native method shortcuts */
        var ceil = Math.ceil,
            clearTimeout = context.clearTimeout,
            floor = Math.floor,
            fnToString = Function.prototype.toString,
            getPrototypeOf = isNative(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
            hasOwnProperty = objectProto.hasOwnProperty,
            push = arrayRef.push,
            setTimeout = context.setTimeout,
            splice = arrayRef.splice,
            unshift = arrayRef.unshift;

        /** Used to set meta data on functions */
        var defineProperty = (function() {
            // IE 8 only accepts DOM elements
            try {
                var o = {},
                    func = isNative(func = Object.defineProperty) && func,
                    result = func(o, o, o) && func;
            } catch(e) { }
            return result;
        }());

        /* Native method shortcuts for methods with the same name as other `lodash` methods */
        var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
            nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
            nativeIsFinite = context.isFinite,
            nativeIsNaN = context.isNaN,
            nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random;

        /** Used to lookup a built-in constructor by [[Class]] */
        var ctorByClass = {};
        ctorByClass[arrayClass] = Array;
        ctorByClass[boolClass] = Boolean;
        ctorByClass[dateClass] = Date;
        ctorByClass[funcClass] = Function;
        ctorByClass[objectClass] = Object;
        ctorByClass[numberClass] = Number;
        ctorByClass[regexpClass] = RegExp;
        ctorByClass[stringClass] = String;

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a `lodash` object which wraps the given value to enable intuitive
         * method chaining.
         *
         * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
         * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
         * and `unshift`
         *
         * Chaining is supported in custom builds as long as the `value` method is
         * implicitly or explicitly included in the build.
         *
         * The chainable wrapper functions are:
         * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
         * `compose`, `concat`, `countBy`, `create`, `createCallback`, `curry`,
         * `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`, `flatten`,
         * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
         * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
         * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
         * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `pull`, `push`,
         * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
         * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
         * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
         * and `zip`
         *
         * The non-chainable wrapper functions are:
         * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `findIndex`,
         * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`, `identity`,
         * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
         * `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`,
         * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
         * `lastIndexOf`, `mixin`, `noConflict`, `parseInt`, `pop`, `random`, `reduce`,
         * `reduceRight`, `result`, `shift`, `size`, `some`, `sortedIndex`, `runInContext`,
         * `template`, `unescape`, `uniqueId`, and `value`
         *
         * The wrapper functions `first` and `last` return wrapped values when `n` is
         * provided, otherwise they return unwrapped values.
         *
         * Explicit chaining can be enabled by using the `_.chain` method.
         *
         * @name _
         * @constructor
         * @category Chaining
         * @param {*} value The value to wrap in a `lodash` instance.
         * @returns {Object} Returns a `lodash` instance.
         * @example
         *
         * var wrapped = _([1, 2, 3]);
         *
         * // returns an unwrapped value
         * wrapped.reduce(function(sum, num) {
     *   return sum + num;
     * });
         * // => 6
         *
         * // returns a wrapped value
         * var squares = wrapped.map(function(num) {
     *   return num * num;
     * });
         *
         * _.isArray(squares);
         * // => false
         *
         * _.isArray(squares.value());
         * // => true
         */
        function lodash(value) {
            // don't wrap if already wrapped, even if wrapped by a different `lodash` constructor
            return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
                ? value
                : new lodashWrapper(value);
        }

        /**
         * A fast path for creating `lodash` wrapper objects.
         *
         * @private
         * @param {*} value The value to wrap in a `lodash` instance.
         * @param {boolean} chainAll A flag to enable chaining for all methods
         * @returns {Object} Returns a `lodash` instance.
         */
        function lodashWrapper(value, chainAll) {
            this.__chain__ = !!chainAll;
            this.__wrapped__ = value;
        }
        // ensure `new lodashWrapper` is an instance of `lodash`
        lodashWrapper.prototype = lodash.prototype;

        /**
         * An object used to flag environments features.
         *
         * @static
         * @memberOf _
         * @type Object
         */
        var support = lodash.support = {};

        /**
         * Detect if functions can be decompiled by `Function#toString`
         * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
         *
         * @memberOf _.support
         * @type boolean
         */
        support.funcDecomp = !isNative(context.WinRTError) && reThis.test(runInContext);

        /**
         * Detect if `Function#name` is supported (all but IE).
         *
         * @memberOf _.support
         * @type boolean
         */
        support.funcNames = typeof Function.name == 'string';

        /**
         * By default, the template delimiters used by Lo-Dash are similar to those in
         * embedded Ruby (ERB). Change the following template settings to use alternative
         * delimiters.
         *
         * @static
         * @memberOf _
         * @type Object
         */
        lodash.templateSettings = {

            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'escape': /<%-([\s\S]+?)%>/g,

            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'evaluate': /<%([\s\S]+?)%>/g,

            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'interpolate': reInterpolate,

            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type string
             */
            'variable': '',

            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type Object
             */
            'imports': {

                /**
                 * A reference to the `lodash` function.
                 *
                 * @memberOf _.templateSettings.imports
                 * @type Function
                 */
                '_': lodash
            }
        };

        /*--------------------------------------------------------------------------*/

        /**
         * The base implementation of `_.bind` that creates the bound function and
         * sets its meta data.
         *
         * @private
         * @param {Array} bindData The bind data array.
         * @returns {Function} Returns the new bound function.
         */
        function baseBind(bindData) {
            var func = bindData[0],
                partialArgs = bindData[2],
                thisArg = bindData[4];

            function bound() {
                // `Function#bind` spec
                // http://es5.github.io/#x15.3.4.5
                if (partialArgs) {
                    // avoid `arguments` object deoptimizations by using `slice` instead
                    // of `Array.prototype.slice.call` and not assigning `arguments` to a
                    // variable as a ternary expression
                    var args = slice(partialArgs);
                    push.apply(args, arguments);
                }
                // mimic the constructor's `return` behavior
                // http://es5.github.io/#x13.2.2
                if (this instanceof bound) {
                    // ensure `new bound` is an instance of `func`
                    var thisBinding = baseCreate(func.prototype),
                        result = func.apply(thisBinding, args || arguments);
                    return isObject(result) ? result : thisBinding;
                }
                return func.apply(thisArg, args || arguments);
            }
            setBindData(bound, bindData);
            return bound;
        }

        /**
         * The base implementation of `_.clone` without argument juggling or support
         * for `thisArg` binding.
         *
         * @private
         * @param {*} value The value to clone.
         * @param {boolean} [isDeep=false] Specify a deep clone.
         * @param {Function} [callback] The function to customize cloning values.
         * @param {Array} [stackA=[]] Tracks traversed source objects.
         * @param {Array} [stackB=[]] Associates clones with source counterparts.
         * @returns {*} Returns the cloned value.
         */
        function baseClone(value, isDeep, callback, stackA, stackB) {
            if (callback) {
                var result = callback(value);
                if (typeof result != 'undefined') {
                    return result;
                }
            }
            // inspect [[Class]]
            var isObj = isObject(value);
            if (isObj) {
                var className = toString.call(value);
                if (!cloneableClasses[className]) {
                    return value;
                }
                var ctor = ctorByClass[className];
                switch (className) {
                    case boolClass:
                    case dateClass:
                        return new ctor(+value);

                    case numberClass:
                    case stringClass:
                        return new ctor(value);

                    case regexpClass:
                        result = ctor(value.source, reFlags.exec(value));
                        result.lastIndex = value.lastIndex;
                        return result;
                }
            } else {
                return value;
            }
            var isArr = isArray(value);
            if (isDeep) {
                // check for circular references and return corresponding clone
                var initedStack = !stackA;
                stackA || (stackA = getArray());
                stackB || (stackB = getArray());

                var length = stackA.length;
                while (length--) {
                    if (stackA[length] == value) {
                        return stackB[length];
                    }
                }
                result = isArr ? ctor(value.length) : {};
            }
            else {
                result = isArr ? slice(value) : assign({}, value);
            }
            // add array properties assigned by `RegExp#exec`
            if (isArr) {
                if (hasOwnProperty.call(value, 'index')) {
                    result.index = value.index;
                }
                if (hasOwnProperty.call(value, 'input')) {
                    result.input = value.input;
                }
            }
            // exit for shallow clone
            if (!isDeep) {
                return result;
            }
            // add the source value to the stack of traversed objects
            // and associate it with its clone
            stackA.push(value);
            stackB.push(result);

            // recursively populate clone (susceptible to call stack limits)
            (isArr ? forEach : forOwn)(value, function(objValue, key) {
                result[key] = baseClone(objValue, isDeep, callback, stackA, stackB);
            });

            if (initedStack) {
                releaseArray(stackA);
                releaseArray(stackB);
            }
            return result;
        }

        /**
         * The base implementation of `_.create` without support for assigning
         * properties to the created object.
         *
         * @private
         * @param {Object} prototype The object to inherit from.
         * @returns {Object} Returns the new object.
         */
        function baseCreate(prototype, properties) {
            return isObject(prototype) ? nativeCreate(prototype) : {};
        }
        // fallback for browsers without `Object.create`
        if (!nativeCreate) {
            baseCreate = (function() {
                function Object() {}
                return function(prototype) {
                    if (isObject(prototype)) {
                        Object.prototype = prototype;
                        var result = new Object;
                        Object.prototype = null;
                    }
                    return result || context.Object();
                };
            }());
        }

        /**
         * The base implementation of `_.createCallback` without support for creating
         * "_.pluck" or "_.where" style callbacks.
         *
         * @private
         * @param {*} [func=identity] The value to convert to a callback.
         * @param {*} [thisArg] The `this` binding of the created callback.
         * @param {number} [argCount] The number of arguments the callback accepts.
         * @returns {Function} Returns a callback function.
         */
        function baseCreateCallback(func, thisArg, argCount) {
            if (typeof func != 'function') {
                return identity;
            }
            // exit early for no `thisArg` or already bound by `Function#bind`
            if (typeof thisArg == 'undefined' || !('prototype' in func)) {
                return func;
            }
            var bindData = func.__bindData__;
            if (typeof bindData == 'undefined') {
                if (support.funcNames) {
                    bindData = !func.name;
                }
                bindData = bindData || !support.funcDecomp;
                if (!bindData) {
                    var source = fnToString.call(func);
                    if (!support.funcNames) {
                        bindData = !reFuncName.test(source);
                    }
                    if (!bindData) {
                        // checks if `func` references the `this` keyword and stores the result
                        bindData = reThis.test(source);
                        setBindData(func, bindData);
                    }
                }
            }
            // exit early if there are no `this` references or `func` is bound
            if (bindData === false || (bindData !== true && bindData[1] & 1)) {
                return func;
            }
            switch (argCount) {
                case 1: return function(value) {
                    return func.call(thisArg, value);
                };
                case 2: return function(a, b) {
                    return func.call(thisArg, a, b);
                };
                case 3: return function(value, index, collection) {
                    return func.call(thisArg, value, index, collection);
                };
                case 4: return function(accumulator, value, index, collection) {
                    return func.call(thisArg, accumulator, value, index, collection);
                };
            }
            return bind(func, thisArg);
        }

        /**
         * The base implementation of `createWrapper` that creates the wrapper and
         * sets its meta data.
         *
         * @private
         * @param {Array} bindData The bind data array.
         * @returns {Function} Returns the new function.
         */
        function baseCreateWrapper(bindData) {
            var func = bindData[0],
                bitmask = bindData[1],
                partialArgs = bindData[2],
                partialRightArgs = bindData[3],
                thisArg = bindData[4],
                arity = bindData[5];

            var isBind = bitmask & 1,
                isBindKey = bitmask & 2,
                isCurry = bitmask & 4,
                isCurryBound = bitmask & 8,
                key = func;

            function bound() {
                var thisBinding = isBind ? thisArg : this;
                if (partialArgs) {
                    var args = slice(partialArgs);
                    push.apply(args, arguments);
                }
                if (partialRightArgs || isCurry) {
                    args || (args = slice(arguments));
                    if (partialRightArgs) {
                        push.apply(args, partialRightArgs);
                    }
                    if (isCurry && args.length < arity) {
                        bitmask |= 16 & ~32;
                        return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
                    }
                }
                args || (args = arguments);
                if (isBindKey) {
                    func = thisBinding[key];
                }
                if (this instanceof bound) {
                    thisBinding = baseCreate(func.prototype);
                    var result = func.apply(thisBinding, args);
                    return isObject(result) ? result : thisBinding;
                }
                return func.apply(thisBinding, args);
            }
            setBindData(bound, bindData);
            return bound;
        }

        /**
         * The base implementation of `_.difference` that accepts a single array
         * of values to exclude.
         *
         * @private
         * @param {Array} array The array to process.
         * @param {Array} [values] The array of values to exclude.
         * @returns {Array} Returns a new array of filtered values.
         */
        function baseDifference(array, values) {
            var index = -1,
                indexOf = getIndexOf(),
                length = array ? array.length : 0,
                isLarge = length >= largeArraySize && indexOf === baseIndexOf,
                result = [];

            if (isLarge) {
                var cache = createCache(values);
                if (cache) {
                    indexOf = cacheIndexOf;
                    values = cache;
                } else {
                    isLarge = false;
                }
            }
            while (++index < length) {
                var value = array[index];
                if (indexOf(values, value) < 0) {
                    result.push(value);
                }
            }
            if (isLarge) {
                releaseObject(values);
            }
            return result;
        }

        /**
         * The base implementation of `_.flatten` without support for callback
         * shorthands or `thisArg` binding.
         *
         * @private
         * @param {Array} array The array to flatten.
         * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
         * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
         * @param {number} [fromIndex=0] The index to start from.
         * @returns {Array} Returns a new flattened array.
         */
        function baseFlatten(array, isShallow, isStrict, fromIndex) {
            var index = (fromIndex || 0) - 1,
                length = array ? array.length : 0,
                result = [];

            while (++index < length) {
                var value = array[index];

                if (value && typeof value == 'object' && typeof value.length == 'number'
                    && (isArray(value) || isArguments(value))) {
                    // recursively flatten arrays (susceptible to call stack limits)
                    if (!isShallow) {
                        value = baseFlatten(value, isShallow, isStrict);
                    }
                    var valIndex = -1,
                        valLength = value.length,
                        resIndex = result.length;

                    result.length += valLength;
                    while (++valIndex < valLength) {
                        result[resIndex++] = value[valIndex];
                    }
                } else if (!isStrict) {
                    result.push(value);
                }
            }
            return result;
        }

        /**
         * The base implementation of `_.isEqual`, without support for `thisArg` binding,
         * that allows partial "_.where" style comparisons.
         *
         * @private
         * @param {*} a The value to compare.
         * @param {*} b The other value to compare.
         * @param {Function} [callback] The function to customize comparing values.
         * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
         * @param {Array} [stackA=[]] Tracks traversed `a` objects.
         * @param {Array} [stackB=[]] Tracks traversed `b` objects.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         */
        function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
            // used to indicate that when comparing objects, `a` has at least the properties of `b`
            if (callback) {
                var result = callback(a, b);
                if (typeof result != 'undefined') {
                    return !!result;
                }
            }
            // exit early for identical values
            if (a === b) {
                // treat `+0` vs. `-0` as not equal
                return a !== 0 || (1 / a == 1 / b);
            }
            var type = typeof a,
                otherType = typeof b;

            // exit early for unlike primitive values
            if (a === a &&
                !(a && objectTypes[type]) &&
                !(b && objectTypes[otherType])) {
                return false;
            }
            // exit early for `null` and `undefined` avoiding ES3's Function#call behavior
            // http://es5.github.io/#x15.3.4.4
            if (a == null || b == null) {
                return a === b;
            }
            // compare [[Class]] names
            var className = toString.call(a),
                otherClass = toString.call(b);

            if (className == argsClass) {
                className = objectClass;
            }
            if (otherClass == argsClass) {
                otherClass = objectClass;
            }
            if (className != otherClass) {
                return false;
            }
            switch (className) {
                case boolClass:
                case dateClass:
                    // coerce dates and booleans to numbers, dates to milliseconds and booleans
                    // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
                    return +a == +b;

                case numberClass:
                    // treat `NaN` vs. `NaN` as equal
                    return (a != +a)
                        ? b != +b
                        // but treat `+0` vs. `-0` as not equal
                        : (a == 0 ? (1 / a == 1 / b) : a == +b);

                case regexpClass:
                case stringClass:
                    // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
                    // treat string primitives and their corresponding object instances as equal
                    return a == String(b);
            }
            var isArr = className == arrayClass;
            if (!isArr) {
                // unwrap any `lodash` wrapped values
                var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
                    bWrapped = hasOwnProperty.call(b, '__wrapped__');

                if (aWrapped || bWrapped) {
                    return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
                }
                // exit for functions and DOM nodes
                if (className != objectClass) {
                    return false;
                }
                // in older versions of Opera, `arguments` objects have `Array` constructors
                var ctorA = a.constructor,
                    ctorB = b.constructor;

                // non `Object` object instances with different constructors are not equal
                if (ctorA != ctorB &&
                    !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
                    ('constructor' in a && 'constructor' in b)
                ) {
                    return false;
                }
            }
            // assume cyclic structures are equal
            // the algorithm for detecting cyclic structures is adapted from ES 5.1
            // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
            var initedStack = !stackA;
            stackA || (stackA = getArray());
            stackB || (stackB = getArray());

            var length = stackA.length;
            while (length--) {
                if (stackA[length] == a) {
                    return stackB[length] == b;
                }
            }
            var size = 0;
            result = true;

            // add `a` and `b` to the stack of traversed objects
            stackA.push(a);
            stackB.push(b);

            // recursively compare objects and arrays (susceptible to call stack limits)
            if (isArr) {
                // compare lengths to determine if a deep comparison is necessary
                length = a.length;
                size = b.length;
                result = size == length;

                if (result || isWhere) {
                    // deep compare the contents, ignoring non-numeric properties
                    while (size--) {
                        var index = length,
                            value = b[size];

                        if (isWhere) {
                            while (index--) {
                                if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
                                    break;
                                }
                            }
                        } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
                            break;
                        }
                    }
                }
            }
            else {
                // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
                // which, in this case, is more costly
                forIn(b, function(value, key, b) {
                    if (hasOwnProperty.call(b, key)) {
                        // count the number of properties.
                        size++;
                        // deep compare each property value.
                        return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
                    }
                });

                if (result && !isWhere) {
                    // ensure both objects have the same number of properties
                    forIn(a, function(value, key, a) {
                        if (hasOwnProperty.call(a, key)) {
                            // `size` will be `-1` if `a` has more properties than `b`
                            return (result = --size > -1);
                        }
                    });
                }
            }
            stackA.pop();
            stackB.pop();

            if (initedStack) {
                releaseArray(stackA);
                releaseArray(stackB);
            }
            return result;
        }

        /**
         * The base implementation of `_.merge` without argument juggling or support
         * for `thisArg` binding.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {Function} [callback] The function to customize merging properties.
         * @param {Array} [stackA=[]] Tracks traversed source objects.
         * @param {Array} [stackB=[]] Associates values with source counterparts.
         */
        function baseMerge(object, source, callback, stackA, stackB) {
            (isArray(source) ? forEach : forOwn)(source, function(source, key) {
                var found,
                    isArr,
                    result = source,
                    value = object[key];

                if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
                    // avoid merging previously merged cyclic sources
                    var stackLength = stackA.length;
                    while (stackLength--) {
                        if ((found = stackA[stackLength] == source)) {
                            value = stackB[stackLength];
                            break;
                        }
                    }
                    if (!found) {
                        var isShallow;
                        if (callback) {
                            result = callback(value, source);
                            if ((isShallow = typeof result != 'undefined')) {
                                value = result;
                            }
                        }
                        if (!isShallow) {
                            value = isArr
                                ? (isArray(value) ? value : [])
                                : (isPlainObject(value) ? value : {});
                        }
                        // add `source` and associated `value` to the stack of traversed objects
                        stackA.push(source);
                        stackB.push(value);

                        // recursively merge objects and arrays (susceptible to call stack limits)
                        if (!isShallow) {
                            baseMerge(value, source, callback, stackA, stackB);
                        }
                    }
                }
                else {
                    if (callback) {
                        result = callback(value, source);
                        if (typeof result == 'undefined') {
                            result = source;
                        }
                    }
                    if (typeof result != 'undefined') {
                        value = result;
                    }
                }
                object[key] = value;
            });
        }

        /**
         * The base implementation of `_.random` without argument juggling or support
         * for returning floating-point numbers.
         *
         * @private
         * @param {number} min The minimum possible value.
         * @param {number} max The maximum possible value.
         * @returns {number} Returns a random number.
         */
        function baseRandom(min, max) {
            return min + floor(nativeRandom() * (max - min + 1));
        }

        /**
         * The base implementation of `_.uniq` without support for callback shorthands
         * or `thisArg` binding.
         *
         * @private
         * @param {Array} array The array to process.
         * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
         * @param {Function} [callback] The function called per iteration.
         * @returns {Array} Returns a duplicate-value-free array.
         */
        function baseUniq(array, isSorted, callback) {
            var index = -1,
                indexOf = getIndexOf(),
                length = array ? array.length : 0,
                result = [];

            var isLarge = !isSorted && length >= largeArraySize && indexOf === baseIndexOf,
                seen = (callback || isLarge) ? getArray() : result;

            if (isLarge) {
                var cache = createCache(seen);
                indexOf = cacheIndexOf;
                seen = cache;
            }
            while (++index < length) {
                var value = array[index],
                    computed = callback ? callback(value, index, array) : value;

                if (isSorted
                        ? !index || seen[seen.length - 1] !== computed
                        : indexOf(seen, computed) < 0
                ) {
                    if (callback || isLarge) {
                        seen.push(computed);
                    }
                    result.push(value);
                }
            }
            if (isLarge) {
                releaseArray(seen.array);
                releaseObject(seen);
            } else if (callback) {
                releaseArray(seen);
            }
            return result;
        }

        /**
         * Creates a function that aggregates a collection, creating an object composed
         * of keys generated from the results of running each element of the collection
         * through a callback. The given `setter` function sets the keys and values
         * of the composed object.
         *
         * @private
         * @param {Function} setter The setter function.
         * @returns {Function} Returns the new aggregator function.
         */
        function createAggregator(setter) {
            return function(collection, callback, thisArg) {
                var result = {};
                callback = lodash.createCallback(callback, thisArg, 3);

                var index = -1,
                    length = collection ? collection.length : 0;

                if (typeof length == 'number') {
                    while (++index < length) {
                        var value = collection[index];
                        setter(result, value, callback(value, index, collection), collection);
                    }
                } else {
                    forOwn(collection, function(value, key, collection) {
                        setter(result, value, callback(value, key, collection), collection);
                    });
                }
                return result;
            };
        }

        /**
         * Creates a function that, when called, either curries or invokes `func`
         * with an optional `this` binding and partially applied arguments.
         *
         * @private
         * @param {Function|string} func The function or method name to reference.
         * @param {number} bitmask The bitmask of method flags to compose.
         *  The bitmask may be composed of the following flags:
         *  1 - `_.bind`
         *  2 - `_.bindKey`
         *  4 - `_.curry`
         *  8 - `_.curry` (bound)
         *  16 - `_.partial`
         *  32 - `_.partialRight`
         * @param {Array} [partialArgs] An array of arguments to prepend to those
         *  provided to the new function.
         * @param {Array} [partialRightArgs] An array of arguments to append to those
         *  provided to the new function.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {number} [arity] The arity of `func`.
         * @returns {Function} Returns the new function.
         */
        function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
            var isBind = bitmask & 1,
                isBindKey = bitmask & 2,
                isCurry = bitmask & 4,
                isCurryBound = bitmask & 8,
                isPartial = bitmask & 16,
                isPartialRight = bitmask & 32;

            if (!isBindKey && !isFunction(func)) {
                throw new TypeError;
            }
            if (isPartial && !partialArgs.length) {
                bitmask &= ~16;
                isPartial = partialArgs = false;
            }
            if (isPartialRight && !partialRightArgs.length) {
                bitmask &= ~32;
                isPartialRight = partialRightArgs = false;
            }
            var bindData = func && func.__bindData__;
            if (bindData && bindData !== true) {
                // clone `bindData`
                bindData = slice(bindData);
                if (bindData[2]) {
                    bindData[2] = slice(bindData[2]);
                }
                if (bindData[3]) {
                    bindData[3] = slice(bindData[3]);
                }
                // set `thisBinding` is not previously bound
                if (isBind && !(bindData[1] & 1)) {
                    bindData[4] = thisArg;
                }
                // set if previously bound but not currently (subsequent curried functions)
                if (!isBind && bindData[1] & 1) {
                    bitmask |= 8;
                }
                // set curried arity if not yet set
                if (isCurry && !(bindData[1] & 4)) {
                    bindData[5] = arity;
                }
                // append partial left arguments
                if (isPartial) {
                    push.apply(bindData[2] || (bindData[2] = []), partialArgs);
                }
                // append partial right arguments
                if (isPartialRight) {
                    unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
                }
                // merge flags
                bindData[1] |= bitmask;
                return createWrapper.apply(null, bindData);
            }
            // fast path for `_.bind`
            var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
            return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
        }

        /**
         * Used by `escape` to convert characters to HTML entities.
         *
         * @private
         * @param {string} match The matched character to escape.
         * @returns {string} Returns the escaped character.
         */
        function escapeHtmlChar(match) {
            return htmlEscapes[match];
        }

        /**
         * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
         * customized, this method returns the custom method, otherwise it returns
         * the `baseIndexOf` function.
         *
         * @private
         * @returns {Function} Returns the "indexOf" function.
         */
        function getIndexOf() {
            var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
            return result;
        }

        /**
         * Checks if `value` is a native function.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
         */
        function isNative(value) {
            return typeof value == 'function' && reNative.test(value);
        }

        /**
         * Sets `this` binding data on a given function.
         *
         * @private
         * @param {Function} func The function to set data on.
         * @param {Array} value The data array to set.
         */
        var setBindData = !defineProperty ? noop : function(func, value) {
            descriptor.value = value;
            defineProperty(func, '__bindData__', descriptor);
        };

        /**
         * A fallback implementation of `isPlainObject` which checks if a given value
         * is an object created by the `Object` constructor, assuming objects created
         * by the `Object` constructor have no inherited enumerable properties and that
         * there are no `Object.prototype` extensions.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
         */
        function shimIsPlainObject(value) {
            var ctor,
                result;

            // avoid non Object objects, `arguments` objects, and DOM elements
            if (!(value && toString.call(value) == objectClass) ||
                (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor))) {
                return false;
            }
            // In most environments an object's own properties are iterated before
            // its inherited properties. If the last iterated property is an object's
            // own property then there are no inherited enumerable properties.
            forIn(value, function(value, key) {
                result = key;
            });
            return typeof result == 'undefined' || hasOwnProperty.call(value, result);
        }

        /**
         * Used by `unescape` to convert HTML entities to characters.
         *
         * @private
         * @param {string} match The matched character to unescape.
         * @returns {string} Returns the unescaped character.
         */
        function unescapeHtmlChar(match) {
            return htmlUnescapes[match];
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Checks if `value` is an `arguments` object.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
         * @example
         *
         * (function() { return _.isArguments(arguments); })(1, 2, 3);
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        function isArguments(value) {
            return value && typeof value == 'object' && typeof value.length == 'number' &&
                toString.call(value) == argsClass || false;
        }

        /**
         * Checks if `value` is an array.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
         * @example
         *
         * (function() { return _.isArray(arguments); })();
         * // => false
         *
         * _.isArray([1, 2, 3]);
         * // => true
         */
        var isArray = nativeIsArray || function(value) {
                return value && typeof value == 'object' && typeof value.length == 'number' &&
                    toString.call(value) == arrayClass || false;
            };

        /**
         * A fallback implementation of `Object.keys` which produces an array of the
         * given object's own enumerable property names.
         *
         * @private
         * @type Function
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns an array of property names.
         */
        var shimKeys = function(object) {
            var index, iterable = object, result = [];
            if (!iterable) return result;
            if (!(objectTypes[typeof object])) return result;
            for (index in iterable) {
                if (hasOwnProperty.call(iterable, index)) {
                    result.push(index);
                }
            }
            return result
        };

        /**
         * Creates an array composed of the own enumerable property names of an object.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns an array of property names.
         * @example
         *
         * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
         * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
         */
        var keys = !nativeKeys ? shimKeys : function(object) {
            if (!isObject(object)) {
                return [];
            }
            return nativeKeys(object);
        };

        /**
         * Used to convert characters to HTML entities:
         *
         * Though the `>` character is escaped for symmetry, characters like `>` and `/`
         * don't require escaping in HTML and have no special meaning unless they're part
         * of a tag or an unquoted attribute value.
         * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
         */
        var htmlEscapes = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };

        /** Used to convert HTML entities to characters */
        var htmlUnescapes = invert(htmlEscapes);

        /** Used to match HTML entities and HTML characters */
        var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
            reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');

        /*--------------------------------------------------------------------------*/

        /**
         * Assigns own enumerable properties of source object(s) to the destination
         * object. Subsequent sources will overwrite property assignments of previous
         * sources. If a callback is provided it will be executed to produce the
         * assigned values. The callback is bound to `thisArg` and invoked with two
         * arguments; (objectValue, sourceValue).
         *
         * @static
         * @memberOf _
         * @type Function
         * @alias extend
         * @category Objects
         * @param {Object} object The destination object.
         * @param {...Object} [source] The source objects.
         * @param {Function} [callback] The function to customize assigning values.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the destination object.
         * @example
         *
         * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
         * // => { 'name': 'fred', 'employer': 'slate' }
         *
         * var defaults = _.partialRight(_.assign, function(a, b) {
     *   return typeof a == 'undefined' ? b : a;
     * });
         *
         * var object = { 'name': 'barney' };
         * defaults(object, { 'name': 'fred', 'employer': 'slate' });
         * // => { 'name': 'barney', 'employer': 'slate' }
         */
        var assign = function(object, source, guard) {
            var index, iterable = object, result = iterable;
            if (!iterable) return result;
            var args = arguments,
                argsIndex = 0,
                argsLength = typeof guard == 'number' ? 2 : args.length;
            if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
                var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);
            } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
                callback = args[--argsLength];
            }
            while (++argsIndex < argsLength) {
                iterable = args[argsIndex];
                if (iterable && objectTypes[typeof iterable]) {
                    var ownIndex = -1,
                        ownProps = objectTypes[typeof iterable] && keys(iterable),
                        length = ownProps ? ownProps.length : 0;

                    while (++ownIndex < length) {
                        index = ownProps[ownIndex];
                        result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
                    }
                }
            }
            return result
        };

        /**
         * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
         * be cloned, otherwise they will be assigned by reference. If a callback
         * is provided it will be executed to produce the cloned values. If the
         * callback returns `undefined` cloning will be handled by the method instead.
         * The callback is bound to `thisArg` and invoked with one argument; (value).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to clone.
         * @param {boolean} [isDeep=false] Specify a deep clone.
         * @param {Function} [callback] The function to customize cloning values.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the cloned value.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * var shallow = _.clone(characters);
         * shallow[0] === characters[0];
         * // => true
         *
         * var deep = _.clone(characters, true);
         * deep[0] === characters[0];
         * // => false
         *
         * _.mixin({
     *   'clone': _.partialRight(_.clone, function(value) {
     *     return _.isElement(value) ? value.cloneNode(false) : undefined;
     *   })
     * });
         *
         * var clone = _.clone(document.body);
         * clone.childNodes.length;
         * // => 0
         */
        function clone(value, isDeep, callback, thisArg) {
            // allows working with "Collections" methods without using their `index`
            // and `collection` arguments for `isDeep` and `callback`
            if (typeof isDeep != 'boolean' && isDeep != null) {
                thisArg = callback;
                callback = isDeep;
                isDeep = false;
            }
            return baseClone(value, isDeep, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
        }

        /**
         * Creates a deep clone of `value`. If a callback is provided it will be
         * executed to produce the cloned values. If the callback returns `undefined`
         * cloning will be handled by the method instead. The callback is bound to
         * `thisArg` and invoked with one argument; (value).
         *
         * Note: This method is loosely based on the structured clone algorithm. Functions
         * and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
         * objects created by constructors other than `Object` are cloned to plain `Object` objects.
         * See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to deep clone.
         * @param {Function} [callback] The function to customize cloning values.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the deep cloned value.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * var deep = _.cloneDeep(characters);
         * deep[0] === characters[0];
         * // => false
         *
         * var view = {
     *   'label': 'docs',
     *   'node': element
     * };
         *
         * var clone = _.cloneDeep(view, function(value) {
     *   return _.isElement(value) ? value.cloneNode(true) : undefined;
     * });
         *
         * clone.node == view.node;
         * // => false
         */
        function cloneDeep(value, callback, thisArg) {
            return baseClone(value, true, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
        }

        /**
         * Creates an object that inherits from the given `prototype` object. If a
         * `properties` object is provided its own enumerable properties are assigned
         * to the created object.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} prototype The object to inherit from.
         * @param {Object} [properties] The properties to assign to the object.
         * @returns {Object} Returns the new object.
         * @example
         *
         * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
         *
         * function Circle() {
     *   Shape.call(this);
     * }
         *
         * Circle.prototype = _.create(Shape.prototype, { 'constructor': Circle });
         *
         * var circle = new Circle;
         * circle instanceof Circle;
         * // => true
         *
         * circle instanceof Shape;
         * // => true
         */
        function create(prototype, properties) {
            var result = baseCreate(prototype);
            return properties ? assign(result, properties) : result;
        }

        /**
         * Assigns own enumerable properties of source object(s) to the destination
         * object for all destination properties that resolve to `undefined`. Once a
         * property is set, additional defaults of the same property will be ignored.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Objects
         * @param {Object} object The destination object.
         * @param {...Object} [source] The source objects.
         * @param- {Object} [guard] Allows working with `_.reduce` without using its
         *  `key` and `object` arguments as sources.
         * @returns {Object} Returns the destination object.
         * @example
         *
         * var object = { 'name': 'barney' };
         * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
         * // => { 'name': 'barney', 'employer': 'slate' }
         */
        var defaults = function(object, source, guard) {
            var index, iterable = object, result = iterable;
            if (!iterable) return result;
            var args = arguments,
                argsIndex = 0,
                argsLength = typeof guard == 'number' ? 2 : args.length;
            while (++argsIndex < argsLength) {
                iterable = args[argsIndex];
                if (iterable && objectTypes[typeof iterable]) {
                    var ownIndex = -1,
                        ownProps = objectTypes[typeof iterable] && keys(iterable),
                        length = ownProps ? ownProps.length : 0;

                    while (++ownIndex < length) {
                        index = ownProps[ownIndex];
                        if (typeof result[index] == 'undefined') result[index] = iterable[index];
                    }
                }
            }
            return result
        };

        /**
         * This method is like `_.findIndex` except that it returns the key of the
         * first element that passes the callback check, instead of the element itself.
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to search.
         * @param {Function|Object|string} [callback=identity] The function called per
         *  iteration. If a property name or object is provided it will be used to
         *  create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {string|undefined} Returns the key of the found element, else `undefined`.
         * @example
         *
         * var characters = {
     *   'barney': {  'age': 36, 'blocked': false },
     *   'fred': {    'age': 40, 'blocked': true },
     *   'pebbles': { 'age': 1,  'blocked': false }
     * };
         *
         * _.findKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
         * // => 'barney' (property order is not guaranteed across environments)
         *
         * // using "_.where" callback shorthand
         * _.findKey(characters, { 'age': 1 });
         * // => 'pebbles'
         *
         * // using "_.pluck" callback shorthand
         * _.findKey(characters, 'blocked');
         * // => 'fred'
         */
        function findKey(object, callback, thisArg) {
            var result;
            callback = lodash.createCallback(callback, thisArg, 3);
            forOwn(object, function(value, key, object) {
                if (callback(value, key, object)) {
                    result = key;
                    return false;
                }
            });
            return result;
        }

        /**
         * This method is like `_.findKey` except that it iterates over elements
         * of a `collection` in the opposite order.
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to search.
         * @param {Function|Object|string} [callback=identity] The function called per
         *  iteration. If a property name or object is provided it will be used to
         *  create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {string|undefined} Returns the key of the found element, else `undefined`.
         * @example
         *
         * var characters = {
     *   'barney': {  'age': 36, 'blocked': true },
     *   'fred': {    'age': 40, 'blocked': false },
     *   'pebbles': { 'age': 1,  'blocked': true }
     * };
         *
         * _.findLastKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
         * // => returns `pebbles`, assuming `_.findKey` returns `barney`
         *
         * // using "_.where" callback shorthand
         * _.findLastKey(characters, { 'age': 40 });
         * // => 'fred'
         *
         * // using "_.pluck" callback shorthand
         * _.findLastKey(characters, 'blocked');
         * // => 'pebbles'
         */
        function findLastKey(object, callback, thisArg) {
            var result;
            callback = lodash.createCallback(callback, thisArg, 3);
            forOwnRight(object, function(value, key, object) {
                if (callback(value, key, object)) {
                    result = key;
                    return false;
                }
            });
            return result;
        }

        /**
         * Iterates over own and inherited enumerable properties of an object,
         * executing the callback for each property. The callback is bound to `thisArg`
         * and invoked with three arguments; (value, key, object). Callbacks may exit
         * iteration early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Objects
         * @param {Object} object The object to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
         *
         * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
         *
         * _.forIn(new Shape, function(value, key) {
     *   console.log(key);
     * });
         * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
         */
        var forIn = function(collection, callback, thisArg) {
            var index, iterable = collection, result = iterable;
            if (!iterable) return result;
            if (!objectTypes[typeof iterable]) return result;
            callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
            for (index in iterable) {
                if (callback(iterable[index], index, collection) === false) return result;
            }
            return result
        };

        /**
         * This method is like `_.forIn` except that it iterates over elements
         * of a `collection` in the opposite order.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
         *
         * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
         *
         * _.forInRight(new Shape, function(value, key) {
     *   console.log(key);
     * });
         * // => logs 'move', 'y', and 'x' assuming `_.forIn ` logs 'x', 'y', and 'move'
         */
        function forInRight(object, callback, thisArg) {
            var pairs = [];

            forIn(object, function(value, key) {
                pairs.push(key, value);
            });

            var length = pairs.length;
            callback = baseCreateCallback(callback, thisArg, 3);
            while (length--) {
                if (callback(pairs[length--], pairs[length], object) === false) {
                    break;
                }
            }
            return object;
        }

        /**
         * Iterates over own enumerable properties of an object, executing the callback
         * for each property. The callback is bound to `thisArg` and invoked with three
         * arguments; (value, key, object). Callbacks may exit iteration early by
         * explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Objects
         * @param {Object} object The object to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
         * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
         */
        var forOwn = function(collection, callback, thisArg) {
            var index, iterable = collection, result = iterable;
            if (!iterable) return result;
            if (!objectTypes[typeof iterable]) return result;
            callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
            var ownIndex = -1,
                ownProps = objectTypes[typeof iterable] && keys(iterable),
                length = ownProps ? ownProps.length : 0;

            while (++ownIndex < length) {
                index = ownProps[ownIndex];
                if (callback(iterable[index], index, collection) === false) return result;
            }
            return result
        };

        /**
         * This method is like `_.forOwn` except that it iterates over elements
         * of a `collection` in the opposite order.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * _.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
         * // => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
         */
        function forOwnRight(object, callback, thisArg) {
            var props = keys(object),
                length = props.length;

            callback = baseCreateCallback(callback, thisArg, 3);
            while (length--) {
                var key = props[length];
                if (callback(object[key], key, object) === false) {
                    break;
                }
            }
            return object;
        }

        /**
         * Creates a sorted array of property names of all enumerable properties,
         * own and inherited, of `object` that have function values.
         *
         * @static
         * @memberOf _
         * @alias methods
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns an array of property names that have function values.
         * @example
         *
         * _.functions(_);
         * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
         */
        function functions(object) {
            var result = [];
            forIn(object, function(value, key) {
                if (isFunction(value)) {
                    result.push(key);
                }
            });
            return result.sort();
        }

        /**
         * Checks if the specified property name exists as a direct property of `object`,
         * instead of an inherited property.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to inspect.
         * @param {string} key The name of the property to check.
         * @returns {boolean} Returns `true` if key is a direct property, else `false`.
         * @example
         *
         * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
         * // => true
         */
        function has(object, key) {
            return object ? hasOwnProperty.call(object, key) : false;
        }

        /**
         * Creates an object composed of the inverted keys and values of the given object.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to invert.
         * @returns {Object} Returns the created inverted object.
         * @example
         *
         * _.invert({ 'first': 'fred', 'second': 'barney' });
         * // => { 'fred': 'first', 'barney': 'second' }
         */
        function invert(object) {
            var index = -1,
                props = keys(object),
                length = props.length,
                result = {};

            while (++index < length) {
                var key = props[index];
                result[object[key]] = key;
            }
            return result;
        }

        /**
         * Checks if `value` is a boolean value.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a boolean value, else `false`.
         * @example
         *
         * _.isBoolean(null);
         * // => false
         */
        function isBoolean(value) {
            return value === true || value === false ||
                value && typeof value == 'object' && toString.call(value) == boolClass || false;
        }

        /**
         * Checks if `value` is a date.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a date, else `false`.
         * @example
         *
         * _.isDate(new Date);
         * // => true
         */
        function isDate(value) {
            return value && typeof value == 'object' && toString.call(value) == dateClass || false;
        }

        /**
         * Checks if `value` is a DOM element.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
         * @example
         *
         * _.isElement(document.body);
         * // => true
         */
        function isElement(value) {
            return value && value.nodeType === 1 || false;
        }

        /**
         * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
         * length of `0` and objects with no own enumerable properties are considered
         * "empty".
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Array|Object|string} value The value to inspect.
         * @returns {boolean} Returns `true` if the `value` is empty, else `false`.
         * @example
         *
         * _.isEmpty([1, 2, 3]);
         * // => false
         *
         * _.isEmpty({});
         * // => true
         *
         * _.isEmpty('');
         * // => true
         */
        function isEmpty(value) {
            var result = true;
            if (!value) {
                return result;
            }
            var className = toString.call(value),
                length = value.length;

            if ((className == arrayClass || className == stringClass || className == argsClass ) ||
                (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
                return !length;
            }
            forOwn(value, function() {
                return (result = false);
            });
            return result;
        }

        /**
         * Performs a deep comparison between two values to determine if they are
         * equivalent to each other. If a callback is provided it will be executed
         * to compare values. If the callback returns `undefined` comparisons will
         * be handled by the method instead. The callback is bound to `thisArg` and
         * invoked with two arguments; (a, b).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} a The value to compare.
         * @param {*} b The other value to compare.
         * @param {Function} [callback] The function to customize comparing values.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'name': 'fred' };
         * var copy = { 'name': 'fred' };
         *
         * object == copy;
         * // => false
         *
         * _.isEqual(object, copy);
         * // => true
         *
         * var words = ['hello', 'goodbye'];
         * var otherWords = ['hi', 'goodbye'];
         *
         * _.isEqual(words, otherWords, function(a, b) {
     *   var reGreet = /^(?:hello|hi)$/i,
     *       aGreet = _.isString(a) && reGreet.test(a),
     *       bGreet = _.isString(b) && reGreet.test(b);
     *
     *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
     * });
         * // => true
         */
        function isEqual(a, b, callback, thisArg) {
            return baseIsEqual(a, b, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 2));
        }

        /**
         * Checks if `value` is, or can be coerced to, a finite number.
         *
         * Note: This is not the same as native `isFinite` which will return true for
         * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
         * @example
         *
         * _.isFinite(-101);
         * // => true
         *
         * _.isFinite('10');
         * // => true
         *
         * _.isFinite(true);
         * // => false
         *
         * _.isFinite('');
         * // => false
         *
         * _.isFinite(Infinity);
         * // => false
         */
        function isFinite(value) {
            return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
        }

        /**
         * Checks if `value` is a function.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         */
        function isFunction(value) {
            return typeof value == 'function';
        }

        /**
         * Checks if `value` is the language type of Object.
         * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(1);
         * // => false
         */
        function isObject(value) {
            // check if the value is the ECMAScript language type of Object
            // http://es5.github.io/#x8
            // and avoid a V8 bug
            // http://code.google.com/p/v8/issues/detail?id=2291
            return !!(value && objectTypes[typeof value]);
        }

        /**
         * Checks if `value` is `NaN`.
         *
         * Note: This is not the same as native `isNaN` which will return `true` for
         * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
         * @example
         *
         * _.isNaN(NaN);
         * // => true
         *
         * _.isNaN(new Number(NaN));
         * // => true
         *
         * isNaN(undefined);
         * // => true
         *
         * _.isNaN(undefined);
         * // => false
         */
        function isNaN(value) {
            // `NaN` as a primitive is the only value that is not equal to itself
            // (perform the [[Class]] check first to avoid errors with some host objects in IE)
            return isNumber(value) && value != +value;
        }

        /**
         * Checks if `value` is `null`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is `null`, else `false`.
         * @example
         *
         * _.isNull(null);
         * // => true
         *
         * _.isNull(undefined);
         * // => false
         */
        function isNull(value) {
            return value === null;
        }

        /**
         * Checks if `value` is a number.
         *
         * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
         * @example
         *
         * _.isNumber(8.4 * 5);
         * // => true
         */
        function isNumber(value) {
            return typeof value == 'number' ||
                value && typeof value == 'object' && toString.call(value) == numberClass || false;
        }

        /**
         * Checks if `value` is an object created by the `Object` constructor.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
         * @example
         *
         * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
         *
         * _.isPlainObject(new Shape);
         * // => false
         *
         * _.isPlainObject([1, 2, 3]);
         * // => false
         *
         * _.isPlainObject({ 'x': 0, 'y': 0 });
         * // => true
         */
        var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
            if (!(value && toString.call(value) == objectClass)) {
                return false;
            }
            var valueOf = value.valueOf,
                objProto = isNative(valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

            return objProto
                ? (value == objProto || getPrototypeOf(value) == objProto)
                : shimIsPlainObject(value);
        };

        /**
         * Checks if `value` is a regular expression.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a regular expression, else `false`.
         * @example
         *
         * _.isRegExp(/fred/);
         * // => true
         */
        function isRegExp(value) {
            return value && typeof value == 'object' && toString.call(value) == regexpClass || false;
        }

        /**
         * Checks if `value` is a string.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
         * @example
         *
         * _.isString('fred');
         * // => true
         */
        function isString(value) {
            return typeof value == 'string' ||
                value && typeof value == 'object' && toString.call(value) == stringClass || false;
        }

        /**
         * Checks if `value` is `undefined`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if the `value` is `undefined`, else `false`.
         * @example
         *
         * _.isUndefined(void 0);
         * // => true
         */
        function isUndefined(value) {
            return typeof value == 'undefined';
        }

        /**
         * Creates an object with the same keys as `object` and values generated by
         * running each own enumerable property of `object` through the callback.
         * The callback is bound to `thisArg` and invoked with three arguments;
         * (value, key, object).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new object with values of the results of each `callback` execution.
         * @example
         *
         * _.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(num) { return num * 3; });
         * // => { 'a': 3, 'b': 6, 'c': 9 }
         *
         * var characters = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
         *
         * // using "_.pluck" callback shorthand
         * _.mapValues(characters, 'age');
         * // => { 'fred': 40, 'pebbles': 1 }
         */
        function mapValues(object, callback, thisArg) {
            var result = {};
            callback = lodash.createCallback(callback, thisArg, 3);

            forOwn(object, function(value, key, object) {
                result[key] = callback(value, key, object);
            });
            return result;
        }

        /**
         * Recursively merges own enumerable properties of the source object(s), that
         * don't resolve to `undefined` into the destination object. Subsequent sources
         * will overwrite property assignments of previous sources. If a callback is
         * provided it will be executed to produce the merged values of the destination
         * and source properties. If the callback returns `undefined` merging will
         * be handled by the method instead. The callback is bound to `thisArg` and
         * invoked with two arguments; (objectValue, sourceValue).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The destination object.
         * @param {...Object} [source] The source objects.
         * @param {Function} [callback] The function to customize merging properties.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the destination object.
         * @example
         *
         * var names = {
     *   'characters': [
     *     { 'name': 'barney' },
     *     { 'name': 'fred' }
     *   ]
     * };
         *
         * var ages = {
     *   'characters': [
     *     { 'age': 36 },
     *     { 'age': 40 }
     *   ]
     * };
         *
         * _.merge(names, ages);
         * // => { 'characters': [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }] }
         *
         * var food = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
         *
         * var otherFood = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
         *
         * _.merge(food, otherFood, function(a, b) {
     *   return _.isArray(a) ? a.concat(b) : undefined;
     * });
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
         */
        function merge(object) {
            var args = arguments,
                length = 2;

            if (!isObject(object)) {
                return object;
            }
            // allows working with `_.reduce` and `_.reduceRight` without using
            // their `index` and `collection` arguments
            if (typeof args[2] != 'number') {
                length = args.length;
            }
            if (length > 3 && typeof args[length - 2] == 'function') {
                var callback = baseCreateCallback(args[--length - 1], args[length--], 2);
            } else if (length > 2 && typeof args[length - 1] == 'function') {
                callback = args[--length];
            }
            var sources = slice(arguments, 1, length),
                index = -1,
                stackA = getArray(),
                stackB = getArray();

            while (++index < length) {
                baseMerge(object, sources[index], callback, stackA, stackB);
            }
            releaseArray(stackA);
            releaseArray(stackB);
            return object;
        }

        /**
         * Creates a shallow clone of `object` excluding the specified properties.
         * Property names may be specified as individual arguments or as arrays of
         * property names. If a callback is provided it will be executed for each
         * property of `object` omitting the properties the callback returns truey
         * for. The callback is bound to `thisArg` and invoked with three arguments;
         * (value, key, object).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The source object.
         * @param {Function|...string|string[]} [callback] The properties to omit or the
         *  function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns an object without the omitted properties.
         * @example
         *
         * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
         * // => { 'name': 'fred' }
         *
         * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
     *   return typeof value == 'number';
     * });
         * // => { 'name': 'fred' }
         */
        function omit(object, callback, thisArg) {
            var result = {};
            if (typeof callback != 'function') {
                var props = [];
                forIn(object, function(value, key) {
                    props.push(key);
                });
                props = baseDifference(props, baseFlatten(arguments, true, false, 1));

                var index = -1,
                    length = props.length;

                while (++index < length) {
                    var key = props[index];
                    result[key] = object[key];
                }
            } else {
                callback = lodash.createCallback(callback, thisArg, 3);
                forIn(object, function(value, key, object) {
                    if (!callback(value, key, object)) {
                        result[key] = value;
                    }
                });
            }
            return result;
        }

        /**
         * Creates a two dimensional array of an object's key-value pairs,
         * i.e. `[[key1, value1], [key2, value2]]`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns new array of key-value pairs.
         * @example
         *
         * _.pairs({ 'barney': 36, 'fred': 40 });
         * // => [['barney', 36], ['fred', 40]] (property order is not guaranteed across environments)
         */
        function pairs(object) {
            var index = -1,
                props = keys(object),
                length = props.length,
                result = Array(length);

            while (++index < length) {
                var key = props[index];
                result[index] = [key, object[key]];
            }
            return result;
        }

        /**
         * Creates a shallow clone of `object` composed of the specified properties.
         * Property names may be specified as individual arguments or as arrays of
         * property names. If a callback is provided it will be executed for each
         * property of `object` picking the properties the callback returns truey
         * for. The callback is bound to `thisArg` and invoked with three arguments;
         * (value, key, object).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The source object.
         * @param {Function|...string|string[]} [callback] The function called per
         *  iteration or property names to pick, specified as individual property
         *  names or arrays of property names.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns an object composed of the picked properties.
         * @example
         *
         * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
         * // => { 'name': 'fred' }
         *
         * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
     *   return key.charAt(0) != '_';
     * });
         * // => { 'name': 'fred' }
         */
        function pick(object, callback, thisArg) {
            var result = {};
            if (typeof callback != 'function') {
                var index = -1,
                    props = baseFlatten(arguments, true, false, 1),
                    length = isObject(object) ? props.length : 0;

                while (++index < length) {
                    var key = props[index];
                    if (key in object) {
                        result[key] = object[key];
                    }
                }
            } else {
                callback = lodash.createCallback(callback, thisArg, 3);
                forIn(object, function(value, key, object) {
                    if (callback(value, key, object)) {
                        result[key] = value;
                    }
                });
            }
            return result;
        }

        /**
         * An alternative to `_.reduce` this method transforms `object` to a new
         * `accumulator` object which is the result of running each of its own
         * enumerable properties through a callback, with each callback execution
         * potentially mutating the `accumulator` object. The callback is bound to
         * `thisArg` and invoked with four arguments; (accumulator, value, key, object).
         * Callbacks may exit iteration early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Array|Object} object The object to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [accumulator] The custom accumulator value.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the accumulated value.
         * @example
         *
         * var squares = _.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(result, num) {
     *   num *= num;
     *   if (num % 2) {
     *     return result.push(num) < 3;
     *   }
     * });
         * // => [1, 9, 25]
         *
         * var mapped = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     * });
         * // => { 'a': 3, 'b': 6, 'c': 9 }
         */
        function transform(object, callback, accumulator, thisArg) {
            var isArr = isArray(object);
            if (accumulator == null) {
                if (isArr) {
                    accumulator = [];
                } else {
                    var ctor = object && object.constructor,
                        proto = ctor && ctor.prototype;

                    accumulator = baseCreate(proto);
                }
            }
            if (callback) {
                callback = lodash.createCallback(callback, thisArg, 4);
                (isArr ? forEach : forOwn)(object, function(value, index, object) {
                    return callback(accumulator, value, index, object);
                });
            }
            return accumulator;
        }

        /**
         * Creates an array composed of the own enumerable property values of `object`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns an array of property values.
         * @example
         *
         * _.values({ 'one': 1, 'two': 2, 'three': 3 });
         * // => [1, 2, 3] (property order is not guaranteed across environments)
         */
        function values(object) {
            var index = -1,
                props = keys(object),
                length = props.length,
                result = Array(length);

            while (++index < length) {
                result[index] = object[props[index]];
            }
            return result;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Creates an array of elements from the specified indexes, or keys, of the
         * `collection`. Indexes may be specified as individual arguments or as arrays
         * of indexes.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {...(number|number[]|string|string[])} [index] The indexes of `collection`
         *   to retrieve, specified as individual indexes or arrays of indexes.
         * @returns {Array} Returns a new array of elements corresponding to the
         *  provided indexes.
         * @example
         *
         * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
         * // => ['a', 'c', 'e']
         *
         * _.at(['fred', 'barney', 'pebbles'], 0, 2);
         * // => ['fred', 'pebbles']
         */
        function at(collection) {
            var args = arguments,
                index = -1,
                props = baseFlatten(args, true, false, 1),
                length = (args[2] && args[2][args[1]] === collection) ? 1 : props.length,
                result = Array(length);

            while(++index < length) {
                result[index] = collection[props[index]];
            }
            return result;
        }

        /**
         * Checks if a given value is present in a collection using strict equality
         * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
         * offset from the end of the collection.
         *
         * @static
         * @memberOf _
         * @alias include
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {*} target The value to check for.
         * @param {number} [fromIndex=0] The index to search from.
         * @returns {boolean} Returns `true` if the `target` element is found, else `false`.
         * @example
         *
         * _.contains([1, 2, 3], 1);
         * // => true
         *
         * _.contains([1, 2, 3], 1, 2);
         * // => false
         *
         * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
         * // => true
         *
         * _.contains('pebbles', 'eb');
         * // => true
         */
        function contains(collection, target, fromIndex) {
            var index = -1,
                indexOf = getIndexOf(),
                length = collection ? collection.length : 0,
                result = false;

            fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
            if (isArray(collection)) {
                result = indexOf(collection, target, fromIndex) > -1;
            } else if (typeof length == 'number') {
                result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
            } else {
                forOwn(collection, function(value) {
                    if (++index >= fromIndex) {
                        return !(result = value === target);
                    }
                });
            }
            return result;
        }

        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` through the callback. The corresponding value
         * of each key is the number of times the key was returned by the callback.
         * The callback is bound to `thisArg` and invoked with three arguments;
         * (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
         * // => { '4': 1, '6': 2 }
         *
         * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
         * // => { '4': 1, '6': 2 }
         *
         * _.countBy(['one', 'two', 'three'], 'length');
         * // => { '3': 2, '5': 1 }
         */
        var countBy = createAggregator(function(result, value, key) {
            (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
        });

        /**
         * Checks if the given callback returns truey value for **all** elements of
         * a collection. The callback is bound to `thisArg` and invoked with three
         * arguments; (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias all
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {boolean} Returns `true` if all elements passed the callback check,
         *  else `false`.
         * @example
         *
         * _.every([true, 1, null, 'yes']);
         * // => false
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.every(characters, 'age');
         * // => true
         *
         * // using "_.where" callback shorthand
         * _.every(characters, { 'age': 36 });
         * // => false
         */
        function every(collection, callback, thisArg) {
            var result = true;
            callback = lodash.createCallback(callback, thisArg, 3);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    if (!(result = !!callback(collection[index], index, collection))) {
                        break;
                    }
                }
            } else {
                forOwn(collection, function(value, index, collection) {
                    return (result = !!callback(value, index, collection));
                });
            }
            return result;
        }

        /**
         * Iterates over elements of a collection, returning an array of all elements
         * the callback returns truey for. The callback is bound to `thisArg` and
         * invoked with three arguments; (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias select
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of elements that passed the callback check.
         * @example
         *
         * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
         * // => [2, 4, 6]
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36, 'blocked': false },
         *   { 'name': 'fred',   'age': 40, 'blocked': true }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.filter(characters, 'blocked');
         * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
         *
         * // using "_.where" callback shorthand
         * _.filter(characters, { 'age': 36 });
         * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
         */
        function filter(collection, callback, thisArg) {
            var result = [];
            callback = lodash.createCallback(callback, thisArg, 3);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    var value = collection[index];
                    if (callback(value, index, collection)) {
                        result.push(value);
                    }
                }
            } else {
                forOwn(collection, function(value, index, collection) {
                    if (callback(value, index, collection)) {
                        result.push(value);
                    }
                });
            }
            return result;
        }

        /**
         * Iterates over elements of a collection, returning the first element that
         * the callback returns truey for. The callback is bound to `thisArg` and
         * invoked with three arguments; (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias detect, findWhere
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the found element, else `undefined`.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney',  'age': 36, 'blocked': false },
         *   { 'name': 'fred',    'age': 40, 'blocked': true },
         *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
         * ];
         *
         * _.find(characters, function(chr) {
     *   return chr.age < 40;
     * });
         * // => { 'name': 'barney', 'age': 36, 'blocked': false }
         *
         * // using "_.where" callback shorthand
         * _.find(characters, { 'age': 1 });
         * // =>  { 'name': 'pebbles', 'age': 1, 'blocked': false }
         *
         * // using "_.pluck" callback shorthand
         * _.find(characters, 'blocked');
         * // => { 'name': 'fred', 'age': 40, 'blocked': true }
         */
        function find(collection, callback, thisArg) {
            callback = lodash.createCallback(callback, thisArg, 3);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    var value = collection[index];
                    if (callback(value, index, collection)) {
                        return value;
                    }
                }
            } else {
                var result;
                forOwn(collection, function(value, index, collection) {
                    if (callback(value, index, collection)) {
                        result = value;
                        return false;
                    }
                });
                return result;
            }
        }

        /**
         * This method is like `_.find` except that it iterates over elements
         * of a `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the found element, else `undefined`.
         * @example
         *
         * _.findLast([1, 2, 3, 4], function(num) {
     *   return num % 2 == 1;
     * });
         * // => 3
         */
        function findLast(collection, callback, thisArg) {
            var result;
            callback = lodash.createCallback(callback, thisArg, 3);
            forEachRight(collection, function(value, index, collection) {
                if (callback(value, index, collection)) {
                    result = value;
                    return false;
                }
            });
            return result;
        }

        /**
         * Iterates over elements of a collection, executing the callback for each
         * element. The callback is bound to `thisArg` and invoked with three arguments;
         * (value, index|key, collection). Callbacks may exit iteration early by
         * explicitly returning `false`.
         *
         * Note: As with other "Collections" methods, objects with a `length` property
         * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
         * may be used for object iteration.
         *
         * @static
         * @memberOf _
         * @alias each
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array|Object|string} Returns `collection`.
         * @example
         *
         * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
         * // => logs each number and returns '1,2,3'
         *
         * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
         * // => logs each number and returns the object (property order is not guaranteed across environments)
         */
        function forEach(collection, callback, thisArg) {
            var index = -1,
                length = collection ? collection.length : 0;

            callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
            if (typeof length == 'number') {
                while (++index < length) {
                    if (callback(collection[index], index, collection) === false) {
                        break;
                    }
                }
            } else {
                forOwn(collection, callback);
            }
            return collection;
        }

        /**
         * This method is like `_.forEach` except that it iterates over elements
         * of a `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @alias eachRight
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array|Object|string} Returns `collection`.
         * @example
         *
         * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
         * // => logs each number from right to left and returns '3,2,1'
         */
        function forEachRight(collection, callback, thisArg) {
            var length = collection ? collection.length : 0;
            callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
            if (typeof length == 'number') {
                while (length--) {
                    if (callback(collection[length], length, collection) === false) {
                        break;
                    }
                }
            } else {
                var props = keys(collection);
                length = props.length;
                forOwn(collection, function(value, key, collection) {
                    key = props ? props[--length] : --length;
                    return callback(collection[key], key, collection);
                });
            }
            return collection;
        }

        /**
         * Creates an object composed of keys generated from the results of running
         * each element of a collection through the callback. The corresponding value
         * of each key is an array of the elements responsible for generating the key.
         * The callback is bound to `thisArg` and invoked with three arguments;
         * (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
         * // => { '4': [4.2], '6': [6.1, 6.4] }
         *
         * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
         * // => { '4': [4.2], '6': [6.1, 6.4] }
         *
         * // using "_.pluck" callback shorthand
         * _.groupBy(['one', 'two', 'three'], 'length');
         * // => { '3': ['one', 'two'], '5': ['three'] }
         */
        var groupBy = createAggregator(function(result, value, key) {
            (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
        });

        /**
         * Creates an object composed of keys generated from the results of running
         * each element of the collection through the given callback. The corresponding
         * value of each key is the last element responsible for generating the key.
         * The callback is bound to `thisArg` and invoked with three arguments;
         * (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * var keys = [
         *   { 'dir': 'left', 'code': 97 },
         *   { 'dir': 'right', 'code': 100 }
         * ];
         *
         * _.indexBy(keys, 'dir');
         * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
         *
         * _.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
         * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
         *
         * _.indexBy(characters, function(key) { this.fromCharCode(key.code); }, String);
         * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
         */
        var indexBy = createAggregator(function(result, value, key) {
            result[key] = value;
        });

        /**
         * Invokes the method named by `methodName` on each element in the `collection`
         * returning an array of the results of each invoked method. Additional arguments
         * will be provided to each invoked method. If `methodName` is a function it
         * will be invoked for, and `this` bound to, each element in the `collection`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|string} methodName The name of the method to invoke or
         *  the function invoked per iteration.
         * @param {...*} [arg] Arguments to invoke the method with.
         * @returns {Array} Returns a new array of the results of each invoked method.
         * @example
         *
         * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
         * // => [[1, 5, 7], [1, 2, 3]]
         *
         * _.invoke([123, 456], String.prototype.split, '');
         * // => [['1', '2', '3'], ['4', '5', '6']]
         */
        function invoke(collection, methodName) {
            var args = slice(arguments, 2),
                index = -1,
                isFunc = typeof methodName == 'function',
                length = collection ? collection.length : 0,
                result = Array(typeof length == 'number' ? length : 0);

            forEach(collection, function(value) {
                result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
            });
            return result;
        }

        /**
         * Creates an array of values by running each element in the collection
         * through the callback. The callback is bound to `thisArg` and invoked with
         * three arguments; (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias collect
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of the results of each `callback` execution.
         * @example
         *
         * _.map([1, 2, 3], function(num) { return num * 3; });
         * // => [3, 6, 9]
         *
         * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
         * // => [3, 6, 9] (property order is not guaranteed across environments)
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.map(characters, 'name');
         * // => ['barney', 'fred']
         */
        function map(collection, callback, thisArg) {
            var index = -1,
                length = collection ? collection.length : 0;

            callback = lodash.createCallback(callback, thisArg, 3);
            if (typeof length == 'number') {
                var result = Array(length);
                while (++index < length) {
                    result[index] = callback(collection[index], index, collection);
                }
            } else {
                result = [];
                forOwn(collection, function(value, key, collection) {
                    result[++index] = callback(value, key, collection);
                });
            }
            return result;
        }

        /**
         * Retrieves the maximum value of a collection. If the collection is empty or
         * falsey `-Infinity` is returned. If a callback is provided it will be executed
         * for each value in the collection to generate the criterion by which the value
         * is ranked. The callback is bound to `thisArg` and invoked with three
         * arguments; (value, index, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the maximum value.
         * @example
         *
         * _.max([4, 2, 8, 6]);
         * // => 8
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * _.max(characters, function(chr) { return chr.age; });
         * // => { 'name': 'fred', 'age': 40 };
         *
         * // using "_.pluck" callback shorthand
         * _.max(characters, 'age');
         * // => { 'name': 'fred', 'age': 40 };
         */
        function max(collection, callback, thisArg) {
            var computed = -Infinity,
                result = computed;

            // allows working with functions like `_.map` without using
            // their `index` argument as a callback
            if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
                callback = null;
            }
            if (callback == null && isArray(collection)) {
                var index = -1,
                    length = collection.length;

                while (++index < length) {
                    var value = collection[index];
                    if (value > result) {
                        result = value;
                    }
                }
            } else {
                callback = (callback == null && isString(collection))
                    ? charAtCallback
                    : lodash.createCallback(callback, thisArg, 3);

                forEach(collection, function(value, index, collection) {
                    var current = callback(value, index, collection);
                    if (current > computed) {
                        computed = current;
                        result = value;
                    }
                });
            }
            return result;
        }

        /**
         * Retrieves the minimum value of a collection. If the collection is empty or
         * falsey `Infinity` is returned. If a callback is provided it will be executed
         * for each value in the collection to generate the criterion by which the value
         * is ranked. The callback is bound to `thisArg` and invoked with three
         * arguments; (value, index, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the minimum value.
         * @example
         *
         * _.min([4, 2, 8, 6]);
         * // => 2
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * _.min(characters, function(chr) { return chr.age; });
         * // => { 'name': 'barney', 'age': 36 };
         *
         * // using "_.pluck" callback shorthand
         * _.min(characters, 'age');
         * // => { 'name': 'barney', 'age': 36 };
         */
        function min(collection, callback, thisArg) {
            var computed = Infinity,
                result = computed;

            // allows working with functions like `_.map` without using
            // their `index` argument as a callback
            if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
                callback = null;
            }
            if (callback == null && isArray(collection)) {
                var index = -1,
                    length = collection.length;

                while (++index < length) {
                    var value = collection[index];
                    if (value < result) {
                        result = value;
                    }
                }
            } else {
                callback = (callback == null && isString(collection))
                    ? charAtCallback
                    : lodash.createCallback(callback, thisArg, 3);

                forEach(collection, function(value, index, collection) {
                    var current = callback(value, index, collection);
                    if (current < computed) {
                        computed = current;
                        result = value;
                    }
                });
            }
            return result;
        }

        /**
         * Retrieves the value of a specified property from all elements in the collection.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {string} property The name of the property to pluck.
         * @returns {Array} Returns a new array of property values.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * _.pluck(characters, 'name');
         * // => ['barney', 'fred']
         */
        var pluck = map;

        /**
         * Reduces a collection to a value which is the accumulated result of running
         * each element in the collection through the callback, where each successive
         * callback execution consumes the return value of the previous execution. If
         * `accumulator` is not provided the first element of the collection will be
         * used as the initial `accumulator` value. The callback is bound to `thisArg`
         * and invoked with four arguments; (accumulator, value, index|key, collection).
         *
         * @static
         * @memberOf _
         * @alias foldl, inject
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [accumulator] Initial value of the accumulator.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the accumulated value.
         * @example
         *
         * var sum = _.reduce([1, 2, 3], function(sum, num) {
     *   return sum + num;
     * });
         * // => 6
         *
         * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     *   return result;
     * }, {});
         * // => { 'a': 3, 'b': 6, 'c': 9 }
         */
        function reduce(collection, callback, accumulator, thisArg) {
            if (!collection) return accumulator;
            var noaccum = arguments.length < 3;
            callback = lodash.createCallback(callback, thisArg, 4);

            var index = -1,
                length = collection.length;

            if (typeof length == 'number') {
                if (noaccum) {
                    accumulator = collection[++index];
                }
                while (++index < length) {
                    accumulator = callback(accumulator, collection[index], index, collection);
                }
            } else {
                forOwn(collection, function(value, index, collection) {
                    accumulator = noaccum
                        ? (noaccum = false, value)
                        : callback(accumulator, value, index, collection)
                });
            }
            return accumulator;
        }

        /**
         * This method is like `_.reduce` except that it iterates over elements
         * of a `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @alias foldr
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {*} [accumulator] Initial value of the accumulator.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the accumulated value.
         * @example
         *
         * var list = [[0, 1], [2, 3], [4, 5]];
         * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
         * // => [4, 5, 2, 3, 0, 1]
         */
        function reduceRight(collection, callback, accumulator, thisArg) {
            var noaccum = arguments.length < 3;
            callback = lodash.createCallback(callback, thisArg, 4);
            forEachRight(collection, function(value, index, collection) {
                accumulator = noaccum
                    ? (noaccum = false, value)
                    : callback(accumulator, value, index, collection);
            });
            return accumulator;
        }

        /**
         * The opposite of `_.filter` this method returns the elements of a
         * collection that the callback does **not** return truey for.
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of elements that failed the callback check.
         * @example
         *
         * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
         * // => [1, 3, 5]
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36, 'blocked': false },
         *   { 'name': 'fred',   'age': 40, 'blocked': true }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.reject(characters, 'blocked');
         * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
         *
         * // using "_.where" callback shorthand
         * _.reject(characters, { 'age': 36 });
         * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
         */
        function reject(collection, callback, thisArg) {
            callback = lodash.createCallback(callback, thisArg, 3);
            return filter(collection, function(value, index, collection) {
                return !callback(value, index, collection);
            });
        }

        /**
         * Retrieves a random element or `n` random elements from a collection.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to sample.
         * @param {number} [n] The number of elements to sample.
         * @param- {Object} [guard] Allows working with functions like `_.map`
         *  without using their `index` arguments as `n`.
         * @returns {Array} Returns the random sample(s) of `collection`.
         * @example
         *
         * _.sample([1, 2, 3, 4]);
         * // => 2
         *
         * _.sample([1, 2, 3, 4], 2);
         * // => [3, 1]
         */
        function sample(collection, n, guard) {
            if (collection && typeof collection.length != 'number') {
                collection = values(collection);
            }
            if (n == null || guard) {
                return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
            }
            var result = shuffle(collection);
            result.length = nativeMin(nativeMax(0, n), result.length);
            return result;
        }

        /**
         * Creates an array of shuffled values, using a version of the Fisher-Yates
         * shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to shuffle.
         * @returns {Array} Returns a new shuffled collection.
         * @example
         *
         * _.shuffle([1, 2, 3, 4, 5, 6]);
         * // => [4, 1, 6, 3, 5, 2]
         */
        function shuffle(collection) {
            var index = -1,
                length = collection ? collection.length : 0,
                result = Array(typeof length == 'number' ? length : 0);

            forEach(collection, function(value) {
                var rand = baseRandom(0, ++index);
                result[index] = result[rand];
                result[rand] = value;
            });
            return result;
        }

        /**
         * Gets the size of the `collection` by returning `collection.length` for arrays
         * and array-like objects or the number of own enumerable properties for objects.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to inspect.
         * @returns {number} Returns `collection.length` or number of own enumerable properties.
         * @example
         *
         * _.size([1, 2]);
         * // => 2
         *
         * _.size({ 'one': 1, 'two': 2, 'three': 3 });
         * // => 3
         *
         * _.size('pebbles');
         * // => 7
         */
        function size(collection) {
            var length = collection ? collection.length : 0;
            return typeof length == 'number' ? length : keys(collection).length;
        }

        /**
         * Checks if the callback returns a truey value for **any** element of a
         * collection. The function returns as soon as it finds a passing value and
         * does not iterate over the entire collection. The callback is bound to
         * `thisArg` and invoked with three arguments; (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias any
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {boolean} Returns `true` if any element passed the callback check,
         *  else `false`.
         * @example
         *
         * _.some([null, 0, 'yes', false], Boolean);
         * // => true
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36, 'blocked': false },
         *   { 'name': 'fred',   'age': 40, 'blocked': true }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.some(characters, 'blocked');
         * // => true
         *
         * // using "_.where" callback shorthand
         * _.some(characters, { 'age': 1 });
         * // => false
         */
        function some(collection, callback, thisArg) {
            var result;
            callback = lodash.createCallback(callback, thisArg, 3);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    if ((result = callback(collection[index], index, collection))) {
                        break;
                    }
                }
            } else {
                forOwn(collection, function(value, index, collection) {
                    return !(result = callback(value, index, collection));
                });
            }
            return !!result;
        }

        /**
         * Creates an array of elements, sorted in ascending order by the results of
         * running each element in a collection through the callback. This method
         * performs a stable sort, that is, it will preserve the original sort order
         * of equal elements. The callback is bound to `thisArg` and invoked with
         * three arguments; (value, index|key, collection).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an array of property names is provided for `callback` the collection
         * will be sorted by each property value.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Array|Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of sorted elements.
         * @example
         *
         * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
         * // => [3, 1, 2]
         *
         * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
         * // => [3, 1, 2]
         *
         * var characters = [
         *   { 'name': 'barney',  'age': 36 },
         *   { 'name': 'fred',    'age': 40 },
         *   { 'name': 'barney',  'age': 26 },
         *   { 'name': 'fred',    'age': 30 }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.map(_.sortBy(characters, 'age'), _.values);
         * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
         *
         * // sorting by multiple properties
         * _.map(_.sortBy(characters, ['name', 'age']), _.values);
         * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
         */
        function sortBy(collection, callback, thisArg) {
            var index = -1,
                isArr = isArray(callback),
                length = collection ? collection.length : 0,
                result = Array(typeof length == 'number' ? length : 0);

            if (!isArr) {
                callback = lodash.createCallback(callback, thisArg, 3);
            }
            forEach(collection, function(value, key, collection) {
                var object = result[++index] = getObject();
                if (isArr) {
                    object.criteria = map(callback, function(key) { return value[key]; });
                } else {
                    (object.criteria = getArray())[0] = callback(value, key, collection);
                }
                object.index = index;
                object.value = value;
            });

            length = result.length;
            result.sort(compareAscending);
            while (length--) {
                var object = result[length];
                result[length] = object.value;
                if (!isArr) {
                    releaseArray(object.criteria);
                }
                releaseObject(object);
            }
            return result;
        }

        /**
         * Converts the `collection` to an array.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|string} collection The collection to convert.
         * @returns {Array} Returns the new converted array.
         * @example
         *
         * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
         * // => [2, 3, 4]
         */
        function toArray(collection) {
            if (collection && typeof collection.length == 'number') {
                return slice(collection);
            }
            return values(collection);
        }

        /**
         * Performs a deep comparison of each element in a `collection` to the given
         * `properties` object, returning an array of all elements that have equivalent
         * property values.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Collections
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Object} props The object of property values to filter by.
         * @returns {Array} Returns a new array of elements that have the given properties.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
         *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
         * ];
         *
         * _.where(characters, { 'age': 36 });
         * // => [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
         *
         * _.where(characters, { 'pets': ['dino'] });
         * // => [{ 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }]
         */
        var where = filter;

        /*--------------------------------------------------------------------------*/

        /**
         * Creates an array with all falsey values removed. The values `false`, `null`,
         * `0`, `""`, `undefined`, and `NaN` are all falsey.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to compact.
         * @returns {Array} Returns a new array of filtered values.
         * @example
         *
         * _.compact([0, 1, false, 2, '', 3]);
         * // => [1, 2, 3]
         */
        function compact(array) {
            var index = -1,
                length = array ? array.length : 0,
                result = [];

            while (++index < length) {
                var value = array[index];
                if (value) {
                    result.push(value);
                }
            }
            return result;
        }

        /**
         * Creates an array excluding all values of the provided arrays using strict
         * equality for comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to process.
         * @param {...Array} [values] The arrays of values to exclude.
         * @returns {Array} Returns a new array of filtered values.
         * @example
         *
         * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
         * // => [1, 3, 4]
         */
        function difference(array) {
            return baseDifference(array, baseFlatten(arguments, true, true, 1));
        }

        /**
         * This method is like `_.find` except that it returns the index of the first
         * element that passes the callback check, instead of the element itself.
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to search.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {number} Returns the index of the found element, else `-1`.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney',  'age': 36, 'blocked': false },
         *   { 'name': 'fred',    'age': 40, 'blocked': true },
         *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
         * ];
         *
         * _.findIndex(characters, function(chr) {
     *   return chr.age < 20;
     * });
         * // => 2
         *
         * // using "_.where" callback shorthand
         * _.findIndex(characters, { 'age': 36 });
         * // => 0
         *
         * // using "_.pluck" callback shorthand
         * _.findIndex(characters, 'blocked');
         * // => 1
         */
        function findIndex(array, callback, thisArg) {
            var index = -1,
                length = array ? array.length : 0;

            callback = lodash.createCallback(callback, thisArg, 3);
            while (++index < length) {
                if (callback(array[index], index, array)) {
                    return index;
                }
            }
            return -1;
        }

        /**
         * This method is like `_.findIndex` except that it iterates over elements
         * of a `collection` from right to left.
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to search.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {number} Returns the index of the found element, else `-1`.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney',  'age': 36, 'blocked': true },
         *   { 'name': 'fred',    'age': 40, 'blocked': false },
         *   { 'name': 'pebbles', 'age': 1,  'blocked': true }
         * ];
         *
         * _.findLastIndex(characters, function(chr) {
     *   return chr.age > 30;
     * });
         * // => 1
         *
         * // using "_.where" callback shorthand
         * _.findLastIndex(characters, { 'age': 36 });
         * // => 0
         *
         * // using "_.pluck" callback shorthand
         * _.findLastIndex(characters, 'blocked');
         * // => 2
         */
        function findLastIndex(array, callback, thisArg) {
            var length = array ? array.length : 0;
            callback = lodash.createCallback(callback, thisArg, 3);
            while (length--) {
                if (callback(array[length], length, array)) {
                    return length;
                }
            }
            return -1;
        }

        /**
         * Gets the first element or first `n` elements of an array. If a callback
         * is provided elements at the beginning of the array are returned as long
         * as the callback returns truey. The callback is bound to `thisArg` and
         * invoked with three arguments; (value, index, array).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias head, take
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|number|string} [callback] The function called
         *  per element or the number of elements to return. If a property name or
         *  object is provided it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the first element(s) of `array`.
         * @example
         *
         * _.first([1, 2, 3]);
         * // => 1
         *
         * _.first([1, 2, 3], 2);
         * // => [1, 2]
         *
         * _.first([1, 2, 3], function(num) {
     *   return num < 3;
     * });
         * // => [1, 2]
         *
         * var characters = [
         *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
         *   { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
         *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.first(characters, 'blocked');
         * // => [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]
         *
         * // using "_.where" callback shorthand
         * _.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
         * // => ['barney', 'fred']
         */
        function first(array, callback, thisArg) {
            var n = 0,
                length = array ? array.length : 0;

            if (typeof callback != 'number' && callback != null) {
                var index = -1;
                callback = lodash.createCallback(callback, thisArg, 3);
                while (++index < length && callback(array[index], index, array)) {
                    n++;
                }
            } else {
                n = callback;
                if (n == null || thisArg) {
                    return array ? array[0] : undefined;
                }
            }
            return slice(array, 0, nativeMin(nativeMax(0, n), length));
        }

        /**
         * Flattens a nested array (the nesting can be to any depth). If `isShallow`
         * is truey, the array will only be flattened a single level. If a callback
         * is provided each element of the array is passed through the callback before
         * flattening. The callback is bound to `thisArg` and invoked with three
         * arguments; (value, index, array).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to flatten.
         * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new flattened array.
         * @example
         *
         * _.flatten([1, [2], [3, [[4]]]]);
         * // => [1, 2, 3, 4];
         *
         * _.flatten([1, [2], [3, [[4]]]], true);
         * // => [1, 2, 3, [[4]]];
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
         *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.flatten(characters, 'pets');
         * // => ['hoppy', 'baby puss', 'dino']
         */
        function flatten(array, isShallow, callback, thisArg) {
            // juggle arguments
            if (typeof isShallow != 'boolean' && isShallow != null) {
                thisArg = callback;
                callback = (typeof isShallow != 'function' && thisArg && thisArg[isShallow] === array) ? null : isShallow;
                isShallow = false;
            }
            if (callback != null) {
                array = map(array, callback, thisArg);
            }
            return baseFlatten(array, isShallow);
        }

        /**
         * Gets the index at which the first occurrence of `value` is found using
         * strict equality for comparisons, i.e. `===`. If the array is already sorted
         * providing `true` for `fromIndex` will run a faster binary search.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to search.
         * @param {*} value The value to search for.
         * @param {boolean|number} [fromIndex=0] The index to search from or `true`
         *  to perform a binary search on a sorted array.
         * @returns {number} Returns the index of the matched value or `-1`.
         * @example
         *
         * _.indexOf([1, 2, 3, 1, 2, 3], 2);
         * // => 1
         *
         * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
         * // => 4
         *
         * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
         * // => 2
         */
        function indexOf(array, value, fromIndex) {
            if (typeof fromIndex == 'number') {
                var length = array ? array.length : 0;
                fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
            } else if (fromIndex) {
                var index = sortedIndex(array, value);
                return array[index] === value ? index : -1;
            }
            return baseIndexOf(array, value, fromIndex);
        }

        /**
         * Gets all but the last element or last `n` elements of an array. If a
         * callback is provided elements at the end of the array are excluded from
         * the result as long as the callback returns truey. The callback is bound
         * to `thisArg` and invoked with three arguments; (value, index, array).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|number|string} [callback=1] The function called
         *  per element or the number of elements to exclude. If a property name or
         *  object is provided it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a slice of `array`.
         * @example
         *
         * _.initial([1, 2, 3]);
         * // => [1, 2]
         *
         * _.initial([1, 2, 3], 2);
         * // => [1]
         *
         * _.initial([1, 2, 3], function(num) {
     *   return num > 1;
     * });
         * // => [1]
         *
         * var characters = [
         *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
         *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
         *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.initial(characters, 'blocked');
         * // => [{ 'name': 'barney',  'blocked': false, 'employer': 'slate' }]
         *
         * // using "_.where" callback shorthand
         * _.pluck(_.initial(characters, { 'employer': 'na' }), 'name');
         * // => ['barney', 'fred']
         */
        function initial(array, callback, thisArg) {
            var n = 0,
                length = array ? array.length : 0;

            if (typeof callback != 'number' && callback != null) {
                var index = length;
                callback = lodash.createCallback(callback, thisArg, 3);
                while (index-- && callback(array[index], index, array)) {
                    n++;
                }
            } else {
                n = (callback == null || thisArg) ? 1 : callback || n;
            }
            return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
        }

        /**
         * Creates an array of unique values present in all provided arrays using
         * strict equality for comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {...Array} [array] The arrays to inspect.
         * @returns {Array} Returns an array of shared values.
         * @example
         *
         * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
         * // => [1, 2]
         */
        function intersection() {
            var args = [],
                argsIndex = -1,
                argsLength = arguments.length,
                caches = getArray(),
                indexOf = getIndexOf(),
                trustIndexOf = indexOf === baseIndexOf,
                seen = getArray();

            while (++argsIndex < argsLength) {
                var value = arguments[argsIndex];
                if (isArray(value) || isArguments(value)) {
                    args.push(value);
                    caches.push(trustIndexOf && value.length >= largeArraySize &&
                    createCache(argsIndex ? args[argsIndex] : seen));
                }
            }
            var array = args[0],
                index = -1,
                length = array ? array.length : 0,
                result = [];

            outer:
                while (++index < length) {
                    var cache = caches[0];
                    value = array[index];

                    if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
                        argsIndex = argsLength;
                        (cache || seen).push(value);
                        while (--argsIndex) {
                            cache = caches[argsIndex];
                            if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
                                continue outer;
                            }
                        }
                        result.push(value);
                    }
                }
            while (argsLength--) {
                cache = caches[argsLength];
                if (cache) {
                    releaseObject(cache);
                }
            }
            releaseArray(caches);
            releaseArray(seen);
            return result;
        }

        /**
         * Gets the last element or last `n` elements of an array. If a callback is
         * provided elements at the end of the array are returned as long as the
         * callback returns truey. The callback is bound to `thisArg` and invoked
         * with three arguments; (value, index, array).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|number|string} [callback] The function called
         *  per element or the number of elements to return. If a property name or
         *  object is provided it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {*} Returns the last element(s) of `array`.
         * @example
         *
         * _.last([1, 2, 3]);
         * // => 3
         *
         * _.last([1, 2, 3], 2);
         * // => [2, 3]
         *
         * _.last([1, 2, 3], function(num) {
     *   return num > 1;
     * });
         * // => [2, 3]
         *
         * var characters = [
         *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
         *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
         *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.pluck(_.last(characters, 'blocked'), 'name');
         * // => ['fred', 'pebbles']
         *
         * // using "_.where" callback shorthand
         * _.last(characters, { 'employer': 'na' });
         * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
         */
        function last(array, callback, thisArg) {
            var n = 0,
                length = array ? array.length : 0;

            if (typeof callback != 'number' && callback != null) {
                var index = length;
                callback = lodash.createCallback(callback, thisArg, 3);
                while (index-- && callback(array[index], index, array)) {
                    n++;
                }
            } else {
                n = callback;
                if (n == null || thisArg) {
                    return array ? array[length - 1] : undefined;
                }
            }
            return slice(array, nativeMax(0, length - n));
        }

        /**
         * Gets the index at which the last occurrence of `value` is found using strict
         * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
         * as the offset from the end of the collection.
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to search.
         * @param {*} value The value to search for.
         * @param {number} [fromIndex=array.length-1] The index to search from.
         * @returns {number} Returns the index of the matched value or `-1`.
         * @example
         *
         * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
         * // => 4
         *
         * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
         * // => 1
         */
        function lastIndexOf(array, value, fromIndex) {
            var index = array ? array.length : 0;
            if (typeof fromIndex == 'number') {
                index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
            }
            while (index--) {
                if (array[index] === value) {
                    return index;
                }
            }
            return -1;
        }

        /**
         * Removes all provided values from the given array using strict equality for
         * comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to modify.
         * @param {...*} [value] The values to remove.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         * _.pull(array, 2, 3);
         * console.log(array);
         * // => [1, 1]
         */
        function pull(array) {
            var args = arguments,
                argsIndex = 0,
                argsLength = args.length,
                length = array ? array.length : 0;

            while (++argsIndex < argsLength) {
                var index = -1,
                    value = args[argsIndex];
                while (++index < length) {
                    if (array[index] === value) {
                        splice.call(array, index--, 1);
                        length--;
                    }
                }
            }
            return array;
        }

        /**
         * Creates an array of numbers (positive and/or negative) progressing from
         * `start` up to but not including `end`. If `start` is less than `stop` a
         * zero-length range is created unless a negative `step` is specified.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {number} [start=0] The start of the range.
         * @param {number} end The end of the range.
         * @param {number} [step=1] The value to increment or decrement by.
         * @returns {Array} Returns a new range array.
         * @example
         *
         * _.range(4);
         * // => [0, 1, 2, 3]
         *
         * _.range(1, 5);
         * // => [1, 2, 3, 4]
         *
         * _.range(0, 20, 5);
         * // => [0, 5, 10, 15]
         *
         * _.range(0, -4, -1);
         * // => [0, -1, -2, -3]
         *
         * _.range(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.range(0);
         * // => []
         */
        function range(start, end, step) {
            start = +start || 0;
            step = typeof step == 'number' ? step : (+step || 1);

            if (end == null) {
                end = start;
                start = 0;
            }
            // use `Array(length)` so engines like Chakra and V8 avoid slower modes
            // http://youtu.be/XAqIpGU8ZZk#t=17m25s
            var index = -1,
                length = nativeMax(0, ceil((end - start) / (step || 1))),
                result = Array(length);

            while (++index < length) {
                result[index] = start;
                start += step;
            }
            return result;
        }

        /**
         * Removes all elements from an array that the callback returns truey for
         * and returns an array of removed elements. The callback is bound to `thisArg`
         * and invoked with three arguments; (value, index, array).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to modify.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of removed elements.
         * @example
         *
         * var array = [1, 2, 3, 4, 5, 6];
         * var evens = _.remove(array, function(num) { return num % 2 == 0; });
         *
         * console.log(array);
         * // => [1, 3, 5]
         *
         * console.log(evens);
         * // => [2, 4, 6]
         */
        function remove(array, callback, thisArg) {
            var index = -1,
                length = array ? array.length : 0,
                result = [];

            callback = lodash.createCallback(callback, thisArg, 3);
            while (++index < length) {
                var value = array[index];
                if (callback(value, index, array)) {
                    result.push(value);
                    splice.call(array, index--, 1);
                    length--;
                }
            }
            return result;
        }

        /**
         * The opposite of `_.initial` this method gets all but the first element or
         * first `n` elements of an array. If a callback function is provided elements
         * at the beginning of the array are excluded from the result as long as the
         * callback returns truey. The callback is bound to `thisArg` and invoked
         * with three arguments; (value, index, array).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias drop, tail
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|number|string} [callback=1] The function called
         *  per element or the number of elements to exclude. If a property name or
         *  object is provided it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a slice of `array`.
         * @example
         *
         * _.rest([1, 2, 3]);
         * // => [2, 3]
         *
         * _.rest([1, 2, 3], 2);
         * // => [3]
         *
         * _.rest([1, 2, 3], function(num) {
     *   return num < 3;
     * });
         * // => [3]
         *
         * var characters = [
         *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
         *   { 'name': 'fred',    'blocked': false,  'employer': 'slate' },
         *   { 'name': 'pebbles', 'blocked': true, 'employer': 'na' }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.pluck(_.rest(characters, 'blocked'), 'name');
         * // => ['fred', 'pebbles']
         *
         * // using "_.where" callback shorthand
         * _.rest(characters, { 'employer': 'slate' });
         * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
         */
        function rest(array, callback, thisArg) {
            if (typeof callback != 'number' && callback != null) {
                var n = 0,
                    index = -1,
                    length = array ? array.length : 0;

                callback = lodash.createCallback(callback, thisArg, 3);
                while (++index < length && callback(array[index], index, array)) {
                    n++;
                }
            } else {
                n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
            }
            return slice(array, n);
        }

        /**
         * Uses a binary search to determine the smallest index at which a value
         * should be inserted into a given sorted array in order to maintain the sort
         * order of the array. If a callback is provided it will be executed for
         * `value` and each element of `array` to compute their sort ranking. The
         * callback is bound to `thisArg` and invoked with one argument; (value).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         * @example
         *
         * _.sortedIndex([20, 30, 50], 40);
         * // => 2
         *
         * // using "_.pluck" callback shorthand
         * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
         * // => 2
         *
         * var dict = {
     *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
     * };
         *
         * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return dict.wordToNumber[word];
     * });
         * // => 2
         *
         * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return this.wordToNumber[word];
     * }, dict);
         * // => 2
         */
        function sortedIndex(array, value, callback, thisArg) {
            var low = 0,
                high = array ? array.length : low;

            // explicitly reference `identity` for better inlining in Firefox
            callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
            value = callback(value);

            while (low < high) {
                var mid = (low + high) >>> 1;
                (callback(array[mid]) < value)
                    ? low = mid + 1
                    : high = mid;
            }
            return low;
        }

        /**
         * Creates an array of unique values, in order, of the provided arrays using
         * strict equality for comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {...Array} [array] The arrays to inspect.
         * @returns {Array} Returns an array of combined values.
         * @example
         *
         * _.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
         * // => [1, 2, 3, 5, 4]
         */
        function union() {
            return baseUniq(baseFlatten(arguments, true, true));
        }

        /**
         * Creates a duplicate-value-free version of an array using strict equality
         * for comparisons, i.e. `===`. If the array is sorted, providing
         * `true` for `isSorted` will use a faster algorithm. If a callback is provided
         * each element of `array` is passed through the callback before uniqueness
         * is computed. The callback is bound to `thisArg` and invoked with three
         * arguments; (value, index, array).
         *
         * If a property name is provided for `callback` the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is provided for `callback` the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias unique
         * @category Arrays
         * @param {Array} array The array to process.
         * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
         * @param {Function|Object|string} [callback=identity] The function called
         *  per iteration. If a property name or object is provided it will be used
         *  to create a "_.pluck" or "_.where" style callback, respectively.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a duplicate-value-free array.
         * @example
         *
         * _.uniq([1, 2, 1, 3, 1]);
         * // => [1, 2, 3]
         *
         * _.uniq([1, 1, 2, 2, 3], true);
         * // => [1, 2, 3]
         *
         * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
         * // => ['A', 'b', 'C']
         *
         * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
         * // => [1, 2.5, 3]
         *
         * // using "_.pluck" callback shorthand
         * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        function uniq(array, isSorted, callback, thisArg) {
            // juggle arguments
            if (typeof isSorted != 'boolean' && isSorted != null) {
                thisArg = callback;
                callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
                isSorted = false;
            }
            if (callback != null) {
                callback = lodash.createCallback(callback, thisArg, 3);
            }
            return baseUniq(array, isSorted, callback);
        }

        /**
         * Creates an array excluding all provided values using strict equality for
         * comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to filter.
         * @param {...*} [value] The values to exclude.
         * @returns {Array} Returns a new array of filtered values.
         * @example
         *
         * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
         * // => [2, 3, 4]
         */
        function without(array) {
            return baseDifference(array, slice(arguments, 1));
        }

        /**
         * Creates an array that is the symmetric difference of the provided arrays.
         * See http://en.wikipedia.org/wiki/Symmetric_difference.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {...Array} [array] The arrays to inspect.
         * @returns {Array} Returns an array of values.
         * @example
         *
         * _.xor([1, 2, 3], [5, 2, 1, 4]);
         * // => [3, 5, 4]
         *
         * _.xor([1, 2, 5], [2, 3, 5], [3, 4, 5]);
         * // => [1, 4, 5]
         */
        function xor() {
            var index = -1,
                length = arguments.length;

            while (++index < length) {
                var array = arguments[index];
                if (isArray(array) || isArguments(array)) {
                    var result = result
                        ? baseUniq(baseDifference(result, array).concat(baseDifference(array, result)))
                        : array;
                }
            }
            return result || [];
        }

        /**
         * Creates an array of grouped elements, the first of which contains the first
         * elements of the given arrays, the second of which contains the second
         * elements of the given arrays, and so on.
         *
         * @static
         * @memberOf _
         * @alias unzip
         * @category Arrays
         * @param {...Array} [array] Arrays to process.
         * @returns {Array} Returns a new array of grouped elements.
         * @example
         *
         * _.zip(['fred', 'barney'], [30, 40], [true, false]);
         * // => [['fred', 30, true], ['barney', 40, false]]
         */
        function zip() {
            var array = arguments.length > 1 ? arguments : arguments[0],
                index = -1,
                length = array ? max(pluck(array, 'length')) : 0,
                result = Array(length < 0 ? 0 : length);

            while (++index < length) {
                result[index] = pluck(array, index);
            }
            return result;
        }

        /**
         * Creates an object composed from arrays of `keys` and `values`. Provide
         * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
         * or two arrays, one of `keys` and one of corresponding `values`.
         *
         * @static
         * @memberOf _
         * @alias object
         * @category Arrays
         * @param {Array} keys The array of keys.
         * @param {Array} [values=[]] The array of values.
         * @returns {Object} Returns an object composed of the given keys and
         *  corresponding values.
         * @example
         *
         * _.zipObject(['fred', 'barney'], [30, 40]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        function zipObject(keys, values) {
            var index = -1,
                length = keys ? keys.length : 0,
                result = {};

            if (!values && length && !isArray(keys[0])) {
                values = [];
            }
            while (++index < length) {
                var key = keys[index];
                if (values) {
                    result[key] = values[index];
                } else if (key) {
                    result[key[0]] = key[1];
                }
            }
            return result;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a function that executes `func`, with  the `this` binding and
         * arguments of the created function, only after being called `n` times.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {number} n The number of times the function must be called before
         *  `func` is executed.
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var saves = ['profile', 'settings'];
         *
         * var done = _.after(saves.length, function() {
     *   console.log('Done saving!');
     * });
         *
         * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
         * // => logs 'Done saving!', after all saves have completed
         */
        function after(n, func) {
            if (!isFunction(func)) {
                throw new TypeError;
            }
            return function() {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        }

        /**
         * Creates a function that, when called, invokes `func` with the `this`
         * binding of `thisArg` and prepends any additional `bind` arguments to those
         * provided to the bound function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to bind.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {...*} [arg] Arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * var func = function(greeting) {
     *   return greeting + ' ' + this.name;
     * };
         *
         * func = _.bind(func, { 'name': 'fred' }, 'hi');
         * func();
         * // => 'hi fred'
         */
        function bind(func, thisArg) {
            return arguments.length > 2
                ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
                : createWrapper(func, 1, null, null, thisArg);
        }

        /**
         * Binds methods of an object to the object itself, overwriting the existing
         * method. Method names may be specified as individual arguments or as arrays
         * of method names. If no method names are provided all the function properties
         * of `object` will be bound.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Object} object The object to bind and assign the bound methods to.
         * @param {...string} [methodName] The object method names to
         *  bind, specified as individual method names or arrays of method names.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var view = {
     *   'label': 'docs',
     *   'onClick': function() { console.log('clicked ' + this.label); }
     * };
         *
         * _.bindAll(view);
         * jQuery('#docs').on('click', view.onClick);
         * // => logs 'clicked docs', when the button is clicked
         */
        function bindAll(object) {
            var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
                index = -1,
                length = funcs.length;

            while (++index < length) {
                var key = funcs[index];
                object[key] = createWrapper(object[key], 1, null, null, object);
            }
            return object;
        }

        /**
         * Creates a function that, when called, invokes the method at `object[key]`
         * and prepends any additional `bindKey` arguments to those provided to the bound
         * function. This method differs from `_.bind` by allowing bound functions to
         * reference methods that will be redefined or don't yet exist.
         * See http://michaux.ca/articles/lazy-function-definition-pattern.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Object} object The object the method belongs to.
         * @param {string} key The key of the method.
         * @param {...*} [arg] Arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * var object = {
     *   'name': 'fred',
     *   'greet': function(greeting) {
     *     return greeting + ' ' + this.name;
     *   }
     * };
         *
         * var func = _.bindKey(object, 'greet', 'hi');
         * func();
         * // => 'hi fred'
         *
         * object.greet = function(greeting) {
     *   return greeting + 'ya ' + this.name + '!';
     * };
         *
         * func();
         * // => 'hiya fred!'
         */
        function bindKey(object, key) {
            return arguments.length > 2
                ? createWrapper(key, 19, slice(arguments, 2), null, object)
                : createWrapper(key, 3, null, null, object);
        }

        /**
         * Creates a function that is the composition of the provided functions,
         * where each function consumes the return value of the function that follows.
         * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
         * Each function is executed with the `this` binding of the composed function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {...Function} [func] Functions to compose.
         * @returns {Function} Returns the new composed function.
         * @example
         *
         * var realNameMap = {
     *   'pebbles': 'penelope'
     * };
         *
         * var format = function(name) {
     *   name = realNameMap[name.toLowerCase()] || name;
     *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
     * };
         *
         * var greet = function(formatted) {
     *   return 'Hiya ' + formatted + '!';
     * };
         *
         * var welcome = _.compose(greet, format);
         * welcome('pebbles');
         * // => 'Hiya Penelope!'
         */
        function compose() {
            var funcs = arguments,
                length = funcs.length;

            while (length--) {
                if (!isFunction(funcs[length])) {
                    throw new TypeError;
                }
            }
            return function() {
                var args = arguments,
                    length = funcs.length;

                while (length--) {
                    args = [funcs[length].apply(this, args)];
                }
                return args[0];
            };
        }

        /**
         * Creates a function which accepts one or more arguments of `func` that when
         * invoked either executes `func` returning its result, if all `func` arguments
         * have been provided, or returns a function that accepts one or more of the
         * remaining `func` arguments, and so on. The arity of `func` can be specified
         * if `func.length` is not sufficient.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to curry.
         * @param {number} [arity=func.length] The arity of `func`.
         * @returns {Function} Returns the new curried function.
         * @example
         *
         * var curried = _.curry(function(a, b, c) {
     *   console.log(a + b + c);
     * });
         *
         * curried(1)(2)(3);
         * // => 6
         *
         * curried(1, 2)(3);
         * // => 6
         *
         * curried(1, 2, 3);
         * // => 6
         */
        function curry(func, arity) {
            arity = typeof arity == 'number' ? arity : (+arity || func.length);
            return createWrapper(func, 4, null, null, null, arity);
        }

        /**
         * Creates a function that will delay the execution of `func` until after
         * `wait` milliseconds have elapsed since the last time it was invoked.
         * Provide an options object to indicate that `func` should be invoked on
         * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
         * to the debounced function will return the result of the last `func` call.
         *
         * Note: If `leading` and `trailing` options are `true` `func` will be called
         * on the trailing edge of the timeout only if the the debounced function is
         * invoked more than once during the `wait` timeout.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to debounce.
         * @param {number} wait The number of milliseconds to delay.
         * @param {Object} [options] The options object.
         * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
         * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
         * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
         * @returns {Function} Returns the new debounced function.
         * @example
         *
         * // avoid costly calculations while the window size is in flux
         * var lazyLayout = _.debounce(calculateLayout, 150);
         * jQuery(window).on('resize', lazyLayout);
         *
         * // execute `sendMail` when the click event is fired, debouncing subsequent calls
         * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * });
         *
         * // ensure `batchLog` is executed once after 1 second of debounced calls
         * var source = new EventSource('/stream');
         * source.addEventListener('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }, false);
         */
        function debounce(func, wait, options) {
            var args,
                maxTimeoutId,
                result,
                stamp,
                thisArg,
                timeoutId,
                trailingCall,
                lastCalled = 0,
                maxWait = false,
                trailing = true;

            if (!isFunction(func)) {
                throw new TypeError;
            }
            wait = nativeMax(0, wait) || 0;
            if (options === true) {
                var leading = true;
                trailing = false;
            } else if (isObject(options)) {
                leading = options.leading;
                maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
                trailing = 'trailing' in options ? options.trailing : trailing;
            }
            var delayed = function() {
                var remaining = wait - (now() - stamp);
                if (remaining <= 0) {
                    if (maxTimeoutId) {
                        clearTimeout(maxTimeoutId);
                    }
                    var isCalled = trailingCall;
                    maxTimeoutId = timeoutId = trailingCall = undefined;
                    if (isCalled) {
                        lastCalled = now();
                        result = func.apply(thisArg, args);
                        if (!timeoutId && !maxTimeoutId) {
                            args = thisArg = null;
                        }
                    }
                } else {
                    timeoutId = setTimeout(delayed, remaining);
                }
            };

            var maxDelayed = function() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                maxTimeoutId = timeoutId = trailingCall = undefined;
                if (trailing || (maxWait !== wait)) {
                    lastCalled = now();
                    result = func.apply(thisArg, args);
                    if (!timeoutId && !maxTimeoutId) {
                        args = thisArg = null;
                    }
                }
            };

            return function() {
                args = arguments;
                stamp = now();
                thisArg = this;
                trailingCall = trailing && (timeoutId || !leading);

                if (maxWait === false) {
                    var leadingCall = leading && !timeoutId;
                } else {
                    if (!maxTimeoutId && !leading) {
                        lastCalled = stamp;
                    }
                    var remaining = maxWait - (stamp - lastCalled),
                        isCalled = remaining <= 0;

                    if (isCalled) {
                        if (maxTimeoutId) {
                            maxTimeoutId = clearTimeout(maxTimeoutId);
                        }
                        lastCalled = stamp;
                        result = func.apply(thisArg, args);
                    }
                    else if (!maxTimeoutId) {
                        maxTimeoutId = setTimeout(maxDelayed, remaining);
                    }
                }
                if (isCalled && timeoutId) {
                    timeoutId = clearTimeout(timeoutId);
                }
                else if (!timeoutId && wait !== maxWait) {
                    timeoutId = setTimeout(delayed, wait);
                }
                if (leadingCall) {
                    isCalled = true;
                    result = func.apply(thisArg, args);
                }
                if (isCalled && !timeoutId && !maxTimeoutId) {
                    args = thisArg = null;
                }
                return result;
            };
        }

        /**
         * Defers executing the `func` function until the current call stack has cleared.
         * Additional arguments will be provided to `func` when it is invoked.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to defer.
         * @param {...*} [arg] Arguments to invoke the function with.
         * @returns {number} Returns the timer id.
         * @example
         *
         * _.defer(function(text) { console.log(text); }, 'deferred');
         * // logs 'deferred' after one or more milliseconds
         */
        function defer(func) {
            if (!isFunction(func)) {
                throw new TypeError;
            }
            var args = slice(arguments, 1);
            return setTimeout(function() { func.apply(undefined, args); }, 1);
        }

        /**
         * Executes the `func` function after `wait` milliseconds. Additional arguments
         * will be provided to `func` when it is invoked.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to delay.
         * @param {number} wait The number of milliseconds to delay execution.
         * @param {...*} [arg] Arguments to invoke the function with.
         * @returns {number} Returns the timer id.
         * @example
         *
         * _.delay(function(text) { console.log(text); }, 1000, 'later');
         * // => logs 'later' after one second
         */
        function delay(func, wait) {
            if (!isFunction(func)) {
                throw new TypeError;
            }
            var args = slice(arguments, 2);
            return setTimeout(function() { func.apply(undefined, args); }, wait);
        }

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided it will be used to determine the cache key for storing the result
         * based on the arguments provided to the memoized function. By default, the
         * first argument provided to the memoized function is used as the cache key.
         * The `func` is executed with the `this` binding of the memoized function.
         * The result cache is exposed as the `cache` property on the memoized function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] A function used to resolve the cache key.
         * @returns {Function} Returns the new memoizing function.
         * @example
         *
         * var fibonacci = _.memoize(function(n) {
     *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
     * });
         *
         * fibonacci(9)
         * // => 34
         *
         * var data = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
         *
         * // modifying the result cache
         * var get = _.memoize(function(name) { return data[name]; }, _.identity);
         * get('pebbles');
         * // => { 'name': 'pebbles', 'age': 1 }
         *
         * get.cache.pebbles.name = 'penelope';
         * get('pebbles');
         * // => { 'name': 'penelope', 'age': 1 }
         */
        function memoize(func, resolver) {
            if (!isFunction(func)) {
                throw new TypeError;
            }
            var memoized = function() {
                var cache = memoized.cache,
                    key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];

                return hasOwnProperty.call(cache, key)
                    ? cache[key]
                    : (cache[key] = func.apply(this, arguments));
            }
            memoized.cache = {};
            return memoized;
        }

        /**
         * Creates a function that is restricted to execute `func` once. Repeat calls to
         * the function will return the value of the first call. The `func` is executed
         * with the `this` binding of the created function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var initialize = _.once(createApplication);
         * initialize();
         * initialize();
         * // `initialize` executes `createApplication` once
         */
        function once(func) {
            var ran,
                result;

            if (!isFunction(func)) {
                throw new TypeError;
            }
            return function() {
                if (ran) {
                    return result;
                }
                ran = true;
                result = func.apply(this, arguments);

                // clear the `func` variable so the function may be garbage collected
                func = null;
                return result;
            };
        }

        /**
         * Creates a function that, when called, invokes `func` with any additional
         * `partial` arguments prepended to those provided to the new function. This
         * method is similar to `_.bind` except it does **not** alter the `this` binding.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to partially apply arguments to.
         * @param {...*} [arg] Arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * var greet = function(greeting, name) { return greeting + ' ' + name; };
         * var hi = _.partial(greet, 'hi');
         * hi('fred');
         * // => 'hi fred'
         */
        function partial(func) {
            return createWrapper(func, 16, slice(arguments, 1));
        }

        /**
         * This method is like `_.partial` except that `partial` arguments are
         * appended to those provided to the new function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to partially apply arguments to.
         * @param {...*} [arg] Arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * var defaultsDeep = _.partialRight(_.merge, _.defaults);
         *
         * var options = {
     *   'variable': 'data',
     *   'imports': { 'jq': $ }
     * };
         *
         * defaultsDeep(options, _.templateSettings);
         *
         * options.variable
         * // => 'data'
         *
         * options.imports
         * // => { '_': _, 'jq': $ }
         */
        function partialRight(func) {
            return createWrapper(func, 32, null, slice(arguments, 1));
        }

        /**
         * Creates a function that, when executed, will only call the `func` function
         * at most once per every `wait` milliseconds. Provide an options object to
         * indicate that `func` should be invoked on the leading and/or trailing edge
         * of the `wait` timeout. Subsequent calls to the throttled function will
         * return the result of the last `func` call.
         *
         * Note: If `leading` and `trailing` options are `true` `func` will be called
         * on the trailing edge of the timeout only if the the throttled function is
         * invoked more than once during the `wait` timeout.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to throttle.
         * @param {number} wait The number of milliseconds to throttle executions to.
         * @param {Object} [options] The options object.
         * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
         * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
         * @returns {Function} Returns the new throttled function.
         * @example
         *
         * // avoid excessively updating the position while scrolling
         * var throttled = _.throttle(updatePosition, 100);
         * jQuery(window).on('scroll', throttled);
         *
         * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
         * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
         */
        function throttle(func, wait, options) {
            var leading = true,
                trailing = true;

            if (!isFunction(func)) {
                throw new TypeError;
            }
            if (options === false) {
                leading = false;
            } else if (isObject(options)) {
                leading = 'leading' in options ? options.leading : leading;
                trailing = 'trailing' in options ? options.trailing : trailing;
            }
            debounceOptions.leading = leading;
            debounceOptions.maxWait = wait;
            debounceOptions.trailing = trailing;

            return debounce(func, wait, debounceOptions);
        }

        /**
         * Creates a function that provides `value` to the wrapper function as its
         * first argument. Additional arguments provided to the function are appended
         * to those provided to the wrapper function. The wrapper is executed with
         * the `this` binding of the created function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {*} value The value to wrap.
         * @param {Function} wrapper The wrapper function.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
         *
         * p('Fred, Wilma, & Pebbles');
         * // => '<p>Fred, Wilma, &amp; Pebbles</p>'
         */
        function wrap(value, wrapper) {
            return createWrapper(wrapper, 16, [value]);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a function that returns `value`.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {*} value The value to return from the new function.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var object = { 'name': 'fred' };
         * var getter = _.constant(object);
         * getter() === object;
         * // => true
         */
        function constant(value) {
            return function() {
                return value;
            };
        }

        /**
         * Produces a callback bound to an optional `thisArg`. If `func` is a property
         * name the created callback will return the property value for a given element.
         * If `func` is an object the created callback will return `true` for elements
         * that contain the equivalent object properties, otherwise it will return `false`.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {*} [func=identity] The value to convert to a callback.
         * @param {*} [thisArg] The `this` binding of the created callback.
         * @param {number} [argCount] The number of arguments the callback accepts.
         * @returns {Function} Returns a callback function.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * // wrap to create custom callback shorthands
         * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
     *   return !match ? func(callback, thisArg) : function(object) {
     *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
     *   };
     * });
         *
         * _.filter(characters, 'age__gt38');
         * // => [{ 'name': 'fred', 'age': 40 }]
         */
        function createCallback(func, thisArg, argCount) {
            var type = typeof func;
            if (func == null || type == 'function') {
                return baseCreateCallback(func, thisArg, argCount);
            }
            // handle "_.pluck" style callback shorthands
            if (type != 'object') {
                return property(func);
            }
            var props = keys(func),
                key = props[0],
                a = func[key];

            // handle "_.where" style callback shorthands
            if (props.length == 1 && a === a && !isObject(a)) {
                // fast path the common case of providing an object with a single
                // property containing a primitive value
                return function(object) {
                    var b = object[key];
                    return a === b && (a !== 0 || (1 / a == 1 / b));
                };
            }
            return function(object) {
                var length = props.length,
                    result = false;

                while (length--) {
                    if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
                        break;
                    }
                }
                return result;
            };
        }

        /**
         * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
         * corresponding HTML entities.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {string} string The string to escape.
         * @returns {string} Returns the escaped string.
         * @example
         *
         * _.escape('Fred, Wilma, & Pebbles');
         * // => 'Fred, Wilma, &amp; Pebbles'
         */
        function escape(string) {
            return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
        }

        /**
         * This method returns the first argument provided to it.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'name': 'fred' };
         * _.identity(object) === object;
         * // => true
         */
        function identity(value) {
            return value;
        }

        /**
         * Adds function properties of a source object to the destination object.
         * If `object` is a function methods will be added to its prototype as well.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {Function|Object} [object=lodash] object The destination object.
         * @param {Object} source The object of functions to add.
         * @param {Object} [options] The options object.
         * @param {boolean} [options.chain=true] Specify whether the functions added are chainable.
         * @example
         *
         * function capitalize(string) {
     *   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
     * }
         *
         * _.mixin({ 'capitalize': capitalize });
         * _.capitalize('fred');
         * // => 'Fred'
         *
         * _('fred').capitalize().value();
         * // => 'Fred'
         *
         * _.mixin({ 'capitalize': capitalize }, { 'chain': false });
         * _('fred').capitalize();
         * // => 'Fred'
         */
        function mixin(object, source, options) {
            var chain = true,
                methodNames = source && functions(source);

            if (!source || (!options && !methodNames.length)) {
                if (options == null) {
                    options = source;
                }
                ctor = lodashWrapper;
                source = object;
                object = lodash;
                methodNames = functions(source);
            }
            if (options === false) {
                chain = false;
            } else if (isObject(options) && 'chain' in options) {
                chain = options.chain;
            }
            var ctor = object,
                isFunc = isFunction(ctor);

            forEach(methodNames, function(methodName) {
                var func = object[methodName] = source[methodName];
                if (isFunc) {
                    ctor.prototype[methodName] = function() {
                        var chainAll = this.__chain__,
                            value = this.__wrapped__,
                            args = [value];

                        push.apply(args, arguments);
                        var result = func.apply(object, args);
                        if (chain || chainAll) {
                            if (value === result && isObject(result)) {
                                return this;
                            }
                            result = new ctor(result);
                            result.__chain__ = chainAll;
                        }
                        return result;
                    };
                }
            });
        }

        /**
         * Reverts the '_' variable to its previous value and returns a reference to
         * the `lodash` function.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @returns {Function} Returns the `lodash` function.
         * @example
         *
         * var lodash = _.noConflict();
         */
        function noConflict() {
            context._ = oldDash;
            return this;
        }

        /**
         * A no-operation function.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @example
         *
         * var object = { 'name': 'fred' };
         * _.noop(object) === undefined;
         * // => true
         */
        function noop() {
            // no operation performed
        }

        /**
         * Gets the number of milliseconds that have elapsed since the Unix epoch
         * (1 January 1970 00:00:00 UTC).
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @example
         *
         * var stamp = _.now();
         * _.defer(function() { console.log(_.now() - stamp); });
         * // => logs the number of milliseconds it took for the deferred function to be called
         */
        var now = isNative(now = Date.now) && now || function() {
                return new Date().getTime();
            };

        /**
         * Converts the given value into an integer of the specified radix.
         * If `radix` is `undefined` or `0` a `radix` of `10` is used unless the
         * `value` is a hexadecimal, in which case a `radix` of `16` is used.
         *
         * Note: This method avoids differences in native ES3 and ES5 `parseInt`
         * implementations. See http://es5.github.io/#E.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {string} value The value to parse.
         * @param {number} [radix] The radix used to interpret the value to parse.
         * @returns {number} Returns the new integer value.
         * @example
         *
         * _.parseInt('08');
         * // => 8
         */
        var parseInt = nativeParseInt(whitespace + '08') == 8 ? nativeParseInt : function(value, radix) {
            // Firefox < 21 and Opera < 15 follow the ES3 specified implementation of `parseInt`
            return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, '') : value, radix || 0);
        };

        /**
         * Creates a "_.pluck" style function, which returns the `key` value of a
         * given object.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {string} key The name of the property to retrieve.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var characters = [
         *   { 'name': 'fred',   'age': 40 },
         *   { 'name': 'barney', 'age': 36 }
         * ];
         *
         * var getName = _.property('name');
         *
         * _.map(characters, getName);
         * // => ['barney', 'fred']
         *
         * _.sortBy(characters, getName);
         * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
         */
        function property(key) {
            return function(object) {
                return object[key];
            };
        }

        /**
         * Produces a random number between `min` and `max` (inclusive). If only one
         * argument is provided a number between `0` and the given number will be
         * returned. If `floating` is truey or either `min` or `max` are floats a
         * floating-point number will be returned instead of an integer.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {number} [min=0] The minimum possible value.
         * @param {number} [max=1] The maximum possible value.
         * @param {boolean} [floating=false] Specify returning a floating-point number.
         * @returns {number} Returns a random number.
         * @example
         *
         * _.random(0, 5);
         * // => an integer between 0 and 5
         *
         * _.random(5);
         * // => also an integer between 0 and 5
         *
         * _.random(5, true);
         * // => a floating-point number between 0 and 5
         *
         * _.random(1.2, 5.2);
         * // => a floating-point number between 1.2 and 5.2
         */
        function random(min, max, floating) {
            var noMin = min == null,
                noMax = max == null;

            if (floating == null) {
                if (typeof min == 'boolean' && noMax) {
                    floating = min;
                    min = 1;
                }
                else if (!noMax && typeof max == 'boolean') {
                    floating = max;
                    noMax = true;
                }
            }
            if (noMin && noMax) {
                max = 1;
            }
            min = +min || 0;
            if (noMax) {
                max = min;
                min = 0;
            } else {
                max = +max || 0;
            }
            if (floating || min % 1 || max % 1) {
                var rand = nativeRandom();
                return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand +'').length - 1)))), max);
            }
            return baseRandom(min, max);
        }

        /**
         * Resolves the value of property `key` on `object`. If `key` is a function
         * it will be invoked with the `this` binding of `object` and its result returned,
         * else the property value is returned. If `object` is falsey then `undefined`
         * is returned.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {Object} object The object to inspect.
         * @param {string} key The name of the property to resolve.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = {
     *   'cheese': 'crumpets',
     *   'stuff': function() {
     *     return 'nonsense';
     *   }
     * };
         *
         * _.result(object, 'cheese');
         * // => 'crumpets'
         *
         * _.result(object, 'stuff');
         * // => 'nonsense'
         */
        function result(object, key) {
            if (object) {
                var value = object[key];
                return isFunction(value) ? object[key]() : value;
            }
        }

        /**
         * A micro-templating method that handles arbitrary delimiters, preserves
         * whitespace, and correctly escapes quotes within interpolated code.
         *
         * Note: In the development build, `_.template` utilizes sourceURLs for easier
         * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
         *
         * For more information on precompiling templates see:
         * http://lodash.com/custom-builds
         *
         * For more information on Chrome extension sandboxes see:
         * http://developer.chrome.com/stable/extensions/sandboxingEval.html
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {string} text The template text.
         * @param {Object} data The data object used to populate the text.
         * @param {Object} [options] The options object.
         * @param {RegExp} [options.escape] The "escape" delimiter.
         * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
         * @param {Object} [options.imports] An object to import into the template as local variables.
         * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
         * @param {string} [sourceURL] The sourceURL of the template's compiled source.
         * @param {string} [variable] The data object variable name.
         * @returns {Function|string} Returns a compiled function when no `data` object
         *  is given, else it returns the interpolated text.
         * @example
         *
         * // using the "interpolate" delimiter to create a compiled template
         * var compiled = _.template('hello <%= name %>');
         * compiled({ 'name': 'fred' });
         * // => 'hello fred'
         *
         * // using the "escape" delimiter to escape HTML in data property values
         * _.template('<b><%- value %></b>', { 'value': '<script>' });
         * // => '<b>&lt;script&gt;</b>'
         *
         * // using the "evaluate" delimiter to generate HTML
         * var list = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
         * _.template(list, { 'people': ['fred', 'barney'] });
         * // => '<li>fred</li><li>barney</li>'
         *
         * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
         * _.template('hello ${ name }', { 'name': 'pebbles' });
         * // => 'hello pebbles'
         *
         * // using the internal `print` function in "evaluate" delimiters
         * _.template('<% print("hello " + name); %>!', { 'name': 'barney' });
         * // => 'hello barney!'
         *
         * // using a custom template delimiters
         * _.templateSettings = {
     *   'interpolate': /{{([\s\S]+?)}}/g
     * };
         *
         * _.template('hello {{ name }}!', { 'name': 'mustache' });
         * // => 'hello mustache!'
         *
         * // using the `imports` option to import jQuery
         * var list = '<% jq.each(people, function(name) { %><li><%- name %></li><% }); %>';
         * _.template(list, { 'people': ['fred', 'barney'] }, { 'imports': { 'jq': jQuery } });
         * // => '<li>fred</li><li>barney</li>'
         *
         * // using the `sourceURL` option to specify a custom sourceURL for the template
         * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
         * compiled(data);
         * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
         *
         * // using the `variable` option to ensure a with-statement isn't used in the compiled template
         * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
         * compiled.source;
         * // => function(data) {
     *   var __t, __p = '', __e = _.escape;
     *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
     *   return __p;
     * }
         *
         * // using the `source` property to inline compiled templates for meaningful
         * // line numbers in error messages and a stack trace
         * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
         *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
         * ');
         */
        function template(text, data, options) {
            // based on John Resig's `tmpl` implementation
            // http://ejohn.org/blog/javascript-micro-templating/
            // and Laura Doktorova's doT.js
            // https://github.com/olado/doT
            var settings = lodash.templateSettings;
            text = String(text || '');

            // avoid missing dependencies when `iteratorTemplate` is not defined
            options = defaults({}, options, settings);

            var imports = defaults({}, options.imports, settings.imports),
                importsKeys = keys(imports),
                importsValues = values(imports);

            var isEvaluating,
                index = 0,
                interpolate = options.interpolate || reNoMatch,
                source = "__p += '";

            // compile the regexp to match each delimiter
            var reDelimiters = RegExp(
                (options.escape || reNoMatch).source + '|' +
                interpolate.source + '|' +
                (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
                (options.evaluate || reNoMatch).source + '|$'
                , 'g');

            text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);

                // escape characters that cannot be included in string literals
                source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

                // replace delimiters with snippets
                if (escapeValue) {
                    source += "' +\n__e(" + escapeValue + ") +\n'";
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p += '";
                }
                if (interpolateValue) {
                    source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                }
                index = offset + match.length;

                // the JS engine embedded in Adobe products requires returning the `match`
                // string in order to produce the correct `offset` value
                return match;
            });

            source += "';\n";

            // if `variable` is not specified, wrap a with-statement around the generated
            // code to add the data object to the top of the scope chain
            var variable = options.variable,
                hasVariable = variable;

            if (!hasVariable) {
                variable = 'obj';
                source = 'with (' + variable + ') {\n' + source + '\n}\n';
            }
            // cleanup code by stripping empty strings
            source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
                .replace(reEmptyStringMiddle, '$1')
                .replace(reEmptyStringTrailing, '$1;');

            // frame code as the function body
            source = 'function(' + variable + ') {\n' +
            (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
            "var __t, __p = '', __e = _.escape" +
            (isEvaluating
                ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
                : ';\n'
            ) +
            source +
            'return __p\n}';

            // Use a sourceURL for easier debugging.
            // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
            var sourceURL = '\n/*\n//# sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';

            try {
                var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
            } catch(e) {
                e.source = source;
                throw e;
            }
            if (data) {
                return result(data);
            }
            // provide the compiled function's source by its `toString` method, in
            // supported environments, or the `source` property as a convenience for
            // inlining compiled templates during the build process
            result.source = source;
            return result;
        }

        /**
         * Executes the callback `n` times, returning an array of the results
         * of each callback execution. The callback is bound to `thisArg` and invoked
         * with one argument; (index).
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {number} n The number of times to execute the callback.
         * @param {Function} callback The function called per iteration.
         * @param {*} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns an array of the results of each `callback` execution.
         * @example
         *
         * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
         * // => [3, 6, 4]
         *
         * _.times(3, function(n) { mage.castSpell(n); });
         * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
         *
         * _.times(3, function(n) { this.cast(n); }, mage);
         * // => also calls `mage.castSpell(n)` three times
         */
        function times(n, callback, thisArg) {
            n = (n = +n) > -1 ? n : 0;
            var index = -1,
                result = Array(n);

            callback = baseCreateCallback(callback, thisArg, 1);
            while (++index < n) {
                result[index] = callback(index);
            }
            return result;
        }

        /**
         * The inverse of `_.escape` this method converts the HTML entities
         * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
         * corresponding characters.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {string} string The string to unescape.
         * @returns {string} Returns the unescaped string.
         * @example
         *
         * _.unescape('Fred, Barney &amp; Pebbles');
         * // => 'Fred, Barney & Pebbles'
         */
        function unescape(string) {
            return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
        }

        /**
         * Generates a unique ID. If `prefix` is provided the ID will be appended to it.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {string} [prefix] The value to prefix the ID with.
         * @returns {string} Returns the unique ID.
         * @example
         *
         * _.uniqueId('contact_');
         * // => 'contact_104'
         *
         * _.uniqueId();
         * // => '105'
         */
        function uniqueId(prefix) {
            var id = ++idCounter;
            return String(prefix == null ? '' : prefix) + id;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a `lodash` object that wraps the given value with explicit
         * method chaining enabled.
         *
         * @static
         * @memberOf _
         * @category Chaining
         * @param {*} value The value to wrap.
         * @returns {Object} Returns the wrapper object.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney',  'age': 36 },
         *   { 'name': 'fred',    'age': 40 },
         *   { 'name': 'pebbles', 'age': 1 }
         * ];
         *
         * var youngest = _.chain(characters)
         *     .sortBy('age')
         *     .map(function(chr) { return chr.name + ' is ' + chr.age; })
         *     .first()
         *     .value();
         * // => 'pebbles is 1'
         */
        function chain(value) {
            value = new lodashWrapper(value);
            value.__chain__ = true;
            return value;
        }

        /**
         * Invokes `interceptor` with the `value` as the first argument and then
         * returns `value`. The purpose of this method is to "tap into" a method
         * chain in order to perform operations on intermediate results within
         * the chain.
         *
         * @static
         * @memberOf _
         * @category Chaining
         * @param {*} value The value to provide to `interceptor`.
         * @param {Function} interceptor The function to invoke.
         * @returns {*} Returns `value`.
         * @example
         *
         * _([1, 2, 3, 4])
         *  .tap(function(array) { array.pop(); })
         *  .reverse()
         *  .value();
         * // => [3, 2, 1]
         */
        function tap(value, interceptor) {
            interceptor(value);
            return value;
        }

        /**
         * Enables explicit method chaining on the wrapper object.
         *
         * @name chain
         * @memberOf _
         * @category Chaining
         * @returns {*} Returns the wrapper object.
         * @example
         *
         * var characters = [
         *   { 'name': 'barney', 'age': 36 },
         *   { 'name': 'fred',   'age': 40 }
         * ];
         *
         * // without explicit chaining
         * _(characters).first();
         * // => { 'name': 'barney', 'age': 36 }
         *
         * // with explicit chaining
         * _(characters).chain()
         *   .first()
         *   .pick('age')
         *   .value();
         * // => { 'age': 36 }
         */
        function wrapperChain() {
            this.__chain__ = true;
            return this;
        }

        /**
         * Produces the `toString` result of the wrapped value.
         *
         * @name toString
         * @memberOf _
         * @category Chaining
         * @returns {string} Returns the string result.
         * @example
         *
         * _([1, 2, 3]).toString();
         * // => '1,2,3'
         */
        function wrapperToString() {
            return String(this.__wrapped__);
        }

        /**
         * Extracts the wrapped value.
         *
         * @name valueOf
         * @memberOf _
         * @alias value
         * @category Chaining
         * @returns {*} Returns the wrapped value.
         * @example
         *
         * _([1, 2, 3]).valueOf();
         * // => [1, 2, 3]
         */
        function wrapperValueOf() {
            return this.__wrapped__;
        }

        /*--------------------------------------------------------------------------*/

        // add functions that return wrapped values when chaining
        lodash.after = after;
        lodash.assign = assign;
        lodash.at = at;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.chain = chain;
        lodash.compact = compact;
        lodash.compose = compose;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.createCallback = createCallback;
        lodash.curry = curry;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.filter = filter;
        lodash.flatten = flatten;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.functions = functions;
        lodash.groupBy = groupBy;
        lodash.indexBy = indexBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.invert = invert;
        lodash.invoke = invoke;
        lodash.keys = keys;
        lodash.map = map;
        lodash.mapValues = mapValues;
        lodash.max = max;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.min = min;
        lodash.omit = omit;
        lodash.once = once;
        lodash.pairs = pairs;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.pick = pick;
        lodash.pluck = pluck;
        lodash.property = property;
        lodash.pull = pull;
        lodash.range = range;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.shuffle = shuffle;
        lodash.sortBy = sortBy;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.times = times;
        lodash.toArray = toArray;
        lodash.transform = transform;
        lodash.union = union;
        lodash.uniq = uniq;
        lodash.values = values;
        lodash.where = where;
        lodash.without = without;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.zip = zip;
        lodash.zipObject = zipObject;

        // add aliases
        lodash.collect = map;
        lodash.drop = rest;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.extend = assign;
        lodash.methods = functions;
        lodash.object = zipObject;
        lodash.select = filter;
        lodash.tail = rest;
        lodash.unique = uniq;
        lodash.unzip = zip;

        // add functions to `lodash.prototype`
        mixin(lodash);

        /*--------------------------------------------------------------------------*/

        // add functions that return unwrapped values when chaining
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.contains = contains;
        lodash.escape = escape;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.has = has;
        lodash.identity = identity;
        lodash.indexOf = indexOf;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isBoolean = isBoolean;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isNaN = isNaN;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isString = isString;
        lodash.isUndefined = isUndefined;
        lodash.lastIndexOf = lastIndexOf;
        lodash.mixin = mixin;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.result = result;
        lodash.runInContext = runInContext;
        lodash.size = size;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.template = template;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;

        // add aliases
        lodash.all = every;
        lodash.any = some;
        lodash.detect = find;
        lodash.findWhere = find;
        lodash.foldl = reduce;
        lodash.foldr = reduceRight;
        lodash.include = contains;
        lodash.inject = reduce;

        mixin(function() {
            var source = {}
            forOwn(lodash, function(func, methodName) {
                if (!lodash.prototype[methodName]) {
                    source[methodName] = func;
                }
            });
            return source;
        }(), false);

        /*--------------------------------------------------------------------------*/

        // add functions capable of returning wrapped and unwrapped values when chaining
        lodash.first = first;
        lodash.last = last;
        lodash.sample = sample;

        // add aliases
        lodash.take = first;
        lodash.head = first;

        forOwn(lodash, function(func, methodName) {
            var callbackable = methodName !== 'sample';
            if (!lodash.prototype[methodName]) {
                lodash.prototype[methodName]= function(n, guard) {
                    var chainAll = this.__chain__,
                        result = func(this.__wrapped__, n, guard);

                    return !chainAll && (n == null || (guard && !(callbackable && typeof n == 'function')))
                        ? result
                        : new lodashWrapper(result, chainAll);
                };
            }
        });

        /*--------------------------------------------------------------------------*/

        /**
         * The semantic version number.
         *
         * @static
         * @memberOf _
         * @type string
         */
        lodash.VERSION = '2.4.1';

        // add "Chaining" functions to the wrapper
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.toString = wrapperToString;
        lodash.prototype.value = wrapperValueOf;
        lodash.prototype.valueOf = wrapperValueOf;

        // add `Array` functions that return unwrapped values
        forEach(['join', 'pop', 'shift'], function(methodName) {
            var func = arrayRef[methodName];
            lodash.prototype[methodName] = function() {
                var chainAll = this.__chain__,
                    result = func.apply(this.__wrapped__, arguments);

                return chainAll
                    ? new lodashWrapper(result, chainAll)
                    : result;
            };
        });

        // add `Array` functions that return the existing wrapped value
        forEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
            var func = arrayRef[methodName];
            lodash.prototype[methodName] = function() {
                func.apply(this.__wrapped__, arguments);
                return this;
            };
        });

        // add `Array` functions that return new wrapped values
        forEach(['concat', 'slice', 'splice'], function(methodName) {
            var func = arrayRef[methodName];
            lodash.prototype[methodName] = function() {
                return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
            };
        });

        return lodash;
    }

    /*--------------------------------------------------------------------------*/

    // expose Lo-Dash
    var _ = runInContext();

    // some AMD build optimizers like r.js check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose Lo-Dash to the global object even when an AMD loader is present in
        // case Lo-Dash is loaded with a RequireJS shim config.
        // See http://requirejs.org/docs/api.html#config-shim
        root._ = _;

        // define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module
        define(function() {
            return _;
        });
    }
    // check for `exports` after `define` in case a build optimizer adds an `exports` object
    else if (freeExports && freeModule) {
        // in Node.js or RingoJS
        if (moduleExports) {
            (freeModule.exports = _)._ = _;
        }
        // in Narwhal or Rhino -require
        else {
            freeExports._ = _;
        }
    }
    else {
        // in a browser or Rhino
        root._ = _;
    }
}.call(this));
(function($) { 'use strict';

    var Config = {
        Template: _.template([
            '<div class="account-info row">',
                '<div class="col-xs-4">',
                    '<img src="<%- photo %>">',
                '</div>',
                '<div class="col-xs-8">',
                    '<div class="full-name"><%= fullName %></div>',
                    '<div class="email"><%= email %></div>',
                    '<div class="user-id"><%= userId %></div>',
                    '<div class="description"><%= description %></div>',
                '</div>',
            '</div>',
            '<div class="row actions">',
                '<div class="btn-group btn-group-justified">',
                    '<div class="btn-group">',
                        '<button data-action="change-password" type="button" class="btn btn-default">Change password</button>' +
                    '</div>',
                    '<div class="btn-group">',
                        '<button data-action="sign-out" type="button" class="btn btn-default">Sign out</button>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('')),
        Defaults: {
            container: false,
            template: [
                '<div class="popover account-information">',
                    '<div class="arrow"></div>',
                    '<div class="popover-inner">',
                        //'<button type="button" class="close" aria-hidden="true">&#215;</button>',
                        //'<h3 class="popover-title"></h3>',
                        '<div class="popover-content"><p></p></div>',
                    '</div>',
                '</div>'
            ].join('')
        }
    };

    /**
     * Display a popover with account information
     */
    var AccountPopover = (function() {
        function AccountPopover(o) {
            o = $.extend({}, Config.Defaults, o);
            this.$trigger = o.trigger;
            this.options = o;

            this.wireEventHandlers();
        };

        $.extend(AccountPopover.prototype, {
            wireEventHandlers: function wireEventHandlers() {
                var $trigger = this.$trigger;

                $trigger.on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }).popover({
                    container: this.options.container,
                    content: Config.Template({
                        photo: 'http://www.gravatar.com/avatar/ed08722fea72ddf208e404d92c20b01d',
                        fullName: 'Mathew Mannion',
                        email: 'M.Mannion@warwick.ac.uk',
                        userId: 'u0672089',
                        description: 'Staff, IT Services'
                    }),
                    template: this.options.template,
                    html: true,
                    placement: 'bottom',
                    title: 'Account information',
                    trigger: 'click'
                });

                // Click away to dismiss
                $('html').on('click.popoverDismiss', function(e) {
                    // if clicking anywhere other than the popover itself
                    if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
                        $trigger.popover('hide');
                    }
                });
            }
        });

        return AccountPopover;
    })();

    $.fn.accountPopover = function(o) {
        o = o || {};
        return this.each(attach);
        function attach() {
            var $trigger = $(this), accountPopover;
            accountPopover = new AccountPopover($.extend(o, {
                trigger: $trigger
            }));

            $trigger.data('id7.account-popover', accountPopover);
        };
    };

    $(function() {
        $('[data-toggle="id7:account-popover"]').accountPopover();
    });

})(jQuery);
(function($) { 'use strict';
    var Config = {
        Breadcrumbs: {
            ICON_OPEN: 'active',
            ICON_CLOSED: ''
        },
        ScreenSizes: [
            { name: 'lg', test: function() { return window.matchMedia("(min-width: 1200px)").matches; }, container: 1170 },
            { name: 'md', test: function() { return window.matchMedia("(min-width: 992px)").matches; }, container: 970 },
            { name: 'sm', test: function() { return window.matchMedia("(min-width: 768px)").matches; }, container: 750 },
            { name: 'xs', test: function() { return true; } }
        ],
        Templates: {
            moreContainer: [
                '<ul class="nav navbar-nav navbar-right">',
                    '<li class="dropdown">',
                        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-bars"></i></a>',
                        '<ul class="dropdown-menu" role="menu"></ul>',
                    '</li>',
                '</ul>'
            ].join('')
        },
        Defaults: {
            fixed: true,
            flipBreadcrumbIcons: true,
            fitToWidth: true,
            equaliseHeight: true,
            collapseSmallscreen: false,
            trimLinkTitles: {
                maxLength: 60,
                append: '&hellip;'
            }
        }
    };

    var Navigation = (function() {
        function Navigation(o) {
            o = $.extend({}, Config.Defaults, o);
            this.$container = o.container;

            // Allow trimLinkTitles: true, replace with config options
            if (o.trimLinkTitles && typeof o.trimLinkTitles !== 'object') {
                o.trimLinkTitles = $.extend({}, Config.Defaults.trimLinkTitles);
            }

            this.options = o;

            if (o.trimLinkTitles) this.trimLinkTitles();
            if (o.fixed) this.affix();
            if (o.flipBreadcrumbIcons) this.flipBreadcrumbIcons();

            this.wireEventHandlers();
        }

        $.extend(Navigation.prototype, {
            trimLinkTitles: function trimLinkTitles() {
                var options = this.options.trimLinkTitles;

                this.$container.find('.nav a').filter(function() {
                    return $.trim($(this).text()).length > options.maxLength;
                }).each(function() {
                    var $link = $(this);
                    var linkTitle = $.trim($link.text());

                    // Split on spaces to avoid breaking in the middle of a word
                    var words = linkTitle.split(/\s+/g);
                    var newLinkTitle = [];

                    $.each(words, function(i, word) {
                        var currentLinkTitle = newLinkTitle.join(' ');
                        if ((currentLinkTitle + ' ' + word).length > options.maxLength) {
                            return false; // break
                        }

                        newLinkTitle.push(word);
                    });

                    $link.attr('title', linkTitle).text(newLinkTitle.join(' ')).append(options.append);
                });
            },

            affix: function affix() {
                this.$container.affix({
                    offset: {
                        top: this.$container.offset().top - $('#utility-bar').height()
                    }
                });
            },

            flipBreadcrumbIcons: function flipBreadcrumbIcons() {
                this.$container.find('.navbar-brand[data-target]').each(function() {
                    var $trigger = $(this);
                    var $icon = $trigger.find('.fa').addClass(Config.Breadcrumbs.ICON_CLOSED);

                    var $element = $($trigger.attr('data-target'));

                    $element.on('show.bs.collapse', function() {
                        $icon.removeClass(Config.Breadcrumbs.ICON_CLOSED).addClass(Config.Breadcrumbs.ICON_OPEN);
                    });
                    $element.on('hide.bs.collapse', function() {
                        $icon.removeClass(Config.Breadcrumbs.ICON_OPEN).addClass(Config.Breadcrumbs.ICON_CLOSED);
                    });
                });
            },

            _screenConfig: function screenConfig() {
                return _.find(Config.ScreenSizes, function(screenConfig) { return screenConfig.test(); });
            },

            onScreenResize: function onResize() {
                // Which stop-point are we on?
                var screenConfig = this._screenConfig();

                // Early exit if the width is the same. xs is variable width so can't be clever :(
                if (screenConfig.name !== 'xs' && screenConfig.name === this.lastScreenConfig) return;

                if (this.options.fitToWidth) this.fitToWidth(screenConfig);
                if (this.options.equaliseHeight) this.equaliseHeight(screenConfig);

                this.lastScreenConfig = screenConfig.name;
            },

            fitToWidth: function fitToWidth(screenConfig) {
                var options = this.options;

                this.$container.find('.navbar:not(.navbar-breadcrumbs)').each(function() {
                    var $navbar = $(this);
                    var $nav = $navbar.find('> .nav').first();
                    var $moreContainer = $navbar.find('> .navbar-right');

                    $moreContainer.find('> .dropdown > .dropdown-menu > li').each(function() {
                        var $li = $(this);
                        $nav.append($li);
                    });

                    if ($moreContainer.length == 0) {
                        $moreContainer = $(Config.Templates.moreContainer);
                        $navbar.append($moreContainer);
                    }

                    $moreContainer.hide();

                    if (!options.collapseSmallscreen || screenConfig.name != 'xs') {
                        var isWrapped = function () {
                            return _.some(_.union($nav.find('> li').get(), $navbar.find('> .navbar-right').get()), function (el) {
                                return $(el).position().top > 0;
                            });
                        };

                        if (isWrapped()) {
                            $moreContainer.show();

                            var i = 100; // Infinite loop protection
                            do {
                                // Remove the last element and prepend it to the more container
                                $moreContainer.find('> .dropdown > .dropdown-menu').prepend($nav.find('> li').last().css('height', ''));
                            } while (isWrapped() & --i > 0);
                        }
                    }
                });
            },

            equaliseHeight: function equaliseHeight(screenConfig) {
                var options = this.options;

                this.$container.find('.nav-fixed-width').closest('.navbar').each(function() {
                    var $navbar = $(this);
                    var $nav = $navbar.find('> .nav').first();
                    var $header = $navbar.find('> .navbar-header > .navbar-brand');
                    var $right = $navbar.find('.navbar-right > .dropdown').first();

                    if ($nav.length > 0) {
                        // Convert all the candidates into their height
                        var candidates = _.union($nav.find('> li').get(), $header.get(), $right.get());
                        _.each(candidates, function(candidate) { $(candidate).css('height', ""); });

                        if (!options.collapseSmallscreen || screenConfig.name != 'xs') {
                            var heights = _.map(candidates, function(candidate) { return $(candidate).outerHeight(); });

                            var maxHeight = _.max(heights);

                            _.each(candidates, function(candidate) { $(candidate).css('height', maxHeight + 'px'); });
                        }
                    }
                });
            },

            wireEventHandlers: function wireEventHandlers() {
                if (this.options.fitToWidth || this.options.equaliseHeight) {
                    $('html').on('id7:fonts-loaded', $.proxy(this.onScreenResize, this));

                    // Catch the situation where we're missing the event being fired
                    if ($('html').data('fonts-loaded')) {
                        this.onScreenResize();
                    }

                    $(window).on('resize.id7.navigation.fitToWidth', $.proxy(this.onScreenResize, this));
                }

                this.$container.on('click', '.nav > li', function(e) {
                    var $targetLink = $(e.target).closest('a');
                    if ($targetLink.length > 0) {
                        return; // Let the default handler take it
                    }

                    $targetLink = $(this).find('a').first();
                    if ($targetLink.length > 0) {
                        e.stopPropagation();
                        e.preventDefault();

                        $targetLink[0].click();
                        //window.location = $targetLink.attr('href');

                        return false;
                    }
                });
            }
        });

        return Navigation;
    })();

    $.fn.id7Navigation = function(o) {
        o = o || {};
        return this.each(attach);
        function attach() {
            var $container = $(this), nav;
            nav = new Navigation($.extend(o, {
                container: $container
            }));

            $container.data('id7.navigation', nav);
        };
    };

    $(function() {
        $('#navigation').id7Navigation();
    });
})(jQuery);
(function($) { 'use strict';

    /**
     * Use Twitter typeahead to provide Go.Warwick suggestions on an <input>
     *
     * @see https://twitter.github.io/typeahead.js/
     */
    var SearchSuggest = (function() {
        function SearchSuggest(o) {
            o = o || {};
            var $input = o.input;
            $input.typeahead({
                minLength: o.minLength,
                hint: o.hint
            },{
                name: o.name,
                source: o.source,
                displayKey: o.displayKey,
                templates: o.templates
            });
        };

        return SearchSuggest;
    })();

    $.fn.searchSuggest = function(o) {
        o = o || {};
        return this.each(attach);
        function attach() {
            var $input = $(this), searchSuggest;
            searchSuggest = new SearchSuggest($.extend(o, {
                input: $input
            }));

            $input.data('id7.search-suggest', searchSuggest);
        };
    };

    $(function() {
        $('input[data-suggest="go"]').searchSuggest({
            name: 'go',
            source: function(query, cb) {
                $.getJSON('//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=6&prefix=' + encodeURIComponent(query) + '&callback=?', cb);
            },
            displayKey: 'path',
            minLength: 2,
            hint: false,
            templates: {
                suggestion: _.template([
                    '<p class="go-path"><%= path %></p>',
                    '<p class="go-description"><%= description %></p>'
                ].join(''))
            }
        }).on('typeahead:selected', function(evt, redirect) {
            window.location =
                'http://go.warwick.ac.uk/' + redirect.path +
                '?goSearchReferer=' + encodeURIComponent(window.location) +
                'goSearchQuery=' + $(this).val(); // FIXME this will always contain the selected path name, not the query
        });
    });

})(jQuery);