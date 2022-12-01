// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBessely0=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,n){return null!=r&&d.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var n,t,e;if(null==r)return b.call(r);t=r[m],n=w(r,m);try{r[m]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[m]=t:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var h=s();function A(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||A(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var N="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var T=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(N)return N;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",P);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function B(r){return null!==r&&"object"==typeof r}function G(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=P.exec(e.toString()))return n[1]}return B(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(B,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!V(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(B));var H="function"==typeof y||"object"==typeof I||"function"==typeof F?function(r){return G(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?G(r).toLowerCase():n};function L(r){return"function"===H(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!w(r,"constructor")&&w(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&w(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!w(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(w(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:k(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}var rr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var tr,er="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,n,t;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=tr,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir([1,3.14,-3.14,NaN]),t=n,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,pr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,256,257]),t=n,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,gr={uint16:wr,uint8:sr};(jr=new gr.uint16(1))[0]=4660;var hr=52===new gr.uint8(jr.buffer)[0],Ar=!0===hr?1:0,_r=new cr(1),Or=new or(_r.buffer);function Nr(r){return _r[0]=r,Or[Ar]}var Ur=!0===hr?1:0,Sr=new cr(1),Er=new or(Sr.buffer);function Tr(r){return r!=r}var Fr=1023,Ir=W.NEGATIVE_INFINITY;var xr=.6931471803691238,Pr=1.9082149292705877e-10,Vr=1048575;function Br(r){var n,t,e,o,u,i,f,a,c,l,y,v;return 0===r?Ir:Tr(r)||r<0?NaN:(u=0,(t=Nr(r))<1048576&&(u-=54,t=Nr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Fr|0,u+=(a=(t&=Vr)+614244&1048576|0)>>20|0,f=(r=function(r,n){return Sr[0]=r,Er[Ur]=n>>>0,Sr[0]}(r,t|1072693248^a))-1,(Vr&2+t)<3?0===f?0===u?0:u*xr+u*Pr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*xr-(i-u*Pr-f)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*xr-(n-(l*(n+i)+u*Pr)-f)):0===u?f-l*(f-i):u*xr-(l*(f-i)-u*Pr-f))))}var Gr,Hr,Lr=Math.sqrt,Mr=Number.POSITIVE_INFINITY,kr=!0===hr?0:1,Wr=new cr(1),Cr=new or(Wr.buffer);!0===hr?(Gr=1,Hr=0):(Gr=0,Hr=1);var Yr={HIGH:Gr,LOW:Hr},qr=new cr(1),Rr=new or(qr.buffer),Xr=Yr.HIGH,zr=Yr.LOW;function Dr(r,n){return Rr[Xr]=r,Rr[zr]=n,qr[0]}var Jr=Math.floor;function Kr(r){return r===Mr||r===Ir}var Qr,Zr;!0===hr?(Qr=1,Zr=0):(Qr=0,Zr=1);var $r={HIGH:Qr,LOW:Zr},rn=new cr(1),nn=new or(rn.buffer),tn=$r.HIGH,en=$r.LOW;function on(r,n,t,e){return rn[0]=r,n[e]=nn[tn],n[e+t]=nn[en],n}function un(r){return on(r,[0,0],1,0)}l(un,"assign",on);var fn=[0,0];function an(r,n,t,e){return Tr(r)||Kr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return an(r,[0,0],1,0)}),"assign",an);var cn=[0,0],ln=[0,0];function yn(r,n){var t,e,o,u,i,f;return 0===n||0===r||Tr(r)||Kr(r)?r:(an(r,cn,1,0),n+=cn[1],n+=function(r){var n=Nr(r);return(n=(2146435072&n)>>>20)-Fr|0}(r=cn[0]),n<-1074?(o=0,u=r,un.assign(o,fn,1,0),i=fn[0],i&=2147483647,f=Nr(u),Dr(i|=f&=2147483648,fn[1])):n>1023?r<0?Ir:Mr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,un.assign(r,ln,1,0),t=ln[0],t&=2148532223,e*Dr(t|=n+Fr<<20,ln[1])))}function vn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var pn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],bn=16777216,dn=5.960464477539063e-8,wn=vn(20),mn=vn(20),jn=vn(20),gn=vn(20);function hn(r,n,t,e,o,u,i,f,a){var c,l,y,v,p,s,b,d,w;for(v=u,w=e[t],d=t,p=0;d>0;p++)l=dn*w|0,gn[p]=w-bn*l|0,w=e[d-1]+l,d-=1;if(w=yn(w,o),w-=8*Jr(.125*w),w-=b=0|w,y=0,o>0?(b+=p=gn[t-1]>>24-o,gn[t-1]-=p<<24-o,y=gn[t-1]>>23-o):0===o?y=gn[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)d=gn[p],0===c?0!==d&&(c=1,gn[p]=16777216-d):gn[p]=16777215-d;if(o>0)switch(o){case 1:gn[t-1]&=8388607;break;case 2:gn[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=yn(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=gn[p];if(0===d){for(s=1;0===gn[u-s];s++);for(p=t+1;p<=t+s;p++){for(a[f+p]=pn[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return hn(r,n,t+=s,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===gn[t];)t-=1,o-=24;else(w=yn(w,-o))>=bn?(l=dn*w|0,gn[t]=w-bn*l|0,o+=24,gn[t+=1]=l):gn[t]=0|w;for(l=yn(1,o),p=t;p>=0;p--)e[p]=l*gn[p],l*=dn;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=sn[s]*e[p+s];jn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=jn[p];for(n[0]=0===y?l:-l,l=jn[0]-l,p=1;p<=t;p++)l+=jn[p];return n[1]=0===y?l:-l,7&b}function An(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)wn[a]=c<0?0:pn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*wn[i+(a-c)];mn[a]=o}return 4,hn(r,n,4,mn,f,4,u,i,wn)}var _n=Math.round;function On(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=_n(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Nr(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Nr(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var Nn=1.5707963267341256,Un=6077100506506192e-26,Sn=2*Un,En=3*Un,Tn=4*Un,Fn=[0,0,0],In=[0,0];function xn(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Nr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?On(r,o,n):o<=1073928572?r>0?(a=r-Nn,n[0]=a-Un,n[1]=a-n[0]-Un,1):(a=r+Nn,n[0]=a+Un,n[1]=a-n[0]+Un,-1):r>0?(a=r-2*Nn,n[0]=a-Sn,n[1]=a-n[0]-Sn,2):(a=r+2*Nn,n[0]=a+Sn,n[1]=a-n[0]+Sn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?On(r,o,n):r>0?(a=r-3*Nn,n[0]=a-En,n[1]=a-n[0]-En,3):(a=r+3*Nn,n[0]=a+En,n[1]=a-n[0]+En,-3):1075388923===o?On(r,o,n):r>0?(a=r-4*Nn,n[0]=a-Tn,n[1]=a-n[0]-Tn,4):(a=r+4*Nn,n[0]=a+Tn,n[1]=a-n[0]+Tn,-4);if(o<1094263291)return On(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Wr[0]=r,Cr[kr]}(r),a=Dr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Fn[i]=0|a,a=16777216*(a-Fn[i]);for(Fn[2]=a,u=3;0===Fn[u-1];)u-=1;return f=An(Fn,In,e,u),r<0?(n[0]=-In[0],n[1]=-In[1],-f):(n[0]=In[0],n[1]=In[1],f)}var Pn=-.16666666666666632;function Vn(r,n,t,e,o){var u,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,t[o]=0===n?r+f*(Pn+c*i):r-(c*(.5*n-f*i)-n-f*Pn),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),t[o+e]=a+(1-a-u+(c*i-r*n)),t}var Bn=[0,0];function Gn(r,n,t,e){var o,u;if(o=Nr(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),Vn(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(u=xn(r,Bn),Vn(Bn[0],Bn[1],n,t,e),3&u){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}function Hn(r){return Gn(r,[0,0],1,0)}l(Hn,"assign",Gn);var Ln=[0,0];function Mn(r){var n,t,e,o,u,i;return r<0&&(r=-r),r===Mr?0:0===r?1:r<=4?(o=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)}(u=r*r),(i=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)}(u=1-r*r/64),(i=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(u=8/r)*u),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),i=.5641895835477563/Lr(r),Hn(Ln),i*(n*(Ln[1]+Ln[0])-u*t*(Ln[0]-Ln[1])))}var kn=.6366197723675814,Wn=.8935769662791675,Cn=3.957678419314858,Yn=7.086051060301773,qn=[0,0];function Rn(r){var n,t,e,o,u,i,f;return r<0?NaN:0===r?Ir:r===Mr?0:r<=3?(u=r*r,i=Br(r/Wn)*Mn(r)*kn,o=function(r){var n,t;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(n=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),t=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(n=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,t=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),n/t)}(u),i+(f=(r+Wn)*(r-228/256-.0029519662791675214))*o):r<=5.5?(u=r*r,i=Br(r/Cn)*Mn(r)*kn,o=function(r){var n,t;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(n=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,t=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(n=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),t=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),n/t)}(u),i+(f=(r+Cn)*(r-1013/256-.0006471693148578684))*o):r<=8?(u=r*r,i=Br(r/Yn)*Mn(r)*kn,o=function(r){var n,t;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(n=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,t=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(n=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,t=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),n/t)}(u),i+(f=(r+Yn)*(r-1814/256-.00011356030177269763))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(u=8/r)*u),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),f=.5641895835477563/Lr(r),Hn(qn),f*(n*(qn[0]-qn[1])+u*t*(qn[1]+qn[0])))}return function(r){return $(r,Rn)}}));
//# sourceMappingURL=browser.js.map
