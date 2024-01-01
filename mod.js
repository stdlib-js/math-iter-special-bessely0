// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function o(r,n,t){var o=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var n,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((n=r.precision)>0&&(n-=1),e=o.toExponential(n)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,v,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+j(e):j(e)+r}var _=String.fromCharCode,E=isNaN,x=Array.isArray;function O(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function N(r){var n,t,e,i,a,f,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function F(r){var n,t,e,o;for(t=[],o=0,e=S.exec(r);e;)(n=r.slice(o,S.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),o=S.lastIndex,e=S.exec(r);return(n=r.slice(o)).length&&t.push(n),t}function I(r){return"string"==typeof r}function T(r){var n,t,e;if(!I(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=F(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return N.apply(null,t)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,n)||C.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,n,t.get),a&&L&&L.call(r,n,t.set),r};var H=k;function W(r,n,t){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function M(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,n){return null!=r&&Y.call(r,n)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var n,t,e;if(null==r)return X.call(r);t=r[D],n=q(r,D);try{r[D]=void 0}catch(n){return X.call(r)}return e=X.call(r),n?r[D]=t:delete r[D],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function nr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return M(r)||nr(r)}function er(){return new Function("return this;")()}W(tr,"isPrimitive",M),W(tr,"isObject",nr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!M(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;W(pr,"REGEXP",vr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function gr(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=vr.exec(e.toString()))return n[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(dr));var br="function"==typeof B||"object"==typeof sr||"function"==typeof lr?function(r){return gr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?gr(r).toLowerCase():n};function wr(r){return"function"===br(r)}function hr(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var _r=Z();function Er(r){return"object"==typeof r&&(r instanceof jr||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function xr(r){return mr(r)||Er(r)}W(xr,"isPrimitive",mr),W(xr,"isObject",Er);var Or="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var Nr,Sr=Object,Ur=Object.getPrototypeOf;Nr=wr(Object.getPrototypeOf)?Ur:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Fr=Nr;var Ir=Object.prototype;function Tr(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(n=function(r){return null==r?null:(r=Sr(r),Fr(r))}(r),!n||!q(r,"constructor")&&q(n,"constructor")&&wr(n.constructor)&&"[object Function]"===J(n.constructor)&&q(n,"isPrototypeOf")&&wr(n.isPrototypeOf)&&(n===Ir||function(r){var n;for(n in r)if(!q(r,n))return!1;return!0}(r)))}function kr(r,n){return Tr(n)?(q(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",n))}function Vr(r,n,t){var e,o,i,a;if(!hr(r))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(n))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",n));if(e={invalid:NaN},arguments.length>2&&(i=kr(e,t)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&wr(r[Or])&&W(o,Or,f),o;function u(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:mr(t.value)?n(t.value):e.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Vr(r[Or](),n,e)}}var Pr="function"==typeof Uint32Array;var Gr="function"==typeof Uint32Array?Uint32Array:null;var Lr,$r="function"==typeof Uint32Array?Uint32Array:void 0;Lr=function(){var r,n,t;if("function"!=typeof Gr)return!1;try{n=new Gr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Pr&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr=Lr,Hr="function"==typeof Float64Array;var Wr="function"==typeof Float64Array?Float64Array:null;var Br,Mr="function"==typeof Float64Array?Float64Array:void 0;Br=function(){var r,n,t;if("function"!=typeof Wr)return!1;try{n=new Wr([1,3.14,-3.14,NaN]),t=n,r=(Hr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Rr=Br,Zr="function"==typeof Uint8Array;var Xr="function"==typeof Uint8Array?Uint8Array:null;var Yr,qr="function"==typeof Uint8Array?Uint8Array:void 0;Yr=function(){var r,n,t;if("function"!=typeof Xr)return!1;try{n=new Xr(n=[1,3.14,-3.14,256,257]),t=n,r=(Zr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr=Yr,Dr="function"==typeof Uint16Array;var Jr="function"==typeof Uint16Array?Uint16Array:null;var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Kr=function(){var r,n,t;if("function"!=typeof Jr)return!1;try{n=new Jr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Dr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rn,nn={uint16:Kr,uint8:zr};(rn=new nn.uint16(1))[0]=4660;var tn=52===new nn.uint8(rn.buffer)[0],en=!0===tn?1:0,on=new Rr(1),an=new Cr(on.buffer);function un(r){return on[0]=r,an[en]}var cn=!0===tn?1:0,fn=new Rr(1),ln=new Cr(fn.buffer);function sn(r){return r!=r}var pn=jr.NEGATIVE_INFINITY;var vn=.6931471803691238,yn=1.9082149292705877e-10;function dn(r){var n,t,e,o,i,a,u,c,f,l,s,p;return 0===r?pn:sn(r)||r<0?NaN:(i=0,(t=un(r))<1048576&&(i-=54,t=un(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(c=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,n){return fn[0]=r,ln[cn]=n>>>0,fn[0]}(r,t|1072693248^c))-1,(1048575&2+t)<3?0===u?0===i?0:i*vn+i*yn:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*vn-(a-i*yn-u)):(c=t-398458|0,f=440401-t|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=e+o,(c|=f)>0?(n=.5*u*u,0===i?u-(n-l*(n+a)):i*vn-(n-(l*(n+a)+i*yn)-u)):0===i?u-l*(u-a):i*vn-(l*(u-a)-i*yn-u))))}var gn,bn,wn=Math.sqrt,hn=Number.POSITIVE_INFINITY,mn=!0===tn?0:1,jn=new Rr(1),An=new Cr(jn.buffer);!0===tn?(gn=1,bn=0):(gn=0,bn=1);var _n={HIGH:gn,LOW:bn},En=new Rr(1),xn=new Cr(En.buffer),On=_n.HIGH,Nn=_n.LOW;function Sn(r,n){return xn[On]=r,xn[Nn]=n,En[0]}var Un=Math.floor;function Fn(r){return r===hn||r===pn}var In,Tn;!0===tn?(In=1,Tn=0):(In=0,Tn=1);var kn={HIGH:In,LOW:Tn},Vn=new Rr(1),Pn=new Cr(Vn.buffer),Gn=kn.HIGH,Ln=kn.LOW;function $n(r,n,t,e){return Vn[0]=r,n[e]=Pn[Gn],n[e+t]=Pn[Ln],n}function Cn(r){return $n(r,[0,0],1,0)}W(Cn,"assign",$n);var Hn=[0,0];function Wn(r,n,t,e){return sn(r)||Fn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}W((function(r){return Wn(r,[0,0],1,0)}),"assign",Wn);var Bn=[0,0],Mn=[0,0];function Rn(r,n){var t,e,o,i,a,u;return 0===n||0===r||sn(r)||Fn(r)?r:(Wn(r,Bn,1,0),n+=Bn[1],n+=function(r){var n=un(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Bn[0]),n<-1074?(o=0,i=r,Cn.assign(o,Hn,1,0),a=Hn[0],a&=2147483647,u=un(i),Sn(a|=u&=2147483648,Hn[1])):n>1023?r<0?pn:hn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Cn.assign(r,Mn,1,0),t=Mn[0],t&=2148532223,e*Sn(t|=n+1023<<20,Mn[1])))}function Zn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Xn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Yn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],qn=5.960464477539063e-8,zn=Zn(20),Dn=Zn(20),Jn=Zn(20),Kn=Zn(20);function Qn(r,n,t,e,o,i,a,u,c){var f,l,s,p,v,y,d,g,b;for(p=i,b=e[t],g=t,v=0;g>0;v++)l=qn*b|0,Kn[v]=b-16777216*l|0,b=e[g-1]+l,g-=1;if(b=Rn(b,o),b-=8*Un(.125*b),b-=d=0|b,s=0,o>0?(d+=v=Kn[t-1]>>24-o,Kn[t-1]-=v<<24-o,s=Kn[t-1]>>23-o):0===o?s=Kn[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,v=0;v<t;v++)g=Kn[v],0===f?0!==g&&(f=1,Kn[v]=16777216-g):Kn[v]=16777215-g;if(o>0)switch(o){case 1:Kn[t-1]&=8388607;break;case 2:Kn[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Rn(1,o)))}if(0===b){for(g=0,v=t-1;v>=i;v--)g|=Kn[v];if(0===g){for(y=1;0===Kn[i-y];y++);for(v=t+1;v<=t+y;v++){for(c[u+v]=Xn[a+v],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(v-g)];e[v]=l}return Qn(r,n,t+=y,e,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===Kn[t];)t-=1,o-=24;else(b=Rn(b,-o))>=16777216?(l=qn*b|0,Kn[t]=b-16777216*l|0,o+=24,Kn[t+=1]=l):Kn[t]=0|b;for(l=Rn(1,o),v=t;v>=0;v--)e[v]=l*Kn[v],l*=qn;for(v=t;v>=0;v--){for(l=0,y=0;y<=p&&y<=t-v;y++)l+=Yn[y]*e[v+y];Jn[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Jn[v];for(n[0]=0===s?l:-l,l=Jn[0]-l,v=1;v<=t;v++)l+=Jn[v];return n[1]=0===s?l:-l,7&d}function rt(r,n,t,e){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=e-1),l=a+4,c=0;c<=l;c++)zn[c]=f<0?0:Xn[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*zn[a+(c-f)];Dn[c]=o}return 4,Qn(r,n,4,Dn,u,4,i,a,zn)}var nt=Math.round;function tt(r,n,t){var e,o,i,a,u;return i=r-1.5707963267341256*(e=nt(.6366197723675814*r)),a=6077100506506192e-26*e,u=n>>20|0,t[0]=i-a,u-(un(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),t[0]=i-a,u-(un(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),t[0]=i-a)),t[1]=i-t[0]-a,e}var et=1.5707963267341256,ot=6077100506506192e-26,it=2*ot,at=4*ot,ut=[0,0,0],ct=[0,0];function ft(r,n){var t,e,o,i,a,u,c;if((o=2147483647&un(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?tt(r,o,n):o<=1073928572?r>0?(c=r-et,n[0]=c-ot,n[1]=c-n[0]-ot,1):(c=r+et,n[0]=c+ot,n[1]=c-n[0]+ot,-1):r>0?(c=r-2*et,n[0]=c-it,n[1]=c-n[0]-it,2):(c=r+2*et,n[0]=c+it,n[1]=c-n[0]+it,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?tt(r,o,n):r>0?(c=r-3*et,n[0]=c-1.8231301519518578e-10,n[1]=c-n[0]-1.8231301519518578e-10,3):(c=r+3*et,n[0]=c+1.8231301519518578e-10,n[1]=c-n[0]+1.8231301519518578e-10,-3):1075388923===o?tt(r,o,n):r>0?(c=r-4*et,n[0]=c-at,n[1]=c-n[0]-at,4):(c=r+4*et,n[0]=c+at,n[1]=c-n[0]+at,-4);if(o<1094263291)return tt(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return jn[0]=r,An[mn]}(r),c=Sn(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)ut[a]=0|c,c=16777216*(c-ut[a]);for(ut[2]=c,i=3;0===ut[i-1];)i-=1;return u=rt(ut,ct,e,i),r<0?(n[0]=-ct[0],n[1]=-ct[1],-u):(n[0]=ct[0],n[1]=ct[1],u)}var lt=-.16666666666666632;function st(r,n,t,e,o){var i,a,u,c,f;return a=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,t[o]=0===n?r+u*(lt+f*a):r-(f*(.5*n-u*a)-n-u*lt),a=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),a+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(i=.5*f),t[o+e]=c+(1-c-i+(f*a-r*n)),t}var pt=[0,0];function vt(r,n,t,e){var o,i;if(o=un(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),st(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(i=ft(r,pt),st(pt[0],pt[1],n,t,e),3&i){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}W((function(r){return vt(r,[0,0],1,0)}),"assign",vt);var yt=[0,0];function dt(r){var n,t,e,o,i,a;return r<0&&(r=-r),r===hn?0:0===r?1:r<=4?(o=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)}(i=r*r),(a=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)}(i=1-r*r/64),(a=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(i=8/r)*i),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),a=.5641895835477563/wn(r),vt(r,yt,1,0),a*(n*(yt[1]+yt[0])-i*t*(yt[0]-yt[1])))}var gt=.8935769662791675,bt=3.957678419314858,wt=7.086051060301773,ht=[0,0];function mt(r){var n,t,e,o,i,a,u;return r<0?NaN:0===r?pn:r===hn?0:r<=3?(i=r*r,a=dn(r/gt)*dt(r)*.6366197723675814,o=function(r){var n,t;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(n=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),t=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(n=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,t=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),n/t)}(i),a+(u=(r+gt)*(r-228/256-.0029519662791675214))*o):r<=5.5?(i=r*r,a=dn(r/bt)*dt(r)*.6366197723675814,o=function(r){var n,t;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(n=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,t=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(n=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),t=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),n/t)}(i),a+(u=(r+bt)*(r-1013/256-.0006471693148578684))*o):r<=8?(i=r*r,a=dn(r/wt)*dt(r)*.6366197723675814,o=function(r){var n,t;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(n=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,t=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(n=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,t=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),n/t)}(i),a+(u=(r+wt)*(r-1814/256-.00011356030177269763))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(i=8/r)*i),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),u=.5641895835477563/wn(r),vt(r,ht,1,0),u*(n*(ht[0]-ht[1])+i*t*(ht[1]+ht[0])))}function jt(r){return Vr(r,mt)}export{jt as default};
//# sourceMappingURL=mod.js.map
