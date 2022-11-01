// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[m]=n:delete r[m],e}:function(r){return s.call(r)},h=Boolean.prototype.toString;var A=b();function g(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||g(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",g);var N="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(N)return N;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=x.exec(e.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!V(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),t,e)}}var rr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var nr,er="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=nr,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir([1,3.14,-3.14,NaN]),n=t,r=(ur&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,pr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),n=t,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=vr,sr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,hr={uint16:wr,uint8:br};(jr=new hr.uint16(1))[0]=4660;var Ar=52===new hr.uint8(jr.buffer)[0],gr=!0===Ar?1:0,_r=new cr(1),Or=new or(_r.buffer);function Nr(r){return _r[0]=r,Or[gr]}var Ur=!0===Ar?1:0,Sr=new cr(1),Er=new or(Sr.buffer);function Fr(r){return r!=r}var Ir=W.NEGATIVE_INFINITY;var Pr=.6931471803691238,Tr=1.9082149292705877e-10;function xr(r){var t,n,e,o,u,i,f,a,c,l,y,v;return 0===r?Ir:Fr(r)||r<0?NaN:(u=0,(n=Nr(r))<1048576&&(u-=54,n=Nr(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(a=(n&=1048575)+614244&1048576|0)>>20|0,f=(r=function(r,t){return Sr[0]=r,Er[Ur]=t>>>0,Sr[0]}(r,n|1072693248^a))-1,(1048575&2+n)<3?0===f?0===u?0:u*Pr+u*Tr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Pr-(i-u*Tr-f)):(a=n-398458|0,c=440401-n|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(t=.5*f*f,0===u?f-(t-l*(t+i)):u*Pr-(t-(l*(t+i)+u*Tr)-f)):0===u?f-l*(f-i):u*Pr-(l*(f-i)-u*Tr-f))))}var Vr,Gr,Hr=Math.sqrt,Br=Number.POSITIVE_INFINITY,Lr=!0===Ar?0:1,Mr=new cr(1),kr=new or(Mr.buffer);!0===Ar?(Vr=1,Gr=0):(Vr=0,Gr=1);var Wr={HIGH:Vr,LOW:Gr},Cr=new cr(1),Yr=new or(Cr.buffer),qr=Wr.HIGH,Rr=Wr.LOW;function Xr(r,t){return Yr[qr]=r,Yr[Rr]=t,Cr[0]}var zr,Dr,Jr=Math.floor;function Kr(r){return r===Br||r===Ir}!0===Ar?(zr=1,Dr=0):(zr=0,Dr=1);var Qr={HIGH:zr,LOW:Dr},Zr=new cr(1),$r=new or(Zr.buffer),rt=Qr.HIGH,tt=Qr.LOW;function nt(r,t){return Zr[0]=t,r[0]=$r[rt],r[1]=$r[tt],r}function et(r,t){return 1===arguments.length?nt([0,0],r):nt(r,t)}var ot=[0,0];function ut(r,t,n,e){return Fr(r)||Kr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return ut(r,[0,0],1,0)}),"assign",ut);var it=[0,0],ft=[0,0];function at(r,t){var n,e,o,u,i;return 0===t||0===r||Fr(r)||Kr(r)?r:(ut(r,it,1,0),t+=it[1],t+=function(r){var t=Nr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=it[0]),t<-1074?(o=r,et(ot,0),u=ot[0],u&=2147483647,i=Nr(o),Xr(u|=i&=2147483648,ot[1])):t>1023?r<0?Ir:Br:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,et(ft,r),n=ft[0],n&=2148532223,e*Xr(n|=t+1023<<20,ft[1])))}function ct(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var lt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],vt=5.960464477539063e-8,pt=ct(20),bt=ct(20),st=ct(20),dt=ct(20);function wt(r,t,n,e,o,u,i,f,a){var c,l,y,v,p,b,s,d,w;for(v=u,w=e[n],d=n,p=0;d>0;p++)l=vt*w|0,dt[p]=w-16777216*l|0,w=e[d-1]+l,d-=1;if(w=at(w,o),w-=8*Jr(.125*w),w-=s=0|w,y=0,o>0?(s+=p=dt[n-1]>>24-o,dt[n-1]-=p<<24-o,y=dt[n-1]>>23-o):0===o?y=dt[n-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<n;p++)d=dt[p],0===c?0!==d&&(c=1,dt[p]=16777216-d):dt[p]=16777215-d;if(o>0)switch(o){case 1:dt[n-1]&=8388607;break;case 2:dt[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=at(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=dt[p];if(0===d){for(b=1;0===dt[u-b];b++);for(p=n+1;p<=n+b;p++){for(a[f+p]=lt[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return wt(r,t,n+=b,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===dt[n];)n-=1,o-=24;else(w=at(w,-o))>=16777216?(l=vt*w|0,dt[n]=w-16777216*l|0,o+=24,dt[n+=1]=l):dt[n]=0|w;for(l=at(1,o),p=n;p>=0;p--)e[p]=l*dt[p],l*=vt;for(p=n;p>=0;p--){for(l=0,b=0;b<=v&&b<=n-p;b++)l+=yt[b]*e[p+b];st[n-p]=l}for(l=0,p=n;p>=0;p--)l+=st[p];for(t[0]=0===y?l:-l,l=st[0]-l,p=1;p<=n;p++)l+=st[p];return t[1]=0===y?l:-l,7&s}function mt(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)pt[a]=c<0?0:lt[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*pt[i+(a-c)];bt[a]=o}return 4,wt(r,t,4,bt,f,4,u,i,pt)}var jt=Math.round;function ht(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=jt(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Nr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Nr(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var At=1.5707963267341256,gt=6077100506506192e-26,_t=2*gt,Ot=4*gt,Nt=[0,0,0],Ut=[0,0];function St(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Nr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?ht(r,o,t):o<=1073928572?r>0?(a=r-At,t[0]=a-gt,t[1]=a-t[0]-gt,1):(a=r+At,t[0]=a+gt,t[1]=a-t[0]+gt,-1):r>0?(a=r-2*At,t[0]=a-_t,t[1]=a-t[0]-_t,2):(a=r+2*At,t[0]=a+_t,t[1]=a-t[0]+_t,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?ht(r,o,t):r>0?(a=r-3*At,t[0]=a-1.8231301519518578e-10,t[1]=a-t[0]-1.8231301519518578e-10,3):(a=r+3*At,t[0]=a+1.8231301519518578e-10,t[1]=a-t[0]+1.8231301519518578e-10,-3):1075388923===o?ht(r,o,t):r>0?(a=r-4*At,t[0]=a-Ot,t[1]=a-t[0]-Ot,4):(a=r+4*At,t[0]=a+Ot,t[1]=a-t[0]+Ot,-4);if(o<1094263291)return ht(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Mr[0]=r,kr[Lr]}(r),a=Xr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Nt[i]=0|a,a=16777216*(a-Nt[i]);for(Nt[2]=a,u=3;0===Nt[u-1];)u-=1;return f=mt(Nt,Ut,e,u),r<0?(t[0]=-Ut[0],t[1]=-Ut[1],-f):(t[0]=Ut[0],t[1]=Ut[1],f)}var Et=-.16666666666666632;function Ft(r,t,n){var e,o,u,i,f;return o=.00833333333332249+(f=t*t)*(27557313707070068e-22*f-.0001984126982985795)+f*(i=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*t,r[0]=0===n?t+u*(Et+f*o):t-(f*(.5*n-u*o)-n-u*Et),o=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),o+=i*i*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),i=1-(e=.5*f),r[1]=i+(1-i-e+(f*o-t*n)),r}var It=[0,0];function Pt(r,t){var n,e;if(n=Nr(t),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),Ft(r,t,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=St(t,It),Ft(r,It[0],It[1]),3&e){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}}function Tt(r,t){return 1===arguments.length?Pt([0,0],r):Pt(r,t)}var xt=[0,0];function Vt(r){var t,n,e,o,u,i;return r<0&&(r=-r),r===Br?0:0===r?1:r<=4?(o=function(r){var t,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/n)}(u=r*r),(i=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var t,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/n)}(u=1-r*r/64),(i=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)}(e=(u=8/r)*u),n=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)}(e),i=.5641895835477563/Hr(r),Tt(xt,r),i*(t*(xt[1]+xt[0])-u*n*(xt[0]-xt[1])))}var Gt=.8935769662791675,Ht=3.957678419314858,Bt=7.086051060301773,Lt=[0,0];function Mt(r){var t,n,e,o,u,i,f;return r<0?NaN:0===r?Ir:r===Br?0:r<=3?(u=r*r,i=xr(r/Gt)*Vt(r)*.6366197723675814,o=function(r){var t,n;return 0===r?.18214429522164177:((r<0?-r:r)<=1?(t=107235387820.03177+r*(r*(204222743.5737662+r*(r*(10102.532948020907+-18.402381979244993*r)-2128754.84744018))-8371625545.12605),n=588738657389.9703+r*(8161718777.729036+r*(55662956.624278255+r*(238893.93209447255+r*(664.7598668924019+1*r))))):(t=(r=1/r)*(10102.532948020907+r*(r*(204222743.5737662+r*(107235387820.03177*r-8371625545.12605))-2128754.84744018))-18.402381979244993,n=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956.624278255+r*(8161718777.729036+588738657389.9703*r))))),t/n)}(u),i+(f=(r+Gt)*(r-228/256-.0029519662791675214))*o):r<=5.5?(u=r*r,i=xr(r/Ht)*Vt(r)*.6366197723675814,o=function(r){var t,n;return 0===r?-.051200622130023854:((r<0?-r:r)<=1?(t=r*(r*(43600098638.60306+r*(r*(4690528.861167863+r*(17.427031242901595*r-14566.865832663636))-695904393.9461962))-551074352067.2264)-22213976967566.19,n=433861465807072.6+r*(5426682441941.234+r*(34015103849.97124+r*(139602027.7098683+r*(406699.82352539554+r*(830.3085761207029+1*r)))))):(t=17.427031242901595+(r=1/r)*(r*(4690528.861167863+r*(r*(43600098638.60306+r*(-22213976967566.19*r-551074352067.2264))-695904393.9461962))-14566.865832663636),n=1+r*(830.3085761207029+r*(406699.82352539554+r*(139602027.7098683+r*(34015103849.97124+r*(5426682441941.234+433861465807072.6*r)))))),t/n)}(u),i+(f=(r+Ht)*(r-1013/256-.0006471693148578684))*o):r<=8?(u=r*r,i=xr(r/Bt)*Vt(r)*.6366197723675814,o=function(r){var t,n;return 0===r?-.023356489432789604:((r<0?-r:r)<=1?(t=r*(670166418691732.4+r*(r*(r*(2195882717.0518103+r*(r*(21363.5341693139+-17.439661319197498*r)-10085539.923498211))-193630512667.72083)-128299123640.88687))-8072872690515021,n=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(22598377924042.9+r*(86926121104.20982+r*(247272194.75672302+r*(539247.3920976806+r*(879.0336216812844+1*r))))))):(t=(r=1/r)*(21363.5341693139+r*(r*(2195882717.0518103+r*(r*(r*(670166418691732.4+-8072872690515021*r)-128299123640.88687)-193630512667.72083))-10085539.923498211))-17.439661319197498,n=1+r*(879.0336216812844+r*(539247.3920976806+r*(247272194.75672302+r*(86926121104.20982+r*(22598377924042.9+r*(0xdf3ce698dfcbf+0x4cbf33e862b0ac0*r))))))),t/n)}(u),i+(f=(r+Bt)*(r-1814/256-.00011356030177269763))*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)}(e=(u=8/r)*u),n=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)}(e),f=.5641895835477563/Hr(r),Tt(Lt,r),f*(t*(Lt[0]-Lt[1])+u*n*(Lt[1]+Lt[0])))}function kt(r){return $(r,Mt)}export{kt as default};
//# sourceMappingURL=mod.js.map
