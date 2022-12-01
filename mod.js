// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,n){return null!=r&&d.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var n,t,e;if(null==r)return s.call(r);t=r[m],n=w(r,m);try{r[m]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[m]=t:delete r[m],e}:function(r){return s.call(r)},g=Boolean.prototype.toString;var A=b();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var N="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(N)return N;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=x.exec(e.toString()))return n[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!V(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!w(r,"constructor")&&w(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&w(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!w(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(w(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:k(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}var rr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var tr,er="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,n,t;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=tr,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir([1,3.14,-3.14,NaN]),t=n,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,pr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,256,257]),t=n,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=vr,sr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(sr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,gr={uint16:wr,uint8:br};(jr=new gr.uint16(1))[0]=4660;var Ar=52===new gr.uint8(jr.buffer)[0],hr=!0===Ar?1:0,_r=new cr(1),Or=new or(_r.buffer);function Nr(r){return _r[0]=r,Or[hr]}var Ur=!0===Ar?1:0,Sr=new cr(1),Er=new or(Sr.buffer);function Fr(r){return r!=r}var Ir=W.NEGATIVE_INFINITY;var Pr=.6931471803691238,Tr=1.9082149292705877e-10;function xr(r){var n,t,e,o,u,i,f,a,c,l,y,v;return 0===r?Ir:Fr(r)||r<0?NaN:(u=0,(t=Nr(r))<1048576&&(u-=54,t=Nr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=function(r,n){return Sr[0]=r,Er[Ur]=n>>>0,Sr[0]}(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===u?0:u*Pr+u*Tr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Pr-(i-u*Tr-f)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Pr-(n-(l*(n+i)+u*Tr)-f)):0===u?f-l*(f-i):u*Pr-(l*(f-i)-u*Tr-f))))}var Vr,Gr,Hr=Math.sqrt,Br=Number.POSITIVE_INFINITY,Lr=!0===Ar?0:1,Mr=new cr(1),kr=new or(Mr.buffer);!0===Ar?(Vr=1,Gr=0):(Vr=0,Gr=1);var Wr={HIGH:Vr,LOW:Gr},Cr=new cr(1),Yr=new or(Cr.buffer),qr=Wr.HIGH,Rr=Wr.LOW;function Xr(r,n){return Yr[qr]=r,Yr[Rr]=n,Cr[0]}var zr=Math.floor;function Dr(r){return r===Br||r===Ir}var Jr,Kr;!0===Ar?(Jr=1,Kr=0):(Jr=0,Kr=1);var Qr={HIGH:Jr,LOW:Kr},Zr=new cr(1),$r=new or(Zr.buffer),rn=Qr.HIGH,nn=Qr.LOW;function tn(r,n,t,e){return Zr[0]=r,n[e]=$r[rn],n[e+t]=$r[nn],n}function en(r){return tn(r,[0,0],1,0)}l(en,"assign",tn);var on=[0,0];function un(r,n,t,e){return Fr(r)||Dr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return un(r,[0,0],1,0)}),"assign",un);var fn=[0,0],an=[0,0];function cn(r,n){var t,e,o,u,i,f;return 0===n||0===r||Fr(r)||Dr(r)?r:(un(r,fn,1,0),n+=fn[1],n+=function(r){var n=Nr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=fn[0]),n<-1074?(o=0,u=r,en.assign(o,on,1,0),i=on[0],i&=2147483647,f=Nr(u),Xr(i|=f&=2147483648,on[1])):n>1023?r<0?Ir:Br:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,en.assign(r,an,1,0),t=an[0],t&=2148532223,e*Xr(t|=n+1023<<20,an[1])))}function ln(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var yn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pn=5.960464477539063e-8,bn=ln(20),sn=ln(20),dn=ln(20),wn=ln(20);function mn(r,n,t,e,o,u,i,f,a){var c,l,y,v,p,b,s,d,w;for(v=u,w=e[t],d=t,p=0;d>0;p++)l=pn*w|0,wn[p]=w-16777216*l|0,w=e[d-1]+l,d-=1;if(w=cn(w,o),w-=8*zr(.125*w),w-=s=0|w,y=0,o>0?(s+=p=wn[t-1]>>24-o,wn[t-1]-=p<<24-o,y=wn[t-1]>>23-o):0===o?y=wn[t-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)d=wn[p],0===c?0!==d&&(c=1,wn[p]=16777216-d):wn[p]=16777215-d;if(o>0)switch(o){case 1:wn[t-1]&=8388607;break;case 2:wn[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=cn(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=wn[p];if(0===d){for(b=1;0===wn[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=yn[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return mn(r,n,t+=b,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===wn[t];)t-=1,o-=24;else(w=cn(w,-o))>=16777216?(l=pn*w|0,wn[t]=w-16777216*l|0,o+=24,wn[t+=1]=l):wn[t]=0|w;for(l=cn(1,o),p=t;p>=0;p--)e[p]=l*wn[p],l*=pn;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=vn[b]*e[p+b];dn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=dn[p];for(n[0]=0===y?l:-l,l=dn[0]-l,p=1;p<=t;p++)l+=dn[p];return n[1]=0===y?l:-l,7&s}function jn(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)bn[a]=c<0?0:yn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*bn[i+(a-c)];sn[a]=o}return 4,mn(r,n,4,sn,f,4,u,i,bn)}var gn=Math.round;function An(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=gn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Nr(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Nr(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var hn=1.5707963267341256,_n=6077100506506192e-26,On=2*_n,Nn=4*_n,Un=[0,0,0],Sn=[0,0];function En(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Nr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?An(r,o,n):o<=1073928572?r>0?(a=r-hn,n[0]=a-_n,n[1]=a-n[0]-_n,1):(a=r+hn,n[0]=a+_n,n[1]=a-n[0]+_n,-1):r>0?(a=r-2*hn,n[0]=a-On,n[1]=a-n[0]-On,2):(a=r+2*hn,n[0]=a+On,n[1]=a-n[0]+On,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?An(r,o,n):r>0?(a=r-3*hn,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*hn,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===o?An(r,o,n):r>0?(a=r-4*hn,n[0]=a-Nn,n[1]=a-n[0]-Nn,4):(a=r+4*hn,n[0]=a+Nn,n[1]=a-n[0]+Nn,-4);if(o<1094263291)return An(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Mr[0]=r,kr[Lr]}(r),a=Xr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Un[i]=0|a,a=16777216*(a-Un[i]);for(Un[2]=a,u=3;0===Un[u-1];)u-=1;return f=jn(Un,Sn,e,u),r<0?(n[0]=-Sn[0],n[1]=-Sn[1],-f):(n[0]=Sn[0],n[1]=Sn[1],f)}var Fn=-.16666666666666632;function In(r,n,t,e,o){var u,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,t[o]=0===n?r+f*(Fn+c*i):r-(c*(.5*n-f*i)-n-f*Fn),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),t[o+e]=a+(1-a-u+(c*i-r*n)),t}var Pn=[0,0];function Tn(r,n,t,e){var o,u;if(o=Nr(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),In(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(u=En(r,Pn),In(Pn[0],Pn[1],n,t,e),3&u){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}function xn(r){return Tn(r,[0,0],1,0)}l(xn,"assign",Tn);var Vn=[0,0];function Gn(r){var n,t,e,o,u,i;return r<0&&(r=-r),r===Br?0:0===r?1:r<=4?(o=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)}(u=r*r),(i=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)}(u=1-r*r/64),(i=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(u=8/r)*u),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),i=.5641895835477563/Hr(r),xn(Vn),i*(n*(Vn[1]+Vn[0])-u*t*(Vn[0]-Vn[1])))}var Hn=.8935769662791675,Bn=3.957678419314858,Ln=7.086051060301773,Mn=[0,0];function kn(r){var n,t,e,o,u,i,f;return r<0?NaN:0===r?Ir:r===Br?0:r<=3?(u=r*r,i=xr(r/Hn)*Gn(r)*.6366197723675814,o=function(r){var n,t;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(n=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),t=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(n=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,t=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),n/t)}(u),i+(f=(r+Hn)*(r-228/256-.0029519662791675214))*o):r<=5.5?(u=r*r,i=xr(r/Bn)*Gn(r)*.6366197723675814,o=function(r){var n,t;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(n=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,t=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(n=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),t=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),n/t)}(u),i+(f=(r+Bn)*(r-1013/256-.0006471693148578684))*o):r<=8?(u=r*r,i=xr(r/Ln)*Gn(r)*.6366197723675814,o=function(r){var n,t;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(n=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,t=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(n=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,t=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),n/t)}(u),i+(f=(r+Ln)*(r-1814/256-.00011356030177269763))*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(e=(u=8/r)*u),t=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(e),f=.5641895835477563/Hr(r),xn(Mn),f*(n*(Mn[0]-Mn[1])+u*t*(Mn[1]+Mn[0])))}function Wn(r){return $(r,kn)}export{Wn as default};
//# sourceMappingURL=mod.js.map