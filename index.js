// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBessely0=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var h=s();function A(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||A(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var N="object"==typeof self?self:null,U="object"==typeof window?window:null,S="object"==typeof global?global:null;var E=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(N)return N;if(U)return U;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),T=E.document&&E.document.childNodes,F=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(I,"REGEXP",x);var P=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function V(r){return null!==r&&"object"==typeof r}function B(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=x.exec(e.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!P(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(V));var G="function"==typeof y||"object"==typeof F||"function"==typeof T?function(r){return B(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?B(r).toLowerCase():t};function H(r){return"function"===G(r)}function L(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&H(r.next)}function M(r){return"number"==typeof r}var k=Number,W=k.prototype.toString;var C=s();function Y(r){return"object"==typeof r&&(r instanceof k||(C?function(r){try{return W.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function q(r){return M(r)||Y(r)}l(q,"isPrimitive",M),l(q,"isObject",Y);var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var X,z=Object.getPrototypeOf;X=H(Object.getPrototypeOf)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=X;var J=Object.prototype;function K(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!P(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),D(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&H(t.constructor)&&"[object Function]"===j(t.constructor)&&m(t,"isPrototypeOf")&&H(t.isPrototypeOf)&&(t===J||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function Q(r,t){return K(t)?(m(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function Z(r,t,n){var e,o,u,i;if(!L(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!H(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),R&&H(r[R])&&l(o,R,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:M(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return Z(r[R](),t,e)}}var $="function"==typeof Uint32Array;var rr="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=($&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er=tr,or="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var ir,fr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur([1,3.14,-3.14,NaN]),n=t,r=(or&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var ar=ir,cr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var yr,vr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr(t=[1,3.14,-3.14,256,257]),n=t,r=(cr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var pr=yr,sr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var dr,mr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),n=t,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr,jr={uint16:dr,uint8:pr};(wr=new jr.uint16(1))[0]=4660;var gr=52===new jr.uint8(wr.buffer)[0],hr=!0===gr?1:0,Ar=new ar(1),_r=new er(Ar.buffer);function Or(r){return Ar[0]=r,_r[hr]}var Nr=!0===gr?1:0,Ur=new ar(1),Sr=new er(Ur.buffer);function Er(r){return r!=r}var Tr=1023,Fr=k.NEGATIVE_INFINITY;var Ir=.6931471803691238,xr=1.9082149292705877e-10,Pr=1048575;function Vr(r){var t,n,e,o,u,i,f,a,c,l,y,v;return 0===r?Fr:Er(r)||r<0?NaN:(u=0,(n=Or(r))<1048576&&(u-=54,n=Or(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-Tr|0,u+=(a=(n&=Pr)+614244&1048576|0)>>20|0,f=(r=function(r,t){return Ur[0]=r,Sr[Nr]=t>>>0,Ur[0]}(r,n|1072693248^a))-1,(Pr&2+n)<3?0===f?0===u?0:u*Ir+u*xr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Ir-(i-u*xr-f)):(a=n-398458|0,c=440401-n|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(t=.5*f*f,0===u?f-(t-l*(t+i)):u*Ir-(t-(l*(t+i)+u*xr)-f)):0===u?f-l*(f-i):u*Ir-(l*(f-i)-u*xr-f))))}var Br,Gr,Hr=Math.sqrt,Lr=Number.POSITIVE_INFINITY,Mr=!0===gr?0:1,kr=new ar(1),Wr=new er(kr.buffer);!0===gr?(Br=1,Gr=0):(Br=0,Gr=1);var Cr={HIGH:Br,LOW:Gr},Yr=new ar(1),qr=new er(Yr.buffer),Rr=Cr.HIGH,Xr=Cr.LOW;function zr(r,t){return qr[Rr]=r,qr[Xr]=t,Yr[0]}var Dr=Math.floor;function Jr(r){return r===Lr||r===Fr}var Kr,Qr;!0===gr?(Kr=1,Qr=0):(Kr=0,Qr=1);var Zr={HIGH:Kr,LOW:Qr},$r=new ar(1),rt=new er($r.buffer),tt=Zr.HIGH,nt=Zr.LOW;function et(r,t,n,e){return $r[0]=r,t[e]=rt[tt],t[e+n]=rt[nt],t}function ot(r){return et(r,[0,0],1,0)}l(ot,"assign",et);var ut=[0,0];function it(r,t,n,e){return Er(r)||Jr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return it(r,[0,0],1,0)}),"assign",it);var ft=[0,0],at=[0,0];function ct(r,t){var n,e,o,u,i,f;return 0===t||0===r||Er(r)||Jr(r)?r:(it(r,ft,1,0),t+=ft[1],t+=function(r){var t=Or(r);return(t=(2146435072&t)>>>20)-Tr|0}(r=ft[0]),t<-1074?(o=0,u=r,ot.assign(o,ut,1,0),i=ut[0],i&=2147483647,f=Or(u),zr(i|=f&=2147483648,ut[1])):t>1023?r<0?Fr:Lr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ot.assign(r,at,1,0),n=at[0],n&=2148532223,e*zr(n|=t+Tr<<20,at[1])))}function lt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var yt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pt=16777216,st=5.960464477539063e-8,bt=lt(20),dt=lt(20),mt=lt(20),wt=lt(20);function jt(r,t,n,e,o,u,i,f,a){var c,l,y,v,p,s,b,d,m;for(v=u,m=e[n],d=n,p=0;d>0;p++)l=st*m|0,wt[p]=m-pt*l|0,m=e[d-1]+l,d-=1;if(m=ct(m,o),m-=8*Dr(.125*m),m-=b=0|m,y=0,o>0?(b+=p=wt[n-1]>>24-o,wt[n-1]-=p<<24-o,y=wt[n-1]>>23-o):0===o?y=wt[n-1]>>23:m>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)d=wt[p],0===c?0!==d&&(c=1,wt[p]=16777216-d):wt[p]=16777215-d;if(o>0)switch(o){case 1:wt[n-1]&=8388607;break;case 2:wt[n-1]&=4194303}2===y&&(m=1-m,0!==c&&(m-=ct(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=wt[p];if(0===d){for(s=1;0===wt[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=yt[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return jt(r,t,n+=s,e,o,u,i,f,a)}}if(0===m)for(n-=1,o-=24;0===wt[n];)n-=1,o-=24;else(m=ct(m,-o))>=pt?(l=st*m|0,wt[n]=m-pt*l|0,o+=24,wt[n+=1]=l):wt[n]=0|m;for(l=ct(1,o),p=n;p>=0;p--)e[p]=l*wt[p],l*=st;for(p=n;p>=0;p--){for(l=0,s=0;s<=v&&s<=n-p;s++)l+=vt[s]*e[p+s];mt[n-p]=l}for(l=0,p=n;p>=0;p--)l+=mt[p];for(t[0]=0===y?l:-l,l=mt[0]-l,p=1;p<=n;p++)l+=mt[p];return t[1]=0===y?l:-l,7&b}function gt(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)bt[a]=c<0?0:yt[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*bt[i+(a-c)];dt[a]=o}return 4,jt(r,t,4,dt,f,4,u,i,bt)}var ht=Math.round;function At(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=ht(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Or(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Or(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var _t=1.5707963267341256,Ot=6077100506506192e-26,Nt=2*Ot,Ut=3*Ot,St=4*Ot,Et=[0,0,0],Tt=[0,0];function Ft(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Or(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?At(r,o,t):o<=1073928572?r>0?(a=r-_t,t[0]=a-Ot,t[1]=a-t[0]-Ot,1):(a=r+_t,t[0]=a+Ot,t[1]=a-t[0]+Ot,-1):r>0?(a=r-2*_t,t[0]=a-Nt,t[1]=a-t[0]-Nt,2):(a=r+2*_t,t[0]=a+Nt,t[1]=a-t[0]+Nt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?At(r,o,t):r>0?(a=r-3*_t,t[0]=a-Ut,t[1]=a-t[0]-Ut,3):(a=r+3*_t,t[0]=a+Ut,t[1]=a-t[0]+Ut,-3):1075388923===o?At(r,o,t):r>0?(a=r-4*_t,t[0]=a-St,t[1]=a-t[0]-St,4):(a=r+4*_t,t[0]=a+St,t[1]=a-t[0]+St,-4);if(o<1094263291)return At(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return kr[0]=r,Wr[Mr]}(r),a=zr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Et[i]=0|a,a=16777216*(a-Et[i]);for(Et[2]=a,u=3;0===Et[u-1];)u-=1;return f=gt(Et,Tt,e,u),r<0?(t[0]=-Tt[0],t[1]=-Tt[1],-f):(t[0]=Tt[0],t[1]=Tt[1],f)}var It=-.16666666666666632;function xt(r,t,n,e,o){var u,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,n[o]=0===t?r+f*(It+c*i):r-(c*(.5*t-f*i)-t-f*It),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),n[o+e]=a+(1-a-u+(c*i-r*t)),n}var Pt=[0,0];function Vt(r,t,n,e){var o,u;if(o=Or(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),xt(r,0,t,n,e);if(o>=2146435072)return t[e]=NaN,t[e+n]=NaN,t;switch(u=Ft(r,Pt),xt(Pt[0],Pt[1],t,n,e),3&u){case 1:return o=t[e+n],t[e+n]=-t[e],t[e]=o,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return o=-t[e+n],t[e+n]=t[e],t[e]=o,t;default:return t}}function Bt(r){return Vt(r,[0,0],1,0)}l(Bt,"assign",Vt);var Gt=[0,0];function Ht(r){var t,n,e,o,u,i;return r<0&&(r=-r),r===Lr?0:0===r?1:r<=4?(o=function(r){var t,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/n)}(u=r*r),(i=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var t,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/n)}(u=1-r*r/64),(i=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)}(e=(u=8/r)*u),n=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)}(e),i=.5641895835477563/Hr(r),Bt(Gt),i*(t*(Gt[1]+Gt[0])-u*n*(Gt[0]-Gt[1])))}var Lt=.6366197723675814,Mt=.8935769662791675,kt=3.957678419314858,Wt=7.086051060301773,Ct=[0,0];function Yt(r){var t,n,e,o,u,i,f;return r<0?NaN:0===r?Fr:r===Lr?0:r<=3?(u=r*r,i=Vr(r/Mt)*Ht(r)*Lt,o=function(r){var t,n;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(t=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),n=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(t=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,n=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),t/n)}(u),i+(f=(r+Mt)*(r-228/256-.0029519662791675214))*o):r<=5.5?(u=r*r,i=Vr(r/kt)*Ht(r)*Lt,o=function(r){var t,n;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(t=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,n=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(t=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),n=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),t/n)}(u),i+(f=(r+kt)*(r-1013/256-.0006471693148578684))*o):r<=8?(u=r*r,i=Vr(r/Wt)*Ht(r)*Lt,o=function(r){var t,n;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(t=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,n=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(t=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,n=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),t/n)}(u),i+(f=(r+Wt)*(r-1814/256-.00011356030177269763))*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)}(e=(u=8/r)*u),n=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)}(e),f=.5641895835477563/Hr(r),Bt(Ct),f*(t*(Ct[0]-Ct[1])+u*n*(Ct[1]+Ct[0])))}return function(r){return Z(r,Yt)}}));
//# sourceMappingURL=index.js.map
