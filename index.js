// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",i=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,o,i,f,c;if(null==r)return e.call(r);o=r[a],c=a,t=null!=(f=r)&&n.call(f,c);try{r[a]=void 0}catch(t){return e.call(r)}return i=e.call(r),t?r[a]=o:delete r[a],i}:function(r){return e.call(r)},f="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,t,e;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(f&&e instanceof Uint32Array||"[object Uint32Array]"===i(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?u:function(){throw new Error("not implemented")};var l,p=r,s="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,t,e;if("function"!=typeof y)return!1;try{t=new y([1,3.14,-3.14,NaN]),e=t,r=(s&&e instanceof Float64Array||"[object Float64Array]"===i(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?d:function(){throw new Error("not implemented")};var g,h=l,v="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var r,t,e;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),e=t,r=(v&&e instanceof Uint8Array||"[object Uint8Array]"===i(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var A,m=g,F="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,N="function"==typeof Uint16Array?Uint16Array:void 0;A=function(){var r,t,e;if("function"!=typeof E)return!1;try{t=new E(t=[1,3.14,-3.14,65536,65537]),e=t,r=(F&&e instanceof Uint16Array||"[object Uint16Array]"===i(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?N:function(){throw new Error("not implemented")};var I,_={uint16:A,uint8:m};(I=new _.uint16(1))[0]=4660;var U=52===new _.uint8(I.buffer)[0],j=!0===U?1:0,S=new h(1),T=new p(S.buffer);function k(r){return S[0]=r,T[j]}var x,O="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;x=function(){var r,t,e;if("function"!=typeof V)return!1;try{t=new V([1,3.14,-3.14,NaN]),e=t,r=(O&&e instanceof Float64Array||"[object Float64Array]"===i(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var H=!0===U?0:1,W=new x(1),$=new p(W.buffer);function L(r,t){return W[0]=r,$[H]=t>>>0,W[0]}function P(r,t,e){var n,o,a,i,f,c,u,l,p;return(o=2147483647&(n=k(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(p=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(p=r*r)*p),u=p*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=t+p*((f=p*r)*(i+u)+t),l=r+(i+=.3333333333333341*f),o>=1072010280?(1-(n>>30&2))*((u=e)-2*(r-(l*l/(l+u)-i))):1===e?l:(u=i-((p=L(l,0))-r),(c=L(a=-1/l,0))+a*((f=1+c*p)+c*u))}var C,R=2146435072,Z="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,Y="function"==typeof Float64Array?Float64Array:void 0;C=function(){var r,t,e;if("function"!=typeof M)return!1;try{t=new M([1,3.14,-3.14,NaN]),e=t,r=(Z&&e instanceof Float64Array||"[object Float64Array]"===i(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var X,z,q,B=!0===U?0:1,D=new C(1),J=new p(D.buffer),K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,rr="function"==typeof Float64Array?Float64Array:void 0;X=function(){var r,t,e;if("function"!=typeof Q)return!1;try{t=new Q([1,3.14,-3.14,NaN]),e=t,r=(K&&e instanceof Float64Array||"[object Float64Array]"===i(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")},!0===U?(z=1,q=0):(z=0,q=1);var tr={HIGH:z,LOW:q},er=new X(1),nr=new p(er.buffer),or=tr.HIGH,ar=tr.LOW;function ir(r,t){return nr[or]=r,nr[ar]=t,er[0]}var fr=Math.floor,cr=Number.POSITIVE_INFINITY,ur=Number,lr=ur.NEGATIVE_INFINITY,pr=Number.POSITIVE_INFINITY,sr=ur.NEGATIVE_INFINITY;function yr(r){return r===pr||r===sr}var dr="function"==typeof Object.defineProperty?Object.defineProperty:null,gr=Object.defineProperty;function hr(r){return"number"==typeof r}function vr(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function wr(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+vr(o):vr(o)+r,n&&(r="-"+r)),r}var br=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase;function mr(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!hr(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=wr(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=wr(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===Ar.call(r.specifier)?Ar.call(e):br.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Fr(r){return"string"==typeof r}var Er=Math.abs,Nr=String.prototype.toLowerCase,Ir=String.prototype.toUpperCase,_r=String.prototype.replace,Ur=/e\+(\d)$/,jr=/e-(\d)$/,Sr=/^(\d+)$/,Tr=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Or=/(\..*[^0])0*e/;function Vr(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!hr(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":Er(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=_r.call(e,Or,"$1e"),e=_r.call(e,xr,"e"),e=_r.call(e,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=_r.call(e,Ur,"e+0$1"),e=_r.call(e,jr,"e-0$1"),r.alternate&&(e=_r.call(e,Sr,"$1."),e=_r.call(e,Tr,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Ir.call(r.specifier)?Ir.call(e):Nr.call(e)}function Gr(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Hr(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Gr(n):Gr(n)+r}var Wr=String.fromCharCode,$r=isNaN,Lr=Array.isArray;function Pr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Cr(r){var t,e,n,o,a,i,f,c,u;if(!Lr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(i="",f=1,c=0;c<r.length;c++)if(Fr(n=r[c]))i+=n;else{if(t=void 0!==n.precision,!(n=Pr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,u=0;u<e.length;u++)switch(o=e.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,$r(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,$r(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=mr(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!$r(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$r(a)?String(n.arg):Wr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=Vr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=wr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Hr(n.arg,n.width,n.padRight)),i+=n.arg||"",f+=1}return i}var Rr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Zr(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Mr(r){var t,e,n,o;for(e=[],o=0,n=Rr.exec(r);n;)(t=r.slice(o,Rr.lastIndex-n[0].length)).length&&e.push(t),e.push(Zr(n)),o=Rr.lastIndex,n=Rr.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function Yr(r){return"string"==typeof r}function Xr(r){var t,e;if(!Yr(r))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[Mr(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return Cr.apply(null,t)}var zr=Object.prototype,qr=zr.toString,Br=zr.__defineGetter__,Dr=zr.__defineSetter__,Jr=zr.__lookupGetter__,Kr=zr.__lookupSetter__,Qr=function(){try{return dr({},"x",{}),!0}catch(r){return!1}}()?gr:function(r,t,e){var n,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===qr.call(r))throw new TypeError(Xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===qr.call(e))throw new TypeError(Xr("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Jr.call(r,t)||Kr.call(r,t)?(n=r.__proto__,r.__proto__=zr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,i="set"in e,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Br&&Br.call(r,t,e.get),i&&Dr&&Dr.call(r,t,e.set),r};function rt(r,t,e){Qr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var tt,et,nt,ot="function"==typeof Float64Array,at="function"==typeof Float64Array?Float64Array:null,it="function"==typeof Float64Array?Float64Array:void 0;tt=function(){var r,t,e;if("function"!=typeof at)return!1;try{t=new at([1,3.14,-3.14,NaN]),e=t,r=(ot&&e instanceof Float64Array||"[object Float64Array]"===i(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?it:function(){throw new Error("not implemented")},!0===U?(et=1,nt=0):(et=0,nt=1);var ft={HIGH:et,LOW:nt},ct=new tt(1),ut=new p(ct.buffer),lt=ft.HIGH,pt=ft.LOW;function st(r,t,e,n){return ct[0]=r,t[n]=ut[lt],t[n+e]=ut[pt],t}function yt(r){return st(r,[0,0],1,0)}rt(yt,"assign",st);var dt=[0,0];function gt(r,t,e,n){return function(r){return r!=r}(r)||yr(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}rt((function(r){return gt(r,[0,0],1,0)}),"assign",gt);var ht,vt,wt,bt="function"==typeof Float64Array,At="function"==typeof Float64Array?Float64Array:null,mt="function"==typeof Float64Array?Float64Array:void 0;ht=function(){var r,t,e;if("function"!=typeof At)return!1;try{t=new At([1,3.14,-3.14,NaN]),e=t,r=(bt&&e instanceof Float64Array||"[object Float64Array]"===i(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?mt:function(){throw new Error("not implemented")},!0===U?(vt=1,wt=0):(vt=0,wt=1);var Ft={HIGH:vt,LOW:wt},Et=new ht(1),Nt=new p(Et.buffer),It=Ft.HIGH,_t=Ft.LOW;function Ut(r,t,e,n){return Et[0]=r,t[n]=Nt[It],t[n+e]=Nt[_t],t}function jt(r){return Ut(r,[0,0],1,0)}rt(jt,"assign",Ut);var St=[0,0],Tt=[0,0];function kt(r,t){var e,n,o;return 0===t||0===r||(o=r)!=o||yr(r)?r:(gt(r,St,1,0),t+=St[1],t+=function(r){var t=k(r);return(t=(t&R)>>>20)-1023|0}(r=St[0]),t<-1074?function(r,t){var e,n;return yt.assign(r,dt,1,0),e=dt[0],e&=2147483647,n=k(t),ir(e|=n&=2147483648,dt[1])}(0,r):t>1023?r<0?lr:cr:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,jt.assign(r,Tt,1,0),e=Tt[0],e&=2148532223,n*ir(e|=t+1023<<20,Tt[1])))}function xt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var Ot=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Vt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Gt=16777216,Ht=5.960464477539063e-8,Wt=xt(20),$t=xt(20),Lt=xt(20),Pt=xt(20);function Ct(r,t,e,n,o,a,i,f,c){var u,l,p,s,y,d,g,h,v;for(s=a,v=n[e],h=e,y=0;h>0;y++)l=Ht*v|0,Pt[y]=v-Gt*l|0,v=n[h-1]+l,h-=1;if(v=kt(v,o),v-=8*fr(.125*v),v-=g=0|v,p=0,o>0?(g+=y=Pt[e-1]>>24-o,Pt[e-1]-=y<<24-o,p=Pt[e-1]>>23-o):0===o?p=Pt[e-1]>>23:v>=.5&&(p=2),p>0){for(g+=1,u=0,y=0;y<e;y++)h=Pt[y],0===u?0!==h&&(u=1,Pt[y]=16777216-h):Pt[y]=16777215-h;if(o>0)switch(o){case 1:Pt[e-1]&=8388607;break;case 2:Pt[e-1]&=4194303}2===p&&(v=1-v,0!==u&&(v-=kt(1,o)))}if(0===v){for(h=0,y=e-1;y>=a;y--)h|=Pt[y];if(0===h){for(d=1;0===Pt[a-d];d++);for(y=e+1;y<=e+d;y++){for(c[f+y]=Ot[i+y],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(y-h)];n[y]=l}return Ct(r,t,e+=d,n,o,a,i,f,c)}}if(0===v)for(e-=1,o-=24;0===Pt[e];)e-=1,o-=24;else(v=kt(v,-o))>=Gt?(l=Ht*v|0,Pt[e]=v-Gt*l|0,o+=24,Pt[e+=1]=l):Pt[e]=0|v;for(l=kt(1,o),y=e;y>=0;y--)n[y]=l*Pt[y],l*=Ht;for(y=e;y>=0;y--){for(l=0,d=0;d<=s&&d<=e-y;d++)l+=Vt[d]*n[y+d];Lt[e-y]=l}for(l=0,y=e;y>=0;y--)l+=Lt[y];for(t[0]=0===p?l:-l,l=Lt[0]-l,y=1;y<=e;y++)l+=Lt[y];return t[1]=0===p?l:-l,7&g}function Rt(r,t,e,n){var o,a,i,f,c,u,l;for((a=(e-3)/24|0)<0&&(a=0),f=e-24*(a+1),u=a-(i=n-1),l=i+4,c=0;c<=l;c++)Wt[c]=u<0?0:Ot[u],u+=1;for(c=0;c<=4;c++){for(o=0,u=0;u<=i;u++)o+=r[u]*Wt[i+(c-u)];$t[c]=o}return Ct(r,t,4,$t,f,4,a,i,Wt)}var Zt=Math.round;function Mt(r,t,e){var n,o,a,i,f;return a=r-1.5707963267341256*(n=Zt(.6366197723675814*r)),i=6077100506506192e-26*n,f=t>>20|0,e[0]=a-i,f-(k(e[0])>>20&2047)>16&&(i=20222662487959506e-37*n-((o=a)-(a=o-(i=6077100506303966e-26*n))-i),e[0]=a-i,f-(k(e[0])>>20&2047)>49&&(i=84784276603689e-45*n-((o=a)-(a=o-(i=20222662487111665e-37*n))-i),e[0]=a-i)),e[1]=a-e[0]-i,n}var Yt=1.5707963267341256,Xt=6077100506506192e-26,zt=2*Xt,qt=3*Xt,Bt=4*Xt,Dt=[0,0,0],Jt=[0,0];function Kt(r,t){var e,n,o,a,i,f,c;if((o=2147483647&k(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Mt(r,o,t):o<=1073928572?r>0?(c=r-Yt,t[0]=c-Xt,t[1]=c-t[0]-Xt,1):(c=r+Yt,t[0]=c+Xt,t[1]=c-t[0]+Xt,-1):r>0?(c=r-2*Yt,t[0]=c-zt,t[1]=c-t[0]-zt,2):(c=r+2*Yt,t[0]=c+zt,t[1]=c-t[0]+zt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Mt(r,o,t):r>0?(c=r-3*Yt,t[0]=c-qt,t[1]=c-t[0]-qt,3):(c=r+3*Yt,t[0]=c+qt,t[1]=c-t[0]+qt,-3):1075388923===o?Mt(r,o,t):r>0?(c=r-4*Yt,t[0]=c-Bt,t[1]=c-t[0]-Bt,4):(c=r+4*Yt,t[0]=c+Bt,t[1]=c-t[0]+Bt,-4);if(o<1094263291)return Mt(r,o,t);if(o>=R)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return D[0]=r,J[B]}(r),c=ir(o-((n=(o>>20)-1046)<<20|0),e),i=0;i<2;i++)Dt[i]=0|c,c=16777216*(c-Dt[i]);for(Dt[2]=c,a=3;0===Dt[a-1];)a-=1;return f=Rt(Dt,Jt,n,a),r<0?(t[0]=-Jt[0],t[1]=-Jt[1],-f):(t[0]=Jt[0],t[1]=Jt[1],f)}var Qt=[0,0];return function(r){return 1/function(r){var t,e;return t=k(r),(t&=2147483647)<=1072243195?t<1044381696?r:P(r,0,1):t>=2146435072?NaN:(e=Kt(r,Qt),P(Qt[0],Qt[1],1-((1&e)<<1)))}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).cot=t();
//# sourceMappingURL=index.js.map
