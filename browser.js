// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,c,f;if(null==r)return n.call(r);i=r[a],f=a,e=null!=(c=r)&&t.call(c,f);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)},c="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,n;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(c&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?u:function(){throw new Error("not implemented")};var s,l=r,p="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,e,n;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),n=e,r=(p&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var d,h=s,v="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),n=e,r=(v&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=d,_="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var I,S={uint16:m,uint8:A};(I=new S.uint16(1))[0]=4660;var k=52===new S.uint8(I.buffer)[0],x=!0===k?1:0,F=new h(1),j=new l(F.buffer);function N(r){return F[0]=r,j[x]}var T=!0===k?0:1,O=new h(1),V=new l(O.buffer);function $(r,e){return O[0]=r,V[T]=e>>>0,O[0]}function G(r,e,n){var t,i,a,o,c,f,u,s,l;return(i=2147483647&(t=N(r))|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),u=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((c=l*r)*(o+u)+e),s=r+(o+=.3333333333333341*c),i>=1072010280?(1-(t>>30&2))*((u=n)-2*(r-(s*s/(s+u)-o))):1===n?s:(u=o-((l=$(s,0))-r),(f=$(a=-1/s,0))+a*((c=1+f*l)+f*u))}var H,W,C=2147483647,L=2146435072,P=!0===k?0:1,R=new h(1),Z=new l(R.buffer);!0===k?(H=1,W=0):(H=0,W=1);var M={HIGH:H,LOW:W},X=new h(1),Y=new l(X.buffer),z=M.HIGH,q=M.LOW;function B(r,e){return Y[z]=r,Y[q]=e,X[0]}var D=Math.floor,J=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY;function Q(r){return r!=r}function rr(r){return r===J||r===K}var er="function"==typeof Object.defineProperty?Object.defineProperty:null,nr=Object.defineProperty;function tr(r){return"number"==typeof r}function ir(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function ar(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+ir(i):ir(i)+r,t&&(r="-"+r)),r}var or=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function fr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!tr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=ar(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=ar(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===cr.call(r.specifier)?cr.call(n):or.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ur(r){return"string"==typeof r}var sr=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,yr=String.prototype.replace,gr=/e\+(\d)$/,dr=/e-(\d)$/,hr=/^(\d+)$/,vr=/^(\d+)e/,wr=/\.0$/,br=/\.0*e/,mr=/(\..*[^0])0*e/;function Ar(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!tr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":sr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=yr.call(n,mr,"$1e"),n=yr.call(n,br,"e"),n=yr.call(n,wr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=yr.call(n,gr,"e+0$1"),n=yr.call(n,dr,"e-0$1"),r.alternate&&(n=yr.call(n,hr,"$1."),n=yr.call(n,vr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===pr.call(r.specifier)?pr.call(n):lr.call(n)}function _r(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Er(r,e,n){var t=e-r.length;return t<0?r:r=n?r+_r(t):_r(t)+r}var Ur=String.fromCharCode,Ir=isNaN,Sr=Array.isArray;function kr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function xr(r){var e,n,t,i,a,o,c,f,u;if(!Sr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(ur(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=kr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,u=0;u<n.length;u++)switch(i=n.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Ir(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Ir(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=fr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Ir(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ir(a)?String(t.arg):Ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Ar(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ar(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Er(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Nr(r){var e,n,t,i;for(n=[],i=0,t=Fr.exec(r);t;)(e=r.slice(i,Fr.lastIndex-t[0].length)).length&&n.push(e),n.push(jr(t)),i=Fr.lastIndex,t=Fr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Tr(r){return"string"==typeof r}function Or(r){var e,n,t;if(!Tr(r))throw new TypeError(Or("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Nr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return xr.apply(null,n)}var Vr,$r,Gr=Object.prototype,Hr=Gr.toString,Wr=Gr.__defineGetter__,Cr=Gr.__defineSetter__,Lr=Gr.__lookupGetter__,Pr=Gr.__lookupSetter__,Rr=function(){try{return er({},"x",{}),!0}catch(r){return!1}}()?nr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Hr.call(r))throw new TypeError(Or("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Hr.call(n))throw new TypeError(Or("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Lr.call(r,e)||Pr.call(r,e)?(t=r.__proto__,r.__proto__=Gr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Wr&&Wr.call(r,e,n.get),o&&Cr&&Cr.call(r,e,n.set),r};function Zr(r,e,n){Rr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Vr=1,$r=0):(Vr=0,$r=1);var Mr={HIGH:Vr,LOW:$r},Xr=new h(1),Yr=new l(Xr.buffer),zr=Mr.HIGH,qr=Mr.LOW;function Br(r,e,n,t){return Xr[0]=r,e[t]=Yr[zr],e[t+n]=Yr[qr],e}function Dr(r){return Br(r,[0,0],1,0)}Zr(Dr,"assign",Br);var Jr=[0,0];function Kr(r,e,n,t){return Q(r)||rr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Zr((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=[0,0],re=[0,0];function ee(r,e){var n,t,i,a,o,c;return 0===e||0===r||Q(r)||rr(r)?r:(Kr(r,Qr,1,0),e+=Qr[1],e+=function(r){var e=N(r);return(e=(e&L)>>>20)-1023|0}(r=Qr[0]),e<-1074?(i=0,a=r,Dr.assign(i,Jr,1,0),o=Jr[0],o&=C,c=N(a),B(o|=c&=2147483648,Jr[1])):e>1023?r<0?K:J:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Dr.assign(r,re,1,0),n=re[0],n&=2148532223,t*B(n|=e+1023<<20,re[1])))}function ne(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ae=16777216,oe=5.960464477539063e-8,ce=ne(20),fe=ne(20),ue=ne(20),se=ne(20);function le(r,e,n,t,i,a,o,c,f){var u,s,l,p,y,g,d,h,v;for(p=a,v=t[n],h=n,y=0;h>0;y++)s=oe*v|0,se[y]=v-ae*s|0,v=t[h-1]+s,h-=1;if(v=ee(v,i),v-=8*D(.125*v),v-=d=0|v,l=0,i>0?(d+=y=se[n-1]>>24-i,se[n-1]-=y<<24-i,l=se[n-1]>>23-i):0===i?l=se[n-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<n;y++)h=se[y],0===u?0!==h&&(u=1,se[y]=16777216-h):se[y]=16777215-h;if(i>0)switch(i){case 1:se[n-1]&=8388607;break;case 2:se[n-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=ee(1,i)))}if(0===v){for(h=0,y=n-1;y>=a;y--)h|=se[y];if(0===h){for(g=1;0===se[a-g];g++);for(y=n+1;y<=n+g;y++){for(f[c+y]=te[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];t[y]=s}return le(r,e,n+=g,t,i,a,o,c,f)}}if(0===v)for(n-=1,i-=24;0===se[n];)n-=1,i-=24;else(v=ee(v,-i))>=ae?(s=oe*v|0,se[n]=v-ae*s|0,i+=24,se[n+=1]=s):se[n]=0|v;for(s=ee(1,i),y=n;y>=0;y--)t[y]=s*se[y],s*=oe;for(y=n;y>=0;y--){for(s=0,g=0;g<=p&&g<=n-y;g++)s+=ie[g]*t[y+g];ue[n-y]=s}for(s=0,y=n;y>=0;y--)s+=ue[y];for(e[0]=0===l?s:-s,s=ue[0]-s,y=1;y<=n;y++)s+=ue[y];return e[1]=0===l?s:-s,7&d}function pe(r,e,n,t){var i,a,o,c,f,u,s;for((a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),u=a-(o=t-1),s=o+4,f=0;f<=s;f++)ce[f]=u<0?0:te[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ce[o+(f-u)];fe[f]=i}return le(r,e,4,fe,c,4,a,o,ce)}var ye=Math.round;function ge(r,e,n){var t,i,a,o,c;return a=r-1.5707963267341256*(t=ye(.6366197723675814*r)),o=6077100506506192e-26*t,c=e>>20|0,n[0]=a-o,c-(N(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,c-(N(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var de=1.5707963267341256,he=6077100506506192e-26,ve=2*he,we=3*he,be=4*he,me=[0,0,0],Ae=[0,0];function _e(r,e){var n,t,i,a,o,c,f;if((i=N(r)&C|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ge(r,i,e):i<=1073928572?r>0?(f=r-de,e[0]=f-he,e[1]=f-e[0]-he,1):(f=r+de,e[0]=f+he,e[1]=f-e[0]+he,-1):r>0?(f=r-2*de,e[0]=f-ve,e[1]=f-e[0]-ve,2):(f=r+2*de,e[0]=f+ve,e[1]=f-e[0]+ve,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ge(r,i,e):r>0?(f=r-3*de,e[0]=f-we,e[1]=f-e[0]-we,3):(f=r+3*de,e[0]=f+we,e[1]=f-e[0]+we,-3):1075388923===i?ge(r,i,e):r>0?(f=r-4*de,e[0]=f-be,e[1]=f-e[0]-be,4):(f=r+4*de,e[0]=f+be,e[1]=f-e[0]+be,-4);if(i<1094263291)return ge(r,i,e);if(i>=L)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return R[0]=r,Z[P]}(r),f=B(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)me[o]=0|f,f=16777216*(f-me[o]);for(me[2]=f,a=3;0===me[a-1];)a-=1;return c=pe(me,Ae,t,a),r<0?(e[0]=-Ae[0],e[1]=-Ae[1],-c):(e[0]=Ae[0],e[1]=Ae[1],c)}var Ee=[0,0];return function(r){return 1/function(r){var e,n;return e=N(r),(e&=2147483647)<=1072243195?e<1044381696?r:G(r,0,1):e>=2146435072?NaN:(n=_e(r,Ee),G(Ee[0],Ee[1],1-((1&n)<<1)))}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cot=e();
//# sourceMappingURL=browser.js.map
