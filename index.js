// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBessely0=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,g=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,g,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,c,f,l,s,p,v,y,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,v=n.width,y=n.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function S(r){var t,e,n,o;for(e=[],o=0,n=O.exec(r);n;)(t=r.slice(o,O.lastIndex-n[0].length)).length&&e.push(t),e.push(N(n)),o=O.lastIndex,n=O.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function U(r){var t,e;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[S(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return x.apply(null,t)}var T,F=Object.prototype,I=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=F,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,e.get),a&&V&&V.call(r,t,e.set),r};var L=T;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function B(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&R.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=W()?function(r){var t,e,n;if(null==r)return M.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return M.call(r)}return n=M.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return M.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return B(r)||K(r)}$(Q,"isPrimitive",B),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!B(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(tr)return tr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,e,n,o;if(("Object"===(e=q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=cr.exec(n.toString()))return t[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!fr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function vr(r){return"function"===pr(r)}function yr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString;var gr=W();function hr(r){return"object"==typeof r&&(r instanceof dr||(gr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function wr(r){return yr(r)||hr(r)}$(wr,"isPrimitive",yr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=vr(Object.getPrototypeOf)?_r:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var xr=Object.prototype;function Or(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===q(t.constructor)&&Z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===xr||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function Nr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Or(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return $(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:yr(e.value)?t(e.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&vr(r[mr])&&$(o,mr,(function(){return Nr(r[mr](),t,n)})),o}var Sr="function"==typeof Uint32Array;var Ur="function"==typeof Uint32Array?Uint32Array:null;var Tr,Fr="function"==typeof Uint32Array?Uint32Array:void 0;Tr=function(){var r,t,e;if("function"!=typeof Ur)return!1;try{t=new Ur(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Sr&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Ir=Tr,kr="function"==typeof Float64Array;var Vr="function"==typeof Float64Array?Float64Array:null;var Pr,Gr="function"==typeof Float64Array?Float64Array:void 0;Pr=function(){var r,t,e;if("function"!=typeof Vr)return!1;try{t=new Vr([1,3.14,-3.14,NaN]),e=t,r=(kr&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Pr,$r="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null;var Br,Hr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Cr)return!1;try{t=new Cr(t=[1,3.14,-3.14,256,257]),e=t,r=($r&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr=Br,Mr="function"==typeof Uint16Array;var Rr="function"==typeof Uint16Array?Uint16Array:null;var Zr,Xr="function"==typeof Uint16Array?Uint16Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof Rr)return!1;try{t=new Rr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Mr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,qr={uint16:Zr,uint8:Wr};(Yr=new qr.uint16(1))[0]=4660;var zr=52===new qr.uint8(Yr.buffer)[0],Dr=!0===zr?1:0,Jr=new Lr(1),Kr=new Ir(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}var rt=!0===zr?1:0,tt=new Lr(1),et=new Ir(tt.buffer);function nt(r){return r!=r}var ot=1023,it=dr.NEGATIVE_INFINITY;var at=.6931471803691238,ut=1.9082149292705877e-10,ct=0x40000000000000,ft=.3333333333333333,lt=1048575,st=2146435072,pt=1048576,vt=1072693248;function yt(r){var t,e,n,o,i,a,u,c,f,l,s,p;return 0===r?it:nt(r)||r<0?NaN:(i=0,(e=Qr(r))<pt&&(i-=54,e=Qr(r*=ct)),e>=st?r+r:(i+=(e>>20)-ot|0,i+=(c=(e&=lt)+614244&1048576|0)>>20|0,u=(r=function(r,t){return tt[0]=r,et[rt]=t>>>0,tt[0]}(r,e|c^vt))-1,(lt&2+e)<3?0===u?0===i?0:i*at+i*ut:(a=u*u*(.5-ft*u),0===i?u-a:i*at-(a-i*ut-u)):(c=e-398458|0,f=440401-e|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(c|=f)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*at-(t-(l*(t+a)+i*ut)-u)):0===i?u-l*(u-a):i*at-(l*(u-a)-i*ut-u))))}var dt,bt,gt=Math.sqrt,ht=Number.POSITIVE_INFINITY,wt=2147483647,mt=2146435072,jt=1048575,At=!0===zr?0:1,_t=new Lr(1),Et=new Ir(_t.buffer);!0===zr?(dt=1,bt=0):(dt=0,bt=1);var xt={HIGH:dt,LOW:bt},Ot=new Lr(1),Nt=new Ir(Ot.buffer),St=xt.HIGH,Ut=xt.LOW;function Tt(r,t){return Nt[St]=r,Nt[Ut]=t,Ot[0]}var Ft=Math.floor,It=1023,kt=-1023,Vt=-1074;function Pt(r){return r===ht||r===it}var Gt,Lt,$t=2147483648;!0===zr?(Gt=1,Lt=0):(Gt=0,Lt=1);var Ct={HIGH:Gt,LOW:Lt},Bt=new Lr(1),Ht=new Ir(Bt.buffer),Wt=Ct.HIGH,Mt=Ct.LOW;function Rt(r,t,e,n){return Bt[0]=r,t[n]=Ht[Wt],t[n+e]=Ht[Mt],t}function Zt(r){return Rt(r,[0,0],1,0)}$(Zt,"assign",Rt);var Xt=[0,0];var Yt=22250738585072014e-324;var qt=4503599627370496;function zt(r,t,e,n){return nt(r)||Pt(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<Yt?(t[n]=r*qt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return zt(r,[0,0],1,0)}),"assign",zt);var Dt=2220446049250313e-31,Jt=2148532223,Kt=[0,0],Qt=[0,0];function re(r,t){var e,n,o,i,a,u;return 0===t||0===r||nt(r)||Pt(r)?r:(zt(r,Kt,1,0),r=Kt[0],t+=Kt[1],t+=function(r){var t=Qr(r);return(t=(t&mt)>>>20)-ot|0}(r),t<Vt?(o=0,i=r,Zt.assign(o,Xt,1,0),a=Xt[0],a&=wt,u=Qr(i),Tt(a|=u&=$t,Xt[1])):t>It?r<0?it:ht:(t<=kt?(t+=52,n=Dt):n=1,Zt.assign(r,Qt,1,0),e=Qt[0],e&=Jt,n*Tt(e|=t+ot<<20,Qt[1])))}function te(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ne=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],oe=16777216,ie=5.960464477539063e-8,ae=te(20),ue=te(20),ce=te(20),fe=te(20);function le(r,t,e,n,o,i,a,u,c){var f,l,s,p,v,y,d,b,g;for(p=i,g=n[e],b=e,v=0;b>0;v++)l=ie*g|0,fe[v]=g-oe*l|0,g=n[b-1]+l,b-=1;if(g=re(g,o),g-=8*Ft(.125*g),g-=d=0|g,s=0,o>0?(d+=v=fe[e-1]>>24-o,fe[e-1]-=v<<24-o,s=fe[e-1]>>23-o):0===o?s=fe[e-1]>>23:g>=.5&&(s=2),s>0){for(d+=1,f=0,v=0;v<e;v++)b=fe[v],0===f?0!==b&&(f=1,fe[v]=16777216-b):fe[v]=16777215-b;if(o>0)switch(o){case 1:fe[e-1]&=8388607;break;case 2:fe[e-1]&=4194303}2===s&&(g=1-g,0!==f&&(g-=re(1,o)))}if(0===g){for(b=0,v=e-1;v>=i;v--)b|=fe[v];if(0===b){for(y=1;0===fe[i-y];y++);for(v=e+1;v<=e+y;v++){for(c[u+v]=ee[a+v],l=0,b=0;b<=u;b++)l+=r[b]*c[u+(v-b)];n[v]=l}return le(r,t,e+=y,n,o,i,a,u,c)}}if(0===g)for(e-=1,o-=24;0===fe[e];)e-=1,o-=24;else(g=re(g,-o))>=oe?(l=ie*g|0,fe[e]=g-oe*l|0,o+=24,fe[e+=1]=l):fe[e]=0|g;for(l=re(1,o),v=e;v>=0;v--)n[v]=l*fe[v],l*=ie;for(v=e;v>=0;v--){for(l=0,y=0;y<=p&&y<=e-v;y++)l+=ne[y]*n[v+y];ce[e-v]=l}for(l=0,v=e;v>=0;v--)l+=ce[v];for(t[0]=0===s?l:-l,l=ce[0]-l,v=1;v<=e;v++)l+=ce[v];return t[1]=0===s?l:-l,7&d}function se(r,t,e,n){var o,i,a,u,c,f,l;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)ae[c]=f<0?0:ee[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ae[a+(c-f)];ue[c]=o}return 4,le(r,t,4,ue,u,4,i,a,ae)}var pe=Math.round,ve=.6366197723675814,ye=1.5707963267341256,de=6077100506506192e-26,be=6077100506303966e-26,ge=20222662487959506e-37,he=20222662487111665e-37,we=84784276603689e-45,me=2047;function je(r,t,e){var n,o,i,a,u;return i=r-(n=pe(r*ve))*ye,a=n*de,u=t>>20|0,e[0]=i-a,u-(Qr(e[0])>>20&me)>16&&(a=n*ge-((o=i)-(i=o-(a=n*be))-a),e[0]=i-a,u-(Qr(e[0])>>20&me)>49&&(a=n*we-((o=i)-(i=o-(a=n*he))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var Ae=0,_e=16777216,Ee=1.5707963267341256,xe=6077100506506192e-26,Oe=2*xe,Ne=3*xe,Se=4*xe,Ue=598523,Te=1072243195,Fe=1073928572,Ie=1074752122,ke=1074977148,Ve=1075183036,Pe=1075388923,Ge=1075594811,Le=1094263291,$e=[0,0,0],Ce=[0,0];function Be(r,t){var e,n,o,i,a,u,c;if((o=Qr(r)&wt|0)<=Te)return t[0]=r,t[1]=0,0;if(o<=Ie)return(o&jt)===Ue?je(r,o,t):o<=Fe?r>0?(c=r-Ee,t[0]=c-xe,t[1]=c-t[0]-xe,1):(c=r+Ee,t[0]=c+xe,t[1]=c-t[0]+xe,-1):r>0?(c=r-2*Ee,t[0]=c-Oe,t[1]=c-t[0]-Oe,2):(c=r+2*Ee,t[0]=c+Oe,t[1]=c-t[0]+Oe,-2);if(o<=Ge)return o<=Ve?o===ke?je(r,o,t):r>0?(c=r-3*Ee,t[0]=c-Ne,t[1]=c-t[0]-Ne,3):(c=r+3*Ee,t[0]=c+Ne,t[1]=c-t[0]+Ne,-3):o===Pe?je(r,o,t):r>0?(c=r-4*Ee,t[0]=c-Se,t[1]=c-t[0]-Se,4):(c=r+4*Ee,t[0]=c+Se,t[1]=c-t[0]+Se,-4);if(o<Le)return je(r,o,t);if(o>=mt)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return _t[0]=r,Et[At]}(r),c=Tt(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)$e[a]=0|c,c=(c-$e[a])*_e;for($e[2]=c,i=3;$e[i-1]===Ae;)i-=1;return u=se($e,Ce,n,i),r<0?(t[0]=-Ce[0],t[1]=-Ce[1],-u):(t[0]=Ce[0],t[1]=Ce[1],u)}var He=-.16666666666666632,We=.00833333333332249,Me=-.0001984126982985795,Re=27557313707070068e-22,Ze=-2.5050760253406863e-8,Xe=1.58969099521155e-10,Ye=.0416666666666666,qe=-.001388888888887411,ze=2480158728947673e-20,De=-2.7557314351390663e-7,Je=2.087572321298175e-9,Ke=-11359647557788195e-27;function Qe(r,t,e,n,o){var i,a,u,c,f;return a=We+(f=r*r)*(Me+f*Re)+f*(c=f*f)*(Ze+f*Xe),u=f*r,e[o]=0===t?r+u*(He+f*a):r-(f*(.5*t-u*a)-t-u*He),a=f*(Ye+f*(qe+f*ze)),a+=c*c*(De+f*(Je+f*Ke)),c=1-(i=.5*f),e[o+n]=c+(1-c-i+(f*a-r*t)),e}var rn=1072243195,tn=1044381696,en=[0,0];function nn(r,t,e,n){var o,i;if(o=Qr(r),(o&=wt)<=rn)return o<tn&&0==(0|r)&&(t[n]=r,t[n+e]=0),Qe(r,0,t,e,n);if(o>=mt)return t[n]=NaN,t[n+e]=NaN,t;switch(i=Be(r,en),Qe(en[0],en[1],t,e,n),3&i){case 1:return o=t[n+e],t[n+e]=-t[n],t[n]=o,t;case 2:return t[n]*=-1,t[n+e]*=-1,t;case 3:return o=-t[n+e],t[n+e]=t[n],t[n]=o,t;default:return t}}$((function(r){return nn(r,[0,0],1,0)}),"assign",nn);var on=.5641895835477563,an=2.404825557695773,un=5.520078110286311,cn=616,fn=-.0014244423042272315,ln=1413,sn=.0005468602863106496,pn=[0,0];function vn(r){var t,e,n,o,i,a;return r<0&&(r=-r),r===ht?0:0===r?1:r<=4?(o=function(r){var t,e;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,e=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,e=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/e)}(i=r*r),(a=(r+an)*(r-cn/256-fn))*o):r<=8?(o=function(r){var t,e;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,e=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),e=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/e)}(i=1-r*r/64),(a=(r+un)*(r-ln/256-sn))*o):(t=function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),e=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),e=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/e)}(n=(i=8/r)*i),e=function(r){var t,e;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,e=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,e=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/e)}(n),a=on/gt(r),nn(r,pn,1,0),a*(t*(pn[1]+pn[0])-i*e*(pn[0]-pn[1])))}var yn=.5641895835477563,dn=.6366197723675814,bn=.8935769662791675,gn=3.957678419314858,hn=7.086051060301773,wn=228,mn=.0029519662791675214,jn=1013,An=.0006471693148578684,_n=1814,En=.00011356030177269763,xn=[0,0];function On(r){var t,e,n,o,i,a,u;return r<0?NaN:0===r?it:r===ht?0:r<=3?(i=r*r,a=yt(r/bn)*vn(r)*dn,o=function(r){var t,e;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(t=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),e=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(t=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,e=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),t/e)}(i),a+(u=(r+bn)*(r-wn/256-mn))*o):r<=5.5?(i=r*r,a=yt(r/gn)*vn(r)*dn,o=function(r){var t,e;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(t=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,e=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(t=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),e=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),t/e)}(i),a+(u=(r+gn)*(r-jn/256-An))*o):r<=8?(i=r*r,a=yt(r/hn)*vn(r)*dn,o=function(r){var t,e;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(t=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,e=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(t=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,e=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),t/e)}(i),a+(u=(r+hn)*(r-_n/256-En))*o):(t=function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),e=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),e=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/e)}(n=(i=8/r)*i),e=function(r){var t,e;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,e=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,e=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/e)}(n),u=yn/gt(r),nn(r,xn,1,0),u*(t*(xn[0]-xn[1])+i*e*(xn[1]+xn[0])))}return function(r){return Nr(r,On)}}));
//# sourceMappingURL=index.js.map
