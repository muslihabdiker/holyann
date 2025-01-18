/*! For license information please see sample.3d9a7c93ef4629e9013e.bundle.js.LICENSE.txt */
(self.webpackChunk_muslihabdiker_vplusplus=self.webpackChunk_muslihabdiker_vplusplus||[]).push([[877],{413:(e,t,n)=>{"use strict";n(965).render("{{title}} spends {{calc}}",view);console.log("v++")},965:function(e){e.exports=function(){"use strict";var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function r(e){return t(e)?"array":typeof e}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}function s(e,t){return null!=e&&"object"!=typeof e&&e.hasOwnProperty&&e.hasOwnProperty(t)}var a=RegExp.prototype.test;function c(e,t){return a.call(e,t)}var u=/\S/;function p(e){return!c(u,e)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function h(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return l[e]}))}var f=/\s*/,g=/\s+/,v=/\s*=/,d=/\s*\}/,w=/#|\^|\/|>|\{|&|=|!/;function y(e,n){if(!e)return[];var r,o,s,a=!1,c=[],u=[],l=[],h=!1,y=!1,C="",x=0;function T(){if(h&&!y)for(;l.length;)delete u[l.pop()];else l=[];h=!1,y=!1}function U(e){if("string"==typeof e&&(e=e.split(g,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(i(e[0])+"\\s*"),o=new RegExp("\\s*"+i(e[1])),s=new RegExp("\\s*"+i("}"+e[1]))}U(n||E.tags);for(var j,S,_,P,V,O,A=new k(e);!A.eos();){if(j=A.pos,_=A.scanUntil(r))for(var I=0,R=_.length;I<R;++I)p(P=_.charAt(I))?(l.push(u.length),C+=P):(y=!0,a=!0,C+=" "),u.push(["text",P,j,j+1]),j+=1,"\n"===P&&(T(),C="",x=0,a=!1);if(!A.scan(r))break;if(h=!0,S=A.scan(w)||"name",A.scan(f),"="===S?(_=A.scanUntil(v),A.scan(v),A.scanUntil(o)):"{"===S?(_=A.scanUntil(s),A.scan(d),A.scanUntil(o),S="&"):_=A.scanUntil(o),!A.scan(o))throw new Error("Unclosed tag at "+A.pos);if(V=">"==S?[S,_,j,A.pos,C,x,a]:[S,_,j,A.pos],x++,u.push(V),"#"===S||"^"===S)c.push(V);else if("/"===S){if(!(O=c.pop()))throw new Error('Unopened section "'+_+'" at '+j);if(O[1]!==_)throw new Error('Unclosed section "'+O[1]+'" at '+j)}else"name"===S||"{"===S||"&"===S?y=!0:"="===S&&U(_)}if(T(),O=c.pop())throw new Error('Unclosed section "'+O[1]+'" at '+A.pos);return b(m(u))}function m(e){for(var t,n,r=[],i=0,o=e.length;i<o;++i)(t=e[i])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function b(e){for(var t,n=[],r=n,i=[],o=0,s=e.length;o<s;++o)switch((t=e[o])[0]){case"#":case"^":r.push(t),i.push(t),r=t[4]=[];break;case"/":i.pop()[5]=t[2],r=i.length>0?i[i.length-1][4]:n;break;default:r.push(t)}return n}function k(e){this.string=e,this.tail=e,this.pos=0}function C(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function x(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}k.prototype.eos=function(){return""===this.tail},k.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},k.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var t,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var i,a,c,u=this,p=!1;u;){if(e.indexOf(".")>0)for(i=u.view,a=e.split("."),c=0;null!=i&&c<a.length;)c===a.length-1&&(p=o(i,a[c])||s(i,a[c])),i=i[a[c++]];else i=u.view[e],p=o(u.view,e);if(p){t=i;break}u=u.parent}r[e]=t}return n(t)&&(t=t.call(this.view)),t},x.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(e,t){var n=this.templateCache,r=e+":"+(t||E.tags).join(":"),i=void 0!==n,o=i?n.get(r):void 0;return null==o&&(o=y(e,t),i&&n.set(r,o)),o},x.prototype.render=function(e,t,n,r){var i=this.getConfigTags(r),o=this.parse(e,i),s=t instanceof C?t:new C(t,void 0);return this.renderTokens(o,s,n,e,r)},x.prototype.renderTokens=function(e,t,n,r,i){for(var o,s,a,c="",u=0,p=e.length;u<p;++u)a=void 0,"#"===(s=(o=e[u])[0])?a=this.renderSection(o,t,n,r,i):"^"===s?a=this.renderInverted(o,t,n,r,i):">"===s?a=this.renderPartial(o,t,n,i):"&"===s?a=this.unescapedValue(o,t):"name"===s?a=this.escapedValue(o,t,i):"text"===s&&(a=this.rawValue(o)),void 0!==a&&(c+=a);return c},x.prototype.renderSection=function(e,r,i,o,s){var a=this,c="",u=r.lookup(e[1]);function p(e){return a.render(e,r,i,s)}if(u){if(t(u))for(var l=0,h=u.length;l<h;++l)c+=this.renderTokens(e[4],r.push(u[l]),i,o,s);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)c+=this.renderTokens(e[4],r.push(u),i,o,s);else if(n(u)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(u=u.call(r.view,o.slice(e[3],e[5]),p))&&(c+=u)}else c+=this.renderTokens(e[4],r,i,o,s);return c}},x.prototype.renderInverted=function(e,n,r,i,o){var s=n.lookup(e[1]);if(!s||t(s)&&0===s.length)return this.renderTokens(e[4],n,r,i,o)},x.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),i=e.split("\n"),o=0;o<i.length;o++)i[o].length&&(o>0||!n)&&(i[o]=r+i[o]);return i.join("\n")},x.prototype.renderPartial=function(e,t,r,i){if(r){var o=this.getConfigTags(i),s=n(r)?r(e[1]):r[e[1]];if(null!=s){var a=e[6],c=e[5],u=e[4],p=s;0==c&&u&&(p=this.indentPartial(s,u,a));var l=this.parse(p,o);return this.renderTokens(l,t,r,p,i)}}},x.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},x.prototype.escapedValue=function(e,t,n){var r=this.getConfigEscape(n)||E.escape,i=t.lookup(e[1]);if(null!=i)return"number"==typeof i&&r===E.escape?String(i):r(i)},x.prototype.rawValue=function(e){return e[1]},x.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"==typeof e?e.tags:void 0},x.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!t(e)?e.escape:void 0};var E={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){T.templateCache=e},get templateCache(){return T.templateCache}},T=new x;return E.clearCache=function(){return T.clearCache()},E.parse=function(e,t){return T.parse(e,t)},E.render=function(e,t,n,i){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+r(e)+'" was given as the first argument for mustache#render(template, view, partials)');return T.render(e,t,n,i)},E.escape=h,E.Scanner=k,E.Context=C,E.Writer=x,E}()}},e=>{var t;t=413,e(e.s=t)}]);
//# sourceMappingURL=sample.3d9a7c93ef4629e9013e.bundle.js.map