// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var _=String.fromCharCode,E=isNaN,x=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function N(r){var t,n,e,i,a,f,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,n,e,o;for(n=[],o=0,e=S.exec(r);e;)(t=r.slice(o,S.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=S.lastIndex,e=S.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function I(r){var t,n,e;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=T(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return N.apply(null,n)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&($.call(r,t)||C.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),a&&L&&L.call(r,t,n.set),r};var B=k;function H(r,t,n){B(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=/./;function M(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",J=Z()?function(r){var t,n,e;if(null==r)return X.call(r);n=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[D]=n:delete r[D],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return M(r)||tr(r)}function er(){return new Function("return this;")()}H(nr,"isPrimitive",M),H(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!M(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;H(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function vr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=sr.exec(e.toString()))return t[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}H(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!pr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(yr));var dr="function"==typeof W||"object"==typeof fr||"function"==typeof cr?function(r){return vr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?vr(r).toLowerCase():t};function gr(r){return"function"===dr(r)}function br(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&gr(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=Z();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Ar(r)}H(_r,"isPrimitive",hr),H(_r,"isObject",Ar);var Er,xr="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,Or=Object,Nr=Object.getPrototypeOf;Er=gr(Object.getPrototypeOf)?Nr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=Er,Ur=Object.prototype;function Tr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=Or(r),Sr(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&gr(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&gr(t.isPrototypeOf)&&(t===Ur||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Fr(r,t){return Tr(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ir(r,t,n){var e,o,i,a;if(!br(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!gr(t))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=Fr(e,n)))throw i;return H(o={},"next",u),H(o,"return",c),xr&&gr(r[xr])&&H(o,xr,f),o;function u(){var n;return a?{done:!0}:(n=r.next()).done?(a=!0,n):{value:hr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Ir(r[xr](),t,e)}}var kr,Vr="function"==typeof Uint32Array,Pr="function"==typeof Uint32Array?Uint32Array:null,Gr="function"==typeof Uint32Array?Uint32Array:void 0;kr=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Vr&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr,$r=kr,Cr="function"==typeof Float64Array,Br="function"==typeof Float64Array?Float64Array:null,Hr="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,n;if("function"!=typeof Br)return!1;try{t=new Br([1,3.14,-3.14,NaN]),n=t,r=(Cr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr,Mr=Lr,Rr="function"==typeof Uint8Array,Zr="function"==typeof Uint8Array?Uint8Array:null,Xr="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,t,n;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,256,257]),n=t,r=(Rr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,qr=Wr,zr="function"==typeof Uint16Array,Dr="function"==typeof Uint16Array?Uint16Array:null,Jr="function"==typeof Uint16Array?Uint16Array:void 0;Yr=function(){var r,t,n;if("function"!=typeof Dr)return!1;try{t=new Dr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(zr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr,Qr={uint16:Yr,uint8:qr};(Kr=new Qr.uint16(1))[0]=4660;var rt=52===new Qr.uint8(Kr.buffer)[0],tt=!0===rt?1:0,nt=new Mr(1),et=new $r(nt.buffer);function ot(r){return nt[0]=r,et[tt]}var it=!0===rt?1:0,at=new Mr(1),ut=new $r(at.buffer);function ct(r){return r!=r}var ft=1023,lt=wr.NEGATIVE_INFINITY,st=.6931471803691238,pt=1.9082149292705877e-10,yt=1048575;function vt(r){var t,n,e,o,i,a,u,c,f,l,s,p;return 0===r?lt:ct(r)||r<0?NaN:(i=0,(n=ot(r))<1048576&&(i-=54,n=ot(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-ft|0,i+=(c=614244+(n&=yt)&1048576|0)>>20|0,u=(r=function(r,t){return at[0]=r,ut[it]=t>>>0,at[0]}(r,n|1072693248^c))-1,(yt&2+n)<3?0===u?0===i?0:i*st+i*pt:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*st-(a-i*pt-u)):(c=n-398458|0,f=440401-n|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=e+o,(c|=f)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*st-(t-(l*(t+a)+i*pt)-u)):0===i?u-l*(u-a):i*st-(l*(u-a)-i*pt-u))))}var dt,gt,bt=Math.sqrt,ht=Number.POSITIVE_INFINITY,wt=2147483647,mt=2146435072,jt=!0===rt?0:1,At=new Mr(1),_t=new $r(At.buffer);!0===rt?(dt=1,gt=0):(dt=0,gt=1);var Et={HIGH:dt,LOW:gt},xt=new Mr(1),Ot=new $r(xt.buffer),Nt=Et.HIGH,St=Et.LOW;function Ut(r,t){return Ot[Nt]=r,Ot[St]=t,xt[0]}var Tt,Ft,It=Math.floor;function kt(r){return r===ht||r===lt}!0===rt?(Tt=1,Ft=0):(Tt=0,Ft=1);var Vt={HIGH:Tt,LOW:Ft},Pt=new Mr(1),Gt=new $r(Pt.buffer),Lt=Vt.HIGH,$t=Vt.LOW;function Ct(r,t,n,e){return Pt[0]=r,t[e]=Gt[Lt],t[e+n]=Gt[$t],t}function Bt(r){return Ct(r,[0,0],1,0)}H(Bt,"assign",Ct);var Ht=[0,0];function Wt(r,t,n,e){return ct(r)||kt(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}H((function(r){return Wt(r,[0,0],1,0)}),"assign",Wt);var Mt=[0,0],Rt=[0,0];function Zt(r,t){var n,e,o,i,a,u;return 0===t||0===r||ct(r)||kt(r)?r:(Wt(r,Mt,1,0),t+=Mt[1],t+=function(r){var t=ot(r);return(t=(t&mt)>>>20)-ft|0}(r=Mt[0]),t<-1074?(o=0,i=r,Bt.assign(o,Ht,1,0),a=Ht[0],a&=wt,u=ot(i),Ut(a|=u&=2147483648,Ht[1])):t>1023?r<0?lt:ht:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Bt.assign(r,Rt,1,0),n=Rt[0],n&=2148532223,e*Ut(n|=t+ft<<20,Rt[1])))}function Xt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Yt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],zt=16777216,Dt=5.960464477539063e-8,Jt=Xt(20),Kt=Xt(20),Qt=Xt(20),rn=Xt(20);function tn(r,t,n,e,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=e[n],g=n,y=0;g>0;y++)l=Dt*b|0,rn[y]=b-zt*l|0,b=e[g-1]+l,g-=1;if(b=Zt(b,o),b-=8*It(.125*b),b-=d=0|b,s=0,o>0?(d+=y=rn[n-1]>>24-o,rn[n-1]-=y<<24-o,s=rn[n-1]>>23-o):0===o?s=rn[n-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<n;y++)g=rn[y],0===f?0!==g&&(f=1,rn[y]=16777216-g):rn[y]=16777215-g;if(o>0)switch(o){case 1:rn[n-1]&=8388607;break;case 2:rn[n-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Zt(1,o)))}if(0===b){for(g=0,y=n-1;y>=i;y--)g|=rn[y];if(0===g){for(v=1;0===rn[i-v];v++);for(y=n+1;y<=n+v;y++){for(c[u+y]=Yt[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];e[y]=l}return tn(r,t,n+=v,e,o,i,a,u,c)}}if(0===b)for(n-=1,o-=24;0===rn[n];)n-=1,o-=24;else(b=Zt(b,-o))>=zt?(l=Dt*b|0,rn[n]=b-zt*l|0,o+=24,rn[n+=1]=l):rn[n]=0|b;for(l=Zt(1,o),y=n;y>=0;y--)e[y]=l*rn[y],l*=Dt;for(y=n;y>=0;y--){for(l=0,v=0;v<=p&&v<=n-y;v++)l+=qt[v]*e[y+v];Qt[n-y]=l}for(l=0,y=n;y>=0;y--)l+=Qt[y];for(t[0]=0===s?l:-l,l=Qt[0]-l,y=1;y<=n;y++)l+=Qt[y];return t[1]=0===s?l:-l,7&d}function nn(r,t,n,e){var o,i,a,u,c,f,l;for((i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),f=i-(a=e-1),l=a+4,c=0;c<=l;c++)Jt[c]=f<0?0:Yt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Jt[a+(c-f)];Kt[c]=o}return tn(r,t,4,Kt,u,4,i,a,Jt)}var en=Math.round;function on(r,t,n){var e,o,i,a,u;return i=r-1.5707963267341256*(e=en(.6366197723675814*r)),a=6077100506506192e-26*e,u=t>>20|0,n[0]=i-a,u-(ot(n[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),n[0]=i-a,u-(ot(n[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),n[0]=i-a)),n[1]=i-n[0]-a,e}var an=1.5707963267341256,un=6077100506506192e-26,cn=2*un,fn=3*un,ln=4*un,sn=[0,0,0],pn=[0,0];function yn(r,t){var n,e,o,i,a,u,c;if((o=ot(r)&wt|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?on(r,o,t):o<=1073928572?r>0?(c=r-an,t[0]=c-un,t[1]=c-t[0]-un,1):(c=r+an,t[0]=c+un,t[1]=c-t[0]+un,-1):r>0?(c=r-2*an,t[0]=c-cn,t[1]=c-t[0]-cn,2):(c=r+2*an,t[0]=c+cn,t[1]=c-t[0]+cn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?on(r,o,t):r>0?(c=r-3*an,t[0]=c-fn,t[1]=c-t[0]-fn,3):(c=r+3*an,t[0]=c+fn,t[1]=c-t[0]+fn,-3):1075388923===o?on(r,o,t):r>0?(c=r-4*an,t[0]=c-ln,t[1]=c-t[0]-ln,4):(c=r+4*an,t[0]=c+ln,t[1]=c-t[0]+ln,-4);if(o<1094263291)return on(r,o,t);if(o>=mt)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return At[0]=r,_t[jt]}(r),c=Ut(o-((e=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)sn[a]=0|c,c=16777216*(c-sn[a]);for(sn[2]=c,i=3;0===sn[i-1];)i-=1;return u=nn(sn,pn,e,i),r<0?(t[0]=-pn[0],t[1]=-pn[1],-u):(t[0]=pn[0],t[1]=pn[1],u)}var vn=-.16666666666666632;function dn(r,t,n,e,o){var i,a,u,c,f;return a=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,n[o]=0===t?r+u*(vn+f*a):r-(f*(.5*t-u*a)-t-u*vn),a=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),a+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(i=.5*f),n[o+e]=c+(1-c-i+(f*a-r*t)),n}var gn=[0,0];function bn(r,t,n,e){var o,i;if(o=ot(r),(o&=wt)<=1072243195)return o<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),dn(r,0,t,n,e);if(o>=mt)return t[e]=NaN,t[e+n]=NaN,t;switch(i=yn(r,gn),dn(gn[0],gn[1],t,n,e),3&i){case 1:return o=t[e+n],t[e+n]=-t[e],t[e]=o,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return o=-t[e+n],t[e+n]=t[e],t[e]=o,t;default:return t}}H((function(r){return bn(r,[0,0],1,0)}),"assign",bn);var hn=[0,0];function wn(r){var t,n,e,o,i,a;return r<0&&(r=-r),r===ht?0:0===r?1:r<=4?(o=function(r){var t,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/n)}(i=r*r),(a=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var t,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/n)}(i=1-r*r/64),(a=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)}(e=(i=8/r)*i),n=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)}(e),a=.5641895835477563/bt(r),bn(r,hn,1,0),a*(t*(hn[1]+hn[0])-i*n*(hn[0]-hn[1])))}var mn=.6366197723675814,jn=.8935769662791675,An=3.957678419314858,_n=7.086051060301773,En=[0,0];function xn(r){var t,n,e,o,i,a,u;return r<0?NaN:0===r?lt:r===ht?0:r<=3?(i=r*r,a=vt(r/jn)*wn(r)*mn,o=function(r){var t,n;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(t=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),n=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(t=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,n=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),t/n)}(i),a+(u=(r+jn)*(r-228/256-.0029519662791675214))*o):r<=5.5?(i=r*r,a=vt(r/An)*wn(r)*mn,o=function(r){var t,n;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(t=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,n=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(t=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),n=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),t/n)}(i),a+(u=(r+An)*(r-1013/256-.0006471693148578684))*o):r<=8?(i=r*r,a=vt(r/_n)*wn(r)*mn,o=function(r){var t,n;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(t=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,n=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(t=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,n=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),t/n)}(i),a+(u=(r+_n)*(r-1814/256-.00011356030177269763))*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)}(e=(i=8/r)*i),n=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)}(e),u=.5641895835477563/bt(r),bn(r,En,1,0),u*(t*(En[0]-En[1])+i*n*(En[1]+En[0])))}return function(r){return Ir(r,xn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBessely0=t();
//# sourceMappingURL=browser.js.map
